var HomepageView=Backbone.View.extend({
    initialize:function(options){
        this.homepagetemplate=_.template($("#homepage-template").html());
        this.vent=options.vent;
    },

    events:{
        "click .categoriesbtn":"filter",
        "click .searchButton":"searchFilter"
    },
    searchFilter:function(e){
    var searchFilter=$(".findInput").val();
    console.log(searchFilter);
    this.vent.trigger("inputFilter",searchFilter);

    },
    filter:function(e){
        var filterName=e.target.id;
        console.log(filterName);
        this.vent.trigger("filtered",filterName);
    
   
    },
    /*render:function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },*/
    render:function(){
        
        this.$el.html(this.homepagetemplate);
        return this;
    }
});

/*
var FilteredView=Backbone.View.extend({
   model:new Product(),
   tagName:"div",

   initialize:function(){
       this.template=_.template($("#products-template").html());
    }, 
    events:{
        "click #phones":"phoneFilter"
    },
    phoneFilter:function(){
        console.log("aaaaaaa");
        $(".carousel").hide();
        $("#products").hide();

         product_list.forEach(element => {
           if(element.get("categories")=="phone"){
               filteredList.add(element);
           }
        });
    },
    render:function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var FilteredListView=Backbone.View.extend({
    model:filteredList,
    el:$("#filteredProducts"),
    initialize:function(){
        var self=this;
        this.model.on("add",this.render,this);
    },
    render:function(){
        var self=this;
        this.$el.html("");
        $("#filteredProducts").empty();
        
        _.each(this.model.toArray(),function(Products){
            self.$el.append((new FilteredView({model:Product})).render().$el);
        });
        return this;
    }

});
*/





