const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    await Note.create(req.body);
    res.json({message:"Nota creada correctamente"})
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json(note);
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({id: req.params.id});
    res.json({message:"Nota eliminada"})
}
notesCtrl.updateNote = async (req, res) => {
    await Note.findOneAndUpdate({id: req.params.id}, req.body);
    res.json({message:"Nota modificada"})
}

module.exports = notesCtrl;