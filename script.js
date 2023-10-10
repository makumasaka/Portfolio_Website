document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('nav button');
    const projects = document.querySelectorAll('.project');
    const changeText = document.querySelector('#test-text');

    // Initialize a variables to keep track of number of data tags with isClicked = true
    let tagIndex = 0;
    let tagTotal = 4;

    buttons.forEach(button => {
      
      // Initialize a variables to keep track of the button state
      
      let isClicked = true;
      tagIndex++;

      // Add a click event listener to the button
      button.addEventListener('click', function () {

        changeText.textContent = tagIndex + this.id;
    
        if (tagIndex === tagTotal) {
          tagIndex = 1;
          buttons.forEach(button => button.style.backgroundColor = 'transparent');
          button.style.backgroundColor = '#f39c12'; // Default background color
        } else {

          // Change background color of nav button       
          if (button.style.backgroundColor === '#f39c12') {
            tagIndex--;
            isClicked = !isClicked; // Toggle the button state
            button.style.backgroundColor = 'transparent'; // New background color when clicked
          } else {
            tagIndex++;
            isClicked = !isClicked; // Toggle the button state
            button.style.backgroundColor = '#f39c12'; // Default background color
          }

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

        //Add stacking animation
        projects.forEach((project, index) => {
          project.style.animation = `fallingStackAnimation 0.5s cubic-bezier(0.25, 1, 0.5, 1)`;
        }); 
    
      });
    });

  });