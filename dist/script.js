var app = new Vue({
  el: '#app',
  data: {
    meta: [], // Meta data from Google Sheet
    items: [] // Items data from Google Sheet
  },
  mounted () {
   
    axios
      .get('https://v2-api.sheety.co/f8c8d98d6b0c5ccf71bb2578e377f458/outdoorEatRater/meta')
      .then(response => (this.meta = response.data.meta[0]))
    
    // Fetch the Items data from Sheety API
    axios
      .get('https://v2-api.sheety.co/f8c8d98d6b0c5ccf71bb2578e377f458/outdoorEatRater/items')
      .then(response => (this.items = response.data.items))
  },
  methods: {
    // Convert comma seperated tags to an array
    getTags: function (tags) {
      return tags.split(',')
    }
  }
})