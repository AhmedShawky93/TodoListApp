import React, { Component } from 'react';
import './AddItems.css'

class AddItems extends Component {
    state = {
        name : '',
        age : ''
    }
    handlechange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlesubmit = (e) =>{
        e.preventDefault();
        if (e.target.age.value === '' || e.target.name.value === ''){
            return false;
        }else{
            this.props.addItem(this.state)
            this.setState({
                name:'',
                age:''
            })
        }
    }

    render() {
        return (
            <div className='AddItems'>
               <form onSubmit={this.handlesubmit}>
                   <input type="text" placeholder="Enter name..." id="name" onChange={this.handlechange} value={this.state.name}></input>
                   <input type="number" placeholder="Enter age..." id="age" min="0" onChange={this.handlechange} value={this.state.age}></input>
                   <input type="submit" value="Add"></input>
               </form>
            </div>
        );
    }
}

export default AddItems;
