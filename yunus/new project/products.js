var Product= Backbone.Model.extend({
    defaults:{
        name:"",
        categories:"",
        price:0,
        firstPrice:0,
        cartCount:0,
        productRank:0,
    }
});


var ProductList=Backbone.Collection.extend({
    model: Product
});

var product_list=new ProductList();
var cartList=new ProductList();
var filteredList=new ProductList();

var ProductView=Backbone.View.extend({
    model: new Product(),
    tagName:"div",
    initialize:function(){
        this.template=_.template($("#products-template").html());
    },
    events:{
        "click .add-btn":"addCart",
    },
    
    addCart:function(){
        console.log("listeye eklendi")
        var number=this.model.get("cartCount");
        this.model.set("cartCount",parseInt(number)+1);
        var newPrice=this.model.get("price");
        var firstPrice=this.model.get("firstPrice");
        var cartCount=this.model.get("cartCount");

        if(parseInt(cartCount)>=1){
            this.model.set({"price":parseFloat(firstPrice)});
        }
        else{
            var totalPrice=parseFloat(parseFloat(newPrice)+parseFloat(price));
            this.model.set({"price": totalPrice})
        }
        cartList.add(this.model);
    
    },

    render:function(){
    
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});

var ProductsView=Backbone.View.extend({
    model:product_list,
    filter: undefined,
    $el:$("#products"),


    initialize: function(options){
        console.log(options.el);
        var self=this;
        this.model.on("add",this.render,this);
        this.vent=options.vent;
        this.listenTo(this.vent,"filtered",this.filtered);
        this.listenTo(this.vent,"inputFilter",this.inputFilter);
    },
    filtered:function(filterName){
        var self = this;
        this.filter=filterName;
        console.log(filterName);
        this.render();
    },
    inputFilter:function(searchFilter){
        var self=this;
        this.searchFilter=searchFilter;
        this.render();
    },

    render: function(){
        var self=this;
        this.$el.html("");
      $("#products").empty();
      var filterName=this.filter;
      var searchFilter=this.searchFilter;
      console.log(searchFilter);

      if(filterName==undefined){
          $(".carousel").show();
      }
      else{
          $(".carousel").hide();
      }

      if(searchFilter==undefined){
        $(".carousel").show();
      }
      else{
        $(".carousel").hide();
      }

        _.each(this.model.toArray(),function(Product){
         
           if((filterName==undefined||filterName==Product.get("categories"))&&(searchFilter==undefined||Product.get("name").toLowerCase().includes(searchFilter))){
                self.$el.append((new ProductView({model: Product})).render().$el);
           }

        });
        return this;
    }
});



var product1=new Product({
    name:"Iphone 11 256GB",
    categories:"phone",
    price:8500,
    firstPrice:8500,
    productRank:1
});
var product2=new Product({
    name:"Iphone 12 256GB",
    categories:"phone",
    price:8500,
    firstPrice:8500,
    productRank:2
});

var product3=new Product({
    name:"Iphone 13 256GB",
    categories:"computer",
    price:8500,
    firstPrice:8500,
    productRank:3
});

var product4=new Product({
    name:"Iphone 11 256GB",
    price:8500,
    firstPrice:8500,
    productRank:4
});
var product5=new Product({
    name:"Iphone 11 256GB",
    price:8500,
    firstPrice:8500,
    productRank:5
});

var product6=new Product({
    name:"Iphone 11 256GB",
    price:8500,
    firstPrice:8500,
    productRank:6
});
var product7=new Product({
    name:"Iphone 11 256GB",
    price:8500,
    firstPrice:8500,
    productRank:6
});

var product8=new Product({
    name:"Iphone 11 256GB",
    price:8500,
    firstPrice:8500,
    productRank:6
});
var product9=new Product({
    name:"Iphone 11 256GB",
    price:8500,
    firstPrice:8500,
    productRank:6
});




product_list.add(product1);
product_list.add(product2);
product_list.add(product3);
product_list.add(product4);
product_list.add(product5);
product_list.add(product6);
product_list.add(product7);
product_list.add(product8);
product_list.add(product9);



$(document).ready(function(){

    $(".productButton").click(function(){
        console.log("Clicked");
    });

});




