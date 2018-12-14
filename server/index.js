const express = require('express');
const redis = require('redis');
const path = require('path');

const app = express();

app.use(express.static( path.join(__dirname, '../client/public')));

app.get('/event-stream', (req, res) => {
  
  try {
    //create a new instance of a redis client which connects to '//redis:6379' by default
    const client = redis.createClient(); 

    //once connected to the redis server, confirm via a console log
    client.on('connect', function() {
      console.log('Redis client connected');
    });

    //if there is any error connecting, send error back to client
    client.on('error', function (err) {
      console.log(`Redis Connection Error: ${err}`)
      res.write(`message: unable to connect to redis instance\n\n`);
    });

    //once connected, subscribe to the 'events' channel on the server
    client.subscribe('events')
  
    //listen for an incoming message and send it up to the client; 
    //QUESTION: not sure how we know that the event is called "message"? how is message being deconstructed?
    client.on('message', (channel, message) => {
      console.log('message -->', channel, message)
      res.write(`type: ${channel}\n`)
      res.write(`message: ${message}\n\n`)
    })

    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    })

    //closes redis connection when moves away from /event-stream
    //QUESTION: how does this work under the hood?
    req.on("close", function() {
      console.log("closing stream")
      client.unsubscribe();
      client.quit();
    });
  } catch (error) {
    res.sendStatus(404).send(error)
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
