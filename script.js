document.addEventListener('DOMContentLoaded', function () {
    const filterInput = document.getElementById('filterInput');
    const projects = document.querySelectorAll('.project');
    const buttons = document.querySelectorAll('nav button');
  
    filterInput.addEventListener('input', function () {
      const filterValue = filterInput.value.toLowerCase();
  
      projects.forEach(project => {
        const projectTags = project.getAttribute('data-tags').toLowerCase();
  
        if (projectTags.includes(filterValue) || filterValue === '') {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });

    buttons.forEach(button => {
        button.addEventListener('click', function () {
          const targetId = this.id.replace('Btn', ''); // Remove "Btn" from button ID
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
  });