<template>
  <div id="app" class="container">
    <div class="question-container">
    <div class="question">
      Вопрос {{questions[currentQuestionIndex]}}
    </div>
    <div class="answers">
      Варианты ответа:
      <div class="all-answers">
        <div class="all-answers-helper" style="">
        <span class="all-answers-item"><p>Линкольн</p><input type="checkbox"/></span>
        <span class="all-answers-item"><p>Бруппер</p><input type="checkbox"/></span>
        <span class="all-answers-item"><p>Морган</p><input type="checkbox"/></span>
        <span class="all-answers-item"><p>Луфард</p><input type="checkbox"/></span>
    </div>
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil amet, laboriosam rerum, quae perspiciatis est quia laborum commodi facere voluptatum quibusdam dolor praesentium illum exercitationem. -->
      </div>
       <div class="next-btn">
      <button class="next-btn-el">Дальше</button>
    </div>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      currentQuestionIndex:0,

      questions:[
        'Как зовут змея из Гарри Поттера ?',
        'Кто был первым президентом США ?',
        'Кому была присуждена премия после 20ого съезда КПСС ?',
        'Назовите самый интересный момент в GTA Sun Undreas',
        
      ]
    }
    methods:{
      function incrementQuestionIndex(){
        this.currentQuestionIndex++;
      }
    }
  }
}
</script>

<style>
  html, body{
    width: 100%;
    margin: 0;
    padding: 0;
  }
.container{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.question-container{
  width: 100%;
  max-width: 600px;
  margin: 60px auto;
  position: relative;
  padding: 6px;
  border-radius: 12px 12px 0 0 ;
  box-shadow: -3px -1px 12px rgba(0,0,0,0.5);
}
 
.question{
  width: 100%;
   padding: 4px 6px 0;
  border-radius: 12px 12px 0 0;
}
.answers{
  width: 100%;
   padding: 0 6px 15px 6px;

  border-radius: 0 0 12px 12px;
 
}
.all-answers-helper{
  margin:0 6px 0 0 ;
  width:100%;
  display:flex;
  flex-basis:300px;
  justify-content:space-around;
}
.all-answers{
  width: 100%;
  padding:4px 6px ;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.all-answers-item{
    display: flex;
    flex-flow: row;
    width: 100px;
    justify-content: flex-end;
    align-items: center;
}
.next-btn{
  width: 100%;
  padding:4p 6px ;
  display: flex;
    justify-content: flex-end;
}
.next-btn-el{
  width: 100px;
  background-color: #ff22ff;
  border:none;
  height: 30px;
  line-height: 30px;
  border-radius: 6px;
  color: #fff;
  margin: 0 6px 0 0 ;
}
input{
 margin: 6px;
 padding: 0;
}
</style>
