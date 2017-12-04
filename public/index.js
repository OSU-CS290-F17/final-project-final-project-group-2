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

	var addPost = document.getElementById('addCake');
	if(addPost){
		addPost.addEventListener('click', addAPost);
	}

});

var obj1, obj2, obj3, objToReturn;

var nextButton = document.getElementsByClassName('nextButton');
for(var i = 0; i < nextButton.length; i++){
	if(nextButton[i]){
		nextButton[i].addEventListener('click', saveData);
	}
}

var cancelButton = document.getElementsByClassName('cancelButton');
if(cancelButton){
	cancelButton[0].addEventListener('click', closeModal);
}

//<a href="http://localhost:3000/addcakeingredients">NEXT</a></button>
function saveData(){
	var Title = document.getElementsByClassName('add-title-input');//Title[0].value
	var URL = document.getElementsByClassName('add-URL-input');//URL[0].value
	var flavorTag = document.getElementsByClassName('flavor-tags');//flavorTag[0].value
	var servingSize = document.getElementsByClassName('serving-size');//servingSize[0].value
	var prepTime = document.getElementsByClassName('prep-Time');//prepTime[0].value
	var cookTime = document.getElementsByClassName('cook-Time');//cookTime[0].value
	var dietaryTag = document.getElementsByClassName('dietary-tags');//dietaryTag[0].value
	var directions = document.getElementsByClassName('description');
	var quantity, unit, name, quantityclass, unitclass, nameclass;
	var ingredients = '';
	var i = 1;
	quantityclass = "quantity-boxes";
	unitclass = "unit-boxes";
	nameclass = "name-boxes";
	unit = document.getElementsByClassName(unitclass);
	name = document.getElementsByClassName(nameclass);
	quantity = document.getElementsByClassName(quantityclass);
	//while(document.getElementsByClassName(quantityclass)[i].firstChild.nextElementSibling.value != ''){//there are ingredients)
		console.log(name);//quantity[0].value
		//ingredients = ingredients + " " + quantity[i].firstChild.nextElementSibling.value + " " + unit[i].firstChild.nextElementSibling.value + " " + name[i].value;
		//console.log(ingredients);
		i = i + 1;
	//}

	var Id = Title[0].value.split(' ').join('');
	Id = Id.toLowerCase();
	obj1 = {
		title: Title[0].value,//cake id, type, dietarytag no spaces, lowercase...work on making this a modal
		dietaryTag: dietaryTag[0].value,
		serves: servingSize[0].value,
		prepTime: prepTime[0].value,
		cookTime: cookTime[0].value,
		type: flavorTag[0].value,
		photoURL: URL[0].value,
		directions: directions[0].value,
		cakeId: Id,
	}
	if(obj1){
		//console.log(obj1);
	}
}



function closeModal(){
	var background = document.getElementById('modal-add-background');
	var modal = document.getElementById('main-addpage-modal');
	console.log(background, modal);
	background.classList.add('hidden');
	modal.classList.add('hidden');
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
	var background = document.getElementById('modal-add-background');
	var modal = document.getElementById('main-addpage-modal');
	var filterbox = document.getElementsByClassName('filter');
	var logo = document.getElementsByClassName('header-image-container');
	var cakes = document.getElementsByClassName('cake-post-container');
	for(var i = 0; i < cakes.length; i++){
		cakes[i].classList.add('hidden');
	}
	filterbox[0].classList.add('hidden');
	logo[0].classList.add('hidden');
	background.classList.remove('hidden');
	modal.classList.remove('hidden');
}

var filterBoxSearch = document.getElementById('filter-search-button');
//filterBoxSearch.addEventListener('click', filter());
//function filter(){
filterBoxSearch.addEventListener('click', function filter(){
	console.log("Search!");

	//read in values
	var cakeType = document.getElementById('filter-cake-type').value;
	var dietaryTag = document.getElementById('filter-dietary-tag').value;
	var servesMin = document.getElementById('filter-min-serves').value;
	var servesMax = document.getElementById('filter-max-serves').value;
	var prepMin = document.getElementById('filter-min-prep-time').value;
	var prepMax = document.getElementById('filter-max-prep-time').value;
	var cookMin = document.getElementById('filter-min-cook-time').value;
	var cookMax = document.getElementById('filter-max-cook-time').value;

	if (dietaryTag == "Dairy Free"){
		dietaryTag = "dairyfree";
	}
	if (dietaryTag == "Gluten Free"){
		dietaryTag = "glutenfree";
	}
	if (dietaryTag == "Vegan"){
		dietaryTag = "vegan";
	}
	if (dietaryTag == "None"){
		dietaryTag = "none";
	}


/*console.log("Caketype: ", cakeType);
console.log("dietaryTag: ", dietaryTag);
console.log("servesmin: ", servesMin);
console.log("servesmax: ", servesMax);
console.log("prepmin: ", prepMin);
console.log("prepmax: ", prepMax);
console.log("cookmin: ", cookMin);
console.log("cookmax: ", cookMax);*/

	//read in all posts info
  var allPosts = document.getElementsByClassName('cake-post-container');

	//show all posts
	for (var i = 0; i < allPosts.length; i++){
		allPosts[i].style.display = "block"
	}
	//hide posts based on filters
	for (var i = 0; i < allPosts.length; i++){

/*console.log("title: ", allPosts[i].getAttribute("cake-title"));
console.log("type: ", allPosts[i].getAttribute("cake-type"));
console.log("diet: ", allPosts[i].getAttribute("dietary-tag"));
console.log("serves: ", allPosts[i].getAttribute("serves"));
console.log("prep: ", allPosts[i].getAttribute("prep-time"));
console.log("cook: ", allPosts[i].getAttribute("cook-time"));*/

		if (cakeType){
			if (allPosts[i].getAttribute("cake-type").toLowerCase() !== cakeType.toLowerCase()){
				allPosts[i].style.display = "none";
			}
		}
		if (dietaryTag){
			if (allPosts[i].getAttribute("dietary-tag") !== dietaryTag){
				allPosts[i].style.display = "none";
			}
		}
		if (servesMin){
			if (parseInt(allPosts[i].getAttribute("serves")) < servesMin){
				allPosts[i].style.display = "none";
			}
		}
		if (servesMax){
			if (parseInt(allPosts[i].getAttribute("serves")) > servesMax){
				allPosts[i].style.display = "none";
			}
		}
		if (prepMin){
			if (parseInt(allPosts[i].getAttribute("prep-time")) < prepMin){
				allPosts[i].style.display = "none";
			}
		}
		if (prepMax){
			if (parseInt(allPosts[i].getAttribute("prep-time")) > prepMax){
				allPosts[i].style.display = "none";
			}
		}
		if (cookMin){
			if (parseInt(allPosts[i].getAttribute("cook-time")) < cookMin){
				allPosts[i].style.display = "none";
			}
		}
		if (cookMax){
			if (parseInt(allPosts[i].getAttribute("cook-time")) > cookMax){
				allPosts[i].style.display = "none";
			}
		}
	}

});
