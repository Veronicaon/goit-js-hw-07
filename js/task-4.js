
const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // ❗ Зупиняємо перезавантаження сторінки

  const { email, password } = form.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // 🔍 Перевірка: чи всі поля заповнені
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  // 🧳 Створюємо об'єкт із даними
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData); // 🖨️ Виводимо в консоль

  form.reset(); // 🧼 Очищення форми
});
