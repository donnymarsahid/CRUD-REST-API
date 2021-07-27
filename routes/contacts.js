const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let contacts = [];

router.get('/', (req, res) => {
  res.send(contacts);
});

router.post('/', (req, res) => {
  const user = req.body;
  contacts.push({ id: uuidv4(), ...user });
  res.send({ message: 'success added' });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  const foundContact = contacts.find((contact) => contact.id == id);

  res.send(foundContact);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  contacts = contacts.filter((contact) => contact.id !== id);

  res.send({ message: 'success deleted' + id });
});

// put dan patch for Update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  const contact = contacts.find((contact) => contact.id == id);

  if (name) {
    contact.name = name;
  }
  if (email) {
    contact.email = email;
  }

  res.send({ message: 'success update' + id });
});

module.exports = router;
