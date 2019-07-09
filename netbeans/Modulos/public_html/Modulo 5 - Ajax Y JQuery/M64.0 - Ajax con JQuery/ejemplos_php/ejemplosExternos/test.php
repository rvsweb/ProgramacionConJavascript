<?php
if (isset($_POST['type'])) {
  if ($_POST['type'] == 'check') {
    echo "<div>Envio un 'type' y recibe el texto <span>check</span> : " . $_POST['type'] . "</div>";
  }
}

if (isset($_GET['type'])) {
  if ($_GET['type'] == 'check') {
    echo "<div>Envio un 'type' y recibe el texto <span>check</span> : " . $_GET['type'] . "</div>";
  }
}
