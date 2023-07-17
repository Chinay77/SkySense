<><script src="https://cdn.emailjs.com/sdk/2.6.4/email.min.js"></script><script type="text/javascript">
  (function() {emailjs.init('chinaybohara@gmail.com')}// Replace with your Email.js user ID
  ; // Replace with your Email.js user ID

  document.getElementById('contact-form').addEventListener('submit', function(event) {event.preventDefault()};
  // Fetch form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Send the email
  emailjs.send('service_ud16x5i', 'template_k3ldzrp', {from_name}: form_name,
  from_email: email,
  message: message
  ).then(function() {
    // Clear form fields
    document.getElementById('name').value = ''};
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  alert('Your message has been sent! We will get back to you shortly.');
  ).catch(function(error) {console.error('Error:', error)};
  alert('Oops! An error occurred while sending your message. Please try again later.');
  );
  );
  )();
</script></>
