const student = {
   firstName: 'le',
   lastName: 'nguyen khai',
   fullName: function(){
      console.log(`${this.firstName} ${this.lastName}`);
   }
}
 //bind : 
const button = document.querySelector('.button');
button.addEventListener('click', student.fullName.bind(student)); // bind giúp ràng buộc thằng this trong fullname trở về student. vì nếu không có bind thì this 