define(['jquery', 'underscore', 'backbone', 'mustache', '/js/collections/pages.js', 'text!/templates/collection.mustache'], function ($, _, Backbone, Mustache, PagesCollection, collectionTemplate) {
  var MultiPageView = Backbone.View.extend({
    elPages: $('.content'),
    collection: {},

    events: {
      "click .delete" : "deleteAction"
    },
    initialize: function() {
      this.collection = new  PagesCollection();
      this.collection.on("sync", this.render, this);
      this.collection.fetch();
      console.log('Pages collection set Multiple');
    },

    deleteAction: function(e) {
    var pid = $(e.target).data('item');
    this.collection.remove(pid);
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
