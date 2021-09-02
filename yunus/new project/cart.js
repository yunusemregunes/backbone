

var CartView=Backbone.View.extend({
    model: new Product(),
    tagName:"li",

    initialize: function(){
        this.cartTemplate=_.template($("#cart-template").html());
    },
    render:function(){
        console.log(this.model.get("price"));
        this.$el.html(this.cartTemplate(this.model.toJSON()));
        return this;
    }

});


var CartListView=Backbone.View.extend({
    model:cartList,
    el:$(".cartList"),

    initialize: function(){
        this.model.add("add",this.render,this);

    },
    render:function(){
        var self=this;
        this.$el.html("");
        $(".cartList").empty();

        _.each(this.model.toArray(),function(Product){
            console.log("aaa")
            self.$el.append((new CartView({model: Product})).render().$el);
        });
        return this;
    }

    

});