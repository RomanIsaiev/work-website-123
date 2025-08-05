document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.footer .list-item');

  listItems.forEach(item => {
    item.addEventListener('click', () => {
      // Закрываем все `.item-text`
      document.querySelectorAll('.footer .item-text').forEach(text => {
        if (text !== item.querySelector('.footer .item-text')) {
          text.style.display = 'none';
        }
      });

      // Переключаем видимость у текущего `.item-text`
      const itemText = item.querySelector('.footer .item-text');
      itemText.style.display =
        itemText.style.display === 'block' ? 'none' : 'block';
    });
  });
});
