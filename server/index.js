const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const schema = require('./Schemas/index');

const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
