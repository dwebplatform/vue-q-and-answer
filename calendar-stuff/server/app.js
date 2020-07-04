
const express = require('express')
const app = express();

const { Sequelize } = require('sequelize');


const sequelize = require('./config');
 
const Question = sequelize.define('questions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false

    },
    question:{
        type: Sequelize.TEXT,

    },
    answers: {
        type: Sequelize.TEXT,
        get: function() {
            return JSON.parse(this.getDataValue("answers"));
        },
        set: function(value) {
            return this.setDataValue("answers", JSON.stringify(value));
        }
    }

});

sequelize.sync().then(result => {
    console.log(result);
})
    .catch(err => console.log(err));



    
app.get('/api/questions', async(req, res) => {

    let all_questions = await Question.findAll();
    if(all_questions.length){
        return res.json({
            error:false,
            body: all_questions
        });
    }
return res.json({
    error: true,
    message:' Не удалось найти ни одного вопроса'
})   
});



app.listen(5000, () => {
    console.log('Listening on port 5000');
})