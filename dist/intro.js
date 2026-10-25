const welcome=document.getElementById('welcome'),planMain=document.getElementById('planMain'),welcomeStart=document.getElementById('welcomeStart');
let entering=false;
function showWelcome(){welcome.hidden=false;planMain.hidden=true;document.body.classList.add('showing-intro');welcome.classList.remove('leaving');welcomeStart.disabled=false;entering=false;window.scrollTo(0,0)}
async function enterBoard(){if(entering)return;entering=true;welcomeStart.disabled=true;welcome.classList.add('leaving');await new Promise(resolve=>setTimeout(resolve,reduceMotion()?0:650));welcome.hidden=true;planMain.hidden=false;document.body.classList.remove('showing-intro');window.scrollTo(0,0);scheduleFit();await animateEntrance();document.getElementById('edit').focus({preventScroll:true});entering=false}
welcomeStart.addEventListener('click',enterBoard);
if(shared){welcome.hidden=true;planMain.hidden=false;document.body.classList.remove('showing-intro');animateEntrance()}

var fitFrame=0;
function scheduleFit(){if(fitFrame)cancelAnimationFrame(fitFrame);fitFrame=requestAnimationFrame(fitMobileBoard)}
function fitMobileBoard(){fitFrame=0;var viewport=window.visualViewport?window.visualViewport.height:window.innerHeight;document.documentElement.style.setProperty('--app-height',Math.floor(viewport)+'px');var main=document.getElementById('planMain'),grid=document.getElementById('grid');if(!main||!grid||main.hidden)return;if(window.innerWidth>700){grid.style.maxWidth='';return}grid.style.maxWidth='';var tail=0;['.plan-buttons','#completeHint','#playActions','.scrapbook-note'].forEach(function(selector){var el=document.querySelector(selector);if(!el||!el.getClientRects().length)return;var style=getComputedStyle(el);tail+=el.getBoundingClientRect().height+(parseFloat(style.marginTop)||0)+(parseFloat(style.marginBottom)||0)});var bottom=parseFloat(getComputedStyle(main).paddingBottom)||14;var top=grid.getBoundingClientRect().top+window.scrollY;var room=Math.max(180,viewport-top-tail-bottom-3);grid.style.maxWidth=Math.floor(room)+'px'}
window.addEventListener('resize',scheduleFit);if(window.visualViewport)window.visualViewport.addEventListener('resize',scheduleFit);
var fitObserver=new MutationObserver(scheduleFit);fitObserver.observe(document.getElementById('grid'),{childList:true,subtree:true});fitObserver.observe(document.getElementById('planMain'),{attributes:true,attributeFilter:['hidden']});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(scheduleFit);scheduleFit();
