import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = { mouse: false }
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    render() {
        const { name, Done } = this.props;
        const { mouse } = this.state
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={Done} />
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger' style={{ display: mouse ? 'block' : 'none' }}> 删除 </button>
            </li>
        )
    }
}
