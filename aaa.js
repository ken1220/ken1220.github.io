new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get("https://raw.githubusercontent.com/Dimbreath/ArknightsData/master/ja-JP/gamedata/excel/activity_table.json") //ここにURLを入れる
      .then(response => (this.info = response))
  }
})
