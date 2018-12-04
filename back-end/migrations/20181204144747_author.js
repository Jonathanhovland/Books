
exports.up = function(knex, Promise) {
    return knex.schema.createTable('author', function (table){
        table.increments()
        table.string('firstName')
        table.string('lastName')
        table.string('biography')
        table.string('portraitURL')
    }) 
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('author')
}
