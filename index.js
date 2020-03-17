'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    const calcolatorData = document.querySelector('.dataForm');

    calcolatorData.addEventListener('submit', (e)=>{
        e.preventDefault();

        const ww = parseInt(document.querySelector('#ww').value);//ww = wymiennik węglowodanowy
        const carbohydrates = parseInt(document.querySelector('#carbohydrates').value);
        const roughage = parseInt(document.querySelector('#roughage').value);
    });


    function countWW(ww, carbohydrates, roughage){
        return (100*(ww*10))/(carbohydrates-roughage);
    }
});