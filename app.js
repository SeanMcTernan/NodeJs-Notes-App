const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//Customize Yargs Version

yargs.version('1.1.0')

//Create add note

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
    console.log('Title: ', argv.title, ' Body: ', argv.body)
    }
})


//Create remove note

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: () => {
    console.log('Removing a note')
    }
})

// Create list notes

yargs.command({
    command: 'list',
    describe: 'Lists out all of the notes',
    handler: () => {
    console.log('List notes')
    }
})


// Create read notes

yargs.command({
    command: 'read',
    describe: 'Read a specific note',
    handler: () => {
    console.log('Reading a specific note')
    }
})


yargs.parse()