import express from 'express';

const router = express.Router();

let tasks = [
  {
    id: 1,
    title: 'First Task',
    task: 'Programming'
  },
  {
    id: 2,
    title: 'Second Task',
    task: 'Coding'
  },
  {
    id: 3,
    title: 'Thierd Task',
    task: 'Playing Games'
  }
];

// Utilits
const findTaskById = (id) => 
{
  return tasks.find(task => task.id === parseInt(id));
};

// GET Method
router.get('/', (req, res) =>
  {
    if(tasks.length === 0){return res.status(404).json({ msg: 'No Tasks Found' })};

    res.send(tasks);
  });

// GET Method by ID
router.get('/:id', (req, res) => 
  {
    const task = findTaskById(req.params.id);
    if(!task){return res.status(404).json({ msg: 'Task Not Found' })};

    res.status(200).json(task);
  });

// POST Method
router.post('/', (req, res) =>
  {
    if(typeof req.body.title !== 'string' || typeof req.body.task !== 'string')
      {
        return res.status(400).json({ msg: 'Data Type Is Not Valid' });
      };
    
    const newTask = 
      {
        id: tasks.length + 1,
        title: req.body.title,
        task: req.body.task
      };

    tasks.push(newTask);

    console.log(tasks);
    res.status(201).json({ 'task created': newTask });
  });

// PUT Method
router.put('/:id', (req, res) => 
  {
    const task = findTaskById(req.params.id);
    if(!task)
      {
        return res.status(404).json({ msg: 'Task Not Found' });
      } else if(typeof req.body.title !== 'string' && typeof req.body.task !== 'string')
      {
        return res.status(400).json({ msg: 'Data Type Is Not Valid' });
      } else if(!req.body.task)
      {
        task.title = req.body.title;
      } else if(!req.body.title)
      {
        task.task = req.body.task;
      } else
      {
        task.title = req.body.title;
        task.task = req.body.task;
      };

    console.log(tasks);
    res.status(200).json({ 'Task Updated': task });
  });

// DELETE Method
router.delete('/:id', (req, res) =>
  {
    const task = findTaskById(req.params.id);
    const index = tasks.findIndex(task => task.id === parseInt(req.params.id));

    if(!task){return res.status(404).json({ msg: 'Task Not Found' })};

    tasks.splice(index, 1);
    console.log(tasks);

    res.status(200).json({ "task removed": task });
  });

export default router;