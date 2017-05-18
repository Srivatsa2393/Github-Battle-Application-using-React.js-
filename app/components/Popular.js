import React from 'react';
import PropTypes from 'prop-types';


class SelectLanguage extends React.Component{
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return(
      <ul className="languages">
        {languages.map(function(language){
          return (
            <li
              style={language === this.props.selectedLanguage ? {color: '#d0021b'}: null}
              onClick={this.props.onSelect.bind(null, language)}
              key={language}>
              {language}
            </li>
          )
        }, this)}
      </ul>
    );
  }
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

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
    return(
      <div>
        <SelectLanguage
          selectedLanguage= {this.state.selectedLanguage}
          onSelect= {this.updateLanguage}
          />
      </div>
    );
  }
}

export default Popular;
