import React from 'react';
import includes from 'lodash/includes';
import isEqual from 'lodash/isEqual';
import difference from 'lodash/difference';
import axios from 'axios';

import {
  SelectionState,
  PagingState,
  SortingState,
  GroupingState,
  FilteringState,
  IntegratedFiltering,
  IntegratedGrouping,
  IntegratedSorting,
  IntegratedSelection,
  CustomPaging,
  RowDetailState,
  SummaryState,
  CustomSummary,
} from '@cloudhub-dx/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSummaryRow,
  TableSelection,
  PagingPanel,
  TableGroupRow,
  GroupingPanel,
  DragDropProvider,
  TableFilterRow,
  TableColumnResizing,
  TableColumnReordering,
  Toolbar,
  TableColumnVisibility,
  ColumnChooser,
  TableRowDetail,
} from '@cloudhub-dx/dx-react-grid-material-ui';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { withStyles } from '@mui/styles';
import Block from '../Block';
import GridLoading from './GridLoading';
import './grid.css';
import RowActions from './RowActions';
import Header from './Header';
import PagingComponent from './PagingComponent';
import useGridStore from './store/useGridStore';

const styleSheet = () => ({
  gridContainer: {
    '& th': {
      overflow: 'hidden',
      paddingLeft: '5px',
      paddingRight: '5px',
    },
    '& td': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: '5px',
      paddingRight: '5px',
    },
    '& div::-webkit-scrollbar': {
      width: 14,
      height: 14,
    },
    '& div::-webkit-scrollbar-track': {
      background: '#CCC',
      borderTop: '6.5px solid white',
      borderBottom: '6.5px solid white',
    },
    '& div::-webkit-scrollbar-thumb': {
      backgroundColor: '#CCC',
      borderTop: '4px solid white',
      borderBottom: '4px solid white',
    },
    '& div::-webkit-scrollbar-thumb:hover': {
      background: '#666',
    },
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

const counterColumn = [{ name: 'counter', title: '#', width: 70 }];

const staticColumns = [
  { name: 'actions', title: 'Actions', width: 140, align: 'right' },
];

const Root = (props) => <Grid.Root {...props} style={{ flex: 1 }} />;

const RemoteDataGrid = React.forwardRef(
  (
    {
      permissions,
      keyExtractor,
      dataExtractor,
      countExtractor,
      summaryExtractor,
      Graphqlmodel,
      pagingComponent = PagingComponent,
      stickyHeader = false,
      detailComponent,
      saveActionButton,
      limit = 20,
      onRowClick,

      showToolbar = true,
      showFiltering = true,
      summaryItemsExtractor,
      ...props
    },
    ref
  ) => {
    const [columns] = React.useState([
      ...counterColumn,
      ...props.columns,
      ...staticColumns,
    ]);
    const [defaultColumnWidths] = React.useState([
      ...props.columnWidths,
      { columnName: 'counter', width: 50 },
      { columnName: 'actions', width: 150 },
    ]);

    const urlLink = Graphqlmodel ? `${Graphqlmodel.toString()}` : props.url;

    const dispatch = useGridStore((state) => state.dispatch);

    const { data, selection, params, totalCount, summary, loading } =
      useGridStore(
        (state) =>
          state[urlLink] || {
            data: [],
            params: {},
            selection: {},
            totalCount: 0,
            summary: {},
            loading: false,
          }
      );

    const [sorting, setSorting] = React.useState([]);
    const [currentPage, setCurrrentPage] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(params.limit || limit);
    const [allowedPageSizes] = React.useState(
      [pageSize, 10, 50, 200, 500].sort()
    );
    const [grouping, setGrouping] = React.useState([]);

    const [filters, setFilters] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [deletingRows, setDeletingRows] = React.useState([]);
    const [selectedIndexes, setSelectedIndexes] = React.useState([]);

    const changeSelection = (indexes) => {
      const selectedDocs = { ...selection };
      const removedKeys = difference(selectedIndexes, indexes).map((i) =>
        keyExtractor(data[i])
      );

      for (const key of Object.keys(selection)) {
        if (removedKeys.includes(key)) {
          delete selectedDocs[key];
        }
      }

      for (const i of indexes) {
        selectedDocs[keyExtractor(data[i])] = data[i];
      }

      dispatch({
        url: urlLink,
        type: 'update',
        payload: { selection: selectedDocs },
      });

      setSelectedIndexes(indexes);
    };

    React.useEffect(() => {
      props.onChangeSelection(
        Object.keys(selection).map((key) => selection[key])
      );
    }, [selectedIndexes.length]);

    const getQueryParams = () => {
      const queryparams = {
        limit: pageSize,
        skip: pageSize * (currentPage || 0),
      };

      const columnSorting = sorting[0];
      if (columnSorting) {
        const sortingDirectionString =
          columnSorting.direction === 'desc' ? -1 : 1;
        queryparams.sort = {
          [columnSorting.columnName]: sortingDirectionString,
        };
      }

      if (searchTerm !== '') {
        queryparams.filter = searchTerm;
      }
      return { ...props.params, ...queryparams };
    };

    const getSelectedIndexes = (dataArray = data) => {
      const indexes = dataArray
        .map((d, i) => {
          if (Object.keys(selection).includes(keyExtractor(d))) {
            return i;
          }
          return null;
        })
        .filter((i) => i !== null);

      setSelectedIndexes(indexes);
    };

    const loadData = async (reload) => {
      const queryparams = getQueryParams();

      if (isEqual(queryparams, params) && data.length > 0 && !reload) {
        getSelectedIndexes();
        return;
      }

      try {
        dispatch({
          url: urlLink,
          type: 'update',
          payload: {
            params: queryparams,
            loading: true,
          },
        });

        let data = [];
        if (Graphqlmodel) {
          data = await Graphqlmodel()
            .find({ ...queryparams }, ['_document'])
            .toJson();
        } else {
          const { data: axiosdata } = await props
            .axiosinstance()
            .get(`${props.url}`, {
              params: { ...queryparams },
            });
          data = axiosdata;
        }

        const dataArray = dataExtractor(data).map((d, i) => ({
          ...d,
          counter: currentPage * pageSize + (i + 1),
        }));

        // setData(dataArray);

        dispatch({
          url: urlLink,
          type: 'update',
          payload: {
            data: dataArray,
            totalCount: countExtractor(data),
            summary: summaryExtractor(data),
            loading: false,
          },
        });

        getSelectedIndexes(dataArray);
      } catch (error) {
        dispatch({
          url: urlLink,
          type: 'update',
          payload: { loading: false },
        });
      }
    };
    React.useEffect(() => {
      loadData();
    }, [sorting, currentPage, searchTerm, pageSize]);

    const changePageSize = (pageSize) => {
      const count = totalCount || data.length;
      const totalPages = Math.ceil(count / pageSize);
      const currentPage = Math.min(currentPage || 0, totalPages - 1);
      setPageSize(pageSize);
      setCurrrentPage(currentPage);
    };

    const reload = () => {
      loadData(true);
    };

    React.useImperativeHandle(ref, () => ({
      onSave: (row) => {
        const ind = data.findIndex(
          (d) => keyExtractor(d) === keyExtractor(row)
        );
        if (ind === -1) {
          dispatch({
            url: urlLink,
            type: 'update',
            payload: {
              data: [row, ...data].map((d, i) => ({
                ...d,
                counter: currentPage * pageSize + (i + 1),
              })),
            },
          });
        } else {
          dispatch({
            url: urlLink,
            type: 'update',
            payload: {
              data: [...data].map((r, i) => {
                if (keyExtractor(r) === keyExtractor(row)) {
                  return { ...row, counter: currentPage * pageSize + (i + 1) };
                }
                return r;
              }),
            },
          });
        }
      },
      reload,
      onDeleteSuccess: (deletedRows) => {
        const deleted = [...deletedRows].map((r) =>
          typeof r === 'string' ? r : keyExtractor(r)
        );
        dispatch({
          url: urlLink,
          type: 'update',
          payload: {
            data: data.filter((r) => !includes(deleted, keyExtractor(r))),
          },
        });
      },
      getData: () => ({
        data,
        totalCount,
        selection,
      }),
    }));

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
              saveActionButton={saveActionButton}
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

    const getTotalSummaryValues = () => {
      if (typeof summaryItemsExtractor === 'function' && data.length > 0) {
        return summaryItemsExtractor({ data, summary, totalCount }).map(
          (item) => item.value || 0
        );
      }
      return [];
    };

    const { classes, allowColumnResizing, hiddencolumns, rowComponent } = props;

    return (
      <Block style={{ position: 'relative' }}>
        <Header
          permissions={permissions}
          queryString={getQueryParams()}
          onSearch={(text) => setSearchTerm(text)}
          onRefresh={reload}
          saveActionButton={saveActionButton}
          {...props}
        />
        <Block className={classes.gridContainer}>
          <Block
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Grid rows={data} columns={columns} rootComponent={Root}>
              <SelectionState
                selection={selectedIndexes}
                onSelectionChange={changeSelection}
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
                onCurrentPageChange={(page) => setCurrrentPage(page)}
                pageSize={pageSize}
                onPageSizeChange={changePageSize}
              />
              <CustomPaging totalCount={totalCount} />

              {showToolbar && <IntegratedGrouping />}
              {showFiltering && <IntegratedFiltering />}
              <IntegratedSorting />

              <IntegratedSelection />

              <DragDropProvider />

              <Table
                stickyHeader={stickyHeader}
                rowComponent={(props) => {
                  const isSelected = Object.keys(selection).includes(
                    keyExtractor(props.row)
                  );

                  return rowComponent({
                    selected: isSelected,
                    onRowClick,
                    ...props,
                  });
                }}
                cellComponent={cellComponent}
                allowColumnReordering
                style={{ backgroundColor: 'pink' }}
              />

              {allowColumnResizing && (
                <TableColumnResizing
                  defaultColumnWidths={defaultColumnWidths}
                />
              )}

              <TableColumnReordering
                defaultOrder={columns.map((column) => column.name)}
              />
              <TableHeaderRow
                showSortingControls
                allowDragging
                allowResizing={allowColumnResizing}
              />

              <SummaryState
                totalItems={
                  data.length > 0 && typeof summaryItemsExtractor === 'function'
                    ? summaryItemsExtractor({
                        data,
                        totalCount,
                        summary,
                      })
                    : []
                }
              />
              <CustomSummary totalValues={getTotalSummaryValues()} />
              <TableSummaryRow />

              {showFiltering && (
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
              )}

              {detailComponent && <RowDetailState />}
              {detailComponent && (
                <TableRowDetail contentComponent={detailComponent} />
              )}

              <TableSelection showSelectAll />
              {showToolbar && <TableGroupRow />}

              {showToolbar && <Toolbar />}

              {hiddencolumns.length > 0 && (
                <TableColumnVisibility
                  defaultHiddenColumnNames={hiddencolumns}
                />
              )}
              {hiddencolumns.length > 0 && showToolbar && <ColumnChooser />}

              {showToolbar && <GroupingPanel allowDragging />}
              {pagingComponent ? (
                <PagingPanel
                  pageSizes={allowedPageSizes}
                  containerComponent={pagingComponent}
                />
              ) : (
                <PagingPanel pageSizes={allowedPageSizes} />
              )}
            </Grid>

            {loading && <GridLoading />}

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
                  color="secondary"
                >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </Block>
        </Block>
      </Block>
    );
  }
);

const cellComponent = ({ row, column }) => (
  <TableCell>
    {`${typeof row[column.name] === 'undefined' ? '' : row[column.name]}`}
  </TableCell>
);

RemoteDataGrid.defaultProps = {
  title: 'Table title',
  editTitle: 'Edit Record',
  columns: [],
  hiddencolumns: [],
  columnWidths: [],
  allowColumnResizing: true,
  detailComponent: null,
  rowComponent: ({ selected, onRowClick, ...restProps }) => (
    <Table.Row
      selected={selected}
      hover
      onClick={() => onRowClick(restProps.row)}
      {...restProps}
    />
  ),
  cellComponent,
  actionsComponent: () => null,
  onEdit: () => null,
  onView: () => null,
  onDeleteRows: () => {},
  onCancelEdit: () => {},
  onChangeSelection: () => {},
  onAdd: () => {},
  onPrint: () => {},
  url: '/',
  axiosinstance: () => axios.create({}),
  keyExtractor: (row) => row.id,
  dataExtractor: (data) => data.items || data,
  countExtractor: (data) => data.totalCount,
  summaryExtractor: (data) => data.summary,
  permissions: {
    allowadd: true,
    allowedit: true,
    allowdelete: true,
    allowprint: true,
  },
  actionsMenu: null,
  onRowClick: () => null,
};

export default withStyles(styleSheet)(RemoteDataGrid);
