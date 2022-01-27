const {Router} = require('express');
// const { route } = require('express/lib/application');

const controller = require('./controller');

const router = Router()

router.get('/', controller.getStudents)
router.post('/', controller.addStudent)
router.get('/:id', controller.getStudentById)
router.delete('/:id', controller.removeStudent)
router.put('/:id', controller.updateStudent);

module.exports = router;