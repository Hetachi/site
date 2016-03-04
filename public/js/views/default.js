define(['jquery', 'underscore', 'backbone', 'mustache', 'text!/templates/page.mustache', 'text!/templates/head.mustache','text!/templates/mainmenu.mustache', 'text!/templates/error.mustache'], function ($, _, Backbone, Mustache, pageTemplate, headTemplate, menuTemplate, errorTemplate) {
  var DefaultView = Backbone.View.extend({
    el1: $('.content'),
    data1: {},

    el2: $('.sitetitle'),
    data2: {},

    el3: $('.mainindex'),
    data3: {},


    initialize: function() {
      this.data1 = {
          main: {
          title: 'Main',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          loadmore: '<a href="#loadmore">Load more </a>',
        },
          about: {
          title: 'Contact page',
          content: 'Lorem ipsum dolon culpa qui officia deserunt mollit anim id est laborum.',
          loadmore: '',
        },
          contact: {
          title: 'About me page',
          content: 'Lorem ipsum dolor.',
          loadmore: '',
        },
          loadmore: {
          title: 'Loaded more content here you go:',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          loadmore: '',
        },
          error: {
          title: 'Error 404 page not found',
          content: 'Where is my page?',
          loadmore: '',
        },
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
      },
        loadmore: {
        sitename: 'Main',
      },
      error: {
        sitename: 'Main / 404 Error',
      },
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
        },
          loadmore: {
          mainindex: 'Main',
        },
        error: {
          mainindex: '<a href="#">Main</a>',
      },
      };
    },



    render: function(pageType){
      if (debug === "TRUE") {
        var debugtext = pageType + " page loaded";
        console.log(debugtext);
      }
      var compiledTemplate = Mustache.render( pageTemplate, this.data1[pageType] );
      this.el1.html( compiledTemplate );

      var compiledHeadTemplate = Mustache.render( headTemplate, this.data2[pageType] );
      this.el2.html( compiledHeadTemplate );

      var compiledMenuTemplate = Mustache.render( menuTemplate, this.data3[pageType] );
      this.el3.html( compiledMenuTemplate );
    }
  });
  return DefaultView;
});
