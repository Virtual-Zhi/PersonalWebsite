
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    //document.querySelector('header').classList.add('show');
    document.querySelector('.navbar').classList.add('show');
  } else {
    // user has scrolled down
    //document.querySelector('header').classList.remove('show');
    document.querySelector('.navbar').classList.remove('show');
  }

  if (prevScrollPos <= 0 || currentScrollPos <= 0) {
    document.querySelector('.navbar').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});


if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({ behavior: "smooth" })
    document.querySelector('.navbar').classList.remove('show');
  })
}

var aboutmeButtons = document.getElementsByClassName('about-me-link');

for (let i = 0; i < aboutmeButtons.length; i++) {
  aboutmeButtons[i].addEventListener("click", function () {
    document.getElementById('about-section').scrollIntoView({ behavior: "smooth" })
    document.querySelector('.navbar').classList.remove('show');
  })
}

if (document.getElementById('title-link')) {
  document.getElementById('title-link').addEventListener('click', () => {
    document.getElementById('title').scrollIntoView({ behavior: "smooth" })

  })
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById('btn').addEventListener('click', function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var body = "Hello Zhiqiang,%0D%0A%0D%0A" + message + "%0D%0A%0D%0AYou may contact me at " + email + "%0D%0A%0D%0A%0D%0AThank you,%0D%0A" + name + "%0D%0A%0D%0A";
  window.location.href = "mailto:zhiqiang.li017@gmail.com?subject=" + subject + "&body=" + body;
})



// Get the video
