<template>
  <div id="app" class="container">
    <div class="question-container">
      <div v-if="finishMode"
        class="finish-container"
      >
      <h3>Поздравляем вы закончили отвечать на вопросы</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex non repellat? Eos, debitis totam. Recusandae inventore commodi iste dolores numquam quia tempore magni, reprehenderit expedita, libero, harum error natus.</p>
      <button v-on:click="getBack"
      class="go-back-btn"
      >Вернуться к списку вопросов</button>
      </div>
      <div v-if="!finishMode && questions.length" class="answers">
        <div class="question" >
          {{ questions[currentQuestionIndex].question }}
        </div>
        <div class="variants">Варианты ответа:</div>
        <div class="all-answers">
          <div class="all-answers-helper" v-if="!checkAnswerMode">
            <v-answer-item
              :key="answer.id"
              v-for="answer in questions[currentQuestionIndex].answers"
              :answer="answer"
              checked="checked"
              v-model="checked"
              @handleChange="putAnswer"
              :selectedId="selectedId"
            ></v-answer-item>
          </div>

          <div class="all-answers-helper" v-if="checkAnswerMode">
            <v-answer-after-check-item
              v-for="answer in questions[currentQuestionIndex].answers"
              :key="answer.id"
              :selectedId="selectedId"
              :checked="checked"
              :answer="answer"
            ></v-answer-after-check-item>
          </div>
        </div>
        <div class="next-btn"  v-if="!checkAnswerMode">       
          <button  class="next-btn-el" 
          :disabled="!selectedId"
          v-on:click="checkAnswerStart">
            Ответить
          </button>
        </div>
        <div  class="next-btn" v-else>
            <button  class="next-btn-el" 
            v-on:click="nextQuestion"
            
            >
            Дальше
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnswerItem from "./components/AnswerItem";
import AnswetAfterCheckItem from "./components/AnswerAfterCheckItem";
let API_URL='//localhost:5000';
export default {
  name: "App",
  data() {
    return {
      currentQuestionIndex: 0,
      selectedId: null,
      checkAnswerMode: false,
      questions: [],
      checked: [],
      finishMode: false
    };
  },
  mounted(){
      this.getQuestions();
    },
  methods: {
    async getQuestions(){
          let res = await fetch(`${API_URL}/api/questions`);
          let data = await res.json();
          if(!data.error){
            this.questions = data.body;
          }
  },

    getBack(){
      this.questions = [];
      this.finishMode = false;
      this.getQuestions();
      
    },
    putAnswer(id) {
      
      this.checked = [];
      console.log(id);
       this.selectedId = id;

    },
    
    checkAnswerStart() {
      this.checkAnswerMode = true;
    },
    nextQuestion(){
      if(this.questions.length-1>this.currentQuestionIndex){
        this.currentQuestionIndex++;
        this.checkAnswerMode = false;
        this.selectedId = null;
        this.checked = [];
      }
      else {
        this.currentQuestionIndex=0;
        this.checkAnswerMode = false;
        this.finishMode = true;
      }

}
  },
  components: {
    "v-answer-item": AnswerItem,
    "v-answer-after-check-item": AnswetAfterCheckItem
  }
};
</script>

<style>
html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.question-container {
  width: 100%;
  max-width: 600px;
  margin: 60px auto;
  position: relative;
  padding: 6px;
  border-radius: 12px 12px 0 0;
  box-shadow: -3px -1px 12px rgba(0, 0, 0, 0.5);
}

.question {
  width: 100%;
  border-radius: 12px 12px 0 0;
}
.answers {
  width: 100%;

  border-radius: 0 0 12px 12px;
}
.all-answers-helper {
  margin: -6px 6px 0 0;
  width: 100%;
  display: flex;
  flex-basis: 300px;
  justify-content: space-around;
}
.all-answers {
  width: 100%;
  padding: 4px 6px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.next-btn {
  width: 100%;
  padding: 4p 6px;
  display: flex;
  justify-content: flex-end;
}
.next-btn-el {
  width: 100px;
  background-color: #ff22ff;
  border: none;
  height: 30px;
  line-height: 30px;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  margin: 0 6px 0 0;
}
input {
  margin: 6px;
  padding: 0;
}
.finish-container{
  width: 100%;
  
}
.go-back-btn{
  width:200px;
  height: 30px;
  line-height: 30px;
  margin: 5px auto 0 0px ;
  border: none;
  border-radius: 6px;
  background-color: #ff22ff;
  color: #fff;
  cursor: pointer;
}
</style>
