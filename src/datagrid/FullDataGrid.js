import React from 'react';
import {
  SelectionState,
  PagingState,
  SortingState,
  GroupingState,
  FilteringState,
  IntegratedFiltering,
  IntegratedGrouping,
  IntegratedPaging,
  IntegratedSorting,
  IntegratedSelection,
} from '@cloudhub-dx/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel,
  TableGroupRow,
  GroupingPanel,
  DragDropProvider,
  Toolbar,
  TableColumnResizing,
  TableColumnReordering,
  TableFilterRow,
  TableColumnVisibility,
  ColumnChooser,
} from '@cloudhub-dx/dx-react-grid-material-ui';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import { withStyles } from '@mui/styles';
import { red } from '@mui/material/colors';
import RowActions from './RowActions';
import Header from './Header';

import sizes from '../theme/Sizes';
import './grid.css';

const styleSheet = () => ({
  commandButton: {
    minWidth: '40px',
  },
  lookupEditCell: {
    verticalAlign: 'middle',
    paddingRight: sizes.padding,
    '& ~ $lookupEditCell': {
      paddingLeft: sizes.padding,
    },
  },
  dialog: {
    width: 'calc(100% - 16px)',
  },
  editDialog: {
    minWidth: '800px',
    height: '600px',
  },

  // ===================================================== Header ========================

  headerBar: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 20px 10px 20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  headerInputs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexBasis: '50%',
    marginLeft: 10,
  },
  headerButton: {
    fontWeight: 500,
    textTransform: 'capitalize',
    fontSize: 12,
    marginLeft: 5,
  },
  filterBar: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  filterField: { width: 200, marginLeft: 10 },
});

const staticColumns = [{ name: 'actions', title: 'Actions', width: 200 }];

const FullDataGrid = React.forwardRef(
  ({ keyExtractor, permissions, ...props }, ref) => {
    const [columns] = React.useState([...props.columns, ...staticColumns]);
    const [defaultColumnWidths] = React.useState([
      { columnName: 'counter', width: 70 },
      { columnName: 'actions', width: 150 },
      ...props.columnWidths,
    ]);
    const [sorting, setSorting] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(20);
    const [allowedPageSizes] = React.useState([5, 10, 20]);
    const [grouping, setGrouping] = React.useState([]);
    const [selection, setSelection] = React.useState([]);
    const [filters, setFilters] = React.useState([]);

    const [searchTerm, setSearchTerm] = React.useState('');
    const [deletingRows, setDeletingRows] = React.useState([]);

    const cellComponent = ({ row: r, column, style }) => {
      const row = { ...r };

      if (column.name === 'actions' && !props.actions) {
        delete row.counter;
        return (
          props.actionsComponent({
            row,
            column,
            onDelete: (row) => setDeletingRows([row]),
            onView: props.onView,
            onEdit: props.onEdit,
          }) || (
            <RowActions
              permissions={permissions}
              row={row}
              column={column}
              onDelete={(row) => setDeletingRows([row])}
              onView={props.onView}
              onEdit={props.onEdit}
            />
          )
        );
      }
      if (column.name === 'counter') {
        return <TableCell>{`${row.counter}`}</TableCell>;
      }
      return props.cellComponent({ row, column, style });
      // return <TableCell>col</TableCell>;
    };

    React.useImperativeHandle(ref, () => ({
      reload: () => {},
      onDeleteSuccess: () => {},
    }));

    const { data, classes, allowColumnResizing, hiddencolumns, rowComponent } =
      props;

    return (
      <Paper className="grid-container">
        <Header
          permissions={permissions}
          onSearch={(text) => setSearchTerm(text)}
          {...props}
        />
        <Grid
          rows={data.map((d, i) => ({ ...d, counter: i + 1 }))}
          columns={columns}
        >
          <SelectionState
            selection={selection}
            onSelectionChange={(selection) => setSelection(selection)}
          />
          <SortingState
            sorting={sorting}
            onSortingChange={(sorting) => setSorting(sorting)}
          />

          <GroupingState
            grouping={grouping}
            onGroupingChange={(grouping) => setGrouping(grouping)}
          />

          <FilteringState
            filters={filters}
            onFiltersChange={(filters) => setFilters(filters)}
          />

          <PagingState
            currentPage={currentPage}
            onCurrentPageChange={(currentPage) => setCurrentPage(currentPage)}
            pageSize={pageSize}
            onPageSizeChange={(size) => setPageSize(size)}
          />

          <IntegratedGrouping />
          <IntegratedFiltering />
          <IntegratedSorting />
          <IntegratedPaging />
          <IntegratedSelection />

          <DragDropProvider />

          <Table
            rowComponent={rowComponent}
            cellComponent={cellComponent}
            allowColumnReordering
          />

          {allowColumnResizing && (
            <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
          )}

          <TableColumnReordering
            defaultOrder={columns.map((column) => column.name)}
          />

          <TableHeaderRow
            showSortingControls
            allowDragging
            allowResizing={allowColumnResizing}
          />

          <TableFilterRow
            cellComponent={(props) => {
              if (
                props.column.name === 'actions' ||
                props.column.name === 'counter'
              ) {
                return <TableCell />;
              }
              return <TableFilterRow.Cell {...props} />;
            }}
          />
          <TableSelection showSelectAll />
          <TableGroupRow />
          <Toolbar />
          {hiddencolumns.length > 0 && (
            <TableColumnVisibility defaultHiddenColumnNames={hiddencolumns} />
          )}
          {hiddencolumns.length > 0 && <ColumnChooser />}
          <GroupingPanel allowDragging />
          <PagingPanel pageSizes={allowedPageSizes} />
        </Grid>

        <Dialog
          open={!!deletingRows.length}
          onClose={() => setDeletingRows([])}
          classes={{ paper: classes.dialog }}
        >
          <DialogTitle>Delete Row</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure to delete the following row?
            </DialogContentText>
            <Grid
              rows={deletingRows}
              columns={props.columns.filter(
                (c) => c.name.toLowerCase() !== 'actions'
              )}
            >
              <Table cellComponent={cellComponent} />
              <TableHeaderRow />
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeletingRows([])} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                props.onDeleteRows([...deletingRows]);
                setDeletingRows([]);
              }}
              style={{ color: red }}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    );
  }
);

const cellComponent = ({ row, column }) => (
  <TableCell>
    {`${typeof row[column.name] === 'undefined' ? '' : row[column.name]}`}
  </TableCell>
);

FullDataGrid.defaultProps = {
  title: 'Table title',
  editTitle: 'Edit Record',
  columns: [],
  columnWidths: [],
  hiddencolumns: [],
  allowColumnResizing: false,
  data: [],
  onEdit: () => {},
  onDelete: () => {},
  onDeleteRows: () => {},
  onChangeSelection: () => {},
  rowComponent: ({ row, ...restProps }) => <Table.Row hover {...restProps} />,
  onSaveRow: () => {},
  onCancelEdit: () => {},
  cellComponent,
  onView: () => {},
  onAdd: () => {},
  onPrint: () => {},
  deletingRows: [],
  editingRow: null,
  header: null,
  permissions: {
    allowadd: true,
    allowedit: true,
    allowdelete: true,
    allowprint: true,
  },
  actionsMenu: null,
};

export default withStyles(styleSheet)(FullDataGrid);
