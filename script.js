const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save);

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  //const today = '06/05';
  const dayExists = nlwSetup.dayExists(today); //boolean - true or false

  if (dayExists) {
    alert('Day already inserted: 🔴');
    return;
  }

  alert('Added successfully ✔');
  nlwSetup.addDay(today);
}

//saving data on local storage
function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

// const data = {
//   run: ['01-01', '01-02', '01-06', '01-07', '01-08'],
//   takePills: ['01-03'],
//   journal: ['01-02'],
// };

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
nlwSetup.setData(data);
nlwSetup.load();
