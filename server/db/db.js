const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/JEFS', {
    logging: false
  }
)
module.exports = db
