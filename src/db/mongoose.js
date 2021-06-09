const mongoose = require('mongoose')

url = "mongodb+srv://taskapp:<mydbpassword99>@cluster0.wakeh.mongodb.net/task-manager-app?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})