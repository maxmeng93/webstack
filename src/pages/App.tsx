import * as React from "react";
import { BackTop, Row, Col } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";
import BasicLayout from "../layouts/BasicLayout";
import styles from "./App.module.scss";
import "antd/dist/antd.min.css";

import fe from "../assets/frontEnd";

const App = () => {
  const renderRow = (data: any) => {
    return data.map((e: any) => {
      if (e.children) {
        return renderRow(e.children);
      }
      return (
        <div key={e.title} className={styles.category}>
          <h4 className={styles.categoryTitle} id={e.title}>
            <AlignRightOutlined style={{ marginRight: 5 }} />
            {e.title}
          </h4>
          <Row gutter={16}>{renderCol(e.list)}</Row>
        </div>
      );
    });
  };

  const renderCol = (itemList: any) => {
    return itemList.map((e: any) => {
      const defaultImage = "/images/logo/default.png";
      let img = e.image || defaultImage;
      if (img.indexOf("http") !== 0) {
        img = "/webstack" + img;
      }

      return (
        <Col key={e.title} xxl={6} xl={8} lg={12} sm={24} xs={24}>
          <div className={styles.itemBox}>
            <img className={styles.itemImg} src={img} alt={e.title} />
            <div className={styles.itemTextBox}>
              <a href={e.href} target="_blank" rel="noopener noreferrer">
                <strong>{e.title}</strong>
              </a>
              <p title={e.desc}>{e.desc}</p>
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <div className={styles.app}>
      <BackTop style={{ right: 50 }} />
      <BasicLayout data={fe}>{renderRow(fe)}</BasicLayout>
    </div>
  );
};

export default App;
