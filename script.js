const noBtn=document.getElementById('noBtn'),yesBtn=document.getElementById('yesBtn'),main=document.getElementById('main'),yesScreen=document.getElementById('yesScreen'),music=document.getElementById('bgMusic'),loveLetter=document.getElementById('loveLetter'),quote=document.getElementById('quote');
const qBox=document.getElementById('questionBox'),qText=document.getElementById('qText'),qInput=document.getElementById('qInput'),qNext=document.getElementById('qNext');

document.body.addEventListener('click',()=>{if(music.paused)music.play()},{once:true});

const quotes=["তোমাকে ছাড়া বাঁচবো না 🖤","তুমিই আমার শেষ ঠিকানা","তোমার একটা হাসির জন্য সব দিতে পারি"];
let qIndex=0; setInterval(()=>{quote.innerText=quotes[qIndex]; quote.style.opacity=1; setTimeout(()=>quote.style.opacity=0,6000); qIndex=(qIndex+1)%quotes.length},8000);

let noClick=0;
noBtn.addEventListener('mouseenter',()=>{const btnWidth = noBtn.offsetWidth;const btnHeight = noBtn.offsetHeight;const x = Math.random() * (window.innerWidth - btnWidth - 20);const y = Math.random() * (window.innerHeight - btnHeight - 20);noBtn.style.position = 'fixed';noBtn.style.left = x + 'px';noBtn.style.top = y + 'px';});
noBtn.addEventListener('click',()=>{noClick++; if(noClick==1) noBtn.innerText="পারবা না 😜"; if(noClick==2) noBtn.innerText="ধরা যায় না 🙈"; if(noClick>=3){noBtn.style.display='none'; alert("দেখলা? না বলা যায় না 😏")}});

yesBtn.addEventListener('click',()=>{main.classList.add('hidden');yesScreen.classList.remove('hidden');window.scrollTo({top:0});createConfetti();typeWriter();setTimeout(()=>{qBox.classList.remove('hidden');loadQuestion()},12000)});

const questions=[
  "১ম প্রশ্ন: যদি তোমাকে কেউ জিজ্ঞেস করে আমি তোমার কে তাহলে তুমি কী বলবে..?",
  "২য় প্রশ্ন: আমার সম্পর্কে কোন তিনটা জিনিস জানো যার কারনে আমাকে তুমি ভালোবাসো.?",
  "৩য় প্রশ্ন: আমার কোন ব্যাপারটা দেখে মনে হয় আমি অন্যদের তুলনায় ভিন্ন.?",
  "৪র্থ প্রশ্ন: তুমি আমার কোন ব্যাপারটা অপছন্দ করো.?",
  "৫ম প্রশ্ন: আমার কোন জিনিস তোমার পছন্দ?",
  "৬ষ্ঠ প্রশ্ন: আমার কোন জিনিসটা তোমাকে ইমপ্রেস করে.??",
  "৭ম প্রশ্ন: আমি কোন তিনটি জিনিস বেশি বলি.?",
  "৮ম প্রশ্ন: এমন কোন জিনিস আছে যা তুমি আমার থেকে চাও.?",
  "৯ম প্রশ্ন: এই মূহুর্তে যদি আমরা একসাথে থাকতাম তাইলে তুমি কি চাইতে.?",
  "১০ম প্রশ্ন: আমি আসার আগে তোমার লাইফ কেমন ছিলো? আর এখন কেমন..?",
  "১১তম প্রশ্ন: তুমি আমাকে কতটা বিশ্বাস করতে পারো.?",
  "শেষ প্রশ্ন: ভুল বোঝাবুঝি করে কখনো আমাকে ছেড়ে যাবে না তো.?"
];
let answers = [];
let qNum=0;

function loadQuestion(){
  if(qNum<questions.length){
    qText.innerText=questions[qNum];
    qInput.value=""
  }else{
    sendEmail();
    qBox.innerHTML="<h2>ধন্যবাদ QUEEN 🖤<br>তোমার সব উত্তর পেয়ে গেছি</h2><p>আমি পড়ে নিবো</p>"
  }
}

qNext.addEventListener('click',()=>{if(qInput.value.trim()!==""){answers.push(qInput.value.trim()); qNum++; loadQuestion()}});

