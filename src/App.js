import React from 'react'
import Todolist from './todoList'
import CreateTodo from './createToDo'
import _ from 'lodash'

const items = [
	{
		name:'Harsha',
		age:23
	}
]

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			items
		}
	}
	addNewProfile(name){
		this.state.items.push({
			name,
			age:20
		})
		this.setState({items:this.state.items})
	}
	deleteCurrentProfile(currentitem){
		_.remove(this.state.items,todo => todo.name === currentitem)
		this.setState({items:this.state.items})
	}

	saveCurrentProfile(oldItem,newItem){
		const findItem = _.find(this.state.items,todo =>todo.name === oldItem)
		findItem.name = newItem
		this.setState({items:this.state.items})
	}
	render(){
		return (
			<div>
				<h1>Todo App</h1>
				<CreateTodo addItem={this.addNewProfile.bind(this)}/>
				<Todolist saveCurrentProfile={this.saveCurrentProfile.bind(this)} items={this.state.items} deleteItem={this.deleteCurrentProfile.bind(this)}/>
			</div>
		)
	}
}

export default App