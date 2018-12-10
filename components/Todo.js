import React from 'react';
import '../App.css';
import {FormControl } from 'react-bootstrap'

class Todo extends React.Component {

    render(){
        return(
           <dev className="App-header">
            <FormControl
                id='text'
                type='text'
                value={this.props.text}
                onChange = {this.props.onChangeText}
            />
            <FormControl
                id='button'
                type='Button'
                value='追加'
                onClick = {this.props.onClickButton}
            />
            <FormControl
                id='button'
                type='Button'
                value='削除'
                onClick = {this.props.onClickDelete}
            />
            <ui>
                {this.props.textList.map((element) =>{
                    return <li>{element}</li>
                })}
            </ui>
            </dev>
        )}
    }

export default Todo