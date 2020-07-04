<template>
    <span class="all-answers-item">
        <p>{{answer.val}}</p>
    <input 
            
            type="checkbox"
            :value="answer.id"
            :checked="selectedId==answer.id"
            @input="handleChange(answer.id)"
            
        />
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
        handleChange(answerId){
            this.$emit("handleChange",answerId);  
        },
        inputHandler(e){
            this.$emit('input',e.target.value);
        }
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