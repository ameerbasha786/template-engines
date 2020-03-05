var events = require("events");
var utils = require('util');

var person = function (name) {
    this.name = name
}

utils.inherits(person, events.EventEmitter)

var basha = new person("basha"),
    vinod = new person("vinod"),
    people = [basha, vinod];

people.forEach((man) => {
    console.log(man)
    man.on("speak", (mesg) => {
        console.log(mesg)
    })
})

basha.emit("speak", "hi how are u");
vinod.emit("speak", "iam fine how are you")