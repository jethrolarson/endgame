(function() {
  $(function() {
    var app;
    $('.meter').click(function() {
      return $(this).toggleClass('on');
    });
    return app = new window.UI({
      el: $('#content')[0]
    });
  });
}).call(this);
