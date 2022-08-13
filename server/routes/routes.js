const app = require("express");

const router = app.Router();

const eventsController = require("../controllers/eventsController");
router.get("/events/all", eventsController.getAllEvents);

module.exports = router;
