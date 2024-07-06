const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const app = express()

const PORT = 3300

app.use(express.json())

app.post('/todo', async(req,res) => {
    const createdPayload = req.body
    console.log("createPayLoad",createdPayload)
    const parsedPayload = createTodo.safeParse(createdPayload)
    console.log("parsedPayload",parsedPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "You sent the wrong inputs"
        })
        return 
    }
    // adding it to db
    await todo.create({
        title: createdPayload.title,
        description: createdPayload.description,
        completed: false
    })

    res.json({
        msg: 'todo created'
    })
})

app.get("/todo", async(req, res) => {
    const todos = await todo.find({})
    
    res.json({
        todos
    })
 });

app.put("/completed", async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
      res.status(411).json({
        message: "You sent the wrong inputs",
      });
      return;
    }
    await todo.update({
        _id: createdPayload.id
    }, {
        completed: true
    })

    res.json({
        msg: "todo marked as completed"
    })
});

app.listen(PORT, () => {
    console.log(`app is running on the port ${PORT}`)
})
