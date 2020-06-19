var counter = 0

$("input").on("keypress", function(event) {
	if (event.which === 13) {
		createTask($(this).val())
		$(this).val("")
		if (counter % 2 != 0) {
			$(".task").first().addClass("grey")
		}
		counter++;
	}
})

function createTask(task) {
	$("#taskList").html('<p class="task">' + task + '</p>' + $("#taskList").html())
	$(".task").on("click", function() {
		console.log("detected click")
		$(this).toggleClass("checked")
	})
}



