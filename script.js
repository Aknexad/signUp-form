const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  let password = document.querySelector('#password').value;

  let confirmPassword = document.querySelector(
    '#confrm-password'
  ).value;

  let form = document.querySelectorAll('input');
  form.forEach((element) => {
    if (element.value === '') {
      document.querySelector('.warr').innerText =
        element.name + ' must be fill';
    }
  });
  if (password !== confirmPassword) {
    let colm = document.querySelector('.passWarr');
    colm.innerHTML = 'Password dont math';
  }
});
