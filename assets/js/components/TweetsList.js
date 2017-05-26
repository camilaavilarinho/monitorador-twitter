import React, { PropTypes } from 'react';
import Tweet from './Tweet';

const TweetsList = ({ data, filter }) => {
  const input = filter.trim().toLowerCase();
  const tweets = data
    .filter(tweet => (
      tweet.text.toLowerCase().match(input)
    ))
    .map((tweet, i) => (
      <Tweet
        image={tweet.user.profile_image_url}
        user={tweet.user.name}
        key={i}
        text={tweet.text}
      />
  ));

  return (
    <ul className="list-unstyled">
      {tweets}
    </ul>
  );
};

TweetsList.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  filter: PropTypes.string,
};

export default TweetsList;
