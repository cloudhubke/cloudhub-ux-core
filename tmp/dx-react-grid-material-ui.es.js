/**
 * Bundle of @devexpress/dx-react-grid-material-ui
 * Generated: 2021-03-04
 * Version: 2.7.5
 * License: https://js.devexpress.com/Licensing
 */

import {
  createElement,
  PureComponent,
  memo,
  useState,
  Fragment,
  createRef,
  cloneElement,
  forwardRef,
} from 'react';
import {
  node,
  object,
  string,
  func,
  bool,
  oneOfType,
  shape,
  number,
  arrayOf,
  oneOf,
  any,
  array,
} from 'prop-types';
import {
  Grid as Grid$1,
  ColumnChooser as ColumnChooser$1,
  DragDropProvider as DragDropProvider$1,
  PagingPanel as PagingPanel$1,
  GroupingPanel as GroupingPanel$1,
  TableRowDetail as TableRowDetail$1,
  TableGroupRow as TableGroupRow$1,
  InlineSummaryItem,
  TableSelection as TableSelection$1,
  TableLayout as TableLayout$1,
  StaticTableLayout,
  Table as Table$2,
  VirtualTableLayout as VirtualTableLayout$1,
  makeVirtualTable,
  TableFilterRow as TableFilterRow$1,
  TableHeaderRow as TableHeaderRow$1,
  TableBandHeader as TableBandHeader$1,
  TableEditRow as TableEditRow$1,
  TableEditColumn as TableEditColumn$1,
  TableColumnVisibility as TableColumnVisibility$1,
  TableColumnReordering as TableColumnReordering$1,
  TableColumnResizing as TableColumnResizing$1,
  Toolbar as Toolbar$3,
  TableTreeColumn as TableTreeColumn$1,
  SearchPanel as SearchPanel$1,
  TableFixedColumns as TableFixedColumns$1,
  TableSummaryRow as TableSummaryRow$1,
  TableInlineCellEditing as TableInlineCellEditing$1,
  ExportPanel as ExportPanel$1,
} from '@devexpress/dx-react-grid';
import classNames from 'clsx';
import { withStyles } from '@mui/styles';
import {
  withComponents,
  RefType,
  Draggable,
  DragSource,
  Sizer,
} from '@devexpress/dx-react-core';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Input from '@mui/material/Input';
import MenuItem$1 from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import {
  firstRowOnPage,
  lastRowOnPage,
  calculateStartPage,
  getCellGeometries,
} from '@devexpress/dx-grid-core';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableCell$1 from '@mui/material/TableCell';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import TableRowMUI from '@mui/material/TableRow';
import { lighten, alpha as fade, darken } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableMUI from '@mui/material/Table';
import Menu$1 from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import List$1 from '@mui/icons-material/List';
import Toolbar$2 from '@mui/material/Toolbar';
import InputAdornment from '@mui/material/InputAdornment';
import Save from '@mui/icons-material/Save';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i];

        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(
        (sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable
      );
    }
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach((key) => {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach((key) => {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  const target = {};
  const sourceKeys = Object.keys(source);
  let key;
  let i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  const target = _objectWithoutPropertiesLoose(source, excluded);

  let key;
  let i;

  if (Object.getOwnPropertySymbols) {
    const sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === '[object Arguments]'
    )
  ) {
    return;
  }

  const _arr = [];
  let _n = true;
  let _d = false;
  let _e;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i.return != null) _i.return();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const RootBase = function RootBase(_ref) {
  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'classes',
    'className',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(classes.root, className),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (RootBase.propTypes = {
      children: node.isRequired,
      classes: object.isRequired,
      className: string,
    })
  : void 0;
RootBase.defaultProps = {
  className: undefined,
};
const Root = withStyles(styles)(RootBase);

const Grid = function Grid(_ref) {
  const { children } = _ref;
  const props = _objectWithoutProperties(_ref, ['children']);

  return createElement(
    Grid$1,
    _extends(
      {
        rootComponent: Root,
      },
      props
    ),
    children
  );
};
Grid.Root = Root;
process.env.NODE_ENV !== 'production'
  ? (Grid.propTypes = {
      children: node.isRequired,
    })
  : void 0;

const Overlay = function Overlay(_ref) {
  const { visible } = _ref;
  const { onHide } = _ref;
  const { children } = _ref;
  const { target } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'visible',
    'onHide',
    'children',
    'target',
  ]);

  return createElement(
    Popover,
    _extends(
      {
        open: visible,
        anchorEl: target,
        onClose: onHide,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      },
      restProps
    ),
    children
  );
};
process.env.NODE_ENV !== 'production'
  ? (Overlay.propTypes = {
      onHide: func.isRequired,
      children: node.isRequired,
      visible: bool,
      target: oneOfType([object, func]),
    })
  : void 0;
Overlay.defaultProps = {
  visible: false,
  target: null,
};

const Container = function Container(_ref) {
  const { children } = _ref;
  const restProps = _objectWithoutProperties(_ref, ['children']);

  return createElement(
    List,
    _extends(
      {
        dense: true,
      },
      restProps
    ),
    children
  );
};
process.env.NODE_ENV !== 'production'
  ? (Container.propTypes = {
      children: node.isRequired,
    })
  : void 0;

const ToggleButton = function ToggleButton(_ref) {
  const { onToggle } = _ref;
  const { getMessage } = _ref;
  const { buttonRef } = _ref;
  const { active } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'onToggle',
    'getMessage',
    'buttonRef',
    'active',
  ]);

  return createElement(
    Tooltip,
    {
      title: getMessage('showColumnChooser'),
      placement: 'bottom',
      enterDelay: 300,
    },
    createElement(
      IconButton,
      _extends(
        {
          onClick: onToggle,
          buttonRef,
        },
        restProps
      ),
      createElement(VisibilityOff, null)
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (ToggleButton.propTypes = {
      onToggle: func.isRequired,
      getMessage: func.isRequired,
      buttonRef: func.isRequired,
      active: bool,
    })
  : void 0;
ToggleButton.defaultProps = {
  active: false,
};

const styles$1 = function styles(theme) {
  return {
    checkbox: {
      padding: 0,
    },
    itemText: {
      paddingLeft: theme.spacing(1),
    },
  };
};

const ItemBase = function ItemBase(_ref) {
  const _ref$item = _ref.item;
  const { column } = _ref$item;
  const { hidden } = _ref$item;
  const { disabled } = _ref;
  const { onToggle } = _ref;
  const { classes } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'item',
    'disabled',
    'onToggle',
    'classes',
  ]);

  return createElement(
    ListItem,
    _extends(
      {
        key: column.name,
        button: !disabled,
        component: 'li',
        disabled,
        onClick: !disabled ? onToggle : null,
      },
      restProps
    ),
    createElement(Checkbox, {
      checked: !hidden,
      tabIndex: -1,
      disableRipple: true,
      disabled,
      className: classes.checkbox,
    }),
    createElement(ListItemText, {
      className: classes.itemText,
      primary: column.title || column.name,
    })
  );
};

process.env.NODE_ENV !== 'production'
  ? (ItemBase.propTypes = {
      item: shape({
        column: shape({
          name: string,
          title: string,
        }),
        hidden: bool,
      }).isRequired,
      disabled: bool,
      onToggle: func,
      classes: object.isRequired,
    })
  : void 0;
