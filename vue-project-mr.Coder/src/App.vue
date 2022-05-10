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
      checked: false,
      lang: [],
      type: "",
      selected: '',
      option: ['Минск', 'Moscow', 'Kiev'],
      str101: 'Игорь Белозор',
      isDisabled: true,
      lol: 'www',
      isActive: true,
      isValid: false,
      checked101: false,
      textTepritche: null,
      robotNumber: Math.floor(Math.random() * 100),
      textGame: '',
      arrName: [
        {name: 'Коля', active: true},
        {name: 'Вася', active: true},
        {name: 'Петя', active: false},
      ],
      NameUser: '',
      ProductAppl: [
        {name: 'product1', price: 100, quantity: 4},
        {name: 'product2', price: 200, quantity: 5},
        {name: 'product3', price: 300, quantity: 6},
      ],
      initialValue: '',
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
    check101() {
      isDisabled = false
    },
    inputTemritche(e) {
      this.textTepritche =  e.target.value 
      if(Number(this.textTepritche) > Number(this.robotNumber)) {
        this.textGame = 'Число меньше'
        
      }
      if(Number(this.textTepritche) < Number(this.robotNumber)) {
        this.textGame = 'Число больше'
      }
      if(Number(this.textTepritche) === Number(this.robotNumber)) {
        this.textGame = 'Вы выйграли'
      }
    },
    UserName(e) {
      this.NameUser = e.target.value
      console.log(this.NameUser);
      
    },
    AddUser() {
      this.arrName.push({name: this.NameUser, active: true})
      console.log(this.ProductAppl);
      this.initialValue = this.ProductAppl.map(item => item.price * item.quantity)
      
    }
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

    <input type="checkbox" v-model="lang" value="js 2.0" >
    <p>{{ checked ? 'Yes' : 'No' }}</p>
    <ul>
      <li>
        {{ lang }}
      </li>
    </ul>
    <input name="radio" type="radio" v-model="type" value="Привет">
    <input name="radio" type="radio" v-model="type" value="Hello ">
    <input name="radio" type="radio" v-model="type" value="iiiiiiii">
    <p>{{ type }}</p>
    <p>в каком городе вы живете</p>
    <select v-model="selected">
		<option v-for="city in option" :key="city">{{ city }} </option>
	  </select>
	  <p>Вы выбрали: {{ selected }}</p>
    <p v-bind:id="str101">pop</p>
    <input v-bind:disabled="!checked" type="text">
    <input  type="checkbox" v-model="checked">
    <button class="btnRed" @click="isDisabled = !isDisabled">
      {{isDisabled ? 'Нет доступа к инпуту' : 'Есть доступа к инпуту' }}
    </button>
    <p v-bind:class="lol">Привет</p>
    <p @click="isActive = !isActive" v-bind:class="{active: isActive}">Абзац</p>
    <button @click="isActive = !isActive">Change</button>
    <p v-bind:class="{valid: isValid, invalid: !isValid}">LOLOPPPPLPLPL</p>
    <button @click="isValid = !isValid">opopqopoqpeoqpweop</button>
    <input type="checkbox" v-model="checked101">
    <p v-bind:class="{reding: checked101, blaking: !checked101}" >lol</p>
    <input @input="inputTemritche" type="number" :value="textTepritche" placeholder="число от 0 до 100">
    <p>{{ textGame }}</p>
    <ul v-for="person in arrName" :key="person.name">
      <li v-bind:class="{plusperson: person.active, disPerson: !person.active}">{{person.name}}</li>
      <button @click="person.active = !person.active">change</button>
    </ul>
    <input type="text" :value="NameUser" @input="UserName">
    <button @click="AddUser">addUser</button>
    <table>
      <tr >
        <td v-for="item in ProductAppl" :key="item">{{item.name}}</td>
      </tr>
      <tr>
        <td v-for="item in ProductAppl" :key="item">{{item.price}}$</td>
      </tr>
      <tr>
        <td v-for="item in ProductAppl" :key="item">{{item.quantity}} кол-во</td>
      </tr>
      <tr>
        <td v-for="item in ProductAppl" :key="item">{{item.price * item.quantity}}$ сумма</td>
      </tr>
    </table>
    <p>{{}}</p>
    <p>{{ initialValue }}</p>
  </div> 

</template>

<style>
* {
  margin: 0;
  padding: 0;
  
}
table, th, td {
  border: 1px solid black;
}
.plusperson {
  color: rgb(8, 243, 51);
}
.disPerson {
  color: red;
}
.reding {
  background-color: brown;
}
.blaking {
  background: black;
}
.invalid {
  color: brown;
}
.active {
  color: red;
}
.www {
  color: rgb(11, 245, 93);
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
.btnRed {
  width: 200px;
  border: 1px solid rgb(255, 85, 0);
  background: none;
  color: black;
  font-size: 15px;
  padding: 10px;
}
.btnRed:hover {
  background: rgb(126, 130, 123)
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

