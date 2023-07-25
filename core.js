const E = require('express')
const app = E()
const PORT = 80

app.use(E.json());
app.get('/',(req,res) => {
    res.send("Hello Multiverse!! \n this code is working!");
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));