ItemBase.defaultProps = {
  onToggle: function onToggle() {},
  disabled: false,
};
const Item = withStyles(styles$1, {
  name: 'Item',
})(ItemBase);

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], () => {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    const Super = _getPrototypeOf(Derived);
    let result;

    if (isNativeReflectConstruct()) {
      const NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
const withPatchedProps = function withPatchedProps(patchProps) {
  return function (Target) {
    const Patched = /* #__PURE__ */ (function (_React$PureComponent) {
      _inherits(Patched, _React$PureComponent);

      const _super = _createSuper(Patched);

      function Patched() {
        _classCallCheck(this, Patched);

        return _super.apply(this, arguments);
      }

      _createClass(Patched, [
        {
          key: 'render',
          value: function render() {
            return createElement(Target, patchProps(this.props));
          },
        },
      ]);

      return Patched;
    })(PureComponent);

    return Patched;
  };
};

const defaultMessages = {
  showColumnChooser: 'Show Column Chooser',
};
const ColumnChooserWithMessages = withPatchedProps((_ref) => {
  const { messages } = _ref;
  const restProps = _objectWithoutProperties(_ref, ['messages']);

  return _objectSpread2(
    {
      messages: _objectSpread2({}, defaultMessages, {}, messages),
    },
    restProps
  );
})(ColumnChooser$1);
ColumnChooserWithMessages.propTypes = {
  messages: shape({
    hiddenColumnNames: string,
  }),
};
ColumnChooserWithMessages.defaultProps = {
  messages: {},
};
ColumnChooserWithMessages.components = ColumnChooser$1.components;
const ColumnChooser = withComponents({
  Container,
  Item,
  Overlay,
  ToggleButton,
})(ColumnChooserWithMessages);

const styles$2 = function styles(theme) {
  return {
    container: {
      position: 'fixed',
      zIndex: 1000,
      left: 0,
      top: 0,
      display: 'inline-block',
    },
    column: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      float: 'right',
      cursor: 'move',
    },
  };
};

const ContainerBase = function ContainerBase(_ref) {
  const { clientOffset } = _ref;
  const { classes } = _ref;
  const { style } = _ref;
  const { className } = _ref;
  const { children } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'clientOffset',
    'classes',
    'style',
    'className',
    'children',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(classes.container, className),
        style: _objectSpread2(
          {
            transform: 'translate(calc('
              .concat(clientOffset.x, 'px - 50%), calc(')
              .concat(clientOffset.y, 'px - 50%))'),
            msTransform: 'translateX('
              .concat(clientOffset.x, 'px) translateX(-50%) translateY(')
              .concat(clientOffset.y, 'px) translateY(-50%)'),
          },
          style
        ),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (ContainerBase.propTypes = {
      clientOffset: shape({
        x: number.isRequired,
        y: number.isRequired,
      }).isRequired,
      children: node,
      classes: object.isRequired,
      style: object,
      className: string,
    })
  : void 0;
ContainerBase.defaultProps = {
  style: null,
  className: undefined,
  children: undefined,
};
const Container$1 = withStyles(styles$2, {
  name: 'DragDrop',
})(ContainerBase);
const ColumnBase = memo((_ref2) => {
  const { column } = _ref2;
  const { classes } = _ref2;
  const { className } = _ref2;
  const restProps = _objectWithoutProperties(_ref2, [
    'column',
    'classes',
    'className',
  ]);

  return createElement(
    Chip,
    _extends(
      {
        className: classNames(classes.column, className),
        label: column.title,
      },
      restProps
    )
  );
});
ColumnBase.propTypes = {
  column: object.isRequired,
  classes: object.isRequired,
  className: string,
};
ColumnBase.defaultProps = {
  className: undefined,
};
const Column = withStyles(styles$2, {
  name: 'DragDrop',
})(ColumnBase);

const DragDropProvider = withComponents({
  Container: Container$1,
  Column,
})(DragDropProvider$1);

const IS_LEGACY_EDGE_MEDIA_QUERY =
  '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)';

const styles$3 = function styles(theme) {
  return {
    pageSizeSelector: _objectSpread2({}, theme.typography.caption, {
      paddingRight: theme.spacing(5),
      // NOTE: fixes vertical alignment in FF
      display: 'flex',
      alignItems: 'center',
    }),
    label: {
      paddingRight: theme.spacing(3),
    },
    pageSizeTitle: {
      width: 'auto',
      marginRight: theme.spacing(2),
    },
    inputRoot: {
      fontSize: theme.spacing(1.75),
      textAlign: 'right',
    },
    selectIcon: {
      top: 2,
    },
    selectMenu: _defineProperty({}, ''.concat(IS_LEGACY_EDGE_MEDIA_QUERY), {
      position: 'absolute !important',
    }),
    '@media (max-width: 768px)': {
      label: {
        display: 'none',
      },
      pageSizeSelector: {
        paddingRight: theme.spacing(2),
      },
    },
  };
};

const PageSizeSelectorBase = function PageSizeSelectorBase(_ref) {
  const { pageSize } = _ref;
  const { onPageSizeChange } = _ref;
  const { pageSizes } = _ref;
  const { getMessage } = _ref;
  const { classes } = _ref;
  const showAll = getMessage('showAll');
  return createElement(
    'div',
    {
      className: classes.pageSizeSelector,
    },
    createElement(
      'span',
      {
        className: classes.label,
      },
      getMessage('rowsPerPage')
    ),
    createElement(
      Select,
      {
        value: pageSize,
        onChange: function onChange(event) {
          return onPageSizeChange(event.target.value);
        },
        classes: {
          icon: classes.selectIcon,
        },
        MenuProps: {
          className: classes.selectMenu,
        },
        input: createElement(Input, {
          disableUnderline: true,
          classes: {
            root: classes.inputRoot,
          },
        }),
      },
      pageSizes.map((item) =>
        createElement(
          MenuItem$1,
          {
            key: item,
            value: item,
          },
          item !== 0 ? item : showAll
        )
      )
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (PageSizeSelectorBase.propTypes = {
      pageSize: number.isRequired,
      onPageSizeChange: func.isRequired,
      pageSizes: arrayOf(number).isRequired,
      classes: object.isRequired,
      getMessage: func.isRequired,
    })
  : void 0;
const PageSizeSelector = withStyles(styles$3, {
  name: 'PageSizeSelector',
})(PageSizeSelectorBase);

const styles$4 = function styles(theme) {
  return {
    pagination: {
      margin: 0,
    },
    rowsLabel: _objectSpread2({}, theme.typography.caption, {
      paddingRight: theme.spacing(5),
    }),
    button: {
      minWidth: theme.spacing(2),
    },
    activeButton: {
      fontWeight: 'bold',
      cursor: 'default',
    },
    arrowButton: {
      display: 'inline-block',
      transform: theme.direction === 'rtl' ? 'rotate(180deg)' : null,
      msTransform: theme.direction === 'rtl' ? 'rotate(180deg)' : null,
    },
    prev: {
      marginRight: 0,
    },
    next: {
      marginLeft: 0,
    },
    '@media(max-width: 768px)': {
      button: {
        display: 'none',
      },
      prev: {
        marginRight: theme.spacing(1),
      },
      next: {
        marginLeft: theme.spacing(1),
      },
      rowsLabel: {
        paddingRight: theme.spacing(2),
      },
    },
  };
};

const PageButton = function PageButton(_ref) {
  let _classNames;

  const { text } = _ref;
  const { isActive } = _ref;
  const { isDisabled } = _ref;
  const { classes } = _ref;
  const { onClick } = _ref;
  const buttonClasses = classNames(
    ((_classNames = {}),
    _defineProperty(_classNames, classes.button, true),
    _defineProperty(_classNames, classes.activeButton, isActive),
    _classNames)
  );
  return createElement(
    Button,
    _extends(
      {
        className: buttonClasses,
        disabled: isDisabled,
        onClick,
      },
      isActive
        ? {
            tabIndex: -1,
          }
        : null
    ),
    text
  );
};

process.env.NODE_ENV !== 'production'
  ? (PageButton.propTypes = {
      text: string.isRequired,
      isActive: bool,
      isDisabled: bool,
      classes: object.isRequired,
      onClick: func,
    })
  : void 0;
PageButton.defaultProps = {
  onClick: function onClick() {},
  isDisabled: false,
  isActive: false,
};
const ellipsisSymbol = '\u2026';

const renderPageButtons = function renderPageButtons(
  currentPage,
  totalPageCount,
  classes,
  onCurrentPageChange
) {
  const pageButtons = [];
  const maxButtonCount = 3;
  let startPage = 1;
  let endPage = totalPageCount || 1;

  if (maxButtonCount < totalPageCount) {
    startPage = calculateStartPage(
      currentPage + 1,
      maxButtonCount,
      totalPageCount
    );
    endPage = startPage + maxButtonCount - 1;
  }

  if (startPage > 1) {
    pageButtons.push(
      createElement(PageButton, {
        key: 1,
        text: String(1),
        classes,
        onClick: function onClick() {
          return onCurrentPageChange(0);
        },
      })
    );

    if (startPage > 2) {
      pageButtons.push(
        createElement(PageButton, {
          key: 'ellipsisStart',
          text: ellipsisSymbol,
          classes,
          isDisabled: true,
        })
      );
    }
  }

  const _loop = function _loop(page) {
    pageButtons.push(
      createElement(PageButton, {
        key: page,
        text: String(page),
        isActive: page === currentPage + 1,
        classes,
        onClick: function onClick() {
          return onCurrentPageChange(page - 1);
        },
        isDisabled: startPage === endPage,
      })
    );
  };

  for (let page = startPage; page <= endPage; page += 1) {
    _loop(page);
  }

  if (endPage < totalPageCount) {
    if (endPage < totalPageCount - 1) {
      pageButtons.push(
        createElement(PageButton, {
          key: 'ellipsisEnd',
          text: ellipsisSymbol,
          classes,
          isDisabled: true,
        })
      );
    }

    pageButtons.push(
      createElement(PageButton, {
        key: totalPageCount,
        text: String(totalPageCount),
        classes,
        onClick: function onClick() {
          return onCurrentPageChange(totalPageCount - 1);
        },
      })
    );
  }

  return pageButtons;
};

const PaginationBase = function PaginationBase(_ref2) {
  const { totalPages } = _ref2;
  const { totalCount } = _ref2;
  const { pageSize } = _ref2;
  const { currentPage } = _ref2;
  const { onCurrentPageChange } = _ref2;
  const { getMessage } = _ref2;
  const { classes } = _ref2;
  const from = firstRowOnPage(currentPage, pageSize, totalCount);
  const to = lastRowOnPage(currentPage, pageSize, totalCount);
  return createElement(
    'div',
    {
      className: classes.pagination,
    },
    createElement(
      'span',
      {
        className: classes.rowsLabel,
      },
      getMessage('info', {
        from,
        to,
        count: totalCount,
      })
    ),
    createElement(
      IconButton,
      {
        className: classNames(classes.arrowButton, classes.prev),
        disabled: currentPage === 0,
        onClick: function onClick() {
          return currentPage > 0 && onCurrentPageChange(currentPage - 1);
        },
        'aria-label': 'Previous',
      },
      createElement(ChevronLeft, null)
    ),
    renderPageButtons(currentPage, totalPages, classes, onCurrentPageChange),
    createElement(
      IconButton,
      {
        className: classNames(classes.arrowButton, classes.next),
        disabled: currentPage === totalPages - 1 || totalCount === 0,
        onClick: function onClick() {
          return (
            currentPage < totalPages - 1 && onCurrentPageChange(currentPage + 1)
          );
        },
        'aria-label': 'Next',
      },
      createElement(ChevronRight, null)
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (PaginationBase.propTypes = {
      totalPages: number.isRequired,
      currentPage: number.isRequired,
      onCurrentPageChange: func.isRequired,
      classes: object.isRequired,
      totalCount: number.isRequired,
      pageSize: number.isRequired,
      getMessage: func.isRequired,
    })
  : void 0;
const Pagination = withStyles(styles$4, {
  name: 'Pagination',
})(PaginationBase);

const styles$5 = function styles(theme) {
  return {
    pager: {
      overflow: 'hidden',
      padding: theme.spacing(1.5),
      display: 'flex',
      flex: 'none',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  };
};

const PagerBase = function PagerBase(_ref) {
  const { currentPage } = _ref;
  const { pageSizes } = _ref;
  const { totalPages } = _ref;
  const { pageSize } = _ref;
  const { classes } = _ref;
  const _onCurrentPageChange = _ref.onCurrentPageChange;
  const { onPageSizeChange } = _ref;
  const { totalCount } = _ref;
  const { getMessage } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'currentPage',
    'pageSizes',
    'totalPages',
    'pageSize',
    'classes',
    'onCurrentPageChange',
    'onPageSizeChange',
    'totalCount',
    'getMessage',
    'className',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(classes.pager, className),
      },
      restProps
    ),
    !!pageSizes.length &&
      createElement(PageSizeSelector, {
        pageSize,
        onPageSizeChange,
        pageSizes,
        getMessage,
      }),
    createElement(Pagination, {
      totalPages,
      totalCount,
      currentPage,
      onCurrentPageChange: function onCurrentPageChange(page) {
        return _onCurrentPageChange(page);
      },
      pageSize,
      getMessage,
    })
  );
};

process.env.NODE_ENV !== 'production'
  ? (PagerBase.propTypes = {
      currentPage: number.isRequired,
      totalPages: number.isRequired,
      pageSizes: arrayOf(number).isRequired,
      pageSize: number.isRequired,
      classes: object.isRequired,
      onCurrentPageChange: func.isRequired,
      onPageSizeChange: func.isRequired,
      totalCount: number.isRequired,
      getMessage: func.isRequired,
      className: string,
    })
  : void 0;
PagerBase.defaultProps = {
  className: undefined,
};
const Pager = withStyles(styles$5, {
  name: 'Pager',
})(PagerBase);

const defaultMessages$1 = {
  rowsPerPage: 'Rows per page:',
};
const PagingPanelWithMessages = withPatchedProps((_ref) => {
  const { messages } = _ref;
  const restProps = _objectWithoutProperties(_ref, ['messages']);

  return _objectSpread2(
    {
      messages: _objectSpread2({}, defaultMessages$1, {}, messages),
    },
    restProps
  );
})(PagingPanel$1);
PagingPanelWithMessages.propTypes = {
  messages: shape({
    showAll: string,
    rowsPerPage: string,
    info: oneOfType([string, func]),
  }),
};
PagingPanelWithMessages.defaultProps = {
  messages: {},
};
PagingPanelWithMessages.components = PagingPanel$1.components;
const PagingPanel = withComponents({
  Container: Pager,
})(PagingPanelWithMessages);

const styles$6 = function styles(theme) {
  return {
    panel: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: theme.spacing(1.5),
    },
  };
};

const GroupPanelContainerBase = function GroupPanelContainerBase(_ref) {
  const { classes } = _ref;
  const { children } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'classes',
    'children',
    'className',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(classes.panel, className),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (GroupPanelContainerBase.propTypes = {
      classes: object.isRequired,
      children: node,
      className: string,
    })
  : void 0;
GroupPanelContainerBase.defaultProps = {
  children: undefined,
  className: undefined,
};
const GroupPanelContainer = withStyles(styles$6, {
  name: 'GroupPanelContainer',
})(GroupPanelContainerBase);

const ENTER_KEY_CODE = 13;
const SPACE_KEY_CODE = 32;

const styles$7 = function styles(theme) {
  return {
    button: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1.5),
    },
    withoutIcon: {
      paddingRight: '13px',
      paddingLeft: '13px',
    },
    draftCell: {
      opacity: 0.3,
    },
  };
};

const label = function label(
  showSortingControls,
  sortingEnabled,
  sortingDirection,
  column,
  hovered
) {
  const title = column.title || column.name;
  return showSortingControls
    ? createElement(
        TableSortLabel,
        {
          active: !!sortingDirection,
          direction: sortingDirection === null ? undefined : sortingDirection,
          disabled: !sortingEnabled,
          hideSortIcon: !hovered,
          tabIndex: -1,
        },
        title
      )
    : title;
};

const GroupPanelItemBase = function GroupPanelItemBase(_ref) {
  let _classNames;

  const _ref$item = _ref.item;
  const { column } = _ref$item;
  const { draft } = _ref$item;
  const { onGroup } = _ref;
  const { showGroupingControls } = _ref;
  const { showSortingControls } = _ref;
  const { sortingDirection } = _ref;
  const { onSort } = _ref;
  const { sortingEnabled } = _ref;
  const { groupingEnabled } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'item',
    'onGroup',
    'showGroupingControls',
    'showSortingControls',
    'sortingDirection',
    'onSort',
    'sortingEnabled',
    'groupingEnabled',
    'classes',
    'className',
  ]);

  const _React$useState = useState(false);
  const _React$useState2 = _slicedToArray(_React$useState, 2);
  const hovered = _React$useState2[0];
  const setHovered = _React$useState2[1];

  const chipClassNames = classNames(
    ((_classNames = {}),
    _defineProperty(_classNames, classes.button, true),
    _defineProperty(
      _classNames,
      classes.withoutIcon,
      !showSortingControls || (!hovered && sortingDirection === null)
    ),
    _defineProperty(_classNames, classes.draftCell, draft),
    _classNames),
    className
  );

  const onClick = function onClick(e) {
    const isActionKeyDown =
      e.keyCode === ENTER_KEY_CODE || e.keyCode === SPACE_KEY_CODE;
    const isMouseClick = e.keyCode === undefined;
    const cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
    const direction =
      (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey
        ? null
        : undefined;
    onSort({
      direction,
      keepOther: cancelSortingRelatedKey,
    });
  };

  return createElement(
    Chip,
    _extends(
      {
        label: label(
          showSortingControls,
          sortingEnabled,
          sortingDirection,
          column,
          hovered
        ),
        className: chipClassNames,
      },
      showGroupingControls
        ? {
            onDelete: groupingEnabled ? onGroup : null,
          }
        : null,
      showSortingControls
        ? {
            onClick: sortingEnabled ? onClick : null,
            onMouseEnter: function onMouseEnter() {
              return setHovered(true);
            },
            onMouseLeave: function onMouseLeave() {
              return setHovered(false);
            },
          }
        : null,
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (GroupPanelItemBase.propTypes = {
      item: shape({
        column: shape({
          title: string,
          name: string,
        }).isRequired,
        draft: bool,
      }).isRequired,
      showSortingControls: bool,
      sortingDirection: oneOf(['asc', 'desc', null]),
      onSort: func,
      onGroup: func,
      showGroupingControls: bool,
      classes: object.isRequired,
      className: string,
      sortingEnabled: bool,
      groupingEnabled: bool,
    })
  : void 0;
GroupPanelItemBase.defaultProps = {
  showSortingControls: false,
  sortingEnabled: false,
  sortingDirection: undefined,
  onSort: undefined,
  onGroup: undefined,
  showGroupingControls: false,
  groupingEnabled: false,
  className: undefined,
};
const GroupPanelItem = withStyles(styles$7, {
  name: 'GroupPanelItem',
})(GroupPanelItemBase);

const styles$8 = function styles(theme) {
  return {
    groupInfo: {
      color: theme.typography.caption.color,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
    },
  };
};

const GroupPanelEmptyMessageBase = function GroupPanelEmptyMessageBase(_ref) {
  const { getMessage } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'getMessage',
    'classes',
    'className',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(classes.groupInfo, className),
      },
      restProps
    ),
    getMessage('groupByColumn')
  );
};

process.env.NODE_ENV !== 'production'
  ? (GroupPanelEmptyMessageBase.propTypes = {
      getMessage: func.isRequired,
      classes: object.isRequired,
      className: string,
    })
  : void 0;
GroupPanelEmptyMessageBase.defaultProps = {
  className: undefined,
};
const GroupPanelEmptyMessage = withStyles(styles$8, {
  name: 'GroupPanelEmptyMessage',
})(GroupPanelEmptyMessageBase);

const GroupingPanel = withComponents({
  Container: GroupPanelContainer,
  Item: GroupPanelItem,
  EmptyMessage: GroupPanelEmptyMessage,
})(GroupingPanel$1);

const styles$9 = function styles(theme) {
  return {
    toggleCell: {
      textAlign: 'center',
      textOverflow: 'initial',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing(1),
    },
    toggleCellButton: {
      verticalAlign: 'middle',
      display: 'inline-block',
      padding: theme.spacing(1),
    },
  };
};

const TableDetailToggleCellBase = function TableDetailToggleCellBase(_ref) {
  const { style } = _ref;
  const { expanded } = _ref;
  const { classes } = _ref;
  const { onToggle } = _ref;
  const { tableColumn } = _ref;
  const { tableRow } = _ref;
  const { row } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'style',
    'expanded',
    'classes',
    'onToggle',
    'tableColumn',
    'tableRow',
    'row',
    'className',
  ]);

  const handleClick = function handleClick(e) {
    e.stopPropagation();
    onToggle();
  };

  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.toggleCell, className),
        style,
      },
      restProps
    ),
    createElement(
      IconButton,
      {
        className: classes.toggleCellButton,
        onClick: handleClick,
      },
      expanded
        ? createElement(ExpandLess, null)
        : createElement(ExpandMore, null)
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableDetailToggleCellBase.propTypes = {
      style: object,
      expanded: bool,
      classes: object.isRequired,
      onToggle: func,
      className: string,
      tableColumn: object,
      tableRow: object,
      row: any,
    })
  : void 0;
TableDetailToggleCellBase.defaultProps = {
  style: null,
  expanded: false,
  onToggle: function onToggle() {},
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
};
const TableDetailToggleCell = withStyles(styles$9, {
  name: 'TableDetailToggleCell',
})(TableDetailToggleCellBase);

const styles$a = function styles(theme) {
  return {
    active: {
      backgroundColor: theme.palette.background.default,
    },
  };
};

const TableDetailCellBase = function TableDetailCellBase(_ref) {
  const { colSpan } = _ref;
  const { style } = _ref;
  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const { tableColumn } = _ref;
  const { tableRow } = _ref;
  const { row } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'colSpan',
    'style',
    'children',
    'classes',
    'className',
    'tableColumn',
    'tableRow',
    'row',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        style,
        colSpan,
        className: classNames(classes.active, className),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableDetailCellBase.propTypes = {
      style: object,
      colSpan: number,
      children: node,
      classes: object.isRequired,
      className: string,
      tableColumn: object,
      tableRow: object,
      row: any,
    })
  : void 0;
TableDetailCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined,
};
const TableDetailCell = withStyles(styles$a, {
  name: 'TableDetailCell',
})(TableDetailCellBase);

const TableRow = function TableRow(_ref) {
  const { children } = _ref;
  const { row } = _ref;
  const { tableRow } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'row',
    'tableRow',
  ]);

  return createElement(TableRowMUI, restProps, children);
};
process.env.NODE_ENV !== 'production'
  ? (TableRow.propTypes = {
      children: node,
      row: any,
      tableRow: object,
    })
  : void 0;
TableRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
};

const TableRowDetailWithWidth = function TableRowDetailWithWidth(props) {
  return createElement(
    TableRowDetail$1,
    _extends(
      {
        toggleColumnWidth: 48,
      },
      props
    )
  );
};

TableRowDetailWithWidth.components = TableRowDetail$1.components;
const TableRowDetail = withComponents({
  Row: TableRow,
  Cell: TableDetailCell,
  ToggleCell: TableDetailToggleCell,
})(TableRowDetailWithWidth);
TableRowDetail.COLUMN_TYPE = TableRowDetail$1.COLUMN_TYPE;
TableRowDetail.ROW_TYPE = TableRowDetail$1.ROW_TYPE;

