
import React, { Component } from 'react';
import './dashboard.css'
import Header from '../header/header.js';
import axios from 'axios';


let finaldata = [];
class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            finaldata: [],
            myData: [],
            finalprice: 0
        }
    }

    componentDidMount() {
        axios.get('https://friends-fastfood.firebaseio.com/foods.json')
            .then(response => {
                this.setState({ myData: response.data })
            })
    }
    handlesubmit = () => {
        axios.post('https://friends-fastfood.firebaseio.com/orders.json', this.state.data)
            .then(res => {
                this.setState({data : [],finalprice : 0})
                console.log(res);
            })
    }
    handleClick = (value) => () => {
        let dataIndex = finaldata.findIndex(val => val.id === value.id);
        if (dataIndex === -1) {
            value.price = value.cost;
            finaldata.push(value)
        } else {
            finaldata[dataIndex].quantity = finaldata[dataIndex].quantity + 1;
            finaldata[dataIndex].price = finaldata[dataIndex].price + value.cost;
            // console.log(value);
            // console.log(dataIndex);
        }
        console.log(finaldata);
        let finalcost = finaldata.reduce((acc, cur) => acc + cur.price, 0);
        console.log(finalcost);
        //selectitems.push(value)

        this.setState({ data: finaldata, finalprice: finalcost })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                {this.state.myData.map((value, key) => {
                                    return (

                                        <div className="col-md-4">
                                            <div className="card card-body crd " onClick={this.handleClick(value)}>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <img src={require(`../../images/${value.image}.jpg`)} alt="tiffin" className="img1" />
                                                    </div>
                                                    <div className="col-md-7">

                                                        <h3>{value.name}</h3>
                                                        <h6>{value.cost}</h6>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>

                                    )
                                }
                                )}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>item name</th>
                                        <th>quantity</th>
                                        <th>cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.length > 0 ? this.state.data.map((val, index) => {
                                        return (<tr>
                                            <td>{index + 1}</td>
                                            <td>{val.name}</td>
                                            <td>{val.quantity}</td>
                                            <td>{val.price}</td>
                                        </tr>
                                        )

                                    }) : <div>no  selected items</div>}
                                    <tr className="roww">
                                        <td>total</td>
                                        <td></td>
                                        <td></td>
                                        <td>{this.state.finalprice}</td>

                                    </tr>

                                    <tr>
                                        <button className="btn btn-primary btnn" onClick={this.handlesubmit}>submit</button>
                                    </tr>

                                </tbody>
                            </table>


                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Dashboard;