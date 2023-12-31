import React, { Component } from 'react'
import "./index.css"

export default class index extends Component {
  // 全选chekbox的回调
  handleCheckAll=(e)=>{
    this.props.checkAllTodo(e.target.checked)
  }
  render() {
    const {todos,clearTodo}=this.props
    const doneCount=todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
    const total=todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total&&total>0?true:false}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={clearTodo} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
