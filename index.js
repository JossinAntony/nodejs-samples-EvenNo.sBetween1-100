const myfs = require('fs');

for(var i = 1; i <= 500; i++){
    if((i % 2) == 0){
        console.log(i);

        myfs.appendFile('EvenNos1-500.txt', (i+'\n'), (e)=>{
            if(e){
                throw e;
            }
        })
    }

}

