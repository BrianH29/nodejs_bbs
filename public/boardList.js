"use strict";

$(function(){
    $(".table tbody tr").click(function(){
        const bno = $(this).children().eq(0).text();
        location.href = `/boardDetail/bno/${bno}`;
    })
})