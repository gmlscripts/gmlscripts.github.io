/*
**  ONLOAD HANDLER
*/
function start() {
    setupAccordion();
    setupCookies();
    setupContrastFilter();
    PR.prettyPrint();
}



/*
**  COOKIE HANDLERS
*/
function getCookie(c_name) {
  if (document.cookie.length>0) {
    var c_start = document.cookie.indexOf(c_name + "=");
    if (c_start !== -1) {
      c_start = c_start + c_name.length+1;
      var c_end = document.cookie.indexOf(";",c_start);
      if (c_end === -1) { c_end = document.cookie.length; }
      return unescape(document.cookie.substring(c_start,c_end));
    }
  }
  return "";
}

function setCookie(c_name,c_value,expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(c_value)
  +  ((expiredays === null) ? "" : ";expires=" + exdate.toGMTString())
  + ";path=/";
}

function delCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie = name + "="
    + ((path   === null) ? "" : "; path="   + path)
    +  ((domain === null) ? "" : "; domain=" + domain)
    +  "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}



/*
**  CLIPBOARD HANDLER
**
**  https://stackoverflow.com/a/30810322
**  This code has been modified to copy text from
**  a DOM element and to hide textarea scrollbars.
**  It also removes \xA0 (nbsp) characters generated
**  by the innerText DOM accessor. These occur when
**  it collapses lines consisting of only whitespace
**  to a single space and are also generated between
**  successive linebreaks. Non-critical whitespace
**  in the original code is not preserved but it's
**  better than inserting weird characters into it.
*/
function copyToClipboard(id) {
  var textArea = document.createElement("textarea");
  textArea.style.position = "fixed";
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = "2em";
  textArea.style.height = "2em";
  textArea.style.padding = 0;
  textArea.style.border = "none";
  textArea.style.outline = "none";
  textArea.style.boxShadow = "none";
  textArea.style.overflow = "hidden";
  textArea.style.background = "transparent";
  textArea.value = document.getElementById(id).innerText.replace(/\u00a0/g,"");
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  var successful = false;
  try {
    successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
  } catch (err) {
    console.log("Copy is not supported in this browser.");
  }

  document.body.removeChild(textArea);

  return successful;
}

var timeoutID = undefined;
function copyUpdate(e,success) {
    if (success) {
        e.innerText = "COPIED";
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function() { e.innerText = "COPY"; }, 6000);
    }
    return false;
}


/*
**  ACCORDION MENU HANDLER
*/
function setupAccordion() {

  var accordion_active = getCookie("accordion");

  // Set height of active element explicitly
  active_element = document.getElementById(accordion_active);
  if (active_element) {
    active_element.childNodes[3].style.maxHeight = active_element.childNodes[3].scrollHeight+"px";
  }

  // Select accordion elements
  var accordion_head = document.querySelectorAll(".accordion > li > a"),
      accordion_body = document.querySelectorAll(".accordion > li > ul");

  for (var i=0; i<accordion_head.length; i++) {

    accordion_head[i].addEventListener("click", function (event) {

      // Disable header links
      event.preventDefault();
      // Show and hide the tabs on click
      if (this.getAttribute("class") != "active") {
        accordion_active = this.parentNode.getAttribute("id");
        setCookie("accordion",accordion_active,1);
        for (var j=0; j<accordion_body.length; j++) {
          accordion_body[j].style.maxHeight = null;
        }
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight+"px";
        for (var j=0; j<accordion_head.length; j++) {
          accordion_head[j].classList.remove("active");
        }
        this.classList.add("active");
      } else {
        setCookie("accordion",null,0);
        for (var j=0; j<accordion_head.length; j++) {
          accordion_head[j].classList.remove("active");
        }
        this.nextElementSibling.style.maxHeight = null;
      }
    });
  }
}



/*
**  CONTRAST FILTER HANDLER
*/
function setupContrastFilter() {
  var contrast = document.getElementById("contrast");
  if (getCookie("contrast")) {
    contrast.classList.add("active");
    document.querySelector("html").classList.add("filter");
  }
  contrast.style.opacity = 0.5;
  contrast.style.cursor = "pointer";
  contrast.addEventListener("mouseover", function() { this.style.opacity = 1.0; });
  contrast.addEventListener("mouseout",  function() { this.style.opacity = 0.5; });
  contrast.addEventListener("click", function() {
      if (this.getAttribute("class") == "active") {
          setCookie("contrast",null,0);
          this.classList.remove("active");
          document.querySelector("html").classList.remove("filter");
      } else {
          setCookie("contrast",1,1);
          this.classList.add("active");
          document.querySelector("html").classList.add("filter");
      }
  });
}



/*
**  COOKIE NOTICE HANDLER
*/
function setupCookies() {
  var cookies = getCookie("cookies");
  if (cookies != "ok") {
  var notice = document.getElementById("cookies");
  notice.style.display = "block";
  var button = document.getElementById("cookiebutton");
  button.addEventListener("click", function (event) {
    var notice = document.getElementById("cookies");
    notice.style.display = "none";
    setCookie("cookies","ok",365);
  });
  }
}



/*
**  MATHJAX DISPLAY HANDLER
*/
function showMathJax() {
  var mathjax = document.querySelectorAll(".mathjax");

  for (var i=0; i<mathjax.length; i++) {
      mathjax[i].style.maxHeight = mathjax[i].scrollHeight+"px";
      mathjax[i].style.opacity = 1.0;
  }
}



/*
**  CODE EXPANDER
*/
function expandCode(e) {
    var vscroll = e.parentNode;
    if (vscroll.classList.contains("expand")) {
        vscroll.classList.remove("expand");
        e.textContent = "Expand";
    } else {
        vscroll.classList.add("expand");
        e.textContent = "Collapse";
    }
}
