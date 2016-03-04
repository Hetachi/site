define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/pageid.mustache'], function ($, _, Backbone, Mustache, PageModel, pageidTemplate) {
  var DefaultView = Backbone.View.extend({
    elPageid: $('.content'),
    collection: {},

    initialize: function() {
      this.collection = new PagesCollection();
      this.collection.on("sync", this.render, this);
      this.collection.fetch();
    },

    render: function(pageType){
      this.data = this.collection.toJSON();
      var compiledPagesTemplate = Mustache.render(pagesTemplate, this);
      this.elPageid.html(compiledPagesTemplate);
    }
  });
  return DefaultView;
});
