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
  var z = document.getElementById('old').value;
  var x = document.getElementById('new').value;
  var y = document.getElementById('check').value;
    if(z==''){
      alert('Please Enter Old Password');
    }
    else if(x==''){
      alert('Please Enter a New Password');
    }
    else if(y==''){
      alert('Please Verify New Password');
    }
    else if(x==y){
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




function FurtherInfoAzhar() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-mosque1').style.display = 'block';
}

function FurtherInfoHussein() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-mosque2').style.display = 'block';
}

function FurtherInfoMark() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-church1').style.display = 'block';
}

function FurtherInfoGeorge() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-church2').style.display = 'block';
}

function FurtherInfoMetro() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-school1').style.display = 'block';
}


function FurtherInfoCho() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-school2').style.display = 'block';
}

function FurtherInfoSalam() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-hospital1').style.display = 'block';
}

function FurtherInfoShifa() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-hospital2').style.display = 'block';
}

function FurtherInfoDonor1() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor1').style.display = 'block';
}

function FurtherInfoDonor2() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor2').style.display = 'block';
}

function FurtherInfoDonor3() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor3').style.display = 'block';
}
function FurtherInfoDonor4() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor4').style.display = 'block';
}
function FurtherInfoDonor5() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor5').style.display = 'block';
}
function FurtherInfoDonor6() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor6').style.display = 'block';
}
function FurtherInfoDonor7() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor7').style.display = 'block';
}
function FurtherInfoDonor8() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor8').style.display = 'block';
}
function FurtherInfoDonor9() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor9').style.display = 'block';
}
function FurtherInfoDonor10() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor10').style.display = 'block';
}
function FurtherInfoDonor11() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-donor11').style.display = 'block';
}

