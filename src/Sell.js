import React from 'react';
import './sell.css';
import Modal from 'react-modal';
import {NavLink} from 'react-router-dom';

const customStyles = {
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
  const docStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      height                 : '300px',
      width                : '500px',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border :'1px solid grey'
    }
  };
  const customInput = {
    height:'30px',
    padding:'10px',
    fontSize:'16px',
    width:'200px',
    borderRadius: '5px',
    border: '1px solid grey'
  };

class Sell extends React.Component {
	constructor(){
        super()
      
        this.state = {
          isActive:false,
          nextActive:false
        }
      }
      
      componentWillMount(){
        Modal.setAppElement('body');
      }
      
        toggleModal = () => {
          this.setState({
            isActive:!this.state.isActive
          })
        }
        offModal = () => {
          this.setState({
            nextActive:!this.state.nextActive
          })
        }
        nextModal = () => {
          this.setState({
            isActive:!this.state.isActive,
            nextActive:!this.setState.nextActive,
          })
        }
        previousModal = () =>{
          this.setState({
            nextActive:!this.setState.nextActive,
            isActive:!this.state.isActive,
            nextActive:!this.state.nextActive
          })
        }
	render() {
		return (
			<React.Fragment>
        <div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Sell Land</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
			<div className="nopost">
				No land posted<br/>
				<a onClick={this.toggleModal} href="#" className="add">&#8853;</a>
			</div>
			<Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal} style={customStyles}>
			<button onClick={this.toggleModal} style={{float:'right',backgroundColor:'seagreen',border:'0px',color:'white',height:'20px',width:'30px'}}>&#x2716;</button>
			<div style={{color:'#666666',fontSize:'20px'}}>(Step:1) Land Information:</div><br/>
			<form action="/sell">
			<input type="text" style={customInput} placeholder="Enter State" />&nbsp;&nbsp;&nbsp;
			<input type="text" style={customInput} placeholder="Enter Pin" /><br/><br/>
			<input type="text" style={customInput} placeholder="Enter District" />&nbsp;&nbsp;&nbsp;
			<input type="number" style={customInput} placeholder="Enter Issue Date" /><br/><br/>
			<select name="type" className="type">
        <option value="">Select Type of Land</option>
        <option vlaue="Residential">Residential</option>
        <option vlaue="Residential">Commercial</option>
        <option vlaue="Residential">Transport</option>
        <option vlaue="Residential">Agricultural</option>
        <option vlaue="Residential">Recreational</option>  
      </select>&nbsp;&nbsp;&nbsp;
			<input type="text" style={customInput} placeholder="Enter Mortgage Status" /><br/><br/>
      <input type="text" style={customInput} placeholder="Enter Area(in square mm)" />&nbsp;&nbsp;&nbsp;
      <input type="text" style={customInput} placeholder="Enter Price" /><br/><br/>
      <input type="text" style={customInput} placeholder="Enter Latitude" />&nbsp;&nbsp;&nbsp;
      <input type="text" style={customInput} placeholder="Enter Longitude" /><br/><br/>
      <textarea rows="4" cols="25" className="address" placeholder="Address Line2" />&nbsp;&nbsp;&nbsp;
      <textarea rows="4" cols="25" className="address" placeholder="Address Line2" /><br/><br/>
			<input onClick={this.nextModal} type="submit" value="Next" style={{backgroundColor:'seagreen',border:'0px',color:'white',height:'40px',width:'200px',fontSize:'15px',borderRadius:'5px'}} />  
			</form>
			</Modal>
      <Modal isOpen={this.state.nextActive} onRequestClose={this.offModal} style={docStyles}>
			<button onClick={this.offModal} style={{float:'right',backgroundColor:'seagreen',border:'0px',color:'white',height:'20px',width:'30px'}}>&#x2716;</button>
			<div style={{color:'#666666',fontSize:'20px'}}>(Step:2) Land Information:</div><br/>
			<form action="/sell">
      <div style={{color:'#666666',fontSize:'25px'}}>Upload Documents</div><br/>
      <div style={{overflow:'hidden'}}>
			<div style={{float:'left',width:'50%'}}>
        <div style={{color:'#666',fontSize:'17px'}}>Land Registry Paper</div><br/>
        <input type="file" name="registry" accept="pdf" />
      </div>
      <div style={{float:'left',width:'50%'}}>
        <div style={{color:'#666',fontSize:'17px'}}>Possession Letter</div><br/>
        <input type="file" name="registry" accept="pdf" />
      </div>
      </div><br/>
      <div style={{overflow:'hidden'}}>
			<div style={{float:'left',width:'50%'}}>
        <div style={{color:'#666',fontSize:'17px'}}>Previous sale agreement</div><br/>
        <input type="file" name="registry" accept="pdf" />
      </div>
      <div style={{float:'left',width:'50%'}}>
        <div style={{color:'#666',fontSize:'17px'}}>No Objection Certificate (NOC)</div><br/>
        <input type="file" name="registry" accept="pdf" />
      </div>
      </div><br/>
			<input onClick={this.previousModal} type="button" value="Previous" style={{backgroundColor:'seagreen',border:'0px',color:'white',height:'40px',width:'200px',fontSize:'15px',borderRadius:'5px'}} />&nbsp;&nbsp;
      <input onClick={this.offModal} type="submit" value="Submit" style={{backgroundColor:'seagreen',border:'0px',color:'white',height:'40px',width:'200px',fontSize:'15px',borderRadius:'5px'}} />  
			</form>
			</Modal>
			</React.Fragment>
		)
	}
}

export default Sell;