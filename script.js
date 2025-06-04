/* General Styling */
body {
font-family: 'Arial', sans-serif;
margin: 0;
padding: 0;
box-sizing: border-box;
color: #333;
}
.container {
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
}
/* Header */
header {
background-color: #2c3e50; /* Dark blue/grey */
color: #fff;
padding: 15px 0;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
header .container {
display: flex;
justify-content: space-between;
align-items: center;
}
header .logo h1 {
margin: 0;
font-size: 28px;
}
header nav ul {
list-style: none;
margin: 0;
padding: 0;
display: flex;
}
header nav ul li {
margin-left: 25px;
}
header nav ul li a {
color: #fff;
text-decoration: none;
font-weight: bold;
transition: color 0.3s ease;
}
header nav ul li a:hover {
color: #1abc9c; /* Teal */
}
/* Hero Section */
.hero-section {
background-color: #3498db; /* Light blue */
color: #fff;
text-align: center;
padding: 100px 0;
}
.hero-section h2 {
font-size: 48px;
margin-bottom: 20px;
}
.hero-section p {
font-size: 20px;
margin-bottom: 40px;
max-width: 700px;
margin-left: auto;
margin-right: auto;
}
.btn-primary {
background-color: #e74c3c; /* Red */
color: #fff;
padding: 15px 30px;
border: none;
border-radius: 5px;
font-size: 18px;
cursor: pointer;
transition: background-color 0.3s ease, transform 0.3s ease;
}
.btn-primary:hover {
background-color: #c0392b; /* Darker red */
transform: translateY(-3px); /* Slight lift effect */
}
/* Features Section */
.features-section {
padding: 80px 0;
background-color: #f9f9f9;
text-align: center;
}
.features-section h3 {
font-size: 36px;
margin-bottom: 50px;
color: #2c3e50;
}
.feature-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 30px;
}
.feature-item {
background-color: #fff;
padding: 30px;
border-radius: 8px;
box-shadow: 0 4px 10px rgba(0,0,0,0.05);
text-align: center;
}
.feature-item img {
margin-bottom: 20px;
}
.feature-item h4 {
font-size: 24px;
margin-bottom: 10px;
color: #3498db;
}
.feature-item p {
font-size: 16px;
color: #555;
}
/* Pricing and About sections - basic styling */
.pricing-section, .about-section {
padding: 60px 0;
text-align: center;
}
.pricing-section h3, .about-section h3 {
font-size: 36px;
margin-bottom: 20px;
color: #2c3e50;
}
/* Footer */
footer {
background-color: #2c3e50;
color: #fff;
padding: 30px 0;
text-align: center;
font-size: 14px;
}
footer .container {
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap; /* Allow wrapping on small screens */
}
footer .social-links a {
color: #fff;
text-decoration: none;
margin-left: 15px;
transition: color 0.3s ease;
}
footer .social-links a:hover {
color: #1abc9c;
}
/* Responsive Design */
@media (max-width: 768px) {
header .container {
flex-direction: column;
text-align: center;
}
header nav ul {
margin-top: 15px;
flex-direction: column;
align-items: center;
}
header nav ul li {
margin: 10px 0;
}
.hero-section h2 {
font-size: 36px;
}
.hero-section p {
font-size: 18px;
}
.feature-grid {
grid-template-columns: 1fr; /* Stack features on small screens
*/
}
footer .container {
flex-direction: column;
}
footer .social-links {
margin-top: 15px;
}
}
@media (max-width: 480px) {
.hero-section {
padding: 60px 0;
}
.hero-section h2 {
font-size: 30px;
}
.btn-primary {
padding: 12px 25px;
font-size: 16px;
}
.features-section h3,
.pricing-section h3,
.about-section h3 {
font-size: 28px;
}
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll("[data-dropdown]");

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector(".dropdown-toggle");

    toggle.addEventListener("click", e => {
      e.preventDefault();

      // Tutup dropdown lain
      dropdowns.forEach(item => {
        if (item !== dropdown) {
          item.classList.remove("active");
        }
      });

      // Toggle dropdown ini
      dropdown.classList.toggle("active");
    });
  });

  // Klik luar dropdown = tutup semua
  document.addEventListener("click", e => {
    if (!e.target.closest("[data-dropdown]")) {
      dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
    }
  });
});
