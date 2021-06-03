import React from 'react';


function Patient({name, dob, phoneNumber, location, diagnosis, referralDate}){
    return(
        <div className='patient-container'>
            <div className='index-list-container'>
                <div className='title'>
                    {name}
                </div>
                <div className='title'>
                    {dob}
                </div>
                <div className='title'>
                    {phoneNumber}
                </div>
                <div className='title'>
                    {location}
                </div>
                <div className='title'>
                    {diagnosis}
                </div>
                <div className='title'>
                    {referralDate}
                </div>
                <div className='title'>
                    <button>Send</button>
                </div>
                <div className='title'>
                    <button>Scheduled</button>
                </div>
                {/* <div className="des">
                    <button className='btn-main'>
                        Apply Here
                    </button>
                </div> */}
            </div>
        </div>

    )
}

export default Patient;