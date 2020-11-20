// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(){
    // alert("test");
    // $('#h1-about').hover(function () {
    //     $(this).text("test");
    //     $(this).attr("style", "color: #dc3545 !important");
    // });
})


$(document).on("click", "p", function () {
    alert('hello');
})

$(document).on("mouseenter", "#h1-about", function() {
    $(this).attr("style", "color: #dc3545 !important");
    $(this).text("About");
})

$(document).on("mouseleave", "#h1-about", function (){
    $(this).attr("style", "color: white !important");
    $(this).text("Hello.");
})

$(document).on('mouseenter', '#h1-projects', function (params) {
    $(this).attr("style", "color: white !important");
    $(this).text("Projects");
})

$(document).on('mouseleave', '#h1-projects', function (params) {
    $(this).attr("style", "color: #dc3545 !important");
    $(this).text("I am");
})

$(document).on('mouseenter', '#h1-contact', function (params) {
    $(this).attr("style", "color: white !important");
    $(this).text("Contact");
})

$(document).on('mouseleave', '#h1-contact', function (params) {
    $(this).attr("style", "color: #dc3545 !important");
    $(this).text("Josh");
})