// document.addEventListener("DOMContentLoaded", function() {

//     let  str = 'abcde';
//     alert(str[0]); 
//     alert(str[1]); 
//     alert(str[4]);


//     let a = parseInt(prompt("Введите число:"))
//     let b = parseInt(prompt("Введите другое число:"))
//     console.log(a > 0 || b > 0)
// // или
//     // let a = parseInt(prompt("Введите число:"))
//     // let b = parseInt(prompt("Введите другое число:"))
//     // let c = a > 0 || b > 0
//     // console.log(c)


//     let age = parseInt(prompt("Введите cвой возраст:"))
//     if (age >= 18) {
//         alert("Совершеннолетний")
//     }
//     else {
//         alert("Несовершеннолетний")
//     }
// })

// document.addEventListener("DOMContentLoaded", function(){
//     let mi = document.querySelectorAll(".mouse, .comp, .direct, .msi, .divok");
//     mi.forEach(function(eimg){
//         let noDragg = false
//         let offsetX;
//         let offsetY;

//         eimg.addEventListener("mousedown", function(event){
//             noDragg = true;

//             offsetX = event.clientX - eimg.getBoundingClientRect().left;
//             offsetY = event.clientY - eimg.getBoundingClientRect().top;

//             function onMouseMove(event){
//                 if(noDragg){
//                     let x = event.clientX - offsetX;
//                     let y = event.clientY - offsetY;

//                     eimg.style.left = x + "px";
//                     eimg.style.top = y + "px";

//                     console.log("Cursor's coordinates: ", event.clientX, event.clientY);
//                     console.log("Element's coordinates: ", x, y)
//                 }
//             }

//             function onMouseUp(){
//                 noDragg = false;
//                 document.removeEventListener("mousemove", onMouseMove);
//                 document.removeEventListener("mouseup", onMouseUp);
//             }

//             document.addEventListener("mousemove", onMouseMove);
//             document.addEventListener("mouseup", onMouseUp)
//         })
//     })
// })
document.addEventListener("DOMContentLoaded", function(){
    let count = 0;

    const but = document.getElementById("but");
    const dis = document.getElementById("countic");

    but.addEventListener("click", function(){
        count += 1;
        dis.textContent = count;
        if(count >= 15){
            but.disabled = true;
        }
    });

    let co = 10;
    let tim = document.getElementById("timer");

    const interval = setInterval(function(){
        co -= 1;
        tim.textContent = co;

        if(co <= 0){
            clearInterval(interval);
        }
    }, 1000);

    let ct = 0;
    let intervalic;

    const ourtext = document.getElementById("tm");
    const Sb = document.getElementById("Sb");
    const St = document.getElementById("Stop");
    const Res = document.getElementById("Reset");

    Sb.addEventListener("click", function(){
        if(!intervalic){
            intervalic = setInterval(function(){
                ct++
                ourtext.textContent = ct;
            }, 1000);
        }
    })

    St.addEventListener("click", function(){
        clearInterval(intervalic);
        intervalic = null;
    });

    Res.addEventListener("click", function(){
        clearInterval(intervalic);
        intervalic = null;
        ct = 0;
        ourtext.textContent = ct;
    });
})