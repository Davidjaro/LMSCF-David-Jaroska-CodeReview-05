var movies = JSON.parse(movies);
var likes = [];

var updateLike = function() {
    $(movies).each(function(i){
        movies[i].likes = likes[i];
    });
}

var newLikeCounter = function() {
    var i = $(".thumbbtn").index(this);
    likes[i] += 1;
    $(this).children(".likes").text(likes[i]);
}
function mostArray(){ 
	var numericallyOrderedDivs = likes.sort(function(a,b){
        return b - a;
        
    });
    console.log(numericallyOrderedDivs);
    
};
// $(".sortbtn").on("click", mostArray);





for (let i=0; i < movies.length; i++){
	likes[i] = Number(movies[i].likes);

	$(".movies").append(` <div class="col-12 col-sm-6 col-lg-4 mb-4 mt-2 ">
            <div class="movieframe text-white">
                <div class="container-fluid">
                    <div class="row bg-secondary">
                        <div class="col-5 p-2">
                            <img class="img-fluid rounded border" src="${movies[i].img}" alt="">
                        </div>
                        <div class="col-7 d-flex flex-column">
                            <h3 class="mt-2 ">${movies[i].name}</h3>
                            <p class="mt-1 ">${movies[i].desc}</p>
                            <button class="bg-transparent thumbbtn border-0 ml-auto mt-auto p-0 mb-3 d-flex pr-4">
                                <span class="pr-4">Like</span>
                                <img class="pr-4 d-inline" src="img/likebtn.svg" alt="">
                                <span class="likes rounded-circle text-white pr-4">${movies[i].likes}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

				`);
};

$(".thumbbtn").on("click", newLikeCounter).on("click", updateLike);
$(".sortbtn").on("click", mostArray);

// var divs = $("div.movies")
// $('.sortbtn').on('click', function(){
//     var numericallyOrderedDivs = divs.sort(function(a,b){
//         return $(a).find(".likes") > $(b).find(".likes");
//     });
//     console.log(numericallyOrderedDivs)
//     $(".movies").replaceWith(numericallyOrderedDivs);
// });
