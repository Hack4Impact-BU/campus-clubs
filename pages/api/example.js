// This is an example of handling an HTTP request to the API of our application. 
// Use the route middleware to access the database and other middlewares we may need in each request.

import route from "../../server/middleware";

route.get(async (req, res) => {
  let doc = await req.db.collection('users').findOne();
  console.log(doc);
  res.json(doc);
})

route.post((req, res) => {
  console.log(req.body);
  res.json({"message": "thanks"});
})

export default route;