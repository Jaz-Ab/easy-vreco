let begin = () => {
  let $btnFindMe = $('#find-me');
  let $map = $('#map');
  let findMe = () => {
    //  encontrando latitud y longitud
    let location = (position) => {
      let latitude =  position.coords.latitude;
      let longitude = position.coords.longitude;
      $map.html(`
        <p>Latitud : ${latitude} <br>
        Longitud : ${longitude}</p>
      `)
    };
    let error = () => {
      $map.html('<p> No se pudo obtener tu ubicación </p>')
    };
    //  verificando si soporta geolocation
    if (navigator.geolocation) {
      $map.html('<p>Soporta geolocation</p>');
    } else {
      $map.html('<p>No Soporta geolocation</p>');
    }
    navigator.geolocation.getCurrentPosition(location, error);

  };

  $btnFindMe.on('click', findMe);
}
$(document).ready(begin);
