const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost/mogoDB', { useUnifiedTopology: true, useNewUrlParser: true })
    console.log('Successfully connected to database!')
}

main()