const express = require('express');
const router = express.Router();
const PDF = require('pdf-lib')
const fetch = require('node-fetch');
const fs = require('fs');

const {auth} = require('../middleware/auth')


/// model

const {Provider} = require('../models/providers')


const listVariables = [

    {state:'firstName', blueCross: 'First do not abbreviate', inp: 'First do not abbreviate', blueShield: 'First do not abbreviate'},
    {state:'lastName', blueCross: 'Last name include suffix Jr Sr III', inp: 'Last name', blueShield: 'Last name include suffix Jr Sr III'},
    {state:'middleName', blueCross: 'Middle do not abbreviate', inp: 'Middle', blueShield: 'Middle do not abbreviate'},
    {state:'nickName', blueCross: 'Other names under which you have been known by reference licensing and or educational institutions', inp: 'other names', blueShield: 'Other names under which you have been known by reference licensing and or educational institutions'},
    {state:'degrees', blueCross: 'Degrees', inp: 'Degrees', blueShield: 'Degrees'},
    {state:'homePhone', blueCross: 'Home telephone number', inp: 'home phone number', blueShield: 'Home telephone number'},
    {state:'pagerNumber', blueCross: 'Pager number', inp: 'Pager number', blueShield: 'Pager number'},
    {state:'cellNumber', blueCross: 'Cell number', inp: 'Cell number', blueShield: 'Cell number'},
    {state:'email', blueCross: 'Email address', inp: 'Email address', blueShield: 'Email address'},
    {state:'homeAddress', blueCross: 'Home mailing address', inp: 'Home mailing address', blueShield: 'Home mailing address'},
    {state:'city', blueCross: 'City', inp: 'City', blueShield: 'City'},
    {state:'state', blueCross: 'State', inp: 'State', blueShield: 'State'},
    {state:'zipcode', blueCross: 'ZIP Code', inp: 'Zip code', blueShield: 'Zip code'},
    {state:'dob', blueCross: 'Birth date', inp: 'Birth date', blueShield: 'Birth date'},
    {state:'birthPlace', blueCross: 'Birth place city state country', inp: 'birth place', blueShield: 'Birth place city state country'},
    {state:'ssn', blueCross: 'Social security number', inp: 'SSN_F4', blueShield: 'Social security number'},
    {state:'citizenship', blueCross: 'Citizenship', inp: '', blueShield: 'Citizenship'},
    {state:'language', blueCross: 'Languages spoken by practitioner', inp: 'languages spoken by provider', blueShield: 'Languages spoken by practitioner'},

    {state:'speciality', blueCross: '', inp: '', blueShield: ''},
    {state:'gender', blueCross: '', inp: '', blueShield: ''},

    {state:'npi', blueCross: 'NPI', inp: 'Individual NPI', blueShield: 'NPI'},
    {state:'upin', blueCross: 'Medicare UPIN', inp: '', blueShield: 'Medicare UPIN'},
    {state:'medicareNumber', blueCross: 'Medicare number ID', inp: 'individual medicare number', blueShield: 'Medicare number ID'},
    {state:'medicaidNumber', blueCross: 'Medicaid numbers', inp: 'individual medicaid number', blueShield: 'Medicaid numbers'},
    {state:'other', blueCross: 'Other professional interests in practice research etc', inp: '', blueShield: ''},
    {state:'otherSpeciality', blueCross: 'Specialty', inp: '', blueShield: ''},
    {state:'subspecialities', blueCross: 'Subspecialties', inp: '', blueShield: ''},

    
    {state:'practiceLocations[0].effectiveDateAtPrimaryPracticeLocation', blueCross: 'undefined_4', inp: '', blueShield: ''},
    {state:'practiceLocations[0].nameOfPractice', blueCross: 'Name of practice affiliation or clinic name', inp: '', blueShield: ''},
    {state:'practiceLocations[0].departmentName', blueCross: 'Department name if hospital based', inp: '', blueShield: ''},
    {state:'practiceLocations[0].primaryOfficeStreetAddress', blueCross: 'Primary office street address', inp: '', blueShield: ''},
    {state:'practiceLocations[0].practiceCity', blueCross: 'City_2', inp: '', blueShield: ''},
    {state:'practiceLocations[0].practiceState', blueCross: 'State_2', inp: '', blueShield: ''},
    {state:'practiceLocations[0].practiceZipcode', blueCross: 'ZIP Code_2', inp: '', blueShield: ''},
    {state:'practiceLocations[0].patientAppointmentTelephoneNumber', blueCross: 'Patient appointment telephone number', inp: '', blueShield: ''},
    {state:'practiceLocations[0].faxNumber', blueCross: 'Fax number_4', inp: '', blueShield: ''},
    {state:'practiceLocations[0].nameAffialatedWithTaxIdNumber', blueCross: 'Name affiliated with tax ID number', inp: '', blueShield: ''},
    {state:'practiceLocations[0].federalTaxIdNumber', blueCross: 'Federal tax ID number_2', inp: '', blueShield: ''},
    {state:'practiceLocations[0].practiceMailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].mailingCity', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].mailingState', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].mailingZip', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].billingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].billingCity', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].billingState', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].billingZipcode', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].officeManagerName', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].adminPhoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].adminFaxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].adminEmail', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].credentialingContactName', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].credentialingPhoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].credentialingFaxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[0].credentialingEmail', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].effectiveDateAtPrimaryPracticeLocation', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].nameOfPractice', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].departmentName', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].primaryOfficeStreetAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].practiceCity', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].practiceState', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].practiceZipcode', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].patientAppointmentTelephoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].faxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].nameAffialatedWithTaxIdNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].federalTaxIdNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].practiceMailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].mailingCity', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].mailingState', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].mailingZip', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].billingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].billingCity', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].billingState', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].billingZipcode', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].officeManagerName', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].adminPhoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].adminFaxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].adminEmail', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].credentialingContactName', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].credentialingPhoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].credentialingFaxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'practiceLocations[1].credentialingEmail', blueCross: '', inp: '', blueShield: ''},
    {state:'effectiveDateAtPrimaryPracticeLocation', blueCross: '', inp: '', blueShield: ''},
    {state:'status', blueCross: '', inp: '', blueShield: ''},
    {state:'licenseIssueDate', blueCross: '', inp: '', blueShield: ''},
    {state:'licenseExpirationDate', blueCross: '', inp: '', blueShield: ''},
    {state:'licenseSponsor', blueCross: '', inp: '', blueShield: ''},
    {state:'deaRegitrationNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'deaIssueDate', blueCross: '', inp: '', blueShield: ''},
    {state:'deaExpirationDate', blueCross: '', inp: '', blueShield: ''},
    {state:'stateControlledSubstanceCertificateNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'stateControlledSubstanceCertificateNumberIssueDate', blueCross: '', inp: '', blueShield: ''},
    {state:'stateControlledSubstanceCertificateNumberExpirationDate', blueCross: '', inp: '', blueShield: ''},
    {state:'ECFMGnumber', blueCross: '', inp: '', blueShield: ''},
    {state:'ECFMGnumberIssueDate', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[0].proLicenseState', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[0].licenseNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[0].proLicenseDateIssued', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[0].proLicenseExpirationDate', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[0].yearRelinquished', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[0].proLicenseReason', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[1].proLicenseState', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[1].licenseNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[1].proLicenseDateIssued', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[1].proLicenseExpirationDate', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[1].yearRelinquished', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[1].proLicenseReason', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[2].proLicenseState', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[2].licenseNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[2].proLicenseDateIssued', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[2].proLicenseExpirationDate', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[2].yearRelinquished', blueCross: '', inp: '', blueShield: ''},
    {state:'allOtherProLicenses[2].proLicenseReason', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[0].nameOfCollegeOrUniversity', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[0].degreeReceived', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[0].graduationDate', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[0].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[0].city', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[0].state', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[0].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[1].nameOfCollegeOrUniversity', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[1].degreeReceived', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[1].graduationDate', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[1].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[1].city', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[1].state', blueCross: '', inp: '', blueShield: ''},
    {state:'underGraduateEducation[1].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[0].medicalProfessionSchool', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[0].startDate', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[0].graduationDate', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[0].degreeReceived', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[0].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[0].city', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[0].state', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[0].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[0].phone', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[0].fax', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[1].medicalProfessionSchool', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[1].startDate', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[1].graduationDate', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[1].degreeReceived', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[1].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[1].city', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[1].state', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[1].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[1].phone', blueCross: '', inp: '', blueShield: ''},
    {state:'medicalProfessionalSchool[1].fax', blueCross: '', inp: '', blueShield: ''},
    {state:'graduateEducationIntuition', blueCross: '', inp: '', blueShield: ''},
    {state:'graduateEducationProgramOrCourseOfStudy', blueCross: '', inp: '', blueShield: ''},
    {state:'graduateEducationFacultyDirector', blueCross: '', inp: '', blueShield: ''},
    {state:'graduateEducationMailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'graduateEducationCity', blueCross: '', inp: '', blueShield: ''},
    {state:'graduateEducationState', blueCross: '', inp: '', blueShield: ''},
    {state:'graduateEducationZip', blueCross: '', inp: '', blueShield: ''},
    {state:'graduateEducationDateAttended', blueCross: '', inp: '', blueShield: ''},
    {state:'graduateEducationPhone', blueCross: '', inp: '', blueShield: ''},
    {state:'graduateEducationFax', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].nameOfCurrentPractice', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].contactName', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].phoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].faxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].from', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].to', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].city', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].state', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[0].reasonForLeaving', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].nameOfCurrentPractice', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].contactName', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].phoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].faxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].from', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].to', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].city', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].state', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[1].reasonForLeaving', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].nameOfCurrentPractice', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].contactName', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].phoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].faxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].from', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].to', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].city', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].state', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'workHistory[2].reasonForLeaving', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[0].nameOfReference', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[0].titleAndSpecialty', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[0].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[0].city', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[0].state', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[0].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[0].email', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[0].phoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[0].faxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[0].cellNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[1].nameOfReference', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[1].titleAndSpecialty', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[1].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[1].city', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[1].state', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[1].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[1].email', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[1].phoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[1].faxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[1].cellNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[2].nameOfReference', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[2].titleAndSpecialty', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[2].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[2].city', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[2].state', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[2].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[2].email', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[2].phoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[2].faxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'peerReferences[2].cellNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[0].nameOfCarrier', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[0].policyNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[0].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[0].city', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[0].state', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[0].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[0].phoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[0].faxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[0].from', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[0].to', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[1].nameOfCarrier', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[1].policyNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[1].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[1].city', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[1].state', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[1].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[1].phoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[1].faxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[1].from', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[1].to', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[2].nameOfCarrier', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[2].policyNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[2].mailingAddress', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[2].city', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[2].state', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[2].zip', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[2].phoneNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[2].faxNumber', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[2].from', blueCross: '', inp: '', blueShield: ''},
    {state:'professionalLiability[2].to', blueCross: '', inp: '', blueShield: ''},
]










