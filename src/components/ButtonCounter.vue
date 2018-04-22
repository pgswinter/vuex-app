<template>
  <div>
    <button v-on:click="increment">{{ counter }}</button>  
  </div>
</template>

<script>
export default {
	data(){
        return{
            counter: 0
        }
    },
	methods: {
		increment: function () {
			this.$emit('increment')
		}
	},
}
</script>
