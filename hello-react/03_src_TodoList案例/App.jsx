import React, { Component } from 'react'
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import { nanoid } from 'nanoid'
import "./App.css"

export default class App extends Component {
  state={todos:[
    {id:nanoid(),name:'吃饭',done:true},
    {id:nanoid(),name:'睡觉',done:false},
    {id:nanoid(),name:'敲代码',done:true},
  ]}

  // 添加一个todo，接收的参数是todo对象
  addTodo=(todoObj)=>{
    const {todos}=this.state
    const newTodos=[todoObj,...todos]
    this.setState({todos:newTodos})
  }

  // updateTodo用于更新一个todo对象
  updateTodo=(id,done)=>{
    const {todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      if(todoObj.id===id)return {...todoObj,done:done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  // deleteTodo用于删除一个todo对象
  deleteTodo=(id)=>{
    const {todos}=this.state
    const newTodos=todos.filter((todoObj)=>{
      return todoObj.id!==id
    })
    this.setState({todos:newTodos})
  }
  
  // todo全选
  checkAllTodo=(done)=>{
    const {todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }

  // 清除已完成任务
  clearTodo=()=>{
    const {todos}=this.state
    const newTodos=todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos}=this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearTodo={this.clearTodo}/>
        </div>
      </div>
    )
  }
}
