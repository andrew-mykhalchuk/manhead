// Modal Confirmation
$(document).ready(function() {
	if ($('body').hasClass('page-manage-contacts')) {

		// Save/Add/Remove Contact Confirmation
		var modalContact = $('.modal-contact'),
				btnSave = modalContact.find('.btn-save')

		btnSave.on('click', function() {
			var _this = $(this);
			var modalConf = _this.parents('.modal-body').find('.modal-confirmation');

			modalConf.addClass('active');
			modalContact.on("hidden.bs.modal", function () {
			    modalConf.removeClass('active');
			});

		});


	} else {
		return
	}
  

	// Remove Contact
  $('.table-contacts tr .btn-remove').on('click', function(e){
  	e.preventDefault();

  	var _this = $(this),
  			confDialog = _this.parents('.table-contacts').siblings('.delete-contact-confirmation'),
  			row = _this.parents('tr');

  	// console.log(confDialog);

  	row.addClass('confirm-dialog');
  	// row.hide();
  	confDialog.find('tr').insertAfter(row);

  	

  });

});


// // Header resize
// $(window).on('scroll', function() {
//   var scroll = $(window).scrollTop();

//   if (scroll >= 290) {
//     $(".page-how-it-works").addClass("small-header");
//   } else {
//     $(".page-how-it-works").removeClass("small-header");
//   }
// });



// // Accordion
// (function($) {
//   $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

//   $('.accordion a').click(function(j) {
//     var dropDown = $(this).closest('li').find('.accordion-content');

//     $(this).closest('.accordion').find('.accordion-content').not(dropDown).slideUp(220);

//     if ($(this).hasClass('active')) {
//       $(this).removeClass('active');
//     } else {
//       $(this).closest('.accordion').find('a.active').removeClass('active');
//       $(this).addClass('active');
//     }

//     dropDown.stop(false, true).slideToggle(220);

//     j.preventDefault();
//   });
// })(jQuery);



// // ZenoLive Player
// $(document).ready(function() {
//   var player = $('.zeno-player'),
//       body =  $('body'),
//       closeMessage = $('.zeno-player .message .btn-close');

//   closeMessage.on('click', function() {
//     body.removeClass('body-overlay');
//     player.removeClass('expanded');
//     $('.message').addClass('is-hidden');
//   });

//   $('.btn-playlist').on('click', function() {
//     if (true) {
//       closeMessage.trigger('click');
//       body.toggleClass('body-overlay');
//       player.toggleClass('expanded');
//       $('.playlist').toggleClass('is-hidden');
//     } else {
//       body.toggleClass('body-overlay');
//       player.toggleClass('expanded');
//       $('.playlist').toggleClass('is-hidden');
//     }
    
    
//   });
// });


// $(document).mousedown(function(e) {
//   var clicked = $(e.target); // get the element clicked

//   if (clicked.is('.message *') || clicked.is('.btn-playlist') || clicked.is('.playlist *')) {
//     return;
//   } else {
//     $('body').removeClass('body-overlay');
//     $('.zeno-player').removeClass('expanded');
//     $('.message, .playlist').addClass('is-hidden');
//   }
// });



// // Custom select boxes
// $('select').selectBox({
//     mobile: true,
//     menuTransition: 'fade',
//     menuSpeed: 'fast'
// });

// $(document).ready(function() {
//   $('.select-wrapper').on('click', function() {
//     $(this).toggleClass('active');
//   })

//   $('.select-item a').on('click', function(e) {
//     e.preventDefault();
//   })
// });

// $(document).mousedown(function(e) {
//   var clicked = $(e.target); // get the element clicked

//   if (clicked.is('.select-wrapper *')) {
//     return;
//   } else {
//     $('.select-wrapper').removeClass('active');
//   }
// });


// // Comments
// $(document).ready(function() {
//   $('.new-comment .comment-heading').on('click', function() {
//     var _this = $(this);
//     var newComment = _this.parent('.new-comment');

//     newComment.toggleClass('collapsed').toggleClass('expanded');
//   });
// });











