const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var pokemonName = [
    'Fushigidane','Hitokage','Zenigame',
];

for(var i=0; i<pokemonName.length;i++){
    print(pokemonName[i])
}
function echo(pokemonName){
    console.log(`${pokemonName} !!! I chosen you...`)
}

pokemonName.forEach(echo)