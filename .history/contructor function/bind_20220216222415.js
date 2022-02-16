const student = {
   firstName: 'le',
   lastName: 'khai',
   fullName: function(){
      console.log(`${this.firstName} ${this.lastName}`);
   }
}

const button = document.querySelector('.button');
button