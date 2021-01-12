import axios from 'axios';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Swal from 'sweetalert2';

class ListExpense extends Component {

    constructor(props){
        super(props)

        this.state = {
            expenses : []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/expenses')
        .then(res => {

            this.setState({
                expenses : res.data
            });

        }).catch(error => {
            console.log(error);
        });
    }

    deleteExpense(event, id){
        event.preventDefault();
        axios.get('http://127.0.0.1:8000/api/expense-delete/' + id)
        .then(res => {

            this.setState({
                expenses : res.data.expenses
            });

            Swal.fire(
                'Good job!',
                'deleted Successfully',
                'success'
              ) 

        }).catch(error => {
            console.log(error);
        });
    }

    render(){
        return (
            <div>
                <Link to="/add-new" className="btn btn-dark mt-2 mb-2">Add New</Link> 
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.expenses.map((expense) => 
                            <tr key={expense.id}>
                                <th scope="row">1</th>
                                <td>{expense.name}</td>
                                <td>{expense.description}</td>
                                <td>{expense.amount}</td>
                                <td><Link to={"/edit-expense/" + expense.id} className="btn btn-primary">Edit</Link> <a href="" onClick={ (event) => this.deleteExpense(event, expense.id)} className="btn btn-warning">Delete</a></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListExpense;