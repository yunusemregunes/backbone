var User=Backbone.Model.extend({
    defaults:{
        name:"",
        email:"",
        password:""
    }
});
var newUser=new User({
    name:"Yunus",
    email:"yunus@hotmail.com",
    password:"1234"
});
var newUser1=new User({
    name:"Yunuss",
    email:"yunusa@hotmail.com",
    password:"12345"
});

var Users=Backbone.Collection.extend({
    model: User
});

var userList=new Users();

userList.add(newUser)


var LoginView= Backbone.View.extend({
    model: new User(),
    initialize: function(){
        this.logintemplate=_.template($("#login-template").html());
    },
    events: function(){
        "click #login","login"
    },
    login:function(){
        product_list.array.forEach(element => {
            console.log("aaa");
            if(element.get("email")==$("#email").val()&&element.get("password")===$("#password")){
                console.log("giriş başarılı");
            }
            
        });
    },
    render: function(){

        this.$el.html(this.logintemplate(this.model.toJSON()));
        return this;

    }
});

var SignupView=Backbone.View.extend({
    model: new User(),
    initialize:function(){
        this.signuptemplate=_.template($("#signup-template").html());
    },

    render:function(){
        this.$el.html(this.signuptemplate(this.model.toJSON()));
        return this;
    }
});

var loginView=new LoginView();