const styles$b = function styles(theme) {
  return {
    cell: {
      cursor: 'pointer',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
    cellNoWrap: {
      whiteSpace: 'nowrap',
    },
  };
};

const CellBase = function CellBase(_ref) {
  let _classNames;

  const Content = _ref.contentComponent;
  const Icon = _ref.iconComponent;
  const Container = _ref.containerComponent;
  const InlineSummary = _ref.inlineSummaryComponent;
  const InlineSummaryItem = _ref.inlineSummaryItemComponent;
  const { inlineSummaries } = _ref;
  const { getMessage } = _ref;
  const { style } = _ref;
  const { colSpan } = _ref;
  const { row } = _ref;
  const { column } = _ref;
  const { expanded } = _ref;
  const { onToggle } = _ref;
  const { classes } = _ref;
  const { children } = _ref;
  const { className } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const { side } = _ref;
  const { position } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'contentComponent',
    'iconComponent',
    'containerComponent',
    'inlineSummaryComponent',
    'inlineSummaryItemComponent',
    'inlineSummaries',
    'getMessage',
    'style',
    'colSpan',
    'row',
    'column',
    'expanded',
    'onToggle',
    'classes',
    'children',
    'className',
    'tableRow',
    'tableColumn',
    'side',
    'position',
  ]);

  const handleClick = function handleClick() {
    return onToggle();
  };

  return createElement(
    TableCell$1,
    _extends(
      {
        colSpan,
        style,
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.cell, true),
          _defineProperty(
            _classNames,
            classes.cellNoWrap,
            !(tableColumn && tableColumn.wordWrapEnabled)
          ),
          _classNames),
          className
        ),
        onClick: handleClick,
      },
      restProps
    ),
    createElement(
      Container,
      {
        side,
        position,
      },
      createElement(Icon, {
        expanded,
      }),
      createElement(
        Content,
        {
          column,
          row,
        },
        children
      ),
      inlineSummaries.length
        ? createElement(InlineSummary, {
            inlineSummaries,
            getMessage,
            inlineSummaryItemComponent: InlineSummaryItem,
          })
        : null
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (CellBase.propTypes = {
      // oneOfType is a workaround because withStyles returns react object
      contentComponent: oneOfType([func, object]).isRequired,
      iconComponent: oneOfType([func, object]).isRequired,
      containerComponent: oneOfType([func, object]).isRequired,
      inlineSummaryComponent: oneOfType([func, object]).isRequired,
      inlineSummaryItemComponent: oneOfType([func, object]).isRequired,
      style: object,
      colSpan: number,
      row: any,
      column: object,
      expanded: bool,
      onToggle: func,
      classes: object.isRequired,
      getMessage: func.isRequired,
      children: node,
      className: string,
      tableRow: object,
      tableColumn: object,
      inlineSummaries: array,
      side: string,
      position: string,
    })
  : void 0;
CellBase.defaultProps = {
  style: null,
  colSpan: 1,
  row: {},
  column: {},
  expanded: false,
  inlineSummaries: [],
  onToggle: function onToggle() {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  side: 'left',
  position: '',
};
const Cell = withStyles(styles$b, {
  name: 'TableGroupCell',
})(CellBase);

const styles$c = function styles() {
  return {
    columnTitle: {
      verticalAlign: 'middle',
    },
  };
};

const ContentBase = function ContentBase(_ref) {
  const { column } = _ref;
  const { row } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const { children } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'column',
    'row',
    'classes',
    'className',
    'children',
  ]);

  return createElement(
    'span',
    _extends(
      {
        className: classNames(classes.columnTitle, className),
      },
      restProps
    ),
    createElement('strong', null, column.title || column.name, ':', ' '),
    children || String(row.value)
  );
};

process.env.NODE_ENV !== 'production'
  ? (ContentBase.propTypes = {
      row: any,
      column: object,
      children: node,
      classes: object.isRequired,
      className: string,
    })
  : void 0;
ContentBase.defaultProps = {
  row: {},
  column: {},
  children: undefined,
  className: undefined,
};
const Content = withStyles(styles$c)(ContentBase);

const getBorder = function getBorder(theme) {
  return '1px solid '.concat(
    theme.palette.type === 'light'
      ? lighten(fade(theme.palette.divider, 1), 0.88)
      : darken(fade(theme.palette.divider, 1), 0.68)
  );
};
const getStickyCellStyle = function getStickyCellStyle(theme) {
  return {
    backgroundColor: theme.palette.background.paper,
    position: 'sticky',
    zIndex: 300,
    backgroundClip: 'padding-box',
  };
};

const styles$d = function styles(theme) {
  return {
    wrapper: _objectSpread2({}, getStickyCellStyle(theme), {
      float: 'left',
      maxWidth: '100%',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
    }),
  };
};

const ContainerBase$1 = function ContainerBase(_ref) {
  const { children } = _ref;
  const { style } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const { side } = _ref;
  const { position } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'style',
    'classes',
    'className',
    'side',
    'position',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(classes.wrapper, className),
        style: _objectSpread2({}, style, _defineProperty({}, side, position)),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (ContainerBase$1.propTypes = {
      children: node,
      classes: object.isRequired,
      className: string,
      style: object,
      side: string,
      position: string,
    })
  : void 0;
ContainerBase$1.defaultProps = {
  children: undefined,
  className: undefined,
  style: null,
  side: 'left',
  position: '',
};
const Container$2 = withStyles(styles$d)(ContainerBase$1);

const styles$e = function styles(theme) {
  return {
    indentCell: _objectSpread2({}, getStickyCellStyle(theme), {
      borderBottom: getBorder(theme),
    }),
  };
};

const IndentCellBase = function IndentCellBase(_ref) {
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const { row } = _ref;
  const { column } = _ref;
  const { style } = _ref;
  const { className } = _ref;
  const { classes } = _ref;
  const { position } = _ref;
  const { side } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'tableRow',
    'tableColumn',
    'row',
    'column',
    'style',
    'className',
    'classes',
    'position',
    'side',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.indentCell, className),
        style: _objectSpread2({}, style, _defineProperty({}, side, position)),
      },
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (IndentCellBase.propTypes = {
      tableRow: object,
      tableColumn: object,
      row: any,
      column: object,
      style: object,
      classes: object.isRequired,
      className: string,
      side: string,
      position: number,
    })
  : void 0;
IndentCellBase.defaultProps = {
  tableRow: undefined,
  tableColumn: undefined,
  row: {},
  column: {},
  style: null,
  className: undefined,
  side: 'left',
  position: undefined,
};
const IndentCell = withStyles(styles$e)(IndentCellBase);

const styles$f = function styles(theme) {
  return {
    groupButton: {
      verticalAlign: 'middle',
      display: 'inline-block',
      padding: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  };
};

const IconBase = memo((_ref) => {
  const { expanded } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'expanded',
    'classes',
    'className',
  ]);

  return createElement(
    IconButton,
    _extends(
      {
        className: classNames(classes.groupButton, className),
      },
      restProps
    ),
    expanded
      ? createElement(ExpandMore, null)
      : createElement(ChevronRight, null)
  );
});
IconBase.propTypes = {
  expanded: bool.isRequired,
  classes: object.isRequired,
  className: string,
};
IconBase.defaultProps = {
  className: undefined,
};
const Icon = withStyles(styles$f)(IconBase);

const styles$g = function styles() {
  return {
    row: {
      cursor: 'pointer',
    },
  };
};

const RowBase = function RowBase(_ref) {
  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'classes',
    'className',
  ]);

  return createElement(
    TableRow,
    _extends({}, restProps, {
      className: classNames(classes.row, className),
    }),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (RowBase.propTypes = {
      children: node,
      classes: object.isRequired,
      className: string,
    })
  : void 0;
RowBase.defaultProps = {
  children: null,
  className: undefined,
};
const Row = withStyles(styles$g)(RowBase);

const styles$h = function styles(theme) {
  return {
    inlineSummary: {
      marginLeft: theme.spacing(1),
      verticalAlign: 'middle',
    },
  };
};

const InlineSummaryBase = function InlineSummaryBase(_ref) {
  const { inlineSummaries } = _ref;
  const { getMessage } = _ref;
  const InlineSummaryItem = _ref.inlineSummaryItemComponent;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'inlineSummaries',
    'getMessage',
    'inlineSummaryItemComponent',
    'classes',
    'className',
  ]);

  return createElement(
    'span',
    _extends(
      {
        className: classNames(classes.inlineSummary, className),
      },
      restProps
    ),
    '(',
    inlineSummaries
      .map((s) =>
        createElement(InlineSummaryItem, {
          key: s.type,
          summary: s,
          getMessage,
        })
      )
      .reduce((acc, summary) => acc.concat(summary, ', '), [])
      .slice(0, -1),
    ')'
  );
};

process.env.NODE_ENV !== 'production'
  ? (InlineSummaryBase.propTypes = {
      classes: object.isRequired,
      className: string,
      getMessage: func.isRequired,
      inlineSummaries: array,
      inlineSummaryItemComponent: oneOfType([func, object]).isRequired,
    })
  : void 0;
InlineSummaryBase.defaultProps = {
  className: undefined,
  inlineSummaries: [],
};
const InlineSummary = withStyles(styles$h)(InlineSummaryBase);

const styles$i = function styles(theme) {
  return {
    cell: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      '&:first-child': {
        paddingLeft: theme.spacing(3),
      },
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    footer: {
      borderBottom: getBorder(theme),
    },
    cellRightAlign: {
      textAlign: 'right',
    },
    cellCenterAlign: {
      textAlign: 'center',
    },
    cellNoWrap: {
      whiteSpace: 'nowrap',
    },
  };
};

const TableCellBase = function TableCellBase(_ref) {
  let _classNames;

  const { column } = _ref;
  const { value } = _ref;
  const { children } = _ref;
  const { classes } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const { row } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'column',
    'value',
    'children',
    'classes',
    'tableRow',
    'tableColumn',
    'row',
    'className',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.cell, true),
          _defineProperty(
            _classNames,
            classes.cellRightAlign,
            tableColumn && tableColumn.align === 'right'
          ),
          _defineProperty(
            _classNames,
            classes.cellCenterAlign,
            tableColumn && tableColumn.align === 'center'
          ),
          _defineProperty(
            _classNames,
            classes.cellNoWrap,
            !(tableColumn && tableColumn.wordWrapEnabled)
          ),
          _classNames),
          className
        ),
        classes: {
          footer: classes.footer,
        },
      },
      restProps
    ),
    children || value
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableCellBase.propTypes = {
      value: any,
      column: object,
      row: any,
      classes: object.isRequired,
      children: node,
      tableRow: object,
      tableColumn: object,
      className: string,
    })
  : void 0;
TableCellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
};
const TableCell = withStyles(styles$i, {
  name: 'TableCell',
})(TableCellBase);

const SummaryCell = function SummaryCell(_ref) {
  const { onToggle } = _ref;
  const restProps = _objectWithoutProperties(_ref, ['onToggle']);

  return createElement(
    TableCell,
    _extends({}, restProps, {
      onClick: onToggle,
    })
  );
};
process.env.NODE_ENV !== 'production'
  ? (SummaryCell.propTypes = {
      onToggle: func,
    })
  : void 0;
SummaryCell.defaultProps = {
  onToggle: function onToggle() {},
};

const styles$j = function styles(theme) {
  return {
    item: {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(13),
    },
  };
};

const TableSummaryItemBase = function TableSummaryItemBase(_ref) {
  const { children } = _ref;
  const { type } = _ref;
  const { value } = _ref;
  const { getMessage } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'type',
    'value',
    'getMessage',
    'classes',
    'className',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(
          _defineProperty({}, classes.item, true),
          className
        ),
      },
      restProps
    ),
    createElement(Fragment, null, getMessage(type), ':\xA0\xA0', children)
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableSummaryItemBase.propTypes = {
      value: number,
      type: string.isRequired,
      getMessage: func.isRequired,
      classes: object.isRequired,
      children: node,
      className: string,
    })
  : void 0;
TableSummaryItemBase.defaultProps = {
  value: null,
  children: undefined,
  className: undefined,
};
const TableSummaryItem = withStyles(styles$j)(TableSummaryItemBase);

const TableGroupRowWithIndent = function TableGroupRowWithIndent(props) {
  return createElement(
    TableGroupRow$1,
    _extends(
      {
        contentCellPadding: '8px',
        indentColumnWidth: 48,
      },
      props
    )
  );
};

TableGroupRowWithIndent.components = TableGroupRow$1.components;
const StubCell = SummaryCell;
const TableGroupRow = withComponents({
  Row,
  Cell,
  IndentCell,
  Container: Container$2,
  Content,
  Icon,
  InlineSummary,
  InlineSummaryItem,
  SummaryCell,
  SummaryItem: TableSummaryItem,
  StubCell,
})(TableGroupRowWithIndent);
TableGroupRow.COLUMN_TYPE = TableGroupRow$1.COLUMN_TYPE;
TableGroupRow.ROW_TYPE = TableGroupRow$1.ROW_TYPE;

const styles$k = function styles(theme) {
  return {
    cell: {
      overflow: 'visible',
      paddingRight: 0,
      paddingLeft: theme.spacing(1),
      textAlign: 'center',
    },
    checkbox: {
      padding: theme.spacing(1),
    },
    alignWithRowSpan: {
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing(0.5),
    },
    pointer: {
      cursor: 'pointer',
    },
  };
};

const TableSelectAllCellBase = function TableSelectAllCellBase(_ref) {
  let _classNames;

  const { allSelected } = _ref;
  const { someSelected } = _ref;
  const { disabled } = _ref;
  const { onToggle } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const { rowSpan } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'allSelected',
    'someSelected',
    'disabled',
    'onToggle',
    'classes',
    'className',
    'tableRow',
    'tableColumn',
    'rowSpan',
  ]);

  const cellClasses = classNames(
    ((_classNames = {}),
    _defineProperty(_classNames, classes.cell, true),
    _defineProperty(_classNames, classes.pointer, !disabled),
    _defineProperty(_classNames, classes.alignWithRowSpan, rowSpan > 1),
    _classNames),
    className
  );
  return createElement(
    TableCell$1,
    _extends(
      {
        padding: 'checkbox',
        className: cellClasses,
        rowSpan,
      },
      restProps
    ),
    createElement(Checkbox, {
      checked: allSelected,
      className: classes.checkbox,
      indeterminate: someSelected,
      disabled,
      onClick: function onClick(e) {
        if (disabled) return;
        e.stopPropagation();
        onToggle();
      },
    })
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableSelectAllCellBase.propTypes = {
      allSelected: bool,
      someSelected: bool,
      disabled: bool,
      onToggle: func,
      classes: object.isRequired,
      className: string,
      tableRow: object,
      tableColumn: object,
      rowSpan: number,
    })
  : void 0;
TableSelectAllCellBase.defaultProps = {
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: function onToggle() {},
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined,
};
const TableSelectAllCell = withStyles(styles$k, {
  name: 'TableSelectAllCell',
})(TableSelectAllCellBase);

const styles$l = function styles(theme) {
  return {
    cell: {
      overflow: 'visible',
      paddingRight: 0,
      paddingLeft: theme.spacing(1),
      textAlign: 'center',
    },
    checkbox: {
      marginTop: '-1px',
      marginBottom: '-1px',
      padding: theme.spacing(1),
    },
  };
};

const TableSelectCellBase = function TableSelectCellBase(_ref) {
  const { style } = _ref;
  const { selected } = _ref;
  const { onToggle } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const { row } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'style',
    'selected',
    'onToggle',
    'classes',
    'className',
    'row',
    'tableRow',
    'tableColumn',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        padding: 'checkbox',
        style,
        className: classNames(classes.cell, className),
      },
      restProps
    ),
    createElement(Checkbox, {
      className: classes.checkbox,
      checked: selected,
      onClick: function onClick(e) {
        e.stopPropagation();
        onToggle();
      },
    })
  );
};
process.env.NODE_ENV !== 'production'
  ? (TableSelectCellBase.propTypes = {
      style: object,
      selected: bool,
      onToggle: func,
      classes: object.isRequired,
      row: any,
      tableRow: object,
      tableColumn: object,
      className: string,
    })
  : void 0;
TableSelectCellBase.defaultProps = {
  style: null,
  selected: false,
  onToggle: function onToggle() {},
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
};
const TableSelectCell = withStyles(styles$l, {
  name: 'TableSelectCell',
})(TableSelectCellBase);

const getSelectionColor = function (theme) {
  return theme.palette.type === 'light'
    ? lighten(fade(theme.palette.action.selected, 1), 0.96)
    : darken(fade(theme.palette.action.selected, 1), 0.68);
};

const styles$m = function styles(theme) {
  return {
    selected: {
      backgroundColor: getSelectionColor(theme),
    },
  };
};

