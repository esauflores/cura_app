// prisma/seed.js

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const seedUsers = require('./seeds/user');

async function seed() {
  // Seed Users
  console.log('Seeding Users...');
  await seedUsers();
  console.log('Users have been seeded!');

  // All seeds done
  console.log('All seeds have been planted!');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });