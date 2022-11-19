import React, { } from "react"
import "./App.css";
import { Col, Modal, ModalBody, ModalHeader, Row ,Button,Card} from "reactstrap";
// import img1 from './Img/first.jfif';
import rug from "react-upload-gallery";
// import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Label from "react-bootstrap/FormLabel";
import Textarea from "react";
import { useState } from "react";
import {BsPlusLg} from "react-icons/bs";
import { type } from "@testing-library/user-event/dist/type";



function App(){
//input data in text area

  const [inputText, setInputText] = useState("");
  const [characterLimit] = useState(500);
  const handleChange = event => {
    setInputText(event.target.value);
  };

const[state,setState]=useState([]);
const HandleImage=(e)=>
{
  if(e.target.files){
    const fileArray=Array.from(e.target.files).map((file)=>URL.createObjectURL(file)) 
    setState((prevImages)=>prevImages.concat(fileArray))
    Array.from(e.target.files).map(
      (file)=>URL.revokeObjectURL(file)
    )
  }
}
const [count,setCount]=useState(0);
const renderphotos=(source)=>{
  return source.map((photo)=>{  
    return <img src={photo} key={photo} className="image"/> 
  }) 
}


  const [image, setImage] = useState({ preview: '', raw: '' });
  const handlebutton =(e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
  

  const[show,setShow]=useState(false)
  const handleshow=()=>{
    setShow(true);
  }
  const handleclose=()=>{
    setShow(false);
  }
  const [modal,setModal]=useState(false)
  const [selectedRadioBtn,setSelectedRadioBtn]=React.useState('radio1');
  return(
    <div>
      <Modal
        size="lg"
        isOpen={modal}
        toggle={()=>setModal(!modal)}
        >
        <ModalHeader id="head" toggle={()=>setModal(!modal)}>  
          Add Post
        </ModalHeader>
        <ModalBody>
        <form>
          <Row>

          <Col sm={6}>
              <div>
                <form>
              <div className="form-grouup">
              <label>Is the post relates to your Business?</label>
              <div>
              <label>
                <input type="radio" className="radio-custom"  name="radio1" onClick={handleshow}/><span className="radio-custom-label">Yes</span>
              </label>
              <label className="r4">
                <input type="radio" className="radio-custom"  name="radio1" onClick={handleclose}/><span className="radio-custom-label">No</span>
              </label>
              </div>
              </div>
              {show?(<div className="scroll mt-2">
              {show?( <label>Select Place</label>):""}
             {show?( <Row>
              <Col sm={6}> 
                <label className="l2">
                  <h4 >Lorem <input type="radio" name="radio2" className="radio-box"/></h4>
                 
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </label>
                </Col>
                <Col sm={6}>
                <label className="l2">
                <h4>Lorem <input type="radio" name="radio2" className="radio-box" /></h4>
                  
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </label>
                </Col>
                </Row>):""}
                
                {show?(<Row>
              <Col sm={6}>  
                <label className="l2">
                  <h4>Lorem<input type="radio" name="radio2" className="radio-box" /></h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </label>
                
                </Col>
                <Col sm={6}>
                <label className="l2">
                  <h4>Lorem <input type="radio" name="radio2" className="radio-box" /></h4>
                 
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </label>
                </Col>
                </Row>):""}
                {show?(<Row>
              <Col sm={6}>  
                <label className="l2">
                  <h4>Lorem <input type="radio" name="radio2" className="radio-box" /></h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </label>
                
                </Col>
                <Col sm={6}>
                <label className="l2">
                  <h4>Lorem<input type="radio" name="radio2" className="radio-box" /></h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </label>
                </Col>
                </Row>):""}
             
             </div>):""}

             <div className="mt-4 form-group">
                <label>Offer Validity(Optional)</label>
                </div>
                <div className="container"> 
                <div className="mt-3">
                  <input type="date" placeholder="Start Date"/>
                  <input type="date" className="ms-2"/>
                </div>
                <div className="mt-2">
                <button type="reset" className="btn" id="btn1">Clear Timings</button>
                </div>
                </div>
              
              </form>
              </div>

            </Col>
            <Col sm={6}>
            
            <div>
              <form>
              <label>Post Details</label>
              <div className="mt-3 form-group">
              <input type="text" className="form-control" placeholder="Post Title" />
              </div>
              <div className="mt-3 form-group container" style={{width:"100%"}}>  
              {/* <input type="textarea" className="form-control" maxLength={500} placeholder="Write few words about your post(Optional)" onChange={handleChange}/> */}
              
              <textarea className="form-control" rows={3} maxLength={500} placeholder="Write few words about your post(Optional)" onChange={handleChange}> 

              </textarea>
              <p className="text-end">{inputText.length}/{characterLimit}</p>
              </div>
              <div className="mt-3 form-group">
                <label>Upload post images/videos</label>
                <p>
                  You can add upto 6 imagaes and 2 videoss
                </p>
                <div className="l1 form-group">
                  <label>Need for images? Need more videos</label>
                </div>
                <div className="mt-2 form-group text-center">
            <label htmlFor="upload-button" className="choose-file" ><h1 className="m-5"><BsPlusLg/></h1> </label>
            <input type="file" multiple id="upload-button" style={{display:"none"}} onChange={HandleImage} onClick={()=>setCount(count+1)}/>
      <     p>You have added {count} images</p>  
            <div >
      {/* <img src={state} alt="" style={{height:"100px", width:"50px"}}></img> */}
                  {renderphotos(state)}
            </div>
      
                </div>
               
              </div>                
              </form>
            </div>             
            </Col>                 
          </Row>

        </form>
        <div className="text-center">         
          <button className="btn" id="text-color">Submit</button>
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