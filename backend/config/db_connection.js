const mongoose = require('mongoose')


mongoose.set("strictQuery", false);
//const DB = "mongodb+srv://GITC:Proud2bemgr@goodlife.ag1ue4q.mongodb.net/goodlife?retryWrites=true"
mongoose.connect('mongodb://127.0.0.1:27017/goodlife')
    .then(res => {
        console.log("mongodb connected")
    })
    .catch(err => {
        console.log(err);
    })