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

  // var elems = $('.table-row .data-product .number').text();
  // var values = $.makeArray(elems).join(', ');
  // var value1 = $('.table-row:first-child .data-product .number').text();


  // var values = $('.table-row .data-product .number').map(function(){
  //   return $(this).text();
  // });


  // var labels = $('.table-row .row-title').map(function(){
  //   return $(this).text();
  // });

  // console.log(labels);

});



