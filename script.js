document.addEventListener('DOMContentLoaded', function () {
    const filterInput = document.getElementById('filterInput');
    const projects = document.querySelectorAll('.project');
  
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
  });