import React, { } from "react"
import "./App.css";
import { Col, Modal, ModalBody, ModalHeader, Row ,Button} from "reactstrap";
// import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Label from "react-bootstrap/FormLabel";
import Textarea  from "react";
import { useState } from "react";



function App(){
  const [modal,setModal]=useState(false)
  const [selectedRadioBtn,setSelectedRadioBtn]=React.useState('radio1');
  return(
    <div>
      <Modal
        size="lg"
        isOpen={modal}
        toggle={()=>setModal(!modal)}
        >
        <ModalHeader class="head" toggle={()=>setModal(!modal)}>  
          Add people who need help
        </ModalHeader>
        <ModalBody>
        <form>
          <Row>
            <Col lg={6}>
            
            {/* Category */}
              <div className="category form-group mt-2">
             <h5><label htmlFor="name">Category</label></h5>
             <div className="container">
              <label>
                <input type="radio" className="radio-custom" value="Food" name="radio1"/><span className="radio-custom-label">Food</span>
              </label>
              <label className="r4">
                <input type="radio" className="radio-custom" value="Medical Help" name="radio1"/><span className="radio-custom-label">Medical Help</span>
              </label>
              <label className="wearing-cloths">
                <input type="radio" className="radio-custom" value="Wearing Cloths" name="radio1"/><span className="radio-custom-label ">Wearing Cloths</span>
              </label>
              </div>       
              </div>


              {/* No of People */}
              <div className="noofpeople form-group mt-2">
             <h5><label htmlFor="name">No of People</label></h5>
             <div className="container">
              <label>
                <input type="radio" className="radio-custom" value="1" name="radio2"/><span className="radio-custom-label">1</span>
              </label>
              <label className="r4">
                <input type="radio" className="radio-custom" value="2-5" name="radio2"/><span className="radio-custom-label">2-5</span>
              </label>
              <label className="r4">
                <input type="radio" className="radio-custom" value="6-10" name="radio2"/><span className="radio-custom-label">6-10</span>
              </label>
              </div>       
              </div>

            {/* Priority */}
              <div className="priority form-group mt-2 ">
             <h5><label htmlFor="name">Priority</label></h5>
             <div className="container">
              <label>
                <input type="radio" className="radio-custom" value="immediate" name="radio3"/><span className="radio-custom-label">Immediate</span>
              </label>
              <label className="r4">
                <input type="radio" className="radio-custom" value="urgent" name="radio3"/><span className="radio-custom-label">Urgent</span>
              </label>
              <label className="r4">
                <input type="radio" className="radio-custom" value="normal" name="radio3"/><span className="radio-custom-label">Normal</span>
              </label>
              </div>       
              </div>

              {/* Post Expiry */}
              <div className="post-expiry form-group mt-2">
             <h5><label htmlFor="name">Post Expiry</label></h5>
             <div className="container">
              <label>
                <input type="radio" className="radio-custom" value="1d" name="radio4"/><span className="radio-custom-label">1d</span>
              </label>
              <label className="r4">
                <input type="radio" className="radio-custom" value="6hrs" name="radio4"/><span className="radio-custom-label">6hrs</span>
              </label>
              <label className="r4">
                <input type="radio" className="radio-custom" value="1w" name="radio4"/><span className="radio-custom-label">1w</span>
              </label>
              <label className="r4">
                <input type="radio" className="radio-custom" value="3hrs" name="radio4"/><span className="radio-custom-label">3hrs</span>
              </label>
              </div>       
              </div>
             
            </Col>
            <Col lg={6}>
              <div className="form-group mt-3">
              <h6 className="fetch-loc">Fetch Location</h6>
              <textarea className="form-control"></textarea>
              <p>Make sure you entered address is complete correct and it is your Shop/Office</p>
              </div>
              <div className="form-group mt-3">
                <h6>LandMark</h6>
                <input type="text" className="form-control" placeholder="LandMark"/>
              </div>
              <div className="form-group mt-3">
                <h6>Add Image</h6>
                <input id="imgField" type="file" className="form-control"></input>
              </div>

              <div className="form-group mt-3">
                <h6>Add Message</h6>
                <textarea className="form-control" placeholder="Enter here"></textarea>
              </div>
              
            </Col>
      
          </Row>

        </form>
        <div className="text-center">         
          <button className="btn" id="text-color">Add</button>
          <button className="btn" id="text-color">Reset</button>
          <button className="btn" id="text-color">Cancel</button>
        </div>
        </ModalBody>
      </Modal>
      <button className="btn btn-success mt-3" onClick={()=>setModal(true)}>
        Click
      </button>
    </div>

  )
}

  

export default App;