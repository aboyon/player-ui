var ErrorHandling = {
  showModalError: function(error) {
    $(document.body).append(TemplateOperationError({error: error}))
    $('#error_modal').modal();
    $('#error_modal').on('hidden.bs.modal', function (e) {
      $('#error_modal').remove();
    })
  }
}