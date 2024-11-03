const Contact = require('../models/contact');

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
  } catch (error) {
    res.status(404).json({ message: "Contact not found" });
  }
};

exports.createContact = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateContactById = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteContactById = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
