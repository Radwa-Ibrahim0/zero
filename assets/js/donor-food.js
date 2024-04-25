function checkFilesTeacher(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  var input = document.getElementById('file-upload-t');
  if (input.files && input.files.length > 0) {
    // Files were uploaded
    alert('Files were uploaded successfully! You are now verified as a teacher.');
    document.getElementById('popup-t').style.display = 'block';
  } else {
    // No files were uploaded
    alert('No files were uploaded.');
  }
}

function FurtherInfoFoodC1() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-c1').style.display = 'block';
}
function FurtherInfoFoodC2() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-c2').style.display = 'block';
}
function FurtherInfoFoodC3() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-c3').style.display = 'block';
}

function FurtherInfoFoodV1() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-v1').style.display = 'block';
}
function FurtherInfoFoodV2() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-v2').style.display = 'block';
}
function FurtherInfoFoodB() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-b').style.display = 'block';
}

function FurtherInfoFoodF1() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-f1').style.display = 'block';
}
function FurtherInfoFoodF2() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-f2').style.display = 'block';
}

function FurtherInfoFoodF3() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-f3').style.display = 'block';
}

function closePopupC1() {
  var popup = document.getElementById("popup-c1");
  popup.style.display = "none";
}
function closePopupC2() {
  var popup = document.getElementById("popup-c2");
  popup.style.display = "none";
}
function closePopupC3() {
  var popup = document.getElementById("popup-c3");
  popup.style.display = "none";
}
function closePopupV1() {
  var popup = document.getElementById("popup-v1");
  popup.style.display = "none";
}
function closePopupV2() {
  var popup = document.getElementById("popup-v2");
  popup.style.display = "none";
}
function closePopupB() {
  var popup = document.getElementById("popup-b");
  popup.style.display = "none";
}
function closePopupF1() {
  var popup = document.getElementById("popup-f1");
  popup.style.display = "none";
}
function closePopupF2() {
  var popup = document.getElementById("popup-f2");
  popup.style.display = "none";
}
function closePopupF3() {
  var popup = document.getElementById("popup-f3");
  popup.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('check-button-teacher');
  button.addEventListener('click', function(event) {
    checkFilesTeacher(event); // Pass the event to the function
  });
});

function checkFilesDoctor(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  var input = document.getElementById('file-upload');
  if (input.files && input.files.length > 0) {
    // Files were uploaded
    alert('Files were uploaded successfully! You are now verified as a doctor.');
    document.getElementById('popup').style.display = 'block';
  } else {
    // No files were uploaded
    alert('No files were uploaded.');
  }
}

// Attach an event listener to the button
document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('check-button-doctor');
  button.addEventListener('click', function(event) {
    checkFilesDoctor(event); // Pass the event to the function
});
});



document.addEventListener('DOMContentLoaded', function() {
  var closePopupButton = document.getElementById('close-popup');
  var popup = document.getElementById('popup');

  closePopupButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  var popupForm = document.getElementById('contact');
  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    alert('Thank you for submitting a form!');
  });
});




document.addEventListener('DOMContentLoaded', function() {
  var closePopupButton = document.getElementById('close-popup-t');
  var popup = document.getElementById('popup-t');

  closePopupButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  var popupForm = document.getElementById('contact-t');
  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    alert('Thank you for submitting a form!');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var closePopupButton = document.getElementById('close-popup-mac');
  var popup = document.getElementById('popup-c');

  closePopupButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  window.addEventListener('click', function() {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  var popupForm = document.getElementById('contact-mac');
  popupForm.addEventListener('give', function() {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    alert('Thank you for Donating!');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var closePopupButton = document.getElementById('close-popup-mac');
  var popup = document.getElementById('popup-x');

  closePopupButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  window.addEventListener('click', function() {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  var popupForm = document.getElementById('contact-mac');
  popupForm.addEventListener('give', function() {
    event.preventDefault(); // Prevent form submission
    popup.style.display = 'none';
    alert('Thank you for Donating!');
  });
});

