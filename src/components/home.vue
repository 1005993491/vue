<template>
  <div>
    <h1>{{a}}</h1>
    <button type="button" @click="goclickFun">点我试试</button>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export  default {
    methods:{
    goclickFun(){
      this.$store.dispatch({type:'gogo',n:0})
    }
    },
    computed:{
      ...mapState({
      a:({a,b})=>{
        return a.a
      }
      })
    }
  }
</script>
