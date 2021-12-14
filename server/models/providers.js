const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const providerSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    middleName:{
        type: String,
        required: true
    },
    nickName:{
        type: String,
        required: true
    },
    degrees:{
        type: String,
        required: true
    },
    homePhone:{
        type: String,
        required: true
    },
    pagerNumber:{
        type: String,
        required: false
    },
    cellNumber:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true
    },
    homeAdress:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zipcode:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    birthplace:{
        type: String,
        required: false
    },
    ssn:{
        type: String,
        required: false
    },
    citizenship:{
        type: String,
        required: false
    },
    language:{
        type: String,
        required: false
    },
    speciltyselect:{
        type: String,
        required: false
    },
    gneder:{
        type: String,
        required: false
    },
    npi:{
        type: String,
        required: false
    },
    medicareupin:{
        type: String,
        required: false
    },
    medicarenumber:{
        type: String,
        required: false
    },
    medicaidnumbers:[
        {
            number:{
                type: String,
                required: false
            }
        }
    ],
    other:{
        type: String,
        required: false
    },
    speciality:{
        type: String,
        required: false
    },
    subspecialires:[
        {
            specialty:{
                type: String,
                required: false
            }
        }
    ],
    practiccelocation:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Location'
        }
    ],
    prolicense:{
        status:{
            type: String,
            required: false
        }
    },
    otherprolicenses:[
        {
            state:{
                type: String,
                required: false
            },
            licensenumber:{
                type: String,
                required: false
            },
            dateissued:{
                type: String,
                required: false
            },
            expirationdate:{
                type: String,
                required: false
            }
        }
    ],
    undergrad:{
        collegename:{
            type: String,
            required: false
        },
        degreerecieved:{
            type: String,
            required: false
        },
        graddate:{
            type: String,
            required: false
        },
        collegemailingaddress:{
            type: String,
            required: false
        },
        collegecity:{
            type: String,
            required: false
        },
        collegestate:{
            type: String,
            required: false
        },
        collegezip:{
            type: String,
            required: false
        }
    

    },
    professionalschool:{
        proname:{
            type: String,
            required: false
        },
        startdate:{
            type: String,
            required: false
        },
        graddate:{
            type: String,
            required: false
        },
        degreerecieved:{
            type: String,
            required: false
        },
        promailingaddress:{
            type: String,
            required: false
        },
        procity:{
            type: String,
            required: false
        },
        prostate:{
            type: String,
            required: false
        },
        prozip:{
            type: String,
            required: false
        },
        prophone:{
            type: String,
            required: false
        }
    },
    gradschool:{
        gradname:{
            type: String,
            required: false
        },
        gradprogram:{
            type: String,
            required: false
        },
        gradmailing:{
            type: String,
            required: false
        },
        gradcity:{
            type: String,
            required: false
        },
        gradstate:{
            type: String,
            required: false
        },
        gradzip:{
            type: String,
            required: false
        },
        graddateaddented:{
            type: String,
            required: false
        },
        gradphone:{
            type: String,
            required: false
        }
    },
    workhistory:[
        {
            nameofpractice:{
                type: String,
                required: false
            },
            practicecontact:{
                type: String,
                required: false
            },
            contactphonenumber:{
                type: String,
                required: false
            },
            contactfaxnumber:{
                type: String,
                required: false
            },
            from:{
                type: String,
                required: false
            },
            to:{
                type: String,
                required: false
            },
            practiceaddress:{
                type: String,
                required: false
            },
            practicecity:{
                type: String,
                required: false
            },
            practicestate:{
                type: String,
                required: false
            },
            practicezip:{
                type: String,
                required: false
            },
            reasonforleaving:{
                type: String,
                required: false
            }
        }
        
    ],
    peerreferences:[
        {
            nameofreference:{
                type: String,
                required: false
            },
            titleandspecialty:{
                type: String,
                required: false
            },
            mailingaddress:{
                type: String,
                required: false
            },
            city:{
                type: String,
                required: false
            },
            state:{
                type: String,
                required: false
            },
            zip:{
                type: String,
                required: false
            },
            email:{
                type: String,
                required: false
            },
            number:{
                type: String,
                required: false
            },
            fax:{
                type: String,
                required: false
            }
            
        }
    ],
    professionalliability:[
        {
            insurancename:{
                type: String,
                required: false
            },
            policynumber:{
                type: String,
                required: false
            },
            address:{
                type: String,
                required: false
            },
            city:{
                type: String,
                required: false
            },
            state:{
                type: String,
                required: false
            },
            zip:{
                type: String,
                required: false
            },
            phonenumber:{
                type: String,
                required: false
            },
            fax:{
                type: String,
                required: false
            },
            origindate:{
                type: String,
                required: false
            },
            perclaimamount:{
                type: String,
                required: false
            },
            aggreagateamount:{
                type: String,
                required: false
            },
            effectivedate:{
                type: String,
                required: false
            },
            expirationdate:{
                type: String,
                required: false
            }
        }
    ]

},{timestamps:true})

const Provider = mongoose.model('Provider', providerSchema)

module.exports = {Provider}