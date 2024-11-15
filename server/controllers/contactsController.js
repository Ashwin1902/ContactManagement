const Contact = require('../models/contactModel');

// Create a new contact
const createContact = async (req, res) => {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json(contact);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Get all contacts
  const getAllContacts = async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Update a contact
  const updateContact = async (req, res) => {
    try {
      const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!contact) return res.status(404).json({ error: 'Contact not found' });
      res.status(200).json(contact);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Delete a contact
  const deleteContact = async (req, res) => {
    try {
      const contact = await Contact.findByIdAndDelete(req.params.id);
      if (!contact) return res.status(404).json({ error: 'Contact not found' });
      res.status(200).json({ message: 'Contact deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    createContact,
    getAllContacts,
    updateContact,
    deleteContact,
  };
