document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('nav button');
    const projects = document.querySelectorAll('.project');
    const navButtons = document.querySelectorAll('nav button');
  
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
          projects.forEach((project, index) => {
            project.style.animation = `fallingStackAnimation 1s cubic-bezier(0.25, 1, 0.5, 1) ${0.2 * index}s forwards`;
          });
        });
      });

  });