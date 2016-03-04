define(['jquery', 'underscore', 'backbone', 'mustache', '/js/collections/pages.js', 'text!/templates/collection.mustache'], function ($, _, Backbone, Mustache, PagesCollection, collectionTemplate) {
  var MultiPageView = Backbone.View.extend({
    elPages: $('.content'),
    collection: {},

    initialize: function() {
      this.collection = new  PagesCollection();
      this.collection.on("sync", this.render, this);
      this.collection.fetch();
      console.log('Pages collection set Multiple');
    },

    render: function(pageType){
      this.data4 = this.collection.toJSON();
      var compiledPagesTemplate = Mustache.render(collectionTemplate, this);
      this.elPages.html(compiledPagesTemplate);
      console.log('Rendered  Multiple');
    }
  });
  return MultiPageView;
});
