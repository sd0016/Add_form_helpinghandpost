import React, { } from "react"
import "./App.css";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
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
        <ModalHeader toggle={()=>setModal(!modal)}>
          Add people who need help
        </ModalHeader>
        <ModalBody>
        <Form>
          <div>
       <Label className="radiobtn">
        Category
       <div className="Category">
      <Label class="label"><input type="radio" name="CT" className="radiobtn" /> Food</Label>
      <Label class="label"><input type="radio" name="CT" className="radiobtn"/> Medical Help</Label>
      <Label class="label"><input type="radio" name="CT" className="radiobtn"/>Wearing Cloths</Label>
      </div>
      </Label>
      </div>
      <div>
      <Label className="radiobtn">
      Number of people
      <div className="NOP">   
      <Label class="label"><input className="radiobtn" type="radio" name="NP" value="radio1" />1</Label>
      <Label class="label"><input className="radiobtn" type="radio" name="NP" value="radio2" />2-5</Label>
      <Label class="label"><input className="radiobtn" type="radio" name="NP" value="radio3" />6-10</Label>      
      </div>
      </Label>
      </div>
      <div>
      <Label className="radiobtn">
        Priority
        <div className="PRO">
      <Label class="label"><input className="radiobtn " type="radio" name="PR" value="radio1" />Immediate</Label>
      <Label class="label"><input className="radiobtn" type="radio" name="PR" value="radio2" />Urgent</Label>
      <Label class="label"><input className="radiobtn" type="radio" name="PR" value="radio3" />Normal</Label> 
        </div>     
      </Label>
      </div>
      <div>
      <Label className="radiobtn">
        Post expiry
        <div className="POE">
      <Label class="label"><input className="radiobtn" type="radio" name="PE" value="radio1"/>1d</Label>
      <Label class="label"><input className="radiobtn" type="radio" name="PE" value="radio2"/>6hrs</Label>
      <Label class="label"><input className="radiobtn" type="radio" name="PE" value="radio3"/>1w</Label> 
      <Label class="label"><input className="radiobtn" type="radio" name="PE" value="radio3" />3hrs</Label> 
        </div>     
      </Label>
      </div>
      <div>
        <fieldset> 
      <legend>Address</legend>
      {/* <textarea name="text1" id="" cols="30" rows="2"></textarea> */}
      </fieldset>
      <label>Make sure you enetered address is complete, correct and it is your Shop/Office/</label>
      </div>
      <div>
        <input type="text" placeholder="LandMark"/>
      </div>
      </Form>
        </ModalBody>
      </Modal>
      <button className="btn btn-success mt-3" onClick={()=>setModal(true)}>
        Click
      </button>
    </div>

  )
}

  

export default App;