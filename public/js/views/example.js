function () {
  var PageidView = Backbone.View.extend({
    elPageid: $('.content'),
    model: {},

    initialize: function(pid) {
      this.model = new  PageModel({id:pid});
      this.model.on("sync", this.render, this);
      this.model.fetch();
      console.log('initialize function');
    },

    render: function(pageType){
      this.data5 = this.model.toJSON();
      var compiledPageidTemplate = Mustache.render(pageidTemplate, this);
      this.elPageid.html(compiledPageidTemplate);
      console.log('render function');
    }
  });
  return PageidView;
});



var myView = new SomeView({
   model: someModel
  });

   $('body').append(myView.$el);
   myView.render();
