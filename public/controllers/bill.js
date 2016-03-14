$(document).ready(function() {
  var nameValidators = {
	      row: '.col-xs-4',   // The title is placed inside a <div class="col-xs-4"> element
	      validators: {
          notEmpty: {
              message: 'The item name is required'
          }
	      }
      },
      priceValidators = {
          row: '.col-xs-4',
          validators: {
              notEmpty: {
                  message: 'The price is required'
              },
              numeric: {
                  message: 'The price is not valid'
              }
          }
      },
      qtyValidators = {
          row: '.col-xs-2',
          validators: {
              notEmpty: {
                  message: 'The Quantity is required'
              },
              numeric: {
                  message: 'The quantity must be a numeric number'
              }
          }
      },
      itemIndex = 0;

  $('#createBillForm')
      .formValidation({
          framework: 'bootstrap',
          icon: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
          },
          fields: {
              'item[0].name': nameValidators,
              'item[0].price': priceValidators,
              'item[0].qty': qtyValidators
          }
      })

      // Button click handler
      .on('click', '.addButton' function() {
      	itemIndex++;
      	var $template = $('#itemTemplate'),
      			$clone		= $template
      										.clone()
      										.removeClass('hide')
      										.attr('data-item-index', itemIndex)
      										.insertBefore($template);

      		// Update the item attributes
      		$clone
      				.find('[name="item"]').attr('name', 'item[' + itemIndex + '].name').end()
      				.find('[name="price"]').attr('name', 'item[' + itemIndex + '].price').end()
      				.find('[name="qty"]').attr('name', 'item[' + itemIndex + '].qty').end();

      		// Add new fields
      		$('itemForm')
      				.formValidation('addField', 'item[' + itemIndex + '].name', nameValidators)
      				.formValidation('addField', 'item[' + itemIndex + '].price', priceValidators)
      				.formValidation('addField', 'item[' + itemIndex + '].qty', qtyValidators);
      })

      // Remove button click handler
      .on('click', '.removeButton' function() {
      	itemIndex++;
      	var $row = $(this).parents('.form-group'),
      			index = $row.attr('data-item-index');

      		// Remove fields
      		$('itemForm')
      				.formValidation('removeField', $row.find('[name="item[' + index + '].name"]'))
      				.formValidation('removeField', $row.find('[name="item[' + index + '].price"]'))
      				.formValidation('removeField', $row.find('[name="item[' + index + '].qty"]'));

      		// Remove element containing the field
      		$row.remove();
      });
    });