import get from '../utils/getElement.js';
import getUser from '../utils/fetchUser.js';
import {img, title, value, displayUser} from '../utils/displayUser.js';

const btn = get('.btn');

const showUser = async () => {
  value.textContent = "Loading...";
  title.textContent = `Loading...`;
  img.src = './load-loading.gif';
  // get user from api
  // getUser().then((data)=> console.log(data));
  const person = await getUser()
  // display user
  displayUser(person);
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);


// btns.forEach((btn)=>{
//   btn.addEventListener('click', async (event)=>{
//     const curr = event.currentTarget
//     curr.classList.add('active');
//     btns.forEach((btn)=>{
//       if(btn != curr) btn.classList.remove('active');
//     });
//     const label = curr.dataset.label;
//     title.textContent = `My ${label} is`; 
//     const person = await getUser();
//     value.textContent = person[label];
//   })
// })
