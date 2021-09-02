var User=Backbone.Model.extend({
    name:"",
    email:"",
    password:""
});


var Users=Backbone.Collection.extend({
    model:User
});

var newUserList= new Users();

var user1=new User({
    name:"Yunus Emre Güneş",
    email:"yunus.emregunes@hotmail.com",
    password:"1234"
});
var user2=new User({
    name:"Yunus",
    email:"yunus@hotmail.com",
    password:"12345"
});
newUserList.add(user1);
newUserList.add(user2);




