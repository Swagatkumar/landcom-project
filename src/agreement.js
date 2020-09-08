import React from 'react';
import './list.css'
import qr from './qr.png'
import {NavLink} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Land from './land.jpg';
import Land1 from './land1.jpg';
import Land2 from './land2.jpg';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Agreement extends React.Component {
    static defaultProps = {
        center: {
          lat: 21.7679,
          lng: 78.8718
        },
        zoom: 11
      };
	render() {
		return (
			<React.Fragment>
                <div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Agreement</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
                <div className="sec">
                    <div style={{float:'left'}}>
                    <div style={{color:'#666666',fontSize:'20px',marginTop:'10px',marginLeft:'10px'}}>Property Address</div><br/>
                    <div className="level" style={{marginLeft:'10px'}}>Plot No:457p, Tarinigada, Paradeep</div>
                    </div>
                    <NavLink to="/details" style={{float:'left'}}>
                    <button style={{outline:'none',marginTop:'10px',marginLeft:'20px',color:'white',padding:'10px',backgroundColor:'seagreen',borderRadius:'5px',border:'0px'}}>
                        Land Information
                    </button>
                    </NavLink>
                    <div style={{float:'right',marginRight:'50px'}}><img src={qr} style={{height:'100px',width:'100px'}} /></div>
                    <div style={{float:'right',marginTop:'30px',marginRight:'50px',color:'white',padding:'10px',backgroundColor:'seagreen',borderRadius:'40px'}}>Agree Title Transfer</div>
                </div>
                <div className="asec">
                    <div style={{float:'left',marginLeft:'50px'}}>
                        <div style={{color:'green',fontSize:'15px'}}>Owner</div>
                        <div style={{color:'#666666',fontSIze:'20px'}}>Lord Eddard Stark</div>
                    </div>
                    <div style={{float:'left',marginLeft:'300px'}}>
                        <div style={{color:'green',fontSize:'15px'}}>Property</div>
                        <div style={{color:'#666666',fontSize:'20px'}}>Lord John Snow</div>
                    </div>
                    <div style={{float:'right',marginRight:'50px'}}>
                        <div style={{color:'green',fontSize:'15px'}}>Agreed Amount</div>
                        <div style={{color:'#666666',fontSize:'20px'}}>4000000</div>
                    </div>
                </div><br/>
                <div style={{float:'left',height:'350px',width:'450px'}}>
                <div className="asec1">
                    <div style={{color:'green',fontSize:'20px'}}>Current Owner:</div><br/>
                    <div style={{color:'#666666',fontSize:'17px'}}>Ned Stark</div><br/>
                    <div style={{color:'#666666',fontSize:'17px'}}>Phone No.: 7854321654</div><br/>
                    <div style={{color:'#666666',fontSize:'17px'}}>Address: PlotNo: 202, Kharabelanagar,Bhubaneswar</div>
                </div><br/><br/>
                <div className="asec1">
                    <div style={{color:'green',fontSize:'20px'}}>Previous Owner:</div><br/>
                    <div style={{color:'#666666',fontSize:'17px'}}>Eddard Stark</div><br/>
                    <div style={{color:'#666666',fontSize:'17px'}}>Phone No.: 9876543216</div><br/>
                    <div style={{color:'#666666',fontSize:'17px'}}>Address: PlotNo: 202, Medical Colony, Cuttack</div>
                </div>
                </div>
                <div style={{height:'350px',width:'650px',float:'left'}}>
                <div style={{float:'left',height:'150px',width:'300px',marginTop:'10px'}}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDVo7rkOcJc07pKaRC2_e4NLnvf5tXyNGo" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={21.7679}
                        lng={78.8718}
                        text={'India'}
                    />
                    </GoogleMapReact>
                    </div>
                    <div style={{float:'left',height:'150px',width:'300px',marginTop:'10px',marginLeft:'10px'}}>
                    <img src={Land} style={{height:'100%',width:'100%'}} />
                    </div>
                    <div style={{float:'left',height:'150px',width:'300px',marginTop:'10px'}}>
                    <img src={Land1} style={{height:'100%',width:'100%'}} />
                    </div> 
                    <div style={{float:'left',height:'150px',width:'300px',marginTop:'10px',marginLeft:'10px'}}>
                    <img src={Land2} style={{height:'100%',width:'100%'}} />
                    </div> 
                </div>
            </React.Fragment>
		)
	}
}