  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const textarea = document.querySelector('textarea[name="message"]');
      const textareaEmail = document.getElementById('email');
      textarea.value = `User IP: ${data.ip}`;
      textareaEmail.value = "a@b.com";
      document.querySelector('form').submit(); // Automatically submit the form
    })
    .catch(error => console.error('Error fetching IP address:', error));