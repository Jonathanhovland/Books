const express = require("express")
const router = express.Router()
const knex = require("../db/connection")

//Get all route
router.get("/", (req, res) => {
    knex("author")
      .orderBy("id", "asc")
      .then(authors => {
        res.json({ authors })
      })
   })
   
   //Get one route
   router.get("/:id", (req, res, next) => {
    const id = req.params.id
   
    knex("author")
      .where("id", id)
      .then(author => {
        res.json({ author: author[0] })
      })
   })
   
   //Post
   
   router.post("/", (req, res, next) => {
    const body = req.body
   
    knex("author")
      .insert(body)
      .returning("*")
      .then(author => {
        res.json({ author: author[0] })
      })
   })
   
   //put
   router.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
   
    knex("author")
      .where("id", id)
      .update(body)
      .returning("*")
      .then(updatedAuthor => {
        res.json({ author: updatedAuthor[0] })
      })
   })
   
   //delete
   router.delete("/:id", (req, res) => {
    const id = req.params.id
   
    knex("author")
      .where("id", id)
      .delete()
      .returning("*")
      .then(deletedAuthor => {
        res.json({ authors: deletedAuthor[0] })
      })
   })

module.exports = router