<script>
 import ChildComp from './ChildComp.vue'
  let id = 0;
 export default {
  components: {
    ChildComp
  },
  data() {
    return {
      todoId: 1,
      todoData: null,
      btnClass: 'btn',
      btnClassChange: 'btnChange',
      titleClass: 'title',
      message: 'Hello World!',
      name: 'Вася',
    	surname: 'Иванов',
      hideCompleted: false,
      arr: [1, 2, 3],
      usersAll: [
        {name: 'user1', salary: '300$'},
        {name: 'user2', salary: '400$'},
        {name: 'user3', salary: '500$'},
		  ],
      products: [
        {name: 'product1', price: 100, quantity: 5},
        {name: 'product2', price: 200, quantity: 4},
        {name: 'product3', price: 300, quantity: 3},
      ],
      users: {employee1: '100$', employee2: '200$', employee3: '300$'},
      obj: {a: 4, b: 5, c: 6},
      count: 0,
      text: "",
      awesome: true,
      newTodo: '',
      todos: [
        { id: id++, text: 'Learn HTML', done: false },
        { id: id++, text: 'Learn JavaScript', done: false },
        { id: id++, text: 'Learn Vue', done: false  }
      ], 
    }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos
    }
  },
  mounted() {
    this.$refs.p.textContent = 'mountedaaaa!'
    this.fetchData()
  },
  watch: {
    todoId() {
      this.fetchData()
    }
  },
  methods: {
    increment() {
      this.count++
    },
    diIncrement() {
      this.count--
    },
    onInput(e) {
      this.text = e.target.value
    },
    onChangeValue() {
      this.awesome = !this.awesome
    },
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false});
      this.newTodo = '';
    },
    removeTodo(item) {
      this.todos = this.todos.filter((t) => t !== item)
    },
    async fetchData() {
      this.todoData = null
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
      )
      this.todoData = await res.json()
    }
  }
}
</script>

<template>
  <h1 :class="titleClass">{{ message }}</h1>
  <p>{{name + " " + surname}}</p>
    {{arr[0] + arr[1] + arr[2]}}
    {{obj.a + obj.b+ obj.c}}
    <ul> 
      <li v-for="(item, index) in arr" :key="index">{{ item }} - {{ index + 1 }}</li>
      <li v-for="(item, key) in products" :key="key">{{item.name}} , {{ "цена:" + item.price}} , {{"количество:" + item.quantity}} , {{"сумма:" + (item.price * item.quantity)}}</li>
      <li v-for="(item, key) in usersAll" :key="key">{{item.name}} - {{item.salary}}</li>
      <li v-for="(item, key, index) in users" :key="key">{{key}} - {{item}} - {{index + 1}}</li>
      <li v-for="(item, index) in arr" :key="index">{{ item * index }}</li>
      <li v-for="(item, index) in obj" :key="index">{{ item }}</li>

      <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add Todo</button>    
      </form>
      <ul>
        <li v-for="item in filteredTodos" :key="item.id">
          <input type="checkbox" v-model="item.done">
          <span :class="{ done: item.done }">{{ item.text }}</span> 
            <button @click="removeTodo(item)">X</button>
        </li>
      </ul>
        <button @click="hideCompleted = !hideCompleted">
          {{ hideCompleted ? 'Show all' : 'Hide completed' }}
        </button>
    </ul>

  <h1>{{count}}</h1>
  <button :class="btnClass" @click="increment">+</button>
  <button :class="btnClass" @click="diIncrement">-</button>
  <input :value="text" @input="onInput" placeholder="Type here">
   <button :class="btnClassChange" @click="onChangeValue">change</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
  <p>{{ text }}</p>
  <p ref="p">hello</p>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <button @click="todoId--">Fetch previos todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>

<style>
@import "@/assets/base.css";
.done {
  text-decoration: line-through;
}
.title {
  color: red;
  
}
.title:hover {
  color: black;
}
.btn {
  width: 50px;
  height: 50px;
  border: 1px solid rebeccapurple;
  background: transparent;
  color: aqua;
  font-size: 30px;
  
}
.btn:hover {
  background: red;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}
</style>
