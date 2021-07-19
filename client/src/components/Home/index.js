import React ,{Component} from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';
// import { getBooks } from '../../store/actions/book_actions';
// import {RowGenerator, GenreateRowsWithBlocks} from '../../utils/helpers';
import Patient from '../../components/Patient'
import { getPatients, deletePatient, patientCalled, addPatientNotes, clearPatient, getPatientNotes } from '../../store/actions/patient_actions'
import { addSchedule } from '../../store/actions/scheduled_actions'
import {connect} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import PatientNotes from '../../components/PatientNotes/patientNotes'
import { Formik } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';


const NoteSchema = Yup.object().shape({
    note:Yup.string()
    .required("Required !!"),

})


class Home extends Component {

    state = {
        patientSearch: '',
        turnOnPatientNotes: false,
        patientNotes: [],
        pId: '',
        userClinic: ''
    }

    componentDidMount(){
        console.log(this.props.patients.collection)
        this.props.dispatch(getPatients())
        this.setState({userClinic: this.props.user.userData.clinic})
        // axios.get('http://localhost:3001/api/patient/')
        // .then((response) => response.data)
        // .then(patientsList => {
        //     console.log(patientsList)
        //     this.setState({ patients: patientsList });
        // });
        
    }
    // componentDidUpdate(prev) {
    //     console.log(prev)
    //     if(this.props.patients.notesList !== prev.patients.notesList){

    //     }
    // }

    call=(patient)=>{
        // console.log(this.props.patients.collection.find(item => item._id == patient))
        this.props.dispatch(patientCalled(this.props.patients.collection.find(item => item._id == patient)))
        this.props.dispatch(getPatients())
        this.props.dispatch(getPatients())      
    }

    scheduledPateint=(key)=>{


        // alert('Confirm Person has been scheduled')
        let answer = window.confirm("Are you sure this person is in the Schedule")
        if(answer){
            // console.log(this.props.patients.collection.find(item => item._id == key))
            this.props.dispatch(addSchedule(this.props.patients.collection.find(item => item._id == key)))
            this.props.dispatch(deletePatient(this.props.patients.collection.find(item => item._id == key)))
            this.props.dispatch(getPatients())
            this.props.dispatch(getPatients())
        }
        // console.log('no')


    }

    turnOffPopup=()=>{
        this.setState({turnOnPatientNotes: false})
        
    }

    goToPopup=(patient)=>{
        // console.log(patient)
        this.setState({turnOnPatientNotes: true})
        const patientData = this.props.patients.collection.find(item => item._id == patient)
        console.log(patientData)
        this.setState({patientNotes: patientData.notes, pId: patientData._id})
        
        this.props.dispatch(getPatientNotes(patientData.notes))

    }

    addNote = async (values)=>{
        const patientData = await this.props.patients.collection.find(item => item._id == this.state.pId)
        console.log(patientData)
        const calls = await this.props.dispatch(addPatientNotes({patientId: this.state.pId,userId:this.props.user.userData.id,content: values.note}))

        // console.log(calls)
        // this.goToPopup(this.state.pId)
        const callP = await this.props.dispatch(getPatients())
        console.log(callP)
        // const t = await this.props.dispatch(getPatientNotes(patientData.notes))
        // console.log(callP)
        const getPNotes = await this.goToPopup(this.state.pId)
        // const t = await this.props.dispatch(getPatientNotes(patientData.notes))
        // console.log(getPNotes)





    }



