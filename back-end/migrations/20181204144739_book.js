
exports.up = function(knex, Promise) {
  
    return knex.schema.createTable('book', function (table){
        table.increments()
        table.string('name')
        table.string('imageUrl')
        table.string('name')
        table.string('imageUrl')
    })

};

exports.down = function(knex, Promise) {
  
};
