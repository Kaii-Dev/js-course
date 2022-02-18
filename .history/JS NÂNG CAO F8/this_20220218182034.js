// từ khóa this sẽ đề cập về 1 phương thức mà nó thuộc về
// cách nhận biết : nhìn thằng nào chấm tới phương thức thì thằng đó là từ khóa this
const iphone7 ={
    //thuộc tính - property
  name: 'iphone7',
  color: 'white',
  weight: 300,
    //phương thức - method
    takePhoto(){
        console.log('take photo');
        // console.log(this);
    }
}
console.log(iphone7.takePhoto()); // ở đây this 

