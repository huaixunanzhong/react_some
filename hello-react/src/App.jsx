import React, { Component } from 'react'
import axios from 'axios'
import "./App.css"

export default class App extends Component {

  getStudentData=()=>{
    axios.get('http://localhost:3000/api1/students').then(
      response=>{console.log('success',response.data)},
      error=>{console.log('error',error)}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    )
  }
}
