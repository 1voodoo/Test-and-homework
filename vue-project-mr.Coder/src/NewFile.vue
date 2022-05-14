<template>

  <H1>New File</H1>
  <h2> I props {{ name }}</h2>
  <h2> I props {{ surname }}</h2>
  <h2> I props {{ lol }}</h2>
  <p v-for="item in arr01" :key="item">{{ item.answer }}</p>
  <ul>
      <li v-for="(item, index) in arr" :key="index">
          {{ item.question }}
      </li>
         <p v-for="(item, index) in arr" :key="index">{{item.answers[0]}}</p>
         <p>{{ item }}</p> 
  </ul>

</template>

<script>

export default {
    props: ['name', 'surname', 'lol', 'arr01'],

    data() {
        return {
            
            type: '',
            arr:[
	    {question: 'Вопрос 1', answers: ['Ответ 1','Ответ 2','Ответ 3','Ответ 4','Ответ 5',], right: 3},
	    {question: 'Вопрос 2', answers: ['Ответ 1','Ответ 2','Ответ 3','Ответ 4','Ответ 5',], right: 1},
	    {question: 'Вопрос 3', answers: ['Ответ 1','Ответ 2','Ответ 3','Ответ 4','Ответ 5',], right: 5},
        ]

        }
    },

    methods: {

    },
    
}
</script>


<style>

</style>