$(document).ready(() => {
    // $("create-form").on("submit", function(event) {
    //     event.preventDefault();
    //     var burgerName = "cheese"
    //     $.post("/");
    // })
}); 

$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");

        var newState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            location.reload();
        });
    });  

    

    $(".delete-sleep").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });  
});