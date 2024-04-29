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


document.addEventListener('DOMContentLoaded', function() {
  var popupFormTeacher = document.getElementById('contact-td');
  var popupFormDoctor = document.getElementById('contact-td2');
  var popupTeacher = document.getElementById('subscribe-t');
  var popupDoctor = document.getElementById('subscribe-d');

  popupFormTeacher.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popupDoctor.style.display = 'none';
    popupDoctor.style.opacity = '0';
    setTimeout(function() {
      popupTeacher.style.opacity = '1';
    }, 200); 
    popupTeacher.style.display = 'block'
  });

  popupFormDoctor.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    popupTeacher.style.display = 'none';
    popupTeacher.style.opacity = '0';
    setTimeout(function() {
      popupDoctor.style.opacity = '1';
    }, 200); 
    popupDoctor.style.display = 'block';
  });
});




function redirectToys(){
  window.location.href = "Toys.html";
}
function redirectFood(){
  window.location.href = "Food.html";
}
function redirectClothes(){
  window.location.href = "Clothes.html";
}
function redirectMedical(){
  window.location.href = "Medical.html";
}
function redirectSchool(){
  window.location.href = "School.html";
}
function redirectBlood(){
  window.location.href = "blood.html";
}
function redirectTeaching(){
  window.location.href = "teaching.html";
}
function redirectDoctor(){
  window.location.href = "Doctor.html";
}



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

function FurtherInfoA() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-a').style.display = 'block';
}

function FurtherInfoJ() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-j').style.display = 'block';
}

function FurtherInfoR() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-r').style.display = 'block';
}

function FurtherInfoO1() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-o1').style.display = 'block';
}

function FurtherInfoO2() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-o2').style.display = 'block';
}

function FurtherInfoO3() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-o3').style.display = 'block';
}

function FurtherInfoO4() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-o4').style.display = 'block';
}

function FurtherInfoO5() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-o5').style.display = 'block';
}

function FurtherInfoO6() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-o6').style.display = 'block';
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

