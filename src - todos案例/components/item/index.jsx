import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        Done: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }

    state = { mouse: false };
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    };
    removeItem = (id) => {
        return () => {
            if (window.confirm('确定删除吗？')) {
                this.props.deleteTodo([id])
            }
        }
    };
    handleChange = (id) => {
        return (e) => {
            this.props.updateTodo(id, e.target.checked)
        }
    }
    render() {
        const { name, Done, id } = this.props;
        const { mouse } = this.state
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={Done} onChange={this.handleChange(id)} />
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger' style={{ display: mouse ? 'block' : 'none' }} onClick={this.removeItem(id)}> 删除 </button>
            </li>
        )
    }
}
