$(document).ready(function() {
    var $newItemInput = $("input.new-time");
    var $todoContainer = $(".burgers-container");
    $(document).on("click", "button.delete", deleteburgers);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".burgers-item", editburgers);
    $(document).on("keyup", ".burgers-item", finishEdit);
    $(document).on("blur", ".burgers-item", cancelEdit);
     $(document).on("submit", "#burgers-form", insertburgers);

    var burgers = [];

    getBurgers();

    function initializeRows() {
        $burgersContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < burgers.length; i++) {
            rowsToAdd.push(createNewRow(burgers[i]));
        }
        $burgersContainer.prepend(rowsToAdd);
    }
    function getBurgers() {
        $.get("/api/burgers", function(data) {
            burgers = data;
            initializeRows();
        });
    }
    function deleteBurger(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/burgers" + id
        }).then(getBurgers);
    }

    function editBurgers() {
        var currentBurger = $(this).data("burgers");
        $(this).children().hide();
        $(this).children("input.edit").val(currentBurgers.text);
        $(this).children("input.edit").show();
        $(this).children("input.edit").focus();
    }
    function toggleComplete(event) {
        event.stopPropagation();
        var burgers = $(this).parent().data("burgers");
        burgers.complete = !burgers.complete;
        updateBurgers(burgers)
    }
    function finishEdit(event) {
        var updatedBurgers = $(this).data("burgers");
        if (event.which === 13) {
            updatedBurgers.text = $(this).children("input").val().trim();
            $(this).blur();
            updateBurgers(updatedBurgers);
        }
    }

    function updateBurger(todo) {
        $.ajax({
            method: "PUT",
            url: "/api/burgers",
        })
    }
})