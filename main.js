/// <reference path="./jquery-3.4.1.min.js"/>

$(document).ready(function(){

    // Element Selector

    $("h3").html("Element Selector");

    // Id Selector
    $("#divName").html("Id Selector");
    $("div#divName").html("Hello");

    // Class Selector
    $("colors").html("Class Selector");
    $("div.colors").html("Class Selector");

    $(".square.red").html("*");

    // Multiple Elments
    $("h3,#divName,div.colors").html("Multiple Elements");

    //Descendant Elements
    $("#div1 p").html("Descendant Elements");



});