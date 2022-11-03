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
  VirtualTable,
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
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { makeStyles } from '@mui/styles';
import Block from '../Block';
import Text from '../Text';
import GridLoading from './GridLoading';
import './grid.css';
import RowActions from './RowActions';
import Header from './Header';
import PagingComponent from './PagingComponent';
import useGridStore from './store/useGridStore';

const useStyles = makeStyles({
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

const RemoteDataGrid: React.FC<{
  [x: string]: any;
  style?: React.CSSProperties;
  cellComponent?:
    | (({ row, column }: { row?: any; column?: any }) => JSX.Element)
    | any;

  columnExtensions?: any[];
  columns?: any[];
  rows?: any[];
  header?: (params: any) => any;
  onDeleteRows?: (deletingRow: any) => any;
  Graphqlmodel?: any;
  permissions?: any;
  keyExtractor?: any;
  dataExtractor?: (data) => any[];
  countExtractor?: (data) => number;
  summaryExtractor?: (data) => any;
  pagingComponent?:
    | React.FC<{
        [x: string]: any;
        pageSize?: number;
        currentPage?: number;
        onCurrentPageChange?: (page?: number) => void;
        onPageSizeChange?: (pageSize?: number) => void;
        totalCount?: number;
        pageSizes?: number[];
      }>
    | any;
  stickyHeader?: boolean;
  detailComponent?: ((params?: { row: any; column: any }) => any) | any;
  saveActionButton?: React.FC<{
    [x: string]: any;
  }>;
  limit?: number;
  onRowClick?: (row: any) => void;
  showToolbar?: boolean;
  showFiltering?: boolean;
  summaryItemsExtractor?: (data: any) => any[];
  exportHeaders: Array<{
    label: string;
    key: string;
  }>;
  formatExportRow: (row: any) => {
    [x: string]: string;
  };
}> = React.forwardRef(
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
    const classes = useStyles();
    const [columns] = React.useState<any[]>([
      ...counterColumn,
      ...(props.columns || []),
      ...staticColumns,
    ]);

    const [defaultColumnWidths] = React.useState([
      ...props.columnWidths,
      { columnName: 'counter', width: 50 },
      { columnName: 'actions', width: 150 },
    ]);

    const urlLink = Graphqlmodel ? `/${Graphqlmodel().globalId}` : props.url;

    const dispatch = useGridStore((state: any) => state.dispatch);

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

    const [sorting, setSorting] = React.useState<any[]>([]);
    const [currentPage, setCurrrentPage] = React.useState<number>(0);
    const [pageSize, setPageSize] = React.useState<number>(
      params.limit || limit
    );
    const [allowedPageSizes] = React.useState(
      [pageSize, 10, 50, 200, 500, 1000, 5000].sort()
    );
    const [grouping, setGrouping] = React.useState<any[]>([]);

    const [filters, setFilters] = React.useState<any[]>([]);
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [deletingRows, setDeletingRows] = React.useState<any[]>([]);
    const [selectedIndexes, setSelectedIndexes] = React.useState<any[]>([]);
    const dialogRef = React.useRef<any>({
      dialogOpened: false,
    });

    if (!countExtractor || !dataExtractor || !summaryExtractor) {
      return null;
    }

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
      const queryparams: any = {
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

    const loadData = async (reload?: boolean) => {
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
    }, [
      sorting,
      currentPage,
      searchTerm,
      pageSize,
      Graphqlmodel,
      JSON.stringify(props.params),
    ]);

    const changePageSize = (pageSize) => {
      const count = totalCount || data.length;
      const totalPages = Math.ceil(count / pageSize);
      const thisCurrentPage = Math.min(currentPage || 0, totalPages - 1);
      setPageSize(pageSize);
      setCurrrentPage(thisCurrentPage);
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

    const cellComponent: any = ({ row: r, column, style, ...rowprops }) => {
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
            ...rowprops,
          }) || (
            <RowActions
              permissions={permissions}
              row={row}
              column={column}
              onDelete={(row) => setDeletingRows([row])}
              onView={props.onView}
              onEdit={props.onEdit}
              saveActionButton={saveActionButton}
              onOpenDialog={() => (dialogRef.current.dialogOpened = true)}
              onCloseDialog={() => {
                dialogRef.current.dialogOpened = false;
              }}
              {...rowprops}
            />
          )
        );
      }

      return (props as any).cellComponent({ row, column, style, ...rowprops });
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

    const { allowColumnResizing, hiddencolumns, rowComponent } = props;

    return (
      <Block style={{ position: 'relative' }}>
        <Header
          permissions={permissions}
          queryString={getQueryParams()}
          onSearch={(text) => setSearchTerm(text)}
          onRefresh={reload}
          saveActionButton={saveActionButton}
          classes={classes}
          columns={columns}
          {...props}
          url={urlLink}
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

              <VirtualTable
                rowComponent={(props) => {
                  const isSelected = Object.keys(selection).includes(
                    keyExtractor(props.row)
                  );

                  return rowComponent({
                    selected: isSelected,
                    onRowClick,
                    dialogRef,
                    ...props,
                  });
                }}
                cellComponent={cellComponent}
                {...{
                  stickyHeader,
                  allowColumnReordering: true,
                }}
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
                {...{
                  allowDragging: true,
                  allowResizing: allowColumnResizing,
                }}
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

              {showToolbar && (
                <GroupingPanel {...({ allowDragging: true } as any)} />
              )}

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
            >
              <DialogTitle>Delete Row</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure to delete the following row?
                </DialogContentText>
                <Grid
                  rows={deletingRows}
                  columns={columns.filter(
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
                    if (props.onDeleteRows) {
                      props.onDeleteRows([...deletingRows]);
                    }
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

const rowComponent = ({
  selected,
  onRowClick,
  children,
  dialogRef,
  ...restProps
}) => {
  const [isShown, setIsShown] = React.useState(false);

  const fn = (child, index) => {
    if (!child) {
      return child;
    }

    return React.cloneElement(child, {
      ...child.props,
      tableRow: {
        ...child.props.tableRow,
        hovered: isShown,
      },
    });
  };

  const childitems = React.Children.map(children, fn);

  const TableRow: any = Table.Row;

  return (
    <TableRow
      selected={selected}
      hover
      onClick={() => onRowClick(restProps.row)}
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        if (!dialogRef.current.dialogOpened) {
          setIsShown(false);
        }
      }}
    >
      {childitems}
    </TableRow>
  );
};

RemoteDataGrid.defaultProps = {
  title: 'Table title',
  editTitle: 'Edit Record',
  columns: [],
  hiddencolumns: [],
  columnWidths: [],
  allowColumnResizing: true,
  detailComponent: null,
  rowComponent,
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

export default RemoteDataGrid;
