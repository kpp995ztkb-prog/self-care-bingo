const welcome=document.getElementById('welcome'),planMain=document.getElementById('planMain'),welcomeStart=document.getElementById('welcomeStart');
let entering=false;
function showWelcome(){welcome.hidden=false;planMain.hidden=true;document.body.classList.add('showing-intro');welcome.classList.remove('leaving');welcomeStart.disabled=false;entering=false;window.scrollTo(0,0)}
async function enterBoard(){if(entering)return;entering=true;welcomeStart.disabled=true;welcome.classList.add('leaving');await new Promise(resolve=>setTimeout(resolve,reduceMotion()?0:650));welcome.hidden=true;planMain.hidden=false;document.body.classList.remove('showing-intro');window.scrollTo(0,0);await animateEntrance();document.getElementById('edit').focus({preventScroll:true});entering=false}
welcomeStart.addEventListener('click',enterBoard);
document.getElementById('welcomeBack').addEventListener('click',()=>{showWelcome();welcomeStart.focus({preventScroll:true})});
if(shared){welcome.hidden=true;planMain.hidden=false;document.body.classList.remove('showing-intro');animateEntrance()}
