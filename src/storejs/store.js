import vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
