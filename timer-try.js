var end = 10;

function doThings(start) {
  for (var i = start; i < end; i++) {
    console.log(i);
    if (5 === i) {
      setTimeout(function () {
        doThings(i + 1);
      }, 2000);
      break;
    }
  }
}

doThings(0);
