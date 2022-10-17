let soru=prompt("Lütfen adiniz giriniz :");

let yazdir=document.querySelector("#yazdir");

const vucud=document.querySelector("#vucud");



    if(soru.length>0)
    {
        yazdir.innerHTML= `<em><b> ${soru} </b> </em> Hoşgeldin <br><br>!
        Kodluyoruz Frontend Web Development Patikası'nın <strong>Javascript bölümü</strong> 
        <br> 1. Ödevindesin!`
        yazdir.classList.add('text-orange');
        vucud.classList.add('zeminColor');
    }

    else
    {
        yazdir.innerHTML="<b><em>Ad girilmedi</em></b> :(";
        yazdir.classList.add('text-red');

    }

    function tarih(){
        const date2=new Date().toLocaleString();
        document.querySelector("#date").innerHTML=date2;
    }
    setInterval(tarih,1000);