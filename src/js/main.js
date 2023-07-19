
 // Код для надсилання форми за допомогою AJAX-запиту
 const form = document.getElementById('form');
 const sendButton = document.getElementById('send-button');

 sendButton.addEventListener('click', async (event) => {
   event.preventDefault(); // Зупинити переадресацію на /send-email

   const formData = new FormData(form);
   const response = await fetch('/send-email', {
     method: 'POST',
     body: formData
   });

   const data = await response.json();

   if (data.success) {
     Swal.fire({
       icon: 'success',
       title: 'Успіх!',
       text: data.message
     });
     form.reset();
   } else {
     Swal.fire({
       icon: 'error',
       title: 'Помилка!',
       text: data.message
     });
   }
 });

console.log("Hello");