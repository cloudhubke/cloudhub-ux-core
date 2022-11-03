import React, { useEffect, useState } from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
  DragDropProvider,
  TableColumnReordering,
} from '@cloudhub-dx/dx-react-grid-material-ui';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from '@mui/material/DialogContent';

import { makeStyles } from '@mui/styles';
import Block from '../Block';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import './grid.css';

const useStyles = makeStyles({
  gridContainer: {
    '& th': {
      overflow: 'hidden',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& td': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
});

const SimpleDataGrid: React.FC<{
  [x: string]: any;
  style?: React.CSSProperties;
  cellComponent?: ({
    row,
    column,
  }: {
    row: any;
    column: any;
  }) => JSX.Element | JSX.Element;
  columnExtensions?: any[];
  columns?: any[];
  rows?: any[];
  header?: (props?: any) => any;
  onDeleteRows?: (deletingRow?: any) => void;
}> = ({ style, ...props }) => {
  const { columnExtensions, cellComponent } = props;

  const columns = props.columns || [];
  const rows = props.rows || [];

  const [deletingRows, setDeletingRows] = useState([]);

  const classes = useStyles();
  const renderHeader = () => {
    if (props.header) {
      props.header({});
    }
  };

  const cancelDelete = () => {
    setDeletingRows([]);
  };

  useEffect(() => {
    if (props.deletingRows) {
      setDeletingRows(props.deletingRows);
    }
  }, [props.deletingRows]);

  return (
    <Block flex={false} style={{ position: 'relative', ...style }}>
      <Block flex={false}>{renderHeader()}</Block>
      <Block flex={false} className={classes.gridContainer}>
        <GridContainer>
          <GridItem md={12} lg={12}>
            <Grid rows={rows} columns={columns || []}>
              <DragDropProvider />
              <Table
                cellComponent={cellComponent}
                columnExtensions={columnExtensions}
              />
              <TableColumnReordering
                defaultOrder={columns.map((i) => i.name)}
              />
              <TableHeaderRow />
            </Grid>
          </GridItem>
        </GridContainer>
      </Block>

      <Dialog open={deletingRows.length > 0} onClose={cancelDelete}>
        <DialogTitle>Deleting Record!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.deletingWarningMessage ||
              'Are you sure to delete the following record?'}
          </DialogContentText>
          <Block className={classes.gridContainer}>
            <Grid
              rows={deletingRows}
              columns={columns.filter(
                (c) => c.name.toLowerCase() !== 'actions'
              )}
            >
              <Table cellComponent={cellComponent} />
              <TableHeaderRow />
            </Grid>
          </Block>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancelDelete} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (props.onDeleteRows) {
                props.onDeleteRows(deletingRows);
              }
            }}
            color="secondary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Block>
  );
};

const cellComponent = ({ row, column }) => (
  <TableCell>
    {`${typeof row[column.name] === 'undefined' ? '' : row[column.name]}`}
  </TableCell>
);

SimpleDataGrid.defaultProps = {
  cellComponent,
  columnExtensions: [],
  columns: [],
  rows: [],
  header: () => null,
  onDeleteRows: () => {},
};

export default SimpleDataGrid;
