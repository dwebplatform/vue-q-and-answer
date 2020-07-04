<template>
    <span class="all-answers-item">
        <p>{{answer.val}}</p>
    <input 
            
            type="checkbox"
            :value="answer.id"
            :checked="selectedId==answer.id"
            @click="(e)=>handleChange(e,answer.id)"
            
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
        isChecked(){
            return this.selectedId==this.answer.id;
        },
        handleChange(e,answerId){
            if(!this.isChecked()){
                this.$emit("handleChange",answerId);  

            }
            else {
                this.$emit('handleChange', null);
            }
        },
        
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