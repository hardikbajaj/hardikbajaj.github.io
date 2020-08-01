window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.getElementById("Bar").style.height = "6px";
    // document.getElementById("navv").style.height = "70px";
    // document.getElementById("navv").style.backgroundColor="black";
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    if(document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
    // document.getElementsByClassName("navbar").style.height = "70px";
    // document.getElementsByClassName("navbar").style.background-color = "orange";
      document.getElementById("logoimg").style.height = "80px";
      document.getElementById("navv").style.height = "70px";
      document.getElementById("navv").style.backgroundColor="black";
      // document.getElementById("navbarNav").style.backgroundColor="black";
      if(document.querySelector(".navbar .show"))
        document.querySelector(".navbar .show").style.backgroundColor="black";
    
    } 

  }
  
  else {
    document.getElementById("Bar").style.height = "0px";
    document.getElementById("navv").style.height = "120px";
    document.getElementById("logoimg").style.height = "120px";
    document.getElementById("navv").style.backgroundColor="transparent";
    // document.getElementById("navbarNav").style.backgroundColor="transparent";
    if(document.querySelector(".navbar .show"))
      document.querySelector(".navbar .show").style.backgroundColor="transparent";
  }

}

