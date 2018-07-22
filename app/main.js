require('dotenv').config({path: '../.env'});
const axios = require('axios');

URL = "https://erikberg.com/nba/team-stats.json"
axios.defaults.headers.common['Authorization'] = "Bearer " + process.env.ERIKSBERG_API_KEY;

axios.get(URL).then(res => {
  let teamData = res.data.team_stats;
  for (let item in teamData) {
    if (teamData[item].team.team_id === 'sacramento-kings') {
      console.log('teamData[item]: ', teamData[item]);
    }
  }
});


new Chartist.Bar('.ct-chart', {
    labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
      series: [20, 60, 120, 200, 180, 20, 10]
}, {
    distributeSeries: true
});

