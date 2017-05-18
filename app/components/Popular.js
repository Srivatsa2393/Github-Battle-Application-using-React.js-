<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';


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

function RepoGrid(props){
  return(
    //unordered list to map over the repos
    <ul className='popular-list'>
      {props.repos.map(function(repo, index){
        return(
          <li key={repo.name} className='popular-item'>

            <div className='popular-rank'>
              #{index + 1}
            </div>

            <ul className="space-list-items">
              <li>
                <img className="avatar"
                  src={repo.owner.avatar_url}
                  alt={'Avatar for' + repo.owner.login} />
              </li>

              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>

              <li>
                @{repo.owner.login}
              </li>

              <li>
                {repo.stargazers_count} stars
              </li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

class Popular extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  //Lifecycle methods
  componentDidMount(){
    this.updateLanguage(this.state.selectedLanguage);
  }

  //a new method to determine the selected language and update the initial state
  updateLanguage(language) {
    this.setState(function() {
      return{
        selectedLanguage: language,
        repos: null
      }
    });

    //AJAX request
    api.fetchPopularRepos(language)
      .then(function(repos){
        //console.log(repos);
        this.setState(function(){
          return {
            repos: repos
          }
        })
      }.bind(this));
  }

  render() {
    return(
      <div>
        <SelectLanguage
          selectedLanguage= {this.state.selectedLanguage}
          onSelect= {this.updateLanguage}
          />
        {!this.state.repos
        ? <p>LOADING</p>
        : <RepoGrid repos={this.state.repos} /> }

       </div>
    );
  }
}

export default Popular;
=======
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
>>>>>>> 8095acd15dbc43744158f1528a431c07ad312aad
