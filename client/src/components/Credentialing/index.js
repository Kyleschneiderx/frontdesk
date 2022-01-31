import React, {useState, useEffect} from 'react'
import PractitionerInfo from './Sections/PractitionerInfo'
import PracticeInformation from './Sections/PracticeInformation';
import UnderGraduteEducation from './Sections/UnderGraduteEducation';
import ProLicence from './Sections/ProLicence';
import AllProLicenses from './Sections/AllProLicenses';
import MedicalProfessionalEducation from './Sections/MedicalProfessionalEducation';
import GraduateEducation from './Sections/GraduateEducation';
import WorkHistory from './Sections/WorkHistory';
import PeerReferences from './Sections/PeerReferences';
import ProfessionalLiability from './Sections/ProfessionalLiability';
import ReviewPage from './Sections/ReviewPage'
import { Stepper, Step, StepLabel, Button, Box, Grid} from '@mui/material';




const steps = ['Practitioner Information',
'Practice Information',
'Professional Licence',
"All Other Professional Licence",
'Undergraduate Education',
'Medical/Professional Education',
'Graduate Education',
'Work History',
'Peer References',
'Professional Liability',


// 'Intership/PGYI',
// 'Residencies',
// 'Frellowships',
// 'Preceptorship',
// 'Faculty Appointment',
// 'Board Certifications',
// 'Other Certifications',
// 'Current Affilations'
];






