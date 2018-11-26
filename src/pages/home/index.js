import React, {Component} from 'react';
import { Tabs, Button } from 'antd';
import List from '../../components/home/a';
import Detail from '../../components/home/b';
import './index.less';

const TabPane = Tabs.TabPane;
export default class PopManage extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    this.callback = this.callback.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    // 如果是箭头函数的话，this指向已经绑定了可以定义panes在this.add之前，但是add(){}这种写法的话就会有执行顺序的问题，会引起panes未定义的错误
    const panes = [
      {
        title: 'Tab 1', 
        component: <List add={this.add} />, 
        key: '1',
        closable: false,
      },
    ];
    this.state = {
      isShow: false,
      activeKey: panes[0].key,
      panes,
    };
  }
   callback(key) {
    console.log(key);
  }

  onChange = (activeKey) => {
    this.setState({ activeKey }, () => {
    });
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add(record) {
    console.log(this);
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: '人群详情', component: <Detail />, key: activeKey, closable: true });
    this.setState({ panes, activeKey });
  }
  remove(targetKey) {
    console.log(this,11111);
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  render() {
    return (
      <Tabs
        hideAdd
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.component}</TabPane>)}
      </Tabs>
    )
  }
}