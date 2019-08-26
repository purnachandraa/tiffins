import React, { Component } from 'react';
import Header from '../components/header/header';
import axios from 'axios';


class Home extends Component {
    constructor(){
        super();
        this.state ={
              data : [],
        }
    }

    componentDidMount(){
        axios('https://friends-fastfood.firebaseio.com/orders.json')
        .then(response =>{
            this.setState({data : response.data})
            console.log(response);
        })
    }
    render() {
        return (
            <div>
                <Header />
                <table className ="table">
                    <thead>
                        <tr>
                            <th>item</th>
                            <th>name</th>
                            <th>quantity</th>
                            <th>start</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.length> 0 ?this.state.data.map((value,index)=>{
                            return(
                                <div>
                                    <tr>
                                        <td>{value.name}</td>
                                        <td></td>
                                        <td></td>
                                        <td><button className ="btn btn-primary"></button></td>
                                    </tr>
                                </div>
                            )
                        }):<div><p>No more orders</p></div>}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;