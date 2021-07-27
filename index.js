const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);

app.get('/', (req, res) => {
  res.send({ message: 'success' });
});

app.listen(port, () => {
  console.log(`server is ok port ${port}`);
});

module.exports = app;
