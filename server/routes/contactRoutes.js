const express = require('express');
const router=express.Router();
const { createContact, deleteContact, getAllContacts, updateContact } = require("../controllers/contactsController");


router.post('/contacts', createContact);
router.get('/contacts',getAllContacts);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id',deleteContact);

module.exports=router