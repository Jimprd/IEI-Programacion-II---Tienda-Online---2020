import React from "react";
// import axios from "axios";

export default function Reviews() {
  return (
    <>
      {/* <!--<p>There are no reviews for this product.</p>--> */}
      <div className="review-item clearfix">
        <div className="review-item-submitted">
          <strong>Bob</strong>
          <em>30/12/2013 - 07:37</em>
          <div
            className="rateit"
            data-rateit-value="5"
            data-rateit-ispreset="true"
            data-rateit-readonly="true"
          ></div>
        </div>
        <div className="review-item-content">
          <p>
            Sed velit quam, auctor id semper a, hendrerit eget justo. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Duis vel arcu pulvinar dolor tempus feugiat id in
            orci. Phasellus sed erat leo. Donec luctus, justo eget ultricies
            tristique, enim mauris bibendum orci, a sodales lectus purus ut
            lorem.
          </p>
        </div>
      </div>
      <div className="review-item clearfix">
        <div className="review-item-submitted">
          <strong>Mary</strong>
          <em>13/12/2013 - 17:49</em>
          <div
            className="rateit"
            data-rateit-value="2.5"
            data-rateit-ispreset="true"
            data-rateit-readonly="true"
          ></div>
        </div>
        <div className="review-item-content">
          <p>
            Sed velit quam, auctor id semper a, hendrerit eget justo. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Duis vel arcu pulvinar dolor tempus feugiat id in
            orci. Phasellus sed erat leo. Donec luctus, justo eget ultricies
            tristique, enim mauris bibendum orci, a sodales lectus purus ut
            lorem.
          </p>
        </div>
      </div>

      {/* <!-- BEGIN FORM--> */}
      <form action="#" className="reviews-form">
        <h2>Write a review</h2>
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="require">*</span>
          </label>
          <input type="text" className="form-control" id="name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" id="email"></input>
        </div>
        <div className="form-group">
          <label htmlFor="review">
            Review <span className="require">*</span>
          </label>
          <textarea className="form-control" rows="8" id="review"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="email">Rating</label>
          <input
            type="range"
            value="4"
            readOnly
            step="0.25"
            id="backing5"
          ></input>
          <div
            className="rateit"
            data-rateit-backingfld="#backing5"
            data-rateit-resetable="false"
            data-rateit-ispreset="true"
            data-rateit-min="0"
            data-rateit-max="5"
          ></div>
        </div>
        <div className="padding-top-20">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
      {/* <!-- END FORM-->  */}
    </>
  );
}
