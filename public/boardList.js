"use strict";

// $(function(){
//     $(".table tbody tr").click(function(){
//         const bno = $(this).children().eq(0).text();
//         location.href = `/boardDetail/bno/${bno}`;
//     })
// })

const td = document.querySelector('tbody tr'); 
const bno = td.firstElementChild.innerHTML;  

td.addEventListener("click", function () {
    location.href = `/boardDetail/bno/${bno}` 
});

