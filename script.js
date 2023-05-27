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

function filterFunction(){
  advanceFilterFunction()
}
function oldfilterFunction() {
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
function advanceFilterFunction(){
  div = document.getElementById("filterMenuItems");
  const items = div.getElementsByTagName("a");
  const searchInput = document.getElementById('ptwesv');
  const searchValue = searchInput.value.toLowerCase().trim();
  const keywords = searchValue.split(' ');
  Array.from(items).forEach(item => {
    const text = item.textContent.toLowerCase();
    let hasMatch = true;

    // Check if all keywords match the item text
    keywords.forEach(keyword => {
      if (!text.includes(keyword)) {
        hasMatch = false;
      }
      });

      if (hasMatch) {
      item.style.display = 'block';
      } else {
      item.style.display = 'none';
      }
  });
}





function copyText(element) {
      // Create a temporary input element
var tempInput = document.createElement("input");
tempInput.value = element.innerText;
document.body.appendChild(tempInput);

      // Copy the text from the input element
tempInput.select();
document.execCommand("copy");

      // Remove the temporary input element
document.body.removeChild(tempInput);

      // Alert or provide feedback to the user
var alertText = tempInput.value + ' - Text copied';
alert(alertText);
}


function appendQuestions(){
  let container = document.getElementById('filterMenuItems');
  let q_list = {
    q1: 'How to enable OTG connection in my android?',
    q2: 'How to clear temporary files in windows?',
    q3: 'How to enable thumbnails in File Explorer?',
    q4: 'Is my Window 10 compatible to be upgraded to Windows 11?',
    q5: 'Know why to upgrade to Windows 11?'
  };
  for (let q in q_list){
    let opt = document.createElement("a");
    opt.id = q;
    opt.innerText = q_list[q];
    container.appendChild(opt);
    opt.addEventListener('click', handleLinkClick);
  };
  function handleLinkClick(event) {
    event.preventDefault(); // Prevent the default link behavior

    var linkId = this.id; // Get the ID of the clicked link
    var pageUrl = linkId + '.html'; // Generate the URL based on the ID

  // Open the page in a new window or tab
    window.open(pageUrl);
  };
};

