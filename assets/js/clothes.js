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
  var popupForm = document.getElementById('contact-c1');
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

function closePopupDel() {
  var popup = document.getElementById("popup-del");
  var popupForm = document.getElementById('contact-del');
  popup.style.display = "none";
  popupForm.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup-del');
  var popupForm = document.getElementById('contact-del');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    popupForm.reset();
    alert('Thank you for your donation!');
  });
  });

document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup-f1');
  var popupForm = document.getElementById('contact-f1');
  var popupDel = document.getElementById('popup-del');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    popupForm.reset();
    popupDel.style.display = 'block';
  });
  });

  document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup-f2');
  var popupForm = document.getElementById('contact-f2');
  var popupDel = document.getElementById('popup-del');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    popupForm.reset();
    popupDel.style.display = 'block';
  });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup-f3');
    var popupForm = document.getElementById('contact-f3');
    var popupDel = document.getElementById('popup-del');
  
    popupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      popup.style.display = 'none';
      popupForm.reset();
      popupDel.style.display = 'block';
    });
    });

  document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup-c1');
    var popupForm = document.getElementById('contact-c1');
    var popupDel = document.getElementById('popup-del');
  
    popupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      popup.style.display = 'none';
      popupForm.reset();
      popupDel.style.display = 'block';
    });
    });
  
  document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup-c2');
  var popupForm = document.getElementById('contact-c2');
  var popupDel = document.getElementById('popup-del');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    popupForm.reset();
    popupDel.style.display = 'block';
  });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup-c3');
    var popupForm = document.getElementById('contact-c3');
    var popupDel = document.getElementById('popup-del');
  
    popupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      popup.style.display = 'none';
      popupForm.reset();
      popupDel.style.display = 'block';
    });
    });


  document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup-v1');
    var popupForm = document.getElementById('contact-v1');
    var popupDel = document.getElementById('popup-del');
  
    popupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      popup.style.display = 'none';
      popupForm.reset();
      popupDel.style.display = 'block';
    });
    });
  
  document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup-v2');
  var popupForm = document.getElementById('contact-v2');
  var popupDel = document.getElementById('popup-del');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    popupForm.reset();
    popupDel.style.display = 'block';
  });
  });

document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup-b');
  var popupForm = document.getElementById('contact-b');
  var popupDel = document.getElementById('popup-del');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    popupForm.reset();
    popupDel.style.display = 'block';
  });
  });

document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup-x');
  var popupForm = document.getElementById('contact-x');
  var popupDel = document.getElementById('popup-del');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    popupForm.reset();
    popupDel.style.display = 'block';
  });
  });

document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup-y');
  var popupForm = document.getElementById('contact-y');
  var popupDel = document.getElementById('popup-del');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    popupForm.reset();
    popupDel.style.display = 'block';
  });
  });

document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup-z');
  var popupForm = document.getElementById('contact-z');
  var popupDel = document.getElementById('popup-del');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    popupForm.reset();
    popupDel.style.display = 'block';
  });
  });

document.addEventListener('DOMContentLoaded', function() {
  var popupForm = document.getElementById('subscribe');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popupForm.reset();
    alert('Thank you for subscribing to our Newsletter!');
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
        <a href="#age1" onclick="stopPropagation(event)">0-24 months</a>
        <a href="#age2" onclick="stopPropagation(event)">2-5 years</a>
        <a href="#age3" onclick="stopPropagation(event)">5-12 years</a>
        <a href="#age4" onclick="stopPropagation(event)">12-15 years</a>
        <a href="#age5" onclick="stopPropagation(event)">adults years</a>
      `;
      secondDropbtn.textContent = "Filter by Age";
    } else if (option === "Option 2") {
      secondDropdownContent.innerHTML += `
        <a href="#female" onclick="stopPropagation(event)">Female</a>
        <a href="#male" onclick="stopPropagation(event)">Male</a>
      `;
      secondDropbtn.textContent = "Filter by Gender";
    } else if (option === "Option 3") {
      secondDropdownContent.innerHTML += `
        <a href="#summer" onclick="stopPropagation(event)">Summer</a>
        <a href="#winter" onclick="stopPropagation(event)">Winter</a>
      `;
      secondDropbtn.textContent = "Filter by Season";
    }
    // Show the second dropdown
    secondDropdown.style.display = "inline-block";
  }
  
  function stopPropagation(event) {
    event.stopPropagation(); // Prevent event from bubbling up
  }
