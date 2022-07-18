//array--> is a collection of items
//To declare an array, define the variable type with square brackets:[]
const notes =["note1","note2","note3"]
console.log(notes[1]);
// notes[1]= "something else";

notes.forEach(function(item){
    console.log(item);
});
 

    notes.forEach(function(item,index){
        console.log(`${index} -- ${item}`);
});
notes.forEach(function(note,position){
    console.log(note);
    console.log(position);
});

let index = notes.findIndex(function(note){
    return note === "note1";
});
console.log(index);