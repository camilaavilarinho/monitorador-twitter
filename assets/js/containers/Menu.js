import React from 'react';
import FilterTerm from '../components/FilterTerm';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right" type="button"
          data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="">Filtros</a>
        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="">
              Usuário
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="">Data</a>
            <a className="nav-item nav-link" href="">#hashtag</a>
            <form className="form-inline">
              <FilterTerm
                {...this.props}
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
