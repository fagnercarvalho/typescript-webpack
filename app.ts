import greeter from './ts/greeter';
import $ = require('jquery');

$(() => {
  $(document.body).html(greeter("Fagner"));
});
