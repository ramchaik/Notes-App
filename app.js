const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Add a note
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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Remove a note
yargs.command({
  command: 'remove',
  describe: 'To remove a note',
  builder: {
    title: {
      describe: 'Title of note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler() {
    notes.listNotes();
  }
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: 'Title of note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();
