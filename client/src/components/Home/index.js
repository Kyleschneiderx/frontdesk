import React ,{Component} from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';
// import { getBooks } from '../../store/actions/book_actions';
// import {RowGenerator, GenreateRowsWithBlocks} from '../../utils/helpers';
import Patient from '../../components/Patient'
import { getPatients, deletePatient, patientCalled } from '../../store/actions/patient_actions'
import { addSchedule } from '../../store/actions/scheduled_actions'
import {connect} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as Twilio from 'twilio-client';




class Home extends Component {

    state = {
        patientSearch: ''
    }

    componentDidMount(){
        console.log("Get Patients")
        

        this.props.dispatch(getPatients())
        // axios.get('http://localhost:3001/api/patient/')
        // .then((response) => response.data)
        // .then(patientsList => {
        //     console.log(patientsList)
        //     this.setState({ patients: patientsList });
        // });
        
    }

    call=(patient)=>{
        this.props.dispatch(patientCalled(this.props.patients.collection[patient]))
        this.props.dispatch(getPatients())
        this.props.dispatch(getPatients())      
    }

    scheduledPateint=(key)=>{


        // alert('Confirm Person has been scheduled')
        let answer = window.confirm("Are you sure this person is in the Schedule")
        if(answer){
            console.log(this.props.patients.collection[key])
            this.props.dispatch(addSchedule(this.props.patients.collection[key]))
            this.props.dispatch(deletePatient(this.props.patients.collection[key]))
            this.props.dispatch(getPatients())
            this.props.dispatch(getPatients())
        }
        console.log('no')


    }


    showPatients =(patients) => {
        if(patients.collection){
            return(
                patients.collection.filter(val=>{
                    if(this.state.patientSearch == ''){
                        return val
                    }else if (val.name.toLowerCase().includes(this.state.patientSearch.toLocaleLowerCase())){
                        return val
                    }

                }).map((item, index)=>(
                    <TableRow key={index}>
                        <TableCell>
                            {item.name}
                        </TableCell>
                        <TableCell>{item.diagnosis}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{item.phoneNumber}</TableCell>
                        <TableCell>{item.referralDate}</TableCell>
                        <TableCell><button className="Login-button button1" onClick={() => this.call(index)}><div>{item.called}</div>Called</button></TableCell>
                        <TableCell><button className="Login-button button1" onClick={() => this.scheduledPateint(index)}>Scheduled</button></TableCell>
                    </TableRow>
                ))
            )

        }
        return false
    }

    
    render(){
        console.log(this.props.patients.collection)
        return (
            <div>
                <h1>
                  Referred Patients
                </h1>
                <hr/>
                <div className="App-container">
                <div className='index-container'>
                    <input type="text" name="search" placeholder="Search Patient" onChange={e=>this.setState({patientSearch: e.target.value})}/>
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
                                    <TableCell>Call</TableCell>
                                    <TableCell>Schedule</TableCell>

                                    
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
        patients: state.patients
    }
}

export default connect(mapStateToProps)(Home);
