
var movies = JSON.parse(movies);


for (let i=0; i < movies.length; i++){
	var likes =Math.floor(Math.random() * 26);

	var img = ` <div id="div${i}" class="col-lg-5 col-md-6 m-5  movieframe">
						<img class="poster img-responsive" id="image${i}" src="${movies[i].img}">
					<div class="text mh-100">	
						<h2 class"title text-center"> ${movies[i].name}</h2>		
						<p class="text-white text-left pl-2 w-100 h-20"  id="p${i}">Directed by: ${movies[i].director}</p>
						<p class="text-white text-left pl-2 w-100 h-50"  id="p${i}">${movies[i].desc}</p>
						<button type="button" id="add${i}" class="btn btn-primary like" data-toggle="button" aria-pressed="false">Like
						</button>
						<p class="d-inline" id="show${i}">${likes}</p>
					</div>
				</div>
				`;
	$(".movies").append(img);
	$("#add"+ i).on("click", function() {
	var y = (likes +=1)
	$("#show"+i).replaceWith(y);

	});
};
