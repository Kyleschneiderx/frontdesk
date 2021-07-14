import React, { Component } from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {clearPatient, editPatient, getPatient} from '../../../store/actions/patient_actions'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const PatientSchema = Yup.object().shape({
    name:Yup.string()
    .required("Required !!"),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    location: Yup.string()
    .required("Required !!"),
    diagnosis: Yup.string()
    .required("Required !!")

})



class EditPatient extends Component {
    state={
        success: false,
        loading:true,
        patientToEdit:{}
    }

    onEditPatient = (values) =>{
        this.props.dispatch(editPatient(values))
    }

    componentDidUpdate(prevProps){
        const hasChanged = this.props.patients.single !== prevProps.patients.single;
        const hasUpdated = this.props.patients.update !== prevProps.patients.update;
        const single = this.props.patients.single


        if(hasUpdated){
            this.setState({success:true})
        }
        if(hasChanged){
            if(single !== false){
                this.setState({
                    loading:false,
                    patientToEdit:{
                        _id:single._id,
                        name:single.name,
                        diagnosis:single.diagnosis,
                        location:single.location,
                        phoneNumber:single.phoneNumber
                    }
                })

            } else {
                this.props.history.push('/')
            }

        }

    }

    componentWillUnmount(){
        this.props.dispatch(clearPatient());
    }

    componentDidMount(){
        /// Fetch Book
        this.props.dispatch(getPatient(this.props.match.params.id))
    }



    render() {
        return (
            <div className="patient-input-container">
                <div className>
                    <h4>Add Patient Here:</h4>
                    <Formik
                        enableReinitialize={true}
                        initialValues={this.state.patientToEdit}
                        validationSchema={PatientSchema}
                        onSubmit={(values, {resetForm}) => {
                            this.onEditPatient({
                                ...values,
                            })
                        }}  
                        
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit

                        })=>(
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className='twelve_columns'>
                                        <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        placeholder="Patient Name Here..."
                                        className="input"
                                        />
                                        { errors.name && touched.name ? 
                                            <div className="error_label">{errors.name}</div>
                                        :null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <input
                                        type="text"
                                        name="diagnosis"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.diagnosis}
                                        placeholder="Patient Diagnosis Here..."
                                        className="input"
                                        />
                                        { errors.diagnosis && touched.diagnosis ? 
                                            <div className="error_label">{errors.diagnosis}</div>
                                        :null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <select
                                        name="location"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.location}
                                        placeholder="Patient Location Here..."
                                        className="input"
                                        >
                                        <option default>Select a Location</option>
                                        <option default>Hayden</option>
                                        </select>
                                        { errors.location && touched.location ? 
                                            <div className="error_label">{errors.location}</div>
                                        :null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <input
                                        type="text"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phoneNumber}
                                        placeholder="Patient Phone Number Here..."
                                        className="input"
                                        />
                                        { errors.phoneNumber && touched.phoneNumber ? 
                                            <div className="error_label">{errors.phoneNumber}</div>
                                        :null}

                                    </div>
                                </div>
                                <div className="login-button-padding">
                                    <button type="submit" className="Login-button button1">
                                        Update Patient
                                    </button>
                                </div>
                                <br/>
                                {
                                this.state.success ?
                                <div className='succes_entry'>
                                    <div>Congrats!!</div>
                                    <Link to={`/home`}>
                                    See Updated Patient
                                    </Link>

                                </div>
                                :null
                            }
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        patients: state.patients,
        user: state.user
    }
}

export default connect(mapStateToProps)(EditPatient);