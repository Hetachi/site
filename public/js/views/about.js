define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/page.mustache'], function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var AboutView = Backbone.View.extend({
    el: $('.content'),
    data: {},

    initialize: function() {
      this.data = {
        title : "About me page",
        something : "This is some other huge text",
      };
    },

    render: function(){
      var compiledTemplate = Mustache.render( pageTemplate, this.data );
      this.$el.html( compiledTemplate );
    }
  });
  return AboutView;
});
