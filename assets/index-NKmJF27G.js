(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="170",Jd=0,Ll=1,Zd=2,Ph=1,Lh=2,Ui=3,Wi=0,zt=1,jt=2,Hi=0,rs=1,$s=2,Ul=3,Nl=4,Qd=5,Sn=100,eu=101,tu=102,iu=103,nu=104,su=200,ru=201,au=202,ou=203,oo=204,lo=205,lu=206,cu=207,hu=208,du=209,uu=210,pu=211,fu=212,mu=213,gu=214,co=0,ho=1,uo=2,cs=3,po=4,fo=5,mo=6,go=7,Uh=0,_u=1,vu=2,ln=0,yu=1,xu=2,bu=3,Nh=4,Su=5,Mu=6,wu=7,kl="attached",Tu="detached",kh=300,hs=301,ds=302,_o=303,vo=304,aa=306,Vt=1e3,an=1001,Zr=1002,Ht=1003,Oh=1004,Fs=1005,Yt=1006,Vr=1007,Bi=1008,qi=1009,Bh=1010,Fh=1011,js=1012,sl=1013,En=1014,fi=1015,Gi=1016,rl=1017,al=1018,us=1020,zh=35902,Hh=1021,Gh=1022,ii=1023,Vh=1024,Wh=1025,as=1026,ps=1027,ol=1028,ll=1029,qh=1030,cl=1031,hl=1033,Wr=33776,qr=33777,Xr=33778,$r=33779,yo=35840,xo=35841,bo=35842,So=35843,Mo=36196,wo=37492,To=37496,Eo=37808,Ao=37809,Co=37810,Ro=37811,Io=37812,Do=37813,Po=37814,Lo=37815,Uo=37816,No=37817,ko=37818,Oo=37819,Bo=37820,Fo=37821,jr=36492,zo=36494,Ho=36495,Xh=36283,Go=36284,Vo=36285,Wo=36286,$h=2200,jh=2201,Eu=2202,Ys=2300,Ks=2301,ma=2302,Zn=2400,Qn=2401,Qr=2402,dl=2500,Au=2501,Cu=0,Yh=1,qo=2,Ru=3200,Iu=3201,Kh=0,Du=1,rn="",gt="srgb",Nt="srgb-linear",oa="linear",tt="srgb",Dn=7680,Ol=519,Pu=512,Lu=513,Uu=514,Jh=515,Nu=516,ku=517,Ou=518,Bu=519,Xo=35044,Bl="300 es",Fi=2e3,ea=2001;class Cn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const Vs=Math.PI/180,fs=180/Math.PI;function mi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Ut(r,e,t){return Math.max(e,Math.min(t,r))}function ul(r,e){return(r%e+e)%e}function Fu(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function zu(r,e,t){return r!==e?(t-r)/(e-r):0}function Ws(r,e,t){return(1-t)*r+t*e}function Hu(r,e,t,i){return Ws(r,e,1-Math.exp(-t*i))}function Gu(r,e=1){return e-Math.abs(ul(r,e*2)-e)}function Vu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Wu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function qu(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Xu(r,e){return r+Math.random()*(e-r)}function $u(r){return r*(.5-Math.random())}function ju(r){r!==void 0&&(Fl=r);let e=Fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yu(r){return r*Vs}function Ku(r){return r*fs}function Ju(r){return(r&r-1)===0&&r!==0}function Zu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ep(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ui(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const tp={DEG2RAD:Vs,RAD2DEG:fs,generateUUID:mi,clamp:Ut,euclideanModulo:ul,mapLinear:Fu,inverseLerp:zu,lerp:Ws,damp:Hu,pingpong:Gu,smoothstep:Vu,smootherstep:Wu,randInt:qu,randFloat:Xu,randFloatSpread:$u,seededRandom:ju,degToRad:Yu,radToDeg:Ku,isPowerOfTwo:Ju,ceilPowerOfTwo:Zu,floorPowerOfTwo:Qu,setQuaternionFromProperEuler:ep,normalize:et,denormalize:ui};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,i,n,s,a,o,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],x=n[1],S=n[4],v=n[7],R=n[2],A=n[5],E=n[8];return s[0]=a*_+o*x+l*R,s[3]=a*m+o*S+l*A,s[6]=a*f+o*v+l*E,s[1]=c*_+h*x+d*R,s[4]=c*m+h*S+d*A,s[7]=c*f+h*v+d*E,s[2]=u*_+p*x+g*R,s[5]=u*m+p*S+g*A,s[8]=u*f+p*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=t*d+i*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*a)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Le;function Zh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Js(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ip(){const r=Js("canvas");return r.style.display="block",r}const zl={};function zs(r){r in zl||(zl[r]=!0,console.warn(r))}function np(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function sp(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rp(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ge={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rn?oa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function os(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Hl=[.64,.33,.3,.6,.15,.06],Gl=[.2126,.7152,.0722],Vl=[.3127,.329],Wl=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ge.define({[Nt]:{primaries:Hl,whitePoint:Vl,transfer:oa,toXYZ:Wl,fromXYZ:ql,luminanceCoefficients:Gl,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:Hl,whitePoint:Vl,transfer:tt,toXYZ:Wl,fromXYZ:ql,luminanceCoefficients:Gl,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}});let Pn;class ap{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pn===void 0&&(Pn=Js("canvas")),Pn.width=e.width,Pn.height=e.height;const i=Pn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Vi(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let op=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(_a(n[a].image)):s.push(_a(n[a]))}else s=_a(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function _a(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ap.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;class bt extends Cn{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=an,n=an,s=Yt,a=Bi,o=ii,l=qi,c=bt.DEFAULT_ANISOTROPY,h=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=mi(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vt:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vt:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=kh;bt.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,i=0,n=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(p+1)/2,R=(f+1)/2,A=(h+u)/4,E=(d+_)/4,D=(g+m)/4;return S>v&&S>R?S<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(S),n=A/i,s=E/i):v>R?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=A/n,s=D/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=E/s,n=D/s),this.set(i,n,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cp extends Cn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new bt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends cp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ed extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hp extends bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*_,x=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const R=Math.sqrt(S),A=Math.atan2(R,f*x);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const v=o*x;if(l=l*m+u*v,c=c*m+p*v,h=h*m+g*v,d=d*m+_*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),p=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new C,Xl=new Ft;class _i{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(s,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lr.copy(i.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),cr.subVectors(this.max,Cs),Ln.subVectors(e.a,Cs),Un.subVectors(e.b,Cs),Nn.subVectors(e.c,Cs),Ki.subVectors(Un,Ln),Ji.subVectors(Nn,Un),un.subVectors(Ln,Nn);let t=[0,-Ki.z,Ki.y,0,-Ji.z,Ji.y,0,-un.z,un.y,Ki.z,0,-Ki.x,Ji.z,0,-Ji.x,un.z,0,-un.x,-Ki.y,Ki.x,0,-Ji.y,Ji.x,0,-un.y,un.x,0];return!ya(t,Ln,Un,Nn,cr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,Ln,Un,Nn,cr))?!1:(hr.crossVectors(Ki,Ji),t=[hr.x,hr.y,hr.z],ya(t,Ln,Un,Nn,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new C,new C,new C,new C,new C,new C,new C,new C],ai=new C,lr=new _i,Ln=new C,Un=new C,Nn=new C,Ki=new C,Ji=new C,un=new C,Cs=new C,cr=new C,hr=new C,pn=new C;function ya(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){pn.fromArray(r,s);const o=n.x*Math.abs(pn.x)+n.y*Math.abs(pn.y)+n.z*Math.abs(pn.z),l=e.dot(pn),c=t.dot(pn),h=i.dot(pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const dp=new _i,Rs=new C,xa=new C;class Mi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dp.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Rs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(xa)),this.expandByPoint(Rs.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new C,ba=new C,dr=new C,Zi=new C,Sa=new C,ur=new C,Ma=new C;class la{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ba.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(ba);const s=e.distanceTo(t)*.5,a=-this.direction.dot(dr),o=Zi.dot(this.direction),l=-Zi.dot(dr),c=Zi.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(ba).addScaledVector(dr,u),p}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),n=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,n,s){Sa.subVectors(t,e),ur.subVectors(i,e),Ma.crossVectors(Sa,ur);let a=this.direction.dot(Ma),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,e);const l=o*this.direction.dot(ur.crossVectors(Zi,ur));if(l<0)return null;const c=o*this.direction.dot(Sa.cross(Zi));if(c<0||l+c>a)return null;const h=-o*Zi.dot(Ma);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,i,n,s,a,o,l,c,h,d,u,p,g,_,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,d,u,p,g,_,m)}set(e,t,i,n,s,a,o,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/kn.setFromMatrixColumn(e,0).length(),s=1/kn.setFromMatrixColumn(e,1).length(),a=1/kn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,pp)}lookAt(e,t,i){const n=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Qi.crossVectors(i,qt),Qi.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Qi.crossVectors(i,qt)),Qi.normalize(),pr.crossVectors(qt,Qi),n[0]=Qi.x,n[4]=pr.x,n[8]=qt.x,n[1]=Qi.y,n[5]=pr.y,n[9]=qt.y,n[2]=Qi.z,n[6]=pr.z,n[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],x=i[3],S=i[7],v=i[11],R=i[15],A=n[0],E=n[4],D=n[8],w=n[12],b=n[1],I=n[5],z=n[9],F=n[13],W=n[2],Y=n[6],V=n[10],J=n[14],G=n[3],ne=n[7],ce=n[11],xe=n[15];return s[0]=a*A+o*b+l*W+c*G,s[4]=a*E+o*I+l*Y+c*ne,s[8]=a*D+o*z+l*V+c*ce,s[12]=a*w+o*F+l*J+c*xe,s[1]=h*A+d*b+u*W+p*G,s[5]=h*E+d*I+u*Y+p*ne,s[9]=h*D+d*z+u*V+p*ce,s[13]=h*w+d*F+u*J+p*xe,s[2]=g*A+_*b+m*W+f*G,s[6]=g*E+_*I+m*Y+f*ne,s[10]=g*D+_*z+m*V+f*ce,s[14]=g*w+_*F+m*J+f*xe,s[3]=x*A+S*b+v*W+R*G,s[7]=x*E+S*I+v*Y+R*ne,s[11]=x*D+S*z+v*V+R*ce,s[15]=x*w+S*F+v*J+R*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*d-n*c*d-s*o*u+i*c*u+n*o*p-i*l*p)+_*(+t*l*p-t*c*u+s*a*u-n*a*p+n*c*h-s*l*h)+m*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*h-i*c*h)+f*(-n*o*h-t*l*d+t*o*u+n*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=d*m*c-_*u*c+_*l*p-o*m*p-d*l*f+o*u*f,S=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,v=h*_*c-g*d*c+g*o*p-a*_*p-h*o*f+a*d*f,R=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,A=t*x+i*S+n*v+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=x*E,e[1]=(_*u*s-d*m*s-_*n*p+i*m*p+d*n*f-i*u*f)*E,e[2]=(o*m*s-_*l*s+_*n*c-i*m*c-o*n*f+i*l*f)*E,e[3]=(d*l*s-o*u*s-d*n*c+i*u*c+o*n*p-i*l*p)*E,e[4]=S*E,e[5]=(h*m*s-g*u*s+g*n*p-t*m*p-h*n*f+t*u*f)*E,e[6]=(g*l*s-a*m*s-g*n*c+t*m*c+a*n*f-t*l*f)*E,e[7]=(a*u*s-h*l*s+h*n*c-t*u*c-a*n*p+t*l*p)*E,e[8]=v*E,e[9]=(g*d*s-h*_*s-g*i*p+t*_*p+h*i*f-t*d*f)*E,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*f+t*o*f)*E,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*p-t*o*p)*E,e[12]=R*E,e[13]=(h*_*n-g*d*n+g*i*u-t*_*u-h*i*m+t*d*m)*E,e[14]=(g*o*n-a*_*n-g*i*l+t*_*l+a*i*m-t*o*m)*E,e[15]=(a*d*n-h*o*n+h*i*l-t*d*l-a*i*u+t*o*u)*E,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,g=s*d,_=a*h,m=a*d,f=o*d,x=l*c,S=l*h,v=l*d,R=i.x,A=i.y,E=i.z;return n[0]=(1-(_+f))*R,n[1]=(p+v)*R,n[2]=(g-S)*R,n[3]=0,n[4]=(p-v)*A,n[5]=(1-(u+f))*A,n[6]=(m+x)*A,n[7]=0,n[8]=(g+S)*E,n[9]=(m-x)*E,n[10]=(1-(u+_))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=kn.set(n[0],n[1],n[2]).length();const a=kn.set(n[4],n[5],n[6]).length(),o=kn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],oi.copy(this);const c=1/s,h=1/a,d=1/o;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,t.setFromRotationMatrix(oi),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=Fi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n);let p,g;if(o===Fi)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ea)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=Fi){const l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(a-s),u=(t+e)*c,p=(i+n)*h;let g,_;if(o===Fi)g=(a+s)*d,_=-2*d;else if(o===ea)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const kn=new C,oi=new Ue,up=new C(0,0,0),pp=new C(1,1,1),Qi=new C,pr=new C,qt=new C,$l=new Ue,jl=new Ft;class Si{constructor(e=0,t=0,i=0,n=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class td{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fp=0;const Yl=new C,On=new Ft,Ii=new Ue,fr=new C,Is=new C,mp=new C,gp=new Ft,Kl=new C(1,0,0),Jl=new C(0,1,0),Zl=new C(0,0,1),Ql={type:"added"},_p={type:"removed"},Bn={type:"childadded",child:null},wa={type:"childremoved",child:null};class dt extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new C,t=new Si,i=new Ft,n=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Le}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.multiply(On),this}rotateOnWorldAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.premultiply(On),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return Yl.copy(e).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fr.copy(e):fr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Is,fr,this.up):Ii.lookAt(fr,Is,this.up),this.quaternion.setFromRotationMatrix(Ii),n&&(Ii.extractRotation(n.matrixWorld),On.setFromRotationMatrix(Ii),this.quaternion.premultiply(On.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ql),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ql),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}dt.DEFAULT_UP=new C(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new C,Di=new C,Ta=new C,Pi=new C,Fn=new C,zn=new C,ec=new C,Ea=new C,Aa=new C,Ca=new C,Ra=new Ye,Ia=new Ye,Da=new Ye;class pi{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),li.subVectors(e,t),n.cross(li);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){li.subVectors(n,t),Di.subVectors(i,t),Ta.subVectors(e,t);const a=li.dot(li),o=li.dot(Di),l=li.dot(Ta),c=Di.dot(Di),h=Di.dot(Ta),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return Ra.setScalar(0),Ia.setScalar(0),Da.setScalar(0),Ra.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,i),Da.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Ra,s.x),a.addScaledVector(Ia,s.y),a.addScaledVector(Da,s.z),a}static isFrontFacing(e,t,i,n){return li.subVectors(i,t),Di.subVectors(e,t),li.cross(Di).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),li.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;Fn.subVectors(n,i),zn.subVectors(s,i),Ea.subVectors(e,i);const l=Fn.dot(Ea),c=zn.dot(Ea);if(l<=0&&c<=0)return t.copy(i);Aa.subVectors(e,n);const h=Fn.dot(Aa),d=zn.dot(Aa);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Fn,a);Ca.subVectors(e,s);const p=Fn.dot(Ca),g=zn.dot(Ca);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(zn,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return ec.subVectors(s,n),o=(d-h)/(d-h+(p-g)),t.copy(n).addScaledVector(ec,o);const f=1/(m+_+u);return a=_*f,o=u*f,t.copy(i).addScaledVector(Fn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Pa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ge.workingColorSpace){if(e=ul(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Pa(a,s,e+1/3),this.g=Pa(a,s,e),this.b=Pa(a,s,e-1/3)}return Ge.toWorkingColorSpace(this,n),this}setStyle(e,t=gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const i=id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ge.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Ut(Pt.r*255,0,255))*65536+Math.round(Ut(Pt.g*255,0,255))*256+Math.round(Ut(Pt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,n=Pt.g,s=Pt.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=gt){Ge.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,n=Pt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(en),this.setHSL(en.h+e,en.s+t,en.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(en),e.getHSL(mr);const i=Ws(en.h,mr.h,t),n=Ws(en.s,mr.s,t),s=Ws(en.l,mr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new pe;pe.NAMES=id;let vp=0;class bi extends Cn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=mi(),this.name="",this.blending=rs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=lo,this.blendEquation=Sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oo&&(i.blendSrc=this.blendSrc),this.blendDst!==lo&&(i.blendDst=this.blendDst),this.blendEquation!==Sn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ol&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ni extends bi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new C,gr=new Se;class Be{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xo,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xo&&(e.usage=this.usage),e}}class nd extends Be{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sd extends Be{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rt extends Be{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yp=0;const Zt=new Ue,La=new dt,Hn=new C,Xt=new _i,Ds=new _i,wt=new C;class pt extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?sd:nd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(i,3))}else{for(let i=0,n=t.count;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Xt.min,Ds.min),Xt.expandByPoint(wt),wt.addVectors(Xt.max,Ds.max),Xt.expandByPoint(wt)):(Xt.expandByPoint(Ds.min),Xt.expandByPoint(Ds.max))}Xt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Hn.fromBufferAttribute(e,c),wt.add(Hn)),n=Math.max(n,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new C,l[D]=new C;const c=new C,h=new C,d=new C,u=new Se,p=new Se,g=new Se,_=new C,m=new C;function f(D,w,b){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),u.fromBufferAttribute(s,D),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,b),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[D].add(_),o[w].add(_),o[b].add(_),l[D].add(m),l[w].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,w=x.length;D<w;++D){const b=x[D],I=b.start,z=b.count;for(let F=I,W=I+z;F<W;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new C,v=new C,R=new C,A=new C;function E(D){R.fromBufferAttribute(n,D),A.copy(R);const w=o[D];S.copy(w),S.sub(R.multiplyScalar(R.dot(w))).normalize(),v.crossVectors(A,w);const I=v.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,I)}for(let D=0,w=x.length;D<w;++D){const b=x[D],I=b.start,z=b.count;for(let F=I,W=I+z;F<W;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Be(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Be(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new Ue,fn=new la,_r=new Mi,ic=new C,vr=new C,yr=new C,xr=new C,Ua=new C,br=new C,nc=new C,Sr=new C;class be extends dt{constructor(e=new pt,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){br.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Ua.fromBufferAttribute(d,e),a?br.addScaledVector(Ua,h):br.addScaledVector(Ua.sub(t),h))}t.add(br)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(s),fn.copy(e.ray).recast(e.near),!(_r.containsPoint(fn.origin)===!1&&(fn.intersectSphere(_r,ic)===null||fn.origin.distanceToSquared(ic)>(e.far-e.near)**2))&&(tc.copy(s).invert(),fn.copy(e.ray).applyMatrix4(tc),!(i.boundingBox!==null&&fn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,R=S;v<R;v+=3){const A=o.getX(v),E=o.getX(v+1),D=o.getX(v+2);n=Mr(this,f,e,i,c,h,d,A,E,D),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);n=Mr(this,a,e,i,c,h,d,x,S,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,R=S;v<R;v+=3){const A=v,E=v+1,D=v+2;n=Mr(this,f,e,i,c,h,d,A,E,D),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,S=m+1,v=m+2;n=Mr(this,a,e,i,c,h,d,x,S,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function xp(r,e,t,i,n,s,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Wi,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:r}}function Mr(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,vr),r.getVertexPosition(l,yr),r.getVertexPosition(c,xr);const h=xp(r,e,t,i,vr,yr,xr,nc);if(h){const d=new C;pi.getBarycoord(nc,vr,yr,xr,d),n&&(h.uv=pi.getInterpolatedAttribute(n,o,l,c,d,new Se)),s&&(h.uv1=pi.getInterpolatedAttribute(s,o,l,c,d,new Se)),a&&(h.normal=pi.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};pi.getNormal(vr,yr,xr,u.normal),h.face=u,h.barycoord=d}return h}class ct extends pt{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function g(_,m,f,x,S,v,R,A,E,D,w){const b=v/E,I=R/D,z=v/2,F=R/2,W=A/2,Y=E+1,V=D+1;let J=0,G=0;const ne=new C;for(let ce=0;ce<V;ce++){const xe=ce*I-F;for(let Fe=0;Fe<Y;Fe++){const it=Fe*b-z;ne[_]=it*x,ne[m]=xe*S,ne[f]=W,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[f]=A>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(Fe/E),d.push(1-ce/D),J+=1}}for(let ce=0;ce<D;ce++)for(let xe=0;xe<E;xe++){const Fe=u+xe+Y*ce,it=u+xe+Y*(ce+1),X=u+(xe+1)+Y*(ce+1),ee=u+(xe+1)+Y*ce;l.push(Fe,it,ee),l.push(it,X,ee),G+=6}o.addGroup(p,G,w),p+=G,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Ot(r){const e={};for(let t=0;t<r.length;t++){const i=ms(r[t]);for(const n in i)e[n]=i[n]}return e}function bp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function rd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const ta={clone:ms,merge:Ot};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _t extends bi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ad extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tn=new C,sc=new Se,rc=new Se;class Bt extends ad{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tn.x,tn.y).multiplyScalar(-e/tn.z),tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tn.x,tn.y).multiplyScalar(-e/tn.z)}getViewSize(e,t){return this.getViewBounds(e,sc,rc),t.subVectors(rc,sc)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gn=-90,Vn=1;class wp extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Bt(Gn,Vn,e,t);n.layers=this.layers,this.add(n);const s=new Bt(Gn,Vn,e,t);s.layers=this.layers,this.add(s);const a=new Bt(Gn,Vn,e,t);a.layers=this.layers,this.add(a);const o=new Bt(Gn,Vn,e,t);o.layers=this.layers,this.add(o);const l=new Bt(Gn,Vn,e,t);l.layers=this.layers,this.add(l);const c=new Bt(Gn,Vn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class od extends bt{constructor(e,t,i,n,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:hs,super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tp extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new od(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ct(5,5,5),s=new _t({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Hi});s.uniforms.tEquirect.value=t;const a=new be(n,s),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Yt),new wp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}const Na=new C,Ep=new C,Ap=new Le;class xn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Na.subVectors(i,t).cross(Ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Na),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ap.getNormalMatrix(e),n=this.coplanarPoint(Na).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mn=new Mi,wr=new C;class pl{constructor(e=new xn,t=new xn,i=new xn,n=new xn,s=new xn,a=new xn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi){const i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],x=n[13],S=n[14],v=n[15];if(i[0].setComponents(l-s,u-c,m-p,v-f).normalize(),i[1].setComponents(l+s,u+c,m+p,v+f).normalize(),i[2].setComponents(l+a,u+h,m+g,v+x).normalize(),i[3].setComponents(l-a,u-h,m-g,v-x).normalize(),i[4].setComponents(l-o,u-d,m-_,v-S).normalize(),t===Fi)i[5].setComponents(l+o,u+d,m+_,v+S).normalize();else if(t===ea)i[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mn)}intersectsSprite(e){return mn.center.set(0,0,0),mn.radius=.7071067811865476,mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(mn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(wr.x=n.normal.x>0?e.max.x:e.min.x,wr.y=n.normal.y>0?e.max.y:e.min.y,wr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ld(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Cp(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}class hn extends pt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*u-a;for(let S=0;S<c;S++){const v=S*d-s;g.push(v,-x,0),_.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const S=x+c*f,v=x+c*(f+1),R=x+1+c*(f+1),A=x+1+c*f;p.push(S,v,A),p.push(v,R,A)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,af="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Af=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Rp,alphahash_pars_fragment:Ip,alphamap_fragment:Dp,alphamap_pars_fragment:Pp,alphatest_fragment:Lp,alphatest_pars_fragment:Up,aomap_fragment:Np,aomap_pars_fragment:kp,batching_pars_vertex:Op,batching_vertex:Bp,begin_vertex:Fp,beginnormal_vertex:zp,bsdfs:Hp,iridescence_fragment:Gp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:$p,color_fragment:jp,color_pars_fragment:Yp,color_pars_vertex:Kp,color_vertex:Jp,common:Zp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:ef,displacementmap_pars_vertex:tf,displacementmap_vertex:nf,emissivemap_fragment:sf,emissivemap_pars_fragment:rf,colorspace_fragment:af,colorspace_pars_fragment:of,envmap_fragment:lf,envmap_common_pars_fragment:cf,envmap_pars_fragment:hf,envmap_pars_vertex:df,envmap_physical_pars_fragment:Sf,envmap_vertex:uf,fog_vertex:pf,fog_pars_vertex:ff,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:vf,lights_lambert_fragment:yf,lights_lambert_pars_fragment:xf,lights_pars_begin:bf,lights_toon_fragment:Mf,lights_toon_pars_fragment:wf,lights_phong_fragment:Tf,lights_phong_pars_fragment:Ef,lights_physical_fragment:Af,lights_physical_pars_fragment:Cf,lights_fragment_begin:Rf,lights_fragment_maps:If,lights_fragment_end:Df,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Nf,map_fragment:kf,map_pars_fragment:Of,map_particle_fragment:Bf,map_particle_pars_fragment:Ff,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Gf,morphcolor_vertex:Vf,morphnormal_vertex:Wf,morphtarget_pars_vertex:qf,morphtarget_vertex:Xf,normal_fragment_begin:$f,normal_fragment_maps:jf,normal_pars_fragment:Yf,normal_pars_vertex:Kf,normal_vertex:Jf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Qf,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:tm,iridescence_pars_fragment:im,opaque_fragment:nm,packing:sm,premultiplied_alpha_fragment:rm,project_vertex:am,dithering_fragment:om,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:um,shadowmap_vertex:pm,shadowmask_pars_fragment:fm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:_m,skinnormal_vertex:vm,specularmap_fragment:ym,specularmap_pars_fragment:xm,tonemapping_fragment:bm,tonemapping_pars_fragment:Sm,transmission_fragment:Mm,transmission_pars_fragment:wm,uv_pars_fragment:Tm,uv_pars_vertex:Em,uv_vertex:Am,worldpos_vertex:Cm,background_vert:Rm,background_frag:Im,backgroundCube_vert:Dm,backgroundCube_frag:Pm,cube_vert:Lm,cube_frag:Um,depth_vert:Nm,depth_frag:km,distanceRGBA_vert:Om,distanceRGBA_frag:Bm,equirect_vert:Fm,equirect_frag:zm,linedashed_vert:Hm,linedashed_frag:Gm,meshbasic_vert:Vm,meshbasic_frag:Wm,meshlambert_vert:qm,meshlambert_frag:Xm,meshmatcap_vert:$m,meshmatcap_frag:jm,meshnormal_vert:Ym,meshnormal_frag:Km,meshphong_vert:Jm,meshphong_frag:Zm,meshphysical_vert:Qm,meshphysical_frag:e0,meshtoon_vert:t0,meshtoon_frag:i0,points_vert:n0,points_frag:s0,shadow_vert:r0,shadow_frag:a0,sprite_vert:o0,sprite_frag:l0},te={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},yi={basic:{uniforms:Ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new pe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ot([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ot([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new pe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ot([te.points,te.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ot([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ot([te.common,te.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ot([te.sprite,te.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ot([te.common,te.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ot([te.lights,te.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};yi.physical={uniforms:Ot([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Tr={r:0,b:0,g:0},gn=new Si,c0=new Ue;function h0(r,e,t,i,n,s,a){const o=new pe(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function _(x){let S=!1;const v=g(x);v===null?f(o,l):v&&v.isColor&&(f(v,1),S=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===aa)?(h===void 0&&(h=new be(new ct(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:ms(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),gn.copy(S.backgroundRotation),gn.x*=-1,gn.y*=-1,gn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gn.y*=-1,gn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c0.makeRotationFromEuler(gn)),h.material.toneMapped=Ge.getTransfer(v.colorSpace)!==tt,(d!==v||u!==v.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new be(new hn(2,2),new _t({name:"BackgroundMaterial",uniforms:ms(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,S){x.getRGB(Tr,rd(r)),i.buffers.color.setClear(Tr.r,Tr.g,Tr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:_,addToRenderList:m}}function d0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,a=!1;function o(b,I,z,F,W){let Y=!1;const V=d(F,z,I);s!==V&&(s=V,c(s.object)),Y=p(b,F,z,W),Y&&g(b,F,z,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(b,I,z,F),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function d(b,I,z){const F=z.wireframe===!0;let W=i[b.id];W===void 0&&(W={},i[b.id]=W);let Y=W[I.id];Y===void 0&&(Y={},W[I.id]=Y);let V=Y[F];return V===void 0&&(V=u(l()),Y[F]=V),V}function u(b){const I=[],z=[],F=[];for(let W=0;W<t;W++)I[W]=0,z[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:F,object:b,attributes:{},index:null}}function p(b,I,z,F){const W=s.attributes,Y=I.attributes;let V=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){const ce=W[G];let xe=Y[G];if(xe===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor)),ce===void 0||ce.attribute!==xe||xe&&ce.data!==xe.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(b,I,z,F){const W={},Y=I.attributes;let V=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){let ce=Y[G];ce===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));const xe={};xe.attribute=ce,ce&&ce.data&&(xe.data=ce.data),W[G]=xe,V++}s.attributes=W,s.attributesNum=V,s.index=F}function _(){const b=s.newAttributes;for(let I=0,z=b.length;I<z;I++)b[I]=0}function m(b){f(b,0)}function f(b,I){const z=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;z[b]=1,F[b]===0&&(r.enableVertexAttribArray(b),F[b]=1),W[b]!==I&&(r.vertexAttribDivisor(b,I),W[b]=I)}function x(){const b=s.newAttributes,I=s.enabledAttributes;for(let z=0,F=I.length;z<F;z++)I[z]!==b[z]&&(r.disableVertexAttribArray(z),I[z]=0)}function S(b,I,z,F,W,Y,V){V===!0?r.vertexAttribIPointer(b,I,z,W,Y):r.vertexAttribPointer(b,I,z,F,W,Y)}function v(b,I,z,F){_();const W=F.attributes,Y=z.getAttributes(),V=I.defaultAttributeValues;for(const J in Y){const G=Y[J];if(G.location>=0){let ne=W[J];if(ne===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){const ce=ne.normalized,xe=ne.itemSize,Fe=e.get(ne);if(Fe===void 0)continue;const it=Fe.buffer,X=Fe.type,ee=Fe.bytesPerElement,_e=X===r.INT||X===r.UNSIGNED_INT||ne.gpuType===sl;if(ne.isInterleavedBufferAttribute){const se=ne.data,Ee=se.stride,Ie=ne.offset;if(se.isInstancedInterleavedBuffer){for(let ze=0;ze<G.locationSize;ze++)f(G.location+ze,se.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ze=0;ze<G.locationSize;ze++)m(G.location+ze);r.bindBuffer(r.ARRAY_BUFFER,it);for(let ze=0;ze<G.locationSize;ze++)S(G.location+ze,xe/G.locationSize,X,ce,Ee*ee,(Ie+xe/G.locationSize*ze)*ee,_e)}else{if(ne.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)f(G.location+se,ne.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<G.locationSize;se++)m(G.location+se);r.bindBuffer(r.ARRAY_BUFFER,it);for(let se=0;se<G.locationSize;se++)S(G.location+se,xe/G.locationSize,X,ce,xe*ee,xe/G.locationSize*se*ee,_e)}}else if(V!==void 0){const ce=V[J];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(G.location,ce);break;case 3:r.vertexAttrib3fv(G.location,ce);break;case 4:r.vertexAttrib4fv(G.location,ce);break;default:r.vertexAttrib1fv(G.location,ce)}}}}x()}function R(){D();for(const b in i){const I=i[b];for(const z in I){const F=I[z];for(const W in F)h(F[W].object),delete F[W];delete I[z]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const z in I){const F=I[z];for(const W in F)h(F[W].object),delete F[W];delete I[z]}delete i[b.id]}function E(b){for(const I in i){const z=i[I];if(z[b.id]===void 0)continue;const F=z[b.id];for(const W in F)h(F[W].object),delete F[W];delete z[b.id]}}function D(){w(),a=!0,s!==n&&(s=n,c(s.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:D,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function u0(r,e,t){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(r.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function p0(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(E){return!(E!==ii&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const D=E===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==qi&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==fi&&!D)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:R,maxSamples:A}}function f0(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new xn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||n;return n=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:i,S=x*4;let v=f.clippingState||null;l.value=v,v=h(g,u,S,p);for(let R=0;R!==S;++R)v[R]=t[R];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,v=p;S!==_;++S,v+=4)a.copy(d[S]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function m0(r){let e=new WeakMap;function t(a,o){return o===_o?a.mapping=hs:o===vo&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_o||o===vo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Tp(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ca extends ad{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=4,ac=[.125,.215,.35,.446,.526,.582],Mn=20,ka=new ca,oc=new pe;let Oa=null,Ba=0,Fa=0,za=!1;const bn=(1+Math.sqrt(5))/2,Wn=1/bn,lc=[new C(-bn,Wn,0),new C(bn,Wn,0),new C(-Wn,0,bn),new C(Wn,0,bn),new C(0,bn,-Wn),new C(0,bn,Wn),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Ba,Fa),this._renderer.xr.enabled=za,e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Gi,format:ii,colorSpace:Nt,depthBuffer:!1},n=hc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(s)),this._blurMaterial=_0(s,e,t)}return n}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,i,n){const o=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(oc),h.toneMapping=ln,h.autoClear=!1;const p=new ni({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new be(new ct,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(oc),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;Er(n,x*S,f>2?S:0,S,S),h.setRenderTarget(n),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===hs||e.mapping===ds;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Er(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=lc[(n-s-1)%lc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new be(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mn-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Mn;m>Mn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mn}`);const f=[];let x=0;for(let E=0;E<Mn;++E){const D=E/_,w=Math.exp(-D*D/2);f.push(w),E===0?x+=w:E<m&&(x+=2*w)}for(let E=0;E<f.length;E++)f[E]=f[E]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-i;const v=this._sizeLods[n],R=3*v*(n>S-es?n-S+es:0),A=4*(this._cubeSize-v);Er(t,R,A,3*v,2*v),l.setRenderTarget(t),l.render(d,ka)}}function g0(r){const e=[],t=[],i=[];let n=r;const s=r-es+1+ac.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>r-es?l=ac[a-r+es-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),S=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,D=A>2?0:-1,w=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];x.set(w,_*g*A),S.set(u,m*g*A);const b=[A,A,A,A,A,A];v.set(b,f*g*A)}const R=new pt;R.setAttribute("position",new Be(x,_)),R.setAttribute("uv",new Be(S,m)),R.setAttribute("faceIndex",new Be(v,f)),e.push(R),n>es&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hc(r,e,t){const i=new gi(r,e,t);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Er(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function _0(r,e,t){const i=new Float32Array(Mn),n=new C(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function dc(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function uc(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v0(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_o||l===vo,h=l===hs||l===ds;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new cc(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(t===null&&(t=new cc(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function y0(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&zs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function x0(r,e,t,i){const n={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}u.removeEventListener("dispose",a),delete n[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let S=0,v=x.length;S<v;S+=3){const R=x[S+0],A=x[S+1],E=x[S+2];u.push(R,A,A,E,E,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let S=0,v=x.length/3-1;S<v;S+=3){const R=S+0,A=S+1,E=S+2;u.push(R,A,A,E,E,R)}}else return;const m=new(Zh(u)?sd:nd)(u,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function b0(r,e,t){let i;function n(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){r.drawElements(i,p,s,u*a),t.update(p,i,1)}function c(u,p,g){g!==0&&(r.drawElementsInstanced(i,p,s,u*a,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*_[x];t.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function S0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function M0(r,e,t){const i=new WeakMap,n=new Ye;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let b=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const E=new Float32Array(R*A*4*d),D=new ed(E,R,A,d);D.type=fi,D.needsUpdate=!0;const w=v*4;for(let I=0;I<d;I++){const z=f[I],F=x[I],W=S[I],Y=R*A*4*I;for(let V=0;V<z.count;V++){const J=V*w;g===!0&&(n.fromBufferAttribute(z,V),E[Y+J+0]=n.x,E[Y+J+1]=n.y,E[Y+J+2]=n.z,E[Y+J+3]=0),_===!0&&(n.fromBufferAttribute(F,V),E[Y+J+4]=n.x,E[Y+J+5]=n.y,E[Y+J+6]=n.z,E[Y+J+7]=0),m===!0&&(n.fromBufferAttribute(W,V),E[Y+J+8]=n.x,E[Y+J+9]=n.y,E[Y+J+10]=n.z,E[Y+J+11]=W.itemSize===4?n.w:1)}}u={count:d,texture:D,size:new Se(R,A)},i.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function w0(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class cd extends bt{constructor(e,t,i,n,s,a,o,l,c,h=as){if(h!==as&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===as&&(i=En),i===void 0&&h===ps&&(i=us),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hd=new bt,pc=new cd(1,1),dd=new ed,ud=new hp,pd=new od,fc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function bs(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=fc[n];if(s===void 0&&(s=new Float32Array(n),fc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ha(r,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function T0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function E0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function A0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function C0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function R0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;vc.set(i),r.uniformMatrix2fv(this.addr,!1,vc),Mt(t,i)}}function I0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;_c.set(i),r.uniformMatrix3fv(this.addr,!1,_c),Mt(t,i)}}function D0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;gc.set(i),r.uniformMatrix4fv(this.addr,!1,gc),Mt(t,i)}}function P0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function L0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function U0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function N0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function k0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function O0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function B0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function F0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function z0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(pc.compareFunction=Jh,s=pc):s=hd,t.setTexture2D(e||s,n)}function H0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||ud,n)}function G0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||pd,n)}function V0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||dd,n)}function W0(r){switch(r){case 5126:return T0;case 35664:return E0;case 35665:return A0;case 35666:return C0;case 35674:return R0;case 35675:return I0;case 35676:return D0;case 5124:case 35670:return P0;case 35667:case 35671:return L0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return k0;case 36294:return O0;case 36295:return B0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return V0}}function q0(r,e){r.uniform1fv(this.addr,e)}function X0(r,e){const t=bs(e,this.size,2);r.uniform2fv(this.addr,t)}function $0(r,e){const t=bs(e,this.size,3);r.uniform3fv(this.addr,t)}function j0(r,e){const t=bs(e,this.size,4);r.uniform4fv(this.addr,t)}function Y0(r,e){const t=bs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function K0(r,e){const t=bs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function J0(r,e){const t=bs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Z0(r,e){r.uniform1iv(this.addr,e)}function Q0(r,e){r.uniform2iv(this.addr,e)}function eg(r,e){r.uniform3iv(this.addr,e)}function tg(r,e){r.uniform4iv(this.addr,e)}function ig(r,e){r.uniform1uiv(this.addr,e)}function ng(r,e){r.uniform2uiv(this.addr,e)}function sg(r,e){r.uniform3uiv(this.addr,e)}function rg(r,e){r.uniform4uiv(this.addr,e)}function ag(r,e,t){const i=this.cache,n=e.length,s=ha(t,n);St(i,s)||(r.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||hd,s[a])}function og(r,e,t){const i=this.cache,n=e.length,s=ha(t,n);St(i,s)||(r.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||ud,s[a])}function lg(r,e,t){const i=this.cache,n=e.length,s=ha(t,n);St(i,s)||(r.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||pd,s[a])}function cg(r,e,t){const i=this.cache,n=e.length,s=ha(t,n);St(i,s)||(r.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||dd,s[a])}function hg(r){switch(r){case 5126:return q0;case 35664:return X0;case 35665:return $0;case 35666:return j0;case 35674:return Y0;case 35675:return K0;case 35676:return J0;case 5124:case 35670:return Z0;case 35667:case 35671:return Q0;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ig;case 36294:return ng;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}class dg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}}class ug{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hg(t.type)}}class pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function yc(r,e){r.seq.push(e),r.map[e.id]=e}function fg(r,e,t){const i=r.name,n=i.length;for(Ha.lastIndex=0;;){const s=Ha.exec(i),a=Ha.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){yc(t,c===void 0?new dg(o,r,e):new ug(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new pg(o),yc(t,d)),t=d}}}class Yr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);fg(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function xc(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const mg=37297;let gg=0;function _g(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const bc=new Le;function vg(r){Ge._getMatrix(bc,Ge.workingColorSpace,r);const e=`mat3( ${bc.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(r)){case oa:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Sc(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+_g(r.getShaderSource(e),a)}else return n}function yg(r,e){const t=vg(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xg(r,e){let t;switch(e){case yu:t="Linear";break;case xu:t="Reinhard";break;case bu:t="Cineon";break;case Nh:t="ACESFilmic";break;case Mu:t="AgX";break;case wu:t="Neutral";break;case Su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new C;function bg(){Ge.getLuminanceCoefficients(Ar);const r=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Mg(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wg(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Hs(r){return r!==""}function Mc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(r){return r.replace(Tg,Ag)}const Eg=new Map;function Ag(r,e){let t=Oe[e];if(t===void 0){const i=Eg.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $o(t)}const Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(r){return r.replace(Cg,Rg)}function Rg(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ec(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ig(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Dg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case hs:case ds:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Lg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Uh:e="ENVMAP_BLENDING_MULTIPLY";break;case _u:e="ENVMAP_BLENDING_MIX";break;case vu:e="ENVMAP_BLENDING_ADD";break}return e}function Ug(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ng(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ig(t),c=Dg(t),h=Pg(t),d=Lg(t),u=Ug(t),p=Sg(t),g=Mg(s),_=n.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),f.length>0&&(f+=`
`)):(m=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),f=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Oe.tonemapping_pars_fragment:"",t.toneMapping!==ln?xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,yg("linearToOutputTexel",t.outputColorSpace),bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),a=$o(a),a=Mc(a,t),a=wc(a,t),o=$o(o),o=Mc(o,t),o=wc(o,t),a=Tc(a),o=Tc(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=x+m+a,v=x+f+o,R=xc(n,n.VERTEX_SHADER,S),A=xc(n,n.FRAGMENT_SHADER,v);n.attachShader(_,R),n.attachShader(_,A),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function E(I){if(r.debug.checkShaderErrors){const z=n.getProgramInfoLog(_).trim(),F=n.getShaderInfoLog(R).trim(),W=n.getShaderInfoLog(A).trim();let Y=!0,V=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,R,A);else{const J=Sc(n,R,"vertex"),G=Sc(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+J+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||W==="")&&(V=!1);V&&(I.diagnostics={runnable:Y,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:f}})}n.deleteShader(R),n.deleteShader(A),D=new Yr(n,_),w=wg(n,_)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(_,mg)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let kg=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Bg(e),t.set(e,i)),i}}class Bg{constructor(e){this.id=kg++,this.code=e,this.usedTimes=0}}function Fg(r,e,t,i,n,s,a){const o=new td,l=new Og,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,I,z,F){const W=z.fog,Y=F.geometry,V=w.isMeshStandardMaterial?z.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),G=J&&J.mapping===aa?J.image.height:null,ne=g[w.type];w.precision!==null&&(p=n.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xe=ce!==void 0?ce.length:0;let Fe=0;Y.morphAttributes.position!==void 0&&(Fe=1),Y.morphAttributes.normal!==void 0&&(Fe=2),Y.morphAttributes.color!==void 0&&(Fe=3);let it,X,ee,_e;if(ne){const Qe=yi[ne];it=Qe.vertexShader,X=Qe.fragmentShader}else it=w.vertexShader,X=w.fragmentShader,l.update(w),ee=l.getVertexShaderID(w),_e=l.getFragmentShaderID(w);const se=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,ze=F.isBatchedMesh===!0,ut=!!w.map,Xe=!!w.matcap,mt=!!J,N=!!w.aoMap,Kt=!!w.lightMap,Ve=!!w.bumpMap,We=!!w.normalMap,we=!!w.displacementMap,at=!!w.emissiveMap,Me=!!w.metalnessMap,T=!!w.roughnessMap,y=w.anisotropy>0,k=w.clearcoat>0,$=w.dispersion>0,K=w.iridescence>0,q=w.sheen>0,ve=w.transmission>0,re=y&&!!w.anisotropyMap,he=k&&!!w.clearcoatMap,$e=k&&!!w.clearcoatNormalMap,Z=k&&!!w.clearcoatRoughnessMap,de=K&&!!w.iridescenceMap,Te=K&&!!w.iridescenceThicknessMap,Ae=q&&!!w.sheenColorMap,ue=q&&!!w.sheenRoughnessMap,qe=!!w.specularMap,Ne=!!w.specularColorMap,nt=!!w.specularIntensityMap,P=ve&&!!w.transmissionMap,ie=ve&&!!w.thicknessMap,H=!!w.gradientMap,j=!!w.alphaMap,le=w.alphaTest>0,ae=!!w.alphaHash,De=!!w.extensions;let ft=ln;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ft=r.toneMapping);const It={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:it,fragmentShader:X,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ze,batchingColor:ze&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Nt,alphaToCoverage:!!w.alphaToCoverage,map:ut,matcap:Xe,envMap:mt,envMapMode:mt&&J.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Kt,bumpMap:Ve,normalMap:We,displacementMap:u&&we,emissiveMap:at,normalMapObjectSpace:We&&w.normalMapType===Du,normalMapTangentSpace:We&&w.normalMapType===Kh,metalnessMap:Me,roughnessMap:T,anisotropy:y,anisotropyMap:re,clearcoat:k,clearcoatMap:he,clearcoatNormalMap:$e,clearcoatRoughnessMap:Z,dispersion:$,iridescence:K,iridescenceMap:de,iridescenceThicknessMap:Te,sheen:q,sheenColorMap:Ae,sheenRoughnessMap:ue,specularMap:qe,specularColorMap:Ne,specularIntensityMap:nt,transmission:ve,transmissionMap:P,thicknessMap:ie,gradientMap:H,opaque:w.transparent===!1&&w.blending===rs&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:le,alphaHash:ae,combine:w.combine,mapUv:ut&&_(w.map.channel),aoMapUv:N&&_(w.aoMap.channel),lightMapUv:Kt&&_(w.lightMap.channel),bumpMapUv:Ve&&_(w.bumpMap.channel),normalMapUv:We&&_(w.normalMap.channel),displacementMapUv:we&&_(w.displacementMap.channel),emissiveMapUv:at&&_(w.emissiveMap.channel),metalnessMapUv:Me&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:re&&_(w.anisotropyMap.channel),clearcoatMapUv:he&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(w.sheenRoughnessMap.channel),specularMapUv:qe&&_(w.specularMap.channel),specularColorMapUv:Ne&&_(w.specularColorMap.channel),specularIntensityMapUv:nt&&_(w.specularIntensityMap.channel),transmissionMapUv:P&&_(w.transmissionMap.channel),thicknessMapUv:ie&&_(w.thicknessMap.channel),alphaMapUv:j&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(We||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(ut||j),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ee,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:ut&&w.map.isVideoTexture===!0&&Ge.getTransfer(w.map.colorSpace)===tt,decodeVideoTextureEmissive:at&&w.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(w.emissiveMap.colorSpace)===tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===jt,flipSided:w.side===zt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function f(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(x(b,w),S(b,w),b.push(r.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function x(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const b=g[w.type];let I;if(b){const z=yi[b];I=ta.clone(z.uniforms)}else I=w.uniforms;return I}function R(w,b){let I;for(let z=0,F=h.length;z<F;z++){const W=h[z];if(W.cacheKey===b){I=W,++I.usedTimes;break}}return I===void 0&&(I=new Ng(r,b,w,s),h.push(I)),I}function A(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function E(w){l.remove(w)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:D}}function zg(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Hg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ac(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Cc(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(d,u,p,g,_,m){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},r[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||Hg),i.length>1&&i.sort(u||Ac),n.length>1&&n.sort(u||Ac)}function h(){for(let d=e,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function Gg(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new Cc,r.set(i,[a])):n>=s.length?(a=new Cc,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Vg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new pe};break;case"SpotLight":t={position:new C,direction:new C,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function Wg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let qg=0;function Xg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $g(r){const e=new Vg,t=Wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const n=new C,s=new Ue,a=new Ue;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,x=0,S=0,v=0,R=0,A=0,E=0;c.sort(Xg);for(let w=0,b=c.length;w<b;w++){const I=c[w],z=I.color,F=I.intensity,W=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*F,d+=z.g*F,u+=z.b*F;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],F);E++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=I.shadow.matrix,x++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(z).multiplyScalar(F),V.distance=W,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const J=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,J.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[_]=J.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Y,v++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(z).multiplyScalar(F),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const J=I.shadow,G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,S++}i.point[g]=V,g++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(F),V.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[f]=V,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==x||D.numPointShadows!==S||D.numSpotShadows!==v||D.numSpotMaps!==R||D.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=x,D.numPointShadows=S,D.numSpotShadows=v,D.numSpotMaps=R,D.numLightProbes=E,i.version=qg++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const S=c[f];if(S.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Rc(r){const e=new $g(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function jg(r){let e=new WeakMap;function t(n,s=0){const a=e.get(n);let o;return a===void 0?(o=new Rc(r),e.set(n,[o])):s>=a.length?(o=new Rc(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Yg extends bi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kg extends bi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qg(r,e,t){let i=new pl;const n=new Se,s=new Se,a=new Ye,o=new Yg({depthPacking:Iu}),l=new Kg,c={},h=t.maxTextureSize,d={[Wi]:zt,[zt]:Wi,[jt]:jt},u=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Jg,fragmentShader:Zg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ph;let f=this.type;this.render=function(A,E,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Hi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=f!==Ui&&this.type===Ui,W=f===Ui&&this.type!==Ui;for(let Y=0,V=A.length;Y<V;Y++){const J=A[Y],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const ne=G.getFrameExtents();if(n.multiply(ne),s.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ne.x),n.x=s.x*ne.x,G.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ne.y),n.y=s.y*ne.y,G.mapSize.y=s.y)),G.map===null||F===!0||W===!0){const xe=this.type!==Ui?{minFilter:Ht,magFilter:Ht}:{};G.map!==null&&G.map.dispose(),G.map=new gi(n.x,n.y,xe),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ce=G.getViewportCount();for(let xe=0;xe<ce;xe++){const Fe=G.getViewport(xe);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),z.viewport(a),G.updateMatrices(J,xe),i=G.getFrustum(),v(E,D,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Ui&&x(G,D),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(w,b,I)};function x(A,E){const D=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new gi(n.x,n.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,D,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,D,p,_,null)}function S(A,E,D,w){let b=null;const I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)b=I;else if(b=D.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=b.uuid,F=E.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let Y=W[F];Y===void 0&&(Y=b.clone(),W[F]=Y,E.addEventListener("dispose",R)),b=Y}if(b.visible=E.visible,b.wireframe=E.wireframe,w===Ui?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:d[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=r.properties.get(b);z.light=D}return b}function v(A,E,D,w,b){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const F=e.update(A),W=A.material;if(Array.isArray(W)){const Y=F.groups;for(let V=0,J=Y.length;V<J;V++){const G=Y[V],ne=W[G.materialIndex];if(ne&&ne.visible){const ce=S(A,ne,w,b);A.onBeforeShadow(r,A,E,D,F,ce,G),r.renderBufferDirect(D,null,F,ce,A,G),A.onAfterShadow(r,A,E,D,F,ce,G)}}}else if(W.visible){const Y=S(A,W,w,b);A.onBeforeShadow(r,A,E,D,F,Y,null),r.renderBufferDirect(D,null,F,Y,A,null),A.onAfterShadow(r,A,E,D,F,Y,null)}}const z=A.children;for(let F=0,W=z.length;F<W;F++)v(z[F],E,D,w,b)}function R(A){A.target.removeEventListener("dispose",R);for(const D in c){const w=c[D],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const e_={[co]:ho,[uo]:mo,[po]:go,[cs]:fo,[ho]:co,[mo]:uo,[go]:po,[fo]:cs};function t_(r,e){function t(){let P=!1;const ie=new Ye;let H=null;const j=new Ye(0,0,0,0);return{setMask:function(le){H!==le&&!P&&(r.colorMask(le,le,le,le),H=le)},setLocked:function(le){P=le},setClear:function(le,ae,De,ft,It){It===!0&&(le*=ft,ae*=ft,De*=ft),ie.set(le,ae,De,ft),j.equals(ie)===!1&&(r.clearColor(le,ae,De,ft),j.copy(ie))},reset:function(){P=!1,H=null,j.set(-1,0,0,0)}}}function i(){let P=!1,ie=!1,H=null,j=null,le=null;return{setReversed:function(ae){if(ie!==ae){const De=e.get("EXT_clip_control");ie?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const ft=le;le=null,this.setClear(ft)}ie=ae},getReversed:function(){return ie},setTest:function(ae){ae?se(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(ae){H!==ae&&!P&&(r.depthMask(ae),H=ae)},setFunc:function(ae){if(ie&&(ae=e_[ae]),j!==ae){switch(ae){case co:r.depthFunc(r.NEVER);break;case ho:r.depthFunc(r.ALWAYS);break;case uo:r.depthFunc(r.LESS);break;case cs:r.depthFunc(r.LEQUAL);break;case po:r.depthFunc(r.EQUAL);break;case fo:r.depthFunc(r.GEQUAL);break;case mo:r.depthFunc(r.GREATER);break;case go:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ae}},setLocked:function(ae){P=ae},setClear:function(ae){le!==ae&&(ie&&(ae=1-ae),r.clearDepth(ae),le=ae)},reset:function(){P=!1,H=null,j=null,le=null,ie=!1}}}function n(){let P=!1,ie=null,H=null,j=null,le=null,ae=null,De=null,ft=null,It=null;return{setTest:function(Qe){P||(Qe?se(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(Qe){ie!==Qe&&!P&&(r.stencilMask(Qe),ie=Qe)},setFunc:function(Qe,si,Ei){(H!==Qe||j!==si||le!==Ei)&&(r.stencilFunc(Qe,si,Ei),H=Qe,j=si,le=Ei)},setOp:function(Qe,si,Ei){(ae!==Qe||De!==si||ft!==Ei)&&(r.stencilOp(Qe,si,Ei),ae=Qe,De=si,ft=Ei)},setLocked:function(Qe){P=Qe},setClear:function(Qe){It!==Qe&&(r.clearStencil(Qe),It=Qe)},reset:function(){P=!1,ie=null,H=null,j=null,le=null,ae=null,De=null,ft=null,It=null}}}const s=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,S=null,v=null,R=null,A=null,E=new pe(0,0,0),D=0,w=!1,b=null,I=null,z=null,F=null,W=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=J>=2);let ne=null,ce={};const xe=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),it=new Ye().fromArray(xe),X=new Ye().fromArray(Fe);function ee(P,ie,H,j){const le=new Uint8Array(4),ae=r.createTexture();r.bindTexture(P,ae),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<H;De++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ie+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ae}const _e={};_e[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(r.DEPTH_TEST),a.setFunc(cs),Ve(!1),We(Ll),se(r.CULL_FACE),N(Hi);function se(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function Ee(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function Ie(P,ie){return d[P]!==ie?(r.bindFramebuffer(P,ie),d[P]=ie,P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ie),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function ze(P,ie){let H=p,j=!1;if(P){H=u.get(ie),H===void 0&&(H=[],u.set(ie,H));const le=P.textures;if(H.length!==le.length||H[0]!==r.COLOR_ATTACHMENT0){for(let ae=0,De=le.length;ae<De;ae++)H[ae]=r.COLOR_ATTACHMENT0+ae;H.length=le.length,j=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,j=!0);j&&r.drawBuffers(H)}function ut(P){return g!==P?(r.useProgram(P),g=P,!0):!1}const Xe={[Sn]:r.FUNC_ADD,[eu]:r.FUNC_SUBTRACT,[tu]:r.FUNC_REVERSE_SUBTRACT};Xe[iu]=r.MIN,Xe[nu]=r.MAX;const mt={[su]:r.ZERO,[ru]:r.ONE,[au]:r.SRC_COLOR,[oo]:r.SRC_ALPHA,[uu]:r.SRC_ALPHA_SATURATE,[hu]:r.DST_COLOR,[lu]:r.DST_ALPHA,[ou]:r.ONE_MINUS_SRC_COLOR,[lo]:r.ONE_MINUS_SRC_ALPHA,[du]:r.ONE_MINUS_DST_COLOR,[cu]:r.ONE_MINUS_DST_ALPHA,[pu]:r.CONSTANT_COLOR,[fu]:r.ONE_MINUS_CONSTANT_COLOR,[mu]:r.CONSTANT_ALPHA,[gu]:r.ONE_MINUS_CONSTANT_ALPHA};function N(P,ie,H,j,le,ae,De,ft,It,Qe){if(P===Hi){_===!0&&(Ee(r.BLEND),_=!1);return}if(_===!1&&(se(r.BLEND),_=!0),P!==Qd){if(P!==m||Qe!==w){if((f!==Sn||v!==Sn)&&(r.blendEquation(r.FUNC_ADD),f=Sn,v=Sn),Qe)switch(P){case rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $s:r.blendFunc(r.ONE,r.ONE);break;case Ul:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $s:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ul:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,S=null,R=null,A=null,E.set(0,0,0),D=0,m=P,w=Qe}return}le=le||ie,ae=ae||H,De=De||j,(ie!==f||le!==v)&&(r.blendEquationSeparate(Xe[ie],Xe[le]),f=ie,v=le),(H!==x||j!==S||ae!==R||De!==A)&&(r.blendFuncSeparate(mt[H],mt[j],mt[ae],mt[De]),x=H,S=j,R=ae,A=De),(ft.equals(E)===!1||It!==D)&&(r.blendColor(ft.r,ft.g,ft.b,It),E.copy(ft),D=It),m=P,w=!1}function Kt(P,ie){P.side===jt?Ee(r.CULL_FACE):se(r.CULL_FACE);let H=P.side===zt;ie&&(H=!H),Ve(H),P.blending===rs&&P.transparent===!1?N(Hi):N(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const j=P.stencilWrite;o.setTest(j),j&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),at(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(P){b!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),b=P)}function We(P){P!==Jd?(se(r.CULL_FACE),P!==I&&(P===Ll?r.cullFace(r.BACK):P===Zd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),I=P}function we(P){P!==z&&(V&&r.lineWidth(P),z=P)}function at(P,ie,H){P?(se(r.POLYGON_OFFSET_FILL),(F!==ie||W!==H)&&(r.polygonOffset(ie,H),F=ie,W=H)):Ee(r.POLYGON_OFFSET_FILL)}function Me(P){P?se(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function T(P){P===void 0&&(P=r.TEXTURE0+Y-1),ne!==P&&(r.activeTexture(P),ne=P)}function y(P,ie,H){H===void 0&&(ne===null?H=r.TEXTURE0+Y-1:H=ne);let j=ce[H];j===void 0&&(j={type:void 0,texture:void 0},ce[H]=j),(j.type!==P||j.texture!==ie)&&(ne!==H&&(r.activeTexture(H),ne=H),r.bindTexture(P,ie||_e[P]),j.type=P,j.texture=ie)}function k(){const P=ce[ne];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $e(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(P){it.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),it.copy(P))}function ue(P){X.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function qe(P,ie){let H=c.get(ie);H===void 0&&(H=new WeakMap,c.set(ie,H));let j=H.get(P);j===void 0&&(j=r.getUniformBlockIndex(ie,P.name),H.set(P,j))}function Ne(P,ie){const j=c.get(ie).get(P);l.get(ie)!==j&&(r.uniformBlockBinding(ie,j,P.__bindingPointIndex),l.set(ie,j))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,ce={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,S=null,v=null,R=null,A=null,E=new pe(0,0,0),D=0,w=!1,b=null,I=null,z=null,F=null,W=null,it.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Ee,bindFramebuffer:Ie,drawBuffers:ze,useProgram:ut,setBlending:N,setMaterial:Kt,setFlipSided:Ve,setCullFace:We,setLineWidth:we,setPolygonOffset:at,setScissorTest:Me,activeTexture:T,bindTexture:y,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:de,texImage3D:Te,updateUBOMapping:qe,uniformBlockBinding:Ne,texStorage2D:$e,texStorage3D:Z,texSubImage2D:q,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Ae,viewport:ue,reset:nt}}function Ic(r,e,t,i){const n=i_(i);switch(t){case Hh:return r*e;case Vh:return r*e;case Wh:return r*e*2;case ol:return r*e/n.components*n.byteLength;case ll:return r*e/n.components*n.byteLength;case qh:return r*e*2/n.components*n.byteLength;case cl:return r*e*2/n.components*n.byteLength;case Gh:return r*e*3/n.components*n.byteLength;case ii:return r*e*4/n.components*n.byteLength;case hl:return r*e*4/n.components*n.byteLength;case Wr:case qr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xr:case $r:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xo:case So:return Math.max(r,16)*Math.max(e,8)/4;case yo:case bo:return Math.max(r,8)*Math.max(e,8)/2;case Mo:case wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case No:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case jr:case zo:case Ho:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xh:case Go:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vo:case Wo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i_(r){switch(r){case qi:case Bh:return{byteLength:1,components:1};case js:case Fh:case Gi:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case En:case sl:case fi:return{byteLength:4,components:1};case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function n_(r,e,t,i,n,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return p?new OffscreenCanvas(T,y):Js("canvas")}function _(T,y,k){let $=1;const K=Me(T);if((K.width>k||K.height>k)&&($=k/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor($*K.width),ve=Math.floor($*K.height);d===void 0&&(d=g(q,ve));const re=y?g(q,ve):d;return re.width=q,re.height=ve,re.getContext("2d").drawImage(T,0,0,q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+ve+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){r.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(T,y,k,$,K=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=y;if(y===r.RED&&(k===r.FLOAT&&(q=r.R32F),k===r.HALF_FLOAT&&(q=r.R16F),k===r.UNSIGNED_BYTE&&(q=r.R8)),y===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(q=r.R8UI),k===r.UNSIGNED_SHORT&&(q=r.R16UI),k===r.UNSIGNED_INT&&(q=r.R32UI),k===r.BYTE&&(q=r.R8I),k===r.SHORT&&(q=r.R16I),k===r.INT&&(q=r.R32I)),y===r.RG&&(k===r.FLOAT&&(q=r.RG32F),k===r.HALF_FLOAT&&(q=r.RG16F),k===r.UNSIGNED_BYTE&&(q=r.RG8)),y===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(q=r.RG8UI),k===r.UNSIGNED_SHORT&&(q=r.RG16UI),k===r.UNSIGNED_INT&&(q=r.RG32UI),k===r.BYTE&&(q=r.RG8I),k===r.SHORT&&(q=r.RG16I),k===r.INT&&(q=r.RG32I)),y===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(q=r.RGB8UI),k===r.UNSIGNED_SHORT&&(q=r.RGB16UI),k===r.UNSIGNED_INT&&(q=r.RGB32UI),k===r.BYTE&&(q=r.RGB8I),k===r.SHORT&&(q=r.RGB16I),k===r.INT&&(q=r.RGB32I)),y===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),k===r.UNSIGNED_INT&&(q=r.RGBA32UI),k===r.BYTE&&(q=r.RGBA8I),k===r.SHORT&&(q=r.RGBA16I),k===r.INT&&(q=r.RGBA32I)),y===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),y===r.RGBA){const ve=K?oa:Ge.getTransfer($);k===r.FLOAT&&(q=r.RGBA32F),k===r.HALF_FLOAT&&(q=r.RGBA16F),k===r.UNSIGNED_BYTE&&(q=ve===tt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(T,y){let k;return T?y===null||y===En||y===us?k=r.DEPTH24_STENCIL8:y===fi?k=r.DEPTH32F_STENCIL8:y===js&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===En||y===us?k=r.DEPTH_COMPONENT24:y===fi?k=r.DEPTH_COMPONENT32F:y===js&&(k=r.DEPTH_COMPONENT16),k}function R(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ht&&T.minFilter!==Yt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),D(y),y.isVideoTexture&&h.delete(y)}function E(T){const y=T.target;y.removeEventListener("dispose",E),b(y)}function D(T){const y=i.get(T);if(y.__webglInit===void 0)return;const k=T.source,$=u.get(k);if($){const K=$[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(T),Object.keys($).length===0&&u.delete(k)}i.remove(T)}function w(T){const y=i.get(T);r.deleteTexture(y.__webglTexture);const k=T.source,$=u.get(k);delete $[y.__cacheKey],a.memory.textures--}function b(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let K=0;K<y.__webglFramebuffer[$].length;K++)r.deleteFramebuffer(y.__webglFramebuffer[$][K]);else r.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)r.deleteFramebuffer(y.__webglFramebuffer[$]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=T.textures;for(let $=0,K=k.length;$<K;$++){const q=i.get(k[$]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(k[$])}i.remove(T)}let I=0;function z(){I=0}function F(){const T=I;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),I+=1,T}function W(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Y(T,y){const k=i.get(T);if(T.isVideoTexture&&we(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,T,y);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+y)}function V(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){X(k,T,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+y)}function J(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){X(k,T,y);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+y)}function G(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){ee(k,T,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+y)}const ne={[Vt]:r.REPEAT,[an]:r.CLAMP_TO_EDGE,[Zr]:r.MIRRORED_REPEAT},ce={[Ht]:r.NEAREST,[Oh]:r.NEAREST_MIPMAP_NEAREST,[Fs]:r.NEAREST_MIPMAP_LINEAR,[Yt]:r.LINEAR,[Vr]:r.LINEAR_MIPMAP_NEAREST,[Bi]:r.LINEAR_MIPMAP_LINEAR},xe={[Pu]:r.NEVER,[Bu]:r.ALWAYS,[Lu]:r.LESS,[Jh]:r.LEQUAL,[Uu]:r.EQUAL,[Ou]:r.GEQUAL,[Nu]:r.GREATER,[ku]:r.NOTEQUAL};function Fe(T,y){if(y.type===fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Yt||y.magFilter===Vr||y.magFilter===Fs||y.magFilter===Bi||y.minFilter===Yt||y.minFilter===Vr||y.minFilter===Fs||y.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,ne[y.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,ne[y.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,ne[y.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,ce[y.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,ce[y.minFilter]),y.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ht||y.minFilter!==Fs&&y.minFilter!==Bi||y.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function it(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const $=y.source;let K=u.get($);K===void 0&&(K={},u.set($,K));const q=W(y);if(q!==T.__cacheKey){K[q]===void 0&&(K[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[q].usedTimes++;const ve=K[T.__cacheKey];ve!==void 0&&(K[T.__cacheKey].usedTimes--,ve.usedTimes===0&&w(y)),T.__cacheKey=q,T.__webglTexture=K[q].texture}return k}function X(T,y,k){let $=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=r.TEXTURE_3D);const K=it(T,y),q=y.source;t.bindTexture($,T.__webglTexture,r.TEXTURE0+k);const ve=i.get(q);if(q.version!==ve.__version||K===!0){t.activeTexture(r.TEXTURE0+k);const re=Ge.getPrimaries(Ge.workingColorSpace),he=y.colorSpace===rn?null:Ge.getPrimaries(y.colorSpace),$e=y.colorSpace===rn||re===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Z=_(y.image,!1,n.maxTextureSize);Z=at(y,Z);const de=s.convert(y.format,y.colorSpace),Te=s.convert(y.type);let Ae=S(y.internalFormat,de,Te,y.colorSpace,y.isVideoTexture);Fe($,y);let ue;const qe=y.mipmaps,Ne=y.isVideoTexture!==!0,nt=ve.__version===void 0||K===!0,P=q.dataReady,ie=R(y,Z);if(y.isDepthTexture)Ae=v(y.format===ps,y.type),nt&&(Ne?t.texStorage2D(r.TEXTURE_2D,1,Ae,Z.width,Z.height):t.texImage2D(r.TEXTURE_2D,0,Ae,Z.width,Z.height,0,de,Te,null));else if(y.isDataTexture)if(qe.length>0){Ne&&nt&&t.texStorage2D(r.TEXTURE_2D,ie,Ae,qe[0].width,qe[0].height);for(let H=0,j=qe.length;H<j;H++)ue=qe[H],Ne?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,ue.width,ue.height,de,Te,ue.data):t.texImage2D(r.TEXTURE_2D,H,Ae,ue.width,ue.height,0,de,Te,ue.data);y.generateMipmaps=!1}else Ne?(nt&&t.texStorage2D(r.TEXTURE_2D,ie,Ae,Z.width,Z.height),P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Z.width,Z.height,de,Te,Z.data)):t.texImage2D(r.TEXTURE_2D,0,Ae,Z.width,Z.height,0,de,Te,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,Ae,qe[0].width,qe[0].height,Z.depth);for(let H=0,j=qe.length;H<j;H++)if(ue=qe[H],y.format!==ii)if(de!==null)if(Ne){if(P)if(y.layerUpdates.size>0){const le=Ic(ue.width,ue.height,y.format,y.type);for(const ae of y.layerUpdates){const De=ue.data.subarray(ae*le/ue.data.BYTES_PER_ELEMENT,(ae+1)*le/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,ae,ue.width,ue.height,1,de,De)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,ue.width,ue.height,Z.depth,de,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,Ae,ue.width,ue.height,Z.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?P&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,ue.width,ue.height,Z.depth,de,Te,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,Ae,ue.width,ue.height,Z.depth,0,de,Te,ue.data)}else{Ne&&nt&&t.texStorage2D(r.TEXTURE_2D,ie,Ae,qe[0].width,qe[0].height);for(let H=0,j=qe.length;H<j;H++)ue=qe[H],y.format!==ii?de!==null?Ne?P&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,ue.width,ue.height,de,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,H,Ae,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,ue.width,ue.height,de,Te,ue.data):t.texImage2D(r.TEXTURE_2D,H,Ae,ue.width,ue.height,0,de,Te,ue.data)}else if(y.isDataArrayTexture)if(Ne){if(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,Ae,Z.width,Z.height,Z.depth),P)if(y.layerUpdates.size>0){const H=Ic(Z.width,Z.height,y.format,y.type);for(const j of y.layerUpdates){const le=Z.data.subarray(j*H/Z.data.BYTES_PER_ELEMENT,(j+1)*H/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,Z.width,Z.height,1,de,Te,le)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,de,Te,Z.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,Z.width,Z.height,Z.depth,0,de,Te,Z.data);else if(y.isData3DTexture)Ne?(nt&&t.texStorage3D(r.TEXTURE_3D,ie,Ae,Z.width,Z.height,Z.depth),P&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,de,Te,Z.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,Z.width,Z.height,Z.depth,0,de,Te,Z.data);else if(y.isFramebufferTexture){if(nt)if(Ne)t.texStorage2D(r.TEXTURE_2D,ie,Ae,Z.width,Z.height);else{let H=Z.width,j=Z.height;for(let le=0;le<ie;le++)t.texImage2D(r.TEXTURE_2D,le,Ae,H,j,0,de,Te,null),H>>=1,j>>=1}}else if(qe.length>0){if(Ne&&nt){const H=Me(qe[0]);t.texStorage2D(r.TEXTURE_2D,ie,Ae,H.width,H.height)}for(let H=0,j=qe.length;H<j;H++)ue=qe[H],Ne?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,de,Te,ue):t.texImage2D(r.TEXTURE_2D,H,Ae,de,Te,ue);y.generateMipmaps=!1}else if(Ne){if(nt){const H=Me(Z);t.texStorage2D(r.TEXTURE_2D,ie,Ae,H.width,H.height)}P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Te,Z)}else t.texImage2D(r.TEXTURE_2D,0,Ae,de,Te,Z);m(y)&&f($),ve.__version=q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ee(T,y,k){if(y.image.length!==6)return;const $=it(T,y),K=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+k);const q=i.get(K);if(K.version!==q.__version||$===!0){t.activeTexture(r.TEXTURE0+k);const ve=Ge.getPrimaries(Ge.workingColorSpace),re=y.colorSpace===rn?null:Ge.getPrimaries(y.colorSpace),he=y.colorSpace===rn||ve===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const $e=y.isCompressedTexture||y.image[0].isCompressedTexture,Z=y.image[0]&&y.image[0].isDataTexture,de=[];for(let j=0;j<6;j++)!$e&&!Z?de[j]=_(y.image[j],!0,n.maxCubemapSize):de[j]=Z?y.image[j].image:y.image[j],de[j]=at(y,de[j]);const Te=de[0],Ae=s.convert(y.format,y.colorSpace),ue=s.convert(y.type),qe=S(y.internalFormat,Ae,ue,y.colorSpace),Ne=y.isVideoTexture!==!0,nt=q.__version===void 0||$===!0,P=K.dataReady;let ie=R(y,Te);Fe(r.TEXTURE_CUBE_MAP,y);let H;if($e){Ne&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,qe,Te.width,Te.height);for(let j=0;j<6;j++){H=de[j].mipmaps;for(let le=0;le<H.length;le++){const ae=H[le];y.format!==ii?Ae!==null?Ne?P&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,qe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,ae.width,ae.height,Ae,ue,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,qe,ae.width,ae.height,0,Ae,ue,ae.data)}}}else{if(H=y.mipmaps,Ne&&nt){H.length>0&&ie++;const j=Me(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,qe,j.width,j.height)}for(let j=0;j<6;j++)if(Z){Ne?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,de[j].width,de[j].height,Ae,ue,de[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,de[j].width,de[j].height,0,Ae,ue,de[j].data);for(let le=0;le<H.length;le++){const De=H[le].image[j].image;Ne?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,De.width,De.height,Ae,ue,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,qe,De.width,De.height,0,Ae,ue,De.data)}}else{Ne?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,ue,de[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,Ae,ue,de[j]);for(let le=0;le<H.length;le++){const ae=H[le];Ne?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,Ae,ue,ae.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,qe,Ae,ue,ae.image[j])}}}m(y)&&f(r.TEXTURE_CUBE_MAP),q.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function _e(T,y,k,$,K,q){const ve=s.convert(k.format,k.colorSpace),re=s.convert(k.type),he=S(k.internalFormat,ve,re,k.colorSpace),$e=i.get(y),Z=i.get(k);if(Z.__renderTarget=y,!$e.__hasExternalTextures){const de=Math.max(1,y.width>>q),Te=Math.max(1,y.height>>q);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,q,he,de,Te,y.depth,0,ve,re,null):t.texImage2D(K,q,he,de,Te,0,ve,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),We(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,K,Z.__webglTexture,0,Ve(y)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,K,Z.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(T,y,k){if(r.bindRenderbuffer(r.RENDERBUFFER,T),y.depthBuffer){const $=y.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=v(y.stencilBuffer,K),ve=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=Ve(y);We(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,q,y.width,y.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,q,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,q,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,T)}else{const $=y.textures;for(let K=0;K<$.length;K++){const q=$[K],ve=s.convert(q.format,q.colorSpace),re=s.convert(q.type),he=S(q.internalFormat,ve,re,q.colorSpace),$e=Ve(y);k&&We(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,he,y.width,y.height):We(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,he,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,he,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const K=$.__webglTexture,q=Ve(y);if(y.depthTexture.format===as)We(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(y.depthTexture.format===ps)We(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ie(T){const y=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=$}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ee(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=r.createRenderbuffer(),se(y.__webglDepthbuffer[$],T,!1);else{const K=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,q)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),se(y.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,K)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(T,y,k){const $=i.get(T);y!==void 0&&_e($.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Ie(T)}function ut(T){const y=T.texture,k=i.get(T),$=i.get(y);T.addEventListener("dispose",E);const K=T.textures,q=T.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=y.version,a.memory.textures++),q){k.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[re]=[];for(let he=0;he<y.mipmaps.length;he++)k.__webglFramebuffer[re][he]=r.createFramebuffer()}else k.__webglFramebuffer[re]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)k.__webglFramebuffer[re]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ve)for(let re=0,he=K.length;re<he;re++){const $e=i.get(K[re]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&We(T)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const he=K[re];k.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[re]);const $e=s.convert(he.format,he.colorSpace),Z=s.convert(he.type),de=S(he.internalFormat,$e,Z,he.colorSpace,T.isXRRenderTarget===!0),Te=Ve(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,de,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,k.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),se(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)_e(k.__webglFramebuffer[re][he],T,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else _e(k.__webglFramebuffer[re],T,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(y)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,he=K.length;re<he;re++){const $e=K[re],Z=i.get($e);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture),Fe(r.TEXTURE_2D,$e),_e(k.__webglFramebuffer,T,$e,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,0),m($e)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),Fe(re,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)_e(k.__webglFramebuffer[he],T,y,r.COLOR_ATTACHMENT0,re,he);else _e(k.__webglFramebuffer,T,y,r.COLOR_ATTACHMENT0,re,0);m(y)&&f(re),t.unbindTexture()}T.depthBuffer&&Ie(T)}function Xe(T){const y=T.textures;for(let k=0,$=y.length;k<$;k++){const K=y[k];if(m(K)){const q=x(T),ve=i.get(K).__webglTexture;t.bindTexture(q,ve),f(q),t.unbindTexture()}}}const mt=[],N=[];function Kt(T){if(T.samples>0){if(We(T)===!1){const y=T.textures,k=T.width,$=T.height;let K=r.COLOR_BUFFER_BIT;const q=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=i.get(T),re=y.length>1;if(re)for(let he=0;he<y.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<y.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const $e=i.get(y[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$e,0)}r.blitFramebuffer(0,0,k,$,0,0,k,$,K,r.NEAREST),l===!0&&(mt.length=0,N.length=0,mt.push(r.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.resolveDepthBuffer===!1&&(mt.push(q),N.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<y.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const $e=i.get(y[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,$e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Ve(T){return Math.min(n.maxSamples,T.samples)}function We(T){const y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function we(T){const y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function at(T,y){const k=T.colorSpace,$=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Nt&&k!==rn&&(Ge.getTransfer(k)===tt?($!==ii||K!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=ze,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=We}function s_(r,e){function t(i,n=rn){let s;const a=Ge.getTransfer(n);if(i===qi)return r.UNSIGNED_BYTE;if(i===rl)return r.UNSIGNED_SHORT_4_4_4_4;if(i===al)return r.UNSIGNED_SHORT_5_5_5_1;if(i===zh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return r.BYTE;if(i===Fh)return r.SHORT;if(i===js)return r.UNSIGNED_SHORT;if(i===sl)return r.INT;if(i===En)return r.UNSIGNED_INT;if(i===fi)return r.FLOAT;if(i===Gi)return r.HALF_FLOAT;if(i===Hh)return r.ALPHA;if(i===Gh)return r.RGB;if(i===ii)return r.RGBA;if(i===Vh)return r.LUMINANCE;if(i===Wh)return r.LUMINANCE_ALPHA;if(i===as)return r.DEPTH_COMPONENT;if(i===ps)return r.DEPTH_STENCIL;if(i===ol)return r.RED;if(i===ll)return r.RED_INTEGER;if(i===qh)return r.RG;if(i===cl)return r.RG_INTEGER;if(i===hl)return r.RGBA_INTEGER;if(i===Wr||i===qr||i===Xr||i===$r)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yo||i===xo||i===bo||i===So)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===So)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mo||i===wo||i===To)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mo||i===wo)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===To)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Eo||i===Ao||i===Co||i===Ro||i===Io||i===Do||i===Po||i===Lo||i===Uo||i===No||i===ko||i===Oo||i===Bo||i===Fo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Eo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ao)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Co)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ro)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Io)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Do)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Po)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===No)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ko)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jr||i===zo||i===Ho)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===jr)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xh||i===Go||i===Vo||i===Wo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Go)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class r_ extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ct extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a_={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class c_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new bt,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new _t({vertexShader:o_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h_ extends Cn{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=new c_,m=t.getContextAttributes();let f=null,x=null;const S=[],v=[],R=new Se;let A=null;const E=new Bt;E.viewport=new Ye;const D=new Bt;D.viewport=new Ye;const w=[E,D],b=new r_;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=S[X];return ee===void 0&&(ee=new Ga,S[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=S[X];return ee===void 0&&(ee=new Ga,S[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=S[X];return ee===void 0&&(ee=new Ga,S[X]=ee),ee.getHandSpace()};function F(X){const ee=v.indexOf(X.inputSource);if(ee===-1)return;const _e=S[ee];_e!==void 0&&(_e.update(X.inputSource,X.frame,c||a),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",Y);for(let X=0;X<S.length;X++){const ee=v[X];ee!==null&&(v[X]=null,S[X].disconnect(ee))}I=null,z=null,_.reset(),e.setRenderTarget(f),p=null,u=null,d=null,n=null,x=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",W),n.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),n.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,ee),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new gi(p.framebufferWidth,p.framebufferHeight,{format:ii,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,_e=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?ps:as,_e=m.stencil?us:En);const Ee={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Ee),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new gi(u.textureWidth,u.textureHeight,{format:ii,type:qi,depthTexture:new cd(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),it.setContext(n),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(X){for(let ee=0;ee<X.removed.length;ee++){const _e=X.removed[ee],se=v.indexOf(_e);se>=0&&(v[se]=null,S[se].disconnect(_e))}for(let ee=0;ee<X.added.length;ee++){const _e=X.added[ee];let se=v.indexOf(_e);if(se===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=v.length){v.push(_e),se=Ie;break}else if(v[Ie]===null){v[Ie]=_e,se=Ie;break}if(se===-1)break}const Ee=S[se];Ee&&Ee.connect(_e)}}const V=new C,J=new C;function G(X,ee,_e){V.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(_e.matrixWorld);const se=V.distanceTo(J),Ee=ee.projectionMatrix.elements,Ie=_e.projectionMatrix.elements,ze=Ee[14]/(Ee[10]-1),ut=Ee[14]/(Ee[10]+1),Xe=(Ee[9]+1)/Ee[5],mt=(Ee[9]-1)/Ee[5],N=(Ee[8]-1)/Ee[0],Kt=(Ie[8]+1)/Ie[0],Ve=ze*N,We=ze*Kt,we=se/(-N+Kt),at=we*-N;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(at),X.translateZ(we),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ee[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Me=ze+we,T=ut+we,y=Ve-at,k=We+(se-at),$=Xe*ut/T*Me,K=mt*ut/T*Me;X.projectionMatrix.makePerspective(y,k,$,K,Me,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ne(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let ee=X.near,_e=X.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),b.near=D.near=E.near=ee,b.far=D.far=E.far=_e,(I!==b.near||z!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,z=b.far),E.layers.mask=X.layers.mask|2,D.layers.mask=X.layers.mask|4,b.layers.mask=E.layers.mask|D.layers.mask;const se=X.parent,Ee=b.cameras;ne(b,se);for(let Ie=0;Ie<Ee.length;Ie++)ne(Ee[Ie],se);Ee.length===2?G(b,E,D):b.projectionMatrix.copy(E.projectionMatrix),ce(X,b,se)};function ce(X,ee,_e){_e===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let xe=null;function Fe(X,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let se=!1;_e.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let Ie=0;Ie<_e.length;Ie++){const ze=_e[Ie];let ut=null;if(p!==null)ut=p.getViewport(ze);else{const mt=d.getViewSubImage(u,ze);ut=mt.viewport,Ie===0&&(e.setRenderTargetTextures(x,mt.colorTexture,u.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(x))}let Xe=w[Ie];Xe===void 0&&(Xe=new Bt,Xe.layers.enable(Ie),Xe.viewport=new Ye,w[Ie]=Xe),Xe.matrix.fromArray(ze.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ze.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ut.x,ut.y,ut.width,ut.height),Ie===0&&(b.matrix.copy(Xe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(Xe)}const Ee=n.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Ie=d.getDepthInformation(_e[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,n.renderState)}}for(let _e=0;_e<S.length;_e++){const se=v[_e],Ee=S[_e];se!==null&&Ee!==void 0&&Ee.update(se,ee,c||a)}xe&&xe(X,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const it=new ld;it.setAnimationLoop(Fe),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const _n=new Si,d_=new Ue;function u_(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,rd(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,x,S,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),S=x.envMap,v=x.envMapRotation;S&&(m.envMap.value=S,_n.copy(v),_n.x*=-1,_n.y*=-1,_n.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_n.y*=-1,_n.z*=-1),m.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(_n)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function p_(r,e,t,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const v=S.program;i.uniformBlockBinding(x,v)}function c(x,S){let v=n[x.id];v===void 0&&(g(x),v=h(x),n[x.id]=v,x.addEventListener("dispose",m));const R=S.program;i.updateUBOMapping(x,R);const A=e.render.frame;s[x.id]!==A&&(u(x),s[x.id]=A)}function h(x){const S=d();x.__bindingPointIndex=S;const v=r.createBuffer(),R=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const S=n[x.id],v=x.uniforms,R=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,E=v.length;A<E;A++){const D=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,b=D.length;w<b;w++){const I=D[w];if(p(I,A,w,R)===!0){const z=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let Y=0;Y<F.length;Y++){const V=F[Y],J=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,z+W,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(x,S,v,R){const A=x.value,E=S+"_"+v;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const D=R[E];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[E]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(x){const S=x.uniforms;let v=0;const R=16;for(let E=0,D=S.length;E<D;E++){const w=Array.isArray(S[E])?S[E]:[S[E]];for(let b=0,I=w.length;b<I;b++){const z=w[b],F=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Y=F.length;W<Y;W++){const V=F[W],J=_(V),G=v%R,ne=G%J.boundary,ce=G+ne;v+=ne,ce!==0&&R-ce<J.storage&&(v+=R-ce),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=J.storage}}}const A=v%R;return A>0&&(v+=R-A),x.__size=v,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function f(){for(const x in n)r.deleteBuffer(n[x]);a=[],n={},s={}}return{bind:l,update:c,dispose:f}}class f_{constructor(e={}){const{canvas:t=ip(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const x=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this.toneMapping=ln,this.toneMappingExposure=1;const v=this;let R=!1,A=0,E=0,D=null,w=-1,b=null;const I=new Ye,z=new Ye;let F=null;const W=new pe(0);let Y=0,V=t.width,J=t.height,G=1,ne=null,ce=null;const xe=new Ye(0,0,V,J),Fe=new Ye(0,0,V,J);let it=!1;const X=new pl;let ee=!1,_e=!1;const se=new Ue,Ee=new Ue,Ie=new C,ze=new Ye,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function mt(){return D===null?G:1}let N=i;function Kt(M,L){return t.getContext(M,L)}try{const M={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){const L="webgl2";if(N=Kt(L,M),N===null)throw Kt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ve,We,we,at,Me,T,y,k,$,K,q,ve,re,he,$e,Z,de,Te,Ae,ue,qe,Ne,nt,P;function ie(){Ve=new y0(N),Ve.init(),Ne=new s_(N,Ve),We=new p0(N,Ve,e,Ne),we=new t_(N,Ve),We.reverseDepthBuffer&&u&&we.buffers.depth.setReversed(!0),at=new S0(N),Me=new zg,T=new n_(N,Ve,we,Me,We,Ne,at),y=new m0(v),k=new v0(v),$=new Cp(N),nt=new d0(N,$),K=new x0(N,$,at,nt),q=new w0(N,K,$,at),Ae=new M0(N,We,T),Z=new f0(Me),ve=new Fg(v,y,k,Ve,We,nt,Z),re=new u_(v,Me),he=new Gg,$e=new jg(Ve),Te=new h0(v,y,k,we,q,p,l),de=new Qg(v,q,We),P=new p_(N,at,We,we),ue=new u0(N,Ve,at),qe=new b0(N,Ve,at),at.programs=ve.programs,v.capabilities=We,v.extensions=Ve,v.properties=Me,v.renderLists=he,v.shadowMap=de,v.state=we,v.info=at}ie();const H=new h_(v,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(V,J,!1))},this.getSize=function(M){return M.set(V,J)},this.setSize=function(M,L,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,J=L,t.width=Math.floor(M*G),t.height=Math.floor(L*G),O===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(V*G,J*G).floor()},this.setDrawingBufferSize=function(M,L,O){V=M,J=L,G=O,t.width=Math.floor(M*O),t.height=Math.floor(L*O),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(xe)},this.setViewport=function(M,L,O,B){M.isVector4?xe.set(M.x,M.y,M.z,M.w):xe.set(M,L,O,B),we.viewport(I.copy(xe).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,L,O,B){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,L,O,B),we.scissor(z.copy(Fe).multiplyScalar(G).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(M){we.setScissorTest(it=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(M=!0,L=!0,O=!0){let B=0;if(M){let U=!1;if(D!==null){const Q=D.texture.format;U=Q===hl||Q===cl||Q===ll}if(U){const Q=D.texture.type,oe=Q===qi||Q===En||Q===js||Q===us||Q===rl||Q===al,fe=Te.getClearColor(),me=Te.getClearAlpha(),Ce=fe.r,Pe=fe.g,ge=fe.b;oe?(g[0]=Ce,g[1]=Pe,g[2]=ge,g[3]=me,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ce,_[1]=Pe,_[2]=ge,_[3]=me,N.clearBufferiv(N.COLOR,0,_))}else B|=N.COLOR_BUFFER_BIT}L&&(B|=N.DEPTH_BUFFER_BIT),O&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),$e.dispose(),Me.dispose(),y.dispose(),k.dispose(),q.dispose(),nt.dispose(),P.dispose(),ve.dispose(),H.dispose(),H.removeEventListener("sessionstart",Tl),H.removeEventListener("sessionend",El),dn.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=at.autoReset,L=de.enabled,O=de.autoUpdate,B=de.needsUpdate,U=de.type;ie(),at.autoReset=M,de.enabled=L,de.autoUpdate=O,de.needsUpdate=B,de.type=U}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function De(M){const L=M.target;L.removeEventListener("dispose",De),ft(L)}function ft(M){It(M),Me.remove(M)}function It(M){const L=Me.get(M).programs;L!==void 0&&(L.forEach(function(O){ve.releaseProgram(O)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,O,B,U,Q){L===null&&(L=ut);const oe=U.isMesh&&U.matrixWorld.determinant()<0,fe=jd(M,L,O,B,U);we.setMaterial(B,oe);let me=O.index,Ce=1;if(B.wireframe===!0){if(me=K.getWireframeAttribute(O),me===void 0)return;Ce=2}const Pe=O.drawRange,ge=O.attributes.position;let je=Pe.start*Ce,st=(Pe.start+Pe.count)*Ce;Q!==null&&(je=Math.max(je,Q.start*Ce),st=Math.min(st,(Q.start+Q.count)*Ce)),me!==null?(je=Math.max(je,0),st=Math.min(st,me.count)):ge!=null&&(je=Math.max(je,0),st=Math.min(st,ge.count));const ot=st-je;if(ot<0||ot===1/0)return;nt.setup(U,B,fe,O,me);let Gt,Ke=ue;if(me!==null&&(Gt=$.get(me),Ke=qe,Ke.setIndex(Gt)),U.isMesh)B.wireframe===!0?(we.setLineWidth(B.wireframeLinewidth*mt()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(U.isLine){let ye=B.linewidth;ye===void 0&&(ye=1),we.setLineWidth(ye*mt()),U.isLineSegments?Ke.setMode(N.LINES):U.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else U.isPoints?Ke.setMode(N.POINTS):U.isSprite&&Ke.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ye=U._multiDrawStarts,Ai=U._multiDrawCounts,Je=U._multiDrawCount,ri=me?$.get(me).bytesPerElement:1,In=Me.get(B).currentProgram.getUniforms();for(let Wt=0;Wt<Je;Wt++)In.setValue(N,"_gl_DrawID",Wt),Ke.render(ye[Wt]/ri,Ai[Wt])}else if(U.isInstancedMesh)Ke.renderInstances(je,ot,U.count);else if(O.isInstancedBufferGeometry){const ye=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ai=Math.min(O.instanceCount,ye);Ke.renderInstances(je,ot,Ai)}else Ke.render(je,ot)};function Qe(M,L,O){M.transparent===!0&&M.side===jt&&M.forceSinglePass===!1?(M.side=zt,M.needsUpdate=!0,or(M,L,O),M.side=Wi,M.needsUpdate=!0,or(M,L,O),M.side=jt):or(M,L,O)}this.compile=function(M,L,O=null){O===null&&(O=M),f=$e.get(O),f.init(L),S.push(f),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==O&&M.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const B=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const fe=Q[oe];Qe(fe,O,U),B.add(fe)}else Qe(Q,O,U),B.add(Q)}),S.pop(),f=null,B},this.compileAsync=function(M,L,O=null){const B=this.compile(M,L,O);return new Promise(U=>{function Q(){if(B.forEach(function(oe){Me.get(oe).currentProgram.isReady()&&B.delete(oe)}),B.size===0){U(M);return}setTimeout(Q,10)}Ve.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let si=null;function Ei(M){si&&si(M)}function Tl(){dn.stop()}function El(){dn.start()}const dn=new ld;dn.setAnimationLoop(Ei),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(M){si=M,H.setAnimationLoop(M),M===null?dn.stop():dn.start()},H.addEventListener("sessionstart",Tl),H.addEventListener("sessionend",El),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(L),L=H.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,L,D),f=$e.get(M,S.length),f.init(L),S.push(f),Ee.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(Ee),_e=this.localClippingEnabled,ee=Z.init(this.clippingPlanes,_e),m=he.get(M,x.length),m.init(),x.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&fa(Q,L,-1/0,v.sortObjects)}fa(M,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,ce),Xe=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Xe&&Te.addToRenderList(m,M),this.info.render.frame++,ee===!0&&Z.beginShadows();const O=f.state.shadowsArray;de.render(O,M,L),ee===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(f.setupLights(),L.isArrayCamera){const Q=L.cameras;if(U.length>0)for(let oe=0,fe=Q.length;oe<fe;oe++){const me=Q[oe];Cl(B,U,M,me)}Xe&&Te.render(M);for(let oe=0,fe=Q.length;oe<fe;oe++){const me=Q[oe];Al(m,M,me,me.viewport)}}else U.length>0&&Cl(B,U,M,L),Xe&&Te.render(M),Al(m,M,L);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(v,M,L),nt.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(f=S[S.length-1],ee===!0&&Z.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function fa(M,L,O,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){B&&ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const oe=q.update(M),fe=M.material;fe.visible&&m.push(M,oe,fe,O,ze.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||X.intersectsObject(M))){const oe=q.update(M),fe=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ze.copy(M.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),ze.copy(oe.boundingSphere.center)),ze.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(fe)){const me=oe.groups;for(let Ce=0,Pe=me.length;Ce<Pe;Ce++){const ge=me[Ce],je=fe[ge.materialIndex];je&&je.visible&&m.push(M,oe,je,O,ze.z,ge)}}else fe.visible&&m.push(M,oe,fe,O,ze.z,null)}}const Q=M.children;for(let oe=0,fe=Q.length;oe<fe;oe++)fa(Q[oe],L,O,B)}function Al(M,L,O,B){const U=M.opaque,Q=M.transmissive,oe=M.transparent;f.setupLightsView(O),ee===!0&&Z.setGlobalState(v.clippingPlanes,O),B&&we.viewport(I.copy(B)),U.length>0&&ar(U,L,O),Q.length>0&&ar(Q,L,O),oe.length>0&&ar(oe,L,O),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Cl(M,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new gi(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Gi:qi,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const Q=f.state.transmissionRenderTarget[B.id],oe=B.viewport||I;Q.setSize(oe.z,oe.w);const fe=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(W),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&Te.render(O);const me=v.toneMapping;v.toneMapping=ln;const Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),ee===!0&&Z.setGlobalState(v.clippingPlanes,B),ar(M,O,B),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ge=0,je=L.length;ge<je;ge++){const st=L[ge],ot=st.object,Gt=st.geometry,Ke=st.material,ye=st.group;if(Ke.side===jt&&ot.layers.test(B.layers)){const Ai=Ke.side;Ke.side=zt,Ke.needsUpdate=!0,Rl(ot,O,B,Gt,Ke,ye),Ke.side=Ai,Ke.needsUpdate=!0,Pe=!0}}Pe===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}v.setRenderTarget(fe),v.setClearColor(W,Y),Ce!==void 0&&(B.viewport=Ce),v.toneMapping=me}function ar(M,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let U=0,Q=M.length;U<Q;U++){const oe=M[U],fe=oe.object,me=oe.geometry,Ce=B===null?oe.material:B,Pe=oe.group;fe.layers.test(O.layers)&&Rl(fe,L,O,me,Ce,Pe)}}function Rl(M,L,O,B,U,Q){M.onBeforeRender(v,L,O,B,U,Q),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(v,L,O,B,M,Q),U.transparent===!0&&U.side===jt&&U.forceSinglePass===!1?(U.side=zt,U.needsUpdate=!0,v.renderBufferDirect(O,L,B,U,M,Q),U.side=Wi,U.needsUpdate=!0,v.renderBufferDirect(O,L,B,U,M,Q),U.side=jt):v.renderBufferDirect(O,L,B,U,M,Q),M.onAfterRender(v,L,O,B,U,Q)}function or(M,L,O){L.isScene!==!0&&(L=ut);const B=Me.get(M),U=f.state.lights,Q=f.state.shadowsArray,oe=U.state.version,fe=ve.getParameters(M,U.state,Q,L,O),me=ve.getProgramCacheKey(fe);let Ce=B.programs;B.environment=M.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(M.isMeshStandardMaterial?k:y).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",De),Ce=new Map,B.programs=Ce);let Pe=Ce.get(me);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===oe)return Dl(M,fe),Pe}else fe.uniforms=ve.getUniforms(M),M.onBeforeCompile(fe,v),Pe=ve.acquireProgram(fe,me),Ce.set(me,Pe),B.uniforms=fe.uniforms;const ge=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ge.clippingPlanes=Z.uniform),Dl(M,fe),B.needsLights=Kd(M),B.lightsStateVersion=oe,B.needsLights&&(ge.ambientLightColor.value=U.state.ambient,ge.lightProbe.value=U.state.probe,ge.directionalLights.value=U.state.directional,ge.directionalLightShadows.value=U.state.directionalShadow,ge.spotLights.value=U.state.spot,ge.spotLightShadows.value=U.state.spotShadow,ge.rectAreaLights.value=U.state.rectArea,ge.ltc_1.value=U.state.rectAreaLTC1,ge.ltc_2.value=U.state.rectAreaLTC2,ge.pointLights.value=U.state.point,ge.pointLightShadows.value=U.state.pointShadow,ge.hemisphereLights.value=U.state.hemi,ge.directionalShadowMap.value=U.state.directionalShadowMap,ge.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ge.spotShadowMap.value=U.state.spotShadowMap,ge.spotLightMatrix.value=U.state.spotLightMatrix,ge.spotLightMap.value=U.state.spotLightMap,ge.pointShadowMap.value=U.state.pointShadowMap,ge.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function Il(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Yr.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Dl(M,L){const O=Me.get(M);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function jd(M,L,O,B,U){L.isScene!==!0&&(L=ut),T.resetTextureUnits();const Q=L.fog,oe=B.isMeshStandardMaterial?L.environment:null,fe=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Nt,me=(B.isMeshStandardMaterial?k:y).get(B.envMap||oe),Ce=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ge=!!O.morphAttributes.position,je=!!O.morphAttributes.normal,st=!!O.morphAttributes.color;let ot=ln;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ot=v.toneMapping);const Gt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ke=Gt!==void 0?Gt.length:0,ye=Me.get(B),Ai=f.state.lights;if(ee===!0&&(_e===!0||M!==b)){const Jt=M===b&&B.id===w;Z.setState(B,M,Jt)}let Je=!1;B.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Ai.state.version||ye.outputColorSpace!==fe||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==me||B.fog===!0&&ye.fog!==Q||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Z.numPlanes||ye.numIntersection!==Z.numIntersection)||ye.vertexAlphas!==Ce||ye.vertexTangents!==Pe||ye.morphTargets!==ge||ye.morphNormals!==je||ye.morphColors!==st||ye.toneMapping!==ot||ye.morphTargetsCount!==Ke)&&(Je=!0):(Je=!0,ye.__version=B.version);let ri=ye.currentProgram;Je===!0&&(ri=or(B,L,U));let In=!1,Wt=!1,Es=!1;const lt=ri.getUniforms(),vi=ye.uniforms;if(we.useProgram(ri.program)&&(In=!0,Wt=!0,Es=!0),B.id!==w&&(w=B.id,Wt=!0),In||b!==M){we.buffers.depth.getReversed()?(se.copy(M.projectionMatrix),sp(se),rp(se),lt.setValue(N,"projectionMatrix",se)):lt.setValue(N,"projectionMatrix",M.projectionMatrix),lt.setValue(N,"viewMatrix",M.matrixWorldInverse);const ji=lt.map.cameraPosition;ji!==void 0&&ji.setValue(N,Ie.setFromMatrixPosition(M.matrixWorld)),We.logarithmicDepthBuffer&&lt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Wt=!0,Es=!0)}if(U.isSkinnedMesh){lt.setOptional(N,U,"bindMatrix"),lt.setOptional(N,U,"bindMatrixInverse");const Jt=U.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),lt.setValue(N,"boneTexture",Jt.boneTexture,T))}U.isBatchedMesh&&(lt.setOptional(N,U,"batchingTexture"),lt.setValue(N,"batchingTexture",U._matricesTexture,T),lt.setOptional(N,U,"batchingIdTexture"),lt.setValue(N,"batchingIdTexture",U._indirectTexture,T),lt.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(N,"batchingColorTexture",U._colorsTexture,T));const As=O.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Ae.update(U,O,ri),(Wt||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,lt.setValue(N,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(vi.envMap.value=me,vi.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(vi.envMapIntensity.value=L.environmentIntensity),Wt&&(lt.setValue(N,"toneMappingExposure",v.toneMappingExposure),ye.needsLights&&Yd(vi,Es),Q&&B.fog===!0&&re.refreshFogUniforms(vi,Q),re.refreshMaterialUniforms(vi,B,G,J,f.state.transmissionRenderTarget[M.id]),Yr.upload(N,Il(ye),vi,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Yr.upload(N,Il(ye),vi,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(N,"center",U.center),lt.setValue(N,"modelViewMatrix",U.modelViewMatrix),lt.setValue(N,"normalMatrix",U.normalMatrix),lt.setValue(N,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Jt=B.uniformsGroups;for(let ji=0,Yi=Jt.length;ji<Yi;ji++){const Pl=Jt[ji];P.update(Pl,ri),P.bind(Pl,ri)}}return ri}function Yd(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Kd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,L,O){Me.get(M.texture).__webglTexture=L,Me.get(M.depthTexture).__webglTexture=O;const B=Me.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const O=Me.get(M);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,O=0){D=M,A=L,E=O;let B=!0,U=null,Q=!1,oe=!1;if(M){const me=Me.get(M);if(me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(me.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(me.__hasExternalTextures)T.rebindTextures(M,Me.get(M.texture).__webglTexture,Me.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ge=M.depthTexture;if(me.__boundDepthTexture!==ge){if(ge!==null&&Me.has(ge)&&(M.width!==ge.image.width||M.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(oe=!0);const Pe=Me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[L])?U=Pe[L][O]:U=Pe[L],Q=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?U=Me.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[O]:U=Pe,I.copy(M.viewport),z.copy(M.scissor),F=M.scissorTest}else I.copy(xe).multiplyScalar(G).floor(),z.copy(Fe).multiplyScalar(G).floor(),F=it;if(we.bindFramebuffer(N.FRAMEBUFFER,U)&&B&&we.drawBuffers(M,U),we.viewport(I),we.scissor(z),we.setScissorTest(F),Q){const me=Me.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,O)}else if(oe){const me=Me.get(M.texture),Ce=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.__webglTexture,O||0,Ce)}w=-1},this.readRenderTargetPixels=function(M,L,O,B,U,Q,oe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){we.bindFramebuffer(N.FRAMEBUFFER,fe);try{const me=M.texture,Ce=me.format,Pe=me.type;if(!We.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&O>=0&&O<=M.height-U&&N.readPixels(L,O,B,U,Ne.convert(Ce),Ne.convert(Pe),Q)}finally{const me=D!==null?Me.get(D).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,L,O,B,U,Q,oe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){const me=M.texture,Ce=me.format,Pe=me.type;if(!We.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-B&&O>=0&&O<=M.height-U){we.bindFramebuffer(N.FRAMEBUFFER,fe);const ge=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ge),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(L,O,B,U,Ne.convert(Ce),Ne.convert(Pe),0);const je=D!==null?Me.get(D).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,je);const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await np(N,st,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ge),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(ge),N.deleteSync(st),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,O=0){M.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-O),U=Math.floor(M.image.width*B),Q=Math.floor(M.image.height*B),oe=L!==null?L.x:0,fe=L!==null?L.y:0;T.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,oe,fe,U,Q),we.unbindTexture()},this.copyTextureToTexture=function(M,L,O=null,B=null,U=0){M.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],L=arguments[2],U=arguments[3]||0,O=null);let Q,oe,fe,me,Ce,Pe,ge,je,st;const ot=M.isCompressedTexture?M.mipmaps[U]:M.image;O!==null?(Q=O.max.x-O.min.x,oe=O.max.y-O.min.y,fe=O.isBox3?O.max.z-O.min.z:1,me=O.min.x,Ce=O.min.y,Pe=O.isBox3?O.min.z:0):(Q=ot.width,oe=ot.height,fe=ot.depth||1,me=0,Ce=0,Pe=0),B!==null?(ge=B.x,je=B.y,st=B.z):(ge=0,je=0,st=0);const Gt=Ne.convert(L.format),Ke=Ne.convert(L.type);let ye;L.isData3DTexture?(T.setTexture3D(L,0),ye=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),ye=N.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),ye=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const Ai=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ri=N.getParameter(N.UNPACK_SKIP_PIXELS),In=N.getParameter(N.UNPACK_SKIP_ROWS),Wt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ot.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,me),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ce),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe);const Es=M.isDataArrayTexture||M.isData3DTexture,lt=L.isDataArrayTexture||L.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const vi=Me.get(M),As=Me.get(L),Jt=Me.get(vi.__renderTarget),ji=Me.get(As.__renderTarget);we.bindFramebuffer(N.READ_FRAMEBUFFER,Jt.__webglFramebuffer),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Yi=0;Yi<fe;Yi++)Es&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(M).__webglTexture,U,Pe+Yi),M.isDepthTexture?(lt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(L).__webglTexture,U,st+Yi),N.blitFramebuffer(me,Ce,Q,oe,ge,je,Q,oe,N.DEPTH_BUFFER_BIT,N.NEAREST)):lt?N.copyTexSubImage3D(ye,U,ge,je,st+Yi,me,Ce,Q,oe):N.copyTexSubImage2D(ye,U,ge,je,st+Yi,me,Ce,Q,oe);we.bindFramebuffer(N.READ_FRAMEBUFFER,null),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else lt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(ye,U,ge,je,st,Q,oe,fe,Gt,Ke,ot.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,U,ge,je,st,Q,oe,fe,Gt,ot.data):N.texSubImage3D(ye,U,ge,je,st,Q,oe,fe,Gt,Ke,ot):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,ge,je,Q,oe,Gt,Ke,ot.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,ge,je,ot.width,ot.height,Gt,ot.data):N.texSubImage2D(N.TEXTURE_2D,U,ge,je,Q,oe,Gt,Ke,ot);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ai),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ri),N.pixelStorei(N.UNPACK_SKIP_ROWS,In),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Wt),U===0&&L.generateMipmaps&&N.generateMipmap(ye),we.unbindTexture()},this.copyTextureToTexture3D=function(M,L,O=null,B=null,U=0){return M.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,M=arguments[2],L=arguments[3],U=arguments[4]||0),zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,L,O,B,U)},this.initRenderTarget=function(M){Me.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){A=0,E=0,D=null,we.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}class ml{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ia{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=i}clone(){return new ia(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class m_ extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class g_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xo,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new C;class gl{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Be(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Dc=new C,Pc=new Ye,Lc=new Ye,__=new C,Uc=new Ue,Cr=new C,Va=new Mi,Nc=new Ue,Wa=new la;class v_ extends be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kl,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _i),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cr),this.boundingBox.expandByPoint(Cr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cr),this.boundingSphere.expandByPoint(Cr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(n),e.ray.intersectsSphere(Va)!==!1&&(Nc.copy(n).invert(),Wa.copy(e.ray).applyMatrix4(Nc),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Pc.fromBufferAttribute(n.attributes.skinIndex,e),Lc.fromBufferAttribute(n.attributes.skinWeight,e),Dc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Lc.getComponent(s);if(a!==0){const o=Pc.getComponent(s);Uc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(__.copy(Dc).applyMatrix4(Uc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fd extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class md extends bt{constructor(e=null,t=1,i=1,n,s,a,o,l,c=Ht,h=Ht,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kc=new Ue,y_=new Ue;class _l{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:y_;kc.multiplyMatrices(o,t[s]),kc.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new _l(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new md(t,e,e,ii,fi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new fd),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class jo extends Be{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qn=new Ue,Oc=new Ue,Rr=[],Bc=new _i,x_=new Ue,Ps=new be,Ls=new Mi;class b_ extends be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,x_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qn),Bc.copy(e.boundingBox).applyMatrix4(qn),this.boundingBox.union(Bc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qn),Ls.copy(e.boundingSphere).applyMatrix4(qn),this.boundingSphere.union(Ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(i),e.ray.intersectsSphere(Ls)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,qn),Oc.multiplyMatrices(i,qn),Ps.matrixWorld=Oc,Ps.raycast(e,Rr);for(let a=0,o=Rr.length;a<o;a++){const l=Rr[a];l.instanceId=s,l.object=this,t.push(l)}Rr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new md(new Float32Array(n*this.count),n,this.count,ol,fi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class gd extends bi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new C,sa=new C,Fc=new Ue,Us=new la,Ir=new Mi,qa=new C,zc=new C;class vl extends dt{constructor(e=new pt,t=new gd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)na.fromBufferAttribute(t,n-1),sa.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=na.distanceTo(sa);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(n),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;Fc.copy(n).invert(),Us.copy(e.ray).applyMatrix4(Fc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),x=h.getX(_+1),S=Dr(this,e,Us,l,f,x);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Dr(this,e,Us,l,_,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=Dr(this,e,Us,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=Dr(this,e,Us,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Dr(r,e,t,i,n,s){const a=r.geometry.attributes.position;if(na.fromBufferAttribute(a,n),sa.fromBufferAttribute(a,s),t.distanceSqToSegment(na,sa,qa,zc)>i)return;qa.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(qa);if(!(l<e.near||l>e.far))return{distance:l,point:zc.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}const Hc=new C,Gc=new C;class S_ extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Hc.fromBufferAttribute(t,n),Gc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Hc.distanceTo(Gc);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class M_ extends vl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _d extends bi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vc=new Ue,Yo=new la,Pr=new Mi,Lr=new C;class wn extends dt{constructor(e=new pt,t=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(n),Pr.radius+=s,e.ray.intersectsSphere(Pr)===!1)return;Vc.copy(n).invert(),Yo.copy(e.ray).applyMatrix4(Vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,_=p;g<_;g++){const m=c.getX(g);Lr.fromBufferAttribute(d,m),Wc(Lr,m,l,n,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,_=p;g<_;g++)Lr.fromBufferAttribute(d,g),Wc(Lr,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wc(r,e,t,i,n,s,a){const o=Yo.distanceSqToPoint(r);if(o<t){const l=new C;Yo.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Xi extends bt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zs extends pt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new C,h=new Se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=i+d/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qs extends pt{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=i/2;let f=0;x(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(p,2));function x(){const v=new C,R=new C;let A=0;const E=(t-e)/i;for(let D=0;D<=s;D++){const w=[],b=D/s,I=b*(t-e)+e;for(let z=0;z<=n;z++){const F=z/n,W=F*l+o,Y=Math.sin(W),V=Math.cos(W);R.x=I*Y,R.y=-b*i+m,R.z=I*V,d.push(R.x,R.y,R.z),v.set(Y,E,V).normalize(),u.push(v.x,v.y,v.z),p.push(F,1-b),w.push(g++)}_.push(w)}for(let D=0;D<n;D++)for(let w=0;w<s;w++){const b=_[w][D],I=_[w+1][D],z=_[w+1][D+1],F=_[w][D+1];(e>0||w!==0)&&(h.push(b,I,F),A+=3),(t>0||w!==s-1)&&(h.push(I,z,F),A+=3)}c.addGroup(f,A,0),f+=A}function S(v){const R=g,A=new Se,E=new C;let D=0;const w=v===!0?e:t,b=v===!0?1:-1;for(let z=1;z<=n;z++)d.push(0,m*b,0),u.push(0,b,0),p.push(.5,.5),g++;const I=g;for(let z=0;z<=n;z++){const W=z/n*l+o,Y=Math.cos(W),V=Math.sin(W);E.x=w*V,E.y=m*b,E.z=w*Y,d.push(E.x,E.y,E.z),u.push(0,b,0),A.x=Y*.5+.5,A.y=V*.5*b+.5,p.push(A.x,A.y),g++}for(let z=0;z<n;z++){const F=R+z,W=I+z;v===!0?h.push(W,W+1,F):h.push(W+1,W,F),D+=3}c.addGroup(f,D,v===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class da extends Qs{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new da(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yl extends pt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const S=new C,v=new C,R=new C;for(let A=0;A<t.length;A+=3)p(t[A+0],S),p(t[A+1],v),p(t[A+2],R),l(S,v,R,x)}function l(x,S,v,R){const A=R+1,E=[];for(let D=0;D<=A;D++){E[D]=[];const w=x.clone().lerp(v,D/A),b=S.clone().lerp(v,D/A),I=A-D;for(let z=0;z<=I;z++)z===0&&D===A?E[D][z]=w:E[D][z]=w.clone().lerp(b,z/I)}for(let D=0;D<A;D++)for(let w=0;w<2*(A-D)-1;w++){const b=Math.floor(w/2);w%2===0?(u(E[D][b+1]),u(E[D+1][b]),u(E[D][b])):(u(E[D][b+1]),u(E[D+1][b+1]),u(E[D+1][b]))}}function c(x){const S=new C;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(x),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function h(){const x=new C;for(let S=0;S<s.length;S+=3){x.x=s[S+0],x.y=s[S+1],x.z=s[S+2];const v=m(x)/2/Math.PI+.5,R=f(x)/Math.PI+.5;a.push(v,1-R)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){const S=a[x+0],v=a[x+2],R=a[x+4],A=Math.max(S,v,R),E=Math.min(S,v,R);A>.9&&E<.1&&(S<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function p(x,S){const v=x*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const x=new C,S=new C,v=new C,R=new C,A=new Se,E=new Se,D=new Se;for(let w=0,b=0;w<s.length;w+=9,b+=6){x.set(s[w+0],s[w+1],s[w+2]),S.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),A.set(a[b+0],a[b+1]),E.set(a[b+2],a[b+3]),D.set(a[b+4],a[b+5]),R.copy(x).add(S).add(v).divideScalar(3);const I=m(R);_(A,b+0,x,I),_(E,b+2,S,I),_(D,b+4,v,I)}}function _(x,S,v,R){R<0&&x.x===1&&(a[S]=x.x-1),v.x===0&&v.z===0&&(a[S]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.vertices,e.indices,e.radius,e.details)}}class qs extends yl{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qs(e.radius,e.detail)}}class ua extends pt{constructor(e=.5,t=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/n,p=new C,g=new Se;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<n;_++){const m=_*(i+1);for(let f=0;f<i;f++){const x=f+m,S=x,v=x+i+1,R=x+i+2,A=x+1;o.push(S,v,A),o.push(v,R,A)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ss extends pt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new C,u=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const x=[],S=f/i;let v=0;f===0&&a===0?v=.5/t:f===i&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const A=R/t;d.x=-e*Math.cos(n+A*s)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(n+A*s)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+v,1-S),x.push(c++)}h.push(x)}for(let f=0;f<i;f++)for(let x=0;x<t;x++){const S=h[f][x+1],v=h[f][x],R=h[f+1][x],A=h[f+1][x+1];(f!==0||a>0)&&p.push(S,v,A),(f!==i-1||l<Math.PI)&&p.push(v,R,A)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Re extends bi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wi extends Re{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ur(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function w_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function T_(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function qc(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function vd(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}class er{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0;break i}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class E_ extends er{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zn,endingEnd:Zn}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qn:s=e,o=2*t-i;break;case Qr:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Qn:a=e,l=2*i-t;break;case Qr:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,x=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let R=0;R!==o;++R)s[R]=f*a[h+R]+x*a[c+R]+S*a[l+R]+v*a[d+R];return s}}class yd extends er{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}}class A_ extends er{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ti{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new A_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new E_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ys:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&w_(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ma,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const d=o*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Ks;class Ms extends Ti{constructor(e,t,i){super(e,t,i)}}Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Ys;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class xd extends Ti{}xd.prototype.ValueTypeName="color";class gs extends Ti{}gs.prototype.ValueTypeName="number";class C_ extends er{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ft.slerpFlat(s,0,a,c-o,a,c,l);return s}}class _s extends Ti{InterpolantFactoryMethodLinear(e){return new C_(this.times,this.values,this.getValueSize(),e)}}_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends Ti{constructor(e,t,i){super(e,t,i)}}ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Ys;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends Ti{}vs.prototype.ValueTypeName="vector";class Ko{constructor(e="",t=-1,i=[],n=dl){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=mi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(I_(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(Ti.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=T_(l);l=qc(l,1,h),c=qc(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new gs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=n[d];u||(n[d]=u=[]),u.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,u,p,g,_){if(p.length!==0){const m=[],f=[];vd(p,m,f,g),m.length!==0&&_.push(new d(u,m,f))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)p[u[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let x=0;x!==u[g].morphTargets.length;++x){const S=u[g];m.push(S.time),f.push(S.morphTarget===_?1:0)}n.push(new gs(".morphTargetInfluence["+_+"]",m,f))}l=p.length*a}else{const p=".bones["+t[d].name+"]";i(vs,p+".position",u,"pos",n),i(_s,p+".quaternion",u,"rot",n),i(vs,p+".scale",u,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function R_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return xd;case"quaternion":return _s;case"bool":case"boolean":return Ms;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function I_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=R_(r.type);if(r.times===void 0){const t=[],i=[];vd(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const on={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class D_{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const P_=new D_;class Rn{constructor(e){this.manager=e!==void 0?e:P_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class L_ extends Error{constructor(e,t){super(e),this.response=t}}class ra extends Rn{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=on.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:i,onError:n});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Li[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){x();function x(){d.read().then(({done:S,value:v})=>{if(S)f.close();else{_+=v.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,E=h.length;A<E;A++){const D=h[A];D.onProgress&&D.onProgress(R)}f.enqueue(v),x()}},S=>{f.error(S)})}}});return new Response(m)}else throw new L_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{on.add(e,c);const h=Li[e];delete Li[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Li[e];if(h===void 0)throw this.manager.itemError(e),c;delete Li[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class U_ extends Rn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=on.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Js("img");function l(){h(),on.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),n&&n(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class N_ extends Rn{constructor(e){super(e)}load(e,t,i,n){const s=new bt,a=new U_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class tr extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class k_ extends tr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xa=new Ue,Xc=new C,$c=new C;class xl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O_ extends xl{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=fs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class B_ extends tr{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new O_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jc=new Ue,Ns=new C,$a=new C;class F_ extends xl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ns),$a.copy(i.position),$a.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($a),i.updateMatrixWorld(),n.makeTranslation(-Ns.x,-Ns.y,-Ns.z),jc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc)}}class Oi extends tr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new F_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class z_ extends xl{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pa extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new z_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class H_ extends tr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class G_ extends Rn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=on.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return on.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),on.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});on.add(e,l),s.manager.itemStart(e)}}class bd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yc(){return performance.now()}class V_{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,a;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Ft.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const a=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,a,e,t,e,i),Ft.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){const a=1-n;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[i+a]*n}}}const bl="\\[\\]\\.:\\/",W_=new RegExp("["+bl+"]","g"),Sl="[^"+bl+"]",q_="[^"+bl.replace("\\.","")+"]",X_=/((?:WC+[\/:])*)/.source.replace("WC",Sl),$_=/(WCOD+)?/.source.replace("WCOD",q_),j_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),K_=new RegExp("^"+X_+$_+j_+Y_+"$"),J_=["material","materials","bones","map"];class Z_{constructor(e,t,i){const n=i||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ze{constructor(e,t,i){this.path=t,this.parsedPath=i||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,i):new Ze(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(e){const t=K_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);J_.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=Z_;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Q_{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Zn,endingEnd:Zn};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=jh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Au:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case dl:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const a=i===Eu;if(e===0)return s===-1?n:a&&(s&1)===1?t-n:n;if(i===$h){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Qn,n.endingEnd=Qn):(e?n.endingStart=this.zeroSlopeAtStart?Qn:Zn:n.endingStart=Qr,t?n.endingEnd=this.zeroSlopeAtEnd?Qn:Zn:n.endingEnd=Qr)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}const ev=new Float32Array(1);class tv extends Cn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=n[d],p=u.name;let g=h[p];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new V_(Ze.create(i,p,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new yd(new Float32Array(2),new Float32Array(2),1,ev),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let a=typeof e=="string"?Ko.findByName(n,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=dl),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Q_(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?Ko.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);const Sd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iv=new ca(-1,1,1,-1,0,1);class nv extends pt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}}const sv=new nv;class Md{constructor(e){this._mesh=new be(sv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class wd extends ir{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ta.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Md(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kc extends ir{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class rv extends ir{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class av{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Se);this._width=i.width,this._height=i.height,t=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wd(Sd),this.copyPass.material.blending=Hi,this.clock=new bd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Kc!==void 0&&(a instanceof Kc?i=!0:a instanceof rv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ov extends ir{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pe}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}}const lv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ys extends ir{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new gi(s,a,{type:Gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new gi(s,a,{type:Gi});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new gi(s,a,{type:Gi});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=lv;this.highPassUniforms=ta.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Se(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Sd;this.copyUniforms=ta.clone(h.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$s,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pe,this.oldClearAlpha=1,this.basic=new ni,this.fsQuad=new Md(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Se(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new _t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ys.BlurDirectionX=new Se(1,0);ys.BlurDirectionY=new Se(0,1);const cv={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Se(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};function hv(r){const e=new Map,t=new Map,i=r.clone();return Td(r,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,a=e.get(n),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Td(r,e,t){t(r,e);for(let i=0;i<r.children.length;i++)Td(r.children[i],e.children[i],t)}const Jc=3,Zc=[-Jc,0,Jc],dv=-22,uv=-60,pv=-18,fv=-40,mv=7,gv=10,_v=40,vv=.5,yv=1.5,xv=1,Qc=.8,bv=1,Sv=.18,yt={RUN:"Running_A",JUMP:"Jump_Full_Short",SLIDE:"Crawling",DODGE_L:"Dodge_Left",DODGE_R:"Dodge_Right",ATTACK:"Melee_Unarmed_Attack_Punch_A",HIT:"Hit_A",DEATH:"Death_A",IDLE:"Idle_A"};class Mv{constructor(e,t,i="knight"){this.scene=e;const n=t.characters[i]||t.knight;let s=!1;n.scene.traverse(u=>{u.isSkinnedMesh&&(s=!0)}),s?this.model=hv(n.scene):this.model=n.scene.clone();const a=new _i().setFromObject(this.model),o=a.max.y-a.min.y,c=o>0?2/o:1.8;this.model.scale.setScalar(c);const h=new _i().setFromObject(this.model);this.model.position.y=-h.min.y,this._baseModelY=this.model.position.y,this.model.rotation.y=Math.PI,this.model.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!1)}),this.group=new Ct,this.group.add(this.model),e.add(this.group),this.mixer=new tv(this.model),this.actions={},this.currentAction=null,this.hasAnimations=!1;const d=t.animations;if(s&&d.size>0){this.hasAnimations=!0;for(const[u,p]of d){const g=this.mixer.clipAction(p);this.actions[u]=g,u===yt.RUN||u===yt.IDLE||u===yt.SLIDE?g.setLoop(jh):(g.setLoop($h),g.clampWhenFinished=!0)}this.mixer.addEventListener("finished",u=>{u.action.getClip().name!==yt.DEATH&&(this.dead||this._playAnimation(yt.RUN))}),this._playAnimation(yt.IDLE)}this.lane=1,this.targetX=0,this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.maxJumps=2,this.isSuperJump=!1,this.sliding=!1,this.slideTimer=0,this.attacking=!1,this.attackTimer=0,this.stumbling=!1,this.stumbleTimer=0,this.invulnTimer=0,this.dead=!1,this.running=!1,this.runSpeed=12,this.runTime=0,this.speedMultiplier=1,this.position=this.group.position,this.position.set(0,0,0)}_playAnimation(e,t=Sv){const i=this.actions[e];i&&(this.currentAction===i&&i.isRunning()||(i.reset(),i.enabled=!0,this.currentAction&&this.currentAction!==i&&this.currentAction.crossFadeTo(i,t,!0),i.play(),this.currentAction=i))}get isInvulnerable(){return this.invulnTimer>0}get colliderHeight(){return this.sliding?.5:1.5}get colliderY(){return this.sliding?.25:.75}startRunning(){this.running=!0,this._playAnimation(yt.RUN)}moveLeft(){this.dead||this.lane>0&&(this.lane--,this.targetX=Zc[this.lane],this._playAnimation(yt.DODGE_L,.1))}moveRight(){this.dead||this.lane<2&&(this.lane++,this.targetX=Zc[this.lane],this._playAnimation(yt.DODGE_R,.1))}jump(){this.dead||(this.sliding&&(this.sliding=!1,this.slideTimer=0),this.jumpsUsed<this.maxJumps&&(this.jumpsUsed===0?(this.velocityY=mv,this.isSuperJump=!1):(this.velocityY=gv,this.isSuperJump=!0),this.grounded=!1,this.jumpsUsed++,this._playAnimation(yt.JUMP,.1)))}slide(){this.dead||!this.grounded||(this.sliding=!0,this.slideTimer=vv,this._playAnimation(yt.SLIDE,.15))}attack(){this.dead||this.attacking||(this.attacking=!0,this.attackTimer=xv,this._playAnimation(yt.ATTACK,.1))}stumble(){this.dead||this.isInvulnerable||this.stumbling||(this.stumbling=!0,this.stumbleTimer=Qc,this.invulnTimer=Qc+bv,this._playAnimation(yt.HIT,.1))}die(){this.dead=!0,this.runSpeed=0,this._playAnimation(yt.DEATH,.2)}celebrate(){this.dead=!0,this.running=!1,this.runSpeed=0,this._playAnimation(yt.IDLE,.3)}revive(){this.dead=!1,this.running=!0,this.runSpeed=12+Math.min(18,this.runTime*.25),this.stumbling=!1,this.stumbleTimer=0,this.invulnTimer=2,this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.sliding=!1,this.attacking=!1,this.group.visible=!0,this._playAnimation(yt.RUN)}update(e){if(this.mixer.update(e),!this.hasAnimations&&this.running&&!this.dead){const n=this.runTime*12;this.model.position.y=this._baseModelY+Math.abs(Math.sin(n))*.12,this.model.rotation.x=-.15,this.model.rotation.z=Math.sin(n*.5)*.05}if(this.dead)return;this.runTime+=e,this.runSpeed=12+Math.min(18,this.runTime*.25);const t=this.sliding?yv:1;this.position.z-=this.runSpeed*this.speedMultiplier*t*e;const i=this.targetX-this.position.x;if(Math.abs(i)>.01?this.position.x+=Math.sign(i)*Math.min(Math.abs(i),_v*e):this.position.x=this.targetX,!this.grounded){let n;this.isSuperJump?n=this.velocityY>0?pv:fv:n=this.velocityY>0?dv:uv,this.velocityY+=n*e,this.position.y+=this.velocityY*e,this.position.y<=0&&(this.position.y=0,this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.isSuperJump=!1,!this.sliding&&!this.attacking&&!this.stumbling&&this._playAnimation(yt.RUN))}this.sliding&&(this.slideTimer-=e,this.slideTimer<=0&&(this.sliding=!1,this._playAnimation(yt.RUN))),this.attacking&&(this.attackTimer-=e,this.attackTimer<=0&&(this.attacking=!1)),this.stumbling&&(this.stumbleTimer-=e,this.stumbleTimer<=0&&(this.stumbling=!1)),this.invulnTimer>0&&(this.invulnTimer-=e),this.invulnTimer>0&&!this.stumbling?this.group.visible=Math.floor(this.invulnTimer*10)%2===0:this.group.visible=!0}reset(){this.lane=1,this.targetX=0,this.position.set(0,0,0),this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.isSuperJump=!1,this.sliding=!1,this.slideTimer=0,this.attacking=!1,this.attackTimer=0,this.stumbling=!1,this.stumbleTimer=0,this.invulnTimer=0,this.dead=!1,this.running=!1,this.runSpeed=12,this.runTime=0,this.speedMultiplier=1,this.group.visible=!0,this.mixer.stopAllAction(),this.currentAction=null,this._playAnimation(yt.IDLE)}applySkinTint(e){if(e==null)return;this._originalMaterials||(this._originalMaterials=new Map,this.model.traverse(i=>{if(i.isMesh&&i.material){const n=Array.isArray(i.material)?i.material:[i.material];for(const s of n)s.color&&!this._originalMaterials.has(s)&&this._originalMaterials.set(s,s.color.clone())}}));const t=new pe(e);this.model.traverse(i=>{if(i.isMesh&&i.material){const n=Array.isArray(i.material)?i.material:[i.material];for(const s of n){const a=this._originalMaterials.get(s);a&&s.color&&s.color.copy(a).multiply(t)}}})}clearSkinTint(){if(this._originalMaterials)for(const[e,t]of this._originalMaterials)e.color&&e.color.copy(t)}applyAuraEffect(e){if(!e)return;this.removeAuraEffect();const[t,i,n]=e.color,s=new pe(t,i,n);this._auraLight=new Oi(s,e.intensity*2,6),this._auraLight.position.set(0,1.2,0),this.group.add(this._auraLight),this._auraConfig=e}removeAuraEffect(){this._auraLight&&(this.group.remove(this._auraLight),this._auraLight.dispose(),this._auraLight=null),this._auraConfig=null}dispose(){this.removeAuraEffect(),this.mixer.stopAllAction(),this.scene.remove(this.group),this.group.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))})}}function $i(r,e){const t=document.createElement("canvas");return t.width=r,t.height=e,[t,t.getContext("2d")]}function wv(r=256){const[e,t]=$i(r,r);t.fillStyle="#b0a080",t.fillRect(0,0,r,r);for(let s=0;s<r*r*.3;s++){const a=Math.random()*r,o=Math.random()*r,l=140+Math.random()*50;t.fillStyle=`rgb(${l},${l-10},${l-25})`,t.fillRect(a,o,1+Math.random()*2,1+Math.random()*2)}t.strokeStyle="rgba(80,70,50,0.3)",t.lineWidth=2;const i=r/6;for(let s=0;s<6;s++){const a=s*i;t.beginPath(),t.moveTo(0,a),t.lineTo(r,a),t.stroke();const o=s%2*(r/4);for(let l=0;l<4;l++){const c=o+l*(r/2);t.beginPath(),t.moveTo(c,a),t.lineTo(c,a+i),t.stroke()}}const n=new Xi(e);return n.wrapS=n.wrapT=Vt,n.repeat.set(2,8),n}function Tv(r=256){const[e,t]=$i(r,r);t.fillStyle="#7a6243",t.fillRect(0,0,r,r);for(let n=0;n<r*r*.4;n++){const s=Math.random()*r,a=Math.random()*r,o=80+Math.random()*60;t.fillStyle=`rgb(${o+20},${o+10},${o-10})`,t.fillRect(s,a,1+Math.random()*3,1+Math.random()*3)}for(let n=0;n<30;n++){const s=Math.random()*r,a=Math.random()*r,o=2+Math.random()*4;t.fillStyle=`rgba(${100+Math.random()*40},${90+Math.random()*30},${70+Math.random()*20},0.5)`,t.beginPath(),t.ellipse(s,a,o,o*.7,Math.random()*Math.PI,0,Math.PI*2),t.fill()}const i=new Xi(e);return i.wrapS=i.wrapT=Vt,i.repeat.set(3,12),i}function Ev(r=512){const[e,t]=$i(r,r),i=t.createRadialGradient(r/2,r/2,0,r/2,r/2,r*.7);i.addColorStop(0,"#4a8c3a"),i.addColorStop(.5,"#3a7030"),i.addColorStop(1,"#2a5a22"),t.fillStyle=i,t.fillRect(0,0,r,r);for(let s=0;s<20;s++){const a=Math.random()*r,o=Math.random()*r,l=20+Math.random()*40,c=Math.random()>.5?"rgba(60,120,40,0.3)":"rgba(30,50,20,0.25)";t.fillStyle=c,t.beginPath(),t.ellipse(a,o,l,l*.7,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let s=0;s<3;s++){const a=600+s*200;for(let o=0;o<a;o++){const l=Math.random()*r,c=Math.random()*r,h=50+Math.random()*100,d=25+Math.random()*35,u=15+Math.random()*25;t.strokeStyle=`rgba(${d},${h},${u},${.4+s*.2})`,t.lineWidth=.3+Math.random()*1.2,t.beginPath(),t.moveTo(l,c);const p=3+Math.random()*8,g=(Math.random()-.5)*6;t.quadraticCurveTo(l+g*.5,c-p*.5,l+g,c-p),t.stroke()}}for(let s=0;s<40;s++){const a=Math.random()*r,o=Math.random()*r,l=["#ffee44","#ff8844","#ffffff","#ff66aa","#aaddff"];t.fillStyle=l[Math.floor(Math.random()*l.length)],t.beginPath(),t.arc(a,o,1+Math.random()*1.5,0,Math.PI*2),t.fill()}const n=new Xi(e);return n.wrapS=n.wrapT=Vt,n.repeat.set(6,6),n}function Av(r=256){const[e,t]=$i(r,r);t.fillStyle="#c4a35a",t.fillRect(0,0,r,r);for(let n=0;n<r*r*.5;n++){const s=Math.random()*r,a=Math.random()*r,o=170+Math.random()*40;t.fillStyle=`rgb(${o},${o-20},${o-60})`,t.fillRect(s,a,1,1)}t.strokeStyle="rgba(180,150,90,0.15)",t.lineWidth=1;for(let n=0;n<20;n++){const s=Math.random()*r;t.beginPath(),t.moveTo(0,s);for(let a=0;a<r;a+=10)t.lineTo(a,s+Math.sin(a*.05)*3);t.stroke()}const i=new Xi(e);return i.wrapS=i.wrapT=Vt,i.repeat.set(6,6),i}function Cv(r=256){const[e,t]=$i(r,r);t.fillStyle="#1a0a0a",t.fillRect(0,0,r,r);for(let n=0;n<15;n++){let s=Math.random()*r,a=Math.random()*r;t.strokeStyle=`rgba(${200+Math.random()*55},${50+Math.random()*50},0,0.4)`,t.lineWidth=1+Math.random()*2,t.beginPath(),t.moveTo(s,a);for(let o=0;o<8;o++)s+=(Math.random()-.5)*30,a+=(Math.random()-.5)*30,t.lineTo(s,a);t.stroke()}for(let n=0;n<r*r*.2;n++){const s=Math.random()*r,a=Math.random()*r,o=20+Math.random()*25;t.fillStyle=`rgb(${o+5},${o},${o})`,t.fillRect(s,a,1+Math.random()*2,1+Math.random()*2)}const i=new Xi(e);return i.wrapS=i.wrapT=Vt,i.repeat.set(4,4),i}function Rv(r=256){const[e,t]=$i(r,r);t.fillStyle="#d8dce4",t.fillRect(0,0,r,r);for(let n=0;n<200;n++){const s=Math.random()*r,a=Math.random()*r,o=220+Math.random()*35;t.fillStyle=`rgb(${o},${o},${o+5})`,t.beginPath(),t.arc(s,a,.5+Math.random(),0,Math.PI*2),t.fill()}for(let n=0;n<5;n++){t.fillStyle="rgba(180,185,195,0.3)";const s=Math.random()*r,a=Math.random()*r;t.beginPath(),t.ellipse(s,a,4,6,Math.random(),0,Math.PI*2),t.fill()}const i=new Xi(e);return i.wrapS=i.wrapT=Vt,i.repeat.set(6,6),i}function Iv(r=128){const[e,t]=$i(r,r);t.fillStyle="#5a3a1e",t.fillRect(0,0,r,r),t.strokeStyle="rgba(40,25,10,0.3)",t.lineWidth=1;for(let n=0;n<30;n++){const s=n/30*r+(Math.random()-.5)*3;t.beginPath(),t.moveTo(0,s);for(let a=0;a<r;a+=5)t.lineTo(a,s+Math.sin(a*.03+n)*2);t.stroke()}const i=new Xi(e);return i.wrapS=i.wrapT=Vt,i}function Dv(r=128){const[e,t]=$i(r,r);t.fillStyle="#4a2a10",t.fillRect(0,0,r,r);for(let n=0;n<40;n++){t.strokeStyle=`rgba(${30+Math.random()*30},${15+Math.random()*15},${5+Math.random()*10},0.4)`,t.lineWidth=2+Math.random()*3;const s=n/40*r;t.beginPath(),t.moveTo(0,s),t.lineTo(r,s+(Math.random()-.5)*8),t.stroke()}const i=new Xi(e);return i.wrapS=i.wrapT=Vt,i}function Pv(r=128){const[e,t]=$i(r,r),i=t.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);return i.addColorStop(0,"#ffe44d"),i.addColorStop(.7,"#ffd700"),i.addColorStop(1,"#b8960a"),t.fillStyle=i,t.fillRect(0,0,r,r),t.fillStyle="rgba(180,140,20,0.6)",t.font=`bold ${r*.5}px serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("V",r/2,r/2),t.strokeStyle="rgba(140,110,10,0.5)",t.lineWidth=4,t.beginPath(),t.arc(r/2,r/2,r/2-4,0,Math.PI*2),t.stroke(),new Xi(e)}const eh=[{name:"single_center",obstacles:[{lane:1}]},{name:"single_center2",obstacles:[{lane:1}]},{name:"single_left",obstacles:[{lane:0}]},{name:"single_right",obstacles:[{lane:2}]},{name:"gap_left",obstacles:[{lane:1},{lane:2}]},{name:"gap_center",obstacles:[{lane:0},{lane:2}]},{name:"gap_right",obstacles:[{lane:0},{lane:1}]}],th=[{name:"jump_wall",obstacles:[{lane:0,type:"low"},{lane:1,type:"low"},{lane:2,type:"low"}],hint:"jump"},{name:"zigzag_lr",obstacles:[{lane:0,zOffset:0},{lane:2,zOffset:-8}]},{name:"zigzag_rl",obstacles:[{lane:2,zOffset:0},{lane:0,zOffset:-8}]},{name:"corridor_center",obstacles:[{lane:0},{lane:2},{lane:0,zOffset:-10},{lane:2,zOffset:-10}]},{name:"break_or_dodge",obstacles:[{lane:1,breakable:!0},{lane:0},{lane:2}],hint:"attack_or_jump"},{name:"center_spread",obstacles:[{lane:1,zOffset:0},{lane:0,zOffset:-8},{lane:2,zOffset:-8}]},{name:"double_center",obstacles:[{lane:1,zOffset:0},{lane:1,zOffset:-10}]},{name:"slide_gate",obstacles:[{lane:0,type:"slide_gate"},{lane:1,type:"slide_gate"},{lane:2,type:"slide_gate"}],hint:"slide"}],Lv=[{name:"gauntlet",obstacles:[{lane:0,zOffset:0},{lane:1,zOffset:-7},{lane:2,zOffset:-14}]},{name:"gauntlet_rev",obstacles:[{lane:2,zOffset:0},{lane:1,zOffset:-7},{lane:0,zOffset:-14}]},{name:"center_then_sides",obstacles:[{lane:1,zOffset:0},{lane:0,zOffset:-8},{lane:2,zOffset:-8}]},{name:"switchback",obstacles:[{lane:0,zOffset:0},{lane:1,zOffset:0},{lane:1,zOffset:-10},{lane:2,zOffset:-10}]},{name:"gate_break",obstacles:[{lane:0,breakable:!0,type:"gate"},{lane:1,breakable:!0,type:"gate"},{lane:2,breakable:!0,type:"gate"}]},{name:"gate_then_dodge",obstacles:[{lane:0,breakable:!0,type:"gate"},{lane:1,breakable:!0,type:"gate"},{lane:2,breakable:!0,type:"gate"},{lane:1,zOffset:-10}]},{name:"slide_gate_all",obstacles:[{lane:0,type:"slide_gate"},{lane:1,type:"slide_gate"},{lane:2,type:"slide_gate"}],hint:"slide"},{name:"slide_or_dodge",obstacles:[{lane:0,type:"slide_gate"},{lane:2,type:"slide_gate"},{lane:1}]}],ih={straight:(r,e,t)=>{const i=[];for(let n=0;n<e;n++)i.push({lane:r,zOffset:-t*n,y:.8});return i},arc:(r,e,t)=>{const i=[];for(let n=0;n<e;n++){const s=n/(e-1),a=.8+Math.sin(s*Math.PI)*2.5;i.push({lane:r,zOffset:-t*n,y:a})}return i},zigzag:(r,e,t)=>{const i=[];let n=r,s=r===0?1:r===2?-1:Math.random()>.5?1:-1;for(let a=0;a<e;a++)i.push({lane:n,zOffset:-t*a,y:.8}),n+=s,(n>2||n<0)&&(s=-s,n+=s*2);return i}};function Uv(r){let e;r<=1?e=eh:r<=3?e=Math.random()<.3?eh:th:e=Math.random()<.25?th:Lv;let t;return Array.isArray(e)?t=e[Math.floor(Math.random()*e.length)]:t=e,t}function Nv(r){if(r<=1)return"straight";const e=Math.random();return e<.4?"straight":e<.7?"arc":"zigzag"}const Tt=20,kv=6,Ov=2,Jo=3,ks=[-Jo,0,Jo],Xn=9,Bv=30,Fv={forest:{ground:3828526,path:8020547,pathEdge:5917232,wallColor:7035453,sky:8900331,fog:8900331,ambient:13428940,sunColor:16774374,grassColors:[4885567,4028980,5938255,2976292]},desert:{ground:12886874,path:12097888,pathEdge:10123840,wallColor:12886112,sky:15258784,fog:15258784,ambient:15786176,sunColor:16772829,grassColors:[12097069,11044128,13149760]},lava:{ground:2759194,path:4861992,pathEdge:3809304,wallColor:3810592,sky:3349002,fog:3349002,ambient:16736304,sunColor:16746564,grassColors:[1708048,2757909]},snow:{ground:13687008,path:10528944,pathEdge:8423568,wallColor:9476250,sky:13161696,fog:13161696,ambient:13689072,sunColor:15790335,grassColors:[13160664,12107976,14542056]},roman:{ground:9075290,path:11575424,pathEdge:9470048,wallColor:13154448,sky:9484496,fog:9484496,ambient:14735552,sunColor:16773328,grassColors:[6982218,5929530]},underwater:{ground:1718874,path:2771562,pathEdge:1716304,wallColor:2773104,sky:663616,fog:663616,ambient:3170464,sunColor:4491468,grassColors:[1722938,670250,2775626]}},nh=["roman","forest","desert","lava","snow","roman","underwater"],sh={forest:["barrel_large","crate_large","rocks","barrel_small","chest"],desert:["barrel_small","crate_small","column","rocks","barrier"],lava:["pillar","barrier","rocks","barrel_large","chest"],snow:["crate_large","barrel_large","rocks","crate_small","barrier"],roman:["pillar_decorated","column","barrier","chest","barrel_large"],underwater:["rocks","barrel_small","crate_small","chest","barrier"]},ci={barrel_large:{width:1.2,height:1.2,depth:1.2,breakable:!1,scale:.7},barrel_small:{width:.9,height:.9,depth:.9,breakable:!1,scale:.6},crate_large:{width:1.2,height:1,depth:1.2,breakable:!1,scale:.7},crate_small:{width:.9,height:.8,depth:.9,breakable:!1,scale:.6},column:{width:.8,height:1.4,depth:.8,breakable:!1,scale:.78},pillar:{width:.8,height:1.4,depth:.8,breakable:!1,scale:.78},pillar_decorated:{width:.9,height:1.5,depth:.9,breakable:!1,scale:.84},barrier:{width:1.8,height:.9,depth:.6,breakable:!1,scale:.7},rocks:{width:1.2,height:.9,depth:1.2,breakable:!1,scale:.7},chest:{width:.9,height:.8,depth:.8,breakable:!0,scale:.84,coinReward:15},gate:{width:2.8,height:5,depth:.5,breakable:!0,scale:1,coinReward:25},slide_gate:{width:2.8,height:3.5,depth:.5,breakable:!1,scale:1}},Nr={forest:{env:["Tree_1_B_Color4","Tree_2_B_Color4","Tree_6_B_Color4","Bush_2_E_Color4","Bush_3_B_Color4","Bush_4_B_Color4","Rock_1_E_Color4","Rock_4_B_Color4","Grass_1_A_Color4","Grass_2_A_Color4"],scn:[],grass:["Grass_1_A_Color4","Grass_2_A_Color4"]},desert:{env:["Rock_3_B_Color4","Rock_4_B_Color4","Rock_5_E_Color4","Bush_3_B_Color4","Tree_Bare_1_B_Color4"],scn:[],grass:[]},lava:{env:["Rock_1_E_Color4","Rock_3_B_Color4","Rock_5_E_Color4"],scn:[],tint:16724736,grass:[]},snow:{env:["Tree_1_B_Color4","Tree_6_B_Color4","Rock_1_E_Color4","Rock_4_B_Color4","Bush_4_B_Color4"],scn:[],grass:[]},roman:{env:["Bush_2_E_Color4","Bush_3_B_Color4","Bush_4_B_Color4","Tree_1_B_Color4","Tree_6_B_Color4","Rock_1_E_Color4","Rock_3_B_Color4","Grass_1_A_Color4","Grass_2_A_Color4"],scn:["pillar_decorated"],grass:["Grass_1_A_Color4","Grass_2_A_Color4"]},underwater:{env:["Rock_1_E_Color4","Rock_3_B_Color4","Rock_5_E_Color4","Bush_3_B_Color4"],scn:[],tint:2254506,grass:[]}},zv={CoinBag:"potion_large_orange",Revive:"potion_large_red",CoinMagnet:"potion_large_blue",DoubleCoin:"potion_large_green",Invincibility:"potion_large_blue",Antidote:"potion_large_green",TimeAdvantage:"potion_large_orange",Shield:"shield_badge"};class Hv{constructor(e,t){this.scene=e,this.assetLoader=t,this.tiles=[],this.nextTileZ=0,this.tileIndex=0,this.theme="roman",this.difficulty=0,this.activeCoins=[],this.activeObstacles=[],this.activePowerUps=[],this.bossActive=!1,this.fixedTheme=null,this.obstacleFrequencyMult=1,this._lastChestTileIndex=0,this._textures={stone:wv(),dirt:Tv(),grass:Ev(),sand:Av(),lavaGround:Cv(),snow:Rv(),wood:Iv(),bark:Dv(),coin:Pv()},this._themeMats={roman:{ground:new Re({map:this._textures.grass,roughness:.85}),path:new Re({map:this._textures.stone,roughness:.65})},forest:{ground:new Re({map:this._textures.grass,roughness:.85}),path:new Re({map:this._textures.dirt,roughness:.8})},desert:{ground:new Re({map:this._textures.sand,roughness:.9}),path:new Re({map:this._textures.sand,color:12097888,roughness:.75})},lava:{ground:new Re({map:this._textures.lavaGround,roughness:.95}),path:new Re({map:this._textures.lavaGround,color:4861992,roughness:.85})},snow:{ground:new Re({map:this._textures.snow,roughness:.7}),path:new Re({map:this._textures.snow,color:10528944,roughness:.6})},underwater:{ground:new Re({color:1718874,roughness:.9}),path:new Re({map:this._textures.stone,color:2771562,roughness:.7})}}}update(e){const t=Math.abs(e);if(this.fixedTheme)this.theme=this.fixedTheme;else{const s=Math.floor(t/400)%nh.length;this.theme=nh[s]}for(;this.nextTileZ>e-kv*Tt;)this._spawnTile(this.nextTileZ),this.nextTileZ-=Tt;const i=e+Ov*Tt;for(let s=this.tiles.length-1;s>=0;s--)this.tiles[s].group.position.z>i&&(this._removeTile(this.tiles[s]),this.tiles.splice(s,1));const n=performance.now()*.001;for(const s of this.activeCoins)s.rotation.y=n*3,s.position.y=s.userData._baseY+Math.sin(n*2.5+s.userData._phase)*.12;for(const s of this.activePowerUps)s.rotation.y=n*2,s.position.y=s.userData._baseY+Math.sin(n*3+s.userData._phase)*.2}getCollisions(e,t,i,n,s){const a={coins:[],obstacles:[],powerUps:[]};for(let o=this.activeCoins.length-1;o>=0;o--){const l=this.activeCoins[o],c=new C;l.getWorldPosition(c),Math.abs(c.x-e)<1.5&&Math.abs(c.z-t)<1.2&&(a.coins.push(l),l.visible=!1,this.activeCoins.splice(o,1))}for(let o=this.activeObstacles.length-1;o>=0;o--){const l=this.activeObstacles[o],c=new C;l.getWorldPosition(c);const h=l.userData;if(Math.abs(c.x-e)<h.width*.5+.3&&Math.abs(c.z-t)<h.depth*.5+.3){const d=c.y-h.height*.5,u=c.y+h.height*.5,p=i;i+n>d+.1&&p<u-.1&&a.obstacles.push(l)}}for(let o=this.activePowerUps.length-1;o>=0;o--){const l=this.activePowerUps[o],c=new C;l.getWorldPosition(c),Math.abs(c.x-e)<1.5&&Math.abs(c.z-t)<1.2&&Math.abs(c.y-(i+s))<1.5&&(a.powerUps.push(l),l.visible=!1,this.activePowerUps.splice(o,1))}return a}breakObstacle(e){const t=this.activeObstacles.indexOf(e);t>=0&&(e.visible=!1,this.activeObstacles.splice(t,1))}reset(){for(const e of this.tiles)this._removeTile(e);this.tiles=[],this.activeCoins=[],this.activeObstacles=[],this.activePowerUps=[],this.nextTileZ=0,this.tileIndex=0,this.theme="roman",this.difficulty=0,this._lastChestTileIndex=0}_spawnTile(e){const t=new Ct;t.position.z=e;const i=Fv[this.theme],n=this._themeMats[this.theme]||this._themeMats.roman,s=new hn(Bv*2,Tt),a=new be(s,n.ground);a.rotation.x=-Math.PI/2,a.position.y=-.02,a.receiveShadow=!0,t.add(a);const o=new ct(Xn,.12,Tt),l=new be(o,n.path);l.position.y=0,l.receiveShadow=!0,t.add(l),this._addPathEdges(t,i),this._addPathDecor(t);for(let u=-1;u<=1;u+=2){const p=new ct(.04,.01,Tt),g=new Re({color:16777215,transparent:!0,opacity:.12}),_=new be(p,g);_.position.set(u*Jo*.5,.07,0),t.add(_)}this.bossActive||(this._addSideScenery(t,i,-1),this._addSideScenery(t,i,1),this._addGrassStrip(t),this._addGroundDetails(t,i));const c=this.tileIndex>3&&!this.bossActive,h=this.tileIndex<=7&&Math.random()<.5,d=this.obstacleFrequencyMult<1&&Math.random()>this.obstacleFrequencyMult;if(c&&!h&&!d){const u=this._addObstacles(t,i);this._addCoins(t,u),Math.random()<.06&&this._addGem(t)}else this.bossActive||this._addCoins(t,[]);!this.bossActive&&this.tileIndex>5&&this.tileIndex-this._lastChestTileIndex>=15&&(this._lastChestTileIndex=this.tileIndex,this._addChest(t)),this.scene.add(t),this.tiles.push({group:t,z:e}),this.tileIndex++}_addPathEdges(e,t){for(const i of[-1,1]){const n=i*(Xn*.5+.15),s=new ct(.3,.35,Tt),a=new Re({color:t.pathEdge,roughness:.8}),o=new be(s,a);o.position.set(n,.15,0),o.castShadow=!0,o.receiveShadow=!0,e.add(o);const l=new ct(.4,.06,Tt),c=new Re({color:t.wallColor,roughness:.65}),h=new be(l,c);h.position.set(n,.34,0),h.receiveShadow=!0,e.add(h);const d=4;for(let u=0;u<d;u++){const p=-Tt*.5+Tt/d*(u+.5),g=new ct(.2,.6,.2),_=new Re({color:t.wallColor,roughness:.7}),m=new be(g,_);m.position.set(n,.3,p),m.castShadow=!0,e.add(m)}}}_addSideScenery(e,t,i){const n=i*(Xn*.5+2),s=10+Math.floor(Math.random()*8),a=Nr[this.theme]||Nr.roman,o=a.env,l=a.scn;a.grass;const c=[...o,...l];if(c.length!==0){for(let h=0;h<s;h++){const d=n+i*(2+Math.random()*12),u=(Math.random()-.5)*Tt,p=c[Math.floor(Math.random()*c.length)];let g;try{o.includes(p)?g=this.assetLoader.getEnvironment(p):g=this.assetLoader.getScenery(p)}catch{continue}const _=p.startsWith("Tree"),m=p.startsWith("Bush"),f=p.startsWith("Grass"),x=_?.8+Math.random()*.7:m?.7+Math.random()*.5:f?.5+Math.random()*.4:.8+Math.random()*.6;if(g.scale.setScalar(x),g.position.set(d,0,u),g.rotation.y=Math.random()*Math.PI*2,g.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),a.tint){const S=new pe(a.tint);g.traverse(v=>{if(v.isMesh&&v.material){const R=v.material;R.color&&R.color.lerp(S,.35),R.emissive&&(R.emissive.set(2230272),R.emissiveIntensity=.2)}})}e.add(g)}if(this.theme==="lava"&&Math.random()>.5){const h=n+i*(Math.random()*4),d=(Math.random()-.5)*Tt;this._addLavaPool(e,h,d)}}}_addGrassStrip(e){const i=(Nr[this.theme]||Nr.roman).grass||[];if(i.length!==0)for(const n of[-1,1]){const s=8+Math.floor(Math.random()*6);for(let a=0;a<s;a++){const o=i[Math.floor(Math.random()*i.length)];let l;try{l=this.assetLoader.getEnvironment(o)}catch{continue}const c=n*(Xn*.5+.3+Math.random()*1.5),h=(Math.random()-.5)*Tt;l.scale.setScalar(.4+Math.random()*.4),l.position.set(c,0,h),l.rotation.y=Math.random()*Math.PI*2,l.traverse(d=>{d.isMesh&&(d.receiveShadow=!0)}),e.add(l)}}}_addPathDecor(e){if(this.tileIndex%2===0)for(const t of[-1,1]){const i=t*(Xn*.5+.5);try{const s=this.assetLoader.getScenery("torch_lit");s.scale.setScalar(1.2),s.position.set(i,0,-Tt*.25),s.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.material&&a.material.emissive&&(a.material.emissive.set(16737792),a.material.emissiveIntensity=1))}),e.add(s)}catch{}const n=t>0?"banner_red":"banner_blue";try{const s=this.assetLoader.getScenery(n);s.scale.setScalar(1.2),s.position.set(i,0,Tt*.25),s.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e.add(s)}catch{}}}_addLavaPool(e,t,i){const n=.5+Math.random()*1,s=new be(new Zs(n,12),new Re({color:16729088,emissive:16720384,emissiveIntensity:.8,roughness:.3}));s.rotation.x=-Math.PI/2,s.position.set(t,.02,i),e.add(s)}_addGroundDetails(e,t){if(this.theme==="lava")return;const i=6+Math.floor(Math.random()*6);for(let n=0;n<i;n++){const a=(Math.random()>.5?1:-1)*(Xn*.5+.5+Math.random()*6),o=(Math.random()-.5)*Tt,l=t.grassColors[Math.floor(Math.random()*t.grassColors.length)],c=new Ct,h=3+Math.floor(Math.random()*3);for(let d=0;d<h;d++){const u=new be(new da(.04,.2+Math.random()*.15,4),new Re({color:l}));u.position.set((Math.random()-.5)*.15,.1,(Math.random()-.5)*.15),u.rotation.x=(Math.random()-.5)*.3,u.rotation.z=(Math.random()-.5)*.3,c.add(u)}c.position.set(a,0,o),e.add(c)}}_addObstacles(e,t){const i=sh[this.theme]||sh.roman,n=[],s=Uv(this.difficulty);if(!s||!s.obstacles)return n;for(const a of s.obstacles){const o=a.lane,l=ks[o],h=a.zOffset||0;let d,u,p;if(a.type==="gate"){d="gate",p=ci.gate,u=new Ct;const m=new Re({color:6965802,roughness:.8,metalness:.1,emissive:4864538,emissiveIntensity:.2});for(let x=.3;x<=4.4;x+=.5){const S=new be(new ct(2.6,.35,.15),m);S.position.y=x,S.castShadow=!0,u.add(S)}for(const x of[-1.2,1.2]){const S=new be(new ct(.2,5,.2),new Re({color:5913114,roughness:.7,metalness:.2}));S.position.set(x,2.5,0),S.castShadow=!0,u.add(S)}const f=new be(new ct(.12,6.4,.1),m);f.position.y=2.5,f.rotation.z=.4,u.add(f),u.position.set(l,0,h)}else if(a.type==="slide_gate"){d="slide_gate",p=ci.slide_gate,u=new Ct;const m=new Re({color:5592405,roughness:.5,metalness:.6}),f=new Re({color:3815994,roughness:.4,metalness:.7});for(const v of[-1.2,1.2]){const R=new be(new ct(.2,4.5,.2),f);R.position.set(v,2.25,0),R.castShadow=!0,u.add(R)}for(let v=1;v<=3.4;v+=.45){const R=new be(new ct(2.6,.35,.2),m);R.position.y=v,R.castShadow=!0,u.add(R)}const x=new be(new ct(2.6,.2,.25),new Re({color:13382451,roughness:.4,metalness:.5,emissive:6689041,emissiveIntensity:.3}));x.position.y=1,x.castShadow=!0,u.add(x);const S=new be(new ct(2.6,.06,.26),new Re({color:16763904,emissive:16755200,emissiveIntensity:.4}));S.position.y=.88,u.add(S),u.position.set(l,0,h)}else if(a.breakable){const m=i.filter(f=>ci[f]&&ci[f].breakable);d=m.length>0?m[Math.floor(Math.random()*m.length)]:i[Math.floor(Math.random()*i.length)];try{u=this.assetLoader.getObstacle(d)}catch{continue}p=ci[d]||{width:1,height:1.5,depth:1,breakable:!1,scale:1.3},u.scale.setScalar(p.scale),u.position.set(l,0,h),u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),u.rotation.y=Math.random()*Math.PI*2}else if(a.type==="low"){const m=i.filter(f=>ci[f]&&ci[f].height<=1.2);d=m.length>0?m[Math.floor(Math.random()*m.length)]:i[Math.floor(Math.random()*i.length)];try{u=this.assetLoader.getObstacle(d)}catch{continue}p=ci[d]||{width:1,height:1.5,depth:1,breakable:!1,scale:1.3},u.scale.setScalar(p.scale),u.position.set(l,0,h),u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),u.rotation.y=Math.random()*Math.PI*2}else{d=i[Math.floor(Math.random()*i.length)];try{u=this.assetLoader.getObstacle(d)}catch{continue}p=ci[d]||{width:1,height:1.5,depth:1,breakable:!1,scale:1.3},u.scale.setScalar(p.scale),u.position.set(l,0,h),u.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),u.rotation.y=Math.random()*Math.PI*2}p||(p=ci[d]||{width:1,height:1.5,depth:1,breakable:!1,scale:1.3});const g=a.breakable||p.breakable,_=a.zOffset||0;Math.abs(_)<3&&n.push(o),u.userData={type:g?"chest":"wall",breakable:g,coinReward:p.coinReward||0,width:p.width,height:p.height,depth:p.depth,lane:o,modelName:d},e.add(u),this.activeObstacles.push(u)}return n}_addChest(e){const t=Math.floor(Math.random()*3),i=ks[t],n=ci.chest;let s;try{s=this.assetLoader.getObstacle("chest")}catch{return}s.scale.setScalar(n.scale),s.position.set(i,0,0),s.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.material&&(o.material=o.material.clone(),o.material.emissive=new pe(16755200),o.material.emissiveIntensity=.35,o.material.metalness=.6,o.material.roughness=.3))});const a=new Oi(16763972,.8,3);a.position.set(0,.5,0),s.add(a),e.add(s),s.userData={type:"chest",breakable:!0,lane:t,width:n.width,height:n.height,depth:n.depth,coinReward:n.coinReward||15},this.activeObstacles.push(s)}_addCoins(e,t=[]){const i=[0,1,2].filter(h=>!t.includes(h)),n=i.length>0?i[Math.floor(Math.random()*i.length)]:Math.floor(Math.random()*3),s=3+Math.floor(Math.random()*5),a=2.5,o=Nv(this.difficulty),c=(ih[o]||ih.straight)(n,s,a);for(const h of c){const d=ks[h.lane],u=h.y||.8,p=h.zOffset||0;if(t.includes(h.lane)&&u<2)continue;let g;try{g=this.assetLoader.getScenery("coin")}catch{g=this._fallbackCoin()}g.scale.setScalar(2),g.position.set(d,u,p),g.userData={_baseY:u,_phase:p*.5},g.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.material&&(_.material.emissive=new pe(16755200),_.material.emissiveIntensity=.8))}),e.add(g),this.activeCoins.push(g)}}_fallbackCoin(){const e=new Qs(.28,.28,.06,16),t=new Re({color:16766720,metalness:.9,roughness:.15,emissive:16755200,emissiveIntensity:.8}),i=new be(e,t);i.rotation.x=Math.PI/2;const n=new Ct;return n.add(i),n}_addPowerUp(e){const t=Math.floor(Math.random()*3),i=ks[t],n=(Math.random()-.5)*Tt*.5,s=["CoinBag","Revive","CoinMagnet","DoubleCoin","Invincibility","Antidote","TimeAdvantage","Shield"],a=Math.floor(Math.random()*s.length),o=s[a],l=zv[o];let c;try{c=this.assetLoader.getPickup(l)}catch{c=this._fallbackPowerUp(o)}c.scale.setScalar(1.8),c.position.set(i,1.5,n),c.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),c.userData={powerUpType:o,typeIndex:a+1,_baseY:1.5,_phase:n},e.add(c),this.activePowerUps.push(c)}_addGem(e){const t=Math.floor(Math.random()*3),i=ks[t],n=(Math.random()-.5)*Tt*.4,s=new qs(.35,2),a=new Re({color:10040319,emissive:6684876,emissiveIntensity:1.2,metalness:.9,roughness:.1,transparent:!0,opacity:.9}),o=new be(s,a),l=new Ct;l.add(o);const c=new qs(.2,1),h=new ni({color:16777215,transparent:!0,opacity:.6});l.add(new be(c,h)),l.scale.setScalar(1.2),l.position.set(i,1.2,n),l.userData={_baseY:1.2,_phase:n*.5,_isGem:!0},e.add(l),this.activeCoins.push(l)}_fallbackPowerUp(e){const t={CoinBag:16766720,Revive:4521796,CoinMagnet:16729343,DoubleCoin:16755200,Invincibility:58879,Antidote:8978176,TimeAdvantage:4491519,Shield:8930559},i=new qs(.35,1),n=new Re({color:t[e]||16777215,emissive:t[e]||16777215,emissiveIntensity:.3,metalness:.5,roughness:.3}),s=new be(i,n),a=new Ct;return a.add(s),a}_removeTile(e){e.group.traverse(t=>{let i=this.activeCoins.indexOf(t);i>=0&&this.activeCoins.splice(i,1),i=this.activeObstacles.indexOf(t),i>=0&&this.activeObstacles.splice(i,1),i=this.activePowerUps.indexOf(t),i>=0&&this.activePowerUps.splice(i,1)}),this.scene.remove(e.group),e.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}}class Gv{constructor(){this.queue=[],window.addEventListener("keydown",t=>{switch(t.code){case"KeyQ":case"ArrowLeft":this._push("left");break;case"KeyE":case"ArrowRight":this._push("right");break;case"KeyW":case"ArrowUp":case"Space":this._push("jump");break;case"KeyS":case"ArrowDown":this._push("slide");break;case"KeyF":this._push("attack");break;case"KeyA":case"KeyR":this._push("ability");break;case"Escape":this._push("pause");break}}),this._touchStart=null;const e=30;window.addEventListener("touchstart",t=>{const i=t.touches[0];this._touchStart={x:i.clientX,y:i.clientY,time:performance.now()}},{passive:!0}),window.addEventListener("touchend",t=>{if(!this._touchStart)return;const i=t.changedTouches[0],n=i.clientX-this._touchStart.x,s=i.clientY-this._touchStart.y,a=performance.now()-this._touchStart.time;if(this._touchStart=null,a>500)return;const o=Math.abs(n),l=Math.abs(s);if(o<e&&l<e){this._push("attack");return}o>l?this._push(n>0?"right":"left"):this._push(s>0?"slide":"jump")},{passive:!0})}_push(e){this.queue.push(e)}poll(){const e=this.queue;return this.queue=[],e}}class Vv{constructor(e){this.scene=e,this.dustGeo=new pt;const t=80,i=new Float32Array(t*3),n=new Float32Array(t),s=new Float32Array(t);this.dustData={positions:i,alphas:n,sizes:s,count:t,index:0},this.dustGeo.setAttribute("position",new Be(i,3)),this.dustGeo.setAttribute("alpha",new Be(n,1)),this.dustGeo.setAttribute("size",new Be(s,1)),this.dustMat=new _t({transparent:!0,depthWrite:!1,vertexShader:`
                attribute float alpha;
                attribute float size;
                varying float vAlpha;
                void main() {
                    vAlpha = alpha;
                    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (200.0 / -mvPos.z);
                    gl_Position = projectionMatrix * mvPos;
                }
            `,fragmentShader:`
                varying float vAlpha;
                void main() {
                    float d = length(gl_PointCoord - vec2(0.5));
                    if (d > 0.5) discard;
                    float a = vAlpha * smoothstep(0.5, 0.1, d);
                    gl_FragColor = vec4(0.85, 0.78, 0.65, a * 0.5);
                }
            `}),this.dustPoints=new wn(this.dustGeo,this.dustMat),e.add(this.dustPoints),this.sparkleGeo=new pt;const a=120,o=new Float32Array(a*3),l=new Float32Array(a),c=new Float32Array(a),h=new Float32Array(a*3);this.sparkleData={positions:o,alphas:l,sizes:c,colors:h,velocities:new Float32Array(a*3),count:a,active:new Uint8Array(a)},this.sparkleGeo.setAttribute("position",new Be(o,3)),this.sparkleGeo.setAttribute("alpha",new Be(l,1)),this.sparkleGeo.setAttribute("size",new Be(c,1)),this.sparkleGeo.setAttribute("color",new Be(h,3)),this.sparkleMat=new _t({transparent:!0,depthWrite:!1,vertexShader:`
                attribute float alpha;
                attribute float size;
                attribute vec3 color;
                varying float vAlpha;
                varying vec3 vColor;
                void main() {
                    vAlpha = alpha;
                    vColor = color;
                    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (150.0 / -mvPos.z);
                    gl_Position = projectionMatrix * mvPos;
                }
            `,fragmentShader:`
                varying float vAlpha;
                varying vec3 vColor;
                void main() {
                    float d = length(gl_PointCoord - vec2(0.5));
                    if (d > 0.5) discard;
                    float a = vAlpha * smoothstep(0.5, 0.0, d);
                    gl_FragColor = vec4(vColor, a);
                }
            `}),this.sparklePoints=new wn(this.sparkleGeo,this.sparkleMat),e.add(this.sparklePoints),this.debrisGeo=new pt;const d=60,u=new Float32Array(d*3),p=new Float32Array(d),g=new Float32Array(d),_=new Float32Array(d*3);this.debrisData={positions:u,alphas:p,sizes:g,colors:_,velocities:new Float32Array(d*3),rotations:new Float32Array(d),count:d,active:new Uint8Array(d)},this.debrisGeo.setAttribute("position",new Be(u,3)),this.debrisGeo.setAttribute("alpha",new Be(p,1)),this.debrisGeo.setAttribute("size",new Be(g,1)),this.debrisGeo.setAttribute("color",new Be(_,3)),this.debrisMat=new _t({transparent:!0,depthWrite:!1,vertexShader:`
                attribute float alpha;
                attribute float size;
                attribute vec3 color;
                varying float vAlpha;
                varying vec3 vColor;
                void main() {
                    vAlpha = alpha;
                    vColor = color;
                    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (200.0 / -mvPos.z);
                    gl_Position = projectionMatrix * mvPos;
                }
            `,fragmentShader:`
                varying float vAlpha;
                varying vec3 vColor;
                void main() {
                    vec2 uv = gl_PointCoord - vec2(0.5);
                    float d = max(abs(uv.x), abs(uv.y)); // square shape for debris
                    if (d > 0.45) discard;
                    float a = vAlpha * smoothstep(0.45, 0.2, d);
                    gl_FragColor = vec4(vColor * 0.8, a);
                }
            `}),this.debrisPoints=new wn(this.debrisGeo,this.debrisMat),e.add(this.debrisPoints);const m=new ua(.1,.5,24),f=new ni({color:16777215,transparent:!0,opacity:.6,side:jt,depthWrite:!1});this.landingRing=new be(m,f),this.landingRing.rotation.x=-Math.PI/2,this.landingRing.visible=!1,this._landingTimer=0,e.add(this.landingRing)}emitDust(e,t,i,n){const s=this.dustData,a=s.index;s.positions[a*3]=e+(Math.random()-.5)*.5,s.positions[a*3+1]=t+.05,s.positions[a*3+2]=i+.5+Math.random()*.3,s.alphas[a]=n?.9:.6,s.sizes[a]=n?4+Math.random()*3:2+Math.random()*2,s.index=(s.index+1)%s.count}burstSparkles(e,t,i,n=[1,.85,0],s=8){const a=this.sparkleData;for(let o=0;o<s;o++)for(let l=0;l<a.count;l++)if(!a.active[l]){a.active[l]=1,a.positions[l*3]=e,a.positions[l*3+1]=t,a.positions[l*3+2]=i,a.velocities[l*3]=(Math.random()-.5)*6,a.velocities[l*3+1]=2+Math.random()*4,a.velocities[l*3+2]=(Math.random()-.5)*6,a.alphas[l]=1,a.sizes[l]=2+Math.random()*4,a.colors[l*3]=n[0],a.colors[l*3+1]=n[1],a.colors[l*3+2]=n[2];break}}burstDebris(e,t,i,n=12){const s=this.debrisData,a=[[.6,.4,.2],[.5,.35,.15],[.7,.5,.25],[.4,.3,.15],[.55,.45,.3]];for(let o=0;o<n;o++)for(let l=0;l<s.count;l++)if(!s.active[l]){s.active[l]=1,s.positions[l*3]=e+(Math.random()-.5)*.5,s.positions[l*3+1]=t+Math.random()*.5,s.positions[l*3+2]=i+(Math.random()-.5)*.5,s.velocities[l*3]=(Math.random()-.5)*8,s.velocities[l*3+1]=3+Math.random()*6,s.velocities[l*3+2]=(Math.random()-.5)*8,s.alphas[l]=1,s.sizes[l]=3+Math.random()*6;const c=a[Math.floor(Math.random()*a.length)];s.colors[l*3]=c[0],s.colors[l*3+1]=c[1],s.colors[l*3+2]=c[2];break}}emitLandingImpact(e,t,i){this.landingRing.position.set(e,t+.05,i),this.landingRing.scale.set(.3,.3,.3),this.landingRing.material.opacity=.6,this.landingRing.visible=!0,this._landingTimer=.35;for(let n=0;n<8;n++)this.emitDust(e+(Math.random()-.5)*1.5,t,i+(Math.random()-.5)*1,!0)}update(e){const t=this.dustData;for(let s=0;s<t.count;s++)t.alphas[s]*=.95,t.positions[s*3+1]+=e*.3,t.alphas[s]<.01&&(t.alphas[s]=0);this.dustGeo.attributes.position.needsUpdate=!0,this.dustGeo.attributes.alpha.needsUpdate=!0,this.dustGeo.attributes.size.needsUpdate=!0;const i=this.sparkleData;for(let s=0;s<i.count;s++)i.active[s]&&(i.positions[s*3]+=i.velocities[s*3]*e,i.positions[s*3+1]+=i.velocities[s*3+1]*e,i.positions[s*3+2]+=i.velocities[s*3+2]*e,i.velocities[s*3+1]-=12*e,i.alphas[s]-=e*2,i.alphas[s]<=0&&(i.active[s]=0,i.alphas[s]=0));this.sparkleGeo.attributes.position.needsUpdate=!0,this.sparkleGeo.attributes.alpha.needsUpdate=!0,this.sparkleGeo.attributes.size.needsUpdate=!0,this.sparkleGeo.attributes.color.needsUpdate=!0;const n=this.debrisData;for(let s=0;s<n.count;s++)n.active[s]&&(n.positions[s*3]+=n.velocities[s*3]*e,n.positions[s*3+1]+=n.velocities[s*3+1]*e,n.positions[s*3+2]+=n.velocities[s*3+2]*e,n.velocities[s*3+1]-=15*e,n.alphas[s]-=e*1.5,n.positions[s*3+1]<.05&&n.velocities[s*3+1]<0&&(n.velocities[s*3+1]*=-.3,n.positions[s*3+1]=.05),n.alphas[s]<=0&&(n.active[s]=0,n.alphas[s]=0));if(this.debrisGeo.attributes.position.needsUpdate=!0,this.debrisGeo.attributes.alpha.needsUpdate=!0,this.debrisGeo.attributes.size.needsUpdate=!0,this.debrisGeo.attributes.color.needsUpdate=!0,this._landingTimer>0){this._landingTimer-=e;const s=1-this._landingTimer/.35,a=.3+s*3;this.landingRing.scale.set(a,a,a),this.landingRing.material.opacity=.6*(1-s),this._landingTimer<=0&&(this.landingRing.visible=!1)}}dispose(){this.scene.remove(this.dustPoints),this.scene.remove(this.sparklePoints),this.scene.remove(this.debrisPoints),this.scene.remove(this.landingRing),this.dustGeo.dispose(),this.dustMat.dispose(),this.sparkleGeo.dispose(),this.sparkleMat.dispose(),this.debrisGeo.dispose(),this.debrisMat.dispose(),this.landingRing.geometry.dispose(),this.landingRing.material.dispose()}}const rh="assets/audio/",nn={start:["start_1.mp3","start_2.mp3"],hit:["hit_1.mp3","hit_2.mp3"],death:["death_1.mp3","death_2.mp3"],nearMiss:["nearmiss_1.mp3","nearmiss_2.mp3","nearmiss_3.mp3"],combo:["combo_1.mp3","combo_2.mp3","combo_3.mp3"],revive:["revive_1.mp3"],gem:["gem_1.mp3","gem_2.mp3"],milestone:{500:"milestone_500.mp3",1e3:"milestone_1000.mp3",2e3:"milestone_2000.mp3",5e3:"milestone_5000.mp3"},biome:{forest:"biome_forest.mp3",desert:"biome_desert.mp3",lava:"biome_lava.mp3",snow:"biome_snow.mp3"},powerUp:{CoinBag:"powerup_coinbag.mp3",CoinMagnet:"powerup_coinmagnet.mp3",DoubleCoin:"powerup_doublecoin.mp3",Invincibility:"powerup_invincibility.mp3",Shield:"powerup_shield.mp3",Antidote:"powerup_speed.mp3",TimeAdvantage:"powerup_speed.mp3",SpeedBoost:"powerup_speed.mp3"}};class Ed{constructor(){this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.voiceGain=null,this.musicPlaying=!1,this._initialized=!1,this._sfxVolume=.5,this._musicVolume=.45,this._voiceVolume=.7,this._buffers={},this._loadPromises={},this._rawBuffers={},this._eagerDecodeReady=null,this._musicSource=null,this._menuMusicSource=null,this._voiceCooldown=0,this._lastVoiceTime=0}eagerPreload(...e){for(const t of e)this._rawBuffers[t]||(this._rawBuffers[t]=fetch(rh+t).then(i=>{if(!i.ok)throw new Error(`HTTP ${i.status}`);return i.arrayBuffer()}).catch(i=>(console.warn(`Eager preload failed for ${t}:`,i.message),delete this._rawBuffers[t],null)))}init(){if(!this._initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.8,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this._sfxVolume,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this._musicVolume,this.musicGain.connect(this.masterGain),this.voiceGain=this.ctx.createGain(),this.voiceGain.gain.value=this._voiceVolume,this.voiceGain.connect(this.masterGain),this._initialized=!0,this._eagerDecodeReady=this._decodeEagerBuffers(),this._preload("music_gameplay.mp3"),this._preload("music_menu.mp3");for(const e of Object.values(nn))typeof e=="string"?this._preload(e):Array.isArray(e)?e.forEach(t=>this._preload(t)):typeof e=="object"&&Object.values(e).forEach(t=>this._preload(t))}catch(e){console.warn("Audio init failed:",e)}}async _decodeEagerBuffers(){const e=Object.entries(this._rawBuffers);this._rawBuffers={};for(const[t,i]of e)if(!this._buffers[t])try{const n=await i;if(n&&!this._buffers[t]){const s=await this.ctx.decodeAudioData(n);this._buffers[t]=s}}catch(n){console.warn(`Failed to decode eagerly preloaded ${t}:`,n.message)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_preload(e){return this._buffers[e]?Promise.resolve():this._loadPromises[e]?this._loadPromises[e]:(this._loadPromises[e]=(async()=>{try{let t;if(this._rawBuffers[e]&&(t=await this._rawBuffers[e],delete this._rawBuffers[e]),!t){const i=await fetch(rh+e);if(!i.ok)throw new Error(`HTTP ${i.status}`);t=await i.arrayBuffer()}if(!this._buffers[e]){const i=await this.ctx.decodeAudioData(t);this._buffers[e]=i}}catch(t){console.warn(`Failed to load ${e}:`,t.message)}delete this._loadPromises[e]})(),this._loadPromises[e])}_playFile(e,t,i=!1,n=1){if(!this._initialized)return null;const s=this._buffers[e];if(!s)return null;const a=this.ctx.createBufferSource();a.buffer=s,a.loop=i;const o=this.ctx.createGain();return o.gain.value=n,a.connect(o),o.connect(t),a.start(0),{source:a,gain:o}}_playRandomVoice(e,t=5){if(!this._initialized)return;const i=performance.now()/1e3;if(i-this._lastVoiceTime<Math.max(this._voiceCooldown,5))return;const n=Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e;this._playFile(n,this.voiceGain)&&(this._lastVoiceTime=i,this._voiceCooldown=Math.max(t,5))}playCoinPickup(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(880,.08,e,.15,"sine"),this._playSine(1320,.08,e+.06,.12,"sine"),this._playSine(1760,.06,e+.1,.1,"sine")}playJump(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(200,e),t.frequency.exponentialRampToValueAtTime(600,e+.15),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+.2)}playDoubleJump(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(900,e+.12),i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+.18),this._playSine(1200,.05,e+.05,.08,"sine")}playSlide(){this._initialized&&this._playNoise(.18,this.ctx.currentTime,.12,800,200)}playAttack(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.12,e,.15,2e3,400),this._playSine(150,.08,e+.02,.08,"sawtooth")}playSmash(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.2,e,.25,1500,100),this._playSine(80,.15,e,.12,"sawtooth"),this._playSine(60,.1,e+.05,.15,"square")}playHit(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(100,.2,e,.2,"sawtooth"),this._playNoise(.15,e,.15,600,80),this._playSine(220,.1,e,.15,"square"),this._playSine(233,.1,e,.15,"square")}playDeath(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(400,e),t.frequency.exponentialRampToValueAtTime(50,e+.8),i.gain.setValueAtTime(.15,e),i.gain.linearRampToValueAtTime(.08,e+.3),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+1),this._playNoise(.2,e,.4,400,50),this._playSine(40,.12,e+.1,.6,"sine"),this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(nn.death,3)}playPowerUp(e){if(!this._initialized)return;const t=this.ctx.currentTime;[440,554,659,880,1108].forEach((s,a)=>{this._playSine(s,.08,t+a*.06,.18,"sine")}),this._playSine(1760,.04,t+.3,.3,"sine");const n=nn.powerUp[e];n&&(this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(n,2))}playNearMiss(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.08,e,.1,3e3,1e3),this._playSine(660,.06,e+.05,.1,"sine"),this._playSine(880,.06,e+.1,.1,"sine")}playCombo(e){if(!this._initialized)return;const t=this.ctx.currentTime,i=500+Math.min(e,20)*40;this._playSine(i,.06,t,.1,"sine"),this._playSine(i*1.5,.04,t+.04,.08,"sine")}playRevive(){if(!this._initialized)return;const e=this.ctx.currentTime;[262,330,392,523,659].forEach((i,n)=>{this._playSine(i,.1,e+n*.08,.4,"sine")}),this._playSine(1047,.06,e+.4,.5,"sine"),this._playSine(1319,.04,e+.5,.4,"sine"),this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(nn.revive,2)}playStart(){this._initialized&&(this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(nn.start,3))}playGem(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(1047,.1,e,.3,"sine"),this._playSine(1319,.08,e+.05,.25,"sine"),this._playSine(1568,.08,e+.1,.3,"sine"),this._playSine(2093,.06,e+.15,.35,"sine"),this._playRandomVoice(nn.gem,6)}playMilestone(e){if(!this._initialized)return;const t=this.ctx.currentTime;[523,659,784,1047].forEach((s,a)=>{this._playSine(s,.1,t+a*.1,.3,"sine")});const n=nn.milestone[e];n&&(this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(n,3))}playBiomeChange(e){if(!this._initialized)return;const t=nn.biome[e];t&&this._playRandomVoice(t,5)}playBossIntro(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.25,e,.8,200,40),this._playSine(60,.15,e,.6,"sawtooth"),this._playSine(80,.12,e+.2,.5,"sawtooth"),this._playSine(120,.1,e+.4,.4,"square"),this._playSine(220,.18,e+.6,.5,"sawtooth"),this._playSine(165,.15,e+.65,.45,"sawtooth")}playBossDefeat(){if(!this._initialized)return;const e=this.ctx.currentTime;[523,659,784,1047,1319].forEach((i,n)=>{this._playSine(i,.12,e+n*.08,.4,"sine")}),this._playSine(1568,.08,e+.4,.5,"sine"),this._playNoise(.3,e,.4,400,40),this._playSine(50,.2,e,.3,"sawtooth")}playMenuClick(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(800,.06,e,.06,"sine"),this._playSine(1e3,.05,e+.04,.05,"sine")}playLaneSwitchLeft(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(500,e),t.frequency.exponentialRampToValueAtTime(350,e+.08),i.gain.setValueAtTime(.06,e),i.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+.1)}playLaneSwitchRight(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(350,e),t.frequency.exponentialRampToValueAtTime(500,e+.08),i.gain.setValueAtTime(.06,e),i.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+.1)}playCountdownTick(){this._initialized&&this._playSine(600,.1,this.ctx.currentTime,.08,"sine")}playPause(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(400,.06,e,.1,"sine"),this._playSine(300,.06,e+.08,.12,"sine"),this.musicGain&&this.musicGain.gain.linearRampToValueAtTime(this._musicVolume*.2,e+.3)}playResume(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(300,.06,e,.1,"sine"),this._playSine(400,.06,e+.08,.12,"sine"),this.musicGain&&this.musicGain.gain.linearRampToValueAtTime(this._musicVolume,e+.3)}startMusic(){!this._initialized||this.musicPlaying||(this._stopMenuMusic(),this.musicPlaying=!0,this.musicGain.gain.value=this._musicVolume,this._tryPlayMusic("music_gameplay.mp3","_musicSource"))}async _tryPlayMusic(e,t){let i=this._playFile(e,this.musicGain,!0,1);if(i){this[t]=i;return}await this._preload(e),!(!this.musicPlaying&&t==="_musicSource")&&(i=this._playFile(e,this.musicGain,!0,1),i&&(this[t]=i))}stopMusic(){if(this.musicPlaying=!1,this._musicSource){try{this._musicSource.gain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+1);const e=this._musicSource.source;setTimeout(()=>{try{e.stop()}catch{}},1200)}catch{}this._musicSource=null}}async startMenuMusic(){if(!this._initialized)return;this._stopMenuMusic(),this._eagerDecodeReady&&await this._eagerDecodeReady;const e=this.ctx.currentTime;this.musicGain.gain.setValueAtTime(0,e),this.musicGain.gain.linearRampToValueAtTime(this._musicVolume,e+.15),this._tryPlayMusic("music_menu.mp3","_menuMusicSource")}_stopMenuMusic(){if(this._menuMusicSource){try{this._menuMusicSource.gain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.5);const e=this._menuMusicSource.source;setTimeout(()=>{try{e.stop()}catch{}},600)}catch{}this._menuMusicSource=null}}setMusicIntensity(e){}_playSine(e,t,i,n,s="sine"){const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=s,a.frequency.value=e,o.gain.setValueAtTime(t,i),o.gain.exponentialRampToValueAtTime(.001,i+n),a.connect(o),o.connect(this.sfxGain),a.start(i),a.stop(i+n+.01)}_playNoise(e,t,i,n=2e3,s=200){const a=this.ctx.sampleRate*i,o=this.ctx.createBuffer(1,a,this.ctx.sampleRate),l=o.getChannelData(0);for(let u=0;u<a;u++)l[u]=Math.random()*2-1;const c=this.ctx.createBufferSource();c.buffer=o;const h=this.ctx.createGain();h.gain.setValueAtTime(e,t),h.gain.exponentialRampToValueAtTime(.001,t+i);const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.value=(n+s)/2,d.Q.value=1,c.connect(d),d.connect(h),h.connect(this.sfxGain),c.start(t),c.stop(t+i+.01)}setSFXVolume(e){this._sfxVolume=e,this.sfxGain&&(this.sfxGain.gain.value=e)}setMusicVolume(e){this._musicVolume=e,this.musicGain&&(this.musicGain.gain.value=e)}setVoiceVolume(e){this._voiceVolume=e,this.voiceGain&&(this.voiceGain.gain.value=e)}}const ah=3,oh=[-ah,0,ah],Yn=[{delay:0,attacks:[{type:"fireball",lane:0,speed:22},{type:"fireball",lane:2,speed:22}]},{delay:2.5,attacks:[{type:"groundSlam",lane:0,speed:26},{type:"groundSlam",lane:1,speed:26},{type:"groundSlam",lane:2,speed:26}]},{delay:2.5,attacks:[{type:"beam",lane:0,speed:24},{type:"beam",lane:1,speed:24},{type:"beam",lane:2,speed:24}]},{delay:2,attacks:[{type:"fireball",lane:1,speed:28},{type:"groundSlam",lane:0,speed:25,delayOffset:.4},{type:"groundSlam",lane:2,speed:25,delayOffset:.4}]}],Wv={fireball:new Ss(.8,12,8),groundSlam:new ct(3.5,.6,1.5),beam:new ct(3.5,1.8,.8)},qv={fireball:new Re({color:16729088,emissive:16720384,emissiveIntensity:2.5,metalness:.3,roughness:.4}),groundSlam:new Re({color:16737792,emissive:16729088,emissiveIntensity:1.8,metalness:.2,roughness:.6}),beam:new Re({color:16711748,emissive:16711714,emissiveIntensity:2,metalness:.4,roughness:.3})},Xv={fireball:{width:1,height:1.5,yMin:.2,yMax:1.7},groundSlam:{width:2.4,height:.6,yMin:0,yMax:.6},beam:{width:2.4,height:1.4,yMin:1,yMax:2.4}},$v=Yn.length;class jv{constructor(e){this.scene=e,this.active=!1,this.phase="idle",this.timer=0,this.totalTime=12,this.waveIndex=0,this.waveTimer=0,this.encounterCount=0,this.bossGroup=null,this._bossZ=0,this.projectiles=[],this._pendingAttacks=[],this._gateGroup=null,this._glowPhase=0,this._telegraphs=[],this._defeatAnimTimer=-1,this._defeatAnimDuration=.5,this._auraMesh=null,this._auraMat=null}start(e,t){this.active=!0,this.phase="approaching",this.timer=this.totalTime,this.waveIndex=0,this.waveTimer=1.5,this._pendingAttacks=[],this.encounterCount++,this._bossZ=e-30,this._spawnBoss(t),this._spawnGate(e-20),this._approachTimer=1.5}update(e,t,i,n){if(!this.active){if(this._defeatAnimTimer>=0){if(this._defeatAnimTimer+=e,this.bossGroup){const s=this._defeatAnimTimer/this._defeatAnimDuration,a=2*(1+s*.15);this.bossGroup.scale.setScalar(a),this._bodyMat&&(this._bodyMat.emissiveIntensity=.8+s*4),this._eyeMat&&(this._eyeMat.emissiveIntensity=4+s*6,this._eyeMat.emissive.setHex(16777215))}this._defeatAnimTimer>=this._defeatAnimDuration&&(this.bossGroup&&(this.scene.remove(this.bossGroup),this.bossGroup=null),this._defeatAnimTimer=-1)}return}if(this._bossZ=i-28,this.bossGroup&&(this.bossGroup.position.z=this._bossZ,this._glowPhase+=e*3,this.bossGroup.position.y=3+Math.sin(this._glowPhase)*.5,this.bossGroup.rotation.y+=e*.5,this._eyeMat&&(this._eyeMat.emissiveIntensity=3+Math.sin(this._glowPhase*2)*1),this._auraMat&&(this._auraMat.opacity=.35+Math.sin(this._glowPhase*1.5)*.15),this._auraMesh)){const s=1+Math.sin(this._glowPhase*1.5)*.08;this._auraMesh.scale.set(s,s,1)}this._gateGroup&&this._gateGroup.position.z>i+30&&(this.scene.remove(this._gateGroup),this._gateGroup=null);for(let s=this._telegraphs.length-1;s>=0;s--){const a=this._telegraphs[s];a.timer+=e,a.mesh.position.z=i-30,a.timer<a.duration*.5?a.mat.opacity=a.timer/(a.duration*.5)*.6:a.mat.opacity=.6*(1-(a.timer-a.duration*.5)/(a.duration*.5)),a.timer>=a.duration&&(this.scene.remove(a.mesh),this._telegraphs.splice(s,1))}if(this.phase==="approaching"&&(this._approachTimer-=e,this._approachTimer<=0&&(this.phase="fighting")),this.phase==="fighting"){this.timer-=e,this.waveTimer-=e,this.waveTimer<=0&&this.waveIndex<Yn.length&&(this._executeWave(this.waveIndex),this.waveIndex++,this.waveIndex<Yn.length&&(this.waveTimer=Yn[this.waveIndex].delay));for(let s=this._pendingAttacks.length-1;s>=0;s--)if(this._pendingAttacks[s].delay-=e,this._pendingAttacks[s].delay<=0){const a=this._pendingAttacks.splice(s,1)[0];a.type==="_telegraph"?this._spawnTelegraph(a.lane,a.attackType):this._spawnProjectile(a.lane,a.type,a.speed,i-50)}if(this.waveIndex>=Yn.length&&this.projectiles.length===0&&this._pendingAttacks.length===0){this._defeatBoss();return}if(this.timer<=0){this._defeatBoss();return}}this._updateProjectiles(e,i)}getProjectileCollisions(e,t,i,n,s){const a=[],o=e-.5,l=e+.5,c=i+s,h=i+s+n,d=t-.5,u=t+.5;for(let p=this.projectiles.length-1;p>=0;p--){const g=this.projectiles[p],_=g.mesh.position,m=Xv[g.type],f=m.width*.5,x=_.x-f,S=_.x+f,v=m.yMin,R=m.yMax,A=_.z-.5,E=_.z+.5;l>x&&o<S&&h>v&&c<R&&u>A&&d<E&&(a.push(g),this.scene.remove(g.mesh),this.projectiles.splice(p,1))}return a}_executeWave(e){const t=Yn[e];if(!t)return;const i=.5;for(const n of t.attacks){const s=Math.min(10,this.encounterCount*2),a=n.speed+s,o=(n.delayOffset||0)+i;n.delayOffset?this._pendingAttacks.push({type:"_telegraph",lane:n.lane,attackType:n.type,speed:0,delay:n.delayOffset}):this._spawnTelegraph(n.lane,n.type),this._pendingAttacks.push({type:n.type,lane:n.lane,speed:a,delay:o})}}_spawnProjectile(e,t,i,n){const s=Wv[t],a=qv[t],o=new be(s,a);if(o.position.set(oh[e],t==="beam"?1.7:.3,n),o.castShadow=!0,t==="fireball"){const l=new Oi(16729088,3,10,2);o.add(l)}else if(t==="groundSlam"){const l=new Oi(16737792,2,8,2);o.add(l)}else if(t==="beam"){const l=new Oi(16711748,2,8,2);o.add(l)}this.scene.add(o),this.projectiles.push({mesh:o,type:t,speed:i,lane:e})}_spawnTelegraph(e,t){const n={fireball:16729088,groundSlam:16737792,beam:16711748}[t]||16729088,s=new hn(2.5,6),a=new ni({color:n,transparent:!0,opacity:0,side:jt}),o=new be(s,a);o.rotation.x=-Math.PI/2,o.position.set(oh[e],.05,this._bossZ),this.scene.add(o),this._telegraphs.push({mesh:o,mat:a,timer:0,duration:.5})}_updateProjectiles(e,t){for(let i=this.projectiles.length-1;i>=0;i--){const n=this.projectiles[i];if(n.mesh.position.z+=n.speed*e,n.type==="fireball"&&(n.mesh.rotation.x+=e*8,n.mesh.rotation.z+=e*5),n.type==="groundSlam"){const s=1+Math.sin(performance.now()*.01)*.1;n.mesh.scale.y=s}n.mesh.position.z>t+5&&(this.scene.remove(n.mesh),this.projectiles.splice(i,1))}}_defeatBoss(){this.phase="defeated",this.active=!1,this._defeatAnimTimer=0;for(const e of this.projectiles)this.scene.remove(e.mesh);this.projectiles=[],this._pendingAttacks=[];for(const e of this._telegraphs)this.scene.remove(e.mesh);this._telegraphs=[],this._gateGroup&&(this.scene.remove(this._gateGroup),this._gateGroup=null)}_spawnBoss(e){this.bossGroup&&this.scene.remove(this.bossGroup),this.bossGroup=new Ct;const i={roman:4849715,forest:1718794,desert:5913098,lava:3801088,snow:1714746}[e]||4849715,n=new ct(3,4,2),s=new Re({color:i,roughness:.6,metalness:.4,emissive:i,emissiveIntensity:.8});this._bodyMat=s;const a=new be(n,s);a.position.y=0,this.bossGroup.add(a);const o=new ct(2,2,1.8),l=new be(o,s);l.position.y=3,this.bossGroup.add(l);const c=new da(.3,1.5,6),h=new Re({color:2236962,roughness:.3,metalness:.8});for(const m of[-.7,.7]){const f=new be(c,h);f.position.set(m,4.2,0),f.rotation.z=m>0?-.3:.3,this.bossGroup.add(f)}const d=new Ss(.25,8,6);this._eyeMat=new Re({color:16729088,emissive:16729088,emissiveIntensity:4});for(const m of[-.5,.5]){const f=new be(d,this._eyeMat);f.position.set(m,3.2,.9),this.bossGroup.add(f)}const u=new ct(1.2,3.5,1);for(const m of[-2,2]){const f=new be(u,s);f.position.set(m,-.3,0),f.rotation.z=m>0?.15:-.15,this.bossGroup.add(f)}const p=new ua(5,6,32);this._auraMat=new ni({color:16729088,transparent:!0,opacity:.5,side:jt}),this._auraMesh=new be(p,this._auraMat),this._auraMesh.rotation.x=Math.PI/2,this._auraMesh.position.y=-1.5,this.bossGroup.add(this._auraMesh);const g=new Oi(16729088,4,35,2);g.position.set(0,2,0),this.bossGroup.add(g);const _=new Oi(16746496,3,30,2);_.position.set(0,8,0),this.bossGroup.add(_),this.bossGroup.position.set(0,3,this._bossZ),this.bossGroup.scale.setScalar(2),this.scene.add(this.bossGroup)}_spawnGate(e){this._gateGroup&&this.scene.remove(this._gateGroup),this._gateGroup=new Ct,this._gateGroup.position.z=e;const t=new ct(1.5,7,1.5),i=new Re({color:4849664,emissive:16720384,emissiveIntensity:.4,roughness:.5,metalness:.3});for(const a of[-4,4]){const o=new be(t,i);o.position.set(a,3.5,0),o.castShadow=!0,this._gateGroup.add(o)}const n=new ct(9.5,.8,1.5),s=new be(n,i);s.position.set(0,7.2,0),this._gateGroup.add(s);for(const a of[-4,4]){const o=new Oi(16720384,2,8,2);o.position.set(a,7.5,0),this._gateGroup.add(o)}this.scene.add(this._gateGroup)}dispose(){this.bossGroup&&(this.scene.remove(this.bossGroup),this.bossGroup=null),this._gateGroup&&(this.scene.remove(this._gateGroup),this._gateGroup=null);for(const e of this.projectiles)this.scene.remove(e.mesh);for(const e of this._telegraphs)this.scene.remove(e.mesh);this.projectiles=[],this._pendingAttacks=[],this._telegraphs=[],this._defeatAnimTimer=-1,this.active=!1,this.phase="idle"}}const lh="0x348e62131fce2F4e0d5ead3Fe1719Bc039B380A9",kr="0x89",Yv="https://polygon-rpc.com";class Kv{constructor(){this.connected=!1,this.address=null,this.pyrBalance=0,this.chainId=null,this._provider=null,this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}_emit(e,t){(this._listeners[e]||[]).forEach(i=>i(t))}async connect(){if(!window.ethereum)return this._emit("error","No wallet detected. Please install MetaMask."),!1;try{const e=await window.ethereum.request({method:"eth_requestAccounts"});return!e||e.length===0?(this._emit("error","No accounts found."),!1):(this.address=e[0],this.chainId=await window.ethereum.request({method:"eth_chainId"}),this._provider=window.ethereum,this.connected=!0,this.chainId!==kr&&await this._switchToPolygon(),await this.refreshBalance(),window.ethereum.on("accountsChanged",t=>{this.address=t[0]||null,this.connected=!!this.address,this._emit("accountChanged",this.address),this.connected&&this.refreshBalance()}),window.ethereum.on("chainChanged",t=>{this.chainId=t,this._emit("chainChanged",t),this.refreshBalance()}),this._emit("connected",{address:this.address,balance:this.pyrBalance}),!0)}catch(e){return this._emit("error",e.message||"Connection failed"),!1}}disconnect(){this.connected=!1,this.address=null,this.pyrBalance=0,this._emit("disconnected")}async _switchToPolygon(){try{await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:kr}]})}catch(e){e.code===4902&&await window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:kr,chainName:"Polygon Mainnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:[Yv],blockExplorerUrls:["https://polygonscan.com/"]}]})}}async refreshBalance(){if(!this.connected||!this.address)return 0;try{const e="0x70a08231"+this.address.slice(2).padStart(64,"0"),t=await window.ethereum.request({method:"eth_call",params:[{to:lh,data:e},"latest"]}),i=BigInt(t);return this.pyrBalance=Number(i/BigInt(10**14))/1e4,this._emit("balanceUpdated",this.pyrBalance),this.pyrBalance}catch(e){return console.warn("Failed to get PYR balance:",e.message),0}}async writeScoreToChain(e,t,i){if(!this.connected||!this.address)return this._emit("error","Wallet not connected"),null;try{const n=new TextEncoder,s=JSON.stringify({game:"VulcanRunner",score:Math.floor(e),distance:Math.floor(t),coins:i,timestamp:Date.now(),player:this.address}),a="0x"+Array.from(n.encode(s)).map(l=>l.toString(16).padStart(2,"0")).join(""),o=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:this.address,to:this.address,value:"0x0",data:a,gas:"0x15F90"}]});return this._emit("scoreWritten",{txHash:o,score:e,distance:t}),o}catch(n){return this._emit("error",n.message||"Failed to write score"),null}}async sendPYR(e,t){if(!this.connected||!this.address)return this._emit("error","Wallet not connected"),null;try{const n=BigInt(Math.floor(e*1e18)).toString(16).padStart(64,"0"),a="0xa9059cbb"+t.slice(2).padStart(64,"0")+n,o=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:this.address,to:lh,data:a,gas:"0x186A0"}]});return this._emit("pyrSent",{txHash:o,amount:e,to:t}),await this.refreshBalance(),o}catch(i){return this._emit("error",i.message||"Transaction failed"),null}}shortAddress(){return this.address?this.address.slice(0,6)+"..."+this.address.slice(-4):""}isOnPolygon(){return this.chainId===kr}}const Os={characters:[{id:"knight",name:"Knight",emoji:"⚔️",desc:"Balanced fighter",currency:"free",price:0,unlocked:!0},{id:"barbarian",name:"Barbarian",emoji:"🪓",desc:"Raw power",currency:"coins",price:500,unlocked:!1},{id:"mage",name:"Mage",emoji:"🔮",desc:"Arcane speed",currency:"pyr",price:5,unlocked:!1,premium:!0},{id:"rogue",name:"Rogue",emoji:"🗡️",desc:"Shadow step",currency:"pyr",price:8,unlocked:!1,premium:!0},{id:"paladin",name:"Paladin",emoji:"🛡️",desc:"Divine shield",currency:"pyr",price:12,unlocked:!1,premium:!0}],boosts:[{id:"head_start",name:"Head Start",emoji:"🚀",desc:"Start at 500m with coins",currency:"coins",price:200,consumable:!0},{id:"extra_life",name:"Extra Life",emoji:"💚",desc:"+1 revive per run",currency:"coins",price:300,consumable:!0},{id:"coin_boost",name:"2x Coins",emoji:"🪙",desc:"Double coins for one run",currency:"coins",price:150,consumable:!0},{id:"shield_start",name:"Shield Start",emoji:"🛡️",desc:"Start run with Shield",currency:"pyr",price:2,consumable:!0,premium:!0},{id:"magnet_start",name:"Magnet Start",emoji:"🧲",desc:"Start run with CoinMagnet",currency:"pyr",price:2,consumable:!0,premium:!0}]};class ch{constructor(){this._unlocked=JSON.parse(localStorage.getItem("vr_unlocked")||'["knight"]'),this._inventory=JSON.parse(localStorage.getItem("vr_inventory")||"{}"),this._totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10);for(const e of Os.characters)e.unlocked=this._unlocked.includes(e.id)}getItems(){return Os}getCharacters(){return Os.characters}getBoosts(){return Os.boosts}isUnlocked(e){return this._unlocked.includes(e)}getInventoryCount(e){return this._inventory[e]||0}buyWithCoins(e){const t=this._findItem(e);if(!t)return{success:!1,error:"Item not found"};if(t.currency!=="coins")return{success:!1,error:"Item requires PYR"};if(this._totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10),this._totalCoins<t.price)return{success:!1,error:"Not enough coins"};if(t.consumable)this._inventory[e]=(this._inventory[e]||0)+1,localStorage.setItem("vr_inventory",JSON.stringify(this._inventory));else{if(this._unlocked.includes(e))return{success:!1,error:"Already unlocked"};this._unlocked.push(e),t.unlocked=!0,localStorage.setItem("vr_unlocked",JSON.stringify(this._unlocked))}return this._totalCoins-=t.price,localStorage.setItem("vr_coins",String(this._totalCoins)),{success:!0,newBalance:this._totalCoins}}async buyWithPYR(e,t,i){const n=this._findItem(e);if(!n)return{success:!1,error:"Item not found"};if(n.currency!=="pyr")return{success:!1,error:"Item uses coins, not PYR"};if(!t.connected)return{success:!1,error:"Wallet not connected"};if(t.pyrBalance<n.price)return{success:!1,error:`Need ${n.price} PYR (have ${t.pyrBalance.toFixed(2)})`};const s=await t.sendPYR(n.price,i);return s?(n.consumable?(this._inventory[e]=(this._inventory[e]||0)+1,localStorage.setItem("vr_inventory",JSON.stringify(this._inventory))):this._unlocked.includes(e)||(this._unlocked.push(e),n.unlocked=!0,localStorage.setItem("vr_unlocked",JSON.stringify(this._unlocked))),{success:!0,txHash:s}):{success:!1,error:"Transaction cancelled or failed"}}useBoost(e){const t=this._inventory[e]||0;return t<=0?!1:(this._inventory[e]=t-1,localStorage.setItem("vr_inventory",JSON.stringify(this._inventory)),!0)}getActiveBoosts(){return{...this._inventory}}getCoins(){return parseInt(localStorage.getItem("vr_coins")||"0",10)}_findItem(e){for(const t of Object.values(Os)){const i=t.find(n=>n.id===e);if(i)return i}return null}}const Or="vr_leaderboard",hh=50;class Jv{constructor(){this.entries=JSON.parse(localStorage.getItem(Or)||"[]")}submit(e){const t={name:e.name||"Player",score:Math.floor(e.score),distance:Math.floor(e.distance),coins:e.coins||0,character:e.character||"knight",maxCombo:e.maxCombo||0,date:new Date().toISOString(),address:e.address||null,txHash:e.txHash||null};return this.entries.push(t),this.entries.sort((i,n)=>n.score-i.score),this.entries.length>hh&&(this.entries=this.entries.slice(0,hh)),localStorage.setItem(Or,JSON.stringify(this.entries)),this._getRank(t.score)}getTop(e=10){return this.entries.slice(0,e)}getPersonalBest(e){if(!e)return null;const t=e.toLowerCase();return this.entries.find(i=>i.address&&i.address.toLowerCase()===t)||null}_getRank(e){const t=this.entries.findIndex(i=>i.score<=e);return t===-1?this.entries.length:t+1}markOnChain(e,t){const i=this.entries.find(n=>n.score===e&&!n.txHash);i&&(i.txHash=t,localStorage.setItem(Or,JSON.stringify(this.entries)))}clear(){this.entries=[],localStorage.setItem(Or,JSON.stringify(this.entries))}}const ja=[{id:"forest",name:"Enchanted Forest",icon:"🌲",theme:"forest",requiredStars:0,stages:[{id:"forest_1",name:"Mossy Trail",description:"A gentle jog through dappled sunlight.",objectives:{star1:{type:"distance",target:200},star2:{type:"coins",target:30},star3:{type:"score",target:500}},modifiers:{fixedTheme:"forest",speedMultiplier:.8,obstacleFrequency:.6,coinMultiplier:1}},{id:"forest_2",name:"Whispering Willows",description:"The trees seem to lean in and whisper secrets.",objectives:{star1:{type:"distance",target:350},star2:{type:"score",target:1e3},star3:{type:"combo",target:5}},modifiers:{fixedTheme:"forest",speedMultiplier:.85,obstacleFrequency:.7,coinMultiplier:1}},{id:"forest_3",name:"Toadstool Hollow",description:"Giant mushrooms block the path ahead.",objectives:{star1:{type:"distance",target:500},star2:{type:"coins",target:60},star3:{type:"noHit",target:200}},modifiers:{fixedTheme:"forest",speedMultiplier:.9,obstacleFrequency:.75,coinMultiplier:1.2}},{id:"forest_4",name:"Firefly Glade",description:"Bioluminescent bugs light your way through the dark.",objectives:{star1:{type:"score",target:2e3},star2:{type:"combo",target:8},star3:{type:"coins",target:100}},modifiers:{fixedTheme:"forest",speedMultiplier:.9,obstacleFrequency:.8,coinMultiplier:1.3}},{id:"forest_5",name:"Briar Thicket",description:"Thorny tangles demand sharp reflexes.",objectives:{star1:{type:"distance",target:700},star2:{type:"noHit",target:350},star3:{type:"score",target:3e3}},modifiers:{fixedTheme:"forest",speedMultiplier:1,obstacleFrequency:.9,coinMultiplier:1}},{id:"forest_6",name:"Canopy Sprint",description:"Race across the treetops at breakneck speed!",objectives:{star1:{type:"distance",target:900},star2:{type:"score",target:4e3},star3:{type:"combo",target:12}},modifiers:{fixedTheme:"forest",speedMultiplier:1.15,obstacleFrequency:.85,coinMultiplier:1}},{id:"forest_7",name:"Pixie Ambush",description:"Mischievous pixies have rigged the forest with traps.",objectives:{star1:{type:"distance",target:1e3},star2:{type:"chests",target:3},star3:{type:"noHit",target:500}},modifiers:{fixedTheme:"forest",speedMultiplier:1,obstacleFrequency:1,coinMultiplier:1.5}},{id:"forest_8",name:"Treant's Domain",description:"The ancient Treant guards the forest heart.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"score",target:6e3},star3:{type:"noHit",target:400}},modifiers:{fixedTheme:"forest",speedMultiplier:1,obstacleFrequency:.9,coinMultiplier:1.2,bossEnabled:!0,bossAtDistance:800}},{id:"forest_9",name:"Overgrown Ruins",description:"Crumbling stone and creeping vines hide treasures.",objectives:{star1:{type:"distance",target:1300},star2:{type:"coins",target:200},star3:{type:"chests",target:5}},modifiers:{fixedTheme:"forest",speedMultiplier:1.1,obstacleFrequency:1.05,coinMultiplier:1.8}},{id:"forest_10",name:"Heart of the Wilds",description:"The deepest grove — only the worthy may pass.",objectives:{star1:{type:"distance",target:1500},star2:{type:"score",target:1e4},star3:{type:"noHit",target:700}},modifiers:{fixedTheme:"forest",speedMultiplier:1.15,obstacleFrequency:1.1,coinMultiplier:1.5}}]},{id:"desert",name:"Scorching Sands",icon:"🏜️",theme:"desert",requiredStars:12,stages:[{id:"desert_1",name:"Dune Dash",description:"Golden dunes stretch to the horizon.",objectives:{star1:{type:"distance",target:400},star2:{type:"coins",target:50},star3:{type:"score",target:1500}},modifiers:{fixedTheme:"desert",speedMultiplier:1,obstacleFrequency:.8,coinMultiplier:1}},{id:"desert_2",name:"Mirage Mile",description:"Nothing is what it seems out here.",objectives:{star1:{type:"distance",target:600},star2:{type:"combo",target:8},star3:{type:"score",target:2500}},modifiers:{fixedTheme:"desert",speedMultiplier:1.05,obstacleFrequency:.9,coinMultiplier:1}},{id:"desert_3",name:"Sandstorm Surge",description:"A wall of sand bears down — keep moving!",objectives:{star1:{type:"distance",target:800},star2:{type:"noHit",target:300},star3:{type:"score",target:4e3}},modifiers:{fixedTheme:"desert",speedMultiplier:1.1,obstacleFrequency:1.2,coinMultiplier:1}},{id:"desert_4",name:"Oasis Blitz",description:"Grab every coin before the oasis dries up!",objectives:{star1:{type:"coins",target:150},star2:{type:"chests",target:4},star3:{type:"score",target:5e3}},modifiers:{fixedTheme:"desert",speedMultiplier:1,obstacleFrequency:.85,coinMultiplier:2,timeLimit:60}},{id:"desert_5",name:"Scorpion Pass",description:"The canyon narrows and the obstacles multiply.",objectives:{star1:{type:"distance",target:1e3},star2:{type:"noHit",target:500},star3:{type:"combo",target:15}},modifiers:{fixedTheme:"desert",speedMultiplier:1.1,obstacleFrequency:1.3,coinMultiplier:1}},{id:"desert_6",name:"Sunblaze Sprint",description:"The heat is on. Run faster than the sun.",objectives:{star1:{type:"distance",target:1200},star2:{type:"score",target:7e3},star3:{type:"distance",target:1600}},modifiers:{fixedTheme:"desert",speedMultiplier:1.3,obstacleFrequency:1,coinMultiplier:1,timeLimit:45}},{id:"desert_7",name:"Tomb Raider's Run",description:"Ancient traps guard forgotten riches.",objectives:{star1:{type:"chests",target:6},star2:{type:"coins",target:250},star3:{type:"noHit",target:600}},modifiers:{fixedTheme:"desert",speedMultiplier:1.05,obstacleFrequency:1.2,coinMultiplier:2}},{id:"desert_8",name:"Sphinx's Gauntlet",description:"Answer the Sphinx with your feet — dodge or perish.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"score",target:8e3},star3:{type:"noHit",target:500}},modifiers:{fixedTheme:"desert",speedMultiplier:1.1,obstacleFrequency:1.1,coinMultiplier:1.2,bossEnabled:!0,bossAtDistance:1e3}},{id:"desert_9",name:"Quicksand Frenzy",description:"The ground itself is your enemy.",objectives:{star1:{type:"distance",target:1400},star2:{type:"combo",target:20},star3:{type:"score",target:12e3}},modifiers:{fixedTheme:"desert",speedMultiplier:1.15,obstacleFrequency:1.4,coinMultiplier:1,maxHealth:2}},{id:"desert_10",name:"Eye of the Storm",description:"Survive the mega-sandstorm to claim your glory.",objectives:{star1:{type:"distance",target:1800},star2:{type:"score",target:15e3},star3:{type:"noHit",target:800}},modifiers:{fixedTheme:"desert",speedMultiplier:1.25,obstacleFrequency:1.5,coinMultiplier:1.5,timeLimit:90}}]},{id:"lava",name:"Volcanic Depths",icon:"🌋",theme:"lava",requiredStars:25,stages:[{id:"lava_1",name:"Ember Gateway",description:"The descent begins. Heat rises from below.",objectives:{star1:{type:"distance",target:500},star2:{type:"score",target:3e3},star3:{type:"combo",target:10}},modifiers:{fixedTheme:"lava",speedMultiplier:1.1,obstacleFrequency:1,coinMultiplier:1,maxHealth:3}},{id:"lava_2",name:"Magma Channels",description:"Rivers of molten rock carve the only path forward.",objectives:{star1:{type:"distance",target:700},star2:{type:"noHit",target:400},star3:{type:"score",target:5e3}},modifiers:{fixedTheme:"lava",speedMultiplier:1.15,obstacleFrequency:1.1,coinMultiplier:1,maxHealth:3}},{id:"lava_3",name:"Obsidian Gauntlet",description:"Razor-sharp rocks and zero margin for error.",objectives:{star1:{type:"distance",target:900},star2:{type:"noHit",target:600},star3:{type:"combo",target:15}},modifiers:{fixedTheme:"lava",speedMultiplier:1.15,obstacleFrequency:1.3,coinMultiplier:1,maxHealth:2,noRevive:!0}},{id:"lava_4",name:"Flame Warden's Keep",description:"A fiery guardian blocks the tunnel.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"score",target:7e3},star3:{type:"coins",target:150}},modifiers:{fixedTheme:"lava",speedMultiplier:1.1,obstacleFrequency:1.1,coinMultiplier:1.3,maxHealth:3,bossEnabled:!0,bossAtDistance:700}},{id:"lava_5",name:"Eruption Sprint",description:"The volcano is blowing — run for your life!",objectives:{star1:{type:"distance",target:1200},star2:{type:"score",target:9e3},star3:{type:"distance",target:1600}},modifiers:{fixedTheme:"lava",speedMultiplier:1.35,obstacleFrequency:1.2,coinMultiplier:1,maxHealth:2,timeLimit:50}},{id:"lava_6",name:"Cinder Maze",description:"Choking ash and falling debris. Stay sharp.",objectives:{star1:{type:"distance",target:1e3},star2:{type:"chests",target:5},star3:{type:"noHit",target:700}},modifiers:{fixedTheme:"lava",speedMultiplier:1.1,obstacleFrequency:1.4,coinMultiplier:1.5,maxHealth:2,noRevive:!0}},{id:"lava_7",name:"Inferno Blitz",description:"Everything is on fire. Collect while you can.",objectives:{star1:{type:"coins",target:300},star2:{type:"combo",target:20},star3:{type:"score",target:15e3}},modifiers:{fixedTheme:"lava",speedMultiplier:1.2,obstacleFrequency:1.3,coinMultiplier:2.5,maxHealth:2,timeLimit:60}},{id:"lava_8",name:"Hellforge Passage",description:"The walls pulse with heat. One mistake is fatal.",objectives:{star1:{type:"distance",target:1500},star2:{type:"noHit",target:1e3},star3:{type:"score",target:18e3}},modifiers:{fixedTheme:"lava",speedMultiplier:1.2,obstacleFrequency:1.5,coinMultiplier:1,maxHealth:1,noRevive:!0}},{id:"lava_9",name:"Caldera of Souls",description:"The volcano's heart beats with ancient power.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"score",target:2e4},star3:{type:"noHit",target:800}},modifiers:{fixedTheme:"lava",speedMultiplier:1.25,obstacleFrequency:1.4,coinMultiplier:1.5,maxHealth:2,bossEnabled:!0,bossAtDistance:1200,noRevive:!0}},{id:"lava_10",name:"Vulcan's Throne",description:"Face the Volcano Lord. Only legends survive.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"noHit",target:1200},star3:{type:"score",target:3e4}},modifiers:{fixedTheme:"lava",speedMultiplier:1.3,obstacleFrequency:1.5,coinMultiplier:2,maxHealth:1,bossEnabled:!0,bossAtDistance:1500,noRevive:!0}}]},{id:"underwater",name:"Abyssal Depths",icon:"🌊",theme:"underwater",requiredStars:45,stages:[{id:"underwater_1",name:"Shallow Reef",description:"Crystal clear waters ease you in.",objectives:{star1:{type:"distance",target:400},star2:{type:"coins",target:60},star3:{type:"score",target:2e3}},modifiers:{fixedTheme:"underwater",speedMultiplier:.85,obstacleFrequency:.7,coinMultiplier:1.2}},{id:"underwater_2",name:"Kelp Forest",description:"Thick seaweed tangles slow your path.",objectives:{star1:{type:"distance",target:600},star2:{type:"noHit",target:300},star3:{type:"combo",target:10}},modifiers:{fixedTheme:"underwater",speedMultiplier:.9,obstacleFrequency:.85,coinMultiplier:1}},{id:"underwater_3",name:"Coral Maze",description:"Navigate the twisting coral formations.",objectives:{star1:{type:"distance",target:800},star2:{type:"chests",target:4},star3:{type:"score",target:5e3}},modifiers:{fixedTheme:"underwater",speedMultiplier:.95,obstacleFrequency:1,coinMultiplier:1.5}},{id:"underwater_4",name:"Jellyfish Swarm",description:"Electric jellyfish fill every lane.",objectives:{star1:{type:"distance",target:1e3},star2:{type:"noHit",target:500},star3:{type:"score",target:8e3}},modifiers:{fixedTheme:"underwater",speedMultiplier:1,obstacleFrequency:1.3,coinMultiplier:1,maxHealth:3}},{id:"underwater_5",name:"Shipwreck Alley",description:"Loot the wrecks before the current takes you.",objectives:{star1:{type:"chests",target:8},star2:{type:"coins",target:300},star3:{type:"combo",target:15}},modifiers:{fixedTheme:"underwater",speedMultiplier:1,obstacleFrequency:1,coinMultiplier:2}},{id:"underwater_6",name:"The Deep Trench",description:"Darkness closes in. Air is scarce.",objectives:{star1:{type:"distance",target:1200},star2:{type:"score",target:1e4},star3:{type:"noHit",target:700}},modifiers:{fixedTheme:"underwater",speedMultiplier:1.1,obstacleFrequency:1.2,coinMultiplier:1,maxHealth:2}},{id:"underwater_7",name:"Angler's Domain",description:"Face the beast of the deep.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"score",target:12e3},star3:{type:"noHit",target:600}},modifiers:{fixedTheme:"underwater",speedMultiplier:1.05,obstacleFrequency:1.1,coinMultiplier:1.3,maxHealth:3,bossEnabled:!0,bossAtDistance:900}},{id:"underwater_8",name:"Maelstrom Run",description:"The whirlpool drags everything into chaos.",objectives:{star1:{type:"distance",target:1500},star2:{type:"combo",target:20},star3:{type:"score",target:18e3}},modifiers:{fixedTheme:"underwater",speedMultiplier:1.2,obstacleFrequency:1.4,coinMultiplier:1,maxHealth:2,noRevive:!0}},{id:"underwater_9",name:"Leviathan's Wake",description:"The ocean floor trembles. Something stirs.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"noHit",target:900},star3:{type:"score",target:22e3}},modifiers:{fixedTheme:"underwater",speedMultiplier:1.15,obstacleFrequency:1.3,coinMultiplier:1.5,maxHealth:2,bossEnabled:!0,bossAtDistance:1100,noRevive:!0}},{id:"underwater_10",name:"Abyssal Throne",description:"The deepest point. Only legends return.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"noHit",target:1e3},star3:{type:"score",target:3e4}},modifiers:{fixedTheme:"underwater",speedMultiplier:1.25,obstacleFrequency:1.5,coinMultiplier:2,maxHealth:1,bossEnabled:!0,bossAtDistance:1400,noRevive:!0}}]}];class Zv{constructor(){this.state=this._load()}_load(){try{const e=localStorage.getItem("vr_campaign");if(e)return JSON.parse(e)}catch(e){console.warn("CampaignManager: failed to load state, resetting.",e)}return{results:{}}}save(){try{localStorage.setItem("vr_campaign",JSON.stringify(this.state))}catch(e){console.warn("CampaignManager: failed to save state.",e)}}getTotalStars(){let e=0;for(const t in this.state.results){const i=this.state.results[t];i&&typeof i.stars=="number"&&(e+=i.stars)}try{const t=parseInt(localStorage.getItem("vr_challenge_stars"),10);isNaN(t)||(e+=t)}catch{}return e}isCampaignUnlocked(e){const t=this.getCampaign(e);return t?this.getTotalStars()>=t.requiredStars:!1}isStageUnlocked(e,t){if(!this.isCampaignUnlocked(e))return!1;if(t===0)return!0;const i=this.getCampaign(e);if(!i||t<0||t>=i.stages.length)return!1;const n=i.stages[t-1],s=this.getStageResult(e,n.id);return s!==null&&s.stars>=1}getStageResult(e,t){const i=`${e}:${t}`;return this.state.results[i]||null}evaluateRun(e,t,i){const n=this.getCampaign(e);if(!n)return null;const s=n.stages.find(v=>v.id===t);if(!s)return null;const{score:a=0,distance:o=0,coins:l=0,maxCombo:c=0,chestsSmashed:h=0,noHitDistance:d=0,bossDefeated:u=!1,health:p=0}=i;let g=0;const _=s.objectives;this._checkObjective(_.star1,i)&&(g=1),g>=1&&this._checkObjective(_.star2,i)&&(g=2),g>=2&&this._checkObjective(_.star3,i)&&(g=3);const m=`${e}:${t}`,f=this.state.results[m],x=!f;let S=!1;return(!f||g>f.stars||a>f.bestScore||o>f.bestDistance||l>f.bestCoins)&&(S=!0,this.state.results[m]={stars:f?Math.max(f.stars,g):g,bestScore:f?Math.max(f.bestScore,a):a,bestDistance:f?Math.max(f.bestDistance,o):o,bestCoins:f?Math.max(f.bestCoins,l):l},this.save()),{stars:g,isNew:x,newRecord:S}}_checkObjective(e,t){if(!e)return!1;const{type:i,target:n}=e;switch(i){case"distance":return(t.distance||0)>=n;case"score":return(t.score||0)>=n;case"coins":return(t.coins||0)>=n;case"combo":return(t.maxCombo||0)>=n;case"chests":return(t.chestsSmashed||0)>=n;case"noHit":return(t.noHitDistance||0)>=n;case"bossDefeat":return t.bossDefeated===!0;default:return!1}}getCampaign(e){return ja.find(t=>t.id===e)||null}getStage(e,t){const i=this.getCampaign(e);return!i||t<0||t>=i.stages.length?null:i.stages[t]}getAllCampaigns(){return ja}getStageConfig(e,t){const i=this.getStage(e,t);if(!i)return null;const n=this._getGlobalStageIndex(e,t),s=i.modifiers.stageTimeLimit||120+n*60,a=Math.floor(n/5)+1;return{...i,computedTimeLimit:s,computedBossCount:a}}_getGlobalStageIndex(e,t){let i=0;for(const n of ja){if(n.id===e)return i+t;i+=n.stages.length}return t}}const dh=[{id:"coin_hoarder",name:"Coin Hoarder",desc:"Collect {target} coins in a single run",type:"coins",targetRange:[100,500],reward:{coins:150,gems:2}},{id:"untouchable",name:"Untouchable",desc:"Run {target}m without getting hit",type:"noHitDistance",targetRange:[200,800],reward:{coins:300,gems:5}},{id:"boss_slayer",name:"Boss Slayer",desc:"Defeat {target} boss(es) in a single run",type:"bossDefeated",targetRange:[1,3],reward:{coins:400,gems:6}},{id:"combo_fiend",name:"Combo Fiend",desc:"Reach a combo of {target}x in a single run",type:"maxCombo",targetRange:[10,50],reward:{coins:200,gems:3}},{id:"chest_buster",name:"Chest Buster",desc:"Smash {target} chests in a single run",type:"chestsSmashed",targetRange:[5,20],reward:{coins:180,gems:3}},{id:"speed_demon",name:"Speed Demon",desc:"Run {target}m in a single run",type:"distance",targetRange:[500,2e3],reward:{coins:200,gems:3}},{id:"close_shaves",name:"Close Shaves",desc:"Pull off {target} near misses in a single run",type:"nearMisses",targetRange:[5,25],reward:{coins:250,gems:4}},{id:"marathon_runner",name:"Marathon Runner",desc:"Cover {target}m distance in a single run",type:"distance",targetRange:[1500,5e3],reward:{coins:350,gems:5}},{id:"high_roller",name:"High Roller",desc:"Score {target} points in a single run",type:"score",targetRange:[5e3,25e3],reward:{coins:250,gems:4}},{id:"power_surge",name:"Power Surge",desc:"Collect {target} power-ups in a single run",type:"powerUpsCollected",targetRange:[3,12],reward:{coins:200,gems:3}},{id:"gem_hunter",name:"Gem Hunter",desc:"Collect {target} gems in a single run",type:"gemsCollected",targetRange:[5,20],reward:{coins:250,gems:4}},{id:"dodge_master",name:"Dodge Master",desc:"Dodge {target} obstacles in a single run",type:"obstaclesDodged",targetRange:[20,80],reward:{coins:200,gems:3}},{id:"score_legend",name:"Score Legend",desc:"Hit a score of {target} in a single run",type:"score",targetRange:[2e4,75e3],reward:{coins:400,gems:6}},{id:"iron_runner",name:"Iron Runner",desc:"Run {target}m without taking a single hit",type:"noHitDistance",targetRange:[500,1500],reward:{coins:450,gems:7}},{id:"daily_grinder",name:"Daily Grinder",desc:"Complete {target} run(s) today",type:"totalRuns",targetRange:[3,8],reward:{coins:150,gems:2}},{id:"treasure_goblin",name:"Treasure Goblin",desc:"Smash {target} chests in a single run",type:"chestsSmashed",targetRange:[10,30],reward:{coins:300,gems:5}}];function Qv(r){return function(){r|=0,r=r+1831565813|0;let e=Math.imul(r^r>>>15,1|r);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class ey{constructor(){this._storageKey="vr_daily",this._starsKey="vr_challenge_stars",this._load()}_load(){try{const e=localStorage.getItem(this._storageKey);if(e){const t=JSON.parse(e),i=this._todayStr();if(t.date===i){this._state=t;return}}}catch{}this._regenerate()}_todayStr(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}_seedFromDate(e){let t=0;for(let i=0;i<e.length;i++){const n=e.charCodeAt(i);t=(t<<5)-t+n|0}return Math.abs(t)}_regenerate(){const e=this._todayStr(),t=this._generateDailyChallenges(e);this._state={date:e,challenges:t,bonusClaimed:!1},this.save()}_generateDailyChallenges(e){const t=this._seedFromDate(e),i=Qv(t),n=[],s=new Set;for(;n.length<3;){const a=Math.floor(i()*dh.length);if(s.has(a))continue;s.add(a);const o=dh[a],[l,c]=o.targetRange,h=Math.round(l+i()*(c-l));n.push({id:o.id,name:o.name,desc:o.desc.replace("{target}",h),type:o.type,target:h,progress:0,completed:!1,claimed:!1,reward:{...o.reward}})}return n}getDailyChallenges(){return this._state.challenges.map(e=>({...e,reward:{...e.reward}}))}evaluateRun(e){const t=[];return this._state.challenges.forEach((i,n)=>{if(i.completed)return;let s=0;switch(i.type){case"distance":s=e.distance||0;break;case"score":s=e.score||0;break;case"coins":s=e.coins||0;break;case"maxCombo":s=e.maxCombo||0;break;case"chestsSmashed":s=e.chestsSmashed||0;break;case"obstaclesDodged":s=e.obstaclesDodged||0;break;case"noHitDistance":s=e.noHitDistance||0;break;case"bossDefeated":s=e.bossDefeated||0;break;case"powerUpsCollected":s=e.powerUpsCollected||0;break;case"gemsCollected":s=e.gemsCollected||0;break;case"nearMisses":s=e.nearMisses||0;break;case"totalRuns":s=i.progress+1;break}i.type==="totalRuns"?i.progress=s:i.progress=Math.max(i.progress,s),i.progress>=i.target&&(i.completed=!0,t.push(n))}),this.save(),t}claimReward(e){const t=this._state.challenges[e];if(!t||!t.completed||t.claimed)return null;t.claimed=!0;const i=parseInt(localStorage.getItem(this._starsKey)||"0",10);return localStorage.setItem(this._starsKey,String(i+1)),this.save(),{coins:t.reward.coins,gems:t.reward.gems}}allCompleted(){return this._state.challenges.every(e=>e.completed)}allClaimed(){return this._state.challenges.every(e=>e.claimed)}getBonusReward(){return this.allCompleted()&&!this._state.bonusClaimed?{coins:200,gems:5}:null}claimBonus(){return!this.allCompleted()||this._state.bonusClaimed?null:(this._state.bonusClaimed=!0,this.save(),{coins:200,gems:5})}save(){try{localStorage.setItem(this._storageKey,JSON.stringify(this._state))}catch(e){console.warn("ChallengeManager: failed to save state",e)}}getTimeUntilReset(){const e=new Date,t=new Date(e);return t.setHours(24,0,0,0),t.getTime()-e.getTime()}}const xi={knight:{name:"Knight",emoji:"⚔️",active:{id:"shield_bash",name:"Shield Bash",desc:"Become invincible for {duration}s and smash obstacles",baseDuration:2.5,baseCooldown:25,icon:"🛡️"},passive:{id:"armor_up",name:"Armor Up",desc:"+{value} max health",baseValue:1}},barbarian:{name:"Barbarian",emoji:"🪓",active:{id:"rage",name:"Rage",desc:"2x speed + invincible for {duration}s, coins worth 3x",baseDuration:3,baseCooldown:30,icon:"🔥"},passive:{id:"brute_force",name:"Brute Force",desc:"Smash obstacles on contact (no attack needed) every {value}s",baseValue:12}},mage:{name:"Mage",emoji:"🔮",active:{id:"time_warp",name:"Time Warp",desc:"Slow time to 40% for {duration}s, coins still full value",baseDuration:4,baseCooldown:28,icon:"⏳"},passive:{id:"arcane_sight",name:"Arcane Sight",desc:"Power-ups last {value}% longer",baseValue:30}},rogue:{name:"Rogue",emoji:"🗡️",active:{id:"shadow_dash",name:"Shadow Dash",desc:"Phase through obstacles for {duration}s, +5 coins per dodge",baseDuration:3,baseCooldown:22,icon:"👤"},passive:{id:"nimble",name:"Nimble",desc:"Near-miss zone {value}% wider, +50% near-miss bonus",baseValue:40}},paladin:{name:"Paladin",emoji:"🛡️",active:{id:"divine_shield",name:"Divine Shield",desc:"Absorb next {value} hits + heal 1 HP",baseDuration:6,baseCooldown:35,icon:"✨"},passive:{id:"blessed",name:"Blessed",desc:"Revive with {value} HP instead of 1",baseValue:2}}},Kn={health:{name:"Vitality",icon:"❤️",desc:"+1 max HP per level",maxLevel:5,costs:[100,250,500,1e3,2e3],effect:r=>({maxHealthBonus:r})},ability_power:{name:"Ability Power",icon:"⚡",desc:"Active ability lasts longer",maxLevel:5,costs:[150,350,700,1400,2800],effect:r=>({abilityDurationMult:1+r*.15})},ability_cooldown:{name:"Quick Cast",icon:"🔄",desc:"Reduce ability cooldown",maxLevel:5,costs:[150,350,700,1400,2800],effect:r=>({abilityCooldownMult:1-r*.08})},coin_bonus:{name:"Fortune",icon:"🪙",desc:"+10% coin gain per level",maxLevel:5,costs:[80,200,400,800,1600],effect:r=>({coinMultiplier:1+r*.1})},score_bonus:{name:"Glory",icon:"🏆",desc:"+8% score per level",maxLevel:5,costs:[80,200,400,800,1600],effect:r=>({scoreMultiplier:1+r*.08})},passive_boost:{name:"Mastery",icon:"🎯",desc:"Strengthen character passive",maxLevel:3,costs:[300,800,2e3],effect:r=>({passiveBoost:r})}};class ty{constructor(){this._storageKey="vr_upgrades",this._dustKey="vr_stardust",this._keysKey="vr_keys",this._state=this._load()}_load(){try{const t=localStorage.getItem(this._storageKey);if(t)return JSON.parse(t)}catch(t){console.warn("AbilityManager: failed to load, resetting.",t)}const e={};for(const t of Object.keys(xi)){e[t]={};for(const i of Object.keys(Kn))e[t][i]=0}return e}save(){try{localStorage.setItem(this._storageKey,JSON.stringify(this._state))}catch(e){console.warn("AbilityManager: failed to save.",e)}}getStarDust(){return parseInt(localStorage.getItem(this._dustKey)||"0",10)}addStarDust(e){const t=this.getStarDust();localStorage.setItem(this._dustKey,String(t+e))}spendStarDust(e){const t=this.getStarDust();return t<e?!1:(localStorage.setItem(this._dustKey,String(t-e)),!0)}getKeys(){return parseInt(localStorage.getItem(this._keysKey)||"0",10)}addKeys(e){const t=this.getKeys();localStorage.setItem(this._keysKey,String(t+e))}getUpgradeLevel(e,t){return this._state[e]&&this._state[e][t]||0}getUpgradeCost(e,t){const i=Kn[e];return!i||t>=i.maxLevel?1/0:i.costs[t]}canUpgrade(e,t){const i=this.getUpgradeLevel(e,t),n=Kn[t];if(!n||i>=n.maxLevel)return!1;const s=n.costs[i];return this.getStarDust()>=s}purchaseUpgrade(e,t){if(!this.canUpgrade(e,t))return!1;const i=this.getUpgradeLevel(e,t),n=Kn[t].costs[i];return this.spendStarDust(n)?(this._state[e]||(this._state[e]={}),this._state[e][t]=i+1,this.save(),!0):!1}getCharacterStats(e){const t={maxHealthBonus:0,abilityDurationMult:1,abilityCooldownMult:1,coinMultiplier:1,scoreMultiplier:1,passiveBoost:0};for(const[i,n]of Object.entries(Kn)){const s=this.getUpgradeLevel(e,i);if(s>0){const a=n.effect(s);for(const[o,l]of Object.entries(a))o in t&&(o.includes("Mult")||o.includes("multiplier"),t[o]=l)}}return t}getAbilityConfig(e){const t=xi[e];if(!t)return null;const i=this.getCharacterStats(e),n=t.active;return{id:n.id,name:n.name,icon:n.icon,duration:n.baseDuration*i.abilityDurationMult,cooldown:n.baseCooldown*i.abilityCooldownMult,passive:t.passive,passiveBoost:i.passiveBoost}}getTotalUpgradePoints(){let e=0;for(const t of Object.keys(this._state))for(const i of Object.values(this._state[t]))e+=i;return e}}const Br=[{id:"run_500",name:"First Steps",desc:"Run 500m in one run",type:"distance",target:500,reward:{dust:50,coins:100},icon:"👟"},{id:"run_2000",name:"Road Warrior",desc:"Run 2000m in one run",type:"distance",target:2e3,reward:{dust:150,coins:300},icon:"🏃"},{id:"run_5000",name:"Marathon Legend",desc:"Run 5000m in one run",type:"distance",target:5e3,reward:{dust:400,coins:800},icon:"🏅"},{id:"score_5k",name:"Rising Star",desc:"Score 5,000 points",type:"score",target:5e3,reward:{dust:50,coins:100},icon:"⭐"},{id:"score_25k",name:"Score Master",desc:"Score 25,000 points",type:"score",target:25e3,reward:{dust:200,coins:400},icon:"🌟"},{id:"score_100k",name:"Legendary Score",desc:"Score 100,000 points",type:"score",target:1e5,reward:{dust:600,coins:1200},icon:"💫"},{id:"coins_100",name:"Coin Collector",desc:"Collect 100 coins in one run",type:"coins",target:100,reward:{dust:40,coins:80},icon:"🪙"},{id:"coins_500",name:"Gold Rush",desc:"Collect 500 coins in one run",type:"coins",target:500,reward:{dust:200,coins:400},icon:"💰"},{id:"combo_10",name:"Combo Starter",desc:"Reach 10x combo",type:"maxCombo",target:10,reward:{dust:60,coins:120},icon:"🔥"},{id:"combo_30",name:"Combo King",desc:"Reach 30x combo",type:"maxCombo",target:30,reward:{dust:250,coins:500},icon:"👑"},{id:"chests_10",name:"Chest Smasher",desc:"Smash 10 chests in one run",type:"chestsSmashed",target:10,reward:{dust:80,coins:160},icon:"📦"},{id:"chests_30",name:"Treasure Hunter",desc:"Smash 30 chests total",type:"chestsSmashed_total",target:30,reward:{dust:200,coins:400},icon:"🏴‍☠️"},{id:"boss_1",name:"Boss Slayer",desc:"Defeat your first boss",type:"bossDefeated",target:1,reward:{dust:100,keys:1},icon:"🐉"},{id:"boss_10",name:"Boss Hunter",desc:"Defeat 10 bosses total",type:"bossDefeated_total",target:10,reward:{dust:500,keys:3},icon:"⚔️"},{id:"near_20",name:"Daredevil",desc:"20 near misses in one run",type:"nearMisses",target:20,reward:{dust:100,coins:200},icon:"😱"},{id:"nohit_500",name:"Untouchable",desc:"500m without getting hit",type:"noHitDistance",target:500,reward:{dust:150,coins:300},icon:"🌀"},{id:"nohit_1500",name:"Ghost Runner",desc:"1500m without getting hit",type:"noHitDistance",target:1500,reward:{dust:500,coins:1e3},icon:"👻"},{id:"stars_10",name:"Star Gazer",desc:"Earn 10 campaign stars",type:"totalStars",target:10,reward:{dust:200,coins:400},icon:"🌠"},{id:"stars_30",name:"Star Collector",desc:"Earn 30 campaign stars",type:"totalStars",target:30,reward:{dust:500,coins:1e3},icon:"✨"},{id:"stars_60",name:"Star Master",desc:"Earn 60 campaign stars",type:"totalStars",target:60,reward:{dust:1e3,coins:2e3},icon:"🏆"},{id:"upgrades_5",name:"Apprentice",desc:"Purchase 5 upgrades",type:"totalUpgrades",target:5,reward:{dust:100,coins:200},icon:"📚"},{id:"upgrades_20",name:"Seasoned",desc:"Purchase 20 upgrades",type:"totalUpgrades",target:20,reward:{dust:400,coins:800},icon:"🎓"},{id:"streak_3",name:"Consistent",desc:"3-day login streak",type:"loginStreak",target:3,reward:{dust:100,coins:200},icon:"📅"},{id:"streak_7",name:"Dedicated",desc:"7-day login streak",type:"loginStreak",target:7,reward:{dust:300,coins:600},icon:"🗓️"},{id:"streak_30",name:"Devoted",desc:"30-day login streak",type:"loginStreak",target:30,reward:{dust:1e3,coins:2e3},icon:"💎"}],uh=[{id:"w_distance",name:"Weekly Mileage",desc:"Run {target}m total this week",type:"distance_total",targetRange:[5e3,15e3],reward:{dust:300,coins:500}},{id:"w_coins",name:"Weekly Fortune",desc:"Collect {target} coins total",type:"coins_total",targetRange:[1e3,5e3],reward:{dust:250,coins:400}},{id:"w_chests",name:"Weekly Looter",desc:"Smash {target} chests total",type:"chests_total",targetRange:[20,60],reward:{dust:200,coins:350}},{id:"w_boss",name:"Weekly Slayer",desc:"Defeat {target} bosses total",type:"boss_total",targetRange:[3,10],reward:{dust:400,coins:600}},{id:"w_runs",name:"Weekly Grinder",desc:"Complete {target} runs",type:"runs_total",targetRange:[10,25],reward:{dust:200,coins:300}},{id:"w_stars",name:"Weekly Star",desc:"Earn {target} campaign stars",type:"stars_earned",targetRange:[5,15],reward:{dust:350,coins:500}},{id:"w_score",name:"Weekly Legend",desc:"Score {target} total points",type:"score_total",targetRange:[2e4,8e4],reward:{dust:300,coins:500}}],ph=[{day:1,coins:50,dust:10},{day:2,coins:75,dust:15},{day:3,coins:100,dust:25},{day:4,coins:150,dust:30},{day:5,coins:200,dust:50},{day:6,coins:250,dust:75},{day:7,coins:500,dust:150,keys:1}];function iy(r){return function(){r|=0,r=r+1831565813|0;let e=Math.imul(r^r>>>15,1|r);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class ny{constructor(){this._storageKey="vr_progression",this._state=this._load(),this._checkLogin()}_load(){try{const e=localStorage.getItem(this._storageKey);if(e)return JSON.parse(e)}catch(e){console.warn("ProgressionManager: failed to load, resetting.",e)}return{lifetime:{totalDistance:0,totalCoins:0,totalScore:0,totalChests:0,totalBosses:0,totalRuns:0},achievements:{},weekly:null,streak:{current:0,lastLogin:null,todayClaimed:!1}}}save(){try{localStorage.setItem(this._storageKey,JSON.stringify(this._state))}catch(e){console.warn("ProgressionManager: failed to save.",e)}}_checkLogin(){const e=this._todayStr(),t=this._dateStr(-1),i=this._state.streak;i.lastLogin!==e&&(i.lastLogin===t?i.current++:i.current=1,i.lastLogin=e,i.todayClaimed=!1,this.save(),this._checkWeekly())}getStreakInfo(){const e=this._state.streak,t=(e.current-1)%7,i=ph[t];return{currentStreak:e.current,dayInCycle:t+1,reward:i,claimed:e.todayClaimed}}claimStreakReward(){const e=this._state.streak;if(e.todayClaimed)return null;const t=(e.current-1)%7,i=ph[t];return e.todayClaimed=!0,this.save(),i}_weekId(){const e=new Date,t=new Date(e.getFullYear(),0,1),i=Math.ceil(((e-t)/864e5+t.getDay()+1)/7);return`${e.getFullYear()}-W${i}`}_checkWeekly(){const e=this._weekId();if(this._state.weekly&&this._state.weekly.weekId===e)return;const t=this._seedFromStr(e),i=iy(t),n=[],s=new Set;for(;n.length<3;){const a=Math.floor(i()*uh.length);if(s.has(a))continue;s.add(a);const o=uh[a],[l,c]=o.targetRange,h=Math.round(l+i()*(c-l));n.push({id:o.id,name:o.name,desc:o.desc.replace("{target}",h.toLocaleString()),type:o.type,target:h,progress:0,completed:!1,claimed:!1,reward:{...o.reward}})}this._state.weekly={weekId:e,missions:n,weeklyStats:{distance:0,coins:0,chests:0,bosses:0,runs:0,starsEarned:0,score:0}},this.save()}getWeeklyMissions(){return this._state.weekly||this._checkWeekly(),this._state.weekly.missions.map(e=>({...e,reward:{...e.reward}}))}claimWeeklyReward(e){var i;const t=(i=this._state.weekly)==null?void 0:i.missions[e];return!t||!t.completed||t.claimed?null:(t.claimed=!0,this.save(),{...t.reward})}processRun(e,t=0){var a;const i={newAchievements:[],dustEarned:0,coinsEarned:0,keysEarned:0},n=this._state.lifetime;if(n.totalDistance+=e.distance||0,n.totalCoins+=e.coins||0,n.totalScore+=e.score||0,n.totalChests+=e.chestsSmashed||0,n.totalBosses+=e.bossDefeated||0,n.totalRuns++,this._state.weekly){const o=this._state.weekly.weeklyStats;o.distance+=e.distance||0,o.coins+=e.coins||0,o.chests+=e.chestsSmashed||0,o.bosses+=e.bossDefeated||0,o.runs++,o.starsEarned+=t,o.score+=e.score||0;for(const l of this._state.weekly.missions){if(l.completed)continue;let c=0;switch(l.type){case"distance_total":c=o.distance;break;case"coins_total":c=o.coins;break;case"chests_total":c=o.chests;break;case"boss_total":c=o.bosses;break;case"runs_total":c=o.runs;break;case"stars_earned":c=o.starsEarned;break;case"score_total":c=o.score;break}l.progress=c,c>=l.target&&(l.completed=!0)}}const s={...e,chestsSmashed_total:n.totalChests,bossDefeated_total:n.totalBosses,loginStreak:this._state.streak.current};try{const o=parseInt(localStorage.getItem("vr_challenge_stars")||"0",10),l=localStorage.getItem("vr_campaign");if(l){const h=JSON.parse(l);for(const d in h.results){const u=h.results[d];u&&u.stars&&(s.totalStars=(s.totalStars||0)+u.stars)}}s.totalStars=(s.totalStars||0)+o;const c=localStorage.getItem("vr_upgrades");if(c){const h=JSON.parse(c);let d=0;for(const u of Object.values(h))for(const p of Object.values(u))d+=p;s.totalUpgrades=d}}catch{}for(const o of Br){if((a=this._state.achievements[o.id])!=null&&a.completed)continue;(s[o.type]||0)>=o.target&&(this._state.achievements[o.id]={completed:!0,claimed:!1},i.newAchievements.push(o))}return this.save(),i}getAchievements(){return Br.map(e=>{var t,i;return{...e,completed:!!((t=this._state.achievements[e.id])!=null&&t.completed),claimed:!!((i=this._state.achievements[e.id])!=null&&i.claimed)}})}claimAchievement(e){const t=this._state.achievements[e];if(!t||!t.completed||t.claimed)return null;const i=Br.find(n=>n.id===e);return i?(t.claimed=!0,this.save(),i.reward):null}getUnclaimedCount(){let e=0;for(const t of Br){const i=this._state.achievements[t.id];i&&i.completed&&!i.claimed&&e++}return e}getLifetimeStats(){return{...this._state.lifetime}}_todayStr(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}_dateStr(e){const t=new Date;return t.setDate(t.getDate()+e),`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}_seedFromStr(e){let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i)|0;return Math.abs(t)}}const fh=[{id:"treasure_vault",name:"Treasure Vault!",icon:"💎",desc:"Smash every chest!",duration:8,color:[1,.85,0]},{id:"coin_frenzy",name:"Coin Frenzy!",icon:"🪙",desc:"Grab them all!",duration:10,color:[1,.7,0]},{id:"dodge_arena",name:"Dodge Arena!",icon:"⚡",desc:"Dodge everything!",duration:8,color:[1,.2,.2]}],sy=[600,1200,2e3,3e3,4500];class ry{constructor(){this.active=!1,this.currentGame=null,this.timer=0,this.totalTime=0,this.score=0,this._triggeredAt=new Set,this._simonSequence=[],this._simonStep=0,this._simonFeedback=null,this._chestsSpawned=0,this._chestsSmashed=0,this._coinsCollected=0,this._dodgesSurvived=0,this._lastObstacleSpawn=0}reset(){this.active=!1,this.currentGame=null,this.timer=0,this.score=0,this._triggeredAt.clear(),this._simonSequence=[],this._simonStep=0,this._simonFeedback=null}checkTrigger(e){if(this.active)return null;for(const t of sy)if(e>=t&&!this._triggeredAt.has(t))return this._triggeredAt.add(t),fh[Math.floor(Math.random()*fh.length)];return null}start(e){this.active=!0,this.currentGame=e,this.timer=e.duration,this.totalTime=e.duration,this.score=0,this._chestsSpawned=0,this._chestsSmashed=0,this._coinsCollected=0,this._dodgesSurvived=0,this._lastObstacleSpawn=0,e.id==="simon_says"&&(this._generateSimonSequence(),this._simonStep=0,this._simonFeedback=null)}update(e,t){if(!this.active)return null;if(this.timer-=e,this.timer<=0)return this._end();switch(this.currentGame.id){case"treasure_vault":return this._updateTreasureVault(e,t);case"coin_frenzy":return this._updateCoinFrenzy(e,t);case"dodge_arena":return this._updateDodgeArena(e,t);case"simon_says":return this._updateSimonSays(e);default:return null}}onPlayerAction(e){var t;return!this.active||((t=this.currentGame)==null?void 0:t.id)!=="simon_says"?null:this._checkSimonInput(e)}onChestSmashed(){var e;this.active&&((e=this.currentGame)==null?void 0:e.id)==="treasure_vault"&&(this._chestsSmashed++,this.score+=25)}onCoinCollected(e){var t;this.active&&((t=this.currentGame)==null?void 0:t.id)==="coin_frenzy"&&(this._coinsCollected+=e,this.score+=e*5)}onObstacleDodged(){var e;this.active&&((e=this.currentGame)==null?void 0:e.id)==="dodge_arena"&&(this._dodgesSurvived++,this.score+=15)}_updateTreasureVault(e,t){return this._lastObstacleSpawn+=e,this._lastObstacleSpawn>=1.5?(this._lastObstacleSpawn=0,this._chestsSpawned+=3,{type:"spawn_chests",lanes:[0,1,2]}):null}_updateCoinFrenzy(e,t){return this._lastObstacleSpawn+=e,this._lastObstacleSpawn>=.8?(this._lastObstacleSpawn=0,{type:"spawn_coins",lanes:[0,1,2],count:5}):null}_updateDodgeArena(e,t){this._lastObstacleSpawn+=e;const i=.6-(this.totalTime-this.timer)*.03;if(this._lastObstacleSpawn>=Math.max(.3,i)){this._lastObstacleSpawn=0;const n=[0,1,2].sort(()=>Math.random()-.5),s=Math.random()<.4?2:1;return{type:"spawn_obstacles",lanes:n.slice(0,s)}}return null}_generateSimonSequence(){const e=["left","right","jump","slide"];this._simonSequence=[];const t=6+Math.floor(Math.random()*4);for(let i=0;i<t;i++)this._simonSequence.push(e[Math.floor(Math.random()*e.length)])}_updateSimonSays(e){return this._simonFeedback&&(this._simonFeedback.timer-=e,this._simonFeedback.timer<=0&&(this._simonFeedback=null)),this._simonStep<this._simonSequence.length&&!this._simonFeedback?{type:"simon_prompt",action:this._simonSequence[this._simonStep],step:this._simonStep,total:this._simonSequence.length}:this._simonStep>=this._simonSequence.length?this._end():null}_checkSimonInput(e){if(this._simonStep>=this._simonSequence.length||this._simonFeedback)return null;const t=this._simonSequence[this._simonStep];return e===t?(this._simonStep++,this.score+=50,this._simonFeedback={correct:!0,timer:.5},{type:"simon_correct",step:this._simonStep}):(this._simonFeedback={correct:!1,timer:.5},this.score=Math.max(0,this.score-20),{type:"simon_wrong"})}_end(){const e={type:"end",gameId:this.currentGame.id,gameName:this.currentGame.name,score:this.score,coinReward:Math.floor(this.score/5)+10,dustReward:Math.floor(this.score/10)};return this.active=!1,this.currentGame=null,e}getProgress(){return this.active?{id:this.currentGame.id,name:this.currentGame.name,icon:this.currentGame.icon,timer:this.timer,totalTime:this.totalTime,score:this.score,feedback:this._simonFeedback,simonAction:this._simonStep<this._simonSequence.length?this._simonSequence[this._simonStep]:null}:null}}const Ya={forest:{name:"Enchanted Forest",hazards:[{id:"falling_tree",chance:.03,desc:"Falling tree across random lane"},{id:"vine_snare",chance:.04,desc:"Vine on ground — slows if not jumped"}],ambientColor:[.2,.8,.3],particleColor:[.3,.7,.2]},desert:{name:"Scorching Sands",hazards:[{id:"sandstorm",chance:.02,desc:"Reduced visibility for several seconds"},{id:"quicksand",chance:.04,desc:"Quicksand patch — slows one lane"}],ambientColor:[.9,.7,.3],particleColor:[.85,.7,.4]},lava:{name:"Volcanic Depths",hazards:[{id:"floor_crack",chance:.04,desc:"Glowing crack — damages if stood on"},{id:"eruption",chance:.02,desc:"Debris rains from above"}],ambientColor:[1,.3,0],particleColor:[1,.4,.1]},snow:{name:"Frozen Peaks",hazards:[{id:"ice_patch",chance:.05,desc:"Ice on ground — slide momentum"},{id:"blizzard",chance:.02,desc:"Strong gusts push sideways"}],ambientColor:[.7,.85,1],particleColor:[.9,.95,1]},roman:{name:"Roman Road",hazards:[],ambientColor:[.8,.7,.5],particleColor:[.7,.6,.4]},underwater:{name:"Abyssal Depths",hazards:[{id:"current",chance:.04,desc:"Water current pushes to a lane"},{id:"air_pocket",chance:.06,desc:"Bubble — collect to restore air"}],ambientColor:[.1,.3,.7],particleColor:[.2,.5,.9]}};class ay{constructor(e){this.scene=e,this.activeHazards=[],this._currentBiome="roman",this._hazardCooldown=0,this._sandstormActive=!1,this._sandstormTimer=0,this._blizzardActive=!1,this._blizzardTimer=0,this._blizzardDir=0,this._underwaterAir=100,this._underwaterActive=!1,this._fogOverlay=null,this._sandstormParticles=[],this._snowParticles=[],this._bubbleParticles=[]}setBiome(e){e!==this._currentBiome&&(this._currentBiome=e,this._underwaterActive=e==="underwater",this._underwaterActive&&(this._underwaterAir=100),this._sandstormActive=!1,this._blizzardActive=!1)}update(e,t,i,n,s,a){var c;const o={effects:[],damage:!1,speedMult:1,pushLane:null,airDelta:0},l=Ya[this._currentBiome];if(!l)return o;if(this._hazardCooldown-=e,this._hazardCooldown<=0){this._hazardCooldown=2-a*.15;for(const h of l.hazards)if(Math.random()<h.chance*(1+a*.2)){const d=this._spawnHazard(h.id,i);d&&o.effects.push(d)}}for(let h=this.activeHazards.length-1;h>=0;h--){const d=this.activeHazards[h];d.timer-=e;const u=Math.abs(d.z-i)<2,p=d.lane===void 0||d.lane===s;switch(d.id){case"vine_snare":u&&p&&n<.5&&(o.speedMult=Math.min(o.speedMult,.6),o.effects.push({type:"vine_slow"}));break;case"quicksand":u&&p&&n<.3&&(o.speedMult=Math.min(o.speedMult,.5),o.effects.push({type:"quicksand_slow"}));break;case"floor_crack":u&&p&&n<.3&&(o.damage=!0,o.effects.push({type:"lava_burn"}));break;case"ice_patch":u&&p&&n<.5&&(o.speedMult=Math.min(o.speedMult,1.3),o.effects.push({type:"ice_slide"}));break;case"air_pocket":u&&p&&(this._underwaterAir=Math.min(100,this._underwaterAir+30),o.airDelta=30,o.effects.push({type:"air_collected"}),d.timer=0);break}d.timer<=0&&(d.mesh&&(this.scene.remove(d.mesh),(c=d.mesh.geometry)==null||c.dispose()),this.activeHazards.splice(h,1))}return this._sandstormActive&&(this._sandstormTimer-=e,this._sandstormTimer<=0?(this._sandstormActive=!1,o.effects.push({type:"sandstorm_end"})):o.effects.push({type:"sandstorm_active",intensity:this._sandstormTimer/5})),this._blizzardActive&&(this._blizzardTimer-=e,this._blizzardTimer<=0?(this._blizzardActive=!1,o.effects.push({type:"blizzard_end"})):(o.pushLane=this._blizzardDir,o.effects.push({type:"blizzard_active",dir:this._blizzardDir}))),this._underwaterActive&&(this._underwaterAir-=e*5,o.airDelta=-e*5,this._underwaterAir<=0&&(this._underwaterAir=0,o.damage=!0,o.effects.push({type:"drowning"}))),o}_spawnHazard(e,t){const i=t-40,n=Math.floor(Math.random()*3),s=3,a=[-s,0,s];switch(e){case"falling_tree":case"vine_snare":{const o=this._createHazardMesh(e,a[n],i);return this.activeHazards.push({id:e,mesh:o,lane:n,z:i,timer:8}),{type:"hazard_spawned",hazard:e,lane:n}}case"sandstorm":return this._sandstormActive=!0,this._sandstormTimer=4+Math.random()*3,{type:"sandstorm_start"};case"quicksand":{const o=this._createHazardMesh(e,a[n],i);return this.activeHazards.push({id:e,mesh:o,lane:n,z:i,timer:10}),{type:"hazard_spawned",hazard:e,lane:n}}case"floor_crack":{const o=this._createHazardMesh(e,a[n],i);return this.activeHazards.push({id:e,mesh:o,lane:n,z:i,timer:6}),{type:"hazard_spawned",hazard:e,lane:n}}case"eruption":{for(let o=0;o<3;o++){const l=Math.floor(Math.random()*3),c=i-o*5,h=this._createHazardMesh("eruption_debris",a[l],c);this.activeHazards.push({id:"floor_crack",mesh:h,lane:l,z:c,timer:4})}return{type:"eruption_start"}}case"ice_patch":{const o=this._createHazardMesh(e,a[n],i);return this.activeHazards.push({id:e,mesh:o,lane:n,z:i,timer:8}),{type:"hazard_spawned",hazard:e,lane:n}}case"blizzard":return this._blizzardActive=!0,this._blizzardTimer=3+Math.random()*2,this._blizzardDir=Math.random()<.5?-1:1,{type:"blizzard_start",dir:this._blizzardDir};case"current":{const o=Math.random()<.5?-1:1;return this.activeHazards.push({id:"current",mesh:null,lane:void 0,z:i,timer:5,data:{dir:o}}),{type:"current_start",dir:o}}case"air_pocket":{const o=this._createHazardMesh(e,a[n],i);return this.activeHazards.push({id:e,mesh:o,lane:n,z:i,timer:12}),{type:"hazard_spawned",hazard:e,lane:n}}default:return null}}_createHazardMesh(e,t,i){let n;switch(e){case"vine_snare":{const s=new hn(2.5,2.5),a=new Re({color:2984493,transparent:!0,opacity:.6,emissive:1727514,emissiveIntensity:.3});n=new be(s,a),n.rotation.x=-Math.PI/2,n.position.set(t,.05,i);break}case"quicksand":{const s=new Zs(1.5,16),a=new Re({color:12886874,transparent:!0,opacity:.7,emissive:9072688,emissiveIntensity:.2});n=new be(s,a),n.rotation.x=-Math.PI/2,n.position.set(t,.03,i);break}case"floor_crack":case"eruption_debris":{const s=new hn(2,2),a=new Re({color:16724736,transparent:!0,opacity:.5,emissive:16729088,emissiveIntensity:.8});n=new be(s,a),n.rotation.x=-Math.PI/2,n.position.set(t,.04,i);break}case"ice_patch":{const s=new Zs(1.8,12),a=new Re({color:11197951,transparent:!0,opacity:.5,emissive:6724044,emissiveIntensity:.3,roughness:.1,metalness:.5});n=new be(s,a),n.rotation.x=-Math.PI/2,n.position.set(t,.04,i);break}case"air_pocket":{const s=new Ss(.6,12,8),a=new Re({color:4504575,transparent:!0,opacity:.5,emissive:2263244,emissiveIntensity:.6});n=new be(s,a),n.position.set(t,1.5,i);break}case"falling_tree":{const s=new Qs(.1,.15,3,6),a=new Re({color:5913114});n=new be(s,a),n.rotation.z=Math.PI/2,n.position.set(t,.8,i);break}default:{const s=new ct(1,.1,1),a=new Re({color:16711935});n=new be(s,a),n.position.set(t,.05,i)}}return n&&this.scene.add(n),n}dispose(){var e;for(const t of this.activeHazards)t.mesh&&(this.scene.remove(t.mesh),(e=t.mesh.geometry)==null||e.dispose());this.activeHazards=[]}isSandstormActive(){return this._sandstormActive}isBlizzardActive(){return this._blizzardActive}isUnderwater(){return this._underwaterActive}getAir(){return this._underwaterAir}getBiomeInfo(){return Ya[this._currentBiome]||Ya.roman}}const Qt=["helmet","armor","boots","amulet","weapon"],di={common:{color:"#a0a0a0",label:"Common",craftCost:null},uncommon:{color:"#6a8a4a",label:"Uncommon",craftCost:{fragments:30}},rare:{color:"#4a7ab5",label:"Rare",craftCost:{essence:10}},epic:{color:"#8a5ab5",label:"Epic",craftCost:{cores:3,essence:20}},legendary:{color:"#c9a24e",label:"Legendary",craftCost:{cores:10,essence:50}}},Ad={common:{fragments:5},uncommon:{fragments:15},rare:{essence:3},epic:{cores:1,essence:5},legendary:{cores:3}},mh={maxHealth:{label:"Max Health",format:r=>`+${r}`},speedBoost:{label:"Speed Boost",format:r=>`+${r}%`},coinMultiplier:{label:"Coin Bonus",format:r=>`+${r}%`},scoreMultiplier:{label:"Score Bonus",format:r=>`+${r}%`},abilityCD:{label:"Ability Cooldown",format:r=>`-${r}%`},magnetRange:{label:"Magnet Range",format:r=>`+${r}`},shieldChance:{label:"Shield Chance",format:r=>`${r}%`},reviveHP:{label:"Revive HP",format:r=>`+${r}`},dustBonus:{label:"Star Dust Bonus",format:r=>`+${r}%`}},vn=[{id:"bronze_helm",name:"Bronze Helm",slot:"helmet",rarity:"common",icon:"🪖",stats:{maxHealth:1},flavorText:"Standard legionnaire issue."},{id:"iron_galea",name:"Iron Galea",slot:"helmet",rarity:"common",icon:"🪖",stats:{shieldChance:2},flavorText:"Sturdy and unremarkable."},{id:"centurion_helm",name:"Centurion's Crest",slot:"helmet",rarity:"uncommon",icon:"⛑️",stats:{maxHealth:1,shieldChance:3},flavorText:"Red plume marks the officer."},{id:"athenian_helm",name:"Athenian War Helm",slot:"helmet",rarity:"rare",icon:"🛡️",stats:{maxHealth:2,shieldChance:5},flavorText:"Forged in the fires of wisdom."},{id:"helm_of_mars",name:"Helm of Mars",slot:"helmet",rarity:"epic",icon:"🔱",stats:{maxHealth:2,shieldChance:7,scoreMultiplier:5},flavorText:"The war god watches over you."},{id:"golden_laurel",name:"Golden Laurel",slot:"helmet",rarity:"legendary",icon:"👑",stats:{maxHealth:2,scoreMultiplier:15,shieldChance:8},flavorText:"Crown of champions."},{id:"leather_cuirass",name:"Leather Cuirass",slot:"armor",rarity:"common",icon:"🦺",stats:{maxHealth:1},flavorText:"Tanned hide from the provinces."},{id:"bronze_lorica",name:"Bronze Lorica",slot:"armor",rarity:"common",icon:"🦺",stats:{shieldChance:3},flavorText:"Segmented plates clink softly."},{id:"tribune_plate",name:"Tribune's Plate",slot:"armor",rarity:"uncommon",icon:"🛡️",stats:{maxHealth:1,shieldChance:4},flavorText:"Polished to a mirror finish."},{id:"aegis_mail",name:"Aegis Chain Mail",slot:"armor",rarity:"rare",icon:"⚙️",stats:{maxHealth:2,shieldChance:5,speedBoost:5},flavorText:"Light as air, strong as stone."},{id:"vulcan_forge_plate",name:"Vulcan's Forge Plate",slot:"armor",rarity:"epic",icon:"🔥",stats:{maxHealth:3,shieldChance:6,dustBonus:10},flavorText:"Tempered in divine flame."},{id:"olympian_aegis",name:"Olympian Aegis",slot:"armor",rarity:"legendary",icon:"⚡",stats:{maxHealth:3,shieldChance:10,coinMultiplier:15,dustBonus:15},flavorText:"Worn by those who rival the gods."},{id:"sandals",name:"Legion Sandals",slot:"boots",rarity:"common",icon:"👟",stats:{speedBoost:5},flavorText:"March on, soldier."},{id:"iron_greaves",name:"Iron Greaves",slot:"boots",rarity:"common",icon:"🥾",stats:{speedBoost:3,shieldChance:2},flavorText:"Protects the shins at least."},{id:"mercury_treads",name:"Mercury Treads",slot:"boots",rarity:"uncommon",icon:"🪽",stats:{speedBoost:8,magnetRange:1},flavorText:"Swift as the messenger god."},{id:"titan_striders",name:"Titan Striders",slot:"boots",rarity:"rare",icon:"🦿",stats:{speedBoost:10,abilityCD:5},flavorText:"Each step shakes the earth."},{id:"boots_of_hermes",name:"Boots of Hermes",slot:"boots",rarity:"epic",icon:"✨",stats:{speedBoost:15,magnetRange:2,abilityCD:8},flavorText:"They practically fly on their own."},{id:"olympus_runners",name:"Olympus Runners",slot:"boots",rarity:"legendary",icon:"🌟",stats:{speedBoost:20,magnetRange:3,abilityCD:12,coinMultiplier:10},flavorText:"Blessed by every Olympian."},{id:"copper_talisman",name:"Copper Talisman",slot:"amulet",rarity:"common",icon:"📿",stats:{coinMultiplier:5},flavorText:"A lucky trinket from the market."},{id:"wolf_fang",name:"Wolf Fang Pendant",slot:"amulet",rarity:"uncommon",icon:"🦷",stats:{coinMultiplier:10,scoreMultiplier:5},flavorText:"Romulus smiles upon you."},{id:"oracle_eye",name:"Oracle's Eye",slot:"amulet",rarity:"uncommon",icon:"🔮",stats:{dustBonus:10,abilityCD:5},flavorText:"See what others cannot."},{id:"poseidon_pearl",name:"Poseidon's Pearl",slot:"amulet",rarity:"rare",icon:"🫧",stats:{coinMultiplier:15,reviveHP:1},flavorText:"Plucked from the ocean depths."},{id:"eye_of_jupiter",name:"Eye of Jupiter",slot:"amulet",rarity:"epic",icon:"⚡",stats:{scoreMultiplier:10,coinMultiplier:15,dustBonus:15},flavorText:"Lightning courses through it."},{id:"heart_of_olympus",name:"Heart of Olympus",slot:"amulet",rarity:"legendary",icon:"💎",stats:{coinMultiplier:25,scoreMultiplier:15,reviveHP:1,dustBonus:20},flavorText:"The pulse of the divine realm."},{id:"wooden_gladius",name:"Wooden Gladius",slot:"weapon",rarity:"common",icon:"🗡️",stats:{scoreMultiplier:5},flavorText:"Training sword from the ludus."},{id:"iron_gladius",name:"Iron Gladius",slot:"weapon",rarity:"common",icon:"⚔️",stats:{scoreMultiplier:3,coinMultiplier:5},flavorText:"Reliable and sharp."},{id:"spartan_spear",name:"Spartan Spear",slot:"weapon",rarity:"uncommon",icon:"🔱",stats:{scoreMultiplier:8,abilityCD:5},flavorText:"Come back with it or on it."},{id:"praetorian_blade",name:"Praetorian Blade",slot:"weapon",rarity:"rare",icon:"⚔️",stats:{scoreMultiplier:10,shieldChance:3,abilityCD:8},flavorText:"Guard the emperor with your life."},{id:"apollos_bow",name:"Apollo's Bow",slot:"weapon",rarity:"epic",icon:"🏹",stats:{scoreMultiplier:12,abilityCD:10,magnetRange:2},flavorText:"Each shot finds its mark."},{id:"zeus_thunderbolt",name:"Zeus' Thunderbolt",slot:"weapon",rarity:"legendary",icon:"⚡",stats:{scoreMultiplier:20,abilityCD:15,shieldChance:5,coinMultiplier:10},flavorText:"The sky bends to your will."}],gh={common:0,uncommon:1,rare:2,epic:3,legendary:4};class _h{constructor(){this.inventory=[],this.equipped={helmet:null,armor:null,boots:null,amulet:null,weapon:null},this.materials={fragments:0,essence:0,cores:0},this._load()}getInventory(){return this.inventory}getEquipped(){return{...this.equipped}}getEquippedItem(e){const t=this.equipped[e];return t&&this.inventory.find(i=>i.instanceId===t)||null}equip(e){const t=this.inventory.find(n=>n.instanceId===e);if(!t)return!1;const i=vn.find(n=>n.id===t.itemId);return i?(this.equipped[i.slot]=e,this._save(),!0):!1}unequip(e){return this.equipped[e]?(this.equipped[e]=null,this._save(),!0):!1}getEquippedStats(){const e={};for(const t of Qt){const i=this.equipped[t];if(!i)continue;const n=this.inventory.find(a=>a.instanceId===i);if(!n)continue;const s=vn.find(a=>a.id===n.itemId);if(s)for(const[a,o]of Object.entries(s.stats))e[a]=(e[a]||0)+o}return e}generateLoot(e){const{distance:t=0,score:i=0,coins:n=0,difficulty:s=0}=e,a=[],o=.4+t/500*.15+s*.1;for(let l=0;l<3;l++){const c=o*(1/(l+1));if(Math.random()>c)continue;const h=this._rollRarity(t),d=Qt[Math.floor(Math.random()*Qt.length)],u=vn.filter(p=>p.rarity===h&&p.slot===d);if(u.length===0){const p=vn.filter(_=>_.rarity===h);if(p.length===0)continue;const g=p[Math.floor(Math.random()*p.length)];a.push(this._createInstance(g))}else{const p=u[Math.floor(Math.random()*u.length)];a.push(this._createInstance(p))}}return a}_rollRarity(e){let t={common:50,uncommon:30,rare:15,epic:4,legendary:1};e>1e3&&(t.common-=10,t.uncommon+=5,t.rare+=3,t.epic+=1.5,t.legendary+=.5),e>2e3&&(t.legendary*=2,t.epic+=2,t.rare+=3);const i=Object.values(t).reduce((s,a)=>s+a,0);let n=Math.random()*i;for(const[s,a]of Object.entries(t))if(n-=a,n<=0)return s;return"common"}_createInstance(e){return{instanceId:`${e.id}_${Date.now()}_${Math.floor(Math.random()*1e5)}`,itemId:e.id,name:e.name,slot:e.slot,rarity:e.rarity,icon:e.icon,stats:{...e.stats},flavorText:e.flavorText}}addToInventory(e){this.inventory.push(e),this._save()}getMaterials(){return{...this.materials}}salvage(e){const t=this.inventory.findIndex(s=>s.instanceId===e);if(t===-1)return null;const i=this.inventory[t];for(const s of Qt)if(this.equipped[s]===e)return null;const n=Ad[i.rarity];if(!n)return null;this.inventory.splice(t,1);for(const[s,a]of Object.entries(n))this.materials[s]=(this.materials[s]||0)+a;return this._save(),{...n}}canCraft(e){var i;const t=(i=di[e])==null?void 0:i.craftCost;if(!t)return!1;for(const[n,s]of Object.entries(t))if((this.materials[n]||0)<s)return!1;return!0}craft(e,t){if(!this.canCraft(e))return null;const i=di[e].craftCost;for(const[o,l]of Object.entries(i))this.materials[o]-=l;let n=vn.filter(o=>o.rarity===e&&o.slot===t);if(n.length===0&&(n=vn.filter(o=>o.rarity===e)),n.length===0)return null;const s=n[Math.floor(Math.random()*n.length)],a=this._createInstance(s);return this.inventory.push(a),this._save(),a}_save(){try{localStorage.setItem("vr_inventory",JSON.stringify(this.inventory)),localStorage.setItem("vr_equipped",JSON.stringify(this.equipped)),localStorage.setItem("vr_materials",JSON.stringify(this.materials))}catch(e){console.warn("Equipment save failed:",e)}}_load(){try{const e=localStorage.getItem("vr_inventory");e&&(this.inventory=JSON.parse(e));const t=localStorage.getItem("vr_equipped");if(t){const n=JSON.parse(t);for(const s of Qt)n[s]!==void 0&&(this.equipped[s]=n[s])}const i=localStorage.getItem("vr_materials");i&&(this.materials=JSON.parse(i))}catch(e){console.warn("Equipment load failed:",e)}for(const e of Qt)this.equipped[e]&&!this.inventory.find(t=>t.instanceId===this.equipped[e])&&(this.equipped[e]=null)}getItemDef(e){return vn.find(t=>t.id===e)||null}sortInventory(e="rarity"){return e==="rarity"?this.inventory.sort((t,i)=>(gh[i.rarity]||0)-(gh[t.rarity]||0)):e==="slot"&&this.inventory.sort((t,i)=>Qt.indexOf(t.slot)-Qt.indexOf(i.slot)),this.inventory}isEquipped(e){for(const t of Qt)if(this.equipped[t]===e)return!0;return!1}}const Ka={common:"#a0a0a0",uncommon:"#6a8a4a",rare:"#4a7ab5",epic:"#8a5ab5",legendary:"#c9a24e"},Cd=[{id:"default",name:"Standard",category:"skin",icon:"👤",rarity:"common",price:null,tint:null,aura:null,description:"The classic look."},{id:"bronze_warrior",name:"Bronze Warrior",category:"skin",icon:"🟤",rarity:"common",price:{currency:"coins",amount:500},tint:13467442,aura:null,description:"Bronzed and battle-hardened."},{id:"marble_statue",name:"Marble Statue",category:"skin",icon:"🗿",rarity:"uncommon",price:{currency:"coins",amount:1200},tint:15261912,aura:null,description:"Carved from Olympian marble."},{id:"crimson_centurion",name:"Crimson Centurion",category:"skin",icon:"🔴",rarity:"uncommon",price:{currency:"coins",amount:1500},tint:13378082,aura:null,description:"Clad in the crimson of Rome."},{id:"forest_spirit",name:"Forest Spirit",category:"skin",icon:"🌿",rarity:"uncommon",price:{currency:"coins",amount:1800},tint:4500036,aura:{color:[.3,.7,.3],intensity:.3,particles:!1},description:"Blessed by the woodland nymphs."},{id:"emerald_druid",name:"Emerald Druid",category:"skin",icon:"💚",rarity:"rare",price:{currency:"coins",amount:3e3},tint:2271829,aura:{color:[.2,.8,.4],intensity:.5,particles:!0},description:"Nature pulses through every vein."},{id:"ocean_depths",name:"Ocean Depths",category:"skin",icon:"🌊",rarity:"rare",price:{currency:"coins",amount:3500},tint:1136042,aura:{color:[.1,.4,.8],intensity:.5,particles:!0},description:"Touched by Poseidon's trident."},{id:"sandstorm",name:"Sandstorm",category:"skin",icon:"🏜️",rarity:"rare",price:{currency:"coins",amount:4e3},tint:13150280,aura:{color:[.8,.7,.3],intensity:.4,particles:!0},description:"A whirlwind of desert fury."},{id:"golden_champion",name:"Golden Champion",category:"skin",icon:"🌟",rarity:"rare",price:{currency:"coins",amount:5e3},tint:16766720,aura:{color:[1,.85,.2],intensity:.5,particles:!0},description:"Blessed by the gods."},{id:"blood_moon",name:"Blood Moon",category:"skin",icon:"🌑",rarity:"epic",price:{currency:"dust",amount:350},tint:8912930,aura:{color:[.8,.1,.1],intensity:.7,particles:!0},description:"Born under a crimson eclipse."},{id:"shadow_wraith",name:"Shadow Wraith",category:"skin",icon:"👻",rarity:"epic",price:{currency:"dust",amount:500},tint:1710638,aura:{color:[.3,.1,.5],intensity:.8,particles:!0},description:"One with the darkness."},{id:"void_walker",name:"Void Walker",category:"skin",icon:"🕳️",rarity:"epic",price:{currency:"dust",amount:600},tint:2228292,aura:{color:[.4,0,.6],intensity:.8,particles:!0},description:"Steps between the planes of existence."},{id:"electric",name:"Stormborn",category:"skin",icon:"⚡",rarity:"epic",price:{currency:"dust",amount:550},tint:3368703,aura:{color:[.3,.5,1],intensity:.9,particles:!0},description:"Zeus himself could not wield this power."},{id:"infernal_titan",name:"Infernal Titan",category:"skin",icon:"🔥",rarity:"legendary",price:{currency:"pyr",amount:10},tint:16720384,aura:{color:[1,.3,0],intensity:1,particles:!0},description:"Forged in volcanic fire."},{id:"frost_emperor",name:"Frost Emperor",category:"skin",icon:"❄️",rarity:"legendary",price:{currency:"pyr",amount:10},tint:8965375,aura:{color:[.5,.8,1],intensity:1,particles:!0},description:"Winter incarnate."},{id:"celestial",name:"Celestial",category:"skin",icon:"✨",rarity:"legendary",price:{currency:"pyr",amount:15},tint:16777198,aura:{color:[1,.95,.7],intensity:1,particles:!0},description:"Ascended beyond mortal form."}],Rd=[{id:"trail_default",name:"No Trail",category:"trail",icon:"➖",rarity:"common",price:null,particleColor:null,particleSize:0,particleCount:0,lifetime:0,style:"dust"},{id:"trail_dust",name:"Dust Cloud",category:"trail",icon:"💨",rarity:"common",price:{currency:"coins",amount:300},particleColor:[.7,.6,.4],particleSize:.15,particleCount:2,lifetime:.8,style:"dust"},{id:"trail_embers",name:"Ember Trail",category:"trail",icon:"🔸",rarity:"uncommon",price:{currency:"coins",amount:800},particleColor:[1,.5,.1],particleSize:.1,particleCount:2,lifetime:.7,style:"sparkle"},{id:"trail_ice",name:"Frost Trail",category:"trail",icon:"🧊",rarity:"rare",price:{currency:"coins",amount:2500},particleColor:[.5,.8,1],particleSize:.1,particleCount:3,lifetime:.9,style:"sparkle"},{id:"trail_golden",name:"Golden Trail",category:"trail",icon:"🌟",rarity:"rare",price:{currency:"coins",amount:3e3},particleColor:[1,.85,.2],particleSize:.1,particleCount:3,lifetime:1,style:"sparkle"},{id:"trail_nature",name:"Verdant Path",category:"trail",icon:"🍃",rarity:"rare",price:{currency:"coins",amount:2800},particleColor:[.3,.8,.3],particleSize:.12,particleCount:3,lifetime:.9,style:"sparkle"},{id:"trail_fire",name:"Flame Trail",category:"trail",icon:"🔥",rarity:"epic",price:{currency:"dust",amount:300},particleColor:[1,.4,0],particleSize:.12,particleCount:4,lifetime:.6,style:"flame"},{id:"trail_shadow",name:"Shadow Trail",category:"trail",icon:"🖤",rarity:"epic",price:{currency:"dust",amount:400},particleColor:[.2,.1,.3],particleSize:.14,particleCount:3,lifetime:1,style:"smoke"},{id:"trail_blood",name:"Bloodmist",category:"trail",icon:"🩸",rarity:"epic",price:{currency:"dust",amount:350},particleColor:[.8,.1,.1],particleSize:.13,particleCount:3,lifetime:.8,style:"smoke"},{id:"trail_lightning",name:"Lightning Trail",category:"trail",icon:"⚡",rarity:"legendary",price:{currency:"pyr",amount:5},particleColor:[.3,.5,1],particleSize:.08,particleCount:5,lifetime:.4,style:"lightning"}],Id=[{id:"death_default",name:"Standard",category:"death",icon:"💀",rarity:"common",price:null,effectType:"standard",particleColor:[.7,.5,.3],particleCount:12},{id:"death_explosion",name:"Grand Explosion",category:"death",icon:"💥",rarity:"uncommon",price:{currency:"coins",amount:1e3},effectType:"explosion",particleColor:[1,.6,.1],particleCount:30},{id:"death_dissolve",name:"Dust to Dust",category:"death",icon:"✨",rarity:"rare",price:{currency:"coins",amount:2500},effectType:"dissolve",particleColor:[.8,.7,.5],particleCount:40},{id:"death_shatter",name:"Shatter",category:"death",icon:"💎",rarity:"rare",price:{currency:"coins",amount:3e3},effectType:"shatter",particleColor:[.9,.9,1],particleCount:25},{id:"death_lightning",name:"Struck Down",category:"death",icon:"⚡",rarity:"epic",price:{currency:"dust",amount:400},effectType:"lightning",particleColor:[.4,.6,1],particleCount:35},{id:"death_ghostrise",name:"Spirit Ascension",category:"death",icon:"👻",rarity:"legendary",price:{currency:"pyr",amount:5},effectType:"ghostrise",particleColor:[.7,.9,1],particleCount:50}],Dd=[{id:"title_none",name:"No Title",category:"title",icon:"📝",rarity:"common",price:null,titleText:""},{id:"title_champion",name:"Champion",category:"title",icon:"🏆",rarity:"uncommon",price:{currency:"coins",amount:1e3},titleText:"Champion"},{id:"title_gladiator",name:"Gladiator",category:"title",icon:"⚔️",rarity:"uncommon",price:{currency:"coins",amount:1200},titleText:"Gladiator"},{id:"title_centurion",name:"Centurion",category:"title",icon:"🛡️",rarity:"rare",price:{currency:"coins",amount:2500},titleText:"Centurion"},{id:"title_conqueror",name:"Conqueror",category:"title",icon:"👑",rarity:"rare",price:{currency:"coins",amount:3e3},titleText:"Conqueror"},{id:"title_titan_slayer",name:"Titan Slayer",category:"title",icon:"🗡️",rarity:"epic",price:null,titleText:"Titan Slayer"},{id:"title_undying",name:"The Undying",category:"title",icon:"💀",rarity:"epic",price:{currency:"dust",amount:300},titleText:"The Undying"},{id:"title_olympian",name:"Olympian",category:"title",icon:"⛰️",rarity:"epic",price:{currency:"dust",amount:500},titleText:"Olympian"},{id:"title_demigod",name:"Demigod",category:"title",icon:"✨",rarity:"legendary",price:{currency:"pyr",amount:5},titleText:"Demigod"},{id:"title_god_of_war",name:"God of War",category:"title",icon:"🔥",rarity:"legendary",price:null,titleText:"God of War"}],oy=[...Cd,...Rd,...Id,...Dd],Pd={};for(const r of oy)Pd[r.id]=r;function hi(r){return Pd[r]||null}const ly=["default","trail_default","death_default","title_none"],Ja={skin:"default",trail:"trail_default",death:"death_default",title:"title_none"};class vh{constructor(){this._ownedKey="vr_cosmetics_owned",this._equippedKey="vr_cosmetics_equipped",this._load()}getOwned(){return new Set(this._owned)}owns(e){return this._owned.has(e)}getEquipped(){return{...this._equipped}}equipSkin(e){if(!this.owns(e))return!1;const t=hi(e);return!t||t.category!=="skin"?!1:(this._equipped.skin=e,this._save(),!0)}equipTrail(e){if(!this.owns(e))return!1;const t=hi(e);return!t||t.category!=="trail"?!1:(this._equipped.trail=e,this._save(),!0)}equipDeath(e){if(!this.owns(e))return!1;const t=hi(e);return!t||t.category!=="death"?!1:(this._equipped.death=e,this._save(),!0)}equipTitle(e){if(!this.owns(e))return!1;const t=hi(e);return!t||t.category!=="title"?!1:(this._equipped.title=e,this._save(),!0)}getActiveSkin(){return hi(this._equipped.skin)}getActiveTrail(){return hi(this._equipped.trail)}getActiveDeath(){return hi(this._equipped.death)}getActiveTitle(){const e=hi(this._equipped.title);return e&&e.titleText||null}getSkinTint(){const e=this.getActiveSkin();return e?e.tint:null}getSkinAura(){const e=this.getActiveSkin();return e?e.aura:null}getTrailConfig(){const e=this.getActiveTrail();return!e||!e.particleColor?null:{particleColor:e.particleColor,particleSize:e.particleSize,particleCount:e.particleCount,lifetime:e.lifetime,style:e.style}}getDeathConfig(){const e=this.getActiveDeath();return e?{effectType:e.effectType,particleColor:e.particleColor,particleCount:e.particleCount}:null}canAfford(e){const t=hi(e);if(!t||!t.price)return!1;const{currency:i,amount:n}=t.price;return i==="coins"?parseInt(localStorage.getItem("vr_coins")||"0",10)>=n:i==="dust"?parseInt(localStorage.getItem("vr_stardust")||"0",10)>=n:!1}purchase(e){if(this.owns(e))return{success:!1,error:"Already owned"};const t=hi(e);if(!t||!t.price)return{success:!1,error:"Not purchasable"};const{currency:i,amount:n}=t.price;if(i==="coins"){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);if(s<n)return{success:!1,error:"Not enough coins"};localStorage.setItem("vr_coins",String(s-n))}else if(i==="dust"){const s=parseInt(localStorage.getItem("vr_stardust")||"0",10);if(s<n)return{success:!1,error:"Not enough Star Dust"};localStorage.setItem("vr_stardust",String(s-n))}else if(i==="pyr")return{success:!1,error:"PYR purchases require wallet"};return this._owned.add(e),this._save(),{success:!0}}grant(e){this._owned.add(e),this._save()}_save(){try{localStorage.setItem(this._ownedKey,JSON.stringify([...this._owned])),localStorage.setItem(this._equippedKey,JSON.stringify(this._equipped))}catch(e){console.warn("CosmeticsManager: failed to save.",e)}}_load(){try{const e=localStorage.getItem(this._ownedKey);this._owned=e?new Set(JSON.parse(e)):new Set}catch{this._owned=new Set}for(const e of ly)this._owned.add(e);try{const e=localStorage.getItem(this._equippedKey);this._equipped=e?JSON.parse(e):{...Ja}}catch{this._equipped={...Ja}}for(const[e,t]of Object.entries(this._equipped))this._owned.has(t)||(this._equipped[e]=Ja[e])}}class cy{constructor(){this._walletAddress=null,this._saveKey="vr_save_local",this._autoSaveInterval=null,this._dirty=!1,this.SAVE_KEYS=["vr_coins","vr_stardust","vr_best","vr_tutorial_done","vr_unlocked","vr_inventory","vr_equipped","vr_materials","vr_cosmetics_owned","vr_cosmetics_equipped","vr_campaign","vr_challenge_stars","vr_upgrades"],this.SETTINGS_KEYS=["vr_volume","vr_music","vr_sfx"],this._startAutoSave()}onWalletConnect(e){this.save(),this._walletAddress=e.toLowerCase(),this._saveKey=`vr_save_${this._walletAddress}`;const t=localStorage.getItem(this._saveKey);t?(this._restoreFromSnapshot(JSON.parse(t)),console.log(`[SaveManager] Loaded save for wallet ${e.slice(0,6)}...`)):(this.save(),console.log(`[SaveManager] Created new save for wallet ${e.slice(0,6)}...`))}onWalletDisconnect(){this.save(),this._walletAddress=null,this._saveKey="vr_save_local";const e=localStorage.getItem(this._saveKey);e&&this._restoreFromSnapshot(JSON.parse(e))}_createSnapshot(){const e={version:1,timestamp:Date.now()};for(const t of this.SAVE_KEYS)e[t]=localStorage.getItem(t);return e}_restoreFromSnapshot(e){if(!e||e.version!==1)return!1;for(const t of this.SAVE_KEYS)e[t]!==void 0&&e[t]!==null?localStorage.setItem(t,e[t]):localStorage.removeItem(t);return!0}save(){const e=this._createSnapshot();localStorage.setItem(this._saveKey,JSON.stringify(e)),this._dirty=!1}markDirty(){this._dirty=!0}_startAutoSave(){this._autoSaveInterval=setInterval(()=>{this._dirty&&this.save()},3e4)}exportSave(){const e=this._createSnapshot();return e.walletAddress=this._walletAddress,JSON.stringify(e,null,2)}importSave(e){try{const t=JSON.parse(e);return t.version!==1?{success:!1,error:"Invalid save version"}:(this._restoreFromSnapshot(t),this.save(),{success:!0})}catch{return{success:!1,error:"Invalid save data"}}}getSaveInfo(){const e=localStorage.getItem(this._saveKey);if(!e)return null;const t=JSON.parse(e);return{wallet:this._walletAddress?this._walletAddress.slice(0,6)+"..."+this._walletAddress.slice(-4):"Local",lastSaved:t.timestamp?new Date(t.timestamp).toLocaleString():"Never",coins:parseInt(t.vr_coins||"0"),bestScore:parseInt(t.vr_best||"0")}}listSaves(){const e=[];for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);if(i&&i.startsWith("vr_save_"))try{const n=JSON.parse(localStorage.getItem(i));e.push({key:i,wallet:i==="vr_save_local"?"Local":i.replace("vr_save_","").slice(0,6)+"...",timestamp:n.timestamp,coins:parseInt(n.vr_coins||"0"),best:parseInt(n.vr_best||"0")})}catch{}}return e}dispose(){this._autoSaveInterval&&clearInterval(this._autoSaveInterval),this.save()}}const hy=$v,At={MENU:0,PLAYING:1,GAME_OVER:2,PAUSED:3,REVIVE_PROMPT:4,CAMPAIGN_MAP:5},yh=new C(0,5.5,10),dy=12,uy=2.5,Fr=1,py=.05,fy=5,my=10,zr={CoinMagnet:8,DoubleCoin:10,Invincibility:6,Shield:8,TimeAdvantage:5},gy=8,_y=15;class vy{constructor(e,t,i,n,s){this.scene=e,this.camera=t,this.ui=i,this.assetLoader=n,this.input=new Gv,this.audio=s||new Ed,this.state=At.MENU,this.runner=null,this.world=null,this.particles=null,this.currentTheme="roman",this.dustTimer=0,this.score=0,this.coins=0,this.distance=0,this.bestScore=parseInt(localStorage.getItem("vr_best")||"0",10),this.totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10),this.comboCount=0,this.comboTimer=0,this.comboMultiplier=Fr,this.maxCombo=0,this.activePowerUps={},this.health=2,this.maxHealth=3,this.revivesAvailable=1,this.reviveTimer=0,this.obstaclesDodged=0,this.obstaclesSmashed=0,this.shakeIntensity=0,this.shakeDuration=0,this.difficulty=0,this._passedObstacles=new Set,this._screenFlash=null,this._wasAirborne=!1,this._landingDipTimer=0,this._milestonesPassed=new Set,this._milestones=[500,1e3,2e3,5e3],this._themeTransitionTimer=0,this._prevTheme="roman",this._bossEncounter=null,this._nextBossDistance=1e3,this._bossInterval=1e3,this._bossActive=!1,this._bossApproachSlowTimer=0,this.campaignManager=new Zv,this.challengeManager=new ey,this.runConfig=null,this._noHitDistance=0,this._maxNoHitDistance=0,this._nearMisses=0,this._powerUpsCollected=0,this._gemsCollected=0,this._bossesDefeated=0,this.abilityManager=new ty,this.progressionManager=new ny,this._abilityConfig=null,this._abilityCooldown=0,this._abilityActive=!1,this._abilityTimer=0,this._charStats=null,this._bruteForceTimer=0,this.miniGameManager=new ry,this._biomeManager=null,this._biomeHazardDmgCooldown=0,this._miniGameCoinsEarned=0,this.equipmentManager=new _h,this.cosmeticsManager=new vh,this._equipStats={},this.saveManager=new cy,this.shop=new ch,this.wallet=new Kv,this.leaderboard=new Jv,this._lastScore=0,this._lastDistance=0,this._lastCoins=0,this._pyrTreasury="0x0000000000000000000000000000000000000000",this.wallet.on("connected",o=>{this.saveManager.onWalletConnect(this.wallet.address),this.totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10),this.bestScore=parseInt(localStorage.getItem("vr_best")||"0",10),this.shop=new ch,this.equipmentManager=new _h,this.cosmeticsManager=new vh,this.ui.updateWalletUI(!0,this.wallet.shortAddress(),o.balance),this.ui.updateCoins(this.totalCoins)}),this.wallet.on("disconnected",()=>{this.saveManager.onWalletDisconnect(),this.totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10),this.bestScore=parseInt(localStorage.getItem("vr_best")||"0",10),this.ui.updateWalletUI(!1,"",0),this.ui.updateCoins(this.totalCoins)}),this.wallet.on("accountChanged",()=>{this.ui.updateWalletUI(this.wallet.connected,this.wallet.shortAddress(),this.wallet.pyrBalance)}),this.wallet.on("balanceUpdated",o=>{this.ui.updateWalletUI(!0,this.wallet.shortAddress(),o)}),this.wallet.on("error",o=>{console.warn("Wallet error:",o)}),this.wallet.on("scoreWritten",o=>{this.ui.updateChainStatus(`Score written! TX: ${o.txHash.slice(0,10)}...`),this.leaderboard.markOnChain(o.score,o.txHash)}),this._characterId="knight",this._tutorialStep=-1,this._tutorialTimer=0,this._tutorialPaused=!1,i.on("play",()=>this.startRun()),i.on("skip-tutorial",()=>this._skipTutorial()),i.on("menu",()=>this.goToMenu()),i.on("pause",()=>this.pause()),i.on("resume",()=>this.resume()),i.on("revive",()=>this._useRevive()),i.on("skip-revive",()=>{this.revivesAvailable=0,this.endRun()}),i.on("show-shop",()=>{this.ui.showShop(this.shop,this.wallet)}),i.on("show-leaderboard",()=>{this.ui.showLeaderboard(this.leaderboard.getTop(15),this.cosmeticsManager.getActiveTitle())}),i.on("connect-wallet",async()=>{await this.wallet.connect()}),i.on("shop-buy",async o=>{if(o.currency==="coins"){const l=this.shop.buyWithCoins(o.itemId);l.success?(this.totalCoins=l.newBalance,this.audio.playCoinPickup()):console.warn("Purchase failed:",l.error)}else if(o.currency==="pyr"){const l=await this.shop.buyWithPYR(o.itemId,this.wallet,this._pyrTreasury);l.success?this.audio.playPowerUp("Invincibility"):console.warn("PYR purchase failed:",l.error)}this.ui.showShop(this.shop,this.wallet)}),i.on("write-chain",async()=>{this.ui.updateChainStatus("Writing to chain..."),await this.wallet.writeScoreToChain(this._lastScore,this._lastDistance,this._lastCoins)||this.ui.updateChainStatus("Transaction cancelled.")}),i.on("show-campaign",()=>{this.state=At.CAMPAIGN_MAP,this.ui.showCampaignMap(this.campaignManager,this.challengeManager)}),i.on("campaign-back",()=>this.goToMenu()),i.on("show-daily",()=>{this.ui.showDailyChallengesDirectly(this.campaignManager,this.challengeManager)}),i.on("campaign-start",o=>{const l=this.campaignManager.getStage(o.campaignId,o.stageIndex);l&&(this.runConfig={campaignId:o.campaignId,stageIndex:o.stageIndex,modifiers:l.modifiers||{},objectives:l.objectives||{}},this.ui.showCharSelect())}),i.on("challenge-claim",o=>{const l=this.challengeManager.claimReward(o.index);l&&(this.totalCoins+=l.coins,localStorage.setItem("vr_coins",String(this.totalCoins)),this.audio.playCoinPickup()),this.ui.refreshCampaignUI()}),i.on("challenge-bonus-claim",()=>{const o=this.challengeManager.claimBonus();o&&(this.totalCoins+=o.coins,localStorage.setItem("vr_coins",String(this.totalCoins)),this.audio.playPowerUp("Invincibility")),this.ui.refreshCampaignUI()}),i.on("show-heroes",()=>{this.ui.showHeroesScreen(this.abilityManager,this.progressionManager)}),i.on("heroes-back",()=>this.goToMenu()),i.on("show-vanity",()=>{this.ui.showCosmeticsScreen(this.cosmeticsManager)}),i.on("cosmetics-back",()=>this.goToMenu()),i.on("cosmetic-equipped",()=>{}),i.on("show-forge",()=>{this.ui.showEquipmentScreen(this.equipmentManager)}),i.on("equipment-back",()=>this.goToMenu()),i.on("equipment-changed",()=>{}),i.on("upgrade-purchased",()=>{this.audio.playCoinPickup()}),i.on("reward-claimed",o=>{o&&o.coins&&(this.totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10)),this.audio.playCoinPickup()});const a=async()=>{document.removeEventListener("click",a),document.removeEventListener("touchstart",a),this.audio.init(),this.audio.resume(),await this.audio.startMenuMusic()};document.addEventListener("click",a),document.addEventListener("touchstart",a),this._setupMenuCamera()}goToMenu(){this.state=At.MENU,this.audio.stopMusic(),this.audio.startMenuMusic(),this._bossEncounter&&(this._bossEncounter.dispose(),this._bossActive=!1),this._biomeManager&&(this._biomeManager.dispose(),this._biomeManager=null),this.ui.hideBossVignette(),this.ui.hideBossUI(),this.scene.fog=null,this.runner&&(this.runner.dispose(),this.runner=null),this.world&&(this.world.reset(),this.world=null),this.particles&&(this.particles.dispose(),this.particles=null),this.ui.showMenu(),this._setupMenuCamera()}startRun(){var n;this.state=At.PLAYING,this.audio.init(),this.audio.resume(),this.audio.playMenuClick(),this.runner&&this.runner.dispose(),this.world&&this.world.reset(),this.particles&&this.particles.dispose(),this._characterId=this.ui.selectedCharacter,this.runner=new Mv(this.scene,this.assetLoader,this._characterId),this.world=new Hv(this.scene,this.assetLoader),this.particles=new Vv(this.scene),this.dustTimer=0,this.score=0,this.coins=0,this.distance=0,this.comboCount=0,this.comboTimer=0,this.comboMultiplier=Fr,this.maxCombo=0,this.activePowerUps={},this.health=2,this.maxHealth=3,this.revivesAvailable=1,this.reviveTimer=0,this.obstaclesDodged=0,this.obstaclesSmashed=0,this._noHitDistance=0,this._maxNoHitDistance=0,this._nearMisses=0,this._powerUpsCollected=0,this._gemsCollected=0,this._bossesDefeated=0,this.shakeIntensity=0,this.shakeDuration=0,this.difficulty=0,this._passedObstacles=new Set,this._milestonesPassed=new Set,this._themeTransitionTimer=0,this._prevTheme="roman",this._bossEncounter&&this._bossEncounter.dispose(),this._bossEncounter=new jv(this.scene),this._nextBossDistance=1e3,this._bossActive=!1,this._bossApproachSlowTimer=0;const e=((n=this.runConfig)==null?void 0:n.modifiers)||{};if(e.fixedTheme&&(this.world.fixedTheme=e.fixedTheme),e.obstacleFrequency&&(this.world.obstacleFrequencyMult=e.obstacleFrequency),e.maxHealth&&(this.health=e.maxHealth,this.maxHealth=e.maxHealth),e.noRevive&&(this.revivesAvailable=0),e.bossEnabled===!1&&(this._nextBossDistance=1/0),e.bossAtDistance&&(this._nextBossDistance=e.bossAtDistance),this._campaignTimeLeft=0,this._campaignBossesSpawned=0,this._campaignBossCount=0,this.runConfig){const s=this.campaignManager.getStageConfig(this.runConfig.campaignId,this.runConfig.stageIndex);s&&(this._campaignTimeLeft=s.computedTimeLimit,this._campaignBossCount=s.computedBossCount,!e.bossAtDistance&&this._campaignBossCount>0&&(this._nextBossDistance=600))}this._charStats=this.abilityManager.getCharacterStats(this._characterId),this._abilityConfig=this.abilityManager.getAbilityConfig(this._characterId),this._abilityCooldown=0,this._abilityActive=!1,this._abilityTimer=0,this._bruteForceTimer=0,this._charStats&&(this.health+=this._charStats.maxHealthBonus,this.maxHealth+=this._charStats.maxHealthBonus),this._equipStats=this.equipmentManager.getEquippedStats(),this._equipStats.maxHealth&&(this.health+=this._equipStats.maxHealth,this.maxHealth+=this._equipStats.maxHealth),this._abilityConfig&&this.ui.showAbilityHUD(this._abilityConfig.icon,this._abilityConfig.name),this.miniGameManager.reset(),this._biomeManager&&this._biomeManager.dispose(),this._biomeManager=new ay(this.scene),this._biomeHazardDmgCooldown=0,this._miniGameCoinsEarned=0,this.runner.startRunning();const t=this.cosmeticsManager.getSkinTint();t!=null&&this.runner.applySkinTint(t);const i=this.cosmeticsManager.getSkinAura();i&&this.runner.applyAuraEffect(i),this.shop.useBoost("extra_life")&&(this.revivesAvailable=2),this.shop.useBoost("coin_boost")&&(this.activePowerUps.DoubleCoin=999999),this.shop.useBoost("shield_start")&&(this.activePowerUps.Shield=8),this.shop.useBoost("magnet_start")&&(this.activePowerUps.CoinMagnet=8),this.shop.useBoost("head_start")&&(this.runner.position.z=-500,this.coins+=50),this.audio.startMusic(),this.audio.playStart(),this.ui.showHUD(),this.ui.updateScore(0),this.ui.updateCoins(0),this.ui.updateDistance(0),this.ui.updateCombo(0,1),this.ui.updateHealth(this.health,this.maxHealth),this._campaignTimeLeft>0&&this.ui.updateCampaignTimer(this._campaignTimeLeft),this._shouldRunTutorial()&&this._startTutorial()}endRun(){if(this.revivesAvailable>0){this.state=At.REVIVE_PROMPT,this.reviveTimer=3,this.runner.die(),this.ui.showRevivePrompt();return}this.state=At.GAME_OVER,this.runner.die(),this.audio.playDeath(),this.audio.stopMusic(),this.ui.hideBossVignette(),this.ui.hideBossUI(),this.shakeIntensity=.8,this.shakeDuration=.5;const e=this.cosmeticsManager.getDeathConfig();if(e&&this.particles){const l=this.runner.position.x,c=this.runner.position.y+1,h=this.runner.position.z,d=e.particleColor,u=e.particleCount;switch(e.effectType){case"explosion":this.particles.burstSparkles(l,c,h,d,u),this.particles.burstDebris(l,c,h,Math.floor(u/2));break;case"dissolve":for(let p=0;p<u;p++)this.particles.burstSparkles(l+(Math.random()-.5)*1.5,c+Math.random()*2,h+(Math.random()-.5)*1.5,d,1);break;case"shatter":this.particles.burstDebris(l,c,h,u),this.particles.burstSparkles(l,c,h,d,Math.floor(u/3));break;case"lightning":this.particles.burstSparkles(l,c+3,h,d,Math.floor(u/2)),this.particles.burstSparkles(l,c,h,d,Math.floor(u/2)),this._screenFlash={color:d,timer:.3,duration:.3};break;case"ghostrise":for(let p=0;p<u;p++)this.particles.burstSparkles(l+(Math.random()-.5)*.5,c+Math.random()*.5,h+(Math.random()-.5)*.5,d,1);break;default:this.particles.burstSparkles(l,c,h,d,u);break}}this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("vr_best",String(this.bestScore))),this.totalCoins+=this.coins,localStorage.setItem("vr_coins",String(this.totalCoins)),this.saveManager.save();const t={score:this.score,distance:this.distance,coins:this.coins,maxCombo:this.maxCombo,chestsSmashed:this.obstaclesSmashed,obstaclesDodged:this.obstaclesDodged,noHitDistance:this._maxNoHitDistance,bossDefeated:this._bossesDefeated,powerUpsCollected:this._powerUpsCollected,gemsCollected:this._gemsCollected,nearMisses:this._nearMisses,health:this.health};let i=null;this.runConfig&&(i=this.campaignManager.evaluateRun(this.runConfig.campaignId,this.runConfig.stageIndex,t));const n=this.challengeManager.evaluateRun(t),s=i?i.stars:0;this.progressionManager.processRun(t,s),i&&i.stars===3&&i.isNew&&this.abilityManager.addStarDust(50),this._bossesDefeated>0&&this.abilityManager.addKeys(this._bossesDefeated);let a=Math.floor(this.distance/100)+Math.floor(this.score/500);this._equipStats.dustBonus&&(a=Math.floor(a*(1+this._equipStats.dustBonus/100))),a>0&&this.abilityManager.addStarDust(a);const o=this.equipmentManager.generateLoot({distance:this.distance,score:this.score,coins:this.coins,difficulty:this.difficulty});for(const l of o)this.equipmentManager.addToInventory(l);this.ui.showGameOver(this.score,this.distance,this.coins,this.bestScore,{maxCombo:this.maxCombo,obstaclesDodged:this.obstaclesDodged,obstaclesSmashed:this.obstaclesSmashed,maxSpeed:Math.floor(this.runner.runSpeed)},i,n,o),this._lastScore=this.score,this._lastDistance=this.distance,this._lastCoins=this.coins,this.ui.showChainWriteButton(this.wallet.connected),this.ui.updateChainStatus(""),this.leaderboard.submit({name:this.wallet.connected?this.wallet.shortAddress():"Player",score:this.score,distance:this.distance,coins:this.coins,character:this._characterId,maxCombo:this.maxCombo,address:this.wallet.address}),this.runConfig=null}_campaignVictory(){var o;this.state=At.GAME_OVER,this.runner.celebrate(),this.audio.stopMusic(),this.audio.playPowerUp("Invincibility"),this.ui.hideBossVignette(),this.ui.hideBossUI(),this.ui.updateCampaignTimer(0),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("vr_best",String(this.bestScore))),this.totalCoins+=this.coins,localStorage.setItem("vr_coins",String(this.totalCoins)),this.saveManager.save();const e={score:this.score,distance:this.distance,coins:this.coins,maxCombo:this.maxCombo,chestsSmashed:this.obstaclesSmashed,obstaclesDodged:this.obstaclesDodged,noHitDistance:this._maxNoHitDistance,bossDefeated:this._bossesDefeated,powerUpsCollected:this._powerUpsCollected,gemsCollected:this._gemsCollected,nearMisses:this._nearMisses,health:this.health};let t=null;if(this.runConfig){const l=this.campaignManager.getStage(this.runConfig.campaignId,this.runConfig.stageIndex);l&&(t=this.campaignManager.evaluateRun(this.runConfig.campaignId,l.id,e))}const i=this.challengeManager.evaluateRun(e),n=t?t.stars:0;this.progressionManager.processRun(e,n),t&&t.stars===3&&t.isNew&&this.abilityManager.addStarDust(50),this._bossesDefeated>0&&this.abilityManager.addKeys(this._bossesDefeated);let s=Math.floor(this.distance/100)+Math.floor(this.score/500);this._equipStats.dustBonus&&(s=Math.floor(s*(1+this._equipStats.dustBonus/100))),s>0&&this.abilityManager.addStarDust(s);const a=this.equipmentManager.generateLoot({distance:this.distance,score:this.score,coins:this.coins,difficulty:this.difficulty});for(const l of a)this.equipmentManager.addToInventory(l);this.ui.showGameOver(this.score,this.distance,this.coins,this.bestScore,{maxCombo:this.maxCombo,obstaclesDodged:this.obstaclesDodged,obstaclesSmashed:this.obstaclesSmashed,maxSpeed:Math.floor(((o=this.runner)==null?void 0:o.runSpeed)||0)},t,i,a,!0),this.ui.updateCoins(this.totalCoins),this.leaderboard.submit({name:this.wallet.connected?this.wallet.shortAddress():"Player",score:this.score,distance:this.distance,coins:this.coins,character:this._characterId,maxCombo:this.maxCombo,address:this.wallet.address}),this.runConfig=null}pause(){this.state===At.PLAYING&&(this.state=At.PAUSED,this.audio.playPause(),this.ui.showPause())}resume(){this.state===At.PAUSED&&(this.state=At.PLAYING,this.audio.playResume(),this.ui.showHUD())}_useRevive(){var t;if(this.state!==At.REVIVE_PROMPT)return;this.revivesAvailable--;const e=(t=xi[this._characterId])==null?void 0:t.passive;(e==null?void 0:e.id)==="blessed"?this.health=this._getPassiveValue():this.health=1,this._equipStats.reviveHP&&(this.health=Math.min(this.health+this._equipStats.reviveHP,this.maxHealth)),this.runner.revive(),this.audio.playRevive(),this.audio.startMusic(),this.state=At.PLAYING,this.ui.showHUD(),this.ui.updateHealth(this.health,this.maxHealth),this.activePowerUps.Invincibility=2}_shouldRunTutorial(){return!localStorage.getItem("vr_tutorial_done")}_startTutorial(){this._tutorialStep=-1,this._tutorialTimer=1,this._tutorialPaused=!1}_advanceTutorial(){this.ui.hideTutorialStep(),this._tutorialPaused=!1,this._tutorialStep++;const e=[{text:"USE Q/E OR ←/→ TO CHANGE LANES",icon:"↔️",wait:"left_or_right"},{text:"PRESS W OR ↑ TO JUMP OVER OBSTACLES",icon:"⬆️",wait:"jump"},{text:"PRESS S OR ↓ TO SLIDE UNDER BEAMS",icon:"⬇️",wait:"slide"},{text:"PRESS F TO STRIKE — BREAK GATES AND SMASH OBSTACLES",icon:"⚔️",wait:"attack"},{text:"PRESS A OR R TO USE YOUR SPECIAL ABILITY",icon:"✨",wait:"auto",delay:3},{text:"COLLECT COINS AND RUN INTO GREEN CHESTS FOR LOOT!",icon:"🪙",wait:"auto",delay:2}];if(this._tutorialStep>=e.length){this._tutorialStep=-1,this._tutorialPaused=!1,localStorage.setItem("vr_tutorial_done","true");return}const t=e[this._tutorialStep];this._tutorialPaused=!0,this._tutorialWait=t.wait,this._tutorialAutoDelay=t.delay||0,this._tutorialTimer=0,this.ui.showTutorialStep(this._tutorialStep,t.text,t.icon)}_updateTutorial(e,t){if(this._tutorialStep===-1&&this._tutorialTimer>0){this._tutorialTimer-=e,this._tutorialTimer<=0&&this._advanceTutorial();return}if(!(this._tutorialStep<0||!this._tutorialPaused)){if(this._tutorialWait==="left_or_right"){if(t.includes("left")||t.includes("right")){this._advanceTutorial();return}}else if(this._tutorialWait==="jump"){if(t.includes("jump")){this._advanceTutorial();return}}else if(this._tutorialWait==="slide"){if(t.includes("slide")){this._advanceTutorial();return}}else if(this._tutorialWait==="attack"){if(t.includes("attack")){this._advanceTutorial();return}}else if(this._tutorialWait==="auto"&&(this._tutorialTimer+=e,this._tutorialTimer>=this._tutorialAutoDelay)){this._advanceTutorial();return}}}_skipTutorial(){this._tutorialStep=-1,this._tutorialTimer=0,this._tutorialPaused=!1,this.ui.hideTutorialStep(),localStorage.setItem("vr_tutorial_done","true")}update(e){var c,h,d;if(this.state===At.MENU){this._updateMenuCamera(e);return}if(this.state===At.PAUSED)return;if(this.state===At.REVIVE_PROMPT){const u=Math.ceil(this.reviveTimer);this.reviveTimer-=e;const p=Math.ceil(this.reviveTimer);p<u&&p>0&&this.audio.playCountdownTick(),this.ui.updateReviveTimer(this.reviveTimer),this.reviveTimer<=0&&(this.revivesAvailable=0,this.ui.hideRevivePrompt(),this.endRun()),this._updateCamera(e);return}if(this.state!==At.PLAYING){this._updateCamera(e);return}if(this._campaignTimeLeft>0&&(this._campaignTimeLeft-=e,this.ui.updateCampaignTimer(this._campaignTimeLeft),this._campaignTimeLeft<=0)){this._campaignTimeLeft=0,this._campaignVictory();return}const t=this.input.poll();if(this._tutorialStep>=-1&&this._tutorialTimer>0&&this._tutorialStep===-1)this._updateTutorial(e,t);else if(this._tutorialPaused){this._updateTutorial(e,t),this._updateCamera(e);return}for(const u of t){if(this.miniGameManager.active&&((c=this.miniGameManager.currentGame)==null?void 0:c.id)==="simon_says"){const p=this.miniGameManager.onPlayerAction(u);p&&(p.type==="simon_correct"?(this.audio.playCoinPickup(),this._triggerScreenFlash(.2,1,.3,.15)):p.type==="simon_wrong"&&(this.audio.playHit(),this._triggerScreenFlash(1,.1,.1,.15)))}switch(u){case"left":this.runner.moveLeft(),this.audio.playLaneSwitchLeft();break;case"right":this.runner.moveRight(),this.audio.playLaneSwitchRight();break;case"jump":this.runner.jumpsUsed>0?this.audio.playDoubleJump():this.audio.playJump(),this.runner.jump();break;case"slide":this.runner.slide(),this.audio.playSlide();break;case"attack":this.runner.attack(),this.audio.playAttack(),this.ui.showStrikeEffect();break;case"ability":this._activateAbility();break;case"pause":this.pause();return}}let i=1;this.activePowerUps.TimeAdvantage&&(i=.65),this._equipStats.speedBoost&&(i*=1+this._equipStats.speedBoost/100),this.runner.speedMultiplier=i;const n=this._wasAirborne;this.runner.update(e),n&&this.runner.grounded&&(this.particles&&this.particles.emitLandingImpact(this.runner.position.x,this.runner.position.y,this.runner.position.z),this._landingDipTimer=.2),this._wasAirborne=!this.runner.grounded,this.difficulty=Math.min(5,Math.floor(this.distance/200)),this.world.difficulty=this.difficulty,this.world.update(this.runner.position.z),this.audio.setMusicIntensity(.3+this.difficulty*.12+Math.min(.1,this.runner.runSpeed*.003)),this.particles&&(this.particles.update(e),this.dustTimer-=e,this.dustTimer<=0&&this.runner.grounded&&(this.particles.emitDust(this.runner.position.x,this.runner.position.y,this.runner.position.z,this.runner.sliding),this.dustTimer=this.runner.sliding?.02:.05));const s=this.cosmeticsManager.getTrailConfig();if(s&&this.particles&&this.runner.running&&!this.runner.dead&&(this._cosmeticTrailTimer=(this._cosmeticTrailTimer||0)-e,this._cosmeticTrailTimer<=0)){const u=s.particleColor;for(let p=0;p<s.particleCount;p++)this.particles.burstSparkles(this.runner.position.x+(Math.random()-.5)*.6,this.runner.position.y+.3+Math.random()*.4,this.runner.position.z+1+Math.random()*.5,u,1);this._cosmeticTrailTimer=.06}if(this.activePowerUps.CoinMagnet&&this.world){const u=this.runner.position.x,p=this.runner.position.z;for(const g of this.world.activeCoins){const _=new C;g.getWorldPosition(_);const m=u-_.x,f=p-_.z,x=Math.sqrt(m*m+f*f),S=gy+(this._equipStats.magnetRange||0);if(x<S&&x>.5){const v=_y*e/x;g.position.x+=m*v,g.position.z+=f*v}}}const a=this.distance;this.distance=Math.abs(this.runner.position.z),this._noHitDistance+=this.distance-a,this._noHitDistance>this._maxNoHitDistance&&(this._maxNoHitDistance=this._noHitDistance);const o=Math.floor(this.distance*.5);this.score=o+this.coins*10;const l=1+(this._equipStats.scoreMultiplier||0)/100;this.ui.updateScore(Math.floor(this.score*this.comboMultiplier*l)),this.ui.updateDistance(this.distance),this.comboCount>0&&(this.comboTimer-=e,this.comboTimer<=0&&this._breakCombo());for(const[u,p]of Object.entries(this.activePowerUps))this.activePowerUps[u]=p-e,this.activePowerUps[u]<=0&&delete this.activePowerUps[u];if(this._abilityActive&&(this._abilityTimer-=e,this._abilityTimer<=0&&this._deactivateAbility()),this._abilityCooldown>0&&(this._abilityCooldown-=e,this._abilityCooldown<0&&(this._abilityCooldown=0)),this._abilityConfig){const u=this._abilityCooldown/this._abilityConfig.cooldown;this.ui.updateAbilityCooldown(u)}if(!this.miniGameManager.active){const u=this.miniGameManager.checkTrigger(this.distance);u&&(this.miniGameManager.start(u),this.ui.showMiniGameStart(u.name,u.icon,u.desc),this._triggerScreenFlash(u.color[0],u.color[1],u.color[2],.5),this.shakeIntensity=.3,this.shakeDuration=.3,this.audio.playMilestone(1e3))}if(this.miniGameManager.active){const u=this.miniGameManager.update(e,this.distance);u&&this._handleMiniGameEvent(u),this.ui.updateMiniGameHUD(this.miniGameManager.getProgress())}if(this._biomeManager&&this.world){this._biomeManager.setBiome(this.currentTheme);const u=this.runner.lane,p=this._biomeManager.update(e,this.runner.position.x,this.runner.position.z,this.runner.position.y,u,this.difficulty);if(p.speedMult!==1&&!this.activePowerUps.Invincibility&&(this.runner.speedMultiplier*=p.speedMult),p.damage&&!this.activePowerUps.Invincibility&&!this.activePowerUps.Shield){if(this._biomeHazardDmgCooldown-=e,this._biomeHazardDmgCooldown<=0&&(this._biomeHazardDmgCooldown=2,this.health--,this._noHitDistance=0,this.runner.stumble(),this.audio.playHit(),this.ui.updateHealth(this.health,this.maxHealth),this.shakeIntensity=.3,this.shakeDuration=.2,this._triggerScreenFlash(1,.1,0,.2),this.ui.flashDamage(),this.health<=0)){this.endRun();return}}else this._biomeHazardDmgCooldown-=e;for(const g of p.effects)g.type==="sandstorm_start"?this.ui.showBiomeAlert("🌪️ SANDSTORM!","#e8d4a0"):g.type==="blizzard_start"?this.ui.showBiomeAlert("❄️ BLIZZARD!","#aaddff"):g.type==="eruption_start"?(this.ui.showBiomeAlert("🌋 ERUPTION!","#ff4400"),this.shakeIntensity=.5,this.shakeDuration=.5):g.type==="air_collected"&&this.audio.playCoinPickup();this._biomeManager.isUnderwater()&&this.ui.updateAirMeter(this._biomeManager.getAir()),this._biomeManager.isSandstormActive()?this.scene.fog=new ia(12886874,10,40):this._biomeManager.isBlizzardActive()?this.scene.fog=new ia(13161696,14,45):this.scene.fog&&this.scene.fog.far<100&&(this.scene.fog.far+=e*20,this.scene.fog.far>=100&&(this.scene.fog=null))}if(((h=this._abilityConfig)==null?void 0:h.id)==="rage"&&!this._abilityActive){const u=(d=xi[this._characterId])==null?void 0:d.passive;if((u==null?void 0:u.id)==="brute_force"){const p=this._getPassiveValue();this._bruteForceTimer-=e,this._bruteForceTimer<=0&&(this.activePowerUps.Invincibility||(this.activePowerUps.Invincibility=.3),this._bruteForceTimer=p)}}this._handleCollisions(),this._checkNearMisses();for(const u of this._milestones)this.distance>=u&&!this._milestonesPassed.has(u)&&(this._milestonesPassed.add(u),this.audio.playMilestone(u),this.ui.showMilestone(u),this._triggerScreenFlash(1,.85,0,.4),this.score+=u);if(!this._bossActive&&this._bossEncounter&&this.distance>=this._nextBossDistance&&(this._bossActive=!0,this._bossEncounter.start(this.runner.position.z,this.currentTheme),this.audio.playBossIntro(),this.ui.showBossWarning(),this.shakeIntensity=.5,this.shakeDuration=1,this.world&&(this.world.bossActive=!0),this._bossApproachSlowTimer=1.5,this.ui.showBossVignette()),this._bossApproachSlowTimer>0&&(this._bossApproachSlowTimer-=e,this.runner.speedMultiplier*=.7),this._bossActive&&this._bossEncounter&&this._bossEncounter.active){this._bossEncounter.update(e,this.runner.position.x,this.runner.position.z,this.runner.position.y),this.ui.updateBossTimer(this._bossEncounter.timer,this._bossEncounter.totalTime,this._bossEncounter.waveIndex,hy);const u=this._bossEncounter.getProjectileCollisions(this.runner.position.x,this.runner.position.z,this.runner.position.y,this.runner.colliderHeight,this.runner.colliderY);for(const p of u)if(!(this.activePowerUps.Invincibility||this.activePowerUps.Shield)){if((this._equipStats.shieldChance||0)>0&&Math.random()*100<this._equipStats.shieldChance){this.ui.showPowerUp("Shield Blocked!");continue}if(this.health--,this._noHitDistance=0,this.runner.stumble(),this.audio.playHit(),this.ui.updateHealth(this.health,this.maxHealth),this.shakeIntensity=.5,this.shakeDuration=.3,this._triggerScreenFlash(1,.2,0,.3),this.ui.flashDamage(),this.health<=0){this.endRun();return}}}if(this._bossEncounter&&this._bossEncounter._defeatAnimTimer>=0&&this._bossEncounter.update(e,0,this.runner.position.z,0),this._bossActive&&this._bossEncounter&&this._bossEncounter.phase==="defeated"){if(this._bossActive=!1,this._bossesDefeated++,this._campaignBossesSpawned++,this._campaignBossCount>0&&this._campaignBossesSpawned>=this._campaignBossCount?this._nextBossDistance=1/0:this._nextBossDistance=this.distance+this._bossInterval,this.score+=500,this.coins+=10,this.ui.updateCoins(this.coins),this.ui.showBossDefeated(),this.audio.playBossDefeat(),this._triggerScreenFlash(1,.85,0,.6),this.shakeIntensity=1,this.shakeDuration=.8,this.world&&(this.world.bossActive=!1),this.particles){const u=this.runner.position.z-28;this.particles.burstSparkles(0,5,u,[1,.5,0],40),this.particles.burstDebris(0,5,u,30),this.particles.burstSparkles(0,3,u,[1,.2,0],25)}this.ui.hideBossVignette(),this._bossEncounter.phase="idle"}this.world&&this.world.theme!==this.currentTheme&&(this._prevTheme=this.currentTheme,this.currentTheme=this.world.theme,this._themeTransitionTimer=2,this.audio.playBiomeChange(this.currentTheme)),this._themeTransitionTimer>0&&(this._themeTransitionTimer-=e),this._updateCamera(e)}_handleCollisions(){var n,s,a;if(!this.runner||!this.world)return;const{coins:e,obstacles:t,powerUps:i}=this.world.getCollisions(this.runner.position.x,this.runner.position.z,this.runner.position.y,this.runner.colliderHeight,this.runner.colliderY);for(const o of e){const l=o.userData._isGem;let c=l?5:1;if(this.activePowerUps.DoubleCoin&&(c*=2),(n=this._charStats)!=null&&n.coinMultiplier&&(c=Math.ceil(c*this._charStats.coinMultiplier)),this._equipStats.coinMultiplier&&(c=Math.ceil(c*(1+this._equipStats.coinMultiplier/100))),this._abilityActive&&((s=this._abilityConfig)==null?void 0:s.id)==="rage"&&(c*=3),this.coins+=c,this.ui.updateCoins(this.coins),this.miniGameManager.onCoinCollected(c),l){if(this._gemsCollected++,this.audio.playGem(),this._triggerScreenFlash(.6,.2,1,.3),this.shakeIntensity=.15,this.shakeDuration=.1,this.particles){const h=new C;o.getWorldPosition(h),this.particles.burstSparkles(h.x,h.y,h.z,[.6,.2,1],15),this.particles.burstSparkles(h.x,h.y,h.z,[1,1,1],8)}}else if(this.audio.playCoinPickup(),this.particles){const h=new C;o.getWorldPosition(h),this.particles.burstSparkles(h.x,h.y,h.z,[1,.85,0],6)}this._registerCombo()}for(const o of t){if(this.activePowerUps.Invincibility||this.activePowerUps.Shield){if(this.world.breakObstacle(o),this.obstaclesSmashed++,this.audio.playSmash(),this._registerCombo(),this.shakeIntensity=.25,this.shakeDuration=.15,this.particles){const l=new C;o.getWorldPosition(l),this.particles.burstDebris(l.x,l.y+.5,l.z,15),this.particles.burstSparkles(l.x,l.y,l.z,[1,.6,.1],8)}continue}if(o.userData.breakable){this.world.breakObstacle(o);const l=o.userData.coinReward||10;if(this.coins+=l,this.score+=50+l,this.obstaclesSmashed++,this.miniGameManager.onChestSmashed(),this.audio.playSmash(),this.audio.playCoinPickup(),this._registerCombo(),this.shakeIntensity=.2,this.shakeDuration=.12,this.ui.updateCoins(this.coins),this.ui.showChestReward(l),Math.random()<.3&&this._awardChestPowerUp(),this.particles){const c=new C;o.getWorldPosition(c),this.particles.burstDebris(c.x,c.y+.5,c.z,12),this.particles.burstSparkles(c.x,c.y+.3,c.z,[1,.85,.1],12),this.particles.burstSparkles(c.x,c.y+.8,c.z,[.1,1,.3],6)}continue}if((this._equipStats.shieldChance||0)>0&&Math.random()*100<this._equipStats.shieldChance){if(this.world.breakObstacle(o),this.audio.playSmash(),this.ui.showPowerUp("Shield Blocked!"),this.particles){const l=new C;o.getWorldPosition(l),this.particles.burstSparkles(l.x,l.y,l.z,[.5,.8,1],10)}continue}if(this.health--,this.runner.stumble(),this.audio.playHit(),this.ui.updateHealth(this.health,this.maxHealth),this.shakeIntensity=.4,this.shakeDuration=.3,this._triggerScreenFlash(1,.1,.05,.25),this.ui.flashDamage(),this.health<=0){this.endRun();return}}for(const o of i){this._powerUpsCollected++;const l=o.userData.powerUpType;if(l==="CoinBag")this.coins+=25,this.ui.updateCoins(this.coins);else if(l==="Revive")this.health=Math.min(this.health+1,this.maxHealth),this.ui.updateHealth(this.health,this.maxHealth);else if(l==="Antidote")this.activePowerUps.SpeedBoost=5;else if(zr[l]){let d=zr[l];const u=(a=xi[this._characterId])==null?void 0:a.passive;if((u==null?void 0:u.id)==="arcane_sight"){const p=this._getPassiveValue()/100;d*=1+p}this.activePowerUps[l]=d}this.ui.showPowerUp(l.replace(/([A-Z])/g," $1").trim()),this.audio.playPowerUp(l),this._registerCombo();const h={CoinBag:[1,.85,0],CoinMagnet:[1,0,1],DoubleCoin:[1,.7,0],Invincibility:[0,.9,1],Shield:[.5,.3,1],Antidote:[.5,1,0],TimeAdvantage:[.3,.5,1],Revive:[0,1,.4],SpeedBoost:[1,.5,0]}[l]||[1,1,1];if(this._triggerScreenFlash(h[0],h[1],h[2],.35),this.particles){const d=new C;o.getWorldPosition(d),this.particles.burstSparkles(d.x,d.y,d.z,h,15)}}}_checkNearMisses(){if(!this.world)return;const e=this.runner.position.z,t=this.runner.position.x;for(const i of this.world.activeObstacles){const n=new C;if(i.getWorldPosition(n),n.z>e+1&&!this._passedObstacles.has(i)){this._passedObstacles.add(i),this.obstaclesDodged++;const s=Math.abs(n.x-t);s<2&&s>.3&&(this._registerCombo(),this.score+=25,this._nearMisses++,this.audio.playNearMiss(),this.ui.showNearMiss())}}if(this._passedObstacles.size>50){const i=this._passedObstacles.values();for(let n=0;n<25;n++)i.next()}}_registerCombo(){this.comboCount++,this.comboTimer=uy,this.comboMultiplier=Math.min(fy,Fr+this.comboCount*py),this.comboCount>this.maxCombo&&(this.maxCombo=this.comboCount),this.comboCount>2&&this.audio.playCombo(this.comboCount),this.ui.updateCombo(this.comboCount,this.comboMultiplier)}_breakCombo(){this.comboCount>5&&(this.score+=this.comboCount*my),this.comboCount=0,this.comboTimer=0,this.comboMultiplier=Fr,this.ui.updateCombo(0,1)}_awardChestPowerUp(){var i;const e=["CoinMagnet","DoubleCoin","Invincibility","Shield","CoinBag","Revive"],t=e[Math.floor(Math.random()*e.length)];if(this._powerUpsCollected++,t==="CoinBag")this.coins+=25,this.ui.updateCoins(this.coins);else if(t==="Revive")this.health=Math.min(this.health+1,this.maxHealth),this.ui.updateHealth(this.health,this.maxHealth);else if(zr[t]){let n=zr[t];const s=(i=xi[this._characterId])==null?void 0:i.passive;if((s==null?void 0:s.id)==="arcane_sight"){const a=this._getPassiveValue()/100;n*=1+a}this.activePowerUps[t]=n}this.ui.showPowerUp(t.replace(/([A-Z])/g," $1").trim()),this.audio.playPowerUp(t)}_triggerScreenFlash(e,t,i,n=.3){const s=n*.5;this._screenFlash={color:[e,t,i],timer:s,duration:s}}_updateCamera(e){if(!this.runner)return;const t=new C(this.runner.position.x*.3,yh.y,this.runner.position.z+yh.z);this.camera.position.lerp(t,5*e);const i=new C(this.runner.position.x*.5,1,this.runner.position.z-dy);if(this.camera.lookAt(i),this.shakeDuration>0){this.shakeDuration-=e;const n=this.shakeIntensity*(this.shakeDuration/.5);this.camera.position.x+=(Math.random()-.5)*n,this.camera.position.y+=(Math.random()-.5)*n*.5}if(this._landingDipTimer>0){this._landingDipTimer-=e;const n=Math.sin(this._landingDipTimer/.2*Math.PI)*.35;this.camera.position.y-=n}}_setupMenuCamera(){this.camera.position.set(5,8,15),this.camera.lookAt(0,0,0)}_updateMenuCamera(e){const t=performance.now()*3e-4;this.camera.position.x=Math.sin(t)*8,this.camera.position.z=Math.cos(t)*12,this.camera.position.y=6+Math.sin(t*.5)*2,this.camera.lookAt(0,0,0)}_handleMiniGameEvent(e){if(e)switch(e.type){case"spawn_chests":this.world&&(this.world._miniGameChestMode=!0);break;case"spawn_coins":this.world&&(this.world._miniGameCoinMode=!0);break;case"spawn_obstacles":this.world&&(this.world._miniGameDodgeMode=!0);break;case"simon_prompt":this.ui.showSimonPrompt(e.action,e.step,e.total);break;case"end":{const t=e;this.coins+=t.coinReward,this._miniGameCoinsEarned+=t.coinReward,this.score+=t.score,this.ui.updateCoins(this.coins),this.ui.showMiniGameEnd(t.gameName,t.score,t.coinReward,t.dustReward),this.abilityManager.addStarDust(t.dustReward),this.audio.playPowerUp("Invincibility"),this._triggerScreenFlash(1,.85,0,.5),this.shakeIntensity=.4,this.shakeDuration=.4,this.world&&(this.world._miniGameChestMode=!1,this.world._miniGameCoinMode=!1,this.world._miniGameDodgeMode=!1),this.scene.fog=null;break}}}_activateAbility(){if(!this._abilityConfig||this._abilityCooldown>0||this._abilityActive)return;this._abilityActive=!0,this._abilityTimer=this._abilityConfig.duration;const e=1-(this._equipStats.abilityCD||0)/100;switch(this._abilityCooldown=this._abilityConfig.cooldown*e,this.audio.playPowerUp("Invincibility"),this.ui.flashAbilityActive(),this.ui.showAbilityActivated(this._abilityConfig.icon+" "+this._abilityConfig.name),this.shakeIntensity=.3,this.shakeDuration=.3,this._abilityConfig.id){case"shield_bash":this.activePowerUps.Invincibility=this._abilityConfig.duration,this._triggerScreenFlash(.5,.8,1,.4);break;case"rage":this.activePowerUps.Invincibility=this._abilityConfig.duration,this.runner.speedMultiplier=2,this._triggerScreenFlash(1,.3,0,.4);break;case"time_warp":this.activePowerUps.TimeAdvantage=this._abilityConfig.duration,this._triggerScreenFlash(.3,.3,1,.4);break;case"shadow_dash":this.activePowerUps.Invincibility=this._abilityConfig.duration,this._triggerScreenFlash(.4,.2,.8,.4);break;case"divine_shield":this.activePowerUps.Shield=this._abilityConfig.duration,this.health=Math.min(this.health+1,this.maxHealth),this.ui.updateHealth(this.health,this.maxHealth),this._triggerScreenFlash(1,1,.5,.4);break}this.particles&&this.particles.burstSparkles(this.runner.position.x,this.runner.position.y+1,this.runner.position.z,[1,.85,0],20)}_deactivateAbility(){var e;this._abilityActive&&(this._abilityActive=!1,this._abilityTimer=0,this.ui.resetAbilityFlash(),((e=this._abilityConfig)==null?void 0:e.id)==="rage"&&(this.runner.speedMultiplier=1))}_getPassiveValue(){var i;const e=xi[this._characterId];if(!e)return 0;const t=((i=this._charStats)==null?void 0:i.passiveBoost)||0;switch(e.passive.id){case"armor_up":return e.passive.baseValue+t;case"brute_force":return Math.max(5,e.passive.baseValue-t*2);case"arcane_sight":return e.passive.baseValue+t*15;case"nimble":return e.passive.baseValue+t*15;case"blessed":return e.passive.baseValue+t;default:return e.passive.baseValue}}}const Ld=document.createElement("style");Ld.textContent=`
.vr-campaign-topbar {
    display:flex; align-items:center; justify-content:space-between;
    width:100%; padding:14px 20px; position:relative; z-index:5;
    background:linear-gradient(180deg,rgba(0,0,0,0.6) 0%,transparent 100%);
}
.vr-campaign-selector {
    display:flex; gap:12px; justify-content:center; flex-wrap:wrap;
    margin-bottom:24px;
}
.vr-campaign-card {
    width:160px; padding:16px; border-radius:8px; text-align:center; cursor:pointer;
    background:rgba(42,30,18,0.6); border:2px solid rgba(194,158,80,0.12);
    transition:transform 0.15s, border-color 0.2s, box-shadow 0.2s;
    animation:popIn 0.4s ease-out both; position:relative;
}
.vr-campaign-card:hover { transform:translateY(-4px) scale(1.03); box-shadow:0 8px 24px rgba(0,0,0,0.3); }
.vr-campaign-card.selected { border-color:#c9a24e; box-shadow:0 0 20px rgba(194,158,80,0.4); }
.vr-campaign-card.locked { opacity:0.5; cursor:default; }
.vr-campaign-card.locked:hover { transform:none; box-shadow:none; }
.vr-campaign-lock-overlay {
    position:absolute; inset:0; border-radius:6px; display:flex; flex-direction:column;
    align-items:center; justify-content:center; background:rgba(14,10,4,0.92);
    font-weight:800; font-size:13px; color:#e8dcc8; z-index:2;
}
.vr-campaign-selector {
    display:flex; gap:12px; justify-content:center; flex-wrap:wrap;
    margin-bottom:24px;
}
.vr-stage-path {
    width:100%; max-height:450px; overflow-y:auto; padding:0 10px 20px;
    position:relative;
}
.vr-stage-path::-webkit-scrollbar { width:4px; }
.vr-stage-path::-webkit-scrollbar-thumb { background:rgba(194,158,80,0.2); border-radius:2px; }
.vr-stage-node {
    width:100%; max-width:340px; margin:0 auto 8px; padding:10px 16px; border-radius:8px; text-align:center; cursor:pointer;
    background:rgba(42,30,18,0.6); border:2px solid rgba(194,158,80,0.12);
    transition:transform 0.15s, border-color 0.2s, box-shadow 0.2s;
    animation:popIn 0.4s ease-out both; position:relative;
    display:flex; align-items:center; gap:12px;
}
.vr-stage-node:hover { transform:translateY(-2px) scale(1.02); box-shadow:0 6px 18px rgba(0,0,0,0.3); }
.vr-stage-node.locked { opacity:0.4; cursor:default; }
.vr-stage-node.locked:hover { transform:none; box-shadow:none; }
.vr-stage-stars { font-size:16px; letter-spacing:2px; margin-top:4px; }
.vr-modal-overlay {
    position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
    background:rgba(14,10,4,0.9); z-index:20; animation:popIn 0.3s ease-out;
}
.vr-objective-row {
    display:flex; align-items:center; gap:8px; padding:8px 0;
    border-bottom:1px solid rgba(194,158,80,0.08); font-size:14px; font-weight:700;
}
.vr-objective-row:last-child { border-bottom:none; }
.vr-objective-check { color:#8aaa6a; font-size:16px; }
.vr-objective-pending { color:rgba(194,158,80,0.15); font-size:16px; }
.vr-modifier-tag {
    display:inline-block; padding:3px 10px; border-radius:6px; font-size:11px;
    font-weight:800; background:rgba(42,30,18,0.5); border:1px solid rgba(194,158,80,0.1); margin:3px 2px;
}
.vr-challenge-card {
    width:100%; padding:16px; border-radius:8px;
    background:rgba(42,30,18,0.6); border:2px solid rgba(194,158,80,0.12);
    margin-bottom:12px; animation:popIn 0.4s ease-out both;
}
.vr-challenge-card.completed { border-color:rgba(120,160,80,0.3); }
.vr-challenge-card.claimed { border-color:rgba(120,160,80,0.1); opacity:0.4; }
.vr-challenge-card.claimed .vr-challenge-name { text-decoration:line-through; }
.vr-progress-bar-bg {
    width:100%; height:8px; border-radius:4px; background:rgba(194,158,80,0.1);
    margin:8px 0; overflow:hidden;
}
.vr-progress-bar-fill {
    height:100%; border-radius:4px;
    background:linear-gradient(90deg,#c9a24e,#8b6914);
    transition:width 0.4s ease-out;
}
.vr-progress-bar-fill.full {
    background:linear-gradient(90deg,#6a8a4a,#8aaa6a);
}
.vr-daily-countdown {
    font-size:13px; opacity:0.5; font-weight:700; margin-top:2px;
}
.vr-bonus-row {
    display:flex; align-items:center; justify-content:space-between;
    padding:14px 16px; border-radius:8px; margin-top:8px;
    background:rgba(194,158,80,0.08); border:1px solid rgba(194,158,80,0.15);
}
`;document.head.appendChild(Ld);class xh{constructor(e,t,i){this.container=e,this.campaignManager=t,this.challengeManager=i,this._selectedCampaign="forest",this._countdownInterval=null,this.campaignScreen=document.createElement("div"),this.campaignScreen.id="campaign-screen",this.campaignScreen.className="vr-screen vr-campaign-bg",this.campaignScreen.style.justifyContent="flex-start",this.campaignScreen.style.overflowY="auto",this.campaignScreen.style.padding="0",this.campaignScreen.innerHTML=`
            <div class="vr-campaign-topbar">
                <button id="campaign-back-btn" class="vr-btn vr-btn-ghost" style="font-size:13px;">BACK</button>
                <div id="campaign-total-stars" class="vr-body" style="font-size:16px;font-weight:800;text-shadow:0 2px 6px rgba(0,0,0,0.6);"></div>
                <button id="campaign-daily-btn" class="vr-btn vr-btn-ghost" style="font-size:13px;position:relative;">
                    <span style="margin-right:4px;">DAILY</span>
                </button>
            </div>
            <div style="width:100%;max-width:560px;margin:0 auto;padding:0 20px 30px;">
                <div style="text-align:center;margin-bottom:20px;animation:slideDown 0.4s ease-out;">
                    <h2 class="vr-title" style="font-size:28px;background:linear-gradient(135deg,#c9a24e,#dbb86a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">CAMPAIGN</h2>
                </div>
                <div class="vr-section-title">SELECT CAMPAIGN</div>
                <div id="campaign-selector" class="vr-campaign-selector"></div>
                <div class="vr-section-title">STAGES</div>
                <div id="campaign-stage-list" class="vr-stage-path"></div>
            </div>
        `,e.appendChild(this.campaignScreen),this.stageModal=document.createElement("div"),this.stageModal.className="vr-modal-overlay",this.stageModal.style.display="none",this.stageModal.innerHTML=`
            <div class="vr-panel" style="padding:28px 32px;text-align:center;max-width:360px;width:90%;animation:popIn 0.3s ease-out;">
                <h3 id="modal-stage-name" class="vr-title" style="font-size:22px;margin-bottom:16px;background:linear-gradient(135deg,#c9a24e,#dbb86a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;"></h3>
                <div id="modal-objectives" class="vr-body" style="text-align:left;margin-bottom:14px;"></div>
                <div id="modal-best" class="vr-body" style="font-size:12px;opacity:0.5;margin-bottom:10px;font-weight:700;"></div>
                <div id="modal-modifiers" style="margin-bottom:18px;"></div>
                <button id="modal-start-btn" class="vr-btn vr-btn-primary" style="width:100%;margin-bottom:10px;">START</button>
                <button id="modal-close-btn" class="vr-btn vr-btn-ghost" style="width:100%;">CLOSE</button>
            </div>
        `,this.campaignScreen.appendChild(this.stageModal),this.dailyScreen=document.createElement("div"),this.dailyScreen.id="daily-screen",this.dailyScreen.className="vr-screen",this.dailyScreen.style.justifyContent="flex-start",this.dailyScreen.style.overflowY="auto",this.dailyScreen.style.padding="0",this.dailyScreen.innerHTML=`
            <div style="width:100%;max-width:480px;margin:0 auto;padding:20px 24px 30px;">
                <div style="text-align:center;margin-bottom:20px;padding-top:16px;animation:slideDown 0.4s ease-out;">
                    <h2 class="vr-title" style="font-size:26px;background:linear-gradient(135deg,#c9a24e,#dbb86a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">DAILY CHALLENGES</h2>
                    <div id="daily-countdown" class="vr-body vr-daily-countdown"></div>
                </div>
                <div id="daily-challenge-list"></div>
                <div id="daily-bonus-row"></div>
                <div style="text-align:center;margin-top:20px;">
                    <button id="daily-back-btn" class="vr-btn vr-btn-ghost">BACK</button>
                </div>
            </div>
        `,e.appendChild(this.dailyScreen),document.getElementById("campaign-back-btn").addEventListener("click",()=>{this._emit("campaign-back")}),document.getElementById("campaign-daily-btn").addEventListener("click",()=>{this.showDailyChallenges()}),document.getElementById("modal-close-btn").addEventListener("click",()=>{this._hideStageDetail()}),document.getElementById("modal-start-btn").addEventListener("click",()=>{this._modalCampaignId!=null&&this._modalStageIndex!=null&&this._emit("campaign-start",{campaignId:this._modalCampaignId,stageIndex:this._modalStageIndex})}),document.getElementById("daily-back-btn").addEventListener("click",()=>{this.campaignScreen.style.display==="none"||this.campaignScreen.style.display===""?(this.dailyScreen.style.display="none",this._emit("campaign-back")):(this.dailyScreen.style.display="none",this.campaignScreen.style.display="flex")})}show(){this.campaignScreen.style.display="flex",this.dailyScreen.style.display="none",this._hideStageDetail(),this.refresh()}hide(){this.campaignScreen.style.display="none",this.dailyScreen.style.display="none",this._hideStageDetail(),this._stopCountdown()}showDailyChallenges(){this.campaignScreen.style.display="none",this.dailyScreen.style.display="flex",this._renderDailyChallenges(),this._startCountdown()}refresh(){this._renderCampaignSelector(),this._renderCampaignStages(this._selectedCampaign),this._updateTopBar()}_updateTopBar(){const e=this.campaignManager.getTotalStars();document.getElementById("campaign-total-stars").textContent=`${e} ⭐`;const i=this.challengeManager.getDailyChallenges().filter(s=>!s.completed).length,n=document.getElementById("campaign-daily-btn");i>0?n.innerHTML=`<span>📋 DAILY</span><span class="vr-badge" style="background:rgba(139,32,32,0.3);color:#c97040;margin-left:6px;font-size:10px;">${i}</span>`:n.innerHTML="<span>📋 DAILY</span>"}_renderCampaignSelector(){const e=document.getElementById("campaign-selector");e.innerHTML="";const t=this.campaignManager.getAllCampaigns();this.campaignManager.getTotalStars(),t.forEach((i,n)=>{const s=this.campaignManager.isCampaignUnlocked(i.id),a=this._getCampaignStars(i),o=i.stages.length*3,c={forest:"#6a8a4a",desert:"#c9a24e",lava:"#8b2020"}[i.theme]||"#c9a24e",h=document.createElement("div");h.className=`vr-campaign-card${this._selectedCampaign===i.id?" selected":""}${s?"":" locked"}`,h.style.animationDelay=n*.1+"s",s&&(h.style.borderColor=this._selectedCampaign===i.id?c:""),h.innerHTML=`
                <div style="font-size:40px;margin-bottom:6px;">${i.icon}</div>
                <div class="vr-body" style="font-size:14px;font-weight:800;">${i.name}</div>
                <div class="vr-body" style="font-size:12px;opacity:0.5;margin-top:4px;font-weight:700;">${a}/${o} ⭐</div>
                ${s?"":`
                    <div class="vr-campaign-lock-overlay">
                        <div style="font-size:28px;margin-bottom:4px;">🔒</div>
                        <div class="vr-body" style="font-size:12px;">Need ${i.requiredStars} ⭐</div>
                    </div>
                `}
            `,s&&h.addEventListener("click",()=>{this._selectedCampaign=i.id,this._renderCampaignSelector(),this._renderCampaignStages(i.id)}),e.appendChild(h)})}_getCampaignStars(e){let t=0;for(const i of e.stages){const n=this.campaignManager.getStageResult(e.id,i.id);n&&(t+=n.stars)}return t}_renderCampaignStages(e){const t=document.getElementById("campaign-stage-list");t.innerHTML="";const i=this.campaignManager.getCampaign(e);i&&i.stages.forEach((n,s)=>{const a=this.campaignManager.isStageUnlocked(e,s),o=this.campaignManager.getStageResult(e,n.id),l=o?o.stars:0,c=document.createElement("div");c.className=`vr-stage-node vr-body${a?"":" locked"}`,c.style.animationDelay=s*.06+"s";const h=this._renderStarIcons(l);c.innerHTML=`
                <div style="min-width:36px;font-size:11px;opacity:0.4;font-weight:800;text-align:center;">${s+1}</div>
                <div style="flex:1;text-align:left;">
                    <div style="font-size:13px;font-weight:800;">${a?n.name:"🔒 Locked"}</div>
                </div>
                <div class="vr-stage-stars" style="font-size:14px;">${h}</div>
            `,a&&c.addEventListener("click",()=>{this._showStageDetail(e,s)}),t.appendChild(c)})}_renderStarIcons(e){let t="";for(let i=0;i<3;i++)t+=i<e?"⭐":"☆";return t}_showStageDetail(e,t){this._modalCampaignId=e,this._modalStageIndex=t;const i=this.campaignManager.getStage(e,t);if(!i)return;const n=this.campaignManager.getStageResult(e,i.id),s=n?n.stars:0;document.getElementById("modal-stage-name").textContent=i.name;const a=document.getElementById("modal-objectives"),o=[i.objectives.star1,i.objectives.star2,i.objectives.star3],l=["⭐","⭐⭐","⭐⭐⭐"];a.innerHTML="",o.forEach((p,g)=>{const _=s>g,m=this._objectiveDescription(p),f=document.createElement("div");f.className="vr-objective-row",f.innerHTML=`
                <span class="${_?"vr-objective-check":"vr-objective-pending"}">${_?"✅":"⬜"}</span>
                <span style="opacity:0.6;min-width:50px;">${l[g]}</span>
                <span style="flex:1;">${m}</span>
            `,a.appendChild(f)});const c=document.getElementById("modal-best");n?(c.textContent=`Best: ${n.bestScore.toLocaleString()} pts | ${n.bestDistance}m | 🪙 ${n.bestCoins}`,c.style.display=""):c.style.display="none";const h=document.getElementById("modal-modifiers");h.innerHTML="";const d=i.modifiers,u=[];d.speedMultiplier&&d.speedMultiplier!==1&&u.push(`⚡ Speed x${d.speedMultiplier}`),d.timeLimit&&u.push(`⏱️ Time limit: ${d.timeLimit}s`),d.noRevive&&u.push("💀 No revive"),d.maxHealth&&d.maxHealth<3&&u.push(`❤️ Max HP: ${d.maxHealth}`),d.bossEnabled&&u.push(`🐲 Boss at ${d.bossAtDistance}m`),d.coinMultiplier&&d.coinMultiplier>1&&u.push(`🪙 Coins x${d.coinMultiplier}`),u.length>0&&u.forEach(p=>{const g=document.createElement("span");g.className="vr-modifier-tag vr-body",g.textContent=p,h.appendChild(g)}),this.stageModal.style.display="flex"}_hideStageDetail(){this.stageModal.style.display="none",this._modalCampaignId=null,this._modalStageIndex=null}_objectiveDescription(e){if(!e)return"";switch(e.type){case"distance":return`Reach ${e.target}m`;case"score":return`Score ${e.target.toLocaleString()}+`;case"coins":return`Collect ${e.target} coins`;case"combo":return`Reach ${e.target}x combo`;case"chests":return`Smash ${e.target} chests`;case"noHit":return`Run ${e.target}m without a hit`;case"bossDefeat":return"Defeat the boss";default:return`${e.type}: ${e.target}`}}_renderDailyChallenges(){const e=document.getElementById("daily-challenge-list");e.innerHTML="",this.challengeManager.getDailyChallenges().forEach((a,o)=>{const l=Math.min(100,Math.round(a.progress/a.target*100)),c=a.completed,h=document.createElement("div");h.className=`vr-challenge-card vr-body${a.claimed?" claimed":a.completed?" completed":""}`,h.style.animationDelay=o*.1+"s",h.innerHTML=`
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
                    <div class="vr-challenge-name" style="font-size:15px;font-weight:800;${a.claimed?"text-decoration:line-through;opacity:0.5;":""}">${a.name}</div>
                    ${a.claimed?'<span style="font-size:12px;color:#8aaa6a;font-weight:800;">CLAIMED &#x2705;</span>':""}
                </div>
                <div style="font-size:12px;opacity:0.5;font-weight:700;margin-bottom:6px;">${a.desc}</div>
                <div class="vr-progress-bar-bg">
                    <div class="vr-progress-bar-fill${c?" full":""}" style="width:${l}%;"></div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;">
                    <span style="font-size:12px;opacity:0.5;font-weight:700;">${Math.floor(a.progress)}/${a.target}</span>
                    <span style="font-size:12px;font-weight:700;">🪙 ${a.reward.coins} 💎 ${a.reward.gems}</span>
                </div>
                ${a.completed&&!a.claimed?`<div style="text-align:center;margin-top:10px;"><button class="vr-btn vr-btn-gold claim-btn" data-index="${o}" style="font-size:13px;padding:8px 24px;">CLAIM</button></div>`:""}
            `,e.appendChild(h)}),e.querySelectorAll(".claim-btn").forEach(a=>{a.addEventListener("click",o=>{const l=parseInt(o.currentTarget.dataset.index,10);this._emit("challenge-claim",{index:l})})});const i=document.getElementById("daily-bonus-row"),n=this.challengeManager.getBonusReward();this.challengeManager.allClaimed();const s=!n&&this.challengeManager.allCompleted();n?(i.innerHTML=`
                <div class="vr-bonus-row vr-body">
                    <span style="font-size:13px;font-weight:800;">Complete all 3 for bonus: 🪙 200 💎 5</span>
                    <button id="bonus-claim-btn" class="vr-btn vr-btn-gold" style="font-size:12px;padding:6px 18px;">CLAIM</button>
                </div>
            `,document.getElementById("bonus-claim-btn").addEventListener("click",()=>{this._emit("challenge-bonus-claim")})):s?i.innerHTML=`
                <div class="vr-bonus-row vr-body" style="opacity:0.5;">
                    <span style="font-size:13px;font-weight:800;">Bonus claimed ✅</span>
                    <span style="font-size:12px;font-weight:700;">🪙 200 💎 5</span>
                </div>
            `:i.innerHTML=`
                <div class="vr-bonus-row vr-body" style="opacity:0.4;">
                    <span style="font-size:13px;font-weight:800;">Complete all 3 for bonus: 🪙 200 💎 5</span>
                </div>
            `}_startCountdown(){this._stopCountdown(),this._updateCountdown(),this._countdownInterval=setInterval(()=>this._updateCountdown(),1e3)}_stopCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}_updateCountdown(){const e=this.challengeManager.getTimeUntilReset(),t=Math.max(0,Math.floor(e/1e3)),i=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60,a=l=>String(l).padStart(2,"0"),o=document.getElementById("daily-countdown");o&&(o.textContent=`Resets in ${a(i)}:${a(n)}:${a(s)}`)}_emit(e,t){this.container.dispatchEvent(new CustomEvent(e,{detail:t||null,bubbles:!0}))}}class yy{constructor(e,t,i){this.container=e,this.abilityManager=t,this.progressionManager=i,this._selectedChar="knight",this._tab="heroes",this._el=null,this._build()}_build(){this._el=document.createElement("div"),this._el.id="heroes-screen",this._el.className="vr-screen vr-heroes-bg",this._el.style.justifyContent="flex-start",this._el.style.overflowY="auto",this._el.style.padding="0",this._el.innerHTML=`
            <button class="vr-btn vr-btn-ghost heroes-back-btn" style="position:absolute;top:14px;left:14px;z-index:10;">BACK</button>
            <div id="heroes-content" style="width:100%;max-width:700px;margin:0 auto;padding:16px 20px 30px;"></div>
        `,this._el.querySelector(".heroes-back-btn").addEventListener("click",()=>this._emit("heroes-back")),this.container.appendChild(this._el)}show(){this._el.style.display="flex",this.refresh()}hide(){this._el.style.display="none"}refresh(){const e=this._el.querySelector("#heroes-content");e.innerHTML=this._renderHeader()+this._renderTabs()+this._renderBody(),this._wireEvents(e)}_renderHeader(){const e=this.abilityManager.getStarDust(),t=this.abilityManager.getKeys();return`
            <div style="text-align:center;padding-top:12px;margin-bottom:12px;animation:slideDown 0.4s ease-out;">
                <h2 class="vr-title" style="font-size:28px;background:linear-gradient(135deg,#c9a24e,#dbb86a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">HEROES & PROGRESS</h2>
                <div style="display:flex;justify-content:center;gap:16px;margin-top:8px;" class="vr-body">
                    <div class="vr-currency-pill">✨ <span style="color:#c9a24e;">${e.toLocaleString()}</span> <span style="opacity:0.5;font-size:11px;">Star Dust</span></div>
                    <div class="vr-currency-pill">🔑 <span style="color:#a0785a;">${t}</span> <span style="opacity:0.5;font-size:11px;">Keys</span></div>
                    <div class="vr-currency-pill">🪙 <span style="color:#c9a24e;">${parseInt(localStorage.getItem("vr_coins")||"0",10).toLocaleString()}</span></div>
                </div>
            </div>
        `}_renderTabs(){const e=[{id:"heroes",label:"⚔️ Heroes"},{id:"achievements",label:"🏆 Achievements"},{id:"weekly",label:"📋 Weekly"},{id:"streak",label:"🔥 Streak"}],t=this.progressionManager.getUnclaimedCount();return`
            <div style="display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap;justify-content:center;">
                ${e.map(i=>`
                    <button class="vr-btn ${this._tab===i.id?"vr-btn-primary":"vr-btn-ghost"} heroes-tab-btn"
                        data-tab="${i.id}" style="padding:8px 16px;font-size:12px;animation:none;">
                        ${i.label}${i.id==="achievements"&&t>0?` <span style="background:#8b2020;border-radius:8px;padding:1px 6px;font-size:10px;">${t}</span>`:""}
                    </button>
                `).join("")}
            </div>
        `}_renderBody(){switch(this._tab){case"heroes":return this._renderHeroesTab();case"achievements":return this._renderAchievementsTab();case"weekly":return this._renderWeeklyTab();case"streak":return this._renderStreakTab();default:return""}}_renderHeroesTab(){const e=JSON.parse(localStorage.getItem("vr_unlocked")||'["knight"]');let t="";for(const[o,l]of Object.entries(xi)){const c=e.includes(o),h=o===this._selectedChar;t+=`
                <div class="vr-card ${h?"vr-card-selected":""} ${c?"":"vr-card-pyr"} hero-select-card"
                     data-char="${o}" style="width:90px;padding:10px;cursor:${c?"pointer":"default"};opacity:${c?1:.4};">
                    <div style="font-size:28px;">${l.emoji}</div>
                    <div class="vr-body" style="font-size:12px;font-weight:800;margin-top:4px;">${l.name}</div>
                    ${c?"":'<div style="font-size:9px;opacity:0.5;">LOCKED</div>'}
                </div>
            `}const i=xi[this._selectedChar];if(!i)return t;const n=this.abilityManager.getAbilityConfig(this._selectedChar);this.abilityManager.getCharacterStats(this._selectedChar);const s=`
            <div class="vr-panel" style="padding:16px;margin-bottom:16px;">
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
                    <div style="font-size:32px;">${n.icon}</div>
                    <div>
                        <div class="vr-body" style="font-size:16px;font-weight:800;color:#c9a24e;">${n.name}</div>
                        <div class="vr-body" style="font-size:11px;opacity:0.5;">Active Ability — Press Q during run</div>
                    </div>
                </div>
                <div class="vr-body" style="font-size:13px;opacity:0.7;margin-bottom:8px;">
                    ${i.active.desc.replace("{duration}",n.duration.toFixed(1))}
                </div>
                <div style="display:flex;gap:12px;" class="vr-body">
                    <div style="font-size:11px;opacity:0.5;">Duration: <span style="color:#7a9a6a;">${n.duration.toFixed(1)}s</span></div>
                    <div style="font-size:11px;opacity:0.5;">Cooldown: <span style="color:#a0785a;">${n.cooldown.toFixed(1)}s</span></div>
                </div>
            </div>
            <div class="vr-panel" style="padding:12px;margin-bottom:16px;">
                <div style="display:flex;align-items:center;gap:8px;">
                    <div style="font-size:20px;">🎯</div>
                    <div>
                        <div class="vr-body" style="font-size:14px;font-weight:800;color:#8aaa6a;">${i.passive.name}</div>
                        <div class="vr-body" style="font-size:12px;opacity:0.6;">
                            ${i.passive.desc.replace("{value}",this._getPassiveValue(this._selectedChar))}
                        </div>
                    </div>
                </div>
            </div>
        `;let a="";for(const[o,l]of Object.entries(Kn)){const c=this.abilityManager.getUpgradeLevel(this._selectedChar,o),h=c>=l.maxLevel,d=h?0:l.costs[c],u=this.abilityManager.canUpgrade(this._selectedChar,o),p=Array.from({length:l.maxLevel},(g,_)=>`<div style="width:14px;height:14px;border-radius:50%;border:2px solid ${_<c?"#c9a24e":"rgba(194,158,80,0.15)"};background:${_<c?"linear-gradient(135deg,#c9a24e,#8b6914)":"transparent"};"></div>`).join("");a+=`
                <div style="display:flex;align-items:center;gap:12px;padding:12px;margin-bottom:8px;border-radius:8px;background:rgba(42,30,18,0.4);border:1px solid rgba(194,158,80,0.08);">
                    <div style="font-size:22px;width:32px;text-align:center;">${l.icon}</div>
                    <div style="flex:1;">
                        <div class="vr-body" style="font-size:13px;font-weight:800;">${l.name} <span style="opacity:0.4;font-size:11px;">Lv.${c}/${l.maxLevel}</span></div>
                        <div class="vr-body" style="font-size:11px;opacity:0.45;">${l.desc}</div>
                        <div style="display:flex;gap:4px;margin-top:4px;">${p}</div>
                    </div>
                    ${h?'<span class="vr-badge vr-badge-owned" style="white-space:nowrap;">MAX</span>':`<button class="vr-btn ${u?"vr-btn-gold":"vr-btn-ghost"} upgrade-btn" data-upgrade="${o}"
                            style="padding:6px 12px;font-size:11px;white-space:nowrap;" ${u?"":"disabled"}>
                            ✨ ${d.toLocaleString()}
                          </button>`}
                </div>
            `}return`
            <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;justify-content:center;">
                ${t}
            </div>
            ${s}
            <div class="vr-section-title">UPGRADE TREE</div>
            ${a}
        `}_renderAchievementsTab(){const e=this.progressionManager.getAchievements();let t=0,i="";for(const n of e){n.completed&&t++;const s=n.completed?n.claimed?'<span style="color:#8aaa6a;">CLAIMED</span>':'<span style="color:#c9a24e;">COMPLETE!</span>':'<span style="opacity:0.3;">In Progress</span>';i+=`
                <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;margin-bottom:6px;border-radius:10px;
                    background:${n.completed?"rgba(194,158,80,0.04)":"rgba(42,30,18,0.3)"};
                    border:1px solid ${n.completed&&!n.claimed?"rgba(194,158,80,0.2)":"rgba(194,158,80,0.06)"};">
                    <div style="font-size:24px;width:32px;text-align:center;${n.completed?"":"filter:grayscale(1);opacity:0.3;"}">${n.icon}</div>
                    <div style="flex:1;">
                        <div class="vr-body" style="font-size:13px;font-weight:800;">${n.name}</div>
                        <div class="vr-body" style="font-size:11px;opacity:0.4;">${n.desc}</div>
                    </div>
                    <div style="text-align:right;">
                        <div class="vr-body" style="font-size:10px;">${s}</div>
                        ${n.completed&&!n.claimed?`<button class="vr-btn vr-btn-gold claim-ach-btn" data-ach="${n.id}" style="padding:4px 10px;font-size:10px;margin-top:4px;">CLAIM</button>`:`<div class="vr-body" style="font-size:10px;opacity:0.3;margin-top:2px;">${n.reward.dust?"✨"+n.reward.dust:""}${n.reward.coins?" 🪙"+n.reward.coins:""}${n.reward.keys?" 🔑"+n.reward.keys:""}</div>`}
                    </div>
                </div>
            `}return`
            <div class="vr-body" style="text-align:center;margin-bottom:12px;font-size:13px;opacity:0.5;font-weight:700;">
                ${t}/${e.length} Completed
            </div>
            ${i}
        `}_renderWeeklyTab(){const e=this.progressionManager.getWeeklyMissions();let t="";for(let i=0;i<e.length;i++){const n=e[i],s=Math.min(100,n.progress/n.target*100);t+=`
                <div class="vr-panel" style="padding:14px;margin-bottom:10px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                        <div class="vr-body" style="font-size:14px;font-weight:800;">${n.name}</div>
                        ${n.completed&&!n.claimed?`<button class="vr-btn vr-btn-gold claim-weekly-btn" data-index="${i}" style="padding:4px 10px;font-size:10px;">CLAIM</button>`:n.claimed?'<span class="vr-badge vr-badge-owned">CLAIMED</span>':""}
                    </div>
                    <div class="vr-body" style="font-size:12px;opacity:0.5;margin-bottom:8px;">${n.desc}</div>
                    <div style="height:8px;background:rgba(194,158,80,0.1);border-radius:4px;overflow:hidden;">
                        <div style="width:${s}%;height:100%;background:linear-gradient(90deg,#c9a24e,#8b6914);border-radius:4px;transition:width 0.3s;"></div>
                    </div>
                    <div style="display:flex;justify-content:space-between;margin-top:4px;" class="vr-body">
                        <span style="font-size:10px;opacity:0.4;">${Math.floor(n.progress).toLocaleString()} / ${n.target.toLocaleString()}</span>
                        <span style="font-size:10px;opacity:0.3;">✨${n.reward.dust} 🪙${n.reward.coins}</span>
                    </div>
                </div>
            `}return`
            <div class="vr-body" style="text-align:center;margin-bottom:12px;font-size:12px;opacity:0.4;font-weight:700;">
                Weekly missions reset every Monday
            </div>
            ${t}
        `}_renderStreakTab(){const e=this.progressionManager.getStreakInfo(),t=[1,2,3,4,5,6,7];let i="";for(const n of t){const s=n===e.dayInCycle,a=n<e.dayInCycle;n>e.dayInCycle,i+=`
                <div style="width:70px;padding:10px 6px;border-radius:12px;text-align:center;
                    background:${s?"linear-gradient(135deg,rgba(194,158,80,0.15),rgba(139,105,20,0.1))":a?"rgba(106,138,74,0.08)":"rgba(42,30,18,0.3)"};
                    border:2px solid ${s?"#c9a24e":a?"rgba(106,138,74,0.3)":"rgba(194,158,80,0.08)"};">
                    <div class="vr-body" style="font-size:10px;font-weight:800;opacity:0.5;">DAY ${n}</div>
                    <div style="font-size:20px;margin:4px 0;">${a?"✅":s?"🎁":"📦"}</div>
                    <div class="vr-body" style="font-size:9px;opacity:0.4;">🪙${[50,75,100,150,200,250,500][n-1]}</div>
                </div>
            `}return`
            <div class="vr-panel" style="padding:20px;margin-bottom:16px;text-align:center;">
                <div style="font-size:48px;margin-bottom:8px;">🔥</div>
                <div class="vr-title" style="font-size:36px;color:#c9a24e;">${e.currentStreak}</div>
                <div class="vr-body" style="font-size:13px;opacity:0.5;font-weight:700;">Day Streak</div>
                ${e.claimed?`<div class="vr-body" style="margin-top:10px;color:#8aaa6a;font-size:13px;font-weight:800;">Today's reward claimed!</div>`:`<button class="vr-btn vr-btn-primary claim-streak-btn" style="margin-top:12px;padding:10px 24px;font-size:14px;">
                        CLAIM DAY ${e.dayInCycle} REWARD
                      </button>`}
            </div>
            <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px;">
                ${i}
            </div>
            <div class="vr-body" style="text-align:center;font-size:11px;opacity:0.3;margin-bottom:16px;">
                Streak resets at midnight if you miss a day. Day 7 bonus includes 🔑 Keys!
            </div>
        `}_wireEvents(e){e.querySelectorAll(".heroes-tab-btn").forEach(i=>{i.addEventListener("click",()=>{this._tab=i.dataset.tab,this.refresh()})});const t=JSON.parse(localStorage.getItem("vr_unlocked")||'["knight"]');e.querySelectorAll(".hero-select-card").forEach(i=>{i.addEventListener("click",()=>{t.includes(i.dataset.char)&&(this._selectedChar=i.dataset.char,this.refresh())})}),e.querySelectorAll(".upgrade-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.upgrade;this.abilityManager.purchaseUpgrade(this._selectedChar,n)&&(this.refresh(),this._emit("upgrade-purchased"))})}),e.querySelectorAll(".claim-ach-btn").forEach(i=>{i.addEventListener("click",()=>{const n=this.progressionManager.claimAchievement(i.dataset.ach);if(n){if(n.dust&&this.abilityManager.addStarDust(n.dust),n.keys&&this.abilityManager.addKeys(n.keys),n.coins){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);localStorage.setItem("vr_coins",String(s+n.coins))}this.refresh(),this._emit("reward-claimed",n)}})}),e.querySelectorAll(".claim-weekly-btn").forEach(i=>{i.addEventListener("click",()=>{const n=this.progressionManager.claimWeeklyReward(parseInt(i.dataset.index,10));if(n){if(n.dust&&this.abilityManager.addStarDust(n.dust),n.coins){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);localStorage.setItem("vr_coins",String(s+n.coins))}this.refresh(),this._emit("reward-claimed",n)}})}),e.querySelectorAll(".claim-streak-btn").forEach(i=>{i.addEventListener("click",()=>{const n=this.progressionManager.claimStreakReward();if(n){if(n.dust&&this.abilityManager.addStarDust(n.dust),n.keys&&this.abilityManager.addKeys(n.keys),n.coins){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);localStorage.setItem("vr_coins",String(s+n.coins))}this.refresh(),this._emit("reward-claimed",n)}})})}_emit(e,t=null){this.container.dispatchEvent(new CustomEvent(e,{detail:t}))}_getPassiveValue(e){const t=xi[e],i=this.abilityManager.getCharacterStats(e).passiveBoost;switch(t.passive.id){case"armor_up":return t.passive.baseValue+i;case"brute_force":return Math.max(5,t.passive.baseValue-i*2);case"arcane_sight":return t.passive.baseValue+i*15;case"nimble":return t.passive.baseValue+i*15;case"blessed":return t.passive.baseValue+i;default:return t.passive.baseValue}}}class xy{constructor(e,t){this.container=e,this.manager=t,this._filterSlot=null,this._sortBy="rarity",this._el=null,this._detailOverlay=null,this._built=!1}show(){this._built||this._build(),this.refresh(),this._el.style.display="flex"}hide(){this._el&&(this._el.style.display="none"),this._detailOverlay&&(this._detailOverlay.style.display="none")}refresh(){this._el&&(this._renderEquipped(),this._renderStats(),this._renderInventory(),this._renderCrafting())}_build(){this._el=document.createElement("div"),this._el.className="vr-screen vr-forge-bg",this._el.style.cssText="justify-content:flex-start;overflow-y:auto;padding:0;",this._el.innerHTML=`
            <div style="width:100%;max-width:640px;margin:0 auto;padding:20px 24px 40px;">
                <!-- Header -->
                <div style="text-align:center;margin-bottom:20px;padding-top:16px;animation:slideDown 0.4s ease-out;">
                    <h2 class="vr-title" style="font-size:28px;color:#c9a24e;text-shadow:0 2px 6px rgba(0,0,0,0.5);">THE FORGE</h2>
                    <div class="vr-divider"></div>
                    <div class="vr-body" style="font-size:11px;opacity:0.35;margin-top:4px;">Equip, craft, and salvage gear</div>
                </div>

                <!-- Equipped Slots -->
                <div class="vr-section-title">EQUIPPED GEAR</div>
                <div id="eq-slots" style="display:flex;gap:10px;justify-content:center;margin-bottom:20px;flex-wrap:wrap;"></div>

                <!-- Stats Summary -->
                <div id="eq-stats-panel" class="vr-panel" style="padding:12px 16px;margin-bottom:24px;"></div>

                <!-- Inventory -->
                <div class="vr-section-title">INVENTORY</div>
                <div id="eq-filters" style="display:flex;gap:6px;justify-content:center;margin-bottom:12px;flex-wrap:wrap;"></div>
                <div id="eq-inventory" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:28px;"></div>

                <!-- Crafting -->
                <div class="vr-section-title">CRAFTING</div>
                <div id="eq-materials" style="text-align:center;margin-bottom:12px;"></div>
                <div id="eq-crafting" style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:24px;"></div>

            </div>
            <button id="eq-btn-back" class="vr-btn vr-btn-ghost" style="position:absolute;top:14px;left:14px;z-index:10;">BACK</button>
        `,this.container.appendChild(this._el),this._detailOverlay=document.createElement("div"),this._detailOverlay.style.cssText=`
            position:absolute;inset:0;display:none;align-items:center;justify-content:center;
            background:rgba(10,6,2,0.88);z-index:50;font-family:'Philosopher',sans-serif;color:#e8dcc8;
        `,this.container.appendChild(this._detailOverlay),this._el.querySelector("#eq-btn-back").addEventListener("click",()=>{this.container.dispatchEvent(new CustomEvent("equipment-back"))}),this._built=!0}_renderEquipped(){var n;const e=this._el.querySelector("#eq-slots");e.innerHTML="";const t={helmet:"Helm",armor:"Armor",boots:"Boots",amulet:"Amulet",weapon:"Weapon"},i={helmet:"🪖",armor:"🛡️",boots:"👟",amulet:"📿",weapon:"⚔️"};for(const s of Qt){const a=this.manager.getEquippedItem(s),o=a?((n=di[a.rarity])==null?void 0:n.color)||"#a0a0a0":"rgba(194,158,80,0.15)",l=!!a,c=document.createElement("div");c.style.cssText=`
                width:80px;text-align:center;cursor:pointer;
                animation:popIn 0.4s ease-out both;
            `,c.innerHTML=`
                <div style="
                    width:64px;height:64px;margin:0 auto 4px;border-radius:8px;
                    background:rgba(42,30,18,0.6);
                    border:2px solid ${l?o:"rgba(194,158,80,0.15)"};
                    ${l?`box-shadow:0 0 12px ${o}40;`:""}
                    display:flex;align-items:center;justify-content:center;
                    font-size:28px;transition:border-color 0.2s,box-shadow 0.2s;
                ">${a?a.icon:i[s]}</div>
                <div class="vr-body" style="font-size:10px;opacity:${l?"0.8":"0.3"};letter-spacing:0.5px;">
                    ${l?a.name:t[s]}
                </div>
            `,l&&c.addEventListener("click",()=>{this._showItemDetail(a,!0)}),e.appendChild(c)}}_renderStats(){const e=this._el.querySelector("#eq-stats-panel"),t=this.manager.getEquippedStats(),i=Object.entries(t);if(i.length===0){e.innerHTML='<div class="vr-body" style="text-align:center;font-size:12px;opacity:0.3;">No gear equipped</div>';return}e.innerHTML=`
            <div style="font-size:11px;opacity:0.4;margin-bottom:6px;text-transform:uppercase;letter-spacing:2px;font-family:'Cinzel',serif;text-align:center;">Combined Bonuses</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px 16px;justify-content:center;">
                ${i.map(([n,s])=>{const a=mh[n]||{label:n,format:o=>`+${o}`};return`<span class="vr-body" style="font-size:12px;color:#8aaa6a;">${a.label}: <strong>${a.format(s)}</strong></span>`}).join("")}
            </div>
        `}_renderInventory(){var a,o;const e=this._el.querySelector("#eq-filters");e.innerHTML="";const t=[{key:null,label:"All"},...Qt.map(l=>({key:l,label:l.charAt(0).toUpperCase()+l.slice(1)}))];for(const l of t){const c=document.createElement("button");c.className="vr-btn vr-btn-ghost",c.style.cssText=`padding:5px 14px;font-size:11px;${this._filterSlot===l.key?"border-color:#c9a24e;color:#c9a24e;background:rgba(194,158,80,0.1);":""}`,c.textContent=l.label,c.addEventListener("click",()=>{this._filterSlot=l.key,this._renderInventory()}),e.appendChild(c)}const i=document.createElement("button");i.className="vr-btn vr-btn-ghost",i.style.cssText="padding:5px 14px;font-size:11px;margin-left:8px;",i.textContent=this._sortBy==="rarity"?"Sort: Rarity":"Sort: Slot",i.addEventListener("click",()=>{this._sortBy=this._sortBy==="rarity"?"slot":"rarity",this._renderInventory()}),e.appendChild(i);const n=this._el.querySelector("#eq-inventory");n.innerHTML="";let s=this.manager.sortInventory(this._sortBy);if(this._filterSlot&&(s=s.filter(l=>l.slot===this._filterSlot)),s.length===0){n.innerHTML='<div class="vr-body" style="font-size:12px;opacity:0.3;padding:20px;">No items found. Play runs to earn loot!</div>';return}for(const l of s){const c=((a=di[l.rarity])==null?void 0:a.color)||"#a0a0a0",h=this.manager.isEquipped(l.instanceId),d=document.createElement("div");d.className="vr-card",d.style.cssText=`
                width:100px;padding:10px 8px;position:relative;
                border-color:${c}40;
                ${h?`box-shadow:0 0 12px ${c}30;border-color:${c};`:""}
            `,d.innerHTML=`
                <div style="font-size:28px;margin-bottom:4px;">${l.icon}</div>
                <div class="vr-title" style="font-size:10px;color:${c};line-height:1.2;">${l.name}</div>
                <div class="vr-body" style="font-size:9px;opacity:0.35;margin-top:2px;">${((o=di[l.rarity])==null?void 0:o.label)||l.rarity}</div>
                ${h?`<div style="position:absolute;top:4px;right:4px;font-size:8px;background:rgba(194,158,80,0.15);color:#c9a24e;padding:1px 5px;border-radius:3px;font-family:'Cinzel',serif;letter-spacing:0.5px;">EQ</div>`:""}
            `,d.addEventListener("click",()=>{this._showItemDetail(l,h)}),n.appendChild(d)}}_showItemDetail(e,t){var h,d;const i=((h=di[e.rarity])==null?void 0:h.color)||"#a0a0a0",n=((d=di[e.rarity])==null?void 0:d.label)||e.rarity,s=Ad[e.rarity];this._detailOverlay.style.display="flex",this._detailOverlay.innerHTML=`
            <div class="vr-panel" style="padding:28px 36px;text-align:center;max-width:320px;animation:popIn 0.3s ease-out;position:relative;">
                <div style="font-size:48px;margin-bottom:8px;">${e.icon}</div>
                <div class="vr-title" style="font-size:20px;color:${i};margin-bottom:2px;">${e.name}</div>
                <div class="vr-body" style="font-size:11px;color:${i};opacity:0.7;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;">${n} ${e.slot}</div>
                <div class="vr-divider" style="margin:10px auto;"></div>

                <div style="text-align:left;margin-bottom:12px;">
                    ${Object.entries(e.stats).map(([u,p])=>{const g=mh[u]||{label:u,format:_=>`+${_}`};return`<div class="vr-body" style="font-size:13px;color:#8aaa6a;margin-bottom:3px;">${g.label}: <strong>${g.format(p)}</strong></div>`}).join("")}
                </div>

                <div class="vr-body" style="font-size:11px;opacity:0.35;font-style:italic;margin-bottom:16px;">"${e.flavorText}"</div>

                <div style="display:flex;flex-direction:column;gap:8px;">
                    ${t?'<button id="eq-detail-unequip" class="vr-btn vr-btn-secondary" style="width:100%;">UNEQUIP</button>':'<button id="eq-detail-equip" class="vr-btn vr-btn-gold" style="width:100%;">EQUIP</button>'}
                    ${!t&&s?`<button id="eq-detail-salvage" class="vr-btn vr-btn-ghost" style="width:100%;color:#8b4513;">SALVAGE (${this._formatSalvage(s)})</button>`:""}
                    <button id="eq-detail-close" class="vr-btn vr-btn-ghost" style="width:100%;">CLOSE</button>
                </div>
            </div>
        `,this._detailOverlay.querySelector("#eq-detail-close").addEventListener("click",()=>{this._detailOverlay.style.display="none"});const o=this._detailOverlay.querySelector("#eq-detail-equip");o&&o.addEventListener("click",()=>{this.manager.equip(e.instanceId),this._detailOverlay.style.display="none",this.refresh(),this.container.dispatchEvent(new CustomEvent("equipment-changed"))});const l=this._detailOverlay.querySelector("#eq-detail-unequip");l&&l.addEventListener("click",()=>{this.manager.unequip(e.slot),this._detailOverlay.style.display="none",this.refresh(),this.container.dispatchEvent(new CustomEvent("equipment-changed"))});const c=this._detailOverlay.querySelector("#eq-detail-salvage");c&&c.addEventListener("click",()=>{this.manager.salvage(e.instanceId)&&(this._detailOverlay.style.display="none",this.refresh(),this.container.dispatchEvent(new CustomEvent("equipment-changed")))})}_formatSalvage(e){const t=[];return e.fragments&&t.push(`${e.fragments} fragments`),e.essence&&t.push(`${e.essence} essence`),e.cores&&t.push(`${e.cores} core${e.cores>1?"s":""}`),t.join(", ")}_renderCrafting(){const e=this.manager.getMaterials(),t=this._el.querySelector("#eq-materials");t.innerHTML=`
            <div style="display:flex;gap:16px;justify-content:center;" class="vr-body">
                <span style="font-size:13px;">
                    <span style="color:#a0a0a0;">Fragments:</span>
                    <strong style="color:#c9a24e;">${e.fragments}</strong>
                </span>
                <span style="font-size:13px;">
                    <span style="color:#4a7ab5;">Essence:</span>
                    <strong style="color:#c9a24e;">${e.essence}</strong>
                </span>
                <span style="font-size:13px;">
                    <span style="color:#8a5ab5;">Cores:</span>
                    <strong style="color:#c9a24e;">${e.cores}</strong>
                </span>
            </div>
        `;const i=this._el.querySelector("#eq-crafting");i.innerHTML="";const n=["uncommon","rare","epic","legendary"];for(const s of n){const a=di[s],o=this.manager.canCraft(s),l=this._formatCraftCost(a.craftCost),c=document.createElement("button");c.className=`vr-btn ${o?"vr-btn-secondary":"vr-btn-ghost"}`,c.style.cssText=`
                padding:10px 16px;font-size:11px;min-width:120px;
                ${o?`border-color:${a.color};color:${a.color};`:"opacity:0.4;"}
            `,c.innerHTML=`
                <div style="font-size:12px;font-weight:700;">${a.label}</div>
                <div style="font-size:9px;opacity:0.6;margin-top:2px;">${l}</div>
            `,o&&c.addEventListener("click",()=>{this._showCraftSlotPicker(s)}),i.appendChild(c)}}_formatCraftCost(e){if(!e)return"N/A";const t=[];return e.fragments&&t.push(`${e.fragments} frag`),e.essence&&t.push(`${e.essence} ess`),e.cores&&t.push(`${e.cores} core`),t.join(" + ")}_showCraftSlotPicker(e){const t=di[e];this._detailOverlay.style.display="flex",this._detailOverlay.innerHTML=`
            <div class="vr-panel" style="padding:24px 32px;text-align:center;max-width:320px;animation:popIn 0.3s ease-out;">
                <div class="vr-title" style="font-size:18px;color:${t.color};margin-bottom:4px;">CRAFT ${t.label.toUpperCase()}</div>
                <div class="vr-divider" style="margin:8px auto 14px;"></div>
                <div class="vr-body" style="font-size:12px;opacity:0.5;margin-bottom:16px;">Choose a slot to craft for:</div>
                <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:16px;">
                    ${Qt.map(i=>`
                        <button class="vr-btn vr-btn-secondary eq-craft-slot-btn" data-slot="${i}" style="padding:10px 18px;font-size:12px;min-width:80px;">
                            ${i.charAt(0).toUpperCase()+i.slice(1)}
                        </button>
                    `).join("")}
                </div>
                <button id="eq-craft-cancel" class="vr-btn vr-btn-ghost" style="width:100%;">CANCEL</button>
            </div>
        `,this._detailOverlay.querySelector("#eq-craft-cancel").addEventListener("click",()=>{this._detailOverlay.style.display="none"}),this._detailOverlay.querySelectorAll(".eq-craft-slot-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.slot,s=this.manager.craft(e,n);s&&(this._detailOverlay.style.display="none",this._showItemDetail(s,!1),this.refresh(),this.container.dispatchEvent(new CustomEvent("equipment-changed")))})})}}const bh=[{key:"skin",label:"SKINS",items:Cd},{key:"trail",label:"TRAILS",items:Rd},{key:"death",label:"DEATHS",items:Id},{key:"title",label:"TITLES",items:Dd}],Sh={coins:"🪙",dust:"✨",pyr:"🔮"},Mh={coins:"",dust:" Dust",pyr:" PYR"};class by{constructor(e,t){this.container=e,this.manager=t,this._activeTab="skin",this._modal=null,this.screen=document.createElement("div"),this.screen.id="cosmetics-screen",this.screen.className="vr-screen vr-vanity-bg",this.screen.style.justifyContent="flex-start",this.screen.style.overflowY="auto",this.screen.style.padding="0",this.screen.innerHTML=`
            <div style="width:100%;max-width:680px;margin:0 auto;padding:20px 24px 30px;">
                <!-- Title -->
                <div style="text-align:center;margin-bottom:20px;padding-top:16px;animation:slideDown 0.4s ease-out;">
                    <h2 class="vr-title" style="font-size:28px;color:transparent;background:linear-gradient(180deg,#c9a24e 0%,#8b6914 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:none;letter-spacing:3px;">HALL OF VANITY</h2>
                    <div class="vr-divider"></div>
                    <div id="cosmetics-balance" class="vr-body" style="font-size:13px;opacity:0.5;margin-top:4px;"></div>
                </div>

                <!-- Tab bar -->
                <div id="cosmetics-tabs" style="display:flex;gap:6px;justify-content:center;margin-bottom:20px;animation:slideDown 0.4s ease-out 0.1s both;flex-wrap:wrap;"></div>

                <!-- Currently equipped preview -->
                <div id="cosmetics-equipped" style="text-align:center;margin-bottom:20px;animation:slideUp 0.4s ease-out 0.15s both;"></div>

                <!-- Grid -->
                <div id="cosmetics-grid" style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:28px;"></div>

            </div>
            <button id="btn-cosmetics-back" class="vr-btn vr-btn-ghost" style="position:absolute;top:14px;left:14px;z-index:10;">BACK</button>
        `,e.appendChild(this.screen),this.screen.querySelector("#btn-cosmetics-back").addEventListener("click",()=>{this.container.dispatchEvent(new CustomEvent("cosmetics-back"))}),this._buildTabs()}show(){this.refresh(),this.screen.style.display="flex"}hide(){this.screen.style.display="none",this._closeModal()}refresh(){this._updateBalance(),this._buildTabs(),this._renderEquipped(),this._renderGrid()}_updateBalance(){const e=parseInt(localStorage.getItem("vr_coins")||"0",10),t=parseInt(localStorage.getItem("vr_stardust")||"0",10),i=this.screen.querySelector("#cosmetics-balance");i.innerHTML=`🪙 <strong>${e.toLocaleString()}</strong> &nbsp; ✨ <strong>${t.toLocaleString()}</strong> Dust`}_buildTabs(){const e=this.screen.querySelector("#cosmetics-tabs");e.innerHTML="";for(const t of bh){const i=document.createElement("button");i.className=`vr-btn ${t.key===this._activeTab?"vr-btn-primary":"vr-btn-secondary"}`,i.style.cssText="padding:10px 20px;font-size:12px;min-width:80px;",i.textContent=t.label,i.addEventListener("click",()=>{this._activeTab=t.key,this.refresh()}),e.appendChild(i)}}_renderEquipped(){const e=this.screen.querySelector("#cosmetics-equipped"),t=this.manager.getEquipped(),i=this._activeTab,n=t[i],s=hi(n);if(!s){e.innerHTML="";return}const a=Ka[s.rarity]||"#a0a0a0";e.innerHTML=`
            <div class="vr-panel" style="display:inline-block;padding:12px 28px;border-color:${a};">
                <div style="font-size:11px;opacity:0.4;letter-spacing:2px;margin-bottom:4px;" class="vr-title">EQUIPPED</div>
                <span style="font-size:28px;">${s.icon}</span>
                <div class="vr-title" style="font-size:14px;color:${a};margin-top:4px;">${s.name}</div>
                ${s.category==="title"&&s.titleText?`<div class="vr-body" style="font-size:11px;opacity:0.5;margin-top:2px;">"${s.titleText}"</div>`:""}
            </div>
        `}_renderGrid(){const e=this.screen.querySelector("#cosmetics-grid");e.innerHTML="";const t=bh.find(s=>s.key===this._activeTab);if(!t)return;const n=this.manager.getEquipped()[this._activeTab];t.items.forEach((s,a)=>{const o=this.manager.owns(s.id),l=s.id===n,c=Ka[s.rarity]||"#a0a0a0",h=document.createElement("div");h.className=`vr-card ${o?"vr-card-owned":""} ${l?"vr-card-selected":""}`,h.style.cssText=`
                width:140px;border-color:${l?c:o?"rgba(120,160,80,0.3)":"rgba(194,158,80,0.12)"};
                animation-delay:${a*.05}s;
                ${o?"":"opacity:0.65;"}
                ${l?`box-shadow:0 0 20px ${c}40;`:""}
            `;const d=s.rarity.charAt(0).toUpperCase()+s.rarity.slice(1);let u;if(l)u=`<span class="vr-badge" style="background:${c}20;color:${c};">EQUIPPED</span>`;else if(o)u='<span class="vr-badge vr-badge-owned">OWNED</span>';else if(s.price){const p=Sh[s.price.currency]||"",g=Mh[s.price.currency]||"";u=`<span class="vr-badge ${s.price.currency==="pyr"||s.price.currency==="dust"?"vr-badge-pyr":"vr-badge-coins"}">${p} ${s.price.amount}${g}</span>`}else u='<span class="vr-badge" style="background:rgba(194,158,80,0.1);color:rgba(194,158,80,0.5);">EARNED</span>';h.innerHTML=`
                <div style="font-size:36px;margin-bottom:6px;">${s.icon}</div>
                <div class="vr-title" style="font-size:12px;color:${c};line-height:1.2;">${s.name}</div>
                <div class="vr-body" style="font-size:9px;color:${c};opacity:0.6;margin:3px 0;letter-spacing:1px;">${d}</div>
                ${u}
            `,h.addEventListener("click",()=>{l||(o?this._equipItem(s):s.price&&this._showPurchaseModal(s))}),e.appendChild(h)})}_equipItem(e){let t=!1;switch(e.category){case"skin":t=this.manager.equipSkin(e.id);break;case"trail":t=this.manager.equipTrail(e.id);break;case"death":t=this.manager.equipDeath(e.id);break;case"title":t=this.manager.equipTitle(e.id);break}t&&(this.container.dispatchEvent(new CustomEvent("cosmetic-equipped",{detail:{id:e.id,category:e.category}})),this.refresh())}_showPurchaseModal(e){this._closeModal();const t=Ka[e.rarity]||"#a0a0a0",i=e.rarity.charAt(0).toUpperCase()+e.rarity.slice(1),n=Sh[e.price.currency]||"",s=Mh[e.price.currency]||"",a=this.manager.canAfford(e.id);this._modal=document.createElement("div"),this._modal.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(10,6,2,0.85);z-index:100;animation:popIn 0.3s ease-out;",this._modal.innerHTML=`
            <div class="vr-panel" style="padding:28px 36px;text-align:center;max-width:320px;border-color:${t};box-shadow:0 0 40px ${t}20;">
                <div style="font-size:56px;margin-bottom:8px;">${e.icon}</div>
                <div class="vr-title" style="font-size:20px;color:${t};margin-bottom:2px;">${e.name}</div>
                <div class="vr-body" style="font-size:10px;color:${t};opacity:0.6;letter-spacing:2px;margin-bottom:8px;">${i}</div>
                <div class="vr-divider"></div>
                <div class="vr-body" style="font-size:12px;opacity:0.5;margin:12px 0;line-height:1.6;">${e.description||""}</div>
                <div style="font-size:18px;font-weight:800;margin-bottom:20px;" class="vr-title">
                    ${n} ${e.price.amount}${s}
                </div>
                ${a?'<button id="modal-buy" class="vr-btn vr-btn-gold" style="width:100%;margin-bottom:10px;padding:14px;font-size:15px;">ACQUIRE</button>':`<div class="vr-body" style="color:#8b2020;font-size:13px;font-weight:800;margin-bottom:14px;">Insufficient ${e.price.currency==="dust"?"Star Dust":e.price.currency==="pyr"?"PYR":"coins"}</div>`}
                <button id="modal-cancel" class="vr-btn vr-btn-ghost" style="width:100%;">CANCEL</button>
            </div>
        `,this.container.appendChild(this._modal);const o=this._modal.querySelector("#modal-buy");o&&o.addEventListener("click",()=>{this.manager.purchase(e.id).success&&this._equipItem(e),this._closeModal(),this.refresh()}),this._modal.querySelector("#modal-cancel").addEventListener("click",()=>{this._closeModal()}),this._modal.addEventListener("click",l=>{l.target===this._modal&&this._closeModal()})}_closeModal(){this._modal&&(this._modal.remove(),this._modal=null)}}const Ud=document.createElement("style");Ud.textContent=`
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Philosopher:wght@400;700&display=swap');

#ui * { box-sizing: border-box; }
.vr-title { font-family:'Cinzel',serif; font-weight:800; }
.vr-body { font-family:'Philosopher',sans-serif; }

/* Animations */
@keyframes float { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-15px) rotate(10deg);} }
@keyframes pulse { 0%,100%{opacity:0.6;transform:scale(1);} 50%{opacity:1;transform:scale(1.03);} }
@keyframes slideUp { from{opacity:0;transform:translateY(30px);} to{opacity:1;transform:translateY(0);} }
@keyframes slideDown { from{opacity:0;transform:translateY(-20px);} to{opacity:1;transform:translateY(0);} }
@keyframes popIn { 0%{opacity:0;transform:scale(0.7);} 60%{transform:scale(1.05);} 100%{opacity:1;transform:scale(1);} }
@keyframes shine { 0%{left:-100%;} 100%{left:200%;} }
@keyframes glow { 0%,100%{box-shadow:0 0 15px rgba(194,158,80,0.3), inset 0 0 15px rgba(194,158,80,0.05);} 50%{box-shadow:0 0 30px rgba(194,158,80,0.5), 0 0 50px rgba(194,158,80,0.15), inset 0 0 20px rgba(194,158,80,0.08);} }
@keyframes bossWarn { 0%{opacity:0;transform:translate(-50%,-50%) scale(0.5);} 20%{opacity:1;transform:translate(-50%,-50%) scale(1.2);} 40%{transform:translate(-50%,-50%) scale(1);} 100%{opacity:0;transform:translate(-50%,-50%) scale(1);} }
@keyframes bossDefeat { 0%{opacity:0;transform:translate(-50%,-50%) scale(0.5);} 15%{opacity:1;transform:translate(-50%,-50%) scale(1.15);} 30%{transform:translate(-50%,-50%) scale(1);} 100%{opacity:0;transform:translate(-50%,-50%) translateY(-30px);} }
@keyframes emberFloat { 0%{opacity:0;transform:translateY(0) scale(0.5);} 30%{opacity:1;} 100%{opacity:0;transform:translateY(-40px) scale(0.2);} }
@keyframes chestRewardFloat { 0%{opacity:0;transform:translate(-50%,0) scale(0.6);} 15%{opacity:1;transform:translate(-50%,-10px) scale(1.1);} 30%{transform:translate(-50%,-20px) scale(1);} 100%{opacity:0;transform:translate(-50%,-80px) scale(0.8);} }
@keyframes strikeFlash { 0%{opacity:0;transform:translateX(-50%) scale(0.8);} 10%{opacity:1;transform:translateX(-50%) scale(1.05);} 25%{opacity:1;transform:translateX(-50%) scale(1);} 80%{opacity:0.6;} 100%{opacity:0;transform:translateX(-50%) scale(0.9);} }

.vr-btn {
    font-family:'Cinzel',serif; font-weight:700; border:none; border-radius:6px;
    color:#f5e6c8; cursor:pointer; transition:transform 0.12s, box-shadow 0.15s;
    text-shadow:0 1px 3px rgba(0,0,0,0.5); position:relative; overflow:hidden;
    letter-spacing:1px;
}
.vr-btn:hover { transform:scale(1.04); }
.vr-btn:active { transform:scale(0.97); }
.vr-btn::after {
    content:''; position:absolute; top:0; left:-100%; width:60%; height:100%;
    background:linear-gradient(90deg,transparent,rgba(255,230,180,0.15),transparent);
    animation:shine 4s infinite;
}
.vr-btn-primary {
    padding:18px 64px; font-size:20px;
    background:linear-gradient(180deg,#c9960f 0%,#a07818 30%,#8b6914 60%,#6b4f10 100%);
    border:2px solid #c9a24e; border-top-color:#dbb86a; border-bottom-color:#5a3e0a;
    box-shadow:0 4px 20px rgba(139,105,20,0.5), 0 0 40px rgba(194,158,80,0.15), inset 0 1px 0 rgba(255,220,150,0.3);
    animation:glow 3s infinite;
    text-transform:uppercase; letter-spacing:3px;
}
.vr-btn-secondary {
    padding:12px 32px; font-size:14px;
    background:linear-gradient(180deg,#5a4a3a 0%,#3a2e22 100%);
    border:2px solid #7a6a50; border-top-color:#8a7a60;
    box-shadow:0 3px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,220,150,0.1);
}
.vr-btn-gold {
    padding:12px 32px; font-size:14px;
    background:linear-gradient(180deg,#c9a24e 0%,#a07830 100%);
    border:2px solid #dbb86a;
    box-shadow:0 3px 12px rgba(194,158,80,0.4); color:#2a1a08;
    text-shadow:0 1px 0 rgba(255,220,150,0.4);
}
.vr-btn-cyan {
    padding:12px 32px; font-size:14px;
    background:linear-gradient(180deg,#4a6a5a 0%,#2a4a3a 100%);
    border:2px solid #6a8a7a;
    box-shadow:0 3px 12px rgba(74,106,90,0.4);
}
.vr-btn-ghost {
    padding:10px 28px; font-size:13px;
    background:rgba(90,70,50,0.3); border:1px solid rgba(194,158,80,0.25);
    box-shadow:none; color:#c9a24e;
}
.vr-btn-ghost:hover { background:rgba(90,70,50,0.5); border-color:rgba(194,158,80,0.4); }

.vr-panel {
    background:linear-gradient(170deg,rgba(42,30,18,0.95) 0%,rgba(28,20,12,0.97) 100%);
    border:2px solid rgba(194,158,80,0.2); border-radius:8px;
    box-shadow:0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(194,158,80,0.1);
    backdrop-filter:blur(8px);
}

.vr-screen {
    position:absolute; inset:0; display:none; flex-direction:column; align-items:center; justify-content:center;
    background:
        radial-gradient(ellipse at 50% 0%, rgba(194,158,80,0.06) 0%, transparent 50%),
        radial-gradient(ellipse at 0% 50%, rgba(139,105,20,0.04) 0%, transparent 40%),
        radial-gradient(ellipse at 100% 50%, rgba(139,105,20,0.04) 0%, transparent 40%),
        radial-gradient(ellipse at 50% 100%, rgba(80,50,20,0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 20%, #2a1e12 0%, #1a1208 35%, #0e0a04 100%);
    font-family:'Philosopher',sans-serif; color:#e8dcc8;
    overflow:hidden;
}

/* Decorative column borders for screens */
.vr-screen::before {
    content:''; position:absolute; inset:0; pointer-events:none; z-index:0;
    background:
        linear-gradient(90deg, rgba(194,158,80,0.08) 0px, transparent 3px),
        linear-gradient(90deg, transparent calc(100% - 3px), rgba(194,158,80,0.08) 100%),
        repeating-linear-gradient(180deg, transparent 0px, transparent 80px, rgba(194,158,80,0.02) 80px, rgba(194,158,80,0.02) 82px);
}

/* Golden light beam from top */
.vr-screen::after {
    content:''; position:absolute; top:-20%; left:30%; width:40%; height:60%;
    background:radial-gradient(ellipse, rgba(194,158,80,0.04) 0%, transparent 70%);
    pointer-events:none; z-index:0;
}

/* Main menu - warm torch glow */
.vr-menu-bg {
    background:
        radial-gradient(circle at 15% 80%, rgba(180,100,30,0.08) 0%, transparent 30%),
        radial-gradient(circle at 85% 80%, rgba(180,100,30,0.08) 0%, transparent 30%),
        radial-gradient(circle at 50% 10%, rgba(194,158,80,0.1) 0%, transparent 40%),
        radial-gradient(ellipse at 50% 20%, #2a1e12 0%, #1a1208 35%, #0e0a04 100%);
}

/* Campaign - map/scroll feel */
.vr-campaign-bg {
    background:
        radial-gradient(circle at 50% 30%, rgba(160,130,80,0.06) 0%, transparent 50%),
        linear-gradient(180deg, rgba(42,30,18,0.3) 0%, transparent 30%, transparent 70%, rgba(42,30,18,0.3) 100%),
        radial-gradient(ellipse at 50% 20%, #2a1e12 0%, #1a1208 35%, #0e0a04 100%);
}

/* Heroes - arena/colosseum */
.vr-heroes-bg {
    background:
        radial-gradient(circle at 50% 70%, rgba(194,158,80,0.06) 0%, transparent 40%),
        radial-gradient(circle at 20% 20%, rgba(120,80,40,0.05) 0%, transparent 30%),
        radial-gradient(circle at 80% 20%, rgba(120,80,40,0.05) 0%, transparent 30%),
        radial-gradient(ellipse at 50% 20%, #2a1e12 0%, #1a1208 35%, #0e0a04 100%);
}

/* Forge - furnace glow */
.vr-forge-bg {
    background:
        radial-gradient(circle at 50% 90%, rgba(200,80,20,0.1) 0%, transparent 40%),
        radial-gradient(circle at 50% 90%, rgba(255,140,40,0.05) 0%, transparent 60%),
        radial-gradient(ellipse at 50% 20%, #2a1e12 0%, #1a1208 35%, #0e0a04 100%);
}

/* Vanity - ethereal/mystical */
.vr-vanity-bg {
    background:
        radial-gradient(circle at 30% 30%, rgba(120,80,180,0.05) 0%, transparent 30%),
        radial-gradient(circle at 70% 60%, rgba(80,120,180,0.04) 0%, transparent 30%),
        radial-gradient(circle at 50% 10%, rgba(194,158,80,0.06) 0%, transparent 40%),
        radial-gradient(ellipse at 50% 20%, #2a1e12 0%, #1a1208 35%, #0e0a04 100%);
}

/* Shop - merchant/bazaar */
.vr-shop-bg {
    background:
        radial-gradient(circle at 50% 50%, rgba(194,158,80,0.05) 0%, transparent 40%),
        radial-gradient(circle at 10% 90%, rgba(180,120,40,0.06) 0%, transparent 25%),
        radial-gradient(circle at 90% 90%, rgba(180,120,40,0.06) 0%, transparent 25%),
        radial-gradient(ellipse at 50% 20%, #2a1e12 0%, #1a1208 35%, #0e0a04 100%);
}

/* Glory/Leaderboard - hall of fame */
.vr-glory-bg {
    background:
        radial-gradient(circle at 50% 0%, rgba(194,158,80,0.1) 0%, transparent 40%),
        linear-gradient(180deg, rgba(194,158,80,0.03) 0%, transparent 20%),
        radial-gradient(ellipse at 50% 20%, #2a1e12 0%, #1a1208 35%, #0e0a04 100%);
}

.vr-currency-bar {
    position:absolute; top:0; left:0; right:0; display:flex; justify-content:space-between;
    align-items:center; padding:12px 20px; z-index:5;
    background:linear-gradient(180deg,rgba(14,10,4,0.7) 0%,transparent 100%);
}
.vr-currency-pill {
    display:flex; align-items:center; gap:6px; padding:6px 14px;
    background:rgba(42,30,18,0.7); border-radius:4px; border:1px solid rgba(194,158,80,0.15);
    font-size:14px; font-weight:700; color:#c9a24e;
}

.vr-card {
    width:150px; padding:16px; border-radius:8px; text-align:center; cursor:pointer;
    background:rgba(42,30,18,0.6); border:2px solid rgba(194,158,80,0.12);
    transition:transform 0.15s, border-color 0.2s, box-shadow 0.2s;
    animation:popIn 0.4s ease-out both;
}
.vr-card:hover { transform:translateY(-4px) scale(1.03); box-shadow:0 6px 20px rgba(0,0,0,0.4); border-color:rgba(194,158,80,0.3); }
.vr-card-owned { border-color:rgba(120,160,80,0.5); background:rgba(80,120,50,0.08); }
.vr-card-pyr { border-color:rgba(160,100,200,0.3); }
.vr-card-selected { border-color:#c9a24e; box-shadow:0 0 20px rgba(194,158,80,0.3); }

.vr-section-title {
    font-family:'Cinzel',serif; font-size:14px; color:rgba(194,158,80,0.6);
    letter-spacing:4px; margin-bottom:16px; text-align:center; text-transform:uppercase;
}

.vr-badge {
    display:inline-block; padding:3px 10px; border-radius:4px; font-size:11px; font-weight:700;
    text-transform:uppercase; letter-spacing:0.5px; font-family:'Cinzel',serif;
}
.vr-badge-owned { background:rgba(120,160,80,0.15); color:#a0c870; }
.vr-badge-pyr { background:rgba(160,100,200,0.15); color:#c0a0e0; }
.vr-badge-coins { background:rgba(194,158,80,0.15); color:#c9a24e; }

/* Floating decorative embers */
.vr-sparkle {
    position:absolute; width:4px; height:4px; border-radius:50%;
    background:radial-gradient(circle,rgba(194,158,80,0.4),rgba(139,105,20,0.15),transparent);
    pointer-events:none; animation:emberFloat 5s infinite ease-out;
}

/* Decorative laurel divider */
.vr-divider {
    width:200px; height:1px; margin:12px auto;
    background:linear-gradient(90deg,transparent,rgba(194,158,80,0.4),transparent);
}

@media (max-width:600px), (hover:none) {
    .vr-controls-hint { display:none !important; }
}
`;document.head.appendChild(Ud);function Za(r,e=6){for(let t=0;t<e;t++){const i=document.createElement("div");i.className="vr-sparkle",i.style.left=Math.random()*100+"%",i.style.top=60+Math.random()*40+"%",i.style.animationDelay=Math.random()*5+"s",i.style.animationDuration=4+Math.random()*4+"s",i.style.width=i.style.height=2+Math.random()*4+"px",i.style.opacity=String(.1+Math.random()*.25),r.appendChild(i)}}class Sy{constructor(e){this.container=e,this._callbacks={},this.hud=document.createElement("div"),this.hud.id="hud",this.hud.className="vr-body",this.hud.innerHTML=`
            <div style="position:absolute;top:16px;left:16px;text-shadow:0 2px 6px rgba(0,0,0,0.7);">
                <div id="hud-score" style="font-family:'Cinzel',serif;font-size:22px;font-weight:800;color:#c9a24e;">0</div>
                <div id="hud-distance" style="font-size:12px;opacity:0.6;font-family:'Philosopher',sans-serif;">0m</div>
            </div>
            <div style="position:absolute;top:16px;right:16px;text-align:right;text-shadow:0 2px 6px rgba(0,0,0,0.7);">
                <div id="hud-coins" style="font-size:15px;font-family:'Cinzel',serif;font-weight:700;color:#c9a24e;">🪙 0</div>
                <div id="hud-combo" style="font-size:13px;color:#c9a24e;display:none;font-family:'Cinzel',serif;font-weight:700;">COMBO x1</div>
            </div>
            <div id="hud-health" style="position:absolute;top:56px;left:16px;display:flex;align-items:center;gap:6px;">
                <div id="health-bar-bg" style="width:140px;height:14px;background:rgba(0,0,0,0.6);border-radius:7px;border:1px solid rgba(194,158,80,0.25);overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.4);">
                    <div id="health-bar-fill" style="width:100%;height:100%;border-radius:6px;background:linear-gradient(180deg,#7dcc5a 0%,#4a8a2a 100%);transition:width 0.3s ease-out, background 0.3s;box-shadow:inset 0 1px 0 rgba(255,255,255,0.2);"></div>
                </div>
            </div>
            <div id="hud-powerup" style="position:absolute;top:52px;right:16px;font-family:'Cinzel',serif;font-size:14px;font-weight:800;color:#c9a24e;text-shadow:0 0 10px rgba(194,158,80,0.4);display:none;pointer-events:none;opacity:0.85;padding:4px 10px;background:rgba(42,30,18,0.5);border-radius:4px;border:1px solid rgba(194,158,80,0.2);"></div>
            <div id="hud-nearmiss" style="position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);font-family:'Cinzel',serif;font-size:16px;font-weight:700;color:#c9a24e;text-shadow:0 0 10px rgba(194,158,80,0.5);display:none;pointer-events:none;">NEAR MISS! +25</div>
            <div id="hud-damage" style="position:absolute;inset:0;pointer-events:none;border:4px solid transparent;border-radius:4px;transition:border-color 0.1s;"></div>
            <div id="hud-ability" style="position:absolute;bottom:20px;left:20px;display:none;cursor:pointer;">
                <div style="width:56px;height:56px;border-radius:6px;background:rgba(42,30,18,0.7);border:2px solid rgba(194,158,80,0.25);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
                    <div id="hud-ability-icon" style="font-size:28px;z-index:2;"></div>
                    <div id="hud-ability-cd" style="position:absolute;bottom:0;left:0;right:0;height:0%;background:rgba(0,0,0,0.6);transition:height 0.2s;z-index:1;"></div>
                </div>
                <div id="hud-ability-label" class="vr-body" style="font-size:9px;text-align:center;margin-top:2px;opacity:0.5;font-weight:800;">ABILITY</div>
            </div>
            <div id="hud-campaign-timer" style="position:absolute;top:16px;left:50%;transform:translateX(-50%);display:none;font-family:'Cinzel',serif;font-size:18px;font-weight:800;color:#c9a24e;text-shadow:0 2px 8px rgba(0,0,0,0.7);padding:4px 16px;background:rgba(42,30,18,0.5);border-radius:6px;border:1px solid rgba(194,158,80,0.2);"></div>
            <button id="btn-pause" class="vr-btn vr-btn-ghost" style="position:absolute;top:14px;right:80px;width:40px;height:40px;padding:0;font-size:18px;line-height:40px;border-radius:12px;">⏸</button>
        `,this.hud.style.display="none",e.appendChild(this.hud),this.menu=document.createElement("div"),this.menu.id="main-menu",this.menu.className="vr-screen vr-menu-bg",this.menu.style.display="flex",this.menu.innerHTML=`
            <div class="vr-currency-bar">
                <div class="vr-currency-pill">🪙 <span id="menu-coin-count">0</span></div>
                <div style="display:flex;gap:8px;align-items:center;">
                    <div id="wallet-info" style="display:none;">
                        <div class="vr-currency-pill">
                            <span style="color:#c0a0e0;">🔮</span>
                            <span id="wallet-pyr" style="color:#c0a0e0;">0 PYR</span>
                        </div>
                    </div>
                    <button id="btn-connect-wallet" class="vr-btn vr-btn-ghost" style="padding:8px 16px;font-size:11px;">🔗 Connect Wallet</button>
                    <button id="btn-options" class="vr-btn vr-btn-ghost" style="padding:8px 14px;font-size:13px;min-width:0;">OPTIONS</button>
                    <button id="btn-fullscreen" class="vr-btn vr-btn-ghost" style="padding:8px 12px;font-size:16px;min-width:0;line-height:1;">&#x26F6;</button>
                </div>
            </div>

            <div style="text-align:center;margin-top:50px;animation:slideDown 0.6s ease-out;">
                <div style="font-size:11px;letter-spacing:8px;opacity:0.35;margin-bottom:8px;" class="vr-body" style="color:rgba(194,158,80,0.5);">VULCAN FORGED PRESENTS</div>
                <h1 class="vr-title" style="font-size:56px;line-height:1;margin-bottom:2px;color:#c9a24e;text-shadow:0 2px 8px rgba(0,0,0,0.6),0 0 40px rgba(194,158,80,0.15);letter-spacing:3px;">VULCAN<br>RUNNER</h1>
                <div class="vr-divider" style="margin:8px auto;"></div>
                <div style="font-size:12px;opacity:0.3;letter-spacing:4px;" class="vr-title">ENDLESS FANTASY RUNNER</div>
            </div>

            <div style="margin-top:44px;animation:popIn 0.5s ease-out 0.2s both;">
                <button id="btn-play" class="vr-btn vr-btn-primary" style="letter-spacing:3px;">BEGIN</button>
            </div>

            <div style="display:flex;gap:12px;margin-top:16px;animation:slideUp 0.5s ease-out 0.25s both;">
                <button id="btn-campaign" class="vr-btn vr-btn-secondary" style="width:150px;">CAMPAIGN</button>
                <button id="btn-heroes" class="vr-btn vr-btn-secondary" style="width:150px;">HEROES</button>
            </div>

            <div style="display:flex;gap:12px;margin-top:10px;animation:slideUp 0.5s ease-out 0.3s both;">
                <button id="btn-shop" class="vr-btn vr-btn-gold" style="width:150px;">ARMOURY</button>
                <button id="btn-leaderboard" class="vr-btn vr-btn-cyan" style="width:150px;">GLORY</button>
            </div>

            <div style="display:flex;gap:12px;margin-top:10px;animation:slideUp 0.5s ease-out 0.35s both;">
                <button id="btn-forge" class="vr-btn vr-btn-secondary" style="width:150px;border-color:#c9a24e;color:#c9a24e;">FORGE</button>
                <button id="btn-vanity" class="vr-btn vr-btn-secondary" style="width:150px;border-color:#8a5ab5;color:#c0a0e0;">VANITY</button>
            </div>

            <div style="display:flex;gap:12px;margin-top:10px;animation:slideUp 0.5s ease-out 0.4s both;">
                <button id="btn-daily" class="vr-btn vr-btn-gold" style="width:312px;">DAILY</button>
            </div>
        `,Za(this.menu,10),e.appendChild(this.menu),this.selectedCharacter="knight",this.charSelect=document.createElement("div"),this.charSelect.id="char-select",this.charSelect.className="vr-screen",this.charSelect.innerHTML=`
            <h2 class="vr-title" style="font-size:26px;margin-bottom:4px;color:#c9a24e;text-shadow:0 2px 6px rgba(0,0,0,0.5);animation:slideDown 0.4s ease-out;">CHOOSE YOUR WARRIOR</h2>
            <div class="vr-divider"></div>
            <p class="vr-body" style="font-size:12px;opacity:0.35;margin-bottom:28px;animation:slideDown 0.4s ease-out 0.1s both;">Select a champion to enter the arena</p>
            <div style="display:flex;gap:20px;margin-bottom:32px;flex-wrap:wrap;justify-content:center;">
                <div id="char-knight" class="vr-card vr-card-selected char-card" data-char="knight" style="animation-delay:0.15s;">
                    <div style="font-size:44px;margin-bottom:8px;">⚔️</div>
                    <div class="vr-title" style="font-size:15px;color:#c9a24e;">Knight</div>
                    <div class="vr-body" style="font-size:11px;opacity:0.4;margin-top:4px;">Balanced fighter</div>
                </div>
                <div id="char-barbarian" class="vr-card char-card" data-char="barbarian" style="animation-delay:0.25s;">
                    <div style="font-size:44px;margin-bottom:8px;">🪓</div>
                    <div class="vr-title" style="font-size:15px;color:#c9a24e;">Barbarian</div>
                    <div class="vr-body" style="font-size:11px;opacity:0.4;margin-top:4px;">Raw power</div>
                </div>
            </div>
            <button id="btn-start-run" class="vr-btn vr-btn-primary" style="margin-bottom:12px;letter-spacing:2px;">ENTER ARENA</button>
            <button id="btn-back-menu" class="vr-btn vr-btn-ghost">RETURN</button>
        `,Za(this.charSelect,6),e.appendChild(this.charSelect),this.shopScreen=document.createElement("div"),this.shopScreen.id="shop-screen",this.shopScreen.className="vr-screen vr-shop-bg",this.shopScreen.style.justifyContent="flex-start",this.shopScreen.style.overflowY="auto",this.shopScreen.style.padding="0",this.shopScreen.innerHTML=`
            <div style="width:100%;max-width:640px;margin:0 auto;padding:20px 24px 30px;">
                <div style="text-align:center;margin-bottom:24px;padding-top:16px;animation:slideDown 0.4s ease-out;">
                    <h2 class="vr-title" style="font-size:28px;color:#c9a24e;text-shadow:0 2px 6px rgba(0,0,0,0.5);">ARMOURY</h2>
                    <div class="vr-divider"></div>
                    <div id="shop-balance" class="vr-body" style="font-size:13px;opacity:0.5;margin-top:4px;"></div>
                </div>
                <div class="vr-section-title">CHARACTERS</div>
                <div id="shop-characters" style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:28px;justify-content:center;"></div>
                <div class="vr-section-title">BOOSTS</div>
                <div id="shop-boosts" style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:28px;justify-content:center;"></div>
            </div>
            <button id="btn-shop-back" class="vr-btn vr-btn-ghost" style="position:absolute;top:14px;left:14px;z-index:10;">BACK</button>
        `,Za(this.shopScreen,5),e.appendChild(this.shopScreen),this.lbScreen=document.createElement("div"),this.lbScreen.id="lb-screen",this.lbScreen.className="vr-screen vr-glory-bg",this.lbScreen.style.justifyContent="flex-start",this.lbScreen.style.overflowY="auto",this.lbScreen.innerHTML=`
            <div style="width:100%;max-width:480px;margin:0 auto;padding:20px 24px 30px;">
                <div style="text-align:center;margin-bottom:20px;padding-top:16px;animation:slideDown 0.4s ease-out;">
                    <h2 class="vr-title" style="font-size:26px;color:#c9a24e;text-shadow:0 2px 6px rgba(0,0,0,0.5);">HALL OF GLORY</h2>
                    <div class="vr-divider"></div>
                    <div class="vr-body" style="font-size:11px;opacity:0.35;margin-top:4px;">Champions of the Arena</div>
                </div>
                <div style="display:flex;justify-content:center;gap:2px;margin-bottom:16px;font-size:11px;font-weight:800;opacity:0.3;text-transform:uppercase;letter-spacing:1px;" class="vr-body">
                    <span style="width:40px;text-align:center;">Rank</span>
                    <span style="flex:1;">Player</span>
                    <span style="width:80px;text-align:right;">Score</span>
                    <span style="width:60px;text-align:right;">Dist</span>
                </div>
                <div id="lb-entries" style="width:100%;"></div>
            </div>
            <button id="btn-lb-back" class="vr-btn vr-btn-ghost" style="position:absolute;top:14px;left:14px;z-index:10;">BACK</button>
        `,e.appendChild(this.lbScreen),this.gameOver=document.createElement("div"),this.gameOver.id="game-over",this.gameOver.className="vr-screen",this.gameOver.style.background="rgba(10,6,2,0.88)",this.gameOver.innerHTML=`
            <div class="vr-panel" style="padding:32px 40px;text-align:center;max-width:360px;animation:popIn 0.5s ease-out;">
                <h2 id="go-title" class="vr-title" style="font-size:28px;color:#8b4513;margin-bottom:4px;text-shadow:0 0 15px rgba(139,69,19,0.3);">FALLEN IN BATTLE</h2>
                <div class="vr-divider"></div>
                <div id="go-score" class="vr-title" style="font-size:34px;color:#c9a24e;margin:12px 0 4px;">0</div>
                <div id="go-distance" class="vr-body" style="font-size:14px;opacity:0.5;margin-bottom:4px;">0m</div>
                <div id="go-coins" class="vr-body" style="font-size:14px;opacity:0.5;margin-bottom:14px;">🪙 0</div>
                <div id="go-stats" class="vr-body" style="font-size:11px;opacity:0.35;margin-bottom:14px;line-height:1.8;"></div>
                <div id="go-best" class="vr-body" style="font-size:13px;color:#c9a24e;margin-bottom:24px;"></div>
                <button id="btn-retry" class="vr-btn vr-btn-primary" style="width:100%;margin-bottom:10px;letter-spacing:2px;">FIGHT AGAIN</button>
                <button id="btn-write-chain" class="vr-btn vr-btn-secondary" style="width:100%;margin-bottom:6px;display:none;">INSCRIBE ON CHAIN</button>
                <div id="go-chain-status" class="vr-body" style="font-size:11px;opacity:0.4;margin-bottom:10px;display:none;"></div>
                <button id="btn-menu" class="vr-btn vr-btn-ghost" style="width:100%;">RETURN TO CAMP</button>
            </div>
        `,e.appendChild(this.gameOver),this.pauseOverlay=document.createElement("div"),this.pauseOverlay.id="pause-overlay",this.pauseOverlay.className="vr-screen",this.pauseOverlay.style.background="rgba(10,6,2,0.8)",this.pauseOverlay.innerHTML=`
            <div class="vr-panel" style="padding:32px 40px;text-align:center;animation:popIn 0.3s ease-out;">
                <h2 class="vr-title" style="font-size:28px;margin-bottom:8px;color:#c9a24e;">REST</h2>
                <div class="vr-divider" style="margin-bottom:24px;"></div>
                <button id="btn-resume" class="vr-btn vr-btn-primary" style="width:100%;margin-bottom:12px;letter-spacing:2px;">CONTINUE</button>
                <button id="btn-pause-menu" class="vr-btn vr-btn-ghost" style="width:100%;">ABANDON RUN</button>
            </div>
        `,e.appendChild(this.pauseOverlay),this.reviveOverlay=document.createElement("div"),this.reviveOverlay.id="revive-overlay",this.reviveOverlay.className="vr-screen",this.reviveOverlay.style.background="rgba(10,6,2,0.85)",this.reviveOverlay.innerHTML=`
            <div class="vr-panel" style="padding:32px 40px;text-align:center;animation:popIn 0.3s ease-out;">
                <h2 class="vr-title" style="font-size:24px;margin-bottom:6px;color:#c9a24e;">RISE AGAIN?</h2>
                <div class="vr-divider"></div>
                <div id="revive-timer" class="vr-title" style="font-size:44px;color:#c9a24e;margin:16px 0;">3</div>
                <button id="btn-revive" class="vr-btn" style="width:100%;padding:14px;font-size:16px;background:linear-gradient(180deg,#5a7a4a 0%,#3a5a2a 100%);border:2px solid #7a9a6a;box-shadow:0 4px 16px rgba(90,122,74,0.4);margin-bottom:10px;font-family:'Cinzel',serif;font-weight:700;color:#e8dcc8;">REVIVE</button>
                <button id="btn-skip-revive" class="vr-btn vr-btn-ghost" style="width:100%;">ACCEPT FATE</button>
            </div>
        `,e.appendChild(this.reviveOverlay),this.optionsScreen=document.createElement("div"),this.optionsScreen.id="options-screen",this.optionsScreen.className="vr-screen",this.optionsScreen.style.justifyContent="flex-start",this.optionsScreen.style.overflowY="auto",this.optionsScreen.style.padding="0",this.optionsScreen.innerHTML=`
            <button id="btn-options-back" class="vr-btn vr-btn-ghost" style="position:absolute;top:14px;left:14px;z-index:10;">BACK</button>
            <div style="width:100%;max-width:480px;margin:0 auto;padding:60px 24px 30px;">
                <div style="text-align:center;margin-bottom:24px;animation:slideDown 0.4s ease-out;">
                    <h2 class="vr-title" style="font-size:28px;background:linear-gradient(135deg,#c9a24e,#dbb86a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">OPTIONS</h2>
                    <div class="vr-divider"></div>
                </div>

                <!-- Music / Sound -->
                <div class="vr-section-title">MUSIC & SOUND</div>
                <div class="vr-panel" style="padding:20px;margin-bottom:20px;">
                    <div style="margin-bottom:16px;">
                        <div class="vr-body" style="font-size:13px;font-weight:700;margin-bottom:8px;display:flex;justify-content:space-between;">
                            <span>Master Volume</span>
                            <span id="options-vol-label" style="color:#c9a24e;">100</span>
                        </div>
                        <input id="options-volume" type="range" min="0" max="100" value="100" style="width:100%;accent-color:#c9a24e;cursor:pointer;">
                    </div>
                    <div style="display:flex;gap:12px;">
                        <button id="options-music-toggle" class="vr-btn vr-btn-gold" style="flex:1;padding:10px;font-size:12px;">MUSIC: ON</button>
                        <button id="options-sfx-toggle" class="vr-btn vr-btn-gold" style="flex:1;padding:10px;font-size:12px;">SFX: ON</button>
                    </div>
                </div>

                <!-- Controls -->
                <div class="vr-section-title">CONTROLS</div>
                <div class="vr-panel" style="padding:20px;margin-bottom:20px;">
                    <div class="vr-body" style="font-size:13px;line-height:2.2;font-weight:700;">
                        <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(194,158,80,0.08);padding:4px 0;">
                            <span style="color:#c9a24e;">Q/E or Left/Right</span><span style="opacity:0.5;">Change Lane</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(194,158,80,0.08);padding:4px 0;">
                            <span style="color:#c9a24e;">W or Up</span><span style="opacity:0.5;">Jump</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(194,158,80,0.08);padding:4px 0;">
                            <span style="color:#c9a24e;">S or Down</span><span style="opacity:0.5;">Slide</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(194,158,80,0.08);padding:4px 0;">
                            <span style="color:#c9a24e;">F</span><span style="opacity:0.5;">Strike / Break Chests</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(194,158,80,0.08);padding:4px 0;">
                            <span style="color:#c9a24e;">R</span><span style="opacity:0.5;">Ability</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(194,158,80,0.08);padding:4px 0;">
                            <span style="color:#c9a24e;">Esc</span><span style="opacity:0.5;">Pause</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;padding:4px 0;">
                            <span style="color:#c9a24e;">Tap / Swipe</span><span style="opacity:0.5;">Mobile Controls</span>
                        </div>
                    </div>
                </div>

                <!-- Graphics -->
                <div class="vr-section-title">GRAPHICS</div>
                <div class="vr-panel" style="padding:20px;margin-bottom:20px;">
                    <div class="vr-body" style="font-size:13px;font-weight:700;opacity:0.5;">Quality: High</div>
                </div>
            </div>
        `,e.appendChild(this.optionsScreen),this._initOptions(),document.getElementById("btn-play").addEventListener("click",()=>this.showCharSelect()),document.getElementById("btn-retry").addEventListener("click",()=>this._emit("play")),document.getElementById("btn-start-run").addEventListener("click",()=>this._emit("play")),document.getElementById("btn-back-menu").addEventListener("click",()=>this.showMenu()),document.querySelectorAll(".char-card").forEach(t=>{t.addEventListener("click",()=>{this.selectedCharacter=t.dataset.char,document.querySelectorAll(".char-card").forEach(i=>{i.classList.toggle("vr-card-selected",i===t)})})}),document.getElementById("btn-menu").addEventListener("click",()=>this._emit("menu")),document.getElementById("btn-pause").addEventListener("click",()=>this._emit("pause")),document.getElementById("btn-resume").addEventListener("click",()=>this._emit("resume")),document.getElementById("btn-pause-menu").addEventListener("click",()=>this._emit("menu")),document.getElementById("btn-revive").addEventListener("click",()=>this._emit("revive")),document.getElementById("btn-skip-revive").addEventListener("click",()=>{this.hideRevivePrompt(),this._emit("skip-revive")}),document.getElementById("btn-shop").addEventListener("click",()=>this._emit("show-shop")),document.getElementById("btn-leaderboard").addEventListener("click",()=>this._emit("show-leaderboard")),document.getElementById("btn-forge").addEventListener("click",()=>this._emit("show-forge")),document.getElementById("btn-vanity").addEventListener("click",()=>this._emit("show-vanity")),document.getElementById("btn-campaign").addEventListener("click",()=>this._emit("show-campaign")),document.getElementById("btn-heroes").addEventListener("click",()=>this._emit("show-heroes")),document.getElementById("btn-shop-back").addEventListener("click",()=>this.showMenu()),document.getElementById("btn-lb-back").addEventListener("click",()=>this.showMenu()),document.getElementById("btn-connect-wallet").addEventListener("click",()=>this._emit("connect-wallet")),document.getElementById("btn-write-chain").addEventListener("click",()=>this._emit("write-chain")),document.getElementById("btn-daily").addEventListener("click",()=>this._emit("show-daily")),document.getElementById("btn-fullscreen").addEventListener("click",()=>this._toggleFullscreen()),document.getElementById("btn-options").addEventListener("click",()=>this.showOptions()),document.getElementById("btn-options-back").addEventListener("click",()=>this.showMenu()),document.getElementById("options-volume").addEventListener("input",t=>{const i=parseInt(t.target.value,10);localStorage.setItem("vr_volume",String(i)),document.getElementById("options-vol-label").textContent=i}),document.getElementById("options-music-toggle").addEventListener("click",()=>{const t=localStorage.getItem("vr_music")!=="off";localStorage.setItem("vr_music",t?"off":"on"),this._updateOptionsToggles()}),document.getElementById("options-sfx-toggle").addEventListener("click",()=>{const t=localStorage.getItem("vr_sfx")!=="off";localStorage.setItem("vr_sfx",t?"off":"on"),this._updateOptionsToggles()})}_hideAll(){this.menu.style.display="none",this.charSelect.style.display="none",this.shopScreen.style.display="none",this.lbScreen.style.display="none",this.hud.style.display="none",this.gameOver.style.display="none",this.pauseOverlay.style.display="none",this.reviveOverlay.style.display="none",this.optionsScreen.style.display="none",this._campaignUI&&this._campaignUI.hide(),this._heroesUI&&this._heroesUI.hide(),this._equipmentUI&&this._equipmentUI.hide(),this._cosmeticsUI&&this._cosmeticsUI.hide(),this._simonOverlay&&(this._simonOverlay.style.display="none"),this._miniGameBar&&(this._miniGameBar.style.display="none"),this.hideTutorialStep()}showMenu(){this._hideAll(),this.menu.style.display="flex";const e=parseInt(localStorage.getItem("vr_coins")||"0",10);document.getElementById("menu-coin-count").textContent=e.toLocaleString()}showOptions(){this._hideAll(),this.optionsScreen.style.display="flex",this._updateOptionsToggles();const e=parseInt(localStorage.getItem("vr_volume")||"100",10);document.getElementById("options-volume").value=e,document.getElementById("options-vol-label").textContent=e}showDailyChallengesDirectly(e,t){this._hideAll(),this._campaignUI||(this._campaignUI=new xh(this.container,e,t),this.container.addEventListener("campaign-start",i=>this._emit("campaign-start",i.detail)),this.container.addEventListener("campaign-back",()=>this._emit("campaign-back")),this.container.addEventListener("challenge-claim",i=>this._emit("challenge-claim",i.detail)),this.container.addEventListener("challenge-bonus-claim",()=>this._emit("challenge-bonus-claim"))),this._campaignUI.showDailyChallenges()}_toggleFullscreen(){document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}_initOptions(){localStorage.getItem("vr_volume")===null&&localStorage.setItem("vr_volume","100"),localStorage.getItem("vr_music")===null&&localStorage.setItem("vr_music","on"),localStorage.getItem("vr_sfx")===null&&localStorage.setItem("vr_sfx","on")}_updateOptionsToggles(){const e=localStorage.getItem("vr_music")!=="off",t=localStorage.getItem("vr_sfx")!=="off",i=document.getElementById("options-music-toggle"),n=document.getElementById("options-sfx-toggle");i&&(i.textContent=e?"MUSIC: ON":"MUSIC: OFF",i.className=`vr-btn ${e?"vr-btn-gold":"vr-btn-ghost"}`,i.style.cssText="flex:1;padding:10px;font-size:12px;"),n&&(n.textContent=t?"SFX: ON":"SFX: OFF",n.className=`vr-btn ${t?"vr-btn-gold":"vr-btn-ghost"}`,n.style.cssText="flex:1;padding:10px;font-size:12px;")}showCampaignMap(e,t){this._hideAll(),this._campaignUI||(this._campaignUI=new xh(this.container,e,t),this.container.addEventListener("campaign-start",i=>this._emit("campaign-start",i.detail)),this.container.addEventListener("campaign-back",()=>this._emit("campaign-back")),this.container.addEventListener("challenge-claim",i=>this._emit("challenge-claim",i.detail)),this.container.addEventListener("challenge-bonus-claim",()=>this._emit("challenge-bonus-claim"))),this._campaignUI.refresh(),this._campaignUI.show()}refreshCampaignUI(){this._campaignUI&&this._campaignUI.refresh()}showHeroesScreen(e,t){this._hideAll(),this._heroesUI||(this._heroesUI=new yy(this.container,e,t),this.container.addEventListener("heroes-back",()=>this._emit("heroes-back")),this.container.addEventListener("upgrade-purchased",()=>this._emit("upgrade-purchased")),this.container.addEventListener("reward-claimed",i=>this._emit("reward-claimed",i.detail))),this._heroesUI.show()}refreshHeroesUI(){this._heroesUI&&this._heroesUI.refresh()}showCharSelect(){this._hideAll(),this.charSelect.style.display="flex"}showShop(e,t){this._hideAll(),this.shopScreen.style.display="flex";const i=e.getCoins(),n=t&&t.connected?` | 🔮 ${t.pyrBalance.toFixed(2)} PYR`:"";document.getElementById("shop-balance").innerHTML=`🪙 <strong>${i.toLocaleString()}</strong> coins${n}`;const s=document.getElementById("shop-characters");s.innerHTML="";for(const o of e.getCharacters()){const l=e.isUnlocked(o.id),c=document.createElement("div");c.className=`vr-card ${l?"vr-card-owned":o.currency==="pyr"?"vr-card-pyr":""}`,c.style.animationDelay=s.children.length*.08+"s",c.innerHTML=`
                <div style="font-size:40px;margin-bottom:8px;">${o.emoji}</div>
                <div class="vr-body" style="font-size:15px;font-weight:800;">${o.name}</div>
                <div class="vr-body" style="font-size:11px;opacity:0.4;margin:4px 0;font-weight:700;">${o.desc}</div>
                ${l?'<span class="vr-badge vr-badge-owned">OWNED</span>':`<span class="vr-badge ${o.currency==="pyr"?"vr-badge-pyr":"vr-badge-coins"}">${o.currency==="pyr"?"🔮 "+o.price+" PYR":"🪙 "+o.price}</span>`}
            `,l||c.addEventListener("click",()=>this._emit("shop-buy",{itemId:o.id,currency:o.currency})),s.appendChild(c)}const a=document.getElementById("shop-boosts");a.innerHTML="";for(const o of e.getBoosts()){const l=e.getInventoryCount(o.id),c=document.createElement("div");c.className=`vr-card ${o.currency==="pyr"?"vr-card-pyr":""}`,c.style.animationDelay=a.children.length*.08+.3+"s",c.innerHTML=`
                <div style="font-size:36px;margin-bottom:8px;">${o.emoji}</div>
                <div class="vr-body" style="font-size:14px;font-weight:800;">${o.name}</div>
                <div class="vr-body" style="font-size:11px;opacity:0.4;margin:4px 0;font-weight:700;">${o.desc}</div>
                <span class="vr-badge ${o.currency==="pyr"?"vr-badge-pyr":"vr-badge-coins"}">${o.currency==="pyr"?"🔮 "+o.price+" PYR":"🪙 "+o.price}</span>
                ${l>0?`<div class="vr-body" style="font-size:10px;color:#44ee66;margin-top:4px;font-weight:800;">x${l} owned</div>`:""}
            `,c.addEventListener("click",()=>this._emit("shop-buy",{itemId:o.id,currency:o.currency})),a.appendChild(c)}}showLeaderboard(e,t){this._hideAll(),this.lbScreen.style.display="flex";const i=document.getElementById("lb-entries");if(i.innerHTML="",e.length===0){i.innerHTML=`
                <div style="text-align:center;padding:40px 20px;" class="vr-body">
                    <div style="font-size:48px;margin-bottom:12px;">🏆</div>
                    <div style="font-size:15px;font-weight:800;opacity:0.5;">No scores yet</div>
                    <div style="font-size:12px;opacity:0.3;margin-top:4px;font-weight:700;">Play a run to set the first record!</div>
                </div>`;return}e.forEach((n,s)=>{const a=document.createElement("div"),o=s===0?"🥇":s===1?"🥈":s===2?"🥉":`<span style="opacity:0.4;font-size:13px;">${s+1}</span>`,l=n.txHash?' <span style="font-size:11px;">⛓️</span>':"",c=s<3;a.className="vr-body",a.style.cssText=`display:flex;align-items:center;padding:10px 14px;margin-bottom:6px;border-radius:12px;font-weight:700;animation:slideUp 0.3s ease-out ${s*.05}s both;background:${c?"rgba(194,158,80,0.06)":"rgba(42,30,18,0.3)"};border:1px solid ${c?"rgba(194,158,80,0.12)":"rgba(194,158,80,0.06)"};`,a.innerHTML=`
                <div style="width:36px;text-align:center;font-size:18px;">${o}</div>
                <div style="flex:1;overflow:hidden;">
                    <div style="font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${n.name}${l}${t&&n.isLocal?` <span style="font-size:10px;color:#c0a0e0;font-style:italic;">${t}</span>`:""}</div>
                    <div style="font-size:10px;opacity:0.35;">${n.character||""}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:14px;color:#c9a24e;">${n.score.toLocaleString()}</div>
                    <div style="font-size:10px;opacity:0.35;">${n.distance}m</div>
                </div>
            `,i.appendChild(a)})}updateWalletUI(e,t,i){const n=document.getElementById("btn-connect-wallet"),s=document.getElementById("wallet-info");if(e){n.textContent="Connected",n.style.background="linear-gradient(180deg,#5a7a4a,#3a5a2a)",n.style.borderColor="#7a9a6a",s.style.display="flex";const a=document.getElementById("wallet-address");a&&(a.textContent=t),document.getElementById("wallet-pyr").textContent=i.toFixed(2)+" PYR"}else n.textContent="Connect Wallet",n.style.background="",s.style.display="none"}showChainWriteButton(e){document.getElementById("btn-write-chain").style.display=e?"block":"none"}updateChainStatus(e){const t=document.getElementById("go-chain-status");t.textContent=e,t.style.display=e?"block":"none"}showHUD(){this._hideAll(),this.hud.style.display="block";const e=document.getElementById("hud-campaign-timer");e&&(e.style.display="none")}showGameOver(e,t,i,n,s={},a=null,o=[],l=[],c=!1){this.hud.style.display="none",this.reviveOverlay.style.display="none",this.gameOver.style.display="flex";const h=document.getElementById("go-title");h&&(c?(h.textContent="STAGE COMPLETE!",h.style.color="#6aaa4a",h.style.textShadow="0 0 15px rgba(106,170,74,0.4)"):(h.textContent="FALLEN IN BATTLE",h.style.color="#8b4513",h.style.textShadow="0 0 15px rgba(139,69,19,0.3)")),document.getElementById("go-score").textContent=e.toLocaleString(),document.getElementById("go-distance").textContent=Math.floor(t)+"m",document.getElementById("go-coins").textContent="🪙 "+i;const d=document.getElementById("go-stats"),u=[];s.maxCombo>0&&u.push(`Max Combo: ${s.maxCombo}`),s.obstaclesDodged>0&&u.push(`Dodged: ${s.obstaclesDodged}`),s.obstaclesSmashed>0&&u.push(`Smashed: ${s.obstaclesSmashed}`),s.maxSpeed>0&&u.push(`Top Speed: ${s.maxSpeed}`),d.innerHTML=u.join(" &middot; ");const p=document.getElementById("go-best");if(a){const _="⭐".repeat(a.stars)+"☆".repeat(3-a.stars);p.innerHTML=`<div style="font-size:28px;margin-bottom:4px;">${_}</div>`+(a.isNew?'<span style="color:#c9a24e;">STAGE COMPLETE!</span>':a.newRecord?'<span style="color:#c9a24e;">NEW RECORD!</span>':`<span style="opacity:0.5;">Best: ${a.stars}/3 ⭐</span>`),p.style.color="#fff"}else e>=n?(p.textContent="NEW RECORD",p.style.color="#c9a24e"):(p.textContent="Best: "+n.toLocaleString(),p.style.color="rgba(194,158,80,0.4)");if(o&&o.length>0){const _=document.createElement("div");_.style.cssText="margin-top:8px;font-size:13px;color:#00ff88;animation:slideUp 0.3s ease-out;",_.className="vr-body",_.textContent=`📋 ${o.length} challenge${o.length>1?"s":""} completed!`,p.parentElement.insertBefore(_,p.nextSibling),setTimeout(()=>_.remove(),1e4)}const g=Math.floor(t/100)+Math.floor(e/500);if(g>0){const _=document.createElement("div");_.style.cssText="margin-top:4px;font-size:12px;color:#c9a24e;animation:slideUp 0.3s ease-out 0.1s both;",_.className="vr-body",_.textContent=`✨ +${g} Star Dust`,p.parentElement.insertBefore(_,p.nextSibling),setTimeout(()=>_.remove(),1e4)}l&&l.length>0&&this._showLootDrop(l,p.parentElement)}showPause(){this.pauseOverlay.style.display="flex"}showRevivePrompt(){this.hud.style.display="none",this.reviveOverlay.style.display="flex",document.getElementById("revive-timer").textContent="3"}updateReviveTimer(e){document.getElementById("revive-timer").textContent=Math.ceil(Math.max(0,e))}hideRevivePrompt(){this.reviveOverlay.style.display="none"}updateScore(e){document.getElementById("hud-score").textContent=e.toLocaleString()}updateDistance(e){document.getElementById("hud-distance").textContent=Math.floor(e)+"m"}updateCoins(e){document.getElementById("hud-coins").textContent="🪙 "+e}updateCombo(e,t){const i=document.getElementById("hud-combo");e>1?(i.style.display="block",i.textContent=`COMBO x${t.toFixed(1)}`):i.style.display="none"}updateHealth(e,t){const i=e/t*100,n=document.getElementById("health-bar-fill"),s=document.getElementById("health-bar-bg");n&&(n.style.width=i+"%",i>60?(n.style.background="linear-gradient(180deg,#7dcc5a 0%,#4a8a2a 100%)",s&&(s.style.animation="none")):i>30?(n.style.background="linear-gradient(180deg,#e8b830 0%,#b08020 100%)",s&&(s.style.animation="none")):(n.style.background="linear-gradient(180deg,#ee4444 0%,#aa2222 100%)",s&&(s.style.animation="pulse 0.8s infinite")))}updateCampaignTimer(e){const t=document.getElementById("hud-campaign-timer");if(!t)return;if(e<=0){t.style.display="none";return}t.style.display="block";const i=Math.floor(e/60),n=Math.floor(e%60);t.textContent=`${i}:${n.toString().padStart(2,"0")}`,e<=30?(t.style.color="#cc3333",t.style.animation="pulse 0.8s infinite"):e<=60?(t.style.color="#dba030",t.style.animation="none"):(t.style.color="#c9a24e",t.style.animation="none")}showPowerUp(e){const t=document.getElementById("hud-powerup");t.textContent=e.toUpperCase(),t.style.display="block",t.style.opacity="1",setTimeout(()=>{t.style.opacity="0"},1200),setTimeout(()=>{t.style.display="none"},1500)}showMilestone(e){const t=document.getElementById("hud-powerup");t.textContent=`${e}m!`,t.style.color="#c9a24e",t.style.textShadow="0 0 15px rgba(194,158,80,0.5), 0 0 30px rgba(194,158,80,0.2)",t.style.fontSize="30px",t.style.display="block",t.style.opacity="1",setTimeout(()=>{t.style.opacity="0"},1500),setTimeout(()=>{t.style.display="none",t.style.color="#c9a24e",t.style.textShadow="0 0 15px rgba(194,158,80,0.4)",t.style.fontSize="24px"},1800)}showNearMiss(){const e=document.getElementById("hud-nearmiss");e.style.display="block",e.style.opacity="1",setTimeout(()=>{e.style.opacity="0"},600),setTimeout(()=>{e.style.display="none"},800)}showStrikeEffect(){this._strikeEl&&this._strikeEl.remove();const e=document.createElement("div");e.className="vr-title",e.style.cssText="position:absolute;bottom:80px;left:50%;transform:translateX(-50%);pointer-events:none;z-index:18;text-align:center;animation:strikeFlash 1s ease-out forwards;",e.innerHTML='<div style="font-size:16px;color:#c9a24e;text-shadow:0 0 10px rgba(194,158,80,0.6);letter-spacing:3px;padding:6px 20px;border:1px solid rgba(194,158,80,0.3);border-radius:6px;background:rgba(42,30,18,0.5);backdrop-filter:blur(2px);">⚔️ STRIKE</div>',this.hud.parentElement.appendChild(e),this._strikeEl=e,setTimeout(()=>{e.remove(),this._strikeEl=null},1e3)}showChestReward(e){const t=document.createElement("div");t.className="vr-title",t.style.cssText="position:absolute;top:45%;left:50%;transform:translate(-50%,0);font-size:22px;color:#c9a24e;text-shadow:0 0 12px rgba(194,158,80,0.6),0 0 24px rgba(194,158,80,0.2);text-align:center;pointer-events:none;z-index:20;animation:chestRewardFloat 1.2s ease-out forwards;",t.innerHTML=`<div>+${e} &#x1FA99;</div><div style="font-size:14px;color:#8b6914;margin-top:2px;">+${50+e} Score</div>`,this.hud.parentElement.appendChild(t),setTimeout(()=>t.remove(),1200)}flashDamage(){const e=document.getElementById("hud-damage");e.style.borderColor="rgba(232, 76, 61, 0.4)",setTimeout(()=>{e.style.borderColor="transparent"},100)}showBossWarning(){const e=document.createElement("div");e.className="vr-title",e.style.cssText="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);font-size:42px;color:#8b2020;text-shadow:0 0 20px rgba(139,32,32,0.6),0 0 40px rgba(139,32,32,0.2);text-align:center;pointer-events:none;z-index:20;animation:bossWarn 2.5s ease-out forwards;",e.textContent="TITAN APPROACHES",this.hud.parentElement.appendChild(e),setTimeout(()=>e.remove(),2500),this._bossBar||(this._bossBar=document.createElement("div"),this._bossBar.className="vr-body",this._bossBar.style.cssText="position:absolute;top:65px;left:50%;transform:translateX(-50%);width:360px;text-align:center;z-index:15;",this._bossBar.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;"><div style="font-size:14px;font-weight:800;color:#ff4444;text-shadow:0 0 10px rgba(255,0,0,0.5);letter-spacing:2px;">BOSS ENCOUNTER</div><div id="boss-wave-text" style="font-size:13px;font-weight:800;color:#ff8844;text-shadow:0 0 8px rgba(255,136,68,0.5);letter-spacing:1px;">WAVE 1/4</div></div><div style="width:100%;height:10px;background:rgba(255,0,0,0.15);border-radius:5px;overflow:hidden;border:1px solid rgba(255,68,68,0.3);"><div id="boss-bar-fill" style="width:100%;height:100%;background:linear-gradient(90deg,#ff4444,#ff8800,#8b6914);border-radius:5px;transition:width 0.1s;"></div></div>',this.hud.parentElement.appendChild(this._bossBar)),this._bossBar.style.display="block"}updateBossTimer(e,t,i,n){const s=document.getElementById("boss-bar-fill");s&&(s.style.width=Math.max(0,e/t*100)+"%");const a=document.getElementById("boss-wave-text");if(a&&typeof i=="number"&&typeof n=="number"){const o=Math.min(i+1,n);a.textContent=`WAVE ${o}/${n}`}}showBossDefeated(){this._bossBar&&(this._bossBar.style.display="none");const e=document.createElement("div");e.className="vr-title",e.style.cssText="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;z-index:20;animation:bossDefeat 2s ease-out forwards;",e.innerHTML=`<div style="font-size:42px;color:#c9a24e;text-shadow:0 0 30px rgba(194,158,80,0.8);">BOSS DEFEATED!</div><div style="font-size:22px;color:#8b6914;margin-top:8px;font-family:'Philosopher',sans-serif;font-weight:800;">+500 Score +10 Gems</div>`,this.hud.parentElement.appendChild(e),setTimeout(()=>e.remove(),2e3)}hideBossUI(){this._bossBar&&(this._bossBar.style.display="none")}showBossVignette(){this._bossVignette||(this._bossVignette=document.createElement("div"),this._bossVignette.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:10;background:radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(20,0,0,0.4) 75%, rgba(10,0,0,0.7) 100%);transition:opacity 0.5s;opacity:0;",this.hud.parentElement.appendChild(this._bossVignette),requestAnimationFrame(()=>{this._bossVignette&&(this._bossVignette.style.opacity="1")}))}hideBossVignette(){if(!this._bossVignette)return;this._bossVignette.style.opacity="0";const e=this._bossVignette;setTimeout(()=>{e.remove()},500),this._bossVignette=null}showMiniGameStart(e,t,i){const n=document.createElement("div");n.className="vr-title",n.style.cssText="position:absolute;top:25%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;z-index:20;animation:bossWarn 2s ease-out forwards;",n.innerHTML=`<div style="font-size:48px;">${t}</div><div style="font-size:28px;color:#c9a24e;text-shadow:0 0 20px rgba(194,158,80,0.6);margin-top:8px;">${e}</div><div style="font-size:14px;opacity:0.6;margin-top:4px;" class="vr-body">${i}</div>`,this.hud.parentElement.appendChild(n),setTimeout(()=>n.remove(),2e3),this._miniGameBar||(this._miniGameBar=document.createElement("div"),this._miniGameBar.className="vr-body",this._miniGameBar.style.cssText="position:absolute;top:70px;left:50%;transform:translateX(-50%);width:300px;text-align:center;z-index:15;",this._miniGameBar.innerHTML=`
                <div id="mg-title" style="font-size:13px;font-weight:800;color:#c9a24e;margin-bottom:4px;letter-spacing:1px;text-shadow:0 0 10px rgba(194,158,80,0.4);"></div>
                <div style="width:100%;height:6px;background:rgba(194,158,80,0.15);border-radius:3px;overflow:hidden;">
                    <div id="mg-bar-fill" style="width:100%;height:100%;background:linear-gradient(90deg,#c9a24e,#8b6914);border-radius:3px;transition:width 0.15s;"></div>
                </div>
                <div id="mg-score" style="font-size:11px;color:#c9a24e;margin-top:3px;font-weight:800;"></div>
            `,this.hud.parentElement.appendChild(this._miniGameBar)),this._miniGameBar.style.display="block"}updateMiniGameHUD(e){if(!e||!this._miniGameBar)return;const t=document.getElementById("mg-title"),i=document.getElementById("mg-bar-fill"),n=document.getElementById("mg-score");t&&(t.textContent=`${e.icon} ${e.name} — ${Math.ceil(e.timer)}s`),i&&(i.style.width=Math.max(0,e.timer/e.totalTime*100)+"%"),n&&(n.textContent=`Score: ${e.score}`),e.id==="simon_says"&&e.simonAction&&this._showSimonOverlay(e.simonAction,e.feedback)}showSimonPrompt(e,t,i){}_showSimonOverlay(e,t){this._simonOverlay||(this._simonOverlay=document.createElement("div"),this._simonOverlay.style.cssText="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;z-index:18;",this.hud.parentElement.appendChild(this._simonOverlay));const i={left:"⬅️",right:"➡️",jump:"⬆️",slide:"⬇️"},n={left:"LEFT",right:"RIGHT",jump:"JUMP",slide:"SLIDE"},s=t?t.correct?"rgba(0,255,100,0.2)":"rgba(255,50,50,0.2)":"rgba(0,0,0,0.3)";this._simonOverlay.innerHTML=`
            <div style="background:${s};border-radius:20px;padding:16px 32px;backdrop-filter:blur(4px);">
                <div style="font-size:48px;">${i[e]||"❓"}</div>
                <div class="vr-title" style="font-size:20px;color:#c9a24e;margin-top:4px;">${n[e]||e}</div>
            </div>
        `,this._simonOverlay.style.display="block"}showMiniGameEnd(e,t,i,n){this._miniGameBar&&(this._miniGameBar.style.display="none"),this._simonOverlay&&(this._simonOverlay.style.display="none");const s=document.createElement("div");s.className="vr-title",s.style.cssText="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;z-index:20;animation:bossDefeat 2.5s ease-out forwards;",s.innerHTML=`
            <div style="font-size:28px;color:#c9a24e;text-shadow:0 0 20px rgba(194,158,80,0.6);">${e} COMPLETE!</div>
            <div style="font-size:16px;margin-top:8px;" class="vr-body">
                <span style="color:#c9a24e;">Score: ${t}</span>
                <span style="margin:0 8px;opacity:0.3;">|</span>
                <span style="color:#c9a24e;">🪙 +${i}</span>
                <span style="margin:0 8px;opacity:0.3;">|</span>
                <span style="color:#c9a24e;">✨ +${n}</span>
            </div>
        `,this.hud.parentElement.appendChild(s),setTimeout(()=>s.remove(),2500)}showBiomeAlert(e,t){const i=document.createElement("div");i.className="vr-title",i.style.cssText=`position:absolute;top:35%;left:50%;transform:translate(-50%,-50%);font-size:24px;color:${t};text-shadow:0 0 20px ${t};text-align:center;pointer-events:none;z-index:19;animation:bossWarn 1.5s ease-out forwards;`,i.textContent=e,this.hud.parentElement.appendChild(i),setTimeout(()=>i.remove(),1500)}updateAirMeter(e){this._airMeter||(this._airMeter=document.createElement("div"),this._airMeter.className="vr-body",this._airMeter.style.cssText="position:absolute;bottom:20px;right:20px;width:120px;z-index:15;",this._airMeter.innerHTML=`
                <div style="font-size:11px;font-weight:800;color:#44bbff;margin-bottom:3px;text-align:center;">🫧 AIR</div>
                <div style="width:100%;height:8px;background:rgba(68,187,255,0.15);border-radius:4px;overflow:hidden;">
                    <div id="air-bar-fill" style="width:100%;height:100%;background:linear-gradient(90deg,#44bbff,#2288cc);border-radius:4px;transition:width 0.2s;"></div>
                </div>
            `,this.hud.parentElement.appendChild(this._airMeter)),this._airMeter.style.display="block";const t=document.getElementById("air-bar-fill");t&&(t.style.width=Math.max(0,e)+"%",t.style.background=e<30?"linear-gradient(90deg,#ff4444,#cc2222)":"linear-gradient(90deg,#44bbff,#2288cc)")}showAbilityActivated(e){const t=document.createElement("div");t.textContent=e.toUpperCase(),t.style.cssText="position:absolute;top:30%;left:50%;transform:translateX(-50%);font-family:Cinzel,serif;font-size:24px;font-weight:900;color:#c9a24e;text-shadow:0 0 20px rgba(194,158,80,0.6),0 2px 4px rgba(0,0,0,0.8);pointer-events:none;z-index:50;animation:strikeFlash 1.2s ease-out forwards;",this.hud.appendChild(t),setTimeout(()=>t.remove(),1200)}showAbilityHUD(e,t){const i=document.getElementById("hud-ability");i.style.display="block",document.getElementById("hud-ability-icon").textContent=e,document.getElementById("hud-ability-label").textContent=t,document.getElementById("hud-ability-cd").style.height="0%"}updateAbilityCooldown(e){var n;const t=document.getElementById("hud-ability-cd");t.style.height=Math.min(100,e*100)+"%";const i=(n=document.getElementById("hud-ability"))==null?void 0:n.querySelector("div");i&&(i.style.borderColor=e<=0?"rgba(194,158,80,0.6)":"rgba(255,180,80,0.15)")}flashAbilityActive(){const e=document.getElementById("hud-ability");if(!e)return;const t=e.querySelector("div");t&&(t.style.borderColor="#c9a24e",t.style.boxShadow="0 0 20px rgba(194,158,80,0.5)")}resetAbilityFlash(){const e=document.getElementById("hud-ability");if(!e)return;const t=e.querySelector("div");t&&(t.style.boxShadow="none")}showEquipmentScreen(e){this._hideAll(),this._equipmentUI||(this._equipmentUI=new xy(this.container,e),this.container.addEventListener("equipment-back",()=>this._emit("equipment-back")),this.container.addEventListener("equipment-changed",()=>this._emit("equipment-changed"))),this._equipmentUI.show()}showCosmeticsScreen(e){this._hideAll(),this._cosmeticsUI||(this._cosmeticsUI=new by(this.container,e),this.container.addEventListener("cosmetics-back",()=>this._emit("cosmetics-back")),this.container.addEventListener("cosmetic-equipped",t=>this._emit("cosmetic-equipped",t.detail))),this._cosmeticsUI.show()}_showLootDrop(e,t){const i=document.createElement("div");i.style.cssText="margin-top:12px;text-align:center;",i.innerHTML=`
            <div class="vr-section-title" style="font-size:11px;margin-bottom:8px;animation:slideUp 0.3s ease-out 0.3s both;">LOOT FOUND</div>
            <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;"></div>
        `;const n=i.querySelector("div:last-child");e.forEach((s,a)=>{var h,d;const o=((h=di[s.rarity])==null?void 0:h.color)||"#a0a0a0",l=((d=di[s.rarity])==null?void 0:d.label)||s.rarity,c=document.createElement("div");c.style.cssText=`
                padding:10px 14px;border-radius:8px;text-align:center;
                background:rgba(42,30,18,0.7);border:2px solid ${o};
                box-shadow:0 0 15px ${o}40, 0 0 30px ${o}15;
                animation:popIn 0.5s ease-out ${.4+a*.15}s both;
                min-width:80px;
            `,c.innerHTML=`
                <div style="font-size:28px;margin-bottom:4px;">${s.icon}</div>
                <div class="vr-title" style="font-size:10px;color:${o};line-height:1.2;">${s.name}</div>
                <div class="vr-body" style="font-size:9px;opacity:0.4;margin-top:2px;">${l}</div>
            `,n.appendChild(c)}),t.appendChild(i),setTimeout(()=>i.remove(),15e3)}showTutorialStep(e,t,i){this.hideTutorialStep();const n=document.createElement("div");n.id="tutorial-overlay",n.style.cssText=`
            position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;
            background:rgba(10,6,2,0.7);z-index:50;pointer-events:auto;
            animation:popIn 0.35s ease-out;
        `,n.innerHTML=`
            <div class="vr-panel" style="padding:28px 40px;text-align:center;max-width:400px;position:relative;">
                <div style="font-size:52px;margin-bottom:12px;animation:pulse 1.8s infinite;">${i}</div>
                <div class="vr-title" style="font-size:18px;color:#c9a24e;line-height:1.5;letter-spacing:1px;text-shadow:0 2px 6px rgba(0,0,0,0.5);">${t}</div>
                <div class="vr-divider" style="margin:14px auto 10px;"></div>
                <div class="vr-body" style="font-size:11px;opacity:0.35;animation:pulse 2s infinite 0.5s;">Perform the action to continue...</div>
                <button id="btn-skip-tutorial" class="vr-btn vr-btn-ghost" style="margin-top:16px;font-size:11px;padding:8px 20px;pointer-events:auto;">SKIP TUTORIAL</button>
            </div>
        `,this.container.appendChild(n),this._tutorialOverlay=n,document.getElementById("btn-skip-tutorial").addEventListener("click",()=>{this._emit("skip-tutorial")})}hideTutorialStep(){this._tutorialOverlay&&(this._tutorialOverlay.remove(),this._tutorialOverlay=null)}on(e,t){this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t)}_emit(e,t){(this._callbacks[e]||[]).forEach(i=>i(t))}}function wh(r,e){if(e===Cu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===qo||e===Yh){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===qo)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class My extends Rn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new Gy(t)})}load(e,t,i,n){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Xs.extractUrlBase(e);a=Xs.resolveURL(c,this.path)}else a=Xs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ra(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Nd){try{a[He.KHR_BINARY_GLTF]=new Vy(e)}catch(d){n&&n(d);return}s=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ix(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case He.KHR_MATERIALS_UNLIT:a[d]=new Ey;break;case He.KHR_DRACO_MESH_COMPRESSION:a[d]=new Wy(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[d]=new qy;break;case He.KHR_MESH_QUANTIZATION:a[d]=new Xy;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function wy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ty{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Nt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pa(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Oi(h),c.distance=d;break;case"spot":c=new B_(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class Ey{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return ni}extendParams(e,t,i){const n=[];e.color=new pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nt),e.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,gt))}return Promise.all(n)}}class Ay{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Cy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(o,o)}return Promise.all(s)}}class Ry{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Iy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Dy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Nt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,gt)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Py{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Ly{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(o[0],o[1],o[2],Nt),Promise.all(s)}}class Uy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ny{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(o[0],o[1],o[2],Nt),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,gt)),Promise.all(s)}}class ky{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Oy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class By{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Fy{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zy{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Hy{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,d=n.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,n.mode,n.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(p),h,d,u,n.mode,n.filter),p})})}else return null}}class Gy{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==ei.TRIANGLES&&c.mode!==ei.TRIANGLE_STRIP&&c.mode!==ei.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,p=[];for(const g of d){const _=new Ue,m=new C,f=new Ft,x=new C(1,1,1),S=new b_(g.geometry,g.material,u);for(let v=0;v<u;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,_.compose(m,f,x));for(const v in l)if(v==="_COLOR_0"){const R=l[v];S.instanceColor=new jo(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);dt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),p.push(S)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Nd="glTF",Bs=12,Th={JSON:1313821514,BIN:5130562};class Vy{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Bs,s=new DataView(e,Bs);let a=0;for(;a<n;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Th.JSON){const c=new Uint8Array(e,Bs+a,o);this.content=i.decode(c)}else if(l===Th.BIN){const c=Bs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Wy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=Zo[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=Zo[h]||h.toLowerCase();if(a[h]!==void 0){const u=i.accessors[e.attributes[h]],p=ls[u.componentType];c[d]=p.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){n.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(p)},o,c,Nt,u)})})}}class qy{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Xy{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class kd extends er{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,d=(i-t)/h,u=d*d,p=u*d,g=e*c,_=g-c,m=-2*p+3*u,f=p-u,x=1-m,S=f-u+d;for(let v=0;v!==o;v++){const R=a[_+v+o],A=a[_+v+l]*h,E=a[g+v+o],D=a[g+v]*h;s[v]=x*R+S*A+m*E+f*D}return s}}const $y=new Ft;class jy extends kd{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return $y.fromArray(s).normalize().toArray(s),s}}const ei={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eh={9728:Ht,9729:Yt,9984:Oh,9985:Vr,9986:Fs,9987:Bi},Ah={33071:an,33648:Zr,10497:Vt},Qa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yy={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Ys},eo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ky(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Re({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wi})),r.DefaultMaterial}function yn(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ni(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Jy(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(i){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(u)}if(n){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function Zy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Qy(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+to(t.attributes):e=r.indices+":"+to(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+to(r.targets[i]);return e}function to(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function Qo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ex(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const tx=new Ue;class ix{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&a<98?this.textureLoader=new N_(this.options.manager):this.textureLoader=new G_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ra(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return yn(s,o,n),Ni(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,a){i.load(Xs.resolveURL(t.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=Qa[n.type],o=ls[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new Be(c,a,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Qa[n.type],c=ls[n.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=n.byteOffset||0,p=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let _,m;if(p&&p!==d){const f=Math.floor(u/p),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+f+":"+n.count;let S=t.cache.get(x);S||(_=new c(o,f*p,n.count*p/h),S=new g_(_,p/h),t.cache.add(x,S)),m=new gl(S,l,u%p/h,g)}else o===null?_=new c(n.count*l):_=new c(o,u,n.count*l),m=new Be(_,l,g);if(n.sparse!==void 0){const f=Qa.SCALAR,x=ls[n.sparse.indices.componentType],S=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,R=new x(a[1],S,n.sparse.count*f),A=new c(a[2],v,n.sparse.count*l);o!==null&&(m=new Be(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,D=R.length;E<D;E++){const w=R[E];if(m.setX(w,A[E*l]),l>=2&&m.setY(w,A[E*l+1]),l>=3&&m.setZ(w,A[E*l+2]),l>=4&&m.setW(w,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const n=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(s.samplers||{})[a.sampler]||{};return h.magFilter=Eh[u.magFilter]||Yt,h.minFilter=Eh[u.minFilter]||Bi,h.wrapS=Ah[u.wrapS]||Vt,h.wrapT=Ah[u.wrapT]||Vt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==Yt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new bt(_);m.needsUpdate=!0,u(m)}),t.load(Xs.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Ni(d,a),d.userData.mimeType=a.mimeType||ex(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new _d,bi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new gd,bi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Re}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){const d=n[He.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new pe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Nt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,gt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=jt);const h=s.alphaMode||eo.OPAQUE;if(h===eo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===eo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ni&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Se(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==ni&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ni){const d=s.emissiveFactor;o.emissive=new pe().setRGB(d[0],d[1],d[2],Nt)}return s.emissiveTexture!==void 0&&a!==ni&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,gt)),Promise.all(c).then(function(){const d=new a(o);return s.name&&(d.name=s.name),Ni(d,s),t.associations.set(d,{materials:e}),s.extensions&&yn(n,d,s),d})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ch(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Qy(c),d=n[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Ch(new pt,c,t),n[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Ky(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=a[p];let f;const x=c[p];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new v_(_,x):new be(_,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===ei.TRIANGLE_STRIP?f.geometry=wh(f.geometry,Yh):m.mode===ei.TRIANGLE_FAN&&(f.geometry=wh(f.geometry,qo));else if(m.mode===ei.LINES)f=new S_(_,x);else if(m.mode===ei.LINE_STRIP)f=new vl(_,x);else if(m.mode===ei.LINE_LOOP)f=new M_(_,x);else if(m.mode===ei.POINTS)f=new wn(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Zy(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Ni(f,s),m.extensions&&yn(n,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&yn(n,d[0],s),d[0];const u=new Ct;s.extensions&&yn(n,u,s),t.associations.set(u,{meshes:e});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Bt(tp.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new ca(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ni(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Ue;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _l(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=n.channels.length;d<u;d++){const p=n.channels[d],g=n.samplers[p.sampler],_=p.target,m=_.node,f=n.parameters!==void 0?n.parameters[g.input]:g.input,x=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",x)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],p=d[1],g=d[2],_=d[3],m=d[4],f=[];for(let x=0,S=u.length;x<S;x++){const v=u[x],R=p[x],A=g[x],E=_[x],D=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const w=i._createAnimationTracks(v,R,A,E,D);if(w)for(let b=0;b<w.length;b++)f.push(w[b])}return new Ko(s,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(u,tx)});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new fd:c.length>1?h=new Ct:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=a),Ni(h,s),s.extensions&&yn(i,h,s),s.matrix!==void 0){const d=new Ue;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new Ct;i.name&&(s.name=n.createUniqueName(i.name)),Ni(s,i),i.extensions&&yn(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++)s.add(l[h]);const c=h=>{const d=new Map;for(const[u,p]of n.associations)(u instanceof bi||u instanceof bt)&&d.set(u,p);return h.traverse(u=>{const p=n.associations.get(u);p!=null&&d.set(u,p)}),d};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){const a=[],o=e.name?e.name:e.uuid,l=[];sn[s.path]===sn.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(sn[s.path]){case sn.weights:c=gs;break;case sn.rotation:c=_s;break;case sn.position:case sn.scale:c=vs;break;default:switch(i.itemSize){case 1:c=gs;break;case 2:case 3:default:c=vs;break}break}const h=n.interpolation!==void 0?Yy[n.interpolation]:Ks,d=this._getArrayFromAccessor(i);for(let u=0,p=l.length;u<p;u++){const g=new c(l[u]+"."+sn[s.path],t.array,d,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Qo(t.constructor),n=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof _s?jy:kd;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nx(r,e,t){const i=e.attributes,n=new _i;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){const h=Qo(ls[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new C,l=new C;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const _=Qo(ls[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;const a=new Mi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function Ch(r,e,t){const i=e.attributes,n=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in i){const o=Zo[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(a)}return Ge.workingColorSpace!==Nt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),Ni(r,e),nx(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Jy(r,e.targets,t):r})}const io=new WeakMap;class sx extends Rn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const s=new ra(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,n)},i,n)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,gt,i).catch(i)}decodeDracoFile(e,t,i,n,s=Nt,a=()=>{}){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const i=JSON.stringify(t);if(io.has(e)){const l=io.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(n=l,new Promise((c,h)=>{n._callbacks[s]={resolve:c,reject:h},n.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),io.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new pt;e.index&&t.setIndex(new Be(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],s=n.name,a=n.array,o=n.itemSize,l=new Be(a,o);s==="color"&&(this._assignVertexColorSpace(l,n.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==gt)return;const i=new pe;for(let n=0,s=e.count;n<s;n++)i.fromBufferAttribute(e,n),Ge.toWorkingColorSpace(i,gt),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new ra(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(e,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=rx.toString(),a=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const a=s.data;switch(a.type){case"decode":n._callbacks[a.id].resolve(a);break;case"error":n._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function rx(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(d){h({draco:d})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const d=h.draco,u=new d.Decoder;try{const p=t(d,u,new Int8Array(l),c),g=p.attributes.map(_=>_.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:o.id,error:p.message})}finally{d.destroy(u)}});break}};function t(a,o,l,c){const h=c.attributeIDs,d=c.attributeTypes;let u,p;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)u=new a.Mesh,p=o.DecodeArrayToMesh(l,l.byteLength,u);else if(g===a.POINT_CLOUD)u=new a.PointCloud,p=o.DecodeArrayToPointCloud(l,l.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const _={index:null,attributes:[]};for(const m in h){const f=self[d[m]];let x,S;if(c.useUniqueIDs)S=h[m],x=o.GetAttributeByUniqueId(u,S);else{if(S=o.GetAttributeId(u,a[h[m]]),S===-1)continue;x=o.GetAttribute(u,S)}const v=n(a,o,u,m,f,x);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return g===a.TRIANGULAR_MESH&&(_.index=i(a,o,u)),a.destroy(u),_}function i(a,o,l){const h=l.num_faces()*3,d=h*4,u=a._malloc(d);o.GetTrianglesUInt32Array(l,d,u);const p=new Uint32Array(a.HEAPF32.buffer,u,h).slice();return a._free(u),{array:p,itemSize:1}}function n(a,o,l,c,h,d){const u=d.num_components(),g=l.num_points()*u,_=g*h.BYTES_PER_ELEMENT,m=s(a,h),f=a._malloc(_);o.GetAttributeDataArrayForAllPoints(l,d,m,_,f);const x=new h(a.HEAPF32.buffer,f,g).slice();return a._free(f),{name:c,array:x,itemSize:u}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function Hr(r){const e=r.clone(!0);return e.traverse(t=>{t.isMesh&&t.material&&(t.material=Array.isArray(t.material)?t.material.map(i=>i.clone()):t.material.clone())}),e}const Gr=Math.PI/180;new Ft().setFromAxisAngle(new C(0,0,1),60*Gr),new Ft().setFromAxisAngle(new C(0,0,1),-60*Gr),new Ft().setFromAxisAngle(new C(1,0,0),5*Gr),new Ft().setFromAxisAngle(new C(1,0,0),5*Gr);class ax{constructor(){this.loader=new My;const e=new sx;e.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),this.loader.setDRACOLoader(e),this.knight=null,this.barbarian=null,this.characters={},this.animations=new Map,this.obstacles=new Map,this.scenery=new Map,this.environment=new Map,this.pickups=new Map,this.progress=null}_loadFile(e){return new Promise((t,i)=>{this.loader.load(e,t,void 0,i)})}async load(){const e=[{path:"assets/animations/Rig_Medium_MovementBasic.glb"},{path:"assets/animations/Rig_Medium_MovementAdvanced.glb"},{path:"assets/animations/Rig_Medium_CombatMelee.glb"},{path:"assets/animations/Rig_Medium_General.glb"}],t=["barrel_large","barrel_small","crate_large","crate_small","column","pillar","pillar_decorated","barrier","rocks","chest"],i=["torch_lit","banner_red","banner_blue","pillar_decorated","coin"],n=["Tree_1_B_Color4","Tree_2_B_Color4","Tree_6_B_Color4","Tree_Bare_1_B_Color4","Bush_2_E_Color4","Bush_3_B_Color4","Bush_4_B_Color4","Rock_1_E_Color4","Rock_3_B_Color4","Rock_4_B_Color4","Rock_5_E_Color4","Grass_1_A_Color4","Grass_2_A_Color4"],s=["potion_large_red","potion_large_blue","potion_large_green","potion_large_orange","shield_badge"],a=[];let o=0;const l=()=>{o++,this.progress&&this.progress(o/a.length)};a.push(this._loadFile("assets/characters/Knight.glb").then(c=>{this.knight=c,this.characters.knight=c,l()})),a.push(this._loadFile("assets/characters/Barbarian.glb").then(c=>{this.barbarian=c,this.characters.barbarian=c,l()}));for(const c of e)a.push(this._loadFile(c.path).then(h=>{for(const d of h.animations)this.animations.set(d.name,d);l()}));for(const c of t)a.push(this._loadFile(`assets/obstacles/${c}.gltf`).then(h=>{this.obstacles.set(c,h.scene),l()}));for(const c of i)a.push(this._loadFile(`assets/scenery/${c}.gltf`).then(h=>{this.scenery.set(c,h.scene),l()}));for(const c of n)a.push(this._loadFile(`assets/environment/${c}.gltf`).then(h=>{this.environment.set(c,h.scene),l()}));for(const c of s)a.push(this._loadFile(`assets/pickups/${c}.gltf`).then(h=>{this.pickups.set(c,h.scene),l()}));await Promise.all(a)}getObstacle(e){const t=this.obstacles.get(e);if(!t)throw new Error(`Obstacle not found: ${e}`);return Hr(t)}getScenery(e){const t=this.scenery.get(e);if(!t)throw new Error(`Scenery not found: ${e}`);return Hr(t)}getEnvironment(e){const t=this.environment.get(e);if(!t)throw new Error(`Environment not found: ${e}`);return Hr(t)}getPickup(e){const t=this.pickups.get(e);if(!t)throw new Error(`Pickup not found: ${e}`);return Hr(t)}}const Rt=new f_({antialias:!1,powerPreference:"high-performance"});Rt.setSize(window.innerWidth,window.innerHeight);Rt.setPixelRatio(Math.min(window.devicePixelRatio,2));Rt.shadowMap.enabled=!0;Rt.shadowMap.type=Lh;Rt.toneMapping=Nh;Rt.toneMappingExposure=.95;Rt.outputColorSpace=gt;document.body.appendChild(Rt.domElement);const ht=new m_;ht.background=new pe(1706544);ht.fog=new ml(2756672,.008);const ox=new Ss(250,32,16),Jn=new _t({side:zt,fog:!1,depthWrite:!1,uniforms:{topColor:{value:new pe(657968)},midColor:{value:new pe(4857984)},horizonColor:{value:new pe(16736304)},bottomColor:{value:new pe(16752720)},uTime:{value:0}},vertexShader:`
        varying vec3 vLocalPos;
        void main() {
            vLocalPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        uniform float uTime;
        varying vec3 vLocalPos;

        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        // Value noise for clouds
        float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            for (int i = 0; i < 5; i++) {
                v += a * noise(p);
                p *= 2.1;
                a *= 0.5;
            }
            return v;
        }

        void main() {
            vec3 dir = normalize(vLocalPos);
            float h = dir.y;

            // 4-color gradient
            vec3 col = mix(bottomColor, horizonColor, smoothstep(-0.05, 0.12, h));
            col = mix(col, midColor, smoothstep(0.12, 0.4, h));
            col = mix(col, topColor, smoothstep(0.4, 0.9, h));

            // Sun disc at horizon
            vec3 sunDir = normalize(vec3(0.3, 0.08, -1.0));
            float sunDot = dot(dir, sunDir);
            float sunDisc = smoothstep(0.997, 0.999, sunDot);
            float sunGlow = pow(max(sunDot, 0.0), 32.0);
            float sunHalo = pow(max(sunDot, 0.0), 8.0);
            col += vec3(1.0, 0.9, 0.6) * sunDisc * 1.8;
            col += vec3(1.0, 0.6, 0.2) * sunGlow * 0.35;
            col += vec3(1.0, 0.4, 0.15) * sunHalo * 0.08;

            // Layered procedural clouds
            if (h > 0.02) {
                vec2 cloudUV = dir.xz / (h + 0.05) * 2.0;

                // Layer 1: big wispy clouds
                float c1 = fbm(cloudUV * 0.8 + uTime * 0.02);
                c1 = smoothstep(0.35, 0.7, c1);

                // Layer 2: smaller detail
                float c2 = fbm(cloudUV * 1.6 + uTime * 0.035 + 50.0);
                c2 = smoothstep(0.4, 0.75, c2);

                float cloud = max(c1, c2 * 0.7);
                float cloudFade = smoothstep(0.02, 0.15, h) * (1.0 - smoothstep(0.5, 0.85, h));
                cloud *= cloudFade;

                // Cloud color: lit by sun on one side, darker on other
                vec3 cloudLit = mix(vec3(0.9, 0.5, 0.3), vec3(1.0, 0.85, 0.7), sunHalo);
                vec3 cloudDark = vec3(0.15, 0.1, 0.2);
                vec3 cloudCol = mix(cloudDark, cloudLit, 0.5 + 0.5 * sunHalo);
                col = mix(col, cloudCol, cloud * 0.7);
            }

            // Stars (upper sky only, fade behind clouds)
            if (h > 0.3) {
                vec2 starUV = dir.xz / (dir.y + 0.01) * 10.0;
                float starGrid = hash(floor(starUV));
                float starBright = step(0.988, starGrid);
                float twinkle = sin(uTime * 3.0 + starGrid * 50.0) * 0.5 + 0.5;
                twinkle *= twinkle;
                float starFade = smoothstep(0.3, 0.55, h);
                col += vec3(1.0, 0.95, 0.85) * starBright * twinkle * starFade * 0.7;
            }

            // Aurora shimmer bands
            float aurora = sin(vLocalPos.x * 0.015 + uTime * 0.25) * sin(vLocalPos.z * 0.012 + uTime * 0.18);
            aurora = smoothstep(0.4, 1.0, aurora) * smoothstep(0.35, 0.55, h) * (1.0 - smoothstep(0.55, 0.75, h));
            col += vec3(0.15, 0.4, 0.3) * aurora * 0.2;
            col += vec3(0.3, 0.1, 0.5) * aurora * 0.15;

            gl_FragColor = vec4(col, 1.0);
        }
    `}),Od=new be(ox,Jn);ht.add(Od);const nr=150,sr=new pt,Kr=new Float32Array(nr*3),Bd=new Float32Array(nr),Fd=new Float32Array(nr),zd=new Float32Array(nr);for(let r=0;r<nr;r++)Kr[r*3]=(Math.random()-.5)*40,Kr[r*3+1]=Math.random()*12,Kr[r*3+2]=(Math.random()-.5)*80,Bd[r]=Math.random()*Math.PI*2,Fd[r]=.5+Math.random()*2,zd[r]=1.5+Math.random()*4;sr.setAttribute("position",new Be(Kr,3));sr.setAttribute("aPhase",new Be(Bd,1));sr.setAttribute("aSpeed",new Be(Fd,1));sr.setAttribute("size",new Be(zd,1));const Hd=new _t({transparent:!0,depthWrite:!1,fog:!1,blending:$s,uniforms:{uTime:{value:0}},vertexShader:`
        attribute float aPhase;
        attribute float aSpeed;
        attribute float size;
        uniform float uTime;
        varying float vAlpha;
        void main() {
            vec3 pos = position;
            pos.y += sin(uTime * aSpeed + aPhase) * 0.5;
            vAlpha = (sin(uTime * aSpeed * 1.5 + aPhase) * 0.5 + 0.5);
            vAlpha *= vAlpha;
            vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (80.0 / -mvPos.z);
            gl_Position = projectionMatrix * mvPos;
        }
    `,fragmentShader:`
        varying float vAlpha;
        void main() {
            float d = length(gl_PointCoord - 0.5) * 2.0;
            float glow = exp(-d * d * 3.0);
            vec3 col = mix(vec3(1.0, 0.7, 0.3), vec3(0.3, 0.6, 1.0), d);
            gl_FragColor = vec4(col, glow * vAlpha * 0.35);
        }
    `}),Gd=new wn(sr,Hd);ht.add(Gd);const zi=80,xs=new pt,Lt=new Float32Array(zi*3),ki=new Float32Array(zi),$t=new Float32Array(zi*3),Vd=new Float32Array(zi);let $n=0;for(let r=0;r<zi;r++)Lt[r*3]=0,Lt[r*3+1]=-100,Lt[r*3+2]=0,ki[r]=0,Vd[r]=2+Math.random()*3;xs.setAttribute("position",new Be(Lt,3));xs.setAttribute("aAlpha",new Be(ki,1));xs.setAttribute("size",new Be(Vd,1));const el=new _t({transparent:!0,depthWrite:!1,fog:!1,blending:$s,uniforms:{uColor1:{value:new C(1,.5,.1)},uColor2:{value:new C(1,.85,.3)}},vertexShader:`
        attribute float aAlpha;
        attribute float size;
        varying float vAlpha;
        void main() {
            vAlpha = aAlpha;
            vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * aAlpha * (60.0 / -mvPos.z);
            gl_Position = projectionMatrix * mvPos;
        }
    `,fragmentShader:`
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying float vAlpha;
        void main() {
            float d = length(gl_PointCoord - 0.5) * 2.0;
            float glow = exp(-d * d * 2.5);
            vec3 col = mix(uColor1, uColor2, d);
            gl_FragColor = vec4(col, glow * vAlpha * 0.45);
        }
    `}),lx=new wn(xs,el);ht.add(lx);const An=200,Tn=new pt,ti=new Float32Array(An*3),ts=new Float32Array(An),Ml=new Float32Array(An),jn=new Float32Array(An*3);for(let r=0;r<An;r++)ti[r*3]=(Math.random()-.5)*40,ti[r*3+1]=Math.random()*15,ti[r*3+2]=(Math.random()-.5)*60,ts[r]=0,Ml[r]=1;Tn.setAttribute("position",new Be(ti,3));Tn.setAttribute("aAlpha",new Be(ts,1));Tn.setAttribute("size",new Be(Ml,1));const Wd=new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uColor:{value:new C(1,1,1)}},vertexShader:`
        attribute float aAlpha;
        attribute float size;
        varying float vAlpha;
        void main() {
            vAlpha = aAlpha;
            vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (100.0 / -mvPos.z);
            gl_Position = projectionMatrix * mvPos;
        }
    `,fragmentShader:`
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
            float d = length(gl_PointCoord - 0.5) * 2.0;
            float a = smoothstep(1.0, 0.2, d) * vAlpha;
            gl_FragColor = vec4(uColor, a);
        }
    `}),qd=new wn(Tn,Wd);ht.add(qd);const cx={roman:null,forest:{color:[.6,.7,.9],velY:-8,velX:1,velZ:.5,size:1.5,alpha:.3,density:.7},desert:{color:[.9,.8,.5],velY:-.5,velX:4,velZ:2,size:2,alpha:.25,density:.5},lava:{color:[1,.4,.1],velY:2,velX:.5,velZ:.3,size:2.5,alpha:.5,density:.4},snow:{color:[.95,.95,1],velY:-2,velX:.8,velZ:.3,size:2,alpha:.5,density:.6}};let no=null;const Rh={roman:{sun:{color:16773328,intensity:1.4},fill:{color:16752736,intensity:.2},rim:{color:16764040,intensity:.25},hemi:{sky:13680800,ground:8413248,intensity:1},ambient:{color:16771276,intensity:.65},bloom:{strength:.35,threshold:.8},exposure:.9},forest:{sun:{color:13166752,intensity:1},fill:{color:6332480,intensity:.18},rim:{color:8965256,intensity:.2},hemi:{sky:8960904,ground:4214832,intensity:1.1},ambient:{color:9488528,intensity:.7},bloom:{strength:.25,threshold:.82},exposure:.85},desert:{sun:{color:16772829,intensity:1.8},fill:{color:16764040,intensity:.25},rim:{color:16768426,intensity:.22},hemi:{sky:15786176,ground:10518592,intensity:.95},ambient:{color:16773328,intensity:.75},bloom:{strength:.4,threshold:.75},exposure:.95},lava:{sun:{color:16755302,intensity:1.8},fill:{color:16746547,intensity:.5},rim:{color:16737826,intensity:.5},hemi:{sky:13404228,ground:6702114,intensity:1.2},ambient:{color:16755302,intensity:.95},bloom:{strength:.4,threshold:.7},exposure:1.05},snow:{sun:{color:13161712,intensity:.9},fill:{color:8952268,intensity:.2},rim:{color:11189230,intensity:.3},hemi:{sky:12636392,ground:6318208,intensity:1.1},ambient:{color:13688304,intensity:.75},bloom:{strength:.3,threshold:.8},exposure:.88}},Ih={roman:{top:657968,mid:4857984,horizon:16736304,bottom:16752720},forest:{top:662026,mid:2773040,horizon:8965188,bottom:11197798},desert:{top:1709320,mid:6967344,horizon:16755268,bottom:16764040},lava:{top:3807232,mid:9060384,horizon:16742195,bottom:16755302},snow:{top:657952,mid:3162208,horizon:8952251,bottom:11189213}},Et=new pe,Dh=new pe,cn=new Bt(60,window.innerWidth/window.innerHeight,.1,300),Gs=new k_(11587824,8413248,1);ht.add(Gs);const Jr=new H_(16777215,.65);ht.add(Jr);const xt=new pa(16773328,1.4);xt.position.set(15,35,15);xt.castShadow=!0;xt.shadow.mapSize.set(2048,2048);xt.shadow.camera.near=.5;xt.shadow.camera.far=120;xt.shadow.camera.left=-25;xt.shadow.camera.right=25;xt.shadow.camera.top=40;xt.shadow.camera.bottom=-25;xt.shadow.bias=-.001;xt.shadow.normalBias=.02;ht.add(xt);ht.add(xt.target);const is=new pa(16752736,.2);is.position.set(-10,8,-10);ht.add(is);const ns=new pa(11193599,.25);ns.position.set(0,5,-20);ht.add(ns);const Ts=new av(Rt);Ts.addPass(new ov(ht,cn));const ss=new ys(new Se(window.innerWidth/2,window.innerHeight/2),.25,.4,.85);Ts.addPass(ss);const wl=new wd(cv);wl.uniforms.resolution.value.set(1/(window.innerWidth*Rt.getPixelRatio()),1/(window.innerHeight*Rt.getPixelRatio()));Ts.addPass(wl);const tl=new Sy(document.getElementById("ui")),rr=document.createElement("div");rr.id="loading-screen";rr.style.cssText="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(ellipse at 50% 20%,#2a1e12 0%,#1a1208 35%,#0e0a04 100%);z-index:100;font-family:Cinzel,serif;color:#e8dcc8;";rr.innerHTML=`
    <h1 style="font-size:48px;font-weight:900;margin-bottom:8px;color:#c9a24e;text-shadow:0 0 20px rgba(194,158,80,0.3);">VULCAN RUNNER</h1>
    <p style="font-size:14px;opacity:0.6;margin-bottom:30px;font-family:Philosopher,sans-serif;">Forging the arena...</p>
    <div style="width:300px;height:6px;background:rgba(194,158,80,0.15);border-radius:3px;overflow:hidden;">
        <div id="load-bar" style="width:0%;height:100%;background:linear-gradient(90deg,#c9a24e,#8b6914);border-radius:3px;transition:width 0.15s;"></div>
    </div>
    <div id="load-pct" style="margin-top:10px;font-size:12px;opacity:0.5;font-family:Philosopher,sans-serif;">0%</div>
`;document.getElementById("ui").appendChild(rr);tl.menu.style.display="none";const il=new ax;il.progress=r=>{document.getElementById("load-bar").style.width=r*100+"%",document.getElementById("load-pct").textContent=Math.floor(r*100)+"%"};const Xd=new Ed;Xd.eagerPreload("music_menu.mp3","music_gameplay.mp3");let ke;const so=60,hx=78;il.load().then(()=>{ke=new vy(ht,cn,tl,il,Xd),Rt.compile(ht,cn),Ts.render(),rr.style.display="none",tl.menu.style.display="flex",$d()}).catch(r=>{console.error("Asset loading failed:",r),document.getElementById("load-pct").textContent="Error loading assets!"});window.addEventListener("resize",()=>{const r=window.innerWidth,e=window.innerHeight;cn.aspect=r/e,cn.updateProjectionMatrix(),Rt.setSize(r,e),Ts.setSize(r,e),ss.setSize(r,e),wl.uniforms.resolution.value.set(1/(r*Rt.getPixelRatio()),1/(e*Rt.getPixelRatio()))});const dx=new bd;let ro=0,ao=0;function $d(){requestAnimationFrame($d);const r=Math.min(dx.getDelta(),.05);if(ro+=r,ke&&ke.update(r),Jn.uniforms.uTime.value=ro,Hd.uniforms.uTime.value=ro,ke){const e=ke.runner?Math.max(0,(ke.runner.runSpeed-16)/14):0,t=ke.state===1&&ke.runner?so+(hx-so)*e:so;cn.fov+=(t-cn.fov)*r*3,cn.updateProjectionMatrix(),ke._screenFlash&&(ke._screenFlash.timer-=r,ke._screenFlash.timer<=0&&(ke._screenFlash=null))}if(ke&&ke.runner){const e=ke.runner.position.z,t=ke.runner.position.x;if(xt.position.z=e+15,xt.target.position.z=e,xt.target.updateMatrixWorld(),ns.position.z=e-20,is.position.z=e-5,Od.position.z=e,Gd.position.z=e,ke.runner.running&&!ke.runner.dead){const l=ke.runner.runSpeed>20?.01:.02;for(ao+=r;ao>l;){ao-=l;const c=$n%zi;Lt[c*3]=t+(Math.random()-.5)*.5,Lt[c*3+1]=.1+Math.random()*.3,Lt[c*3+2]=e+1.5+Math.random()*.5,ki[c]=1,$t[c*3]=(Math.random()-.5)*1.5,$t[c*3+1]=1+Math.random()*2,$t[c*3+2]=1+Math.random()*1.5,$n++}}if(ke._characterId==="barbarian"&&ke.state===1){const l=Math.min(1,(ke.runner.runSpeed-15)/15);if(l>.1&&Math.random()<l*.3){const c=$n%zi;Lt[c*3]=t+(Math.random()-.5)*.8,Lt[c*3+1]=.5+Math.random()*1.5,Lt[c*3+2]=e+1+Math.random()*.5,ki[c]=.8+Math.random()*.2,$t[c*3]=(Math.random()-.5)*2,$t[c*3+1]=2+Math.random()*3,$t[c*3+2]=1+Math.random()*2,$n++}}else if(ke._characterId==="knight"&&ke.state===1&&ke.runner.attacking)for(let l=0;l<3;l++){const c=$n%zi;Lt[c*3]=t+(Math.random()-.5)*1.5,Lt[c*3+1]=.8+Math.random()*1,Lt[c*3+2]=e-.5+Math.random()*.5,ki[c]=1,$t[c*3]=(Math.random()-.5)*4,$t[c*3+1]=1+Math.random()*2,$t[c*3+2]=-2+Math.random()*2,$n++}if(ke.activePowerUps){const l=el.uniforms.uColor1.value,c=el.uniforms.uColor2.value;let h,d,u,p,g,_;const m=ke.cosmeticsManager?ke.cosmeticsManager.getTrailConfig():null;if(m&&m.particleColor){const x=m.particleColor;h=x[0],d=x[1],u=x[2],p=x[0]*.7+.3,g=x[1]*.7+.3,_=x[2]*.7+.3}else ke._characterId==="barbarian"?(h=1,d=.25,u=0,p=1,g=.5,_=.1):(h=.3,d=.5,u=1,p=.7,g=.85,_=1);ke.activePowerUps.Invincibility?(h=0,d=.9,u=1,p=.3,g=.6,_=1):ke.activePowerUps.Shield?(h=.5,d=.2,u=1,p=.8,g=.5,_=1):ke.activePowerUps.CoinMagnet?(h=1,d=0,u=1,p=1,g=.5,_=1):ke.activePowerUps.SpeedBoost&&(h=1,d=.3,u=0,p=1,g=.6,_=0);const f=r*4;l.x+=(h-l.x)*f,l.y+=(d-l.y)*f,l.z+=(u-l.z)*f,c.x+=(p-c.x)*f,c.y+=(g-c.y)*f,c.z+=(_-c.z)*f}for(let l=0;l<zi;l++)ki[l]>0&&(ki[l]-=r*2,ki[l]<0&&(ki[l]=0),Lt[l*3]+=$t[l*3]*r,Lt[l*3+1]+=$t[l*3+1]*r,Lt[l*3+2]+=$t[l*3+2]*r,$t[l*3+1]-=r*3);xs.attributes.position.needsUpdate=!0,xs.attributes.aAlpha.needsUpdate=!0;const i=ke.currentTheme||"roman",n=cx[i];if(qd.position.z=e,n&&(no=n,Wd.uniforms.uColor.value.set(n.color[0],n.color[1],n.color[2])),no){const l=no;for(let c=0;c<An;c++)ts[c]<=0?Math.random()<l.density&&(ti[c*3]=(Math.random()-.5)*40,ti[c*3+1]=8+Math.random()*10,ti[c*3+2]=(Math.random()-.5)*60,ts[c]=l.alpha*(.5+Math.random()*.5),Ml[c]=l.size*(.5+Math.random()),jn[c*3]=l.velX*(.5+Math.random()),jn[c*3+1]=l.velY*(.8+Math.random()*.4),jn[c*3+2]=l.velZ*(Math.random()-.5)*2):(ti[c*3]+=jn[c*3]*r,ti[c*3+1]+=jn[c*3+1]*r,ti[c*3+2]+=jn[c*3+2]*r,(ti[c*3+1]<-1||ti[c*3+1]>20)&&(ts[c]=0))}else for(let l=0;l<An;l++)ts[l]*=.95;if(Tn.attributes.position.needsUpdate=!0,Tn.attributes.aAlpha.needsUpdate=!0,Tn.attributes.size.needsUpdate=!0,ke._themeTransitionTimer>0||ke._prevTheme!==ke.currentTheme){const l={roman:{sky:[.35,.45,.55],fog:[.3,.4,.5],fogDensity:.008},forest:{sky:[.2,.35,.18],fog:[.2,.35,.2],fogDensity:.008},desert:{sky:[.5,.45,.3],fog:[.5,.45,.35],fogDensity:.006},lava:{sky:[.65,.35,.18],fog:[.6,.32,.16],fogDensity:.004},snow:{sky:[.5,.55,.6],fog:[.5,.55,.6],fogDensity:.007}},c=l[ke.currentTheme]||l.roman,h=ht.background;h.r+=(c.sky[0]-h.r)*r*2,h.g+=(c.sky[1]-h.g)*r*2,h.b+=(c.sky[2]-h.b)*r*2,ht.fog&&(ht.fog.color.r+=(c.fog[0]-ht.fog.color.r)*r*2,ht.fog.color.g+=(c.fog[1]-ht.fog.color.g)*r*2,ht.fog.color.b+=(c.fog[2]-ht.fog.color.b)*r*2,ht.fog.density+=(c.fogDensity-ht.fog.density)*r*2)}const s=Rh[ke.currentTheme]||Rh.roman,a=r*2;Et.set(s.sun.color),xt.color.lerp(Et,a),xt.intensity+=(s.sun.intensity-xt.intensity)*a,Et.set(s.fill.color),is.color.lerp(Et,a),is.intensity+=(s.fill.intensity-is.intensity)*a,Et.set(s.rim.color),ns.color.lerp(Et,a),ns.intensity+=(s.rim.intensity-ns.intensity)*a,Et.set(s.hemi.sky),Dh.set(s.hemi.ground),Gs.color.lerp(Et,a),Gs.groundColor.lerp(Dh,a),Gs.intensity+=(s.hemi.intensity-Gs.intensity)*a,Et.set(s.ambient.color),Jr.color.lerp(Et,a),Jr.intensity+=(s.ambient.intensity-Jr.intensity)*a,ss.strength+=(s.bloom.strength-ss.strength)*a,ss.threshold+=(s.bloom.threshold-ss.threshold)*a,Rt.toneMappingExposure+=(s.exposure-Rt.toneMappingExposure)*a;const o=Ih[ke.currentTheme]||Ih.roman;Et.set(o.top),Jn.uniforms.topColor.value.lerp(Et,a),Et.set(o.mid),Jn.uniforms.midColor.value.lerp(Et,a),Et.set(o.horizon),Jn.uniforms.horizonColor.value.lerp(Et,a),Et.set(o.bottom),Jn.uniforms.bottomColor.value.lerp(Et,a)}Ts.render()}
