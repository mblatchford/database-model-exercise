// delete item
// add item
// update quantity


// CREATE
function addItem(name, quantity){
    return db.result(`insert into groceryitems (name, quantity) 
        values
            ($1,$2)
            returning id `,
            [name, quantity])
        .catch(err => {
            return {
            name: `Unable to add item to list.`
            };
        })
}
// RETREIVE
// how is this useful? 
function getItem(id){
    return db.one(`select id from groceryitems 
        where id = $1`, [id])
    .catch(err => {
        return {
        name: `Unable to retrieve item.`
        };
    })
}
// UPDATE
function updateItem(id, name, quantity){
    return db.result(`update groceryitems 
        set name=$2, quantity=$3
        where id=$1`, [id, name, quantity])
        .catch(err => {
            return {
            name: `Unable to update item.`
            };
        })
}
// DELETE
function deleteItem(id){
    return db.result('delete from groceryitems where id = $1', [id])

}

module.exports = {
    addItem,
    getItem,
    updateItem,
    deleteItem
}