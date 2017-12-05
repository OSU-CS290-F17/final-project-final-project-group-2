(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cakePost'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"cake-post-container\" cake-type = "
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + " dietary-tag = "
    + alias4(((helper = (helper = helpers.dietaryTag || (depth0 != null ? depth0.dietaryTag : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dietaryTag","hash":{},"data":data}) : helper)))
    + " serves = "
    + alias4(((helper = (helper = helpers.serves || (depth0 != null ? depth0.serves : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serves","hash":{},"data":data}) : helper)))
    + " prep-time = "
    + alias4(((helper = (helper = helpers.prepTime || (depth0 != null ? depth0.prepTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prepTime","hash":{},"data":data}) : helper)))
    + " cook-time = "
    + alias4(((helper = (helper = helpers.cookTime || (depth0 != null ? depth0.cookTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cookTime","hash":{},"data":data}) : helper)))
    + ">\r\n  <img src="
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data}) : helper)))
    + " class=\"cakeImg\" id="
    + alias4(((helper = (helper = helpers.cakeId || (depth0 != null ? depth0.cakeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cakeId","hash":{},"data":data}) : helper)))
    + ">\r\n</div>\r\n";
},"useData":true});
})();