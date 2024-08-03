const count = document.querySelector(`.count`);
const sub = document.querySelector(`#sub`);
const add = document.querySelector(`#add`);
const rst = document.querySelector(`#rst`);

let counter = 0;

sub.addEventListener(`click`, () => {
  counter--;
  count.innerHTML = counter;
});

add.addEventListener(`click`, () => {
  counter++;
  count.innerHTML = counter;
});

rst.addEventListener(`click`, () => {
  counter = 0;
  count.innerHTML = counter;
});
