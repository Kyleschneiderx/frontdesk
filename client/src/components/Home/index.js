import React ,{Component} from 'react';
// import {connect} from 'react-redux';
// import { getBooks } from '../../store/actions/book_actions';
// import {RowGenerator, GenreateRowsWithBlocks} from '../../utils/helpers';
import Patient from '../../components/Patient'



let jobs1 = [
    {name: 'Cody Schneider', dob: '5/6/1994', phoneNumber: '(208)818-6441', location: 'Rathdrum', diagnosis: 'Knee', referralDate: '4/22/2021'},
    {name: 'Kyle Schneider', dob: '4/24/1996', phoneNumber: '(208)818-3015', location: 'Post Falls', diagnosis: 'Back', referralDate: '4/22/2021'},
    {name: 'Cole Schneider', dob: '6/4/1998', phoneNumber: '(208)277-8695', location: 'Hayden', diagnosis: 'Neck', referralDate: '4/22/2021'},
    {name: 'Cole Schneider', dob: '6/4/1998', phoneNumber: '(208)277-8695', location: 'Hayden', diagnosis: 'inchjbjbjbjhbontinence', referralDate: '4/22/2021'}
  ]


class Home extends Component {


    
    render(){
        console.log(jobs1)
        return (
            <div>
                <h1>
                  Referred Patients
                </h1>
                <hr/>
                <div className="App-container">
                    <input type="text" name="search" placeholder="Search Patient"/>
                    <div className='index-container'>
                        <div className='list-container'>
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
                        </div>
                    </div>
                    {jobs1.map((job, index) =>{
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
                        })}
                </div>
            </div>
          );

    }

}

export default Home;