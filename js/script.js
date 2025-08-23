if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    const workSection = document.getElementById('my-work-section');
    const offset = 50;  
    const scrollToPosition = workSection.offsetTop - offset;
    
    window.scrollTo({
        top: scrollToPosition, 
        behavior: "smooth"
    });
    document.querySelector('.navbar').classList.remove('show');
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


document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.about-image');
  const content = document.querySelector('.about-section-content');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // grab individual delay
      const delay = entry.target.dataset.delay || 0;
      entry.target.style.setProperty('--delay', `${delay}ms`);

      if (entry.isIntersecting) {
        // slide in when ≥1px (threshold:0) is visible
        entry.target.classList.add('slide-in');
      } else {
        // slide back out when it leaves
        entry.target.classList.remove('slide-in');
      }
    });
  }, {
    threshold: 0    // fire as soon as any part is in/out
  });

  observer.observe(content);
  observer.observe(document.getElementById("about-header-text"));

  // assign delays & start observing
  images.forEach((img, i) => {
    // auto‐calculate if you prefer:
    // img.dataset.delay = i * 200;
    observer.observe(img);
  });




});


let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos >= currentScrollPos) {
    // user has scrolled up
    //document.querySelector('header').classList.add('show');
    document.querySelector('.navbar').classList.add('show');
  } else {
    // user has scrolled down
    //document.querySelector('header').classList.remove('show');
    document.querySelector('.navbar').classList.remove('show');
  }

  if (currentScrollPos <= 0) {
    document.querySelector('.navbar').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});


// Get the video
