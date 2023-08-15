import React, { useEffect, useRef, useState } from 'react'
import "./Contact.css"
import contactImage from '../../assets/images/Contact.jpg'
import Alert from '../Alert/Alert';
import HashLoader from "react-spinners/HashLoader";
import "../loader.css"
import axios from 'axios';

function Contact() {
    const [loading,setLoading] = useState(false);
    const [formData,setFormData] = useState({firstname:'', lastname:'', email:'', message:''});
    const [formErrors,setformErrors] = useState({});
    const [isSubmit,setIssubmit] = useState(false);
    const alertRef = useRef(null);
    const inputRef = useRef([]);

    const inputHandler = (event)=>{
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData,
           [name]:value
        })
    }

    const submitForm =(event)=>{
        event.preventDefault();
        setIssubmit(true);
        setformErrors(validate(formData))
    
    }
    useEffect(()=>{
        if (Object.keys(formErrors).length===0 && isSubmit) {
            axios.post('/api/v1/contact/',formData)
            .then(res=>{
                console.log(res.data.message);
                alertRef.current.showalert();
                setFormData({firstname:'', lastname:'', email:'', message:''})
            })
            .catch(er=>{
                alert("Internal server error")
            })
        }
    },[formErrors])

    const validate = (values)=>{
        const errors ={};
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!values.firstname){
            errors.firstname="Name is required"
        }
        if(!values.lastname){
            errors.lastname="Surname is required"
        }
        if(!values.email){
            errors.email="Email is required"
        }
        else if(!regex.test(values.email)){
            errors.email="Please enter a valid email id"
        }
        return errors;
        
    }

    useEffect(()=>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    },[])
    
  return (
    <div className='aboutContainer'>
        {
            loading ?
            <div className="loader">
                <HashLoader
                color={"#4d94bb"}
                loading={loading}
                size={50}
                />
            </div>
            :
        <>
        <div className="bgtextcontact"><h1>Contact</h1></div>
        <h1 className="heading_about">Contact <span>Me</span></h1>
        <main>
            <div className="contact_left">
            <Alert ref={alertRef} type="success" message={"Successfully submitted"} />
                <form action="">
                    <div className="name">
                        <div className="">
        <input type="text" name='firstname' value={formData.firstname} placeholder='Name' onChange={inputHandler} ref={(el)=>{inputRef.current.name=el}}/>
                        <p>{formErrors.firstname}</p>
                        </div>

                        <div className="">
        <input type="text" name='lastname' value={formData.lastname} placeholder='Surname' onChange={inputHandler} ref={(el)=>{inputRef.current.surname=el}}/>
                        <p>{formErrors.lastname}</p>
                        </div>

                    </div>
                    <div className="emailInput">
    <input type="email" name='email' value={formData.email} placeholder='Email e.g., xyz@gmail.com' onChange={inputHandler} ref={(el)=>{inputRef.current.email=el}}/>
                    <p>{formErrors.email}</p>

                    </div>
    <textarea type="textarea" name='message' value={formData.message} placeholder='Message...' onChange={inputHandler} ref={(el)=>{inputRef.current.message=el}}/>
                    
                    <button onClick={submitForm}>SEND</button>
                </form>
            </div>
            <div className="contact_right">
                <img src={contactImage} alt="" />
                <div className="attribute">
                <a href="https://www.freepik.com/free-vector/contact-us-concept-landing-page_4661525.htm#query=contact%20us&position=1&from_view=keyword&track=ais">Image by pikisuperstar</a> on Freepik
                </div>
            </div>
        </main>
        </>
        }
    </div>
  )
}

export default Contact
