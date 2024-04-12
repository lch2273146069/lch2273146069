import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    deleteAllTodo = () => {
        const todoID = this.props.todos.map(i => {
            if (i.Done) return i.id
            else return -1
        })
        this.props.deleteTodo(todoID)
    }
    AllCheck = e => {
        this.props.checkAll(e.target.checked)
    }
    render() {
        const { todos } = this.props;
        const DoneTrue = todos.reduce((pre, todo) => pre + todo.Done, 0)
        // const DoneTrue = todos.filter(item => item.Done).length;
        return (
            <div className='todo-footer'>
                <label>
                    <input type="checkbox" onChange={this.AllCheck} checked={DoneTrue === todos.length && DoneTrue !== 0} />
                </label>
                <span>
                    <span>已完成{DoneTrue}</span>/ 全部{todos.length}
                </span>
                <button className='btn btn-danger' style={{ float: 'right' }} onClick={this.deleteAllTodo}>清除已完成任务</button>
            </div>
        )
    }
}
