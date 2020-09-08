import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Request extends Component{
    render(){
        return(
            <React.Fragment>
                <div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Requested Land</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
                <div className="list">
                    <div style={{color:'#666666',fontSize:'20px'}}>Land ID: 123</div><br/>
                    <div style={{color:'#808080',fontSize:'15px'}}>Owner: Ned Stark &nbsp;&nbsp;&nbsp;&nbsp;Phone No.: 7654321987</div>
                    <div style={{color:'#666666',fontSize:'17px',float:'right'}}>Requested</div>
                </div>
            </React.Fragment>
        )
    }
}