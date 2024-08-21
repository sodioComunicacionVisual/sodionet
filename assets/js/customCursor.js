(function($) { 
    "use strict";

    // Cursor 1 (General)
    document.addEventListener("mousemove", function(event) {
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
    });

    var cursor = document.getElementById("cursor");

    function addHover() {
        cursor.classList.add("hover");
    }

    function removeHover() {
        cursor.classList.remove("hover");
    }

    var hoverTargets = document.querySelectorAll("a, button, input, textarea, select"); // Elementos interactuables
    hoverTargets.forEach(function(target) {
        target.addEventListener("mouseover", addHover);
        target.addEventListener("mouseout", removeHover);
    });

    // Cursor 2 (Portfolio Section)
    var cursor2 = document.getElementById("cursor2");
    var portfolioSection = document.getElementById("portfolio");

    document.addEventListener("mousemove", function(event) {
        if (portfolioSection && portfolioSection.contains(event.target)) {
            cursor2.style.display = "block";
            cursor.style.display = "none"; // Hide the general cursor
            cursor3.style.display = "none"; // Hide the third cursor
            cursor2.style.animation = "shrinkIn 0.2s forwards"; /* Shrink in when entering */
            cursor2.style.left = event.clientX + "px";
            cursor2.style.top = event.clientY + "px";
        } else {
            cursor2.style.animation = "shrinkOut 0.2s forwards"; /* Shrink out when leaving */
            setTimeout(function() {
                cursor2.style.display = "none";
                cursor.style.display = "block"; // Show the general cursor outside of portfolio
            }, 200);
        }
    });

    // Change text on hover over video-container elements
    var videoContainers = document.querySelectorAll(".video-container");

    videoContainers.forEach(function(container) {
        container.addEventListener("mouseover", function() {
            document.querySelector(".hover-underline-animation-cursor2").textContent = "See Case Study";
        });

        container.addEventListener("mouseout", function() {
            document.querySelector(".hover-underline-animation-cursor2").textContent = "Keep Scrolling";
        });
    });

    // Cursor 3 (Testimonial Section)
    var cursor3 = document.getElementById("cursor3");
    var testimonialSection = document.getElementById("testimonialSection");

    document.addEventListener("mousemove", function(event) {
        if (testimonialSection && testimonialSection.contains(event.target)) {
            cursor3.style.display = "block";
            cursor.style.display = "none"; // Hide the general cursor
            cursor2.style.display = "none"; // Hide the second cursor
            cursor3.style.animation = "shrinkIn 0.2s forwards"; /* Shrink in when entering */
            cursor3.style.left = event.clientX + "px";
            cursor3.style.top = event.clientY + "px";
        } else {
            cursor3.style.animation = "shrinkOut 0.2s forwards"; /* Shrink out when leaving */
            setTimeout(function() {
                cursor3.style.display = "none";
                cursor.style.display = "block"; // Show the general cursor outside of testimonial section
            }, 200);
        }
    });

})(jQuery);
