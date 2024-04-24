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

