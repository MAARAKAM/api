# moonapi.js
# NPM Package
<a href="https://moonbotlist.ga/dc" target="_blank"><img src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png?size=512" alt="Join our discord" width="256"></a><br>
**Support:** [https://moonbotlist.ga/dc](https://moonbotlist.ga/dc) <br>





<a href="https://nodei.co/npm/moonapi.js"><img src="https://nodei.co/npm/moonapi.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>

## Installation
*If you have trouble with the installation, please feel free to visit our [discord](https://moonbotlist.ga/dc) address.*
- `npm i moonapi.js`

# Define Module & Client
```js
const Discord = require("discord.js");
const client = new Discord.Client();
const moonapi = require("moonapi.js");
const dbl = new moonapi("TOKEN-HERE", client);

client.login("BotToken");
```

# Server Count & Shard Count Posting
```js
client.on("ready", async () => {
  dbl.serverCount();
  /* 
  -> Server count posted. 
  or 
  -> Server count & shard count posted.
  */

});
```

# Vote Checking
```js
let hasVote = await dbl.hasVoted("962983504403112017"); // -> User ID
  if(hasVote === true) {
      console.log("Voted")
    } else {
      console.log("Vote please.")
  }
// -> Vote please.
```

# Search on moonbotlist
```js
let botFind = await dbl.search("962983504403112017");
console.log(botFind.username) // -> Allegro
```


# Questions?
Come talk to us here:

[![Moonbotlist.ga](https://discord.com/api/guilds/936511306306039818/embed.png?style=banner1)](https://discord.gg/QMdsVH4Ezc)

