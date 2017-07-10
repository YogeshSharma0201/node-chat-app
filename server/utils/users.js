class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    //return user that was removed
    var removedUser = this.users.filter((user)=>user.id===id)[0];
    this.users = this.users.filter((user)=>user.id!==id);
    return removedUser;
  }

  getUser (id) {
    return this.users.filter((user)=>user.id===id)[0];
  }

  getUserList (room) {
    var users = this.users.filter((user)=>user.room === room);
    var namesArray = users.map((user)=>user.name);
    return namesArray;
  }
}



// class Person {
//   constructor (name, age) {
//     console.log(name, age);
//   }
//
//   getUserDescription () {
//     return `${this.name} is 1 year(s) old.`;
//   }
// }
//
// var me = new Person('Yogesh', 25);

module.exports = {Users};
