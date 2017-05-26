import React, { PropTypes } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class FilterTerm extends React.Component {
  render() {
    const { filterVal, filterUpdate } = this.props;
    return (
      <form>
        <input
          className="form-control mr-sm-2"
          type="text"
          ref={(c) => { this.filterInput = c; }}
          placeholder="Filtrar por termo.."
          // binding the input value to state
          value={filterVal}
          onChange={() => {
            filterUpdate(this.filterInput.value);
          }}
        />
      </form>
    );
  }
}

FilterTerm.propTypes = {
  filterVal: PropTypes.string,
  filterUpdate: PropTypes.func,
};
