let textElem = document.querySelector("#text-writing");

var typewriter = new Typewriter(textElem, {
    loop: true,
    delay: 100,
  });
  
  typewriter
    // .pauseFor(2500)
    .typeString('a front-End developer')
    .pauseFor(650)
    .deleteAll()
    .typeString('a JS developer')
    .pauseFor(650)
    .deleteAll()
    .typeString('a React developer')
    .pauseFor(1000)
    .start();