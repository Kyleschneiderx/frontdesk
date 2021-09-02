import React, {useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getTrans } from '../../../store/actions/trans_actions'
import Grid from '@material-ui/core/Grid';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import moment from 'moment'

const Deposits = () => {
    const user = useSelector(state => state.user.userData)
    const trans = useSelector(state => state.trans.depositList)
    const [deposits, setDeposits] = useState() 
    const dispatch = useDispatch()
    const now = new Date()
    const [endDate, setEndDate] = useState(moment(now.setDate(now.getDate('YYYY-MM-DD') + 1)).format("YYYY-MM-DD"));
    const [startDate, setStartDate] = useState(moment(now.setDate(now.getDate('YYYY-MM-DD') - 30)).format("YYYY-MM-DD"));




    const handleStartDateChange = (date) => {
      setStartDate(moment(date.setDate(date.getDate('YYYY-MM-DD') + 1)).format("YYYY-MM-DD"));
    };

    const handleEndDateChange = (date) => {
        setEndDate(moment(date.setDate(date.getDate('YYYY-MM-DD') + 1)).format("YYYY-MM-DD"));
      };

    useEffect(async ()=>{
        dispatch(getTrans({access_token: user.plaidToken, start_date: startDate, end_date: endDate}))
        setDeposits(trans)

    }, [deposits, endDate, startDate])
    console.log(startDate, endDate)
    return ( 
    <div>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
      <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={endDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
        <div className='App-container'>
    
            <div className='index-container'>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell>Index</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Amount</TableCell>    
                        </TableRow>
                    </TableHead>
                <TableBody>
                {trans ?
                    trans.map((item, index) =>{
                        return(
                        <TableRow key={index}>
                            <TableCell>{index}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                        </TableRow>
                        )
                    })
                
                : null}
                    </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    </div>
    )

        
}

export default Deposits;