// // Get references to page elements
// var $exampleText = $('#example-text');
// var $exampleDescription = $('#example-description');
// var $submitBtn = $('#submit');
// var $tableList = $('#myDynamicTable');

// // The API object contains methods for each kind of request we'll make
// var API = {
// 	saveExample: function (dataPost) {
// 		return $.ajax({
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			type: 'POST',
// 			url: 'api/dataPosts',
// 			data: JSON.stringify(dataPost)
// 		});
// 	},
// 	getExample: function () {
// 		return $.ajax({
// 			url: 'api/data',
// 			type: 'GET'
// 		});
// 	},
// 	deleteExample: function (id) {
// 		return $.ajax({
// 			url: 'api/examples/' + id,
// 			type: 'DELETE'
// 		});
// 	}
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshTables = function () {
// 	API.alphaTable().then(function (data) {
// 		var learningTable = data.map(function (example) {
// 			var $a = $('<a>')
// 				.text(example.text)
// 				.attr('href', '/home/' + example.id);

// 			var $li = $('<li>')
// 				.attr({
// 					class: 'list-group-item',
// 					'data-id': example.id
// 				})
// 				.append($a);

// 			var $button = $('<button>')
// 				.addClass('btn btn-danger float-right delete')
// 				.text('ｘ');

// 			$li.append($button);

// 			return $li;
// 		});

// 		$tableList.empty();
// 		$tableList.append(learningTable);
// 	});
// };
// // USE FOR BIO?
// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
// 	event.preventDefault();

// 	var example = {
// 		text: $exampleText.val().trim(),
// 		description: $exampleDescription.val().trim()
// 	};

// 	if (!(example.text && example.description)) {
// 		alert('You must enter an example text and description!');
// 		return;
// 	}

// 	API.saveExample(example).then(function () {
// 		refreshExamples();
// 	});

// 	$exampleText.val('');
// 	$exampleDescription.val('');
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function () {
// 	var idToDelete = $(this)
// 		.parent()
// 		.attr('data-id');

// 	API.deleteExample(idToDelete).then(function () {
// 		refreshExamples();
// 	});
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on('click', handleFormSubmit);
// $exampleList.on('click', '.delete', handleDeleteBtnClick);
