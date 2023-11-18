import{a as l,i as d}from"./assets/vendor-2dcf4ad5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="live_zCoIfZgI2pTuINdDO1yjDpbgcwKA9fmB1Fcl70UrefaGBjTUS9X0S4AtHVTqNUNC";l.defaults.baseURL="https://api.thecatapi.com/v1";l.defaults.headers.common["x-api-key"]=f;const u=()=>l.get("/breeds"),p=t=>{const r=new URLSearchParams({breed_ids:t});return l.get(`/images/search?${r}`)};function m(t){return t.map(({name:r,id:n})=>`<option value="${n}" id="${n}">${r}</option>`).join("")}function h(t){return t.breeds.map(({name:r,description:n,temperament:i})=>`
    <h2>${r}</h2>
    <img src="${t.url}" width="300" alt="${r}" />
    <p>${n}</p>
    <p><b>Temperament: </b>${i}</p>
  `).join("")}const s={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),catInfo:document.querySelector(".cat-info")};s.select.style.display="none";s.select.addEventListener("change",({target:{value:t}})=>{s.catInfo.innerHTML="",c(!0),p(t).then(({data:r})=>{const[n]=r;if(!n)throw new Error;s.catInfo.innerHTML=h(n)}).catch(()=>{d.show({title:"Oops!",message:"Something went wrong! Try reloading the page!",color:"red",position:"topRight"})}).finally(()=>c(!1))});c(!0);u().then(({data:t})=>{s.select.innerHTML=m(t),s.select.style.display="block"}).finally(()=>c(!1));function c(t){t?s.loader.style.display="block":s.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
