import{R as a}from"./main-CY-O8gQX.js";import"./three.module-BbtDlLjC.js";import"./GLTFLoader-CtSHG5QV.js";const x=(()=>{try{return"0.9.3 · 2026-07-14 08:20 · 065efbe"}catch{return"unknown"}})(),c=e=>{try{return localStorage.getItem(e)}catch{return null}},p=e=>parseInt(c(e)||"0",10)||0,l=(e,t=6,r=4)=>e?String(e).length<=t+r+1?String(e):`${String(e).slice(0,t)}…${String(e).slice(-r)}`:"—";function b(){let e={};try{e=JSON.parse(c("vr_inventory")||"{}")||{}}catch{}return{coins:p("vr_coins"),stardust:p("vr_stardust"),keys:p("vr_keys"),reconciled:c("vr_reconcile_done_v1")==="1",migrated:c("vr_cloud_migrated")==="1",powerups:e}}async function $(){try{if(!a||!a._ready)return{error:"cloud not ready (offline / init not finished)"};const e=a._ids(),t=await a._post("players-upsert",e);if(!t)return{error:"empty response"};const r={};for(const n of t.inventory||[])(n.item_type==="boost"||n.item_type==="consumable")&&(r[n.item_id]=(r[n.item_id]||0)+(n.count??1));return{coins:t.currencies?t.currencies.coins|0:null,stardust:t.currencies?t.currencies.stardust|0:null,keys:parseInt(t.player&&t.player.state&&t.player.state.vr_keys||"0",10)||0,wallet:t.player&&t.player.wallet||null,device:t.player&&t.player.device_id||null,powerups:r}}catch(e){return{error:e&&e.message||String(e)}}}function u(e,t,r){const n=typeof r=="number",i=n&&t===r,s=n?i?"#7ed26b":"#ff6b6b":"#c9a24a",h=n?i?"=":"≠":"?";let f="";if(n&&!i){const d=t-r;f=d>0?`local HIGH +${d}`:`local LOW ${d}`}return`<tr style="color:${s}">
        <td style="padding:2px 10px 2px 0;color:#c29e50">${e}</td>
        <td style="padding:2px 8px;text-align:right;font-variant-numeric:tabular-nums">${t.toLocaleString()}</td>
        <td style="padding:2px 6px;text-align:center;opacity:.7">${h}</td>
        <td style="padding:2px 8px;text-align:right;font-variant-numeric:tabular-nums">${n?r.toLocaleString():"—"}</td>
        <td style="padding:2px 0 2px 10px;font-size:10px;opacity:.85">${f}</td>
    </tr>`}function _(e,t){const r=n=>Object.keys(n||{}).length?Object.entries(n).map(([i,s])=>`${i}:${s}`).join("  "):"—";return`local ${r(e)}<br>cloud ${r(t&&t.powerups)}`}let o=null,y=!1;async function g(){if(!o)return;const e=b();o.querySelector("[data-cloud]").textContent="reading cloud…";const t=await $();if(!o)return;const r=t.error?"—":t.wallet?`${l(t.wallet)} ✓`:"guest ✗",n=t.error?l(a.deviceId):l(t.device),i=e.reconciled?'<span style="color:#7ed26b">✓ cloud-authoritative</span>':'<span style="color:#ff6b6b">✗ NOT reconciled (stuck on MAX-local)</span>',s=t.error?`<div style="color:#ff6b6b;padding:6px 0">cloud read failed: ${t.error}</div>`:`<table style="border-collapse:collapse;margin:4px 0 2px;font-size:12px;width:100%">
             <tr style="color:#8a7a55;font-size:10px;letter-spacing:1px">
               <td></td><td style="text-align:right">LOCAL</td><td></td><td style="text-align:right">CLOUD</td><td></td></tr>
             ${u("coins",e.coins,t.coins)}
             ${u("stardust",e.stardust,t.stardust)}
             ${u("keys",e.keys,t.keys)}
           </table>
           <div style="font-size:11px;color:#c9bfa6;margin-top:4px;line-height:1.5">
             <span style="color:#c29e50">power-ups</span><br>${_(e.powerups,t)}</div>`;o.querySelector("[data-cloud]").innerHTML=`
        <div style="display:flex;justify-content:space-between;gap:8px;font-size:11px;color:#c9bfa6;line-height:1.6">
          <span>device <b style="color:#e8dcc8">${n}</b></span>
          <span>wallet <b style="color:#e8dcc8">${r}</b></span>
        </div>
        <div style="font-size:11px;margin:2px 0 2px">reconciled ${i}${e.migrated?"":' · <span style="color:#c9a24a">not migrated</span>'}</div>
        ${s}`}function w(){b();const e=o?o.querySelector("[data-cloud]").innerText:"";return`VULCAN RUNNER SYNC DEBUG
build ${x}
${e}`.replace(/\n{2,}/g,`
`)}function m(){if(o)return o;const e=document.createElement("div");return e.id="vr-sync-debug",e.style.cssText=["position:fixed","z-index:99999","top:max(env(safe-area-inset-top,8px),12px)","left:50%","transform:translateX(-50%)","width:min(360px,92vw)","padding:12px 14px","border-radius:14px","background:rgba(10,16,34,0.96)","border:1px solid rgba(194,158,80,0.45)","box-shadow:0 8px 40px rgba(0,0,0,0.6)","font-family:-apple-system,BlinkMacSystemFont,'Philosopher',sans-serif","color:#e8dcc8","user-select:text","-webkit-user-select:text"].join(";"),e.innerHTML=`
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(194,158,80,0.25);padding-bottom:6px;margin-bottom:4px">
          <span style="font-size:12px;letter-spacing:2px;color:#f0c860;font-weight:700">SYNC DEBUG</span>
          <span style="font-size:10px;color:#8a7a55">build ${l(x,0,7)}</span>
          <span data-close style="cursor:pointer;color:#c9a24a;font-size:16px;padding:0 4px">✕</span>
        </div>
        <div data-cloud style="min-height:40px">reading…</div>
        <div style="display:flex;gap:8px;margin-top:8px">
          <button data-refresh style="flex:1;padding:6px;border-radius:8px;border:1px solid rgba(194,158,80,0.4);background:rgba(194,158,80,0.12);color:#f0c860;font-size:12px;cursor:pointer">↻ Refresh</button>
          <button data-copy style="flex:1;padding:6px;border-radius:8px;border:1px solid rgba(194,158,80,0.4);background:rgba(194,158,80,0.12);color:#f0c860;font-size:12px;cursor:pointer">⧉ Copy</button>
        </div>
        <div style="font-size:9px;color:#6a5e44;margin-top:6px;text-align:center">5 taps on the version chip toggles this · ?sync=0 to disable</div>`,e.querySelector("[data-close]").onclick=v,e.querySelector("[data-refresh]").onclick=()=>g(),e.querySelector("[data-copy]").onclick=t=>{var r,n;try{(n=(r=navigator.clipboard)==null?void 0:r.writeText)==null||n.call(r,w()),t.target.textContent="✓ Copied",setTimeout(()=>{t.target.textContent="⧉ Copy"},1200)}catch{}},document.body.appendChild(e),o=e,g(),e}function v(){o&&(o.remove(),o=null)}function S(){if(o)v();else if(!y){y=!0;try{m()}finally{y=!1}}}function k(){let e=0,t=0;const r=()=>{const i=typeof performance<"u"?performance.now():0;i-t>2500&&(e=0),t=i,e+=1,e>=5&&(e=0,S())},n=new WeakSet;setInterval(()=>{for(const i of["menu-version-badge","vr-version-badge"]){const s=document.getElementById(i);s&&!n.has(s)&&(n.add(s),s.addEventListener("click",r))}},1500)}function z(){try{const e=new URLSearchParams(location.search).get("sync");e==="1"&&localStorage.setItem("vr_sync_debug","1"),e==="0"&&localStorage.removeItem("vr_sync_debug"),k(),c("vr_sync_debug")==="1"&&setTimeout(()=>{o||m()},2500)}catch{}}export{z as initSyncDebug};
