import * as React from 'react';
import { StatefulPopover } from 'baseui/popover';
import { useRect } from '@reach/rect';
import ThemeContext from '../theme/ThemeContext';

let rect: any = {};

const BaseWebPopover: React.FC<{
  [x: string]: any;
  anchorComponent: any;
  children: any;
  triggerType?: 'click' | 'hover';
  arrow?: boolean;
  containerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  overrides?: {
    Arrow: any;
    Body: any;
    Inner: any;
  };
  open?: boolean;
  onClose?: () => void;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
  color?: string;
  dismissOnClickOutside?: boolean;
  dismissOnEsc?: boolean;
}> = React.forwardRef(
  (
    {
      anchorComponent,
      children,
      triggerType,
      arrow,
      containerStyle,
      bodyStyle = {},
      overrides = {
        Arrow: {},
        Body: {},
        Inner: {},
      },
      open,
      onClose = () => null,
      placement = 'bottomLeft',
      color = '#FCFCFC',
      ...props
    },
    ref
  ) => {
    const { sizes, colors } = React.useContext(ThemeContext);
    const anchorRef = React.useRef<any>();
    // rect = useRect(anchorRef) || {};
    rect = useRect(anchorRef, !rect.height) || {};

    const [isOpen, setIsOpen] = React.useState(open);

    const bodyStyles = {
      backgroundColor: 'transparent',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
      borderBottomLeftRadius: '5px',
      ...bodyStyle,
    };

    const paperStyles = {
      ...bodyStyles,
      width: rect.width || 0,
      minHeight: rect.height || 0,
      overflowY: 'hidden',
      display: 'flex',
      backgroundColor: color,
    };

    const Content = ({ close }) => {
      if (!children) {
        return children;
      }
      if (typeof children === 'function') {
        return children({ rect, onClose: close });
      }

      return React.cloneElement(children, {
        ...children.props,
        onClose: close,
        style: { ...paperStyles, ...children.props.style },
      });
    };

    const AnchorElement = React.forwardRef((props, ref) => {
      if (typeof anchorComponent === 'function') {
        return anchorComponent();
      }

      return React.cloneElement(anchorComponent, {
        ...anchorComponent.props,
        ...(props || {}),
        style: { margin: 0, ...anchorComponent.props.style },
        ref,
      });
    });

    const offset = {
      ...(placement === 'bottomLeft' || placement === 'topLeft'
        ? { left: sizes.padding }
        : {}),
    };

    React.useImperativeHandle(ref, () => ({
      open: () => {
        setIsOpen(true);
      },
    }));

    React.useEffect(() => {
      setIsOpen(open);
    }, [open]);

    return (
      <div
        ref={anchorRef}
        style={{
          float: 'left',
          display: 'inline-block',
          flex: 0,
          ...containerStyle,
        }}
      >
        <StatefulPopover
          initialState={{ isOpen: Boolean(isOpen) }}
          onClose={() => {
            onClose();
          }}
          content={Content}
          returnFocus
          autoFocus
          triggerType={triggerType}
          showArrow={arrow}
          placement={placement}
          overrides={{
            Arrow: {
              style: {
                backgroundColor: color,
                border: `${sizes.padding}px solid ${color}`,
                ...(overrides.Arrow ? overrides.Arrow.style : {}),
              },
              props: {
                $arrowOffset: {
                  ...offset,
                },
                ...(overrides.Arrow ? overrides.Arrow.props : {}),
              },
              ...overrides.Arrow,
            },
            Body: {
              style: {
                ...bodyStyles,
                ...(overrides.Body ? overrides.Body.style : {}),
              },
            },
            Inner: {
              style: {
                backgroundColor: 'transparent',
                ...(overrides.Inner ? overrides.Inner.style : {}),
              },
            },
          }}
          {...props}
        >
          <div style={{ cursor: 'pointer' }}>
            <AnchorElement />
          </div>
        </StatefulPopover>
      </div>
    );
  }
);

export default BaseWebPopover;

//     overrides={{
//       Arrow: {
//         style: (props) => {
//           console.log('====================================');
//           console.log('PROPS', props);
//           console.log('====================================');
//           return {
//             backgroundColor: colors.gray2,
//             // border: `${sizes.padding}px solid ${colors.gray2}`,
//           };
//         },
//         props: {
//           $arrowOffset: {
//             left: sizes.padding,
//           },
//         },
//       },
//       Body: {
//         style: () => ({
//           marginTop: `${sizes.padding}px`,
//         }),
//       },
//       Inner: {
//         style: {},
//       },
//     }}
