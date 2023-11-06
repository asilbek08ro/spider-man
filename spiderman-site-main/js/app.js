const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const itemName = button.parentNode.querySelector('h3').innerText;
    const price = button.innerText.split(' ')[2];
    if (confirm(`Вы уверены, что хотите купить ${itemName} за ${price}?`)) {
      alert('Спасибо за покупку!');
    } else {
      alert('Покупка отменена');
    }
  });
});