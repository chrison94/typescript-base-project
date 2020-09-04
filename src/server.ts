require('dotenv').config()
import app from "./app";

const start = async () => {
  try {
    const PORT = process.env.PORT || 3100
    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

  } catch (e) {
    console.log(e)
    process.exit(1);
  }
};

start();