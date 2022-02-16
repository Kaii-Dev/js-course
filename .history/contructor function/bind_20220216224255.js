const student = {
   firstName: 'le',
   lastName: 'nguyen khai',
   fullName: function(){
      console.log(`${this.firstName} ${this.lastName}`);
   }
}
 //bind : trả về hàm mới với this mới là object được truyền vào, có thể nhận các đối số như hàm ban đầu
const button = document.querySelector('.button');
button.addEventListener('click', student.fullName.bind(student)); // bind giúp ràng buộc this trong fullname trở về student. vì nếu chỉ có student.fullName thì thằng this nó sẽ tự hiểu là thuộc về dom button nên kết quả sẽ ra undefined.

console.log(object);