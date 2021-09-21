import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import {Link} from 'react-router-dom'

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDateTimePicker,
  DateTimePicker,
  alpha
} from '@material-ui/pickers';
import 'date-fns';
import moment from 'moment'
import { getWaitlist, deleteWaitlist, textWaitlist } from '../../store/actions/waitlist_actions';


const Waitlist = () => {

    const now = new Date()
    const [endDate, setEndDate] = useState(new Date());
    const [time, setTime] = useState([])
    const [patientList, setPatientList] = useState()
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const waitlist = useSelector(state => state.waitlist.waitlist);
    const user = useSelector(state => state.user.userData)
    const [day, setDay] = useState('Total')

    useEffect(() => {
        dispatch(getWaitlist())
        setPatientList(waitlist)
    }, [patientList])




    const handleDateChange = (date) => {
        setEndDate(new Date(date));
    };

    const addTime = ()=>{
        setTime([...time, endDate])
        console.log(time)
    }

    const removeTime = (index) =>{
        const temp = [...time];
        temp.splice(index, 1);
        setTime(temp);
    }

    const deletePerson =(id)=>{
        console.log(id)
        let answer = window.confirm("Are you sure you want to remove this patient?")
        if(answer){
            // console.log(this.props.patients.collection.find(item => item._id == key))
            dispatch(deleteWaitlist(waitlist.find(item => item._id == id)))
            dispatch(getWaitlist())
        }

    };

    const textPatients = () =>{
        let answer = window.confirm("Are you sure you want to text all all Patients")
        if(answer){
            // console.log(this.props.patients.collection.find(item => item._id == key))
            dispatch(textWaitlist(time))
            dispatch(getWaitlist())
        }
    }


    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="center">
            <DateTimePicker
                variant="dialog"
                format="MM/dd/yyyy hh:mm a"
                margin="normal"
                label="Add Opening"
                value={endDate}
                onChange={handleDateChange}
                />
                <Button onClick={()=> addTime()}>Add Time</Button>
                <Button component={Link} to='/waitlist/add'>Add Patient</Button>
                <Button onClick={()=> textPatients()}>Text Patients</Button>
            </Grid>
            </MuiPickersUtilsProvider>
            <hr/>
            <Grid container justifyContent='center'>
            {time ? 
                time.map((item, index)=>{
                    return(
                    <div key={index}>
                        <Paper padding={2} spacing={2}>
                        <Grid container alignItems="center" justifyContent="center">
                            <Typography padding={2}>
                            {moment(item).format('MM/DD/YY hh:mm')}
                            </Typography>
                        <div >
                            <Button onClick={()=> removeTime(index)}>
                                <DeleteIcon/>
                            </Button>
                        </div>
                        </Grid>
                        </Paper>
                    </div>
                    )
                }) : null}
            </Grid>
            <hr/>
            <Grid container justifyContent='center'>
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
                                    {waitlist ? waitlist
                                        .map(pat =>{
                                        return (
                                        <TableRow key={pat.patientID}>
                                            <TableCell>{pat.patientID}</TableCell>
                                            <TableCell>{pat.name}</TableCell>
                                            <TableCell>{pat.number}</TableCell>
                                            <TableCell><Button onClick={() => deletePerson(pat._id)}><DeleteIcon/></Button></TableCell>
                                        </TableRow>
                                    )
                                }): null}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Grid>
        </div>
    )
}

export default Waitlist;