function closePopupA() {
  var popup = document.getElementById("popup-a");
  var popupForm = document.getElementById('contact-a');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupJ() {
  var popup = document.getElementById("popup-j");
  var popupForm = document.getElementById('contact-j');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupR() {
  var popup = document.getElementById("popup-r");
  var popupForm = document.getElementById('contact-r');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupO1() {
  var popup = document.getElementById("popup-o1");
  popup.style.display = "none";
}

function closePopupO2() {
  var popup = document.getElementById("popup-o2");
  popup.style.display = "none";
}

function closePopupO3() {
  var popup = document.getElementById("popup-o3");
  popup.style.display = "none";
}

function closePopupO4() {
  var popup = document.getElementById("popup-o4");
  popup.style.display = "none";
}

function closePopupO5() {
  var popup = document.getElementById("popup-o5");
  popup.style.display = "none";
}

function closePopupO6() {
  var popup = document.getElementById("popup-o6");
  popup.style.display = "none";
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
    var popup = document.getElementById('popup-a');
    var popupForm = document.getElementById('contact-a');
    var popupDel = document.getElementById('popup-del');
  
    popupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      popup.style.display = 'none';
      popupForm.reset();
      popupDel.style.display = 'block';
    });
    });

    document.addEventListener('DOMContentLoaded', function() {
      var popup = document.getElementById('popup-j');
      var popupForm = document.getElementById('contact-j');
      var popupDel = document.getElementById('popup-del');
    
      popupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        popup.style.display = 'none';
        popupForm.reset();
        popupDel.style.display = 'block';
      });
      });

      document.addEventListener('DOMContentLoaded', function() {
        var popup = document.getElementById('popup-r');
        var popupForm = document.getElementById('contact-r');
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

  var eventTriggered = false;
  var eventTriggered1 = false;
  var eventTriggered2 = false;

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
        if (count < 97370) {
          count += Math.floor(Math.random() * 1000) + 1; 
          counter.textContent = count;
          setTimeout(updateCounter, 5); 
        } else {
          counter.textContent = 97370;
          eventTriggered = true;
        }
      }
    
        updateCounter();
      }
    }
  }
  

 // Event listener for scroll event
 window.addEventListener('scroll', function() {
  executeOnScroll2();
});

  function executeOnScroll2() {
    if(!eventTriggered2){
    var targetDiv = document.getElementById('counter2');
    if (isInViewport(targetDiv)) {
      var counter = document.getElementById('counter2');
      var count = 0;
    
      function updateCounter() {
        if (count < 80609) {
          count += Math.floor(Math.random() * 1000) + 1;
          counter.textContent = count;
          setTimeout(updateCounter, 5); 
        } else {
          counter.textContent = 80609; 
          eventTriggered2 = true;
        }
      }

      updateCounter();
    }
  }
  }
  
 

  window.addEventListener('scroll', function() {
    executeOnScroll1();
  });

  function executeOnScroll1() {
    if(!eventTriggered1){
    var targetDiv = document.getElementById('counter1');
    if (isInViewport(targetDiv)) {
      var counter = document.getElementById('counter1');
      var count = 0;
    
      function updateCounter() {
        if (count < 79004) {
          count += Math.floor(Math.random() * 1000) + 1; 
          counter.textContent = count;
          setTimeout(updateCounter, 5); 
        } else {
          counter.textContent = 79004; 
          eventTriggered1 = true;
        }
      }
  
        updateCounter();
      }
    }
  }


  function performSearch() {
    var searchTerm = document.getElementById('searchBox').value;
    var firstItem = document.getElementById('first-item');
    var secondItem = document.getElementById('second-item');
    var thirdItem = document.getElementById('third-item');
    var forthItem = document.getElementById('forth-item');
    var fifthItem = document.getElementById('fifth-item');
    var sixthItem = document.getElementById('sixth-item');

    if(searchTerm === ''){
      firstItem.style.display = 'block';
      secondItem.style.display = 'block';
      thirdItem.style.display = 'block';
      forthItem.style.display = 'block';
      fifthItem.style.display = 'block';
      sixthItem.style.display = 'block';
    }
   else if (searchTerm.includes('orman')) { 
     firstItem.style.display = 'none';
      secondItem.style.display = 'none';
      thirdItem.style.display = 'none';
      forthItem.style.display = 'none';
      fifthItem.style.display = 'none';
      sixthItem.style.display = 'block';
    } 
    else if (searchTerm.includes('57357')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'block';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
     }
     else if (searchTerm.includes('misr el')) { 
      firstItem.style.display = 'block';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
     }
     else if (searchTerm.includes('food bank')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'block';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
     }
     else if (searchTerm.includes('resala')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'block';
       sixthItem.style.display = 'none';
     }
     else if (searchTerm.includes('red')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'block';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
     }
     else{
      firstItem.style.display = 'none';
      secondItem.style.display = 'none';
      thirdItem.style.display = 'none';
      forthItem.style.display = 'none';
      fifthItem.style.display = 'none';
      sixthItem.style.display = 'none';
     }
}



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
        <a href="#health" onclick="filterHealthcare(event)">Healthcare Organizations</a>
        <a href="#education" onclick="filterEducation(event)">Education Organizations</a>
        <a href="#humanitarian" onclick="filterHumanitarian(event)">Humanitarian Aid Organizations</a>
        <a href="#food-bank" onclick="filterBanks(event)">Food Banks</a>
      `;
      secondDropbtn.textContent = "Filter by Organization Type";
    } else if (option === "Option 2") {
      secondDropdownContent.innerHTML += `
      <a href="#alex" onclick="filterAlex(event)">Alexandria</a>
      <a href="#cairo" onclick="filterCairo(event)">Cairo</a>
      <a href="#fayoum" onclick="filterFayoum(event)">Fayoum</a>
      `;
      secondDropbtn.textContent = "Filter by Governorate";
    } else if (option === "Option 3") {
      secondDropdownContent.innerHTML += `
        <a href="#gleem" onclick="filterGleem(event)">Gleem</a>
        <a href="#maadi" onclick="filterMaadi(event)">Maadi</a>
        <a href="#nasr" onclick="filterNasr(event)">Madinet Nasr</a>
        <a href="#tirsa" onclick="filterTirsa(event)">Tirsa</a>
      `;
      secondDropbtn.textContent = "Filter by Area";
    }
    // Show the second dropdown
    secondDropdown.style.display = "inline-block";

  }
  
  function stopPropagation(event) {
    event.stopPropagation(); // Prevent event from bubbling up
  }

  function reject1() {
    document.getElementById('first-item').style.display = 'none';
  }

  function reject2() {
    document.getElementById('second-item').style.display = 'none';
  }

  function reject3() {
    document.getElementById('third-item').style.display = 'none';
  }

  function reject4() {
    document.getElementById('forth-item').style.display = 'none';
  }

  function reject5() {
    document.getElementById('fifth-item').style.display = 'none';
  }

  function verify1() {
    document.getElementById('seventh-item').style.display = 'block';
  }

  function verify2() {
    document.getElementById('eighth-item').style.display = 'block';
  }

  function verify3() {
    document.getElementById('nineth-item').style.display = 'block';
  }

  function verify4() {
    document.getElementById('tenth-item').style.display = 'block';
  }

  function verify5() {
    document.getElementById('eleventh-item').style.display = 'block';
  }

  document.getElementById("seventh-item").onclick = function() {
    document.getElementById("seventh-item").style.display = "none";
}


  function removeFilter() {
    document.getElementById('first-item').style.display = 'block';
    document.getElementById('second-item').style.display = 'block';
    document.getElementById('third-item').style.display = 'block';
    document.getElementById('forth-item').style.display = 'block';
    document.getElementById('fifth-item').style.display = 'block';
    document.getElementById('sixth-item').style.display = 'block';
  }
  function filterHealthcare(event) {
    event.stopPropagation();
    document.getElementById('first-item').style.display = 'block';
    document.getElementById('second-item').style.display = 'block';
    document.getElementById('third-item').style.display = 'block';
    document.getElementById('forth-item').style.display = 'none';
    document.getElementById('fifth-item').style.display = 'block';
    document.getElementById('sixth-item').style.display = 'none';
}

function filterHumanitarian(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
}

function filterBanks(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'block';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'block';
}

function filterEducation(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'block';
  document.getElementById('sixth-item').style.display = 'block';
}

function filterAlex(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'block';
}

function filterGleem(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'block';
}

function filterCairo(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'block';
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'block';
  document.getElementById('fifth-item').style.display = 'block';
  document.getElementById('sixth-item').style.display = 'block';
}

function filterNasr(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'block';
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
}

function filterMaadi(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'none';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'block';
  document.getElementById('fifth-item').style.display = 'block';
  document.getElementById('sixth-item').style.display = 'block';
}

function filterFayoum(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
}

function filterTirsa(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
}
 
 
