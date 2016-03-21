import {EventEmitter} from 'events';
import Dispatcher from './dispatcher';
class Store extends EventEmitter {
	constructor(){
		super();
		this.users = [];
	}

	createUser(name,surname, age, id){
		this.users.push({
			id,
			name,
			age,
			surname
		});
		this.emit("change");
	}
	deleteUser(id){
		this.users.map((obj,i)=>{
			if(obj.id == id){
				this.users = this.users.slice(i);
			}
		});
		this.emit("change");
	}

	getUsers(){
		return this.users;
	}

	handleActions(action){
		switch(action.type){
			case "create_user": 
				this.createUser(action.name, action.surname, action.age, action.id);
				break;
			case "receive_users":
				this.users = action.users
				this.emit("change");
				break;
			case "delete_users":
				this.users= [];
				this.emit("change");
				break;
			// case "delete_user": {
			// 	this.deleteUser(action.id)
			// }
		}
	}
}

const store = new Store;
Dispatcher.register(store.handleActions.bind(store))
window.dispatcher = Dispatcher;
export default store;