const TableSelectRowBase = function TableSelectRowBase(_ref) {
  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const { onToggle } = _ref;
  const { row } = _ref;
  const { selectByRowClick } = _ref;
  const { highlighted } = _ref;
  const { tableColumn } = _ref;
  const { tableRow } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'classes',
    'className',
    'onToggle',
    'row',
    'selectByRowClick',
    'highlighted',
    'tableColumn',
    'tableRow',
  ]);

  return createElement(
    TableRowMUI,
    _extends(
      {
        className: classNames(
          _defineProperty({}, classes.selected, highlighted),
          className
        ),
        onClick: function onClick(e) {
          if (!selectByRowClick) return;
          e.stopPropagation();
          onToggle();
        },
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableSelectRowBase.propTypes = {
      children: node,
      className: string,
      classes: object.isRequired,
      onToggle: func,
      row: any,
      selectByRowClick: bool,
      highlighted: bool,
      tableColumn: object,
      tableRow: object,
    })
  : void 0;
TableSelectRowBase.defaultProps = {
  children: undefined,
  className: undefined,
  onToggle: function onToggle() {},
  row: undefined,
  selectByRowClick: false,
  highlighted: false,
  tableColumn: undefined,
  tableRow: undefined,
};
const TableSelectRow = withStyles(styles$m, {
  name: 'TableSelectRow',
})(TableSelectRowBase);

const TableSelectionWithWidth = function TableSelectionWithWidth(props) {
  return createElement(
    TableSelection$1,
    _extends(
      {
        selectionColumnWidth: 58,
      },
      props
    )
  );
};

TableSelectionWithWidth.components = TableSelection$1.components;
const TableSelection = withComponents({
  Row: TableSelectRow,
  Cell: TableSelectCell,
  HeaderCell: TableSelectAllCell,
})(TableSelectionWithWidth);
TableSelection.COLUMN_TYPE = TableSelection$1.COLUMN_TYPE;

const styles$n = function styles(theme) {
  return {
    table: {
      tableLayout: 'fixed',
      borderCollapse: 'separate',
    },
    stickyTable: {
      position: 'sticky',
      zIndex: 500,
      overflow: 'visible',
      background: theme.palette.background.paper,
      fallbacks: {
        position: '-webkit-sticky',
      },
    },
    headTable: {
      top: 0,
    },
    footTable: {
      borderTop: getBorder(theme),
      bottom: 0,
    },
  };
};

const TableBase = function TableBase(_ref) {
  let _classNames;

  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const { use } = _ref;
  const { tableRef } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'classes',
    'className',
    'use',
    'tableRef',
  ]);

  return createElement(
    TableMUI,
    _extends(
      {
        ref: tableRef,
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.table, true),
          _defineProperty(_classNames, classes.stickyTable, !!use),
          _defineProperty(_classNames, classes.headTable, use === 'head'),
          _defineProperty(_classNames, classes.footTable, use === 'foot'),
          _classNames),
          className
        ),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableBase.propTypes = {
      use: oneOf(['head', 'foot']),
      children: node.isRequired,
      classes: object.isRequired,
      className: string,
      tableRef: RefType.isRequired,
    })
  : void 0;
TableBase.defaultProps = {
  use: undefined,
  className: undefined,
};
const Table = withStyles(styles$n, {
  name: 'Table',
})(TableBase);

const MINIMAL_COLUMN_WIDTH = 120;
const TableLayout = function TableLayout(props) {
  return createElement(
    TableLayout$1,
    _extends(
      {
        layoutComponent: StaticTableLayout,
        minColumnWidth: MINIMAL_COLUMN_WIDTH,
      },
      props
    )
  );
};

const styles$o = function styles(theme) {
  return {
    cell: {
      padding: 0,
    },
    footer: {
      borderBottom: getBorder(theme),
    },
  };
};

const TableStubCellBase = function TableStubCellBase(_ref) {
  const { classes } = _ref;
  const { className } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'classes',
    'className',
    'tableRow',
    'tableColumn',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.cell, className),
        classes: {
          footer: classes.footer,
        },
      },
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableStubCellBase.propTypes = {
      classes: object.isRequired,
      className: string,
      tableRow: object,
      tableColumn: object,
    })
  : void 0;
TableStubCellBase.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};
const TableStubCell = withStyles(styles$o, {
  name: 'TableStubCell',
})(TableStubCellBase);

const styles$p = function styles(theme) {
  return {
    cell: {
      padding: theme.spacing(6, 0),
      position: 'static !important',
    },
    textContainer: {
      display: 'inline-block',
      position: 'sticky',
      left: '50%',
    },
    text: {
      transform: 'translateX(-50%)',
      msTransform: 'translateX(-50%)',
      display: 'inline-block',
    },
  };
};

const TableNoDataCellBase = function TableNoDataCellBase(_ref) {
  const { style } = _ref;
  const { colSpan } = _ref;
  const { getMessage } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'style',
    'colSpan',
    'getMessage',
    'classes',
    'className',
    'tableRow',
    'tableColumn',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        style,
        className: classNames(classes.cell, className),
        colSpan,
      },
      restProps
    ),
    createElement(
      'div',
      {
        className: classes.textContainer,
      },
      createElement(
        'big',
        {
          className: classes.text,
        },
        getMessage('noData')
      )
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (TableNoDataCellBase.propTypes = {
      style: object,
      colSpan: number,
      getMessage: func.isRequired,
      classes: object.isRequired,
      className: string,
      tableRow: object,
      tableColumn: object,
    })
  : void 0;
TableNoDataCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};
const TableNoDataCell = withStyles(styles$p, {
  name: 'TableNoDataCell',
})(TableNoDataCellBase);

const styles$q = {
  root: {
    flexGrow: 1,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    // NOTE: fix sticky positioning in Safari
    width: '100%',
  },
};

const TableContainerBase = function TableContainerBase(_ref) {
  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'classes',
    'className',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(classes.root, className),
      },
      restProps
    ),
    createElement('div', null, children)
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableContainerBase.propTypes = {
      children: node.isRequired,
      classes: object.isRequired,
      className: string,
    })
  : void 0;
TableContainerBase.defaultProps = {
  className: undefined,
};
const TableContainer = withStyles(styles$q, {
  name: 'TableContainer',
})(TableContainerBase);

const TableStubRow = function TableStubRow(_ref) {
  const { children } = _ref;
  const { tableRow } = _ref;
  const restProps = _objectWithoutProperties(_ref, ['children', 'tableRow']);

  return createElement(TableRowMUI, restProps, children);
};
process.env.NODE_ENV !== 'production'
  ? (TableStubRow.propTypes = {
      children: node,
      tableRow: object,
    })
  : void 0;
TableStubRow.defaultProps = {
  children: undefined,
  tableRow: undefined,
};

const Table$1 = withComponents({
  Table,
  TableHead,
  TableBody,
  TableFooter,
  Container: TableContainer,
  Layout: TableLayout,
  Row: TableRow,
  Cell: TableCell,
  NoDataRow: TableRow,
  NoDataCell: TableNoDataCell,
  StubRow: TableStubRow,
  StubCell: TableStubCell,
  StubHeaderCell: TableStubCell,
})(Table$2);
Table$1.components = Table$2.components;
Table$1.COLUMN_TYPE = Table$2.COLUMN_TYPE;
Table$1.ROW_TYPE = Table$2.ROW_TYPE;
Table$1.NODATA_ROW_TYPE = Table$2.NODATA_ROW_TYPE;

const styles$r = function styles(theme) {
  return {
    cell: {
      padding: theme.spacing(1),
      backgroundImage:
        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACqCAYAAABbAOqQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYWQ2ODE5MS00ZDMxLWRjNGYtOTU0NC1jNjJkMTIxMjY2M2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjY1RUVFQzAzRDYzMTFFODlFNThCOUJBQjU4Q0EzRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjY1RUVFQkYzRDYzMTFFODlFNThCOUJBQjU4Q0EzRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVlMjM1Y2U0LTc5ZWUtNGI0NC05ZjlkLTk2NTZmZGFjNjhhNCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk1OTQ2MjBiLTUyMTQtYTM0Yy04Nzc5LTEwMmEyMTY4MTlhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvLbJKYAAADrSURBVHja7N3BDYBACABBsQn7L48q0BoMD5SZxAZuc74gF1V1MMfpCARBEEEQRBAEEQRBdovnuxxDq3RD/LIQRBAEQRBBEEQQBBEEQQQBAAAAAAAAABhi8gZVbgxi6kQQBBEEQQRBEEEQRBAEQRBBAAAAAAAAAAAabX2Daux2lqkTQRBEEAQRBEEEQRBBEARBBAEAAAAAAAAAaLR1g2osUyeCIIggCCIIggiCIIIgCIIIAgAAAAAAAADQ6KsbVPnXIKZOBEEQQRBEEAQRBEEEQRAEEYRXoqqcghuCIIIgiCAIIgiCCMIUtwADALYCCr92l++TAAAAAElFTkSuQmCC)',
      backgroundRepeat: 'no-repeat repeat',
      backgroundOrigin: 'content-box',
    },
  };
};

const TableSkeletonCellBase = function TableSkeletonCellBase(_ref) {
  const { classes } = _ref;
  const { className } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'classes',
    'className',
    'tableRow',
    'tableColumn',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.cell, className),
      },
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableSkeletonCellBase.propTypes = {
      classes: object.isRequired,
      className: string,
      tableRow: object,
      tableColumn: object,
    })
  : void 0;
TableSkeletonCellBase.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};
const TableSkeletonCell = withStyles(styles$r, {
  name: 'TableSkeletonCell',
})(TableSkeletonCellBase);

const MINIMAL_COLUMN_WIDTH$1 = 120;
const VirtualTableLayout = function VirtualTableLayout(props) {
  return createElement(
    TableLayout$1,
    _extends(
      {
        layoutComponent: VirtualTableLayout$1,
        minColumnWidth: MINIMAL_COLUMN_WIDTH$1,
      },
      props
    )
  );
};

const FixedHeader = function FixedHeader(props) {
  return createElement(
    Table,
    _extends(
      {
        use: 'head',
      },
      props
    )
  );
};

const FixedFooter = function FixedFooter(props) {
  return createElement(
    Table,
    _extends(
      {
        use: 'foot',
      },
      props
    )
  );
};

const VirtualTable = makeVirtualTable(Table$1, {
  VirtualLayout: VirtualTableLayout,
  FixedHeader,
  FixedFooter,
  SkeletonCell: TableSkeletonCell,
  defaultEstimatedRowHeight: 53,
  defaultHeight: 530,
});
VirtualTable.COLUMN_TYPE = Table$1.COLUMN_TYPE;
VirtualTable.ROW_TYPE = Table$1.ROW_TYPE;
VirtualTable.NODATA_ROW_TYPE = Table$1.NODATA_ROW_TYPE;

const styles$s = function styles(_ref) {
  const { spacing } = _ref;
  return {
    cell: {
      padding: 0,
      '&:first-child': {
        paddingLeft: spacing(3),
      },
    },
    flexContainer: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
  };
};

const TableFilterCellBase = function TableFilterCellBase(_ref2) {
  const { filter } = _ref2;
  const { getMessage } = _ref2;
  const { onFilter } = _ref2;
  const { classes } = _ref2;
  const { children } = _ref2;
  const { className } = _ref2;
  const { tableRow } = _ref2;
  const { tableColumn } = _ref2;
  const { column } = _ref2;
  const { filteringEnabled } = _ref2;
  const restProps = _objectWithoutProperties(_ref2, [
    'filter',
    'getMessage',
    'onFilter',
    'classes',
    'children',
    'className',
    'tableRow',
    'tableColumn',
    'column',
    'filteringEnabled',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.cell, className),
      },
      restProps
    ),
    createElement(
      'div',
      {
        className: classes.flexContainer,
      },
      children
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableFilterCellBase.propTypes = {
      filter: object,
      onFilter: func,
      classes: object.isRequired,
      children: node,
      getMessage: func.isRequired,
      className: string,
      tableRow: object,
      tableColumn: object,
      column: object,
      filteringEnabled: bool,
    })
  : void 0;
