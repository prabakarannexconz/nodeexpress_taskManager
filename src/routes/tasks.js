const express = require('express')
const router = express.Router()

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  newApi,

} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask).get(newApi)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
router.route('/api/1').get(newApi)

module.exports = router
