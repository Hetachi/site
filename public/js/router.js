define(['jquery', 'underscore', 'backbone', 'views/default', 'views/about', 'views/contact'],
function ($, _, Backbone, DefaultView, AboutView, ContactView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      'about' : 'aboutAction',
      'contact' : 'contactAction',
      'loadmore' : 'loadmoreAction',
      '': 'mainAction',
      '*other': 'errorAction',
    }
  });

  var initialize = function () {
    var siteRouter = new SiteRouter();
    var defaultView = new DefaultView();
    siteRouter.on('route:errorAction', function(){
      defaultView.render('error');
    });
    siteRouter.on('route:contactAction', function(){
      defaultView.render('contact');
    });
    siteRouter.on('route:aboutAction', function(){
      defaultView.render('about');
    });
    siteRouter.on('route:mainAction', function(){
      defaultView.render('main');
    });
    siteRouter.on('route:loadmoreAction', function(){
      defaultView.render('loadmore');
    });
    Backbone.history.start();
  };


  return {
    initialize: initialize
  };
});
