const notes =[
    {
        title:"my next trip",
        body:"Awesome spain it is",
    },
    {
        title:"attend book session",
        body:"london arts",
    },
    {
        title:"book i am reading", 
        body:"safe harbour",
    },
    {
     title:"javascript conference" ,
     body:"amsterdam center, netherlands",  
    },
    {
        title:"formula1",
        body:"qatar rally",
    },
];
// console.log(notes[3].body);
// notes.forEach(function(item){
//     console.log(item.body);
// });

// const findNote = function(notesData,noteTitle){
//     return notesData.find(function(item){
//         return item.title === noteTitle;
//     });
// };
// console.log(findNote(notes,"attend book session"));

const findNote2 = function(notesData,noteTitle){
    return notesData.findIndex(function(item){
        return item.title === noteTitle;
    });
};
console.log(findNote2(notes,"attend book session"));