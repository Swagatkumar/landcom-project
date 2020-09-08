import React from 'react';
import {NavLink} from 'react-router-dom';
import './registration.css'

export default class Registration extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Registration</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
                <div className="body">
                <div style={{overflow:'hidden'}}><div className="heading">Upload Documents:</div></div>
                <div style={{overflow:'hidden'}}>
                    <div className="value">Sale Deed:</div>
                    <div className="files"><input type="file" /></div>
                </div><br/>
                <div style={{overflow:'hidden'}}>
                    <div className="value">General Power of Attorney:</div>
                    <div className="files"><input type="file" /></div>
                </div><br/>
                <div style={{overflow:'hidden'}}>
                    <div className="value">No-objection Certification(NOC):</div>
                    <div className="files"><input type="file" /></div>
                </div><br/>
                <div style={{overflow:'hidden'}}>
                    <div className="value">Allotment Letter:</div>
                    <div className="files"><input type="file" /></div>
                </div><br/><br/><br/><br/><br/><br/>
                <div style={{overflow:'hidden'}}>
                    <NavLink to="/registration2"><button style={{border:'0px',
                    backgroundColor:'seagreen',height:'45px',width:'100px',color:'white',
                    borderRadius:'5px',marginLeft:'40%'}}>Upload</button></NavLink>
                </div>
                </div>
            </React.Fragment>
        );
    }
}