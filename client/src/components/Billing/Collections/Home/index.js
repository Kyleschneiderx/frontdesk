import React, {useState, useEffect} from 'react'
import Papa from 'papaparse'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {connect, useDispatch, useSelector} from 'react-redux';
import { getCollectionsCallList, deleteCollections, callCollections } from '../../../../store/actions/collections_actions';
import { Redirect, Link } from 'react-router-dom';



const Collections = (props) => {

    const [patientList, setPatientList] = useState()
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const collections = useSelector(state => state.collections.callsList);
    const user = useSelector(state => state.user.userData)
    const [day, setDay] = useState('Total')


    useEffect(() => {
        dispatch(getCollectionsCallList())
        setPatientList(collections)
    }, [patientList])


    const deletePerson =(id)=>{
        console.log(id)
        let answer = window.confirm("Are you sure you want to remove this patient?")
        if(answer){
            // console.log(this.props.patients.collection.find(item => item._id == key))
            dispatch(deleteCollections(collections.find(item => item._id == id)))
            dispatch(getCollectionsCallList())
        }

    };
    const callMultiplePatients = () =>{
        console.log()
        let answer = window.confirm("Are you sure you want to call all patients?")
        if(answer){

            dispatch(callCollections())

        }


    }

        return (
        <div>
            <div className="App-container">
                <div className='search-container-billing'>
                    <div className='inner-billing-container'>
                        <input className='search-input' type="text" name="search" placeholder="Search Patient" onChange={e=> setSearch(e.target.value)}/>
                    </div>
                    <div className='add-patient-div'>
                        <Link to='/collections/add'><button className="Login-button button1">Add Collections+</button></Link>
                    </div>
                </div> 
                <div className='row'>
                    <button className="Login-button button1" onClick={() => callMultiplePatients()}> Call Patients!</button>
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
                                    <TableCell># Statements</TableCell>
                                    <TableCell>Remove</TableCell>     
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    {collections ? collections
                                        .filter(val=>{
                                        if(search == ''){
                                            return val
                                        }else if (val.name.toLowerCase().includes(search.toLocaleLowerCase())){
                                            return val
                                        }else if (val.number.toLowerCase().includes(search.toLocaleLowerCase())){
                                            return val
                                        }else if (val.patientID.toLowerCase().includes(search.toLocaleLowerCase())){
                                            return val
                                        }}).map(pat =>{
                                        return (
                                        <TableRow key={pat.patientID}>
                                            <TableCell>{pat.patientID}</TableCell>
                                            <TableCell>{pat.name}</TableCell>
                                            <TableCell>{pat.number}</TableCell>
                                            <TableCell>{pat.statements}</TableCell>
                                            <TableCell><button onClick={() => deletePerson(pat._id)}>X</button></TableCell>
                                        </TableRow>
                                    )
                                }): null}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
    
            </div>
        </div>
        )

    


}




function mapStateToProps(state){
    return {
        patients: state.patients,
        user: state.user,
        file: state.file,
        collections: state.collections
    }
}
export default connect(mapStateToProps)(Collections);