function sendEmail(){
  emailjs.init("V5WV29NWK3EYGiKIb");

  let templateParams = {
    q1: answers[0] || "Answer নেই",
    q2: answers[1] || "Answer নেই",
    q3: answers[2] || "Answer নেই",
    q4: answers[3] || "Answer নেই",
    q5: answers[4] || "Answer নেই",
    q6: answers[5] || "Answer নেই",
    q7: answers[6] || "Answer নেই",
    q8: answers[7] || "Answer নেই",
    q9: answers[8] || "Answer নেই",
    q10: answers[9] || "Answer নেই",
    q11: answers[10] || "Answer নেই",
    q12: answers[11] || "Answer নেই",
  };

  emailjs.send("service_wye9661", "template_na4f39y", templateParams)
.then(function(response) {console.log('SUCCESS!', response); alert("উত্তর পাঠানো হয়েছে 🖤")},
        function(error) {console.log('FAILED...', error); alert("Mail পাঠাতে Problem হইছে")});
}

function typeWriter(){
  const text=`প্রিয় স্পন্দিতা,

নিস্তব্ধ রাতের আকাশে যখন একলা চাঁদটা আলো ছড়ায়, আমার এই চাতক মন তখন কেবল তোমারই ভাবনায় ডুবে থাকে।

আজ আর কোনো আড়াল নয়, কোনো লুকোচুরি নয়—আমার হৃদয়ের ক্যানভাসে আঁকা সবটুকু রঙ দিয়ে আজ তোমাকে আমার হৃদ স্পন্দন হিসেবে স্বীকার করতে চাই।

তুমি হয়তো জানো না, তোমার ওই মায়াবী চোখের দিকে তাকালে আমি নিজের অস্তিত্ব হারিয়ে ফেলি। তোমার প্রতিটি কথা যেন কোনো এক চেনা সুরের মতো আমার কানে বাজে, আর তোমার ওই এক চিলতে মিষ্টি হাসি আমার বিষণ্ণ দিনের সব মেঘ এক নিমেষে উড়িয়ে দেয়।

জীবনের এই দীর্ঘ পথচলায় আমি আর একাকী হাঁটতে চাই না। আমি চাই আমার জীবনের প্রতিটি সকাল শুরু হোক তোমার মুখ দেখে, আর প্রতিটি রূপালী রাত কেটে যাক তোমার হাতটি ধরে।

তুমি কেবল আমার বর্তমান নও, আমার আগামীর প্রতিটি স্বপ্নের শেষ সীমানা। তোমার সুখের দিনে আমি হব তোমার ঠোঁটের কোণের হাসি, আর কষ্টের মেঘ জমলে আমি হব সেই ছাতা যা তোমাকে আগলে রাখবে।

আমার জীবনের সবটুকু ভালোবাসা, সবটুকু যত্ন আর অধিকার উজাড় করে আমি তোমাকে আপন করে নিতে চাই। আমাদের এই গল্পে আমি কোনো অপূর্ণতা রাখতে চাই না।

আমার জীবনের শ্রেষ্ঠ উপহার হয়ে তুমি কি আমার হাতটা সারাজীবনের জন্য ধরবে?

কোনো তাড়া নেই, তোমার হৃদয়ের স্পন্দন যা বলে, তা শোনার জন্যই আমি অধীর আগ্রহে অপেক্ষা করছি।

ইতি—
তোমার ভালোবাসায় মগ্ন,
তোমার স্পন্দন`;
  let i=0;loveLetter.innerHTML="";let timer=setInterval(()=>{if(i<text.length){loveLetter.innerHTML+=text.charAt(i)==="\n"?"<br>":text.charAt(i);i++;document.querySelector('.letter-box').scrollTop = document.querySelector('.letter-box').scrollHeight;}else clearInterval(timer)},30)
}

function createConfetti(){const confetti=document.getElementById('confetti');confetti.innerHTML="";for(let i=0;i<100;i++){let piece=document.createElement('div');piece.classList.add('confetti-piece');piece.style.left=Math.random()*100+'vw';piece.style.background=`hsl(${Math.random()*360},100%,60%)`;piece.style.animationDelay=Math.random()*2+'s';confetti.appendChild(piece)}}