const courseAPI= 'http://localhost:3000/course';
   function start(){
      getCourses(renderCourses);
      handleCreateForm();
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
      const html = courses.map(function(course){
         return `
            <li>
               <h4>${course.name}</h4>
               <p>${course.description}</p>
            </li>
         `;
      });
      listCoursesBlock.innerHTML = html.join('');
   }

   function createCourse(data){
      fetch(courseAPI, )
   }

   function handleCreateForm(){
      const btn = document.querySelector('#create');
      btn.addEventListener('click', function(e){
         const name = document.querySelector('input[name="name"]').value;
         const description = document.querySelector('input[name="description"]').value;
      });
   }