import * as React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {

  render(){

    return(
      <div className="jumbotron">
        <h1>Pluralsight Admin</h1>
        <Link to="about" className = "btn btn-primary">Learn more</Link>
      </div>
    );
  }



}