    showPatients =(patients) => {
        console.log(this.state.userClinic)
        try{
            if(patients.collection){
                return(
                    patients.collection
                    .filter(clinic =>{
                        console.log(clinic)
                        if(clinic.location.toLowerCase().includes(this.state.userClinic.toLocaleLowerCase())){
                            return clinic
                        }
                    })
                    .filter(val=>{
                        if(this.state.patientSearch == ''){
                            return val
                        }else if (val.name.toLowerCase().includes(this.state.patientSearch.toLocaleLowerCase())){
                            return val
                        }else if (val.diagnosis.toLowerCase().includes(this.state.patientSearch.toLocaleLowerCase())){
                            return val
                        }else if (val.location.toLowerCase().includes(this.state.patientSearch.toLocaleLowerCase())){
                            return val
                        }else if (val.createdAt.toLowerCase().includes(this.state.patientSearch.toLocaleLowerCase())){
                            return val
                        }else if (val.phoneNumber.toLowerCase().includes(this.state.patientSearch.toLocaleLowerCase())){
                            return val
                        }}).slice(0).reverse().map((item, index)=>(
                        <TableRow key={index}>
                            <TableCell>
                                <a onClick={()=> this.goToPopup(item._id)}>{item.name}</a>
                            </TableCell>
                            <TableCell>{item.diagnosis}</TableCell>
                            <TableCell>{item.location}</TableCell>
                            <TableCell>{item.phoneNumber}</TableCell>
                            <TableCell>{moment(item.createdAt).format("MM/DD/YY")}</TableCell>
                            <TableCell><button className="Login-button button1" onClick={() => this.call(item._id)}><div>{item.called}</div>Called</button></TableCell>
                            <TableCell><button className="Login-button button1" onClick={() => this.scheduledPateint(item._id)}>Scheduled</button></TableCell>
                        </TableRow>
                    ))
                )

            }
            return 
    }catch(e){
        console.log(e)
        return(
            <div>
                <h1>Sorry something seams to have gone wrong :( please try refreshing the page!!!</h1>
            </div>
        )
    }
    }


    showNotes=(patients)=>{
        console.log(typeof patients)
        try{
            if(patients){
                return(patients.slice(0).reverse().map((item, index)=>(
                <div className='popup-card-container'> 
                    <div className='popup-card' key={index}> 
                        <div>
                            <h2>{item.content}</h2>
                        </div>
                        <div className='detail'>
                            {`Created by ${item.creator.name} on ${moment(item.createdAt).format('MMM Do YYYY')} at ${moment(item.createdAt).format('hh:mm')}`}
                        </div>
                            {/* <div>
                                {`${moment(item.createdAt).format('MMM Do YYYY')} at ${moment(item.createdAt).format('hh:mm')}`}
                            </div> */}
                    </div>
                </div>
                ))
                )
            }
            // if(!patients){
            //     return (
            //         <div>
            //             No Posts
            //         </div>
            //     )
            // }
            return false

        }catch(error){
            console.log(error)
        }
    }

    
    render(){
        // console.log(this.props.patients.collection)
        console.log(this.props.user.userData.clinic)
        return (
            <div>
                <h1>
                  Referred Patients
                </h1>
                <div className='add-patient-div'>
                    <Link to='/add'><button className="Login-button button1">Add Patient+</button></Link>
                </div>
                <hr/>
                <div className="App-container">
                <div className='search-container'>
                    <div className='inner-search-container'>
                        <input className='search-input' type="text" name="search" placeholder="Search Patient" onChange={e=>this.setState({patientSearch: e.target.value})}/>
                    </div>
                    <div className='inner-select-container'>
                        <select className="select-input" onChange={e=>this.setState({userClinic: e.target.value})}>
                            <option value="CDA" >CDA</option>
                            <option value="HAYDEN">HAYDEN</option>
                            <option value="SPOKANE VALLEY">SV</option>
                            <option value="POST FALLS">PF</option>
                            <option value="RATHDRUM">RATHDRUM</option>
                        </select>
                    </div>
                </div> 
                <div className='index-container'>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Diagnosis</TableCell>
                                    <TableCell>Location</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Referral Date</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>

                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.showPatients(this.props.patients)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                        {/* <div className='list-container'>
                            <div className='title1'>
                                Name
                            </div>
                            <div className='title1'>
                                DOB
                            </div>
                            <div className='title1'>
                                Phone Number
                            </div>
                            <div className='title1'>
                                Location
                            </div>
                            <div className='title1'>
                                Diagnosis
                            </div>
                            <div className='title1'>
                                Referral Date
                            </div>
                            <div className='title1'>
                                Text
                            </div>
                            <div className='title1'>
                                Scheduled
                         </div>
                        </div> */}
                </div> 
                <PatientNotes trigger={this.state.turnOnPatientNotes} setTrigger={this.turnOffPopup} id={this.state.pId}>
                <h4>Post Notes Here:</h4>
                    <Formik
                        initialValues={{note:''}}
                        validationSchema={NoteSchema}
                        onSubmit={(values, {resetForm}) => {
                            // console.log(values)
                            this.addNote(values)
                            resetForm({});
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
                                    <div className='twelve columns'>
                                        <input
                                        type="text"
                                        name="note"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.note}
                                        placeholder="Place Note Here..."
                                        className="notes-input"
                                        />
                                        { errors.note && touched.note ? 
                                            <div className="error_label">{errors.note}</div>
                                        :null}
                                    </div>

                                </div>
                                <div className="login-button-padding">
                                    <button type="submit" className="Login-button button1">
                                        Post
                                    </button>
                                </div>

                                <br/>
                                {
                                    this.state.validation ?
                                    <div className='error_label'>
                                        Error, Please try again
                                    </div>
                                :null
                                }

                            </form>
                        )}
                    </Formik>
                    <hr/>
                    <div className='note-container'>
                        {this.showNotes(this.props.patients.notesList)}
                    </div>
                </PatientNotes>  
                    {/* {this.state.patients.map((job, index) =>{
                        return(
                        <div key={index} className="in_app">
                        <Patient
                            name={job.name}
                            dob={job.dob}
                            phoneNumber={job.phoneNumber}
                            location={job.location}
                            diagnosis={job.diagnosis}
                            referralDate={job.referralDate}
                            />
                        </div>
                        )
                        })} */}
                </div>
            </div>
          );

    }

}

function mapStateToProps(state){
    return {
        patients: state.patients,
        user: state.user
    }
}

export default connect(mapStateToProps)(Home);
