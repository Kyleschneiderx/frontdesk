
import React, {useEffect, useState } from 'react'
// import './patientNotes.css'
import { useDispatch } from 'react-redux'
import { getPatients } from '../../store/actions/patient_actions'

const PatientNotes =(props)=>{
    console.log(props)

    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                 <button className="close-btn" onClick={()=> props.setTrigger(false) }>Close</button>
                 {props.children}
            </div>      
        </div>
    ): "" ;
}


export default PatientNotes;