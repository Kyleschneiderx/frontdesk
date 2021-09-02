import React, { useState, useEffect } from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCollectionsCall, clearCollections,  } from '../../../../store/actions/collections_actions';
import { useDispatch } from 'react-redux';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const PatientSchema = Yup.object().shape({


})

const AddCollectionsCaller = () => {

    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('Unmounted')
        dispatch(clearCollections())

    }, [success])


    const formik = useFormik({
        initialValues:{ id:'',firstname:'',lastname:'', number:'', statements: ''},
        validationSchema:Yup.object({
            id:Yup.number()
            .required("Required !!"),
            firstname:Yup.string()
            .required("Required !!"),
            number: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
            .required("Required"),
            lastname: Yup.string(),
            statements: Yup.number().required("Required")
        }),
        onSubmit:(values,{resetForm})=>{
            handleSubmit(values)
            resetForm({})
            setSuccess(true)
        }
    });

    const handleSubmit = (values) => {
        dispatch(addCollectionsCall(values))
        console.log(values)
    }


    const errorHelper = (formik, values) => ({
        error: formik.errors[values] && formik.touched[values] ? true:false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
    });


    return (
        <div className="patient-input-container">
            <div>
                <h4>Add Patient to Collections Here:</h4>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className='twelve_columns'>
                                    <input
                                    type="text"
                                    name="id"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.id}
                                    placeholder="Kareo ID here..."
                                    className="input"
                                    />
                                    { formik.errors.id && formik.touched.id ? 
                                        <div className="error_label">{formik.errors.id}</div>
                                    :null}
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <input
                                    type="text"
                                    name="firstname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstname}
                                    placeholder="Patient First Name Here..."
                                    className="input"
                                    />
                                    { formik.errors.firstname && formik.touched.firstname ? 
                                        <div className="error_label">{formik.errors.firstname}</div>
                                    :null}
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <input
                                    type="text"
                                    name="lastname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastname}
                                    placeholder="Patient Lastname Here..."
                                    className="input"
                                    />
                                    { formik.errors.lastname && formik.touched.lastname ? 
                                        <div className="error_label">{formik.errors.lastname}</div>
                                    :null}

                                </div>
                            </div>

                            <div className="row">
                                <div>
                                    <input
                                    type="text"
                                    name="number"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.number}
                                    placeholder="Patient Phone Number Here..."
                                    className="input"
                                    />
                                    { formik.errors.number && formik.touched.number ? 
                                        <div className="error_label">{formik.errors.number}</div>
                                    :null}

                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <input
                                    type="text"
                                    name="statements"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.statements}
                                    placeholder="Enter Number of statements sent..."
                                    className="input"
                                    />
                                    { formik.errors.statements && formik.touched.statements ? 
                                        <div className="error_label">{formik.errors.statements}</div>
                                    :null}

                                </div>
                            </div>
                            <div className="login-button-padding">
                                <button type="submit" className="Login-button button1">
                                    Add Patient
                                </button>
                            </div>
                            <br/>
                            {
                            success ?
                            <div className='succes_entry'>
                                <div>Congrats!!</div>
                                <Link to={`/collections`}>
                                    See your Collections List
                                </Link>

                            </div>
                            :null
                        }
                    </form>
            </div>
        </div>
    )


}


export default AddCollectionsCaller;