var AppRouter=Backbone.Router.extend({

    routes:{
        "homepage":"homepage",
        "login":"login"
    },
    homepage:function(){
        var view=new HomepageView({el:"#container"});
        view.render();
    },
    login:function(){
        var view=new LoginView({el:"#container"});
        view.render(); 
    }

});


var newRouter=new AppRouter();
Backbone.history.start();