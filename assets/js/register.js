function getFileData(myFile){
  const file = document.querySelector('input[type="file"]');
  // file.replace ('C:\fakepath\','');
  document.getElementById('labelwithhtml').innerHTML = file.files[0].name;
}


function MessageAdd(event){
  event.preventDefault();
  closePopupC2();
  alert('Your location has been added successfully!');
}

function updateInfo(){
  alert('Your Information Has Been Updated!');
}

function noDriver(){
  alert('Cannot View Details Until Driver Is On The Move!');
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

  function FurtherInfoV3() {
    // Prevent the default form submission behavior
    event.preventDefault();
      document.getElementById('popup-v3').style.display = 'block';
  }
  function FurtherInfoF2() {
    // Prevent the default form submission behavior
    event.preventDefault();
      document.getElementById('popup-f2').style.display = 'block';
  }
 

  
  function FurtherInfoF1() {
    // Prevent the default form submission behavior
    event.preventDefault();
      document.getElementById('popup-f1').style.display = 'block';
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
  function closePopupF1() {
    var popup = document.getElementById("popup-f1");
    var popupForm = document.getElementById('contact-f1');
    popup.style.display = 'none';
    popupForm.reset();
  }


  function closePopupV1() {
    var popup = document.getElementById("popup-v1");
    var popupForm = document.getElementById('contact-v1');
    popup.style.display = 'none';
    popupForm.reset();
  }

  function closePopupV2() {
    var popup = document.getElementById("popup-v2");
    var popupForm = document.getElementById('contact-v2');
    popup.style.display = 'none';
    popupForm.reset();
  }

  function closePopupV3() {
    var popup = document.getElementById("popup-v3");
    var popupForm = document.getElementById('contact-v3');
    popup.style.display = 'none';
    popupForm.reset();
  }

  function closePopupF2() {
    var popup = document.getElementById("popup-f2");
    var popupForm = document.getElementById('contact-f2');
    popup.style.display = 'none';
    popupForm.reset();
  }


  
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
    var popupForm = document.getElementById('subscribe');
  
    popupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      popupForm.reset();
      alert('Thank you for subscribing to our Newsletter!');
    });
    });

function redirectHome(){
  window.location.href ="register.html";
}

  
function login(event) {
  event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("userPassword").value;
        var popup = document.getElementById("contact-c1");

        var dummyUsers = [
          { username: "admin@sawa", password: "1234", redirectUrl: "admin.html" },
          { username: "donor@sawa", password: "12345", redirectUrl: "donorMain.html" },
          { username: "organization@sawa", password: "123456", redirectUrl: "organisation.html" },
        ];
    
        // Check if the entered credentials match any of the dummy data
        var authenticatedUser = dummyUsers.find(function(user) {
          return user.username === username && user.password === password;
        });
    
        if (authenticatedUser) {
          // Redirect to the appropriate webpage
          window.location.href = authenticatedUser.redirectUrl;
         
        } else {
          popup.reset();
          alert("Invalid username or password. Please try again.");
        }
        return false;
}


  function validateFormF2(event) {
    event.preventDefault();
    alert("Congratulations! You are now registered as a Donor.");
    window.location.href = "donorMain.html";
    document.getElementById('contact-f2').reset();
  }

  function validateFormF3(event) {
    event.preventDefault();
    document.getElementById('popup-c3').style.display = 'block';
    //alert("Congratulations! You are now registered as an Organization.");
    // window.location.href = "organisation.html";
  }

  function checkFilesOrganization(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    var input = document.getElementById('file-upload-t');
    if (input.files && input.files.length > 0) {
      // Files were uploaded
      alert('Files were uploaded successfully! You are now verified as an Organization Representative!');
      window.location.href = "organisation.html";
      document.getElementById('contact-f3').reset();
    } else {
      // No files were uploaded
      alert('No files were uploaded.');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('check-button-org');
    button.addEventListener('click', function(event) {
      checkFilesOrganization(event); // Pass the event to the function
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

  