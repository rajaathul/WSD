function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you, ${name}! Your message has been sent:\n\nEmail: ${email}\nMessage: ${message}`);
  }

  const navLinks = document.querySelectorAll('nav a');
  const frames = document.querySelectorAll('.frame');
  const links = document.querySelectorAll('a[href^="#"]');
  const headerHeight = document.getElementsByTagName("nav")[0].offsetHeight;
  
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
  
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top;
        const offsetPosition = sectionPosition - headerHeight;
  
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
 
  