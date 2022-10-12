import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Portal2 } from './portal2';

export interface StateToProps {
  loaded: boolean;
  enablePortalSample: boolean;
  firstLoad: boolean;
}

export interface DispatchToProps {
}

const mapStateToProps = (state: any): StateToProps => {
  let displayPortals = state['xcelerate-develop'].crmTabsState.displayPortals;
  let filtered = displayPortals.find((tab: any) => tab.portalId === 'fancy-new-tab');
  let shouldShow = filtered ? filtered.show : false;
  return {
    loaded: shouldShow,
    enablePortalSample: true,
    firstLoad: state['xcelerate-develop'].customTaskList.loaded
  }
};

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
});

const CustomTaskListContainer = connect(mapStateToProps, mapDispatchToProps)(Portal2);

export class Portal2Component extends React.Component {
  render(): JSX.Element {
    return (
      <CustomTaskListContainer key="container"></CustomTaskListContainer>
    )
  }
}