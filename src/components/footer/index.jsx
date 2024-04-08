import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        const { todos } = this.props;
        const DoneTrue = todos.filter(item => item.Done).length;
        return (
            <div className='todo-footer'>
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>已完成{DoneTrue}</span>/ 全部{todos.length}
                </span>
                <button className='btn btn-danger' style={{ float: 'right' }}>清除已完成任务</button>
            </div>
        )
    }
}
