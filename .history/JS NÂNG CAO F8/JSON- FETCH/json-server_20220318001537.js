//FAKE API = MOCK API
// CRUD API : create, read, update, delete
const courseApi = 'http://localhost:3000/course';

fetch(courseApi)
   .then(function(response){
      return response.json();
   })
   .then(function(courses){
      console.log(courses);
   });