function createPost(type, dietaryTag, serves, prepTime, cookTime, photoURL, cakeId) {

  var cakeTemplateArgs = {
    type: type,
		dietaryTag: dietaryTag,
		serves: serves,
		prepTime: prepTime,
		cookTime: cookTime,
		photoURL: photoURL,
    cakeId: cakeId
  };

  var cakePostHTML = Handlebars.templates.cakePost(cakeTemplateArgs);

  return cakePostHTML;

}

window.addEventListener('DOMContentLoaded',function(){
	var addIngredient = document.getElementById('add-ingredient');
	if(addIngredient){
		addIngredient.addEventListener('click', addAnIngredient);
	}

	var addPost = document.getElementById('addCake');
	if(addPost){
		addPost.addEventListener('click', addAPost);
	}


});

var postButton = document.getElementsByClassName('nextButton');
if(postButton[0]){
	var post = postButton[0].addEventListener('click', saveData);
}

var cancelButton = document.getElementsByClassName('cancelButton');
if(cancelButton[0]){
	cancelButton[0].addEventListener('click', closeModal);

};

var Title = document.getElementsByClassName('add-title-input');//Title[0].value
var URL = document.getElementsByClassName('add-URL-input');//URL[0].value
var flavorTag = document.getElementsByClassName('flavor-tags');//flavorTag[0].value
var servingSize = document.getElementsByClassName('serving-size');//servingSize[0].value
var prepTime = document.getElementsByClassName('prep-Time');//prepTime[0].value
var cookTime = document.getElementsByClassName('cook-Time');//cookTime[0].value
var dietaryTag = document.getElementsByClassName('dietary-tags');//dietaryTag[0].value
var directions = document.getElementsByClassName('description');
var i = 0;
var quantityclass = "quantity-boxes";
var unitclass = "unit-boxes";
var nameclass = "nameBox";
var unit = document.getElementsByClassName(unitclass);
var name = document.getElementsByClassName(nameclass);
var quantity = document.getElementsByClassName(quantityclass);

function saveData(){
	var postRequest = new XMLHttpRequest();
	var postURL = "/addCake";
	postRequest.open('POST', postURL);
	var ingredients = '';
	var object;
	var ingredientsArray = [];
	while(document.getElementsByClassName(quantityclass)[i].firstChild.nextElementSibling.value != ''){//there are ingredients)
		ingredients = quantity[i].firstChild.nextElementSibling.value + " " + unit[i].firstChild.nextElementSibling.value + " " + name[i].firstChild.nextElementSibling.value + " ";
		object = {
			ingredientItem: ingredients,
		}
		ingredientsArray[i] = object;
		i = i + 1;//i at the end will be how many ingredients are filled in.
	}

	var Id = Title[0].value.split(' ').join('');
	Id = Id.toLowerCase();

	var diet = dietaryTag[0].value.split(' ').join('');
	diet = diet.toLowerCase();

	var type = flavorTag[0].value.toLowerCase();

	var obj1 = {
		title: Title[0].value,//cake id, type, dietarytag no spaces, lowercase...work on making this a modal
		dietaryTag: diet,
		serves: servingSize[0].value,
		prepTime: prepTime[0].value,
		cookTime: cookTime[0].value,
		type: type,
		photoURL: URL[0].value,
		directions: directions[0].value,
		cakeId: Id,
		ingredients: ingredientsArray,
	}

	var requestBody = JSON.stringify(obj1);

	postRequest.setRequestHeader('Content-Type', 'application/json');

	postRequest.addEventListener('load', function(event){
		if (event.target.status !== 200){
			alert("Error storing cake in database:\n\n\n" + event.target.response);
		} else {
			var newPost = createPost(type, diet, servingSize[0].value, prepTime[0].value, cookTime[0].value, URL[0].value, Id);
      var postsContainer = document.querySelector('.posts');
      postsContainer.insertAdjacentHTML('beforeend', newPost);
		}
	});

	postRequest.send(requestBody);
	closeModal();
}

var addToCartButton = document.getElementsByClassName('cart-button');
for (var i = 0; i < addToCartButton.length; i++){
  if (addToCartButton[i]){
    addToCartButton[i].addEventListener('click', saveCartData);
  }
}


function saveCartData(){

	var postRequest = new XMLHttpRequest();
	var postURL = "/addCakeToCart";
	postRequest.open('POST', postURL);

  cakeId = event.target.className.split(" ")[1];
  photoURL =  event.target.className.split(" ")[2];

  var cakeCartObj = {
    photoURL: photoURL,
    cakeId: cakeId
  };

	var requestBody = JSON.stringify(cakeCartObj);

	postRequest.setRequestHeader('Content-Type', 'application/json');
	postRequest.addEventListener('load', function(event){
		if (event.target.status !== 200){
			alert("Error storing cake in cart database:\n\n\n" + event.target.response);
		}
	});
	postRequest.send(requestBody);
}

function closeModal(){
	Title[0].value = '';
	URL[0].value = '';
	flavorTag[0].value = 'Other';
	servingSize[0].value = '1';
	prepTime[0].value = '0 minutes';
	cookTime[0].value = '0 minutes';
	dietaryTag[0].value = 'None';
	directions[0].value = '';
  var name = document.getElementsByClassName("nameBox");
	 for(var k = 0; k < i; k++){
	 	quantity[k].firstChild.nextElementSibling.value = '';
	 	unit[k].firstChild.nextElementSibling.value = 'None';
	 	name[k].firstChild.nextElementSibling.value = '';
	 }
	var background = document.getElementById('modal-background');
	var modal = document.getElementById('post-modal');
	background.classList.add('hidden');
	modal.classList.add('hidden');
}

function addAnIngredient(){
	var quantity_boxes = document.getElementsByClassName('quantity-boxes');
	console.log(quantity_boxes);
}

function addAPost(){
	var background = document.getElementById('modal-background');
	var modal = document.getElementById('post-modal');
	background.classList.remove('hidden');
	modal.classList.remove('hidden');
	console.log("addapost")
}

var filterBoxSearch = document.getElementById('filter-search-button');
//read in all posts info
var allPosts = document.getElementsByClassName('cake-post-container');

if(filterBoxSearch){
  filterBoxSearch.addEventListener('click', function filter(){

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



  	//show all posts
  	for (var i = 0; i < allPosts.length; i++){
  		allPosts[i].style.display = "block"
  	}
  	//hide posts based on filters
  	for (var i = 0; i < allPosts.length; i++){

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

  for(var i = 0; i < allPosts.length; i++){
  	if(allPosts[i]){
  		allPosts[i].addEventListener('click', openCakeModal);

  	}
  }
}
