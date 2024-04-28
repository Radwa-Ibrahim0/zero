function FurtherInfoC1() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-c1').style.display = 'block';
}
function FurtherInfoC2() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-c2').style.display = 'block';
}
function FurtherInfoC3() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-c3').style.display = 'block';
}

function FurtherInfoV1() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-v1').style.display = 'block';
}
function FurtherInfoV2() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-v2').style.display = 'block';
}
function FurtherInfoB() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-b').style.display = 'block';
}

function FurtherInfoF1() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-f1').style.display = 'block';
}
function FurtherInfoF2() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-f2').style.display = 'block';
}

function FurtherInfoF3() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-f3').style.display = 'block';
}

function FurtherInfoX() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-x').style.display = 'block';
}
function FurtherInfoY() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-y').style.display = 'block';
}

function FurtherInfoZ() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-z').style.display = 'block';
}

function closePopupC1() {
  var popup = document.getElementById("popup-c1");
  var popupForm = document.getElementById('contact-c1');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupC2() {
  var popup = document.getElementById("popup-c2");
  var popupForm = document.getElementById('contact-c2');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupC3() {
  var popup = document.getElementById("popup-c3");
  var popupForm = document.getElementById('contact-c3');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupV1() {
  var popup = document.getElementById("popup-v1");
  var popupForm = document.getElementById('contact-v1');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupV2(event) {
  var popup = document.getElementById("popup-v2");
  var popupForm = document.getElementById('contact-v2');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupB() {
  var popup = document.getElementById("popup-b");
  var popupForm = document.getElementById('contact-b');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupF1() {
  var popup = document.getElementById("popup-f1");
  var popupForm = document.getElementById('contact-f1');
  popup.style.display = 'none';
  popupForm.reset();
}

function closePopupF2() {
  var popup = document.getElementById("popup-f2");
  var popupForm = document.getElementById('contact-f2');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupF3() {
  var popup = document.getElementById("popup-f3");
  var popupForm = document.getElementById('contact-f3');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupX() {
  var popup = document.getElementById("popup-x");
  var popupForm = document.getElementById('contact-x');
  popup.style.display = 'none';
  popupForm.reset();
}

function closePopupY() {
  var popup = document.getElementById("popup-y");
  var popupForm = document.getElementById('contact-y');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupZ() {
  var popup = document.getElementById("popup-z");
  var popupForm = document.getElementById('contact-z');
  popup.style.display = "none";
  popupForm.reset();
}



document.addEventListener('DOMContentLoaded', function() {
  var popupForm = document.getElementById('subscribe');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popupForm.reset();
    alert('Thank you for subscribing to our Newsletter!');
  });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup-f1');
    var popupForm = document.getElementById('contact-f1');
  
    popupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      popup.style.display = 'none';
      popupForm.reset();
      alert('Thank you for your donation!');
    });
    });

    document.addEventListener('DOMContentLoaded', function() {
      var popup = document.getElementById('popup-f2');
      var popupForm = document.getElementById('contact-f2');
    
      popupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        popup.style.display = 'none';
        popupForm.reset();
        alert('Thank you for your donation!');
      });
      });

      document.addEventListener('DOMContentLoaded', function() {
        var popup = document.getElementById('popup-f3');
        var popupForm = document.getElementById('contact-f3');
      
        popupForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form submission
          popup.style.display = 'none';
          popupForm.reset();
          alert('Thank you for your donation!');
        });
        });

        document.addEventListener('DOMContentLoaded', function() {
          var popup = document.getElementById('popup-c1');
          var popupForm = document.getElementById('contact-c1');
        
          popupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            popup.style.display = 'none';
            popupForm.reset();
            alert('Thank you for your donation!');
          });
          });

          document.addEventListener('DOMContentLoaded', function() {
            var popup = document.getElementById('popup-c2');
            var popupForm = document.getElementById('contact-c2');
          
            popupForm.addEventListener('submit', function(event) {
              event.preventDefault(); // Prevent form submission
              popup.style.display = 'none';
              popupForm.reset();
              alert('Thank you for your donation!');
            });
            });

            document.addEventListener('DOMContentLoaded', function() {
              var popup = document.getElementById('popup-c3');
              var popupForm = document.getElementById('contact-c3');
            
              popupForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent form submission
                popup.style.display = 'none';
                popupForm.reset();
                alert('Thank you for your donation!');
              });
              });

              document.addEventListener('DOMContentLoaded', function() {
                var popup = document.getElementById('popup-v1');
                var popupForm = document.getElementById('contact-v1');
              
                popupForm.addEventListener('submit', function(event) {
                  event.preventDefault(); // Prevent form submission
                  popup.style.display = 'none';
                  popupForm.reset();
                  alert('Thank you for your donation!');
                });
                });

                document.addEventListener('DOMContentLoaded', function() {
                  var popup = document.getElementById('popup-v2');
                  var popupForm = document.getElementById('contact-v2');
                
                  popupForm.addEventListener('submit', function(event) {
                    event.preventDefault(); // Prevent form submission
                    popup.style.display = 'none';
                    popupForm.reset();
                    alert('Thank you for your donation!');
                  });
                  });

                  document.addEventListener('DOMContentLoaded', function() {
                    var popup = document.getElementById('popup-x');
                    var popupForm = document.getElementById('contact-x');
                  
                    popupForm.addEventListener('submit', function(event) {
                      event.preventDefault(); // Prevent form submission
                      popup.style.display = 'none';
                      popupForm.reset();
                      alert('Thank you for your donation!');
                    });
                    });

                    document.addEventListener('DOMContentLoaded', function() {
                      var popup = document.getElementById('popup-y');
                      var popupForm = document.getElementById('contact-y');
                    
                      popupForm.addEventListener('submit', function(event) {
                        event.preventDefault(); // Prevent form submission
                        popup.style.display = 'none';
                        popupForm.reset();
                        alert('Thank you for your donation!');
                      });
                      });

                      document.addEventListener('DOMContentLoaded', function() {
                        var popup = document.getElementById('popup-z');
                        var popupForm = document.getElementById('contact-z');
                      
                        popupForm.addEventListener('submit', function(event) {
                          event.preventDefault(); // Prevent form submission
                          popup.style.display = 'none';
                          popupForm.reset();
                          alert('Thank you for your donation!');
                        });
                        });

                        document.addEventListener('DOMContentLoaded', function() {
                          var popup = document.getElementById('popup-b');
                          var popupForm = document.getElementById('contact-b');
                        
                          popupForm.addEventListener('submit', function(event) {
                            event.preventDefault(); // Prevent form submission
                            popup.style.display = 'none';
                            popupForm.reset();
                            alert('Thank you for your donation!');
                          });
                          });

  function showSecondDropdown(event, option) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    var secondDropdown = document.getElementById("second-dropdown");
    var secondDropdownContent = secondDropdown.querySelector(".dropdown-content");
    var secondDropbtn = document.getElementById("second-dropbtn");
    // Clear existing options
    secondDropdownContent.innerHTML = "";
    // Populate options based on the selected option from the first dropdown
    if (option === "Option 1") {
      secondDropdownContent.innerHTML += `
        <a href="#pedia" onclick="stopPropagation(event)">Pediatrics</a>
        <a href="#onco" onclick="stopPropagation(event)">Oncology</a>
        <a href="#cardi" onclick="stopPropagation(event)">Cardiology</a>
        <a href="#den" onclick="stopPropagation(event)">Dentition</a>
        <a href="#ortho" onclick="stopPropagation(event)">Orthopedics</a>
      `;
      secondDropbtn.textContent = "Filter by Speciality";
    } else if (option === "Option 2") {
      secondDropdownContent.innerHTML += `
      <a href="#alex" onclick="stopPropagation(event)">Alexandria</a>
      <a href="#cairo" onclick="stopPropagation(event)">Cairo</a>
      <a href="#fayoum" onclick="stopPropagation(event)">Fayoum</a>
      `;
      secondDropbtn.textContent = "Filter by Governorate";
    } else if (option === "Option 3") {
      secondDropdownContent.innerHTML += `
        <a href="#gleem" onclick="stopPropagation(event)">Gleem</a>
        <a href="#maadi" onclick="stopPropagation(event)">Maadi</a>
        <a href="#nasr" onclick="stopPropagation(event)">Madinet Nasr</a>
        <a href="#tirsa" onclick="stopPropagation(event)">Tirsa</a>
      `;
      secondDropbtn.textContent = "Filter by Area";
    } else if (option === "Option 4") {
      secondDropdownContent.innerHTML += `
        <a href="#misr" onclick="stopPropagation(event)">Misr El Kheir</a>
        <a href="#resala" onclick="stopPropagation(event)">Resala</a>
        <a href="#orman" onclick="stopPropagation(event)">Al-Orman</a>
        <a href="#57" onclick="stopPropagation(event)">57357</a>
        <a href="#red" onclick="stopPropagation(event)">Red Cresent</a>
      `;
      secondDropbtn.textContent = "Filter by Organization";
    }
    // Show the second dropdown
    secondDropdown.style.display = "inline-block";
  }
  
  function stopPropagation(event) {
    event.stopPropagation(); // Prevent event from bubbling up
  }

  var eventTriggered = false;

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

   // Event listener for scroll event
   window.addEventListener('scroll', function() {
    executeOnScroll();
  });
  
  // Function to execute when the target div is scrolled into view
  function executeOnScroll() {
    if(!eventTriggered){
    var targetDiv = document.getElementById('counter');
    if (isInViewport(targetDiv)) {
      var counter = document.getElementById('counter');
      var count = 0;
    
      function updateCounter() {
        if (count < 53920) {
          count += Math.floor(Math.random() * 1000) + 1; 
          counter.textContent = count;
          setTimeout(updateCounter, 10); 
        } else {
          counter.textContent = 53920;
          eventTriggered = true;
        }
      }
    
        updateCounter();
      }
    }
  }
  