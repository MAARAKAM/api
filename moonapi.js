const fetch = require("node-fetch");
module.exports = class VOID {
  constructor(token, client) {
    this['token'] = token;
    this['client'] = client;
    return this;
  }

  async serverCount(message) {
  if(this.client.shard) {
    let serverCountReduce = await this.client.shard.fetchClientValues('guilds.cache.size');
    fetch(`https://www.moonbotlist.ga/api/bots/stats`, {
      method: 'POST',
      headers: {
        'serverCount': serverCountReduce.reduce((acc, guildCount) => acc + guildCount, 0),
        'shardCount': this.client.shard.count,
        'Content-Type': 'application/json', 
        'Authorization': this.token
      },
  })
  .then(console.log(message || "Server count & shard count posted."));
  } else {
  fetch(`https://moonbotlist.ga/api/bots/stats`, {
        method: 'POST',
        headers: { 
          'serverCount': this.client.guilds.cache.size,
          'Content-Type': 'application/json', 
          'Authorization': this.token
        },
    })
    .then(console.log(message || "Server count posted."));
   }
  }
  
  async search(id) {
  return await fetch(`https://www.moonbotlist.ga/api/bots/${id}`, {
        method: 'GET'
    })
    .then(res => res.json()).then(json => json);
  }
  
  async hasVoted(id) {
  return await fetch(`https://www.moonbotlist.ga/api/bots/check/${id}`, {method: 'GET',headers: { 
    'Content-Type': 'application/json', 'Authorization': this.token
  }
  }).then(res => res.json()).then(async json => json.voted);
  }
}