TableFilterCellBase.defaultProps = {
  filter: null,
  onFilter: function onFilter() {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  column: undefined,
  filteringEnabled: true,
};
const TableFilterCell = withStyles(styles$s, {
  name: 'TableFilterCell',
})(TableFilterCellBase);

const styles$t = function styles(theme) {
  return {
    input: {
      width: '100%',
      fontSize: '14px',
    },
    root: {
      margin: theme.spacing(1),
    },
  };
};

const EditorBase = function EditorBase(_ref) {
  const { value } = _ref;
  const { disabled } = _ref;
  const { getMessage } = _ref;
  const _onChange = _ref.onChange;
  const { classes } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'value',
    'disabled',
    'getMessage',
    'onChange',
    'classes',
  ]);

  return createElement(
    Input,
    _extends(
      {
        classes: {
          input: classes.input,
          root: classes.root,
        },
        fullWidth: true,
        disabled,
        value,
        onChange: function onChange(event) {
          return _onChange(event.target.value);
        },
        placeholder: getMessage('filterPlaceholder'),
      },
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (EditorBase.propTypes = {
      classes: object.isRequired,
      value: any,
      disabled: bool,
      onChange: func,
      getMessage: func.isRequired,
    })
  : void 0;
EditorBase.defaultProps = {
  value: '',
  disabled: false,
  onChange: function onChange() {},
};
const Editor = withStyles(styles$t, {
  name: 'Editor',
})(EditorBase);

function _createSuper$1(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], () => {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    const Super = _getPrototypeOf(Derived);
    let result;

    if (isNativeReflectConstruct()) {
      const NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

const styles$u = function styles(_ref) {
  const { spacing } = _ref;
  return {
    icon: {
      marginRight: spacing(1),
    },
    iconItem: {
      minWidth: spacing(2),
    },
    selectMenu: {
      position: 'absolute !important',
    },
  };
};

const FilterSelectorBase = /* #__PURE__ */ (function (_React$PureComponent) {
  _inherits(FilterSelectorBase, _React$PureComponent);

  const _super = _createSuper$1(FilterSelectorBase);

  function FilterSelectorBase(props) {
    let _this;

    _classCallCheck(this, FilterSelectorBase);

    _this = _super.call(this, props);
    _this.state = {
      opened: false,
    };

    _this.setButtonRef = function (buttonRef) {
      _this.buttonRef = buttonRef;
    };

    _this.handleButtonClick = function () {
      _this.setState((prevState) => ({
        opened: !prevState.opened,
      }));
    };

    _this.handleMenuClose = function () {
      _this.setState({
        opened: false,
      });
    };

    _this.handleMenuItemClick = function (nextValue) {
      const { onChange } = _this.props;

      _this.setState({
        opened: false,
      });

      onChange(nextValue);
    };

    return _this;
  }

  _createClass(FilterSelectorBase, [
    {
      key: 'render',
      value: function render() {
        const _this2 = this;

        const _this$props = this.props;
        const { value } = _this$props;
        const { availableValues } = _this$props;
        const { disabled } = _this$props;
        const { getMessage } = _this$props;
        const Icon = _this$props.iconComponent;
        const ToggleButton = _this$props.toggleButtonComponent;
        const { classes } = _this$props;
        const { opened } = this.state;
        return availableValues.length
          ? createElement(
              Fragment,
              null,
              createElement(
                ToggleButton,
                {
                  buttonRef: this.setButtonRef,
                  onToggle: this.handleButtonClick,
                  disabled: disabled || availableValues.length === 1,
                },
                createElement(Icon, {
                  type: value,
                })
              ),
              createElement(
                Menu$1,
                {
                  anchorEl: this.buttonRef,
                  open: opened,
                  onClose: this.handleMenuClose,
                  MenuListProps: {
                    dense: true,
                  },
                  className: classes.selectMenu,
                },
                availableValues.map((valueItem) =>
                  createElement(
                    MenuItem$1,
                    {
                      key: valueItem,
                      selected: valueItem === value,
                      onClick: function onClick() {
                        return _this2.handleMenuItemClick(valueItem);
                      },
                    },
                    createElement(
                      ListItemIcon,
                      {
                        className: classes.iconItem,
                      },
                      createElement(Icon, {
                        type: valueItem,
                        className: classes.icon,
                        fontSize: 'small',
                      })
                    ),
                    createElement(ListItemText, null, getMessage(valueItem))
                  )
                )
              )
            )
          : null;
      },
    },
  ]);

  return FilterSelectorBase;
})(PureComponent);

process.env.NODE_ENV !== 'production'
  ? (FilterSelectorBase.propTypes = {
      value: string,
      availableValues: arrayOf(string),
      onChange: func,
      disabled: bool,
      // oneOfType is a workaround because React.memo returns react object
      iconComponent: oneOfType([func, object]).isRequired,
      // oneOfType is a workaround because withStyles returns react object
      toggleButtonComponent: oneOfType([func, object]).isRequired,
      getMessage: func.isRequired,
      classes: object.isRequired,
    })
  : void 0;
FilterSelectorBase.defaultProps = {
  value: undefined,
  availableValues: [],
  onChange: function onChange() {},
  disabled: false,
};
const FilterSelector = withStyles(styles$u, {
  name: 'FilterSelector',
})(FilterSelectorBase);

const ToggleButton$1 = function ToggleButton(_ref) {
  const { buttonRef } = _ref;
  const { onToggle } = _ref;
  const { disabled } = _ref;
  const { children } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'buttonRef',
    'onToggle',
    'disabled',
    'children',
  ]);

  return createElement(
    IconButton,
    _extends(
      {
        buttonRef,
        onClick: onToggle,
        disabled,
      },
      restProps
    ),
    children
  );
};
process.env.NODE_ENV !== 'production'
  ? (ToggleButton$1.propTypes = {
      buttonRef: func.isRequired,
      onToggle: func.isRequired,
      children: node,
      disabled: bool,
    })
  : void 0;
ToggleButton$1.defaultProps = {
  children: undefined,
  disabled: false,
};

const AVAILABLE_PATHS = {
  contains:
    'M6.094 19.563l-2.031 0.281c-0.646 0.094-1.13 0.266-1.453 0.516-0.302 0.24-0.453 0.646-0.453 1.219 0 0.438 0.138 0.799 0.414 1.086s0.664 0.419 1.164 0.398c0.708 0 1.281-0.24 1.719-0.719 0.427-0.49 0.641-1.125 0.641-1.906v-0.875zM8.234 24.641h-2.172v-1.641c-0.677 1.24-1.661 1.859-2.953 1.859-0.927 0-1.682-0.276-2.266-0.828-0.552-0.552-0.828-1.292-0.828-2.219 0-1.927 1.068-3.052 3.203-3.375l2.875-0.438c0-1.469-0.656-2.203-1.969-2.203-1.177 0-2.224 0.427-3.141 1.281v-2.078c1.010-0.656 2.198-0.984 3.563-0.984 2.458 0 3.687 1.302 3.687 3.906v6.719zM14.734 16.797c0.521-0.583 1.167-0.875 1.938-0.875 0.74 0 1.323 0.281 1.75 0.844 0.448 0.583 0.672 1.38 0.672 2.391 0 1.188-0.24 2.13-0.719 2.828-0.49 0.677-1.13 1.016-1.922 1.016-0.719 0-1.302-0.271-1.75-0.813-0.427-0.51-0.641-1.141-0.641-1.891v-1.266c-0.021-0.906 0.203-1.651 0.672-2.234zM16.969 24.859c1.375 0 2.443-0.521 3.203-1.562 0.781-1.042 1.172-2.427 1.172-4.156 0-1.542-0.354-2.771-1.063-3.688-0.688-0.958-1.651-1.438-2.891-1.438-1.427 0-2.531 0.693-3.313 2.078v-6.781h-2.156v15.328h2.172v-1.5c0.677 1.146 1.635 1.719 2.875 1.719zM22.266 6.125c0.135 0 0.245 0.063 0.328 0.188 0.104 0.073 0.156 0.182 0.156 0.328v22.953c0 0.125-0.052 0.24-0.156 0.344-0.083 0.115-0.193 0.172-0.328 0.172h-12.281c-0.146 0-0.266-0.057-0.359-0.172-0.115-0.115-0.172-0.229-0.172-0.344v-22.953c0-0.135 0.057-0.245 0.172-0.328 0.094-0.125 0.214-0.188 0.359-0.188h12.281zM31.531 24.141c-0.76 0.479-1.693 0.719-2.797 0.719-1.427 0-2.589-0.479-3.484-1.438-0.865-0.958-1.286-2.198-1.266-3.719 0-1.688 0.448-3.052 1.344-4.094 0.917-1.042 2.208-1.573 3.875-1.594 0.854 0 1.63 0.177 2.328 0.531v2.156c-0.677-0.531-1.391-0.792-2.141-0.781-0.938 0-1.714 0.339-2.328 1.016-0.594 0.677-0.891 1.552-0.891 2.625 0 1.042 0.297 1.88 0.891 2.516 0.521 0.615 1.25 0.922 2.188 0.922 0.813 0 1.573-0.297 2.281-0.891v2.031z',
  notContains:
    'M5.828 20.469v0.328c0 0.385-0.057 0.667-0.172 0.844-0.052 0.083-0.117 0.177-0.195 0.281s-0.174 0.224-0.289 0.359c-0.458 0.521-1.031 0.771-1.719 0.75-0.521 0-0.927-0.141-1.219-0.422-0.292-0.292-0.438-0.661-0.438-1.109 0-0.156 0.010-0.273 0.031-0.352s0.052-0.141 0.094-0.188 0.094-0.086 0.156-0.117 0.141-0.078 0.234-0.141c0.031-0.031 0.078-0.070 0.141-0.117s0.146-0.086 0.25-0.117h3.125zM14.016 18.328c0.010-0.406 0.070-0.729 0.18-0.969s0.289-0.49 0.539-0.75c0.479-0.604 1.13-0.906 1.953-0.906 0.75 0 1.344 0.292 1.781 0.875 0.198 0.25 0.349 0.495 0.453 0.734s0.172 0.578 0.203 1.016h-5.109zM19.078 20.469c-0.063 0.427-0.146 0.708-0.25 0.844-0.052 0.073-0.109 0.159-0.172 0.258l-0.219 0.352c-0.469 0.688-1.135 1.031-2 1.031-0.708 0-1.297-0.271-1.766-0.813l-0.305-0.359c-0.089-0.104-0.159-0.198-0.211-0.281-0.104-0.167-0.156-0.448-0.156-0.844v-0.188h5.078zM33.344 18.328l-6.875 0c0.031-0.198 0.070-0.372 0.117-0.523s0.107-0.284 0.18-0.398 0.154-0.224 0.242-0.328l0.305-0.344c0.604-0.688 1.391-1.031 2.359-1.031 0.771 0 1.51 0.266 2.219 0.797v-2.234c-0.75-0.333-1.552-0.5-2.406-0.5-1.667 0-2.974 0.531-3.922 1.594-0.396 0.427-0.708 0.859-0.938 1.297s-0.385 0.995-0.469 1.672h-2.719c-0.021-0.719-0.117-1.31-0.289-1.773s-0.424-0.914-0.758-1.352c-0.729-0.938-1.719-1.417-2.969-1.438-1.479 0-2.615 0.708-3.406 2.125v-6.953h-2.266v9.391h-3.75v-0.594c0-2.646-1.25-3.969-3.75-3.969-1.365 0-2.583 0.328-3.656 0.984v2.125c0.99-0.865 2.063-1.297 3.219-1.297 1.344 0 2.016 0.75 2.016 2.25l-2.953 0.125c-0.25 0.021-0.487 0.070-0.711 0.148l-0.633 0.227h-3.328v2.141h1.828l-0.281 0.594c-0.073 0.135-0.109 0.37-0.109 0.703 0 0.938 0.276 1.682 0.828 2.234 0.542 0.573 1.313 0.859 2.313 0.859 1.281 0 2.297-0.635 3.047-1.906v1.656h2.172v-4.141h3.75v4.141h2.297v-1.516c0.677 1.188 1.661 1.776 2.953 1.766 1.385 0 2.464-0.531 3.234-1.594 0.302-0.385 0.557-0.792 0.766-1.219 0.198-0.385 0.339-0.911 0.422-1.578h2.703c0.021 0.708 0.141 1.25 0.359 1.625 0.115 0.198 0.253 0.401 0.414 0.609s0.346 0.427 0.555 0.656c0.906 1 2.099 1.5 3.578 1.5 1.104 0 2.057-0.245 2.859-0.734v-2.109c-0.75 0.604-1.526 0.917-2.328 0.938-0.979 0-1.74-0.318-2.281-0.953l-0.328-0.328c-0.094-0.094-0.177-0.195-0.25-0.305s-0.13-0.234-0.172-0.375-0.073-0.315-0.094-0.523h6.906v-2.141zM33.297 5.688c0.146 0 0.266 0.047 0.359 0.141 0.104 0.104 0.156 0.229 0.156 0.375v23.484c0 0.135-0.052 0.255-0.156 0.359-0.094 0.115-0.214 0.172-0.359 0.172h-35.078c-0.135 0-0.26-0.057-0.375-0.172-0.094-0.115-0.135-0.234-0.125-0.359v-23.484c0-0.104 0.042-0.229 0.125-0.375 0.104-0.094 0.229-0.141 0.375-0.141h35.078z',
  startsWith:
    'M6.109 20.688c0 0.813-0.219 1.474-0.656 1.984-0.448 0.531-1.010 0.786-1.688 0.766-0.51 0-0.896-0.141-1.156-0.422-0.302-0.292-0.443-0.667-0.422-1.125 0-0.615 0.151-1.042 0.453-1.281 0.177-0.135 0.378-0.245 0.602-0.328s0.497-0.146 0.82-0.188l2.047-0.313v0.906zM8.203 18.063c0-2.688-1.219-4.031-3.656-4.031-1.333 0-2.51 0.339-3.531 1.016v2.141c0.917-0.885 1.948-1.328 3.094-1.328 1.333 0 2 0.766 2 2.297l-2.891 0.453c-2.115 0.333-3.161 1.516-3.141 3.547 0 0.958 0.266 1.724 0.797 2.297 0.542 0.573 1.292 0.859 2.25 0.859 1.292 0 2.26-0.641 2.906-1.922v1.688h2.172v-7.016zM14.703 16.906c0.479-0.604 1.109-0.906 1.891-0.906 0.76 0 1.344 0.297 1.75 0.891 0.438 0.615 0.656 1.443 0.656 2.484 0 1.219-0.229 2.198-0.688 2.938-0.469 0.719-1.109 1.078-1.922 1.078-0.719 0-1.286-0.281-1.703-0.844-0.448-0.542-0.672-1.208-0.672-2v-1.313c-0.010-0.938 0.219-1.714 0.688-2.328zM16.906 25.313c1.365 0 2.422-0.542 3.172-1.625 0.771-1.115 1.156-2.563 1.156-4.344 0-1.604-0.339-2.885-1.016-3.844-0.698-0.979-1.661-1.469-2.891-1.469-1.438 0-2.531 0.719-3.281 2.156v-7.078h-2.188v15.969h2.172v-1.563c0.667 1.198 1.625 1.797 2.875 1.797zM31.375 24.563c-0.75 0.5-1.672 0.75-2.766 0.75-1.427 0-2.583-0.505-3.469-1.516-0.885-0.969-1.318-2.26-1.297-3.875 0-1.74 0.464-3.161 1.391-4.266 0.927-1.063 2.198-1.604 3.813-1.625 0.844 0 1.62 0.172 2.328 0.516v2.25c-0.688-0.563-1.406-0.828-2.156-0.797-0.927 0-1.688 0.349-2.281 1.047-0.583 0.698-0.875 1.609-0.875 2.734 0 1.094 0.281 1.969 0.844 2.625 0.542 0.656 1.286 0.984 2.234 0.984 0.781 0 1.526-0.323 2.234-0.969v2.141zM22.172 5.844c0.115 0 0.224 0.052 0.328 0.156 0.094 0.125 0.141 0.25 0.141 0.375v23.844c0 0.156-0.047 0.286-0.141 0.391-0.115 0.094-0.224 0.141-0.328 0.141h-23.469c-0.125 0-0.24-0.047-0.344-0.141-0.094-0.104-0.141-0.234-0.141-0.391v-23.844c0-0.125 0.047-0.25 0.141-0.375 0.104-0.104 0.219-0.156 0.344-0.156h23.469z',
  endsWith:
    'M6.234 19.344l-2.047 0.313c-0.625 0.083-1.104 0.26-1.438 0.531-0.302 0.24-0.453 0.651-0.453 1.234 0 0.469 0.141 0.852 0.422 1.148s0.672 0.435 1.172 0.414c0.677 0 1.234-0.25 1.672-0.75 0.448-0.51 0.672-1.167 0.672-1.969v-0.922zM8.359 24.578h-2.141v-1.656c-0.667 1.26-1.656 1.891-2.969 1.891-0.938 0-1.698-0.276-2.281-0.828-0.542-0.573-0.813-1.328-0.813-2.266 0-2.021 1.063-3.188 3.188-3.5l2.891-0.484c0-1.51-0.661-2.266-1.984-2.266-1.167 0-2.214 0.443-3.141 1.328v-2.125c1.042-0.677 2.224-1.016 3.547-1.016 2.469 0 3.703 1.333 3.703 4v6.922zM14.906 16.516c0.49-0.615 1.13-0.922 1.922-0.922 0.76 0 1.339 0.297 1.734 0.891 0.438 0.615 0.656 1.438 0.656 2.469 0 1.208-0.229 2.182-0.688 2.922-0.469 0.698-1.115 1.047-1.938 1.047-0.708 0-1.276-0.276-1.703-0.828-0.458-0.552-0.688-1.214-0.688-1.984v-1.281c-0.010-0.948 0.224-1.719 0.703-2.313zM17.125 24.813c1.354 0 2.417-0.531 3.188-1.594 0.781-1.073 1.172-2.505 1.172-4.297 0-1.604-0.349-2.87-1.047-3.797-0.698-0.979-1.661-1.469-2.891-1.469-1.438 0-2.542 0.714-3.313 2.141v-7h-2.203v15.781h2.188v-1.531c0.677 1.177 1.646 1.766 2.906 1.766zM31.688 21.969c-0.698 0.635-1.453 0.953-2.266 0.953-0.958 0-1.703-0.323-2.234-0.969-0.563-0.667-0.849-1.536-0.859-2.609 0-1.115 0.297-2.016 0.891-2.703 0.594-0.698 1.359-1.047 2.297-1.047 0.76 0 1.484 0.266 2.172 0.797v-2.219c-0.708-0.344-1.49-0.516-2.344-0.516-1.625 0-2.906 0.536-3.844 1.609-0.938 1.083-1.406 2.495-1.406 4.234 0 1.594 0.438 2.875 1.313 3.844 0.885 0.979 2.052 1.469 3.5 1.469 1.083 0 2.010-0.245 2.781-0.734v-2.109zM33.188 5.563c0.104 0 0.219 0.047 0.344 0.141 0.094 0.146 0.141 0.276 0.141 0.391v23.578c0 0.146-0.047 0.281-0.141 0.406-0.125 0.094-0.24 0.141-0.344 0.141h-23.625c-0.125 0-0.24-0.047-0.344-0.141-0.094-0.135-0.135-0.271-0.125-0.406v-23.578c0-0.115 0.042-0.245 0.125-0.391 0.094-0.094 0.208-0.141 0.344-0.141h23.625z',
  equal:
    'M29.438 11.797v2.75h-26.922v-2.75h26.922zM29.438 17.406v2.75h-26.922v-2.75h26.922z',
  notEqual:
    'M16.906 11.797l3.016-6.547 2.094 1-2.547 5.547h9.969v2.75h-11.234l-1.328 2.859h12.563v2.75h-13.828l-2.875 6.281-2.094-0.984 2.438-5.297h-10.563v-2.75h11.828l1.297-2.859h-13.125v-2.75h14.391z',
  greaterThan:
    'M24.125 16.047l-14.906 8.625-1.375-2.375 10.781-6.25-10.781-6.234 1.375-2.375z',
  greaterThanOrEqual:
    'M23.031 14.328l-14.906 8.625-1.375-2.375 10.797-6.25-10.797-6.234 1.375-2.375zM23.828 15.641l1.375 2.391-14.938 8.609-1.375-2.375z',
  lessThan:
    'M22.75 7.438l1.375 2.375-10.781 6.234 10.781 6.25-1.375 2.375-14.906-8.609z',
  lessThanOrEqual:
    'M23.828 5.719l1.375 2.375-10.813 6.234 10.813 6.25-1.375 2.375-14.922-8.609zM23.047 24.266l-1.375 2.375-14.922-8.609 1.375-2.391z',
};
const Icon$1 = memo((_ref) => {
  const { type } = _ref;
  const restProps = _objectWithoutProperties(_ref, ['type']);

  const path = AVAILABLE_PATHS[type];
  return path
    ? createElement(
        SvgIcon,
        _extends(
          {
            viewBox: '0 0 32 32',
            fontSize: 'small',
          },
          restProps
        ),
        createElement('path', {
          d: path,
        })
      )
    : createElement(SearchIcon, restProps);
});
process.env.NODE_ENV !== 'production'
  ? (Icon$1.propTypes = {
      type: string,
    })
  : void 0;
Icon$1.defaultProps = {
  type: undefined,
};

const TableFilterRow = withComponents({
  Row: TableRow,
  Cell: TableFilterCell,
  Editor,
  FilterSelector,
  Icon: Icon$1,
  ToggleButton: ToggleButton$1,
})(TableFilterRow$1);
TableFilterRow.ROW_TYPE = TableFilterRow$1.ROW_TYPE;

function _createSuper$2(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], () => {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    const Super = _getPrototypeOf(Derived);
    let result;

    if (isNativeReflectConstruct()) {
      const NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

const styles$v = function styles(theme) {
  return {
    resizeHandle: {
      position: 'absolute',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      width: theme.spacing(2),
      top: 0,
      right: -theme.spacing(1),
      height: '100%',
      cursor: 'col-resize',
      zIndex: 100,
    },
    resizeHandleLine: {
      position: 'absolute',
      backgroundColor: theme.palette.primary.light,
      height: '50%',
      width: '1px',
      top: '25%',
      transition: 'all linear 100ms',
    },
    resizeHandleFirstLine: {
      left: ''.concat(theme.spacing(1) - 1, 'px'),
    },
    resizeHandleSecondLine: {
      left: ''.concat(theme.spacing(1) + 1, 'px'),
    },
    resizeHandleLineActive: {
      left: theme.spacing(1),
    },
    resizeHandleActive: {
      '& $resizeHandleLine': {
        opacity: '1',
        backgroundColor: theme.palette.primary.light,
        height: 'calc(100% - 4px)',
        top: '2px',
      },
    },
  };
};

const ResizingControlBase = /* #__PURE__ */ (function (_React$PureComponent) {
  _inherits(ResizingControlBase, _React$PureComponent);

  const _super = _createSuper$2(ResizingControlBase);

  function ResizingControlBase(props) {
    let _this;

    _classCallCheck(this, ResizingControlBase);

    _this = _super.call(this, props);
    _this.state = {
      resizing: false,
    };

    _this.onResizeStart = function (_ref) {
      const { x } = _ref;
      _this.resizeStartingX = x;

      _this.setState({
        resizing: true,
      });
    };

    _this.onResizeUpdate = function (_ref2) {
      const { x } = _ref2;
      const { onWidthDraft } = _this.props;
      onWidthDraft({
        shift: x - _this.resizeStartingX,
      });
    };

    _this.onResizeEnd = function (_ref3) {
      const { x } = _ref3;
      const _this$props = _this.props;
      const { onWidthChange } = _this$props;
      const { onWidthDraftCancel } = _this$props;
      onWidthDraftCancel();
      onWidthChange({
        shift: x - _this.resizeStartingX,
      });

      _this.setState({
        resizing: false,
      });
    };

    return _this;
  }

  _createClass(ResizingControlBase, [
    {
      key: 'render',
      value: function render() {
        let _classNames;
        let _classNames2;
        let _classNames3;

        const _this$props2 = this.props;
        const { classes } = _this$props2;
        const { resizeHandleOpacityClass } = _this$props2;
        const { resizeLastHandleClass } = _this$props2;
        const { resizing } = this.state;
        return createElement(
          Draggable,
          {
            onStart: this.onResizeStart,
            onUpdate: this.onResizeUpdate,
            onEnd: this.onResizeEnd,
          },
          createElement(
            'div',
            {
              className: classNames(
                ((_classNames = {}),
                _defineProperty(_classNames, classes.resizeHandle, true),
                _defineProperty(_classNames, resizeLastHandleClass, true),
                _defineProperty(
                  _classNames,
                  classes.resizeHandleActive,
                  resizing
                ),
                _classNames)
              ),
            },
            createElement('div', {
              className: classNames(
                ((_classNames2 = {}),
                _defineProperty(_classNames2, resizeHandleOpacityClass, true),
                _defineProperty(_classNames2, classes.resizeHandleLine, true),
                _defineProperty(
                  _classNames2,
                  classes.resizeHandleFirstLine,
                  true
                ),
                _defineProperty(
                  _classNames2,
                  classes.resizeHandleLineActive,
                  resizing
                ),
                _classNames2)
              ),
            }),
            createElement('div', {
              className: classNames(
                ((_classNames3 = {}),
                _defineProperty(_classNames3, resizeHandleOpacityClass, true),
                _defineProperty(_classNames3, classes.resizeHandleLine, true),
                _defineProperty(
                  _classNames3,
                  classes.resizeHandleSecondLine,
                  true
                ),
                _defineProperty(
                  _classNames3,
                  classes.resizeHandleLineActive,
                  resizing
                ),
                _classNames3)
              ),
            })
          )
        );
      },
    },
  ]);

  return ResizingControlBase;
})(PureComponent);
process.env.NODE_ENV !== 'production'
  ? (ResizingControlBase.propTypes = {
      onWidthChange: func.isRequired,
      onWidthDraft: func.isRequired,
      onWidthDraftCancel: func.isRequired,
      classes: object.isRequired,
      resizeLastHandleClass: string.isRequired,
      resizeHandleOpacityClass: string.isRequired,
    })
  : void 0;
const ResizingControl = withStyles(styles$v, {
  name: 'ResizingControl',
})(ResizingControlBase);

function _createSuper$3(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], () => {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    const Super = _getPrototypeOf(Derived);
    let result;

    if (isNativeReflectConstruct()) {
      const NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

const styles$w = function styles(theme) {
  return {
    plainTitle: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: theme.spacing(3),
    },
    cell: {
      outline: 'none',
      position: 'relative',
      overflow: 'visible',
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      '&:first-child': {
        paddingLeft: theme.spacing(3),
      },
      '&:hover $resizeHandleLine': {
        opacity: 1,
      },
      '&:nth-last-child(2) $resizeHandle': {
        width: theme.spacing(1),
        right: '1px',
      },
    },
    resizeHandle: {},
    resizeHandleLine: {
      opacity: 0,
    },
    '@media (pointer: fine)': {
      resizeHandleLine: {
        opacity: 0,
      },
      resizeHandleActive: {
        '& $resizeHandleLine': {
          opacity: 1,
        },
      },
      resizeHandle: {
        '&:hover $resizeHandleLine': {
          opacity: 1,
        },
      },
    },
    cellNoUserSelect: {
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
    },
    cellDraggable: {
      cursor: 'pointer',
    },
    cellDimmed: {
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: theme.palette.background.paper,
        opacity: 0.7,
        pointerEvents: 'none',
        zIndex: 400,
      },
    },
    cellRight: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      textAlign: 'right',
    },
    cellCenter: {
      textAlign: 'center',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    cellNoWrap: {
      whiteSpace: 'nowrap',
    },
  };
};

const TableHeaderCellBase = /* #__PURE__ */ (function (_React$PureComponent) {
  _inherits(TableHeaderCellBase, _React$PureComponent);

  const _super = _createSuper$3(TableHeaderCellBase);

  function TableHeaderCellBase(props) {
    let _this;

    _classCallCheck(this, TableHeaderCellBase);

    _this = _super.call(this, props);
    _this.state = {
      dragging: false,
    };
    _this.dragRef = createRef();
    _this.cellRef = createRef();

    _this.getWidthGetter = function () {
      const { getCellWidth } = _this.props;
      const node = _this.cellRef.current;
      return (
        node &&
        getCellWidth(() => {
          const _node$getBoundingClie = node.getBoundingClientRect();
          const { width } = _node$getBoundingClie;

          return width;
        })
      );
    };

    _this.onDragStart = function () {
      _this.setState({
        dragging: true,
      });
    };

    _this.onDragEnd = function () {
      if (_this.dragRef.current) {
        _this.setState({
          dragging: false,
        });
      }
    };

    return _this;
  }

  _createClass(TableHeaderCellBase, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.getWidthGetter();
      },
    },
    {
      key: 'render',
      value: function render() {
        let _classNames;

        const _this$props = this.props;
        const { style } = _this$props;
        const { column } = _this$props;
        const { tableColumn } = _this$props;
        const { draggingEnabled } = _this$props;
        const { resizingEnabled } = _this$props;
        const { onWidthChange } = _this$props;
        const { onWidthDraft } = _this$props;
        const { onWidthDraftCancel } = _this$props;
        const { getCellWidth } = _this$props;
        const { classes } = _this$props;
        const { tableRow } = _this$props;
        const { className } = _this$props;
        const { children } = _this$props;
        const restProps = _objectWithoutProperties(_this$props, [
          'style',
          'column',
          'tableColumn',
          'draggingEnabled',
          'resizingEnabled',
          'onWidthChange',
          'onWidthDraft',
          'onWidthDraftCancel',
          'getCellWidth',
          'classes',
          'tableRow',
          'className',
          'children',
        ]);

        const { dragging } = this.state;
        const align = (tableColumn && tableColumn.align) || 'left';
        const tableCellClasses = classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.cell, true),
          _defineProperty(_classNames, classes.cellRight, align === 'right'),
          _defineProperty(_classNames, classes.cellCenter, align === 'center'),
          _defineProperty(
            _classNames,
            classes.cellNoUserSelect,
            draggingEnabled
          ),
          _defineProperty(_classNames, classes.cellDraggable, draggingEnabled),
          _defineProperty(
            _classNames,
            classes.cellDimmed,
            dragging || (tableColumn && tableColumn.draft)
          ),
          _defineProperty(
            _classNames,
            classes.cellNoWrap,
            !(tableColumn && tableColumn.wordWrapEnabled)
          ),
          _classNames),
          className
        );
        const cellLayout = createElement(
          TableCell$1,
          _extends(
            {
              style,
              className: tableCellClasses,
              ref: this.cellRef,
            },
            restProps
          ),
          createElement(
            'div',
            {
              className: classes.container,
            },
            children
          ),
          resizingEnabled &&
            createElement(ResizingControl, {
              onWidthChange,
              onWidthDraft,
              onWidthDraftCancel,
              resizeLastHandleClass: classes.resizeHandle,
              resizeHandleOpacityClass: classes.resizeHandleLine,
            })
        );
        return draggingEnabled
          ? createElement(
              DragSource,
              {
                ref: this.dragRef,
                payload: [
                  {
                    type: 'column',
                    columnName: column.name,
                  },
                ],
                onStart: this.onDragStart,
                onEnd: this.onDragEnd,
              },
              cellLayout
            )
          : cellLayout;
      },
    },
  ]);

  return TableHeaderCellBase;
})(PureComponent);

