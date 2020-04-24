

//setting envrionemnt to the development object if not declared by global connected environment
const environment = process.env.DB_ENV || 'development';

module.exports = environment;
