import React from 'react';
import Image from '@mui/icons-material/Image';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';
import PictureAsPdf from '@mui/icons-material/PictureAsPdf';
import ThemeContext from '../theme/ThemeContext';

const FileIcon = ({ fd }) => {
  let fileType = `${fd}`.split('.').pop();
  fileType = fileType.toLowerCase();
  const { colors } = React.useContext(ThemeContext);

  switch (fileType) {
    case 'pdf':
      return (
        <PictureAsPdf
          style={{
            color: colors.googleColor,
          }}
        />
      );
    case 'jpg':
      return (
        <Image
          style={{
            color: colors.instagramColor,
          }}
        />
      );
    case 'png':
      return (
        <Image
          style={{
            color: colors.instagramColor,
          }}
        />
      );
    case 'svg':
      return (
        <Image
          style={{
            color: colors.instagramColor,
          }}
        />
      );
    default:
      return <InsertDriveFile edge="start" />;
  }
};

export default FileIcon;
