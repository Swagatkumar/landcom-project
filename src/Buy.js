import React from 'react';
import {NavLink} from 'react-router-dom';
import './buy.css'
class Buy extends React.Component {

	render() {
		return (
				<React.Fragment>
					<div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Buy Land</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
					<form  action="/buy" className="main" id="landsearch">
						<input type="text" name="state" placeholder=" Enter State" id="state" autoFocus /><br /><br />
						<input type="text" name="district" placeholder="Enter District" id="district" />&nbsp;&nbsp;
						<input type="number" name="pin" placeholder="Enter Pin" id="pin" /><br /><br />
						<NavLink to="/landlist"><input type="submit" value="Search" id="search1" /></NavLink>
					</form>
				</React.Fragment>

		)
	}
}
export default Buy;