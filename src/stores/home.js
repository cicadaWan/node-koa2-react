import { observable, computed, action, runInAction, toJS } from 'mobx';
import React from 'react';
import List from '../components/a';
import Detail from '../components/b';

class HomeStore {
  EmnuCardType = [
    {
      key: 'detailcard',
      label: '详情',
      component: props => <PushTaskDetail {...props} />,
      initFun: this.getPushTaksDetail
    },
    {
      key: 'datacard',
      label: '数据',
      component: props => <PushTaskData {...props} />,
      initFun: this.getPushTaksData
    },
    {
      key: 'create',
      label: '创建',
      component: props => <SavePushTask {...props} />
    }
  ];
  @observable
  tabs = [
    {
      key: 'getPushTaskList',
      label: '推送任务',
      undelete: true,
      type: 'getPushTaskList',
      component: props => <PushTaskList {...props} />,
      initFun: this.getPushTaskList
    },
    {
      key: 'getTouchTaskList',
      label: '触达任务',
      undelete: true,
      type: 'getTouchTaskList',
      component: props => <PushTaskList {...props} />,
      initFun: this.getTouchTaskList
    }
  ];

  @action
  onChangeTabs = ({ tabs = this.tabs, extTabs = [] }) => {
    this.tabs = [...tabs, ...extTabs];
  };

  getPushTaskList({ formData = {} }) {
    console.log(`getPushTaskList`, formData);
  }

  getTouchTaskList({ formData = {} }) {
    console.log(`getTouchTaskList`, formData);
  }
}
export default new HomeStore();
