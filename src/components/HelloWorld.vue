<template>
  <div>
    {{aaa}}
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'


export default {
  computed: {
    ...mapState({
      aaa: ({a,b}) => {
        console.log(a,b)
        return a.a
      }
    }),
    ...mapGetters(['doneTodos'])
  },
  mounted () {
    //console.log(this.$store)
  }
}
</script>
