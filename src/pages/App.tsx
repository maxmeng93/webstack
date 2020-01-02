import React, { Component } from 'react';
import { Button } from 'antd';
import BasicLayout from '../layouts/BasicLayout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicLayout>
          <Button type="primary">Button</Button>
        </BasicLayout>
      </div>
    );
  }
}

export default App;