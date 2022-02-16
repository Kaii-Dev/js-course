const student = {
   firstName: 'le',
   lastName: 'nguyekhai',
   fullName: function(){
      console.log(`${this.firstName} ${this.lastName}`);
   }
}

const button = document.querySelector('.button');
button.addEventListener('click', student.fullName);