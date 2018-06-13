<template>
    <input   @keydown="inputHandler"
                     type="search"
                      v-model="query"
                      placeholder="برای جستجو بنویسید" />
    
</template>

<script>
export default {
    data() {
        return {
            query: '',
        }
    },
    methods: {
        inputHandler: function(event){
            // console.log(event);
            
            if(event.code === 'Enter')
                this.$emit('searched', event.target.value);
                // console.log(event.target.value); 
            // this.$emit('searched', event);
        }
    } 
}
</script>


<style scoped>

</style>
