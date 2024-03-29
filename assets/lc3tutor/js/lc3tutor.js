// Dynamically load javascript.
function loadScript(url, callback) {
    // Create a new script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
  
    // Add a callback function (optional) to be executed when the script has loaded
    if (callback) {
      script.onload = function() {
        callback();
      };
    }
  
    // Append the script element to the head or body of the document
    document.head.appendChild(script);
}

// Accordion navigation menu setup.
var accordians;
function setUpAccordionMenu(){
    accordions = document.querySelectorAll(".accordion");
        
    accordions.forEach(accordion => {
        const panel = accordion.nextElementSibling;
        let chapters = panel.children[0].querySelectorAll('.chapter');
        for (let i=0; i < chapters.length; i++){
            let classes = chapters[i].classList.value;
            if(classes.includes("active")){
                panel.style.display = "block";
                accordion.classList.toggle("active");
            }
            //console.log(chapters[i].classList.value);
        }
        //console.log(panel.children[0].querySelectorAll('.chapter'));
        
        //panel.style.display = "block";
        accordion.addEventListener("click", function(event) {
            event.stopPropagation();
            this.classList.toggle("active");

            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
}