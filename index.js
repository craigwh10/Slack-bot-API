const SlackBot = require("slackbots");
const axios = require("axios");

const bot = new SlackBot({
  // in oAuth and permissions in slackBot API page.
  token: "xoxb-816739924503-802127195986-wagyjdiOEccRZ0ki4VuZJKm8",
  name: "test"
});

// Start Handler
bot.on("start", () => {
  const params = {
    icon_emoji: ":crocodile:"
  };

  bot.postMessageToChannel("general", "Test boy.js", params);
});

// Error Handler
bot.on("error", err => console.log(err));

// Message Handler
bot.on("message", data => {
  if (data.type !== "message") {
    return;
  }

  handleMessage(data.text);
});

// Respond to Data
function handleMessage(message) {
  if (message.includes(" urmum")) {
    urMumJoke();
  } else {
    console.log(message);
  }
}

// Tell a ur mum joke
function urMumJoke() {
  axios.get("https://api.yomomma.info/").then(res => {
    const joke = res.data.joke;
    const params = {
      icon_emoji: ":crocodile:"
    };

    bot.postMessageToChannel("general", `${joke}`, params);
  });
}
