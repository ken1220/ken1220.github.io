new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get(url) //ここにURLを入れる
      .then(response => (this.info = response))
  }
})
