const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Зупинити переадресацію на /send-email

  const formData = new FormData(form);
  for (const pair of formData.entries()) {
    console.log(pair[0], pair[1]);
  }

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
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Помилка!',
      text: data.message
    });
  }

  form.reset();
});
