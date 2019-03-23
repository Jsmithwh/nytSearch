$("button").on("click", function ()){
    var searchTerm = $(".form-control").val();
    searchTerm = "election"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=dMFs2xATxCtWEVDsevU5m2CSTr81kArv";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var results = response.docs;
        for (var i = 0; i < results.length; i++) {
        }
    }
});