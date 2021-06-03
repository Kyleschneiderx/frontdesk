import React ,{Component} from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';
// import { getBooks } from '../../store/actions/book_actions';
// import {RowGenerator, GenreateRowsWithBlocks} from '../../utils/helpers';
import Patient from '../../components/Patient'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




class Home extends Component {

    state = {
        patients: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/patient/')
        .then((response) => response.data)
        .then(patientsList => {
            console.log(patientsList)
            this.setState({ patients: patientsList });
        });
    }



    
    render(){
        return (
            <div>
                <h1>
                  Referred Patients
                </h1>
                <hr/>
                <div className="App-container">
                <input type="text" name="search" placeholder="Search Patient"/>
                <div className='index-container'>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Diagnosis</TableCell>
                                    <TableCell>Location</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Called</TableCell>
                                    <TableCell>Scheduled</TableCell>

                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.patients.map((item, index)=>(
                                    <TableRow key={index}>
                                        <TableCell>
                                            {item.name}
                                        </TableCell>
                                        <TableCell>{item.diagnosis}</TableCell>
                                        <TableCell>{item.location}</TableCell>
                                        <TableCell>{item.phoneNumber}</TableCell>
                                        <TableCell><button>Called</button></TableCell>
                                        <TableCell><button>Called</button></TableCell>
                                    </TableRow>
                                ))

                                }

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

export default Home;