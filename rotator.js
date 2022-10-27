(function () {
  "use strict";

  let counter = 1;

  function contentRotator() {
    $(`#content .slide:nth-child(${counter})`).fadeIn(2000, function () {
      if ($(this).is("#content .slide:last-child")) {
        setTimeout(function () {
          $(`#content .slide:nth-child(${counter})`).fadeOut(2000, function () {
            counter = 1;
            contentRotator();
          });
        }, 7000);
      } else {
        setTimeout(function () {
          $(`#content .slide:nth-child(${counter})`).fadeOut(2000, function () {
            counter++;
            contentRotator();
          });
        }, 7000);
      }
    });
  }

  contentRotator();
})();
