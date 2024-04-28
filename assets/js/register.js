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

    function updateInfo(){
      alert("Information updated successfully");
    }

  
  
  document.addEventListener('DOMContentLoaded', function() {
    var popupForm = document.getElementById('subscribe');
  
    popupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      popupForm.reset();
      alert('Thank you for subscribing to our Newsletter!');
    });
    });
  
function login() {
        var username = document.getElementById("email").value;
        var password = document.getElementById("passwordLogin").value;
        var dummyUsers = [
          { username: "admin@sawa", password: "1234", redirectUrl: "admin.html" },
          { username: "donor@sawa", password: "12345", redirectUrl: "donorMain.html" },
          { username: "organization@sawa", password: "123456", redirectUrl: "donorMain.html" },
        ];
    
        // Check if the entered credentials match any of the dummy data
        var authenticatedUser = dummyUsers.find(function(user) {
          return user.username === username && user.password === password;
        });
    
        if (authenticatedUser) {
          // Redirect to the appropriate webpage
          window.location.href = authenticatedUser.redirectUrl;
         
        } else {
          alert("Invalid username or password. Please try again.");
        }
        return false;
}
function closePopupLogin() {
    var popup = document.getElementById("popup-login");
    var popupForm = document.getElementById('contact-Login');
    popup.style.display = "none";
    popupForm.reset();
  } 

  function LoginPage() {
    // Prevent the default form submission behavior
    event.preventDefault();
      document.getElementById('popup-login').style.display = 'block';
  } 

  function showAlertA() {
    alert("Congratulations! You are now registered as a part of our community");
  }
  
  function showAlertB() {
    alert("Congratulations! You are now registered as a part of our community");
  }

  function redirectToLogin() {
    window.location.href = "Login.html"; // Replace "https://example.com" with the URL you want to redirect to
  }

  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });
  function validateFormF2() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email1").value;
    var number = document.getElementById("contactNumber").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var area = document.getElementById("area").value;
    var governorate = document.getElementById("governorate").value;
    

    if (!fname || !lname || !gender || !email ||!number|| !password ||!address || !area || !governorate ) {
      // Display alert if any field is empty
      alert("Please complete all fields before submitting.");
      return false; // Prevent form submission
    }

    // If all fields are completed and passwords match, allow form submission
    showAlertA()
    return true;
  }

  function validateFormF3() {
    var fname2 = document.getElementById("fname").value;
    var lname2 = document.getElementById("lname").value;
    var gender2 = document.getElementById("gender").value;
    var email2 = document.getElementById("email1").value;
    var number2 = document.getElementById("contactNumber").value;
    var password2 = document.getElementById("password").value;
    var address2 = document.getElementById("address").value;
    var area2 = document.getElementById("area").value;
    var governorate2 = document.getElementById("governorate").value;
    var OrganizationName = document.getElementById("OrganizationName").value;
    var OrganizationType = document.getElementById("OrganizationType").value;
    var OrganizationAddress = document.getElementById("OrganizationAddress").value;
    
    

    if (!fname2 || !lname2 || !gender2 || !email2 ||!number2|| !password2 ||!address2 || !area2 || !governorate2 || ! OrganizationName|| !OrganizationType|| !OrganizationAddress ) {
      // Display alert if any field is empty
      alert("Please complete all fields before submitting.");
      return false; // Prevent form submission
    }

    // If all fields are completed and passwords match, allow form submission
    showAlertB();
    return true;
  }
  