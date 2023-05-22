var menu = document.getElementById("top__")
menu.addEventListener('contextmenu', event => event.preventDefault());


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).ready(function(){
  $("#menu_btn").click(function(){
  	var x = $("#tab_menu").css("display")
    $("#tab_menu").fadeToggle("slow", "swing");
    if (x === "block"){
     $("#menu_btn").css("background-color","#171717")
    }
    else {
    	$("#menu_btn").css("background-color","#000")
    	$("#menu_btn").css("z-index","0")
    	$("#menu_btn").css("color","#ababab")
    };
  });
});
$(document).ready(function(){
  $(".content").click(function(){
    $("#tab_menu").fadeOut("slow","swing");
    $("#menu_btn").css("background-color","#171717");
  });
});

function android(){
  window.location.href="android.html";
}
function windows(){
  window.location.href="windows.html#win";
}
function home() {
	window.location.href="index.html";
}
function desktop() {
  window.location.href="desktop.html";
}
function start_menu() {
  window.location.href="start_menu.html";
}
function virtual_win() {
  window.location.href="desktop.html#virtual_desktop";
}
function god_mode(){
  window.location.href="desktop.html#god_mode";
}
function snapping_win(){
  window.location.href="desktop.html#snapping_win";
}
function customize_tb(){
  window.location.href="desktop.html#customize_tb";
}

function contact() {
	window.location.href="https://sm-techos.github.io/SM-Home/contact.html";
}


function scrollToTop() {

	window.scrollTo({top: 0, behavior: 'smooth'});
	const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 20);
  }
};
scrollToTop();

}



$(document).ready(function(){
  $("#ptwesv").click(function(){
  	var x = $("#ptwest").css("display")
    $("#ptwest").fadeToggle("slow", "swing");
    if (x === "block"){
     $("#filterMenuItems").css("background-color","#171717")
    }
    else {
    	$("#filterMenuItems").css("z-index","0")
    	$("#filterMenuItems").css("color","#ababab")
    	$("#filterMenuItems").css("background-color","#171717")
    };
  });
});
$(document).ready(function(){
  $(".content").click(function(){
    $("#ptwest").fadeOut("slow","swing");
  });
});

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("ptwesv");
  filter = input.value.toUpperCase();
  div = document.getElementById("filterMenuItems");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var q5 = document.getElementById('q5');

// Add click event to each link
q1.addEventListener('click', handleLinkClick);
q2.addEventListener('click', handleLinkClick);
q3.addEventListener('click', handleLinkClick);
q4.addEventListener('click', handleLinkClick);
q5.addEventListener('click', handleLinkClick);

// Handle link click events
function handleLinkClick(event) {
  event.preventDefault(); // Prevent the default link behavior

  var linkId = this.id; // Get the ID of the clicked link
  var pageUrl = linkId + '.html'; // Generate the URL based on the ID

  // Open the page in a new window or tab
  window.open(pageUrl);
}

