const app = require("./app");

app.listen(process.env.PORT || 3001, () => {
  console.log('Server started on port ' + (process.env.PORT || 3001))
});