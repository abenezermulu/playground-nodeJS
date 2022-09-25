// EventEmitter is not a function; it is a CLASS. 
const EventEmitter = require('events'); 
const emitter = new EventEmitter(); 

// Registering this listener to listen when the above event is emitted. 
// '.on()' is equivalent to '.addListener()' method in the emitter object.
emitter.on('messageLogged', (args) => {
    console.log("Listener called.... ", args); 
});

// After this event is emitted a function in the event listener (which is the one on top) 
// listens to this event, and execute its function. 
// We can also pass data to the listener. 
emitter.emit('messageLogged', {id: 1, url: 'http://...'}); 

