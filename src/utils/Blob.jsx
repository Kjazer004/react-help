import React from 'react'
import { useEffect } from 'react';


export const BlobUp = () => {
    useEffect(() =>{
        let circleone = document.querySelectorAll('#up');

        const rand = (multi) =>{
            return parseInt(multi * Math.random(),10);
        }

        let ww = window.innerWidth
        let wh = window.innerHeight
        
        let constraint = Math.min(ww,wh)

        function move(){
            let place = circleone.forEach((div)=>{
                let w = rand(constraint - 50);
                let x = rand(ww - w);
                let y = rand(wh - w);

                let randomwi = Math.floor(Math.random() * 400) + 100;
                let randomhe = Math.floor(Math.random() * 400) + 100;

                div.style.width = randomwi + 'px';
                div.style.height = randomhe + 'px';
                let random1 = Math.floor(Math.random() * 1220);
                let random2 = Math.floor(Math.random() * 1220);
                let random3 = Math.floor(Math.random() * 1220);
                let random4 = Math.floor(Math.random() * 1220);
                let random5 = Math.floor(Math.random() * 1220);
                let random6 = Math.floor(Math.random() * 1220);
                let random7 = Math.floor(Math.random() * 1220);
                let random8 = Math.floor(Math.random() * 1220);

                let val = 'px'
                let con1 =  random1 + val
                let con2 =  random2 + val
                let con3 =  random3 + val
                let con4 =  random4 + val
                let con5 =  random5 + val
                let con6 =  random6 + val
                let con7 =  random7 + val
                let con8 =  random8 + val
            
                div.style.borderRadius =`${con1} ${con2} ${con3} ${con4} / ${con5} ${con6} ${con7} ${con8}`
            
                div.style.transition = (rand(2110) + 2400) + 'ms';
                let randomright = Math.floor(Math.random() * 300 );
                let randomtop = Math.floor(Math.random() * wh );
            
                div.style.background = `rgba(255,255,255,0.2)`;
                div.style.right = randomright + 'px';
                div.style.top= randomtop + 'px';
                div.style.zIndex = "9999"

            })
        }
        window.setInterval(move, 2000);
    })
}


export const BlobDown = () => {
    useEffect(() =>{
        let circletwo = document.querySelectorAll('#down');

        const rand1 = (multi) =>{
            return parseInt(multi * Math.random(),10);
        }

        function move1(){
            let place1 = circletwo.forEach((div1)=>{
                let ww1 = window.innerWidth
                let wh1 = window.innerHeight
                
                let constraint1 = Math.min(ww1,wh1)
                let w1 = rand1(constraint1 - 50);

                let randomwi1 = Math.floor(Math.random() * 300) + 100;
                let randomhe1 = Math.floor(Math.random() * 300) + 100;

                div1.style.width = randomwi1 + 'px';
                div1.style.height = randomhe1 + 'px';
                let random11 = Math.floor(Math.random() * 1220);
                let random12 = Math.floor(Math.random() * 1220);
                let random13 = Math.floor(Math.random() * 1220);
                let random14 = Math.floor(Math.random() * 1220);
                let random15 = Math.floor(Math.random() * 1220);
                let random16 = Math.floor(Math.random() * 1220);
                let random17 = Math.floor(Math.random() * 1220);
                let random18 = Math.floor(Math.random() * 1220);

                let val1 = 'px'
                let con11 =  random11 + val1
                let con12 =  random12 + val1
                let con13 =  random13 + val1
                let con14 =  random14 + val1
                let con15 =  random15 + val1
                let con16 =  random16 + val1
                let con17 =  random17 + val1
                let con18 =  random18 + val1
            
                div1.style.borderRadius =`${con11} ${con12} ${con13} ${con14} / ${con15} ${con16} ${con17} ${con18}`
            
                div1.style.transition = (rand1(2110) + 5400) + 'ms';
                let randomright1 = Math.random() * (ww1 - randomwi1);
                let randomtop1 = Math.random() * (wh1 - randomhe1);
                console.log(randomright1, randomtop1 , "px")
            
                div1.style.background = `rgba(10,50,25,1)`;
                div1.style.right = randomright1 + val1
                div1.style.top= randomtop1 + val1
                div1.style.zIndex = "9999"
            })
        }
        window.setInterval(move1, 1500);
    })
}