import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {LoginUser} from './Fetch.js';
import {store} from './store/Store.js';

class Login extends Component {
    constructor(props){
        
        super(props);
            this.state = {
                userid: "" ,
                password: "" 
            }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

 

   onChangeHandler(event){
      this.setState({[event.target.name]: event.target.value });
  }

   submitHandler(event){
    event.preventDefault();
    store.dispatch(LoginUser('anujg@mail.com', 'admin@123'));        
    }
    render() {
        return (
            <div className='container mt-5 bg-white '>
            <form onSubmit={this.submitHandler}>
             <div className='row d-flex justify-content-center '>
             
                <div className='col-md-3 shadow-lg rounded p-3'>
                <h4 className='my-4 text-center text-muted'>Log in</h4>
                <div className='form-group'>
                <label for='userid'><small>Email </small></label>
                <input type='userid'
                 className='form-control' 
                 name='email'
                onChange={this.onChangeHandler}
                  />
                </div>
    
                <div className='form-group'>
                <label for='password' className='input-label'><small>{/* {user.tokenValue} */}password</small></label>
                <input type='password'
                className='form-control'
                name='password'
                onChange = {this.onChangeHandler}
                   />
                </div> 
                 <button className='btn btn-primary btn-sm btn-block' onClick={LoginUser}>Login</button>
                 {/* <small><span id='errmsg' className='text-danger  font-weight-bold'>{result.data.message}</span></small> */}
               </div>
    
               </div>
               </form>
               </div>
            )
    }
}
const mapStateToProps = (state)=>({
    Authenticated : state.AuthReducer.Authenticated,
    user_info : state.AuthReducer.user_info,
    error: state.AuthReducer.error
})

export default connect(mapStateToProps)(Login);