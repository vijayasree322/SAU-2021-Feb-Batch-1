import React from 'react'
import Home from './components/home'
import About from './components/About'
import { Add } from "./components/Add";
import { Detail } from "./components/Detail";
import { Search } from "./components/Search";
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
export default function Routes()
{
    // return(
    //   <BrowserRouter>
    //   <Switch>
    //       <Route path="/home" exact component={home}></Route>
    //   </Switch>
    //   </BrowserRouter>
    // );
    return (
      <Router>
       <Route exact path="/">
            <Home />
          </Route>
        <Container>
        <Switch>
          <Route path="/list" >
            <Search/>
          </Route>
          <Route path="/add">
            <Add/>
          </Route>
          <Route exact path="/About"  exact component={About}>
            <About/>
          </Route>
          <Switch>
            <Route path="/detail/:id" children={<Detail />} />
          </Switch>
        </Switch>
        </Container>
    </Router>
    );
}