const configvar = require('./config')

module.exports = {
    getDbConnections () {
        return 'mongodb+srv://'
            + configvar.uname+ ':'
            + configvar.upass
            + '@test-fskvb.mongodb.net/test?retryWrites=true&w=majority'
    }
}