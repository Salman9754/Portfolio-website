document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const navLinks = document.querySelectorAll('.offcanvas .items a');


navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    const targetHref = link.getAttribute('href'); 

    
    const offcanvasElement = document.getElementById('offcanvasRight');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);

    if (offcanvasInstance) {
      offcanvasInstance.hide();

      
      offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
        window.location.href = targetHref;
      }, { once: true });
    } else {
      
      window.location.href = targetHref;
    }
  });
});

const nameElement = document.querySelector(".intro h1");
const nameText = nameElement.textContent;
nameElement.textContent = ""; 

let indexForName = 0;
const typingSpeedForName = 250; 

function typeWriterForName() {
  if (indexForName < nameText.length) {
    nameElement.textContent += nameText.charAt(indexForName);
    indexForName++;
    setTimeout(typeWriterForName, typingSpeedForName); 
  }
}


window.addEventListener("load", () => {
  typeWriterForName();
});

const textElement = document.querySelector(".intro_text span");
const text = textElement.textContent;
textElement.textContent = ""; 

let index = 0;
const typingSpeed = 50; 

function typeWriter() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed); 
  }
}


window.addEventListener("load", () => {
  typeWriter();
});

const footerMessage = document.getElementById("footerMessage");
const hour = new Date().getHours();

if (hour < 12) {
  footerMessage.textContent = "Good Morning! Thanks for visiting.";
} else if (hour < 18) {
  footerMessage.textContent = "Good Afternoon! Thanks for visiting.";
} else {
  footerMessage.textContent = "Good Evening! Thanks for visiting.";
}
