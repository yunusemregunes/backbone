var AppRouter=Backbone.Router.extend({
    vent:_.extend({}, Backbone.Events),
    routes:{
        
        "login":"login",
        "signup":"signup",
        "cart":"cart",
        "*path":"defaultRoute"
    },
    login:function(){
        var view=new LoginView({el:"#container"});
        view.render();
    },
    signup:function(){
        var view=new SignupView({el:"#container"});
        view.render();
    },
    cart:function(){
        var view=new CartView({el:"#container"});
        view.render();
    },
    defaultRoute:function(path){
       
        var view=new HomepageView({"el":"#container","vent":this.vent});
        view.render();
        var productsView=new ProductsView({"el":"#products","vent":this.vent});
        productsView.render();
     

    }
});

var newRouter=new AppRouter();
Backbone.history.start();