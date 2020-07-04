<template>
    <span class="all-answers-item">
        <p v-if="answer.isCorrect"
        style="background-color: green;"
        >{{answer.val}}</p>
        <p v-else-if="!answer.isCorrect && answer.id==selectedId"
        style="background-color: red;"
        >{{answer.val}}</p>
        <p v-else
        >{{answer.val}}</p>
 
    </span>
</template>

<script>
export default {
    props:['answer','checked','selectedId'],
    data(){
        return {
    }
    },
    methods:{
        
    }
}
</script>

<style scoped>
.all-answers-item{
  display: flex;
    flex-flow: row;
    width: 100px;
    justify-content: flex-end;
    align-items: center;
}
input{
    margin: 6px;
    padding: 0;
}
</style>