import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TablePagination,
  Box,
  Typography,
} from '@mui/material';
import EditContactModal from './EditContactModal';
import { getContacts, deleteContact } from '../api/api';

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchContacts = async () => {
    try {
      const { data } = await getContacts();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      fetchContacts(); // Refresh the table after deletion
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleUpdate = () => {
    setIsEditModalOpen(false);
    fetchContacts(); // Refresh the table after update
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Contacts
      </Typography>
      <Table sx={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#1976d2' }}>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>First Name</TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Last Name</TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Email</TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Phone Number</TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Company</TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Job Title</TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((contact, index) => (
              <TableRow
                key={contact._id}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#fff',
                  '&:hover': { backgroundColor: '#bbdefb' },
                }}
              >
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.jobTitle}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: '#0288d1', color: '#fff', mr: 1 }}
                    onClick={() => handleEdit(contact)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: '#d32f2f', color: '#fff' }}
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={contacts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{ mt: 2 }}
      />
      {isEditModalOpen && (
        <EditContactModal
          contact={selectedContact}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </Box>
  );
};

export default ContactsTable;