router.post('/bluecrossofidaho', async (req, res) =>{

    ///// PractionerInformation two parts

    let pageOneList = [
        { state: 'lastName', pdf: 'Last name include suffix Jr Sr III' },
        { state: 'firstName', pdf: 'First do not abbreviate' },
        { state: 'middleName', pdf: 'Middle do not abbreviate' },
        {
          state: 'nickName',
          pdf: 'Other names under which you have been known by reference licensing and or educational institutions'
        },
        { state: 'degrees', pdf: 'Degrees' },
        { state: 'homePhone', pdf: 'Home telephone number' },
        { state: 'pagerNumber', pdf: 'Pager number' },
        { state: 'cellNumber', pdf: 'Cell number' },
        { state: 'email', pdf: 'Email address' },
        { state: 'homeAddress', pdf: 'Home mailing address' },
        { state: 'city', pdf: 'City' },
        { state: 'state', pdf: 'State' },
        { state: 'zipcode', pdf: 'ZIP Code' },
        { state: 'dob', pdf: 'Birth date' },
        { state: 'birthPlace', pdf: 'Birth place city state country' },
        { state: 'ssn', pdf: 'Social security number' },
        { state: 'citizenship', pdf: 'Citizenship' },
        { state: 'language', pdf: 'Languages spoken by practitioner' },
        { state: 'npi', pdf: 'NPI' },
        { state: 'upin', pdf: 'Medicare UPIN' },
        { state: 'medicareNumber', pdf: 'Medicare number ID' },
        { state: 'medicaidNumber', pdf: 'Medicaid numbers' },
        {state: 'other',pdf: 'Other professional interests in practice research etc'},
        { state: 'otherSpeciality', pdf: 'Specialty' },
        { state: 'subspecialities', pdf: 'Subspecialties' },
    ]

    pageTwoList = [
        {
            state: 'effectiveDateAtPrimaryPracticeLocation',
            pdf: 'undefined_4'
          },
          {
            state: 'nameOfPractice',
            pdf: 'Name of practice affiliation or clinic name'
          },
          { state: 'departmentName', pdf: 'Department name if hospital based' },
          {
            state: 'primaryOfficeStreetAddress',
            pdf: 'Primary office street address'
          },
          { state: 'practiceCity', pdf: 'City_2' },
          { state: 'practiceState', pdf: 'State_2' },
          { state: 'practiceZipcode', pdf: 'ZIP Code_2' },
          {
            state: 'patientAppointmentTelephoneNumber',
            pdf: 'Patient appointment telephone number'
          },
          { state: 'faxNumber', pdf: 'Fax number' },
          {
            state: 'nameAffialatedWithTaxIdNumber',
            pdf: 'Name affiliated with tax ID number'
          },
          { state: 'federalTaxIdNumber', pdf: 'Federal tax ID number' },
          {
            state: 'practiceMailingAddress',
            pdf: 'Mailing address if different from above'
          },
          { state: 'mailingCity', pdf: 'City_3' },
          { state: 'mailingState', pdf: 'State_3' },
          { state: 'mailingZip', pdf: 'ZIP Code_3' },
          {
            state: 'billingAddress',
            pdf: 'Billing address if different from above'
          },
          { state: 'billingCity', pdf: 'City_4' },
          { state: 'billingState', pdf: 'State_4' },
          { state: 'billingZipcode', pdf: 'ZIP Code_4' },
          {
            state: 'officeManagerName',
            pdf: 'Office manager  Administrator name'
          },
          { state: 'adminPhoneNumber', pdf: 'Administration telephone number' },
          { state: 'adminFaxNumber', pdf: 'Fax number_2' },
          { state: 'adminEmail', pdf: 'Email address_2' },
          {
            state: 'credentialingContactName',
            pdf: 'Credentialing contact if different from above'
          },
          {
            state: 'credentialingPhoneNumber',
            pdf: 'Credentialing telephone number'
          },
          { state: 'credentialingFaxNumber', pdf: 'Fax number_3' },
          { state: 'credentialingEmail', pdf: 'Email address_3' },
    ]

    let pageTwoListPartTwo = [
        {
            state: 'effectiveDateAtPrimaryPracticeLocation',
            pdf: 'undefined_6'
          },
          {
            state: 'primaryOfficeStreetAddress',
            pdf: 'Secondary office street address'
          },
          { state: 'practiceCity', pdf: 'City_5' },
          { state: 'practiceState', pdf: 'State_5' },
          { state: 'practiceZipcode', pdf: 'ZIP Code_5' },
          {
            state: 'patientAppointmentTelephoneNumber',
            pdf: 'Patient appointment telephone number_2'
          },
          { state: 'faxNumber', pdf: 'Fax number_4' },
          {
            state: 'nameAffialatedWithTaxIdNumber',
            pdf: 'Name affiliated with tax ID number_2'
          },
          { state: 'federalTaxIdNumber', pdf: 'Federal tax ID number_2' },
          {
            state: 'practiceMailingAddress',
            pdf: 'Mailing address if different from above_2'
          },
          { state: 'mailingCity', pdf: 'City_6' },
          { state: 'mailingState', pdf: 'State_6' },
          { state: 'mailingZip', pdf: 'ZIP Code_6' },
          {
            state: 'billingAddress',
            pdf: 'Billing address if different from above_2'
          },
          { state: 'billingCity', pdf: 'City_7' },
          { state: 'billingState', pdf: 'State_7' },
          { state: 'billingZipcode', pdf: 'ZIP Code_7' },
          {
            state: 'officeManagerName',
            pdf: 'Office manager  Administrator name_2'
          },
          {
            state: 'adminPhoneNumber',
            pdf: 'Administration telephone number_2'
          },
          { state: 'adminFaxNumber', pdf: 'Fax number_5' },
          { state: 'adminEmail', pdf: 'Email address_4' },
          {
            state: 'credentialingContactName',
            pdf: 'Credentialing contact if different from above_2'
          },
          {
            state: 'credentialingPhoneNumber',
            pdf: 'Credentialing telephone number_2'
          },
          { state: 'credentialingFaxNumber', pdf: 'Fax number_6' },
          { state: 'credentialingEmail', pdf: 'Email address_5' },
    ]

    let pageThreeList = [
        {
            state: 'effectiveDateAtPrimaryPracticeLocation',
            pdf: 'Effective Date at Primary Practice location_2'
          },
          { state: 'licenseIssueDate', pdf: 'Issue date' },
          { state: 'licenseExpirationDate', pdf: 'Expiration date' },
          {
            state: 'licenseSponsor',
            pdf: 'Name of sponsor if required by licensure ie Physicians Assistant'
          },
          {
            state: 'deaRegitrationNumber',
            pdf: 'Drug Enforcement Administration DEA registration number'
          },
          { state: 'deaIssueDate', pdf: 'Issue date_2' },
          { state: 'deaExpirationDate', pdf: 'Expiration date_2' },
          {
            state: 'stateControlledSubstanceCertificateNumber',
            pdf: 'State controlled substance certificate number'
          },
          {
            state: 'stateControlledSubstanceCertificateNumberIssueDate',
            pdf: 'Issue date_3'
          },
          {
            state: 'stateControlledSubstanceCertificateNumberExpirationDate',
            pdf: 'Expiration date_3'
          },
          {
            state: 'ECFMGnumber',
            pdf: 'ECFMG number applicable to foreign medical graduates'
          },
          { state: 'ECFMGnumberIssueDate', pdf: 'Date issued' },
    ]

    console.log(req.body)
    const url = 'https://providers.bcidaho.com/resources/pdfs/providers/commercial-provider-packet/Practitioner-Credentialing-Application.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    console.log(existingPdfBytes)
    // res.send(existingPdfBytes)
    const pdfDoc = await PDF.PDFDocument.load(existingPdfBytes)
    const form = pdfDoc.getForm()

    ////Page One

    pageOneList.forEach(item =>{
        form.getTextField(item.pdf).setText(req.body[item.state])
    })


    ///Page Two

    if(req.body.practiceLocations.length > 0){
        pageTwoList.forEach(item =>{
            form.getTextField(item.pdf).setText(req.body.practiceLocations[0][item.state])
        })
    }

    if(req.body.speciality){
        form.getCheckBox(req.body.speciality).check()
    }

    if(req.body.gender){
        form.getRadioGroup('undefined_2').select(req.body.gender)
    }

    if(req.body.practiceLocations.length > 1){
        pageTwoListPartTwo.forEach(item =>{
            form.getTextField(item.pdf).setText(req.body.practiceLocations[1][item.state])
        })
    }



    ///Page Three
    pageThreeList.forEach(item =>{
        console.log(item)
        form.getTextField(item.pdf).setText(req.body[item.state])
    })

    if(req.body.status){
        form.getCheckBox(req.body.status).check()
    }




    // const submitedToField = form.getTextField('This application is submitted to')
    // const lastnameField = form.getTextField('Last name include suffix Jr Sr III')
    // const firstNameField = form.getTextField('First do not abbreviate')
    // const middleNameField = form.getTextField('Middle do not abbreviate')
    // submitedToField.setText('Blue Cross of Idaho')
    // lastnameField.setText(req.body.lastName)
    // firstNameField.setText(req.body.firstName)
    // middleNameField.setText(req.body.middleName)
    const pdfBytes = await pdfDoc.save()
    // console.log(pdfBytes)
    const data = new Uint8Array(Buffer.from(pdfBytes));
    res.send(Buffer.from(data, 'binary'))
    

});



