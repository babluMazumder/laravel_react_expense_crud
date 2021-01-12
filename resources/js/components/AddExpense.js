import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Swal from 'sweetalert2';
  import { withRouter } from 'react-router';

class AddExpense extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            description:'',
            amount:'',
            validName: true,
            validAmount: true,
            validDes: true,
        };
    }

    onChangeExpenseName(e) {
        this.setState({name: e.target.value})
    }
    onChangeExpenseDes(e) {
        this.setState({description: e.target.value})
    }
    onChangeExpenseAmount(e) {
        this.setState({amount: e.target.value})
    }

    submitForm(e){
        e.preventDefault();
        
        if(this.state.name == ""){
            this.setState({validName: false});
        }else{
            this.setState({validName: true}); 
        }
        if(this.state.amount == ""){
            this.setState({validAmount: false});
        }else{
            this.setState({validAmount: true});
        }
        if(this.state.description == ""){
            this.setState({validDes: false});
        }else{
            this.setState({validDes: true});
        }

        const expense = {
            name: this.state.name,
            amount: this.state.amount,
            description: this.state.description
        }

        axios.post('http://127.0.0.1:8000/api/expense-create', expense)
        .then((res) => {
            Swal.fire(
                'Good job!',
                'Expense Added Successfully',
                'success'
              )   
            
        }).catch((error) => {
            console.log(error);
        })

        this.props.history.push('/');

    }

    render(){

        return (
            <div>
            <Link to="/" className="btn btn-dark mt-2 mb-2">List</Link> 
            <form onSubmit={ (e) => this.submitForm(e) }>
            
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    value={this.state.name}
                    onChange={ (e) => this.onChangeExpenseName(e)}
                    />
                </div>
                { !this.state.validName ?
                <span className="text text-danger">
                    Name is required
                </span>
                : ''
            }

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" 
                    value={this.state.description}
                    onChange={ (e) => this.onChangeExpenseDes(e)}
                    />
                </div>
                { !this.state.validDes ?
                <span className="text text-danger">
                    Description is required
                </span>
                : ''
            }
                <div className="mb-3">
                    <label htmlFor="exampleInputAmount1" className="form-label">Amount</label>
                    <input type="text" className="form-control" id="exampleInputAmount1" 
                    value={this.state.amount}
                    onChange={ (e) => this.onChangeExpenseAmount(e)}
                    />
                </div>
                { !this.state.validAmount ?
                <span className="text text-danger">
                    Amount is required
                </span>
                : ''
            }
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}

export default withRouter(AddExpense);