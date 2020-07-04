const { Sequelize } = require('sequelize');


module.exports= new Sequelize('victorina_db','root','',{
    host:'localhost',
    dialect:'mysql'
})
