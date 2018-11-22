$(document).ready(function() {
    $('#bt1').click(function() {
        $('#fr1').attr('action',
                       $('#tb2').val() +'?subject=' +
                       $('#tb3').val() + '&body=' + $('#tb4').val());
        $('#fr1').submit();
    });
  });


