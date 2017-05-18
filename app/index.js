import React from 'react';
import ReactDom from 'react-dom';
import index from './index.css';
import PropTypes from 'prop-types';

import App from './components/App';


//state
//lifecycle event
//UI

// class Badge extends React.Component{
//   render() {
//     return(
//       <div>
//         <img src={this.props.img}
//             alt = 'Avatar'
//             style={{width: 100, height: 100}} />
//
//       <h1>Name: {this.props.name}</h1>
//       <h3>username: {this.props.username}</h3>
//       </div>
//     );
//   }
// }
//
// Badge.PropTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired
// }
//
// ReactDom.render(<Badge
//   name="Srivatsa"
//   username="Srivatsa2393"
//   img= "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAP8AAAAJDhmN2EzN2MwLTYzMGItNDIxOS05YjJlLWVjZDdhNDRhZTQ5ZQ.jpg" />,
// document.getElementById('app'));


// class Users extends React.Component{
//   render() {
//     var friends = this.props.list.filter(function(user){
//       return user.friend === true;
//     })
//     var nonFriends = this.props.list.filter(function(user){
//       return user.friend !== true;
//     })
//     return(
//       <div>
//         <h1>Friends</h1>
//         <ul>
//           {friends.map(function(user){
//             return <li key={user.name}>{user.name}</li>
//           })}
//         </ul>
//
//         <hr />
//
//         <h1> Non Friends </h1>
//         <ul>
//           {nonFriends.map(function(user){
//             return <li key={user.name}>{user.name}</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
//
// Users.PropTypes = {
//   list: PropTypes.array.isRequired
// }

// ReactDom.render(
//   <Users list={[
//     { name: 'Tyler', friend: true },
//     { name: 'Ryan', friend: true },
//     { name: 'Michael', friend: false },
//     { name: 'Mikenzi', friend: false },
//     { name: 'Jessica', friend: true },
//     { name: 'Dan', friend: false }
//   ]}
//   />,
// document.getElementById('app')
// );



ReactDom.render(<App />, document.getElementById('app'));
