console.log("test");
var func = async () => {
  for (let i = 0; i < 1000; i++) {
    console.log("Num :- ", i);
  }
};
console.log("over");
func();
