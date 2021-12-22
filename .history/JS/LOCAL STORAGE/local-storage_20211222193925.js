// LOCAL STORAGE : HỖ TRỢ LƯU TRỮ DỮ LIỆU TRÊN TRÌNH DUYỆT (aplication -> local storage)

   //1. localStorage.setItem("key", "value")
   localStorage.setItem("name", "khai le");

   //2. localStorage.getItem("key")
   console.log(localStorage.getItem('name'))

   //3. localStorage.removeItem("key")
   // localStorage.removeItem("name");

   //4 . localStorage.clear() : xoa tat ca du lieu

// vi du
   let arr = [1,2,3,4,5];
   localStorage.setItem("list", JSON.stringify(arr)); // muốn lưu dữ liệu thì phải chuyển về dạng json -> stringify
   const newArr = JSON.parse(localStorage.getItem('list'));
   console.log(typeof newArr);