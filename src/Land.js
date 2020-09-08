import React from 'react';
import './list.css'
import GoogleMapReact from 'google-map-react';
import {NavLink} from 'react-router-dom';
import qr from './qr.png'
import Modal from 'react-modal';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const identityStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      height                 : '250px',
      width                : '500px',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border :'1px solid grey'
    }
  };

export default class Land extends React.Component{
    constructor(){
        super()
      
        this.state = {
          identityActive:false,
        }
      }
      
      componentWillMount(){
        Modal.setAppElement('body');
      }
      identityModal = () => {
        this.setState({
          identityActive:!this.state.identityActive
        })
      }
    static defaultProps = {
        center: {
          lat: 21.7679,
          lng: 78.8718
        },
        zoom: 11
      };
    
    render(){
        return(
            <React.Fragment>
                <div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Land Details</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
                <div className="sec">
                <div className="title">Property Information:</div>
                <div><img src={qr} id="qr" /></div>
                <br /><br /><br />
                <div className="sec1">
                    <div className="level">
                        Property Id:
                    </div><br />
                    <div className="data">
                        1234556743
                    </div>
                </div>
                <div className="sec1">
                    <div className="level">
                        Type:
                    </div><br />
                    <div className="data">
                        Agriculture
                    </div>
                </div>
                <div className="sec1">
                    <div className="level">
                        Issue Date:
                    </div><br />
                    <div className="data">
                        02-03-2008
                    </div>
                </div>
                <div className="sec1">
                    <div className="level">
                        Area(in sqft.):
                    </div><br />
                    <div className="data">
                        1200
                    </div>
                </div>
                <div className="sec1">
                    <div className="level">
                        Lattitude,Longitude:
                    </div><br />
                    <div className="data">
                        21.7679, 78.8718
                    </div>
                </div>
                <div className="sec1">
                    <div className="level">
                        Mortgage Status:
                    </div><br />
                    <div className="data">
                        Loan
                    </div>
                </div>
                <div className="sec2">
                    <div className="level">
                        Address:
                    </div><br />
                    <div className="data">
                        Plot No:202, KharabelaNagar, Bhubaneswar 
                    </div>
                </div>
                <div style={{color:'#666',fontSize:'20px',marginLeft:'80px',float:'left '}}>Price:7000000</div><br/>
                <button id="rqst" onClick={this.identityModal}>Request to Buy</button>
                </div><br/>

                <div className="sec">
                    <div className="title">Owner Information</div>
                </div>
                <div id="map">
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
                <br/><br/>
                <div className="sec">
                <div className="sec1">
                    <div className="level">
                        Type:
                    </div><br />
                    <div className="data">
                        Self
                    </div>
                </div>
                <div className="sec1">
                    <div className="level">
                        Name:
                    </div><br />
                    <div className="data">
                        Ned Stark
                    </div>
                </div>
                <div className="sec1">
                    <div className="level">
                        Phone No:
                    </div><br />
                    <div className="data">
                        7543213456
                    </div>
                </div>
                </div>
                <div className="sec">
                <div className="sec1">
                    <div className="level">
                        Address:
                    </div><br />
                    <div className="data">
                        Plot No.:001,Winterfell, Near Wall, North
                    </div>
                </div>
                <div className="sec1">
                    <div className="level">
                        Email:
                    </div><br />
                    <div className="data">
                        nedstarknorth@got.com
                    </div>
                </div>
                </div>
                <Modal isOpen={this.state.identityActive} onRequestClose={this.identityModal} style={identityStyles}>
                <button onClick={this.identityModal} style={{float:'right',backgroundColor:'seagreen',border:'0px',color:'white',height:'20px',width:'30px'}}>&#x2716;</button>
                <div style={{color:'#666666',fontSize:'20px'}}>Your PAN No.:</div><br/>
                <div style={{color:'#666666',fontSize:'18px'}}>5432167467</div><br/>
                <form action="/requested">
                <div style={{color:'#666666',fontSize:'20px'}}>Upload bank account summary of last 6 months:</div><br/>
                <input type="file" name="bankdetail"/><br/><br/><br/>
                <input onClick={this.toggleModal} type="submit" value="Submit" style={{backgroundColor:'seagreen',border:'0px',color:'white',height:'40px',width:'70px',fontSize:'15px',borderRadius:'5px'}} />  
                </form>
                </Modal>
            </React.Fragment>
        );
    }
}