const events = require("events");

const event = new events.EventEmitter();

event.on("some_event", () => {
  console.log("some_event事件触发");
});

setTimeout(() => {
  event.emit("some_event");
}, 1500);
