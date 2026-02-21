<<<<<<< HEAD
const Task = require('../models/Task'); const getTasks = async (req, res) => { try { const tasks = await Task.find({ userId: req.user.id }); res.json(tasks); } catch (error) { res.status(500).json({ message: error.message });
} };

const addTask = async (req, res) => { const { title, description, deadline } = req.body; try { const task = await Task.create({ userId: req.user.id, title, description, deadline }); res.status(201).json(task); } catch (error) { res.status(500).json({ message: error.message }); } };

const updateTask = async (req, res) => { const { title, description, completed, deadline } = req.body; try { const task = await Task.findById(req.params.id); if (!task) return res.status(404).json({ message: 'Task not found' }); task.title = title || task.title; task.description = description || task.description; task.completed = completed ?? task.completed; task.deadline = deadline || task.deadline; const updatedTask = await task.save(); res.json(updatedTask); } catch (error) { res.status(500).json({ message: error.message }); } };

const deleteTask = async (req, res) => {
try { const task = await Task.findById(req.params.id); if (!task) return res.status(404).json({ message: 'Task not found' }); await task.remove(); res.json({ message: 'Task deleted' }); } catch (error) { res.status(500).json({ message: error.message }); } }; module.exports = { getTasks, addTask, updateTask, deleteTask };



//I have added the CRUD tasks
=======
const Task = require('../models/Task');
const getTasks = async(req, res) => {
    try{
        const tasks = await Task.find({UserId:req.UserId});
        res.json(tasks);
    }catch(error){
        res.status(500).json({message:error.messages});
    }

};

const addTask = async(req,res)=> {
    const{title, description, deadline} = req.body;
    try{
        const task = await Task.create({UserId:req.User.id, title, description, deadline});
        res.status(201).json(task);

    }catch(error){
        res.status(500).json({message:error.message});
    }
};

// Update Task
const updateTask = async (req, res) => {
  const { title, description, completed, deadline } = req.body;

  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Update only if value is provided
    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.completed = completed ?? task.completed;
    task.deadline = deadline ?? task.deadline;

    const updatedTask = await task.save();

    res.json(updatedTask);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete Task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.deleteOne();

    res.json({ message: "Task deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
>>>>>>> c67250336a5572951c3e1649b71e0bbcc0b12bc0
