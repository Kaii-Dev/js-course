const listCoursesBlock = document.querySelector('#list-courses');
const courseAPI= 'http://localhost:3000/course';

   function start(){
      getCourses(function(courses){));
   }

   start();

   //functions
   function getCourses(callback){
      fetch(courseAPI)
         .then(function(response){
            return response.json();
         })
         .then(callback)
   }