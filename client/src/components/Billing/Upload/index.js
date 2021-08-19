import React, {useState, useEffect} from 'react'
import Papa from 'papaparse'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {connect, useDispatch, useSelector} from 'react-redux';
import {massAddPatietCall, getPatientCallList, deletePatient, callPatients} from '../../../store/actions/file_actions'





const Billing = (props) => {

    const [csvfile, setCsvfile ] = useState(undefined)
    const [patientList, setPatientList] = useState()
    const dispatch = useDispatch()
    const file = useSelector(state => state.file.callsList);


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



    const handleChange = event => {
        setCsvfile(event.target.files[0])
    };
    
    const importCSV = () => {
        Papa.parse(csvfile, {
          complete: updateData,
          header: true
        });
    };
    
    const updateData =(result) => {
        let list = []
        var urls = result.data;
        console.log(urls)
        try{
        urls.forEach(item =>{
            console.log(item)
            list.push({ called: false, file_name:csvfile.name , patientID: item.PatientID, name: item.Name.split(' ')[1] , number:`+1${item.Number.split('.')[0]}`, statements: item.Statements})
        });
        }catch(err){
            console.log(err)
        }
        console.log(list)
        sendData(list)
    }
    
    const sendData = (urls) => {
       dispatch(massAddPatietCall(urls))
       dispatch(getPatientCallList())
       dispatch(getPatientCallList())
    }

    const callMultiplePatients = (day) =>{

        let answer = window.confirm("Are you sure you want to call all patients?")
        if(answer){

            dispatch(callPatients(day))

        }


    }

    return (
        <div className="App-container">
            <h2>Import CSV File!</h2>
            <input
            className="csv-input"
            type="file"
            ref={input => {console.log(input);
            }}
            name="file"
            placeholder={null}
            onChange={handleChange}
            />
            <p />
            <div className='row'>
                <button className="Login-button button1" onClick={importCSV}> Upload now!</button>
                <button className="Login-button button1" onClick={() => callMultiplePatients(1)}> Call Patients!</button>
            </div>
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
export default connect(mapStateToProps)(Billing);


