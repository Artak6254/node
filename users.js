module.exports = (req,res) => {
   if (req.method === 'GET') {
    res.json(
        {name : "John", "location": "North"},
        {name : "Smit", "location": "new North"}
    )
   }else {

   }
}