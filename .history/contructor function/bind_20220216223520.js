const student = {
   firstName: 'le',
   lastName: 'nguyen khai',
   fullName: function(){
      console.log(`${this.firstName} ${this.lastName}`);
   }
}
 //bind : b
const button = document.querySelector('.button');
button.addEventListener('click', student.fullName.bind(student));