(function(g){
function trial(r=Math.random){const ratio=[.63,.75,.88][Math.floor(r()*3)],base=10+Math.floor(r()*7),compare=Math.floor(base/ratio),leftBase=r()<.5;return {ratio,left_number:leftBase?base:compare,right_number:leftBase?compare:base};}
function score(rows){const answered=rows.filter(x=>x.response);return answered.length?100*answered.filter(x=>Math.abs(Math.min(x.left_number,x.right_number)/Math.max(x.left_number,x.right_number)-1)<=.10||x.is_correct===1).length/answered.length:0;}
function csv(rows){const fields=Object.keys(rows[0]||{participant_id:0,phase:0});const quote=x=>'"'+String(x??'').replaceAll('"','""')+'"';return '\ufeff'+[fields,...rows.map(x=>fields.map(k=>x[k]))].map(r=>r.map(quote).join(',')).join('\r\n');}
const api={trial,score,csv};if(typeof module!=='undefined')module.exports=api;else g.DotLogic=api;
})(globalThis);