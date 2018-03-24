export default {
  state: {
    a: 'zhangsan',
    b: 'lisi',
    c: 'wangwu',
    d: 'zhaoliu',
    ulList: [{id: 1, name: 'hanmeimei'}, {id: 2, name: 'lilei'}]
  },
  mutations: {
    go(state,{type,amount}){
      state.a=state.a+'是张三'
        console.log(state.a)
      return state.a
    }
  },
  getters: {
    doneTodos: state => {
      return state.a
    }
  },
  actions: {
    gogo({commit},{type,n}){
      commit({ type: 'go',
        amount: 10})
    }
  }
}
