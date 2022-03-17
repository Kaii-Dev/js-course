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
               <button>&time;</button>
            </li>
         `;
      });
      listCoursesBlock.innerHTML = html.join('');
   }

   function createCourse(data, callback){
      const option =  {
         method: 'POST',
         headers :{
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data),
      }
      fetch(courseAPI, option)
         .then((response)=>{
            return response.json();
         })
         .then(callback);
   }

   function handleCreateForm(){
      const btn = document.querySelector('#create');
      btn.addEventListener('click', function(e){
         const name = document.querySelector('input[name="name"]').value;
         const description = document.querySelector('input[name="description"]').value;
         const formData = {
            name: name,
            description: description
         }
         createCourse(formData, function(){
            getCourses(renderCourses); // render lai ca list moi
         })
      });
   }