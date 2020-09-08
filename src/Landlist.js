import React from 'react';
import './list.css';
import {NavLink} from 'react-router-dom';


class Landlist extends React.Component {
	render() {
		return (
            <React.Fragment>
                <div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Land Lists</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
                <NavLink className="link" to="/details">
                <div className="list">
                    <div style={{color:'#666666',fontSize:'20px'}}>Land ID: 123</div><br/>
                    <div style={{color:'#808080',fontSize:'15px'}}>Owner: Ned Stark &nbsp;&nbsp;&nbsp;&nbsp;Phone No.: 7654321987</div>
                    <div style={{color:'#666666',fontSize:'20px',float:'right'}}>Price: &#8377;700000</div>
                </div>
                </NavLink>
                <NavLink className="link" to="/details">
                <div className="list">
                    <div style={{color:'#666666',fontSize:'20px'}}>Land ID: 243</div><br/>
                    <div style={{color:'#808080',fontSize:'15px'}}>Owner: Samir Mukherjee &nbsp;&nbsp;&nbsp;&nbsp;Phone No.: 7654321987</div>
                    <div style={{color:'#666666',fontSize:'20px',float:'right'}}>Price: &#8377;800000</div>
                </div>
                </NavLink>
            </React.Fragment>
        )
    }
}
export default Landlist;