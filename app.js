const express = require("express");
const app = express();

const logger = require("./middlewares/logger");

const locationRouter = require("./routes/locationRouter");

app.use(express.json());

app.use(logger);

app.use("/api/locations", locationRouter);

const PORT = 4000;
 
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
