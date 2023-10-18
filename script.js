document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('nav button');
    const projects = document.querySelectorAll('.project');
    let activeButtons = ['reset', 'xr', 'configurator', 'aerospace', 'art', 'av', 'webdev', 'product', 'appdev']; // Array to keep track of active buttons set to clear at first click

    buttons.forEach((button, index) => {
        button.style.backgroundColor = '#f39c12';

        button.addEventListener('click', function () {
            const filterTag = this.getAttribute('data-tag');
            const isActive = activeButtons.includes(filterTag);

            if (filterTag === 'reset') {
                //When 'about' button is clicked, all projects and buttons are activated
                activeButtons = ['reset', 'xr', 'configurator', 'aerospace', 'art', 'av', 'webdev', 'product', 'appdev'];
                buttons.forEach(btn => {
                    btn.style.backgroundColor = '#f39c12';
                });
            } else if (activeButtons.length === buttons.length) {
                // All buttons are active, clicking any button will deactivate all buttons
                activeButtons = ['reset'];
                buttons.forEach(btn => {
                    // Update text content
                    btn.style.backgroundColor = 'transparent';
                });
                activeButtons.push(filterTag);
                button.style.backgroundColor = '#f39c12';
            } else if (isActive) {
                // Button is active, deactivate it
                const index = activeButtons.indexOf(filterTag);
                activeButtons.splice(index, 1);
                button.style.backgroundColor = 'transparent';
            } else {
                // Button is inactive, activate it
                activeButtons.push(filterTag);
                button.style.backgroundColor = '#f39c12';
            }

            // Set the background color of the 'about' button to '#f39c12'
            const aboutButton = document.querySelector('button[data-tag="reset"]');
            aboutButton.style.backgroundColor = '#f39c12';

            // Toggle project visibility based on active buttons
            projects.forEach(project => {
                const projectTags = project.getAttribute('data-tags').split(' ');
                const isVisible = activeButtons.includes('all') || projectTags.some(tag => activeButtons.includes(tag));

                if (isVisible) {
                    project.style.animation = `expandingAnimation .25s`;
                    project.style.display = 'block';
                } else {
                    project.style.animation = 'none'; // Reset animation
                    project.style.display = 'none';
                }
            });
        });
    });
});