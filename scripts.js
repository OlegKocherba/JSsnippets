
//ARRAY REDUCE

 [1,2,3,4,5]
 .map(item => item * 2)
 .filter(item => item > 5);

 [1,2,3,4,5,1].reduce((acc,item) => item*2 > 5 ? acc.concat([item*2]) : acc,[]);
