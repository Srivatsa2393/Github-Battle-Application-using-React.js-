var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var Loading = require('./Loading');


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

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
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
        ? <Loading />
        : <RepoGrid repos={this.state.repos} /> }

       </div>
    );
  }
}

module.exports = Popular;
