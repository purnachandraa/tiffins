import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Header from './components/header/header';
import Home from './home/home';
import Dashboard from './components/dashboard/dashboard';
import Viewers from './viewers/viewers';
import './App.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarOpen: false

    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Sidebar
            sidebar={<div>
              <div className="hmm"> <Link to="/home">
             <i  className="fa fa-home hmi" aria-hidden="true"><span className="hmec">Home</span></i></Link></div>
              <div className="dss"> <Link to="/dashboard">
             <i  className="fa fa-home hmi" aria-hidden="true"><span className="dash">Dashboard</span></i></Link></div>
              <div className="vii"> <Link to="/viewers">
             <i  className="fa fa-eye hmi" aria-hidden="true"><span className="vie">Viewers</span></i></Link></div>
             
            </div>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white", width: "250px" } }}
          >
            <button onClick={() => this.onSetSidebarOpen(true)} className="btn">
              <i class="fa fa-bars"></i>
            </button>
            <div>

              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/home' component={Home} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/viewers' component={Viewers} />

              </Switch>

            </div>

          </Sidebar>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
