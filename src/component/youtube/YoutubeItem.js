import React from 'react';

const YoutubeItem = (props) => {
    return (
        <div>
    <div className="image">
      <div className="thumnail">
        <img src={props.thumnail1} alt="" className="imge" />
      </div>
      
    </div>
    <div className="footer">
        <div className="avatar">
          <img src={props.avatar1} alt="" />
        </div>
        <div className="infor">
          <h3 className="title">{props.title1}</h3>
          <h4 className="author">{props.author1}</h4>
        </div>
      </div>
  </div>
    );
};

export default YoutubeItem;