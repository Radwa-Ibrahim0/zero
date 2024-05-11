/*
-------------------Donor Main------------------
*/
function getFileData(){
  
  
}



var TeacherFlag= false;
var DoctorFlag= false;


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


document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('check-button-teacher');
  button.addEventListener('click', function(event) {
    checkFilesTeacher(event); // Pass the event to the function
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('file-upload-t');
  button.addEventListener('input', function(event) {
  document.getElementById("teacherupload").innerHTML = button.files[0].name;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('file-upload');
  button.addEventListener('input', function(event) {
  document.getElementById("doctorupload").innerHTML = button.files[0].name;
  });
});



function checkFilesTeacher(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  var input = document.getElementById('file-upload-t');
  // document.getElementById("teacherupload").innerHTML = input.files[0].name;
  if (input.files && input.files.length > 0) {
    // Files were uploaded
    alert('Files were uploaded successfully! You are now verified as a teacher.');
    document.getElementById('popup-t').style.display = 'block';
  } else {
    // No files were uploaded
    alert('No files were uploaded.');
  }
  
}


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
  DoctorFlag = true;
  alert('Thank you for volunteering!');
  document.getElementById("doctorupload").innerHTML = "You Are Now Verified As A Doctor!";

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
  TeacherFlag = true;
  alert('Thank you for volunteering!');
  document.getElementById("teacherupload").innerHTML = "You Are Now Verified As A Teacher!";
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
  if(TeacherFlag)
  window.location.href = "teaching.html";
else{
  alert('Please verify you are a teacher first!');
  var elementid = document.getElementById('video');
  elementid.scrollIntoView();
}
}

function redirectDoctor(){
  if(DoctorFlag)
  window.location.href = "Doctor.html";
else{
  alert('Please verify you are a doctor first!');
  var elementid = document.getElementById('video');
  elementid.scrollIntoView();
}
}



// function performSearch2() {
//   var searchTerm = document.getElementById('searchBox2').value;
//   var clothes1 = document.getElementById('caseClothes1');
//   var clothes2 = document.getElementById('caseClothes2');
//   var med1 = document.getElementById('caseMedical1');
//   var med2 = document.getElementById('caseMedical2');
//   var med3 = document.getElementById('caseMedical3');
//   var toy1 = document.getElementById('caseToy1');
//   var toy2 = document.getElementById('caseToy12');
//   var toy3 = document.getElementById('caseToy3');
//   var food1 = document.getElementById('caseFood1');
//   var food2 = document.getElementById('caseFood2');
//   var food3 = document.getElementById('caseFood3');
//   var school1 = document.getElementById('caseSchool1');
//   var school2 = document.getElementById('caseSchool2');
//   var blood1 = document.getElementById('caseBlood1');
//   var blood2 = document.getElementById('caseBlood2');

//   if(searchTerm === ''){
//     med1.style.display = 'block';
//     med2.style.display = 'block';
//     med3.style.display = 'block';
//     toy1.style.display = 'block';
//     toy2.style.display = 'block';
//     toy3.style.display = 'block';
//     clothes1.style.display = 'block';
//     clothes2.style.display = 'block';
//     food1.style.display = 'block';
//     food2.style.display = 'block';
//     food3.style.display = 'block';
//     school1.style.display = 'block';
//     school2.style.display = 'block';
//     blood1.style.display = 'block';
//     blood2.style.display = 'block';
//   }
//  else if (searchTerm.includes('cloth')) { 
//   med1.style.display = 'none';
//   med2.style.display = 'none';
//   med3.style.display = 'none';
//   toy1.style.display = 'none';
//   toy2.style.display = 'none';
//   toy3.style.display = 'none';
//   clothes1.style.display = 'block';
//   clothes2.style.display = 'block';
//   food1.style.display = 'none';
//   food2.style.display = 'none';
//   food3.style.display = 'none';
//   school1.style.display = 'none';
//   school2.style.display = 'none';
//   blood1.style.display = 'none';
//   blood2.style.display = 'none';
//   } 
//   else if (searchTerm.includes('med')) { 
//     med1.style.display = 'block';
//   med2.style.display = 'block';
//   med3.style.display = 'block';
//   toy1.style.display = 'none';
//   toy2.style.display = 'none';
//   toy3.style.display = 'none';
//   clothes1.style.display = 'none';
//   clothes2.style.display = 'none';
//   food1.style.display = 'none';
//   food2.style.display = 'none';
//   food3.style.display = 'none';
//   school1.style.display = 'none';
//   school2.style.display = 'none';
//   blood1.style.display = 'none';
//   blood2.style.display = 'none';
//    }
//    else if (searchTerm.includes('toy')) { 
//     med1.style.display = 'none';
//     med2.style.display = 'none';
//     med3.style.display = 'none';
//     toy1.style.display = 'block';
//     toy2.style.display = 'block';
//     toy3.style.display = 'block';
//     clothes1.style.display = 'none';
//     clothes2.style.display = 'none';
//     food1.style.display = 'none';
//     food2.style.display = 'none';
//     food3.style.display = 'none';
//     school1.style.display = 'none';
//     school2.style.display = 'none';
//     blood1.style.display = 'none';
//     blood2.style.display = 'none';
//    }
//    else if (searchTerm.includes('food')) { 
//     med1.style.display = 'none';
//     med2.style.display = 'none';
//     med3.style.display = 'none';
//     toy1.style.display = 'none';
//     toy2.style.display = 'none';
//     toy3.style.display = 'none';
//     clothes1.style.display = 'none';
//     clothes2.style.display = 'none';
//     food1.style.display = 'block';
//     food2.style.display = 'block';
//     food3.style.display = 'block';
//     school1.style.display = 'none';
//     school2.style.display = 'none';
//     blood1.style.display = 'none';
//     blood2.style.display = 'none';
//    }
//    else if (searchTerm.includes('school')) { 
//     med1.style.display = 'none';
//     med2.style.display = 'none';
//     med3.style.display = 'none';
//     toy1.style.display = 'none';
//     toy2.style.display = 'none';
//     toy3.style.display = 'none';
//     clothes1.style.display = 'none';
//     clothes2.style.display = 'none';
//     food1.style.display = 'none';
//     food2.style.display = 'none';
//     food3.style.display = 'none';
//     school1.style.display = 'block';
//     school2.style.display = 'block';
//     blood1.style.display = 'none';
//     blood2.style.display = 'none';
//    }
//    else if (searchTerm.includes('blood')) { 
//     med1.style.display = 'none';
//     med2.style.display = 'none';
//     med3.style.display = 'none';
//     toy1.style.display = 'none';
//     toy2.style.display = 'none';
//     toy3.style.display = 'none';
//     clothes1.style.display = 'none';
//     clothes2.style.display = 'none';
//     food1.style.display = 'none';
//     food2.style.display = 'none';
//     food3.style.display = 'none';
//     school1.style.display = 'none';
//     school2.style.display = 'none';
//     blood1.style.display = 'block';
//     blood2.style.display = 'block';
//    }
   
//    else{
//     med1.style.display = 'none';
//     med2.style.display = 'none';
//     med3.style.display = 'none';
//     toy1.style.display = 'none';
//     toy2.style.display = 'none';
//     toy3.style.display = 'none';
//     clothes1.style.display = 'none';
//     clothes2.style.display = 'none';
//     food1.style.display = 'none';
//     food2.style.display = 'none';
//     food3.style.display = 'none';
//     school1.style.display = 'none';
//     school2.style.display = 'none';
//     blood1.style.display = 'none';
//     blood2.style.display = 'none';
//    }
// }

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
    var searchTerm = document.getElementById('searchBox').value.toLowerCase();
    var firstItem = document.getElementById('first-item');
    var secondItem = document.getElementById('second-item');
    var thirdItem = document.getElementById('third-item');
    var forthItem = document.getElementById('forth-item');
    var fifthItem = document.getElementById('fifth-item');
    var sixthItem = document.getElementById('sixth-item');
    var eleven = document.getElementById('eleventh-item');
    var thirteen = document.getElementById('thirteenth-item');
    var fourteen = document.getElementById('fourteenth-item');
    var seventeen = document.getElementById('seventeenth-item');
    var nothing = document.getElementById('NothingFound');

    if(searchTerm === ''){
      firstItem.style.display = 'block';
      secondItem.style.display = 'block';
      thirdItem.style.display = 'block';
      forthItem.style.display = 'block';
      fifthItem.style.display = 'block';
      sixthItem.style.display = 'block';
      eleven.style.display = 'block';
      thirteen.style.display = 'block';
      fourteen.style.display = 'block';
      seventeen.style.display = 'block';
      nothing.style.display = 'none';
    }
   else if (searchTerm.includes('orman')) { 
     firstItem.style.display = 'none';
      secondItem.style.display = 'none';
      thirdItem.style.display = 'none';
      forthItem.style.display = 'none';
      fifthItem.style.display = 'none';
      sixthItem.style.display = 'block';
      eleven.style.display = 'none';
      thirteen.style.display = 'none';
      fourteen.style.display = 'none';
      seventeen.style.display = 'none';
      nothing.style.display = 'none';
    } 
    else if (searchTerm.includes('57357')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'block';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
       eleven.style.display = 'none';
       thirteen.style.display = 'none';
       fourteen.style.display = 'none';
       seventeen.style.display = 'none';
       nothing.style.display = 'none';
     }
     else if (searchTerm.includes('misr')) { 
      firstItem.style.display = 'block';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
       eleven.style.display = 'none';
       thirteen.style.display = 'none';
       fourteen.style.display = 'none';
       seventeen.style.display = 'none';
       nothing.style.display = 'none';
     }
     else if (searchTerm.includes('food bank')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'block';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
       eleven.style.display = 'none';
       thirteen.style.display = 'none';
       fourteen.style.display = 'none';
       seventeen.style.display = 'none';
       nothing.style.display = 'none';
     }
     else if (searchTerm.includes('resala')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'block';
       sixthItem.style.display = 'none';
       eleven.style.display = 'none';
       thirteen.style.display = 'none';
       fourteen.style.display = 'none';
       seventeen.style.display = 'none';
       nothing.style.display = 'none';
     }
     else if (searchTerm.includes('red')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'block';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
       eleven.style.display = 'none';
       thirteen.style.display = 'none';
       fourteen.style.display = 'none';
       seventeen.style.display = 'none';
       nothing.style.display = 'none';
     }
     else if (searchTerm.includes('hussein')||searchTerm.includes('mosque')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
       eleven.style.display = 'block';
       thirteen.style.display = 'none';
       fourteen.style.display = 'none';
       seventeen.style.display = 'none';
       nothing.style.display = 'none';
     }
     else if (searchTerm.includes('mark')||searchTerm.includes('church')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
       eleven.style.display = 'none';
       thirteen.style.display = 'block';
       fourteen.style.display = 'none';
       seventeen.style.display = 'none';
       nothing.style.display = 'none';
     }

     else if (searchTerm.includes('chou')||searchTerm.includes('school')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
       eleven.style.display = 'none';
       thirteen.style.display = 'none';
       fourteen.style.display = 'block';
       seventeen.style.display = 'none';
       nothing.style.display = 'none';
     }
     else if (searchTerm.includes('nas')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'none';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
       eleven.style.display = 'none';
       thirteen.style.display = 'none';
       fourteen.style.display = 'none';
       seventeen.style.display = 'block';
       nothing.style.display = 'none';
     }
     else if (searchTerm.includes('hospital')) { 
      firstItem.style.display = 'none';
       secondItem.style.display = 'block';
       thirdItem.style.display = 'none';
       forthItem.style.display = 'none';
       fifthItem.style.display = 'none';
       sixthItem.style.display = 'none';
       eleven.style.display = 'none';
       thirteen.style.display = 'none';
       fourteen.style.display = 'none';
       seventeen.style.display = 'block';
       nothing.style.display = 'none';
     }



     else{
      firstItem.style.display = 'none';
      secondItem.style.display = 'none';
      thirdItem.style.display = 'none';
      forthItem.style.display = 'none';
      fifthItem.style.display = 'none';
      sixthItem.style.display = 'none';
      eleven.style.display = 'none';
      thirteen.style.display = 'none';
      fourteen.style.display = 'none';
      seventeen.style.display = 'none';
      nothing.style.display = 'block';
     }
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
  
  function stopPropagation(event) {
    event.stopPropagation(); // Prevent event from bubbling up
  }

  function removeFilter() {
    document.getElementById('first-item').style.display = 'block';
    document.getElementById('second-item').style.display = 'block';
    document.getElementById('third-item').style.display = 'block';
    document.getElementById('forth-item').style.display = 'block';
    document.getElementById('fifth-item').style.display = 'block';
    document.getElementById('sixth-item').style.display = 'block';
    document.getElementById('eleventh-item').style.display = 'block';
    document.getElementById('thirteenth-item').style.display = 'block';
    document.getElementById('fourteenth-item').style.display = 'block';
    document.getElementById('seventeenth-item').style.display = 'block';
 
      
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
    document.getElementById('eleventh-item').style.display = 'block';
    document.getElementById('thirteenth-item').style.display = 'none';
    document.getElementById('fourteenth-item').style.display = 'none'; 
    document.getElementById('seventeenth-item').style.display = 'none';}

  function filterHealthcare(event) {
    event.stopPropagation();
    document.getElementById('first-item').style.display = 'block';
    document.getElementById('second-item').style.display = 'block';
    document.getElementById('third-item').style.display = 'block';
    document.getElementById('forth-item').style.display = 'none';
    document.getElementById('fifth-item').style.display = 'block';
    document.getElementById('sixth-item').style.display = 'none';
    document.getElementById('eleventh-item').style.display = 'none';
    document.getElementById('thirteenth-item').style.display = 'none';
    document.getElementById('fourteenth-item').style.display = 'none';
    document.getElementById('seventeenth-item').style.display = 'block';
}

function filterHumanitarian(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  document.getElementById('eleventh-item').style.display = 'block';
  document.getElementById('thirteenth-item').style.display = 'block';
  document.getElementById('fourteenth-item').style.display = 'none';
  document.getElementById('seventeenth-item').style.display = 'block';
}

function filterBanks(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'block';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'block';
  document.getElementById('eleventh-item').style.display = 'block';
  document.getElementById('thirteenth-item').style.display = 'block';
  document.getElementById('fourteenth-item').style.display = 'none'; 
  document.getElementById('seventeenth-item').style.display = 'none';
}

function filterEducation(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'block';
  document.getElementById('sixth-item').style.display = 'block';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
}

function filterAlex(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'block';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
}

function filterGleem(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'block';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
}

function filterCairo(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'block';
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'block';
  document.getElementById('fifth-item').style.display = 'block';
  document.getElementById('sixth-item').style.display = 'block';
  document.getElementById('eleventh-item').style.display = 'block';
  document.getElementById('thirteenth-item').style.display = 'block';
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'block';
}

function filterNasr(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'block';
  document.getElementById('third-item').style.display = 'block';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'block';
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'block';
}

function filterMaadi(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'none';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'block';
  document.getElementById('fifth-item').style.display = 'block';
  document.getElementById('sixth-item').style.display = 'block';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'block';
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
}

function filterFayoum(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
}

function filterTirsa(event) {
  event.stopPropagation();
  document.getElementById('first-item').style.display = 'block';
  document.getElementById('second-item').style.display = 'none';
  document.getElementById('third-item').style.display = 'none';
  document.getElementById('forth-item').style.display = 'none';
  document.getElementById('fifth-item').style.display = 'none';
  document.getElementById('sixth-item').style.display = 'none';
  document.getElementById('eleventh-item').style.display = 'none';
  document.getElementById('thirteenth-item').style.display = 'none';
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';
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
  document.getElementById('fourteenth-item').style.display = 'block'; 
  document.getElementById('seventeenth-item').style.display = 'none';}

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
    document.getElementById('thirteenth-item').style.display = 'block';
    document.getElementById('fourteenth-item').style.display = 'none'; 
    document.getElementById('seventeenth-item').style.display = 'none';}

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
      document.getElementById('seventeenth-item').style.display = 'block';}


      function filterProfit(event) {
        event.stopPropagation();
        
        document.getElementById('first-item').style.display = 'block';
       
        document.getElementById('second-item').style.display = 'block';
       
        document.getElementById('third-item').style.display = 'block';
      
        document.getElementById('forth-item').style.display = 'block';
        
        document.getElementById('fifth-item').style.display = 'block';
        
        document.getElementById('sixth-item').style.display = 'block';
        
        document.getElementById('eleventh-item').style.display = 'none';
      
        document.getElementById('thirteenth-item').style.display = 'none';
      
        document.getElementById('fourteenth-item').style.display = 'none'; 
      
        document.getElementById('seventeenth-item').style.display = 'none';}


var randomIndex = 0;
  function showRandomNotification() {
    var notifications = [
      "Driver is on the Way!",
      "57357 Is Saying Thank You!",
      "Driver is 5 Minutes Away!",
      "MEK Says Thanks For Donating!",
      "Driver is Here!",
      "Orman Says Thank You!"
    ];
    
    var notificationElement = document.getElementById("notification");
    notificationElement.textContent = notifications[randomIndex];
    notificationElement.style.display = "block";
    setTimeout(function() {
      notificationElement.style.display = "none";
      randomIndex++;
      if(randomIndex>6){
      randomIndex = 0;
      }
      
     
      setTimeout(showRandomNotification, Math.random() * 50000);
    }, 5000);
  }

  showRandomNotification();

 
 
