const listCoursesBlock = document.querySelector('#list-courses');
const courseAPI= 'http://localhost:3000/course';

   function start(){
      
   }

   start();

   //functions
   function getCourses(){
      fetch(courseAPI)
         .then(function(response){
            return response.json();
         });
         .then()
   }