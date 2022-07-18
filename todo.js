const todo = ["order water","clean compound","buy food"];
todo.forEach(function(todo,index){
    console.log(`${index}--${todo}`);
});

todo[1 ] = "buy tent"
todo.forEach(function(todo,index){
    const num =index + 1;
    console.log(`${num}--${todo}`)
});

let index = todo.findIndex(function(todo){
    return todo === "order pizza"
});
console.log(index);