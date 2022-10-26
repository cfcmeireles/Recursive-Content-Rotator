(function () {
  "use strict";

  let counter = 1;
  console.log(content.children);

  function contentRotator() {
    $(`#content .slide:nth-child(${counter}) img`).fadeIn(2000, function () {
      if ($(this).is("#content .slide:last-child img")) {
        setTimeout(function () {
          $(`#content .slide:nth-child(${counter}) img`).fadeOut(2000, function () {
            counter = 1;
            contentRotator();
          });
        }, 7000);
      } else {
        setTimeout(function () {
          $(`#content .slide:nth-child(${counter}) img`).fadeOut(2000, function () {
            counter++;
            contentRotator();
          });
        }, 7000);
      }
    });
  }

  /*  let timer = 1;

  function paragraphRotator() {
    $(`#paragraphs p:nth-child(${timer})`).fadeIn(2000, function () {
      if ($(this).is("#paragraphs p:last-child")) {
        setTimeout(function () {
          $(`#paragraphs p:nth-child(${timer})`).fadeOut(2000, function () {
            timer = 1;
            paragraphRotator();
          });
        }, 7000);
      } else {
        setTimeout(function () {
          $(`#paragraphs p:nth-child(${timer})`).fadeOut(2000, function () {
            timer++;
            paragraphRotator();
          });
        }, 7000);
      }
    });
  } */
  contentRotator();
  /*   paragraphRotator(); */
})();
