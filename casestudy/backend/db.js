const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gayathri:gayathri@cluster0.hy6uv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useFindAndModify: false ,useUnifiedTopology: true },
err => {
    if(!err)
    console.log('Mongo DB connection successful')
    else
    console.log('Mongo DB connection error')
})