process.env.NODE_ENV !== 'production'
  ? (TableHeaderCellBase.propTypes = {
      tableColumn: object,
      tableRow: object,
      column: object,
      style: object,
      draggingEnabled: bool,
      resizingEnabled: bool,
      onWidthChange: func,
      onWidthDraft: func,
      onWidthDraftCancel: func,
      classes: object.isRequired,
      className: string,
      children: node,
      getCellWidth: func,
    })
  : void 0;
TableHeaderCellBase.defaultProps = {
  column: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  style: null,
  draggingEnabled: false,
  resizingEnabled: false,
  onWidthChange: undefined,
  onWidthDraft: undefined,
  onWidthDraftCancel: undefined,
  className: undefined,
  children: undefined,
  getCellWidth: function getCellWidth() {},
};
const TableHeaderCell = withStyles(styles$w, {
  name: 'TableHeaderCell',
})(TableHeaderCellBase);

const ENTER_KEY_CODE$1 = 13;
const SPACE_KEY_CODE$1 = 32;

const styles$x = function styles() {
  return {
    root: {
      width: '100%',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
    },
    tooltipRoot: {
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    sortLabelRoot: {
      maxWidth: '100%',
    },
    sortLabelRight: {
      flexDirection: 'row-reverse',
    },
    sortLabelActive: {
      color: 'inherit',
    },
  };
};

const _onClick = function onClick(e, onSort) {
  const isActionKeyDown =
    e.keyCode === ENTER_KEY_CODE$1 || e.keyCode === SPACE_KEY_CODE$1;
  const isMouseClick = e.keyCode === undefined;
  const cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
  const direction =
    (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey
      ? null
      : undefined;
  const keepOther = e.shiftKey || cancelSortingRelatedKey;
  e.preventDefault();
  onSort({
    direction,
    keepOther,
  });
};

const SortLabelBase = function SortLabelBase(_ref) {
  let _classNames;

  const { column } = _ref;
  const { align } = _ref;
  const { direction } = _ref;
  const { children } = _ref;
  const { onSort } = _ref;
  const { classes } = _ref;
  const { getMessage } = _ref;
  const { disabled } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'column',
    'align',
    'direction',
    'children',
    'onSort',
    'classes',
    'getMessage',
    'disabled',
    'className',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(classes.root, className),
      },
      restProps
    ),
    createElement(
      Tooltip,
      {
        title: getMessage('sortingHint'),
        placement: align === 'right' ? 'bottom-end' : 'bottom-start',
        enterDelay: 300,
        classes: {
          tooltip: classes.tooltipRoot,
        },
      },
      createElement(
        TableSortLabel,
        {
          active: !!direction,
          direction: direction === null ? undefined : direction,
          onClick: function onClick(e) {
            return _onClick(e, onSort);
          },
          disabled,
          classes: {
            root: classNames(
              ((_classNames = {}),
              _defineProperty(_classNames, classes.sortLabelRoot, true),
              _defineProperty(
                _classNames,
                classes.sortLabelRight,
                align === 'right'
              ),
              _classNames)
            ),
            active: classes.sortLabelActive,
          },
        },
        children
      )
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (SortLabelBase.propTypes = {
      column: object,
      align: string,
      direction: oneOf(['asc', 'desc', null]),
      children: node,
      classes: object.isRequired,
      onSort: func.isRequired,
      getMessage: func.isRequired,
      disabled: bool,
      className: string,
    })
  : void 0;
SortLabelBase.defaultProps = {
  column: undefined,
  direction: undefined,
  disabled: false,
  align: 'left',
  className: null,
  children: undefined,
};
const SortLabel = withStyles(styles$x, {
  name: 'SortLabel',
})(SortLabelBase);

const styles$y = function styles(theme) {
  return {
    root: {
      paddingLeft: 0,
      height: theme.spacing(3),
      cursor: 'pointer',
    },
    disabled: {
      cursor: 'default',
      opacity: 0.3,
    },
  };
};

const GroupButtonBase = function GroupButtonBase(_ref) {
  let _classNames;

  const { disabled } = _ref;
  const { onGroup } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'disabled',
    'onGroup',
    'classes',
    'className',
  ]);

  return createElement(
    'div',
    _extends(
      {
        onClick: function onClick(e) {
          if (disabled) return;
          e.stopPropagation();
          onGroup(e);
        },
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.root, true),
          _defineProperty(_classNames, classes.disabled, disabled),
          _classNames),
          className
        ),
      },
      restProps
    ),
    createElement(List$1, null)
  );
};

process.env.NODE_ENV !== 'production'
  ? (GroupButtonBase.propTypes = {
      onGroup: func.isRequired,
      classes: object.isRequired,
      disabled: bool,
      className: string,
    })
  : void 0;
GroupButtonBase.defaultProps = {
  disabled: false,
  className: undefined,
};
const GroupButton = withStyles(styles$y, {
  name: 'GroupButton',
})(GroupButtonBase);

