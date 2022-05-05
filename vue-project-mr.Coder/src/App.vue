<script>
export default {
  data() {
    return {
      count: 0,
      items: [101, 12, 1, 4, 10],
      arr: ['Vity', 'WOW', "BOB", 'Lola', 'pop'],
      arr2: ['Vity1', 'WOW1', "BOB1", 'Lola1', 'pop1'],
      arrNetx: ['lol', 1, 'wqewe', 444],
      text: '',
      show: false,
      show2: true,
      show3: false,
      hello: true,
	    name: 'Вася',
      day: new Date().getDay(),
      age: 16,
      message: '',
      message2: '',
      result: 0,
      textAll: '',
      newText: '',
      data: new Date().getFullYear(),
      lol: "",
      lol2: "",
      o: [],
      show123: false,
      checked: true,
      lang: [],

    } 
  },
  methods: {
    Delet(item) {
      this.arrNetx = this.arrNetx.filter(t => t !== item)
      console.log( typeof this.data);
    },
    ADD() {
     this.arrNetx.unshift(this.textAll)
     this.textAll = ''
    },
    two() {
      if(this.message !== this.message2) {
        this.message2 = this.message
      }
      if(this.message2 !== this.message && this.message2.lenght > this.message.lenght) {
        this.message = this.message2
      }
    },
    ShowArr() {
      this.show3 = !this.show3
    },
    deletLi(item) {
      this.items = this.items.filter(t => t !== item)
    },
    onInput(e) {
      this.text = e.target.value
      if(this.text){
        this.show = false
      }
    },
    showMassage() {
      this.show2 = !this.show2
    },
    addNew() {
      if (this.text !== '' ) {
        this.items.unshift(this.text);
        this.text = ''
        this.show = false 
      }else {
        this.show = true
      }
    },
    click(index) {
      this.items[index] = this.items[index] + '!'    
    },
    lollol() {
      this.lol2 = this.lol.split(' ')
      this.show123 = true
      this.lol = ''
    },
  }
} 
</script>

<template>
  <div class="page">
    <p>{{ count }}</p>
    <div class="contaynerBtn">
      <button class="btn" @click="count ++">+</button>
      <button class="btn" @click="count --">-</button>
    </div>
    <ul>
      <li v-for="(item, index) in items" :key="index" @click="click(index)">{{ item }}
        <button class="btnLI" @click="deletLi(item)">X</button>
      </li>
      <input :value="text" @input="onInput" placeholder="Type here">
      <button @click="addNew">ADD</button>
      <p v-if="show">заполните поле</p>
      <p v-if="show2">ПРИВЕТ</p>
      <button @click="showMassage">{{ show2 ? 'Скрыть' : 'Показать' }}</button>
    </ul>
    <ul v-if="show3">
      <li  v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <ul v-if="!show3">
      <li  v-for="(item, index) in arr2" :key="index">{{ item }}</li>
    </ul>
    <button @click="ShowArr">{{ show3 ? 'Скрыть' : 'Показать' }}</button>
    <p v-if="hello">привет {{ name }}</p> 
    <p v-else="!hello">Пока {{ name }}</p> 
    <p v-if="day == 1">ПН</p>
    <p v-if="day == 2">ВТ</p>
    <p v-if="day == 3">СР</p>
    <p v-if="day == 4">ЧТ</p>
    <p v-if="day == 5">ПТ</p>
    <p v-if="day == 6">СБ</p>
    <p v-if="day == 7">ВС</p>
    <p v-if="age < 18"> Подросток</p>
    <p v-if="age > 18"> Молодой человек</p>
    <p v-if="age >= 25"> Мужчина</p>
    <input v-model="message" >
    <input v-model="message2" >
	<p>Сумма чисел {{ result }}</p>
  <button @click="two">переворот</button>
  <ul>
    <li v-for="(item, index) in arrNetx" :key="index">
      {{ item }}
      <button @click="Delet(item)">Del</button>
    </li>
  </ul>
    <input v-model="textAll">
    <button @click="ADD">Add</button>
    <input v-model="newText">
    <p>{{ newText.split('').reverse().join('') }}</p>
    <textarea v-model="lol"></textarea>
    <button @click="lollol">TexrArea</button>
    <ul v-if="show123">
      <li v-for="(item, index) in lol2" :key="index">
        {{item}}
      </li>
    </ul>
    <input type="checkbox" v-model="checked">
	  <p v-if="checked">отмечен</p>
    <p v-if="!checked">не отмечен</p>
    <input type="checkbox" v-model="lang" value="html">
    <input type="checkbox" v-model="lang" value="css">
    <input type="checkbox" v-model="lang" value="js">
    <p>Содержимое массива: {{ lang }}</p>

    <input type="checkbox" v-model="lang" value="xnj ssdls;l">
    <p>{{ lang }}</p>
  </div> 
  
</template>


<style>
* {
  margin: 0;
  padding: 0;
  
}
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contaynerBtn {
  display: flex;
}
.btn {
  width: 20px;
  height: 20px;
  border: 1px solid rgb(10, 213, 51);
  background: none;
  color: aqua;
  
}
.btnLI {
  width: 20px;
  height: 20px;
  border: 1px solid rgb(10, 213, 51);
  background: none;
  color: aqua;
  margin-left: 20px;
}
.btn:hover {
  background: rgb(112, 132, 116);
}
.lol {
  color: brown;
}
</style>

