require('dotenv').config();
const list = require(`./models/groceryList`)

list.addItem(`Vodka`, 2)
    .then(result => {
       console.log(result.rows); 
    });

list.updateItem(`3`,`blueberry bagels`, `3`)
    .then(result => {
        console.log(result.rows)
    })

list.deleteItem(`4`)
    .then(result => {
        console.log(result.rows); 
    });