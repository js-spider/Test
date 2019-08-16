

const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

// Checks for available update and returns an instance
const notifier = updateNotifier({pkg});

// Notify using the built-in convenience method
notifier.notify();

// `notifier.update` contains some useful info about the update
console.log(notifier.update);
if(notifier.update){
    console.log(11111111111111111111111111111)
}