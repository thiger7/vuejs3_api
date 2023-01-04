const app = Vue.createApp({
  data: () => ({
    items : null,
    keyword: '',
    message: ''
  }),
  watch: {

  },
  mounted: function() {

  },
  methods: {
    getAnswer: function () {
      if(this.keyword === '') {
        console.log('karamoji')
        this.items = null
        return
      }

      this.message = 'Loading...'
      const vm = this
      const params = { page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
            .then(function(response) {
              console.log('response')
            })
    }
  }
})
app.mount('#app')