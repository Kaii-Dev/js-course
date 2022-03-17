const courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
   .then(response => response.json())