import React from 'react';

import { StateToProps, DispatchToProps } from './CustomTaskList.Container';
import { ContainerIds, Portal } from '@xcelerate-ui/core';

interface OwnProps {
  // Props passed directly to the component
}

// Props should be a combination of StateToProps, DispatchToProps, and OwnProps
type Props = StateToProps & DispatchToProps & OwnProps;

// It is recommended to keep components stateless and use redux for managing states
export const CustomTaskList: React.FunctionComponent<Props> = (props: Props) => {
  return (
    props.loaded ? 
    <Portal
      containerId={'right-panel-container' as ContainerIds}
      reduxKey={"enablePortalSample"}
      reduxValue={props.enablePortalSample}
      key="test-portal"
      config={{ loaded: props.loaded, enablePortalSample: props.enablePortalSample }}
    >
      <div>
        This is the test portal that Riley Made. :D
      </div>
    </Portal> :
    <div />
  );
};