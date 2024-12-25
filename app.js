var typed= new Typed(".text",{
    strings:["Frontend Developer","Python Enthusiast"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbwxBi6hCt94yC6W3KV3nOZMMW2gvcXHjfERwSPc9gRzsktDPu1U18mctiXmxxokHxpw5Q/exec'
    const form = document.forms["google-sheet"]
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("form filled successfully!"))
        .catch(error => console.error('Error!', error.message))
    })
const f=()=>
        {
            window.open('https://drive.google.com/file/d/1WYMRvaAWEBypI3NvTilJiGh-R0AgBlap/view?usp=sharing')
        }
const f_1=()=>
            {
                window.open('https://github.com/bilva1/Detailed-Equity-Analysis')
            }
const f0=()=>
            {
                window.open('https://github.com/bilva1/AIML-code-for-emotion-detection')
            }
const f1=()=>
            {
                window.open('https://github.com/bilva1/Library-Login-Page')
            }
const f2=()=>
    {
                    window.open('https://github.com/bilva1/Rock-Paper-Scissors-Game')
                }
const f3=()=>
    {
                        window.open('https://github.com/bilva1/Currency-converter')
                    }
const m1=()=>
                        {
                                            window.open('mailto:vaishnavinamani.9392@gmail.com')
                                        }
const fi1=()=>
{
  window.open("https://drive.google.com/file/d/1U0r3LIDKgGtC8Nk7GOhOfExaV9WoUoyc/view?usp=sharing");
}
const fi2=()=>
{
      window.open("https://drive.google.com/file/d/1U0r3LIDKgGtC8Nk7GOhOfExaV9WoUoyc/view?usp=sharing");
}
let b=document.querySelector(".b1");
b.addEventListener("click",f);
let b_1=document.querySelector('#b2_1');
b_1.addEventListener("click",f_1);
let b0=document.querySelector('#b20');
b0.addEventListener("click",f0);
let b1=document.querySelector('#b21');z
b1.addEventListener("click",f1);
let b2=document.querySelector('#b22');
b2.addEventListener("click",f2);
let b3=document.querySelector('#b23');
b3.addEventListener("click",f3);
let m=document.querySelector('li i')
m.addEventListener("click",m1);
let i1=document.querySelector("#icon11");
i1.addEventListener("click",fi1);
let i2=document.querySelector("#icon22");
i2.addEventListener("click",fi2);

  