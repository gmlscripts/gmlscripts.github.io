// ONLOAD HANDLER
function start() {
    setupAccordion();
}


// CLIPBOARD HANDLER
// https://stackoverflow.com/a/30810322
// This code has been modified to copy text from
// a DOM element and to hide textarea scrollbars.
// It also removes \xA0 (nbsp) characters generated
// by the innerText DOM accessor. These occur when
// it collapses lines consisting of only whitespace
// to a single space and are also generated between
// successive linebreaks. Non-critical whitespace
// in the original code is not preserved but it's
// better than inserting weird characters into it.
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
    textArea.value = document.getElementById(id).innerText.replace(/\u00a0/g, "");
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    var successful = false;
    try {
        successful = document.execCommand("copy");
    } catch (err) {
        console.log("Copy is not supported in this browser.");
    }

    document.body.removeChild(textArea);

    return successful;
}

function copyUpdate(e, success) {
    if (success) {
        e.innerText = "COPIED";
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function () {
            e.innerText = "COPY";
        }, 6000);
    }
    return false;
}
let timeoutID = undefined;


// ACCORDION MENU HANDLER
function setupAccordion() {
    // Select accordion elements
    var accordion_head = document.querySelectorAll(".accordion > li > a"),
        accordion_body = document.querySelectorAll(".accordion > li > ul");
    for (var i = 0; i < accordion_head.length; i++) {
        // Set height of initial active element
        if (accordion_head[i].classList.contains("active")) {
            accordion_head[i].nextElementSibling.style.maxHeight = accordion_head[i].nextElementSibling.scrollHeight + "px";
        }
        // Set event listeners
        accordion_head[i].addEventListener("click", function (event) {
            // Disable header links
            event.preventDefault();
            // Show and hide the tabs on click
            if (this.getAttribute("class") != "active") {
                accordion_active = this.parentNode.getAttribute("id");
                for (var j = 0; j < accordion_body.length; j++) {
                    accordion_body[j].style.maxHeight = null;
                }
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
                for (var j = 0; j < accordion_head.length; j++) {
                    accordion_head[j].classList.remove("active");
                }
                this.classList.add("active");
            } else {
                for (var j = 0; j < accordion_head.length; j++) {
                    accordion_head[j].classList.remove("active");
                }
                this.nextElementSibling.style.maxHeight = null;
            }
        });
    }
}


// MATHJAX DISPLAY HANDLER
function showMathJax() {
    var mathjax = document.querySelectorAll(".mathjax");
    for (var i = 0; i < mathjax.length; i++) {
        mathjax[i].style.maxHeight = mathjax[i].scrollHeight + "px";
        mathjax[i].style.opacity = 1.0;
    }
}


// CODE EXPANDER
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