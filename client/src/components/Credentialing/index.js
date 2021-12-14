import React, {useState, useEffect} from 'react'
import PractitionerInfo from './Sections/PractitionerInfo'
import PracticeInformation from './Sections/PracticeInformation';
import UnderGraduteEducation from './Sections/UnderGraduteEducation';
import ProLicence from './Sections/ProLicence';
import AllProLicenses from './Sections/AllProLicenses';
import { Stepper, Step, StepLabel, Button, Box} from '@mui/material';




const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad', "another", 'Nothing'];






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
      ssn:"",
      citizenship:"",
      language:"",
      specilaity:"",
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

      proLicenseDate:"",
      licenseNumber:"",
      proLicenseDateIssued:"",
      proLicenseExpirationDate:"",
      yearRelinquished:"",
      proLicenseReason:"",

      ///Under Graduate Education

      underGraduateEducation:[],

      /// VII. MEDICAL/PROFESSIONAL EDUCATION EDUCATION
      medicalProfessionalSchool:[],

      /// Graduate Education

















    })

    function _renderStepContent(step) {
        switch (step) {
          case 0:
            return <PractitionerInfo handleFormData={handleInputData} values={formData}/>;
          case 1:
            return <PracticeInformation handleChangeLocation={handleChangeLocation1} handleFormData={handleInputData} values={formData}/>;
          case 2:
            return <ProLicence/>;
          case 3:
            return <AllProLicenses/>;
          case 4:
              return <UnderGraduteEducation/>;
          default:
            return <div>Not Found</div>;
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
        return step === 1;
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
    
    const handleSkip = () => {
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

    const handleChangeLocation1=(value)=>{


      setFormData(prevState => ({
        ...prevState,
         practiceLocations: [value]
        }))
      
    }



    console.log(formData)
    return (
        <div>
            <h1>Credential Application</h1>
            <Stepper activeStep={activeStep}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
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
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
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