import React, {useState, useEffect} from 'react'
import Papa from 'papaparse'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {connect, useDispatch, useSelector} from 'react-redux';
import {massAddPatietCall, getPatientCallList, deletePatient} from '../../../store/actions/file_actions'
import { Redirect } from 'react-router-dom';
import { ConversationPage } from 'twilio/lib/rest/conversations/v1/conversation';





const Billers = (props) => {

    const [patientList, setPatientList] = useState()
    const dispatch = useDispatch()
    const file = useSelector(state => state.file.callsList);
    const user = useSelector(state => state.user.userData)


    useEffect(() => {
        dispatch(getPatientCallList())
        setPatientList(file)
    }, [patientList])


    const deletePerson =(id)=>{
        console.log(id)
        let answer = window.confirm("Are you sure you want to remove this patient?")
        if(answer){
            // console.log(this.props.patients.collection.find(item => item._id == key))
            dispatch(deletePatient(file.find(item => item._id == id)))
            dispatch(getPatientCallList())
        }

    };

    console.log(user.role)
        return (
            <div className="App-container">
                <hr/>
                <div className='index-container'>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Remove</TableCell>     
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    {file ? file.map(pat =>{
                                        return (
                                        <TableRow key={pat.patientID}>
                                            <TableCell>{pat.patientID}</TableCell>
                                            <TableCell>{pat.name}</TableCell>
                                            <TableCell>{pat.number}</TableCell>
                                            <TableCell><button onClick={() => deletePerson(pat._id)}>X</button></TableCell>
                                        </TableRow>
                                    )
                                }): null}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
    
            </div>
        )

    


}




function mapStateToProps(state){
    return {
        patients: state.patients,
        user: state.user,
        file: state.file
    }
}
export default connect(mapStateToProps)(Billers);
