console.log("hello");

for(let i=0;i<100;i++) {
  console.log("inside for loop");
}

// Microtask queue - Highest priortiy
process.nextTick(function() {
  console.log("Inside the next tick is the highest priority and would be executed first");
});

console.log("end");