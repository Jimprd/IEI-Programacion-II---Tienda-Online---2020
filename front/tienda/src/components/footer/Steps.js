import React from "react";

export default function Steps() {
  return (
    <>
      <div className="steps-block steps-block-red">
        <div className="container">
          <div className="row">
            <div className="col-md-4 steps-block-col">
              <i className="fa fa-truck"></i>
              <div>
                <h2>Free shipping</h2>
                <em>Express delivery withing 3 days</em>
              </div>
              <span>&nbsp;</span>
            </div>
            <div className="col-md-4 steps-block-col">
              <i className="fa fa-gift"></i>
              <div>
                <h2>Daily Gifts</h2>
                <em>3 Gifts daily for lucky customers</em>
              </div>
              <span>&nbsp;</span>
            </div>
            <div className="col-md-4 steps-block-col">
              <i className="fa fa-phone"></i>
              <div>
                <h2>477 505 8877</h2>
                <em>24/7 customer care available</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
