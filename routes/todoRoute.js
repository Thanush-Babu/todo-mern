const router = require("express").Router();
const todoController = require("../controllers/todoControllers");

router.get("/gettodo", todoController.getAllTodos);
router.post("/addtodo", todoController.createTodo);

module.exports = router;
