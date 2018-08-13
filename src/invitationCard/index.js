import React, { Component } from "react";
import "./index.css";
export default class InvitationCard extends Component {
  constructor() {
    super();
  }
  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div
        id="invitation"
        onTouchMove={e => {
          debugger;
          console.log("滑动触发:", e.pageX, e.pageY);
        }}
      >
        <div id="page1">
          <div className="home-page">
            <div className="name">
              <h1>请柬</h1>
              <h3>新郎：张兴望</h3>
              <h3>新娘：贺迎春</h3>
            </div>
            <div className="address">
              <p>婚礼地点：河北省武强县南谷庄</p>
              <p>婚礼时间：2018年10月5号(戊戌年八月二十六)</p>
            </div>
          </div>
        </div>
        <div id="page2">
          <div className="home-page">
            <div className="name">
              <h1>请柬</h1>
              <h3>新郎：张兴望</h3>
              <h3>新娘：贺迎春</h3>
            </div>
            <div className="address">
              <p>婚礼地点：河北省武强县南谷庄</p>
              <p>婚礼时间：2018年10月5号(戊戌年八月二十六)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
