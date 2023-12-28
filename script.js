document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('nav button');
    const boxes = document.querySelectorAll('.box');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    let activeButtons = ['reset', 'xr', 'configurator', 'aerospace', 'art', 'av', 'webdev', 'product', 'appdev']; // Array to keep track of active buttons set to clear at first click

    buttons.forEach((button, index) => {
        button.style.backgroundColor = '#ffffff';
        button.style.color = '#000000';
        

        button.addEventListener('click', function () {
            const filterTag = this.getAttribute('data-tag');
            const isActive = activeButtons.includes(filterTag);

            if (filterTag === 'reset') {
                //When 'reset' button is clicked, all projects and buttons are activated
                activeButtons = ['reset', 'xr', 'configurator', 'aerospace', 'art', 'av', 'webdev', 'product', 'appdev'];
                buttons.forEach(btn => {
                    btn.style.backgroundColor = '#ffffff';
                    btn.style.color = '#000000';
                });
            } else if (activeButtons.length === buttons.length) {
                // All buttons are active, clicking any button will deactivate all buttons
                activeButtons = ['reset'];
                buttons.forEach(btn => {
                    // Update text content
                    btn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    btn.style.color = '#ffffff';
                });
                activeButtons.push(filterTag);
                button.style.backgroundColor = '#ffffff';
                button.style.color = '#000000';
            } else if (isActive) {
                // Button is active, deactivate it
                const index = activeButtons.indexOf(filterTag);
                activeButtons.splice(index, 1);
                button.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                button.style.color = '#ffffff';
            } else {
                // Button is inactive, activate it
                activeButtons.push(filterTag);
                button.style.backgroundColor = '#ffffff';
                button.style.color = '#000000';
            }

            // Set the background color of the 'reset' button to '#ffffff'
            const resetButton = document.querySelector('button[data-tag="reset"]');
            resetButton.style.backgroundColor = '#ffffff';
            resetButton.style.color = '#000000';

            // Toggle project visibility based on active buttons
            boxes.forEach(box => {
                const boxTags = box.getAttribute('data-tags').split(' ');
                const isVisible = activeButtons.includes('all') || boxTags.some(tag => activeButtons.includes(tag));

                if (isVisible) {
                    box.style.animation = `expandingAnimation .3s`;
                    box.style.display = 'flex';
                } else {
                    box.style.animation = 'none'; // Reset animation
                    box.style.display = 'none';
                }
            });
        });
    });

    // Show or hide "top" button based on scroll position
    window.onscroll = function () {
        // Show or hide the button based on scroll position
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = 'block';
        } else {
          scrollToTopBtn.style.display = 'none';
        }
      };

    // Scroll to the top smoothly when the "top" button is clicked
    scrollToTopBtn.addEventListener('click', function () {
        // Scroll to the top smoothly
        scrollToTopSmoothly();
      });
    
      function scrollToTopSmoothly() {
        const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
        if (currentPosition > 0) {
          window.requestAnimationFrame(scrollToTopSmoothly);
          window.scrollTo(0, currentPosition - currentPosition / 8);
        }
      }

    // Get logo video element
    var video = document.getElementById("logo-img");

    // Add event listener for mouseover
    video.addEventListener("mouseover", function() {
    // Set the loop attribute to true
    video.loop = true;
  
    // Check if the video is paused and resume playback
    if (video.paused) {
      video.play();
    }
    });
  
    // Add event listener for mouseout
    video.addEventListener("mouseout", function() {
        // Remove the loop attribute
        video.loop = false;
    });
  
    // Add event listener for the end of the video
    video.addEventListener("ended", function() {
        // If the cursor is not hovering, pause the video
        if (!video.loop) {
              video.pause();
        }
    });

});