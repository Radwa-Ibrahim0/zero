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

function checkPass() {
  var popup = document.getElementById('popup-f1');
  var popupForm = document.getElementById('contact-f1');
  var x = document.getElementById('new').value;
  var y = document.getElementById('check').value;
   
    if(x==y){
      alert('Password Changed Successfully');
      popup.style.display = 'none';
      popupForm.reset();
    }else{
      alert('Password Mismatch');
    }
    event.preventDefault(); // Prevent form submission
    
    

  }



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

  function verifyDon1(event) {
    event.preventDefault();
    alert('Doctor Verified and added to Verified Doctors!');
    document.getElementById('first-item-don').style.display = 'none';
    document.getElementById('seventh-item-doc').style.display = 'block';
    verifyFirst = true;
  }

  function verifyDon2(event) {
    event.preventDefault();
    alert('Teacher Verified and added to Verified Teachers!');
    document.getElementById('second-item-don').style.display = 'none';
    document.getElementById('seventh-item-tech').style.display = 'block';
    verifySecond = true;
  }

  function verifyDon3(event) {
    event.preventDefault();
    alert('Teacher Verified and added to Verified Teachers!');
    document.getElementById('third-item-don').style.display = 'none';
    document.getElementById('eighth-item-tech').style.display = 'block';
    verifyThird = true;
  }

  
  function rejectDon1(event) {
    event.preventDefault();
    alert('Doctor Rejected!');
    document.getElementById('first-item-don').style.display = 'none';
  }

  function rejectDon2(event) {
    event.preventDefault();
    alert('Teacher Rejected!');
    document.getElementById('second-item-don').style.display = 'none';
  }

  function rejectDon3(event) {
    event.preventDefault();
    alert('Teacher Rejected!');
    document.getElementById('third-item-don').style.display = 'none';
  }

  function reject1(event) {
    event.preventDefault();
    alert('Organization Rejected!');
    document.getElementById('first-item-reg').style.display = 'none';
  }

  function reject2(event) {
    event.preventDefault();
    alert('Organization Rejected!');
    document.getElementById('second-item-reg').style.display = 'none';
  }

  function reject3(event) {
    event.preventDefault();
    alert('Organization Rejected!');
    document.getElementById('third-item-reg').style.display = 'none';
  }

  var deletedFirst = false;
var deletedSecond = false;
var deletedThird = false;
var deletedFourth = false;
var deletedFifth = false;
var deletedSixth = false;
var deletedSeventh = false;
var deletedEighth = false;
var deletedNineth = false;

function deleteO1(event) {
    event.preventDefault();
    alert('Organization Acount Removed!');
    document.getElementById('first-item').style.display = 'none';
    deletedFirst = true;
}

function deleteO2(event) {
    event.preventDefault();
    alert('Organization Acount Removed!');
    document.getElementById('second-item').style.display = 'none';
    deletedSecond = true;
}

function deleteO3(event) {
    event.preventDefault();
    alert('Organization Acount Removed!');
    document.getElementById('third-item').style.display = 'none';
    deletedThird = true;
}

function deleteO4(event) {
    event.preventDefault();
    alert('Organization Acount Removed!');
    document.getElementById('forth-item').style.display = 'none';
    deletedFourth = true;
}

function deleteO5(event) {
    event.preventDefault();
    alert('Organization Acount Removed!');
    document.getElementById('fifth-item').style.display = 'none';
    deletedFifth = true;
}

function deleteO6(event) {
    event.preventDefault();
    alert('Organization Acount Removed!');
    document.getElementById('sixth-item').style.display = 'none';
    deletedSixth = true;
}

function deleteO7(event) {
    event.preventDefault();
    alert('Organization Acount Removed!');
    document.getElementById('seventh-item').style.display = 'none';
    deletedSeventh = true;
}

function deleteO8(event) {
    event.preventDefault();
    alert('Organization Acount Removed!');
    document.getElementById('eighth-item').style.display = 'none';
    deletedEighth = true;
}

function deleteO9(event) {
    event.preventDefault();
    alert('Organization Acount Removed!');
    document.getElementById('nineth-item').style.display = 'none';
    deletedNineth = true;
}


