const Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
  titulo_jobs: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  salario_jobs: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  new_job: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Job