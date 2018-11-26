import React, { Component } from 'react';
import LeftContainer from './components/leftContainer/index';

// @LeftContainer中的WrappedComponent就是当前的这个App.js
//  App = LeftContainer(App) || App;

@LeftContainer
 class App extends React.Component{
  render(){
    const { children }= this.props;
    console.log('children是',children)
    return(
      <div>
        {children}
      </div>
    )
  }
}
export default App;