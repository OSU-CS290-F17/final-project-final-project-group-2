$(document).ready(function(){
  var source = $("#header-template").html();
  var template = Handlebars.compile(source);

  var context = {
    title: "Cake Catalog",
  }

  var el_html = template(context);
}

$("#").html.el_html;



)
