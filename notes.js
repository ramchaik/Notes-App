const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    console.log(chalk.green.inverse('New Note Added'));
  } else {
    console.log(chalk.red.inverse('Note title taken'));
  }

  saveNotes(notes);
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notesToKeep.length !== notes.length) {
    console.log(chalk.inverse.green(`${title} note removed!!`));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.inverse.red(`${title} note not found!!`));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length) {
    console.log(chalk.inverse.blue('Your notes'));
    notes.forEach(note => {
      console.log(chalk.blue(note.title));
    });
  }
};

const readNote = title => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);

  if (noteToRead) {
    console.log(chalk.blue(noteToRead.title), '\n', noteToRead.body);
  } else {
    console.log(chalk.inverse.red('Note not Found!!'));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};
