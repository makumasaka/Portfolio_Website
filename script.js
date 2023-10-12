document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('nav button');
    const projects = document.querySelectorAll('.project');
    const changeText = document.querySelector("#change-text");
    let activeButtons = []; // Array to keep track of active buttons

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const filterTag = this.getAttribute('data-tag');
            const isActive = activeButtons.includes(filterTag);

            if (activeButtons.length === buttons.length) {
                // All buttons are active, clicking any button will deactivate all buttons
                activeButtons = [];
                buttons.forEach(btn => {
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

            // Update text content
            changeText.textContent = activeButtons.join(', ');

            // Toggle project visibility based on active buttons
            projects.forEach(project => {
                const projectTags = project.getAttribute('data-tags').split(' ');
                const isVisible = activeButtons.includes('all') || projectTags.some(tag => activeButtons.includes(tag));
                project.style.display = isVisible ? 'block' : 'none';
            });

            // Add stacking animation
            projects.forEach((project, index) => {
                project.style.animation = `fallingStackAnimation 0.5s cubic-bezier(0.25, 1, 0.5, 1)`;
            });
        });
    });
});