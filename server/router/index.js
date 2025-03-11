var Router = require("router");
var router = Router();
var Controller = require("../controller/controller.js");

console.log("here index");

router.get("/", Controller.get);
router.post("/",Controller.post);
router.get('/export', Controller.exportToExcel);
router.post('/register',Controller.registerEmail);
router.post('/authenticate',Controller.authenticateEmail);
module.exports = router;