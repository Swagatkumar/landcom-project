import React from 'react';
import {NavLink} from 'react-router-dom';
import './registration.css'



export default class Redgform extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div id="bar">
					<div style={{float:'left',fontSize:'20px',marginTop:'10px',marginLeft:'10px',color:'#666'}}>Registration</div>
					<NavLink to="/logout"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}>Logout</div></NavLink>
					<NavLink to="/notification"><div style={{color:'black',float:'right',fontSize:'20px',marginTop:'10px',marginRight:'10px'}}><i className="fa fa-bell-o"></i></div></NavLink>
				</div>
                <form>
                <div className="body">
                    <div style={{overflow:'hidden'}}>
                        Document Type:&nbsp;&nbsp;&nbsp;&nbsp;
                        <select style={{padding:'5px',backgroundColor:'transparent'}}>
                            <option>General Warranty Deed</option>
                            <option>Special Warranty Deed</option>
                            <option>Quit Claim Deed</option>
                            <option>Bargain And Sale Deed</option>
                            <option>Grant Deed</option>
                            <option>Court Order Deed</option>
                        </select>
                    </div><br/><br/>
                    <div style={{overflow:'hidden'}}>
                    <div style={{float:"left",marginLeft:'5%'}}>
                        Official Record Reference Number :<br/><br/>
                        <input type="text" name="reference" />
                    </div>
                    <div style={{float:"right",marginRight:'30%'}}>
                       Date of Deed Notarization :<br/><br/>
                        <input type="date" name="deed" />
                    </div></div><br/>
                    <div style={{overflow:'hidden'}}>
                        <div style={{float:'left',marginLeft:'5%'}}>
                            <div className="heading2">Seller Details:</div><br/><br/><br/>
                            Name: <input type="text" /><br/><br/>
                            Email id: <input type="email" />
                        </div>
                        <div style={{float:'right',marginRight:'25%'}}>
                            <div className="heading2">Buyer Details:</div><br/><br/><br/>
                            Name: <input type="text" /><br/><br/>
                            Email id: <input type="email" />
                        </div>
                    </div><br/><br/>
                    <div style={{overflow:'hidden'}}>
                    <div className="heading2" style={{marginLeft:'5%'}}>Land Details:</div><br/><br/><br/>
                        <div style={{float:'left',marginLeft:'5%'}}>
                            Address:<br/><br/><textarea cols="40" rows="5" /><br/><br/>
                        </div>
                        <div style={{float:'left'}}>
                            <div style={{float:'left',marginLeft:'5%'}}>
                                Pin: <br/><br/><input type="number" />
                            </div>  
                            <div style={{float:'left',marginLeft:'5%'}}>
                                Price:<br/><br/> <input type="number" />
                            </div><br/>
                            <div style={{float:'left',marginLeft:'5%'}}>
                            Type: <select>
                                <option>Aggricultural</option>
                                <option>Industrial</option>
                                <option>Residential</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/registration2"><input type="submit" style={{border:'0px',
                    backgroundColor:'seagreen',height:'45px',width:'100px',color:'white',
                    borderRadius:'5px',marginLeft:'40%'}} value="Submit" /></NavLink>
                </div>
                </form>
            </React.Fragment>
        );
    }
}