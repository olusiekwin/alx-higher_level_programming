$(document).ready(function () {
    // Add a click event handler to the div with the id 'toggle_header'
    $("#toggle_header").click(function () {
      // Select the 'header' element and toggle the "red" and "green" classes
      $("header").toggleClass("red green");
    });
  });