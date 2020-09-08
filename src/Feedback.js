import React from 'react';
import {NavLink} from 'react-router-dom';

class Feedback extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Feedback</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
			<div style={{overflow:'hidden'}}>			
			<div style={{fontSize:'30px',color:'grey',float:'left',marginLeft:'10px',overflow:'hidden'}}>Your Feedback is mostly appreciated</div>
			</div>			
			<form>
			<div style={{overflow:'hidden'}}>
			<textarea rows="10" cols="100" placeholder="Write your Feedback" style={{padding:'10px',float:'left',marginLeft:'10px',marginTop:'10px',resize:'none',borderRadius:'10px'}} />
			</div><br/>
			<input type="submit" value="Submit" style={{float:'left',height:'50px',width:'100px',marginLeft:'10px',backgroundColor:'seagreen',border:'0px',color:'white',borderRadius:'5px'}} />
			</form>
			</React.Fragment>
		)
	}
}

export default Feedback;