const styles$z = {
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const TitelBase = function TitelBase(_ref) {
  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'classes',
    'className',
  ]);

  return createElement(
    'span',
    _extends(
      {
        className: classNames(classes.title, className),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (TitelBase.propTypes = {
      children: oneOfType([arrayOf(node), node]),
      classes: object.isRequired,
      className: string,
    })
  : void 0;
TitelBase.defaultProps = {
  className: null,
  children: undefined,
};
const Title = withStyles(styles$z, {
  name: 'Title',
})(TitelBase);

const styles$A = {
  content: {
    width: '100%',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  alignCenter: {
    justifyContent: 'center',
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
};

const ContentBase$1 = function ContentBase(_ref) {
  let _classNames;

  const { column } = _ref;
  const { align } = _ref;
  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'column',
    'align',
    'children',
    'classes',
    'className',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.content, true),
          _defineProperty(_classNames, classes.alignCenter, align === 'center'),
          _defineProperty(_classNames, classes.alignRight, align === 'right'),
          _classNames),
          className
        ),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (ContentBase$1.propTypes = {
      column: object,
      align: string,
      children: oneOfType([arrayOf(node), node]),
      classes: object.isRequired,
      className: string,
    })
  : void 0;
ContentBase$1.defaultProps = {
  column: undefined,
  align: 'left',
  className: null,
  children: undefined,
};
const Content$1 = withStyles(styles$A, {
  name: 'Content',
})(ContentBase$1);

const defaultMessages$2 = {
  sortingHint: 'Sort',
};
const TableHeaderRowWithMessages = withPatchedProps((_ref) => {
  const { messages } = _ref;
  const restProps = _objectWithoutProperties(_ref, ['messages']);

  return _objectSpread2(
    {
      messages: _objectSpread2({}, defaultMessages$2, {}, messages),
    },
    restProps
  );
})(TableHeaderRow$1);
TableHeaderRowWithMessages.propTypes = {
  messages: shape({
    sortingHint: string,
  }),
};
TableHeaderRowWithMessages.defaultProps = {
  messages: {},
};
TableHeaderRowWithMessages.components = TableHeaderRow$1.components;
const TableHeaderRow = withComponents({
  Cell: TableHeaderCell,
  Row: TableRow,
  Content: Content$1,
  SortLabel,
  Title,
  GroupButton,
})(TableHeaderRowWithMessages);
TableHeaderRow.ROW_TYPE = TableHeaderRow$1.ROW_TYPE;

const styles$B = function styles(theme) {
  return {
    cell: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      '&:first-child': {
        paddingLeft: theme.spacing(3),
      },
      '&:last-child': {
        paddingRight: theme.spacing(3),
        borderRight: 0,
      },
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      borderBottom: getBorder(theme),
      borderRight: getBorder(theme),
    },
    beforeBorder: {
      borderLeft: getBorder(theme),
    },
  };
};

const CellBase$1 = function CellBase(_ref) {
  let _classNames;

  const { column } = _ref;
  const { value } = _ref;
  const { children } = _ref;
  const { classes } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const { row } = _ref;
  const { className } = _ref;
  const { beforeBorder } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'column',
    'value',
    'children',
    'classes',
    'tableRow',
    'tableColumn',
    'row',
    'className',
    'beforeBorder',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.cell, true),
          _defineProperty(_classNames, classes.beforeBorder, beforeBorder),
          _classNames),
          className
        ),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (CellBase$1.propTypes = {
      value: any,
      column: object,
      row: any,
      classes: object.isRequired,
      children: node,
      tableRow: object,
      tableColumn: object,
      className: string,
      beforeBorder: bool,
    })
  : void 0;
CellBase$1.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
  beforeBorder: false,
};
const Cell$1 = withStyles(styles$B, {
  name: 'Cell',
})(CellBase$1);

const styles$C = function styles(theme) {
  return {
    headerCellBorder: {
      borderRight: getBorder(theme),
      borderTop: 'none',
      '&:last-child': {
        borderRight: 0,
      },
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing(2),
    },
    beforeBorder: {
      borderLeft: getBorder(theme),
    },
  };
};

const BandedHeaderCellBase = function BandedHeaderCellBase(_ref) {
  let _classNames;

  const HeaderCellComponent = _ref.component;
  const { className } = _ref;
  const { classes } = _ref;
  const { beforeBorder } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'component',
    'className',
    'classes',
    'beforeBorder',
  ]);

  return createElement(
    HeaderCellComponent,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.headerCellBorder, true),
          _defineProperty(_classNames, classes.beforeBorder, beforeBorder),
          _classNames),
          className
        ),
      },
      restProps
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (BandedHeaderCellBase.propTypes = {
      component: func.isRequired,
      classes: object.isRequired,
      className: string,
      beforeBorder: bool,
    })
  : void 0;
BandedHeaderCellBase.defaultProps = {
  className: undefined,
  beforeBorder: false,
};
const BandedHeaderCell = withStyles(styles$C, {
  name: 'BandedHeaderCell',
})(BandedHeaderCellBase);

const styles$D = {
  emptyCell: {
    display: 'none',
  },
};

const InvisibleCellBase = function InvisibleCellBase(_ref) {
  const { classes } = _ref;
  return createElement(TableCell$1, {
    className: classes.emptyCell,
  });
};

process.env.NODE_ENV !== 'production'
  ? (InvisibleCellBase.propTypes = {
      classes: object.isRequired,
    })
  : void 0;
const InvisibleCell = withStyles(styles$D, {
  name: 'InvisibleCell',
})(InvisibleCellBase);

const styles$E = {
  row: {
    height: 'auto',
  },
};
const RowBase$1 = function RowBase(_ref) {
  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const { row } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'classes',
    'className',
    'row',
    'tableRow',
    'tableColumn',
  ]);

  return createElement(
    TableRowMUI,
    _extends(
      {
        className: classNames(classes.row, className),
      },
      restProps
    ),
    children
  );
};
process.env.NODE_ENV !== 'production'
  ? (RowBase$1.propTypes = {
      classes: object.isRequired,
      children: node,
      row: any,
      tableRow: object,
      tableColumn: object,
      className: string,
    })
  : void 0;
RowBase$1.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
};
const Row$1 = withStyles(styles$E, {
  name: 'Row',
})(RowBase$1);

const TableBandHeader = withComponents({
  Cell: Cell$1,
  Row: Row$1,
  BandedHeaderCell,
  InvisibleCell,
})(TableBandHeader$1);
TableBandHeader.ROW_TYPE = TableBandHeader$1.ROW_TYPE;

const styles$F = function styles(theme) {
  return {
    cell: {
      padding: theme.spacing(1),
      // NOTE: without the TableEditColumn first EditCell changes size
      // (because first TableCell and EditCell have different paddings)
      '&:first-child': {
        paddingLeft: theme.spacing(3),
      },
    },
    inputRoot: {
      width: '100%',
    },
    disabledInput: {
      color: theme.palette.action.disabled,
      '&:before': {
        borderBottom: '1px dotted',
        borderBottomColor: theme.palette.action.disabled,
      },
      '&&:hover:before': {
        borderBottom: '1px dotted',
        borderBottomColor: theme.palette.action.disabled,
      },
      '&:after': {
        borderBottom: '0px',
      },
    },
    inputRight: {
      textAlign: 'right',
    },
    inputCenter: {
      textAlign: 'center',
    },
  };
};

const EditCellBase = function EditCellBase(_ref) {
  let _classNames;
  let _classNames2;

  const { column } = _ref;
  const { value } = _ref;
  const { onValueChange } = _ref;
  const { style } = _ref;
  const { classes } = _ref;
  const { children } = _ref;
  const { row } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const { editingEnabled } = _ref;
  const { className } = _ref;
  const { autoFocus } = _ref;
  const { onBlur } = _ref;
  const { onFocus } = _ref;
  const { onKeyDown } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'column',
    'value',
    'onValueChange',
    'style',
    'classes',
    'children',
    'row',
    'tableRow',
    'tableColumn',
    'editingEnabled',
    'className',
    'autoFocus',
    'onBlur',
    'onFocus',
    'onKeyDown',
  ]);

  const inputClasses = classNames(
    ((_classNames = {}),
    _defineProperty(
      _classNames,
      classes.inputRight,
      tableColumn && tableColumn.align === 'right'
    ),
    _defineProperty(
      _classNames,
      classes.inputCenter,
      tableColumn && tableColumn.align === 'center'
    ),
    _classNames)
  );
  const patchedChildren = children
    ? cloneElement(children, {
        autoFocus,
        onBlur,
        onFocus,
        onKeyDown,
      })
    : children;
  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.cell, className),
        style,
      },
      restProps
    ),
    patchedChildren ||
      createElement(Input, {
        className: classNames(
          ((_classNames2 = {}),
          _defineProperty(_classNames2, classes.inputRoot, true),
          _defineProperty(_classNames2, classes.disabledInput, !editingEnabled),
          _classNames2)
        ),
        classes: {
          input: inputClasses,
        },
        value,
        readOnly: !editingEnabled,
        onChange: function onChange(e) {
          return onValueChange(e.target.value);
        }, // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus,
        onBlur,
        onFocus,
        onKeyDown,
      })
  );
};

process.env.NODE_ENV !== 'production'
  ? (EditCellBase.propTypes = {
      column: object,
      row: any,
      tableRow: object,
      tableColumn: object,
      value: any,
      onValueChange: func,
      style: object,
      classes: object.isRequired,
      editingEnabled: bool,
      children: node,
      className: string,
      autoFocus: bool,
      onBlur: func,
      onFocus: func,
      onKeyDown: func,
    })
  : void 0;
EditCellBase.defaultProps = {
  column: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  value: '',
  style: null,
  children: undefined,
  className: undefined,
  editingEnabled: true,
  autoFocus: false,
  onValueChange: function onValueChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
};
const EditCell = withStyles(styles$F, {
  name: 'EditCell',
})(EditCellBase);

const TableEditRow = withComponents({
  Row: TableRow,
  Cell: EditCell,
})(TableEditRow$1);
TableEditRow.ADDED_ROW_TYPE = TableEditRow$1.ADDED_ROW_TYPE;
TableEditRow.EDIT_ROW_TYPE = TableEditRow$1.EDIT_ROW_TYPE;

const styles$G = function styles(theme) {
  return {
    button: {
      padding: theme.spacing(1),
      minWidth: 40,
    },
    headingCell: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      padding: theme.spacing(0, 2, 0, 3),
    },
    cell: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      padding: theme.spacing(0, 2, 0, 3),
    },
    alignWithRowSpan: {
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing(1.25),
    },
  };
};

const withEditColumnStyles = withStyles(styles$G, {
  name: 'EditColumn',
});

const CommandButtonBase = function CommandButtonBase(_ref) {
  const { onExecute } = _ref;
  const { text } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'onExecute',
    'text',
    'classes',
    'className',
  ]);

  return createElement(
    Button,
    _extends(
      {
        color: 'primary',
        className: classNames(classes.button, className),
        onClick: function onClick(e) {
          e.stopPropagation();
          onExecute();
        },
      },
      restProps
    ),
    text
  );
};

process.env.NODE_ENV !== 'production'
  ? (CommandButtonBase.propTypes = {
      onExecute: func.isRequired,
      text: string.isRequired,
      classes: object.isRequired,
      className: string,
    })
  : void 0;
CommandButtonBase.defaultProps = {
  className: undefined,
};
const CommandButton = withEditColumnStyles(CommandButtonBase);

const EditCommandHeadingCellBase = function EditCommandHeadingCellBase(_ref2) {
  let _classNames;

  const { children } = _ref2;
  const { classes } = _ref2;
  const { className } = _ref2;
  const { tableRow } = _ref2;
  const { tableColumn } = _ref2;
  const { rowSpan } = _ref2;
  const restProps = _objectWithoutProperties(_ref2, [
    'children',
    'classes',
    'className',
    'tableRow',
    'tableColumn',
    'rowSpan',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.headingCell, true),
          _defineProperty(_classNames, classes.alignWithRowSpan, rowSpan > 1),
          _classNames),
          className
        ),
        rowSpan,
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (EditCommandHeadingCellBase.propTypes = {
      children: node,
      classes: object.isRequired,
      className: string,
      tableRow: object,
      tableColumn: object,
      rowSpan: number,
    })
  : void 0;
EditCommandHeadingCellBase.defaultProps = {
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined,
};
const EditCommandHeadingCell = withEditColumnStyles(EditCommandHeadingCellBase);

