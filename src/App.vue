<template>
  <div id="app">
    <hello></hello>
    <home></home>
  </div>
</template>

<script>
  import hello from './components/HelloWorld'
  import home from './components/home'

  export default {
    name: 'App',
    components: {hello,home}
  }
</script>
