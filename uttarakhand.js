                                                      // Resposiv nav bar

const mob_nav = document.querySelector(".mobil-nav-btn");
const head = document.querySelector(".header");

const func = () => {
    head.classList.toggle("active");
}


mob_nav.addEventListener("click" , () => func());


                                                         // swipwer js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay : 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

                    
                                                         // increment counter code 

const counters = document.querySelectorAll(".counter");

 counters.forEach( (counter) => {
    counter.innerHTML = 0;
    
    const updateCounter = () => {
      const targetCount = +counter.getAttribute('data-target');

      const stringCount = Number(counter.innerHTML);

      const incr = targetCount / 100;

      if(stringCount < targetCount){
        counter.innerHTML = `${Math.round(stringCount + incr)}`;
        setTimeout(updateCounter , 10 )
      }else{
        counter.innerHTML = targetCount;
      }
    }

    updateCounter();

  })


                               // booking 

  const massage = () =>{
    alert("your booking is done 😍");
  }
  const masg =  document.getElementById("book-btn");
  masg.addEventListener("click", massage);

                               
                                   // contact

  const contact = () =>{
    alert(" 🙏Thanks for contact us 🙏");
  }
  // const con =  document.getElementById("btn");
  // con.addEventListener("click", contact());
