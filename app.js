const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Add a file
yargs.command({
  command: 'add',
  describe: 'To add note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

// Remove a file
yargs.command({
  command: 'remove',
  describe: 'To remove a note',
  handler: function() {
    console.log('Removing note');
  }
});

yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler: function() {
    console.log('Lisiting notes');
  }
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: function() {
    console.log('Reading a note');
  }
});

yargs.parse();
