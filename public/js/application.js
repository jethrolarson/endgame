(function() {
  $(function() {
    var app;
    $('.meter').click(function() {
      return $(this).toggleClass('on');
    });
    return app = new views.UI({
      el: $('#page')[0]
    });
  });
}).call(this);
