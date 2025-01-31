// const fruits=['Papaya','Dragon Fruit','Watermelon','Apple','Kiwi',11,12,13,14,15];
// const veggies= new Array("spniach","carrot")
// const veggies1=["spniach","carrot"]
// // console.log(fruits);
// // console.log(fruits.length);
// // console.log(fruits[3]);

// //insert data into array in the end

// const cars=['Bugatti','Rolls-Royce','Maybach','Porsche','Audi','Scorpio']
// // cars.push("Aston")
// // console.log(cars);
// // cars.unshift("Lamborghini");
// // console.log(cars)


// cars.splice(-2);
// console.log(cars);


// const studentsMarks=[11,12,13,14,15];
// for (let i=0;i<studentsMarks.length;i++)
// {
//     console.log(studentsMarks[i]);    
// }

// const mapData=studentsMarks.map((marks)=>{
//    return marks;
    
// })
// console.log(mapData);


// const forEachData=studentsMarks.forEach((marks)=>{
//     return marks;
    
// })
// // console.log(forEachData);

// const studentsMarks=[99,78,99,67,56];

// const HighestMarks=studentsMarks.map((highmarks)=>{
//     return highmarks>90;
// })
// console.log(HighestMarks);

//////Objects


// const studentDetails={
//     s_name:"Peter Parker",
//     s_uid:48,
//     s_quality:'Spideman',
//     s_color:'Blue n Red'
// }

// console.log(studentDetails.s_name);
// const data=["data1","data2","data3"];
// data.length----//property
// data.push()



const studentsDetails=[
    {s_name:"Peter Parker",s_uid:48,s_quality:'Spideman',s_color:'Blue n Red'},
    {s_name:"Thor Odinson",s_uid:48,s_quality:'God of Thunder',s_color:'Blue n Red'},
    {s_name:"Loki Odinson",s_uid:48,s_quality:'God of Mischief',s_color:'Silver, green'},
    {s_name:"Banner Bruce",s_uid:48,s_quality:'Hulk',s_color:'Green'},
    {s_name:"Tony Stark",s_uid:48,s_quality:'Iron Man',s_color:'Golden n Red'}
]


studentsDetails.forEach((student)=>{
    console.log(student.s_name);
    
})




