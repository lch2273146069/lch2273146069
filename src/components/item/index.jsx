import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    inputChange = (e) => {
        console.log(this.props, e);
    }
    render() {
        const { name, Done } = this.props;

        return (
            <li>
                <label>
                    <input type="checkbox" checked={Done} onChange={this.inputChange} />
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger' style={{ display: 'none' }}> 删除 </button>
            </li>
        )
    }
}
