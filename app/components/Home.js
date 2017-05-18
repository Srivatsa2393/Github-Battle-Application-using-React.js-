var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component{
  render() {
    return(
      <div className="home-container">
        <h1>Github Battle: Battle your friends .. know the power</h1>
        <h2>Work by Srivatsa</h2>

        <Link className="button" to="/battle">Are you ready to battle!</Link>
      </div>
    )
  }
}

module.exports = Home;
