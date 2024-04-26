/*
-------------------Donor Main------------------
*/
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
  popupForm.reset();
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
  popupForm.reset();
  alert('Thank you for submitting a form!');
});
});


/*
-------------------Food Cases------------------
*/
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
  var popupForm = document.getElementById('subscribe');

  popupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popupForm.reset();
    alert('Thank you for subscribing to our Newsletter!');
  });
  });



