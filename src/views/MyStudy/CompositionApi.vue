<template>
  <div>
    <h1>ToDo list</h1>
    <p>現在のリスト数:  {{ state.getListLength }}</p>
    <input v-model="state.todo"><br>
    <button @click="addTodo">追加</button>
    <ul>
      <li v-for="(todo, index) in state.todos" :key="index">
        {{ todo }}
        <span @click="removeTodo(index)">❌</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/reactivity'
export default {
  setup() {
    const state = reactive({
      todo: "",
      todos: [],
      getListLength: computed(() => state.todos.length)
    })

    const addTodo = () => {
      state.todos.push(state.todo)
      state.todo = ""
    }

    const removeTodo = index => {
      state.todos.splice(index, 1)
    }

    return {
      state, addTodo, removeTodo
    }
    
  }
}
</script>