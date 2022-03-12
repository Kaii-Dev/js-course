const users = [
   {
      id: 1,
      name: 'Tran Quang Huy',
   },
   {
      id: 2,
      name: 'Sơn ĐẶng',
   },
   {
      id: 3,
      name: 'Nguyen Van B',
   }
]

const comments = [
   {
      id:1,
      user_id:1,
      content : 'chưa ra video a ơi'
   }
   ,{
      id:2,
      user_id: 2,
      content: 'vừa nộp ra xong bạn ơi'
   }
]
//B1: lấy cmnt
//B2: lấy user
//B3: lấy ra user id tương ứng với user_id

//fake api

function getCmt(){
   return new Promise((resolve, reject) => {
      setTimeout(function(){
         resolve(comments)
      },1000)
   })
}

function getUserByIds(userIDs){
   return new Promise((resolve, reject) => {
      var result = users.filter((user)=>{
         return userIDs.includes(user.id)
      })
      resolve(result)
   })
}

getCmt()
   .then(function(comments){
      const user_ids = comments.map(function(comment){
         return comment.user_id;
      })
      return getUserByIds(user_ids) //đây là promise chain
         .then(function(users){
            return {
               user: users,
               cmt: com
            }
      })
   })
   .then(function (users){
      console.table(users);
   })


