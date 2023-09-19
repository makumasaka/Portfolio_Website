document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('nav button');
    const projects = document.querySelectorAll('.project');
    const navButtons = document.querySelectorAll('nav button');

    // Initialize a variable to keep track of the button state
    let isClicked = false;
  
    buttons.forEach(button => {
      // Add a click event listener to the button
      button.addEventListener('click', function () {

        // Toggle the button state
        isClicked = !isClicked;

        // Change background color of nav button       
        if (isClicked) {
          button.style.backgroundColor = 'transparent'; // New background color when clicked
        } else {
          button.style.backgroundColor = '#f39c12'; // Default background color
        }

        const filterTag = this.getAttribute('data-tag');
        
        projects.forEach(project => {
          const projectTags = project.getAttribute('data-tags').split(' ');
  
          if (filterTag === 'all' || projectTags.includes(filterTag)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });

    navButtons.forEach(button => {
        // Add a click event listener to the button
        button.addEventListener('click', function () {
          //Add stacking animation
          projects.forEach((project, index) => {
            project.style.animation = `fallingStackAnimation 1s cubic-bezier(0.25, 1, 0.5, 1) ${0.2 * index}s forwards`;
          });
        });
      });

  });