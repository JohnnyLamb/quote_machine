$(document).on('ready', function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    getResults();
  });

  function getResults() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(apiResponse) {
        quote = apiResponse.quoteText.trim();
        author = apiResponse.quoteAuthor;
        link = apiResponse.quoteLink;
        $(".results-area").html(quote);
      }
    });
  }
});
