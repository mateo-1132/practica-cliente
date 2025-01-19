function toggleDarkMode() {
    let isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  }
  
  // On page load


    /*if (localStorage.getItem('darkMode') === 'enabled') {
      document.documentElement.classList.add('dark');
    }*/
  document.querySelector('#changeTheme').addEventListener('click', toggleDarkMode);
  