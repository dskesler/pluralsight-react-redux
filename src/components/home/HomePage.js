import * as React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {

  render(){

    return(
      <div className="jumbotron">
        <h1>Keslers Courses</h1>
        <Link to="courses">Our Courses Listing</Link>
        <br/>
        <br/>
        <Link to="about">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
