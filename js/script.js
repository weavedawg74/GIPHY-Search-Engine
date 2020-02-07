//javascript, jQuery

$(document).ready(()=>{
  
  $("#button").click((e) => {
    e.preventDefault();
    // remove the error message if there was an error before
    $(".error").empty();

    // empty the previous gifs
    $("#results").empty();

    const userInput = $("#textinput").val();

    // For empty search query, display an error message and exit the callback
    const trimmedUser = userInput.trim();
    if (trimmedUser === "") {
      $( ".error" ).text( 'Please enter a search term before submitting' )
      return;
    }


    $.ajax({
      url:`https://api.giphy.com/v1/gifs/search?api_key=VTKmYGhEXMlYFemmKOI6ZNSsCZaKWtaC&q=${trimmedUser}&limit=16&offset=0&rating=G&lang=en`, method: "GET"
    })
    .done(
      (res)=>{
        let gifs = res.data;
        $.each(gifs, (i, element)=>{
          let gifimg = element.images.fixed_height.url;
          let giftitle = element.title;
          let gifurl = element.url;
          $("#results").append(`<a href="${gifurl}" target="_blank"> <img src="${gifimg}" alt="${giftitle}"/> </a>`)
        });
      }
    )
    .fail( error => {
      $( ".error" ).text( 'Network could not be established, please check your connection and try again.' )
      // $('selector of the error html node').text('your error message');
    })


  });
});
