define(['jquery', 'underscore', 'backbone', 'views/default', 'views/collections', 'views/pages', 'views/form'],
function ($, _, Backbone, DefaultView, MultiPageView, PageidView, FormView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      'about' : 'aboutAction',
      'contact' : 'contactAction',
      'page/:id' : 'pageidAction',
      'loadmore' : 'loadmoreAction',
      '' : 'mainAction',
      'form' : 'formAction',
      '*other': 'errorAction',
    }
  });

  var initialize = function () {
    var siteRouter = new SiteRouter();
    var defaultView = new DefaultView();
    siteRouter.on('route:loadmoreAction', function(){
        var pagesView = new MultiPageView();
    });
    siteRouter.on('route:pageidAction', function(id){
        var pageidView = new PageidView(id);
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
    siteRouter.on('route:formAction', function(){
        var formView = new FormView();
    });
    Backbone.history.start();
  };


  return {
    initialize: initialize
  };
});
