
        // script for social media links
function openWhatsApp(){
    var phoneNumber = '+260766629184';
    var whatsappLink = 'https://wa.me/' + phoneNumber;
    window.open(whatsappLink, '_blank');
}

function openFacebook() {
    window.open('https://web.facebook.com/profile.php?id=100094293843729', '_blank');
}

function openTwitter() {
    window.open('https://twitter.com/yourhandle', '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com/yourprofile', '_blank');
}
        // script for sending message using email
        const form = document.querySelector("form");
        const fullName = document.getElementById("name")
        const email = document.getElementById("email")
        const phone = document.getElementById("phone")
        const subject = document.getElementById("subject")
        const message = document.getElementById("message")


        function sendEmail(){
            const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${message.value}`;

            Email.send({
                SecureToken : "aa1293b1-6aa5-4fd6-8600-0715a26b333d",
                 To : 'maxaslukwesa0@gmail.com',
                 From : "maxaslukwesa0@gmail.com",
                 Subject : subject.value,
                 Body : bodyMessage
            }).then(
                 message => {
                    if (message == "OK"){
                        Swal.fire({
                         title: "Success!",
                         text: "Message sent successfully!",
                         icon: "success"
                     });
                    }
                 }
           );
        }

        function checkInputs(){
            const items = document.querySelectorAll(".item")
            for (const item of items){
                if(item.value == ""){
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }

              if (items[1].value != ""){
                checkEmail();
              }
              items[1].addEventListener("keyup", () => {
                checkEmail();
              });

                item.addEventListener("keyup", () => {
                    if(item.value != ""){
                        item.classList.remove("error");
                        item.parentElement.classList.remove("error");
                    }
                    else{
                        item.classList.add("error");
                        item.parentElement.classList.add("error");
                    }
                });
            }
        }

        function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTextEmail = document.querySelector(".error-text.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");  // Remove the dot before "error"
        email.parentElement.classList.add("error");

        if (email.value !== "") {
            errorTextEmail.innerText = "Enter a valid email address";
        } else {
            errorTextEmail.innerText = "Email Address can't be blank";
        }
    } else {
        email.classList.remove("error");  // Remove the dot before "error"
        email.parentElement.classList.remove("error");
    }
}
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            checkInputs();
            if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")){
                sendEmail();

                form.reset();
                return false;
            }

        });

        /*
    
document.addEventListener('DOMContentLoaded', function () {
  const two = document.querySelector('.two');
  const nav = document.querySelector('nav');
  const homeImage = document.querySelector('.home-image');

  // Get the height of the header
  const navHeight = nav.offsetHeight;

  // Set the initial top position of the home image container
  homeImage.style.marginTop = navHeight + 'px';

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    // Adjust the top margin of the home image container based on the scroll position
    homeImage.style.marginTop = Math.max(navHeight - scrollY, 0) + 'px';
  });
});

*/
        // the munue bar and side bar
        function openNav() {
            document.getElementById("mySidebar").style.width = "180px";
            document.getElementById("main").style.marginRight = "180px";
        }
    
        function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginRight= "0";
        }
    // end of the munue bar and side bar
    
    // code for downloading the CV
    

        // munue bar
    
        function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'
        }

        function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