function FurtherInfo8() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-8').style.display = 'block';
}
function FurtherInfo9() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-9').style.display = 'block';
}
function FurtherInfo10() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-10').style.display = 'block';
}
function FurtherInfo11() {
  // Prevent the default form submission behavior
  event.preventDefault();
    document.getElementById('popup-11').style.display = 'block';
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




function closePopupMosque1() {
  var popup = document.getElementById("popup-mosque1");
  var popupForm = document.getElementById('contact-mosque1');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupMosque2() {
  var popup = document.getElementById("popup-mosque2");
  var popupForm = document.getElementById('contact-mosque2');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupChurch1() {
  var popup = document.getElementById("popup-church1");
  var popupForm = document.getElementById('contact-church1');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupChurch2() {
  var popup = document.getElementById("popup-church2");
  var popupForm = document.getElementById('contact-church2');
  popup.style.display = "none";
  popupForm.reset();
}


function closePopupSchool1() {
  var popup = document.getElementById("popup-school1");
  var popupForm = document.getElementById('contact-school1');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupSchool2() {
  var popup = document.getElementById("popup-school2");
  var popupForm = document.getElementById('contact-school2');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupHospital1() {
  var popup = document.getElementById("popup-hospital1");
  var popupForm = document.getElementById('contact-hospital1');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupHospital2() {
  var popup = document.getElementById("popup-hospital2");
  var popupForm = document.getElementById('contact-hospital2');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopupDonor1() {
  var popup = document.getElementById("popup-donor1");
  var popupForm = document.getElementById('contact-donor1');
  popup.style.display = "none";
  popupForm.reset();
}
function closePopupDonor2() {
  var popup = document.getElementById("popup-donor2");
  var popupForm = document.getElementById('contact-donor2');
  popup.style.display = "none";
  popupForm.reset();
}
function closePopupDonor3() {
  var popup = document.getElementById("popup-donor3");
  var popupForm = document.getElementById('contact-donor3');
  popup.style.display = "none";
  popupForm.reset();
}
function closePopupDonor4() {
  var popup = document.getElementById("popup-donor4");
  var popupForm = document.getElementById('contact-donor4');
  popup.style.display = "none";
  popupForm.reset();
}
function closePopupDonor5() {
  var popup = document.getElementById("popup-donor5");
  var popupForm = document.getElementById('contact-donor5');
  popup.style.display = "none";
  popupForm.reset();
}
function closePopupDonor6() {
  var popup = document.getElementById("popup-donor6");
  var popupForm = document.getElementById('contact-donor6');
  popup.style.display = "none";
  popupForm.reset();
}
function closePopupDonor7() {
  var popup = document.getElementById("popup-donor7");
  var popupForm = document.getElementById('contact-donor7');
  popup.style.display = "none";
  popupForm.reset();
}
function closePopupDonor8() {
  var popup = document.getElementById("popup-donor8");
  var popupForm = document.getElementById('contact-donor8');
  popup.style.display = "none";
  popupForm.reset();
}
function closePopupDonor9() {
  var popup = document.getElementById("popup-donor9");
  var popupForm = document.getElementById('contact-donor9');
  popup.style.display = "none";
  popupForm.reset();
}
function closePopupDonor10() {
  var popup = document.getElementById("popup-donor10");
  var popupForm = document.getElementById('contact-donor10');
  popup.style.display = "none";
  popupForm.reset();
}
function closePopupDonor11() {
  var popup = document.getElementById("popup-donor11");
  var popupForm = document.getElementById('contact-donor11');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopup8() {
  var popup = document.getElementById("popup-8");
  var popupForm = document.getElementById('contact-8');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopup9() {
  var popup = document.getElementById("popup-9");
  var popupForm = document.getElementById('contact-9');
  popup.style.display = "none";
  popupForm.reset();
}


function closePopup10() {
  var popup = document.getElementById("popup-10");
  var popupForm = document.getElementById('contact-10');
  popup.style.display = "none";
  popupForm.reset();
}

function closePopup11() {
  var popup = document.getElementById("popup-11");
  var popupForm = document.getElementById('contact-11');
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
    var popup = document.getElementById('popup-mosque1');
    var popupForm = document.getElementById('contact-mosque1');
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
        <a href="#church" onclick="filterChurch(event)">Churches</a>
        <a href="#school" onclick="filterSchool(event)">Schools</a>
        <a href="#mosque" onclick="filterMosque(event)">Mosques</a>
        <a href="#hospital" onclick="filterHospital(event)">Hospitals</a>
        <a href="#non-profit" onclick="showmore(event)">Non-Profits</a>
      `;
      secondDropbtn.textContent = "Filter by Organization Type";
    } else if (option === "Option 2") {
      document.getElementById('third-dropdown').style.display = 'none';
      secondDropdownContent.innerHTML += `
      <a href="#alex" onclick="filterAlex(event)">Alexandria</a>
      <a href="#cairo" onclick="filterCairo(event)">Cairo</a>
      <a href="#fayoum" onclick="filterFayoum(event)">Fayoum</a>
      `;
      secondDropbtn.textContent = "Filter by Governorate";
    } else if (option === "Option 3") {
      document.getElementById('third-dropdown').style.display = 'none';
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

  function showmore(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    filterProfit(event);
    var ThirdDropdown = document.getElementById("third-dropdown");
    var ThirdDropdownContent = ThirdDropdown.querySelector(".dropdown-content");
    var ThirdDropbtn = document.getElementById("third-dropbtn");// Prevent default behavior of anchor tag
    ThirdDropdownContent.innerHTML = "";
      ThirdDropdownContent.innerHTML += `
      <a href="#health" onclick="filterHealthcare(event)">Healthcare Organizations</a>
      <a href="#education" onclick="filterEducation(event)">Education Organizations</a>
      <a href="#humanitarian" onclick="filterHumanitarian(event)">Humanitarian Aid Organizations</a>
      <a href="#food-bank" onclick="filterBanks(event)">Food Banks</a>
      `;
      ThirdDropbtn.textContent = "Filter by Charity Type";
    
    ThirdDropdown.style.display = "inline-block";

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

  function reject18(event) {
    event.preventDefault();
    alert('Mosque Rejected!');
    document.getElementById('eighteenth-item-reg').style.display = 'none';
  }

  function reject19(event) {
    event.preventDefault();
    alert('Church Rejected!');
    document.getElementById('nineteenth-item-reg').style.display = 'none';
  }

  function reject20(event) {
    event.preventDefault();
    alert('School Rejected!');
    document.getElementById('twenty-item-reg').style.display = 'none';
  }

  function reject21(event) {
    event.preventDefault();
    alert('Hospital Rejected!');
    document.getElementById('twentyone-item-reg').style.display = 'none';
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
var deletedTenth= false;
var deletedEleventh = false;
var deletedTwelveth = false;
var deletedThirteenth = false;
var deletedFourteenth = false;
var deletedFifteenth = false;
var deletedSixteenth = false;
var deletedSeventeenth = false;



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

function deleteAzhar(event) {
  event.preventDefault();
  alert('Mosque Acount Removed!');
  document.getElementById('tenth-item').style.display = 'none';
  deletedTenth = true;
}

function deleteHussein(event) {
  event.preventDefault();
  alert('Mosque Acount Removed!');
  document.getElementById('eleventh-item').style.display = 'none';
  deletedEleventh = true;
}

function deleteGeorge(event) {
  event.preventDefault();
  alert('Church Acount Removed!');
  document.getElementById('twelveth-item').style.display = 'none';
  deletedTwelveth = true;
}

function deleteMark(event) {
  event.preventDefault();
  alert('Church Acount Removed!');
  document.getElementById('thirteenth-item').style.display = 'none';
  deletedThirteenth = true;
}

function deleteCho(event) {
  event.preventDefault();
  alert('School Acount Removed!');
  document.getElementById('fourteenth-item').style.display = 'none';
  deletedFourteenth = true;
}

function deleteMetro(event) {
  event.preventDefault();
  alert('School Acount Removed!');
  document.getElementById('fifteenth-item').style.display = 'none';
  deletedFifteenth = true;
}

function deleteSalam(event) {
  event.preventDefault();
  alert('Hospital Acount Removed!');
  document.getElementById('sixteenth-item').style.display = 'none';
  deletedSixteenth = true;
}

function deleteShifa(event) {
  event.preventDefault();
  alert('Hospital Acount Removed!');
  document.getElementById('seventeenth-item').style.display = 'none';
  deletedSeventeenth = true;
}




var verifyFirst = false;
var verifySecond = false;
var verifyThird = false;
var verify18 = false;
var verify19 = false;
var verify20 = false;
var verify21 = false;

  function verify1(event) {
    event.preventDefault();
    alert('Organization Verified and added to Verified Organizations!');
    document.getElementById('first-item-reg').style.display = 'none';
    document.getElementById('seventh-item').style.display = 'block';
    document.getElementById('NothingFound').style.display = 'none';
    verifyFirst = true;
  }

  function verify188(event) {
    event.preventDefault();
    alert('Mosque Verified and added to Verified Organizations!');
    document.getElementById('eighteenth-item-reg').style.display = 'none';
    document.getElementById('tenth-item').style.display = 'block';
    document.getElementById('NothingFound').style.display = 'none';
    verify18 = true;
  }

  function verify199(event) {
    event.preventDefault();
    alert('Church Verified and added to Verified Organizations!');
    document.getElementById('nineteenth-item-reg').style.display = 'none';
    document.getElementById('twelveth-item').style.display = 'block';
    document.getElementById('NothingFound').style.display = 'none';
    verify19 = true;
  }

  function verify200(event) {
    event.preventDefault();
    alert('School Verified and added to Verified Organizations!');
    document.getElementById('twenty-item-reg').style.display = 'none';
    document.getElementById('fifteenth-item').style.display = 'block';
    document.getElementById('NothingFound').style.display = 'none';
    verify20 = true;
  }

  function verify211(event) {
    event.preventDefault();
    alert('Hospital Verified and added to Verified Organizations!');
    document.getElementById('twentyone-item-reg').style.display = 'none';
    document.getElementById('sixteenth-item').style.display = 'block';
    document.getElementById('NothingFound').style.display = 'none';
    verify21 = true;
  }

  function verify2(event) {
    event.preventDefault();
    alert('Organization Verified and added to Verified Organizations!');
    document.getElementById('second-item-reg').style.display = 'none';
    document.getElementById('eighth-item').style.display = 'block';
    document.getElementById('NothingFound').style.display = 'none';
    verifySecond = true;
  }

  function verify3(event) {
    event.preventDefault();
    alert('Organization Verified and added to Verified Organizations!');
    document.getElementById('third-item-reg').style.display = 'none';
    document.getElementById('nineth-item').style.display = 'block';
    document.getElementById('NothingFound').style.display = 'none';
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
    if (!deletedEleventh)
    document.getElementById('eleventh-item').style.display = 'block';
    if (!deletedThirteenth)
    document.getElementById('thirteenth-item').style.display = 'block';
    if (!deletedFourteenth)
    document.getElementById('fourteenth-item').style.display = 'block';
    if (!deletedSeventeenth)
    document.getElementById('seventeenth-item').style.display = 'block';
    if(verifyFirst && !deletedSeventh){
      document.getElementById('seventh-item').style.display = 'block';
    }
    if(verifySecond && !deletedEighth){
      document.getElementById('eighth-item').style.display = 'block';
    }
    if(verifyThird && !deletedNineth){
      document.getElementById('nineth-item').style.display = 'block';
    }
    if(verify18 && !deletedTenth){
      document.getElementById('tenth-item').style.display = 'block';
    }
    if(verify19 && !deletedTwelveth){
      document.getElementById('twelveth-item').style.display = 'block';
    }
    if(verify20 && !deletedFifteenth){
      document.getElementById('fifteenth-item').style.display = 'block';
    }
    if(verify21 && !deletedSixteenth){
      document.getElementById('sixteenth-item').style.display = 'block';
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
if (deletedTenth) {
  document.getElementById('tenth-item').style.display = 'none';
}
if (deletedEleventh) {
  document.getElementById('eleventh-item').style.display = 'none';
}
if (deletedTwelveth) {
  document.getElementById('twelveth-item').style.display = 'none';
}
if (deletedThirteenth) {
  document.getElementById('thirteenth-item').style.display = 'none';
}
if (deletedFourteenth) {
  document.getElementById('fourteenth-item').style.display = 'none';
}
if (deletedFifteenth) {
  document.getElementById('fifteenth-item').style.display = 'none';
}
if (deletedSixteenth) {
  document.getElementById('sixteenth-item').style.display = 'none';
}
if (deletedSeventeenth) {
  document.getElementById('seventeenth-item').style.display = 'none';
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
    document.getElementById('eleventh-item').style.display = 'none';
    document.getElementById('thirteenth-item').style.display = 'none';
    document.getElementById('fourteenth-item').style.display = 'none';
    if(!deletedSeventeenth)
    document.getElementById('seventeenth-item').style.display = 'block';

    if(verifyFirst && !deletedSeventh){
      document.getElementById('seventh-item').style.display = 'none';
    }
    if(verifySecond && !deletedEighth){
      document.getElementById('eighth-item').style.display = 'block';
    }
    if(verifyThird && !deletedNineth){
      document.getElementById('nineth-item').style.display = 'block';
    }
    if(verify18 && !deletedTenth){
      document.getElementById('tenth-item').style.display = 'none';
    }
    if(verify19 && !deletedTwelveth){
      document.getElementById('twelveth-item').style.display = 'none';
    }
    if(verify20 && !deletedFifteenth){
      document.getElementById('fifteenth-item').style.display = 'none';
    }
    if(verify21 && !deletedSixteenth){
      document.getElementById('sixteenth-item').style.display = 'block';
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
  if(!deletedEleventh)
  document.getElementById('eleventh-item').style.display = 'block';
  if(!deletedThirteenth)
  document.getElementById('thirteenth-item').style.display = 'block';
  document.getElementById('fourteenth-item').style.display = 'none';
  if(!deletedSeventeenth)
  document.getElementById('seventeenth-item').style.display = 'block';
  
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'block';
  }
  
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'block';
  }
  
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
    
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'block';
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
  if(!deletedEleventh)
  document.getElementById('eleventh-item').style.display = 'block';
  if(!deletedThirteenth)
  document.getElementById('thirteenth-item').style.display = 'block';
  document.getElementById('fourteenth-item').style.display = 'none'; 
  document.getElementById('seventeenth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'block';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'block';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'none';
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
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  if(!deletedFourteenth)
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'block';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'none';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'none';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'block';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterAlex(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  if(!deletedThird)
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  if(!deletedSixth)
  document.getElementById('sixth-item').style.display = 'block';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  if(!deletedFourteenth)
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'none';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'block';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterGleem(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  if(!deletedThird)
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  if(!deletedSixth)
  document.getElementById('sixth-item').style.display = 'block';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  if(!deletedFourteenth)
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'none';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'block';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterCairo(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
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
  if(!deletedEleventh)
  document.getElementById('eleventh-item').style.display = 'block';
  if(!deletedThirteenth)
  document.getElementById('thirteenth-item').style.display = 'block';
  if(!deletedFourteenth)
  document.getElementById('fourteenth-item').style.display = 'block'; 
  if(!deletedSeventeenth)
  document.getElementById('seventeenth-item').style.display = 'block';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'block';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'block';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'block';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'block';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'block';
  }
  checkDeleted();
}

function filterNasr(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  if(!deletedSecond)
  document.getElementById('second-item').style.display = 'block';
  if(!deletedThird)
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  document.getElementById('eleventh-item').style.display = 'none';
  if(!deletedThirteenth)
  document.getElementById('thirteenth-item').style.display = 'block';
  if(!deletedFourteenth)
  document.getElementById('fourteenth-item').style.display = 'block'; 
  if(!deletedSeventeenth)
  document.getElementById('seventeenth-item').style.display = 'block';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'block';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'block';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'block';
  }
  checkDeleted();
}

function filterMaadi(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
  document.getElementById('first-item').style.display = 'none';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  if(!deletedFourth)
  document.getElementById('forth-item').style.display = 'block';
  if(!deletedFifth)
  document.getElementById('fifth-item').style.display = 'block';
  if(!deletedSixth)
  document.getElementById('sixth-item').style.display = 'block';
  document.getElementById('eleventh-item').style.display = 'none';
  if(!deletedThirteenth)
  document.getElementById('thirteenth-item').style.display = 'block';
  if(!deletedFourteenth)
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'block';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'block';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'block';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterFayoum(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  if(!deletedFourteenth)
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'block';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'none';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'none';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'block';
  }
  checkDeleted();
}

function filterTirsa(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
  if(!deletedFirst)
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  if(!deletedFourteenth)
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'block';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'block';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'block';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'block';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'block';
  }
  checkDeleted();
}


function filterSchool(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
  document.getElementById('first-item').style.display = 'none';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  if(!deletedFourteenth)
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'none';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'none';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'block';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterMosque(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
  document.getElementById('first-item').style.display = 'none';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  if(!deletedEleventh)
  document.getElementById('eleventh-item').style.display = 'block';
  document.getElementById('thirteenth-item').style.display = 'none';
  document.getElementById('fourteenth-item').style.display = 'none'; 
  document.getElementById('seventeenth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'block';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'none';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterChurch(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
  document.getElementById('first-item').style.display = 'none';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  document.getElementById('eleventh-item').style.display = 'none';
  if(!deletedThirteenth)
  document.getElementById('thirteenth-item').style.display = 'block';
  document.getElementById('fourteenth-item').style.display = 'none'; 
  document.getElementById('seventeenth-item').style.display = 'none';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'none';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'block';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'none';
  }
  checkDeleted();
}

function filterHospital(event) {
  event.stopPropagation();
  document.getElementById('third-dropdown').style.display = 'none';
  document.getElementById('first-item').style.display = 'none';
  document.getElementById('second-item').style.display = 'block';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  document.getElementById('fourteenth-item').style.display = 'none'; 
  if(!deletedSeventeenth)
  document.getElementById('seventeenth-item').style.display = 'block';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'none';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'none';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'none';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'none';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'block';
  }
  checkDeleted();
}

function filterProfit(event) {
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
  
  document.getElementById('eleventh-item').style.display = 'none';

  document.getElementById('thirteenth-item').style.display = 'none';

  document.getElementById('fourteenth-item').style.display = 'none'; 

  document.getElementById('seventeenth-item').style.display = 'block';
  if(verifyFirst && !deletedSeventh){
    document.getElementById('seventh-item').style.display = 'block';
  }
  if(verifySecond && !deletedEighth){
    document.getElementById('eighth-item').style.display = 'block';
  }
  if(verifyThird && !deletedNineth){
    document.getElementById('nineth-item').style.display = 'none';
  }
  if(verify18 && !deletedTenth){
    document.getElementById('tenth-item').style.display = 'none';
  }
  if(verify19 && !deletedTwelveth){
    document.getElementById('twelveth-item').style.display = 'none';
  }
  if(verify20 && !deletedFifteenth){
    document.getElementById('fifteenth-item').style.display = 'none';
  }
  if(verify21 && !deletedSixteenth){
    document.getElementById('sixteenth-item').style.display = 'block';
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

  var tenth = document.getElementById('tenth-item');
  var eleven = document.getElementById('eleventh-item');
  var twelve = document.getElementById('twelveth-item');
  var thirteen = document.getElementById('thirteenth-item');
  var fourteen = document.getElementById('fourteenth-item');
  var fifteen = document.getElementById('fifteenth-item');
  var sixteen = document.getElementById('sixteenth-item');
  var seventeen = document.getElementById('seventeenth-item');
  var nothing = document.getElementById('NothingFound');

  var items = [firstItem, secondItem, thirdItem, forthItem, fifthItem, sixthItem, seventhItem, eighthItem, ninethItem,tenth,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen];
  items.forEach(item => item.style.display = 'none');
  if (searchTerm === '') {
    items.forEach(item => item.style.display = 'block');
    nothing.style.display = 'none';
    if (verifyFirst) {
      seventhItem.style.display = 'block';
      nothing.style.display = 'none';
    }
    if (verifySecond) {
      eighthItem.style.display = 'block';
      nothing.style.display = 'none';
    }
    if (verifyThird) {
      ninethItem.style.display = 'block';
      nothing.style.display = 'none';
    }
    if (verify18) {
      tenth.style.display = 'block';
      nothing.style.display = 'none';
    }
    if (verify19) {
      twelve.style.display = 'block';
      nothing.style.display = 'none';
    }
    if (verify20) {
      fifteen.style.display = 'block';
      nothing.style.display = 'none';
    }
    if (verify21) {
      sixteen.style.display = 'block';
      nothing.style.display = 'none';
    }
  } else if (searchTerm.includes('orman')) {
    sixthItem.style.display = 'block';
    nothing.style.display = 'none';
  } else if (searchTerm.includes('57357')) {
    secondItem.style.display = 'block';
    nothing.style.display = 'none';
  } else if (searchTerm.includes('misr') || searchTerm.includes('kheir')) {
    firstItem.style.display = 'block';
    nothing.style.display = 'none';
  } else if (searchTerm.includes('food bank')) {
    forthItem.style.display = 'block';
    nothing.style.display = 'none';
  } else if (searchTerm.includes('resala')) {
    fifthItem.style.display = 'block';
    nothing.style.display = 'none';
  } else if (searchTerm.includes('red')) {
    thirdItem.style.display = 'block';
    nothing.style.display = 'none';
  }  else if (searchTerm.includes('hussein')) {
    eleven.style.display = 'block';
    nothing.style.display = 'none';
  }
  else if (searchTerm.includes('mark')) {
    thirteen.style.display = 'block';
    nothing.style.display = 'none';
  }
  else if (searchTerm.includes('choueifat')) {
    fourteen.style.display = 'block';
    nothing.style.display = 'none';
  }
  else if (searchTerm.includes('nas')) {
    seventeen.style.display = 'block';
    nothing.style.display = 'none';
  }
   else if (verifyFirst && (searchTerm.includes('toy') || searchTerm.includes('marwa'))) {
    seventhItem.style.display = 'block';
    nothing.style.display = 'none';
  } else if (verifySecond && searchTerm.includes('sawiris')) {
    eighthItem.style.display = 'block';
    nothing.style.display = 'none';
  } else if (verifyThird && searchTerm.includes('magdi')) {
    ninethItem.style.display = 'block';
    nothing.style.display = 'none';
  } 
  else if (verify18 && searchTerm.includes('azhar')) {
    tenth.style.display = 'block';
    nothing.style.display = 'none';
  }
  else if (verify19 && searchTerm.includes('george')) {
    twelve.style.display = 'block';
    nothing.style.display = 'none';
  }
  else if (verify20 && searchTerm.includes('metro')) {
    fifteen.style.display = 'block';
    nothing.style.display = 'none';
  }
  else if (verify21 && searchTerm.includes('ahl masr')) {
    sixteen.style.display = 'block';
    nothing.style.display = 'none';
  }
  else {
    nothing.style.display = 'block';
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