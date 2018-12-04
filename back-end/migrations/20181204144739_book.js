
exports.up = function(knex, Promise) {
  
    return knex.schema.createTable('book', function (table){
        table.increments()
        table.string('bookTitle')
        table.string('bookGenre')
        table.text('bookDescription')
        table.string('bookCoverURL')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('book')
}
