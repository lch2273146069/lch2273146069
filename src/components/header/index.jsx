import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    // 限制pros类型 以及必填
    static propTypes = {
        AddTodo: PropTypes.func.isRequired
    }

    handleKeyUp = e => {
        if (e.keyCode !== 13) return;
        const value = e.target.value;
        if (!value.trim()) return;
        this.props.AddTodo({ name: value, id: Date.now(), Done: false })
        e.target.value = ''
    }
    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入你的任务名称，按回车键确认' />
            </div>
        )
    }
}
