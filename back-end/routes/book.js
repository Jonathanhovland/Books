const express = require("express")
const router = express.Router()
const knex = require("../db/connection")

//Get all route
router.get("/", (req, res) => {
    knex("book")
      .orderBy("id", "asc")
      .then(books => {
        res.json({ books })
      })
   })
   
   //Get one route
   router.get("/:id", (req, res, next) => {
    const id = req.params.id
   
    knex("book")
      .where("id", id)
      .then(book => {
        res.json({ book: book[0] })
      })
   })
   
   //Post
   
   router.post("/", (req, res, next) => {
    const body = req.body
   
    knex("book")
      .insert(body)
      .returning("*")
      .then(book => {
        res.json({ book: book[0] })
      })
   })
   
   //put
   router.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
   
    knex("book")
      .where("id", id)
      .update(body)
      .returning("*")
      .then(updatedBook => {
        res.json({ book: updatedBook[0] })
      })
   })
   
   //delete
   router.delete("/:id", (req, res) => {
    const id = req.params.id
   
    knex("book")
      .where("id", id)
      .delete()
      .returning("*")
      .then(deletedBook => {
        res.json({ books: deletedBook[0] })
      })
   })


module.exports = router