var $msgModal = $('#msgModal').modal({
      backdrop: false,
      show: false,
      keyboard: false
    }),

  showMsg = function (header, body, callback) {
    $msgModal
      .find('.modal-header > h3').text(header).end()
      .find('.modal-body').text(body).end()
      .find('.callback-btn').off('click.callback')
        .on('click.callback', callback).end()
      .modal('show');
  };