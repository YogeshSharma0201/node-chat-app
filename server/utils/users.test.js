const expect = require('expect');

const {Users} = require('./users');

describe('Users', ()=>{
  var users;

  beforeEach(()=>{
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'node course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'react course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'node course'
    }];
  });

  it('should add new users', ()=>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'Yogesh',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', ()=>{
    var removedUser = users.removeUser('2');

    expect(users.users.length).toBe(2);
    expect(removedUser.id).toBe('2');
  });

  it('should not remove user', ()=>{
    var removedUser = users.removeUser('4');

    expect(users.users.length).toBe(3);
    expect(removedUser).toNotExist();
  });

  it('should find user', ()=> {
    var User = users.getUser('1');

    expect(User).toEqual(users.users[0]);
  });

  it('should not find user', ()=>{
    var User = users.getUser('4');

    expect(User).toNotExist();
  });

  it('should return names for node course', ()=>{
    var userList = users.getUserList('node course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', ()=>{
    var userList = users.getUserList('react course');
    expect(userList).toEqual(['Jen']);
  });

});
