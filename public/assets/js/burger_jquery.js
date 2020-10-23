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

// AJAX call for when user clicks to "Eat"
$(function () {
    $(".eat-btn").on("click", function (event) {
        var id = $(this).data("id");

        var burgerStatus = {
            status: true
        };
        console.log(id);
        console.log(burgerStatus);

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerStatus
        }).then(
            function () {
                console.log("Burger was eaten, yum!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});