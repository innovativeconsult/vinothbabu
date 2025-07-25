  
        //    Whatsapp 

function sendMessage(){
    let phonenumber ="919884289591";
    let message="Hello sir";
    let encodeMessage = encodeURIComponent(message);
    let url ="https://wa.me/"+phonenumber+"?text="+encodeMessage;
    window.open(url,'blank');
}



let check = true;
let showspan = (val) => {
    if (check) {
        let spantag = document.querySelector(`.blogbox${val} p span`);
        spantag.style = "display:block;"
        document.getElementById(val).innerText = "less";
        check = !check;
    }
    else {
        let spantag = document.querySelector(`.blogbox${val} p span`);
        spantag.style = "display:none;"
        document.getElementById(val).innerText = "Read More";
        check=!check;
    }
}
// console.log(spantag.innerHTML);


        //    Counter 

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter1');


  const animate = () => {
     let speed = 10000000; 
    const target = +counter.dataset.target;
    
    const time = target / speed;
    const duration = 200;
    const stepTime = 1;
    const step = Math.ceil(target / (duration / stepTime));
    let current = 0;

    const update = () => {
      current += step;
      counter.textContent = current < target ? current : target;
      if (current < target) setTimeout(update, stepTime);
    };
    update();
  };



  setTimeout(() => {
   var a= document.getElementById("Addsym")   ;
   a.innerText = "Tamil";
   console.log(a);
    console.log("ghah")
  }, 1000);

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  });

  obs.observe(counter);
});

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter2');


  const animate = () => {
     const speed = 10000; 
    const target = +counter.dataset.target;
    const time = target / speed;
    const duration = 2000;
    const stepTime = 50;
    const step = Math.ceil(target / (duration / stepTime));
    let current = 0;

    const update = () => {
      current += step;
      counter.textContent = current < target ? current : target;
      if (current < target) setTimeout(update, stepTime);
    };
    update();
  };

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  });

  obs.observe(counter);
});
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter3');


  const animate = () => {
     var speed = 2000; 
    const target = +counter.dataset.target;
    const time = target / speed;
    const duration = 2000;
    const stepTime = 50;
    const step = Math.ceil(target / (duration / stepTime));
    let current = 0;

    const update = () => {
      current += step;
      counter.textContent = current < target ? current : target;
      if (current < target) setTimeout(update, stepTime);
    };
    update();
  };

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  });

  obs.observe(counter);
});


