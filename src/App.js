import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderBar from './Components/HeaderBar';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Hobbies from './Components/Hobbies';
import Blog from './Components/Blog';
import Blog1 from './blogs/Blog1';
import Blog2 from './blogs/Blog2';
import Blog3 from './blogs/Blog3';
import Blog7 from './blogs/Blog7';
import Blog8 from './blogs/Blog8';
import Facts from './Components/Facts';
import Contact from './Components/Contact';
import Quotes from './Components/Quotes';
import Error from './Components/Error';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <HeaderBar></HeaderBar>
                <NavBar></NavBar>
                <div className="content">
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/home' component={Home}></Route>
                        <Route exact path='/my-website' component={Home}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                        <Route exact path='/hobbies' component={Hobbies}></Route>
                        <Route exact path='/facts' component={Facts}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path='/quotes' component={Quotes}></Route>
                        <Route exact path='/blog' component={Blog}></Route>
                        <Route exact path='/blog/structure-and-applications-of-body-area-networks' component={Blog1}></Route>
                        <Route exact path='/blog/impact-of-computer-science-on-next-generation-education' component={Blog2}></Route>
                        <Route exact path='/blog/it-just-takes-a-ripple-to-start-a-wave-of-change' component={Blog3}></Route>
                        <Route exact path='/blog/if-i-had-infinite-time-and-money' component={Blog7}></Route>
                        <Route exact path='/blog/unique-interview-questions' component={Blog8}></Route>
                        <Route component={Error}></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
