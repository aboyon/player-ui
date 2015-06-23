var TemplateOperationError = _.template("\
  <div class='modal fade' tabindex='-1' role='dialog' id='error_modal'>\
    <div class='modal-dialog modal-sm'>\
      <div class='modal-content'>\
        <div class='alert alert-danger' role='alert'>\
          Something went wrong:\
        </div>\
        <%= error %>\
      </div>\
    </div>\
  </div>\
");