import { reactive } from './vue/reactivity/index'



const state = reactive({
  name: 'chang',
  age: 18,
  friends: [
    {
      name: 'haha',
      age: 18
    },
    {
      name: 'hehe',
      age: 19
    }
  ],
  info: {
    a: 555,
    b: {
      name: '444'
    }
  }
})
console.log(state)