// WhatsApp form submit
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;

  const text = `Hi PrimeLedger,%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ARequirement: ${msg}`;
  window.open(`https://wa.me/917411373153?text=${text}`, "_blank");
});

// Dark mode toggle
document.getElementById("darkToggle").addEventListener("click", function(){
  document.body.classList.toggle("dark");
});

// Testimonials slider
const slides = document.querySelectorAll(".slide");
let i = 0;
setInterval(() => {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}, 3500);