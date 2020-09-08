import React, { Component } from 'react';
import Avt from './avt.png'
import './profile.css'
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';
import Modal from 'react-modal';
import {NavLink} from 'react-router-dom';

const percentage = 100;
const addressStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      height                 : '530px',
      width                : '500px',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border :'1px solid grey'
    }
  };
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
  const otpStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      height                 : '200px',
      width                : '500px',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border :'1px solid grey'
    }
  };
  const customInput = {
    height:'30px',
    padding:'10px',
    fontSize:'18px',
    width:'400px',
    borderRadius: '5px',
    border: '1px solid grey'
  };

export default class Profile extends Component{
    constructor(){
        super()
      
        this.state = {
          addressActive:false,
          identityActive:false,
          otpActive:false
        }
      }
      
      componentWillMount(){
        Modal.setAppElement('body');
      }
      
        toggleModal = () => {
          this.setState({
            addressActive:!this.state.addressActive
          })
        }
        identityModal = () => {
          this.setState({
            identityActive:!this.state.identityActive
          })
        }
          otpModal = () => {
            this.setState({
              otpActive:!this.state.otpActive
            })
          }
    render(){
        return(
            <React.Fragment>
              <div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Profile</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
                <div className="sec">
                    <img src={Avt} className="avt" />
                    <div style={{float:'left',marginLeft:'50px',marginTop:'30px'}}>
                    <b><div style={{fontSize:'25px'}}>John Snow</div></b><br/>
                    <div>Email Id: johnsnow@gmail.com</div><br/>
                    <div>Phone No.: 9766543526</div><br/>

                    </div>
                    <div style={{float:'left',marginLeft:'200px',marginTop:'30px'}}>
                        <CircularProgressbar
                        percentage={percentage}
                        text={`${percentage}%`}
                        className="svg"
                        initialAnimation="true"
                        styles={{
                            text:{fill:'seagreen'},
                            path:{stroke:'seagreen'}
                        }}
                        />
                        <div style={{marginTop:'30px',color:'white',padding:'10px',backgroundColor:'seagreen',borderRadius:'40px',paddingLeft:'70px'}}>Complete Your Profile</div>
                    </div>
                </div><br/>
                <div style={{float:'left',marginLeft:'20px',marginTop:'20px'}}>
                    <div>Address:</div><br/>
                    <div>Plot No:202</div><br/>
                    <div>Locality:Janla</div><br/>
                    <div>District:Khurdha</div><br/>
                    <div>State:Odisha</div><br/>
                </div>
                <div style={{float:'left',marginLeft:'200px',marginTop:'50px'}}>
                        <div>Your Identity</div><br/>
                        <div>Adhar No.:4321-5342-6343</div><br/>
                        <div>PAN No.:6543287659</div><br/>
                </div>
                <div style={{float:'left',marginLeft:'200px',marginTop:'50px'}}>
                        <div>Your Finger Print is set</div>
                </div>
                <Modal isOpen={this.state.addressActive} onRequestClose={this.toggleModal} style={addressStyles}>
                <button onClick={this.toggleModal} style={{float:'right',backgroundColor:'seagreen',border:'0px',color:'white',height:'20px',width:'30px'}}>&#x2716;</button>
                <div style={{color:'#666666',fontSize:'20px'}}>Your Address:</div><br/>
                <form action="/">
                <input type="text" style={customInput} placeholder="Enter Plot No." /><br/><br/>
                <input type="text" style={customInput} placeholder="Enter Locality" /><br/><br/>
                <input type="text" style={customInput} placeholder="Enter City/Village" /><br/><br/>
                <input type="number" style={customInput} placeholder="Enter Pin" /><br/><br/>
                <input type="text" style={customInput} placeholder="Enter District" /><br/><br/>
                <input type="text" style={customInput} placeholder="Enter State" /><br/><br/>
                <input onClick={this.toggleModal} type="submit" value="Save" style={{backgroundColor:'seagreen',border:'0px',color:'white',height:'40px',width:'70px',fontSize:'15px',borderRadius:'5px'}} />  
                </form>
                </Modal>
                <Modal isOpen={this.state.identityActive} onRequestClose={this.identityModal} style={identityStyles}>
                <button onClick={this.identityModal} style={{float:'right',backgroundColor:'seagreen',border:'0px',color:'white',height:'20px',width:'30px'}}>&#x2716;</button>
                <div style={{color:'#666666',fontSize:'20px'}}>Your Identity:</div><br/>
                <form action="/">
                <input type="text" style={customInput} placeholder="Enter Adhar No." /><br/><br/>
                <input type="text" style={customInput} placeholder="Enter Pan No." /><br/><br/>
                <input onClick={this.toggleModal} type="submit" value="Save" style={{backgroundColor:'seagreen',border:'0px',color:'white',height:'40px',width:'70px',fontSize:'15px',borderRadius:'5px'}} />  
                </form>
                </Modal>
                <Modal isOpen={this.state.otpActive} onRequestClose={this.otpModal} style={otpStyles}>
                <button onClick={this.otpModal} style={{float:'right',backgroundColor:'seagreen',border:'0px',color:'white',height:'20px',width:'30px'}}>&#x2716;</button>
                <div style={{color:'#666666',fontSize:'20px'}}>Phone No Verification</div><br/>
                <form action="/">
                <input type="text" style={customInput} placeholder="Enter OTP" /><br/><br/>
                <input onClick={this.otpModal} type="submit" value="Submit" style={{backgroundColor:'seagreen',border:'0px',color:'white',height:'40px',width:'70px',fontSize:'15px',borderRadius:'5px'}} />  
                </form>
                </Modal>
            </React.Fragment>
        )
    }
}

//&#10003; tik mark