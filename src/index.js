import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import { Router, browserHistory, hashHistory } from 'react-router';
import stores from './stores';
import routes from './routes';
import './index.css';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <Provider {...stores}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </LocaleProvider>,
   document.getElementById('root'));
