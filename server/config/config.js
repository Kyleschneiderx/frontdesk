const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    defualt: {
        SECRET: 'SECRET',
        DATABASE: 'mongodb+srv://kyleschneider:f7ZWGquZNJS2jt9@cluster0.t8mpk.mongodb.net/frontdesk?retryWrites=true&w=majority'

    }

}

//piNeOFxfHXlQuFCY

exports.get = function get(env){
    return config[env] || config.defualt
}