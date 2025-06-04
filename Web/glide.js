const glide = new Glide('.glide', {
  type: 'carousel',       
  perView: 3,            
  gap: 20,                
  breakpoints: {
    900: {
      perView: 2          
    },
    600: {
      perView: 1          
    }
  }
});

glide.mount();   




