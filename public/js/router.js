define(['jquery', 'underscore', 'backbone', 'views/default', 'views/about', 'views/contact', 'views/pages'],
function ($, _, Backbone, DefaultView, AboutView, ContactView, MultiPageView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      'about' : 'aboutAction',
      'contact' : 'contactAction',
      'loadmore' : 'loadmoreAction',
      '' : 'mainAction',
      '*other': 'errorAction',
    }
  });

  var initialize = function () {
    var siteRouter = new SiteRouter();
    var defaultView = new DefaultView();
    var pagesView = new MultiPageView();
    siteRouter.on('route:loadmoreAction', function(){
      pagesView.render('loadmore');
    });
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
    Backbone.history.start();
  };


  return {
    initialize: initialize
  };
});
