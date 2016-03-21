import Dispatcher from './dispatcher';

export function createUser(name,surname,age,id){
	Dispatcher.dispatch({
		type: 'create_user',
		name,
		surname,
		age,
		id
	})
}

export function deleteUsers(){
	Dispatcher.dispatch({
		type: 'delete_users'
	})
}

export function deleteUser(id){
	Dispatcher.dispatch({
		type: 'delete_User',
		id
	})
}

export function reloadUser(){
	Dispatcher.dispatch({type: "fetch_users"});
	setTimeout(()=>{
		Dispatcher.dispatch({type: "receive_users", users: [
			{
				id: 321412,
				name: 'aloo',
				surname: 'dsadasdsa',
				age: 21
			},
			{
				id: 2321321,
				name: 'wqwq',
				surname: 'dsagggg',
				age: 26
			}

			]})
	}, 1000);
}