var results = document.getElementById("res");
function addResult(){
//
// var link1 = 'https://newsapi.org/v1/articles?source=google-news&apiKey=7b4ca702fb474bd7b05d4f8e3666a8e1';




function getTheData(links, category){
  for(var url in links){

  $.getJSON('https://newsapi.org/v1/articles?source='+links[url]+'&apiKey=7b4ca702fb474bd7b05d4f8e3666a8e1', function(yt_data) {
    if (yt_data.status !== 'ok') {
      alert('error');
      return false;
    }
    else{

      var i=0;

          for(var obj in yt_data.articles){
console.log(i);
  results.innerHTML += "<div class='headlines_wrapper clearfix'><div style='background-image:url(" + yt_data.articles[i].urlToImage+ ");' class='headline headline-lg'><a id='link'  href='"+ yt_data.articles[i].url +"'><h1>"+ yt_data.articles[i].title+"</h1><p><time>"+yt_data.articles[i].publishedAt+"</time>"+yt_data.articles[i].description+"</p></a></div></div>"
// console.log(yt_data.articles[i].urlToImage);

  i++;

      }
        $("#loadingImg").fadeOut("fast");
      switch (category) {
        case "business":$('.headlines .headline a ').css({'background':'rgba(217, 30, 24,0.80)'});
        break;
        case "entertainment":$('.headlines .headline a ').css({'background':'rgba(142, 68, 173,0.80)'});
        break;
        case "gaming":$('.headlines .headline a ').css({'background':'rgba(44, 62, 80,0.80)'});
        break;
        case "general":$('.headlines .headline a ').css({'background':'rgba(30, 139, 195,0.80)'});
        break;
        case "music":$('.headlines .headline a ').css({'background':'rgba(27, 188, 155,0.80)'});
        break;
        case "science-and-nature":$('.headlines .headline a ').css({'background':'rgba(247, 202, 24,0.80)'});
        break;
        case "sport":$('.headlines .headline a ').css({'background':'rgba(150, 40, 27,0.80)'});
        break;
        case "technology":$('.headlines .headline a ').css({'background':'rgba(22, 160, 133,0.80)'});
        break;
        default:$('.headlines .headline a ').css({'background':'black'});
                break;

      }
    }

  });
  }

}



function callInClick(cat){
    var category = cat;

    $.getJSON('https://newsapi.org/v1/sources?language=en', function(sources_data) {
      if (sources_data.status !== 'ok') {
        alert('error');
        return false;
      }
      else{

        var i=0;
        var links = [];

            for(var obj in sources_data['sources']){
              if(sources_data.sources[i].category==category){
                links.push(sources_data.sources[i].id);
                //  console.log(sources_data.sources[i].category);
               }


              i++;
        }
        results.innerHTML ="";
        if(results.innerHTML ==""){ results.innerHTML ="<p id='loadingImg' style=' line-height: 150vh;height:100vh;text-align:center; width:100%;'><img src='img/loading.gif'></p>"}
        getTheData(links, category);
        }

    });

}




$("#business").click(function(){
$('.cat ul li a').css({'color':'#ffffff'});
callInClick("business");
$("#business").css({'color':'rgba(217, 30, 24,1)'});
});


$("#entertainment").click(function(){
$('.cat ul li a').css({'color':'#ffffff'});
callInClick("entertainment");
$("#entertainment").css({'color':'rgba(142, 68, 173,1)'});
});


$("#gaming").click(function(){
$('.cat ul li a').css({'color':'#ffffff'});
callInClick("gaming");
$("#gaming").css({'color':'rgba(44, 62, 80,1)'});
});


$("#general").click(function(){
$('.cat ul li a').css({'color':'#ffffff'});
callInClick("general");
$("#general").css({'color':'rgba(30, 139, 195,1)'});
});


$("#music").click(function(){
$('.cat ul li a').css({'color':'#ffffff'});
callInClick("music");
$("#music").css({'color':'rgba(27, 188, 155,1)'});
});


$("#science").click(function(){
$('.cat ul li a').css({'color':'#ffffff'});
callInClick("science-and-nature");
$("#science").css({'color':'rgba(247, 202, 24,1)'});
});


$("#sport").click(function(){
$('.cat ul li a').css({'color':'#ffffff'});
callInClick("sport");
$("#sport").css({'color':'rgba(150, 40, 27,1)'});
});


$("#technology").click(function(){
$('.cat ul li a').css({'color':'#ffffff'});
callInClick("technology");
$("#technology").css({'color':'rgba(22, 160, 133,1)'});
});



}
