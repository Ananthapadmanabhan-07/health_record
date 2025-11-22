import React, { use, useState } from 'react'
import { Form } from 'react-bootstrap'
import { hospitalRegistrationApi } from '../API/Allapi'
import { useNavigate } from 'react-router-dom';



function HospitalRegistration() {
 const [Hospital,setHospital] =useState({hospital_name:"",city:"",place:"",phone_number:""});
 const navigate =useNavigate();

 const handleHospitalRegistration=async(e)=>{
    e.preventDefault();
    const {hospital_name,city,place,phone_number}=Hospital;
    try{
        if(!hospital_name || !city || !place || !phone_number){
            return alert("Please fill all the fields");
        }else{
            const  result = await hospitalRegistrationApi({hospital_name,city,place,phone_number});
            if(result.status===201 || result.status===200){
                alert("Hospital Registration Successful");
            }
        }
    } catch (error) {
        console.error("Error during hospital registration:", error);
        alert("An error occurred. Please try again.");
    }
 }

    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Hospital Registration</h1>
                <div style={{ marginTop: "50px", width: "50%", marginLeft: "25%", height: "450px", border: "2px solid black", padding: "20px", borderRadius: "10px" }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Hospita name</Form.Label>
                        <Form.Control type="text" placeholder="name" onChange={(e)=>setHospital({...Hospital,hospital_name:e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>city</Form.Label>
                        <Form.Control type="text" placeholder="city" onChange={(e)=>setHospital({...Hospital,city:e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>place</Form.Label>
                        <Form.Control type="text" placeholder="place" onChange={(e)=>setHospital({...Hospital,place:e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" placeholder="phone"  onChange={(e)=>setHospital({...Hospital,phone_number:e.target.value})} />
                    </Form.Group>
                    <button onClick={handleHospitalRegistration}>Register</button>
                    <button onClick={() => navigate('/')}>Cancel</button>
                </div>
                <div style={{textAlign:'center',marginTop:'20px'}}>
                    <button  onClick={()=> navigate('/Sample')} >Go to Sample</button>
                </div>
            </div>
        </>
    )
}

export default HospitalRegistration
