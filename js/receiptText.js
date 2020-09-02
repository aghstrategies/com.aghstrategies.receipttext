CRM.$(function($) {

  //Moves custom setting above buttons on "Edit Price Field" form
  $('#receiptText').insertAfter('#fromEmail');
  $('.deleteme').remove();

  toggleReceiptTextField();
  $('#is_email_receipt').click(function() {
    toggleReceiptTextField();
  });

  function toggleReceiptTextField() {
    if ($('#is_email_receipt').prop('checked')) {
      $('#receiptText').show();
    }
    else {
      $('#receiptText').hide();
    }
  }

});
