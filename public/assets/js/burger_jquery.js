// AJAX call when user clicks "Add Burger"
$(".create-form").on("submit", function (event) {
    event.preventDefault();
    console.log("submit button clicked");

    var newBurger = {
        name: $("#newBurger").val().trim(),
    };

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("Added new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});