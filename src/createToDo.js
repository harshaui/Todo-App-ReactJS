import React from 'react'

class CreateTodo extends React.Component{
	addNewProfile(e){
		e.preventDefault()
		console.log(this.refs.newItem.value)
		this.props.addItem(this.refs.newItem.value)
		this.refs.newItem.value = ''
	}
	render(){
		return (
			<form className="form-inline" onSubmit={this.addNewProfile.bind(this)}>
				<input ref="newItem" type="text" placeholder="Add an Employee" className="form-control"/>
				<button className="glyphicon glyphicon-plus-sign btn btn-primary"> Add</button>
			</form>
		)
	}
}

export default CreateTodo