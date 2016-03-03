define(['jquery', 'underscore', 'backbone', 'mustache', '/js/collections/pages.js','text!/templates/pages.mustache'], function ($, _, Backbone, Mustache, PagesCollection, pagesTemplate) {
  var MultiPageView = Backbone.View.extend({
    elPages: $('.content'),
    collection: {},

    initialize: function() {
      this.collection = new PagesCollection();
      this.collection.on("sync", this.render, this);
      this.collection.fetch();
    },

    render: function(pageType){
      this.data = this.collection.toJSON();
      var compiledPagesTemplate = Mustache.render(pagesTemplate, this);
      this.elPages.html(compiledPagesTemplate);
    }
  });
  return MultiPageView;
});
