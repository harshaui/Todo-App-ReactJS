import React from 'react'

class TodoListItems extends React.Component {
	constructor(){
		super();
		this.state ={
			isEdit:false
		}
	}
	editClick(){
		this.setState({isEdit:true})
	}
	cancelClick(){
		this.setState({isEdit:false})
	}
	renderItems(){
		const {name,age} = this.props
		if(this.state.isEdit){
			return (
				<td>
					<form onSubmit={this.saveClick.bind(this)}>
						<input type="text" defaultValue={name} ref="editInput"/>
					</form>
				</td>
			)
		}
		return (
			<td>{this.props.name}-{this.props.age}</td>
		)
	}

	saveClick(e){
		e.preventDefault()
		const oldItem = this.props.name
		const newItem = this.refs.editInput.value;
		this.props.saveCurrentProfile(oldItem,newItem)
		this.setState({isEdit:false})
	}
	renderItemsAction(){
		if(this.state.isEdit){
			return( <td>

			    <button className="btn btn-info">
                    <span className="glyphicon glyphicon-save" onClick={this.saveClick.bind(this)}> Save</span>
                </button>

				<button className="glyphicon glyphicon-remove-sign btn btn-danger" onClick={this.cancelClick.bind(this)}> Cancel</button>
			</td>)
		}
		return (
			<td>

			    <button className="btn btn-primary">
                    <span className="glyphicon glyphicon-pencil"  onClick={this.editClick.bind(this)}> Edit</span>
                </button>

                <button className="btn btn-danger">
                 <span className="glyphicon glyphicon-trash" onClick={this.props.deleteItem.bind(this,this.props.name)}> Delete</span>
                 </button>

			</td>
		)
	}


	render(){
		return (
			<tr>
				{this.renderItems()}
				{this.renderItemsAction()}
			</tr>
		)
	}
}

export default TodoListItems