 <template>
 
 <div class="page1">
    <h1 v-bind:class="{red: change, green: !change}">Hello</h1>
    <p @click="changeFunc">{{change ? "what it you problem? push" : 'lol push' }}</p>
    
    <div>
        <p>{{ count }}</p>
        <button @click="count ++">Add plus</button>
        <button @click="count --">Add minus</button>
    </div>
    <p v-for="(item, index) in spreadableOne" :key="index">{{index}} {{item }} </p>
    <p v-for="(item, index) in spreadableTwo" :key="index">{{item}}</p>
    <p v-for="(item, index) in spredarrThree" :key="index">{{item}}</p>
  </div>

</template>

<script>

export default {

    data() {
        return {
            count: 0,
            change: true,
            spreadableOne: [1, 2, 3, 4],
            spreadableTwo: [5, 6, 7, 8],
            spredarrThree: [0, 99]
        }
    },

    methods: {
        changeFunc() {
            this.change = !this.change
        }
    }
    

}
</script>

<style>
.red {
    color: brown;
}
.green {
    color:green;
}
.page1 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>