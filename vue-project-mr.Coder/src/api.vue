 <template>
  <h2>Hi Im Api</h2>
  <h1>{{ info ? '' : "Loading..."}}</h1>
  <div>
        <ul>
            <li v-if="info">
                {{ info.data.name }}
            </li>
            <li v-if="info">
                {{ info.data.username}}
            </li>
            <li v-if="info">
                {{ info.data.email}}
            </li> 
        </ul>
        
    <button v-bind:disabled="checked" @click="NextPerson">Next Person</button>
    <button v-bind:disabled="checked2" @click="BackPerson">Back Person</button>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {

        data() {
            return {
                info: null,
                count: 1,
                checked: false,
                checked2: true,
            }
        },

        mounted() {
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.count}`)
            .then(response => (this.info = response))
        },

        methods: {
            NextPerson() {
                this.count += 1
                console.log(this.count);
                if (this.count >= 1 && this.count <= 10) {
                    axios.get(`https://jsonplaceholder.typicode.com/users/${this.count}`)
                    .then(response => (this.info = response))
                }
                if ( this.count > 9) {
                    this.checked = true
                }
                 if ( this.count > 1) {
                    this.checked2 = false
                }  
            },

        BackPerson() {
            this.count -= 1
            console.log(this.count);
            if (this.count >= 1){
                axios.get(`https://jsonplaceholder.typicode.com/users/${this.count}`)
                .then(response => (this.info = response)) 
            } 
            if ( this.count <= 1) {
                    this.checked2 = true
                }
            if ( this.count < 10) {
                    this.checked = false
                }    
            
        }
    }
}
</script>

<style>

</style>