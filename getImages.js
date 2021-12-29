$(document).ready(function () {
    var jsonURL = "images.json";
    $.getJSON(jsonURL, function (json) 
    {
      var imgList= "";
  
      $.each(json.images, function () {
        imgList += '<img class="imgBox" src= "' + this.img + '">';
      });

      $('#imageCollection').append(imgList);
    });
  });