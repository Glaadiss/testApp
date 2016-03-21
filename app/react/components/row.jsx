import React from 'react';

class Row extends React.Component {

	remove(row){
		console.log(row.target.id);
		$(row.target).parent().parent().hide();
	}
  render() {
    	const name = this.props.obj.name;
    	const age = this.props.obj.age;
    	const surname = this.props.obj.surname;
    	const id = this.props.obj.id;
    return(
	      <tr  id={id} >
	        <td> {name}</td>
	        <td> {id}</td>
	        <td> {surname} </td>
	        <td> <a   href={"/users/"+id}> Show</a></td>
	        <td> <a   href={'/users/'+id+'/edit'}> Edit</a></td>
	        <td><a onClick={this.remove.bind(this)} id={Date.now()} href={'/users/'+id} data-method='delete' data-remote='true'> Delete</a></td>
	      </tr>  

    );
  }
}

export default Row;
