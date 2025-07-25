const scriptURL = 'https://script.google.com/macros/s/AKfycbwBZB6Eo9QVKMZlTCvNCsXEKL_WtUCONPYC4YNVadXPzsLrNIGenrJryF9nFBXucCBtIA/exec';


const form = document.forms['contact-form'];
const loading = document.getElementById('loading');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  loading.style.display = 'block'; // Show loading

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Thank you! Form is submitted");
      form.reset();
      
    })
    .then(() => {
      loading.style.display = 'none'; // Hide loading
      // window.location.reload(); // optional
    })
    .catch(error => {
      loading.style.display = 'none';
      console.error('Error!', error.message);
    });
});

function sendMessage(){
    let phonenumber ="919884289591";
    let message="Hello sir";
    let encodeMessage = encodeURIComponent(message);
    let url ="https://wa.me/"+phonenumber+"?text="+encodeMessage;
    window.open(url,'blank');
}



