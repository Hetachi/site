define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/page.mustache', 'text!/templates/head.mustache','text!/templates/mainmenu.mustache'], function ($, _, Backbone, Mustache, PageModel, pageTemplate, headTemplate, menuTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.content'),
    data: {},

    el2: $('.sitetitle'),
    data2: {},

    el3: $('.mainindex'),
    data3: {},

    initialize: function() {
      this.data = {
        main: {
        sitename: 'Main',
        title: 'Default page',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
        about: {
        sitename: 'Main / Contacts',
        title: 'Contact page',
        content: 'Lorem ipsum dolon culpa qui officia deserunt mollit anim id est laborum.'
      },
        contact: {
        sitename: 'Main / About',
        title: 'About me page',
        content: 'Lorem ipsum dolor.'
      }
      };
      this.data2 = {
        main: {
        sitename: 'Main',
      },
        about: {
        sitename: 'Main / About',
      },
        contact: {
        sitename: 'Main / Contacts',
      }
      };
      this.data3 = {
        main: {
        mainindex: 'Main',
      },
        about: {
        mainindex: '<a href="#">Main</a>',
      },
        contact: {
        mainindex: '<a href="#">Main</a>',
      }
      };
    },

    render: function(pageType){
      if (debug === "TRUE") {
        var debugtext = pageType + " page loaded";
        console.log(debugtext);
      }
      var compiledTemplate = Mustache.render( pageTemplate, this.data[pageType] );
      this.$el.html( compiledTemplate );

      var compiledHeadTemplate = Mustache.render( headTemplate, this.data2[pageType] );
      this.el2.html( compiledHeadTemplate );

      var compiledMenuTemplate = Mustache.render( menuTemplate, this.data3[pageType] );
      this.el3.html( compiledMenuTemplate );
    }
  });
  return DefaultView;
});
