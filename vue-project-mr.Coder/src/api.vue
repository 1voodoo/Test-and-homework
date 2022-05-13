 <template>
  <h2>Hi Im Api</h2>
  <h1>{{ info ? '' : "Loading..."}}</h1>
  <div>
  <li v-for="item in info" :key="item.id">
    {{ item.title }}
  </li>
  </div>
</template>

<script>
    import axios from 'axios'
export default {
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => (this.info = response.data))
    }
}
</script>

<style>

</style>