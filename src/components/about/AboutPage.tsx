import * as React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component<{}, {}> {
  render() {

    return (
      <div>
        <h1>About</h1>
        <p>this app uses React, Redux, and React Router</p>
      </div>
    );
  }
}

export default AboutPage;