router.post('/regenceblueshieldofidaho', async (req, res) =>{
    console.log(req.body)
    const url = 'https://lakecitypt.com/wp-content/uploads/2021/11/unlocked-Practitioner-credentialing-application-IDblueShield-unlocked-1.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    console.log(existingPdfBytes)

    const pdfDoc = await PDF.PDFDocument.load(existingPdfBytes, { ignoreEncryption: true })
    const form = pdfDoc.getForm()

    // const submitedToField = form.getTextField('This application is submitted to')
    const lastnameField = form.getTextField('Last name include suffix Jr Sr III')
    const firstNameField = form.getTextField('First do not abbreviate')
    const middleNameField = form.getTextField('Middle do not abbreviate')

    // submitedToField.setText('Regence BlueShield of Idaho')
    lastnameField.setText(req.body.lastName)
    firstNameField.setText(req.body.firstName)
    middleNameField.setText(req.body.middleName)
    const pdfBytes = await pdfDoc.save()

    const data = new Uint8Array(Buffer.from(pdfBytes));
    res.send(Buffer.from(data, 'binary'))





})



router.post('/pacificsourceidaho', async (req, res) =>{
    console.log(req.body)
    const url = 'https://medicare.pacificsource.com/Document/QrpjkzkUIyn7i63aFEF9bJlDWnASoDpa7P1Hsim2DcYGsRBa8t6bktbRk_I8Dyb9jxu1wY8k9W68kr8kJU7l1JQwqyp1oYvlecHpXJnzzJvwizcxWnOIh3CGn1XtERJW'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    console.log(existingPdfBytes)

    const pdfDoc = await PDF.PDFDocument.load(existingPdfBytes)
    const form = pdfDoc.getForm()

    const submitedToField = form.getTextField('This application is submitted to')
    const lastnameField = form.getTextField('Last name')
    const firstNameField = form.getTextField('First do not abbreviate')
    const middleNameField = form.getTextField('Middle')

    submitedToField.setText('PacificSource')
    lastnameField.setText(req.body.lastName)
    firstNameField.setText(req.body.firstName)
    middleNameField.setText(req.body.middleName)
    const pdfBytes = await pdfDoc.save()

    const data = new Uint8Array(Buffer.from(pdfBytes));
    res.send(Buffer.from(data, 'binary'))





})


module.exports = router;

