const Fastify = require('fastify');
const path = require('path');
const fs = require('fs');

const fastify = Fastify();

fastify.get('/', (request, reply) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    reply.send(fs.readFileSync(filePath));
});

module.exports = fastify;
