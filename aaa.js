//jsonファイルURL
var url = 'https://raw.githubusercontent.com/Dimbreath/ArknightsData/master/ja-JP/gamedata/excel/activity_table.json';

new Vue({
  el: '#happyend',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get(url)
      .then(response => {this.info = response.data})
  }
})
