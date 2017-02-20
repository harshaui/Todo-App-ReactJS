import React from 'react'

class SearchItem extends React.Component{

    filter(e){
        this.setState({filter:e.target.value})
    }
    render(
        let items = this.state.items
        if(this.state.filter){
            items = items.filter(item=>item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        }
    )
    return(
        <div>
            <form className="form-inline" onSubmit={this.filter.bind(this)}>
                <input ref="name" type="text" placeholder="Search a Profile" className="form-control"/>
                <button className="btn btn-primary">Submit</button>
            </form>

        </div>
    )

}

const SearchItem = (prop) => { return (<p>Searched names: {prop.update.name}</p>);}
export default SearchItem