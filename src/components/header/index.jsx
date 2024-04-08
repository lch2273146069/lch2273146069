import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    handleKeyUp = (e) => {
        if (e.keyCode != 13) return;
        const value = e.target.value;
        
    }
    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入你的任务名称，按回车键确认' />
            </div>
        )
    }
}
