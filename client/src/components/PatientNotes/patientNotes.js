
import React, {useEffect, useState } from 'react'
// import './patientNotes.css'
import { useDispatch } from 'react-redux'
import { getPatients } from '../../store/actions/patient_actions'
import { Link } from 'react-router-dom';

const PatientNotes =(props)=>{
    console.log(props)
    console.log(props.id)

    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                 <button className="Login-button close-btn" onClick={()=> props.setTrigger(false) }>Close</button>
                 <Link to={`/edit/${props.id}`}><button className="edit-btn" onClick={()=>console.log("edit")}></button></Link>
                 <br/>
                 {props.children}
            </div>      
        </div>
    ): "" ;
}


export default PatientNotes;