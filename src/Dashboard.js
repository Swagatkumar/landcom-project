import React, { Component } from 'react';
import './Dashboard.css';
import Avt from './avt.png'
import {NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Buy from './Buy.js'
import Sell from './Sell.js'
import Verification from './Verification.js'
import Notification from './Notification.js'
import Feedback from './Feedback.js'
import Profile from './Profile'
import Landlist from './Landlist'
import Land from './Land';
import Request from './Request'
import Agreement from './agreement'
import Registration from './Registration'
import Redgform from './Redgform';

class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				
				<div style={{backgroundColor: '#1a1c27',height:'100%',width:'200px',float:'left',position:'fixed',top:'0px'}}>
				<div style={{backgroundColor: '#ff3333',color: 'white',padding: '15px',fontFamily: 'manjari thin',fontSize: '20px',height: '20px',width:'170px',float:'left'}} align="center"><i className="fa fa-cubes"></i>LandCom</div>
				<img src={Avt} alt="user" id="photo" />
        	<div className="usr">John Snow</div>
					<ul>
						<NavLink to="/" className="link"><li className="nav" name="profile" style={{borderTop:'1px solid white'}}>Profile</li></NavLink>
						<NavLink to="/sell" className="link"><li className="nav">Sell Land</li></NavLink>
						<NavLink to="/buy" className="link"><li className="nav">Buy Land</li></NavLink>
						<NavLink to="/requested" className="link"><li className="nav">Land Requested</li></NavLink>
						<NavLink to="/agreement" className="link"><li className="nav">Agreements</li></NavLink>
						<NavLink to="/feedback" className="link"><li className="nav">Feedback</li></NavLink>
					</ul>
				</div>
				<div id="main" style={{marginLeft:'200px'}}>
					<Route exact path="/" component={Profile} />
					<Route path="/buy" component={Buy} />
					<Route path="/sell" component={Sell} />
					<Route path="/verification" component={Verification} />
					<Route path="/notification" component={Notification} />
					<Route path="/feedback" component={Feedback} />
					<Route path="/landlist" component={Landlist} />
					<Route path="/details" component={Land} />
					<Route path="/requested" component={Request} />
					<Route path="/agreement" component={Agreement} />
					<Route path="/registration" component={Registration}/>
					<Route path="/registration2" component={Redgform} />
				</div>
			</React.Fragment>
		);

	}
}

export default Dashboard;

//#787a82(light),#1a1c27(dark)