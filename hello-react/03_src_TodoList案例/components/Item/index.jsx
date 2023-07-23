import React, { Component } from 'react'
import "./index.css"

export default class index extends Component {
  
  state = { flag: false } //标识鼠标移入---移出
  handleMounse = (mouse) => {
    return () => {
      this.setState({ flag: mouse })
    }
  }

  // 勾选、取消勾选某一个tido的回调
  handleCheck = (id) => {
    const { updateTodo } = this.props
    return (event) => {
      updateTodo(id, event.target.checked)
    }
  }

  // 删除一个todo的回调
  handleDelete=(id)=>{
    this.props.deleteTodo(id)
  }
  render() {
    const { flag } = this.state
    const { id, name, done } = this.props
    return (
      <li onMouseEnter={this.handleMounse(true)} onMouseLeave={this.handleMounse(false)} style={{ backgroundColor: flag ? '#ddd' : 'white' }}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{ display: flag ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
