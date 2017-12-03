window.addEventListener('DOMContentLoaded',function(){
/*	
	var postToModal = document.getElementsByClassName('cake-post-container');
	for(var i = 0; i < postToModal.length; i++){
		postToModal[i].addEventListener('click', openModal;
	}

	//var filterBoxSearch = document.getElementById('filter-search-button');
	//filterBoxSearch.addEventListener('click', filter;

	var seeFullRecipe = document.getElementById('close-modal');
	seeFullRecipe.addEventListener('click', modalToFullRecipe;

	var toFavoriteCake = document.getElementsByClassName('favoriteCake');
	for (var i = 0; i < toFavoriteCake.length; i++) {
		toFavoriteCake[i].addEventListener('click', sendToFavoriteCake;
	}
	
	var addRecipeToCartButton = document.getElementById('recipe-add-to-cart-button');
	addRecipeToCartButton.addEventListener('click', addRecipeToCart;

	var cancelButtonToClose = document.getElementsByClassName('cancelButton');
	for(var i = 0; i < cancelButtonToClose.length; i++){
		cancelButtonToClose[i].addEventListener('click', showHomePage;
	}
*/
	var addIngredient = document.getElementById('add-ingredient');
	addIngredient.addEventListener('click', addAnIngredient);

	var addPost = document.getElementById('add-post');
	//addPost.addEventListener('click', addAPost());


});


function openModal(){

}

function filter(){

}

function modalToFullRecipe(){

}

function sendToFavoriteCake(){

}

function addRecipeToCart(){

}

// function addAnIngredient(){
// 	var parser = new DOMParser();
// 	var ingredientTemplate = Handlebars.templates.ingredientsTemplate;
// 	var doc = parser.parseFromString(ingredientTemplate,"text/html");
// 	console.log(ingredientTemplate);
// 	var ingredientsDiv = document.getElementById('ingredients-labels');
// 	ingredientsDiv.insertAdjacentHTML('beforeend',doc);

// }

function addAnIngredient(){
	var quantity_boxes = document.getElementsByClassName('quantity-boxes');
	console.log(quantity_boxes);
}

function addAPost(){

}

