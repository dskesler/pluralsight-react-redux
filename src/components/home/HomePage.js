import * as React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {

  render(){

    return(
      <div className="jumbotron">
        <h1>Pluralsight Admin</h1>

        <Link to="courses">Courses</Link>
        <Link to="about">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
