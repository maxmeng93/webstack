import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { AlignRightOutlined } from '@ant-design/icons';
import BasicLayout from '../layouts/BasicLayout';
import styles from './App.module.css';

import fe from '../assets/frontEnd';

class App extends Component {
  renderRow = data => {
    return data.map(e => {
      return (
        <div key={e.title} className={styles.category}>

          <h4 className={styles.categoryTitle} id={e.title}>
            <AlignRightOutlined style={{marginRight: 5}} />{e.title}
          </h4>
          <Row gutter={16}>
            {this.renderCol(e.list)}
          </Row>
        </div>
      );
    });
  }

  renderCol = (itemList) => {
    return itemList.map(e => {
      return (
        <Col key={e.title} xxl={6} xl={8} lg={12} sm={24} xs={24}>
          <div className={styles.itemBox}>
            <img 
              className={styles.itemImg} 
              src={e.image ? e.image : './images/logo/default.png'} 
              alt={e.title} 
            />
            <div className={styles.itemTextBox} >
              <a href={e.href}>
                <strong>{e.title}</strong>
              </a>
              <p title={e.desc}>{e.desc}</p>
            </div>
          </div>
        </Col>
      );
    })
  }

  render() {
    return (
      <div className="App">
        <BasicLayout data={fe}>
          { this.renderRow(fe) }
        </BasicLayout>
      </div>
    );
  }
}

export default App;