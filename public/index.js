
function showHomePage(){
	var postRequest = new XMLHttpRequest();
	var URLFinal = "/";
	postRequest.open('POST', URLFinal);
	console.log('Clicked');
}

window.addEventListener('DOMContentLoaded',function(){
	var homePageButton = document.getElementById('home');
	homePageButton.addEventListener('click', showHomePage());

	var addCakePageButton = document.getElementById('addCake');
	addCakePageButton.addEventListener('click', showAddPage());

	var cakeCartPageButton = document.getElementById('cakeCart');
	cakeCartPageButton.addEventListener('click', showCakeCartPage());

	var infoAuthorPageButton = document.getElementById('infoAuthor');
	infoAuthorPageButton.addEventListener('click', showInfoAuthorPage());

	var postToModal = document.getElementsByClassName('cake-post-container');
	for(var i = 0; i < posts.length; i++){
		postToModal[i].addEventListener('click', openModal());
	}

	var filterBoxSearch = document.getElementById('filter-search-button');
	filterBoxSearch.addEventListener('click', filter());

	var seeFullRecipe = document.getElementById('close-modal');
	seeFullRecipe.addEventListener('click', modalToFullRecipe());

	var toFavoriteCake = document.getElementsByClassName('favoriteCake');
	for (var i = 0; i < toFavoriteCake.length; i++) {
		toFavoriteCake[i].addEventListener('click', sendToFavoriteCake());
	}
	
	var addRecipeToCartButton = document.getElementById('recipe-add-to-cart-button');
	addRecipeToCartButton.addEventListener('click', addRecipeToCart());

	var tagsInAddPage = document.getElementsByClassName('unclicked');
	for(var i = 0; i < tagsInAddPage.length; i++){
		tagsInAddPage[i].addEventListener('click', clickATag());
	}

	var clickedTagsInAddPage = document.getElementsByClassName('clicked');
	for(var i = 0; i < clickedTagsInAddPage.length; i++){
		clickedTagsInAddPage[i].addEventListener('click', unclickATag());
	}

	var cancelButtonToClose = document.getElementsByClassName('cancelButton');
	for(var i = 0; i < cancelButtonToClose.length; i++){
		cancelButtonToClose[i].addEventListener('click', showHomePage());
	}

	var addIngredient = document.getElementById('add-ingredient');
	addIngredient.addEventListener('click', addAnIngredient());
	var addPost = document.getElementById('add-post');
	addPost.addEventListener('click', addAnPost());
});
