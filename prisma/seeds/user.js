// prisma/seeds/user.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedUsers() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Alice',
        email: 'alice@esauflores.com',
        password: 'password',
      },
      {
        name: 'Bob',
        email: 'bob@esauflores.com',
        password: 'password',
      },
    ],
  });
}

module.exports = seedUsers;