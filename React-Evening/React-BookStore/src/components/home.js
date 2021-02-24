import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
       <nav>
         <h1>Welcome To BookStore</h1>
        </nav>
       <Navbar>
       <Navbar.Brand  href="/about">About</Navbar.Brand>
             <Nav.Item>
             <Link to="/list">List Books</Link>
             </Nav.Item>
             <Nav.Item >
             <Link to="/add">Add Books</Link>
             </Nav.Item>
         </Navbar>
         </div>
    );
  }
  
  export default Home;
  