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
      modalContact.on("hidden.bs.modal", function() {
        modalConf.removeClass('active');
      });

    });


  } else {
    return
  }


  // Remove Contact
  $('.table-contacts tr .btn-remove').on('click', function(e) {
    e.preventDefault();

    var _this = $(this),
      confDialog = _this.parents('.table-contacts').siblings('.delete-contact-confirmation'),
      row = _this.closest('tr');

    // Hide current row
    row.addClass('confirm-dialog');

    // Insert confirmation row
    confDialog.find('tr').clone().insertAfter(row);


    var insertedRow = _this.closest('tr').next('.tr-confirm');

    // Confirm removal
    insertedRow.find('.btn-confirm').on('click', function(e) {
      e.preventDefault();

      insertedRow.remove();
      row.remove();
    });


    // Cancel removal
    insertedRow.find('.btn-cancel').on('click', function(e) {
      e.preventDefault();

      insertedRow.remove();
      row.removeClass('confirm-dialog');
    });

  });

});


// Tabs
$(document).ready(function() {
  $('ul.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
});



$(document).ready(function() {

  // Send Generated PDF screen
  $('.btn-generate-pdf').on('click', function(e) {
    e.preventDefault();

    $('.main-content .tab-content').removeClass('current');
    $('.main-content .tab-3-1').addClass('current');

  })


  // Next tab
  $('.tab-content .btn-next').on('click', function(e){
    e.preventDefault();

    var _this = $(this),
        nextStep = _this.data("tab"),
        nextTab = $("#" + nextStep),
        currentTab = _this.parents('.tab-content'),
        currentIndicator = $('.tab-link.current'),
        nextIndicator = currentIndicator.next();

    // console.log(nextStep);
    // console.log(nextTab);
    // console.log(currentIndicator);
    // console.log(nextIndicator);

    currentTab.removeClass('current');
    nextTab.addClass('current');
    currentIndicator.removeClass('current');
    nextIndicator.addClass('current');

  });


  // Previous tab
  $('.tab-content .btn-prev').on('click', function(e){
    e.preventDefault();

    var _this = $(this),
        prevStep = _this.data("tab"),
        prevTab = $("#" + prevStep),
        currentTab = _this.parents('.tab-content'),
        currentIndicator = $('.tab-link.current'),
        prevIndicator = currentIndicator.prev();

    currentTab.removeClass('current');
    prevTab.addClass('current');
    currentIndicator.removeClass('current');
    prevIndicator.addClass('current');

  });

  // Review report confirmation
  $('.js-review-report .btn-send').on('click', function(e) {
    e.preventDefault();

    $('.main-content .tab-content').removeClass('current');
    $('.main-content .tab-5-1').addClass('current');
  });


  $('.btn-check-all').on('click', function(e) {
    e.preventDefault();

    var _this = $(this),
        checkbox = _this.parents('.table-select').find('.check input');

    $(this).toggleClass('selected');

    if (_this.hasClass('selected')) {
      checkbox.prop('checked', true);
    } else {
      checkbox.prop('checked', false);
    }
  });


  // Toggle Select all button based on checked items
  $('.check input').on('change', function() {
    var table = $('.table-select'),
      checked = table.find('input[type="checkbox"]:checked').length,
      total = table.find('input[type="checkbox"]').length,
      unchecked = total - checked,
      btnCheck = $('.btn-check-all');

    if (unchecked == 0) {
      btnCheck.addClass('selected');
    } else {
      btnCheck.removeClass('selected');
    }

  });

});




// var checkBox = $('.table-select').find('.check input[type="checkbox"]');



// checkBox.prop('checked', true);

// checkBox.on('change', function(){
//   console.log(checkBox.prop('checked').length);
// });

// $(checkBox).change(function(){
//   console.log(check.prop('checked'));
//   console.log(check.length);

//     // if (check.is('checked').length == check.length) {
//     //   console.log("Checked");
//     // } else {
//     //   console.log("Unchecked");
//     // }
// });

// $('.check input').on('change', function(){
//   var checked = $('.check input');

//   if (checked.prop('checked')) {
//     console.log("Checked");
//   } else {
//     console.log("Unchecked");
//   }
//   // console.log(checked);


//     // if ($('.check').prop("checked").length == $('.check').length) {
//     //    //do something
//     //    console.log('All items checked');
//     // }
// });
// });


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
