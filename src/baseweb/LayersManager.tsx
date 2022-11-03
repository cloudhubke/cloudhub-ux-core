import React from 'react';
import { LayersContext } from 'baseui/layer';
import { styled } from 'baseui/styles';
import { getOverrides } from 'baseui/helpers/overrides';

declare module 'baseui/layer' {
  export const LayersContext: React.Context<{
    zIndex: number;
    mountNode: HTMLElement;
    host: HTMLElement;
  }>;
}

declare module 'baseui/styles' {
  export const styled: any;
}

// const StyledAppContainer = (style) =>
//   styled('div', {
//     flex: 1,
//     // height: '100%',
//     // width: '100%',
//     position: 'relative',
//     display: 'flex',
//     ...style,
//     // backgroundColor: 'cyan',
//   });

const LayersManager: React.FC<{
  [x: string]: any;
  children: React.ReactNode;
  zIndex?: number;
  style?: React.CSSProperties;
}> = React.memo(({ children, zIndex = 1301, style = {}, ...props }) => {
  const { overrides = {} } = props;
  const host = React.useRef<any>();
  const containerRef = React.useRef();
  const values: any = React.useContext(LayersContext);

  const StyledAppContainer = React.useMemo(() => {
    return styled('div', {
      flex: 1,
      // height: '100%',
      // width: '100%',
      position: 'relative',
      display: 'flex',
      ...style,
      // backgroundColor: 'cyan',
    });
  }, [JSON.stringify(style)]);

  const StyledLayersContainer = React.useMemo(() => styled('div', {}), []);

  const [AppContainer, appContainerProps] = getOverrides(
    overrides.AppContainer,
    StyledAppContainer
  );
  const [LayersContainer, layersContainerProps] = getOverrides(
    overrides.LayersContainer,
    StyledLayersContainer
  );
  return (
    <LayersContext.Provider
      value={{
        ...values,
        zIndex,
      }}
    >
      <AppContainer {...appContainerProps} ref={containerRef}>
        {children}
      </AppContainer>
      <LayersContainer {...layersContainerProps} ref={host} />
    </LayersContext.Provider>
  );
});

export default LayersManager;
