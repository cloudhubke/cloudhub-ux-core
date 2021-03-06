import React, { Component, Fragment } from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import has from 'lodash/has';

import Upload from 'antd/lib/upload';
import Add from '@mui/icons-material/Add';

import { makeStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

import Fab from '@mui/material/Fab';

import 'antd/lib/upload/style/index.css';

import Block from '../../Block';
import resizer from './resizer';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const getStyles = ({ cardStyles }) => {
  const useStyles = makeStyles({
    imagesList: {
      '& .image-uploader > .ant-upload-list > .ant-upload.ant-upload-select-picture-card':
        {
          width: '128px',
          height: '128px',
          ...cardStyles,
        },
      '& .image-uploader > .ant-upload-list > .ant-upload-list-picture-card-container':
        {
          width: '128px',
          height: '128px',
          ...cardStyles,
        },
      '& .ant-upload-list-picture-card .ant-upload-list-item': {
        width: '128px',
        height: '128px',
        ...cardStyles,
      },
      '& .ant-upload-list-item-actions > .ant-btn': {
        backgroundColor: 'transparent',
      },
    },
  });

  return {
    useStyles,
  };
};

const ImagesCard = ({ cardStyles, children, ...otherProps }) => {
  const classes = getStyles({ cardStyles }).useStyles();

  return (
    <Block row wrap className={classes.imagesList} {...otherProps}>
      {children}
    </Block>
  );
};

class ImagesUpload extends Component {
  static defaultProps = {
    value: null,
    limit: 1,
    input: {
      value: null,
      onChange: () => {},
    },
    meta: {},
    onChange: () => {},
    onRemove: () => {},
    axiosinstance: () => axios.create({}),
    maxWidth: 1024,
    maxSize: 512,
    cardStyles: {
      width: 150,
      height: 150,
    },
    url: '/fileapi/upload/image',
    example: null,
    flex: false,
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isMounted: true,
      previewVisible: false,
      previewImage: '',
      fileList: [],
      error: '',
      isuploading: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let images = [];
    const value = nextProps.input.value || nextProps.value || {};

    if (!isEmpty(value)) {
      if (Array.isArray(value)) {
        images = value;
      } else {
        images = [value];
      }
      return {
        ...prevState,
        fileList: images.map((item, index) => ({
          ...item,
          uid: item.uid || index,
          name: item.name || 'xxx.png',
          status: item.status || 'done',
          url: item.Location || item.url || '',
        })),
      };
    }
    return {
      ...prevState,
      isMounted: true,
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  }

  beforeUpload = (file) => {
    const isImage = [
      'image/jpeg',
      'image/png',
      'image/svg',
      'image/svg+xml',
    ].includes(file.type);

    if (!isImage) {
      this.setState({ error: 'You can only upload JPG/PNG file!' });
    }
    return isImage;
  };

  customRequest = ({
    action,
    data,
    file,
    filename,
    headers,
    onError,
    onProgress,
    onSuccess,
    withCredentials,
  }) => {
    const { maxWidth, maxSize, axiosinstance } = this.props;
    // EXAMPLE: post form-data with 'axios'
    const formData = new FormData();
    if (data) {
      Object.keys(data).map((key) => {
        formData.append(key, data[key]);
      });
    }
    const uploadFile = async () => {
      if (maxSize) {
        if (file.size / 1024 > maxSize) {
          // Get the resized file

          const blob = await resizer(file, maxWidth);
          formData.append(filename, blob, blob.name);
        } else {
          formData.append(filename, file);
        }
      } else {
        formData.append(filename, file);
      }

      axiosinstance()
        .post(action, formData, {
          withCredentials,
          headers,
          onUploadProgress: ({ total, loaded }) => {
            onProgress(
              { percent: Math.round((loaded / total) * 100).toFixed(2) },
              file
            );
          },
        })
        .then(({ data: response }) => {
          onSuccess(response, file);
        })
        .catch(onError);
    };

    uploadFile();

    return {
      abort() {
        console.log('upload progress is aborted.');
      },
    };
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file) => {
    this.setState({
      previewImage: file.Location || file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ file, fileList }) => {
    const files = [...(fileList || [])]
      .map((item, index) => {
        if (item.response) {
          const fl = item.response[0] || {};
          return {
            ...fl,
            uid:
              (fl.fd || '').replace('images', '').replace(/\//g, '') ||
              new Date().getTime(),
            status: item.status || 'done',
          };
        }
        return item;
      })
      .map((item) => ({ ...item, error: null }));

    const isuploading = files.filter((f) => !has(f, 'Location')).length > 0;

    this.setState(
      {
        fileList: files,
        isuploading,
      },
      () => {
        if (this.props.limit === 1) {
          this.props.input.onChange(files[0]);
          this.props.onChange(files[0]);
        } else {
          this.props.input.onChange(files);
          this.props.onChange(files);
        }
      }
    );
  };

  removeFile = (file) => {
    const ind = this.state.fileList.findIndex((item) => item.uid === file.uid);
    const filelist = [...this.state.fileList];
    filelist.splice(ind, 1);

    this.setState({ fileList: filelist, isuploading: false });
    if (!filelist.length && this.props.limit === 1) {
      this.props.input.onChange({});
      this.props.onChange({});
    } else {
      this.props.input.onChange(filelist);
      this.props.onChange(filelist);
    }
  };

  handleRemove = (file) => {
    const ind = this.state.fileList.findIndex((item) => item.url === file.url);
    const filelist = [...this.state.fileList];
    filelist.splice(ind, 1);

    this.setState({ fileList: filelist, isuploading: false });
    if (!filelist.length && this.props.limit === 1) {
      this.props.input.onChange({});
      this.props.onChange({});
    } else {
      this.props.input.onChange(filelist);
      this.props.onChange(filelist);
    }
    this.props.onRemove(file);
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const {
      limit,
      url,
      example,
      meta,
      disabled,
      onRemove,
      maxWidth,
      maxSize,
      axiosinstance,
      ...rest
    } = this.props;
    const uploadButton = (
      <div
        style={{
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {example && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: 'hidden',
            }}
          >
            <img
              alt="example"
              src={example}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        )}

        <div style={{ color: '#FF0000', zIndex: 1 }}>
          <Fab variant="extended" style={{ textTransform: 'none' }}>
            <Add />
            {fileList.length > 0 ? 'Upload more' : 'Upload'}
          </Fab>
        </div>
      </div>
    );

    return (
      <Fragment>
        <ImagesCard {...rest}>
          <Upload
            accept="image/*"
            action={url}
            listType="picture-card"
            className="image-uploader"
            fileList={fileList}
            multiple={limit > 1}
            beforeUpload={this.beforeUpload}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            onRemove={this.handleRemove}
            customRequest={this.customRequest}
            disabled={disabled}
            ref={(node) => {
              this.uploader = node;
            }}
          >
            {fileList.length >= limit ? null : uploadButton}
          </Upload>
          <Dialog
            TransitionComponent={Transition}
            maxWidth="lg"
            open={previewVisible}
            footer={null}
            onClose={this.handleCancel}
            style={{ maxHeight: 1000 }}
          >
            <div style={{ overflowX: 'auto' }}>
              <img
                alt="preview"
                style={{
                  height: '100%',
                  objectFit: 'cover',
                }}
                src={previewImage}
              />
            </div>
          </Dialog>

          {/* {this.state.isuploading && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,21,41, 0.3)',
              }}
            >
              <CircularProgress />
            </div>
          )} */}
        </ImagesCard>
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
        {this.state.error && <div className="error">{this.state.error}</div>}
      </Fragment>
    );
  }
}

export default ImagesUpload;
