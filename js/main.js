
const tossedCoin= new Promise((resolve,reject)=>{
     let tossed1= true

     if (tossed1==0)
        resolve()
     else
        reject()
 
    })

tossedCoin
  .then(()=> console.log("Hey you are win!"))
       
  .catch(()=> console.log("Hey you loss!")) 