var verifyFirst = false;
var verifySeond = false;
var verifySecond = false;

  function verify1(event) {
    event.preventDefault();
    alert('Organization Verified and added to Verified Organizations!');
    document.getElementById('first-item-reg').style.display = 'none';
    document.getElementById('seventh-item').style.display = 'block';
    verifyFirst = true;
  }

  function verify2(event) {
    event.preventDefault();
    alert('Organization Verified and added to Verified Organizations!');
    document.getElementById('second-item-reg').style.display = 'none';
    document.getElementById('eighth-item').style.display = 'block';
    verifySecond = true;
  }

  function verify3(event) {
    event.preventDefault();
    alert('Organization Verified and added to Verified Organizations!');
    document.getElementById('third-item-reg').style.display = 'none';
    document.getElementById('nineth-item').style.display = 'block';
    verifyThird = true;
  }


  function removeFilter() {
    if (!deletedFirst)
    document.getElementById('first-item').style.display = 'block';
    if (!deletedSecond)
    document.getElementById('second-item').style.display = 'block';
    if (!deletedThird)
    document.getElementById('third-item').style.display = 'block';
    if (!deletedFourth)
    document.getElementById('forth-item').style.display = 'block';
    if (!deletedFifth)
    document.getElementById('fifth-item').style.display = 'block';
    if (!deletedSixth)
    document.getElementById('sixth-item').style.display = 'block';
    if(verifyFirst && !deletedSeventh){
      document.getElementById('seventh-item').style.display = 'block';
    }
    if(verifySecond && !deletedEighth){
      document.getElementById('eighth-item').style.display = 'block';
    }
    if(verifyThird && !deletedNineth){
      document.getElementById('nineth-item').style.display = 'block';
    }
  }

function checkDeleted(){
  if (deletedFirst) {
    document.getElementById('first-item').style.display = 'none';
}
if (deletedSecond) {
    document.getElementById('second-item').style.display = 'none';
}
if (deletedThird) {
    document.getElementById('third-item').style.display = 'none';
}
if (deletedFourth) {
    document.getElementById('forth-item').style.display = 'none';
}
if (deletedFifth) {
    document.getElementById('fifth-item').style.display = 'none';
}
if (deletedSixth) {
    document.getElementById('sixth-item').style.display = 'none';
}
if (deletedSeventh) {
    document.getElementById('seventh-item').style.display = 'none';
}
if (deletedEighth) {
    document.getElementById('eighth-item').style.display = 'none';
}
if (deletedNineth) {
    document.getElementById('nineth-item').style.display = 'none';
}

}


  function filterHealthcare(event) {
    event.stopPropagation();
    if(!deletedFirst)
    document.getElementById('first-item').style.display = 'block';
    if(!deletedSecond)
    document.getElementById('second-item').style.display = 'block';
    if(!deletedThird)
    document.getElementById('third-item').style.display = 'block';
    document.getElementById('forth-item').style.display = 'none';
    if(!deletedFifth)
    document.getElementById('fifth-item').style.display = 'block';
    document.getElementById('sixth-item').style.display = 'none';
    if(verifyFirst && !deletedSeventh){
      document.getElementById('seventh-item').style.display = 'none';
    }
    if(verifySecond && !deletedEighth){
      document.getElementById('eighth-item').style.display = 'block';
    }
    if(verifyThird && !deletedNineth){
      document.getElementById('nineth-item').style.display = 'block';
    }
    checkDeleted();
}

