import Home from './components/home'
import About from './components/About'
import React,{Suspense} from 'react';
import './App.css'
import Router1 from './routes'


function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Router1></Router1>
    </Suspense>
  )
  // return (
  //   <Router>
  //     <Home/>
  //   <Navbar>
  //   <Navbar.Brand  href="/about">About</Navbar.Brand>
  //         <Nav.Item>
  //         <Link to="/list">List Books</Link>
  //         </Nav.Item>
  //         <Nav.Item >
  //         <Link to="/add">Add Books</Link>
  //         </Nav.Item>
  //     </Navbar>
  //     <Container>
  //     <Switch>
  //       <Route path="/list" >
  //       </Route>
  //       <Route path="/add">
  //       </Route>
  //       <Route path="/About" component={About}>
  //       </Route>
  //     </Switch>
  //     </Container>
  // </Router>
  // );
}

export default App;
