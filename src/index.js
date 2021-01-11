import * as $ from "jquery";
import "./styles/style.scss";
import "./styles/style.css";


var x=40.71;
var y=-74;

function myMap(a, b) {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: new window.google.maps.LatLng(a, b), zoom: 10
    };
    var map = new window.google.maps.Map(mapCanvas, mapOptions);
  }
 
  $( document ).ready(function() {
    console.log( "ready!" );
    myMap(x, y);
});

$('.contact-info__tab').on("click", function(){
  $('.contact-info__tab').removeClass("contact-info__tab_active");
  $(this).addClass("contact-info__tab_active");
  var id=$(this).attr("id");
  if(id==1){
    $(".contact-schedule__title").html("Los Angeles, USA");
    $(".contact-schedule__desc").html("2005 Stokes Isle Apt. 896, Los Angeles 10010");
    x=34.04;
    y=-118.28;
    myMap(x, y);
  }
  else if(id==2){
    $(".contact-schedule__title").html("NewYork, USA");
    $(".contact-schedule__desc").html("2005 Stokes Isle Apt. 896, NewYork 10010");
    x=40.71;
    y=-74;
    myMap(x, y);
  }
  else if(id==3){
    $(".contact-schedule__title").html("Boston, USA");
    $(".contact-schedule__desc").html("2005 Stokes Isle Apt. 896, Boston 10010");
    x=42.35;
    y=-71.04;
    myMap(x, y);
  }
  else if(id==4){
    $(".contact-schedule__title").html("Detroit, USA");
    $(".contact-schedule__desc").html("2005 Stokes Isle Apt. 896, Detroit 10010");
    x=42.34;
    y=-83.04;
    myMap(x, y);
  }
});
$('.menu__item ').on("click", function(){
  $('.menu__item ').removeClass("menu__item_active");
  $(this).addClass("menu__item_active");
});
