import React from 'react';

class Popular extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  //a new method to determine the selected language and update the initial state
  updateLanguage(language) {
    this.setState(function() {
      return{
        selectedLanguage: language
      }
    });
  }

  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return(
      <ul className="languages">
        {languages.map(function(language){
          return (
            <li
              style={language === this.state.selectedLanguage ? {color: '#d0021b'}: null}
              onClick={this.updateLanguage.bind(null, language)}
              key={language}>
              {language}
            </li>
          )
        }, this)}
      </ul>
    );
  }
}

export default Popular;
