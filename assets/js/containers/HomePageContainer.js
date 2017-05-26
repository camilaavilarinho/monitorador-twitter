import React from 'react';
// import HomePageReactTitle from '../components/HomePageReactTitle';
import Main from './Main';

// Dados teste
const DATA = [
  {
    created_at: 'Thu Apr 06 15:28:43 +0000 2017',
    text: 'RT @TwitterDev: 1/ Today we’re sharing our vision for the future of the Twitter API platform!\nhttps://t.co/XweGngmxlP',
    entities: {
      hashtags: [],
    },
    user: {
      name: 'Twitter API',
      profile_image_url: 'http://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png',
    },
  },
  {
    created_at: 'Thu Apr 06 15:28:43 +0000 2017',
    text: 'RT @TwitterDev: 1/ Today we’re sharing our vision for the future of the Twitter API platform!\nhttps://t.co/XweGngmxlP',
    entities: {
      hashtags: [],
    },
    user: {
      name: 'Twitter API',
      profile_image_url: 'http://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png',
    },
  },
  {
    created_at: 'Thu Apr 06 15:28:43 +0000 2017',
    text: 'RT @TwitterDev: 1/ Today we’re sharing our vision for the future of the Twitter API platform!\nhttps://t.co/XweGngmxlP',
    entities: {
      hashtags: [],
    },
    user: {
      name: 'Twitter API',
      profile_image_url: 'http://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png',
    },
  },
  {
    created_at: 'Mon Apr 03 16:09:50 +0000 2017',
    text: 'RT @TwitterMktg: Starting today, businesses can request and share locations when engaging with people in Direct Messages. https://t.co/rpYn…',
    entities: {
      hashtags: [],
    },
    user: {
      name: 'Twitter API',
      profile_image_url: 'http://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png',
    },
  },
  {
    created_at: 'Thu Apr 06 15:28:43 +0000 2017',
    text: 'RT @TwitterDev: 1/ Today we’re sharing our vision for the future of the Twitter API platform!\nhttps://t.co/XweGngmxlP',
    entities: {
      hashtags: [],
    },
    user: {
      name: 'Twitter API',
      profile_image_url: 'http://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png',
    },
  },
];
/* You also get this warning in v1.x if you write your root component as
   stateless plain function instead of using React.Component. This problem
   is already solved completely in the upcoming v3.x.
   https://github.com/gaearon/react-hot-loader/blob/4978bffbb82a2508cf5d4ef2eee8b9b9101284ad/docs/Troubleshooting.md */
// eslint-disable-next-line react/prefer-stateless-function
export default class HomePageContainer extends React.Component {
  render() {
    return <Main data={DATA} />;
  }
}
