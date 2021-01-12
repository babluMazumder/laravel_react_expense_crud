import React from 'react';
import ReactDOM from 'react-dom';
import AddExpense from './AddExpense';
import ListExpense from './ListExpense';
import EditExpense from './EditExpense';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        <Router>
        <div className="container">

            {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
            */}
            <Switch>
            <Route exact path="/">
                <ListExpense />
            </Route>
            <Route path="/add-new">
                <AddExpense />
            </Route>
            <Route path="/edit-expense/:id">
                <EditExpense />
            </Route>
            </Switch>
        </div>
    </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
