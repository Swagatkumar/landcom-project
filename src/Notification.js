import React from 'react';
import './notification.css';
import Modal from 'react-modal';
import {NavLink} from 'react-router-dom';

const acceptStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      height                 : '100px',
      width                : '400px',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border :'1px solid grey'
    }
  };
  const buyerStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      height                 : '400px',
      width                : '700px',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border :'1px solid grey'
    }
  };

class Notification extends React.Component {
	constructor(){
        super()
      
        this.state = {
          acceptActive:false,
          acceptActive1:false,
		  declineActive:false,
		  buyerActive:false
          }
      }
      
      componentWillMount(){
        Modal.setAppElement('body');
      }
      
        acceptModal = () => {
          this.setState({
            acceptActive:!this.state.acceptActive
          })
    }
    acceptModal1 = () => {
      this.setState({
        acceptActive1:!this.state.acceptActive1
      })
}
		buyerModal = () => {
			this.setState({
			  buyerActive:!this.state.buyerActive
			})
		  }
        acceptRequest = () => {
            this.setState({
                acceptActive:!this.state.acceptActive
            })
        }
        declineModal = () => {
            this.setState({
              declineActive:!this.state.declineActive
            })
          }
          declineRequest = () => {
              this.setState({
                  declineActive:!this.state.declineActive
              })
          }
	render() {
		return (
			<React.Fragment>
        <div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Notifications</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
			<div style={{overflow:'hidden'}}>
			<div className="notification">
				<div id="not">You have one client to buy your land of Land Id: 123</div><br/>
				<a href="#" onClick={this.buyerModal} style={{color:'white'}}>Buyer Information</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#" onClick={this.acceptModal1} style={{color:'white'}}>Accept Request</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#" onClick={this.declineModal} style={{color:'white'}}>Decline Request</a>
			</div>
			</div>
			<div style={{overflow:'hidden'}}>
			<div className="notification">
				<div id="not">Your request for land of Land Id: 123 got accepted</div><br/>
				<a href="avt.png" style={{color:'white'}} download>Download Guideline</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#" onClick={this.acceptModal} style={{color:'white'}}>Proceed</a>
			</div>
			</div>
			<div style={{overflow:'hidden'}}>
			<div className="notification">
				<div id="not">You accepted the request</div><br/>
				<a href="avt.png" style={{color:'white'}} download>Download Guideline</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#" onClick={this.acceptModal} style={{color:'white'}}>Proceed</a>
			</div>
			</div>
				<Modal isOpen={this.state.acceptActive} onRequestClose={this.acceptModal} style={acceptStyles}>
                <button onClick={this.acceptModal} style={{outline:'none',float:'right',backgroundColor:'seagreen',border:'0px',color:'white',height:'20px',width:'30px'}}>&#x2716;</button>
                <div style={{color:'#666666',fontSize:'15px'}}>Are you sure to accept this request.</div><br/><br/>
                <NavLink to="/registration"><button style={{outline:'none',backgroundColor:'seagreen',border:'0px',color:'white',height:'40px',
                width:'70px',fontSize:'15px',borderRadius:'5px',float:'left'}}>Ok</button></NavLink>
                <button onClick={this.acceptModal} style={{outline:'none',backgroundColor:'seagreen',border:'0px',
                color:'white',height:'40px',width:'70px',fontSize:'15px',borderRadius:'5px',
                float:'left',marginLeft:'20px'}}>Cancel</button>  
                </Modal>
                <Modal isOpen={this.state.acceptActive1} onRequestClose={this.acceptModal1} style={acceptStyles}>
                <button onClick={this.acceptModal1} style={{outline:'none',float:'right',backgroundColor:'seagreen',border:'0px',color:'white',height:'20px',width:'30px'}}>&#x2716;</button>
                <div style={{color:'#666666',fontSize:'15px'}}>Are you sure to accept this request.</div><br/><br/>
                <button style={{outline:'none',backgroundColor:'seagreen',border:'0px',color:'white',height:'40px',
                width:'70px',fontSize:'15px',borderRadius:'5px',float:'left'}}>Ok</button>
                <button onClick={this.acceptModal} style={{outline:'none',backgroundColor:'seagreen',border:'0px',
                color:'white',height:'40px',width:'70px',fontSize:'15px',borderRadius:'5px',
                float:'left',marginLeft:'20px'}}>Cancel</button>  
                </Modal>
                <Modal isOpen={this.state.declineActive} onRequestClose={this.declineModal} style={acceptStyles}>
                <button onClick={this.declineModal} style={{outline:'none',float:'right',backgroundColor:'seagreen',border:'0px',color:'white',height:'20px',width:'30px'}}>&#x2716;</button>
                <div style={{color:'#666666',fontSize:'15px'}}>Are you sure to decline this request.</div><br/><br/>
                <button onClick={this.declineRequest} style={{outline:'none',backgroundColor:'seagreen',border:'0px',color:'white',height:'40px',
                width:'70px',fontSize:'15px',borderRadius:'5px',float:'left'}}>Ok</button>
                <button onClick={this.declineModal} style={{outline:'none',backgroundColor:'seagreen',border:'0px',
                color:'white',height:'40px',width:'70px',fontSize:'15px',borderRadius:'5px',
                float:'left',marginLeft:'20px'}}>Cancel</button>  
                </Modal>
				<Modal isOpen={this.state.buyerActive} onRequestClose={this.buyerModal} style={buyerStyles}>
                <button onClick={this.buyerModal} style={{outline:'none',float:'right',backgroundColor:'seagreen',border:'0px',color:'white',height:'20px',width:'30px'}}>&#x2716;</button>
                <div style={{color:'#666666',fontSize:'25px'}}>Buyer Information:</div><br/><br/>
                <div style={{overflow:'hidden'}}>
                <div style={{float:'left',color:'#666666',padding:'10px', height:'60px',width:'200px'}}>
                <div>Name:</div><br/>
                <div>John Snow</div><br/>
                </div>
                <div style={{float:'left',color:'#666666',padding:'10px', height:'60px',width:'200px'}}>
                <div>Email:</div><br/>
                <div>johnsnow@gmail.com</div><br/>
                </div>
                <div style={{float:'left',color:'#666666',padding:'10px', height:'60px',width:'200px'}}>
                <div>Phone No.:</div><br/>
                <div>9876543214</div><br/>
                </div>
				</div>
				<div style={{color:'#666666',padding:'10px',fontSize:'20px'}}>
                    Address:
                </div><br/>
				<div style={{overflow:'hidden'}}>
				<div style={{float:'left',color:'#666666',padding:'10px', height:'60px',width:'200px'}}>
                <div>Plot No.:</div><br/>
                <div>202</div><br/>
                </div>
                <div style={{float:'left',color:'#666666',padding:'10px', height:'60px',width:'200px'}}>
                <div>City/Village:</div><br/>
                <div>Castle Black</div><br/>
                </div>
                <div style={{float:'left',color:'#666666',padding:'10px', height:'60px',width:'200px'}}>
                <div>Locality:</div><br/>
                <div>North</div><br/>
                </div>
				<div style={{float:'left',color:'#666666',padding:'10px', height:'60px',width:'200px'}}>
                <div>Pin:</div><br/>
                <div>754232</div><br/>
                </div>
                <div style={{float:'left',color:'#666666',padding:'10px', height:'60px',width:'200px'}}>
                <div>District:</div><br/>
                <div>Winterfell</div><br/>
                </div>
                <div style={{float:'left',color:'#666666',padding:'10px', height:'60px',width:'200px'}}>
                <div>State:</div><br/>
                <div>Westros</div><br/>
                </div>
				</div>
                </Modal>
			</React.Fragment>
		)
	}
}

export default Notification;