const ProviderInfo = (props) => {
    console.log(props)
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [formData, setFormData] = useState({
      //// Practitioner Information
      firstName: "",
      lastName: "",
      middleName:"",
      nickName:"",
      degrees:"",
      homePhone:"",
      pagerNumber:"",
      cellNumber:"",
      email:"",
      homeAddress:"",
      city:"",
      state:"",
      zipcode:"",
      dob:"",
      birthPlace:"",
      ssn:"",
      citizenship:"",
      language:"",
      speciality:"",
      gender:"",
      npi:"",
      upin:"",
      medicareNumber:"",
      medicaidNumber:"",
      other:"",
      otherSpeciality:"",
      subspecialities:"",
      nameOfPractice:"",


      //// Practice Information


      // effectiveDateAtPrimaryPracticeLocation:"",
      // nameOfPractice:"",
      // departmentName:"",
      // primaryOfficeStreetAddress:"",
      // practiceCity:"",
      // practiceState:"",
      // practiceZipcode:"",
      // patientAppointmentTelephoneNumber:"",
      // faxNumber:"",
      // nameAffialatedWithTaxIdNumber:"",
      // federalTaxIdNumber:"",
      // practiceMailingAddress:"",
      // mailingCity:"",
      // mailingState:"",
      // mailingZip:"",
      // billingAddress:"",
      // billingCity:"",
      // billingState:"",
      // billingZipcode:"",
      // officeManagerName:"",
      // adminPhoneNumber:"",
      // adminFaxNumber:"",
      // adminEmail:"",
      // credentialingContactName:"",
      // credentialingPhoneNumber:"",
      // credentialingFaxNumber:"",
      // credentialingEmail:"",

      practiceLocations:[
      ],
      
      //// PROFESSIONAL LICENSURE
      effectiveDateAtPrimaryPracticeLocation:'',
      status:'',
      licenseIssueDate:'',
      licenseExpirationDate:'',
      licenseSponsor:'',
      deaRegitrationNumber:"",
      deaIssueDate:"",
      deaExpirationDate:"",
      stateControlledSubstanceCertificateNumber:'',
      stateControlledSubstanceCertificateNumberIssueDate:'',
      stateControlledSubstanceCertificateNumberExpirationDate:"",
      ECFMGnumber: "",
      ECFMGnumberIssueDate:"",


      //// all professional Licenses


      allOtherProLicenses:[],

      ///Under Graduate Education

      underGraduateEducation:[],

      /// VII. MEDICAL/PROFESSIONAL EDUCATION EDUCATION
      medicalProfessionalSchool:[],

      /// Graduate Education

      graduateEducationIntuition:"",
      graduateEducationProgramOrCourseOfStudy:"",
      graduateEducationFacultyDirector:"",
      graduateEducationMailingAddress:"",
      graduateEducationCity:"",
      graduateEducationState:"",
      graduateEducationZip:"",
      graduateEducationDateAttended:"",
      graduateEducationPhone:"",
      graduateEducationFax:"",

      /// Work History

      workHistory:[],

      ///Peer References

      peerReferences:[],

      //// Professional Liability

      professionalLiability:[]





    })

    function _renderStepContent(step) {
        switch (step) {
          case 0:
            return <PractitionerInfo handleFormData={handleInputData} values={formData}/>;
          case 1:
            return <PracticeInformation handleChangeList={handleListChange} handleFormData={handleInputData} values={formData}/>;
          case 2:
            return <ProLicence handleFormData={handleInputData} values={formData}/>;
          case 3:
            return <AllProLicenses handleFormData={handleInputData} handleChangeList={handleListChange} values={formData}/>;
          case 4:
              return <UnderGraduteEducation handleFormData={handleInputData} handleChangeList={handleListChange} values={formData}/>;
          case 5:
              return <MedicalProfessionalEducation handleFormData={handleInputData} handleChangeList={handleListChange} values={formData}/>;
          case 6:
              return <GraduateEducation handleFormData={handleInputData} handleChangeList={handleListChange} values={formData}/>;
          case 7:
              return <WorkHistory handleFormData={handleInputData} handleChangeList={handleListChange} values={formData}/>;
          case 8:
              return <PeerReferences handleFormData={handleInputData} handleChangeList={handleListChange} values={formData}/>;
          case 9:
              return <ProfessionalLiability handleFormData={handleInputData} handleChangeList={handleListChange} values={formData}/>;
          default:
            return <ReviewPage values={formData}/>;
        }
    }

    /// Skip state

    function skipContent(step) {
      switch (step) {
        case 4 : setFormData({...formData, underGraduateEducation : [
          {
            doesNotApplyUndergraduateEducation: true,
            nameOfCollegeOrUniversity:"",
            degreeReceived:"",
            graduationDate:"",
            mailingAddress:'',
            city:"",
            state:"",
            zip:""
        }

        ]})
      //   handleListChange({
      //     doesNotApplyUndergraduateEducation: true,
      //     nameOfCollegeOrUniversity:"",
      //     degreeReceived:"",
      //     graduationDate:"",
      //     mailingAddress:'',
      //     city:"",
      //     state:"",
      //     zip:""
      // }, "underGraduateEducation")
          return ;
        default:
          return null;
      }
  }




    // const [middleName, setMiddleName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [nickName, setNickName] = useState('')
    // const [degrees, setDegrees] = useState('')
    // const [homePhone, setHomePhone] = useState('')
    // const [pagerNumber, setPagerNumber] = useState('')
    // const [cellNumber, setCellNumber] = useState('')
    // const [email, setEmail] = useState('')
    // const [homeAddres, setHomeAdress] = useState('')
    // const [city, setCity] = useState('')
    // const [state, setState] = useState('')
    // const [zip, setZip] = useState('')
    // const [dob, setDob] = useState('')
    // const [birthPlace, setBirthPlace] = useState('')
    // const [ssn, setSnn] = useState('')
    // const [citizenship, setCitizenship] = useState('')
    // const [language, setLanguage] = useState('')
    // const [specialitySelect, setSpecialitySelect] = useState('')
    // const [genderSelect, setGenderSelect] = useState('')
    // const [npi, setNpi] = useState('')
    // const [medicareUpin, setMedicareUpin] = useState('')
    // const [medicareNumber, setMedicareNumber ] = useState('')
    // const [medicaidNumber, setMedicaidNumber] = useState('')
    // const [proInterests, setProInterests] = useState('')
    // const [specialty, setSpecialty ] = useState('')
    // const [subspecialities, setSubspecialities] = useState('')




    const isStepOptional = (step) => {
        return step === 4;
    };
    
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };
    
    const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
    }
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleSkip = (step) => {

      console.log(step)
      skipContent(step)

        if (!isStepOptional(activeStep)) {
          // You probably want to guard against something like this,
          // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
    }
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
    };
    
    const handleReset = () => {
        setActiveStep(0);
    };



    const handleInputData = input => e => {
      // input value from the form
      const {name, value} = e.target;

      console.log(name)
  
      //updating for data state taking previous state and then adding new value to create new object
      setFormData(prevState => ({
        ...prevState,
        [input]: value
    }));
    }

    // const handleChangeLocation1=(value)=>{


    //   setFormData(prevState => ({
    //     ...prevState,
    //      practiceLocations: [...formData[practiceLocations],value]
    //     }))
      
    // }


    const handleChangeLicense1=(value)=>{


      setFormData(prevState => ({
        ...prevState,
         allOtherProLicenses: [value]
        }))
      
    }



    const handleListChange=(value, input)=>{
      console.log(value, input)

      setFormData(prevState => ({
        ...prevState,
         [input]: [...formData[input],value]
        }))
      
    }



    console.log(formData)
    return (
        <div>
            <h1>Credential Application</h1>
            <Grid container justifyContent='center'>
            <Stepper activeStep={activeStep}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              </Grid>
            <form>
                {_renderStepContent(activeStep)}
            </form>
            <div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={() => handleSkip(activeStep)} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
            </div>
        </div>

    )
}

export default ProviderInfo;