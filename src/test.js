import React, { Component } from "react";
import axios from 'axios';

import {withRouter} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// import users from './user.json';

class UserList extends Component {

    constructor(props){
        super(props);

        this.state = {
            users : []
        }
    }
    

    componentDidMount() {
        console.log('component did mount');
        debugger
        // axios.get('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
        axios.get('./user.json')
        .then(res => {
            let userData = res.data;
            console.log('userData', userData);
            this.setState({users : userData});
        })
        .catch(error => {
            console.log(error);
        })
    }

    // static contextTypes = {
    //     router: React.PropTypes.object
    //   }

    showUserDetails = (selectedUserData) => {
        // this.props.history.push({
        //     pathname: `/details/${selectedUserData.id}`
        //     //  state: {
        //     //     key: data
        //     // } 
        // });  
        this.context.router.push('/Components/BigText');
        // this.context.router.history.push(`/details/${selectedUserData.id}`);


    }

  render() {
      console.log('users' , this.state.users);
      console.log('render');
    return (
      <div className="conatiner">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-text">Data Peace</span>
        </nav>
        <input
          className="mt-3 mb-3"
          placeholder="Serach by First Name"
          type="text"
        />
        <span>11-15 of 50</span>
        <table className="table table-striped">
          <thead className="font-weight-bold">
            <tr>
              <td>
                First Name<span className="caret"></span>
              </td>
              <td>Last Name</td>
              <td>Company Name</td>
              <td>City</td>
              <td>State</td>
              <td>Zip</td>
              <td>Email</td>
              <td>Web</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
           {this.state.users.map(user => {
            return [
              <tr key={user.id} onClick={() => this.showUserDetails(user)}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.company_name}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.zip}</td>
              <td>{user.email}</td>
              <td>{user.web}</td>
              <td>{user.age}</td>
            </tr>
            ]
           })};
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
