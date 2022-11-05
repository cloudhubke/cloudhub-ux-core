import React from 'react';
import TableCell from '@mui/material/TableCell';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Visibility from '@mui/icons-material/Visibility';

import IconButton from '../IconButton';
import Block from '../Block';
import ThemeContext from '../theme/ThemeContext';

const RowActions: React.FC<{
  [x: string]: any;
  row?: any;
  column?: any;
  permissions?: any;
  saveActionButton?: any;
  tableRow?: any;
  onOpenDialog?: () => void;
  onCloseDialog?: () => void;
}> = ({
  row,
  column,
  permissions,
  saveActionButton: SaveActionButton,
  tableRow,
  onOpenDialog = () => null,
  onCloseDialog = () => null,
  ...props
}) => {
  const { colors } = React.useContext(ThemeContext);

  return (
    <TableCell>
      {tableRow.hovered && (
        <Block
          row
          style={{
            height: '100%',
            width: '100%',
            minWidth: 150,
          }}
        >
          <IconButton
            padding={2}
            onClick={() => props.onView(row)}
            title="View row"
          >
            <Visibility style={{ fontSize: 24, color: colors.primary }} />
          </IconButton>

          {SaveActionButton ? (
            <SaveActionButton
              editingRow={row}
              onOpenDialog={onOpenDialog}
              onCloseDialog={onCloseDialog}
            />
          ) : (
            <IconButton
              padding={2}
              onClick={() => props.onEdit(row)}
              title="Edit row"
              disabled={!permissions.allowedit}
            >
              <EditIcon style={{ fontSize: 24, color: colors.secondary }} />
            </IconButton>
          )}
          <IconButton
            padding={2}
            onClick={() => props.onDelete(row)}
            title="Delete row"
            disabled={!permissions.allowdelete}
          >
            <DeleteIcon style={{ fontSize: 24, color: colors.danger }} />
          </IconButton>
        </Block>
      )}
    </TableCell>
  );
};

export default RowActions;
