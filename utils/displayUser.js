import get from './getElement.js';

const btns = [...get('.icon', true)];

export const img = get('.user-img');
export const title = get('.user-title');
export const value = get('.user-value');
export const displayUser = (person) => {
  img.src = person.pic;
  value.textContent = person.name;
  title.textContent = `My name is`;
  btns.forEach((btn) => btn.classList.remove('active'));
  btns[0].classList.add('active');
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      btns.forEach((btn) => btn.classList.remove('active'));
      btn.classList.add('active');
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
    });
  });
};
