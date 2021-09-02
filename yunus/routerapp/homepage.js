var Item=Backbone.Model.extend({
defaults:{
    email:"",
    password:""
}
});


var Items= Backbone.Collection.extend({
    model: Item
});

var ItemList=new Items();


var HomepageView=Backbone.View.extend({
    model:new Item(),
    initialize:function(){
        this.template=_.template($("#homepage-template").html());
    },

    render:function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});


var LoginView= Backbone.View.extend({
    model: new Item(),
    initialize: function(){
        this.logintemplate=_.template($("#login-template").html());
    },
    render: function(){

        this.$el.html(this.logintemplate(this.model.toJSON()));
        return this;

    }
});