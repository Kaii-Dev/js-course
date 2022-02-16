//bind (trói buộc) : trả về hàm mới với this mới là object được truyền vào, có thể nhận các đối số như hàm ban đầu
this.firstName = 'an';
this.lastName  = 'thao'

const student = {
   firstName: 'le',
   lastName: 'nguyen khai',
   fullName: function(){
      return (`${this.firstName} ${this.lastName}`);
   }
}

//case 1:
console.log(student.fullName());

//case 2:
const getStudentName1 = student.fullName.bind(student);
const getStudentName2 = student.fullName.bind();
console.log(getStudentName1());
console.log(getStudentName2());

//ứng dụng1

const teacher = {
   firstName: 'dang',
   lastName : 'son',
   getFullName(){
      console.log(`${this.firstName} ${this.lastName}`);
   }
}

const button = document.querySelector('.button');
button.addEventListener('click', teacher.getFullName.bind(teacher)); // teacher.fullname là fn mà lúc này được gán cho method button khác thì this của teacher.fullname lại trỏ về button mà button.firstName và button.lastName ko có nên là undefined
teacher.getFullName();


//ứng dụng2
function log(level , time, mess){
   console.log(`${level} ${time} ${mess}`);
}

const logToday = log.bind(null, 'Error', 'today');
