import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { AlignRightOutlined } from '@ant-design/icons';
import BasicLayout from '../layouts/BasicLayout';
import styles from './App.module.css';

import fe from '../assets/FE';

interface ItemList {
  title: string;
  icon: string;
  list: Item[];
}

interface Item {
  title: string;
  image?: string;
  href: string;
  desc: string;
}

class App extends Component {
  renderRow = (data: ItemList[]) => {
    return data.map((e: ItemList) => {
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

  renderCol = (itemList: Item[]) => {
    return itemList.map((e: Item) => {
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
        <BasicLayout>
          { this.renderRow(fe) }
        </BasicLayout>
      </div>
    );
  }
}

export default App;