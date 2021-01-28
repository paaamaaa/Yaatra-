$(document).ready(function() {
  /*------------------------------------*\
  Homestays tables and modals
\*------------------------------------*/

  //call delete modal by passing id from delete icon to confirmation box
  $('.homestay-delete').on('click', function() {
    const homestayId = $(this)
      .closest('tr')
      .attr('id');
    $('#homestayDeleteModal')
      .data('id', homestayId)
      .modal('show');
  });

  //get delete request by confirming delete
  $('#deleteHomestay').on('click', function() {
    const homeStayId = $('#homestayDeleteModal').data('id');

    $.ajax({
      method: 'POST',
      url: '/homestays/delete/' + homeStayId,
      success: function(response) {
        location.reload();
      }
    });
  });

  //call edit modal by passing id from edit button
  $('.homestay-edit').on('click', function() {
    const homestayId = $(this)
      .closest('tr')
      .attr('id');
  });

  /*------------------------------------*\
     Mapping
    \*------------------------------------*/

  var map = L.map('map');

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  L.Routing.control({
    waypoints: [L.latLng(28.401102, 83.689642), L.latLng(28.483700, 83.648625), L.latLng(28.284546, 83.608721), L.latLng(28.214277, 83.957303)],
    routeWhileDragging: false
  }).addTo(map);
});
