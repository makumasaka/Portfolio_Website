document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('nav button');
    const boxes = document.querySelectorAll('.box');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    let activeButtons = ['reset', 'xr', 'configurator', 'aerospace', 'art', 'av', 'webdev', 'product', 'appdev', 'about']; // Array to keep track of active buttons set to clear at first click

    buttons.forEach((button, index) => {
        button.style.backgroundColor = '#ffffff';

        button.addEventListener('click', function () {
            const filterTag = this.getAttribute('data-tag');
            const isActive = activeButtons.includes(filterTag);

            if (filterTag === 'reset') {
                //When 'reset' button is clicked, all projects and buttons are activated
                activeButtons = ['reset', 'xr', 'configurator', 'aerospace', 'art', 'av', 'webdev', 'product', 'appdev', 'about'];
                buttons.forEach(btn => {
                    btn.style.backgroundColor = '#ffffff';
                });
            } else if (activeButtons.length === buttons.length) {
                // All buttons are active, clicking any button will deactivate all buttons
                activeButtons = ['reset'];
                buttons.forEach(btn => {
                    // Update text content
                    btn.style.backgroundColor = '#ffffff60';
                });
                activeButtons.push(filterTag);
                button.style.backgroundColor = '#ffffff';
            } else if (isActive) {
                // Button is active, deactivate it
                const index = activeButtons.indexOf(filterTag);
                activeButtons.splice(index, 1);
                button.style.backgroundColor = '#ffffff60';
            } else {
                // Button is inactive, activate it
                activeButtons.push(filterTag);
                button.style.backgroundColor = '#ffffff';
            }

            // Set the background color of the 'about' button to '#ffffff'
            const aboutButton = document.querySelector('button[data-tag="reset"]');
            aboutButton.style.backgroundColor = '#ffffff';

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



});