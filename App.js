import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import './App.css';

import Todo from './containers/Todo'

class App extends Component {
  render(){
    return(
      <Grid className="App" style={{ padding: 20}}>
        <Row>
          <Col xs={9} md={9}>
            <BrowserRouter>
              <Switch>
                <Route path={'/todo'} component={Todo}/>
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
      </Grid>
    )
  }

}

export default App