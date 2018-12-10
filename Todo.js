import React, { Component } from 'react';
import './App.css';
import {FormControl } from 'react-bootstrap'

class App extends Component {
 
  constructor(props){
    super(props)
    this.state={
      text:"",
      todo:[]
    }
  }


  onChangeText = (e) =>{
    this.setState({text:e.target.value})
  }  

  onClickButton = ()=>{
    let array = this.state.todo.slice()
    array.push(this.state.text)
    this.setState({todo:array})
  }

  onClickDelete = ()=>{
    this.setState({todo:[]})
  }

  render() {

    return (
      <dev className="App-header">
          <FormControl
            id='text'
            type='text'
            onChange = {this.onChangeText}
          />
          <tr>
            <th>
          <FormControl　
            id='button'
            type='button'
            value='追加'
            onClick = {this.onClickButton}
            />
            </th>
            <th>
            <FormControl
              id='delete'
              type='button'
              value='削除'
              onClick = {this.onClickDelete}          
            />
            </th>
          </tr>

            <ul>  
                {this.state.todo.map((element)=>{
                  return <li>{element}</li>
                })}
            </ul>





          





      </dev>
  
    );
  }
}

export default App;
