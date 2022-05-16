const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER_PASS}@clustertwitter.tlmat.mongodb.net/twitter-project`
  )
  .then(() => console.log(`connected to MongoDB`))
  .catch((err) => console.log(`failed to connect to MongoDB: ${err}`));
