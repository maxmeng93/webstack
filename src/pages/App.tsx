import React, { Component } from 'react';
import { Row, Col } from 'antd';
import BasicLayout from '../layouts/BasicLayout';
import './App.css';

import data from '../assets/FE';

interface ItemList {
  title: string;
  icon: string;
  list?: Item[];
}

interface ItemChildren {
  title: string;
  icon: string;
  children?: ItemChildren[];
}

interface Item {
  title: string;
  image?: string;
  href: string;
  desc: string;
}

class App extends Component {
  renderRow = (d: ItemList[] | ItemChildren[]) => {
    console.log(d);
    return d.map((e: ItemList | ItemChildren) => {
      console.log(e);
      // if (e.children) {
      //   return this.renderRow(e.children);
      // }
      return (
        <Row key={e.title}>
          {e.title}
        </Row>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <BasicLayout>
          { this.renderRow(data) }
          <Row>
            <Col span={6}>
              <div style={{
                margin: 15,
                height: 54
              }}>
                <img src="" alt=""/>
              </div>
            </Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </BasicLayout>
      </div>
    );
  }
}

export default App;