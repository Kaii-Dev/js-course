const courseAPI= 'http://localhost:3000/course';

   function start(){
      getCourses(renderCourses);
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

   function renderCourses(courses){
      const listCoursesBlock = document.querySelector('#list-courses');
   }