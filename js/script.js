//javascript, jQuery


$(document).ready(()=>{

  $("#button").click((e)=>{
    e.preventDefault();
    $("#results").empty();
    let userInput = $("#textinput").val();
    $.ajax({
    url:`https://api.giphy.com/v1/gifs/search?api_key=VTKmYGhEXMlYFemmKOI6ZNSsCZaKWtaC&q=${userInput}&limit=15&offset=0&rating=G&lang=en`, method: "GET"
  }) 
  .done((res)=>{
    let gifs = res.data;
    $.each(gifs, (i, element)=>{
      let gifimg = element.images.fixed_height.url;
      let giftitle = element.title;
      let gifurl = element.url;
    $("#results").append(`<a href="${gifurl}" target="_blank"> <img src="${gifimg}" alt="${giftitle}"/> </a>`)
  })
  })
})
})
