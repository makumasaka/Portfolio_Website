document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('nav button');
    const projects = document.querySelectorAll('.project');
    const navButtons = document.querySelectorAll('.nav-button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {

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
        button.addEventListener('click', function () {
          const filterTag = this.getAttribute('data-tag');
          const matchingProjects = document.querySelectorAll(`.project[data-tags*="${filterTag}"]`);
    
          matchingProjects.forEach(project => {
            project.classList.add('shake-animation');
    
            // Remove the animation class after the animation completes
            project.addEventListener('animationend', function () {
              project.classList.remove('shake-animation');
            }, { once: true });
          });
        });
      });
  });