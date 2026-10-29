'use strict';
var canAnimate=false;
try{if(typeof document.documentElement.animate==='function'){var testAnimation=document.documentElement.animate([],{duration:0});canAnimate=!!testAnimation.finished&&typeof testAnimation.finished.then==='function';testAnimation.cancel();if(canAnimate)testAnimation.finished.catch(function(){})}}catch(e){}
function mini(){return window.xhs&&window.xhs.miniTool}
async function clientVersion(){var x=window.xhs,options=x&&x.launchOptions;var v=options&&options.miniToolEnv&&options.miniToolEnv.buildVersion;if(!v){var api=mini();if(api&&typeof api.getLaunchOptions==='function'){try{options=await api.getLaunchOptions();v=options&&options.miniToolEnv&&options.miniToolEnv.buildVersion}catch(e){}}}return Math.floor((Number(v)||0)/1000)}
function openModal(){document.getElementById('modal').hidden=false;document.getElementById('modalBackdrop').hidden=false;document.body.classList.add('modal-open')}
function closeModal(){document.getElementById('modal').hidden=true;document.getElementById('modalBackdrop').hidden=true;document.body.classList.remove('modal-open');var edit=document.getElementById('edit');if(edit)edit.focus()}
document.getElementById('modalBackdrop').addEventListener('click',closeModal);
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal()});
async function updateWindowInfo(){var api=mini();if(await clientVersion()<9490||!api||typeof api.getWindowInfo!=='function')return;try{var info=await api.getWindowInfo();var top=info.safeArea&&info.safeArea.top||0;var buttons=info.menuButtons||{};Object.keys(buttons).forEach(function(k){if(buttons[k])top=Math.max(top,buttons[k].bottom)});document.documentElement.style.setProperty('--safe-area-inset-top',Math.max(0,top)+'px');if(typeof scheduleFit==='function')scheduleFit()}catch(e){}}
window.addEventListener('resize',updateWindowInfo);
if(window.visualViewport)window.visualViewport.addEventListener('resize',function(){var m=document.getElementById('modal');m.style.maxHeight=Math.floor(window.visualViewport.height*.85)+'px';var a=document.activeElement;if(a&&a.tagName==='TEXTAREA')a.scrollIntoView({block:'nearest'})});
document.addEventListener('visibilitychange',function(){if(document.hidden){var party=document.querySelector('.bonus-party');if(party)party.remove()}});
