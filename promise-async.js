const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookie(){
   setTimeout(() =>{
      let op = " ";
      cookies.forEach((bisc) => {
         op = op + `<li>${bisc.name}</li>`;
      });
      document.body.innerHTML = op;
   },1000)
}


   // Progression 2: using setTimeout() - use 1000 units for time parameter


//Progression 3: Create a function to creat cookies and create an object of Promise.

function makeCookie(newCookie){
   return new Promise((resolve,reject) => {
      setTimeout(() => {
         cookies.push(newCookie);
         let error = true;
         if(error){
            resolve();
         } else{
            reject(`There are no such cookies`)
         }
      }, 2000);
   });
};

    // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

      
      // Progression 5: handling errors and adding new cookie to the list


// Progression 7: creating a new async function
async function ayay(){
   await makeCookie(newCookie);
   getCookie();
}
// calling the new async function
ayay();
