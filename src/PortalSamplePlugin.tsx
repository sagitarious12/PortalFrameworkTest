import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import {TaskListComponent} from './components/CustomTaskList/CustomTaskList.Container';

const PLUGIN_NAME = 'PortalSamplePlugin';

import reducers, { namespace } from './components/state';
import { Portal2Component } from './components/portal2/portal2.Container';

export default class PortalSamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    this.registerReducers(manager);

    const options: Flex.ContentFragmentProps = { sortOrder: -1 };
    flex.AgentDesktopView.Panel2.Content.add(<TaskListComponent key="PortalSamplePlugin-component" />, options);
    flex.AgentDesktopView.Panel2.Content.add(<Portal2Component key="PortalSamplePlugin-component" />, options);
  }
  
  registerReducers(manager: any) {
    if (!manager.store.addReducer) {
      // eslint-disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${Flex.VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
