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
	if(addIngredient){
		addIngredient.addEventListener('click', addAnIngredient);
	}

	var addPost = document.getElementById('add-post');
	//addPost.addEventListener('click', addAPost());

});
//<a href="http://localhost:3000/addcakeingredients">NEXT</a></button>

var nextButton = document.getElementsByClassName('nextButton');
console.log(nextButton.length);
for(var i = 0; i < nextButton.length; i++){
	if(nextButton[i]){
		nextButton[i].addEventListener('click', saveData);
	}
}
function saveData(){
	//var objToReturn{};
	var Title = document.getElementsByClassName('add-title-input');//Title[0].value
	var URL = document.getElementsByClassName('add-URL-input');//URL[0].value
	var flavorTag = document.getElementsByClassName('flavor-tags');//flavorTag[0].value
	var servingSize = document.getElementsByClassName('serving-size');//servingSize[0].value
	var prepTime = document.getElementsByClassName('prep-Time');//prepTime[0].value
	var cookTime = document.getElementsByClassName('cook-Time');//cookTime[0].value
	var dietaryTag = document.getElementsByClassName('dietary-tags');//dietaryTag[0].value
	console.log(dietaryTag[0].value);
}

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

