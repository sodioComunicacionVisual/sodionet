(function($) { 
    "use strict";

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

    $(document).ready(function() {
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
    });
})(jQuery);


function playVideo(container) {
    const video = container.querySelector('video');
    video.play(); // Reproduce el video al hacer hover
}

function pauseVideo(container) {
    const video = container.querySelector('video');
    video.pause(); // Pausa el video al quitar el hover
}