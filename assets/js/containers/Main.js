import React, { PropTypes } from 'react';
import Menu from './Menu';
import TweetsList from '../components/TweetsList';
// import FilterUser from './FilterUser';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value,
    });
  }

  render() {
    return (
      <div>
        <Menu
          filterVal={this.state.filterText}
          filterUpdate={e => this.filterUpdate(e)}
        />
        <TweetsList
          data={this.props.data}
          filter={this.state.filterText}
        />
      </div>
    );
  }
}

Main.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};