function filterHumanitarian(event) {
  event.stopPropagation();
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  if(!deletedThird)
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterBanks(event) {
  event.stopPropagation();
  if (!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  if (!deletedFourth)
  document.getElementById('forth-item').style.display = 'block';
  document.getElementById('fifth-item').style.display = 'none';
  if (!deletedSixth)
  document.getElementById('sixth-item').style.display = 'block';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterEducation(event) {
  event.stopPropagation();
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  if(!deletedFifth)
  document.getElementById('fifth-item').style.display = 'block';
  if(!deletedSixth)
  document.getElementById('sixth-item').style.display = 'block';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'block';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterAlex(event) {
  event.stopPropagation();
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  if(!deletedThird)
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  if(!deletedSixth)
  document.getElementById('sixth-item').style.display = 'block';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterGleem(event) {
  event.stopPropagation();
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  if(!deletedThird)
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  if(!deletedSixth)
  document.getElementById('sixth-item').style.display = 'block';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterCairo(event) {
  event.stopPropagation();
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  if(!deletedSecond)
  document.getElementById('second-item').style.display = 'block';
  if(!deletedThird)
  document.getElementById('third-item').style.display = 'block';
  if(!deletedFourth)
  document.getElementById('forth-item').style.display = 'block';
  if(!deletedFifth)
  document.getElementById('fifth-item').style.display = 'block';
  if(!deletedSixth)
  document.getElementById('sixth-item').style.display = 'block';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'block';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterNasr(event) {
  event.stopPropagation();
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  if(!deletedSecond)
  document.getElementById('second-item').style.display = 'block';
  if(!deletedThird)
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterMaadi(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'none';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  if(!deletedFourth)
  document.getElementById('forth-item').style.display = 'block';
  if(!deletedFifth)
  document.getElementById('fifth-item').style.display = 'block';
  if(!deletedSixth)
  document.getElementById('sixth-item').style.display = 'block';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'block';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterFayoum(event) {
  event.stopPropagation();
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'block';
  }
  checkDeleted();
}

function filterTirsa(event) {
  event.stopPropagation();
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'block';
  }
  checkDeleted();
}
 
function performSearch(event) {
  event.preventDefault();
  var searchTerm = document.getElementById('searchBox').value.toLowerCase();  // Ensure case insensitivity
  var firstItem = document.getElementById('first-item');
  var secondItem = document.getElementById('second-item');
  var thirdItem = document.getElementById('third-item');
  var forthItem = document.getElementById('forth-item');
  var fifthItem = document.getElementById('fifth-item');
  var sixthItem = document.getElementById('sixth-item');
  var seventhItem = document.getElementById('seventh-item');
  var eighthItem = document.getElementById('eighth-item');
  var ninethItem = document.getElementById('nineth-item');
  var items = [firstItem, secondItem, thirdItem, forthItem, fifthItem, sixthItem, seventhItem, eighthItem, ninethItem];
  items.forEach(item => item.style.display = 'none');
  if (searchTerm === '') {
    items.forEach(item => item.style.display = 'block');
    if (verifyFirst) {
      seventhItem.style.display = 'block';
    }
    if (verifySecond) {
      eighthItem.style.display = 'block';
    }
    if (verifyThird) {
      ninethItem.style.display = 'block';
    }
  } else if (searchTerm.includes('orman')) {
    sixthItem.style.display = 'block';
  } else if (searchTerm.includes('57357')) {
    secondItem.style.display = 'block';
  } else if (searchTerm.includes('misr el')) {
    firstItem.style.display = 'block';
  } else if (searchTerm.includes('food bank')) {
    forthItem.style.display = 'block';
  } else if (searchTerm.includes('resala')) {
    fifthItem.style.display = 'block';
  } else if (searchTerm.includes('red')) {
    thirdItem.style.display = 'block';
  } else if (verifyFirst && searchTerm.includes('toy')) {
    seventhItem.style.display = 'block';
  } else if (verifySecond && searchTerm.includes('sawaris')) {
    eighthItem.style.display = 'block';
  } else if (verifyThird && searchTerm.includes('magdi')) {
    ninethItem.style.display = 'block';
  } else {
  }
  checkDeleted();
}



function closeT1(event) {
  event.preventDefault();
  alert('Teacher Acount Removed!');
  document.getElementById('first-item-tech').style.display = 'none';
}

function closeT2(event) {
  event.preventDefault();
  alert('Teacher Acount Removed!');
  document.getElementById('second-item-tech').style.display = 'none';
}

function closeT3(event) {
  event.preventDefault();
  alert('Teacher Acount Removed!');
  document.getElementById('third-item-tech').style.display = 'none';
}

function closeT4(event) {
  event.preventDefault();
  alert('Teacher Acount Removed!');
  document.getElementById('forth-item-tech').style.display = 'none';
}

function closeT5(event) {
  event.preventDefault();
  alert('Teacher Acount Removed!');
  document.getElementById('seventh-item-tech').style.display = 'none';
}

function closeT6(event) {
  event.preventDefault();
  alert('Teacher Acount Removed!');
  document.getElementById('eighth-item-tech').style.display = 'none';
}


function closeD1(event) {
  event.preventDefault();
  alert('Doctor Acount Removed!');
  document.getElementById('first-item-doc').style.display = 'none';
}

function closeD2(event) {
  event.preventDefault();
  alert('Doctor Acount Removed!');
  document.getElementById('second-item-doc').style.display = 'none';
}

function closeD3(event) {
  event.preventDefault();
  alert('Doctor Acount Removed!');
  document.getElementById('third-item-doc').style.display = 'none';
}

function closeD4(event) {
  event.preventDefault();
  alert('Doctor Acount Removed!');
  document.getElementById('forth-item-doc').style.display = 'none';
}

function closeD5(event) {
  event.preventDefault();
  alert('Doctor Acount Removed!');
  document.getElementById('seventh-item-doc').style.display = 'none';
}