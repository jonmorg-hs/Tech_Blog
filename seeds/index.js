const seedUsers = require("./user_seeds");
const seedPosts = require("./post_seeds");
const seedComments = require("./comment_seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};

seedAll();