const EditCommandCellBase = function EditCommandCellBase(_ref3) {
  const { tableRow } = _ref3;
  const { tableColumn } = _ref3;
  const { row } = _ref3;
  const { children } = _ref3;
  const { classes } = _ref3;
  const { className } = _ref3;
  const restProps = _objectWithoutProperties(_ref3, [
    'tableRow',
    'tableColumn',
    'row',
    'children',
    'classes',
    'className',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.cell, className),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (EditCommandCellBase.propTypes = {
      children: node,
      classes: object.isRequired,
      className: string,
      tableRow: object,
      tableColumn: object,
      row: any,
    })
  : void 0;
EditCommandCellBase.defaultProps = {
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  row: undefined,
};
const EditCommandCell = withEditColumnStyles(EditCommandCellBase);

const TableEditColumnWithWidth = withPatchedProps((props) =>
  _objectSpread2(
    {
      width: 150,
    },
    props
  )
)(TableEditColumn$1);
TableEditColumnWithWidth.components = TableEditColumn$1.components;
const TableEditColumn = withComponents({
  Cell: EditCommandCell,
  HeaderCell: EditCommandHeadingCell,
  Command: CommandButton,
})(TableEditColumnWithWidth);
TableEditColumn.COLUMN_TYPE = TableEditColumn$1.COLUMN_TYPE;

const styles$H = function styles(theme) {
  return {
    emptyMessage: {
      margin: '0 auto',
      padding: theme.spacing(5, 0),
      fontFamily: theme.typography.fontFamily,
      color: theme.typography.subtitle1.color,
      fontSize: theme.typography.subtitle1.fontSize,
    },
  };
};

const EmptyMessageBase = function EmptyMessageBase(_ref) {
  const { getMessage } = _ref;
  const { classes } = _ref;
  const restProps = _objectWithoutProperties(_ref, ['getMessage', 'classes']);

  return createElement(
    Toolbar$2,
    restProps,
    createElement(
      'big',
      {
        className: classes.emptyMessage,
      },
      getMessage('noColumns')
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (EmptyMessageBase.propTypes = {
      getMessage: func.isRequired,
      classes: object.isRequired,
    })
  : void 0;
const EmptyMessage = withStyles(styles$H, {
  name: 'EmptyMessage',
})(EmptyMessageBase);

const TableColumnVisibility = withComponents({
  EmptyMessage,
})(TableColumnVisibility$1);

const TableReorderingCell = function TableReorderingCell(_ref) {
  const { style } = _ref;
  const { getCellDimensions } = _ref;

  const refHandler = function refHandler(node) {
    return node && getCellDimensions(() => getCellGeometries(node));
  };

  return createElement('td', {
    ref: refHandler,
    style: _objectSpread2({}, style, {
      padding: 0,
    }),
  });
};
process.env.NODE_ENV !== 'production'
  ? (TableReorderingCell.propTypes = {
      getCellDimensions: func.isRequired,
      style: object,
    })
  : void 0;
TableReorderingCell.defaultProps = {
  style: null,
};

const styles$I = function styles() {
  return {
    row: {
      visibility: 'hidden',
    },
  };
};

const TableInvisibleRowBase = function TableInvisibleRowBase(_ref) {
  const { className } = _ref;
  const { classes } = _ref;
  const restParams = _objectWithoutProperties(_ref, ['className', 'classes']);

  return createElement(
    TableRow,
    _extends(
      {
        className: classNames(classes.row, className),
      },
      restParams
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableInvisibleRowBase.propTypes = {
      className: string,
      classes: object.isRequired,
    })
  : void 0;
TableInvisibleRowBase.defaultProps = {
  className: undefined,
};
const TableInvisibleRow = withStyles(styles$I, {
  name: 'TableInvisibleRow',
})(TableInvisibleRowBase);

const TableColumnReordering = withComponents({
  Row: TableInvisibleRow,
  Cell: TableReorderingCell,
})(TableColumnReordering$1);

function _createSuper$4(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], () => {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    const Super = _getPrototypeOf(Derived);
    let result;

    if (isNativeReflectConstruct()) {
      const NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
const TableColumnResizing = /* #__PURE__ */ (function (_React$PureComponent) {
  _inherits(TableColumnResizing, _React$PureComponent);

  const _super = _createSuper$4(TableColumnResizing);

  function TableColumnResizing() {
    _classCallCheck(this, TableColumnResizing);

    return _super.apply(this, arguments);
  }

  _createClass(TableColumnResizing, [
    {
      key: 'render',
      value: function render() {
        const _this$props = this.props;
        const { minColumnWidth } = _this$props;
        const { maxColumnWidth } = _this$props;
        const restProps = _objectWithoutProperties(_this$props, [
          'minColumnWidth',
          'maxColumnWidth',
        ]);

        return createElement(
          TableColumnResizing$1,
          _extends({}, restProps, {
            minColumnWidth,
            maxColumnWidth,
          })
        );
      },
    },
  ]);

  return TableColumnResizing;
})(PureComponent);
process.env.NODE_ENV !== 'production'
  ? (TableColumnResizing.propTypes = {
      minColumnWidth: number,
      maxColumnWidth: number,
    })
  : void 0;
TableColumnResizing.defaultProps = {
  minColumnWidth: 40,
  maxColumnWidth: Infinity,
};

const styles$J = function styles(theme) {
  return {
    toolbar: {
      borderBottom: getBorder(theme),
      flex: 'none',
    },
  };
};

const ToolbarBase = function ToolbarBase(_ref) {
  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const { style } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'classes',
    'className',
    'style',
  ]);

  return createElement(
    Toolbar$2,
    _extends(
      {
        style,
        className: classNames(classes.toolbar, className),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (ToolbarBase.propTypes = {
      children: node.isRequired,
      classes: object.isRequired,
      className: string,
      style: object,
    })
  : void 0;
ToolbarBase.defaultProps = {
  className: undefined,
  style: null,
};
const Toolbar = withStyles(styles$J, {
  name: 'Toolbar',
})(ToolbarBase);

const FlexibleSpace = function FlexibleSpace() {
  return createElement('div', {
    style: {
      flex: '0 0 0',
      marginLeft: 'auto',
    },
  });
};

const Toolbar$1 = withComponents({
  Root: Toolbar,
  FlexibleSpace,
})(Toolbar$3);

const styles$K = function styles(theme) {
  return {
    button: {
      marginTop: '-1px',
      marginBottom: '-1px',
      marginLeft: -theme.spacing(1),
      marginRight: theme.spacing(2),
      padding: theme.spacing(1),
    },
    hidden: {
      cursor: 'default',
      opacity: 0,
    },
  };
};

const TableTreeExpandButtonBase = function TableTreeExpandButtonBase(_ref) {
  let _classNames;

  const { visible } = _ref;
  const { expanded } = _ref;
  const { classes } = _ref;
  const { onToggle } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'visible',
    'expanded',
    'classes',
    'onToggle',
    'className',
  ]);

  return createElement(
    IconButton,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.button, true),
          _defineProperty(_classNames, classes.hidden, !visible),
          _classNames),
          className
        ),
        onClick: function onClick(e) {
          if (!visible) return;
          e.stopPropagation();
          onToggle();
        },
        tabIndex: visible ? 0 : -1,
      },
      restProps
    ),
    expanded
      ? createElement(ExpandMore, null)
      : createElement(ChevronRight, null)
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableTreeExpandButtonBase.propTypes = {
      visible: bool,
      expanded: bool,
      onToggle: func,
      className: string,
      classes: object.isRequired,
    })
  : void 0;
TableTreeExpandButtonBase.defaultProps = {
  visible: false,
  expanded: false,
  onToggle: function onToggle() {},
  className: undefined,
};
const TableTreeExpandButton = withStyles(styles$K)(TableTreeExpandButtonBase);

const styles$L = function styles(theme) {
  return {
    checkbox: {
      marginTop: '-1px',
      marginBottom: '-1px',
      marginRight: theme.spacing(2),
      marginLeft: -theme.spacing(2),
      padding: theme.spacing(1),
    },
  };
};

const TableTreeCheckboxBase = function TableTreeCheckboxBase(_ref) {
  const { disabled } = _ref;
  const { checked } = _ref;
  const { indeterminate } = _ref;
  const { onChange } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'disabled',
    'checked',
    'indeterminate',
    'onChange',
    'classes',
    'className',
  ]);

  return createElement(
    Checkbox,
    _extends(
      {
        className: classNames(classes.checkbox, className),
        checked,
        indeterminate,
        disabled,
        onClick: function onClick(e) {
          if (disabled) return;
          e.stopPropagation();
          onChange();
        },
      },
      restProps
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (TableTreeCheckboxBase.propTypes = {
      disabled: bool,
      checked: bool,
      indeterminate: bool,
      onChange: func,
      classes: object.isRequired,
      className: string,
    })
  : void 0;
TableTreeCheckboxBase.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: function onChange() {},
  className: undefined,
};
const TableTreeCheckbox = withStyles(styles$L)(TableTreeCheckboxBase);

const styles$M = function styles(theme) {
  return {
    indent: {
      marginLeft: theme.spacing(3),
    },
  };
};

const TableTreeIndentBase = memo((_ref) => {
  const { level } = _ref;
  const { classes } = _ref;
  return Array.from({
    length: level,
  }).map((value, currentLevel) =>
    createElement('span', {
      // eslint-disable-next-line react/no-array-index-key
      key: currentLevel,
      className: classes.indent,
    })
  );
});
TableTreeIndentBase.propTypes = {
  level: number,
  classes: object.isRequired,
};
TableTreeIndentBase.defaultProps = {
  level: 0,
};
const TableTreeIndent = withStyles(styles$M)(TableTreeIndentBase);

const styles$N = function styles() {
  return {
    content: {
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  };
};

const TableTreeContentBase = function TableTreeContentBase(_ref) {
  const { children } = _ref;
  const { classes } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'children',
    'classes',
    'className',
  ]);

  return createElement(
    'div',
    _extends(
      {
        className: classNames(
          _defineProperty({}, classes.content, true),
          className
        ),
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableTreeContentBase.propTypes = {
      classes: object.isRequired,
      children: node,
      className: string,
    })
  : void 0;
TableTreeContentBase.defaultProps = {
  children: undefined,
  className: undefined,
};
const TableTreeContent = withStyles(styles$N)(TableTreeContentBase);

const styles$O = function styles(theme) {
  return {
    cell: {
      padding: theme.spacing(0.5, 1),
      '&:first-child': {
        paddingLeft: theme.spacing(3),
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    cellNoWrap: {
      whiteSpace: 'nowrap',
    },
    cellRightAlign: {
      textAlign: 'right',
    },
    cellCenterAlign: {
      textAlign: 'center',
    },
  };
};

const TableTreeCellBase = function TableTreeCellBase(_ref) {
  let _classNames;

  const { column } = _ref;
  const { value } = _ref;
  const { children } = _ref;
  const { classes } = _ref;
  const { tableRow } = _ref;
  const { tableColumn } = _ref;
  const { row } = _ref;
  const { className } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'column',
    'value',
    'children',
    'classes',
    'tableRow',
    'tableColumn',
    'row',
    'className',
  ]);

  return createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.cell, true),
          _defineProperty(
            _classNames,
            classes.cellNoWrap,
            !(tableColumn && tableColumn.wordWrapEnabled)
          ),
          _defineProperty(
            _classNames,
            classes.cellRightAlign,
            tableColumn && tableColumn.align === 'right'
          ),
          _defineProperty(
            _classNames,
            classes.cellCenterAlign,
            tableColumn && tableColumn.align === 'center'
          ),
          _classNames),
          className
        ),
      },
      restProps
    ),
    createElement(
      'div',
      {
        className: classes.container,
      },
      children
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableTreeCellBase.propTypes = {
      value: any,
      column: object,
      row: any,
      classes: object.isRequired,
      children: node,
      tableRow: object,
      tableColumn: object,
      className: string,
    })
  : void 0;
TableTreeCellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
};
const TableTreeCell = withStyles(styles$O)(TableTreeCellBase);

const TableTreeColumn = withComponents({
  Cell: TableTreeCell,
  Content: TableTreeContent,
  Indent: TableTreeIndent,
  ExpandButton: TableTreeExpandButton,
  Checkbox: TableTreeCheckbox,
})(TableTreeColumn$1);

const styles$P = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.action.active,
    },
  };
};

const SearchPanelInputBase = function SearchPanelInputBase(_ref) {
  const { onValueChange } = _ref;
  const { value } = _ref;
  const { getMessage } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'onValueChange',
    'value',
    'getMessage',
  ]);

  return createElement(
    Input,
    _extends(
      {
        onChange: function onChange(e) {
          return onValueChange(e.target.value);
        },
        value,
        type: 'text',
        placeholder: getMessage('searchPlaceholder'),
      },
      restProps,
      {
        startAdornment: createElement(
          InputAdornment,
          {
            position: 'start',
          },
          createElement(SearchIcon, null)
        ),
      }
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (SearchPanelInputBase.propTypes = {
      onValueChange: func.isRequired,
      value: string,
      getMessage: func.isRequired,
    })
  : void 0;
SearchPanelInputBase.defaultProps = {
  value: '',
};
const SearchPanelInput = withStyles(styles$P)(SearchPanelInputBase);

const SearchPanel = withComponents({
  Input: SearchPanelInput,
})(SearchPanel$1);

function _createSuper$5(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], () => {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    const Super = _getPrototypeOf(Derived);
    let result;

    if (isNativeReflectConstruct()) {
      const NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

const styles$Q = function styles(theme) {
  return {
    dividerRight: {
      borderRight: getBorder(theme),
    },
    dividerLeft: {
      borderLeft: getBorder(theme),
    },
    fixedCell: getStickyCellStyle(theme),
    selected: {
      backgroundColor: 'inherit',
    },
  };
};

const FixedCellBase = /* #__PURE__ */ (function (_React$PureComponent) {
  _inherits(FixedCellBase, _React$PureComponent);

  const _super = _createSuper$5(FixedCellBase);

  function FixedCellBase() {
    _classCallCheck(this, FixedCellBase);

    return _super.apply(this, arguments);
  }

  _createClass(FixedCellBase, [
    {
      key: 'render',
      value: function render() {
        let _classNames;

        const _this$props = this.props;
        const { className } = _this$props;
        const { classes } = _this$props;
        const CellPlaceholder = _this$props.component;
        const { position } = _this$props;
        const { selected } = _this$props;
        const { showLeftDivider } = _this$props;
        const { showRightDivider } = _this$props;
        const { side } = _this$props;
        const { style } = _this$props;
        const restProps = _objectWithoutProperties(_this$props, [
          'className',
          'classes',
          'component',
          'position',
          'selected',
          'showLeftDivider',
          'showRightDivider',
          'side',
          'style',
        ]);

        return createElement(
          CellPlaceholder,
          _extends(
            {
              className: classNames(
                ((_classNames = {}),
                _defineProperty(
                  _classNames,
                  classes.dividerLeft,
                  showLeftDivider
                ),
                _defineProperty(
                  _classNames,
                  classes.dividerRight,
                  showRightDivider
                ),
                _defineProperty(_classNames, classes.fixedCell, true),
                _defineProperty(_classNames, classes.selected, selected),
                _classNames),
                className
              ),
              style: _objectSpread2(
                {},
                style,
                _defineProperty({}, side, position)
              ),
            },
            restProps
          )
        );
      },
    },
  ]);

  return FixedCellBase;
})(PureComponent);

process.env.NODE_ENV !== 'production'
  ? (FixedCellBase.propTypes = {
      component: func.isRequired,
      classes: object.isRequired,
      className: string,
      position: number,
      selected: bool,
      showLeftDivider: bool,
      showRightDivider: bool,
      side: string.isRequired,
      style: object,
    })
  : void 0;
FixedCellBase.defaultProps = {
  className: undefined,
  position: undefined,
  selected: false,
  showLeftDivider: false,
  showRightDivider: false,
  style: null,
};
const FixedCell = withStyles(styles$Q, {
  name: 'TableFixedCell',
})(FixedCellBase);

const styles$R = function styles() {
  return {
    cell: {
      border: 0,
    },
  };
};

const TableBorderlessStubCellBase = function TableBorderlessStubCellBase(_ref) {
  const { className } = _ref;
  const { classes } = _ref;
  const restProps = _objectWithoutProperties(_ref, ['className', 'classes']);

  return createElement(
    TableStubCell,
    _extends(
      {
        className: classNames(classes.cell, className),
      },
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableBorderlessStubCellBase.propTypes = {
      classes: object.isRequired,
      className: string,
    })
  : void 0;
TableBorderlessStubCellBase.defaultProps = {
  className: undefined,
};
const TableBorderlessStubCell = withStyles(styles$R, {
  name: 'TableBorderlessStubCell',
})(TableBorderlessStubCellBase);
const TableListenerCell = function TableListenerCell(_ref2) {
  const { listen } = _ref2;
  const { onSizeChange } = _ref2;
  const restProps = _objectWithoutProperties(_ref2, ['listen', 'onSizeChange']);

  return listen
    ? createElement(
        Sizer,
        _extends(
          {
            containerComponent: TableBorderlessStubCell,
            onSizeChange,
          },
          restProps
        )
      )
    : createElement(TableBorderlessStubCell, restProps);
};
process.env.NODE_ENV !== 'production'
  ? (TableListenerCell.propTypes = {
      listen: bool.isRequired,
      onSizeChange: func.isRequired,
    })
  : void 0;

const TableFixedColumns = withComponents({
  Cell: FixedCell,
  ListenerRow: TableInvisibleRow,
  ListenerCell: TableListenerCell,
})(TableFixedColumns$1);

const TableSummaryRow = withComponents({
  TotalRow: TableRow,
  GroupRow: TableRow,
  TreeRow: TableRow,
  TotalCell: TableCell,
  GroupCell: TableCell,
  TreeCell: TableCell,
  TableTreeCell,
  TableTreeContent,
  TableTreeIndent,
  Item: TableSummaryItem,
})(TableSummaryRow$1);
TableSummaryRow.TREE_ROW_TYPE = TableSummaryRow$1.TREE_ROW_TYPE;
TableSummaryRow.GROUP_ROW_TYPE = TableSummaryRow$1.GROUP_ROW_TYPE;
TableSummaryRow.TOTAL_ROW_TYPE = TableSummaryRow$1.TOTAL_ROW_TYPE;

const TableInlineCellEditing = withComponents({
  Cell: EditCell,
})(TableInlineCellEditing$1);

const ToggleButton$2 = function ToggleButton(_ref) {
  const { onToggle } = _ref;
  const { getMessage } = _ref;
  const { buttonRef } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'onToggle',
    'getMessage',
    'buttonRef',
  ]);

  return createElement(
    Tooltip,
    {
      title: getMessage('showExportMenu'),
      placement: 'bottom',
      enterDelay: 300,
    },
    createElement(
      IconButton,
      _extends(
        {
          onClick: onToggle,
          ref: buttonRef,
        },
        restProps
      ),
      createElement(Save, null)
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (ToggleButton$2.propTypes = {
      onToggle: func.isRequired,
      getMessage: func.isRequired,
      buttonRef: func.isRequired,
    })
  : void 0;

const Menu = function Menu(_ref) {
  const { visible } = _ref;
  const { target } = _ref;
  const { onHide } = _ref;
  const { children } = _ref;
  const restProps = _objectWithoutProperties(_ref, [
    'visible',
    'target',
    'onHide',
    'children',
  ]);

  return createElement(
    Menu$1,
    _extends(
      {
        keepMounted: true,
        open: visible,
        anchorEl: target,
        onClose: onHide,
      },
      restProps
    ),
    children
  );
};
process.env.NODE_ENV !== 'production'
  ? (Menu.propTypes = {
      onHide: func.isRequired,
      children: node.isRequired,
      visible: bool,
      target: oneOfType([object, func]),
    })
  : void 0;
Menu.defaultProps = {
  visible: false,
  target: null,
};

const MenuItem = forwardRef((_ref, ref) => {
  const { text } = _ref;
  const { onClick } = _ref;
  const restProps = _objectWithoutProperties(_ref, ['text', 'onClick']);

  return createElement(
    MenuItem$1,
    _extends(
      {
        onClick,
        ref,
      },
      restProps
    ),
    text
  );
});
MenuItem.propTypes = {
  text: string.isRequired,
  onClick: func,
};
MenuItem.defaultProps = {
  onClick: function onClick() {},
};

const ExportPanel = withComponents({
  ToggleButton: ToggleButton$2,
  Menu,
  MenuItem,
})(ExportPanel$1);

export {
  ColumnChooser,
  DragDropProvider,
  ExportPanel,
  Grid,
  GroupingPanel,
  PagingPanel,
  SearchPanel,
  Table$1 as Table,
  TableBandHeader,
  TableColumnReordering,
  TableColumnResizing,
  TableColumnVisibility,
  TableEditColumn,
  TableEditRow,
  TableFilterRow,
  TableFixedColumns,
  TableGroupRow,
  TableHeaderRow,
  TableInlineCellEditing,
  TableRowDetail,
  TableSelection,
  TableSummaryRow,
  TableTreeColumn,
  Toolbar$1 as Toolbar,
  VirtualTable,
};
// # sourceMappingURL=dx-react-grid-material-ui.es.js.map
