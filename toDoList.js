// Deletes task when delete icon is clicked
$("ul").on("click", ".trash", function(event) {
	$(this).parent().fadeOut(function() {
		$(this).remove()
	})
	event.stopPropagation()
})

// Checks off task when clicked
$("ul").on("click", "li", function() {
	$(this).toggleClass("checked")
})

// Adds a new todo after user hits enter
$(document).on("keypress", function(event) {
	if (event.which == 13) {
		$('ul').prepend('<li><span class="trash"><i class="fas fa-trash"></i></span> ' + $('input').val() + "</li>")
		$('input').val("")
	}
})

// Toggles input box
$('.fa-pencil-ruler').on('click', function() {
	$('input').fadeToggle()
})