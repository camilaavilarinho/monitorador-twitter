import React, { PropTypes } from 'react';

const Tweet = ({ image, user, text }) => (
  <li className="card row">
    <img className="d-flex mr-3 col-md-2" src={image} alt="" />
    <div className="card-block col-md-10">
      <h5 className="mt-0 mb-1" href="">{user}</h5>
      <p className="justify-content">{text}</p>
    </div>
  </li>
);

Tweet.propTypes = {
  image: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tweet;
