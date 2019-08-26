import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid cnt">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="lists">
                                <h5 className="head">Tiffins</h5>

                                <Link to='/home'>
                                    <span className="hme">Home</span></Link>


                                <Link to='/dashboard'><span className="hmee">Dashboard</span></Link>


                                <Link to='/viewers'><span className="hmee">Viewers</span></Link>

                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Header;