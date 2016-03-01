define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/page.mustache'], function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var ContactView = Backbone.View.extend({
    el: $('.content'),
    data: {},

    initialize: function() {
      this.data = {
        title: 'Contact page',
        content: 'Contact me by this email@email.com '
      };
    },

    render: function(){
      var compiledTemplate = Mustache.render( pageTemplate, this.data );
      this.$el.html( compiledTemplate );
    }
  });
  return ContactView;
});
