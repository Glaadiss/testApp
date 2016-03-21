import React from 'react';

import Store from './store';
import Row from './row';
import * as UserAction from './user-action';
class Users extends React.Component {
	constructor(){
		super();
			this.state = {
				users: []
			};
	setTimeout(()=>{
	 	const users2 = this.props.users;
	 	this.setState({users: users2});
	},100)
		}



	create(){
			const users = this.state.users;
			console.log('Created');
	}
	componentWillMount(){
		Store.on('change', ()=>{
			this.setState({
				users: Store.getUsers()
			});
		})
	}
	createUser(){
		UserAction.createUser('asdsa','dsda',21,Date.now());
	}
	reloadUser(){
		UserAction.reloadUser();
	}
	deleteUser(){

	}
	deleteUsers(){
		UserAction.deleteUsers();
	}


  render() {
      const users = this.state.users;
      const map = users.map((object,i) => <Row key={i} obj={object}/>);
    return(
      <div className="container">
      <h1> Users: </h1>
      <table className="table">
  		<thead>
    	<tr>
      <th>Name</th>
      <th>Surname</th>
      <th>Age</th>
      <th colSpan="3"></th>
    	</tr>
  		</thead>
  		<tbody>
  		      {map}
  		</tbody>
  		</table>
  		<br/>
  		<a href="/users/new"> Create new </a>
  		<a href="#" onClick={this.createUser.bind(this)}> Create john </a>
  		<a href="#" onClick={this.reloadUser.bind(this)}> Reload </a>
  		<a href="#" onClick={this.deleteUsers}> Remove all </a>
      </div>
    );
  }
}

 export default Users;

