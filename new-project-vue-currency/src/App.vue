<script>
  export default {
    data() {
      return {
        massage: 'lol',
        answerApi: null,
        inputValue: '',
        arr: [],
      }
    },
    methods: {
      btnClick() {
        this.inputValue = this.inputValue.toUpperCase();
        for (const key in this.answerApi.rates) {
         if(this.inputValue === key) {
           console.log(true);
           this.arr.push({name:this.inputValue, value: this.answerApi.rates[key]});
           this.inputValue = '';
         } else {
           console.log(false);
         }
        }
        console.log(this.answerApi.rates);
        
      },
      delet(currensy) {
        this.arr = this.arr.filter(item => item !== currensy);
      },

      async fetchApi() {
        this.answerApi = null
        const respons = await fetch('https://api.vatcomply.com/rates?base=USD');
        this.answerApi = await respons.json();
        
      },
    },
    mounted() {
        this.fetchApi();
    },
  }
</script>


<template>
  
  <p v-if="!answerApi">Loading...</p>
  <div v-else>
    <div class="container">
      <div class="containerData">
        <p class="date">{{ answerApi.date }}</p>
        <p>{{ answerApi.base }}</p>
      </div>
      <div class="addInput">
        <input type="text" v-model="inputValue" placeholder="EUR/JPY/AUD/ZAR">
        <button @click="btnClick">ADD</button>
      </div>
      <ul>
          <li v-for="(currensy, index) in arr" :key="index">
            <span>{{currensy.name}}</span>
            {{currensy.value.toFixed(1)}}$
            <button class="btnDelet" @click="delet(currensy)">x</button>
          </li>
      </ul>
    </div>
  </div>
 
</template>

<style>
#app {
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  background: rebeccapurple;
}
.btnDelet {
  background: none;
  border: none;
  font-size: 15px;
  color: black;
  display: flex;
  align-content: center;
  justify-content: center;
}
.btnDelet:hover {
  background: rgb(241, 235, 235);;
  color: brown;
  border-radius: 5px;
 
}
.addInput {
  display: flex;
  margin-bottom: 10px;
}
.date {
  margin-right: 10px;
}
span {
  color: aliceblue;
  margin-right: 10px;
}
.containerData {
  width: 100%;
  display: flex;
  justify-content: space-around;
  
}
p {
  color: aliceblue;
}
li {
  width: 100%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
li:not(:last-child){
  margin-bottom: 10px;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  padding: 30px;
  background: rgb(96, 98, 94);
  width: fit-content;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

</style>