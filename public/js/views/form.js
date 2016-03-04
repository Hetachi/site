define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/form.mustache'], function ($, _, Backbone, Mustache, PageModel, formTemplate) {
  var FormView = Backbone.View.extend({
    el: $('.submit--form'),
    model: {},

    events: {
      "click #savebtn" : "saveAction"
    },

    initialize: function() {
      this.render();
    },

    saveAction: function(e){
        e.preventDefault();
        var newTitle = $('#title').val();
        var newContent = $('#content').val();
        var pageModel = new PageModel({

          title:newTitle,
          content:newContent,
        });
        pageModel.save();
    },
    render: function(){
      var compiledFormTemplate = Mustache.render(formTemplate, this);
      this.$el.html(compiledFormTemplate);
      console.log('render function');
    }
  });
  return FormView;
});
