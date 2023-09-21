 document.querySelector('.menu').addEventListener('click',()=>{
       document.querySelectorAll('.target').forEach((item) =>
       {
           item.classList.toggle('change')
       }
 )})
 
 
 const icons=document.querySelectorAll('.section-1-icons i')
 let k=1;
 setInterval(()=>{
        k++
        const icon =document.querySelector('.section-1-icons i.change')
         icon.classList.remove('change')
         if(icons.length==k)
         {
                icons[0].classList.add('change')
                k=1
         }
         else
              icon.nextElementSibling.classList.add('change')
       },1000);