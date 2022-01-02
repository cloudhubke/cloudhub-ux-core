import React from 'react';
import { withStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import RefreshIcon from '@mui/icons-material/Cached';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { CSVLink } from 'react-csv';
import Input from '../Input';
import Button from '../Button';
import { useDebounce } from '../customhooks';
import Block from '../Block';
import Text from '../Text';
import ThemeContext from '../theme/ThemeContext';
import useGridStore from './store/useGridStore';
import ExportColumnSelector from './ExportColumnSelector';

const styles = {
  buttonStyle: {
    fontWeight: 500,
    textTransform: 'capitalize',
    fontSize: 12,
  },
};

const TableHeaderBar = ({
  permissions,
  title,
  onAdd,
  onRefresh,
  onSearchChange,
  onPrint,
  url,
  exportHeaders,
  defaultExport,
}) => {
  const { sizes } = React.useContext(ThemeContext);
  const [exportlist, setexportlist] = React.useState([]);
  const [exporting, setexporting] = React.useState(false);
  const [headers, setHeaders] = React.useState([]);
  const [text, setText] = React.useState('');
  const debouncedText = useDebounce(text, 500);

  const csvLinkElem = React.useRef();

  const { selection } = useGridStore(
    (state) =>
      state[url] || {
        selection: {},
      }
  );

  React.useEffect(() => {
    onSearchChange(debouncedText);
  }, [debouncedText]);

  const { allowprint, allowadd } = permissions;

  return (
    <Block row paper middle margin={sizes.margin} padding={sizes.padding} wrap>
      <Block>
        <Text h6>{title}</Text>
      </Block>
      <Block flex={false} row wrap middle>
        <Input
          style={{ flex: 1, minWidth: 200 }}
          icon="search"
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
          showError={false}
        />

        <Button onClick={onAdd} style={styles.buttonStyle} disabled={!allowadd}>
          <AddIcon /> Add
        </Button>
        <Button onClick={onRefresh} style={styles.buttonStyle}>
          <RefreshIcon /> Refresh
        </Button>
        <Button
          onClick={onPrint}
          style={styles.buttonStyle}
          disabled={!allowprint}
        >
          <PrintIcon /> Print
        </Button>

        {Array.isArray(exportHeaders) && exportHeaders.length > 0 && (
          <CSVLink
            data={exportlist}
            headers={headers}
            asyncOnClick
            ref={csvLinkElem}
          >
            <Button
              onClick={(event) => {
                event.preventDefault();
                setexporting(true);
                setexportlist(
                  Object.keys(selection || {}).map((key) => selection[key])
                );
              }}
            >
              <ListAltIcon /> Export
            </Button>
          </CSVLink>
        )}
        <ExportColumnSelector
          exportHeaders={exportHeaders}
          defaultExport={defaultExport}
          headers={headers}
          setHeaders={setHeaders}
          open={exporting}
          onCancel={() => setexporting(false)}
          csvLinkElem={csvLinkElem}
        />
      </Block>
    </Block>
  );
};

TableHeaderBar.defaultProps = {
  title: '',
  onAdd: () => {},
  onRefresh: () => {},
  onSearchChange: () => {},
  onPrint: () => {},
  permissions: {
    allowadd: true,
    allowedit: true,
    allowdelete: true,
    allowprint: true,
  },
};

export default withStyles(styles)(TableHeaderBar);
