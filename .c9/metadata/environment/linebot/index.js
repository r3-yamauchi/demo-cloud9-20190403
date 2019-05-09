{"filter":false,"title":"index.js","tooltip":"/linebot/index.js","undoManager":{"mark":6,"position":6,"stack":[[{"start":{"row":0,"column":0},"end":{"row":48,"column":3},"action":"insert","lines":["'use strict';","","const line = require('@line/bot-sdk');","const express = require('express');","","// create LINE SDK config from env variables","const config = {","  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,","  channelSecret: process.env.CHANNEL_SECRET,","};","","// create LINE SDK client","const client = new line.Client(config);","","// create Express app","// about Express itself: https://expressjs.com/","const app = express();","","// register a webhook handler with middleware","// about the middleware, please refer to doc","app.post('/callback', line.middleware(config), (req, res) => {","  Promise","    .all(req.body.events.map(handleEvent))","    .then((result) => res.json(result))","    .catch((err) => {","      console.error(err);","      res.status(500).end();","    });","});","","// event handler","function handleEvent(event) {","  if (event.type !== 'message' || event.message.type !== 'text') {","    // ignore non-text-message event","    return Promise.resolve(null);","  }","","  // create a echoing text message","  const echo = { type: 'text', text: event.message.text };","","  // use reply API","  return client.replyMessage(event.replyToken, echo);","}","","// listen on port","const port = process.env.PORT || 3000;","app.listen(port, () => {","  console.log(`listening on ${port}`);","});"],"id":1}],[{"start":{"row":45,"column":13},"end":{"row":45,"column":33},"action":"remove","lines":["process.env.PORT || "],"id":2}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":43},"action":"remove","lines":["process.env.CHANNEL_SECRET"],"id":3},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["'"]},{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["'"]}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":50},"action":"insert","lines":["34ac432e3962fc394f90a077d3ded8d3"],"id":4}],[{"start":{"row":7,"column":34},"end":{"row":7,"column":54},"action":"remove","lines":["CHANNEL_ACCESS_TOKEN"],"id":5},{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"remove","lines":["."]},{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"remove","lines":["v"]},{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"remove","lines":["n"]},{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"remove","lines":["e"]},{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"remove","lines":["."]},{"start":{"row":7,"column":28},"end":{"row":7,"column":29},"action":"remove","lines":["s"]},{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"remove","lines":["s"]},{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"remove","lines":["e"]},{"start":{"row":7,"column":25},"end":{"row":7,"column":26},"action":"remove","lines":["c"]},{"start":{"row":7,"column":24},"end":{"row":7,"column":25},"action":"remove","lines":["o"]},{"start":{"row":7,"column":23},"end":{"row":7,"column":24},"action":"remove","lines":["r"]},{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"remove","lines":["p"]}],[{"start":{"row":7,"column":22},"end":{"row":7,"column":24},"action":"insert","lines":["''"],"id":6}],[{"start":{"row":7,"column":23},"end":{"row":7,"column":195},"action":"insert","lines":["6PyJOikNXxDUm/Nwl/AqQkD8DODBCbme9luZOqvXfoGMsyWGDfvUw9qYZTgoUSUgPskQTu7MHqbdpre8rlsS+gXUjQDLU/HcS4TmhcQQpizknS/nYfkO7vgR/PQp5TNjbG9D5C3+8sxzCmvKoVJ1GAdB04t89/1O/w1cDnyilFU="],"id":7}]]},"ace":{"folds":[],"scrolltop":436.5,"scrollleft":0,"selection":{"start":{"row":20,"column":11},"end":{"row":20,"column":19},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":32,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1555562988858,"hash":"69d138a3bc9ebe126fe9ad0ba17c62c634c2feed"}