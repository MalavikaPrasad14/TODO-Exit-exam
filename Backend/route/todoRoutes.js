const express = require('express')
const router = new express()
const Todo = require('../model/todoData');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//POST OPERATION
router.post('/addnew', async (req, res) => {
    console.log(req.body)
    try {
        const data = await Todo.create(req.body);
        res.status(200).send('Todo creation successful');

    } catch (error) {
        res.status(400).send('Todo creation Unsuccessful');
    }
});

//GET OPERATION
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).send(todos);
    }
    catch (err) {
        res.status(404).send('No tasks are found');
    }
});

//DELETE OPERATION
router.delete('/delete/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await Todo.findByIdAndDelete(id);
        res.status(200).send('Todo deletion successful');
    }
    catch(err){
        res.status(404).send('Todo deletion unsuccessful');
    }
});


module.exports = router;