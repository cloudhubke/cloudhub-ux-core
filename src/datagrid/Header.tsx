import React from 'react';
import { CSVLink } from 'react-csv';
import Block from '../Block';
import { useDebounce } from '../customhooks';
import TableHeaderBar from './TableHeaderBar';
import ExportColumnSelector from './ExportColumnSelector';
import useGridStore from './store/useGridStore';

const Header: React.FC<{
  [x: string]: any;
  header?: any;
  permissions?: any;
  onSearch?: any;
  onSetSearchText?: any;
  queryString?: any;
  saveActionButton?: any;
  url?: any;
  exportHeaders?: Array<{
    label: string;
    key: string;
  }>;
  defaultExport?: any;
  columns: any[];
  formatExportRow?: (item: any) => any;
}> = ({
  header,
  permissions,
  onSearch,
  onSetSearchText,
  queryString,
  saveActionButton,
  url,
  exportHeaders,
  defaultExport,
  formatExportRow = (item) => ({}),
  columns = [],
  ...props
}) => {
  const csvLinkElem = React.useRef();
  const [exportlist, setexportlist] = React.useState<any[]>([]);
  const [exporting, setexporting] = React.useState<boolean>(false);
  const [headers, setHeaders] = React.useState<any[]>(
    columns.map((c) => ({
      label: c.title || c.name,
      key: c.name,
    }))
  );

  const [text, setText] = React.useState('');
  const debouncedText = useDebounce(text, 500);

  const { selection, data } = useGridStore(
    (state) =>
      state[url] || {
        selection: {},
      }
  );

  const onExportExcel = (event) => {
    let exportData: any[] = [];
    if (Object.keys(selection).length > 0) {
      exportData = Object.keys(selection || {}).map((key) => selection[key]);
    } else {
      exportData = data;
    }

    exportData = (exportData || []).map((item) => ({
      ...item,
      ...formatExportRow(item),
    }));

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
          defaultExport={defaultExport}
          onExportExcel={onExportExcel}
          saveActionButton={saveActionButton}
        />
      )}

      {Array.isArray(exportHeaders || headers) &&
        (exportHeaders || headers).length > 0 && (
          <CSVLink
            data={exportlist}
            headers={exportHeaders || headers}
            asyncOnClick
            ref={csvLinkElem}
          />
        )}
      <ExportColumnSelector
        exportHeaders={exportHeaders || headers}
        defaultExport={defaultExport}
        open={exporting}
        onCancel={() => setexporting(false)}
        csvLinkElem={csvLinkElem}
        {...{
          headers,
          setHeaders,
        }}
      />
    </Block>
  );
};

export default Header;
