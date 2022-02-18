// từ khóa this sẽ đề cập về 1 phương thức mà nó thuộc về
// cách nhận biết : nhìn thằng nào chấm tới phương thức thì thằng đó là từ khóa this
//arrow fn không có context không có this

//ví dụ 1
const iphone7 ={
    //thuộc tính - property
    name: 'iphone7',
    color: 'white',
    weight: 300,
    //phương thức - method
    takePhoto(){
        console.log('take photo');
        // console.log(this);
    },
    objChild :{
      name: 'child object',
        methodChild(){
          console.log(this);
        }
    }
}
console.log(iphone7.takePhoto()); // ở đây this = iphone7
iphone7.objChild.methodChild(); // ở đây this = objChild


//ví dụ 2
function Car(name, color, weight){
    this.name = name;
    this.color = color;
    this.weight = weight;
    // khi thuộc tính là một hàm và thuộc một phương thức thì nó là phương thức
    this.run = function(){ 
        console.log('running', this);
    }
}

const mercedes = new Car('mercedes', 'red', 300);
console.log(mercedes.run()); // ở đây this = mercedes


//ví dụ 3
const button = document.querySelector('button');
button.onclick= function(){
  console.dir(this.innerText); // this sẽ đề cập về button
}