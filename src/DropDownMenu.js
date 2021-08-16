import * as React from 'react';
import { styled, alpha } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function DropDownMenu({
  anchorComponent,
  onClick: onMenuClick,
  children,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let anchorcomp;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (typeof onMenuClick === 'function') {
      onMenuClick(event);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (anchorComponent) {
    anchorcomp = React.cloneElement(anchorComponent, {
      onClick: handleClick,
      disableElevation: true,
      id: 'menu-button',
      'aria-controls': 'menu-menu',
      'aria-haspopup': 'true',
      'aria-expanded': open ? 'true' : undefined,
      endIcon: <KeyboardArrowDownIcon />,
      ...anchorComponent.props,
    });
  }

  return (
    <div>
      {anchorcomp || (
        <IconButton
          id="menu-button"
          aria-controls="menu-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
      )}
      <StyledMenu
        id="menu-menu"
        MenuListProps={{
          'aria-labelledby': 'menu-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {children}
      </StyledMenu>
    </div>
  );
}
