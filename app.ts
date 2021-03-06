import * as fromStore from './store/index';
import * as fromRender from './utils/render';

(function() {
  const input = document.querySelector('input') as HTMLInputElement;
  const button = document.querySelector('button') as HTMLButtonElement;
  const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
  const todoList = document.querySelector('.todos') as HTMLLIElement;

  button.addEventListener(
    'click',
    () => {
      if (!input.value.trim()) return;

      const todo = { label: input.value, complete: false };

      console.log('Todo added: ', todo);
      input.value = '';
    },
    false
  );
})();
