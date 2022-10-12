import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { CustomTaskList } from './CustomTaskList';

export interface StateToProps {
  loaded: boolean;
  enablePortalSample: boolean;
}

export interface DispatchToProps {
}

const mapStateToProps = (state: any): StateToProps => {
  let displayPortals = state['xcelerate-develop'].crmTabsState.displayPortals;
  let filtered = displayPortals.find((tab: any) => tab.portalId === 'riley-custom-tab');
  let shouldShow = filtered ? filtered.show : false;
  return {
    loaded: shouldShow,
    enablePortalSample: true,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
});

const CustomTaskListContainer = connect(mapStateToProps, mapDispatchToProps)(CustomTaskList);

export class TaskListComponent extends React.Component {
  render(): JSX.Element {
    return (
      <CustomTaskListContainer key="container"></CustomTaskListContainer>
    )
  }
}