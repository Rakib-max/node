// const fs = require('fs');

// fs.readFile('demo1.html', 'utf-8', function(err, data){
//     if(err){
//         console.log(err);
//     }else {
//         console.log(data);
//     }
// });

const fs2 = require('fs');

fs2.writeFile('demo2.txt', 'i am going to share something with you in toadys class that all about', function(err){
    if(err){
        console.log(err);
    }else {
        console.log('success');
    }
});
