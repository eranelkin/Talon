const mockEvents = require("./data");

const fetchEventsData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockEvents);
    }, 1500);
  });
};

function EventsController() {
  this.getAllEvents = async (req, res, next) => {
    try {
      const events = await fetchEventsData();

      events.sort(function (a, b) {
        return new Date(b.time) - new Date(a.time);
      });
      return res.send(events);
    } catch (error) {
      console.log("#Error Log : ", error);
      res.status(500).send({ error: "Something went wrong!" });
    }
  };
}

module.exports = new EventsController();
