import React from 'react'
import { connect } from 'react-redux';
import {fetchUser} from './Fetch';
// import {store} from "./store/Store.js";

class ShowUser extends React.Component {

  // useEffect(){
  //   store.dispatch(fetchUser());
  // }
  componentDidMount(){
    this.props.dispatch(fetchUser());
  }

    render() {
        const {loading, users, error} = this.props;
        const Allusers = users;
        console.log(Allusers);   
        
        if(loading){
            return(
         <table align='center' cellPadding='10' cellSpacing='0' style={{textAlign:'center',marginTop:'50px', fontWeight:'200',fontFamily:'arial', fontSize:'18px', border:'0.5px solid #ddd'}}>
                <thead>
                <tr style={{textAlign:'center', background:'#ddd'}}>
                    <td>#</td>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile</td>
                </tr>
                </thead>
                <tbody>
                <tr>Loading Data. . . </tr>
                </tbody>
            </table>
            )
        }
    
        return(
        <table align='center' cellPadding='10' cellSpacing='0' style={{textAlign:'center',marginTop:'50px', fontWeight:'200',fontFamily:'arial', fontSize:'18px', border:'0.5px solid #ddd'}}>
           <thead>
                <tr style={{textAlign:'center', background:'#ddd'}}>
                    <td>#</td>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile</td>
                </tr>
            </thead>

           <tbody>
              {
               Allusers.map((Allusers,index)=>(
                   <tr style={{fontSize:'14px'}}>
                       <td style={{fontWeight:'bold'}}>{index+1}</td>
                       <td style={{border:'0.5px solid #ddd'}}>{Allusers.id}</td>
                       <td style={{border:'0.5px solid #ddd'}}>{Allusers.name}</td>
                       <td style={{border:'0.5px solid #ddd'}}>{Allusers.userid}</td>
                       <td style={{border:'0.5px solid #ddd'}}>{Allusers.mobile}</td>
                   </tr>
               ))
              }
           </tbody>
           </table>
        )
    }

}

const mapStateToProps = (state)=>({
    loading : state.showReducer.loading,
    users : state.showReducer.users,
    error: state.showReducer.error
})

export default connect(mapStateToProps)(ShowUser);