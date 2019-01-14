const mongoose = require('mongoose');

let dev_db_url = 'mongodb://thagdet:detlun232@ds161950.mlab.com:61950/candidatesmanagement';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,
    { useNewUrlParser: true },);
mongoose.Promise = global.Promise;

module.exports = mongoose;
