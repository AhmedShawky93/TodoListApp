import React from 'react';
import './TodoItems.css'

const TodoItems = (props) => {
    const { items, deleteItem } = props;
    const length = items.length;
    //if ListItems == items.length =>
    const ListItems = length? (
        items.map(item => {
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
        //esle =>
    ) : (
            <p>there is no item to show</p>
        )
    return (
        <div className='Listitem'>
            <div>
                <span className="title name">Name</span>
                <span className="title age">Age</span>
                <span className="title action">Action</span>
            </div>
            {ListItems}
        </div>
    );
}

export default TodoItems;
