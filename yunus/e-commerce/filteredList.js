

var FilteredListView=Backbone.View.extend({
    model:new Item(),
    tagName:"li",

    initialize: function(){
        this.filtered_template=_.template($("#item-template").html());
    },
    events: {
        "click #laptops":"laptopFilter",
        "click #phones":"phoneFilter"
    },
    laptopFilter: function(){
        if($(".laptopcheckbox")){
            DataTransferItemList.filter(function(e){
                if(e.get("categories")=="laptops"){
                    newFilteredList.add(e);
                    this.render();
                }
            });
        }
    },
    render: function(){
        this.$el.html(this.filtered_template(this.model.toJSON()));
        return this;
    }
});

var FilteredListsView=Backbone.View.extend({
    model: newFilteredList,
    el:$(".itemlist"),

    initialize: function(){
        var self=this;
        this.model.on("add",this.render,this);
    },
    render: function(){
        var self=this;
        this.$el.html("");
        $(".itemlist").empty();

        _.each(this.model.toArray(),function(Item){
            self.$el.append((new FilteredListView({model: Item})).render().$el);
        });
        return this;
    }

})