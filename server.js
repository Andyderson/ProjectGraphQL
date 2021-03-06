const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema, //ES6 representation of schema: schema
    graphiql: true,
}))

app.listen(4000, () => {
    console.log('Listening on port 4000');
});