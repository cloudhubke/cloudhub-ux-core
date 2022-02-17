import React from 'react';
import { CSVLink } from 'react-csv';
import Block from '../Block';
import { useDebounce } from '../customhooks';
import TableHeaderBar from './TableHeaderBar';
import ExportColumnSelector from './ExportColumnSelector';
import useGridStore from './store/useGridStore';

const Header = ({
  header,
  permissions,
  onSearch,
  onSetSearchText,
  queryString,
  url,
  exportHeaders,
  defaultExport,
  ...props
}) => {
  const csvLinkElem = React.useRef();
  const [exportlist, setexportlist] = React.useState([]);
  const [exporting, setexporting] = React.useState(false);
  const [headers, setHeaders] = React.useState([]);

  const [text, setText] = React.useState('');
  const debouncedText = useDebounce(text, 500);

  const { selection, data } = useGridStore(
    (state) =>
      state[url] || {
        selection: {},
      }
  );

  const onExportExcel = (event) => {
    let exportData = [];
    if (Object.keys(selection).length > 0) {
      exportData = Object.keys(selection || {}).map((key) => selection[key]);
    } else {
      exportData = data;
    }
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }

    setexporting(true);
    setexportlist(exportData);
  };

  React.useEffect(() => {
    onSearch(debouncedText);
  }, [debouncedText]);

  return (
    <Block flex={false}>
      {header ? (
        header({
          ...props,
          ...permissions,
          queryString,
          searchText: debouncedText,
          onSearch: (text) => setText(text),
          onExportExcel: (event) => {
            onExportExcel(event);
          },
        })
      ) : (
        <TableHeaderBar
          permissions={permissions}
          title={props.title}
          onSearchChange={onSearch}
          onAdd={props.onAdd}
          onRefresh={props.onRefresh}
          onPrint={props.onPrint}
          onExport={props.onExport}
          url={url}
          exportHeaders={props.exportHeaders}
          defaultExport={props.defaultExport}
          onExportExcel={onExportExcel}
        />
      )}

      {Array.isArray(exportHeaders) && exportHeaders.length > 0 && (
        <CSVLink
          data={exportlist}
          headers={headers}
          asyncOnClick
          ref={csvLinkElem}
        />
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
  );
};

export default Header;
