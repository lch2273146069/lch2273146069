import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../item'
import './index.css'

export default class List extends Component {
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired
    }
    render() {
        const { todos, updateTodo, deleteTodo } = this.props;
        return (
            <ul className='todo-main'>
                {todos.map(function (item) { return <Item deleteTodo={deleteTodo} updateTodo={updateTodo} key={item.id} {...item}></Item> })}
            </ul>
        )
    }
}
