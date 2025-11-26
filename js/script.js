if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    const workSection = document.getElementById('my-work-section');
    const offset = 50;
    const scrollToPosition = workSection.offsetTop - offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth"
    });
  })
}

var aboutmeButtons = document.getElementsByClassName('about-me-link');

for (let i = 0; i < aboutmeButtons.length; i++) {
  aboutmeButtons[i].addEventListener("click", function () {
    const aboutSection = document.getElementById('about-section');
    const offset = 100;
    const scrollToPosition = aboutSection.offsetTop - offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth"
    });
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

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  if (!btn) { return; } // safety check
  btn.addEventListener('click', e => {
    e.preventDefault();  // stops any default form submit

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const bodyText = `
Hello Zhiqiang,

${message}

You may contact me at ${email}



Thank you,
${name}
`.trim();
    const mailtoLink = [
      'mailto:zhiqiang.li017@gmail.com',
      '?subject=' + encodeURIComponent(subject),
      '&body=' + encodeURIComponent(bodyText)
    ].join('');

    console.log('Mailto URL:', mailtoLink);
    window.location.href = mailtoLink;
  });
});

function smoothSlide() {
  const items = document.querySelectorAll(".slide-target:not(.slide-in)");

  items.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add("slide-in");
    }
  });
}

window.addEventListener("scroll", () => {
  requestAnimationFrame(smoothSlide);
});

smoothSlide();




// Get the video
