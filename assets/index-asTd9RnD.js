(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="170",mu=0,Hl=1,gu=2,Kh=1,Jh=2,Oi=3,$i=0,zt=1,jt=2,Wi=0,ds=1,Zs=2,Gl=3,Vl=4,_u=5,An=100,vu=101,yu=102,xu=103,bu=104,Su=200,Mu=201,wu=202,Eu=203,go=204,_o=205,Tu=206,Au=207,Cu=208,Ru=209,Iu=210,Pu=211,Du=212,Lu=213,Uu=214,vo=0,yo=1,xo=2,ms=3,bo=4,So=5,Mo=6,wo=7,Zh=0,Nu=1,ku=2,un=0,Ou=1,Bu=2,Fu=3,Qh=4,zu=5,Hu=6,Gu=7,Wl="attached",Vu="detached",ed=300,gs=301,_s=302,Eo=303,To=304,ur=306,Vt=1e3,hn=1001,sr=1002,Ht=1003,td=1004,Ws=1005,Kt=1006,ja=1007,zi=1008,Yi=1009,id=1010,nd=1011,Qs=1012,ul=1013,Pn=1014,_i=1015,qi=1016,pl=1017,fl=1018,vs=1020,sd=35902,ad=1021,rd=1022,ai=1023,od=1024,ld=1025,us=1026,ys=1027,ml=1028,gl=1029,cd=1030,_l=1031,vl=1033,Ka=33776,Ja=33777,Za=33778,Qa=33779,Ao=35840,Co=35841,Ro=35842,Io=35843,Po=36196,Do=37492,Lo=37496,Uo=37808,No=37809,ko=37810,Oo=37811,Bo=37812,Fo=37813,zo=37814,Ho=37815,Go=37816,Vo=37817,Wo=37818,qo=37819,Xo=37820,$o=37821,er=36492,Yo=36494,jo=36495,hd=36283,Ko=36284,Jo=36285,Zo=36286,dd=2200,ud=2201,Wu=2202,ea=2300,ta=2301,br=2302,ss=2400,as=2401,ar=2402,yl=2500,qu=2501,Xu=0,pd=1,Qo=2,$u=3200,Yu=3201,fd=0,ju=1,ln="",gt="srgb",Nt="srgb-linear",pr="linear",it="srgb",kn=7680,ql=519,Ku=512,Ju=513,Zu=514,md=515,Qu=516,ep=517,tp=518,ip=519,el=35044,Xl="300 es",Hi=2e3,rr=2001;class Ln{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const Ys=Math.PI/180,xs=180/Math.PI;function vi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[a&255]+Pt[a>>8&255]+Pt[a>>16&255]+Pt[a>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Ut(a,e,t){return Math.max(e,Math.min(t,a))}function xl(a,e){return(a%e+e)%e}function np(a,e,t,i,n){return i+(a-e)*(n-i)/(t-e)}function sp(a,e,t){return a!==e?(t-a)/(e-a):0}function js(a,e,t){return(1-t)*a+t*e}function ap(a,e,t,i){return js(a,e,1-Math.exp(-t*i))}function rp(a,e=1){return e-Math.abs(xl(a,e*2)-e)}function op(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function lp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function cp(a,e){return a+Math.floor(Math.random()*(e-a+1))}function hp(a,e){return a+Math.random()*(e-a)}function dp(a){return a*(.5-Math.random())}function up(a){a!==void 0&&($l=a);let e=$l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(a){return a*Ys}function fp(a){return a*xs}function mp(a){return(a&a-1)===0&&a!==0}function gp(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function _p(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function vp(a,e,t,i,n){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+i)/2),h=r((e+i)/2),d=s((e-i)/2),u=r((e-i)/2),p=s((i-e)/2),g=r((i-e)/2);switch(n){case"XYX":a.set(o*h,l*d,l*u,o*c);break;case"YZY":a.set(l*u,o*h,l*d,o*c);break;case"ZXZ":a.set(l*d,l*u,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*p,o*c);break;case"YXY":a.set(l*p,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function mi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function tt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const yp={DEG2RAD:Ys,RAD2DEG:xs,generateUUID:vi,clamp:Ut,euclideanModulo:xl,mapLinear:np,inverseLerp:sp,lerp:js,damp:ap,pingpong:rp,smoothstep:op,smootherstep:lp,randInt:cp,randFloat:hp,randFloatSpread:dp,seededRandom:up,degToRad:pp,radToDeg:fp,isPowerOfTwo:mp,ceilPowerOfTwo:gp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:vp,normalize:tt,denormalize:mi};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,i,n,s,r,o,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,o,l,c)}set(e,t,i,n,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],v=n[1],x=n[4],y=n[7],C=n[2],T=n[5],A=n[8];return s[0]=r*_+o*v+l*C,s[3]=r*m+o*x+l*T,s[6]=r*f+o*y+l*A,s[1]=c*_+h*v+d*C,s[4]=c*m+h*x+d*T,s[7]=c*f+h*y+d*A,s[2]=u*_+p*v+g*C,s[5]=u*m+p*x+g*T,s[8]=u*f+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*s*h+i*o*l+n*s*c-n*r*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,u=o*l-h*s,p=c*s-r*l,g=t*d+i*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*r)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(r*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-n*c,n*l,-n*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sr.makeScale(e,t)),this}rotate(e){return this.premultiply(Sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new Le;function gd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ia(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function xp(){const a=ia("canvas");return a.style.display="block",a}const Yl={};function qs(a){a in Yl||(Yl[a]=!0,console.warn(a))}function bp(a,e,t){return new Promise(function(i,n){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Sp(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mp(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ve={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(a,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(a.applyMatrix3(this.spaces[e].toXYZ),a.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(a.r=ps(a.r),a.g=ps(a.g),a.b=ps(a.b))),a},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ln?pr:this.spaces[a].transfer},getLuminanceCoefficients:function(a,e=this.workingColorSpace){return a.fromArray(this.spaces[e].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,e,t){return a.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}};function Xi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ps(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const jl=[.64,.33,.3,.6,.15,.06],Kl=[.2126,.7152,.0722],Jl=[.3127,.329],Zl=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[Nt]:{primaries:jl,whitePoint:Jl,transfer:pr,toXYZ:Zl,fromXYZ:Ql,luminanceCoefficients:Kl,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:jl,whitePoint:Jl,transfer:it,toXYZ:Zl,fromXYZ:Ql,luminanceCoefficients:Kl,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}});let On;class wp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{On===void 0&&(On=ia("canvas")),On.width=e.width,On.height=e.height;const i=On.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=On}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Xi(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ep=0;class _d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(Mr(n[r].image)):s.push(Mr(n[r]))}else s=Mr(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Mr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?wp.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tp=0;class Mt extends Ln{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,i=hn,n=hn,s=Kt,r=zi,o=ai,l=Yi,c=Mt.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=vi(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vt:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vt:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=ed;Mt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,i=0,n=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,C=(f+1)/2,T=(h+u)/4,A=(d+_)/4,P=(g+m)/4;return x>y&&x>C?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=T/i,s=A/i):y>C?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=T/n,s=P/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=A/s,n=P/s),this.set(i,n,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ap extends Ln{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Mt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Ap{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vd extends Mt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cp extends Mt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=s[r+0],p=s[r+1],g=s[r+2],_=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,f*v);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const y=o*v;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+_*y,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,r){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[r],u=s[r+1],p=s[r+2],g=s[r+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),p=l(n/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-n)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(n+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+n*c-s*l,this._y=n*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*n-o*i),h=2*(o*t-s*n),d=2*(s*i-r*t);return this.x=t+l*c+r*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*r-i*l,this.z=i*o-n*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new R,ec=new Ft;class xi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ci):ci.fromBufferAttribute(s,r),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),pa.subVectors(this.max,Ls),Bn.subVectors(e.a,Ls),Fn.subVectors(e.b,Ls),zn.subVectors(e.c,Ls),Qi.subVectors(Fn,Bn),en.subVectors(zn,Fn),gn.subVectors(Bn,zn);let t=[0,-Qi.z,Qi.y,0,-en.z,en.y,0,-gn.z,gn.y,Qi.z,0,-Qi.x,en.z,0,-en.x,gn.z,0,-gn.x,-Qi.y,Qi.x,0,-en.y,en.x,0,-gn.y,gn.x,0];return!Er(t,Bn,Fn,zn,pa)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,Bn,Fn,zn,pa))?!1:(fa.crossVectors(Qi,en),t=[fa.x,fa.y,fa.z],Er(t,Bn,Fn,zn,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new R,new R,new R,new R,new R,new R,new R,new R],ci=new R,ua=new xi,Bn=new R,Fn=new R,zn=new R,Qi=new R,en=new R,gn=new R,Ls=new R,pa=new R,fa=new R,_n=new R;function Er(a,e,t,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){_n.fromArray(a,s);const o=n.x*Math.abs(_n.x)+n.y*Math.abs(_n.y)+n.z*Math.abs(_n.z),l=e.dot(_n),c=t.dot(_n),h=i.dot(_n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Rp=new xi,Us=new R,Tr=new R;class Ti{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rp.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Us,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Tr)),this.expandByPoint(Us.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new R,Ar=new R,ma=new R,tn=new R,Cr=new R,ga=new R,Rr=new R;class fr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ar.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),tn.copy(this.origin).sub(Ar);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ma),o=tn.dot(this.direction),l=-tn.dot(ma),c=tn.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*l-o,u=r*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ar).addScaledVector(ma,u),p}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),n=Di.dot(Di)-i*i,s=e.radius*e.radius;if(n>s)return null;const r=Math.sqrt(s-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,n,s){Cr.subVectors(t,e),ga.subVectors(i,e),Rr.crossVectors(Cr,ga);let r=this.direction.dot(Rr),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;tn.subVectors(this.origin,e);const l=o*this.direction.dot(ga.crossVectors(tn,ga));if(l<0)return null;const c=o*this.direction.dot(Cr.cross(tn));if(c<0||l+c>r)return null;const h=-o*tn.dot(Rr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,i,n,s,r,o,l,c,h,d,u,p,g,_,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,o,l,c,h,d,u,p,g,_,m)}set(e,t,i,n,s,r,o,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Hn.setFromMatrixColumn(e,0).length(),s=1/Hn.setFromMatrixColumn(e,1).length(),r=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=r*h,p=r*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-r*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=_-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,p=r*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,p=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=r*l,p=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=r*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ip,e,Pp)}lookAt(e,t,i){const n=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),nn.crossVectors(i,qt),nn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),nn.crossVectors(i,qt)),nn.normalize(),_a.crossVectors(qt,nn),n[0]=nn.x,n[4]=_a.x,n[8]=qt.x,n[1]=nn.y,n[5]=_a.y,n[9]=qt.y,n[2]=nn.z,n[6]=_a.z,n[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],x=i[7],y=i[11],C=i[15],T=n[0],A=n[4],P=n[8],w=n[12],S=n[1],I=n[5],z=n[9],F=n[13],W=n[2],j=n[6],V=n[10],J=n[14],G=n[3],se=n[7],de=n[11],Se=n[15];return s[0]=r*T+o*S+l*W+c*G,s[4]=r*A+o*I+l*j+c*se,s[8]=r*P+o*z+l*V+c*de,s[12]=r*w+o*F+l*J+c*Se,s[1]=h*T+d*S+u*W+p*G,s[5]=h*A+d*I+u*j+p*se,s[9]=h*P+d*z+u*V+p*de,s[13]=h*w+d*F+u*J+p*Se,s[2]=g*T+_*S+m*W+f*G,s[6]=g*A+_*I+m*j+f*se,s[10]=g*P+_*z+m*V+f*de,s[14]=g*w+_*F+m*J+f*Se,s[3]=v*T+x*S+y*W+C*G,s[7]=v*A+x*I+y*j+C*se,s[11]=v*P+x*z+y*V+C*de,s[15]=v*w+x*F+y*J+C*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*d-n*c*d-s*o*u+i*c*u+n*o*p-i*l*p)+_*(+t*l*p-t*c*u+s*r*u-n*r*p+n*c*h-s*l*h)+m*(+t*c*d-t*o*p-s*r*d+i*r*p+s*o*h-i*c*h)+f*(-n*o*h-t*l*d+t*o*u+n*r*d-i*r*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=d*m*c-_*u*c+_*l*p-o*m*p-d*l*f+o*u*f,x=g*u*c-h*m*c-g*l*p+r*m*p+h*l*f-r*u*f,y=h*_*c-g*d*c+g*o*p-r*_*p-h*o*f+r*d*f,C=g*d*l-h*_*l-g*o*u+r*_*u+h*o*m-r*d*m,T=t*v+i*x+n*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(_*u*s-d*m*s-_*n*p+i*m*p+d*n*f-i*u*f)*A,e[2]=(o*m*s-_*l*s+_*n*c-i*m*c-o*n*f+i*l*f)*A,e[3]=(d*l*s-o*u*s-d*n*c+i*u*c+o*n*p-i*l*p)*A,e[4]=x*A,e[5]=(h*m*s-g*u*s+g*n*p-t*m*p-h*n*f+t*u*f)*A,e[6]=(g*l*s-r*m*s-g*n*c+t*m*c+r*n*f-t*l*f)*A,e[7]=(r*u*s-h*l*s+h*n*c-t*u*c-r*n*p+t*l*p)*A,e[8]=y*A,e[9]=(g*d*s-h*_*s-g*i*p+t*_*p+h*i*f-t*d*f)*A,e[10]=(r*_*s-g*o*s+g*i*c-t*_*c-r*i*f+t*o*f)*A,e[11]=(h*o*s-r*d*s-h*i*c+t*d*c+r*i*p-t*o*p)*A,e[12]=C*A,e[13]=(h*_*n-g*d*n+g*i*u-t*_*u-h*i*m+t*d*m)*A,e[14]=(g*o*n-r*_*n-g*i*l+t*_*l+r*i*m-t*o*m)*A,e[15]=(r*d*n-h*o*n+h*i*l-t*d*l-r*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,d=o+o,u=s*c,p=s*h,g=s*d,_=r*h,m=r*d,f=o*d,v=l*c,x=l*h,y=l*d,C=i.x,T=i.y,A=i.z;return n[0]=(1-(_+f))*C,n[1]=(p+y)*C,n[2]=(g-x)*C,n[3]=0,n[4]=(p-y)*T,n[5]=(1-(u+f))*T,n[6]=(m+v)*T,n[7]=0,n[8]=(g+x)*A,n[9]=(m-v)*A,n[10]=(1-(u+_))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Hn.set(n[0],n[1],n[2]).length();const r=Hn.set(n[4],n[5],n[6]).length(),o=Hn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],hi.copy(this);const c=1/s,h=1/r,d=1/o;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=d,hi.elements[9]*=d,hi.elements[10]*=d,t.setFromRotationMatrix(hi),i.x=s,i.y=r,i.z=o,this}makePerspective(e,t,i,n,s,r,o=Hi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n);let p,g;if(o===Hi)p=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===rr)p=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,r,o=Hi){const l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(r-s),u=(t+e)*c,p=(i+n)*h;let g,_;if(o===Hi)g=(r+s)*d,_=-2*d;else if(o===rr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hn=new R,hi=new Ue,Ip=new R(0,0,0),Pp=new R(1,1,1),nn=new R,_a=new R,qt=new R,tc=new Ue,ic=new Ft;class Ei{constructor(e=0,t=0,i=0,n=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ut(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dp=0;const nc=new R,Gn=new Ft,Li=new Ue,va=new R,Ns=new R,Lp=new R,Up=new Ft,sc=new R(1,0,0),ac=new R(0,1,0),rc=new R(0,0,1),oc={type:"added"},Np={type:"removed"},Vn={type:"childadded",child:null},Ir={type:"childremoved",child:null};class dt extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new R,t=new Ei,i=new Ft,n=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Le}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(sc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?va.copy(e):va.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ns,va,this.up):Li.lookAt(va,Ns,this.up),this.quaternion.setFromRotationMatrix(Li),n&&(Li.extractRotation(n.matrixWorld),Gn.setFromRotationMatrix(Li),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oc),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Np),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oc),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,Lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}dt.DEFAULT_UP=new R(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new R,Ui=new R,Pr=new R,Ni=new R,Wn=new R,qn=new R,lc=new R,Dr=new R,Lr=new R,Ur=new R,Nr=new Ke,kr=new Ke,Or=new Ke;class gi{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),di.subVectors(e,t),n.cross(di);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){di.subVectors(n,t),Ui.subVectors(i,t),Pr.subVectors(e,t);const r=di.dot(di),o=di.dot(Ui),l=di.dot(Pr),c=Ui.dot(Ui),h=Ui.dot(Pr),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(r*h-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,n,s,r,o,l){return this.getBarycoord(e,t,i,n,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(r,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,t,i,n,s,r){return Nr.setScalar(0),kr.setScalar(0),Or.setScalar(0),Nr.fromBufferAttribute(e,t),kr.fromBufferAttribute(e,i),Or.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(Nr,s.x),r.addScaledVector(kr,s.y),r.addScaledVector(Or,s.z),r}static isFrontFacing(e,t,i,n){return di.subVectors(i,t),Ui.subVectors(e,t),di.cross(Ui).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),di.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return gi.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let r,o;Wn.subVectors(n,i),qn.subVectors(s,i),Dr.subVectors(e,i);const l=Wn.dot(Dr),c=qn.dot(Dr);if(l<=0&&c<=0)return t.copy(i);Lr.subVectors(e,n);const h=Wn.dot(Lr),d=qn.dot(Lr);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(Wn,r);Ur.subVectors(e,s);const p=Wn.dot(Ur),g=qn.dot(Ur);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(qn,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return lc.subVectors(s,n),o=(d-h)/(d-h+(p-g)),t.copy(n).addScaledVector(lc,o);const f=1/(m+_+u);return r=_*f,o=u*f,t.copy(i).addScaledVector(Wn,r).addScaledVector(qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Br(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class ce{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=xl(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Br(r,s,e+1/3),this.g=Br(r,s,e),this.b=Br(r,s,e-1/3)}return Ve.toWorkingColorSpace(this,n),this}setStyle(e,t=gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const i=xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ve.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ut(Dt.r*255,0,255))*65536+Math.round(Ut(Dt.g*255,0,255))*256+Math.round(Ut(Dt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,n=Dt.g,s=Dt.b,r=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=gt){Ve.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,n=Dt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(sn),this.setHSL(sn.h+e,sn.s+t,sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(ya);const i=js(sn.h,ya.h,t),n=js(sn.s,ya.s,t),s=js(sn.l,ya.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new ce;ce.NAMES=xd;let kp=0;class wi extends Ln{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=vi(),this.name="",this.blending=ds,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==go&&(i.blendSrc=this.blendSrc),this.blendDst!==_o&&(i.blendDst=this.blendDst),this.blendEquation!==An&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ri extends wi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new R,xa=new Me;class Fe{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=el,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}}class bd extends Fe{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sd extends Fe{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rt extends Fe{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Op=0;const Qt=new Ue,Fr=new dt,Xn=new R,Xt=new xi,ks=new xi,Tt=new R;class pt extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Sd:bd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new rt(i,3))}else{for(let i=0,n=t.count;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Xt.min,ks.min),Xt.expandByPoint(Tt),Tt.addVectors(Xt.max,ks.max),Xt.expandByPoint(Tt)):(Xt.expandByPoint(ks.min),Xt.expandByPoint(ks.max))}Xt.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)Tt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Tt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(Xn.fromBufferAttribute(e,c),Tt.add(Xn)),n=Math.max(n,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new R,l[P]=new R;const c=new R,h=new R,d=new R,u=new Me,p=new Me,g=new Me,_=new R,m=new R;function f(P,w,S){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),u.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[P].add(_),o[w].add(_),o[S].add(_),l[P].add(m),l[w].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,w=v.length;P<w;++P){const S=v[P],I=S.start,z=S.count;for(let F=I,W=I+z;F<W;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new R,y=new R,C=new R,T=new R;function A(P){C.fromBufferAttribute(n,P),T.copy(C);const w=o[P];x.copy(w),x.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(T,w);const I=y.dot(l[P])<0?-1:1;r.setXYZW(P,x.x,x.y,x.z,I)}for(let P=0,w=v.length;P<w;++P){const S=v[P],I=S.start,z=S.count;for(let F=I,W=I+z;F<W;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fe(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new R,s=new R,r=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),h.subVectors(r,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Fe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new Ue,vn=new fr,ba=new Ti,hc=new R,Sa=new R,Ma=new R,wa=new R,zr=new R,Ea=new R,dc=new R,Ta=new R;class te extends dt{constructor(e=new pt,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){Ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(zr.fromBufferAttribute(d,e),r?Ea.addScaledVector(zr,h):Ea.addScaledVector(zr.sub(t),h))}t.add(Ea)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),vn.copy(e.ray).recast(e.near),!(ba.containsPoint(vn.origin)===!1&&(vn.intersectSphere(ba,hc)===null||vn.origin.distanceToSquared(hc)>(e.far-e.near)**2))&&(cc.copy(s).invert(),vn.copy(e.ray).applyMatrix4(cc),!(i.boundingBox!==null&&vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=r[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const T=o.getX(y),A=o.getX(y+1),P=o.getX(y+2);n=Aa(this,f,e,i,c,h,d,T,A,P),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);n=Aa(this,r,e,i,c,h,d,v,x,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=r[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const T=y,A=y+1,P=y+2;n=Aa(this,f,e,i,c,h,d,T,A,P),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,x=m+1,y=m+2;n=Aa(this,r,e,i,c,h,d,v,x,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Bp(a,e,t,i,n,s,r,o){let l;if(e.side===zt?l=i.intersectTriangle(r,s,n,!0,o):l=i.intersectTriangle(n,s,r,e.side===$i,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:a}}function Aa(a,e,t,i,n,s,r,o,l,c){a.getVertexPosition(o,Sa),a.getVertexPosition(l,Ma),a.getVertexPosition(c,wa);const h=Bp(a,e,t,i,Sa,Ma,wa,dc);if(h){const d=new R;gi.getBarycoord(dc,Sa,Ma,wa,d),n&&(h.uv=gi.getInterpolatedAttribute(n,o,l,c,d,new Me)),s&&(h.uv1=gi.getInterpolatedAttribute(s,o,l,c,d,new Me)),r&&(h.normal=gi.getInterpolatedAttribute(r,o,l,c,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};gi.getNormal(Sa,Ma,wa,u.normal),h.face=u,h.barycoord=d}return h}class Be extends pt{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,n,r,2),g("x","z","y",1,-1,e,i,-t,n,r,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function g(_,m,f,v,x,y,C,T,A,P,w){const S=y/A,I=C/P,z=y/2,F=C/2,W=T/2,j=A+1,V=P+1;let J=0,G=0;const se=new R;for(let de=0;de<V;de++){const Se=de*I-F;for(let ze=0;ze<j;ze++){const nt=ze*S-z;se[_]=nt*v,se[m]=Se*x,se[f]=W,c.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[f]=T>0?1:-1,h.push(se.x,se.y,se.z),d.push(ze/A),d.push(1-de/P),J+=1}}for(let de=0;de<P;de++)for(let Se=0;Se<A;Se++){const ze=u+Se+j*de,nt=u+Se+j*(de+1),X=u+(Se+1)+j*(de+1),ee=u+(Se+1)+j*de;l.push(ze,nt,ee),l.push(nt,X,ee),G+=6}o.addGroup(p,G,w),p+=G,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Be(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const n=a[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Ot(a){const e={};for(let t=0;t<a.length;t++){const i=bs(a[t]);for(const n in i)e[n]=i[n]}return e}function Fp(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Md(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const or={clone:bs,merge:Ot};var zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _t extends wi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wd extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const an=new R,uc=new Me,pc=new Me;class Bt extends wd{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){an.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(an.x,an.y).multiplyScalar(-e/an.z),an.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(an.x,an.y).multiplyScalar(-e/an.z)}getViewSize(e,t){return this.getViewBounds(e,uc,pc),t.subVectors(pc,uc)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $n=-90,Yn=1;class Gp extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Bt($n,Yn,e,t);n.layers=this.layers,this.add(n);const s=new Bt($n,Yn,e,t);s.layers=this.layers,this.add(s);const r=new Bt($n,Yn,e,t);r.layers=this.layers,this.add(r);const o=new Bt($n,Yn,e,t);o.layers=this.layers,this.add(o);const l=new Bt($n,Yn,e,t);l.layers=this.layers,this.add(l);const c=new Bt($n,Yn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,r),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ed extends Mt{constructor(e,t,i,n,s,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:gs,super(e,t,i,n,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vp extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ed(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Be(5,5,5),s=new _t({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Wi});s.uniforms.tEquirect.value=t;const r=new te(n,s),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Kt),new Gp(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}}const Hr=new R,Wp=new R,qp=new Le;class En{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Hr.subVectors(i,t).cross(Wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qp.getNormalMatrix(e),n=this.coplanarPoint(Hr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new Ti,Ca=new R;class bl{constructor(e=new En,t=new En,i=new En,n=new En,s=new En,r=new En){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi){const i=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],v=n[13],x=n[14],y=n[15];if(i[0].setComponents(l-s,u-c,m-p,y-f).normalize(),i[1].setComponents(l+s,u+c,m+p,y+f).normalize(),i[2].setComponents(l+r,u+h,m+g,y+v).normalize(),i[3].setComponents(l-r,u-h,m-g,y-v).normalize(),i[4].setComponents(l-o,u-d,m-_,y-x).normalize(),t===Hi)i[5].setComponents(l+o,u+d,m+_,y+x).normalize();else if(t===rr)i[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(e){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ca.x=n.normal.x>0?e.max.x:e.min.x,Ca.y=n.normal.y>0?e.max.y:e.min.y,Ca.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let a=null,e=!1,t=null,i=null;function n(s,r){t(s,r),i=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Xp(a){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=a.createBuffer();a.bindBuffer(l,u),a.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=a.HALF_FLOAT:p=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=a.SHORT;else if(c instanceof Uint32Array)p=a.UNSIGNED_INT;else if(c instanceof Int32Array)p=a.INT;else if(c instanceof Int8Array)p=a.BYTE;else if(c instanceof Uint8Array)p=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(a.bindBuffer(c,o),d.length===0)a.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];a.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:r}}class fn extends pt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*u-r;for(let x=0;x<c;x++){const y=x*d-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const x=v+c*f,y=v+c*(f+1),C=v+1+c*(f+1),T=v+1+c*f;p.push(x,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.widthSegments,e.heightSegments)}}var $p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
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
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,lf=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_f=`#define PI 3.141592653589793
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
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
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
#endif`,Xf=`struct PhysicalMaterial {
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
}`,$f=`
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
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
}`,e0=`#if DEPTH_PACKING == 3200
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
}`,t0=`#define DISTANCE
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
}`,i0=`#define DISTANCE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#define LAMBERT
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
}`,h0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,p0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,m0=`#define PHONG
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
}`,g0=`#define PHONG
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
}`,_0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,y0=`#define TOON
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
}`,x0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,S0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,w0=`uniform vec3 color;
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
}`,E0=`uniform float rotation;
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
}`,T0=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:$p,alphahash_pars_fragment:Yp,alphamap_fragment:jp,alphamap_pars_fragment:Kp,alphatest_fragment:Jp,alphatest_pars_fragment:Zp,aomap_fragment:Qp,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:af,bsdfs:rf,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:df,clipping_planes_vertex:uf,color_fragment:pf,color_pars_fragment:ff,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:vf,defaultnormal_vertex:yf,displacementmap_pars_vertex:xf,displacementmap_vertex:bf,emissivemap_fragment:Sf,emissivemap_pars_fragment:Mf,colorspace_fragment:wf,colorspace_pars_fragment:Ef,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Cf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:zf,envmap_vertex:If,fog_vertex:Pf,fog_pars_vertex:Df,fog_fragment:Lf,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:kf,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:Ff,lights_toon_fragment:Hf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Wf,lights_physical_fragment:qf,lights_physical_pars_fragment:Xf,lights_fragment_begin:$f,lights_fragment_maps:Yf,lights_fragment_end:jf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Qf,map_fragment:em,map_pars_fragment:tm,map_particle_fragment:im,map_particle_pars_fragment:nm,metalnessmap_fragment:sm,metalnessmap_pars_fragment:am,morphinstance_vertex:rm,morphcolor_vertex:om,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:hm,normal_fragment_begin:dm,normal_fragment_maps:um,normal_pars_fragment:pm,normal_pars_vertex:fm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:xm,opaque_fragment:bm,packing:Sm,premultiplied_alpha_fragment:Mm,project_vertex:wm,dithering_fragment:Em,dithering_pars_fragment:Tm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Im,shadowmap_vertex:Pm,shadowmask_pars_fragment:Dm,skinbase_vertex:Lm,skinning_pars_vertex:Um,skinning_vertex:Nm,skinnormal_vertex:km,specularmap_fragment:Om,specularmap_pars_fragment:Bm,tonemapping_fragment:Fm,tonemapping_pars_fragment:zm,transmission_fragment:Hm,transmission_pars_fragment:Gm,uv_pars_fragment:Vm,uv_pars_vertex:Wm,uv_vertex:qm,worldpos_vertex:Xm,background_vert:$m,background_frag:Ym,backgroundCube_vert:jm,backgroundCube_frag:Km,cube_vert:Jm,cube_frag:Zm,depth_vert:Qm,depth_frag:e0,distanceRGBA_vert:t0,distanceRGBA_frag:i0,equirect_vert:n0,equirect_frag:s0,linedashed_vert:a0,linedashed_frag:r0,meshbasic_vert:o0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:h0,meshmatcap_vert:d0,meshmatcap_frag:u0,meshnormal_vert:p0,meshnormal_frag:f0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:v0,meshtoon_vert:y0,meshtoon_frag:x0,points_vert:b0,points_frag:S0,shadow_vert:M0,shadow_frag:w0,sprite_vert:E0,sprite_frag:T0},ie={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Si={basic:{uniforms:Ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ce(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ot([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ot([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ce(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ot([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ot([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ot([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ot([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ot([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ot([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ot([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ot([ie.lights,ie.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Si.physical={uniforms:Ot([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ra={r:0,b:0,g:0},xn=new Ei,A0=new Ue;function C0(a,e,t,i,n,s,r){const o=new ce(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=g(v);y===null?f(o,l):y&&y.isColor&&(f(y,1),x=!0);const C=a.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(a.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(v,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===ur)?(h===void 0&&(h=new te(new Be(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:bs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),xn.copy(x.backgroundRotation),xn.x*=-1,xn.y*=-1,xn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xn.y*=-1,xn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(xn)),h.material.toneMapped=Ve.getTransfer(y.colorSpace)!==it,(d!==y||u!==y.version||p!==a.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=a.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new te(new fn(2,2),new _t({name:"BackgroundMaterial",uniforms:bs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=a.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,x){v.getRGB(Ra,Md(a)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,x,r)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:_,addToRenderList:m}}function R0(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,r=!1;function o(S,I,z,F,W){let j=!1;const V=d(F,z,I);s!==V&&(s=V,c(s.object)),j=p(S,F,z,W),j&&g(S,F,z,W),W!==null&&e.update(W,a.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,y(S,I,z,F),W!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return a.createVertexArray()}function c(S){return a.bindVertexArray(S)}function h(S){return a.deleteVertexArray(S)}function d(S,I,z){const F=z.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let j=W[I.id];j===void 0&&(j={},W[I.id]=j);let V=j[F];return V===void 0&&(V=u(l()),j[F]=V),V}function u(S){const I=[],z=[],F=[];for(let W=0;W<t;W++)I[W]=0,z[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,I,z,F){const W=s.attributes,j=I.attributes;let V=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){const de=W[G];let Se=j[G];if(Se===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),de===void 0||de.attribute!==Se||Se&&de.data!==Se.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(S,I,z,F){const W={},j=I.attributes;let V=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){let de=j[G];de===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const Se={};Se.attribute=de,de&&de.data&&(Se.data=de.data),W[G]=Se,V++}s.attributes=W,s.attributesNum=V,s.index=F}function _(){const S=s.newAttributes;for(let I=0,z=S.length;I<z;I++)S[I]=0}function m(S){f(S,0)}function f(S,I){const z=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;z[S]=1,F[S]===0&&(a.enableVertexAttribArray(S),F[S]=1),W[S]!==I&&(a.vertexAttribDivisor(S,I),W[S]=I)}function v(){const S=s.newAttributes,I=s.enabledAttributes;for(let z=0,F=I.length;z<F;z++)I[z]!==S[z]&&(a.disableVertexAttribArray(z),I[z]=0)}function x(S,I,z,F,W,j,V){V===!0?a.vertexAttribIPointer(S,I,z,W,j):a.vertexAttribPointer(S,I,z,F,W,j)}function y(S,I,z,F){_();const W=F.attributes,j=z.getAttributes(),V=I.defaultAttributeValues;for(const J in j){const G=j[J];if(G.location>=0){let se=W[J];if(se===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){const de=se.normalized,Se=se.itemSize,ze=e.get(se);if(ze===void 0)continue;const nt=ze.buffer,X=ze.type,ee=ze.bytesPerElement,ve=X===a.INT||X===a.UNSIGNED_INT||se.gpuType===ul;if(se.isInterleavedBufferAttribute){const ae=se.data,Ae=ae.stride,Ie=se.offset;if(ae.isInstancedInterleavedBuffer){for(let He=0;He<G.locationSize;He++)f(G.location+He,ae.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<G.locationSize;He++)m(G.location+He);a.bindBuffer(a.ARRAY_BUFFER,nt);for(let He=0;He<G.locationSize;He++)x(G.location+He,Se/G.locationSize,X,de,Ae*ee,(Ie+Se/G.locationSize*He)*ee,ve)}else{if(se.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)f(G.location+ae,se.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ae=0;ae<G.locationSize;ae++)m(G.location+ae);a.bindBuffer(a.ARRAY_BUFFER,nt);for(let ae=0;ae<G.locationSize;ae++)x(G.location+ae,Se/G.locationSize,X,de,Se*ee,Se/G.locationSize*ae*ee,ve)}}else if(V!==void 0){const de=V[J];if(de!==void 0)switch(de.length){case 2:a.vertexAttrib2fv(G.location,de);break;case 3:a.vertexAttrib3fv(G.location,de);break;case 4:a.vertexAttrib4fv(G.location,de);break;default:a.vertexAttrib1fv(G.location,de)}}}}v()}function C(){P();for(const S in i){const I=i[S];for(const z in I){const F=I[z];for(const W in F)h(F[W].object),delete F[W];delete I[z]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const z in I){const F=I[z];for(const W in F)h(F[W].object),delete F[W];delete I[z]}delete i[S.id]}function A(S){for(const I in i){const z=i[I];if(z[S.id]===void 0)continue;const F=z[S.id];for(const W in F)h(F[W].object),delete F[W];delete z[S.id]}}function P(){w(),r=!0,s!==n&&(s=n,c(s.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function I0(a,e,t){let i;function n(c){i=c}function s(c,h){a.drawArrays(i,c,h),t.update(h,i,1)}function r(c,h,d){d!==0&&(a.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function P0(a,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){return!(A!==ai&&i.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yi&&i.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_i&&!P)}function l(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),f=a.getParameter(a.MAX_VERTEX_ATTRIBS),v=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),x=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function D0(a){const e=this;let t=null,i=0,n=!1,s=!1;const r=new En,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||n;return n=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=a.get(d);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,x=v*4;let y=f.clippingState||null;l.value=y,y=h(g,u,x,p);for(let C=0;C!==x;++C)y[C]=t[C];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==_;++x,y+=4)r.copy(d[x]).applyMatrix4(v,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function L0(a){let e=new WeakMap;function t(r,o){return o===Eo?r.mapping=gs:o===To&&(r.mapping=_s),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Eo||o===To)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Vp(l.height);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",n),t(c.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class mr extends wd{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,fc=[.125,.215,.35,.446,.526,.582],Cn=20,Gr=new mr,mc=new ce;let Vr=null,Wr=0,qr=0,Xr=!1;const Tn=(1+Math.sqrt(5))/2,jn=1/Tn,gc=[new R(-Tn,jn,0),new R(Tn,jn,0),new R(-jn,0,Tn),new R(jn,0,Tn),new R(0,Tn,-jn),new R(0,Tn,jn),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Vr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vr,Wr,qr),this._renderer.xr.enabled=Xr,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:qi,format:ai,colorSpace:Nt,depthBuffer:!1},n=vc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U0(s)),this._blurMaterial=N0(s,e,t)}return n}_compileMaterial(e){const t=new te(this._lodPlanes[0],e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,i,n){const o=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(mc),h.toneMapping=un,h.autoClear=!1;const p=new ri({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new te(new Be,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(mc),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;Ia(n,v*x,f>2?x:0,x,x),h.setRenderTarget(n),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===gs||e.mapping===_s;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const s=n?this._cubemapMaterial:this._equirectMaterial,r=new te(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ia(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Gr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gc[(n-s-1)%gc.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new te(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cn-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Cn;m>Cn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cn}`);const f=[];let v=0;for(let A=0;A<Cn;++A){const P=A/_,w=Math.exp(-P*P/2);f.push(w),A===0?v+=w:A<m&&(v+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;const y=this._sizeLods[n],C=3*y*(n>x-rs?n-x+rs:0),T=4*(this._cubeSize-y);Ia(t,C,T,3*y,2*y),l.setRenderTarget(t),l.render(d,Gr)}}function U0(a){const e=[],t=[],i=[];let n=a;const s=a-rs+1+fc.length;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);let l=1/o;r>a-rs?l=fc[r-a+rs-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(w,_*g*T),x.set(u,m*g*T);const S=[T,T,T,T,T,T];y.set(S,f*g*T)}const C=new pt;C.setAttribute("position",new Fe(v,_)),C.setAttribute("uv",new Fe(x,m)),C.setAttribute("faceIndex",new Fe(y,f)),e.push(C),n>rs&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vc(a,e,t){const i=new yi(a,e,t);return i.texture.mapping=ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function N0(a,e,t){const i=new Float32Array(Cn),n=new R(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function yc(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function xc(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function k0(a){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Eo||l===To,h=l===gs||l===_s;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new _c(a)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(t===null&&(t=new _c(a)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function O0(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&qs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function B0(a,e,t,i){const n={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}u.removeEventListener("dispose",r),delete n[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",r),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],a.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],a.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],T=v[x+1],A=v[x+2];u.push(C,T,T,A,A,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,T=x+1,A=x+2;u.push(C,T,T,A,A,C)}}else return;const m=new(gd(u)?Sd:bd)(u,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function F0(a,e,t){let i;function n(u){i=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function l(u,p){a.drawElements(i,p,s,u*r),t.update(p,i,1)}function c(u,p,g){g!==0&&(a.drawElementsInstanced(i,p,s,u*r,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/r,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];t.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function z0(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function H0(a,e,t){const i=new WeakMap,n=new Ke;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=o.attributes.position.count*y,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*d),P=new vd(A,C,T,d);P.type=_i,P.needsUpdate=!0;const w=y*4;for(let I=0;I<d;I++){const z=f[I],F=v[I],W=x[I],j=C*T*4*I;for(let V=0;V<z.count;V++){const J=V*w;g===!0&&(n.fromBufferAttribute(z,V),A[j+J+0]=n.x,A[j+J+1]=n.y,A[j+J+2]=n.z,A[j+J+3]=0),_===!0&&(n.fromBufferAttribute(F,V),A[j+J+4]=n.x,A[j+J+5]=n.y,A[j+J+6]=n.z,A[j+J+7]=0),m===!0&&(n.fromBufferAttribute(W,V),A[j+J+8]=n.x,A[j+J+9]=n.y,A[j+J+10]=n.z,A[j+J+11]=W.itemSize===4?n.w:1)}}u={count:d,texture:P,size:new Me(C,T)},i.set(o,u),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",_),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}return{update:s}}function G0(a,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function r(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class Ad extends Mt{constructor(e,t,i,n,s,r,o,l,c,h=us){if(h!==us&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===us&&(i=Pn),i===void 0&&h===ys&&(i=vs),super(null,n,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cd=new Mt,bc=new Ad(1,1),Rd=new vd,Id=new Cp,Pd=new Ed,Sc=[],Mc=[],wc=new Float32Array(16),Ec=new Float32Array(9),Tc=new Float32Array(4);function As(a,e,t){const i=a[0];if(i<=0||i>0)return a;const n=e*t;let s=Sc[n];if(s===void 0&&(s=new Float32Array(n),Sc[n]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function wt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Et(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function gr(a,e){let t=Mc[e];t===void 0&&(t=new Int32Array(e),Mc[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function V0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function W0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;a.uniform2fv(this.addr,e),Et(t,e)}}function q0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;a.uniform3fv(this.addr,e),Et(t,e)}}function X0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;a.uniform4fv(this.addr,e),Et(t,e)}}function $0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;Tc.set(i),a.uniformMatrix2fv(this.addr,!1,Tc),Et(t,i)}}function Y0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;Ec.set(i),a.uniformMatrix3fv(this.addr,!1,Ec),Et(t,i)}}function j0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,i))return;wc.set(i),a.uniformMatrix4fv(this.addr,!1,wc),Et(t,i)}}function K0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function J0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;a.uniform2iv(this.addr,e),Et(t,e)}}function Z0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;a.uniform3iv(this.addr,e),Et(t,e)}}function Q0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;a.uniform4iv(this.addr,e),Et(t,e)}}function eg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function tg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;a.uniform2uiv(this.addr,e),Et(t,e)}}function ig(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;a.uniform3uiv(this.addr,e),Et(t,e)}}function ng(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;a.uniform4uiv(this.addr,e),Et(t,e)}}function sg(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_2D_SHADOW?(bc.compareFunction=md,s=bc):s=Cd,t.setTexture2D(e||s,n)}function ag(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Id,n)}function rg(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Pd,n)}function og(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Rd,n)}function lg(a){switch(a){case 5126:return V0;case 35664:return W0;case 35665:return q0;case 35666:return X0;case 35674:return $0;case 35675:return Y0;case 35676:return j0;case 5124:case 35670:return K0;case 35667:case 35671:return J0;case 35668:case 35672:return Z0;case 35669:case 35673:return Q0;case 5125:return eg;case 36294:return tg;case 36295:return ig;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}function cg(a,e){a.uniform1fv(this.addr,e)}function hg(a,e){const t=As(e,this.size,2);a.uniform2fv(this.addr,t)}function dg(a,e){const t=As(e,this.size,3);a.uniform3fv(this.addr,t)}function ug(a,e){const t=As(e,this.size,4);a.uniform4fv(this.addr,t)}function pg(a,e){const t=As(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function fg(a,e){const t=As(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function mg(a,e){const t=As(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function gg(a,e){a.uniform1iv(this.addr,e)}function _g(a,e){a.uniform2iv(this.addr,e)}function vg(a,e){a.uniform3iv(this.addr,e)}function yg(a,e){a.uniform4iv(this.addr,e)}function xg(a,e){a.uniform1uiv(this.addr,e)}function bg(a,e){a.uniform2uiv(this.addr,e)}function Sg(a,e){a.uniform3uiv(this.addr,e)}function Mg(a,e){a.uniform4uiv(this.addr,e)}function wg(a,e,t){const i=this.cache,n=e.length,s=gr(t,n);wt(i,s)||(a.uniform1iv(this.addr,s),Et(i,s));for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Cd,s[r])}function Eg(a,e,t){const i=this.cache,n=e.length,s=gr(t,n);wt(i,s)||(a.uniform1iv(this.addr,s),Et(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Id,s[r])}function Tg(a,e,t){const i=this.cache,n=e.length,s=gr(t,n);wt(i,s)||(a.uniform1iv(this.addr,s),Et(i,s));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Pd,s[r])}function Ag(a,e,t){const i=this.cache,n=e.length,s=gr(t,n);wt(i,s)||(a.uniform1iv(this.addr,s),Et(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Rd,s[r])}function Cg(a){switch(a){case 5126:return cg;case 35664:return hg;case 35665:return dg;case 35666:return ug;case 35674:return pg;case 35675:return fg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return xg;case 36294:return bg;case 36295:return Sg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}class Rg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lg(t.type)}}class Ig{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cg(t.type)}}class Pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function Ac(a,e){a.seq.push(e),a.map[e.id]=e}function Dg(a,e,t){const i=a.name,n=i.length;for($r.lastIndex=0;;){const s=$r.exec(i),r=$r.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){Ac(t,c===void 0?new Rg(o,a,e):new Ig(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new Pg(o),Ac(t,d)),t=d}}}class tr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),r=e.getUniformLocation(t,s.name);Dg(s,r,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.id in t&&i.push(r)}return i}}function Cc(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const Lg=37297;let Ug=0;function Ng(a,e){const t=a.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const Rc=new Le;function kg(a){Ve._getMatrix(Rc,Ve.workingColorSpace,a);const e=`mat3( ${Rc.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(a)){case pr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ic(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+Ng(a.getShaderSource(e),r)}else return n}function Og(a,e){const t=kg(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Bg(a,e){let t;switch(e){case Ou:t="Linear";break;case Bu:t="Reinhard";break;case Fu:t="Cineon";break;case Qh:t="ACESFilmic";break;case Hu:t="AgX";break;case Gu:t="Neutral";break;case zu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pa=new R;function Fg(){Ve.getLuminanceCoefficients(Pa);const a=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Hg(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Gg(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=a.getActiveAttrib(e,n),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Xs(a){return a!==""}function Pc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(a){return a.replace(Vg,qg)}const Wg=new Map;function qg(a,e){let t=Oe[e];if(t===void 0){const i=Wg.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tl(t)}const Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(a){return a.replace(Xg,$g)}function $g(a,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Uc(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yg(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function jg(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kg(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function Jg(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Nu:e="ENVMAP_BLENDING_MIX";break;case ku:e="ENVMAP_BLENDING_ADD";break}return e}function Zg(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Qg(a,e,t,i){const n=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Yg(t),c=jg(t),h=Kg(t),d=Jg(t),u=Zg(t),p=zg(t),g=Hg(s),_=n.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),f.length>0&&(f+=`
`)):(m=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),f=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Oe.tonemapping_pars_fragment:"",t.toneMapping!==un?Bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Og("linearToOutputTexel",t.outputColorSpace),Fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),r=tl(r),r=Pc(r,t),r=Dc(r,t),o=tl(o),o=Pc(o,t),o=Dc(o,t),r=Lc(r),o=Lc(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+m+r,y=v+f+o,C=Cc(n,n.VERTEX_SHADER,x),T=Cc(n,n.FRAGMENT_SHADER,y);n.attachShader(_,C),n.attachShader(_,T),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function A(I){if(a.debug.checkShaderErrors){const z=n.getProgramInfoLog(_).trim(),F=n.getShaderInfoLog(C).trim(),W=n.getShaderInfoLog(T).trim();let j=!0,V=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(j=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,_,C,T);else{const J=Ic(n,C,"vertex"),G=Ic(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+J+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||W==="")&&(V=!1);V&&(I.diagnostics={runnable:j,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:f}})}n.deleteShader(C),n.deleteShader(T),P=new tr(n,_),w=Gg(n,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(_,Lg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ug++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let e_=0;class t_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new i_(e),t.set(e,i)),i}}class i_{constructor(e){this.id=e_++,this.code=e,this.usedTimes=0}}function n_(a,e,t,i,n,s,r){const o=new yd,l=new t_,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,I,z,F){const W=z.fog,j=F.geometry,V=w.isMeshStandardMaterial?z.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),G=J&&J.mapping===ur?J.image.height:null,se=g[w.type];w.precision!==null&&(p=n.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=de!==void 0?de.length:0;let ze=0;j.morphAttributes.position!==void 0&&(ze=1),j.morphAttributes.normal!==void 0&&(ze=2),j.morphAttributes.color!==void 0&&(ze=3);let nt,X,ee,ve;if(se){const et=Si[se];nt=et.vertexShader,X=et.fragmentShader}else nt=w.vertexShader,X=w.fragmentShader,l.update(w),ee=l.getVertexShaderID(w),ve=l.getFragmentShaderID(w);const ae=a.getRenderTarget(),Ae=a.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,ut=!!w.map,$e=!!w.matcap,mt=!!J,N=!!w.aoMap,Jt=!!w.lightMap,We=!!w.bumpMap,qe=!!w.normalMap,Ee=!!w.displacementMap,ot=!!w.emissiveMap,we=!!w.metalnessMap,E=!!w.roughnessMap,b=w.anisotropy>0,k=w.clearcoat>0,$=w.dispersion>0,K=w.iridescence>0,q=w.sheen>0,xe=w.transmission>0,re=b&&!!w.anisotropyMap,ue=k&&!!w.clearcoatMap,Ye=k&&!!w.clearcoatNormalMap,Z=k&&!!w.clearcoatRoughnessMap,pe=K&&!!w.iridescenceMap,Te=K&&!!w.iridescenceThicknessMap,Ce=q&&!!w.sheenColorMap,fe=q&&!!w.sheenRoughnessMap,Xe=!!w.specularMap,Ne=!!w.specularColorMap,st=!!w.specularIntensityMap,D=xe&&!!w.transmissionMap,ne=xe&&!!w.thicknessMap,H=!!w.gradientMap,Y=!!w.alphaMap,he=w.alphaTest>0,oe=!!w.alphaHash,Pe=!!w.extensions;let ft=un;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ft=a.toneMapping);const It={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:nt,fragmentShader:X,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ae===null?a.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Nt,alphaToCoverage:!!w.alphaToCoverage,map:ut,matcap:$e,envMap:mt,envMapMode:mt&&J.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Jt,bumpMap:We,normalMap:qe,displacementMap:u&&Ee,emissiveMap:ot,normalMapObjectSpace:qe&&w.normalMapType===ju,normalMapTangentSpace:qe&&w.normalMapType===fd,metalnessMap:we,roughnessMap:E,anisotropy:b,anisotropyMap:re,clearcoat:k,clearcoatMap:ue,clearcoatNormalMap:Ye,clearcoatRoughnessMap:Z,dispersion:$,iridescence:K,iridescenceMap:pe,iridescenceThicknessMap:Te,sheen:q,sheenColorMap:Ce,sheenRoughnessMap:fe,specularMap:Xe,specularColorMap:Ne,specularIntensityMap:st,transmission:xe,transmissionMap:D,thicknessMap:ne,gradientMap:H,opaque:w.transparent===!1&&w.blending===ds&&w.alphaToCoverage===!1,alphaMap:Y,alphaTest:he,alphaHash:oe,combine:w.combine,mapUv:ut&&_(w.map.channel),aoMapUv:N&&_(w.aoMap.channel),lightMapUv:Jt&&_(w.lightMap.channel),bumpMapUv:We&&_(w.bumpMap.channel),normalMapUv:qe&&_(w.normalMap.channel),displacementMapUv:Ee&&_(w.displacementMap.channel),emissiveMapUv:ot&&_(w.emissiveMap.channel),metalnessMapUv:we&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:re&&_(w.anisotropyMap.channel),clearcoatMapUv:ue&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(w.sheenRoughnessMap.channel),specularMapUv:Xe&&_(w.specularMap.channel),specularColorMapUv:Ne&&_(w.specularColorMap.channel),specularIntensityMapUv:st&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:ne&&_(w.thicknessMap.channel),alphaMapUv:Y&&_(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(qe||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(ut||Y),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ae,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:ft,decodeVideoTexture:ut&&w.map.isVideoTexture===!0&&Ve.getTransfer(w.map.colorSpace)===it,decodeVideoTextureEmissive:ot&&w.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(w.emissiveMap.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===jt,flipSided:w.side===zt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function f(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)S.push(I),S.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(v(S,w),x(S,w),S.push(a.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function x(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){const S=g[w.type];let I;if(S){const z=Si[S];I=or.clone(z.uniforms)}else I=w.uniforms;return I}function C(w,S){let I;for(let z=0,F=h.length;z<F;z++){const W=h[z];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new Qg(a,S,w,s),h.push(I)),I}function T(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function s_(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function n(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function a_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Nc(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function kc(){const a=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(d,u,p,g,_,m){let f=a[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},a[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,u,p,g,_,m){const f=r(d,u,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(d,u,p,g,_,m){const f=r(d,u,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||a_),i.length>1&&i.sort(u||Nc),n.length>1&&n.sort(u||Nc)}function h(){for(let d=e,u=a.length;d<u;d++){const p=a[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function r_(){let a=new WeakMap;function e(i,n){const s=a.get(i);let r;return s===void 0?(r=new kc,a.set(i,[r])):n>=s.length?(r=new kc,s.push(r)):r=s[n],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function o_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ce};break;case"SpotLight":t={position:new R,direction:new R,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new R,halfWidth:new R,halfHeight:new R};break}return a[e.id]=t,t}}}function l_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let c_=0;function h_(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function d_(a){const e=new o_,t=l_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const n=new R,s=new Ue,r=new Ue;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,x=0,y=0,C=0,T=0,A=0;c.sort(h_);for(let w=0,S=c.length;w<S;w++){const I=c[w],z=I.color,F=I.intensity,W=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*F,d+=z.g*F,u+=z.b*F;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],F);A++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=I.shadow.matrix,v++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(z).multiplyScalar(F),V.distance=W,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const J=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,J.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[_]=J.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=j,y++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(z).multiplyScalar(F),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const J=I.shadow,G=t.get(I);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=I.shadow.matrix,x++}i.point[g]=V,g++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(F),V.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[f]=V,f++}}m>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=A,i.version=c_++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const x=c[f];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),r.identity(),s.copy(x.matrixWorld),s.premultiply(m),r.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Oc(a){const e=new d_(a),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function r(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function u_(a){let e=new WeakMap;function t(n,s=0){const r=e.get(n);let o;return r===void 0?(o=new Oc(a),e.set(n,[o])):s>=r.length?(o=new Oc(a),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class p_ extends wi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f_ extends wi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
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
}`;function __(a,e,t){let i=new bl;const n=new Me,s=new Me,r=new Ke,o=new p_({depthPacking:Yu}),l=new f_,c={},h=t.maxTextureSize,d={[$i]:zt,[zt]:$i,[jt]:jt},u=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let f=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=a.getRenderTarget(),S=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),z=a.state;z.setBlending(Wi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=f!==Oi&&this.type===Oi,W=f===Oi&&this.type!==Oi;for(let j=0,V=T.length;j<V;j++){const J=T[j],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const se=G.getFrameExtents();if(n.multiply(se),s.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/se.x),n.x=s.x*se.x,G.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/se.y),n.y=s.y*se.y,G.mapSize.y=s.y)),G.map===null||F===!0||W===!0){const Se=this.type!==Oi?{minFilter:Ht,magFilter:Ht}:{};G.map!==null&&G.map.dispose(),G.map=new yi(n.x,n.y,Se),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}a.setRenderTarget(G.map),a.clear();const de=G.getViewportCount();for(let Se=0;Se<de;Se++){const ze=G.getViewport(Se);r.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),z.viewport(r),G.updateMatrices(J,Se),i=G.getFrustum(),y(A,P,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Oi&&v(G,P),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,a.setRenderTarget(w,S,I)};function v(T,A){const P=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(n.x,n.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(A,null,P,u,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(A,null,P,p,_,null)}function x(T,A,P,w){let S=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=P.isPointLight===!0?l:o,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=S.uuid,F=A.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let j=W[F];j===void 0&&(j=S.clone(),W[F]=j,A.addEventListener("dispose",C)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,w===Oi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=a.properties.get(S);z.light=P}return S}function y(T,A,P,w,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Oi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const F=e.update(T),W=T.material;if(Array.isArray(W)){const j=F.groups;for(let V=0,J=j.length;V<J;V++){const G=j[V],se=W[G.materialIndex];if(se&&se.visible){const de=x(T,se,w,S);T.onBeforeShadow(a,T,A,P,F,de,G),a.renderBufferDirect(P,null,F,de,T,G),T.onAfterShadow(a,T,A,P,F,de,G)}}}else if(W.visible){const j=x(T,W,w,S);T.onBeforeShadow(a,T,A,P,F,j,null),a.renderBufferDirect(P,null,F,j,T,null),T.onAfterShadow(a,T,A,P,F,j,null)}}const z=T.children;for(let F=0,W=z.length;F<W;F++)y(z[F],A,P,w,S)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const w=c[P],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const v_={[vo]:yo,[xo]:Mo,[bo]:wo,[ms]:So,[yo]:vo,[Mo]:xo,[wo]:bo,[So]:ms};function y_(a,e){function t(){let D=!1;const ne=new Ke;let H=null;const Y=new Ke(0,0,0,0);return{setMask:function(he){H!==he&&!D&&(a.colorMask(he,he,he,he),H=he)},setLocked:function(he){D=he},setClear:function(he,oe,Pe,ft,It){It===!0&&(he*=ft,oe*=ft,Pe*=ft),ne.set(he,oe,Pe,ft),Y.equals(ne)===!1&&(a.clearColor(he,oe,Pe,ft),Y.copy(ne))},reset:function(){D=!1,H=null,Y.set(-1,0,0,0)}}}function i(){let D=!1,ne=!1,H=null,Y=null,he=null;return{setReversed:function(oe){if(ne!==oe){const Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);const ft=he;he=null,this.setClear(ft)}ne=oe},getReversed:function(){return ne},setTest:function(oe){oe?ae(a.DEPTH_TEST):Ae(a.DEPTH_TEST)},setMask:function(oe){H!==oe&&!D&&(a.depthMask(oe),H=oe)},setFunc:function(oe){if(ne&&(oe=v_[oe]),Y!==oe){switch(oe){case vo:a.depthFunc(a.NEVER);break;case yo:a.depthFunc(a.ALWAYS);break;case xo:a.depthFunc(a.LESS);break;case ms:a.depthFunc(a.LEQUAL);break;case bo:a.depthFunc(a.EQUAL);break;case So:a.depthFunc(a.GEQUAL);break;case Mo:a.depthFunc(a.GREATER);break;case wo:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Y=oe}},setLocked:function(oe){D=oe},setClear:function(oe){he!==oe&&(ne&&(oe=1-oe),a.clearDepth(oe),he=oe)},reset:function(){D=!1,H=null,Y=null,he=null,ne=!1}}}function n(){let D=!1,ne=null,H=null,Y=null,he=null,oe=null,Pe=null,ft=null,It=null;return{setTest:function(et){D||(et?ae(a.STENCIL_TEST):Ae(a.STENCIL_TEST))},setMask:function(et){ne!==et&&!D&&(a.stencilMask(et),ne=et)},setFunc:function(et,oi,Ri){(H!==et||Y!==oi||he!==Ri)&&(a.stencilFunc(et,oi,Ri),H=et,Y=oi,he=Ri)},setOp:function(et,oi,Ri){(oe!==et||Pe!==oi||ft!==Ri)&&(a.stencilOp(et,oi,Ri),oe=et,Pe=oi,ft=Ri)},setLocked:function(et){D=et},setClear:function(et){It!==et&&(a.clearStencil(et),It=et)},reset:function(){D=!1,ne=null,H=null,Y=null,he=null,oe=null,Pe=null,ft=null,It=null}}}const s=new t,r=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,x=null,y=null,C=null,T=null,A=new ce(0,0,0),P=0,w=!1,S=null,I=null,z=null,F=null,W=null;const j=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const G=a.getParameter(a.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=J>=2);let se=null,de={};const Se=a.getParameter(a.SCISSOR_BOX),ze=a.getParameter(a.VIEWPORT),nt=new Ke().fromArray(Se),X=new Ke().fromArray(ze);function ee(D,ne,H,Y){const he=new Uint8Array(4),oe=a.createTexture();a.bindTexture(D,oe),a.texParameteri(D,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(D,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<H;Pe++)D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY?a.texImage3D(ne,0,a.RGBA,1,1,Y,0,a.RGBA,a.UNSIGNED_BYTE,he):a.texImage2D(ne+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,he);return oe}const ve={};ve[a.TEXTURE_2D]=ee(a.TEXTURE_2D,a.TEXTURE_2D,1),ve[a.TEXTURE_CUBE_MAP]=ee(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[a.TEXTURE_2D_ARRAY]=ee(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ve[a.TEXTURE_3D]=ee(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ae(a.DEPTH_TEST),r.setFunc(ms),We(!1),qe(Hl),ae(a.CULL_FACE),N(Wi);function ae(D){h[D]!==!0&&(a.enable(D),h[D]=!0)}function Ae(D){h[D]!==!1&&(a.disable(D),h[D]=!1)}function Ie(D,ne){return d[D]!==ne?(a.bindFramebuffer(D,ne),d[D]=ne,D===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=ne),D===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=ne),!0):!1}function He(D,ne){let H=p,Y=!1;if(D){H=u.get(ne),H===void 0&&(H=[],u.set(ne,H));const he=D.textures;if(H.length!==he.length||H[0]!==a.COLOR_ATTACHMENT0){for(let oe=0,Pe=he.length;oe<Pe;oe++)H[oe]=a.COLOR_ATTACHMENT0+oe;H.length=he.length,Y=!0}}else H[0]!==a.BACK&&(H[0]=a.BACK,Y=!0);Y&&a.drawBuffers(H)}function ut(D){return g!==D?(a.useProgram(D),g=D,!0):!1}const $e={[An]:a.FUNC_ADD,[vu]:a.FUNC_SUBTRACT,[yu]:a.FUNC_REVERSE_SUBTRACT};$e[xu]=a.MIN,$e[bu]=a.MAX;const mt={[Su]:a.ZERO,[Mu]:a.ONE,[wu]:a.SRC_COLOR,[go]:a.SRC_ALPHA,[Iu]:a.SRC_ALPHA_SATURATE,[Cu]:a.DST_COLOR,[Tu]:a.DST_ALPHA,[Eu]:a.ONE_MINUS_SRC_COLOR,[_o]:a.ONE_MINUS_SRC_ALPHA,[Ru]:a.ONE_MINUS_DST_COLOR,[Au]:a.ONE_MINUS_DST_ALPHA,[Pu]:a.CONSTANT_COLOR,[Du]:a.ONE_MINUS_CONSTANT_COLOR,[Lu]:a.CONSTANT_ALPHA,[Uu]:a.ONE_MINUS_CONSTANT_ALPHA};function N(D,ne,H,Y,he,oe,Pe,ft,It,et){if(D===Wi){_===!0&&(Ae(a.BLEND),_=!1);return}if(_===!1&&(ae(a.BLEND),_=!0),D!==_u){if(D!==m||et!==w){if((f!==An||y!==An)&&(a.blendEquation(a.FUNC_ADD),f=An,y=An),et)switch(D){case ds:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Zs:a.blendFunc(a.ONE,a.ONE);break;case Gl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Vl:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ds:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Zs:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Gl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Vl:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,x=null,C=null,T=null,A.set(0,0,0),P=0,m=D,w=et}return}he=he||ne,oe=oe||H,Pe=Pe||Y,(ne!==f||he!==y)&&(a.blendEquationSeparate($e[ne],$e[he]),f=ne,y=he),(H!==v||Y!==x||oe!==C||Pe!==T)&&(a.blendFuncSeparate(mt[H],mt[Y],mt[oe],mt[Pe]),v=H,x=Y,C=oe,T=Pe),(ft.equals(A)===!1||It!==P)&&(a.blendColor(ft.r,ft.g,ft.b,It),A.copy(ft),P=It),m=D,w=!1}function Jt(D,ne){D.side===jt?Ae(a.CULL_FACE):ae(a.CULL_FACE);let H=D.side===zt;ne&&(H=!H),We(H),D.blending===ds&&D.transparent===!1?N(Wi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const Y=D.stencilWrite;o.setTest(Y),Y&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(a.SAMPLE_ALPHA_TO_COVERAGE):Ae(a.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){S!==D&&(D?a.frontFace(a.CW):a.frontFace(a.CCW),S=D)}function qe(D){D!==mu?(ae(a.CULL_FACE),D!==I&&(D===Hl?a.cullFace(a.BACK):D===gu?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ae(a.CULL_FACE),I=D}function Ee(D){D!==z&&(V&&a.lineWidth(D),z=D)}function ot(D,ne,H){D?(ae(a.POLYGON_OFFSET_FILL),(F!==ne||W!==H)&&(a.polygonOffset(ne,H),F=ne,W=H)):Ae(a.POLYGON_OFFSET_FILL)}function we(D){D?ae(a.SCISSOR_TEST):Ae(a.SCISSOR_TEST)}function E(D){D===void 0&&(D=a.TEXTURE0+j-1),se!==D&&(a.activeTexture(D),se=D)}function b(D,ne,H){H===void 0&&(se===null?H=a.TEXTURE0+j-1:H=se);let Y=de[H];Y===void 0&&(Y={type:void 0,texture:void 0},de[H]=Y),(Y.type!==D||Y.texture!==ne)&&(se!==H&&(a.activeTexture(H),se=H),a.bindTexture(D,ne||ve[D]),Y.type=D,Y.texture=ne)}function k(){const D=de[se];D!==void 0&&D.type!==void 0&&(a.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{a.compressedTexImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{a.compressedTexImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{a.texSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{a.texSubImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{a.texStorage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{a.texStorage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{a.texImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{a.texImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(D){nt.equals(D)===!1&&(a.scissor(D.x,D.y,D.z,D.w),nt.copy(D))}function fe(D){X.equals(D)===!1&&(a.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Xe(D,ne){let H=c.get(ne);H===void 0&&(H=new WeakMap,c.set(ne,H));let Y=H.get(D);Y===void 0&&(Y=a.getUniformBlockIndex(ne,D.name),H.set(D,Y))}function Ne(D,ne){const Y=c.get(ne).get(D);l.get(ne)!==Y&&(a.uniformBlockBinding(ne,Y,D.__bindingPointIndex),l.set(ne,Y))}function st(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},se=null,de={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,x=null,y=null,C=null,T=null,A=new ce(0,0,0),P=0,w=!1,S=null,I=null,z=null,F=null,W=null,nt.set(0,0,a.canvas.width,a.canvas.height),X.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ae,disable:Ae,bindFramebuffer:Ie,drawBuffers:He,useProgram:ut,setBlending:N,setMaterial:Jt,setFlipSided:We,setCullFace:qe,setLineWidth:Ee,setPolygonOffset:ot,setScissorTest:we,activeTexture:E,bindTexture:b,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:pe,texImage3D:Te,updateUBOMapping:Xe,uniformBlockBinding:Ne,texStorage2D:Ye,texStorage3D:Z,texSubImage2D:q,texSubImage3D:xe,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Ce,viewport:fe,reset:st}}function Bc(a,e,t,i){const n=x_(i);switch(t){case ad:return a*e;case od:return a*e;case ld:return a*e*2;case ml:return a*e/n.components*n.byteLength;case gl:return a*e/n.components*n.byteLength;case cd:return a*e*2/n.components*n.byteLength;case _l:return a*e*2/n.components*n.byteLength;case rd:return a*e*3/n.components*n.byteLength;case ai:return a*e*4/n.components*n.byteLength;case vl:return a*e*4/n.components*n.byteLength;case Ka:case Ja:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Za:case Qa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Co:case Io:return Math.max(a,16)*Math.max(e,8)/4;case Ao:case Ro:return Math.max(a,8)*Math.max(e,8)/2;case Po:case Do:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Lo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Go:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case er:case Yo:case jo:return Math.ceil(a/4)*Math.ceil(e/4)*16;case hd:case Ko:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Jo:case Zo:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function x_(a){switch(a){case Yi:case id:return{byteLength:1,components:1};case Qs:case nd:case qi:return{byteLength:2,components:1};case pl:case fl:return{byteLength:2,components:4};case Pn:case ul:case _i:return{byteLength:4,components:1};case sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function b_(a,e,t,i,n,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,b){return p?new OffscreenCanvas(E,b):ia("canvas")}function _(E,b,k){let $=1;const K=we(E);if((K.width>k||K.height>k)&&($=k/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor($*K.width),xe=Math.floor($*K.height);d===void 0&&(d=g(q,xe));const re=b?g(q,xe):d;return re.width=q,re.height=xe,re.getContext("2d").drawImage(E,0,0,q,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+xe+")."),re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){a.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?a.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function x(E,b,k,$,K=!1){if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=b;if(b===a.RED&&(k===a.FLOAT&&(q=a.R32F),k===a.HALF_FLOAT&&(q=a.R16F),k===a.UNSIGNED_BYTE&&(q=a.R8)),b===a.RED_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.R8UI),k===a.UNSIGNED_SHORT&&(q=a.R16UI),k===a.UNSIGNED_INT&&(q=a.R32UI),k===a.BYTE&&(q=a.R8I),k===a.SHORT&&(q=a.R16I),k===a.INT&&(q=a.R32I)),b===a.RG&&(k===a.FLOAT&&(q=a.RG32F),k===a.HALF_FLOAT&&(q=a.RG16F),k===a.UNSIGNED_BYTE&&(q=a.RG8)),b===a.RG_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.RG8UI),k===a.UNSIGNED_SHORT&&(q=a.RG16UI),k===a.UNSIGNED_INT&&(q=a.RG32UI),k===a.BYTE&&(q=a.RG8I),k===a.SHORT&&(q=a.RG16I),k===a.INT&&(q=a.RG32I)),b===a.RGB_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.RGB8UI),k===a.UNSIGNED_SHORT&&(q=a.RGB16UI),k===a.UNSIGNED_INT&&(q=a.RGB32UI),k===a.BYTE&&(q=a.RGB8I),k===a.SHORT&&(q=a.RGB16I),k===a.INT&&(q=a.RGB32I)),b===a.RGBA_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),k===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),k===a.UNSIGNED_INT&&(q=a.RGBA32UI),k===a.BYTE&&(q=a.RGBA8I),k===a.SHORT&&(q=a.RGBA16I),k===a.INT&&(q=a.RGBA32I)),b===a.RGB&&k===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),b===a.RGBA){const xe=K?pr:Ve.getTransfer($);k===a.FLOAT&&(q=a.RGBA32F),k===a.HALF_FLOAT&&(q=a.RGBA16F),k===a.UNSIGNED_BYTE&&(q=xe===it?a.SRGB8_ALPHA8:a.RGBA8),k===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),k===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(E,b){let k;return E?b===null||b===Pn||b===vs?k=a.DEPTH24_STENCIL8:b===_i?k=a.DEPTH32F_STENCIL8:b===Qs&&(k=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pn||b===vs?k=a.DEPTH_COMPONENT24:b===_i?k=a.DEPTH_COMPONENT32F:b===Qs&&(k=a.DEPTH_COMPONENT16),k}function C(E,b){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ht&&E.minFilter!==Kt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function T(E){const b=E.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&h.delete(b)}function A(E){const b=E.target;b.removeEventListener("dispose",A),S(b)}function P(E){const b=i.get(E);if(b.__webglInit===void 0)return;const k=E.source,$=u.get(k);if($){const K=$[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(E),Object.keys($).length===0&&u.delete(k)}i.remove(E)}function w(E){const b=i.get(E);a.deleteTexture(b.__webglTexture);const k=E.source,$=u.get(k);delete $[b.__cacheKey],r.memory.textures--}function S(E){const b=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let K=0;K<b.__webglFramebuffer[$].length;K++)a.deleteFramebuffer(b.__webglFramebuffer[$][K]);else a.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)a.deleteFramebuffer(b.__webglFramebuffer[$]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=E.textures;for(let $=0,K=k.length;$<K;$++){const q=i.get(k[$]);q.__webglTexture&&(a.deleteTexture(q.__webglTexture),r.memory.textures--),i.remove(k[$])}i.remove(E)}let I=0;function z(){I=0}function F(){const E=I;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),I+=1,E}function W(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function j(E,b){const k=i.get(E);if(E.isVideoTexture&&Ee(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,E,b);return}}t.bindTexture(a.TEXTURE_2D,k.__webglTexture,a.TEXTURE0+b)}function V(E,b){const k=i.get(E);if(E.version>0&&k.__version!==E.version){X(k,E,b);return}t.bindTexture(a.TEXTURE_2D_ARRAY,k.__webglTexture,a.TEXTURE0+b)}function J(E,b){const k=i.get(E);if(E.version>0&&k.__version!==E.version){X(k,E,b);return}t.bindTexture(a.TEXTURE_3D,k.__webglTexture,a.TEXTURE0+b)}function G(E,b){const k=i.get(E);if(E.version>0&&k.__version!==E.version){ee(k,E,b);return}t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+b)}const se={[Vt]:a.REPEAT,[hn]:a.CLAMP_TO_EDGE,[sr]:a.MIRRORED_REPEAT},de={[Ht]:a.NEAREST,[td]:a.NEAREST_MIPMAP_NEAREST,[Ws]:a.NEAREST_MIPMAP_LINEAR,[Kt]:a.LINEAR,[ja]:a.LINEAR_MIPMAP_NEAREST,[zi]:a.LINEAR_MIPMAP_LINEAR},Se={[Ku]:a.NEVER,[ip]:a.ALWAYS,[Ju]:a.LESS,[md]:a.LEQUAL,[Zu]:a.EQUAL,[tp]:a.GEQUAL,[Qu]:a.GREATER,[ep]:a.NOTEQUAL};function ze(E,b){if(b.type===_i&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Kt||b.magFilter===ja||b.magFilter===Ws||b.magFilter===zi||b.minFilter===Kt||b.minFilter===ja||b.minFilter===Ws||b.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(E,a.TEXTURE_WRAP_S,se[b.wrapS]),a.texParameteri(E,a.TEXTURE_WRAP_T,se[b.wrapT]),(E===a.TEXTURE_3D||E===a.TEXTURE_2D_ARRAY)&&a.texParameteri(E,a.TEXTURE_WRAP_R,se[b.wrapR]),a.texParameteri(E,a.TEXTURE_MAG_FILTER,de[b.magFilter]),a.texParameteri(E,a.TEXTURE_MIN_FILTER,de[b.minFilter]),b.compareFunction&&(a.texParameteri(E,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(E,a.TEXTURE_COMPARE_FUNC,Se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ht||b.minFilter!==Ws&&b.minFilter!==zi||b.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");a.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function nt(E,b){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",T));const $=b.source;let K=u.get($);K===void 0&&(K={},u.set($,K));const q=W(b);if(q!==E.__cacheKey){K[q]===void 0&&(K[q]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,k=!0),K[q].usedTimes++;const xe=K[E.__cacheKey];xe!==void 0&&(K[E.__cacheKey].usedTimes--,xe.usedTimes===0&&w(b)),E.__cacheKey=q,E.__webglTexture=K[q].texture}return k}function X(E,b,k){let $=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=a.TEXTURE_3D);const K=nt(E,b),q=b.source;t.bindTexture($,E.__webglTexture,a.TEXTURE0+k);const xe=i.get(q);if(q.version!==xe.__version||K===!0){t.activeTexture(a.TEXTURE0+k);const re=Ve.getPrimaries(Ve.workingColorSpace),ue=b.colorSpace===ln?null:Ve.getPrimaries(b.colorSpace),Ye=b.colorSpace===ln||re===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Z=_(b.image,!1,n.maxTextureSize);Z=ot(b,Z);const pe=s.convert(b.format,b.colorSpace),Te=s.convert(b.type);let Ce=x(b.internalFormat,pe,Te,b.colorSpace,b.isVideoTexture);ze($,b);let fe;const Xe=b.mipmaps,Ne=b.isVideoTexture!==!0,st=xe.__version===void 0||K===!0,D=q.dataReady,ne=C(b,Z);if(b.isDepthTexture)Ce=y(b.format===ys,b.type),st&&(Ne?t.texStorage2D(a.TEXTURE_2D,1,Ce,Z.width,Z.height):t.texImage2D(a.TEXTURE_2D,0,Ce,Z.width,Z.height,0,pe,Te,null));else if(b.isDataTexture)if(Xe.length>0){Ne&&st&&t.texStorage2D(a.TEXTURE_2D,ne,Ce,Xe[0].width,Xe[0].height);for(let H=0,Y=Xe.length;H<Y;H++)fe=Xe[H],Ne?D&&t.texSubImage2D(a.TEXTURE_2D,H,0,0,fe.width,fe.height,pe,Te,fe.data):t.texImage2D(a.TEXTURE_2D,H,Ce,fe.width,fe.height,0,pe,Te,fe.data);b.generateMipmaps=!1}else Ne?(st&&t.texStorage2D(a.TEXTURE_2D,ne,Ce,Z.width,Z.height),D&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Z.width,Z.height,pe,Te,Z.data)):t.texImage2D(a.TEXTURE_2D,0,Ce,Z.width,Z.height,0,pe,Te,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ne&&st&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ne,Ce,Xe[0].width,Xe[0].height,Z.depth);for(let H=0,Y=Xe.length;H<Y;H++)if(fe=Xe[H],b.format!==ai)if(pe!==null)if(Ne){if(D)if(b.layerUpdates.size>0){const he=Bc(fe.width,fe.height,b.format,b.type);for(const oe of b.layerUpdates){const Pe=fe.data.subarray(oe*he/fe.data.BYTES_PER_ELEMENT,(oe+1)*he/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,H,0,0,oe,fe.width,fe.height,1,pe,Pe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,Z.depth,pe,fe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,H,Ce,fe.width,fe.height,Z.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?D&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,Z.depth,pe,Te,fe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,H,Ce,fe.width,fe.height,Z.depth,0,pe,Te,fe.data)}else{Ne&&st&&t.texStorage2D(a.TEXTURE_2D,ne,Ce,Xe[0].width,Xe[0].height);for(let H=0,Y=Xe.length;H<Y;H++)fe=Xe[H],b.format!==ai?pe!==null?Ne?D&&t.compressedTexSubImage2D(a.TEXTURE_2D,H,0,0,fe.width,fe.height,pe,fe.data):t.compressedTexImage2D(a.TEXTURE_2D,H,Ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&t.texSubImage2D(a.TEXTURE_2D,H,0,0,fe.width,fe.height,pe,Te,fe.data):t.texImage2D(a.TEXTURE_2D,H,Ce,fe.width,fe.height,0,pe,Te,fe.data)}else if(b.isDataArrayTexture)if(Ne){if(st&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ne,Ce,Z.width,Z.height,Z.depth),D)if(b.layerUpdates.size>0){const H=Bc(Z.width,Z.height,b.format,b.type);for(const Y of b.layerUpdates){const he=Z.data.subarray(Y*H/Z.data.BYTES_PER_ELEMENT,(Y+1)*H/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Y,Z.width,Z.height,1,pe,Te,he)}b.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,pe,Te,Z.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ce,Z.width,Z.height,Z.depth,0,pe,Te,Z.data);else if(b.isData3DTexture)Ne?(st&&t.texStorage3D(a.TEXTURE_3D,ne,Ce,Z.width,Z.height,Z.depth),D&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,pe,Te,Z.data)):t.texImage3D(a.TEXTURE_3D,0,Ce,Z.width,Z.height,Z.depth,0,pe,Te,Z.data);else if(b.isFramebufferTexture){if(st)if(Ne)t.texStorage2D(a.TEXTURE_2D,ne,Ce,Z.width,Z.height);else{let H=Z.width,Y=Z.height;for(let he=0;he<ne;he++)t.texImage2D(a.TEXTURE_2D,he,Ce,H,Y,0,pe,Te,null),H>>=1,Y>>=1}}else if(Xe.length>0){if(Ne&&st){const H=we(Xe[0]);t.texStorage2D(a.TEXTURE_2D,ne,Ce,H.width,H.height)}for(let H=0,Y=Xe.length;H<Y;H++)fe=Xe[H],Ne?D&&t.texSubImage2D(a.TEXTURE_2D,H,0,0,pe,Te,fe):t.texImage2D(a.TEXTURE_2D,H,Ce,pe,Te,fe);b.generateMipmaps=!1}else if(Ne){if(st){const H=we(Z);t.texStorage2D(a.TEXTURE_2D,ne,Ce,H.width,H.height)}D&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,pe,Te,Z)}else t.texImage2D(a.TEXTURE_2D,0,Ce,pe,Te,Z);m(b)&&f($),xe.__version=q.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ee(E,b,k){if(b.image.length!==6)return;const $=nt(E,b),K=b.source;t.bindTexture(a.TEXTURE_CUBE_MAP,E.__webglTexture,a.TEXTURE0+k);const q=i.get(K);if(K.version!==q.__version||$===!0){t.activeTexture(a.TEXTURE0+k);const xe=Ve.getPrimaries(Ve.workingColorSpace),re=b.colorSpace===ln?null:Ve.getPrimaries(b.colorSpace),ue=b.colorSpace===ln||xe===re?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,Z=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let Y=0;Y<6;Y++)!Ye&&!Z?pe[Y]=_(b.image[Y],!0,n.maxCubemapSize):pe[Y]=Z?b.image[Y].image:b.image[Y],pe[Y]=ot(b,pe[Y]);const Te=pe[0],Ce=s.convert(b.format,b.colorSpace),fe=s.convert(b.type),Xe=x(b.internalFormat,Ce,fe,b.colorSpace),Ne=b.isVideoTexture!==!0,st=q.__version===void 0||$===!0,D=K.dataReady;let ne=C(b,Te);ze(a.TEXTURE_CUBE_MAP,b);let H;if(Ye){Ne&&st&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ne,Xe,Te.width,Te.height);for(let Y=0;Y<6;Y++){H=pe[Y].mipmaps;for(let he=0;he<H.length;he++){const oe=H[he];b.format!==ai?Ce!==null?Ne?D&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,oe.width,oe.height,Ce,oe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,Xe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?D&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,oe.width,oe.height,Ce,fe,oe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,Xe,oe.width,oe.height,0,Ce,fe,oe.data)}}}else{if(H=b.mipmaps,Ne&&st){H.length>0&&ne++;const Y=we(pe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ne,Xe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Z){Ne?D&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pe[Y].width,pe[Y].height,Ce,fe,pe[Y].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,pe[Y].width,pe[Y].height,0,Ce,fe,pe[Y].data);for(let he=0;he<H.length;he++){const Pe=H[he].image[Y].image;Ne?D&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,Pe.width,Pe.height,Ce,fe,Pe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,Xe,Pe.width,Pe.height,0,Ce,fe,Pe.data)}}else{Ne?D&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ce,fe,pe[Y]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Xe,Ce,fe,pe[Y]);for(let he=0;he<H.length;he++){const oe=H[he];Ne?D&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,Ce,fe,oe.image[Y]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,Xe,Ce,fe,oe.image[Y])}}}m(b)&&f(a.TEXTURE_CUBE_MAP),q.__version=K.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ve(E,b,k,$,K,q){const xe=s.convert(k.format,k.colorSpace),re=s.convert(k.type),ue=x(k.internalFormat,xe,re,k.colorSpace),Ye=i.get(b),Z=i.get(k);if(Z.__renderTarget=b,!Ye.__hasExternalTextures){const pe=Math.max(1,b.width>>q),Te=Math.max(1,b.height>>q);K===a.TEXTURE_3D||K===a.TEXTURE_2D_ARRAY?t.texImage3D(K,q,ue,pe,Te,b.depth,0,xe,re,null):t.texImage2D(K,q,ue,pe,Te,0,xe,re,null)}t.bindFramebuffer(a.FRAMEBUFFER,E),qe(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,K,Z.__webglTexture,0,We(b)):(K===a.TEXTURE_2D||K>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,$,K,Z.__webglTexture,q),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ae(E,b,k){if(a.bindRenderbuffer(a.RENDERBUFFER,E),b.depthBuffer){const $=b.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=y(b.stencilBuffer,K),xe=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=We(b);qe(b)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,re,q,b.width,b.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,re,q,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,q,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,xe,a.RENDERBUFFER,E)}else{const $=b.textures;for(let K=0;K<$.length;K++){const q=$[K],xe=s.convert(q.format,q.colorSpace),re=s.convert(q.type),ue=x(q.internalFormat,xe,re,q.colorSpace),Ye=We(b);k&&qe(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ye,ue,b.width,b.height):qe(b)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ye,ue,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,ue,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ae(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const K=$.__webglTexture,q=We(b);if(b.depthTexture.format===us)qe(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,K,0,q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,K,0);else if(b.depthTexture.format===ys)qe(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,K,0,q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ie(E){const b=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=$}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ae(b.__webglFramebuffer,E)}else if(k){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=a.createRenderbuffer(),ae(b.__webglDepthbuffer[$],E,!1);else{const K=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer[$];a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,K,a.RENDERBUFFER,q)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),ae(b.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,K),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,K)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function He(E,b,k){const $=i.get(E);b!==void 0&&ve($.__webglFramebuffer,E,E.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),k!==void 0&&Ie(E)}function ut(E){const b=E.texture,k=i.get(E),$=i.get(b);E.addEventListener("dispose",A);const K=E.textures,q=E.isWebGLCubeRenderTarget===!0,xe=K.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=b.version,r.memory.textures++),q){k.__webglFramebuffer=[];for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[re]=[];for(let ue=0;ue<b.mipmaps.length;ue++)k.__webglFramebuffer[re][ue]=a.createFramebuffer()}else k.__webglFramebuffer[re]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let re=0;re<b.mipmaps.length;re++)k.__webglFramebuffer[re]=a.createFramebuffer()}else k.__webglFramebuffer=a.createFramebuffer();if(xe)for(let re=0,ue=K.length;re<ue;re++){const Ye=i.get(K[re]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=a.createTexture(),r.memory.textures++)}if(E.samples>0&&qe(E)===!1){k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const ue=K[re];k.__webglColorRenderbuffer[re]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,k.__webglColorRenderbuffer[re]);const Ye=s.convert(ue.format,ue.colorSpace),Z=s.convert(ue.type),pe=x(ue.internalFormat,Ye,Z,ue.colorSpace,E.isXRRenderTarget===!0),Te=We(E);a.renderbufferStorageMultisample(a.RENDERBUFFER,Te,pe,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+re,a.RENDERBUFFER,k.__webglColorRenderbuffer[re])}a.bindRenderbuffer(a.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(q){t.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),ze(a.TEXTURE_CUBE_MAP,b);for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)ve(k.__webglFramebuffer[re][ue],E,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else ve(k.__webglFramebuffer[re],E,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(b)&&f(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let re=0,ue=K.length;re<ue;re++){const Ye=K[re],Z=i.get(Ye);t.bindTexture(a.TEXTURE_2D,Z.__webglTexture),ze(a.TEXTURE_2D,Ye),ve(k.__webglFramebuffer,E,Ye,a.COLOR_ATTACHMENT0+re,a.TEXTURE_2D,0),m(Ye)&&f(a.TEXTURE_2D)}t.unbindTexture()}else{let re=a.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),ze(re,b),b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)ve(k.__webglFramebuffer[ue],E,b,a.COLOR_ATTACHMENT0,re,ue);else ve(k.__webglFramebuffer,E,b,a.COLOR_ATTACHMENT0,re,0);m(b)&&f(re),t.unbindTexture()}E.depthBuffer&&Ie(E)}function $e(E){const b=E.textures;for(let k=0,$=b.length;k<$;k++){const K=b[k];if(m(K)){const q=v(E),xe=i.get(K).__webglTexture;t.bindTexture(q,xe),f(q),t.unbindTexture()}}}const mt=[],N=[];function Jt(E){if(E.samples>0){if(qe(E)===!1){const b=E.textures,k=E.width,$=E.height;let K=a.COLOR_BUFFER_BIT;const q=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xe=i.get(E),re=b.length>1;if(re)for(let ue=0;ue<b.length;ue++)t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=a.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=a.STENCIL_BUFFER_BIT)),re){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);const Ye=i.get(b[ue]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ye,0)}a.blitFramebuffer(0,0,k,$,0,0,k,$,K,a.NEAREST),l===!0&&(mt.length=0,N.length=0,mt.push(a.COLOR_ATTACHMENT0+ue),E.depthBuffer&&E.resolveDepthBuffer===!1&&(mt.push(q),N.push(q),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,N)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<b.length;ue++){t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);const Ye=i.get(b[ue]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,Ye,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const b=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function We(E){return Math.min(n.maxSamples,E.samples)}function qe(E){const b=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(E){const b=r.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function ot(E,b){const k=E.colorSpace,$=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Nt&&k!==ln&&(Ve.getTransfer(k)===it?($!==ai||K!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function we(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=He,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=qe}function S_(a,e){function t(i,n=ln){let s;const r=Ve.getTransfer(n);if(i===Yi)return a.UNSIGNED_BYTE;if(i===pl)return a.UNSIGNED_SHORT_4_4_4_4;if(i===fl)return a.UNSIGNED_SHORT_5_5_5_1;if(i===sd)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===id)return a.BYTE;if(i===nd)return a.SHORT;if(i===Qs)return a.UNSIGNED_SHORT;if(i===ul)return a.INT;if(i===Pn)return a.UNSIGNED_INT;if(i===_i)return a.FLOAT;if(i===qi)return a.HALF_FLOAT;if(i===ad)return a.ALPHA;if(i===rd)return a.RGB;if(i===ai)return a.RGBA;if(i===od)return a.LUMINANCE;if(i===ld)return a.LUMINANCE_ALPHA;if(i===us)return a.DEPTH_COMPONENT;if(i===ys)return a.DEPTH_STENCIL;if(i===ml)return a.RED;if(i===gl)return a.RED_INTEGER;if(i===cd)return a.RG;if(i===_l)return a.RG_INTEGER;if(i===vl)return a.RGBA_INTEGER;if(i===Ka||i===Ja||i===Za||i===Qa)if(r===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ao||i===Co||i===Ro||i===Io)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ao)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Po||i===Do||i===Lo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Po||i===Do)return r===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Lo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uo||i===No||i===ko||i===Oo||i===Bo||i===Fo||i===zo||i===Ho||i===Go||i===Vo||i===Wo||i===qo||i===Xo||i===$o)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===No)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ko)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ho)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Go)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$o)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===er||i===Yo||i===jo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===er)return r===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hd||i===Ko||i===Jo||i===Zo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===er)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ko)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}class M_ extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
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

}`;class A_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Mt,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new _t({vertexShader:E_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C_ extends Ln{constructor(e,t){super();const i=this;let n=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=new A_,m=t.getContextAttributes();let f=null,v=null;const x=[],y=[],C=new Me;let T=null;const A=new Bt;A.viewport=new Ke;const P=new Bt;P.viewport=new Ke;const w=[A,P],S=new M_;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=x[X];return ee===void 0&&(ee=new Yr,x[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=x[X];return ee===void 0&&(ee=new Yr,x[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=x[X];return ee===void 0&&(ee=new Yr,x[X]=ee),ee.getHandSpace()};function F(X){const ee=y.indexOf(X.inputSource);if(ee===-1)return;const ve=x[ee];ve!==void 0&&(ve.update(X.inputSource,X.frame,c||r),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",j);for(let X=0;X<x.length;X++){const ee=y[X];ee!==null&&(y[X]=null,x[X].disconnect(ee))}I=null,z=null,_.reset(),e.setRenderTarget(f),p=null,u=null,d=null,n=null,v=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",W),n.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,ee),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new yi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ve=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?ys:us,ve=m.stencil?vs:Pn);const Ae={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Ae),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new yi(u.textureWidth,u.textureHeight,{format:ai,type:Yi,depthTexture:new Ad(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),nt.setContext(n),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(X){for(let ee=0;ee<X.removed.length;ee++){const ve=X.removed[ee],ae=y.indexOf(ve);ae>=0&&(y[ae]=null,x[ae].disconnect(ve))}for(let ee=0;ee<X.added.length;ee++){const ve=X.added[ee];let ae=y.indexOf(ve);if(ae===-1){for(let Ie=0;Ie<x.length;Ie++)if(Ie>=y.length){y.push(ve),ae=Ie;break}else if(y[Ie]===null){y[Ie]=ve,ae=Ie;break}if(ae===-1)break}const Ae=x[ae];Ae&&Ae.connect(ve)}}const V=new R,J=new R;function G(X,ee,ve){V.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);const ae=V.distanceTo(J),Ae=ee.projectionMatrix.elements,Ie=ve.projectionMatrix.elements,He=Ae[14]/(Ae[10]-1),ut=Ae[14]/(Ae[10]+1),$e=(Ae[9]+1)/Ae[5],mt=(Ae[9]-1)/Ae[5],N=(Ae[8]-1)/Ae[0],Jt=(Ie[8]+1)/Ie[0],We=He*N,qe=He*Jt,Ee=ae/(-N+Jt),ot=Ee*-N;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ot),X.translateZ(Ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ae[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const we=He+Ee,E=ut+Ee,b=We-ot,k=qe+(ae-ot),$=$e*ut/E*we,K=mt*ut/E*we;X.projectionMatrix.makePerspective(b,k,$,K,we,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function se(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let ee=X.near,ve=X.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),S.near=P.near=A.near=ee,S.far=P.far=A.far=ve,(I!==S.near||z!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,z=S.far),A.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,S.layers.mask=A.layers.mask|P.layers.mask;const ae=X.parent,Ae=S.cameras;se(S,ae);for(let Ie=0;Ie<Ae.length;Ie++)se(Ae[Ie],ae);Ae.length===2?G(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),de(X,S,ae)};function de(X,ee,ve){ve===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=xs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Se=null;function ze(X,ee){if(h=ee.getViewerPose(c||r),g=ee,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let Ie=0;Ie<ve.length;Ie++){const He=ve[Ie];let ut=null;if(p!==null)ut=p.getViewport(He);else{const mt=d.getViewSubImage(u,He);ut=mt.viewport,Ie===0&&(e.setRenderTargetTextures(v,mt.colorTexture,u.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(v))}let $e=w[Ie];$e===void 0&&($e=new Bt,$e.layers.enable(Ie),$e.viewport=new Ke,w[Ie]=$e),$e.matrix.fromArray(He.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(He.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ut.x,ut.y,ut.width,ut.height),Ie===0&&(S.matrix.copy($e.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push($e)}const Ae=n.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=d.getDepthInformation(ve[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,n.renderState)}}for(let ve=0;ve<x.length;ve++){const ae=y[ve],Ae=x[ve];ae!==null&&Ae!==void 0&&Ae.update(ae,ee,c||r)}Se&&Se(X,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const nt=new Td;nt.setAnimationLoop(ze),this.setAnimationLoop=function(X){Se=X},this.dispose=function(){}}}const bn=new Ei,R_=new Ue;function I_(a,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Md(a)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,v,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,bn.copy(y),bn.x*=-1,bn.y*=-1,bn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(bn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function P_(a,e,t,i){let n={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=n[v.id];y===void 0&&(g(v),y=h(v),n[v.id]=y,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(u(v),s[v.id]=T)}function h(v){const x=d();v.__bindingPointIndex=x;const y=a.createBuffer(),C=v.__size,T=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,y),a.bufferData(a.UNIFORM_BUFFER,C,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=n[v.id],y=v.uniforms,C=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,x);for(let T=0,A=y.length;T<A;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,S=P.length;w<S;w++){const I=P[w];if(p(I,T,w,C)===!0){const z=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let j=0;j<F.length;j++){const V=F[j],J=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,a.bufferSubData(a.UNIFORM_BUFFER,z+W,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,z,I.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function p(v,x,y,C){const T=v.value,A=x+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const x=v.uniforms;let y=0;const C=16;for(let A=0,P=x.length;A<P;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,I=w.length;S<I;S++){const z=w[S],F=Array.isArray(z.value)?z.value:[z.value];for(let W=0,j=F.length;W<j;W++){const V=F[W],J=_(V),G=y%C,se=G%J.boundary,de=G+se;y+=se,de!==0&&C-de<J.storage&&(y+=C-de),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=J.storage}}}const T=y%C;return T>0&&(y+=C-T),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=r.indexOf(x.__bindingPointIndex);r.splice(y,1),a.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function f(){for(const v in n)a.deleteBuffer(n[v]);r=[],n={},s={}}return{bind:l,update:c,dispose:f}}class D_{constructor(e={}){const{canvas:t=xp(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this.toneMapping=un,this.toneMappingExposure=1;const y=this;let C=!1,T=0,A=0,P=null,w=-1,S=null;const I=new Ke,z=new Ke;let F=null;const W=new ce(0);let j=0,V=t.width,J=t.height,G=1,se=null,de=null;const Se=new Ke(0,0,V,J),ze=new Ke(0,0,V,J);let nt=!1;const X=new bl;let ee=!1,ve=!1;const ae=new Ue,Ae=new Ue,Ie=new R,He=new Ke,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function mt(){return P===null?G:1}let N=i;function Jt(M,L){return t.getContext(M,L)}try{const M={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dl}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",oe,!1),N===null){const L="webgl2";if(N=Jt(L,M),N===null)throw Jt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let We,qe,Ee,ot,we,E,b,k,$,K,q,xe,re,ue,Ye,Z,pe,Te,Ce,fe,Xe,Ne,st,D;function ne(){We=new O0(N),We.init(),Ne=new S_(N,We),qe=new P0(N,We,e,Ne),Ee=new y_(N,We),qe.reverseDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),ot=new z0(N),we=new s_,E=new b_(N,We,Ee,we,qe,Ne,ot),b=new L0(y),k=new k0(y),$=new Xp(N),st=new R0(N,$),K=new B0(N,$,ot,st),q=new G0(N,K,$,ot),Ce=new H0(N,qe,E),Z=new D0(we),xe=new n_(y,b,k,We,qe,st,Z),re=new I_(y,we),ue=new r_,Ye=new u_(We),Te=new C0(y,b,k,Ee,q,p,l),pe=new __(y,q,qe),D=new P_(N,ot,qe,Ee),fe=new I0(N,We,ot),Xe=new F0(N,We,ot),ot.programs=xe.programs,y.capabilities=qe,y.extensions=We,y.properties=we,y.renderLists=ue,y.shadowMap=pe,y.state=Ee,y.info=ot}ne();const H=new C_(y,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=We.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=We.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(V,J,!1))},this.getSize=function(M){return M.set(V,J)},this.setSize=function(M,L,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,J=L,t.width=Math.floor(M*G),t.height=Math.floor(L*G),O===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(V*G,J*G).floor()},this.setDrawingBufferSize=function(M,L,O){V=M,J=L,G=O,t.width=Math.floor(M*O),t.height=Math.floor(L*O),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(Se)},this.setViewport=function(M,L,O,B){M.isVector4?Se.set(M.x,M.y,M.z,M.w):Se.set(M,L,O,B),Ee.viewport(I.copy(Se).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(ze)},this.setScissor=function(M,L,O,B){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,L,O,B),Ee.scissor(z.copy(ze).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(M){Ee.setScissorTest(nt=M)},this.setOpaqueSort=function(M){se=M},this.setTransparentSort=function(M){de=M},this.getClearColor=function(M){return M.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(M=!0,L=!0,O=!0){let B=0;if(M){let U=!1;if(P!==null){const Q=P.texture.format;U=Q===vl||Q===_l||Q===gl}if(U){const Q=P.texture.type,le=Q===Yi||Q===Pn||Q===Qs||Q===vs||Q===pl||Q===fl,me=Te.getClearColor(),ge=Te.getClearAlpha(),Re=me.r,De=me.g,_e=me.b;le?(g[0]=Re,g[1]=De,g[2]=_e,g[3]=ge,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Re,_[1]=De,_[2]=_e,_[3]=ge,N.clearBufferiv(N.COLOR,0,_))}else B|=N.COLOR_BUFFER_BIT}L&&(B|=N.DEPTH_BUFFER_BIT),O&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),Ye.dispose(),we.dispose(),b.dispose(),k.dispose(),q.dispose(),st.dispose(),D.dispose(),xe.dispose(),H.dispose(),H.removeEventListener("sessionstart",Ll),H.removeEventListener("sessionend",Ul),mn.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=ot.autoReset,L=pe.enabled,O=pe.autoUpdate,B=pe.needsUpdate,U=pe.type;ne(),ot.autoReset=M,pe.enabled=L,pe.autoUpdate=O,pe.needsUpdate=B,pe.type=U}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Pe(M){const L=M.target;L.removeEventListener("dispose",Pe),ft(L)}function ft(M){It(M),we.remove(M)}function It(M){const L=we.get(M).programs;L!==void 0&&(L.forEach(function(O){xe.releaseProgram(O)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,O,B,U,Q){L===null&&(L=ut);const le=U.isMesh&&U.matrixWorld.determinant()<0,me=uu(M,L,O,B,U);Ee.setMaterial(B,le);let ge=O.index,Re=1;if(B.wireframe===!0){if(ge=K.getWireframeAttribute(O),ge===void 0)return;Re=2}const De=O.drawRange,_e=O.attributes.position;let je=De.start*Re,at=(De.start+De.count)*Re;Q!==null&&(je=Math.max(je,Q.start*Re),at=Math.min(at,(Q.start+Q.count)*Re)),ge!==null?(je=Math.max(je,0),at=Math.min(at,ge.count)):_e!=null&&(je=Math.max(je,0),at=Math.min(at,_e.count));const lt=at-je;if(lt<0||lt===1/0)return;st.setup(U,B,me,O,ge);let Gt,Je=fe;if(ge!==null&&(Gt=$.get(ge),Je=Xe,Je.setIndex(Gt)),U.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*mt()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(U.isLine){let be=B.linewidth;be===void 0&&(be=1),Ee.setLineWidth(be*mt()),U.isLineSegments?Je.setMode(N.LINES):U.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else U.isPoints?Je.setMode(N.POINTS):U.isSprite&&Je.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const be=U._multiDrawStarts,Ii=U._multiDrawCounts,Ze=U._multiDrawCount,li=ge?$.get(ge).bytesPerElement:1,Nn=we.get(B).currentProgram.getUniforms();for(let Wt=0;Wt<Ze;Wt++)Nn.setValue(N,"_gl_DrawID",Wt),Je.render(be[Wt]/li,Ii[Wt])}else if(U.isInstancedMesh)Je.renderInstances(je,lt,U.count);else if(O.isInstancedBufferGeometry){const be=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ii=Math.min(O.instanceCount,be);Je.renderInstances(je,lt,Ii)}else Je.render(je,lt)};function et(M,L,O){M.transparent===!0&&M.side===jt&&M.forceSinglePass===!1?(M.side=zt,M.needsUpdate=!0,da(M,L,O),M.side=$i,M.needsUpdate=!0,da(M,L,O),M.side=jt):da(M,L,O)}this.compile=function(M,L,O=null){O===null&&(O=M),f=Ye.get(O),f.init(L),x.push(f),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==O&&M.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const B=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const me=Q[le];et(me,O,U),B.add(me)}else et(Q,O,U),B.add(Q)}),x.pop(),f=null,B},this.compileAsync=function(M,L,O=null){const B=this.compile(M,L,O);return new Promise(U=>{function Q(){if(B.forEach(function(le){we.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){U(M);return}setTimeout(Q,10)}We.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let oi=null;function Ri(M){oi&&oi(M)}function Ll(){mn.stop()}function Ul(){mn.start()}const mn=new Td;mn.setAnimationLoop(Ri),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(M){oi=M,H.setAnimationLoop(M),M===null?mn.stop():mn.start()},H.addEventListener("sessionstart",Ll),H.addEventListener("sessionend",Ul),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(L),L=H.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,L,P),f=Ye.get(M,x.length),f.init(L),x.push(f),Ae.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,ee=Z.init(this.clippingPlanes,ve),m=ue.get(M,v.length),m.init(),v.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=y.xr.getDepthSensingMesh();Q!==null&&xr(Q,L,-1/0,y.sortObjects)}xr(M,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(se,de),$e=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,$e&&Te.addToRenderList(m,M),this.info.render.frame++,ee===!0&&Z.beginShadows();const O=f.state.shadowsArray;pe.render(O,M,L),ee===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(f.setupLights(),L.isArrayCamera){const Q=L.cameras;if(U.length>0)for(let le=0,me=Q.length;le<me;le++){const ge=Q[le];kl(B,U,M,ge)}$e&&Te.render(M);for(let le=0,me=Q.length;le<me;le++){const ge=Q[le];Nl(m,M,ge,ge.viewport)}}else U.length>0&&kl(B,U,M,L),$e&&Te.render(M),Nl(m,M,L);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,L),st.resetDefaultState(),w=-1,S=null,x.pop(),x.length>0?(f=x[x.length-1],ee===!0&&Z.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function xr(M,L,O,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){B&&He.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ae);const le=q.update(M),me=M.material;me.visible&&m.push(M,le,me,O,He.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||X.intersectsObject(M))){const le=q.update(M),me=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),He.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),He.copy(le.boundingSphere.center)),He.applyMatrix4(M.matrixWorld).applyMatrix4(Ae)),Array.isArray(me)){const ge=le.groups;for(let Re=0,De=ge.length;Re<De;Re++){const _e=ge[Re],je=me[_e.materialIndex];je&&je.visible&&m.push(M,le,je,O,He.z,_e)}}else me.visible&&m.push(M,le,me,O,He.z,null)}}const Q=M.children;for(let le=0,me=Q.length;le<me;le++)xr(Q[le],L,O,B)}function Nl(M,L,O,B){const U=M.opaque,Q=M.transmissive,le=M.transparent;f.setupLightsView(O),ee===!0&&Z.setGlobalState(y.clippingPlanes,O),B&&Ee.viewport(I.copy(B)),U.length>0&&ha(U,L,O),Q.length>0&&ha(Q,L,O),le.length>0&&ha(le,L,O),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function kl(M,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new yi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?qi:Yi,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const Q=f.state.transmissionRenderTarget[B.id],le=B.viewport||I;Q.setSize(le.z,le.w);const me=y.getRenderTarget();y.setRenderTarget(Q),y.getClearColor(W),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),$e&&Te.render(O);const ge=y.toneMapping;y.toneMapping=un;const Re=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),ee===!0&&Z.setGlobalState(y.clippingPlanes,B),ha(M,O,B),E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q),We.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let _e=0,je=L.length;_e<je;_e++){const at=L[_e],lt=at.object,Gt=at.geometry,Je=at.material,be=at.group;if(Je.side===jt&&lt.layers.test(B.layers)){const Ii=Je.side;Je.side=zt,Je.needsUpdate=!0,Ol(lt,O,B,Gt,Je,be),Je.side=Ii,Je.needsUpdate=!0,De=!0}}De===!0&&(E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q))}y.setRenderTarget(me),y.setClearColor(W,j),Re!==void 0&&(B.viewport=Re),y.toneMapping=ge}function ha(M,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let U=0,Q=M.length;U<Q;U++){const le=M[U],me=le.object,ge=le.geometry,Re=B===null?le.material:B,De=le.group;me.layers.test(O.layers)&&Ol(me,L,O,ge,Re,De)}}function Ol(M,L,O,B,U,Q){M.onBeforeRender(y,L,O,B,U,Q),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(y,L,O,B,M,Q),U.transparent===!0&&U.side===jt&&U.forceSinglePass===!1?(U.side=zt,U.needsUpdate=!0,y.renderBufferDirect(O,L,B,U,M,Q),U.side=$i,U.needsUpdate=!0,y.renderBufferDirect(O,L,B,U,M,Q),U.side=jt):y.renderBufferDirect(O,L,B,U,M,Q),M.onAfterRender(y,L,O,B,U,Q)}function da(M,L,O){L.isScene!==!0&&(L=ut);const B=we.get(M),U=f.state.lights,Q=f.state.shadowsArray,le=U.state.version,me=xe.getParameters(M,U.state,Q,L,O),ge=xe.getProgramCacheKey(me);let Re=B.programs;B.environment=M.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(M.isMeshStandardMaterial?k:b).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",Pe),Re=new Map,B.programs=Re);let De=Re.get(ge);if(De!==void 0){if(B.currentProgram===De&&B.lightsStateVersion===le)return Fl(M,me),De}else me.uniforms=xe.getUniforms(M),M.onBeforeCompile(me,y),De=xe.acquireProgram(me,ge),Re.set(ge,De),B.uniforms=me.uniforms;const _e=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(_e.clippingPlanes=Z.uniform),Fl(M,me),B.needsLights=fu(M),B.lightsStateVersion=le,B.needsLights&&(_e.ambientLightColor.value=U.state.ambient,_e.lightProbe.value=U.state.probe,_e.directionalLights.value=U.state.directional,_e.directionalLightShadows.value=U.state.directionalShadow,_e.spotLights.value=U.state.spot,_e.spotLightShadows.value=U.state.spotShadow,_e.rectAreaLights.value=U.state.rectArea,_e.ltc_1.value=U.state.rectAreaLTC1,_e.ltc_2.value=U.state.rectAreaLTC2,_e.pointLights.value=U.state.point,_e.pointLightShadows.value=U.state.pointShadow,_e.hemisphereLights.value=U.state.hemi,_e.directionalShadowMap.value=U.state.directionalShadowMap,_e.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_e.spotShadowMap.value=U.state.spotShadowMap,_e.spotLightMatrix.value=U.state.spotLightMatrix,_e.spotLightMap.value=U.state.spotLightMap,_e.pointShadowMap.value=U.state.pointShadowMap,_e.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=De,B.uniformsList=null,De}function Bl(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=tr.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Fl(M,L){const O=we.get(M);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function uu(M,L,O,B,U){L.isScene!==!0&&(L=ut),E.resetTextureUnits();const Q=L.fog,le=B.isMeshStandardMaterial?L.environment:null,me=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Nt,ge=(B.isMeshStandardMaterial?k:b).get(B.envMap||le),Re=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,De=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),_e=!!O.morphAttributes.position,je=!!O.morphAttributes.normal,at=!!O.morphAttributes.color;let lt=un;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(lt=y.toneMapping);const Gt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Je=Gt!==void 0?Gt.length:0,be=we.get(B),Ii=f.state.lights;if(ee===!0&&(ve===!0||M!==S)){const Zt=M===S&&B.id===w;Z.setState(B,M,Zt)}let Ze=!1;B.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ii.state.version||be.outputColorSpace!==me||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==ge||B.fog===!0&&be.fog!==Q||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Z.numPlanes||be.numIntersection!==Z.numIntersection)||be.vertexAlphas!==Re||be.vertexTangents!==De||be.morphTargets!==_e||be.morphNormals!==je||be.morphColors!==at||be.toneMapping!==lt||be.morphTargetsCount!==Je)&&(Ze=!0):(Ze=!0,be.__version=B.version);let li=be.currentProgram;Ze===!0&&(li=da(B,L,U));let Nn=!1,Wt=!1,Ps=!1;const ct=li.getUniforms(),bi=be.uniforms;if(Ee.useProgram(li.program)&&(Nn=!0,Wt=!0,Ps=!0),B.id!==w&&(w=B.id,Wt=!0),Nn||S!==M){Ee.buffers.depth.getReversed()?(ae.copy(M.projectionMatrix),Sp(ae),Mp(ae),ct.setValue(N,"projectionMatrix",ae)):ct.setValue(N,"projectionMatrix",M.projectionMatrix),ct.setValue(N,"viewMatrix",M.matrixWorldInverse);const Ji=ct.map.cameraPosition;Ji!==void 0&&Ji.setValue(N,Ie.setFromMatrixPosition(M.matrixWorld)),qe.logarithmicDepthBuffer&&ct.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ct.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Wt=!0,Ps=!0)}if(U.isSkinnedMesh){ct.setOptional(N,U,"bindMatrix"),ct.setOptional(N,U,"bindMatrixInverse");const Zt=U.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),ct.setValue(N,"boneTexture",Zt.boneTexture,E))}U.isBatchedMesh&&(ct.setOptional(N,U,"batchingTexture"),ct.setValue(N,"batchingTexture",U._matricesTexture,E),ct.setOptional(N,U,"batchingIdTexture"),ct.setValue(N,"batchingIdTexture",U._indirectTexture,E),ct.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ct.setValue(N,"batchingColorTexture",U._colorsTexture,E));const Ds=O.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Ce.update(U,O,li),(Wt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,ct.setValue(N,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(bi.envMap.value=ge,bi.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(bi.envMapIntensity.value=L.environmentIntensity),Wt&&(ct.setValue(N,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&pu(bi,Ps),Q&&B.fog===!0&&re.refreshFogUniforms(bi,Q),re.refreshMaterialUniforms(bi,B,G,J,f.state.transmissionRenderTarget[M.id]),tr.upload(N,Bl(be),bi,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(tr.upload(N,Bl(be),bi,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ct.setValue(N,"center",U.center),ct.setValue(N,"modelViewMatrix",U.modelViewMatrix),ct.setValue(N,"normalMatrix",U.normalMatrix),ct.setValue(N,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Zt=B.uniformsGroups;for(let Ji=0,Zi=Zt.length;Ji<Zi;Ji++){const zl=Zt[Ji];D.update(zl,li),D.bind(zl,li)}}return li}function pu(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function fu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,L,O){we.get(M.texture).__webglTexture=L,we.get(M.depthTexture).__webglTexture=O;const B=we.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const O=we.get(M);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,O=0){P=M,T=L,A=O;let B=!0,U=null,Q=!1,le=!1;if(M){const ge=we.get(M);if(ge.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(ge.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(ge.__hasExternalTextures)E.rebindTextures(M,we.get(M.texture).__webglTexture,we.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const _e=M.depthTexture;if(ge.__boundDepthTexture!==_e){if(_e!==null&&we.has(_e)&&(M.width!==_e.image.width||M.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(le=!0);const De=we.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[L])?U=De[L][O]:U=De[L],Q=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?U=we.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[O]:U=De,I.copy(M.viewport),z.copy(M.scissor),F=M.scissorTest}else I.copy(Se).multiplyScalar(G).floor(),z.copy(ze).multiplyScalar(G).floor(),F=nt;if(Ee.bindFramebuffer(N.FRAMEBUFFER,U)&&B&&Ee.drawBuffers(M,U),Ee.viewport(I),Ee.scissor(z),Ee.setScissorTest(F),Q){const ge=we.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge.__webglTexture,O)}else if(le){const ge=we.get(M.texture),Re=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.__webglTexture,O||0,Re)}w=-1},this.readRenderTargetPixels=function(M,L,O,B,U,Q,le){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){Ee.bindFramebuffer(N.FRAMEBUFFER,me);try{const ge=M.texture,Re=ge.format,De=ge.type;if(!qe.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&O>=0&&O<=M.height-U&&N.readPixels(L,O,B,U,Ne.convert(Re),Ne.convert(De),Q)}finally{const ge=P!==null?we.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(M,L,O,B,U,Q,le){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){const ge=M.texture,Re=ge.format,De=ge.type;if(!qe.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-B&&O>=0&&O<=M.height-U){Ee.bindFramebuffer(N.FRAMEBUFFER,me);const _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(L,O,B,U,Ne.convert(Re),Ne.convert(De),0);const je=P!==null?we.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,je);const at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bp(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(_e),N.deleteSync(at),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,O=0){M.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-O),U=Math.floor(M.image.width*B),Q=Math.floor(M.image.height*B),le=L!==null?L.x:0,me=L!==null?L.y:0;E.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,le,me,U,Q),Ee.unbindTexture()},this.copyTextureToTexture=function(M,L,O=null,B=null,U=0){M.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],L=arguments[2],U=arguments[3]||0,O=null);let Q,le,me,ge,Re,De,_e,je,at;const lt=M.isCompressedTexture?M.mipmaps[U]:M.image;O!==null?(Q=O.max.x-O.min.x,le=O.max.y-O.min.y,me=O.isBox3?O.max.z-O.min.z:1,ge=O.min.x,Re=O.min.y,De=O.isBox3?O.min.z:0):(Q=lt.width,le=lt.height,me=lt.depth||1,ge=0,Re=0,De=0),B!==null?(_e=B.x,je=B.y,at=B.z):(_e=0,je=0,at=0);const Gt=Ne.convert(L.format),Je=Ne.convert(L.type);let be;L.isData3DTexture?(E.setTexture3D(L,0),be=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),be=N.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),be=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const Ii=N.getParameter(N.UNPACK_ROW_LENGTH),Ze=N.getParameter(N.UNPACK_IMAGE_HEIGHT),li=N.getParameter(N.UNPACK_SKIP_PIXELS),Nn=N.getParameter(N.UNPACK_SKIP_ROWS),Wt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,Re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De);const Ps=M.isDataArrayTexture||M.isData3DTexture,ct=L.isDataArrayTexture||L.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const bi=we.get(M),Ds=we.get(L),Zt=we.get(bi.__renderTarget),Ji=we.get(Ds.__renderTarget);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Zi=0;Zi<me;Zi++)Ps&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(M).__webglTexture,U,De+Zi),M.isDepthTexture?(ct&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(L).__webglTexture,U,at+Zi),N.blitFramebuffer(ge,Re,Q,le,_e,je,Q,le,N.DEPTH_BUFFER_BIT,N.NEAREST)):ct?N.copyTexSubImage3D(be,U,_e,je,at+Zi,ge,Re,Q,le):N.copyTexSubImage2D(be,U,_e,je,at+Zi,ge,Re,Q,le);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(be,U,_e,je,at,Q,le,me,Gt,Je,lt.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(be,U,_e,je,at,Q,le,me,Gt,lt.data):N.texSubImage3D(be,U,_e,je,at,Q,le,me,Gt,Je,lt):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_e,je,Q,le,Gt,Je,lt.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_e,je,lt.width,lt.height,Gt,lt.data):N.texSubImage2D(N.TEXTURE_2D,U,_e,je,Q,le,Gt,Je,lt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ii),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),N.pixelStorei(N.UNPACK_SKIP_PIXELS,li),N.pixelStorei(N.UNPACK_SKIP_ROWS,Nn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Wt),U===0&&L.generateMipmaps&&N.generateMipmap(be),Ee.unbindTexture()},this.copyTextureToTexture3D=function(M,L,O=null,B=null,U=0){return M.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,M=arguments[2],L=arguments[3],U=arguments[4]||0),qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,L,O,B,U)},this.initRenderTarget=function(M){we.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,Ee.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}class Ml{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=t}clone(){return new Ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lr{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ce(e),this.near=t,this.far=i}clone(){return new lr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class L_ extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class U_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new R;class wl{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Fe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fc=new R,zc=new Ke,Hc=new Ke,N_=new R,Gc=new Ue,Da=new R,jr=new Ti,Vc=new Ue,Kr=new fr;class k_ extends te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wl,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Da),this.boundingBox.expandByPoint(Da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Da),this.boundingSphere.expandByPoint(Da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),e.ray.intersectsSphere(jr)!==!1&&(Vc.copy(n).invert(),Kr.copy(e.ray).applyMatrix4(Vc),!(this.boundingBox!==null&&Kr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;zc.fromBufferAttribute(n.attributes.skinIndex,e),Hc.fromBufferAttribute(n.attributes.skinWeight,e),Fc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Hc.getComponent(s);if(r!==0){const o=zc.getComponent(s);Gc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(N_.copy(Fc).applyMatrix4(Gc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Dd extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ld extends Mt{constructor(e=null,t=1,i=1,n,s,r,o,l,c=Ht,h=Ht,d,u){super(null,r,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=new Ue,O_=new Ue;class El{constructor(e=[],t=[]){this.uuid=vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:O_;Wc.multiplyMatrices(o,t[s]),Wc.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new El(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ld(t,e,e,ai,_i);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Dd),this.bones.push(r),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const r=t[n];e.bones.push(r.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class il extends Fe{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Kn=new Ue,qc=new Ue,La=[],Xc=new xi,B_=new Ue,Os=new te,Bs=new Ti;class F_ extends te{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new il(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,B_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kn),Xc.copy(e.boundingBox).applyMatrix4(Kn),this.boundingBox.union(Xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kn),Bs.copy(e.boundingSphere).applyMatrix4(Kn),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,r=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),e.ray.intersectsSphere(Bs)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Kn),qc.multiplyMatrices(i,Kn),Os.matrixWorld=qc,Os.raycast(e,La);for(let r=0,o=La.length;r<o;r++){const l=La[r];l.instanceId=s,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ld(new Float32Array(n*this.count),n,this.count,ml,_i));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=n*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ud extends wi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cr=new R,hr=new R,$c=new Ue,Fs=new fr,Ua=new Ti,Jr=new R,Yc=new R;class Tl extends dt{constructor(e=new pt,t=new Ud){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)cr.fromBufferAttribute(t,n-1),hr.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=cr.distanceTo(hr);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(n),Ua.radius+=s,e.ray.intersectsSphere(Ua)===!1)return;$c.copy(n).invert(),Fs.copy(e.ray).applyMatrix4($c);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),v=h.getX(_+1),x=Na(this,e,Fs,l,f,v);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Na(this,e,Fs,l,_,m);f&&t.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=p,m=g-1;_<m;_+=c){const f=Na(this,e,Fs,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=Na(this,e,Fs,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Na(a,e,t,i,n,s){const r=a.geometry.attributes.position;if(cr.fromBufferAttribute(r,n),hr.fromBufferAttribute(r,s),t.distanceSqToSegment(cr,hr,Jr,Yc)>i)return;Jr.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(Jr);if(!(l<e.near||l>e.far))return{distance:l,point:Yc.clone().applyMatrix4(a.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:a}}const jc=new R,Kc=new R;class z_ extends Tl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)jc.fromBufferAttribute(t,n),Kc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+jc.distanceTo(Kc);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class H_ extends Tl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nd extends wi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jc=new Ue,nl=new fr,ka=new Ti,Oa=new R;class Rn extends dt{constructor(e=new pt,t=new Nd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(n),ka.radius+=s,e.ray.intersectsSphere(ka)===!1)return;Jc.copy(n).invert(),nl.copy(e.ray).applyMatrix4(Jc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,_=p;g<_;g++){const m=c.getX(g);Oa.fromBufferAttribute(d,m),Zc(Oa,m,l,n,e,t,this)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=u,_=p;g<_;g++)Oa.fromBufferAttribute(d,g),Zc(Oa,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zc(a,e,t,i,n,s,r){const o=nl.distanceSqToPoint(a);if(o<t){const l=new R;nl.closestPointToPoint(a,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class ji extends Mt{constructor(e,t,i,n,s,r,o,l,c){super(e,t,i,n,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class na extends pt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],r=[],o=[],l=[],c=new R,h=new Me;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=i+d/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Gi extends pt{constructor(e=1,t=1,i=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=i/2;let f=0;v(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(p,2));function v(){const y=new R,C=new R;let T=0;const A=(t-e)/i;for(let P=0;P<=s;P++){const w=[],S=P/s,I=S*(t-e)+e;for(let z=0;z<=n;z++){const F=z/n,W=F*l+o,j=Math.sin(W),V=Math.cos(W);C.x=I*j,C.y=-S*i+m,C.z=I*V,d.push(C.x,C.y,C.z),y.set(j,A,V).normalize(),u.push(y.x,y.y,y.z),p.push(F,1-S),w.push(g++)}_.push(w)}for(let P=0;P<n;P++)for(let w=0;w<s;w++){const S=_[w][P],I=_[w+1][P],z=_[w+1][P+1],F=_[w][P+1];(e>0||w!==0)&&(h.push(S,I,F),T+=3),(t>0||w!==s-1)&&(h.push(I,z,F),T+=3)}c.addGroup(f,T,0),f+=T}function x(y){const C=g,T=new Me,A=new R;let P=0;const w=y===!0?e:t,S=y===!0?1:-1;for(let z=1;z<=n;z++)d.push(0,m*S,0),u.push(0,S,0),p.push(.5,.5),g++;const I=g;for(let z=0;z<=n;z++){const W=z/n*l+o,j=Math.cos(W),V=Math.sin(W);A.x=w*V,A.y=m*S,A.z=w*j,d.push(A.x,A.y,A.z),u.push(0,S,0),T.x=j*.5+.5,T.y=V*.5*S+.5,p.push(T.x,T.y),g++}for(let z=0;z<n;z++){const F=C+z,W=I+z;y===!0?h.push(W,W+1,F):h.push(W+1,W,F),P+=3}c.addGroup(f,P,y===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cn extends Gi{constructor(e=1,t=1,i=32,n=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,n,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new cn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _r extends pt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],r=[];o(n),c(i),h(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new R,y=new R,C=new R;for(let T=0;T<t.length;T+=3)p(t[T+0],x),p(t[T+1],y),p(t[T+2],C),l(x,y,C,v)}function l(v,x,y,C){const T=C+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const w=v.clone().lerp(y,P/T),S=x.clone().lerp(y,P/T),I=T-P;for(let z=0;z<=I;z++)z===0&&P===T?A[P][z]=w:A[P][z]=w.clone().lerp(S,z/I)}for(let P=0;P<T;P++)for(let w=0;w<2*(T-P)-1;w++){const S=Math.floor(w/2);w%2===0?(u(A[P][S+1]),u(A[P+1][S]),u(A[P][S])):(u(A[P][S+1]),u(A[P+1][S+1]),u(A[P+1][S]))}}function c(v){const x=new R;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const v=new R;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=m(v)/2/Math.PI+.5,C=f(v)/Math.PI+.5;r.push(y,1-C)}g(),d()}function d(){for(let v=0;v<r.length;v+=6){const x=r[v+0],y=r[v+2],C=r[v+4],T=Math.max(x,y,C),A=Math.min(x,y,C);T>.9&&A<.1&&(x<.2&&(r[v+0]+=1),y<.2&&(r[v+2]+=1),C<.2&&(r[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function p(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const v=new R,x=new R,y=new R,C=new R,T=new Me,A=new Me,P=new Me;for(let w=0,S=0;w<s.length;w+=9,S+=6){v.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),T.set(r[S+0],r[S+1]),A.set(r[S+2],r[S+3]),P.set(r[S+4],r[S+5]),C.copy(v).add(x).add(y).divideScalar(3);const I=m(C);_(T,S+0,v,I),_(A,S+2,x,I),_(P,S+4,y,I)}}function _(v,x,y,C){C<0&&v.x===1&&(r[x]=v.x-1),y.x===0&&y.z===0&&(r[x]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.vertices,e.indices,e.radius,e.details)}}class Ks extends _r{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ks(e.radius,e.detail)}}class vr extends pt{constructor(e=.5,t=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/n,p=new R,g=new Me;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){const f=s+m/i*r;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<n;_++){const m=_*(i+1);for(let f=0;f<i;f++){const v=f+m,x=v,y=v+i+1,C=v+i+2,T=v+1;o.push(x,y,T),o.push(y,C,T)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fi extends pt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new R,u=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const v=[],x=f/i;let y=0;f===0&&r===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const T=C/t;d.x=-e*Math.cos(n+T*s)*Math.sin(r+x*o),d.y=e*Math.cos(r+x*o),d.z=e*Math.sin(n+T*s)*Math.sin(r+x*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+y,1-x),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const x=h[f][v+1],y=h[f][v],C=h[f+1][v],T=h[f+1][v+1];(f!==0||r>0)&&p.push(x,y,T),(f!==i-1||l<Math.PI)&&p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Al extends _r{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Al(e.radius,e.detail)}}class ye extends wi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ai extends ye{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ba(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function G_(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function V_(a){function e(n,s){return a[n]-a[s]}const t=a.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Qc(a,e,t){const i=a.length,n=new a.constructor(i);for(let s=0,r=0;r!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[r++]=a[o+l]}return n}function kd(a,e,t,i){let n=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(e.push(s.time),t.push(r)),s=a[n++];while(s!==void 0)}class sa{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let r;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}r=t.length;break i}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}r=i,i=0;break i}break e}for(;i<r;){const o=i+r>>>1;e<t[o]?r=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class W_ extends sa{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ss,endingEnd:ss}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,r=e+1,o=n[s],l=n[r];if(o===void 0)switch(this.getSettings_().endingStart){case as:s=e,o=2*t-i;break;case ar:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case as:r=e,l=2*i-t;break;case ar:r=1,l=i+n[1]-n[0];break;default:r=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let C=0;C!==o;++C)s[C]=f*r[h+C]+v*r[c+C]+x*r[l+C]+y*r[d+C];return s}}class Od extends sa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=r[c+u]*d+r[l+u]*h;return s}}class q_ extends sa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ci{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new q_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Od(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new W_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case ta:t=this.InterpolantFactoryMethodLinear;break;case br:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return br}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(n!==void 0&&G_(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===br,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const d=o*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const d=o*i,u=r*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++r}}if(s>0){e[r]=e[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=ta;class Cs extends Ci{constructor(e,t,i){super(e,t,i)}}Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=ea;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bd extends Ci{}Bd.prototype.ValueTypeName="color";class Ss extends Ci{}Ss.prototype.ValueTypeName="number";class X_ extends sa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ft.slerpFlat(s,0,r,c-o,r,c,l);return s}}class Ms extends Ci{InterpolantFactoryMethodLinear(e){return new X_(this.times,this.values,this.getValueSize(),e)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Ci{constructor(e,t,i){super(e,t,i)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ea;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends Ci{}ws.prototype.ValueTypeName="vector";class sl{constructor(e="",t=-1,i=[],n=yl){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=vi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,o=i.length;r!==o;++r)t.push(Y_(i[r]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=i.length;s!==r;++s)t.push(Ci.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=V_(l);l=Qc(l,1,h),c=Qc(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Ss(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=n[d];u||(n[d]=u=[]),u.push(c)}}const r=[];for(const o in n)r.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,u,p,g,_){if(p.length!==0){const m=[],f=[];kd(p,m,f,g),m.length!==0&&_.push(new d(u,m,f))}},n=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)p[u[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let v=0;v!==u[g].morphTargets.length;++v){const x=u[g];m.push(x.time),f.push(x.morphTarget===_?1:0)}n.push(new Ss(".morphTargetInfluence["+_+"]",m,f))}l=p.length*r}else{const p=".bones["+t[d].name+"]";i(ws,p+".position",u,"pos",n),i(Ms,p+".quaternion",u,"rot",n),i(ws,p+".scale",u,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $_(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return Bd;case"quaternion":return Ms;case"bool":case"boolean":return Cs;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Y_(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$_(a.type);if(a.times===void 0){const t=[],i=[];kd(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const dn={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class j_{constructor(e,t,i){const n=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const K_=new j_;class Un{constructor(e){this.manager=e!==void 0?e:K_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Un.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class J_ extends Error{constructor(e,t){super(e),this.response=t}}class dr extends Un{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=dn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:i,onError:n});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:i,onError:n});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ki[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){v();function v(){d.read().then(({done:x,value:y})=>{if(x)f.close();else{_+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,A=h.length;T<A;T++){const P=h[T];P.onProgress&&P.onProgress(C)}f.enqueue(y),v()}},x=>{f.error(x)})}}});return new Response(m)}else throw new J_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{dn.add(e,c);const h=ki[e];delete ki[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Z_ extends Un{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=dn.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=ia("img");function l(){h(),dn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),n&&n(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Q_ extends Un{constructor(e){super(e)}load(e,t,i,n){const s=new Mt,r=new Z_(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class aa extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ev extends aa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zr=new Ue,eh=new R,th=new R;class Cl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),Zr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tv extends Cl{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=xs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class iv extends aa{constructor(e,t,i=0,n=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new tv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ih=new Ue,zs=new R,Qr=new R;class nv extends Cl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(zs),Qr.copy(i.position),Qr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qr),i.updateMatrixWorld(),n.makeTranslation(-zs.x,-zs.y,-zs.z),ih.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}}class si extends aa{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new nv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sv extends Cl{constructor(){super(new mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yr extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new sv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class av extends aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Js{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class rv extends Un{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=dn.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return dn.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),dn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});dn.add(e,l),s.manager.itemStart(e)}}class Fd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nh(){return performance.now()}class ov{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,r;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==n;++o)i[s+o]=i[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,r=n;s!==r;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)e[t+r]=e[i+r]}_slerp(e,t,i,n){Ft.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const r=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,r,e,t,e,i),Ft.slerpFlat(e,t,e,t,e,r,n)}_lerp(e,t,i,n,s){const r=1-n;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*r+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let r=0;r!==s;++r){const o=t+r;e[o]=e[o]+e[i+r]*n}}}const Rl="\\[\\]\\.:\\/",lv=new RegExp("["+Rl+"]","g"),Il="[^"+Rl+"]",cv="[^"+Rl.replace("\\.","")+"]",hv=/((?:WC+[\/:])*)/.source.replace("WC",Il),dv=/(WCOD+)?/.source.replace("WCOD",cv),uv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),fv=new RegExp("^"+hv+dv+uv+pv+"$"),mv=["material","materials","bones","map"];class gv{constructor(e,t,i){const n=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lv,"")}static parseTrackName(e){const t=fv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);mv.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[n];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=gv;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _v{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,r=s.length,o=new Array(r),l={endingStart:ss,endingEnd:ss};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ud,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,r=s/n,o=n/s;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qu:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(r),c[h].accumulateAdditive(o);break;case yl:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(r),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const r=i===Wu;if(e===0)return s===-1?n:r&&(s&1)===1?t-n:n;if(i===dd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(r&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=as,n.endingEnd=as):(e?n.endingStart=this.zeroSlopeAtStart?as:ss:n.endingStart=ar,t?n.endingEnd=this.zeroSlopeAtEnd?as:ss:n.endingEnd=ar)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,l=r.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}const vv=new Float32Array(1);class yv extends Ln{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,r=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=n[d],p=u.name;let g=h[p];if(g!==void 0)++g.referenceCount,r[d]=g;else{if(g=r[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new ov(Qe.create(i,p,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),r[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),r.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,o=r[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let r=n[t];r===void 0&&(r={},n[t]=r),r[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,o=r[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Od(new Float32Array(2),new Float32Array(2),1,vv),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let r=typeof e=="string"?sl.findByName(n,e):e;const o=r!==null?r.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(r!==null?i=r.blendMode:i=yl),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new _v(this,r,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?sl.findByName(i,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,r);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const r=s.knownActions;for(let o=0,l=r.length;o!==l;++o){const c=r[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const r in i){const o=i[r].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const r in s){const o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);const zd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ra{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xv=new mr(-1,1,1,-1,0,1);class bv extends pt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}}const Sv=new bv;class Hd{constructor(e){this._mesh=new te(Sv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Gd extends ra{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=or.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hd(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class sh extends ra{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Mv extends ra{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class wv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Me);this._width=i.width,this._height=i.height,t=new yi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gd(zd),this.copyPass.material.blending=Wi,this.clock=new Fd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}sh!==void 0&&(r instanceof sh?i=!0:r instanceof Mv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ev extends ra{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=n}}const Tv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Es extends ra{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new yi(s,r,{type:qi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new yi(s,r,{type:qi});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new yi(s,r,{type:qi});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),r=Math.round(r/2)}const o=Tv;this.highPassUniforms=or.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Me(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=zd;this.copyUniforms=or.clone(h.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Zs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new ri,this.fsQuad=new Hd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Me(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Es.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Es.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new _t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Es.BlurDirectionX=new Me(1,0);Es.BlurDirectionY=new Me(0,1);const Av={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Me(1/1024,1/512)}},vertexShader:`

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
			
		}`};function Cv(a){const e=new Map,t=new Map,i=a.clone();return Vd(a,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,r=e.get(n),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Vd(a,e,t){t(a,e);for(let i=0;i<a.children.length;i++)Vd(a.children[i],e.children[i],t)}const ah=3,rh=[-ah,0,ah],Rv=-22,Iv=-60,Pv=-18,Dv=-40,Lv=7,Uv=10,Nv=40,kv=.5,Ov=1.5,Bv=1,oh=.8,Fv=1,zv=.18,yt={RUN:"Running_A",JUMP:"Jump_Full_Short",SLIDE:"Crawling",DODGE_L:"Dodge_Left",DODGE_R:"Dodge_Right",ATTACK:"Melee_Unarmed_Attack_Punch_A",HIT:"Hit_A",DEATH:"Death_A",IDLE:"Idle_A"};class Hv{constructor(e,t,i="knight"){this.scene=e;const n=t.characters[i]||t.knight;let s=!1;n.scene.traverse(u=>{u.isSkinnedMesh&&(s=!0)}),s?this.model=Cv(n.scene):this.model=n.scene.clone();const r=new xi().setFromObject(this.model),o=r.max.y-r.min.y,c=o>0?2/o:1.8;this.model.scale.setScalar(c);const h=new xi().setFromObject(this.model);this.model.position.y=-h.min.y,this._baseModelY=this.model.position.y,this.model.rotation.y=Math.PI,this.model.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!1)}),this.group=new bt,this.group.add(this.model),e.add(this.group),this.mixer=new yv(this.model),this.actions={},this.currentAction=null,this.hasAnimations=!1;const d=t.animations;if(s&&d.size>0){this.hasAnimations=!0;for(const[u,p]of d){const g=this.mixer.clipAction(p);this.actions[u]=g,u===yt.RUN||u===yt.IDLE||u===yt.SLIDE?g.setLoop(ud):(g.setLoop(dd),g.clampWhenFinished=!0)}this.mixer.addEventListener("finished",u=>{u.action.getClip().name!==yt.DEATH&&(this.dead||this._playAnimation(yt.RUN))}),this._playAnimation(yt.IDLE)}this.lane=1,this.targetX=0,this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.maxJumps=2,this.isSuperJump=!1,this.sliding=!1,this.slideTimer=0,this.attacking=!1,this.attackTimer=0,this.stumbling=!1,this.stumbleTimer=0,this.invulnTimer=0,this.dead=!1,this.running=!1,this.runSpeed=12,this.baseSpeed=12,this.bossSpeedTier=0,this.runTime=0,this.speedMultiplier=1,this.position=this.group.position,this.position.set(0,0,0)}_playAnimation(e,t=zv){const i=this.actions[e];i&&(this.currentAction===i&&i.isRunning()||(i.reset(),i.enabled=!0,this.currentAction&&this.currentAction!==i&&this.currentAction.crossFadeTo(i,t,!0),i.play(),this.currentAction=i))}get isInvulnerable(){return this.invulnTimer>0}get colliderHeight(){return this.sliding?.5:1.5}get colliderY(){return this.sliding?.25:.75}startRunning(){this.running=!0,this._playAnimation(yt.RUN)}moveLeft(){this.dead||this.lane>0&&(this.lane--,this.targetX=rh[this.lane],this._playAnimation(yt.DODGE_L,.1))}moveRight(){this.dead||this.lane<2&&(this.lane++,this.targetX=rh[this.lane],this._playAnimation(yt.DODGE_R,.1))}jump(){this.dead||(this.sliding&&(this.sliding=!1,this.slideTimer=0),this.jumpsUsed<this.maxJumps&&(this.jumpsUsed===0?(this.velocityY=Lv,this.isSuperJump=!1):(this.velocityY=Uv,this.isSuperJump=!0),this.grounded=!1,this.jumpsUsed++,this._playAnimation(yt.JUMP,.1)))}slide(){this.dead||!this.grounded||(this.sliding=!0,this.slideTimer=kv,this._playAnimation(yt.SLIDE,.15))}attack(){this.dead||this.attacking||(this.attacking=!0,this.attackTimer=Bv,this._playAnimation(yt.ATTACK,.1))}stumble(){this.dead||this.isInvulnerable||this.stumbling||(this.stumbling=!0,this.stumbleTimer=oh,this.invulnTimer=oh+Fv,this._playAnimation(yt.HIT,.1))}die(){this.dead=!0,this.runSpeed=0,this._playAnimation(yt.DEATH,.2)}celebrate(){this.dead=!0,this.running=!1,this.runSpeed=0,this._playAnimation(yt.IDLE,.3)}revive(){this.dead=!1,this.running=!0,this.runSpeed=this.baseSpeed*Math.pow(1.1,this.bossSpeedTier)+Math.min(2,this.runTime*.03),this.stumbling=!1,this.stumbleTimer=0,this.invulnTimer=2,this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.sliding=!1,this.attacking=!1,this.group.visible=!0,this._playAnimation(yt.RUN)}update(e){if(this.mixer.update(e),!this.hasAnimations&&this.running&&!this.dead){const n=this.runTime*12;this.model.position.y=this._baseModelY+Math.abs(Math.sin(n))*.12,this.model.rotation.x=-.15,this.model.rotation.z=Math.sin(n*.5)*.05}if(this.dead)return;this.runTime+=e,this.runSpeed=this.baseSpeed*Math.pow(1.1,this.bossSpeedTier)+Math.min(2,this.runTime*.03);const t=this.sliding?Ov:1;this.position.z-=this.runSpeed*this.speedMultiplier*t*e;const i=this.targetX-this.position.x;if(Math.abs(i)>.01?this.position.x+=Math.sign(i)*Math.min(Math.abs(i),Nv*e):this.position.x=this.targetX,!this.grounded){let n;this.isSuperJump?n=this.velocityY>0?Pv:Dv:n=this.velocityY>0?Rv:Iv,this.velocityY+=n*e,this.position.y+=this.velocityY*e,this.position.y<=0&&(this.position.y=0,this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.isSuperJump=!1,!this.sliding&&!this.attacking&&!this.stumbling&&this._playAnimation(yt.RUN))}this.sliding&&(this.slideTimer-=e,this.slideTimer<=0&&(this.sliding=!1,this._playAnimation(yt.RUN))),this.attacking&&(this.attackTimer-=e,this.attackTimer<=0&&(this.attacking=!1)),this.stumbling&&(this.stumbleTimer-=e,this.stumbleTimer<=0&&(this.stumbling=!1)),this.invulnTimer>0&&(this.invulnTimer-=e),this.invulnTimer>0&&!this.stumbling?this.group.visible=Math.floor(this.invulnTimer*10)%2===0:this.group.visible=!0}reset(){this.lane=1,this.targetX=0,this.position.set(0,0,0),this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.isSuperJump=!1,this.sliding=!1,this.slideTimer=0,this.attacking=!1,this.attackTimer=0,this.stumbling=!1,this.stumbleTimer=0,this.invulnTimer=0,this.dead=!1,this.running=!1,this.runSpeed=12,this.baseSpeed=12,this.bossSpeedTier=0,this.runTime=0,this.speedMultiplier=1,this.group.visible=!0,this.mixer.stopAllAction(),this.currentAction=null,this._playAnimation(yt.IDLE)}applySkinTint(e){if(e==null)return;this._originalMaterials||(this._originalMaterials=new Map,this.model.traverse(i=>{if(i.isMesh&&i.material){const n=Array.isArray(i.material)?i.material:[i.material];for(const s of n)s.color&&!this._originalMaterials.has(s)&&this._originalMaterials.set(s,s.color.clone())}}));const t=new ce(e);this.model.traverse(i=>{if(i.isMesh&&i.material){const n=Array.isArray(i.material)?i.material:[i.material];for(const s of n){const r=this._originalMaterials.get(s);r&&s.color&&s.color.copy(r).multiply(t)}}})}clearSkinTint(){if(this._originalMaterials)for(const[e,t]of this._originalMaterials)e.color&&e.color.copy(t)}applyAuraEffect(e){if(!e)return;this.removeAuraEffect();const[t,i,n]=e.color,s=new ce(t,i,n);this._auraLight=new si(s,e.intensity*2,6),this._auraLight.position.set(0,1.2,0),this.group.add(this._auraLight),this._auraConfig=e}removeAuraEffect(){this._auraLight&&(this.group.remove(this._auraLight),this._auraLight.dispose(),this._auraLight=null),this._auraConfig=null}dispose(){this.removeAuraEffect(),this.mixer.stopAllAction(),this.scene.remove(this.group),this.group.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))})}}function Ki(a,e){const t=document.createElement("canvas");return t.width=a,t.height=e,[t,t.getContext("2d")]}function Gv(a=256){const[e,t]=Ki(a,a);t.fillStyle="#b0a080",t.fillRect(0,0,a,a);for(let s=0;s<a*a*.3;s++){const r=Math.random()*a,o=Math.random()*a,l=140+Math.random()*50;t.fillStyle=`rgb(${l},${l-10},${l-25})`,t.fillRect(r,o,1+Math.random()*2,1+Math.random()*2)}t.strokeStyle="rgba(80,70,50,0.3)",t.lineWidth=2;const i=a/6;for(let s=0;s<6;s++){const r=s*i;t.beginPath(),t.moveTo(0,r),t.lineTo(a,r),t.stroke();const o=s%2*(a/4);for(let l=0;l<4;l++){const c=o+l*(a/2);t.beginPath(),t.moveTo(c,r),t.lineTo(c,r+i),t.stroke()}}const n=new ji(e);return n.wrapS=n.wrapT=Vt,n.repeat.set(2,8),n}function Vv(a=256){const[e,t]=Ki(a,a);t.fillStyle="#7a6243",t.fillRect(0,0,a,a);for(let n=0;n<a*a*.4;n++){const s=Math.random()*a,r=Math.random()*a,o=80+Math.random()*60;t.fillStyle=`rgb(${o+20},${o+10},${o-10})`,t.fillRect(s,r,1+Math.random()*3,1+Math.random()*3)}for(let n=0;n<30;n++){const s=Math.random()*a,r=Math.random()*a,o=2+Math.random()*4;t.fillStyle=`rgba(${100+Math.random()*40},${90+Math.random()*30},${70+Math.random()*20},0.5)`,t.beginPath(),t.ellipse(s,r,o,o*.7,Math.random()*Math.PI,0,Math.PI*2),t.fill()}const i=new ji(e);return i.wrapS=i.wrapT=Vt,i.repeat.set(3,12),i}function Wv(a=512){const[e,t]=Ki(a,a),i=t.createRadialGradient(a/2,a/2,0,a/2,a/2,a*.7);i.addColorStop(0,"#4a8c3a"),i.addColorStop(.5,"#3a7030"),i.addColorStop(1,"#2a5a22"),t.fillStyle=i,t.fillRect(0,0,a,a);for(let s=0;s<20;s++){const r=Math.random()*a,o=Math.random()*a,l=20+Math.random()*40,c=Math.random()>.5?"rgba(60,120,40,0.3)":"rgba(30,50,20,0.25)";t.fillStyle=c,t.beginPath(),t.ellipse(r,o,l,l*.7,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let s=0;s<3;s++){const r=600+s*200;for(let o=0;o<r;o++){const l=Math.random()*a,c=Math.random()*a,h=50+Math.random()*100,d=25+Math.random()*35,u=15+Math.random()*25;t.strokeStyle=`rgba(${d},${h},${u},${.4+s*.2})`,t.lineWidth=.3+Math.random()*1.2,t.beginPath(),t.moveTo(l,c);const p=3+Math.random()*8,g=(Math.random()-.5)*6;t.quadraticCurveTo(l+g*.5,c-p*.5,l+g,c-p),t.stroke()}}for(let s=0;s<40;s++){const r=Math.random()*a,o=Math.random()*a,l=["#ffee44","#ff8844","#ffffff","#ff66aa","#aaddff"];t.fillStyle=l[Math.floor(Math.random()*l.length)],t.beginPath(),t.arc(r,o,1+Math.random()*1.5,0,Math.PI*2),t.fill()}const n=new ji(e);return n.wrapS=n.wrapT=Vt,n.repeat.set(6,6),n}function qv(a=256){const[e,t]=Ki(a,a);t.fillStyle="#c4a35a",t.fillRect(0,0,a,a);for(let n=0;n<a*a*.5;n++){const s=Math.random()*a,r=Math.random()*a,o=170+Math.random()*40;t.fillStyle=`rgb(${o},${o-20},${o-60})`,t.fillRect(s,r,1,1)}t.strokeStyle="rgba(180,150,90,0.15)",t.lineWidth=1;for(let n=0;n<20;n++){const s=Math.random()*a;t.beginPath(),t.moveTo(0,s);for(let r=0;r<a;r+=10)t.lineTo(r,s+Math.sin(r*.05)*3);t.stroke()}const i=new ji(e);return i.wrapS=i.wrapT=Vt,i.repeat.set(6,6),i}function Xv(a=256){const[e,t]=Ki(a,a);t.fillStyle="#1a0a0a",t.fillRect(0,0,a,a);for(let n=0;n<15;n++){let s=Math.random()*a,r=Math.random()*a;t.strokeStyle=`rgba(${200+Math.random()*55},${50+Math.random()*50},0,0.4)`,t.lineWidth=1+Math.random()*2,t.beginPath(),t.moveTo(s,r);for(let o=0;o<8;o++)s+=(Math.random()-.5)*30,r+=(Math.random()-.5)*30,t.lineTo(s,r);t.stroke()}for(let n=0;n<a*a*.2;n++){const s=Math.random()*a,r=Math.random()*a,o=20+Math.random()*25;t.fillStyle=`rgb(${o+5},${o},${o})`,t.fillRect(s,r,1+Math.random()*2,1+Math.random()*2)}const i=new ji(e);return i.wrapS=i.wrapT=Vt,i.repeat.set(4,4),i}function $v(a=256){const[e,t]=Ki(a,a);t.fillStyle="#d8dce4",t.fillRect(0,0,a,a);for(let n=0;n<200;n++){const s=Math.random()*a,r=Math.random()*a,o=220+Math.random()*35;t.fillStyle=`rgb(${o},${o},${o+5})`,t.beginPath(),t.arc(s,r,.5+Math.random(),0,Math.PI*2),t.fill()}for(let n=0;n<5;n++){t.fillStyle="rgba(180,185,195,0.3)";const s=Math.random()*a,r=Math.random()*a;t.beginPath(),t.ellipse(s,r,4,6,Math.random(),0,Math.PI*2),t.fill()}const i=new ji(e);return i.wrapS=i.wrapT=Vt,i.repeat.set(6,6),i}function Yv(a=128){const[e,t]=Ki(a,a);t.fillStyle="#5a3a1e",t.fillRect(0,0,a,a),t.strokeStyle="rgba(40,25,10,0.3)",t.lineWidth=1;for(let n=0;n<30;n++){const s=n/30*a+(Math.random()-.5)*3;t.beginPath(),t.moveTo(0,s);for(let r=0;r<a;r+=5)t.lineTo(r,s+Math.sin(r*.03+n)*2);t.stroke()}const i=new ji(e);return i.wrapS=i.wrapT=Vt,i}function jv(a=128){const[e,t]=Ki(a,a);t.fillStyle="#4a2a10",t.fillRect(0,0,a,a);for(let n=0;n<40;n++){t.strokeStyle=`rgba(${30+Math.random()*30},${15+Math.random()*15},${5+Math.random()*10},0.4)`,t.lineWidth=2+Math.random()*3;const s=n/40*a;t.beginPath(),t.moveTo(0,s),t.lineTo(a,s+(Math.random()-.5)*8),t.stroke()}const i=new ji(e);return i.wrapS=i.wrapT=Vt,i}function Kv(a=128){const[e,t]=Ki(a,a),i=t.createRadialGradient(a/2,a/2,0,a/2,a/2,a/2);return i.addColorStop(0,"#ffe44d"),i.addColorStop(.7,"#ffd700"),i.addColorStop(1,"#b8960a"),t.fillStyle=i,t.fillRect(0,0,a,a),t.fillStyle="rgba(180,140,20,0.6)",t.font=`bold ${a*.5}px serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("V",a/2,a/2),t.strokeStyle="rgba(140,110,10,0.5)",t.lineWidth=4,t.beginPath(),t.arc(a/2,a/2,a/2-4,0,Math.PI*2),t.stroke(),new ji(e)}const Jn=[{name:"single_center",obstacles:[{lane:1}]},{name:"single_center2",obstacles:[{lane:1}]},{name:"single_left",obstacles:[{lane:0}]},{name:"single_right",obstacles:[{lane:2}]},{name:"gap_left",obstacles:[{lane:1},{lane:2}]},{name:"gap_center",obstacles:[{lane:0},{lane:2}]},{name:"gap_right",obstacles:[{lane:0},{lane:1}]}],Fa=[{name:"jump_wall",obstacles:[{lane:0,type:"low"},{lane:1,type:"low"},{lane:2,type:"low"}],hint:"jump"},{name:"zigzag_lr",obstacles:[{lane:0,zOffset:0},{lane:2,zOffset:-8}]},{name:"zigzag_rl",obstacles:[{lane:2,zOffset:0},{lane:0,zOffset:-8}]},{name:"corridor_center",obstacles:[{lane:0},{lane:2},{lane:0,zOffset:-10},{lane:2,zOffset:-10}]},{name:"center_spread",obstacles:[{lane:1,zOffset:0},{lane:0,zOffset:-8},{lane:2,zOffset:-8}]},{name:"double_center",obstacles:[{lane:1,zOffset:0},{lane:1,zOffset:-10}]}],eo=[{name:"gauntlet",obstacles:[{lane:0,zOffset:0},{lane:1,zOffset:-7},{lane:2,zOffset:-14}]},{name:"gauntlet_rev",obstacles:[{lane:2,zOffset:0},{lane:1,zOffset:-7},{lane:0,zOffset:-14}]},{name:"center_then_sides",obstacles:[{lane:1,zOffset:0},{lane:0,zOffset:-8},{lane:2,zOffset:-8}]},{name:"switchback",obstacles:[{lane:0,zOffset:0},{lane:1,zOffset:0},{lane:1,zOffset:-10},{lane:2,zOffset:-10}]}],lh=[{name:"gate_break",obstacles:[{lane:0,breakable:!0,type:"gate"},{lane:1,breakable:!0,type:"gate"},{lane:2,breakable:!0,type:"gate"}]},{name:"gate_then_dodge",obstacles:[{lane:0,breakable:!0,type:"gate"},{lane:1,breakable:!0,type:"gate"},{lane:2,breakable:!0,type:"gate"},{lane:1,zOffset:-10}]}],ch=[{name:"slide_gate",obstacles:[{lane:0,type:"slide_gate"},{lane:1,type:"slide_gate"},{lane:2,type:"slide_gate"}],hint:"slide"},{name:"slide_or_dodge",obstacles:[{lane:0,type:"slide_gate"},{lane:2,type:"slide_gate"},{lane:1}]}],ei={small:["barrel_small","crate_small"],medium:["barrel_large","crate_large","rocks","barrier"],large:["column","pillar","pillar_decorated"]},hh={straight:(a,e,t)=>{const i=[];for(let n=0;n<e;n++)i.push({lane:a,zOffset:-t*n,y:.8});return i},arc:(a,e,t)=>{const i=[];for(let n=0;n<e;n++){const s=n/(e-1),r=.8+Math.sin(s*Math.PI)*2.5;i.push({lane:a,zOffset:-t*n,y:r})}return i},zigzag:(a,e,t)=>{const i=[];let n=a,s=a===0?1:a===2?-1:Math.random()>.5?1:-1;for(let r=0;r<e;r++)i.push({lane:n,zOffset:-t*r,y:.8}),n+=s,(n>2||n<0)&&(s=-s,n+=s*2);return i}};function to(a){const e=a%6;let t;switch(e){case 0:t=Jn;break;case 1:t=Math.random()<.4?Jn:Fa;break;case 2:t=Math.random()<.2?Jn:Math.random()<.5?Fa:eo;break;case 3:t=Math.random()<.15?Jn:Math.random()<.3?Fa:Math.random()<.5?eo:lh;break;case 4:t=Math.random()<.5?Jn:ch;break;case 5:default:t=[...Jn,...Fa,...eo,...lh,...ch];break}return t[Math.floor(Math.random()*t.length)]}function Jv(a,e){const t=a%6;let i;switch(t){case 0:i=[...ei.small];break;case 1:i=[...ei.small,...ei.medium];break;case 2:case 3:i=[...ei.small,...ei.medium,...ei.large];break;case 4:i=[...ei.small];break;case 5:default:i=[...ei.small,...ei.medium,...ei.large];break}const n=e.filter(s=>i.includes(s));return n.length>0?n:e.slice(0,2)}function Zv(a){if(a<=1)return"straight";const e=Math.random();return e<.4?"straight":e<.7?"arc":"zigzag"}const xt=20,Qv=6,ey=2,al=3,Sn=[-al,0,al],Zn=9,ty=30,iy={forest:{ground:3828526,path:8020547,pathEdge:5917232,wallColor:7035453,sky:8900331,fog:8900331,ambient:13428940,sunColor:16774374,grassColors:[4885567,4028980,5938255,2976292]},desert:{ground:12886874,path:12097888,pathEdge:10123840,wallColor:12886112,sky:15258784,fog:15258784,ambient:15786176,sunColor:16772829,grassColors:[12097069,11044128,13149760]},lava:{ground:2759194,path:4861992,pathEdge:3809304,wallColor:3810592,sky:3349002,fog:3349002,ambient:16736304,sunColor:16746564,grassColors:[1708048,2757909]},snow:{ground:13687008,path:10528944,pathEdge:8423568,wallColor:9476250,sky:13161696,fog:13161696,ambient:13689072,sunColor:15790335,grassColors:[13160664,12107976,14542056]},roman:{ground:9075290,path:11575424,pathEdge:9470048,wallColor:13154448,sky:9484496,fog:9484496,ambient:14735552,sunColor:16773328,grassColors:[6982218,5929530]},underwater:{ground:1718874,path:2771562,pathEdge:1716304,wallColor:2773104,sky:663616,fog:663616,ambient:3170464,sunColor:4491468,grassColors:[1722938,670250,2775626]}},dh=["forest","desert","lava","snow","forest","desert"],uh={forest:["barrel_large","crate_large","rocks","barrel_small"],desert:["barrel_small","crate_small","column","rocks","barrier"],lava:["pillar","barrier","rocks","barrel_large"],snow:["crate_large","barrel_large","rocks","crate_small","barrier"],roman:["pillar_decorated","column","barrier","barrel_large"],underwater:["rocks","barrel_small","crate_small","barrier"]},$t={barrel_large:{width:1.2,height:1.2,depth:1.2,breakable:!1,scale:.7},barrel_small:{width:.9,height:.9,depth:.9,breakable:!1,scale:.6},crate_large:{width:1.2,height:1,depth:1.2,breakable:!1,scale:.7},crate_small:{width:.9,height:.8,depth:.9,breakable:!1,scale:.6},column:{width:.8,height:1.4,depth:.8,breakable:!1,scale:.78},pillar:{width:.8,height:1.4,depth:.8,breakable:!1,scale:.78},pillar_decorated:{width:.9,height:1.5,depth:.9,breakable:!1,scale:.84},barrier:{width:1.8,height:.9,depth:.6,breakable:!1,scale:.7},rocks:{width:1.2,height:.9,depth:1.2,breakable:!1,scale:.7},chest:{width:.9,height:.8,depth:.8,breakable:!0,scale:.84,coinReward:15},gate:{width:2.8,height:5,depth:.5,breakable:!0,scale:1,coinReward:25},slide_gate:{width:2.8,height:2.59,depth:.5,breakable:!1,scale:1,collisionYOffset:3.205}},za={forest:{env:["Tree_1_B_Color4","Tree_2_B_Color4","Tree_6_B_Color4","Bush_2_E_Color4","Bush_3_B_Color4","Bush_4_B_Color4","Rock_1_E_Color4","Rock_4_B_Color4","Grass_1_A_Color4","Grass_2_A_Color4"],scn:[],grass:["Grass_1_A_Color4","Grass_2_A_Color4"]},desert:{env:["Rock_3_B_Color4","Rock_4_B_Color4","Rock_5_E_Color4","Bush_3_B_Color4","Tree_Bare_1_B_Color4"],scn:[],grass:[]},lava:{env:["Rock_1_E_Color4","Rock_3_B_Color4","Rock_5_E_Color4"],scn:[],tint:16724736,grass:[]},snow:{env:["Tree_1_B_Color4","Tree_6_B_Color4","Rock_1_E_Color4","Rock_4_B_Color4","Bush_4_B_Color4"],scn:[],grass:[]},roman:{env:["Bush_2_E_Color4","Bush_3_B_Color4","Bush_4_B_Color4","Tree_1_B_Color4","Tree_6_B_Color4","Rock_1_E_Color4","Rock_3_B_Color4","Grass_1_A_Color4","Grass_2_A_Color4"],scn:["pillar_decorated"],grass:["Grass_1_A_Color4","Grass_2_A_Color4"]},underwater:{env:["Rock_1_E_Color4","Rock_3_B_Color4","Rock_5_E_Color4","Bush_3_B_Color4"],scn:[],tint:2254506,grass:[]}},ny={CoinBag:"potion_large_orange",Revive:"potion_large_red",CoinMagnet:"potion_large_blue",DoubleCoin:"potion_large_green",Invincibility:"potion_large_blue",Antidote:"potion_large_green",TimeAdvantage:"potion_large_orange",Shield:"shield_badge"};class sy{constructor(e,t){this.scene=e,this.assetLoader=t,this.tiles=[],this.nextTileZ=0,this.tileIndex=0,this.theme="roman",this.difficulty=0,this.stage=0,this.activeCoins=[],this.activeObstacles=[],this.activePowerUps=[],this.bossActive=!1,this.fixedTheme=null,this.obstacleFrequencyMult=1,this.campaignObstacleSizes=null,this.campaignGatesEnabled=!1,this.campaignSlideGatesEnabled=!1,this.campaignGateInterval=0,this._lastChestTileIndex=0,this._chestTileInterval=12,this._lastGateTileIndex=0,this._pendingHealthPotion=!1,this._textures={stone:Gv(),dirt:Vv(),grass:Wv(),sand:qv(),lavaGround:Xv(),snow:$v(),wood:Yv(),bark:jv(),coin:Kv()},this._themeMats={roman:{ground:new ye({map:this._textures.grass,roughness:.85}),path:new ye({map:this._textures.stone,roughness:.65})},forest:{ground:new ye({map:this._textures.grass,roughness:.85}),path:new ye({map:this._textures.dirt,roughness:.8})},desert:{ground:new ye({map:this._textures.sand,roughness:.9}),path:new ye({map:this._textures.sand,color:12097888,roughness:.75})},lava:{ground:new ye({map:this._textures.lavaGround,roughness:.95}),path:new ye({map:this._textures.lavaGround,color:4861992,roughness:.85})},snow:{ground:new ye({map:this._textures.snow,roughness:.7}),path:new ye({map:this._textures.snow,color:10528944,roughness:.6})},underwater:{ground:new ye({color:1718874,roughness:.9}),path:new ye({map:this._textures.stone,color:2771562,roughness:.7})}}}update(e){if(this.fixedTheme)this.theme=this.fixedTheme;else{const n=this.stage%dh.length;this.theme=dh[n]}for(;this.nextTileZ>e-Qv*xt;)this._spawnTile(this.nextTileZ),this.nextTileZ-=xt;const t=e+ey*xt;for(let n=this.tiles.length-1;n>=0;n--)this.tiles[n].group.position.z>t&&(this._removeTile(this.tiles[n]),this.tiles.splice(n,1));const i=performance.now()*.001;for(const n of this.activeCoins)n.rotation.y=i*3,n.position.y=n.userData._baseY+Math.sin(i*2.5+n.userData._phase)*.12;for(const n of this.activePowerUps)n.rotation.y=i*2,n.position.y=n.userData._baseY+Math.sin(i*3+n.userData._phase)*.2}getCollisions(e,t,i,n,s){const r={coins:[],obstacles:[],powerUps:[]};for(let o=this.activeCoins.length-1;o>=0;o--){const l=this.activeCoins[o],c=new R;l.getWorldPosition(c),Math.abs(c.x-e)<1.5&&Math.abs(c.z-t)<1.2&&(r.coins.push(l),l.visible=!1,this.activeCoins.splice(o,1))}for(let o=this.activeObstacles.length-1;o>=0;o--){const l=this.activeObstacles[o],c=new R;l.getWorldPosition(c);const h=l.userData;if(Math.abs(c.x-e)<h.width*.5+.3&&Math.abs(c.z-t)<h.depth*.5+.3){const d=h.collisionYOffset||0,u=c.y+d-h.height*.5,p=c.y+d+h.height*.5,g=i;i+n>u+.1&&g<p-.1&&r.obstacles.push(l)}}for(let o=this.activePowerUps.length-1;o>=0;o--){const l=this.activePowerUps[o],c=new R;l.getWorldPosition(c),Math.abs(c.x-e)<1.5&&Math.abs(c.z-t)<1.2&&Math.abs(c.y-(i+s))<1.5&&(r.powerUps.push(l),l.visible=!1,this.activePowerUps.splice(o,1))}return r}breakObstacle(e){const t=this.activeObstacles.indexOf(e);t>=0&&(e.visible=!1,this.activeObstacles.splice(t,1))}reset(){for(const e of this.tiles)this._removeTile(e);this.tiles=[],this.activeCoins=[],this.activeObstacles=[],this.activePowerUps=[],this.nextTileZ=0,this.tileIndex=0,this.theme="roman",this.difficulty=0,this.stage=0,this.obstacleFrequencyMult=1,this.fixedTheme=null,this.campaignObstacleSizes=null,this.campaignGatesEnabled=!1,this.campaignSlideGatesEnabled=!1,this.campaignGateInterval=0,this._lastChestTileIndex=0,this._chestTileInterval=12,this._lastGateTileIndex=0,this._pendingHealthPotion=!1}_spawnTile(e){const t=new bt;t.position.z=e;const i=iy[this.theme],n=this._themeMats[this.theme]||this._themeMats.roman,s=new fn(ty*2,xt),r=new te(s,n.ground);r.rotation.x=-Math.PI/2,r.position.y=-.02,r.receiveShadow=!0,t.add(r);const o=new Be(Zn,.12,xt),l=new te(o,n.path);l.position.y=0,l.receiveShadow=!0,t.add(l),this._addPathEdges(t,i),this._addPathDecor(t);for(let _=-1;_<=1;_+=2){const m=new Be(.04,.01,xt),f=new ye({color:16777215,transparent:!0,opacity:.12}),v=new te(m,f);v.position.set(_*al*.5,.07,0),t.add(v)}this.bossActive||(this._addSideScenery(t,i,-1),this._addSideScenery(t,i,1),this._addGrassStrip(t),this._addGroundDetails(t,i));const c=this.tileIndex>2&&!this.bossActive,h=Math.max(.15,.25-this.stage*.03),d=Math.random()<h,u=this.tileIndex<=5&&Math.random()<.3,p=this.obstacleFrequencyMult<1&&Math.random()>this.obstacleFrequencyMult;let g=[];if(c&&!u&&!d&&!p?(g=this._addObstacles(t,i),this._addCoins(t,g),Math.random()<.06&&this._addGem(t)):this.bossActive||this._addCoins(t,[]),this.campaignGateInterval>0&&!this.bossActive&&this.tileIndex>5){const _=Math.round(this.campaignGateInterval/xt);if(this.tileIndex-this._lastGateTileIndex>=_){this._lastGateTileIndex=this.tileIndex;const m=this.campaignSlideGatesEnabled&&(!this.campaignGatesEnabled||Math.random()>.5);this._addCampaignGate(t,m)}}!this.bossActive&&this.tileIndex>5&&this.tileIndex-this._lastChestTileIndex>=this._chestTileInterval&&(this._lastChestTileIndex=this.tileIndex,this._addChest(t,g)),this._pendingHealthPotion&&this.tileIndex>2&&(this._addHealthPotion(t),this._pendingHealthPotion=!1),this.scene.add(t),this.tiles.push({group:t,z:e}),this.tileIndex++}_addPathEdges(e,t){for(const i of[-1,1]){const n=i*(Zn*.5+.15),s=new Be(.3,.35,xt),r=new ye({color:t.pathEdge,roughness:.8}),o=new te(s,r);o.position.set(n,.15,0),o.castShadow=!0,o.receiveShadow=!0,e.add(o);const l=new Be(.4,.06,xt),c=new ye({color:t.wallColor,roughness:.65}),h=new te(l,c);h.position.set(n,.34,0),h.receiveShadow=!0,e.add(h);const d=4;for(let u=0;u<d;u++){const p=-xt*.5+xt/d*(u+.5),g=new Be(.2,.6,.2),_=new ye({color:t.wallColor,roughness:.7}),m=new te(g,_);m.position.set(n,.3,p),m.castShadow=!0,e.add(m)}}}_addSideScenery(e,t,i){const n=i*(Zn*.5+2),s=10+Math.floor(Math.random()*8),r=za[this.theme]||za.roman,o=r.env,l=r.scn;r.grass;const c=[...o,...l];if(c.length!==0){for(let h=0;h<s;h++){const d=n+i*(2+Math.random()*12),u=(Math.random()-.5)*xt,p=c[Math.floor(Math.random()*c.length)];let g;try{o.includes(p)?g=this.assetLoader.getEnvironment(p):g=this.assetLoader.getScenery(p)}catch{continue}const _=p.startsWith("Tree"),m=p.startsWith("Bush"),f=p.startsWith("Grass"),v=_?.8+Math.random()*.7:m?.7+Math.random()*.5:f?.5+Math.random()*.4:.8+Math.random()*.6;if(g.scale.setScalar(v),g.position.set(d,0,u),g.rotation.y=Math.random()*Math.PI*2,g.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),r.tint){const x=new ce(r.tint);g.traverse(y=>{if(y.isMesh&&y.material){const C=y.material;C.color&&C.color.lerp(x,.35),C.emissive&&(C.emissive.set(2230272),C.emissiveIntensity=.2)}})}e.add(g)}if(this.theme==="lava"&&Math.random()>.5){const h=n+i*(Math.random()*4),d=(Math.random()-.5)*xt;this._addLavaPool(e,h,d)}}}_addGrassStrip(e){const i=(za[this.theme]||za.roman).grass||[];if(i.length!==0)for(const n of[-1,1]){const s=8+Math.floor(Math.random()*6);for(let r=0;r<s;r++){const o=i[Math.floor(Math.random()*i.length)];let l;try{l=this.assetLoader.getEnvironment(o)}catch{continue}const c=n*(Zn*.5+.3+Math.random()*1.5),h=(Math.random()-.5)*xt;l.scale.setScalar(.4+Math.random()*.4),l.position.set(c,0,h),l.rotation.y=Math.random()*Math.PI*2,l.traverse(d=>{d.isMesh&&(d.receiveShadow=!0)}),e.add(l)}}}_addPathDecor(e){if(this.tileIndex%2===0)for(const t of[-1,1]){const i=t*(Zn*.5+.5);try{const s=this.assetLoader.getScenery("torch_lit");s.scale.setScalar(1.2),s.position.set(i,0,-xt*.25),s.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.material&&r.material.emissive&&(r.material.emissive.set(16737792),r.material.emissiveIntensity=1))}),e.add(s)}catch{}const n=t>0?"banner_red":"banner_blue";try{const s=this.assetLoader.getScenery(n);s.scale.setScalar(1.2),s.position.set(i,0,xt*.25),s.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),e.add(s)}catch{}}}_addLavaPool(e,t,i){const n=.5+Math.random()*1,s=new te(new na(n,12),new ye({color:16729088,emissive:16720384,emissiveIntensity:.8,roughness:.3}));s.rotation.x=-Math.PI/2,s.position.set(t,.02,i),e.add(s)}_addGroundDetails(e,t){if(this.theme==="lava")return;const i=6+Math.floor(Math.random()*6);for(let n=0;n<i;n++){const r=(Math.random()>.5?1:-1)*(Zn*.5+.5+Math.random()*6),o=(Math.random()-.5)*xt,l=t.grassColors[Math.floor(Math.random()*t.grassColors.length)],c=new bt,h=3+Math.floor(Math.random()*3);for(let d=0;d<h;d++){const u=new te(new cn(.04,.2+Math.random()*.15,4),new ye({color:l}));u.position.set((Math.random()-.5)*.15,.1,(Math.random()-.5)*.15),u.rotation.x=(Math.random()-.5)*.3,u.rotation.z=(Math.random()-.5)*.3,c.add(u)}c.position.set(r,0,o),e.add(c)}}_addObstacles(e,t){const i=uh[this.theme]||uh.roman;let n;if(this.campaignObstacleSizes){const o=[];for(const l of this.campaignObstacleSizes)ei[l]&&o.push(...ei[l]);n=i.filter(l=>{const c=l.split("_").slice(0,-1).join("_")||l;return o.some(h=>l.includes(h)||c.includes(h))}),n.length===0&&(n=i.slice(0,2))}else n=Jv(this.stage,i);const s=[];let r;if(this.campaignGatesEnabled||this.campaignSlideGatesEnabled)r=to(this.stage);else if(this.campaignObstacleSizes){const o=this.campaignObstacleSizes.includes("large"),l=this.campaignObstacleSizes.includes("medium");r=to(o?2:l?1:0)}else r=to(this.stage);if(!r||!r.obstacles)return s;for(const o of r.obstacles){const l=o.lane,c=Sn[l],d=o.zOffset||0;let u,p,g;if(o.type==="gate"){u="gate",g=$t.gate,p=new bt;const f=new ye({color:6965802,roughness:.8,metalness:.1,emissive:4864538,emissiveIntensity:.2});for(let x=.3;x<=4.4;x+=.5){const y=new te(new Be(2.6,.35,.15),f);y.position.y=x,y.castShadow=!0,p.add(y)}for(const x of[-1.2,1.2]){const y=new te(new Be(.2,5,.2),new ye({color:5913114,roughness:.7,metalness:.2}));y.position.set(x,2.5,0),y.castShadow=!0,p.add(y)}const v=new te(new Be(.12,6.4,.1),f);v.position.y=2.5,v.rotation.z=.4,p.add(v),p.position.set(c,0,d)}else if(o.type==="slide_gate"){u="slide_gate",g=$t.slide_gate,p=new bt;const f=new ye({color:5592405,roughness:.5,metalness:.6}),v=new ye({color:3815994,roughness:.4,metalness:.7});for(const C of[-1.2,1.2]){const T=new te(new Be(.2,5,.2),v);T.position.set(C,2.5,0),T.castShadow=!0,p.add(T)}for(let C=1.91;C<=4.4;C+=.45){const T=new te(new Be(2.6,.35,.2),f);T.position.y=C,T.castShadow=!0,p.add(T)}const x=new te(new Be(2.6,.2,.25),new ye({color:13382451,roughness:.4,metalness:.5,emissive:6689041,emissiveIntensity:.3}));x.position.y=1.91,x.castShadow=!0,p.add(x);const y=new te(new Be(2.6,.06,.26),new ye({color:16763904,emissive:16755200,emissiveIntensity:.4}));y.position.y=1.79,p.add(y),p.position.set(c,0,d)}else if(o.breakable){const f=n.filter(v=>$t[v]&&$t[v].breakable);u=f.length>0?f[Math.floor(Math.random()*f.length)]:n[Math.floor(Math.random()*n.length)];try{p=this.assetLoader.getObstacle(u)}catch{continue}g=$t[u]||{width:1,height:1.5,depth:1,breakable:!1,scale:1.3},p.scale.setScalar(g.scale),p.position.set(c,0,d),p.traverse(v=>{v.isMesh&&(v.castShadow=!0,v.receiveShadow=!0)}),p.rotation.y=Math.random()*Math.PI*2}else if(o.type==="low"){const f=n.filter(v=>$t[v]&&$t[v].height<=1.2);u=f.length>0?f[Math.floor(Math.random()*f.length)]:n[Math.floor(Math.random()*n.length)];try{p=this.assetLoader.getObstacle(u)}catch{continue}g=$t[u]||{width:1,height:1.5,depth:1,breakable:!1,scale:1.3},p.scale.setScalar(g.scale),p.position.set(c,0,d),p.traverse(v=>{v.isMesh&&(v.castShadow=!0,v.receiveShadow=!0)}),p.rotation.y=Math.random()*Math.PI*2}else{u=n[Math.floor(Math.random()*n.length)];try{p=this.assetLoader.getObstacle(u)}catch{continue}g=$t[u]||{width:1,height:1.5,depth:1,breakable:!1,scale:1.3},p.scale.setScalar(g.scale),p.position.set(c,0,d),p.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),p.rotation.y=Math.random()*Math.PI*2}g||(g=$t[u]||{width:1,height:1.5,depth:1,breakable:!1,scale:1.3});const _=o.breakable||g.breakable;if(_)if(o.type==="gate"){p.traverse(v=>{v.isMesh&&v.material&&(Array.isArray(v.material)?v.material:[v.material]).forEach(y=>{y.emissive=new ce(65348),y.emissiveIntensity=.2})});const f=new si(65348,.8,3);f.position.set(0,1.5,0),p.add(f)}else{p.traverse(v=>{v.isMesh&&v.material&&(v.material=v.material.clone(),v.material.emissive=new ce(16755200),v.material.emissiveIntensity=.35,v.material.metalness=.6,v.material.roughness=.3)});const f=new si(16763972,.8,3);f.position.set(0,.5,0),p.add(f)}const m=o.zOffset||0;if(Math.abs(m)<3&&s.push(l),!_&&(this.theme==="snow"||this.theme==="underwater")){const f=this.theme==="snow"?new ce(1706506):new ce(16729122);p.traverse(v=>{v.isMesh&&v.material&&(v.material=v.material.clone(),this.theme==="snow"?(v.material.color.lerp(f,.5),v.material.emissive=new ce(3346688),v.material.emissiveIntensity=.25):(v.material.color.lerp(f,.3),v.material.emissive=new ce(16724736),v.material.emissiveIntensity=.3))})}p.userData={type:_?"chest":"wall",breakable:_,coinReward:g.coinReward||0,width:g.width,height:g.height,depth:g.depth,collisionYOffset:g.collisionYOffset||0,lane:l,modelName:u},e.add(p),this.activeObstacles.push(p)}return s}_addChest(e,t=[]){const i=[0,1,2].filter(c=>!t.includes(c));if(i.length===0)return;const n=i[Math.floor(Math.random()*i.length)],s=Sn[n],r=$t.chest;let o;try{o=this.assetLoader.getObstacle("chest")}catch{return}o.scale.setScalar(r.scale),o.position.set(s,0,0),o.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0,c.material&&(c.material=c.material.clone(),c.material.emissive=new ce(16755200),c.material.emissiveIntensity=.35,c.material.metalness=.6,c.material.roughness=.3))});const l=new si(16763972,.8,3);l.position.set(0,.5,0),o.add(l),e.add(o),o.userData={type:"chest",breakable:!0,lane:n,width:r.width,height:r.height,depth:r.depth,coinReward:r.coinReward||15},this.activeObstacles.push(o)}_addCampaignGate(e,t){for(let i=0;i<3;i++){const n=Sn[i];let s,r,o;if(t){o="slide_gate",r=$t.slide_gate,s=new bt;const c=new ye({color:5592405,roughness:.5,metalness:.6}),h=new ye({color:3815994,roughness:.4,metalness:.7});for(const p of[-1.2,1.2]){const g=new te(new Be(.2,5,.2),h);g.position.set(p,2.5,0),g.castShadow=!0,s.add(g)}for(let p=1.91;p<=4.4;p+=.45){const g=new te(new Be(2.6,.35,.2),c);g.position.y=p,g.castShadow=!0,s.add(g)}const d=new te(new Be(2.6,.2,.25),new ye({color:13382451,roughness:.4,metalness:.5,emissive:6689041,emissiveIntensity:.3}));d.position.y=1.91,d.castShadow=!0,s.add(d);const u=new te(new Be(2.6,.06,.26),new ye({color:16763904,emissive:16755200,emissiveIntensity:.4}));u.position.y=1.79,s.add(u),s.position.set(n,0,0)}else{o="gate",r=$t.gate,s=new bt;const c=new ye({color:6965802,roughness:.8,metalness:.1,emissive:4864538,emissiveIntensity:.2});for(let u=.3;u<=4.4;u+=.5){const p=new te(new Be(2.6,.35,.15),c);p.position.y=u,p.castShadow=!0,s.add(p)}for(const u of[-1.2,1.2]){const p=new te(new Be(.2,5,.2),new ye({color:5913114,roughness:.7,metalness:.2}));p.position.set(u,2.5,0),p.castShadow=!0,s.add(p)}const h=new te(new Be(.12,6.4,.1),c);h.position.y=2.5,h.rotation.z=.4,s.add(h),s.position.set(n,0,0),s.traverse(u=>{u.isMesh&&u.material&&(Array.isArray(u.material)?u.material:[u.material]).forEach(g=>{g.emissive=new ce(65348),g.emissiveIntensity=.2})});const d=new si(65348,.8,3);d.position.set(0,1.5,0),s.add(d)}const l=!t;s.userData={type:l?"chest":"wall",breakable:l,coinReward:r.coinReward||0,width:r.width,height:r.height,depth:r.depth,collisionYOffset:r.collisionYOffset||0,lane:i,modelName:o},e.add(s),this.activeObstacles.push(s)}}_addCoins(e,t=[]){const i=[0,1,2].filter(h=>!t.includes(h)),n=i.length>0?i[Math.floor(Math.random()*i.length)]:Math.floor(Math.random()*3),s=3+Math.floor(Math.random()*5),r=2.5,o=Zv(this.difficulty),c=(hh[o]||hh.straight)(n,s,r);for(const h of c){const d=Sn[h.lane],u=h.y||.8,p=h.zOffset||0;if(t.includes(h.lane)&&u<2)continue;let g;try{g=this.assetLoader.getScenery("coin")}catch{g=this._fallbackCoin()}g.scale.setScalar(2),g.position.set(d,u,p),g.userData={_baseY:u,_phase:p*.5},g.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.material&&(_.material.emissive=new ce(16755200),_.material.emissiveIntensity=.8))}),e.add(g),this.activeCoins.push(g)}}_fallbackCoin(){const e=new Gi(.28,.28,.06,16),t=new ye({color:16766720,metalness:.9,roughness:.15,emissive:16755200,emissiveIntensity:.8}),i=new te(e,t);i.rotation.x=Math.PI/2;const n=new bt;return n.add(i),n}_addPowerUp(e){const t=Math.floor(Math.random()*3),i=Sn[t],n=(Math.random()-.5)*xt*.5,s=["CoinBag","Revive","CoinMagnet","DoubleCoin","Invincibility","Antidote","TimeAdvantage","Shield"],r=Math.floor(Math.random()*s.length),o=s[r],l=ny[o];let c;try{c=this.assetLoader.getPickup(l)}catch{c=this._fallbackPowerUp(o)}c.scale.setScalar(1.8),c.position.set(i,1.5,n),c.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),c.userData={powerUpType:o,typeIndex:r+1,_baseY:1.5,_phase:n},e.add(c),this.activePowerUps.push(c)}spawnHealthPotion(){this._pendingHealthPotion=!0}_addHealthPotion(e){const t=Math.floor(Math.random()*3),i=Sn[t],n=0;let s;try{s=this.assetLoader.getPickup("potion_large_red")}catch{s=this._fallbackPowerUp("HealthPotion")}s.scale.setScalar(2.2),s.position.set(i,1.5,n),s.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),s.userData={powerUpType:"HealthPotion",_baseY:1.5,_phase:n},e.add(s),this.activePowerUps.push(s)}_addGem(e){const t=Math.floor(Math.random()*3),i=Sn[t],n=(Math.random()-.5)*xt*.4,s=new Ks(.35,2),r=new ye({color:10040319,emissive:6684876,emissiveIntensity:1.2,metalness:.9,roughness:.1,transparent:!0,opacity:.9}),o=new te(s,r),l=new bt;l.add(o);const c=new Ks(.2,1),h=new ri({color:16777215,transparent:!0,opacity:.6});l.add(new te(c,h)),l.scale.setScalar(1.2),l.position.set(i,1.2,n),l.userData={_baseY:1.2,_phase:n*.5,_isGem:!0},e.add(l),this.activeCoins.push(l)}_fallbackPowerUp(e){const t={CoinBag:16766720,Revive:4521796,CoinMagnet:16729343,DoubleCoin:16755200,Invincibility:58879,Antidote:8978176,TimeAdvantage:4491519,Shield:8930559},i=new Ks(.35,1),n=new ye({color:t[e]||16777215,emissive:t[e]||16777215,emissiveIntensity:.3,metalness:.5,roughness:.3}),s=new te(i,n),r=new bt;return r.add(s),r}_removeTile(e){e.group.traverse(t=>{let i=this.activeCoins.indexOf(t);i>=0&&this.activeCoins.splice(i,1),i=this.activeObstacles.indexOf(t),i>=0&&this.activeObstacles.splice(i,1),i=this.activePowerUps.indexOf(t),i>=0&&this.activePowerUps.splice(i,1)}),this.scene.remove(e.group),e.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}}class ay{constructor(){this.queue=[],window.addEventListener("keydown",t=>{switch(t.code){case"KeyQ":case"ArrowLeft":this._push("left");break;case"KeyE":case"ArrowRight":this._push("right");break;case"KeyW":case"ArrowUp":case"Space":this._push("jump");break;case"KeyS":case"ArrowDown":this._push("slide");break;case"KeyF":this._push("attack");break;case"KeyA":case"KeyR":this._push("ability");break;case"Escape":this._push("pause");break}}),this._touchStart=null;const e=30;window.addEventListener("touchstart",t=>{const i=t.touches[0];this._touchStart={x:i.clientX,y:i.clientY,time:performance.now()}},{passive:!0}),window.addEventListener("touchend",t=>{if(!this._touchStart)return;const i=t.changedTouches[0],n=i.clientX-this._touchStart.x,s=i.clientY-this._touchStart.y,r=performance.now()-this._touchStart.time;if(this._touchStart=null,r>500)return;const o=Math.abs(n),l=Math.abs(s);if(o<e&&l<e){this._push("attack");return}o>l?this._push(n>0?"right":"left"):this._push(s>0?"slide":"jump")},{passive:!0})}_push(e){this.queue.push(e)}poll(){const e=this.queue;return this.queue=[],e}}class ry{constructor(e){this.scene=e,this.dustGeo=new pt;const t=80,i=new Float32Array(t*3),n=new Float32Array(t),s=new Float32Array(t);this.dustData={positions:i,alphas:n,sizes:s,count:t,index:0},this.dustGeo.setAttribute("position",new Fe(i,3)),this.dustGeo.setAttribute("alpha",new Fe(n,1)),this.dustGeo.setAttribute("size",new Fe(s,1)),this.dustMat=new _t({transparent:!0,depthWrite:!1,vertexShader:`
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
            `}),this.dustPoints=new Rn(this.dustGeo,this.dustMat),e.add(this.dustPoints),this.sparkleGeo=new pt;const r=120,o=new Float32Array(r*3),l=new Float32Array(r),c=new Float32Array(r),h=new Float32Array(r*3);this.sparkleData={positions:o,alphas:l,sizes:c,colors:h,velocities:new Float32Array(r*3),count:r,active:new Uint8Array(r)},this.sparkleGeo.setAttribute("position",new Fe(o,3)),this.sparkleGeo.setAttribute("alpha",new Fe(l,1)),this.sparkleGeo.setAttribute("size",new Fe(c,1)),this.sparkleGeo.setAttribute("color",new Fe(h,3)),this.sparkleMat=new _t({transparent:!0,depthWrite:!1,vertexShader:`
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
            `}),this.sparklePoints=new Rn(this.sparkleGeo,this.sparkleMat),e.add(this.sparklePoints),this.debrisGeo=new pt;const d=60,u=new Float32Array(d*3),p=new Float32Array(d),g=new Float32Array(d),_=new Float32Array(d*3);this.debrisData={positions:u,alphas:p,sizes:g,colors:_,velocities:new Float32Array(d*3),rotations:new Float32Array(d),count:d,active:new Uint8Array(d)},this.debrisGeo.setAttribute("position",new Fe(u,3)),this.debrisGeo.setAttribute("alpha",new Fe(p,1)),this.debrisGeo.setAttribute("size",new Fe(g,1)),this.debrisGeo.setAttribute("color",new Fe(_,3)),this.debrisMat=new _t({transparent:!0,depthWrite:!1,vertexShader:`
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
            `}),this.debrisPoints=new Rn(this.debrisGeo,this.debrisMat),e.add(this.debrisPoints);const m=new vr(.1,.5,24),f=new ri({color:16777215,transparent:!0,opacity:.6,side:jt,depthWrite:!1});this.landingRing=new te(m,f),this.landingRing.rotation.x=-Math.PI/2,this.landingRing.visible=!1,this._landingTimer=0,e.add(this.landingRing)}emitDust(e,t,i,n){const s=this.dustData,r=s.index;s.positions[r*3]=e+(Math.random()-.5)*.5,s.positions[r*3+1]=t+.05,s.positions[r*3+2]=i+.5+Math.random()*.3,s.alphas[r]=n?.9:.6,s.sizes[r]=n?4+Math.random()*3:2+Math.random()*2,s.index=(s.index+1)%s.count}burstSparkles(e,t,i,n=[1,.85,0],s=8){const r=this.sparkleData;for(let o=0;o<s;o++)for(let l=0;l<r.count;l++)if(!r.active[l]){r.active[l]=1,r.positions[l*3]=e,r.positions[l*3+1]=t,r.positions[l*3+2]=i,r.velocities[l*3]=(Math.random()-.5)*6,r.velocities[l*3+1]=2+Math.random()*4,r.velocities[l*3+2]=(Math.random()-.5)*6,r.alphas[l]=1,r.sizes[l]=2+Math.random()*4,r.colors[l*3]=n[0],r.colors[l*3+1]=n[1],r.colors[l*3+2]=n[2];break}}burstDebris(e,t,i,n=12){const s=this.debrisData,r=[[.6,.4,.2],[.5,.35,.15],[.7,.5,.25],[.4,.3,.15],[.55,.45,.3]];for(let o=0;o<n;o++)for(let l=0;l<s.count;l++)if(!s.active[l]){s.active[l]=1,s.positions[l*3]=e+(Math.random()-.5)*.5,s.positions[l*3+1]=t+Math.random()*.5,s.positions[l*3+2]=i+(Math.random()-.5)*.5,s.velocities[l*3]=(Math.random()-.5)*8,s.velocities[l*3+1]=3+Math.random()*6,s.velocities[l*3+2]=(Math.random()-.5)*8,s.alphas[l]=1,s.sizes[l]=3+Math.random()*6;const c=r[Math.floor(Math.random()*r.length)];s.colors[l*3]=c[0],s.colors[l*3+1]=c[1],s.colors[l*3+2]=c[2];break}}emitLandingImpact(e,t,i){this.landingRing.position.set(e,t+.05,i),this.landingRing.scale.set(.3,.3,.3),this.landingRing.material.opacity=.6,this.landingRing.visible=!0,this._landingTimer=.35;for(let n=0;n<8;n++)this.emitDust(e+(Math.random()-.5)*1.5,t,i+(Math.random()-.5)*1,!0)}update(e){const t=this.dustData;for(let s=0;s<t.count;s++)t.alphas[s]*=.95,t.positions[s*3+1]+=e*.3,t.alphas[s]<.01&&(t.alphas[s]=0);this.dustGeo.attributes.position.needsUpdate=!0,this.dustGeo.attributes.alpha.needsUpdate=!0,this.dustGeo.attributes.size.needsUpdate=!0;const i=this.sparkleData;for(let s=0;s<i.count;s++)i.active[s]&&(i.positions[s*3]+=i.velocities[s*3]*e,i.positions[s*3+1]+=i.velocities[s*3+1]*e,i.positions[s*3+2]+=i.velocities[s*3+2]*e,i.velocities[s*3+1]-=12*e,i.alphas[s]-=e*2,i.alphas[s]<=0&&(i.active[s]=0,i.alphas[s]=0));this.sparkleGeo.attributes.position.needsUpdate=!0,this.sparkleGeo.attributes.alpha.needsUpdate=!0,this.sparkleGeo.attributes.size.needsUpdate=!0,this.sparkleGeo.attributes.color.needsUpdate=!0;const n=this.debrisData;for(let s=0;s<n.count;s++)n.active[s]&&(n.positions[s*3]+=n.velocities[s*3]*e,n.positions[s*3+1]+=n.velocities[s*3+1]*e,n.positions[s*3+2]+=n.velocities[s*3+2]*e,n.velocities[s*3+1]-=15*e,n.alphas[s]-=e*1.5,n.positions[s*3+1]<.05&&n.velocities[s*3+1]<0&&(n.velocities[s*3+1]*=-.3,n.positions[s*3+1]=.05),n.alphas[s]<=0&&(n.active[s]=0,n.alphas[s]=0));if(this.debrisGeo.attributes.position.needsUpdate=!0,this.debrisGeo.attributes.alpha.needsUpdate=!0,this.debrisGeo.attributes.size.needsUpdate=!0,this.debrisGeo.attributes.color.needsUpdate=!0,this._landingTimer>0){this._landingTimer-=e;const s=1-this._landingTimer/.35,r=.3+s*3;this.landingRing.scale.set(r,r,r),this.landingRing.material.opacity=.6*(1-s),this._landingTimer<=0&&(this.landingRing.visible=!1)}}dispose(){this.scene.remove(this.dustPoints),this.scene.remove(this.sparklePoints),this.scene.remove(this.debrisPoints),this.scene.remove(this.landingRing),this.dustGeo.dispose(),this.dustMat.dispose(),this.sparkleGeo.dispose(),this.sparkleMat.dispose(),this.debrisGeo.dispose(),this.debrisMat.dispose(),this.landingRing.geometry.dispose(),this.landingRing.material.dispose()}}const ph="assets/audio/",rn={start:["start_1.mp3","start_2.mp3"],hit:["hit_1.mp3","hit_2.mp3"],death:["death_1.mp3","death_2.mp3"],nearMiss:["nearmiss_1.mp3","nearmiss_2.mp3","nearmiss_3.mp3"],combo:["combo_1.mp3","combo_2.mp3","combo_3.mp3"],revive:["revive_1.mp3"],gem:["gem_1.mp3","gem_2.mp3"],milestone:{500:"milestone_500.mp3",1e3:"milestone_1000.mp3",2e3:"milestone_2000.mp3",5e3:"milestone_5000.mp3"},biome:{forest:"biome_forest.mp3",desert:"biome_desert.mp3",lava:"biome_lava.mp3",snow:"biome_snow.mp3"},powerUp:{CoinBag:"powerup_coinbag.mp3",CoinMagnet:"powerup_coinmagnet.mp3",DoubleCoin:"powerup_doublecoin.mp3",Invincibility:"powerup_invincibility.mp3",Shield:"powerup_shield.mp3",Antidote:"powerup_speed.mp3",TimeAdvantage:"powerup_speed.mp3",SpeedBoost:"powerup_speed.mp3"}};class Wd{constructor(){this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.voiceGain=null,this.musicPlaying=!1,this._initialized=!1,this._sfxVolume=.5,this._musicVolume=.45,this._voiceVolume=.7,this._buffers={},this._loadPromises={},this._rawBuffers={},this._eagerDecodeReady=null,this._musicSource=null,this._menuMusicSource=null,this._voiceCooldown=0,this._lastVoiceTime=0}eagerPreload(...e){for(const t of e)this._rawBuffers[t]||(this._rawBuffers[t]=fetch(ph+t).then(i=>{if(!i.ok)throw new Error(`HTTP ${i.status}`);return i.arrayBuffer()}).catch(i=>(console.warn(`Eager preload failed for ${t}:`,i.message),delete this._rawBuffers[t],null)))}init(){if(!this._initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.8,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this._sfxVolume,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this._musicVolume,this.musicGain.connect(this.masterGain),this.voiceGain=this.ctx.createGain(),this.voiceGain.gain.value=this._voiceVolume,this.voiceGain.connect(this.masterGain),this._initialized=!0,this._eagerDecodeReady=this._decodeEagerBuffers(),this._preload("music_gameplay.mp3"),this._preload("music_menu.mp3");for(const e of Object.values(rn))typeof e=="string"?this._preload(e):Array.isArray(e)?e.forEach(t=>this._preload(t)):typeof e=="object"&&Object.values(e).forEach(t=>this._preload(t))}catch(e){console.warn("Audio init failed:",e)}}async _decodeEagerBuffers(){const e=Object.entries(this._rawBuffers);this._rawBuffers={};for(const[t,i]of e)if(!this._buffers[t])try{const n=await i;if(n&&!this._buffers[t]){const s=await this.ctx.decodeAudioData(n);this._buffers[t]=s}}catch(n){console.warn(`Failed to decode eagerly preloaded ${t}:`,n.message)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_preload(e){return this._buffers[e]?Promise.resolve():this._loadPromises[e]?this._loadPromises[e]:(this._loadPromises[e]=(async()=>{try{let t;if(this._rawBuffers[e]&&(t=await this._rawBuffers[e],delete this._rawBuffers[e]),!t){const i=await fetch(ph+e);if(!i.ok)throw new Error(`HTTP ${i.status}`);t=await i.arrayBuffer()}if(!this._buffers[e]){const i=await this.ctx.decodeAudioData(t);this._buffers[e]=i}}catch(t){console.warn(`Failed to load ${e}:`,t.message)}delete this._loadPromises[e]})(),this._loadPromises[e])}_playFile(e,t,i=!1,n=1){if(!this._initialized)return null;const s=this._buffers[e];if(!s)return null;const r=this.ctx.createBufferSource();r.buffer=s,r.loop=i;const o=this.ctx.createGain();return o.gain.value=n,r.connect(o),o.connect(t),r.start(0),{source:r,gain:o}}_playRandomVoice(e,t=5){if(!this._initialized)return;const i=performance.now()/1e3;if(i-this._lastVoiceTime<Math.max(this._voiceCooldown,5))return;const n=Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e;this._playFile(n,this.voiceGain)&&(this._lastVoiceTime=i,this._voiceCooldown=Math.max(t,5))}playCoinPickup(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(880,.08,e,.15,"sine"),this._playSine(1320,.08,e+.06,.12,"sine"),this._playSine(1760,.06,e+.1,.1,"sine")}playJump(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(200,e),t.frequency.exponentialRampToValueAtTime(600,e+.15),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+.2)}playDoubleJump(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(900,e+.12),i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+.18),this._playSine(1200,.05,e+.05,.08,"sine")}playSlide(){this._initialized&&this._playNoise(.18,this.ctx.currentTime,.12,800,200)}playAttack(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.12,e,.15,2e3,400),this._playSine(150,.08,e+.02,.08,"sawtooth")}playSmash(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.2,e,.25,1500,100),this._playSine(80,.15,e,.12,"sawtooth"),this._playSine(60,.1,e+.05,.15,"square")}playHit(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(100,.2,e,.2,"sawtooth"),this._playNoise(.15,e,.15,600,80),this._playSine(220,.1,e,.15,"square"),this._playSine(233,.1,e,.15,"square")}playDeath(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(400,e),t.frequency.exponentialRampToValueAtTime(50,e+.8),i.gain.setValueAtTime(.15,e),i.gain.linearRampToValueAtTime(.08,e+.3),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+1),this._playNoise(.2,e,.4,400,50),this._playSine(40,.12,e+.1,.6,"sine"),this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(rn.death,3)}playPowerUp(e){if(!this._initialized)return;const t=this.ctx.currentTime;[440,554,659,880,1108].forEach((s,r)=>{this._playSine(s,.08,t+r*.06,.18,"sine")}),this._playSine(1760,.04,t+.3,.3,"sine");const n=rn.powerUp[e];n&&(this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(n,2))}playNearMiss(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.08,e,.1,3e3,1e3),this._playSine(660,.06,e+.05,.1,"sine"),this._playSine(880,.06,e+.1,.1,"sine")}playCombo(e){if(!this._initialized)return;const t=this.ctx.currentTime,i=500+Math.min(e,20)*40;this._playSine(i,.06,t,.1,"sine"),this._playSine(i*1.5,.04,t+.04,.08,"sine")}playRevive(){if(!this._initialized)return;const e=this.ctx.currentTime;[262,330,392,523,659].forEach((i,n)=>{this._playSine(i,.1,e+n*.08,.4,"sine")}),this._playSine(1047,.06,e+.4,.5,"sine"),this._playSine(1319,.04,e+.5,.4,"sine"),this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(rn.revive,2)}playStart(){this._initialized&&(this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(rn.start,3))}playGem(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(1047,.1,e,.3,"sine"),this._playSine(1319,.08,e+.05,.25,"sine"),this._playSine(1568,.08,e+.1,.3,"sine"),this._playSine(2093,.06,e+.15,.35,"sine"),this._playRandomVoice(rn.gem,6)}playMilestone(e){if(!this._initialized)return;const t=this.ctx.currentTime;[523,659,784,1047].forEach((s,r)=>{this._playSine(s,.1,t+r*.1,.3,"sine")});const n=rn.milestone[e];n&&(this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(n,3))}playBiomeChange(e){if(!this._initialized)return;const t=rn.biome[e];t&&this._playRandomVoice(t,5)}playBossIntro(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.25,e,.8,200,40),this._playSine(60,.15,e,.6,"sawtooth"),this._playSine(80,.12,e+.2,.5,"sawtooth"),this._playSine(120,.1,e+.4,.4,"square"),this._playSine(220,.18,e+.6,.5,"sawtooth"),this._playSine(165,.15,e+.65,.45,"sawtooth")}playBossDefeat(){if(!this._initialized)return;const e=this.ctx.currentTime;[523,659,784,1047,1319].forEach((i,n)=>{this._playSine(i,.12,e+n*.08,.4,"sine")}),this._playSine(1568,.08,e+.4,.5,"sine"),this._playNoise(.3,e,.4,400,40),this._playSine(50,.2,e,.3,"sawtooth")}playMenuClick(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(800,.06,e,.06,"sine"),this._playSine(1e3,.05,e+.04,.05,"sine")}playLaneSwitchLeft(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(500,e),t.frequency.exponentialRampToValueAtTime(350,e+.08),i.gain.setValueAtTime(.06,e),i.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+.1)}playLaneSwitchRight(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(350,e),t.frequency.exponentialRampToValueAtTime(500,e+.08),i.gain.setValueAtTime(.06,e),i.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(i),i.connect(this.sfxGain),t.start(e),t.stop(e+.1)}playCountdownTick(){this._initialized&&this._playSine(600,.1,this.ctx.currentTime,.08,"sine")}playPause(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(400,.06,e,.1,"sine"),this._playSine(300,.06,e+.08,.12,"sine"),this.musicGain&&this.musicGain.gain.linearRampToValueAtTime(this._musicVolume*.2,e+.3)}playResume(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(300,.06,e,.1,"sine"),this._playSine(400,.06,e+.08,.12,"sine"),this.musicGain&&this.musicGain.gain.linearRampToValueAtTime(this._musicVolume,e+.3)}startMusic(){!this._initialized||this.musicPlaying||(this._stopMenuMusic(),this.musicPlaying=!0,this.musicGain.gain.value=this._musicVolume,this._tryPlayMusic("music_gameplay.mp3","_musicSource"))}async _tryPlayMusic(e,t){let i=this._playFile(e,this.musicGain,!0,1);if(i){this[t]=i;return}await this._preload(e),!(!this.musicPlaying&&t==="_musicSource")&&(i=this._playFile(e,this.musicGain,!0,1),i&&(this[t]=i))}stopMusic(){if(this.musicPlaying=!1,this._musicSource){try{this._musicSource.gain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+1);const e=this._musicSource.source;setTimeout(()=>{try{e.stop()}catch{}},1200)}catch{}this._musicSource=null}}async startMenuMusic(){if(!this._initialized)return;this._stopMenuMusic(),this._eagerDecodeReady&&await this._eagerDecodeReady;const e=this.ctx.currentTime;this.musicGain.gain.setValueAtTime(0,e),this.musicGain.gain.linearRampToValueAtTime(this._musicVolume,e+.15),this._tryPlayMusic("music_menu.mp3","_menuMusicSource")}_stopMenuMusic(){if(this._menuMusicSource){try{this._menuMusicSource.gain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.5);const e=this._menuMusicSource.source;setTimeout(()=>{try{e.stop()}catch{}},600)}catch{}this._menuMusicSource=null}}setMusicIntensity(e){}_playSine(e,t,i,n,s="sine"){const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type=s,r.frequency.value=e,o.gain.setValueAtTime(t,i),o.gain.exponentialRampToValueAtTime(.001,i+n),r.connect(o),o.connect(this.sfxGain),r.start(i),r.stop(i+n+.01)}_playNoise(e,t,i,n=2e3,s=200){const r=this.ctx.sampleRate*i,o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),l=o.getChannelData(0);for(let u=0;u<r;u++)l[u]=Math.random()*2-1;const c=this.ctx.createBufferSource();c.buffer=o;const h=this.ctx.createGain();h.gain.setValueAtTime(e,t),h.gain.exponentialRampToValueAtTime(.001,t+i);const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.value=(n+s)/2,d.Q.value=1,c.connect(d),d.connect(h),h.connect(this.sfxGain),c.start(t),c.stop(t+i+.01)}setSFXVolume(e){this._sfxVolume=e,this.sfxGain&&(this.sfxGain.gain.value=e)}setMusicVolume(e){this._musicVolume=e,this.musicGain&&(this.musicGain.gain.value=e)}setVoiceVolume(e){this._voiceVolume=e,this.voiceGain&&(this.voiceGain.gain.value=e)}}const fh=3,mh=[-fh,0,fh],io=[{id:"forest_guardian",name:"Forest Guardian",theme:"forest",colors:{body:1722890,emissive:2976276,eyes:4521762,aura:3394594,gate:2247168},waves:[{delay:0,attacks:[{type:"fireball",lane:0,speed:20},{type:"fireball",lane:2,speed:20}]},{delay:2.5,attacks:[{type:"groundSlam",lane:0,speed:22},{type:"groundSlam",lane:1,speed:22},{type:"groundSlam",lane:2,speed:22}]},{delay:2.5,attacks:[{type:"fireball",lane:1,speed:22},{type:"fireball",lane:0,speed:22,delayOffset:.3}]},{delay:2,attacks:[{type:"groundSlam",lane:0,speed:24},{type:"groundSlam",lane:2,speed:24},{type:"fireball",lane:1,speed:22,delayOffset:.5}]}]},{id:"desert_pharaoh",name:"Desert Pharaoh",theme:"desert",colors:{body:5913098,emissive:9071136,eyes:16763904,aura:16755200,gate:5913088},waves:[{delay:0,attacks:[{type:"beam",lane:0,speed:20},{type:"beam",lane:1,speed:20},{type:"beam",lane:2,speed:20}]},{delay:2.5,attacks:[{type:"fireball",lane:1,speed:24},{type:"beam",lane:0,speed:22,delayOffset:.4},{type:"beam",lane:2,speed:22,delayOffset:.4}]},{delay:2.5,attacks:[{type:"groundSlam",lane:0,speed:24},{type:"beam",lane:1,speed:22},{type:"groundSlam",lane:2,speed:24}]},{delay:2,attacks:[{type:"beam",lane:0,speed:26},{type:"beam",lane:1,speed:26},{type:"fireball",lane:2,speed:24,delayOffset:.3}]}]},{id:"lava_titan",name:"Lava Titan",theme:"lava",colors:{body:3801088,emissive:8917248,eyes:16729088,aura:16720384,gate:4849664},waves:[{delay:0,attacks:[{type:"groundSlam",lane:0,speed:24},{type:"groundSlam",lane:1,speed:24},{type:"groundSlam",lane:2,speed:24}]},{delay:2,attacks:[{type:"fireball",lane:0,speed:26},{type:"fireball",lane:1,speed:26},{type:"fireball",lane:2,speed:26}]},{delay:2,attacks:[{type:"groundSlam",lane:1,speed:26},{type:"fireball",lane:0,speed:24,delayOffset:.3},{type:"fireball",lane:2,speed:24,delayOffset:.3}]},{delay:2,attacks:[{type:"groundSlam",lane:0,speed:28},{type:"beam",lane:1,speed:26},{type:"groundSlam",lane:2,speed:28},{type:"fireball",lane:1,speed:26,delayOffset:.5}]}]},{id:"frost_wraith",name:"Frost Wraith",theme:"snow",colors:{body:1714762,emissive:3364266,eyes:6737151,aura:4491519,gate:1714762},waves:[{delay:0,attacks:[{type:"beam",lane:0,speed:24},{type:"groundSlam",lane:1,speed:24},{type:"beam",lane:2,speed:24}]},{delay:2,attacks:[{type:"fireball",lane:0,speed:26},{type:"beam",lane:1,speed:24,delayOffset:.2},{type:"fireball",lane:2,speed:26}]},{delay:2,attacks:[{type:"groundSlam",lane:0,speed:26},{type:"fireball",lane:1,speed:28},{type:"groundSlam",lane:2,speed:26},{type:"beam",lane:1,speed:24,delayOffset:.4}]},{delay:2,attacks:[{type:"beam",lane:0,speed:28},{type:"groundSlam",lane:1,speed:28},{type:"fireball",lane:2,speed:28},{type:"fireball",lane:0,speed:26,delayOffset:.4},{type:"groundSlam",lane:2,speed:26,delayOffset:.4}]}]}],oy={fireball:new fi(.8,12,8),groundSlam:new Be(3.5,.6,1.5),beam:new Be(3.5,1.8,.8)},Qn={fireball:new ye({color:16729088,emissive:16720384,emissiveIntensity:2.5,metalness:.3,roughness:.4}),groundSlam:new ye({color:16737792,emissive:16729088,emissiveIntensity:1.8,metalness:.2,roughness:.6}),beam:new ye({color:16711748,emissive:16711714,emissiveIntensity:2,metalness:.4,roughness:.3})},ly={fireball:{width:1,height:1.5,yMin:.2,yMax:1.7},groundSlam:{width:2.4,height:.6,yMin:0,yMax:.6},beam:{width:2.4,height:1.4,yMin:1,yMax:2.4}},cy=4;class hy{constructor(e){this.scene=e,this.active=!1,this.phase="idle",this.timer=0,this.totalTime=12,this.waveIndex=0,this.waveTimer=0,this.encounterCount=0,this._bossDef=null,this._bossWaves=[],this.bossGroup=null,this._bossZ=0,this.projectiles=[],this._pendingAttacks=[],this._gateGroup=null,this._glowPhase=0,this._telegraphs=[],this._defeatAnimTimer=-1,this._defeatAnimDuration=.5,this._auraMesh=null,this._auraMat=null}_getBossDef(){const e=(this.encounterCount-1)%io.length;return io[e]}_getBossDefForTheme(e){if(!e)return null;const i={forest:"forest",desert:"desert",lava:"lava",snow:"snow",underwater:"snow"}[e]||e;return io.find(n=>n.theme===i)||null}getBossName(){return this._bossDef?this._bossDef.name:""}getBossId(){return this._bossDef?this._bossDef.id:""}start(e,t){this.active=!0,this.phase="approaching",this.timer=this.totalTime,this.waveIndex=0,this.waveTimer=1.5,this._pendingAttacks=[],this.encounterCount++,this._bossDef=this._getBossDefForTheme(t)||this._getBossDef(),this._bossWaves=this._bossDef.waves,this._bossZ=e-30,this._spawnBoss(),this._spawnGate(e-20),this._approachTimer=1.5}update(e,t,i,n){if(!this.active){if(this._defeatAnimTimer>=0){if(this._defeatAnimTimer+=e,this.bossGroup){const s=this._defeatAnimTimer/this._defeatAnimDuration,r=2*(1+s*.15);this.bossGroup.scale.setScalar(r),this._bodyMat&&(this._bodyMat.emissiveIntensity=.8+s*4),this._eyeMat&&(this._eyeMat.emissiveIntensity=4+s*6,this._eyeMat.emissive.setHex(16777215))}this._defeatAnimTimer>=this._defeatAnimDuration&&(this.bossGroup&&(this.scene.remove(this.bossGroup),this.bossGroup=null),this._defeatAnimTimer=-1)}return}if(this._bossZ=i-28,this.bossGroup&&(this.bossGroup.position.z=this._bossZ,this._glowPhase+=e*3,this.bossGroup.position.y=3+Math.sin(this._glowPhase)*.5,this.bossGroup.rotation.y+=e*.5,this._eyeMat&&(this._eyeMat.emissiveIntensity=3+Math.sin(this._glowPhase*2)*1),this._auraMat&&(this._auraMat.opacity=.35+Math.sin(this._glowPhase*1.5)*.15),this._auraMesh)){const s=1+Math.sin(this._glowPhase*1.5)*.08;this._auraMesh.scale.set(s,s,1)}this._gateGroup&&this._gateGroup.position.z>i+30&&(this.scene.remove(this._gateGroup),this._gateGroup=null);for(let s=this._telegraphs.length-1;s>=0;s--){const r=this._telegraphs[s];r.timer+=e,r.mesh.position.z=i-30,r.timer<r.duration*.5?r.mat.opacity=r.timer/(r.duration*.5)*.6:r.mat.opacity=.6*(1-(r.timer-r.duration*.5)/(r.duration*.5)),r.timer>=r.duration&&(this.scene.remove(r.mesh),this._telegraphs.splice(s,1))}if(this.phase==="approaching"&&(this._approachTimer-=e,this._approachTimer<=0&&(this.phase="fighting")),this.phase==="fighting"){this.timer-=e,this.waveTimer-=e,this.waveTimer<=0&&this.waveIndex<this._bossWaves.length&&(this._executeWave(this.waveIndex),this.waveIndex++,this.waveIndex<this._bossWaves.length&&(this.waveTimer=this._bossWaves[this.waveIndex].delay));for(let s=this._pendingAttacks.length-1;s>=0;s--)if(this._pendingAttacks[s].delay-=e,this._pendingAttacks[s].delay<=0){const r=this._pendingAttacks.splice(s,1)[0];r.type==="_telegraph"?this._spawnTelegraph(r.lane,r.attackType):this._spawnProjectile(r.lane,r.type,r.speed,i-50)}if(this.waveIndex>=this._bossWaves.length&&this.projectiles.length===0&&this._pendingAttacks.length===0){this._defeatBoss();return}if(this.timer<=0){this._defeatBoss();return}}this._updateProjectiles(e,i)}getProjectileCollisions(e,t,i,n,s){const r=[],o=e-.5,l=e+.5,c=i+s,h=i+s+n,d=t-.5,u=t+.5;for(let p=this.projectiles.length-1;p>=0;p--){const g=this.projectiles[p],_=g.mesh.position,m=ly[g.type],f=m.width*.5,v=_.x-f,x=_.x+f,y=m.yMin,C=m.yMax,T=_.z-.5,A=_.z+.5;l>v&&o<x&&h>y&&c<C&&u>T&&d<A&&(r.push(g),this.scene.remove(g.mesh),this.projectiles.splice(p,1))}return r}_executeWave(e){const t=this._bossWaves[e];if(!t)return;const i=.5;for(const n of t.attacks){const s=Math.min(10,this.encounterCount*1.5),r=n.speed+s,o=(n.delayOffset||0)+i;n.delayOffset?this._pendingAttacks.push({type:"_telegraph",lane:n.lane,attackType:n.type,speed:0,delay:n.delayOffset}):this._spawnTelegraph(n.lane,n.type),this._pendingAttacks.push({type:n.type,lane:n.lane,speed:r,delay:o})}}_spawnProjectile(e,t,i,n){const s=oy[t],r=this._bossDef;let o;if(r){const h=r.colors,u={fireball:{color:h.eyes,emissive:h.eyes},groundSlam:{color:h.emissive,emissive:h.emissive},beam:{color:h.aura,emissive:h.aura}}[t]||{};o=new ye({color:u.color||Qn[t].color,emissive:u.emissive||Qn[t].emissive,emissiveIntensity:Qn[t].emissiveIntensity,metalness:Qn[t].metalness,roughness:Qn[t].roughness})}else o=Qn[t];const l=new te(s,o);l.position.set(mh[e],t==="beam"?1.7:.3,n),l.castShadow=!0;const c=r?r.colors.eyes:16729088;t==="fireball"?l.add(new si(c,3,10,2)):t==="groundSlam"?l.add(new si(c,2,8,2)):t==="beam"&&l.add(new si(c,2,8,2)),this.scene.add(l),this.projectiles.push({mesh:l,type:t,speed:i,lane:e})}_spawnTelegraph(e,t){const i=this._bossDef,n=i?i.colors.aura:16729088,s=new fn(2.5,6),r=new ri({color:n,transparent:!0,opacity:0,side:jt}),o=new te(s,r);o.rotation.x=-Math.PI/2,o.position.set(mh[e],.05,this._bossZ),this.scene.add(o),this._telegraphs.push({mesh:o,mat:r,timer:0,duration:.5})}_updateProjectiles(e,t){for(let i=this.projectiles.length-1;i>=0;i--){const n=this.projectiles[i];if(n.mesh.position.z+=n.speed*e,n.type==="fireball"&&(n.mesh.rotation.x+=e*8,n.mesh.rotation.z+=e*5),n.type==="groundSlam"){const s=1+Math.sin(performance.now()*.01)*.1;n.mesh.scale.y=s}n.mesh.position.z>t+5&&(this.scene.remove(n.mesh),this.projectiles.splice(i,1))}}_defeatBoss(){this.phase="defeated",this.active=!1,this._defeatAnimTimer=0;for(const e of this.projectiles)this.scene.remove(e.mesh);this.projectiles=[],this._pendingAttacks=[];for(const e of this._telegraphs)this.scene.remove(e.mesh);this._telegraphs=[],this._gateGroup&&(this.scene.remove(this._gateGroup),this._gateGroup=null)}_spawnBoss(){this.bossGroup&&this.scene.remove(this.bossGroup);const e=this._bossDef,t=e.colors;this.bossGroup=new bt;const i=new ye({color:t.body,roughness:.6,metalness:.4,emissive:t.emissive,emissiveIntensity:.8});switch(this._bodyMat=i,this._eyeMat=new ye({color:t.eyes,emissive:t.eyes,emissiveIntensity:4}),e.id){case"forest_guardian":this._buildForestGuardian(i);break;case"desert_pharaoh":this._buildDesertPharaoh(i);break;case"lava_titan":this._buildLavaTitan(i);break;case"frost_wraith":this._buildFrostWraith(i);break}const n=new vr(5,6,32);this._auraMat=new ri({color:t.aura,transparent:!0,opacity:.5,side:jt}),this._auraMesh=new te(n,this._auraMat),this._auraMesh.rotation.x=Math.PI/2,this._auraMesh.position.y=-1.5,this.bossGroup.add(this._auraMesh);const s=new si(t.aura,4,35,2);s.position.set(0,2,0),this.bossGroup.add(s);const r=new si(t.eyes,3,30,2);r.position.set(0,8,0),this.bossGroup.add(r),this.bossGroup.position.set(0,3,this._bossZ),this.bossGroup.scale.setScalar(2),this.scene.add(this.bossGroup)}_buildForestGuardian(e){const t=new te(new Gi(1.2,1.5,4.5,8),e);t.position.y=0,this.bossGroup.add(t);const i=new te(new fi(1.3,8,6),e);i.position.y=3.5,this.bossGroup.add(i);const n=new ye({color:2771482,roughness:.8,metalness:.1,emissive:1718794,emissiveIntensity:.3});for(const r of[-1,1]){const o=new te(new Gi(.2,.4,3.5,6),n);o.position.set(r*1.8,.5,0),o.rotation.z=r*.4,this.bossGroup.add(o);for(let l=0;l<2;l++){const c=new te(new cn(.15,.8,4),n);c.position.set(r*(2.2+l*.3),1.5+l*.6,(l-.5)*.4),c.rotation.z=r*(.6+l*.3),this.bossGroup.add(c)}}for(const r of[-.4,.4]){const o=new te(new fi(.2,8,6),this._eyeMat);o.position.set(r,3.7,.9),this.bossGroup.add(o)}const s=new ye({color:4500002,emissive:2263057,emissiveIntensity:.5});for(let r=0;r<5;r++){const o=new te(new cn(.4,1,4),s),l=r/5*Math.PI*2;o.position.set(Math.cos(l)*1,4.5,Math.sin(l)*1),o.rotation.z=Math.cos(l)*.3,this.bossGroup.add(o)}}_buildDesertPharaoh(e){const t=new te(new Be(3.5,3.5,1.8),e);t.position.y=0,this.bossGroup.add(t);const i=new te(new Be(2.2,2.2,1.6),e);i.position.y=2.8,this.bossGroup.add(i);const n=new ye({color:14329120,roughness:.3,metalness:.7,emissive:11175936,emissiveIntensity:.4}),s=new te(new Be(2.8,.6,2),n);s.position.y=4,this.bossGroup.add(s);for(const c of[-1,1]){const h=new te(new Be(.5,2.5,.4),n);h.position.set(c*1.4,2,0),this.bossGroup.add(h)}for(const c of[-.5,.5]){const h=new te(new fi(.25,8,6),this._eyeMat);h.position.set(c,3,.9),this.bossGroup.add(h)}const r=new ye({color:9071136,roughness:.3,metalness:.6}),o=new te(new Gi(.12,.12,5,6),r);o.position.set(2.2,0,0),this.bossGroup.add(o);const l=new te(new fi(.4,8,6),this._eyeMat);l.position.set(2.2,2.8,0),this.bossGroup.add(l)}_buildLavaTitan(e){const t=new te(new Be(4,5,2.5),e);t.position.y=0,this.bossGroup.add(t);const i=new te(new Be(2.5,2,2),e);i.position.y=3.5,this.bossGroup.add(i);const n=new ye({color:2236962,roughness:.3,metalness:.8});for(const r of[-.8,.8]){const o=new te(new cn(.4,2,6),n);o.position.set(r,5,0),o.rotation.z=r>0?-.3:.3,this.bossGroup.add(o)}const s=new ye({color:16729088,emissive:16720384,emissiveIntensity:3});for(let r=0;r<4;r++){const o=new te(new Be(.15,1.5,2.6),s);o.position.set(-1.2+r*.8,-.5+r*.4,0),o.rotation.z=(r-1.5)*.15,this.bossGroup.add(o)}for(const r of[-2.5,2.5]){const o=new te(new Be(1.5,4,1.2),e);o.position.set(r,-.5,0),o.rotation.z=r>0?.12:-.12,this.bossGroup.add(o)}for(const r of[-.5,.5]){const o=new te(new fi(.3,8,6),this._eyeMat);o.position.set(r,3.8,1),this.bossGroup.add(o)}}_buildFrostWraith(e){const t=new te(new Gi(.6,1.8,5,6),e);t.position.y=0,this.bossGroup.add(t);const i=new te(new Be(1.8,2,1.5),e);i.position.y=3.5,this.bossGroup.add(i);const n=new ye({color:8965375,roughness:.2,metalness:.8,emissive:4491519,emissiveIntensity:1,transparent:!0,opacity:.8});for(let s=0;s<6;s++){const r=new te(new cn(.2,1.2+Math.random()*.6,4),n),o=s/6*Math.PI*2;r.position.set(Math.cos(o)*.8,4.8+Math.random()*.3,Math.sin(o)*.8),r.rotation.z=Math.cos(o)*.2,this.bossGroup.add(r)}for(let s=0;s<4;s++){const r=new te(new Al(.5),n),o=s/4*Math.PI*2;r.position.set(Math.cos(o)*3,1+s*.5,Math.sin(o)*3),r.rotation.set(Math.random(),Math.random(),Math.random()),this.bossGroup.add(r)}for(const s of[-1,1]){const r=new te(new Be(.3,3,.3),e);r.position.set(s*1.5,.5,0),r.rotation.z=s*.3,this.bossGroup.add(r);for(let o=0;o<3;o++){const l=new te(new cn(.08,.6,4),n);l.position.set(s*(1.8+o*.12),-1.2,(o-1)*.2),l.rotation.z=s*.1,l.rotation.x=.5,this.bossGroup.add(l)}}for(const s of[-.4,.4]){const r=new te(new fi(.22,8,6),this._eyeMat);r.position.set(s,3.8,.8),this.bossGroup.add(r)}}_spawnGate(e){this._gateGroup&&this.scene.remove(this._gateGroup);const t=this._bossDef,i=t?t.colors.gate:4849664,n=t?t.colors.aura:16720384;this._gateGroup=new bt,this._gateGroup.position.z=e;const s=new Be(1.5,7,1.5),r=new ye({color:i,emissive:n,emissiveIntensity:.4,roughness:.5,metalness:.3});for(const c of[-4,4]){const h=new te(s,r);h.position.set(c,3.5,0),h.castShadow=!0,this._gateGroup.add(h)}const o=new Be(9.5,.8,1.5),l=new te(o,r);l.position.set(0,7.2,0),this._gateGroup.add(l);for(const c of[-4,4]){const h=new si(n,2,8,2);h.position.set(c,7.5,0),this._gateGroup.add(h)}this.scene.add(this._gateGroup)}dispose(){this.bossGroup&&(this.scene.remove(this.bossGroup),this.bossGroup=null),this._gateGroup&&(this.scene.remove(this._gateGroup),this._gateGroup=null);for(const e of this.projectiles)this.scene.remove(e.mesh);for(const e of this._telegraphs)this.scene.remove(e.mesh);this.projectiles=[],this._pendingAttacks=[],this._telegraphs=[],this._defeatAnimTimer=-1,this.active=!1,this.phase="idle"}}const gh="0x348e62131fce2F4e0d5ead3Fe1719Bc039B380A9",Ha="0x89",dy="https://polygon-rpc.com";class uy{constructor(){this.connected=!1,this.address=null,this.pyrBalance=0,this.chainId=null,this._provider=null,this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}_emit(e,t){(this._listeners[e]||[]).forEach(i=>i(t))}async connect(){if(!window.ethereum)return this._emit("error","No wallet detected. Please install MetaMask."),!1;try{const e=await window.ethereum.request({method:"eth_requestAccounts"});return!e||e.length===0?(this._emit("error","No accounts found."),!1):(this.address=e[0],this.chainId=await window.ethereum.request({method:"eth_chainId"}),this._provider=window.ethereum,this.connected=!0,this.chainId!==Ha&&await this._switchToPolygon(),await this.refreshBalance(),window.ethereum.on("accountsChanged",t=>{this.address=t[0]||null,this.connected=!!this.address,this._emit("accountChanged",this.address),this.connected&&this.refreshBalance()}),window.ethereum.on("chainChanged",t=>{this.chainId=t,this._emit("chainChanged",t),this.refreshBalance()}),this._emit("connected",{address:this.address,balance:this.pyrBalance}),!0)}catch(e){return this._emit("error",e.message||"Connection failed"),!1}}disconnect(){this.connected=!1,this.address=null,this.pyrBalance=0,this._emit("disconnected")}async _switchToPolygon(){try{await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:Ha}]})}catch(e){e.code===4902&&await window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:Ha,chainName:"Polygon Mainnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:[dy],blockExplorerUrls:["https://polygonscan.com/"]}]})}}async refreshBalance(){if(!this.connected||!this.address)return 0;try{const e="0x70a08231"+this.address.slice(2).padStart(64,"0"),t=await window.ethereum.request({method:"eth_call",params:[{to:gh,data:e},"latest"]}),i=BigInt(t);return this.pyrBalance=Number(i/BigInt(10**14))/1e4,this._emit("balanceUpdated",this.pyrBalance),this.pyrBalance}catch(e){return console.warn("Failed to get PYR balance:",e.message),0}}async writeScoreToChain(e,t,i){if(!this.connected||!this.address)return this._emit("error","Wallet not connected"),null;try{const n=new TextEncoder,s=JSON.stringify({game:"VulcanRunner",score:Math.floor(e),distance:Math.floor(t),coins:i,timestamp:Date.now(),player:this.address}),r="0x"+Array.from(n.encode(s)).map(l=>l.toString(16).padStart(2,"0")).join(""),o=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:this.address,to:this.address,value:"0x0",data:r,gas:"0x15F90"}]});return this._emit("scoreWritten",{txHash:o,score:e,distance:t}),o}catch(n){return this._emit("error",n.message||"Failed to write score"),null}}async sendPYR(e,t){if(!this.connected||!this.address)return this._emit("error","Wallet not connected"),null;try{const n=BigInt(Math.floor(e*1e18)).toString(16).padStart(64,"0"),r="0xa9059cbb"+t.slice(2).padStart(64,"0")+n,o=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:this.address,to:gh,data:r,gas:"0x186A0"}]});return this._emit("pyrSent",{txHash:o,amount:e,to:t}),await this.refreshBalance(),o}catch(i){return this._emit("error",i.message||"Transaction failed"),null}}shortAddress(){return this.address?this.address.slice(0,6)+"..."+this.address.slice(-4):""}isOnPolygon(){return this.chainId===Ha}}const Hs={characters:[{id:"knight",name:"Knight",emoji:"⚔️",desc:"Balanced fighter",currency:"free",price:0,unlocked:!0},{id:"barbarian",name:"Barbarian",emoji:"🪓",desc:"Raw power",currency:"coins",price:500,unlocked:!1},{id:"mage",name:"Mage",emoji:"🔮",desc:"Arcane speed",currency:"pyr",price:5,unlocked:!1,premium:!0},{id:"rogue",name:"Rogue",emoji:"🗡️",desc:"Shadow step",currency:"pyr",price:8,unlocked:!1,premium:!0},{id:"paladin",name:"Paladin",emoji:"🛡️",desc:"Divine shield",currency:"pyr",price:12,unlocked:!1,premium:!0}],boosts:[{id:"head_start",name:"Head Start",emoji:"🚀",desc:"Start at 500m with coins",currency:"coins",price:200,consumable:!0},{id:"extra_life",name:"Extra Life",emoji:"💚",desc:"+1 revive per run",currency:"coins",price:300,consumable:!0},{id:"coin_boost",name:"2x Coins",emoji:"🪙",desc:"Double coins for one run",currency:"coins",price:150,consumable:!0},{id:"shield_start",name:"Shield Start",emoji:"🛡️",desc:"Start run with Shield",currency:"pyr",price:2,consumable:!0,premium:!0},{id:"magnet_start",name:"Magnet Start",emoji:"🧲",desc:"Start run with CoinMagnet",currency:"pyr",price:2,consumable:!0,premium:!0}]};class _h{constructor(){this._unlocked=JSON.parse(localStorage.getItem("vr_unlocked")||'["knight"]'),this._inventory=JSON.parse(localStorage.getItem("vr_inventory")||"{}"),this._totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10);for(const e of Hs.characters)e.unlocked=this._unlocked.includes(e.id)}getItems(){return Hs}getCharacters(){return Hs.characters}getBoosts(){return Hs.boosts}isUnlocked(e){return this._unlocked.includes(e)}getInventoryCount(e){return this._inventory[e]||0}buyWithCoins(e){const t=this._findItem(e);if(!t)return{success:!1,error:"Item not found"};if(t.currency!=="coins")return{success:!1,error:"Item requires PYR"};if(this._totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10),this._totalCoins<t.price)return{success:!1,error:"Not enough coins"};if(t.consumable)this._inventory[e]=(this._inventory[e]||0)+1,localStorage.setItem("vr_inventory",JSON.stringify(this._inventory));else{if(this._unlocked.includes(e))return{success:!1,error:"Already unlocked"};this._unlocked.push(e),t.unlocked=!0,localStorage.setItem("vr_unlocked",JSON.stringify(this._unlocked))}return this._totalCoins-=t.price,localStorage.setItem("vr_coins",String(this._totalCoins)),{success:!0,newBalance:this._totalCoins}}async buyWithPYR(e,t,i){const n=this._findItem(e);if(!n)return{success:!1,error:"Item not found"};if(n.currency!=="pyr")return{success:!1,error:"Item uses coins, not PYR"};if(!t.connected)return{success:!1,error:"Wallet not connected"};if(t.pyrBalance<n.price)return{success:!1,error:`Need ${n.price} PYR (have ${t.pyrBalance.toFixed(2)})`};const s=await t.sendPYR(n.price,i);return s?(n.consumable?(this._inventory[e]=(this._inventory[e]||0)+1,localStorage.setItem("vr_inventory",JSON.stringify(this._inventory))):this._unlocked.includes(e)||(this._unlocked.push(e),n.unlocked=!0,localStorage.setItem("vr_unlocked",JSON.stringify(this._unlocked))),{success:!0,txHash:s}):{success:!1,error:"Transaction cancelled or failed"}}useBoost(e){const t=this._inventory[e]||0;return t<=0?!1:(this._inventory[e]=t-1,localStorage.setItem("vr_inventory",JSON.stringify(this._inventory)),!0)}getActiveBoosts(){return{...this._inventory}}getCoins(){return parseInt(localStorage.getItem("vr_coins")||"0",10)}_findItem(e){for(const t of Object.values(Hs)){const i=t.find(n=>n.id===e);if(i)return i}return null}}const Ga="vr_leaderboard",vh=50;class py{constructor(){this.entries=JSON.parse(localStorage.getItem(Ga)||"[]")}submit(e){const t={name:e.name||"Player",score:Math.floor(e.score),distance:Math.floor(e.distance),coins:e.coins||0,character:e.character||"knight",maxCombo:e.maxCombo||0,date:new Date().toISOString(),address:e.address||null,txHash:e.txHash||null};return this.entries.push(t),this.entries.sort((i,n)=>n.score-i.score),this.entries.length>vh&&(this.entries=this.entries.slice(0,vh)),localStorage.setItem(Ga,JSON.stringify(this.entries)),this._getRank(t.score)}getTop(e=10){return this.entries.slice(0,e)}getPersonalBest(e){if(!e)return null;const t=e.toLowerCase();return this.entries.find(i=>i.address&&i.address.toLowerCase()===t)||null}_getRank(e){const t=this.entries.findIndex(i=>i.score<=e);return t===-1?this.entries.length:t+1}markOnChain(e,t){const i=this.entries.find(n=>n.score===e&&!n.txHash);i&&(i.txHash=t,localStorage.setItem(Ga,JSON.stringify(this.entries)))}clear(){this.entries=[],localStorage.setItem(Ga,JSON.stringify(this.entries))}}function Va(a,e,t,i){const n=[{coins:400,chests:2,distance:1e3},{coins:450,chests:2,distance:1e3},{coins:500,chests:3,distance:1e3},{coins:600,chests:3,distance:1e3},{coins:600,chests:4,distance:2e3},{coins:800,chests:5,distance:2e3},{coins:900,chests:6,distance:2e3},{coins:1e3,chests:6,distance:2e3},{coins:1200,chests:7,distance:3e3},{coins:1500,chests:10,distance:4200}],s=[{obstacleFrequency:.6,coinMultiplier:1,obstacleSizes:["small"]},{obstacleFrequency:.7,obstacleSizes:["small","medium"]},{obstacleFrequency:.75,obstacleSizes:["small","medium"]},{obstacleFrequency:.8,obstacleSizes:["small","medium","large"]},{obstacleFrequency:.9,obstacleSizes:["small","medium","large"],bossEnabled:!0,bossAtDistance:1200},{obstacleFrequency:1,obstacleSizes:["small","medium","large"],bossEnabled:!0,bossAtDistance:1200},{obstacleFrequency:1,obstacleSizes:["small","medium","large"],bossEnabled:!0,bossAtDistance:1200},{obstacleFrequency:1.1,obstacleSizes:["small","medium","large"],gatesEnabled:!0,gateInterval:500,bossEnabled:!0,bossAtDistance:1200},{obstacleFrequency:1.2,obstacleSizes:["small","medium","large"],gatesEnabled:!0,slideGatesEnabled:!0,gateInterval:300,coinMultiplier:1.25,bossEnabled:!0,bossAtDistance:1200},{obstacleFrequency:1.3,obstacleSizes:["small","medium","large"],gatesEnabled:!0,slideGatesEnabled:!0,gateInterval:300,coinMultiplier:1.5,bossEnabled:!0,bossAtDistance:1e3}];return i.map((r,o)=>({id:`${a}_${o+1}`,name:r.name,description:r.description,objectives:{distance:n[o].distance,coins:n[o].coins,chests:n[o].chests},modifiers:{fixedTheme:e,speedMultiplier:t[o],...s[o]}}))}const fy=[{name:"Mossy Trail",description:"A gentle jog through dappled sunlight."},{name:"Whispering Willows",description:"The trees seem to lean in and whisper secrets."},{name:"Toadstool Hollow",description:"Giant mushrooms block the path ahead."},{name:"Firefly Glade",description:"Bioluminescent bugs light your way through the dark."},{name:"Briar Thicket",description:"Thorny tangles demand sharp reflexes."},{name:"Canopy Sprint",description:"Race across the treetops at breakneck speed!"},{name:"Pixie Ambush",description:"Mischievous pixies have rigged the forest with traps."},{name:"Treant's Domain",description:"The ancient Treant guards the forest heart."},{name:"Overgrown Ruins",description:"Crumbling stone and creeping vines hide treasures."},{name:"Heart of the Wilds",description:"The deepest grove — only the worthy may pass."}],my=[{name:"Dune Dash",description:"Golden dunes stretch to the horizon."},{name:"Mirage Mile",description:"Nothing is what it seems out here."},{name:"Sandstorm Surge",description:"A wall of sand bears down — keep moving!"},{name:"Oasis Blitz",description:"Grab every coin before the oasis dries up!"},{name:"Scorpion Pass",description:"The canyon narrows and the obstacles multiply."},{name:"Sunblaze Sprint",description:"The heat is on. Run faster than the sun."},{name:"Tomb Raider's Run",description:"Ancient traps guard forgotten riches."},{name:"Sphinx's Gauntlet",description:"Answer the Sphinx with your feet — dodge or perish."},{name:"Quicksand Frenzy",description:"The ground itself is your enemy."},{name:"Eye of the Storm",description:"Survive the mega-sandstorm to claim your glory."}],gy=[{name:"Ember Gateway",description:"The descent begins. Heat rises from below."},{name:"Magma Channels",description:"Rivers of molten rock carve the only path forward."},{name:"Obsidian Gauntlet",description:"Razor-sharp rocks and zero margin for error."},{name:"Flame Warden's Keep",description:"A fiery guardian blocks the tunnel."},{name:"Eruption Sprint",description:"The volcano is blowing — run for your life!"},{name:"Cinder Maze",description:"Choking ash and falling debris. Stay sharp."},{name:"Inferno Blitz",description:"Everything is on fire. Collect while you can."},{name:"Hellforge Passage",description:"The walls pulse with heat. One mistake is fatal."},{name:"Caldera of Souls",description:"The volcano's heart beats with ancient power."},{name:"Vulcan's Throne",description:"Face the Volcano Lord. Only legends survive."}],_y=[{name:"Shallow Reef",description:"Crystal clear waters ease you in."},{name:"Kelp Forest",description:"Thick seaweed tangles slow your path."},{name:"Coral Maze",description:"Navigate the twisting coral formations."},{name:"Jellyfish Swarm",description:"Electric jellyfish fill every lane."},{name:"Shipwreck Alley",description:"Loot the wrecks before the current takes you."},{name:"The Deep Trench",description:"Darkness closes in. Air is scarce."},{name:"Angler's Domain",description:"Face the beast of the deep."},{name:"Maelstrom Run",description:"The whirlpool drags everything into chaos."},{name:"Leviathan's Wake",description:"The ocean floor trembles. Something stirs."},{name:"Abyssal Throne",description:"The deepest point. Only legends return."}],vy=[.8,.85,.9,1,1.1,1.2,1.3,1.3,1.3,1.5],yy=[1,1.1,1.2,1.25,1.3,1.4,1.5,1.5,1.5,1.6],xy=[1.1,1.2,1.25,1.3,1.4,1.6,1.6,1.6,1.7,1.8],by=[1.25,1.3,1.4,1.5,1.6,1.7,1.8,1.8,1.9,2],yh=[{id:"forest",name:"Arcadia — Enchanted Forest",icon:"🌲",theme:"forest",boss:"Forest Guardian",requiredStars:0,stages:Va("forest","forest",vy,fy)},{id:"desert",name:"Notus — Scorching Sands",icon:"🏜️",theme:"desert",boss:"Desert Pharaoh",requiredStars:12,stages:Va("desert","desert",yy,my)},{id:"lava",name:"Hades — Volcanic Depths",icon:"🌋",theme:"lava",boss:"Lava Titan",requiredStars:25,stages:Va("lava","lava",xy,gy)},{id:"underwater",name:"Boreas — Abyssal Depths",icon:"🌊",theme:"underwater",boss:"Frost Wraith",requiredStars:45,stages:Va("underwater","underwater",by,_y)}];class Sy{constructor(){this.state=this._load()}_load(){try{const e=localStorage.getItem("vr_campaign");if(e)return JSON.parse(e)}catch(e){console.warn("CampaignManager: failed to load state, resetting.",e)}return{results:{}}}save(){try{localStorage.setItem("vr_campaign",JSON.stringify(this.state))}catch(e){console.warn("CampaignManager: failed to save state.",e)}}getTotalStars(){let e=0;for(const t in this.state.results){const i=this.state.results[t];i&&typeof i.stars=="number"&&(e+=i.stars)}try{const t=parseInt(localStorage.getItem("vr_challenge_stars"),10);isNaN(t)||(e+=t)}catch{}return e}isCampaignUnlocked(e){const t=this.getCampaign(e);return t?this.getTotalStars()>=t.requiredStars:!1}isStageUnlocked(e,t){if(!this.isCampaignUnlocked(e))return!1;if(t===0)return!0;const i=this.getCampaign(e);if(!i||t<0||t>=i.stages.length)return!1;const n=i.stages[t-1],s=this.getStageResult(e,n.id);return s!==null&&s.stars>=1}getStageResult(e,t){const i=`${e}:${t}`;return this.state.results[i]||null}evaluateRun(e,t,i){const n=this.getCampaign(e);if(!n)return null;const s=n.stages.find(x=>x.id===t);if(!s)return null;const{score:r=0,distance:o=0,coins:l=0,chestsSmashed:c=0}=i,h=s.objectives;let d=0;const u=(i.distance||0)>=h.distance,p=(i.coins||0)>=h.coins,g=(i.chestsSmashed||0)>=h.chests;u&&(d=1),u&&(p||g)&&(d=2),u&&p&&g&&(d=3);const _=`${e}:${t}`,m=this.state.results[_],f=!m;let v=!1;return(!m||d>m.stars||r>m.bestScore||o>m.bestDistance||l>m.bestCoins)&&(v=!0,this.state.results[_]={stars:m?Math.max(m.stars,d):d,bestScore:m?Math.max(m.bestScore,r):r,bestDistance:m?Math.max(m.bestDistance,o):o,bestCoins:m?Math.max(m.bestCoins,l):l},this.save()),{stars:d,isNew:f,newRecord:v}}getCampaign(e){return yh.find(t=>t.id===e)||null}getStage(e,t){const i=this.getCampaign(e);return!i||t<0||t>=i.stages.length?null:i.stages[t]}getAllCampaigns(){return yh}}const xh=[{id:"coin_hoarder",name:"Coin Hoarder",desc:"Collect {target} coins in a single run",type:"coins",targetRange:[100,500],reward:{coins:150,gems:2}},{id:"untouchable",name:"Untouchable",desc:"Run {target}m without getting hit",type:"noHitDistance",targetRange:[200,800],reward:{coins:300,gems:5}},{id:"boss_slayer",name:"Boss Slayer",desc:"Defeat {target} boss(es) in a single run",type:"bossDefeated",targetRange:[1,3],reward:{coins:400,gems:6}},{id:"combo_fiend",name:"Combo Fiend",desc:"Reach a combo of {target}x in a single run",type:"maxCombo",targetRange:[10,50],reward:{coins:200,gems:3}},{id:"chest_buster",name:"Chest Buster",desc:"Smash {target} chests in a single run",type:"chestsSmashed",targetRange:[5,20],reward:{coins:180,gems:3}},{id:"speed_demon",name:"Speed Demon",desc:"Run {target}m in a single run",type:"distance",targetRange:[500,2e3],reward:{coins:200,gems:3}},{id:"close_shaves",name:"Close Shaves",desc:"Pull off {target} near misses in a single run",type:"nearMisses",targetRange:[5,25],reward:{coins:250,gems:4}},{id:"marathon_runner",name:"Marathon Runner",desc:"Cover {target}m distance in a single run",type:"distance",targetRange:[1500,5e3],reward:{coins:350,gems:5}},{id:"high_roller",name:"High Roller",desc:"Score {target} points in a single run",type:"score",targetRange:[5e3,25e3],reward:{coins:250,gems:4}},{id:"power_surge",name:"Power Surge",desc:"Collect {target} power-ups in a single run",type:"powerUpsCollected",targetRange:[3,12],reward:{coins:200,gems:3}},{id:"gem_hunter",name:"Gem Hunter",desc:"Collect {target} gems in a single run",type:"gemsCollected",targetRange:[5,20],reward:{coins:250,gems:4}},{id:"dodge_master",name:"Dodge Master",desc:"Dodge {target} obstacles in a single run",type:"obstaclesDodged",targetRange:[20,80],reward:{coins:200,gems:3}},{id:"score_legend",name:"Score Legend",desc:"Hit a score of {target} in a single run",type:"score",targetRange:[2e4,75e3],reward:{coins:400,gems:6}},{id:"iron_runner",name:"Iron Runner",desc:"Run {target}m without taking a single hit",type:"noHitDistance",targetRange:[500,1500],reward:{coins:450,gems:7}},{id:"daily_grinder",name:"Daily Grinder",desc:"Complete {target} run(s) today",type:"totalRuns",targetRange:[3,8],reward:{coins:150,gems:2}},{id:"treasure_goblin",name:"Treasure Goblin",desc:"Smash {target} chests in a single run",type:"chestsSmashed",targetRange:[10,30],reward:{coins:300,gems:5}}];function My(a){return function(){a|=0,a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class wy{constructor(){this._storageKey="vr_daily",this._starsKey="vr_challenge_stars",this._load()}_load(){try{const e=localStorage.getItem(this._storageKey);if(e){const t=JSON.parse(e),i=this._todayStr();if(t.date===i){this._state=t;return}}}catch{}this._regenerate()}_todayStr(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}_seedFromDate(e){let t=0;for(let i=0;i<e.length;i++){const n=e.charCodeAt(i);t=(t<<5)-t+n|0}return Math.abs(t)}_regenerate(){const e=this._todayStr(),t=this._generateDailyChallenges(e);this._state={date:e,challenges:t,bonusClaimed:!1},this.save()}_generateDailyChallenges(e){const t=this._seedFromDate(e),i=My(t),n=[],s=new Set;for(;n.length<3;){const r=Math.floor(i()*xh.length);if(s.has(r))continue;s.add(r);const o=xh[r],[l,c]=o.targetRange,h=Math.round(l+i()*(c-l));n.push({id:o.id,name:o.name,desc:o.desc.replace("{target}",h),type:o.type,target:h,progress:0,completed:!1,claimed:!1,reward:{...o.reward}})}return n}getDailyChallenges(){return this._state.challenges.map(e=>({...e,reward:{...e.reward}}))}evaluateRun(e){const t=[];return this._state.challenges.forEach((i,n)=>{if(i.completed)return;let s=0;switch(i.type){case"distance":s=e.distance||0;break;case"score":s=e.score||0;break;case"coins":s=e.coins||0;break;case"maxCombo":s=e.maxCombo||0;break;case"chestsSmashed":s=e.chestsSmashed||0;break;case"obstaclesDodged":s=e.obstaclesDodged||0;break;case"noHitDistance":s=e.noHitDistance||0;break;case"bossDefeated":s=e.bossDefeated||0;break;case"powerUpsCollected":s=e.powerUpsCollected||0;break;case"gemsCollected":s=e.gemsCollected||0;break;case"nearMisses":s=e.nearMisses||0;break;case"totalRuns":s=i.progress+1;break}i.type==="totalRuns"?i.progress=s:i.progress=Math.max(i.progress,s),i.progress>=i.target&&(i.completed=!0,t.push(n))}),this.save(),t}claimReward(e){const t=this._state.challenges[e];if(!t||!t.completed||t.claimed)return null;t.claimed=!0;const i=parseInt(localStorage.getItem(this._starsKey)||"0",10);return localStorage.setItem(this._starsKey,String(i+1)),this.save(),{coins:t.reward.coins,gems:t.reward.gems}}allCompleted(){return this._state.challenges.every(e=>e.completed)}allClaimed(){return this._state.challenges.every(e=>e.claimed)}getBonusReward(){return this.allCompleted()&&!this._state.bonusClaimed?{coins:200,gems:5}:null}claimBonus(){return!this.allCompleted()||this._state.bonusClaimed?null:(this._state.bonusClaimed=!0,this.save(),{coins:200,gems:5})}save(){try{localStorage.setItem(this._storageKey,JSON.stringify(this._state))}catch(e){console.warn("ChallengeManager: failed to save state",e)}}getTimeUntilReset(){const e=new Date,t=new Date(e);return t.setHours(24,0,0,0),t.getTime()-e.getTime()}}const Mi={knight:{name:"Knight",emoji:"⚔️",active:{id:"shield_bash",name:"Shield Bash",desc:"Become invincible for {duration}s and smash obstacles",baseDuration:2.5,baseCooldown:25,icon:"🛡️"},passive:{id:"armor_up",name:"Armor Up",desc:"+{value} max health",baseValue:1}},barbarian:{name:"Barbarian",emoji:"🪓",active:{id:"rage",name:"Rage",desc:"2x speed + invincible for {duration}s, coins worth 3x",baseDuration:3,baseCooldown:30,icon:"🔥"},passive:{id:"brute_force",name:"Brute Force",desc:"Smash obstacles on contact (no attack needed) every {value}s",baseValue:12}},mage:{name:"Mage",emoji:"🔮",active:{id:"time_warp",name:"Time Warp",desc:"Slow time to 40% for {duration}s, coins still full value",baseDuration:4,baseCooldown:28,icon:"⏳"},passive:{id:"arcane_sight",name:"Arcane Sight",desc:"Power-ups last {value}% longer",baseValue:30}},rogue:{name:"Rogue",emoji:"🗡️",active:{id:"shadow_dash",name:"Shadow Dash",desc:"Phase through obstacles for {duration}s, +5 coins per dodge",baseDuration:3,baseCooldown:22,icon:"👤"},passive:{id:"nimble",name:"Nimble",desc:"Near-miss zone {value}% wider, +50% near-miss bonus",baseValue:40}},paladin:{name:"Paladin",emoji:"🛡️",active:{id:"divine_shield",name:"Divine Shield",desc:"Absorb next {value} hits + heal 1 HP",baseDuration:6,baseCooldown:35,icon:"✨"},passive:{id:"blessed",name:"Blessed",desc:"Revive with {value} HP instead of 1",baseValue:2}}},is={health:{name:"Vitality",icon:"❤️",desc:"+1 max HP per level",maxLevel:5,costs:[100,250,500,1e3,2e3],effect:a=>({maxHealthBonus:a})},ability_power:{name:"Ability Power",icon:"⚡",desc:"Active ability lasts longer",maxLevel:5,costs:[150,350,700,1400,2800],effect:a=>({abilityDurationMult:1+a*.15})},ability_cooldown:{name:"Quick Cast",icon:"🔄",desc:"Reduce ability cooldown",maxLevel:5,costs:[150,350,700,1400,2800],effect:a=>({abilityCooldownMult:1-a*.08})},coin_bonus:{name:"Fortune",icon:"🪙",desc:"+10% coin gain per level",maxLevel:5,costs:[80,200,400,800,1600],effect:a=>({coinMultiplier:1+a*.1})},score_bonus:{name:"Glory",icon:"🏆",desc:"+8% score per level",maxLevel:5,costs:[80,200,400,800,1600],effect:a=>({scoreMultiplier:1+a*.08})},passive_boost:{name:"Mastery",icon:"🎯",desc:"Strengthen character passive",maxLevel:3,costs:[300,800,2e3],effect:a=>({passiveBoost:a})}};class Ey{constructor(){this._storageKey="vr_upgrades",this._dustKey="vr_stardust",this._keysKey="vr_keys",this._state=this._load()}_load(){try{const t=localStorage.getItem(this._storageKey);if(t)return JSON.parse(t)}catch(t){console.warn("AbilityManager: failed to load, resetting.",t)}const e={};for(const t of Object.keys(Mi)){e[t]={};for(const i of Object.keys(is))e[t][i]=0}return e}save(){try{localStorage.setItem(this._storageKey,JSON.stringify(this._state))}catch(e){console.warn("AbilityManager: failed to save.",e)}}getStarDust(){return parseInt(localStorage.getItem(this._dustKey)||"0",10)}addStarDust(e){const t=this.getStarDust();localStorage.setItem(this._dustKey,String(t+e))}spendStarDust(e){const t=this.getStarDust();return t<e?!1:(localStorage.setItem(this._dustKey,String(t-e)),!0)}getKeys(){return parseInt(localStorage.getItem(this._keysKey)||"0",10)}addKeys(e){const t=this.getKeys();localStorage.setItem(this._keysKey,String(t+e))}getUpgradeLevel(e,t){return this._state[e]&&this._state[e][t]||0}getUpgradeCost(e,t){const i=is[e];return!i||t>=i.maxLevel?1/0:i.costs[t]}canUpgrade(e,t){const i=this.getUpgradeLevel(e,t),n=is[t];if(!n||i>=n.maxLevel)return!1;const s=n.costs[i];return this.getStarDust()>=s}purchaseUpgrade(e,t){if(!this.canUpgrade(e,t))return!1;const i=this.getUpgradeLevel(e,t),n=is[t].costs[i];return this.spendStarDust(n)?(this._state[e]||(this._state[e]={}),this._state[e][t]=i+1,this.save(),!0):!1}getCharacterStats(e){const t={maxHealthBonus:0,abilityDurationMult:1,abilityCooldownMult:1,coinMultiplier:1,scoreMultiplier:1,passiveBoost:0};for(const[i,n]of Object.entries(is)){const s=this.getUpgradeLevel(e,i);if(s>0){const r=n.effect(s);for(const[o,l]of Object.entries(r))o in t&&(o.includes("Mult")||o.includes("multiplier"),t[o]=l)}}return t}getAbilityConfig(e){const t=Mi[e];if(!t)return null;const i=this.getCharacterStats(e),n=t.active;return{id:n.id,name:n.name,icon:n.icon,duration:n.baseDuration*i.abilityDurationMult,cooldown:n.baseCooldown*i.abilityCooldownMult,passive:t.passive,passiveBoost:i.passiveBoost}}getTotalUpgradePoints(){let e=0;for(const t of Object.keys(this._state))for(const i of Object.values(this._state[t]))e+=i;return e}}const Wa=[{id:"run_500",name:"First Steps",desc:"Run 500m in one run",type:"distance",target:500,reward:{dust:50,coins:100},icon:"👟"},{id:"run_2000",name:"Road Warrior",desc:"Run 2000m in one run",type:"distance",target:2e3,reward:{dust:150,coins:300},icon:"🏃"},{id:"run_5000",name:"Marathon Legend",desc:"Run 5000m in one run",type:"distance",target:5e3,reward:{dust:400,coins:800},icon:"🏅"},{id:"score_5k",name:"Rising Star",desc:"Score 5,000 points",type:"score",target:5e3,reward:{dust:50,coins:100},icon:"⭐"},{id:"score_25k",name:"Score Master",desc:"Score 25,000 points",type:"score",target:25e3,reward:{dust:200,coins:400},icon:"🌟"},{id:"score_100k",name:"Legendary Score",desc:"Score 100,000 points",type:"score",target:1e5,reward:{dust:600,coins:1200},icon:"💫"},{id:"coins_100",name:"Coin Collector",desc:"Collect 100 coins in one run",type:"coins",target:100,reward:{dust:40,coins:80},icon:"🪙"},{id:"coins_500",name:"Gold Rush",desc:"Collect 500 coins in one run",type:"coins",target:500,reward:{dust:200,coins:400},icon:"💰"},{id:"combo_10",name:"Combo Starter",desc:"Reach 10x combo",type:"maxCombo",target:10,reward:{dust:60,coins:120},icon:"🔥"},{id:"combo_30",name:"Combo King",desc:"Reach 30x combo",type:"maxCombo",target:30,reward:{dust:250,coins:500},icon:"👑"},{id:"chests_10",name:"Chest Smasher",desc:"Smash 10 chests in one run",type:"chestsSmashed",target:10,reward:{dust:80,coins:160},icon:"📦"},{id:"chests_30",name:"Treasure Hunter",desc:"Smash 30 chests total",type:"chestsSmashed_total",target:30,reward:{dust:200,coins:400},icon:"🏴‍☠️"},{id:"boss_1",name:"Boss Slayer",desc:"Defeat your first boss",type:"bossDefeated",target:1,reward:{dust:100,keys:1},icon:"🐉"},{id:"boss_10",name:"Boss Hunter",desc:"Defeat 10 bosses total",type:"bossDefeated_total",target:10,reward:{dust:500,keys:3},icon:"⚔️"},{id:"near_20",name:"Daredevil",desc:"20 near misses in one run",type:"nearMisses",target:20,reward:{dust:100,coins:200},icon:"😱"},{id:"nohit_500",name:"Untouchable",desc:"500m without getting hit",type:"noHitDistance",target:500,reward:{dust:150,coins:300},icon:"🌀"},{id:"nohit_1500",name:"Ghost Runner",desc:"1500m without getting hit",type:"noHitDistance",target:1500,reward:{dust:500,coins:1e3},icon:"👻"},{id:"stars_10",name:"Star Gazer",desc:"Earn 10 campaign stars",type:"totalStars",target:10,reward:{dust:200,coins:400},icon:"🌠"},{id:"stars_30",name:"Star Collector",desc:"Earn 30 campaign stars",type:"totalStars",target:30,reward:{dust:500,coins:1e3},icon:"✨"},{id:"stars_60",name:"Star Master",desc:"Earn 60 campaign stars",type:"totalStars",target:60,reward:{dust:1e3,coins:2e3},icon:"🏆"},{id:"upgrades_5",name:"Apprentice",desc:"Purchase 5 upgrades",type:"totalUpgrades",target:5,reward:{dust:100,coins:200},icon:"📚"},{id:"upgrades_20",name:"Seasoned",desc:"Purchase 20 upgrades",type:"totalUpgrades",target:20,reward:{dust:400,coins:800},icon:"🎓"},{id:"streak_3",name:"Consistent",desc:"3-day login streak",type:"loginStreak",target:3,reward:{dust:100,coins:200},icon:"📅"},{id:"streak_7",name:"Dedicated",desc:"7-day login streak",type:"loginStreak",target:7,reward:{dust:300,coins:600},icon:"🗓️"},{id:"streak_30",name:"Devoted",desc:"30-day login streak",type:"loginStreak",target:30,reward:{dust:1e3,coins:2e3},icon:"💎"}],bh=[{id:"w_distance",name:"Weekly Mileage",desc:"Run {target}m total this week",type:"distance_total",targetRange:[5e3,15e3],reward:{dust:300,coins:500}},{id:"w_coins",name:"Weekly Fortune",desc:"Collect {target} coins total",type:"coins_total",targetRange:[1e3,5e3],reward:{dust:250,coins:400}},{id:"w_chests",name:"Weekly Looter",desc:"Smash {target} chests total",type:"chests_total",targetRange:[20,60],reward:{dust:200,coins:350}},{id:"w_boss",name:"Weekly Slayer",desc:"Defeat {target} bosses total",type:"boss_total",targetRange:[3,10],reward:{dust:400,coins:600}},{id:"w_runs",name:"Weekly Grinder",desc:"Complete {target} runs",type:"runs_total",targetRange:[10,25],reward:{dust:200,coins:300}},{id:"w_stars",name:"Weekly Star",desc:"Earn {target} campaign stars",type:"stars_earned",targetRange:[5,15],reward:{dust:350,coins:500}},{id:"w_score",name:"Weekly Legend",desc:"Score {target} total points",type:"score_total",targetRange:[2e4,8e4],reward:{dust:300,coins:500}}],Sh=[{day:1,coins:50,dust:10},{day:2,coins:75,dust:15},{day:3,coins:100,dust:25},{day:4,coins:150,dust:30},{day:5,coins:200,dust:50},{day:6,coins:250,dust:75},{day:7,coins:500,dust:150,keys:1}];function Ty(a){return function(){a|=0,a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Ay{constructor(){this._storageKey="vr_progression",this._state=this._load(),this._checkLogin()}_load(){try{const e=localStorage.getItem(this._storageKey);if(e)return JSON.parse(e)}catch(e){console.warn("ProgressionManager: failed to load, resetting.",e)}return{lifetime:{totalDistance:0,totalCoins:0,totalScore:0,totalChests:0,totalBosses:0,totalRuns:0},achievements:{},weekly:null,streak:{current:0,lastLogin:null,todayClaimed:!1}}}save(){try{localStorage.setItem(this._storageKey,JSON.stringify(this._state))}catch(e){console.warn("ProgressionManager: failed to save.",e)}}_checkLogin(){const e=this._todayStr(),t=this._dateStr(-1),i=this._state.streak;i.lastLogin!==e&&(i.lastLogin===t?i.current++:i.current=1,i.lastLogin=e,i.todayClaimed=!1,this.save(),this._checkWeekly())}getStreakInfo(){const e=this._state.streak,t=(e.current-1)%7,i=Sh[t];return{currentStreak:e.current,dayInCycle:t+1,reward:i,claimed:e.todayClaimed}}claimStreakReward(){const e=this._state.streak;if(e.todayClaimed)return null;const t=(e.current-1)%7,i=Sh[t];return e.todayClaimed=!0,this.save(),i}_weekId(){const e=new Date,t=new Date(e.getFullYear(),0,1),i=Math.ceil(((e-t)/864e5+t.getDay()+1)/7);return`${e.getFullYear()}-W${i}`}_checkWeekly(){const e=this._weekId();if(this._state.weekly&&this._state.weekly.weekId===e)return;const t=this._seedFromStr(e),i=Ty(t),n=[],s=new Set;for(;n.length<3;){const r=Math.floor(i()*bh.length);if(s.has(r))continue;s.add(r);const o=bh[r],[l,c]=o.targetRange,h=Math.round(l+i()*(c-l));n.push({id:o.id,name:o.name,desc:o.desc.replace("{target}",h.toLocaleString()),type:o.type,target:h,progress:0,completed:!1,claimed:!1,reward:{...o.reward}})}this._state.weekly={weekId:e,missions:n,weeklyStats:{distance:0,coins:0,chests:0,bosses:0,runs:0,starsEarned:0,score:0}},this.save()}getWeeklyMissions(){return this._state.weekly||this._checkWeekly(),this._state.weekly.missions.map(e=>({...e,reward:{...e.reward}}))}claimWeeklyReward(e){var i;const t=(i=this._state.weekly)==null?void 0:i.missions[e];return!t||!t.completed||t.claimed?null:(t.claimed=!0,this.save(),{...t.reward})}processRun(e,t=0){var r;const i={newAchievements:[],dustEarned:0,coinsEarned:0,keysEarned:0},n=this._state.lifetime;if(n.totalDistance+=e.distance||0,n.totalCoins+=e.coins||0,n.totalScore+=e.score||0,n.totalChests+=e.chestsSmashed||0,n.totalBosses+=e.bossDefeated||0,n.totalRuns++,this._state.weekly){const o=this._state.weekly.weeklyStats;o.distance+=e.distance||0,o.coins+=e.coins||0,o.chests+=e.chestsSmashed||0,o.bosses+=e.bossDefeated||0,o.runs++,o.starsEarned+=t,o.score+=e.score||0;for(const l of this._state.weekly.missions){if(l.completed)continue;let c=0;switch(l.type){case"distance_total":c=o.distance;break;case"coins_total":c=o.coins;break;case"chests_total":c=o.chests;break;case"boss_total":c=o.bosses;break;case"runs_total":c=o.runs;break;case"stars_earned":c=o.starsEarned;break;case"score_total":c=o.score;break}l.progress=c,c>=l.target&&(l.completed=!0)}}const s={...e,chestsSmashed_total:n.totalChests,bossDefeated_total:n.totalBosses,loginStreak:this._state.streak.current};try{const o=parseInt(localStorage.getItem("vr_challenge_stars")||"0",10),l=localStorage.getItem("vr_campaign");if(l){const h=JSON.parse(l);for(const d in h.results){const u=h.results[d];u&&u.stars&&(s.totalStars=(s.totalStars||0)+u.stars)}}s.totalStars=(s.totalStars||0)+o;const c=localStorage.getItem("vr_upgrades");if(c){const h=JSON.parse(c);let d=0;for(const u of Object.values(h))for(const p of Object.values(u))d+=p;s.totalUpgrades=d}}catch{}for(const o of Wa){if((r=this._state.achievements[o.id])!=null&&r.completed)continue;(s[o.type]||0)>=o.target&&(this._state.achievements[o.id]={completed:!0,claimed:!1},i.newAchievements.push(o))}return this.save(),i}getAchievements(){return Wa.map(e=>{var t,i;return{...e,completed:!!((t=this._state.achievements[e.id])!=null&&t.completed),claimed:!!((i=this._state.achievements[e.id])!=null&&i.claimed)}})}claimAchievement(e){const t=this._state.achievements[e];if(!t||!t.completed||t.claimed)return null;const i=Wa.find(n=>n.id===e);return i?(t.claimed=!0,this.save(),i.reward):null}getUnclaimedCount(){let e=0;for(const t of Wa){const i=this._state.achievements[t.id];i&&i.completed&&!i.claimed&&e++}return e}getLifetimeStats(){return{...this._state.lifetime}}_todayStr(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}_dateStr(e){const t=new Date;return t.setDate(t.getDate()+e),`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}_seedFromStr(e){let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i)|0;return Math.abs(t)}}const Mh=[{id:"treasure_vault",name:"Treasure Vault!",icon:"💎",desc:"Smash every chest!",duration:8,color:[1,.85,0]},{id:"coin_frenzy",name:"Coin Frenzy!",icon:"🪙",desc:"Grab them all!",duration:10,color:[1,.7,0]},{id:"dodge_arena",name:"Dodge Arena!",icon:"⚡",desc:"Dodge everything!",duration:8,color:[1,.2,.2]}],Cy=[600,1200,2e3,3e3,4500];class Ry{constructor(){this.active=!1,this.currentGame=null,this.timer=0,this.totalTime=0,this.score=0,this._triggeredAt=new Set,this._simonSequence=[],this._simonStep=0,this._simonFeedback=null,this._chestsSpawned=0,this._chestsSmashed=0,this._coinsCollected=0,this._dodgesSurvived=0,this._lastObstacleSpawn=0}reset(){this.active=!1,this.currentGame=null,this.timer=0,this.score=0,this._triggeredAt.clear(),this._simonSequence=[],this._simonStep=0,this._simonFeedback=null}checkTrigger(e){if(this.active)return null;for(const t of Cy)if(e>=t&&!this._triggeredAt.has(t))return this._triggeredAt.add(t),Mh[Math.floor(Math.random()*Mh.length)];return null}start(e){this.active=!0,this.currentGame=e,this.timer=e.duration,this.totalTime=e.duration,this.score=0,this._chestsSpawned=0,this._chestsSmashed=0,this._coinsCollected=0,this._dodgesSurvived=0,this._lastObstacleSpawn=0,e.id==="simon_says"&&(this._generateSimonSequence(),this._simonStep=0,this._simonFeedback=null)}update(e,t){if(!this.active)return null;if(this.timer-=e,this.timer<=0)return this._end();switch(this.currentGame.id){case"treasure_vault":return this._updateTreasureVault(e,t);case"coin_frenzy":return this._updateCoinFrenzy(e,t);case"dodge_arena":return this._updateDodgeArena(e,t);case"simon_says":return this._updateSimonSays(e);default:return null}}onPlayerAction(e){var t;return!this.active||((t=this.currentGame)==null?void 0:t.id)!=="simon_says"?null:this._checkSimonInput(e)}onChestSmashed(){var e;this.active&&((e=this.currentGame)==null?void 0:e.id)==="treasure_vault"&&(this._chestsSmashed++,this.score+=25)}onCoinCollected(e){var t;this.active&&((t=this.currentGame)==null?void 0:t.id)==="coin_frenzy"&&(this._coinsCollected+=e,this.score+=e*5)}onObstacleDodged(){var e;this.active&&((e=this.currentGame)==null?void 0:e.id)==="dodge_arena"&&(this._dodgesSurvived++,this.score+=15)}_updateTreasureVault(e,t){return this._lastObstacleSpawn+=e,this._lastObstacleSpawn>=1.5?(this._lastObstacleSpawn=0,this._chestsSpawned+=3,{type:"spawn_chests",lanes:[0,1,2]}):null}_updateCoinFrenzy(e,t){return this._lastObstacleSpawn+=e,this._lastObstacleSpawn>=.8?(this._lastObstacleSpawn=0,{type:"spawn_coins",lanes:[0,1,2],count:5}):null}_updateDodgeArena(e,t){this._lastObstacleSpawn+=e;const i=.6-(this.totalTime-this.timer)*.03;if(this._lastObstacleSpawn>=Math.max(.3,i)){this._lastObstacleSpawn=0;const n=[0,1,2].sort(()=>Math.random()-.5),s=Math.random()<.4?2:1;return{type:"spawn_obstacles",lanes:n.slice(0,s)}}return null}_generateSimonSequence(){const e=["left","right","jump","slide"];this._simonSequence=[];const t=6+Math.floor(Math.random()*4);for(let i=0;i<t;i++)this._simonSequence.push(e[Math.floor(Math.random()*e.length)])}_updateSimonSays(e){return this._simonFeedback&&(this._simonFeedback.timer-=e,this._simonFeedback.timer<=0&&(this._simonFeedback=null)),this._simonStep<this._simonSequence.length&&!this._simonFeedback?{type:"simon_prompt",action:this._simonSequence[this._simonStep],step:this._simonStep,total:this._simonSequence.length}:this._simonStep>=this._simonSequence.length?this._end():null}_checkSimonInput(e){if(this._simonStep>=this._simonSequence.length||this._simonFeedback)return null;const t=this._simonSequence[this._simonStep];return e===t?(this._simonStep++,this.score+=50,this._simonFeedback={correct:!0,timer:.5},{type:"simon_correct",step:this._simonStep}):(this._simonFeedback={correct:!1,timer:.5},this.score=Math.max(0,this.score-20),{type:"simon_wrong"})}_end(){const e={type:"end",gameId:this.currentGame.id,gameName:this.currentGame.name,score:this.score,coinReward:Math.floor(this.score/5)+10,dustReward:Math.floor(this.score/10)};return this.active=!1,this.currentGame=null,e}getProgress(){return this.active?{id:this.currentGame.id,name:this.currentGame.name,icon:this.currentGame.icon,timer:this.timer,totalTime:this.totalTime,score:this.score,feedback:this._simonFeedback,simonAction:this._simonStep<this._simonSequence.length?this._simonSequence[this._simonStep]:null}:null}}const no={forest:{name:"Enchanted Forest",hazards:[{id:"falling_tree",chance:.03,desc:"Falling tree across random lane"},{id:"vine_snare",chance:.04,desc:"Vine on ground — slows if not jumped"}],ambientColor:[.2,.8,.3],particleColor:[.3,.7,.2]},desert:{name:"Scorching Sands",hazards:[{id:"sandstorm",chance:.02,desc:"Reduced visibility for several seconds"},{id:"quicksand",chance:.04,desc:"Quicksand patch — slows one lane"}],ambientColor:[.9,.7,.3],particleColor:[.85,.7,.4]},lava:{name:"Volcanic Depths",hazards:[{id:"floor_crack",chance:.04,desc:"Glowing crack — damages if stood on"},{id:"eruption",chance:.02,desc:"Debris rains from above"}],ambientColor:[1,.3,0],particleColor:[1,.4,.1]},snow:{name:"Frozen Peaks",hazards:[{id:"ice_patch",chance:.05,desc:"Ice on ground — slide momentum"},{id:"blizzard",chance:.02,desc:"Strong gusts push sideways"}],ambientColor:[.7,.85,1],particleColor:[.9,.95,1]},roman:{name:"Roman Road",hazards:[],ambientColor:[.8,.7,.5],particleColor:[.7,.6,.4]},underwater:{name:"Abyssal Depths",hazards:[{id:"current",chance:.04,desc:"Water current pushes to a lane"},{id:"air_pocket",chance:.15,desc:"Bubble — collect to restore air"}],ambientColor:[.1,.3,.7],particleColor:[.2,.5,.9]}};class Iy{constructor(e){this.scene=e,this.activeHazards=[],this._currentBiome="roman",this._hazardCooldown=0,this._sandstormActive=!1,this._sandstormTimer=0,this._blizzardActive=!1,this._blizzardTimer=0,this._blizzardDir=0,this._underwaterAir=100,this._underwaterActive=!1,this._fogOverlay=null,this._sandstormParticles=[],this._snowParticles=[],this._bubbleParticles=[]}setBiome(e){e!==this._currentBiome&&(this._currentBiome=e,this._underwaterActive=e==="underwater",this._underwaterActive&&(this._underwaterAir=100),this._sandstormActive=!1,this._blizzardActive=!1)}update(e,t,i,n,s,r){var c;const o={effects:[],damage:!1,speedMult:1,pushLane:null,airDelta:0},l=no[this._currentBiome];if(!l)return o;if(this._hazardCooldown-=e,this._hazardCooldown<=0){this._hazardCooldown=2-r*.15;for(const h of l.hazards)if(Math.random()<h.chance*(1+r*.2)){const d=this._spawnHazard(h.id,i);d&&o.effects.push(d)}}for(let h=this.activeHazards.length-1;h>=0;h--){const d=this.activeHazards[h];d.timer-=e;const u=Math.abs(d.z-i)<2,p=d.lane===void 0||d.lane===s;switch(d.id){case"vine_snare":u&&p&&n<.5&&(o.speedMult=Math.min(o.speedMult,.6),o.effects.push({type:"vine_slow"}));break;case"quicksand":u&&p&&n<.3&&(o.speedMult=Math.min(o.speedMult,.5),o.effects.push({type:"quicksand_slow"}));break;case"floor_crack":u&&p&&n<.3&&(o.damage=!0,o.effects.push({type:"lava_burn"}));break;case"ice_patch":u&&p&&n<.5&&(o.speedMult=Math.min(o.speedMult,1.3),o.effects.push({type:"ice_slide"}));break;case"air_pocket":u&&p&&(this._underwaterAir=Math.min(100,this._underwaterAir+40),o.airDelta=30,o.effects.push({type:"air_collected"}),d.timer=0);break}d.timer<=0&&(d.mesh&&(this.scene.remove(d.mesh),(c=d.mesh.geometry)==null||c.dispose()),this.activeHazards.splice(h,1))}return this._sandstormActive&&(this._sandstormTimer-=e,this._sandstormTimer<=0?(this._sandstormActive=!1,o.effects.push({type:"sandstorm_end"})):o.effects.push({type:"sandstorm_active",intensity:this._sandstormTimer/5})),this._blizzardActive&&(this._blizzardTimer-=e,this._blizzardTimer<=0?(this._blizzardActive=!1,o.effects.push({type:"blizzard_end"})):(o.pushLane=this._blizzardDir,o.effects.push({type:"blizzard_active",dir:this._blizzardDir}))),this._underwaterActive&&(this._underwaterAir-=e*2.5,o.airDelta=-e*5,this._underwaterAir<=0&&(this._underwaterAir=0,o.damage=!0,o.effects.push({type:"drowning"}))),o}_spawnHazard(e,t){const i=t-40,n=Math.floor(Math.random()*3),s=3,r=[-s,0,s];switch(e){case"falling_tree":case"vine_snare":{const o=this._createHazardMesh(e,r[n],i);return this.activeHazards.push({id:e,mesh:o,lane:n,z:i,timer:8}),{type:"hazard_spawned",hazard:e,lane:n}}case"sandstorm":return this._sandstormActive=!0,this._sandstormTimer=4+Math.random()*3,{type:"sandstorm_start"};case"quicksand":{const o=this._createHazardMesh(e,r[n],i);return this.activeHazards.push({id:e,mesh:o,lane:n,z:i,timer:10}),{type:"hazard_spawned",hazard:e,lane:n}}case"floor_crack":{const o=this._createHazardMesh(e,r[n],i);return this.activeHazards.push({id:e,mesh:o,lane:n,z:i,timer:6}),{type:"hazard_spawned",hazard:e,lane:n}}case"eruption":{for(let o=0;o<3;o++){const l=Math.floor(Math.random()*3),c=i-o*5,h=this._createHazardMesh("eruption_debris",r[l],c);this.activeHazards.push({id:"floor_crack",mesh:h,lane:l,z:c,timer:4})}return{type:"eruption_start"}}case"ice_patch":{const o=this._createHazardMesh(e,r[n],i);return this.activeHazards.push({id:e,mesh:o,lane:n,z:i,timer:8}),{type:"hazard_spawned",hazard:e,lane:n}}case"blizzard":return this._blizzardActive=!0,this._blizzardTimer=3+Math.random()*2,this._blizzardDir=Math.random()<.5?-1:1,{type:"blizzard_start",dir:this._blizzardDir};case"current":{const o=Math.random()<.5?-1:1;return this.activeHazards.push({id:"current",mesh:null,lane:void 0,z:i,timer:5,data:{dir:o}}),{type:"current_start",dir:o}}case"air_pocket":{const o=this._createHazardMesh(e,r[n],i);return this.activeHazards.push({id:e,mesh:o,lane:n,z:i,timer:12}),{type:"hazard_spawned",hazard:e,lane:n}}default:return null}}_createHazardMesh(e,t,i){let n;switch(e){case"vine_snare":{const s=new fn(2.5,2.5),r=new ye({color:2984493,transparent:!0,opacity:.6,emissive:1727514,emissiveIntensity:.3});n=new te(s,r),n.rotation.x=-Math.PI/2,n.position.set(t,.05,i);break}case"quicksand":{const s=new na(1.5,16),r=new ye({color:12886874,transparent:!0,opacity:.7,emissive:9072688,emissiveIntensity:.2});n=new te(s,r),n.rotation.x=-Math.PI/2,n.position.set(t,.03,i);break}case"floor_crack":case"eruption_debris":{const s=new fn(2,2),r=new ye({color:16724736,transparent:!0,opacity:.5,emissive:16729088,emissiveIntensity:.8});n=new te(s,r),n.rotation.x=-Math.PI/2,n.position.set(t,.04,i);break}case"ice_patch":{const s=new na(1.8,12),r=new ye({color:11197951,transparent:!0,opacity:.5,emissive:6724044,emissiveIntensity:.3,roughness:.1,metalness:.5});n=new te(s,r),n.rotation.x=-Math.PI/2,n.position.set(t,.04,i);break}case"air_pocket":{const s=new fi(.6,12,8),r=new ye({color:4504575,transparent:!0,opacity:.5,emissive:2263244,emissiveIntensity:.6});n=new te(s,r),n.position.set(t,1.5,i);break}case"falling_tree":{const s=new Gi(.1,.15,3,6),r=new ye({color:5913114});n=new te(s,r),n.rotation.z=Math.PI/2,n.position.set(t,.8,i);break}default:{const s=new Be(1,.1,1),r=new ye({color:16711935});n=new te(s,r),n.position.set(t,.05,i)}}return n&&this.scene.add(n),n}dispose(){var e;for(const t of this.activeHazards)t.mesh&&(this.scene.remove(t.mesh),(e=t.mesh.geometry)==null||e.dispose());this.activeHazards=[]}isSandstormActive(){return this._sandstormActive}isBlizzardActive(){return this._blizzardActive}isUnderwater(){return this._underwaterActive}getAir(){return this._underwaterAir}getBiomeInfo(){return no[this._currentBiome]||no.roman}}const ti=["helmet","armor","boots","amulet","weapon"],pi={common:{color:"#a0a0a0",label:"Common",craftCost:null},uncommon:{color:"#6a8a4a",label:"Uncommon",craftCost:{fragments:30}},rare:{color:"#4a7ab5",label:"Rare",craftCost:{essence:10}},epic:{color:"#8a5ab5",label:"Epic",craftCost:{cores:3,essence:20}},legendary:{color:"#c9a24e",label:"Legendary",craftCost:{cores:10,essence:50}}},qd={common:{fragments:5},uncommon:{fragments:15},rare:{essence:3},epic:{cores:1,essence:5},legendary:{cores:3}},wh={maxHealth:{label:"Max Health",format:a=>`+${a}`},speedBoost:{label:"Speed Boost",format:a=>`+${a}%`},coinMultiplier:{label:"Coin Bonus",format:a=>`+${a}%`},scoreMultiplier:{label:"Score Bonus",format:a=>`+${a}%`},abilityCD:{label:"Ability Cooldown",format:a=>`-${a}%`},magnetRange:{label:"Magnet Range",format:a=>`+${a}`},shieldChance:{label:"Shield Chance",format:a=>`${a}%`},reviveHP:{label:"Revive HP",format:a=>`+${a}`},dustBonus:{label:"Star Dust Bonus",format:a=>`+${a}%`}},Mn=[{id:"bronze_helm",name:"Bronze Helm",slot:"helmet",rarity:"common",icon:"🪖",stats:{maxHealth:1},flavorText:"Standard legionnaire issue."},{id:"iron_galea",name:"Iron Galea",slot:"helmet",rarity:"common",icon:"🪖",stats:{shieldChance:2},flavorText:"Sturdy and unremarkable."},{id:"centurion_helm",name:"Centurion's Crest",slot:"helmet",rarity:"uncommon",icon:"⛑️",stats:{maxHealth:1,shieldChance:3},flavorText:"Red plume marks the officer."},{id:"athenian_helm",name:"Athenian War Helm",slot:"helmet",rarity:"rare",icon:"🛡️",stats:{maxHealth:2,shieldChance:5},flavorText:"Forged in the fires of wisdom."},{id:"helm_of_mars",name:"Helm of Mars",slot:"helmet",rarity:"epic",icon:"🔱",stats:{maxHealth:2,shieldChance:7,scoreMultiplier:5},flavorText:"The war god watches over you."},{id:"golden_laurel",name:"Golden Laurel",slot:"helmet",rarity:"legendary",icon:"👑",stats:{maxHealth:2,scoreMultiplier:15,shieldChance:8},flavorText:"Crown of champions."},{id:"leather_cuirass",name:"Leather Cuirass",slot:"armor",rarity:"common",icon:"🦺",stats:{maxHealth:1},flavorText:"Tanned hide from the provinces."},{id:"bronze_lorica",name:"Bronze Lorica",slot:"armor",rarity:"common",icon:"🦺",stats:{shieldChance:3},flavorText:"Segmented plates clink softly."},{id:"tribune_plate",name:"Tribune's Plate",slot:"armor",rarity:"uncommon",icon:"🛡️",stats:{maxHealth:1,shieldChance:4},flavorText:"Polished to a mirror finish."},{id:"aegis_mail",name:"Aegis Chain Mail",slot:"armor",rarity:"rare",icon:"⚙️",stats:{maxHealth:2,shieldChance:5,speedBoost:5},flavorText:"Light as air, strong as stone."},{id:"vulcan_forge_plate",name:"Vulcan's Forge Plate",slot:"armor",rarity:"epic",icon:"🔥",stats:{maxHealth:3,shieldChance:6,dustBonus:10},flavorText:"Tempered in divine flame."},{id:"olympian_aegis",name:"Olympian Aegis",slot:"armor",rarity:"legendary",icon:"⚡",stats:{maxHealth:3,shieldChance:10,coinMultiplier:15,dustBonus:15},flavorText:"Worn by those who rival the gods."},{id:"sandals",name:"Legion Sandals",slot:"boots",rarity:"common",icon:"👟",stats:{speedBoost:5},flavorText:"March on, soldier."},{id:"iron_greaves",name:"Iron Greaves",slot:"boots",rarity:"common",icon:"🥾",stats:{speedBoost:3,shieldChance:2},flavorText:"Protects the shins at least."},{id:"mercury_treads",name:"Mercury Treads",slot:"boots",rarity:"uncommon",icon:"🪽",stats:{speedBoost:8,magnetRange:1},flavorText:"Swift as the messenger god."},{id:"titan_striders",name:"Titan Striders",slot:"boots",rarity:"rare",icon:"🦿",stats:{speedBoost:10,abilityCD:5},flavorText:"Each step shakes the earth."},{id:"boots_of_hermes",name:"Boots of Hermes",slot:"boots",rarity:"epic",icon:"✨",stats:{speedBoost:15,magnetRange:2,abilityCD:8},flavorText:"They practically fly on their own."},{id:"olympus_runners",name:"Olympus Runners",slot:"boots",rarity:"legendary",icon:"🌟",stats:{speedBoost:20,magnetRange:3,abilityCD:12,coinMultiplier:10},flavorText:"Blessed by every Olympian."},{id:"copper_talisman",name:"Copper Talisman",slot:"amulet",rarity:"common",icon:"📿",stats:{coinMultiplier:5},flavorText:"A lucky trinket from the market."},{id:"wolf_fang",name:"Wolf Fang Pendant",slot:"amulet",rarity:"uncommon",icon:"🦷",stats:{coinMultiplier:10,scoreMultiplier:5},flavorText:"Romulus smiles upon you."},{id:"oracle_eye",name:"Oracle's Eye",slot:"amulet",rarity:"uncommon",icon:"🔮",stats:{dustBonus:10,abilityCD:5},flavorText:"See what others cannot."},{id:"poseidon_pearl",name:"Poseidon's Pearl",slot:"amulet",rarity:"rare",icon:"🫧",stats:{coinMultiplier:15,reviveHP:1},flavorText:"Plucked from the ocean depths."},{id:"eye_of_jupiter",name:"Eye of Jupiter",slot:"amulet",rarity:"epic",icon:"⚡",stats:{scoreMultiplier:10,coinMultiplier:15,dustBonus:15},flavorText:"Lightning courses through it."},{id:"heart_of_olympus",name:"Heart of Olympus",slot:"amulet",rarity:"legendary",icon:"💎",stats:{coinMultiplier:25,scoreMultiplier:15,reviveHP:1,dustBonus:20},flavorText:"The pulse of the divine realm."},{id:"wooden_gladius",name:"Wooden Gladius",slot:"weapon",rarity:"common",icon:"🗡️",stats:{scoreMultiplier:5},flavorText:"Training sword from the ludus."},{id:"iron_gladius",name:"Iron Gladius",slot:"weapon",rarity:"common",icon:"⚔️",stats:{scoreMultiplier:3,coinMultiplier:5},flavorText:"Reliable and sharp."},{id:"spartan_spear",name:"Spartan Spear",slot:"weapon",rarity:"uncommon",icon:"🔱",stats:{scoreMultiplier:8,abilityCD:5},flavorText:"Come back with it or on it."},{id:"praetorian_blade",name:"Praetorian Blade",slot:"weapon",rarity:"rare",icon:"⚔️",stats:{scoreMultiplier:10,shieldChance:3,abilityCD:8},flavorText:"Guard the emperor with your life."},{id:"apollos_bow",name:"Apollo's Bow",slot:"weapon",rarity:"epic",icon:"🏹",stats:{scoreMultiplier:12,abilityCD:10,magnetRange:2},flavorText:"Each shot finds its mark."},{id:"zeus_thunderbolt",name:"Zeus' Thunderbolt",slot:"weapon",rarity:"legendary",icon:"⚡",stats:{scoreMultiplier:20,abilityCD:15,shieldChance:5,coinMultiplier:10},flavorText:"The sky bends to your will."}],Eh={common:0,uncommon:1,rare:2,epic:3,legendary:4};class Th{constructor(){this.inventory=[],this.equipped={helmet:null,armor:null,boots:null,amulet:null,weapon:null},this.materials={fragments:0,essence:0,cores:0},this._load()}getInventory(){return this.inventory}getEquipped(){return{...this.equipped}}getEquippedItem(e){const t=this.equipped[e];return t&&this.inventory.find(i=>i.instanceId===t)||null}equip(e){const t=this.inventory.find(n=>n.instanceId===e);if(!t)return!1;const i=Mn.find(n=>n.id===t.itemId);return i?(this.equipped[i.slot]=e,this._save(),!0):!1}unequip(e){return this.equipped[e]?(this.equipped[e]=null,this._save(),!0):!1}getEquippedStats(){const e={};for(const t of ti){const i=this.equipped[t];if(!i)continue;const n=this.inventory.find(r=>r.instanceId===i);if(!n)continue;const s=Mn.find(r=>r.id===n.itemId);if(s)for(const[r,o]of Object.entries(s.stats))e[r]=(e[r]||0)+o}return e}generateLoot(e){const{distance:t=0,score:i=0,coins:n=0,difficulty:s=0}=e,r=[],o=.4+t/500*.15+s*.1;for(let l=0;l<3;l++){const c=o*(1/(l+1));if(Math.random()>c)continue;const h=this._rollRarity(t),d=ti[Math.floor(Math.random()*ti.length)],u=Mn.filter(p=>p.rarity===h&&p.slot===d);if(u.length===0){const p=Mn.filter(_=>_.rarity===h);if(p.length===0)continue;const g=p[Math.floor(Math.random()*p.length)];r.push(this._createInstance(g))}else{const p=u[Math.floor(Math.random()*u.length)];r.push(this._createInstance(p))}}return r}_rollRarity(e){let t={common:50,uncommon:30,rare:15,epic:4,legendary:1};e>1e3&&(t.common-=10,t.uncommon+=5,t.rare+=3,t.epic+=1.5,t.legendary+=.5),e>2e3&&(t.legendary*=2,t.epic+=2,t.rare+=3);const i=Object.values(t).reduce((s,r)=>s+r,0);let n=Math.random()*i;for(const[s,r]of Object.entries(t))if(n-=r,n<=0)return s;return"common"}_createInstance(e){return{instanceId:`${e.id}_${Date.now()}_${Math.floor(Math.random()*1e5)}`,itemId:e.id,name:e.name,slot:e.slot,rarity:e.rarity,icon:e.icon,stats:{...e.stats},flavorText:e.flavorText}}addToInventory(e){this.inventory.push(e),this._save()}getMaterials(){return{...this.materials}}salvage(e){const t=this.inventory.findIndex(s=>s.instanceId===e);if(t===-1)return null;const i=this.inventory[t];for(const s of ti)if(this.equipped[s]===e)return null;const n=qd[i.rarity];if(!n)return null;this.inventory.splice(t,1);for(const[s,r]of Object.entries(n))this.materials[s]=(this.materials[s]||0)+r;return this._save(),{...n}}canCraft(e){var i;const t=(i=pi[e])==null?void 0:i.craftCost;if(!t)return!1;for(const[n,s]of Object.entries(t))if((this.materials[n]||0)<s)return!1;return!0}craft(e,t){if(!this.canCraft(e))return null;const i=pi[e].craftCost;for(const[o,l]of Object.entries(i))this.materials[o]-=l;let n=Mn.filter(o=>o.rarity===e&&o.slot===t);if(n.length===0&&(n=Mn.filter(o=>o.rarity===e)),n.length===0)return null;const s=n[Math.floor(Math.random()*n.length)],r=this._createInstance(s);return this.inventory.push(r),this._save(),r}_save(){try{localStorage.setItem("vr_inventory",JSON.stringify(this.inventory)),localStorage.setItem("vr_equipped",JSON.stringify(this.equipped)),localStorage.setItem("vr_materials",JSON.stringify(this.materials))}catch(e){console.warn("Equipment save failed:",e)}}_load(){try{const e=localStorage.getItem("vr_inventory");e&&(this.inventory=JSON.parse(e));const t=localStorage.getItem("vr_equipped");if(t){const n=JSON.parse(t);for(const s of ti)n[s]!==void 0&&(this.equipped[s]=n[s])}const i=localStorage.getItem("vr_materials");i&&(this.materials=JSON.parse(i))}catch(e){console.warn("Equipment load failed:",e)}for(const e of ti)this.equipped[e]&&!this.inventory.find(t=>t.instanceId===this.equipped[e])&&(this.equipped[e]=null)}getItemDef(e){return Mn.find(t=>t.id===e)||null}sortInventory(e="rarity"){return e==="rarity"?this.inventory.sort((t,i)=>(Eh[i.rarity]||0)-(Eh[t.rarity]||0)):e==="slot"&&this.inventory.sort((t,i)=>ti.indexOf(t.slot)-ti.indexOf(i.slot)),this.inventory}isEquipped(e){for(const t of ti)if(this.equipped[t]===e)return!0;return!1}}const so={common:"#a0a0a0",uncommon:"#6a8a4a",rare:"#4a7ab5",epic:"#8a5ab5",legendary:"#c9a24e"},Xd=[{id:"default",name:"Standard",category:"skin",icon:"👤",rarity:"common",price:null,tint:null,aura:null,description:"The classic look."},{id:"bronze_warrior",name:"Bronze Warrior",category:"skin",icon:"🟤",rarity:"common",price:{currency:"coins",amount:500},tint:13467442,aura:null,description:"Bronzed and battle-hardened."},{id:"marble_statue",name:"Marble Statue",category:"skin",icon:"🗿",rarity:"uncommon",price:{currency:"coins",amount:1200},tint:15261912,aura:null,description:"Carved from Olympian marble."},{id:"crimson_centurion",name:"Crimson Centurion",category:"skin",icon:"🔴",rarity:"uncommon",price:{currency:"coins",amount:1500},tint:13378082,aura:null,description:"Clad in the crimson of Rome."},{id:"forest_spirit",name:"Forest Spirit",category:"skin",icon:"🌿",rarity:"uncommon",price:{currency:"coins",amount:1800},tint:4500036,aura:{color:[.3,.7,.3],intensity:.3,particles:!1},description:"Blessed by the woodland nymphs."},{id:"emerald_druid",name:"Emerald Druid",category:"skin",icon:"💚",rarity:"rare",price:{currency:"coins",amount:3e3},tint:2271829,aura:{color:[.2,.8,.4],intensity:.5,particles:!0},description:"Nature pulses through every vein."},{id:"ocean_depths",name:"Ocean Depths",category:"skin",icon:"🌊",rarity:"rare",price:{currency:"coins",amount:3500},tint:1136042,aura:{color:[.1,.4,.8],intensity:.5,particles:!0},description:"Touched by Poseidon's trident."},{id:"sandstorm",name:"Sandstorm",category:"skin",icon:"🏜️",rarity:"rare",price:{currency:"coins",amount:4e3},tint:13150280,aura:{color:[.8,.7,.3],intensity:.4,particles:!0},description:"A whirlwind of desert fury."},{id:"golden_champion",name:"Golden Champion",category:"skin",icon:"🌟",rarity:"rare",price:{currency:"coins",amount:5e3},tint:16766720,aura:{color:[1,.85,.2],intensity:.5,particles:!0},description:"Blessed by the gods."},{id:"blood_moon",name:"Blood Moon",category:"skin",icon:"🌑",rarity:"epic",price:{currency:"dust",amount:350},tint:8912930,aura:{color:[.8,.1,.1],intensity:.7,particles:!0},description:"Born under a crimson eclipse."},{id:"shadow_wraith",name:"Shadow Wraith",category:"skin",icon:"👻",rarity:"epic",price:{currency:"dust",amount:500},tint:1710638,aura:{color:[.3,.1,.5],intensity:.8,particles:!0},description:"One with the darkness."},{id:"void_walker",name:"Void Walker",category:"skin",icon:"🕳️",rarity:"epic",price:{currency:"dust",amount:600},tint:2228292,aura:{color:[.4,0,.6],intensity:.8,particles:!0},description:"Steps between the planes of existence."},{id:"electric",name:"Stormborn",category:"skin",icon:"⚡",rarity:"epic",price:{currency:"dust",amount:550},tint:3368703,aura:{color:[.3,.5,1],intensity:.9,particles:!0},description:"Zeus himself could not wield this power."},{id:"infernal_titan",name:"Infernal Titan",category:"skin",icon:"🔥",rarity:"legendary",price:{currency:"pyr",amount:10},tint:16720384,aura:{color:[1,.3,0],intensity:1,particles:!0},description:"Forged in volcanic fire."},{id:"frost_emperor",name:"Frost Emperor",category:"skin",icon:"❄️",rarity:"legendary",price:{currency:"pyr",amount:10},tint:8965375,aura:{color:[.5,.8,1],intensity:1,particles:!0},description:"Winter incarnate."},{id:"celestial",name:"Celestial",category:"skin",icon:"✨",rarity:"legendary",price:{currency:"pyr",amount:15},tint:16777198,aura:{color:[1,.95,.7],intensity:1,particles:!0},description:"Ascended beyond mortal form."}],$d=[{id:"trail_default",name:"No Trail",category:"trail",icon:"➖",rarity:"common",price:null,particleColor:null,particleSize:0,particleCount:0,lifetime:0,style:"dust"},{id:"trail_dust",name:"Dust Cloud",category:"trail",icon:"💨",rarity:"common",price:{currency:"coins",amount:300},particleColor:[.7,.6,.4],particleSize:.15,particleCount:2,lifetime:.8,style:"dust"},{id:"trail_embers",name:"Ember Trail",category:"trail",icon:"🔸",rarity:"uncommon",price:{currency:"coins",amount:800},particleColor:[1,.5,.1],particleSize:.1,particleCount:2,lifetime:.7,style:"sparkle"},{id:"trail_ice",name:"Frost Trail",category:"trail",icon:"🧊",rarity:"rare",price:{currency:"coins",amount:2500},particleColor:[.5,.8,1],particleSize:.1,particleCount:3,lifetime:.9,style:"sparkle"},{id:"trail_golden",name:"Golden Trail",category:"trail",icon:"🌟",rarity:"rare",price:{currency:"coins",amount:3e3},particleColor:[1,.85,.2],particleSize:.1,particleCount:3,lifetime:1,style:"sparkle"},{id:"trail_nature",name:"Verdant Path",category:"trail",icon:"🍃",rarity:"rare",price:{currency:"coins",amount:2800},particleColor:[.3,.8,.3],particleSize:.12,particleCount:3,lifetime:.9,style:"sparkle"},{id:"trail_fire",name:"Flame Trail",category:"trail",icon:"🔥",rarity:"epic",price:{currency:"dust",amount:300},particleColor:[1,.4,0],particleSize:.12,particleCount:4,lifetime:.6,style:"flame"},{id:"trail_shadow",name:"Shadow Trail",category:"trail",icon:"🖤",rarity:"epic",price:{currency:"dust",amount:400},particleColor:[.2,.1,.3],particleSize:.14,particleCount:3,lifetime:1,style:"smoke"},{id:"trail_blood",name:"Bloodmist",category:"trail",icon:"🩸",rarity:"epic",price:{currency:"dust",amount:350},particleColor:[.8,.1,.1],particleSize:.13,particleCount:3,lifetime:.8,style:"smoke"},{id:"trail_lightning",name:"Lightning Trail",category:"trail",icon:"⚡",rarity:"legendary",price:{currency:"pyr",amount:5},particleColor:[.3,.5,1],particleSize:.08,particleCount:5,lifetime:.4,style:"lightning"}],Yd=[{id:"death_default",name:"Standard",category:"death",icon:"💀",rarity:"common",price:null,effectType:"standard",particleColor:[.7,.5,.3],particleCount:12},{id:"death_explosion",name:"Grand Explosion",category:"death",icon:"💥",rarity:"uncommon",price:{currency:"coins",amount:1e3},effectType:"explosion",particleColor:[1,.6,.1],particleCount:30},{id:"death_dissolve",name:"Dust to Dust",category:"death",icon:"✨",rarity:"rare",price:{currency:"coins",amount:2500},effectType:"dissolve",particleColor:[.8,.7,.5],particleCount:40},{id:"death_shatter",name:"Shatter",category:"death",icon:"💎",rarity:"rare",price:{currency:"coins",amount:3e3},effectType:"shatter",particleColor:[.9,.9,1],particleCount:25},{id:"death_lightning",name:"Struck Down",category:"death",icon:"⚡",rarity:"epic",price:{currency:"dust",amount:400},effectType:"lightning",particleColor:[.4,.6,1],particleCount:35},{id:"death_ghostrise",name:"Spirit Ascension",category:"death",icon:"👻",rarity:"legendary",price:{currency:"pyr",amount:5},effectType:"ghostrise",particleColor:[.7,.9,1],particleCount:50}],jd=[{id:"title_none",name:"No Title",category:"title",icon:"📝",rarity:"common",price:null,titleText:""},{id:"title_champion",name:"Champion",category:"title",icon:"🏆",rarity:"uncommon",price:{currency:"coins",amount:1e3},titleText:"Champion"},{id:"title_gladiator",name:"Gladiator",category:"title",icon:"⚔️",rarity:"uncommon",price:{currency:"coins",amount:1200},titleText:"Gladiator"},{id:"title_centurion",name:"Centurion",category:"title",icon:"🛡️",rarity:"rare",price:{currency:"coins",amount:2500},titleText:"Centurion"},{id:"title_conqueror",name:"Conqueror",category:"title",icon:"👑",rarity:"rare",price:{currency:"coins",amount:3e3},titleText:"Conqueror"},{id:"title_titan_slayer",name:"Titan Slayer",category:"title",icon:"🗡️",rarity:"epic",price:null,titleText:"Titan Slayer"},{id:"title_undying",name:"The Undying",category:"title",icon:"💀",rarity:"epic",price:{currency:"dust",amount:300},titleText:"The Undying"},{id:"title_olympian",name:"Olympian",category:"title",icon:"⛰️",rarity:"epic",price:{currency:"dust",amount:500},titleText:"Olympian"},{id:"title_demigod",name:"Demigod",category:"title",icon:"✨",rarity:"legendary",price:{currency:"pyr",amount:5},titleText:"Demigod"},{id:"title_god_of_war",name:"God of War",category:"title",icon:"🔥",rarity:"legendary",price:null,titleText:"God of War"}],Py=[...Xd,...$d,...Yd,...jd],Kd={};for(const a of Py)Kd[a.id]=a;function ui(a){return Kd[a]||null}const Dy=["default","trail_default","death_default","title_none"],ao={skin:"default",trail:"trail_default",death:"death_default",title:"title_none"};class Ah{constructor(){this._ownedKey="vr_cosmetics_owned",this._equippedKey="vr_cosmetics_equipped",this._load()}getOwned(){return new Set(this._owned)}owns(e){return this._owned.has(e)}getEquipped(){return{...this._equipped}}equipSkin(e){if(!this.owns(e))return!1;const t=ui(e);return!t||t.category!=="skin"?!1:(this._equipped.skin=e,this._save(),!0)}equipTrail(e){if(!this.owns(e))return!1;const t=ui(e);return!t||t.category!=="trail"?!1:(this._equipped.trail=e,this._save(),!0)}equipDeath(e){if(!this.owns(e))return!1;const t=ui(e);return!t||t.category!=="death"?!1:(this._equipped.death=e,this._save(),!0)}equipTitle(e){if(!this.owns(e))return!1;const t=ui(e);return!t||t.category!=="title"?!1:(this._equipped.title=e,this._save(),!0)}getActiveSkin(){return ui(this._equipped.skin)}getActiveTrail(){return ui(this._equipped.trail)}getActiveDeath(){return ui(this._equipped.death)}getActiveTitle(){const e=ui(this._equipped.title);return e&&e.titleText||null}getSkinTint(){const e=this.getActiveSkin();return e?e.tint:null}getSkinAura(){const e=this.getActiveSkin();return e?e.aura:null}getTrailConfig(){const e=this.getActiveTrail();return!e||!e.particleColor?null:{particleColor:e.particleColor,particleSize:e.particleSize,particleCount:e.particleCount,lifetime:e.lifetime,style:e.style}}getDeathConfig(){const e=this.getActiveDeath();return e?{effectType:e.effectType,particleColor:e.particleColor,particleCount:e.particleCount}:null}canAfford(e){const t=ui(e);if(!t||!t.price)return!1;const{currency:i,amount:n}=t.price;return i==="coins"?parseInt(localStorage.getItem("vr_coins")||"0",10)>=n:i==="dust"?parseInt(localStorage.getItem("vr_stardust")||"0",10)>=n:!1}purchase(e){if(this.owns(e))return{success:!1,error:"Already owned"};const t=ui(e);if(!t||!t.price)return{success:!1,error:"Not purchasable"};const{currency:i,amount:n}=t.price;if(i==="coins"){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);if(s<n)return{success:!1,error:"Not enough coins"};localStorage.setItem("vr_coins",String(s-n))}else if(i==="dust"){const s=parseInt(localStorage.getItem("vr_stardust")||"0",10);if(s<n)return{success:!1,error:"Not enough Star Dust"};localStorage.setItem("vr_stardust",String(s-n))}else if(i==="pyr")return{success:!1,error:"PYR purchases require wallet"};return this._owned.add(e),this._save(),{success:!0}}grant(e){this._owned.add(e),this._save()}_save(){try{localStorage.setItem(this._ownedKey,JSON.stringify([...this._owned])),localStorage.setItem(this._equippedKey,JSON.stringify(this._equipped))}catch(e){console.warn("CosmeticsManager: failed to save.",e)}}_load(){try{const e=localStorage.getItem(this._ownedKey);this._owned=e?new Set(JSON.parse(e)):new Set}catch{this._owned=new Set}for(const e of Dy)this._owned.add(e);try{const e=localStorage.getItem(this._equippedKey);this._equipped=e?JSON.parse(e):{...ao}}catch{this._equipped={...ao}}for(const[e,t]of Object.entries(this._equipped))this._owned.has(t)||(this._equipped[e]=ao[e])}}class Ly{constructor(){this._walletAddress=null,this._saveKey="vr_save_local",this._autoSaveInterval=null,this._dirty=!1,this.SAVE_KEYS=["vr_coins","vr_stardust","vr_best","vr_tutorial_done","vr_unlocked","vr_inventory","vr_equipped","vr_materials","vr_cosmetics_owned","vr_cosmetics_equipped","vr_campaign","vr_challenge_stars","vr_upgrades","vr_lb_rewards","vr_reward_pool","vr_pool_notice_seen"],this.SETTINGS_KEYS=["vr_volume","vr_music","vr_sfx"],this._startAutoSave()}onWalletConnect(e){this.save(),this._walletAddress=e.toLowerCase(),this._saveKey=`vr_save_${this._walletAddress}`;const t=localStorage.getItem(this._saveKey);t?(this._restoreFromSnapshot(JSON.parse(t)),console.log(`[SaveManager] Loaded save for wallet ${e.slice(0,6)}...`)):(this.save(),console.log(`[SaveManager] Created new save for wallet ${e.slice(0,6)}...`))}onWalletDisconnect(){this.save(),this._walletAddress=null,this._saveKey="vr_save_local";const e=localStorage.getItem(this._saveKey);e&&this._restoreFromSnapshot(JSON.parse(e))}_createSnapshot(){const e={version:1,timestamp:Date.now()};for(const t of this.SAVE_KEYS)e[t]=localStorage.getItem(t);return e}_restoreFromSnapshot(e){if(!e||e.version!==1)return!1;for(const t of this.SAVE_KEYS)e[t]!==void 0&&e[t]!==null?localStorage.setItem(t,e[t]):localStorage.removeItem(t);return!0}save(){const e=this._createSnapshot();localStorage.setItem(this._saveKey,JSON.stringify(e)),this._dirty=!1}markDirty(){this._dirty=!0}_startAutoSave(){this._autoSaveInterval=setInterval(()=>{this._dirty&&this.save()},3e4)}exportSave(){const e=this._createSnapshot();return e.walletAddress=this._walletAddress,JSON.stringify(e,null,2)}importSave(e){try{const t=JSON.parse(e);return t.version!==1?{success:!1,error:"Invalid save version"}:(this._restoreFromSnapshot(t),this.save(),{success:!0})}catch{return{success:!1,error:"Invalid save data"}}}getSaveInfo(){const e=localStorage.getItem(this._saveKey);if(!e)return null;const t=JSON.parse(e);return{wallet:this._walletAddress?this._walletAddress.slice(0,6)+"..."+this._walletAddress.slice(-4):"Local",lastSaved:t.timestamp?new Date(t.timestamp).toLocaleString():"Never",coins:parseInt(t.vr_coins||"0"),bestScore:parseInt(t.vr_best||"0")}}listSaves(){const e=[];for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);if(i&&i.startsWith("vr_save_"))try{const n=JSON.parse(localStorage.getItem(i));e.push({key:i,wallet:i==="vr_save_local"?"Local":i.replace("vr_save_","").slice(0,6)+"...",timestamp:n.timestamp,coins:parseInt(n.vr_coins||"0"),best:parseInt(n.vr_best||"0")})}catch{}}return e}dispose(){this._autoSaveInterval&&clearInterval(this._autoSaveInterval),this.save()}}const Ch="vr_lb_rewards",Rh="vr_reward_pool",Gs=[{days:30,label:"30D",basePYR:5},{days:90,label:"90D",basePYR:15},{days:180,label:"180D",basePYR:40},{days:360,label:"360D",basePYR:100}],Ih={1:1,2:.7,3:.5,4:.38,5:.28,6:.22,7:.17,8:.13,9:.1,10:.08},Ph=.6,Dh=1440*60*1e3;class Uy{constructor(){this._load()}_load(){try{const e=localStorage.getItem(Ch),t=e?JSON.parse(e):{};this.holders=t.holders||{},this.claimed=t.claimed||{},this.payoutHistory=t.payoutHistory||[]}catch{this.holders={},this.claimed={},this.payoutHistory=[]}this.pool=parseFloat(localStorage.getItem(Rh)||"0")}_save(){localStorage.setItem(Ch,JSON.stringify({holders:this.holders,claimed:this.claimed,payoutHistory:this.payoutHistory})),localStorage.setItem(Rh,String(this.pool))}updatePositions(e){const t=e.slice(0,10),i=Date.now();for(let n=0;n<10;n++){const s=n+1,r=t[n],o=this.holders[s];if(!r){delete this.holders[s];continue}const l=this._playerKey(r);o&&o.key===l&&o.score===r.score?o.lastSnapshot=i:this.holders[s]={key:l,address:r.address||null,name:r.name||"Player",score:r.score,character:r.character||"knight",holdStart:i,lastSnapshot:i}}for(const n of Object.keys(this.holders))parseInt(n)>t.length&&delete this.holders[n];this._save()}_playerKey(e){return e.address?e.address.toLowerCase():`local_${e.name}_${e.score}`}getHolder(e){const t=this.holders[e];if(!t)return null;const i=Math.floor((Date.now()-t.holdStart)/Dh),n=this._nextMilestone(i),s=this._earnedMilestones(i);return{...t,position:e,daysHeld:i,nextMilestone:n,earnedMilestones:s,daysToNext:n?n.days-i:null}}getAllHolders(){const e=[];for(let t=1;t<=10;t++){const i=this.getHolder(t);i&&e.push(i)}return e}getPlayerRewardStatus(e){if(!e)return null;const t=e.toLowerCase();let i=null;for(const[o,l]of Object.entries(this.holders))if(l.address&&l.address.toLowerCase()===t){i=parseInt(o);break}if(!i)return{position:null,daysHeld:0,milestones:[]};const n=this.getHolder(i),s=this.claimed[t]||{},r=Gs.map(o=>{const l=n.daysHeld>=o.days,c=!!s[o.label],h=this.calculateReward(i,o);return{label:o.label,days:o.days,earned:l,claimed:c,claimable:l&&!c,rewardPYR:h,progress:Math.min(1,n.daysHeld/o.days)}});return{position:i,daysHeld:n.daysHeld,milestones:r}}calculateReward(e,t){const i=Ih[e]||0,n=t.basePYR||0;return parseFloat((n*i).toFixed(2))}claimReward(e,t,i){if(!e)return{success:!1,error:"Wallet not connected"};const n=e.toLowerCase(),s=this.holders[t];if(!s||!s.address||s.address.toLowerCase()!==n)return{success:!1,error:"You do not hold this position"};const r=Gs.find(c=>c.label===i);if(!r)return{success:!1,error:"Invalid milestone"};const o=Math.floor((Date.now()-s.holdStart)/Dh);if(o<r.days)return{success:!1,error:`Need ${r.days} days (currently ${o})`};if(this.claimed[n]||(this.claimed[n]={}),this.claimed[n][i])return{success:!1,error:"Already claimed"};const l=this.calculateReward(t,r);return this.pool<l?{success:!1,error:"Reward pool insufficient — grows with purchases"}:(this.pool-=l,this.claimed[n][i]=Date.now(),this.payoutHistory.push({address:n,position:t,milestone:i,amount:l,date:new Date().toISOString()}),this._save(),{success:!0,amount:l})}addPurchaseToPool(e){const t=e*(1-Ph);return this.pool+=t,this._save(),t}getPoolBalance(){return parseFloat(this.pool.toFixed(2))}getPayoutHistory(){return[...this.payoutHistory]}_earnedMilestones(e){return Gs.filter(t=>e>=t.days)}_nextMilestone(e){return Gs.find(t=>e<t.days)||null}static get MILESTONES(){return Gs}static get POSITION_MULTIPLIERS(){return Ih}static get TEAM_SHARE(){return Ph}}const Lh="vr_profile_",Uh="vr_pool_notice_seen",Nh=1;class kh{constructor(){this._address=null,this._profile=null}load(e){if(!e)return;this._address=e.toLowerCase();const t=localStorage.getItem(Lh+this._address);this._profile=t?JSON.parse(t):this._createDefault()}disconnect(){this._address=null,this._profile=null}get connected(){return!!this._address}get address(){return this._address}get profile(){return this._profile}_createDefault(){return{version:1,address:this._address,createdAt:new Date().toISOString(),totalRuns:0,totalDistance:0,totalCoins:0,totalBossesDefeated:0,bestScore:0,bestDistance:0,longestCombo:0,pyrSpentOnRuns:0,pyrSpentOnShop:0,pyrEarned:0,highestPosition:null,longestHold:0,poolOptedIn:!1,lastRunDate:null}}_save(){!this._address||!this._profile||localStorage.setItem(Lh+this._address,JSON.stringify(this._profile))}recordRun(e){this._profile&&(this._profile.totalRuns++,this._profile.totalDistance+=e.distance||0,this._profile.totalCoins+=e.coins||0,this._profile.totalBossesDefeated+=e.bossesDefeated||0,e.score>this._profile.bestScore&&(this._profile.bestScore=e.score),e.distance>this._profile.bestDistance&&(this._profile.bestDistance=e.distance),e.maxCombo>this._profile.longestCombo&&(this._profile.longestCombo=e.maxCombo),this._profile.lastRunDate=new Date().toISOString(),this._save())}recordEntryFee(){this._profile&&(this._profile.pyrSpentOnRuns+=Nh,this._profile.poolOptedIn=!0,this._save())}recordShopPurchase(e){this._profile&&(this._profile.pyrSpentOnShop+=e,this._save())}recordRewardClaim(e){this._profile&&(this._profile.pyrEarned+=e,this._save())}hasSeenPoolNotice(){return this._address?!!localStorage.getItem(Uh+"_"+this._address):!0}markPoolNoticeSeen(){this._address&&localStorage.setItem(Uh+"_"+this._address,"1")}getSummary(){return this._profile?{totalRuns:this._profile.totalRuns,bestScore:this._profile.bestScore,bestDistance:Math.floor(this._profile.bestDistance),totalBossesDefeated:this._profile.totalBossesDefeated,pyrSpent:this._profile.pyrSpentOnRuns+this._profile.pyrSpentOnShop,pyrEarned:this._profile.pyrEarned,poolOptedIn:this._profile.poolOptedIn}:null}exportForDB(){return this._profile?{...this._profile}:null}static get ENTRY_FEE(){return Nh}}const Ny=cy,Ct={MENU:0,PLAYING:1,GAME_OVER:2,PAUSED:3,REVIVE_PROMPT:4,CAMPAIGN_MAP:5},Oh=new R(0,5.5,10),ky=12,Oy=2.5,qa=1,By=.05,Fy=5,zy=10,Xa={CoinMagnet:8,DoubleCoin:10,Invincibility:6,Shield:8,TimeAdvantage:5},Hy=8,Gy=15;class Vy{constructor(e,t,i,n,s){this.scene=e,this.camera=t,this.ui=i,this.assetLoader=n,this.input=new ay,this.audio=s||new Wd,this.state=Ct.MENU,this.runner=null,this.world=null,this.particles=null,this.currentTheme="roman",this.dustTimer=0,this.score=0,this.coins=0,this.distance=0,this.bestScore=parseInt(localStorage.getItem("vr_best")||"0",10),this.totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10),this.comboCount=0,this.comboTimer=0,this.comboMultiplier=qa,this.maxCombo=0,this.activePowerUps={},this.health=2,this.maxHealth=3,this.revivesAvailable=1,this.reviveTimer=0,this.obstaclesDodged=0,this.obstaclesSmashed=0,this.shakeIntensity=0,this.shakeDuration=0,this.difficulty=0,this._passedObstacles=new Set,this._screenFlash=null,this._wasAirborne=!1,this._landingDipTimer=0,this._milestonesPassed=new Set,this._milestones=[500,1e3,2e3,5e3],this._themeTransitionTimer=0,this._prevTheme="roman",this._bossEncounter=null,this._nextBossDistance=1e3,this._bossInterval=1e3,this._bossActive=!1,this._bossApproachSlowTimer=0,this.campaignManager=new Sy,this.challengeManager=new wy,this.runConfig=null,this._lastRunConfig=null,this._noHitDistance=0,this._maxNoHitDistance=0,this._nearMisses=0,this._powerUpsCollected=0,this._gemsCollected=0,this._bossesDefeated=0,this.abilityManager=new Ey,this.progressionManager=new Ay,this._abilityConfig=null,this._abilityCooldown=0,this._abilityActive=!1,this._abilityTimer=0,this._charStats=null,this._bruteForceTimer=0,this.miniGameManager=new Ry,this._biomeManager=null,this._biomeHazardDmgCooldown=0,this._miniGameCoinsEarned=0,this.equipmentManager=new Th,this.cosmeticsManager=new Ah,this._equipStats={},this.saveManager=new Ly,this.shop=new _h,this.wallet=new uy,this.leaderboard=new py,this.lbRewards=new Uy,this.playerProfile=new kh,this._lastScore=0,this._lastDistance=0,this._lastCoins=0,this._pyrTreasury="0x0000000000000000000000000000000000000000",this.wallet.on("connected",o=>{this.saveManager.onWalletConnect(this.wallet.address),this.playerProfile.load(this.wallet.address),this.totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10),this.bestScore=parseInt(localStorage.getItem("vr_best")||"0",10),this.shop=new _h,this.equipmentManager=new Th,this.cosmeticsManager=new Ah,this.ui.updateWalletUI(!0,this.wallet.shortAddress(),o.balance),this.ui.updateCoins(this.totalCoins),this.playerProfile.hasSeenPoolNotice()||(this.ui.showPoolNotice(),this.playerProfile.markPoolNoticeSeen())}),this.wallet.on("disconnected",()=>{this.saveManager.onWalletDisconnect(),this.playerProfile.disconnect(),this.totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10),this.bestScore=parseInt(localStorage.getItem("vr_best")||"0",10),this.ui.updateWalletUI(!1,"",0),this.ui.updateCoins(this.totalCoins)}),this.wallet.on("accountChanged",()=>{this.ui.updateWalletUI(this.wallet.connected,this.wallet.shortAddress(),this.wallet.pyrBalance)}),this.wallet.on("balanceUpdated",o=>{this.ui.updateWalletUI(!0,this.wallet.shortAddress(),o)}),this.wallet.on("error",o=>{console.warn("Wallet error:",o)}),this.wallet.on("scoreWritten",o=>{this.ui.updateChainStatus(`Score written! TX: ${o.txHash.slice(0,10)}...`),this.leaderboard.markOnChain(o.score,o.txHash)}),this._characterId="knight",this._tutorialStep=-1,this._tutorialTimer=0,this._tutorialPaused=!1,i.on("play",async()=>{if(this._lastRunConfig&&(this.runConfig={...this._lastRunConfig}),this.wallet.connected&&!this.runConfig){const o=kh.ENTRY_FEE;if(this.wallet.pyrBalance<o){this.ui.showEntryFeeError(o,this.wallet.pyrBalance);return}if(!await this.wallet.sendPYR(o,this._pyrTreasury))return;this.lbRewards.addPurchaseToPool(o),this.playerProfile.recordEntryFee()}this.startRun()}),i.on("next-stage",()=>{if(this._lastRunConfig){const o=this._lastRunConfig.stageIndex+1,l=this.campaignManager.getStage(this._lastRunConfig.campaignId,o);l&&this.campaignManager.isStageUnlocked(this._lastRunConfig.campaignId,o)?(this.runConfig={campaignId:this._lastRunConfig.campaignId,stageIndex:o,modifiers:l.modifiers||{},objectives:l.objectives||{}},this.startRun()):this.goToMenu()}}),i.on("show-char-select",()=>{this.ui.showCharSelect(this.wallet.connected,this.wallet.pyrBalance)}),i.on("skip-tutorial",()=>this._skipTutorial()),i.on("menu",()=>this.goToMenu()),i.on("pause",()=>this.pause()),i.on("resume",()=>this.resume()),i.on("revive",()=>this._useRevive()),i.on("skip-revive",()=>{this.revivesAvailable=0,this.endRun()}),i.on("show-shop",()=>{this.ui.showShop(this.shop,this.wallet)}),i.on("show-leaderboard",()=>{this.ui.showLeaderboard(this.leaderboard.getTop(15),this.cosmeticsManager.getActiveTitle(),this.lbRewards.getAllHolders(),this.lbRewards.getPoolBalance(),this.wallet.connected?this.lbRewards.getPlayerRewardStatus(this.wallet.address):null)}),i.on("claim-reward",o=>{if(!this.wallet.connected)return;const l=this.lbRewards.claimReward(this.wallet.address,o.position,o.milestone);l.success?(this.audio.playPowerUp("Invincibility"),this.ui.showLeaderboard(this.leaderboard.getTop(15),this.cosmeticsManager.getActiveTitle(),this.lbRewards.getAllHolders(),this.lbRewards.getPoolBalance(),this.lbRewards.getPlayerRewardStatus(this.wallet.address))):console.warn("Claim failed:",l.error)}),i.on("connect-wallet",async()=>{await this.wallet.connect()}),i.on("shop-buy",async o=>{if(o.currency==="coins"){const l=this.shop.buyWithCoins(o.itemId);l.success?(this.totalCoins=l.newBalance,this.audio.playCoinPickup()):console.warn("Purchase failed:",l.error)}else if(o.currency==="pyr"){const l=this.shop.getItems().boosts.find(h=>h.id===o.itemId)||this.shop.getItems().characters.find(h=>h.id===o.itemId),c=await this.shop.buyWithPYR(o.itemId,this.wallet,this._pyrTreasury);c.success?(this.audio.playPowerUp("Invincibility"),l&&l.price&&this.lbRewards.addPurchaseToPool(l.price)):console.warn("PYR purchase failed:",c.error)}this.ui.showShop(this.shop,this.wallet)}),i.on("write-chain",async()=>{this.ui.updateChainStatus("Writing to chain..."),await this.wallet.writeScoreToChain(this._lastScore,this._lastDistance,this._lastCoins)||this.ui.updateChainStatus("Transaction cancelled.")}),i.on("show-campaign",()=>{this.state=Ct.CAMPAIGN_MAP,this.ui.showCampaignMap(this.campaignManager,this.challengeManager)}),i.on("campaign-back",()=>this.goToMenu()),i.on("show-daily",()=>{this.ui.showDailyChallengesDirectly(this.campaignManager,this.challengeManager)}),i.on("campaign-start",o=>{const l=this.campaignManager.getStage(o.campaignId,o.stageIndex);l&&(this.runConfig={campaignId:o.campaignId,stageIndex:o.stageIndex,modifiers:l.modifiers||{},objectives:l.objectives||{}},this.ui.showCharSelect(this.wallet.connected,this.wallet.pyrBalance))}),i.on("challenge-claim",o=>{const l=this.challengeManager.claimReward(o.index);l&&(this.totalCoins+=l.coins,localStorage.setItem("vr_coins",String(this.totalCoins)),this.audio.playCoinPickup()),this.ui.refreshCampaignUI()}),i.on("challenge-bonus-claim",()=>{const o=this.challengeManager.claimBonus();o&&(this.totalCoins+=o.coins,localStorage.setItem("vr_coins",String(this.totalCoins)),this.audio.playPowerUp("Invincibility")),this.ui.refreshCampaignUI()}),i.on("show-heroes",()=>{this.ui.showHeroesScreen(this.abilityManager,this.progressionManager)}),i.on("heroes-back",()=>this.goToMenu()),i.on("show-vanity",()=>{this.ui.showCosmeticsScreen(this.cosmeticsManager)}),i.on("cosmetics-back",()=>this.goToMenu()),i.on("cosmetic-equipped",()=>{}),i.on("show-forge",()=>{this.ui.showEquipmentScreen(this.equipmentManager)}),i.on("equipment-back",()=>this.goToMenu()),i.on("equipment-changed",()=>{}),i.on("upgrade-purchased",()=>{this.audio.playCoinPickup()}),i.on("reward-claimed",o=>{o&&o.coins&&(this.totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10)),this.audio.playCoinPickup()});const r=async()=>{document.removeEventListener("click",r),document.removeEventListener("touchstart",r),this.audio.init(),this.audio.resume(),await this.audio.startMenuMusic()};document.addEventListener("click",r),document.addEventListener("touchstart",r),this._setupMenuCamera()}goToMenu(){this.state=Ct.MENU,this._lastRunConfig=null,this.audio.stopMusic(),this.audio.startMenuMusic(),this._bossEncounter&&(this._bossEncounter.dispose(),this._bossActive=!1),this._biomeManager&&(this._biomeManager.dispose(),this._biomeManager=null),this.ui.hideBossVignette(),this.ui.hideBossUI(),this.scene.fog=null,this.runner&&(this.runner.dispose(),this.runner=null),this.world&&(this.world.reset(),this.world=null),this.particles&&(this.particles.dispose(),this.particles=null),this.ui.showMenu(),this._setupMenuCamera()}startRun(){var n;this.state=Ct.PLAYING,this.audio.init(),this.audio.resume(),this.audio.playMenuClick(),this.runner&&this.runner.dispose(),this.world&&this.world.reset(),this.particles&&this.particles.dispose(),this._characterId=this.ui.selectedCharacter,this.runner=new Hv(this.scene,this.assetLoader,this._characterId),this.world=new sy(this.scene,this.assetLoader),this.particles=new ry(this.scene),this.dustTimer=0,this.score=0,this.coins=0,this.distance=0,this.comboCount=0,this.comboTimer=0,this.comboMultiplier=qa,this.maxCombo=0,this.activePowerUps={},this.health=2,this.maxHealth=3,this.revivesAvailable=1,this.reviveTimer=0,this.obstaclesDodged=0,this.obstaclesSmashed=0,this._chestsSmashed=0,this._noHitDistance=0,this._maxNoHitDistance=0,this._nearMisses=0,this._powerUpsCollected=0,this._gemsCollected=0,this._bossesDefeated=0,this.shakeIntensity=0,this.shakeDuration=0,this.difficulty=0,this._passedObstacles=new Set,this._milestonesPassed=new Set,this._themeTransitionTimer=0,this._prevTheme="roman",this._bossEncounter&&this._bossEncounter.dispose(),this._bossEncounter=new hy(this.scene),this._nextBossDistance=1e3,this._bossActive=!1,this._bossApproachSlowTimer=0,this._campaignBossCount=0,this._campaignBossesSpawned=0,this._endlessLap=1,this._endlessBiomeIndex=0,this._endlessBiomeDistance=0,this._endlessSpeedTier=0,this._endlessBiomeOrder=["forest","desert","lava","snow"],this._endlessBossActive=!1,this._endlessTotalDistance=0,this._campaignCoinMult=1;const e=((n=this.runConfig)==null?void 0:n.modifiers)||{};e.fixedTheme&&(this.world.fixedTheme=e.fixedTheme),e.obstacleFrequency&&(this.world.obstacleFrequencyMult=e.obstacleFrequency),e.maxHealth&&(this.health=e.maxHealth,this.maxHealth=e.maxHealth),e.noRevive&&(this.revivesAvailable=0),e.bossEnabled===!1&&(this._nextBossDistance=1/0),e.bossAtDistance&&(this._nextBossDistance=e.bossAtDistance),e.speedMultiplier&&(this.runner.baseSpeed=12*e.speedMultiplier),e.coinMultiplier&&(this._campaignCoinMult=e.coinMultiplier),e.obstacleSizes&&(this.world.campaignObstacleSizes=e.obstacleSizes),e.gatesEnabled&&(this.world.campaignGatesEnabled=!0),e.slideGatesEnabled&&(this.world.campaignSlideGatesEnabled=!0),e.gateInterval&&(this.world.campaignGateInterval=e.gateInterval),this._campaignVictoryPending=!1,this._objectivesHudTimer=0,this.runConfig||(this._endlessLap=1,this._endlessBiomeIndex=0,this._endlessSpeedTier=0,this._endlessBiomeDistance=0,this._endlessBiomeOrder=["forest","desert","lava","snow"],this._endlessBossActive=!1,this._endlessTotalDistance=0,this.world.fixedTheme=this._endlessBiomeOrder[0],this.runner.baseSpeed=12,this.world.campaignObstacleSizes=["small"],this.world.campaignGatesEnabled=!1,this.world._chestTileInterval=25,this._nextBossDistance=1/0,this._endlessSpawnHealthPotion=!1),this._charStats=this.abilityManager.getCharacterStats(this._characterId),this._abilityConfig=this.abilityManager.getAbilityConfig(this._characterId),this._abilityCooldown=0,this._abilityActive=!1,this._abilityTimer=0,this._bruteForceTimer=0,this._charStats&&(this.health+=this._charStats.maxHealthBonus,this.maxHealth+=this._charStats.maxHealthBonus),this._equipStats=this.equipmentManager.getEquippedStats(),this._equipStats.maxHealth&&(this.health+=this._equipStats.maxHealth,this.maxHealth+=this._equipStats.maxHealth),this._abilityConfig&&this.ui.showAbilityHUD(this._abilityConfig.icon,this._abilityConfig.name),this.miniGameManager.reset(),this._biomeManager&&this._biomeManager.dispose(),this._biomeManager=new Iy(this.scene),this._biomeHazardDmgCooldown=0,this._miniGameCoinsEarned=0,this.runner.startRunning();const t=this.cosmeticsManager.getSkinTint();t!=null&&this.runner.applySkinTint(t);const i=this.cosmeticsManager.getSkinAura();i&&this.runner.applyAuraEffect(i),this.shop.useBoost("extra_life")&&(this.revivesAvailable=2),this.shop.useBoost("coin_boost")&&(this.activePowerUps.DoubleCoin=999999),this.shop.useBoost("shield_start")&&(this.activePowerUps.Shield=8),this.shop.useBoost("magnet_start")&&(this.activePowerUps.CoinMagnet=8),this.shop.useBoost("head_start")&&(this.runner.position.z=-500,this.coins+=50),this.audio.startMusic(),this.audio.playStart(),this.ui.showHUD(),this.runConfig?this.ui.hideScore():this.ui.showScore(),this.ui.updateScore(0),this.ui.updateCoins(0),this.ui.updateDistance(0),this.ui.updateCombo(0,1),this.ui.updateHealth(this.health,this.maxHealth),this.runConfig&&this.ui.updateCampaignObjectives(this.runConfig.objectives,0,0,0),this._shouldRunTutorial()&&this._startTutorial()}endRun(){if(this.revivesAvailable>0){this.state=Ct.REVIVE_PROMPT,this.reviveTimer=3,this.runner.die(),this.ui.showRevivePrompt();return}this.state=Ct.GAME_OVER,this.runner.die(),this.audio.playDeath(),this.audio.stopMusic(),this.ui.hideBossVignette(),this.ui.hideBossUI(),this.shakeIntensity=.8,this.shakeDuration=.5;const e=this.cosmeticsManager.getDeathConfig();if(e&&this.particles){const l=this.runner.position.x,c=this.runner.position.y+1,h=this.runner.position.z,d=e.particleColor,u=e.particleCount;switch(e.effectType){case"explosion":this.particles.burstSparkles(l,c,h,d,u),this.particles.burstDebris(l,c,h,Math.floor(u/2));break;case"dissolve":for(let p=0;p<u;p++)this.particles.burstSparkles(l+(Math.random()-.5)*1.5,c+Math.random()*2,h+(Math.random()-.5)*1.5,d,1);break;case"shatter":this.particles.burstDebris(l,c,h,u),this.particles.burstSparkles(l,c,h,d,Math.floor(u/3));break;case"lightning":this.particles.burstSparkles(l,c+3,h,d,Math.floor(u/2)),this.particles.burstSparkles(l,c,h,d,Math.floor(u/2)),this._screenFlash={color:d,timer:.3,duration:.3};break;case"ghostrise":for(let p=0;p<u;p++)this.particles.burstSparkles(l+(Math.random()-.5)*.5,c+Math.random()*.5,h+(Math.random()-.5)*.5,d,1);break;default:this.particles.burstSparkles(l,c,h,d,u);break}}this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("vr_best",String(this.bestScore))),this.totalCoins+=this.coins,localStorage.setItem("vr_coins",String(this.totalCoins)),this.saveManager.save();const t={score:this.score,distance:this.distance,coins:this.coins,maxCombo:this.maxCombo,chestsSmashed:this._chestsSmashed,obstaclesDodged:this.obstaclesDodged,noHitDistance:this._maxNoHitDistance,bossDefeated:this._bossesDefeated,powerUpsCollected:this._powerUpsCollected,gemsCollected:this._gemsCollected,nearMisses:this._nearMisses,health:this.health};let i=null;if(this.runConfig){const l=this.campaignManager.getStage(this.runConfig.campaignId,this.runConfig.stageIndex);l&&(i=this.campaignManager.evaluateRun(this.runConfig.campaignId,l.id,t))}const n=this.challengeManager.evaluateRun(t),s=i?i.stars:0;this.progressionManager.processRun(t,s),i&&i.stars===3&&i.isNew&&this.abilityManager.addStarDust(50),this._bossesDefeated>0&&this.abilityManager.addKeys(this._bossesDefeated);let r=Math.floor(this.distance/100)+Math.floor(this.score/500);this._equipStats.dustBonus&&(r=Math.floor(r*(1+this._equipStats.dustBonus/100))),r>0&&this.abilityManager.addStarDust(r);const o=this.equipmentManager.generateLoot({distance:this.distance,score:this.score,coins:this.coins,difficulty:this.difficulty});for(const l of o)this.equipmentManager.addToInventory(l);this.ui.showGameOver(this.score,this.distance,this.coins,this.bestScore,{maxCombo:this.maxCombo,obstaclesDodged:this.obstaclesDodged,obstaclesSmashed:this.obstaclesSmashed,maxSpeed:Math.floor(this.runner.runSpeed)},i,n,o,!1,this.runConfig),this._lastScore=this.score,this._lastDistance=this.distance,this._lastCoins=this.coins,this.ui.showChainWriteButton(this.wallet.connected),this.ui.updateChainStatus(""),this.leaderboard.submit({name:this.wallet.connected?this.wallet.shortAddress():"Player",score:this.score,distance:this.distance,coins:this.coins,character:this._characterId,maxCombo:this.maxCombo,address:this.wallet.address}),this.lbRewards.updatePositions(this.leaderboard.getTop(10)),this.playerProfile.connected&&this.playerProfile.recordRun({score:this.score,distance:this.distance,coins:this.coins,bossesDefeated:this._bossesDefeated,maxCombo:this.maxCombo}),this._lastRunConfig=this.runConfig?{...this.runConfig}:null,this.runConfig=null}_campaignVictory(){var o;this.state=Ct.GAME_OVER,this.runner.celebrate(),this.audio.stopMusic(),this.audio.playPowerUp("Invincibility"),this.ui.hideBossVignette(),this.ui.hideBossUI(),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("vr_best",String(this.bestScore))),this.totalCoins+=this.coins,localStorage.setItem("vr_coins",String(this.totalCoins)),this.saveManager.save();const e={score:this.score,distance:this.distance,coins:this.coins,maxCombo:this.maxCombo,chestsSmashed:this._chestsSmashed,obstaclesDodged:this.obstaclesDodged,noHitDistance:this._maxNoHitDistance,bossDefeated:this._bossesDefeated,powerUpsCollected:this._powerUpsCollected,gemsCollected:this._gemsCollected,nearMisses:this._nearMisses,health:this.health};let t=null;if(this.runConfig){const l=this.campaignManager.getStage(this.runConfig.campaignId,this.runConfig.stageIndex);l&&(t=this.campaignManager.evaluateRun(this.runConfig.campaignId,l.id,e))}const i=this.challengeManager.evaluateRun(e),n=t?t.stars:0;this.progressionManager.processRun(e,n),t&&t.stars===3&&t.isNew&&this.abilityManager.addStarDust(50),this._bossesDefeated>0&&this.abilityManager.addKeys(this._bossesDefeated);let s=Math.floor(this.distance/100)+Math.floor(this.score/500);this._equipStats.dustBonus&&(s=Math.floor(s*(1+this._equipStats.dustBonus/100))),s>0&&this.abilityManager.addStarDust(s);const r=this.equipmentManager.generateLoot({distance:this.distance,score:this.score,coins:this.coins,difficulty:this.difficulty});for(const l of r)this.equipmentManager.addToInventory(l);this.ui.showGameOver(this.score,this.distance,this.coins,this.bestScore,{maxCombo:this.maxCombo,obstaclesDodged:this.obstaclesDodged,obstaclesSmashed:this.obstaclesSmashed,maxSpeed:Math.floor(((o=this.runner)==null?void 0:o.runSpeed)||0)},t,i,r,!0,this.runConfig),this.ui.updateCoins(this.totalCoins),this.leaderboard.submit({name:this.wallet.connected?this.wallet.shortAddress():"Player",score:this.score,distance:this.distance,coins:this.coins,character:this._characterId,maxCombo:this.maxCombo,address:this.wallet.address}),this.lbRewards.updatePositions(this.leaderboard.getTop(10)),this._lastRunConfig=this.runConfig?{...this.runConfig}:null,this.runConfig=null}pause(){this.state===Ct.PLAYING&&(this.state=Ct.PAUSED,this.audio.playPause(),this.ui.showPause())}resume(){this.state===Ct.PAUSED&&(this.state=Ct.PLAYING,this.audio.playResume(),this.ui.showHUD())}_useRevive(){var t;if(this.state!==Ct.REVIVE_PROMPT)return;this.revivesAvailable--;const e=(t=Mi[this._characterId])==null?void 0:t.passive;(e==null?void 0:e.id)==="blessed"?this.health=this._getPassiveValue():this.health=1,this._equipStats.reviveHP&&(this.health=Math.min(this.health+this._equipStats.reviveHP,this.maxHealth)),this.runner.revive(),this.audio.playRevive(),this.audio.startMusic(),this.state=Ct.PLAYING,this.ui.showHUD(),this.ui.updateHealth(this.health,this.maxHealth),this.activePowerUps.Invincibility=2}_shouldRunTutorial(){return!localStorage.getItem("vr_tutorial_done")}_startTutorial(){this._tutorialStep=-1,this._tutorialTimer=1,this._tutorialPaused=!1}_advanceTutorial(){this.ui.hideTutorialStep(),this._tutorialPaused=!1,this._tutorialStep++;const e=[{text:"USE Q/E OR ←/→ TO CHANGE LANES",icon:"↔️",wait:"left_or_right"},{text:"PRESS W OR ↑ TO JUMP OVER OBSTACLES",icon:"⬆️",wait:"jump"},{text:"PRESS S OR ↓ TO SLIDE UNDER BEAMS",icon:"⬇️",wait:"slide"},{text:"PRESS F TO STRIKE — BREAK GATES AND SMASH OBSTACLES",icon:"⚔️",wait:"attack"},{text:"PRESS A OR R TO USE YOUR SPECIAL ABILITY",icon:"✨",wait:"auto",delay:3},{text:"COLLECT COINS AND RUN INTO GREEN CHESTS FOR LOOT!",icon:"🪙",wait:"auto",delay:2}];if(this._tutorialStep>=e.length){this._tutorialStep=-1,this._tutorialPaused=!1,localStorage.setItem("vr_tutorial_done","true");return}const t=e[this._tutorialStep];this._tutorialPaused=!0,this._tutorialWait=t.wait,this._tutorialAutoDelay=t.delay||0,this._tutorialTimer=0,this.ui.showTutorialStep(this._tutorialStep,t.text,t.icon)}_updateTutorial(e,t){if(this._tutorialStep===-1&&this._tutorialTimer>0){this._tutorialTimer-=e,this._tutorialTimer<=0&&this._advanceTutorial();return}if(!(this._tutorialStep<0||!this._tutorialPaused)){if(this._tutorialWait==="left_or_right"){if(t.includes("left")||t.includes("right")){this._advanceTutorial();return}}else if(this._tutorialWait==="jump"){if(t.includes("jump")){this._advanceTutorial();return}}else if(this._tutorialWait==="slide"){if(t.includes("slide")){this._advanceTutorial();return}}else if(this._tutorialWait==="attack"){if(t.includes("attack")){this._advanceTutorial();return}}else if(this._tutorialWait==="auto"&&(this._tutorialTimer+=e,this._tutorialTimer>=this._tutorialAutoDelay)){this._advanceTutorial();return}}}_skipTutorial(){this._tutorialStep=-1,this._tutorialTimer=0,this._tutorialPaused=!1,this.ui.hideTutorialStep(),localStorage.setItem("vr_tutorial_done","true")}update(e){var d,u,p,g;if(this.state===Ct.MENU){this._updateMenuCamera(e);return}if(this.state===Ct.PAUSED)return;if(this.state===Ct.REVIVE_PROMPT){const _=Math.ceil(this.reviveTimer);this.reviveTimer-=e;const m=Math.ceil(this.reviveTimer);m<_&&m>0&&this.audio.playCountdownTick(),this.ui.updateReviveTimer(this.reviveTimer),this.reviveTimer<=0&&(this.revivesAvailable=0,this.ui.hideRevivePrompt(),this.endRun()),this._updateCamera(e);return}if(this.state!==Ct.PLAYING){this._updateCamera(e);return}if(this.runConfig){if(!this._campaignVictoryPending){const _=(d=this.runConfig.objectives)==null?void 0:d.distance;if(_&&this.distance>=_){this._campaignVictoryPending=!0,this._campaignVictory();return}}this._objectivesHudTimer+=e,this._objectivesHudTimer>=.25&&(this._objectivesHudTimer=0,this.ui.updateCampaignObjectives(this.runConfig.objectives,this.distance,this.coins,this._chestsSmashed))}const t=this.input.poll();if(this._tutorialStep>=-1&&this._tutorialTimer>0&&this._tutorialStep===-1)this._updateTutorial(e,t);else if(this._tutorialPaused){this._updateTutorial(e,t),this._updateCamera(e);return}for(const _ of t){if(this.miniGameManager.active&&((u=this.miniGameManager.currentGame)==null?void 0:u.id)==="simon_says"){const m=this.miniGameManager.onPlayerAction(_);m&&(m.type==="simon_correct"?(this.audio.playCoinPickup(),this._triggerScreenFlash(.2,1,.3,.15)):m.type==="simon_wrong"&&(this.audio.playHit(),this._triggerScreenFlash(1,.1,.1,.15)))}switch(_){case"left":this.runner.moveLeft(),this.audio.playLaneSwitchLeft();break;case"right":this.runner.moveRight(),this.audio.playLaneSwitchRight();break;case"jump":this.runner.jumpsUsed>0?this.audio.playDoubleJump():this.audio.playJump(),this.runner.jump();break;case"slide":this.runner.slide(),this.audio.playSlide();break;case"attack":this.runner.attack(),this.audio.playAttack(),this.ui.showStrikeEffect();break;case"ability":this._activateAbility();break;case"pause":this.pause();return}}let i=1;this.activePowerUps.TimeAdvantage&&(i=.65),this._equipStats.speedBoost&&(i*=1+this._equipStats.speedBoost/100),this.runner.speedMultiplier=i;const n=this._wasAirborne;this.runner.update(e),n&&this.runner.grounded&&this.particles&&this.particles.emitLandingImpact(this.runner.position.x,this.runner.position.y,this.runner.position.z),this._wasAirborne=!this.runner.grounded,this.difficulty=Math.min(5,this._bossesDefeated),this.world.difficulty=this.difficulty,this.world.stage=this._bossesDefeated,this.world.update(this.runner.position.z),this.audio.setMusicIntensity(.3+this.difficulty*.12+Math.min(.1,this.runner.runSpeed*.003)),this.particles&&(this.particles.update(e),this.dustTimer-=e,this.dustTimer<=0&&this.runner.grounded&&(this.particles.emitDust(this.runner.position.x,this.runner.position.y,this.runner.position.z,this.runner.sliding),this.dustTimer=this.runner.sliding?.02:.05));const s=this.cosmeticsManager.getTrailConfig();if(s&&this.particles&&this.runner.running&&!this.runner.dead&&(this._cosmeticTrailTimer=(this._cosmeticTrailTimer||0)-e,this._cosmeticTrailTimer<=0)){const _=s.particleColor;for(let m=0;m<s.particleCount;m++)this.particles.burstSparkles(this.runner.position.x+(Math.random()-.5)*.6,this.runner.position.y+.3+Math.random()*.4,this.runner.position.z+1+Math.random()*.5,_,1);this._cosmeticTrailTimer=.06}if(this.activePowerUps.CoinMagnet&&this.world){const _=this.runner.position.x,m=this.runner.position.z;for(const f of this.world.activeCoins){const v=new R;f.getWorldPosition(v);const x=_-v.x,y=m-v.z,C=Math.sqrt(x*x+y*y),T=Hy+(this._equipStats.magnetRange||0);if(C<T&&C>.5){const A=Gy*e/C;f.position.x+=x*A,f.position.z+=y*A}}}const r=this.distance;this.distance=Math.abs(this.runner.position.z);const o=this.distance-r;this._noHitDistance+=o,this._noHitDistance>this._maxNoHitDistance&&(this._maxNoHitDistance=this._noHitDistance),!this.runConfig&&o>0&&(this._endlessTotalDistance=this.distance,this._endlessBossActive||(this._endlessBiomeDistance+=o),!this._endlessBossActive&&!this._bossActive&&this._endlessBiomeDistance>=1e3&&(this._nextBossDistance=this.distance,this._endlessBossActive=!0),this._endlessSpawnHealthPotion&&this._endlessBiomeDistance>20&&this._endlessBiomeDistance<200&&(this._endlessSpawnHealthPotion=!1,this.world&&this.world.spawnHealthPotion()),this.ui.updateLap(this._endlessLap));const l=Math.floor(this.distance)+this.coins,c=this.runConfig?1:1+(this._endlessLap-1)*.1,h=1+(this._equipStats.scoreMultiplier||0)/100;this.score=Math.floor(l*c*h),this.ui.updateScore(this.score),this.ui.updateDistance(this.distance),this.comboCount>0&&!this._bossActive&&(this.comboTimer-=e,this.comboTimer<=0&&this._breakCombo());for(const[_,m]of Object.entries(this.activePowerUps))this.activePowerUps[_]=m-e,this.activePowerUps[_]<=0&&delete this.activePowerUps[_];if(this._abilityActive&&(this._abilityTimer-=e,this._abilityTimer<=0&&this._deactivateAbility()),this._abilityCooldown>0&&(this._abilityCooldown-=e,this._abilityCooldown<0&&(this._abilityCooldown=0)),this._abilityConfig){const _=this._abilityCooldown/this._abilityConfig.cooldown;this.ui.updateAbilityCooldown(_)}if(!this.miniGameManager.active){const _=this.miniGameManager.checkTrigger(this.distance);_&&(this.miniGameManager.start(_),this.ui.showMiniGameStart(_.name,_.icon,_.desc),this._triggerScreenFlash(_.color[0],_.color[1],_.color[2],.5),this.shakeIntensity=.3,this.shakeDuration=.3,this.audio.playMilestone(1e3))}if(this.miniGameManager.active){const _=this.miniGameManager.update(e,this.distance);_&&this._handleMiniGameEvent(_),this.ui.updateMiniGameHUD(this.miniGameManager.getProgress())}if(this._biomeManager&&this.world){this._biomeManager.setBiome(this.currentTheme);const _=this.runner.lane,m=this._biomeManager.update(e,this.runner.position.x,this.runner.position.z,this.runner.position.y,_,this.difficulty);if(m.speedMult!==1&&!this.activePowerUps.Invincibility&&(this.runner.speedMultiplier*=m.speedMult),m.damage&&!this.activePowerUps.Invincibility&&!this.activePowerUps.Shield){if(this._biomeHazardDmgCooldown-=e,this._biomeHazardDmgCooldown<=0&&(this._biomeHazardDmgCooldown=2,this.health--,this.runConfig&&this._campaignCoinMult>1&&(this._campaignCoinMult=1),this._noHitDistance=0,this.runner.stumble(),this.audio.playHit(),this.ui.updateHealth(this.health,this.maxHealth),this.shakeIntensity=.3,this.shakeDuration=.2,this._triggerScreenFlash(1,.1,0,.2),this.ui.flashDamage(),this.health<=0)){this.endRun();return}}else this._biomeHazardDmgCooldown-=e;for(const f of m.effects)f.type==="sandstorm_start"?this.ui.showBiomeAlert("🌪️ SANDSTORM!","#e8d4a0"):f.type==="blizzard_start"?this.ui.showBiomeAlert("❄️ BLIZZARD!","#aaddff"):f.type==="eruption_start"?(this.ui.showBiomeAlert("🌋 ERUPTION!","#ff4400"),this.shakeIntensity=.5,this.shakeDuration=.5):f.type==="air_collected"&&this.audio.playCoinPickup();this._biomeManager.isUnderwater()&&this.ui.updateAirMeter(this._biomeManager.getAir()),this._biomeManager.isSandstormActive()?this.scene.fog=new lr(12886874,10,40):this._biomeManager.isBlizzardActive()?this.scene.fog=new lr(13161696,14,45):this.scene.fog&&this.scene.fog.far<100&&(this.scene.fog.far+=e*20,this.scene.fog.far>=100&&(this.scene.fog=null))}if(((p=this._abilityConfig)==null?void 0:p.id)==="rage"&&!this._abilityActive){const _=(g=Mi[this._characterId])==null?void 0:g.passive;if((_==null?void 0:_.id)==="brute_force"){const m=this._getPassiveValue();this._bruteForceTimer-=e,this._bruteForceTimer<=0&&(this.activePowerUps.Invincibility||(this.activePowerUps.Invincibility=.3),this._bruteForceTimer=m)}}this._handleCollisions(),this._checkNearMisses();for(const _ of this._milestones)this.distance>=_&&!this._milestonesPassed.has(_)&&(this._milestonesPassed.add(_),this.audio.playMilestone(_),this.ui.showMilestone(_),this._triggerScreenFlash(1,.85,0,.4),this.score+=_);if(!this._bossActive&&this._bossEncounter&&this.distance>=this._nextBossDistance&&(this._bossActive=!0,this._bossEncounter.start(this.runner.position.z,this.currentTheme),this.audio.playBossIntro(),this.ui.showBossWarning(this._bossEncounter.getBossName()),this.shakeIntensity=.5,this.shakeDuration=1,this.world&&(this.world.bossActive=!0),this._bossApproachSlowTimer=1.5,this.ui.showBossVignette()),this._bossApproachSlowTimer>0&&(this._bossApproachSlowTimer-=e,this.runner.speedMultiplier*=.7),this._bossActive&&this._bossEncounter&&this._bossEncounter.active){this._bossEncounter.update(e,this.runner.position.x,this.runner.position.z,this.runner.position.y),this.ui.updateBossTimer(this._bossEncounter.timer,this._bossEncounter.totalTime,this._bossEncounter.waveIndex,Ny);const _=this._bossEncounter.getProjectileCollisions(this.runner.position.x,this.runner.position.z,this.runner.position.y,this.runner.colliderHeight,this.runner.colliderY);for(const m of _)if(!(this.activePowerUps.Invincibility||this.activePowerUps.Shield)){if((this._equipStats.shieldChance||0)>0&&Math.random()*100<this._equipStats.shieldChance){this.ui.showPowerUp("Shield Blocked!");continue}if(this.health--,this.runConfig&&this._campaignCoinMult>1&&(this._campaignCoinMult=1),this._noHitDistance=0,this.runner.stumble(),this.audio.playHit(),this.ui.updateHealth(this.health,this.maxHealth),this.shakeIntensity=.5,this.shakeDuration=.3,this._triggerScreenFlash(1,.2,0,.3),this.ui.flashDamage(),this.health<=0){this.endRun();return}}}if(this._bossEncounter&&this._bossEncounter._defeatAnimTimer>=0&&this._bossEncounter.update(e,0,this.runner.position.z,0),this._bossActive&&this._bossEncounter&&this._bossEncounter.phase==="defeated"){if(this._bossActive=!1,this._bossesDefeated++,this._campaignBossesSpawned++,this.runConfig)this._campaignBossCount>0&&this._campaignBossesSpawned>=this._campaignBossCount?this._nextBossDistance=1/0:this._nextBossDistance=this.distance+this._bossInterval,this.runner.bossSpeedTier=this._bossesDefeated;else{if(this._endlessBossActive=!1,this._endlessBiomeDistance=0,this._endlessBiomeIndex++,this._endlessSpeedTier++,this.runner.baseSpeed=12*(1+this._endlessSpeedTier*.1),this.runner.bossSpeedTier=0,this._endlessBiomeIndex>=4){this._endlessLap++,this._endlessBiomeIndex=0;const m=["forest","desert","lava","snow"];for(let f=m.length-1;f>0;f--){const v=Math.floor(Math.random()*(f+1));[m[f],m[v]]=[m[v],m[f]]}this._endlessBiomeOrder=m}const _=this._endlessBiomeOrder[this._endlessBiomeIndex];if(this.world.fixedTheme=_,this._endlessLap===1)switch(this._endlessBiomeIndex){case 0:this.world.campaignObstacleSizes=["small"],this.world.campaignGatesEnabled=!1;break;case 1:this.world.campaignObstacleSizes=["small","medium"],this.world.campaignGatesEnabled=!1;break;case 2:this.world.campaignObstacleSizes=["small","medium","large"],this.world.campaignGatesEnabled=!1;break;case 3:this.world.campaignObstacleSizes=["small","medium","large"],this.world.campaignGatesEnabled=!0;break}else this.world.campaignObstacleSizes=["small","medium","large"],this.world.campaignGatesEnabled=!0,this.world.campaignGateInterval=200,this.world._chestTileInterval=50,this._endlessBiomeIndex===0&&(this._endlessSpawnHealthPotion=!0);this._nextBossDistance=1/0}if(this.score+=500,this.coins+=10,this.ui.updateCoins(this.coins),this.ui.showBossDefeated(),this.audio.playBossDefeat(),this._triggerScreenFlash(1,.85,0,.6),this.shakeIntensity=1,this.shakeDuration=.8,this.world&&(this.world.bossActive=!1),this.particles){const _=this.runner.position.z-28;this.particles.burstSparkles(0,5,_,[1,.5,0],40),this.particles.burstDebris(0,5,_,30),this.particles.burstSparkles(0,3,_,[1,.2,0],25)}this.ui.hideBossVignette(),this._bossEncounter.phase="idle"}this.world&&this.world.theme!==this.currentTheme&&(this._prevTheme=this.currentTheme,this.currentTheme=this.world.theme,this._themeTransitionTimer=2,this.audio.playBiomeChange(this.currentTheme)),this._themeTransitionTimer>0&&(this._themeTransitionTimer-=e),this._updateCamera(e)}_handleCollisions(){var n,s,r;if(!this.runner||!this.world)return;const{coins:e,obstacles:t,powerUps:i}=this.world.getCollisions(this.runner.position.x,this.runner.position.z,this.runner.position.y,this.runner.colliderHeight,this.runner.colliderY);for(const o of e){const l=o.userData._isGem;let c=l?5:1;if(this.activePowerUps.DoubleCoin&&(c*=2),this._campaignCoinMult>1&&(c=Math.ceil(c*this._campaignCoinMult)),(n=this._charStats)!=null&&n.coinMultiplier&&(c=Math.ceil(c*this._charStats.coinMultiplier)),this._equipStats.coinMultiplier&&(c=Math.ceil(c*(1+this._equipStats.coinMultiplier/100))),this._abilityActive&&((s=this._abilityConfig)==null?void 0:s.id)==="rage"&&(c*=3),this.coins+=c,this.ui.updateCoins(this.coins),this.miniGameManager.onCoinCollected(c),l){if(this._gemsCollected++,this.audio.playGem(),this._triggerScreenFlash(.6,.2,1,.3),this.shakeIntensity=.15,this.shakeDuration=.1,this.particles){const h=new R;o.getWorldPosition(h),this.particles.burstSparkles(h.x,h.y,h.z,[.6,.2,1],15),this.particles.burstSparkles(h.x,h.y,h.z,[1,1,1],8)}}else if(this.audio.playCoinPickup(),this.particles){const h=new R;o.getWorldPosition(h),this.particles.burstSparkles(h.x,h.y,h.z,[1,.85,0],6)}this._registerCombo()}for(const o of t){if(this.activePowerUps.Invincibility||this.activePowerUps.Shield){if(this.world.breakObstacle(o),this.obstaclesSmashed++,this.audio.playSmash(),this._registerCombo(),this.shakeIntensity=.25,this.shakeDuration=.15,this.particles){const l=new R;o.getWorldPosition(l),this.particles.burstDebris(l.x,l.y+.5,l.z,15),this.particles.burstSparkles(l.x,l.y,l.z,[1,.6,.1],8)}continue}if(o.userData.breakable){this.world.breakObstacle(o);const l=o.userData.coinReward||10;if(this.coins+=l,this.score+=50+l,this.obstaclesSmashed++,this._chestsSmashed++,this.miniGameManager.onChestSmashed(),this.audio.playSmash(),this.audio.playCoinPickup(),this._registerCombo(),this.shakeIntensity=.2,this.shakeDuration=.12,this.ui.updateCoins(this.coins),this.ui.showChestReward(l),Math.random()<.3&&this._awardChestPowerUp(),this.particles){const c=new R;o.getWorldPosition(c),this.particles.burstDebris(c.x,c.y+.5,c.z,12),this.particles.burstSparkles(c.x,c.y+.3,c.z,[1,.85,.1],12),this.particles.burstSparkles(c.x,c.y+.8,c.z,[.1,1,.3],6)}continue}if((this._equipStats.shieldChance||0)>0&&Math.random()*100<this._equipStats.shieldChance){if(this.world.breakObstacle(o),this.audio.playSmash(),this.ui.showPowerUp("Shield Blocked!"),this.particles){const l=new R;o.getWorldPosition(l),this.particles.burstSparkles(l.x,l.y,l.z,[.5,.8,1],10)}continue}if(this.health--,this.runConfig&&this._campaignCoinMult>1&&(this._campaignCoinMult=1),this.runner.stumble(),this.audio.playHit(),this.ui.updateHealth(this.health,this.maxHealth),this.shakeIntensity=.4,this.shakeDuration=.3,this._triggerScreenFlash(1,.1,.05,.25),this.ui.flashDamage(),this.health<=0){this.endRun();return}}for(const o of i){this._powerUpsCollected++;const l=o.userData.powerUpType;if(l==="HealthPotion")this.health=this.maxHealth,this.ui.updateHealth(this.health,this.maxHealth);else if(l==="CoinBag")this.coins+=25,this.ui.updateCoins(this.coins);else if(l==="Revive")this.health=Math.min(this.health+1,this.maxHealth),this.ui.updateHealth(this.health,this.maxHealth);else if(l==="Antidote")this.activePowerUps.SpeedBoost=5;else if(Xa[l]){let d=Xa[l];const u=(r=Mi[this._characterId])==null?void 0:r.passive;if((u==null?void 0:u.id)==="arcane_sight"){const p=this._getPassiveValue()/100;d*=1+p}this.activePowerUps[l]=d}this.ui.showPowerUp(l.replace(/([A-Z])/g," $1").trim()),this.audio.playPowerUp(l),this._registerCombo();const h={HealthPotion:[0,1,.2],CoinBag:[1,.85,0],CoinMagnet:[1,0,1],DoubleCoin:[1,.7,0],Invincibility:[0,.9,1],Shield:[.5,.3,1],Antidote:[.5,1,0],TimeAdvantage:[.3,.5,1],Revive:[0,1,.4],SpeedBoost:[1,.5,0]}[l]||[1,1,1];if(this._triggerScreenFlash(h[0],h[1],h[2],.35),this.particles){const d=new R;o.getWorldPosition(d),this.particles.burstSparkles(d.x,d.y,d.z,h,15)}}}_checkNearMisses(){if(!this.world)return;const e=this.runner.position.z,t=this.runner.position.x;for(const i of this.world.activeObstacles){const n=new R;if(i.getWorldPosition(n),n.z>e+1&&!this._passedObstacles.has(i)){this._passedObstacles.add(i),this.obstaclesDodged++;const s=Math.abs(n.x-t);s<2&&s>.3&&(this._registerCombo(),this.score+=25,this._nearMisses++,this.audio.playNearMiss(),this.ui.showNearMiss())}}if(this._passedObstacles.size>50){const i=this._passedObstacles.values();for(let n=0;n<25;n++)i.next()}}_registerCombo(){this.comboCount++,this.comboTimer=Oy,this.comboMultiplier=Math.min(Fy,qa+this.comboCount*By),this.comboCount>this.maxCombo&&(this.maxCombo=this.comboCount),this.comboCount>2&&this.audio.playCombo(this.comboCount),this.ui.updateCombo(this.comboCount,this.comboMultiplier)}_breakCombo(){this.comboCount>5&&(this.score+=this.comboCount*zy),this.comboCount=0,this.comboTimer=0,this.comboMultiplier=qa,this.ui.updateCombo(0,1)}_awardChestPowerUp(){var i;const e=["CoinMagnet","DoubleCoin","Invincibility","Shield","CoinBag","Revive"],t=e[Math.floor(Math.random()*e.length)];if(this._powerUpsCollected++,t==="CoinBag")this.coins+=25,this.ui.updateCoins(this.coins);else if(t==="Revive")this.health=Math.min(this.health+1,this.maxHealth),this.ui.updateHealth(this.health,this.maxHealth);else if(Xa[t]){let n=Xa[t];const s=(i=Mi[this._characterId])==null?void 0:i.passive;if((s==null?void 0:s.id)==="arcane_sight"){const r=this._getPassiveValue()/100;n*=1+r}this.activePowerUps[t]=n}this.ui.showPowerUp(t.replace(/([A-Z])/g," $1").trim()),this.audio.playPowerUp(t)}_triggerScreenFlash(e,t,i,n=.3){const s=n*.5;this._screenFlash={color:[e,t,i],timer:s,duration:s}}_updateCamera(e){if(!this.runner)return;const t=this.runner.position.x*.3,i=this.runner.position.z+Oh.z;this.camera.position.x+=(t-this.camera.position.x)*5*e,this.camera.position.y=Oh.y,this.camera.position.z+=(i-this.camera.position.z)*5*e;const n=new R(this.runner.position.x*.5,1,this.runner.position.z-ky);if(this.camera.lookAt(n),this.shakeDuration>0){this.shakeDuration-=e;const s=this.shakeIntensity*(this.shakeDuration/.5);this.camera.position.x+=(Math.random()-.5)*s,this.camera.position.y+=(Math.random()-.5)*s*.5}}_setupMenuCamera(){this.camera.position.set(5,8,15),this.camera.lookAt(0,0,0)}_updateMenuCamera(e){const t=performance.now()*3e-4;this.camera.position.x=Math.sin(t)*8,this.camera.position.z=Math.cos(t)*12,this.camera.position.y=6+Math.sin(t*.5)*2,this.camera.lookAt(0,0,0)}_handleMiniGameEvent(e){if(e)switch(e.type){case"spawn_chests":this.world&&(this.world._miniGameChestMode=!0);break;case"spawn_coins":this.world&&(this.world._miniGameCoinMode=!0);break;case"spawn_obstacles":this.world&&(this.world._miniGameDodgeMode=!0);break;case"simon_prompt":this.ui.showSimonPrompt(e.action,e.step,e.total);break;case"end":{const t=e;this.coins+=t.coinReward,this._miniGameCoinsEarned+=t.coinReward,this.score+=t.score,this.ui.updateCoins(this.coins),this.ui.showMiniGameEnd(t.gameName,t.score,t.coinReward,t.dustReward),this.abilityManager.addStarDust(t.dustReward),this.audio.playPowerUp("Invincibility"),this._triggerScreenFlash(1,.85,0,.5),this.shakeIntensity=.4,this.shakeDuration=.4,this.world&&(this.world._miniGameChestMode=!1,this.world._miniGameCoinMode=!1,this.world._miniGameDodgeMode=!1),this.scene.fog=null;break}}}_activateAbility(){if(!this._abilityConfig||this._abilityCooldown>0||this._abilityActive)return;this._abilityActive=!0,this._abilityTimer=this._abilityConfig.duration;const e=1-(this._equipStats.abilityCD||0)/100;switch(this._abilityCooldown=this._abilityConfig.cooldown*e,this.audio.playPowerUp("Invincibility"),this.ui.flashAbilityActive(),this.ui.showAbilityActivated(this._abilityConfig.icon+" "+this._abilityConfig.name),this.shakeIntensity=.3,this.shakeDuration=.3,this._abilityConfig.id){case"shield_bash":this.activePowerUps.Invincibility=this._abilityConfig.duration,this._triggerScreenFlash(.5,.8,1,.4);break;case"rage":this.activePowerUps.Invincibility=this._abilityConfig.duration,this.runner.speedMultiplier=2,this._triggerScreenFlash(1,.3,0,.4);break;case"time_warp":this.activePowerUps.TimeAdvantage=this._abilityConfig.duration,this._triggerScreenFlash(.3,.3,1,.4);break;case"shadow_dash":this.activePowerUps.Invincibility=this._abilityConfig.duration,this._triggerScreenFlash(.4,.2,.8,.4);break;case"divine_shield":this.activePowerUps.Shield=this._abilityConfig.duration,this.health=Math.min(this.health+1,this.maxHealth),this.ui.updateHealth(this.health,this.maxHealth),this._triggerScreenFlash(1,1,.5,.4);break}this.particles&&this.particles.burstSparkles(this.runner.position.x,this.runner.position.y+1,this.runner.position.z,[1,.85,0],20)}_deactivateAbility(){var e;this._abilityActive&&(this._abilityActive=!1,this._abilityTimer=0,this.ui.resetAbilityFlash(),((e=this._abilityConfig)==null?void 0:e.id)==="rage"&&(this.runner.speedMultiplier=1))}_getPassiveValue(){var i;const e=Mi[this._characterId];if(!e)return 0;const t=((i=this._charStats)==null?void 0:i.passiveBoost)||0;switch(e.passive.id){case"armor_up":return e.passive.baseValue+t;case"brute_force":return Math.max(5,e.passive.baseValue-t*2);case"arcane_sight":return e.passive.baseValue+t*15;case"nimble":return e.passive.baseValue+t*15;case"blessed":return e.passive.baseValue+t;default:return e.passive.baseValue}}}const Jd=document.createElement("style");Jd.textContent=`
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
`;document.head.appendChild(Jd);class Bh{constructor(e,t,i){this.container=e,this.campaignManager=t,this.challengeManager=i,this._selectedCampaign="forest",this._countdownInterval=null,this.campaignScreen=document.createElement("div"),this.campaignScreen.id="campaign-screen",this.campaignScreen.className="vr-screen vr-campaign-bg",this.campaignScreen.style.justifyContent="flex-start",this.campaignScreen.style.overflowY="auto",this.campaignScreen.style.padding="0",this.campaignScreen.innerHTML=`
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
        `,e.appendChild(this.dailyScreen),document.getElementById("campaign-back-btn").addEventListener("click",()=>{this._emit("campaign-back")}),document.getElementById("campaign-daily-btn").addEventListener("click",()=>{this.showDailyChallenges()}),document.getElementById("modal-close-btn").addEventListener("click",()=>{this._hideStageDetail()}),document.getElementById("modal-start-btn").addEventListener("click",()=>{this._modalCampaignId!=null&&this._modalStageIndex!=null&&this._emit("campaign-start",{campaignId:this._modalCampaignId,stageIndex:this._modalStageIndex})}),document.getElementById("daily-back-btn").addEventListener("click",()=>{this.campaignScreen.style.display==="none"||this.campaignScreen.style.display===""?(this.dailyScreen.style.display="none",this._emit("campaign-back")):(this.dailyScreen.style.display="none",this.campaignScreen.style.display="flex")})}show(){this.campaignScreen.style.display="flex",this.dailyScreen.style.display="none",this._hideStageDetail(),this.refresh()}hide(){this.campaignScreen.style.display="none",this.dailyScreen.style.display="none",this._hideStageDetail(),this._stopCountdown()}showDailyChallenges(){this.campaignScreen.style.display="none",this.dailyScreen.style.display="flex",this._renderDailyChallenges(),this._startCountdown()}refresh(){this._renderCampaignSelector(),this._renderCampaignStages(this._selectedCampaign),this._updateTopBar()}_updateTopBar(){const e=this.campaignManager.getTotalStars();document.getElementById("campaign-total-stars").textContent=`${e} ⭐`;const i=this.challengeManager.getDailyChallenges().filter(s=>!s.completed).length,n=document.getElementById("campaign-daily-btn");i>0?n.innerHTML=`<span>📋 DAILY</span><span class="vr-badge" style="background:rgba(139,32,32,0.3);color:#c97040;margin-left:6px;font-size:10px;">${i}</span>`:n.innerHTML="<span>📋 DAILY</span>"}_renderCampaignSelector(){const e=document.getElementById("campaign-selector");e.innerHTML="";const t=this.campaignManager.getAllCampaigns();this.campaignManager.getTotalStars(),t.forEach((i,n)=>{const s=this.campaignManager.isCampaignUnlocked(i.id),r=this._getCampaignStars(i),o=i.stages.length*3,c={forest:"#6a8a4a",desert:"#c9a24e",lava:"#8b2020"}[i.theme]||"#c9a24e",h=document.createElement("div");h.className=`vr-campaign-card${this._selectedCampaign===i.id?" selected":""}${s?"":" locked"}`,h.style.animationDelay=n*.1+"s",s&&(h.style.borderColor=this._selectedCampaign===i.id?c:""),h.innerHTML=`
                <div style="font-size:40px;margin-bottom:6px;">${i.icon}</div>
                <div class="vr-body" style="font-size:14px;font-weight:800;">${i.name}</div>
                <div class="vr-body" style="font-size:12px;opacity:0.5;margin-top:4px;font-weight:700;">${r}/${o} ⭐</div>
                ${s?"":`
                    <div class="vr-campaign-lock-overlay">
                        <div style="font-size:28px;margin-bottom:4px;">🔒</div>
                        <div class="vr-body" style="font-size:12px;">Need ${i.requiredStars} ⭐</div>
                    </div>
                `}
            `,s&&h.addEventListener("click",()=>{this._selectedCampaign=i.id,this._renderCampaignSelector(),this._renderCampaignStages(i.id)}),e.appendChild(h)})}_getCampaignStars(e){let t=0;for(const i of e.stages){const n=this.campaignManager.getStageResult(e.id,i.id);n&&(t+=n.stars)}return t}_renderCampaignStages(e){const t=document.getElementById("campaign-stage-list");t.innerHTML="";const i=this.campaignManager.getCampaign(e);i&&i.stages.forEach((n,s)=>{const r=this.campaignManager.isStageUnlocked(e,s),o=this.campaignManager.getStageResult(e,n.id),l=o?o.stars:0,c=document.createElement("div");c.className=`vr-stage-node vr-body${r?"":" locked"}`,c.style.animationDelay=s*.06+"s";const h=this._renderStarIcons(l);c.innerHTML=`
                <div style="min-width:36px;font-size:11px;opacity:0.4;font-weight:800;text-align:center;">${s+1}</div>
                <div style="flex:1;text-align:left;">
                    <div style="font-size:13px;font-weight:800;">${r?n.name:"🔒 Locked"}</div>
                </div>
                <div class="vr-stage-stars" style="font-size:14px;">${h}</div>
            `,r&&c.addEventListener("click",()=>{this._showStageDetail(e,s)}),t.appendChild(c)})}_renderStarIcons(e){let t="";for(let i=0;i<3;i++)t+=i<e?"⭐":"☆";return t}_showStageDetail(e,t){this._modalCampaignId=e,this._modalStageIndex=t;const i=this.campaignManager.getStage(e,t);if(!i)return;const n=this.campaignManager.getStageResult(e,i.id),s=n?n.stars:0;document.getElementById("modal-stage-name").textContent=i.name;const r=document.getElementById("modal-objectives"),o=i.objectives;r.innerHTML="",[{label:"⭐",desc:`Reach ${o.distance}m`,achieved:s>=1},{label:"⭐⭐",desc:`Distance + Collect ${o.coins} coins OR Smash ${o.chests} chests`,achieved:s>=2},{label:"⭐⭐⭐",desc:`Distance + ${o.coins} coins AND ${o.chests} chests`,achieved:s>=3}].forEach(p=>{const g=document.createElement("div");g.className="vr-objective-row",g.innerHTML=`
                <span class="${p.achieved?"vr-objective-check":"vr-objective-pending"}">${p.achieved?"✅":"⬜"}</span>
                <span style="opacity:0.6;min-width:50px;">${p.label}</span>
                <span style="flex:1;">${p.desc}</span>
            `,r.appendChild(g)});const c=document.getElementById("modal-best");n?(c.textContent=`Best: ${n.bestScore.toLocaleString()} pts | ${n.bestDistance}m | 🪙 ${n.bestCoins}`,c.style.display=""):c.style.display="none";const h=document.getElementById("modal-modifiers");h.innerHTML="";const d=i.modifiers,u=[];d.speedMultiplier&&d.speedMultiplier!==1&&u.push(`⚡ Speed x${d.speedMultiplier}`),d.timeLimit&&u.push(`⏱️ Time limit: ${d.timeLimit}s`),d.noRevive&&u.push("💀 No revive"),d.maxHealth&&d.maxHealth<3&&u.push(`❤️ Max HP: ${d.maxHealth}`),d.bossEnabled&&u.push(`🐲 Boss at ${d.bossAtDistance}m`),d.coinMultiplier&&d.coinMultiplier>1&&u.push(`🪙 Coins x${d.coinMultiplier}`),d.gatesEnabled&&u.push("🚧 Gates"),d.slideGatesEnabled&&u.push("⬇️ Slide gates"),u.length>0&&u.forEach(p=>{const g=document.createElement("span");g.className="vr-modifier-tag vr-body",g.textContent=p,h.appendChild(g)}),this.stageModal.style.display="flex"}_hideStageDetail(){this.stageModal.style.display="none",this._modalCampaignId=null,this._modalStageIndex=null}_renderDailyChallenges(){const e=document.getElementById("daily-challenge-list");e.innerHTML="",this.challengeManager.getDailyChallenges().forEach((r,o)=>{const l=Math.min(100,Math.round(r.progress/r.target*100)),c=r.completed,h=document.createElement("div");h.className=`vr-challenge-card vr-body${r.claimed?" claimed":r.completed?" completed":""}`,h.style.animationDelay=o*.1+"s",h.innerHTML=`
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
                    <div class="vr-challenge-name" style="font-size:15px;font-weight:800;${r.claimed?"text-decoration:line-through;opacity:0.5;":""}">${r.name}</div>
                    ${r.claimed?'<span style="font-size:12px;color:#8aaa6a;font-weight:800;">CLAIMED &#x2705;</span>':""}
                </div>
                <div style="font-size:12px;opacity:0.5;font-weight:700;margin-bottom:6px;">${r.desc}</div>
                <div class="vr-progress-bar-bg">
                    <div class="vr-progress-bar-fill${c?" full":""}" style="width:${l}%;"></div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;">
                    <span style="font-size:12px;opacity:0.5;font-weight:700;">${Math.floor(r.progress)}/${r.target}</span>
                    <span style="font-size:12px;font-weight:700;">🪙 ${r.reward.coins} 💎 ${r.reward.gems}</span>
                </div>
                ${r.completed&&!r.claimed?`<div style="text-align:center;margin-top:10px;"><button class="vr-btn vr-btn-gold claim-btn" data-index="${o}" style="font-size:13px;padding:8px 24px;">CLAIM</button></div>`:""}
            `,e.appendChild(h)}),e.querySelectorAll(".claim-btn").forEach(r=>{r.addEventListener("click",o=>{const l=parseInt(o.currentTarget.dataset.index,10);this._emit("challenge-claim",{index:l})})});const i=document.getElementById("daily-bonus-row"),n=this.challengeManager.getBonusReward();this.challengeManager.allClaimed();const s=!n&&this.challengeManager.allCompleted();n?(i.innerHTML=`
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
            `}_startCountdown(){this._stopCountdown(),this._updateCountdown(),this._countdownInterval=setInterval(()=>this._updateCountdown(),1e3)}_stopCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}_updateCountdown(){const e=this.challengeManager.getTimeUntilReset(),t=Math.max(0,Math.floor(e/1e3)),i=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60,r=l=>String(l).padStart(2,"0"),o=document.getElementById("daily-countdown");o&&(o.textContent=`Resets in ${r(i)}:${r(n)}:${r(s)}`)}_emit(e,t){this.container.dispatchEvent(new CustomEvent(e,{detail:t||null,bubbles:!0}))}}class Wy{constructor(e,t,i){this.container=e,this.abilityManager=t,this.progressionManager=i,this._selectedChar="knight",this._tab="heroes",this._el=null,this._build()}_build(){this._el=document.createElement("div"),this._el.id="heroes-screen",this._el.className="vr-screen vr-heroes-bg",this._el.style.justifyContent="flex-start",this._el.style.overflowY="auto",this._el.style.padding="0",this._el.innerHTML=`
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
        `}_renderBody(){switch(this._tab){case"heroes":return this._renderHeroesTab();case"achievements":return this._renderAchievementsTab();case"weekly":return this._renderWeeklyTab();case"streak":return this._renderStreakTab();default:return""}}_renderHeroesTab(){const e=JSON.parse(localStorage.getItem("vr_unlocked")||'["knight"]');let t="";for(const[o,l]of Object.entries(Mi)){const c=e.includes(o),h=o===this._selectedChar;t+=`
                <div class="vr-card ${h?"vr-card-selected":""} ${c?"":"vr-card-pyr"} hero-select-card"
                     data-char="${o}" style="width:90px;padding:10px;cursor:${c?"pointer":"default"};opacity:${c?1:.4};">
                    <div style="font-size:28px;">${l.emoji}</div>
                    <div class="vr-body" style="font-size:12px;font-weight:800;margin-top:4px;">${l.name}</div>
                    ${c?"":'<div style="font-size:9px;opacity:0.5;">LOCKED</div>'}
                </div>
            `}const i=Mi[this._selectedChar];if(!i)return t;const n=this.abilityManager.getAbilityConfig(this._selectedChar);this.abilityManager.getCharacterStats(this._selectedChar);const s=`
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
        `;let r="";for(const[o,l]of Object.entries(is)){const c=this.abilityManager.getUpgradeLevel(this._selectedChar,o),h=c>=l.maxLevel,d=h?0:l.costs[c],u=this.abilityManager.canUpgrade(this._selectedChar,o),p=Array.from({length:l.maxLevel},(g,_)=>`<div style="width:14px;height:14px;border-radius:50%;border:2px solid ${_<c?"#c9a24e":"rgba(194,158,80,0.15)"};background:${_<c?"linear-gradient(135deg,#c9a24e,#8b6914)":"transparent"};"></div>`).join("");r+=`
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
            ${r}
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
        `}_renderStreakTab(){const e=this.progressionManager.getStreakInfo(),t=[1,2,3,4,5,6,7];let i="";for(const n of t){const s=n===e.dayInCycle,r=n<e.dayInCycle;n>e.dayInCycle,i+=`
                <div style="width:70px;padding:10px 6px;border-radius:12px;text-align:center;
                    background:${s?"linear-gradient(135deg,rgba(194,158,80,0.15),rgba(139,105,20,0.1))":r?"rgba(106,138,74,0.08)":"rgba(42,30,18,0.3)"};
                    border:2px solid ${s?"#c9a24e":r?"rgba(106,138,74,0.3)":"rgba(194,158,80,0.08)"};">
                    <div class="vr-body" style="font-size:10px;font-weight:800;opacity:0.5;">DAY ${n}</div>
                    <div style="font-size:20px;margin:4px 0;">${r?"✅":s?"🎁":"📦"}</div>
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
        `}_wireEvents(e){e.querySelectorAll(".heroes-tab-btn").forEach(i=>{i.addEventListener("click",()=>{this._tab=i.dataset.tab,this.refresh()})});const t=JSON.parse(localStorage.getItem("vr_unlocked")||'["knight"]');e.querySelectorAll(".hero-select-card").forEach(i=>{i.addEventListener("click",()=>{t.includes(i.dataset.char)&&(this._selectedChar=i.dataset.char,this.refresh())})}),e.querySelectorAll(".upgrade-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.upgrade;this.abilityManager.purchaseUpgrade(this._selectedChar,n)&&(this.refresh(),this._emit("upgrade-purchased"))})}),e.querySelectorAll(".claim-ach-btn").forEach(i=>{i.addEventListener("click",()=>{const n=this.progressionManager.claimAchievement(i.dataset.ach);if(n){if(n.dust&&this.abilityManager.addStarDust(n.dust),n.keys&&this.abilityManager.addKeys(n.keys),n.coins){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);localStorage.setItem("vr_coins",String(s+n.coins))}this.refresh(),this._emit("reward-claimed",n)}})}),e.querySelectorAll(".claim-weekly-btn").forEach(i=>{i.addEventListener("click",()=>{const n=this.progressionManager.claimWeeklyReward(parseInt(i.dataset.index,10));if(n){if(n.dust&&this.abilityManager.addStarDust(n.dust),n.coins){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);localStorage.setItem("vr_coins",String(s+n.coins))}this.refresh(),this._emit("reward-claimed",n)}})}),e.querySelectorAll(".claim-streak-btn").forEach(i=>{i.addEventListener("click",()=>{const n=this.progressionManager.claimStreakReward();if(n){if(n.dust&&this.abilityManager.addStarDust(n.dust),n.keys&&this.abilityManager.addKeys(n.keys),n.coins){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);localStorage.setItem("vr_coins",String(s+n.coins))}this.refresh(),this._emit("reward-claimed",n)}})})}_emit(e,t=null){this.container.dispatchEvent(new CustomEvent(e,{detail:t}))}_getPassiveValue(e){const t=Mi[e],i=this.abilityManager.getCharacterStats(e).passiveBoost;switch(t.passive.id){case"armor_up":return t.passive.baseValue+i;case"brute_force":return Math.max(5,t.passive.baseValue-i*2);case"arcane_sight":return t.passive.baseValue+i*15;case"nimble":return t.passive.baseValue+i*15;case"blessed":return t.passive.baseValue+i;default:return t.passive.baseValue}}}class qy{constructor(e,t){this.container=e,this.manager=t,this._filterSlot=null,this._sortBy="rarity",this._el=null,this._detailOverlay=null,this._built=!1}show(){this._built||this._build(),this.refresh(),this._el.style.display="flex"}hide(){this._el&&(this._el.style.display="none"),this._detailOverlay&&(this._detailOverlay.style.display="none")}refresh(){this._el&&(this._renderEquipped(),this._renderStats(),this._renderInventory(),this._renderCrafting())}_build(){this._el=document.createElement("div"),this._el.className="vr-screen vr-forge-bg",this._el.style.cssText="justify-content:flex-start;overflow-y:auto;padding:0;",this._el.innerHTML=`
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
        `,this.container.appendChild(this._detailOverlay),this._el.querySelector("#eq-btn-back").addEventListener("click",()=>{this.container.dispatchEvent(new CustomEvent("equipment-back"))}),this._built=!0}_renderEquipped(){var n;const e=this._el.querySelector("#eq-slots");e.innerHTML="";const t={helmet:"Helm",armor:"Armor",boots:"Boots",amulet:"Amulet",weapon:"Weapon"},i={helmet:"🪖",armor:"🛡️",boots:"👟",amulet:"📿",weapon:"⚔️"};for(const s of ti){const r=this.manager.getEquippedItem(s),o=r?((n=pi[r.rarity])==null?void 0:n.color)||"#a0a0a0":"rgba(194,158,80,0.15)",l=!!r,c=document.createElement("div");c.style.cssText=`
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
                ">${r?r.icon:i[s]}</div>
                <div class="vr-body" style="font-size:10px;opacity:${l?"0.8":"0.3"};letter-spacing:0.5px;">
                    ${l?r.name:t[s]}
                </div>
            `,l&&c.addEventListener("click",()=>{this._showItemDetail(r,!0)}),e.appendChild(c)}}_renderStats(){const e=this._el.querySelector("#eq-stats-panel"),t=this.manager.getEquippedStats(),i=Object.entries(t);if(i.length===0){e.innerHTML='<div class="vr-body" style="text-align:center;font-size:12px;opacity:0.3;">No gear equipped</div>';return}e.innerHTML=`
            <div style="font-size:11px;opacity:0.4;margin-bottom:6px;text-transform:uppercase;letter-spacing:2px;font-family:'Cinzel',serif;text-align:center;">Combined Bonuses</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px 16px;justify-content:center;">
                ${i.map(([n,s])=>{const r=wh[n]||{label:n,format:o=>`+${o}`};return`<span class="vr-body" style="font-size:12px;color:#8aaa6a;">${r.label}: <strong>${r.format(s)}</strong></span>`}).join("")}
            </div>
        `}_renderInventory(){var r,o;const e=this._el.querySelector("#eq-filters");e.innerHTML="";const t=[{key:null,label:"All"},...ti.map(l=>({key:l,label:l.charAt(0).toUpperCase()+l.slice(1)}))];for(const l of t){const c=document.createElement("button");c.className="vr-btn vr-btn-ghost",c.style.cssText=`padding:5px 14px;font-size:11px;${this._filterSlot===l.key?"border-color:#c9a24e;color:#c9a24e;background:rgba(194,158,80,0.1);":""}`,c.textContent=l.label,c.addEventListener("click",()=>{this._filterSlot=l.key,this._renderInventory()}),e.appendChild(c)}const i=document.createElement("button");i.className="vr-btn vr-btn-ghost",i.style.cssText="padding:5px 14px;font-size:11px;margin-left:8px;",i.textContent=this._sortBy==="rarity"?"Sort: Rarity":"Sort: Slot",i.addEventListener("click",()=>{this._sortBy=this._sortBy==="rarity"?"slot":"rarity",this._renderInventory()}),e.appendChild(i);const n=this._el.querySelector("#eq-inventory");n.innerHTML="";let s=this.manager.sortInventory(this._sortBy);if(this._filterSlot&&(s=s.filter(l=>l.slot===this._filterSlot)),s.length===0){n.innerHTML='<div class="vr-body" style="font-size:12px;opacity:0.3;padding:20px;">No items found. Play runs to earn loot!</div>';return}for(const l of s){const c=((r=pi[l.rarity])==null?void 0:r.color)||"#a0a0a0",h=this.manager.isEquipped(l.instanceId),d=document.createElement("div");d.className="vr-card",d.style.cssText=`
                width:100px;padding:10px 8px;position:relative;
                border-color:${c}40;
                ${h?`box-shadow:0 0 12px ${c}30;border-color:${c};`:""}
            `,d.innerHTML=`
                <div style="font-size:28px;margin-bottom:4px;">${l.icon}</div>
                <div class="vr-title" style="font-size:10px;color:${c};line-height:1.2;">${l.name}</div>
                <div class="vr-body" style="font-size:9px;opacity:0.35;margin-top:2px;">${((o=pi[l.rarity])==null?void 0:o.label)||l.rarity}</div>
                ${h?`<div style="position:absolute;top:4px;right:4px;font-size:8px;background:rgba(194,158,80,0.15);color:#c9a24e;padding:1px 5px;border-radius:3px;font-family:'Cinzel',serif;letter-spacing:0.5px;">EQ</div>`:""}
            `,d.addEventListener("click",()=>{this._showItemDetail(l,h)}),n.appendChild(d)}}_showItemDetail(e,t){var h,d;const i=((h=pi[e.rarity])==null?void 0:h.color)||"#a0a0a0",n=((d=pi[e.rarity])==null?void 0:d.label)||e.rarity,s=qd[e.rarity];this._detailOverlay.style.display="flex",this._detailOverlay.innerHTML=`
            <div class="vr-panel" style="padding:28px 36px;text-align:center;max-width:320px;animation:popIn 0.3s ease-out;position:relative;">
                <div style="font-size:48px;margin-bottom:8px;">${e.icon}</div>
                <div class="vr-title" style="font-size:20px;color:${i};margin-bottom:2px;">${e.name}</div>
                <div class="vr-body" style="font-size:11px;color:${i};opacity:0.7;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;">${n} ${e.slot}</div>
                <div class="vr-divider" style="margin:10px auto;"></div>

                <div style="text-align:left;margin-bottom:12px;">
                    ${Object.entries(e.stats).map(([u,p])=>{const g=wh[u]||{label:u,format:_=>`+${_}`};return`<div class="vr-body" style="font-size:13px;color:#8aaa6a;margin-bottom:3px;">${g.label}: <strong>${g.format(p)}</strong></div>`}).join("")}
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
        `;const i=this._el.querySelector("#eq-crafting");i.innerHTML="";const n=["uncommon","rare","epic","legendary"];for(const s of n){const r=pi[s],o=this.manager.canCraft(s),l=this._formatCraftCost(r.craftCost),c=document.createElement("button");c.className=`vr-btn ${o?"vr-btn-secondary":"vr-btn-ghost"}`,c.style.cssText=`
                padding:10px 16px;font-size:11px;min-width:120px;
                ${o?`border-color:${r.color};color:${r.color};`:"opacity:0.4;"}
            `,c.innerHTML=`
                <div style="font-size:12px;font-weight:700;">${r.label}</div>
                <div style="font-size:9px;opacity:0.6;margin-top:2px;">${l}</div>
            `,o&&c.addEventListener("click",()=>{this._showCraftSlotPicker(s)}),i.appendChild(c)}}_formatCraftCost(e){if(!e)return"N/A";const t=[];return e.fragments&&t.push(`${e.fragments} frag`),e.essence&&t.push(`${e.essence} ess`),e.cores&&t.push(`${e.cores} core`),t.join(" + ")}_showCraftSlotPicker(e){const t=pi[e];this._detailOverlay.style.display="flex",this._detailOverlay.innerHTML=`
            <div class="vr-panel" style="padding:24px 32px;text-align:center;max-width:320px;animation:popIn 0.3s ease-out;">
                <div class="vr-title" style="font-size:18px;color:${t.color};margin-bottom:4px;">CRAFT ${t.label.toUpperCase()}</div>
                <div class="vr-divider" style="margin:8px auto 14px;"></div>
                <div class="vr-body" style="font-size:12px;opacity:0.5;margin-bottom:16px;">Choose a slot to craft for:</div>
                <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:16px;">
                    ${ti.map(i=>`
                        <button class="vr-btn vr-btn-secondary eq-craft-slot-btn" data-slot="${i}" style="padding:10px 18px;font-size:12px;min-width:80px;">
                            ${i.charAt(0).toUpperCase()+i.slice(1)}
                        </button>
                    `).join("")}
                </div>
                <button id="eq-craft-cancel" class="vr-btn vr-btn-ghost" style="width:100%;">CANCEL</button>
            </div>
        `,this._detailOverlay.querySelector("#eq-craft-cancel").addEventListener("click",()=>{this._detailOverlay.style.display="none"}),this._detailOverlay.querySelectorAll(".eq-craft-slot-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.slot,s=this.manager.craft(e,n);s&&(this._detailOverlay.style.display="none",this._showItemDetail(s,!1),this.refresh(),this.container.dispatchEvent(new CustomEvent("equipment-changed")))})})}}const Fh=[{key:"skin",label:"SKINS",items:Xd},{key:"trail",label:"TRAILS",items:$d},{key:"death",label:"DEATHS",items:Yd},{key:"title",label:"TITLES",items:jd}],zh={coins:"🪙",dust:"✨",pyr:"🔮"},Hh={coins:"",dust:" Dust",pyr:" PYR"};class Xy{constructor(e,t){this.container=e,this.manager=t,this._activeTab="skin",this._modal=null,this.screen=document.createElement("div"),this.screen.id="cosmetics-screen",this.screen.className="vr-screen vr-vanity-bg",this.screen.style.justifyContent="flex-start",this.screen.style.overflowY="auto",this.screen.style.padding="0",this.screen.innerHTML=`
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
        `,e.appendChild(this.screen),this.screen.querySelector("#btn-cosmetics-back").addEventListener("click",()=>{this.container.dispatchEvent(new CustomEvent("cosmetics-back"))}),this._buildTabs()}show(){this.refresh(),this.screen.style.display="flex"}hide(){this.screen.style.display="none",this._closeModal()}refresh(){this._updateBalance(),this._buildTabs(),this._renderEquipped(),this._renderGrid()}_updateBalance(){const e=parseInt(localStorage.getItem("vr_coins")||"0",10),t=parseInt(localStorage.getItem("vr_stardust")||"0",10),i=this.screen.querySelector("#cosmetics-balance");i.innerHTML=`🪙 <strong>${e.toLocaleString()}</strong> &nbsp; ✨ <strong>${t.toLocaleString()}</strong> Dust`}_buildTabs(){const e=this.screen.querySelector("#cosmetics-tabs");e.innerHTML="";for(const t of Fh){const i=document.createElement("button");i.className=`vr-btn ${t.key===this._activeTab?"vr-btn-primary":"vr-btn-secondary"}`,i.style.cssText="padding:10px 20px;font-size:12px;min-width:80px;",i.textContent=t.label,i.addEventListener("click",()=>{this._activeTab=t.key,this.refresh()}),e.appendChild(i)}}_renderEquipped(){const e=this.screen.querySelector("#cosmetics-equipped"),t=this.manager.getEquipped(),i=this._activeTab,n=t[i],s=ui(n);if(!s){e.innerHTML="";return}const r=so[s.rarity]||"#a0a0a0";e.innerHTML=`
            <div class="vr-panel" style="display:inline-block;padding:12px 28px;border-color:${r};">
                <div style="font-size:11px;opacity:0.4;letter-spacing:2px;margin-bottom:4px;" class="vr-title">EQUIPPED</div>
                <span style="font-size:28px;">${s.icon}</span>
                <div class="vr-title" style="font-size:14px;color:${r};margin-top:4px;">${s.name}</div>
                ${s.category==="title"&&s.titleText?`<div class="vr-body" style="font-size:11px;opacity:0.5;margin-top:2px;">"${s.titleText}"</div>`:""}
            </div>
        `}_renderGrid(){const e=this.screen.querySelector("#cosmetics-grid");e.innerHTML="";const t=Fh.find(s=>s.key===this._activeTab);if(!t)return;const n=this.manager.getEquipped()[this._activeTab];t.items.forEach((s,r)=>{const o=this.manager.owns(s.id),l=s.id===n,c=so[s.rarity]||"#a0a0a0",h=document.createElement("div");h.className=`vr-card ${o?"vr-card-owned":""} ${l?"vr-card-selected":""}`,h.style.cssText=`
                width:140px;border-color:${l?c:o?"rgba(120,160,80,0.3)":"rgba(194,158,80,0.12)"};
                animation-delay:${r*.05}s;
                ${o?"":"opacity:0.65;"}
                ${l?`box-shadow:0 0 20px ${c}40;`:""}
            `;const d=s.rarity.charAt(0).toUpperCase()+s.rarity.slice(1);let u;if(l)u=`<span class="vr-badge" style="background:${c}20;color:${c};">EQUIPPED</span>`;else if(o)u='<span class="vr-badge vr-badge-owned">OWNED</span>';else if(s.price){const p=zh[s.price.currency]||"",g=Hh[s.price.currency]||"";u=`<span class="vr-badge ${s.price.currency==="pyr"||s.price.currency==="dust"?"vr-badge-pyr":"vr-badge-coins"}">${p} ${s.price.amount}${g}</span>`}else u='<span class="vr-badge" style="background:rgba(194,158,80,0.1);color:rgba(194,158,80,0.5);">EARNED</span>';h.innerHTML=`
                <div style="font-size:36px;margin-bottom:6px;">${s.icon}</div>
                <div class="vr-title" style="font-size:12px;color:${c};line-height:1.2;">${s.name}</div>
                <div class="vr-body" style="font-size:9px;color:${c};opacity:0.6;margin:3px 0;letter-spacing:1px;">${d}</div>
                ${u}
            `,h.addEventListener("click",()=>{l||(o?this._equipItem(s):s.price&&this._showPurchaseModal(s))}),e.appendChild(h)})}_equipItem(e){let t=!1;switch(e.category){case"skin":t=this.manager.equipSkin(e.id);break;case"trail":t=this.manager.equipTrail(e.id);break;case"death":t=this.manager.equipDeath(e.id);break;case"title":t=this.manager.equipTitle(e.id);break}t&&(this.container.dispatchEvent(new CustomEvent("cosmetic-equipped",{detail:{id:e.id,category:e.category}})),this.refresh())}_showPurchaseModal(e){this._closeModal();const t=so[e.rarity]||"#a0a0a0",i=e.rarity.charAt(0).toUpperCase()+e.rarity.slice(1),n=zh[e.price.currency]||"",s=Hh[e.price.currency]||"",r=this.manager.canAfford(e.id);this._modal=document.createElement("div"),this._modal.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(10,6,2,0.85);z-index:100;animation:popIn 0.3s ease-out;",this._modal.innerHTML=`
            <div class="vr-panel" style="padding:28px 36px;text-align:center;max-width:320px;border-color:${t};box-shadow:0 0 40px ${t}20;">
                <div style="font-size:56px;margin-bottom:8px;">${e.icon}</div>
                <div class="vr-title" style="font-size:20px;color:${t};margin-bottom:2px;">${e.name}</div>
                <div class="vr-body" style="font-size:10px;color:${t};opacity:0.6;letter-spacing:2px;margin-bottom:8px;">${i}</div>
                <div class="vr-divider"></div>
                <div class="vr-body" style="font-size:12px;opacity:0.5;margin:12px 0;line-height:1.6;">${e.description||""}</div>
                <div style="font-size:18px;font-weight:800;margin-bottom:20px;" class="vr-title">
                    ${n} ${e.price.amount}${s}
                </div>
                ${r?'<button id="modal-buy" class="vr-btn vr-btn-gold" style="width:100%;margin-bottom:10px;padding:14px;font-size:15px;">ACQUIRE</button>':`<div class="vr-body" style="color:#8b2020;font-size:13px;font-weight:800;margin-bottom:14px;">Insufficient ${e.price.currency==="dust"?"Star Dust":e.price.currency==="pyr"?"PYR":"coins"}</div>`}
                <button id="modal-cancel" class="vr-btn vr-btn-ghost" style="width:100%;">CANCEL</button>
            </div>
        `,this.container.appendChild(this._modal);const o=this._modal.querySelector("#modal-buy");o&&o.addEventListener("click",()=>{this.manager.purchase(e.id).success&&this._equipItem(e),this._closeModal(),this.refresh()}),this._modal.querySelector("#modal-cancel").addEventListener("click",()=>{this._closeModal()}),this._modal.addEventListener("click",l=>{l.target===this._modal&&this._closeModal()})}_closeModal(){this._modal&&(this._modal.remove(),this._modal=null)}}const Zd=document.createElement("style");Zd.textContent=`
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

/* Guide - scroll/parchment feel */
.vr-guide-bg {
    background:
        radial-gradient(circle at 50% 10%, rgba(194,158,80,0.08) 0%, transparent 40%),
        radial-gradient(circle at 20% 50%, rgba(160,130,80,0.04) 0%, transparent 30%),
        radial-gradient(circle at 80% 50%, rgba(160,130,80,0.04) 0%, transparent 30%),
        linear-gradient(180deg, rgba(42,30,18,0.2) 0%, transparent 20%, transparent 80%, rgba(42,30,18,0.2) 100%),
        radial-gradient(ellipse at 50% 20%, #2a1e12 0%, #1a1208 35%, #0e0a04 100%);
}

.vr-guide-section { margin-bottom:24px; }
.vr-guide-section h3 {
    font-family:'Cinzel',serif; font-size:16px; color:#c9a24e; margin-bottom:10px;
    letter-spacing:2px; text-transform:uppercase;
    padding-bottom:6px; border-bottom:1px solid rgba(194,158,80,0.15);
}
.vr-guide-section p, .vr-guide-section li {
    font-family:'Philosopher',sans-serif; font-size:13px; color:#d8cbb8; line-height:1.8;
    opacity:0.85;
}
.vr-guide-section ul { list-style:none; padding:0; margin:0; }
.vr-guide-section li { padding:4px 0 4px 16px; position:relative; }
.vr-guide-section li::before {
    content:''; position:absolute; left:0; top:12px; width:6px; height:6px;
    border-radius:50%; background:rgba(194,158,80,0.4);
}
.vr-guide-highlight {
    display:inline-block; padding:2px 8px; border-radius:3px;
    background:rgba(194,158,80,0.1); color:#c9a24e; font-weight:700;
    font-family:'Cinzel',serif; font-size:12px;
}
.vr-guide-tier-row {
    display:flex; justify-content:space-between; align-items:center;
    padding:6px 0; border-bottom:1px solid rgba(194,158,80,0.06);
    font-family:'Philosopher',sans-serif; font-size:13px; color:#d8cbb8;
}
.vr-guide-tier-row:last-child { border-bottom:none; }

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
`;document.head.appendChild(Zd);function ro(a,e=6){for(let t=0;t<e;t++){const i=document.createElement("div");i.className="vr-sparkle",i.style.left=Math.random()*100+"%",i.style.top=60+Math.random()*40+"%",i.style.animationDelay=Math.random()*5+"s",i.style.animationDuration=4+Math.random()*4+"s",i.style.width=i.style.height=2+Math.random()*4+"px",i.style.opacity=String(.1+Math.random()*.25),a.appendChild(i)}}class $y{constructor(e){this.container=e,this._callbacks={},this.hud=document.createElement("div"),this.hud.id="hud",this.hud.className="vr-body",this.hud.innerHTML=`
            <div style="position:absolute;top:16px;left:16px;text-shadow:0 2px 6px rgba(0,0,0,0.7);">
                <div id="hud-score" style="font-family:'Cinzel',serif;font-size:22px;font-weight:800;color:#c9a24e;">0</div>
                <div id="hud-lap" style="font-size:11px;opacity:0.5;font-family:'Cinzel',serif;font-weight:700;color:#c9a24e;display:none;">LAP 1</div>
                <div id="hud-distance" style="font-size:12px;opacity:0.6;font-family:'Philosopher',sans-serif;">0m</div>
            </div>
            <div style="position:absolute;top:16px;right:16px;text-align:right;text-shadow:0 2px 6px rgba(0,0,0,0.7);">
                <div id="hud-coins" style="font-size:15px;font-family:'Cinzel',serif;font-weight:700;color:#c9a24e;">🪙 0</div>
                <div id="hud-combo" style="font-size:13px;color:#c9a24e;display:none;font-family:'Cinzel',serif;font-weight:700;">COMBO x1</div>
            </div>
            <div id="hud-health" style="position:absolute;top:140px;left:16px;display:flex;align-items:center;gap:6px;">
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
            <div id="hud-campaign-objectives" style="position:absolute;top:56px;left:16px;display:none;font-family:'Philosopher',sans-serif;font-size:12px;background:rgba(42,30,18,0.65);border-radius:6px;border:1px solid rgba(194,158,80,0.25);padding:8px 12px;color:#f5e6c8;min-width:150px;pointer-events:none;line-height:1.6;"></div>
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
                <button id="btn-daily" class="vr-btn vr-btn-gold" style="width:150px;">DAILY</button>
                <button id="btn-guide" class="vr-btn vr-btn-secondary" style="width:150px;">GUIDE</button>
            </div>
        `,ro(this.menu,10),e.appendChild(this.menu),this.selectedCharacter="knight",this.charSelect=document.createElement("div"),this.charSelect.id="char-select",this.charSelect.className="vr-screen",this.charSelect.innerHTML=`
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
        `,ro(this.charSelect,6),e.appendChild(this.charSelect),this.shopScreen=document.createElement("div"),this.shopScreen.id="shop-screen",this.shopScreen.className="vr-screen vr-shop-bg",this.shopScreen.style.justifyContent="flex-start",this.shopScreen.style.overflowY="auto",this.shopScreen.style.padding="0",this.shopScreen.innerHTML=`
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
        `,ro(this.shopScreen,5),e.appendChild(this.shopScreen),this.lbScreen=document.createElement("div"),this.lbScreen.id="lb-screen",this.lbScreen.className="vr-screen vr-glory-bg",this.lbScreen.style.justifyContent="flex-start",this.lbScreen.style.overflowY="auto",this.lbScreen.innerHTML=`
            <div style="width:100%;max-width:520px;margin:0 auto;padding:20px 24px 30px;">
                <div style="text-align:center;margin-bottom:16px;padding-top:16px;animation:slideDown 0.4s ease-out;">
                    <h2 class="vr-title" style="font-size:26px;color:#c9a24e;text-shadow:0 2px 6px rgba(0,0,0,0.5);">HALL OF GLORY</h2>
                    <div class="vr-divider"></div>
                    <div class="vr-body" style="font-size:11px;opacity:0.35;margin-top:4px;">Hold your rank. Earn rewards.</div>
                </div>
                <div id="lb-reward-pool" style="text-align:center;margin-bottom:14px;display:none;"></div>
                <div id="lb-player-status" style="margin-bottom:14px;display:none;"></div>
                <div style="display:flex;justify-content:center;gap:2px;margin-bottom:10px;font-size:10px;font-weight:800;opacity:0.25;text-transform:uppercase;letter-spacing:1px;" class="vr-body">
                    <span style="width:36px;text-align:center;">Rank</span>
                    <span style="flex:1;">Player</span>
                    <span style="width:60px;text-align:center;">Held</span>
                    <span style="width:70px;text-align:right;">Score</span>
                </div>
                <div id="lb-entries" style="width:100%;"></div>
                <div id="lb-reward-info" style="margin-top:18px;display:none;"></div>
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
                <div id="go-buttons"></div>
                <button id="btn-write-chain" class="vr-btn vr-btn-secondary" style="width:100%;margin-bottom:6px;display:none;">INSCRIBE ON CHAIN</button>
                <div id="go-chain-status" class="vr-body" style="font-size:11px;opacity:0.4;margin-bottom:10px;display:none;"></div>
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
        `,e.appendChild(this.optionsScreen),this.guideScreen=document.createElement("div"),this.guideScreen.id="guide-screen",this.guideScreen.className="vr-screen vr-guide-bg",this.guideScreen.style.justifyContent="flex-start",this.guideScreen.style.overflowY="auto",this.guideScreen.style.padding="0",this.guideScreen.innerHTML=`
            <button id="btn-guide-back" class="vr-btn vr-btn-ghost" style="position:absolute;top:14px;left:14px;z-index:10;">BACK</button>
            <div style="width:100%;max-width:540px;margin:0 auto;padding:60px 24px 40px;">
                <div style="text-align:center;margin-bottom:28px;animation:slideDown 0.4s ease-out;">
                    <h2 class="vr-title" style="font-size:28px;background:linear-gradient(135deg,#c9a24e,#dbb86a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">PLAYER GUIDE</h2>
                    <div class="vr-divider"></div>
                    <p class="vr-body" style="font-size:12px;opacity:0.35;letter-spacing:2px;margin-top:6px;">Everything you need to conquer the arena</p>
                </div>

                <!-- How to Play -->
                <div class="vr-guide-section vr-panel" style="padding:20px;animation:slideUp 0.4s ease-out 0.1s both;">
                    <h3>How to Play</h3>
                    <p>Run endlessly through mythical biomes, dodging obstacles, collecting coins, and defeating powerful bosses. Survive as long as you can to climb the leaderboard!</p>
                    <ul style="margin-top:10px;">
                        <li>Switch between <span class="vr-guide-highlight">3 lanes</span> to avoid obstacles</li>
                        <li><span class="vr-guide-highlight">Jump</span> over barriers and <span class="vr-guide-highlight">Slide</span> under gates</li>
                        <li><span class="vr-guide-highlight">Strike</span> to break chests and collect loot</li>
                        <li>Use your hero's <span class="vr-guide-highlight">Ability</span> for a powerful advantage</li>
                        <li>Collect <span class="vr-guide-highlight" style="color:#f0c040;">coins</span> and <span class="vr-guide-highlight" style="color:#c0a0e0;">stardust</span> on the run</li>
                    </ul>
                </div>

                <!-- Controls -->
                <div class="vr-guide-section vr-panel" style="padding:20px;animation:slideUp 0.4s ease-out 0.15s both;">
                    <h3>Controls</h3>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 16px;">
                        <div class="vr-guide-tier-row"><span class="vr-guide-highlight">Q / E</span><span style="opacity:0.6;">Change Lane</span></div>
                        <div class="vr-guide-tier-row"><span class="vr-guide-highlight">Left / Right</span><span style="opacity:0.6;">Change Lane</span></div>
                        <div class="vr-guide-tier-row"><span class="vr-guide-highlight">W / Up</span><span style="opacity:0.6;">Jump</span></div>
                        <div class="vr-guide-tier-row"><span class="vr-guide-highlight">S / Down</span><span style="opacity:0.6;">Slide</span></div>
                        <div class="vr-guide-tier-row"><span class="vr-guide-highlight">F</span><span style="opacity:0.6;">Strike</span></div>
                        <div class="vr-guide-tier-row"><span class="vr-guide-highlight">R</span><span style="opacity:0.6;">Ability</span></div>
                        <div class="vr-guide-tier-row"><span class="vr-guide-highlight">Esc</span><span style="opacity:0.6;">Pause</span></div>
                        <div class="vr-guide-tier-row"><span class="vr-guide-highlight">Swipe</span><span style="opacity:0.6;">Mobile</span></div>
                    </div>
                </div>

                <!-- Endless Mode & Bosses -->
                <div class="vr-guide-section vr-panel" style="padding:20px;animation:slideUp 0.4s ease-out 0.2s both;">
                    <h3>Endless Mode & Bosses</h3>
                    <p>Difficulty is driven by boss defeats, not distance. Each boss kill advances you to a harder stage with new obstacles and a new biome.</p>
                    <ul style="margin-top:10px;">
                        <li><span class="vr-guide-highlight" style="color:#4a8a4a;">Stage 1 — Forest</span> Small obstacles only. Learn the basics.</li>
                        <li><span class="vr-guide-highlight" style="color:#c9a24e;">Stage 2 — Desert</span> Medium obstacles added. Watch your lanes.</li>
                        <li><span class="vr-guide-highlight" style="color:#c94a2e;">Stage 3 — Lava</span> Large obstacles appear. Stay sharp.</li>
                        <li><span class="vr-guide-highlight" style="color:#6a9ac9;">Stage 4 — Snow</span> Breakable gates join the mix.</li>
                        <li><span class="vr-guide-highlight">Stage 5+</span> Slide gates, all obstacle types, maximum chaos.</li>
                    </ul>
                    <p style="margin-top:12px;">Speed increases <span class="vr-guide-highlight">x1.1</span> per boss defeated — compounding! After 4 bosses, the cycle repeats harder.</p>
                </div>

                <!-- Boss Encounters -->
                <div class="vr-guide-section vr-panel" style="padding:20px;animation:slideUp 0.4s ease-out 0.25s both;">
                    <h3>The Four Bosses</h3>
                    <p>Each biome guardian has unique attacks. Learn their patterns to survive:</p>
                    <ul style="margin-top:10px;">
                        <li><span class="vr-guide-highlight" style="color:#4a8a4a;">Forest Guardian</span> — Fireballs and ground slams. Practice lane switching and jumping.</li>
                        <li><span class="vr-guide-highlight" style="color:#c9a24e;">Desert Pharaoh</span> — Beam attacks. Master sliding to dodge.</li>
                        <li><span class="vr-guide-highlight" style="color:#c94a2e;">Lava Titan</span> — Fast ground slams and chaos. Perfect your jump timing.</li>
                        <li><span class="vr-guide-highlight" style="color:#6a9ac9;">Frost Wraith</span> — Mixed attacks with tight timing. The ultimate test.</li>
                    </ul>
                </div>

                <!-- PYR Pool & Entry -->
                <div class="vr-guide-section vr-panel" style="padding:20px;animation:slideUp 0.4s ease-out 0.3s both;">
                    <h3>PYR Pool & Entry Fee</h3>
                    <p>Vulcan Runner features a competitive <span class="vr-guide-highlight" style="color:#c0a0e0;">PYR reward pool</span> for connected wallet users.</p>
                    <ul style="margin-top:10px;">
                        <li>Each endless run costs <span class="vr-guide-highlight" style="color:#c0a0e0;">1 PYR</span> entry fee</li>
                        <li>Entry fees go directly into the <span class="vr-guide-highlight">Reward Pool</span></li>
                        <li>40% of all Armoury (shop) purchases also feed the pool</li>
                        <li>The pool grows over time from all player activity</li>
                        <li>Campaign mode is <span class="vr-guide-highlight" style="color:#4a8a4a;">free</span> — no PYR required</li>
                    </ul>
                </div>

                <!-- Leaderboard Rewards -->
                <div class="vr-guide-section vr-panel" style="padding:20px;animation:slideUp 0.4s ease-out 0.35s both;">
                    <h3>Leaderboard Holding Rewards</h3>
                    <p>Top 10 players earn PYR rewards for <em>holding</em> their position over time. The longer you stay, the bigger the reward.</p>
                    <div style="margin-top:12px;">
                        <div class="vr-section-title" style="margin-bottom:8px;font-size:11px;">MILESTONE TIERS</div>
                        <div class="vr-guide-tier-row"><span>30 Days</span><span class="vr-guide-highlight" style="color:#c0a0e0;">5 PYR base</span></div>
                        <div class="vr-guide-tier-row"><span>90 Days</span><span class="vr-guide-highlight" style="color:#c0a0e0;">15 PYR base</span></div>
                        <div class="vr-guide-tier-row"><span>180 Days</span><span class="vr-guide-highlight" style="color:#c0a0e0;">40 PYR base</span></div>
                        <div class="vr-guide-tier-row"><span>360 Days</span><span class="vr-guide-highlight" style="color:#c0a0e0;">100 PYR base</span></div>
                    </div>
                    <div style="margin-top:14px;">
                        <div class="vr-section-title" style="margin-bottom:8px;font-size:11px;">POSITION MULTIPLIERS</div>
                        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;text-align:center;">
                            <div><span class="vr-guide-highlight" style="color:#ffd700;">#1</span><br><span style="font-size:12px;opacity:0.6;">x1.0</span></div>
                            <div><span class="vr-guide-highlight" style="color:#c0c0c0;">#2</span><br><span style="font-size:12px;opacity:0.6;">x0.7</span></div>
                            <div><span class="vr-guide-highlight" style="color:#cd7f32;">#3</span><br><span style="font-size:12px;opacity:0.6;">x0.5</span></div>
                            <div><span class="vr-guide-highlight">#4</span><br><span style="font-size:12px;opacity:0.6;">x0.35</span></div>
                            <div><span class="vr-guide-highlight">#5</span><br><span style="font-size:12px;opacity:0.6;">x0.25</span></div>
                        </div>
                        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;text-align:center;margin-top:6px;">
                            <div><span class="vr-guide-highlight">#6</span><br><span style="font-size:12px;opacity:0.6;">x0.20</span></div>
                            <div><span class="vr-guide-highlight">#7</span><br><span style="font-size:12px;opacity:0.6;">x0.15</span></div>
                            <div><span class="vr-guide-highlight">#8</span><br><span style="font-size:12px;opacity:0.6;">x0.12</span></div>
                            <div><span class="vr-guide-highlight">#9</span><br><span style="font-size:12px;opacity:0.6;">x0.10</span></div>
                            <div><span class="vr-guide-highlight">#10</span><br><span style="font-size:12px;opacity:0.6;">x0.08</span></div>
                        </div>
                    </div>
                    <p style="margin-top:14px;font-size:12px;opacity:0.6;">Example: Holding #1 for 90 days = 15 x 1.0 = <span style="color:#c0a0e0;font-weight:700;">15 PYR</span></p>
                </div>

                <!-- Self-Regulating Economy -->
                <div class="vr-guide-section vr-panel" style="padding:20px;animation:slideUp 0.4s ease-out 0.4s both;">
                    <h3>How the Pool Works</h3>
                    <ul>
                        <li>The reward pool is <span class="vr-guide-highlight">self-regulating</span> — it only pays out what it contains</li>
                        <li>If nobody plays, the pool doesn't grow and no rewards are paid</li>
                        <li>If positions churn frequently, holders don't reach milestones</li>
                        <li>Only consistent, skilled players who hold their rank earn PYR</li>
                        <li>Rewards are claimed from the <span class="vr-guide-highlight">Glory</span> screen when milestones are reached</li>
                    </ul>
                </div>

                <!-- Heroes & Abilities -->
                <div class="vr-guide-section vr-panel" style="padding:20px;animation:slideUp 0.4s ease-out 0.45s both;">
                    <h3>Heroes & Abilities</h3>
                    <p>Choose a hero before each run. Each hero has unique stats and a special ability:</p>
                    <ul style="margin-top:10px;">
                        <li><span class="vr-guide-highlight">Knight</span> — Balanced fighter, reliable for all situations</li>
                        <li><span class="vr-guide-highlight">Barbarian</span> — Raw power, devastating strikes</li>
                    </ul>
                    <p style="margin-top:8px;font-size:12px;opacity:0.5;">More heroes coming soon...</p>
                </div>

                <!-- Shop & Forge -->
                <div class="vr-guide-section vr-panel" style="padding:20px;animation:slideUp 0.4s ease-out 0.5s both;">
                    <h3>Armoury, Forge & Vanity</h3>
                    <ul>
                        <li><span class="vr-guide-highlight">Armoury</span> — Buy boosts, items, and upgrades with coins or PYR</li>
                        <li><span class="vr-guide-highlight">Forge</span> — Craft and upgrade equipment from materials found on runs</li>
                        <li><span class="vr-guide-highlight">Vanity</span> — Equip cosmetic skins and visual effects</li>
                        <li>PYR purchases contribute to the reward pool (40% goes to the pool)</li>
                    </ul>
                </div>

                <!-- Campaign -->
                <div class="vr-guide-section vr-panel" style="padding:20px;margin-bottom:0;animation:slideUp 0.4s ease-out 0.55s both;">
                    <h3>Campaign Mode</h3>
                    <ul>
                        <li>Complete structured levels with specific objectives</li>
                        <li>Earn stars for performance — up to 3 per level</li>
                        <li>Unlock new challenges as you progress</li>
                        <li><span class="vr-guide-highlight" style="color:#4a8a4a;">Free to play</span> — no PYR entry fee for campaign</li>
                    </ul>
                </div>

                <div style="text-align:center;margin-top:28px;animation:slideUp 0.4s ease-out 0.6s both;">
                    <button id="btn-guide-back-bottom" class="vr-btn vr-btn-secondary" style="width:200px;">RETURN TO MENU</button>
                </div>
            </div>
        `,e.appendChild(this.guideScreen),this._initOptions(),document.getElementById("btn-play").addEventListener("click",()=>this._emit("show-char-select")),document.getElementById("btn-start-run").addEventListener("click",()=>this._emit("play")),document.getElementById("btn-back-menu").addEventListener("click",()=>this.showMenu()),document.querySelectorAll(".char-card").forEach(t=>{t.addEventListener("click",()=>{this.selectedCharacter=t.dataset.char,document.querySelectorAll(".char-card").forEach(i=>{i.classList.toggle("vr-card-selected",i===t)})})}),document.getElementById("btn-pause").addEventListener("click",()=>this._emit("pause")),document.getElementById("btn-resume").addEventListener("click",()=>this._emit("resume")),document.getElementById("btn-pause-menu").addEventListener("click",()=>this._emit("menu")),document.getElementById("btn-revive").addEventListener("click",()=>this._emit("revive")),document.getElementById("btn-skip-revive").addEventListener("click",()=>{this.hideRevivePrompt(),this._emit("skip-revive")}),document.getElementById("btn-shop").addEventListener("click",()=>this._emit("show-shop")),document.getElementById("btn-leaderboard").addEventListener("click",()=>this._emit("show-leaderboard")),document.getElementById("btn-forge").addEventListener("click",()=>this._emit("show-forge")),document.getElementById("btn-vanity").addEventListener("click",()=>this._emit("show-vanity")),document.getElementById("btn-campaign").addEventListener("click",()=>this._emit("show-campaign")),document.getElementById("btn-heroes").addEventListener("click",()=>this._emit("show-heroes")),document.getElementById("btn-shop-back").addEventListener("click",()=>this.showMenu()),document.getElementById("btn-lb-back").addEventListener("click",()=>this.showMenu()),document.getElementById("btn-connect-wallet").addEventListener("click",()=>this._emit("connect-wallet")),document.getElementById("btn-write-chain").addEventListener("click",()=>this._emit("write-chain")),document.getElementById("btn-daily").addEventListener("click",()=>this._emit("show-daily")),document.getElementById("btn-fullscreen").addEventListener("click",()=>this._toggleFullscreen()),document.getElementById("btn-options").addEventListener("click",()=>this.showOptions()),document.getElementById("btn-options-back").addEventListener("click",()=>this.showMenu()),document.getElementById("btn-guide").addEventListener("click",()=>this.showGuide()),document.getElementById("btn-guide-back").addEventListener("click",()=>this.showMenu()),document.getElementById("btn-guide-back-bottom").addEventListener("click",()=>this.showMenu()),document.getElementById("options-volume").addEventListener("input",t=>{const i=parseInt(t.target.value,10);localStorage.setItem("vr_volume",String(i)),document.getElementById("options-vol-label").textContent=i}),document.getElementById("options-music-toggle").addEventListener("click",()=>{const t=localStorage.getItem("vr_music")!=="off";localStorage.setItem("vr_music",t?"off":"on"),this._updateOptionsToggles()}),document.getElementById("options-sfx-toggle").addEventListener("click",()=>{const t=localStorage.getItem("vr_sfx")!=="off";localStorage.setItem("vr_sfx",t?"off":"on"),this._updateOptionsToggles()})}_hideAll(){this.menu.style.display="none",this.charSelect.style.display="none",this.shopScreen.style.display="none",this.lbScreen.style.display="none",this.hud.style.display="none",this.gameOver.style.display="none",this.pauseOverlay.style.display="none",this.reviveOverlay.style.display="none",this.optionsScreen.style.display="none",this.guideScreen.style.display="none",this._campaignUI&&this._campaignUI.hide(),this._heroesUI&&this._heroesUI.hide(),this._equipmentUI&&this._equipmentUI.hide(),this._cosmeticsUI&&this._cosmeticsUI.hide(),this._simonOverlay&&(this._simonOverlay.style.display="none"),this._miniGameBar&&(this._miniGameBar.style.display="none"),this.hideTutorialStep()}showMenu(){this._hideAll(),this.menu.style.display="flex";const e=parseInt(localStorage.getItem("vr_coins")||"0",10);document.getElementById("menu-coin-count").textContent=e.toLocaleString()}showOptions(){this._hideAll(),this.optionsScreen.style.display="flex",this._updateOptionsToggles();const e=parseInt(localStorage.getItem("vr_volume")||"100",10);document.getElementById("options-volume").value=e,document.getElementById("options-vol-label").textContent=e}showGuide(){this._hideAll(),this.guideScreen.style.display="flex",this.guideScreen.scrollTop=0}showDailyChallengesDirectly(e,t){this._hideAll(),this._campaignUI||(this._campaignUI=new Bh(this.container,e,t),this.container.addEventListener("campaign-start",i=>this._emit("campaign-start",i.detail)),this.container.addEventListener("campaign-back",()=>this._emit("campaign-back")),this.container.addEventListener("challenge-claim",i=>this._emit("challenge-claim",i.detail)),this.container.addEventListener("challenge-bonus-claim",()=>this._emit("challenge-bonus-claim"))),this._campaignUI.showDailyChallenges()}_toggleFullscreen(){if(document.fullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement)(document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen||(()=>{})).call(document).catch(()=>{});else{const t=document.documentElement;(t.requestFullscreen||t.webkitRequestFullscreen||t.msRequestFullscreen||(()=>{})).call(t).catch(()=>{})}}_initOptions(){localStorage.getItem("vr_volume")===null&&localStorage.setItem("vr_volume","100"),localStorage.getItem("vr_music")===null&&localStorage.setItem("vr_music","on"),localStorage.getItem("vr_sfx")===null&&localStorage.setItem("vr_sfx","on")}_updateOptionsToggles(){const e=localStorage.getItem("vr_music")!=="off",t=localStorage.getItem("vr_sfx")!=="off",i=document.getElementById("options-music-toggle"),n=document.getElementById("options-sfx-toggle");i&&(i.textContent=e?"MUSIC: ON":"MUSIC: OFF",i.className=`vr-btn ${e?"vr-btn-gold":"vr-btn-ghost"}`,i.style.cssText="flex:1;padding:10px;font-size:12px;"),n&&(n.textContent=t?"SFX: ON":"SFX: OFF",n.className=`vr-btn ${t?"vr-btn-gold":"vr-btn-ghost"}`,n.style.cssText="flex:1;padding:10px;font-size:12px;")}showCampaignMap(e,t){this._hideAll(),this._campaignUI||(this._campaignUI=new Bh(this.container,e,t),this.container.addEventListener("campaign-start",i=>this._emit("campaign-start",i.detail)),this.container.addEventListener("campaign-back",()=>this._emit("campaign-back")),this.container.addEventListener("challenge-claim",i=>this._emit("challenge-claim",i.detail)),this.container.addEventListener("challenge-bonus-claim",()=>this._emit("challenge-bonus-claim"))),this._campaignUI.refresh(),this._campaignUI.show()}refreshCampaignUI(){this._campaignUI&&this._campaignUI.refresh()}showHeroesScreen(e,t){this._hideAll(),this._heroesUI||(this._heroesUI=new Wy(this.container,e,t),this.container.addEventListener("heroes-back",()=>this._emit("heroes-back")),this.container.addEventListener("upgrade-purchased",()=>this._emit("upgrade-purchased")),this.container.addEventListener("reward-claimed",i=>this._emit("reward-claimed",i.detail))),this._heroesUI.show()}refreshHeroesUI(){this._heroesUI&&this._heroesUI.refresh()}showCharSelect(e,t){this._hideAll(),this.charSelect.style.display="flex",this.showEntryFeeIndicator(e||!1,t||0)}showShop(e,t){this._hideAll(),this.shopScreen.style.display="flex";const i=e.getCoins(),n=t&&t.connected?` | 🔮 ${t.pyrBalance.toFixed(2)} PYR`:"";document.getElementById("shop-balance").innerHTML=`🪙 <strong>${i.toLocaleString()}</strong> coins${n}`;const s=document.getElementById("shop-characters");s.innerHTML="";for(const o of e.getCharacters()){const l=e.isUnlocked(o.id),c=document.createElement("div");c.className=`vr-card ${l?"vr-card-owned":o.currency==="pyr"?"vr-card-pyr":""}`,c.style.animationDelay=s.children.length*.08+"s",c.innerHTML=`
                <div style="font-size:40px;margin-bottom:8px;">${o.emoji}</div>
                <div class="vr-body" style="font-size:15px;font-weight:800;">${o.name}</div>
                <div class="vr-body" style="font-size:11px;opacity:0.4;margin:4px 0;font-weight:700;">${o.desc}</div>
                ${l?'<span class="vr-badge vr-badge-owned">OWNED</span>':`<span class="vr-badge ${o.currency==="pyr"?"vr-badge-pyr":"vr-badge-coins"}">${o.currency==="pyr"?"🔮 "+o.price+" PYR":"🪙 "+o.price}</span>`}
            `,l||c.addEventListener("click",()=>this._emit("shop-buy",{itemId:o.id,currency:o.currency})),s.appendChild(c)}const r=document.getElementById("shop-boosts");r.innerHTML="";for(const o of e.getBoosts()){const l=e.getInventoryCount(o.id),c=document.createElement("div");c.className=`vr-card ${o.currency==="pyr"?"vr-card-pyr":""}`,c.style.animationDelay=r.children.length*.08+.3+"s",c.innerHTML=`
                <div style="font-size:36px;margin-bottom:8px;">${o.emoji}</div>
                <div class="vr-body" style="font-size:14px;font-weight:800;">${o.name}</div>
                <div class="vr-body" style="font-size:11px;opacity:0.4;margin:4px 0;font-weight:700;">${o.desc}</div>
                <span class="vr-badge ${o.currency==="pyr"?"vr-badge-pyr":"vr-badge-coins"}">${o.currency==="pyr"?"🔮 "+o.price+" PYR":"🪙 "+o.price}</span>
                ${l>0?`<div class="vr-body" style="font-size:10px;color:#44ee66;margin-top:4px;font-weight:800;">x${l} owned</div>`:""}
            `,c.addEventListener("click",()=>this._emit("shop-buy",{itemId:o.id,currency:o.currency})),r.appendChild(c)}}showLeaderboard(e,t,i,n,s){this._hideAll(),this.lbScreen.style.display="flex";const r={};if(i)for(const d of i)r[d.position]=d;const o=document.getElementById("lb-reward-pool");n!=null?(o.style.display="block",o.className="vr-body",o.innerHTML=`
                <div style="display:inline-block;padding:8px 20px;border-radius:10px;background:rgba(194,158,80,0.08);border:1px solid rgba(194,158,80,0.15);">
                    <span style="font-size:10px;opacity:0.4;letter-spacing:1px;text-transform:uppercase;">Reward Pool</span>
                    <span style="font-size:16px;font-weight:800;color:#c9a24e;margin-left:8px;">${n.toFixed(2)} PYR</span>
                </div>
            `):o.style.display="none";const l=document.getElementById("lb-player-status");if(s&&s.position){l.style.display="block",l.className="vr-body";let u=s.milestones.map(p=>{const g=Math.floor(p.progress*100),_=p.claimed?"#5a7a4a":p.claimable?"#c9a24e":"rgba(194,158,80,0.3)",m=p.claimed?"✓ Claimed":p.claimable?`CLAIM ${p.rewardPYR} PYR`:`${g}%`;return`
                    <div class="lb-milestone-row" ${p.claimable?`data-claim-pos="${s.position}" data-claim-ms="${p.label}" style="cursor:pointer;"`:""} style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                        <span style="font-size:10px;width:32px;opacity:0.5;">${p.label}</span>
                        <div style="flex:1;height:6px;border-radius:3px;background:rgba(42,30,18,0.5);overflow:hidden;">
                            <div style="width:${g}%;height:100%;background:${_};border-radius:3px;transition:width 0.3s;"></div>
                        </div>
                        <span style="font-size:10px;font-weight:700;color:${p.claimable?"#c9a24e":p.claimed?"#5a7a4a":"rgba(245,230,200,0.4)"};">${m}</span>
                    </div>
                `}).join("");l.innerHTML=`
                <div style="padding:12px 16px;border-radius:12px;background:rgba(194,158,80,0.05);border:1px solid rgba(194,158,80,0.12);">
                    <div style="font-size:11px;font-weight:800;color:#c9a24e;margin-bottom:8px;">YOUR POSITION: #${s.position} — ${s.daysHeld}D HELD</div>
                    ${u}
                </div>
            `,l.querySelectorAll("[data-claim-pos]").forEach(p=>{p.addEventListener("click",()=>{this._emit("claim-reward",{position:parseInt(p.dataset.claimPos),milestone:p.dataset.claimMs})})})}else l.style.display="none";const c=document.getElementById("lb-entries");c.innerHTML="",e.length===0?c.innerHTML=`
                <div style="text-align:center;padding:40px 20px;" class="vr-body">
                    <div style="font-size:48px;margin-bottom:12px;">🏆</div>
                    <div style="font-size:15px;font-weight:800;opacity:0.5;">No scores yet</div>
                    <div style="font-size:12px;opacity:0.3;margin-top:4px;font-weight:700;">Play a run to set the first record!</div>
                </div>`:e.forEach((d,u)=>{const p=u+1,g=document.createElement("div"),_=u===0?"🥇":u===1?"🥈":u===2?"🥉":`<span style="opacity:0.4;font-size:13px;">${p}</span>`,m=d.txHash?' <span style="font-size:11px;">⛓️</span>':"",f=u<3,v=u<10,x=r[p],y=x?x.daysHeld:0,C=x&&x.nextMilestone?x.nextMilestone.days:null,T=y>=360?"#ff6b35":y>=180?"#c9a24e":y>=90?"#8bc34a":y>=30?"#6aaa4a":"rgba(245,230,200,0.3)";g.className="vr-body",g.style.cssText=`display:flex;align-items:center;padding:10px 12px;margin-bottom:5px;border-radius:12px;font-weight:700;animation:slideUp 0.3s ease-out ${u*.05}s both;background:${f?"rgba(194,158,80,0.06)":"rgba(42,30,18,0.3)"};border:1px solid ${f?"rgba(194,158,80,0.12)":"rgba(194,158,80,0.06)"};`,g.innerHTML=`
                <div style="width:32px;text-align:center;font-size:18px;">${_}</div>
                <div style="flex:1;overflow:hidden;">
                    <div style="font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d.name}${m}${t&&d.isLocal?` <span style="font-size:10px;color:#c0a0e0;font-style:italic;">${t}</span>`:""}</div>
                    <div style="font-size:10px;opacity:0.35;">${d.character||""}</div>
                </div>
                ${v?`
                <div style="width:56px;text-align:center;">
                    <div style="font-size:12px;font-weight:800;color:${T};">${y}D</div>
                    ${C?`<div style="font-size:8px;opacity:0.3;">${C}D next</div>`:y>=360?'<div style="font-size:8px;color:#ff6b35;">LEGEND</div>':""}
                </div>`:""}
                <div style="width:70px;text-align:right;">
                    <div style="font-size:14px;color:#c9a24e;">${d.score.toLocaleString()}</div>
                    <div style="font-size:10px;opacity:0.35;">${d.distance}m</div>
                </div>
            `,c.appendChild(g)});const h=document.getElementById("lb-reward-info");h&&(h.style.display="block",h.className="vr-body",h.innerHTML=`
                <div style="padding:14px 16px;border-radius:12px;background:rgba(42,30,18,0.4);border:1px solid rgba(194,158,80,0.08);">
                    <div style="font-size:10px;font-weight:800;opacity:0.35;letter-spacing:1px;margin-bottom:10px;text-transform:uppercase;">Reward Milestones</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:11px;">
                        <div style="padding:6px 10px;border-radius:8px;background:rgba(106,170,74,0.08);border:1px solid rgba(106,170,74,0.15);">
                            <div style="font-weight:800;color:#6aaa4a;">30 DAYS</div>
                            <div style="opacity:0.4;font-size:10px;">First reward tier</div>
                        </div>
                        <div style="padding:6px 10px;border-radius:8px;background:rgba(139,195,74,0.08);border:1px solid rgba(139,195,74,0.15);">
                            <div style="font-weight:800;color:#8bc34a;">90 DAYS</div>
                            <div style="opacity:0.4;font-size:10px;">2.5x multiplier</div>
                        </div>
                        <div style="padding:6px 10px;border-radius:8px;background:rgba(194,158,80,0.08);border:1px solid rgba(194,158,80,0.15);">
                            <div style="font-weight:800;color:#c9a24e;">180 DAYS</div>
                            <div style="opacity:0.4;font-size:10px;">5x multiplier</div>
                        </div>
                        <div style="padding:6px 10px;border-radius:8px;background:rgba(255,107,53,0.08);border:1px solid rgba(255,107,53,0.15);">
                            <div style="font-weight:800;color:#ff6b35;">360 DAYS</div>
                            <div style="opacity:0.4;font-size:10px;">Legendary tier</div>
                        </div>
                    </div>
                    <div style="font-size:9px;opacity:0.25;margin-top:8px;text-align:center;">Top 10 holders earn PYR rewards. Pool funded by purchases. Position resets on overtake.</div>
                </div>
            `)}updateWalletUI(e,t,i){const n=document.getElementById("btn-connect-wallet"),s=document.getElementById("wallet-info");if(e){n.textContent="Connected",n.style.background="linear-gradient(180deg,#5a7a4a,#3a5a2a)",n.style.borderColor="#7a9a6a",s.style.display="flex";const r=document.getElementById("wallet-address");r&&(r.textContent=t),document.getElementById("wallet-pyr").textContent=i.toFixed(2)+" PYR"}else n.textContent="Connect Wallet",n.style.background="",s.style.display="none"}showChainWriteButton(e){document.getElementById("btn-write-chain").style.display=e?"block":"none"}updateChainStatus(e){const t=document.getElementById("go-chain-status");t.textContent=e,t.style.display=e?"block":"none"}showHUD(){this._hideAll(),this.hud.style.display="block";const e=document.getElementById("hud-campaign-objectives");e&&(e.style.display="none");const t=document.getElementById("hud-lap");t&&(t.style.display="none")}showGameOver(e,t,i,n,s={},r=null,o=[],l=[],c=!1,h=null){this.hud.style.display="none",this.reviveOverlay.style.display="none",this.gameOver.style.display="flex";const d=document.getElementById("hud-campaign-objectives");d&&(d.style.display="none");const u=document.getElementById("go-title");u&&(c?(u.textContent="STAGE COMPLETE!",u.style.color="#6aaa4a",u.style.textShadow="0 0 15px rgba(106,170,74,0.4)"):(u.textContent="FALLEN IN BATTLE",u.style.color="#8b4513",u.style.textShadow="0 0 15px rgba(139,69,19,0.3)"));const p=document.getElementById("go-score");p.textContent=e.toLocaleString(),p.style.display=h?"none":"block",document.getElementById("go-distance").textContent=Math.floor(t)+"m",document.getElementById("go-coins").textContent="🪙 "+i;const g=document.getElementById("go-stats"),_=[];s.maxCombo>0&&_.push(`Max Combo: ${s.maxCombo}`),s.obstaclesDodged>0&&_.push(`Dodged: ${s.obstaclesDodged}`),s.obstaclesSmashed>0&&_.push(`Smashed: ${s.obstaclesSmashed}`),s.maxSpeed>0&&_.push(`Top Speed: ${s.maxSpeed}`),g.innerHTML=_.join(" &middot; ");const m=document.getElementById("go-best");if(r){const x="⭐".repeat(r.stars)+"☆".repeat(3-r.stars);m.innerHTML=`<div style="font-size:28px;margin-bottom:4px;">${x}</div>`+(r.isNew?'<span style="color:#c9a24e;">STAGE COMPLETE!</span>':r.newRecord?'<span style="color:#c9a24e;">NEW RECORD!</span>':`<span style="opacity:0.5;">Best: ${r.stars}/3 ⭐</span>`),m.style.color="#fff"}else e>=n?(m.textContent="NEW RECORD",m.style.color="#c9a24e"):(m.textContent="Best: "+n.toLocaleString(),m.style.color="rgba(194,158,80,0.4)");if(o&&o.length>0){const x=document.createElement("div");x.style.cssText="margin-top:8px;font-size:13px;color:#00ff88;animation:slideUp 0.3s ease-out;",x.className="vr-body",x.textContent=`📋 ${o.length} challenge${o.length>1?"s":""} completed!`,m.parentElement.insertBefore(x,m.nextSibling),setTimeout(()=>x.remove(),1e4)}const f=Math.floor(t/100)+Math.floor(e/500);if(f>0){const x=document.createElement("div");x.style.cssText="margin-top:4px;font-size:12px;color:#c9a24e;animation:slideUp 0.3s ease-out 0.1s both;",x.className="vr-body",x.textContent=`✨ +${f} Star Dust`,m.parentElement.insertBefore(x,m.nextSibling),setTimeout(()=>x.remove(),1e4)}l&&l.length>0&&this._showLootDrop(l,m.parentElement);const v=document.getElementById("go-buttons");if(v){v.innerHTML="";const x="width:100%;margin-bottom:10px;letter-spacing:2px;";if(h){if(c){const C=document.createElement("button");C.className="vr-btn vr-btn-primary",C.style.cssText=x,C.textContent="NEXT STAGE",C.addEventListener("click",()=>this._emit("next-stage")),v.appendChild(C)}else{const C=document.createElement("button");C.className="vr-btn vr-btn-primary",C.style.cssText=x,C.textContent="TRY AGAIN",C.addEventListener("click",()=>this._emit("play")),v.appendChild(C)}const y=document.createElement("button");y.className="vr-btn vr-btn-ghost",y.style.cssText="width:100%;",y.textContent="MENU",y.addEventListener("click",()=>this._emit("menu")),v.appendChild(y)}else{const y=document.createElement("button");y.className="vr-btn vr-btn-primary",y.style.cssText=x,y.textContent="FIGHT AGAIN",y.addEventListener("click",()=>this._emit("play")),v.appendChild(y);const C=document.createElement("button");C.className="vr-btn vr-btn-ghost",C.style.cssText="width:100%;",C.textContent="RETURN TO CAMP",C.addEventListener("click",()=>this._emit("menu")),v.appendChild(C)}}}showPause(){this.pauseOverlay.style.display="flex"}showRevivePrompt(){this.hud.style.display="none",this.reviveOverlay.style.display="flex",document.getElementById("revive-timer").textContent="3"}updateReviveTimer(e){document.getElementById("revive-timer").textContent=Math.ceil(Math.max(0,e))}hideRevivePrompt(){this.reviveOverlay.style.display="none"}updateScore(e){document.getElementById("hud-score").textContent=e.toLocaleString()}hideScore(){document.getElementById("hud-score").style.display="none"}showScore(){document.getElementById("hud-score").style.display="block"}updateLap(e){const t=document.getElementById("hud-lap");t&&(t.style.display="block",t.textContent="LAP "+e)}hideLap(){const e=document.getElementById("hud-lap");e&&(e.style.display="none")}updateDistance(e){document.getElementById("hud-distance").textContent=Math.floor(e)+"m"}updateCoins(e){document.getElementById("hud-coins").textContent="🪙 "+e}updateCombo(e,t){const i=document.getElementById("hud-combo");e>1?(i.style.display="block",i.textContent=`COMBO x${t.toFixed(1)}`):i.style.display="none"}updateHealth(e,t){const i=e/t*100,n=document.getElementById("health-bar-fill"),s=document.getElementById("health-bar-bg");n&&(n.style.width=i+"%",i>60?(n.style.background="linear-gradient(180deg,#7dcc5a 0%,#4a8a2a 100%)",s&&(s.style.animation="none")):i>30?(n.style.background="linear-gradient(180deg,#e8b830 0%,#b08020 100%)",s&&(s.style.animation="none")):(n.style.background="linear-gradient(180deg,#ee4444 0%,#aa2222 100%)",s&&(s.style.animation="pulse 0.8s infinite")))}updateCampaignObjectives(e,t,i,n){const s=document.getElementById("hud-campaign-objectives");if(!s)return;if(!e){s.style.display="none";return}s.style.display="block";const r="color:#6aaa4a;font-weight:700;",o="color:#f5e6c8;",l=t>=e.distance,c=i>=e.coins,h=n>=e.chests;let d=0;l&&(d=1),l&&(c||h)&&(d=2),l&&c&&h&&(d=3);const u="⭐".repeat(d)+"☆".repeat(3-d);let p='<div style="font-size:10px;opacity:0.5;margin-bottom:3px;letter-spacing:1px;">OBJECTIVES</div>';p+=`<div style="font-size:14px;margin-bottom:4px;">${u}</div>`,p+=`<div style="${l?r:o}">Distance: ${Math.floor(t)}m / ${e.distance}m ${l?"✓":""}</div>`,p+=`<div style="${c?r:o}">Coins: ${i} / ${e.coins} ${c?"✓":""}</div>`,p+=`<div style="${h?r:o}">Chests: ${n} / ${e.chests} ${h?"✓":""}</div>`,s.innerHTML=p}showPowerUp(e){const t=document.getElementById("hud-powerup");t.textContent=e.toUpperCase(),t.style.display="block",t.style.opacity="1",setTimeout(()=>{t.style.opacity="0"},1200),setTimeout(()=>{t.style.display="none"},1500)}showMilestone(e){const t=document.getElementById("hud-powerup");t.textContent=`${e}m!`,t.style.color="#c9a24e",t.style.textShadow="0 0 15px rgba(194,158,80,0.5), 0 0 30px rgba(194,158,80,0.2)",t.style.fontSize="30px",t.style.display="block",t.style.opacity="1",setTimeout(()=>{t.style.opacity="0"},1500),setTimeout(()=>{t.style.display="none",t.style.color="#c9a24e",t.style.textShadow="0 0 15px rgba(194,158,80,0.4)",t.style.fontSize="24px"},1800)}showNearMiss(){const e=document.getElementById("hud-nearmiss");e.style.display="block",e.style.opacity="1",setTimeout(()=>{e.style.opacity="0"},600),setTimeout(()=>{e.style.display="none"},800)}showStrikeEffect(){this._strikeEl&&this._strikeEl.remove();const e=document.createElement("div");e.className="vr-title",e.style.cssText="position:absolute;bottom:80px;left:50%;transform:translateX(-50%);pointer-events:none;z-index:18;text-align:center;animation:strikeFlash 1s ease-out forwards;",e.innerHTML='<div style="font-size:16px;color:#c9a24e;text-shadow:0 0 10px rgba(194,158,80,0.6);letter-spacing:3px;padding:6px 20px;border:1px solid rgba(194,158,80,0.3);border-radius:6px;background:rgba(42,30,18,0.5);backdrop-filter:blur(2px);">⚔️ STRIKE</div>',this.hud.parentElement.appendChild(e),this._strikeEl=e,setTimeout(()=>{e.remove(),this._strikeEl=null},1e3)}showChestReward(e){const t=document.createElement("div");t.className="vr-title",t.style.cssText="position:absolute;top:45%;left:50%;transform:translate(-50%,0);font-size:22px;color:#c9a24e;text-shadow:0 0 12px rgba(194,158,80,0.6),0 0 24px rgba(194,158,80,0.2);text-align:center;pointer-events:none;z-index:20;animation:chestRewardFloat 1.2s ease-out forwards;",t.innerHTML=`<div>+${e} &#x1FA99;</div><div style="font-size:14px;color:#8b6914;margin-top:2px;">+${50+e} Score</div>`,this.hud.parentElement.appendChild(t),setTimeout(()=>t.remove(),1200)}flashDamage(){const e=document.getElementById("hud-damage");e.style.borderColor="rgba(232, 76, 61, 0.4)",setTimeout(()=>{e.style.borderColor="transparent"},100)}showBossWarning(e){const t=document.createElement("div");t.className="vr-title",t.style.cssText="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);font-size:42px;color:#8b2020;text-shadow:0 0 20px rgba(139,32,32,0.6),0 0 40px rgba(139,32,32,0.2);text-align:center;pointer-events:none;z-index:20;animation:bossWarn 2.5s ease-out forwards;",t.textContent=e?e.toUpperCase()+" APPROACHES":"TITAN APPROACHES",this.hud.parentElement.appendChild(t),setTimeout(()=>t.remove(),2500),this._bossBar||(this._bossBar=document.createElement("div"),this._bossBar.className="vr-body",this._bossBar.style.cssText="position:absolute;top:65px;left:50%;transform:translateX(-50%);width:360px;text-align:center;z-index:15;",this._bossBar.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;"><div style="font-size:14px;font-weight:800;color:#ff4444;text-shadow:0 0 10px rgba(255,0,0,0.5);letter-spacing:2px;">BOSS ENCOUNTER</div><div id="boss-wave-text" style="font-size:13px;font-weight:800;color:#ff8844;text-shadow:0 0 8px rgba(255,136,68,0.5);letter-spacing:1px;">WAVE 1/4</div></div><div style="width:100%;height:10px;background:rgba(255,0,0,0.15);border-radius:5px;overflow:hidden;border:1px solid rgba(255,68,68,0.3);"><div id="boss-bar-fill" style="width:100%;height:100%;background:linear-gradient(90deg,#ff4444,#ff8800,#8b6914);border-radius:5px;transition:width 0.1s;"></div></div>',this.hud.parentElement.appendChild(this._bossBar)),this._bossBar.style.display="block"}updateBossTimer(e,t,i,n){const s=document.getElementById("boss-bar-fill");s&&(s.style.width=Math.max(0,e/t*100)+"%");const r=document.getElementById("boss-wave-text");if(r&&typeof i=="number"&&typeof n=="number"){const o=Math.min(i+1,n);r.textContent=`WAVE ${o}/${n}`}}showBossDefeated(){this._bossBar&&(this._bossBar.style.display="none");const e=document.createElement("div");e.className="vr-title",e.style.cssText="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;z-index:20;animation:bossDefeat 2s ease-out forwards;",e.innerHTML=`<div style="font-size:42px;color:#c9a24e;text-shadow:0 0 30px rgba(194,158,80,0.8);">BOSS DEFEATED!</div><div style="font-size:22px;color:#8b6914;margin-top:8px;font-family:'Philosopher',sans-serif;font-weight:800;">+500 Score +10 Gems</div>`,this.hud.parentElement.appendChild(e),setTimeout(()=>e.remove(),2e3)}hideBossUI(){this._bossBar&&(this._bossBar.style.display="none")}showBossVignette(){this._bossVignette||(this._bossVignette=document.createElement("div"),this._bossVignette.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:10;background:radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(20,0,0,0.4) 75%, rgba(10,0,0,0.7) 100%);transition:opacity 0.5s;opacity:0;",this.hud.parentElement.appendChild(this._bossVignette),requestAnimationFrame(()=>{this._bossVignette&&(this._bossVignette.style.opacity="1")}))}hideBossVignette(){if(!this._bossVignette)return;this._bossVignette.style.opacity="0";const e=this._bossVignette;setTimeout(()=>{e.remove()},500),this._bossVignette=null}showMiniGameStart(e,t,i){const n=document.createElement("div");n.className="vr-title",n.style.cssText="position:absolute;top:25%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;z-index:20;animation:bossWarn 2s ease-out forwards;",n.innerHTML=`<div style="font-size:48px;">${t}</div><div style="font-size:28px;color:#c9a24e;text-shadow:0 0 20px rgba(194,158,80,0.6);margin-top:8px;">${e}</div><div style="font-size:14px;opacity:0.6;margin-top:4px;" class="vr-body">${i}</div>`,this.hud.parentElement.appendChild(n),setTimeout(()=>n.remove(),2e3),this._miniGameBar||(this._miniGameBar=document.createElement("div"),this._miniGameBar.className="vr-body",this._miniGameBar.style.cssText="position:absolute;top:70px;left:50%;transform:translateX(-50%);width:300px;text-align:center;z-index:15;",this._miniGameBar.innerHTML=`
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
            `,this.hud.parentElement.appendChild(this._airMeter)),this._airMeter.style.display="block";const t=document.getElementById("air-bar-fill");t&&(t.style.width=Math.max(0,e)+"%",t.style.background=e<30?"linear-gradient(90deg,#ff4444,#cc2222)":"linear-gradient(90deg,#44bbff,#2288cc)")}showAbilityActivated(e){const t=document.createElement("div");t.textContent=e.toUpperCase(),t.style.cssText="position:absolute;top:30%;left:50%;transform:translateX(-50%);font-family:Cinzel,serif;font-size:24px;font-weight:900;color:#c9a24e;text-shadow:0 0 20px rgba(194,158,80,0.6),0 2px 4px rgba(0,0,0,0.8);pointer-events:none;z-index:50;animation:strikeFlash 1.2s ease-out forwards;",this.hud.appendChild(t),setTimeout(()=>t.remove(),1200)}showAbilityHUD(e,t){const i=document.getElementById("hud-ability");i.style.display="block",document.getElementById("hud-ability-icon").textContent=e,document.getElementById("hud-ability-label").textContent=t,document.getElementById("hud-ability-cd").style.height="0%"}updateAbilityCooldown(e){var n;const t=document.getElementById("hud-ability-cd");t.style.height=Math.min(100,e*100)+"%";const i=(n=document.getElementById("hud-ability"))==null?void 0:n.querySelector("div");i&&(i.style.borderColor=e<=0?"rgba(194,158,80,0.6)":"rgba(255,180,80,0.15)")}flashAbilityActive(){const e=document.getElementById("hud-ability");if(!e)return;const t=e.querySelector("div");t&&(t.style.borderColor="#c9a24e",t.style.boxShadow="0 0 20px rgba(194,158,80,0.5)")}resetAbilityFlash(){const e=document.getElementById("hud-ability");if(!e)return;const t=e.querySelector("div");t&&(t.style.boxShadow="none")}showEquipmentScreen(e){this._hideAll(),this._equipmentUI||(this._equipmentUI=new qy(this.container,e),this.container.addEventListener("equipment-back",()=>this._emit("equipment-back")),this.container.addEventListener("equipment-changed",()=>this._emit("equipment-changed"))),this._equipmentUI.show()}showCosmeticsScreen(e){this._hideAll(),this._cosmeticsUI||(this._cosmeticsUI=new Xy(this.container,e),this.container.addEventListener("cosmetics-back",()=>this._emit("cosmetics-back")),this.container.addEventListener("cosmetic-equipped",t=>this._emit("cosmetic-equipped",t.detail))),this._cosmeticsUI.show()}_showLootDrop(e,t){const i=document.createElement("div");i.style.cssText="margin-top:12px;text-align:center;",i.innerHTML=`
            <div class="vr-section-title" style="font-size:11px;margin-bottom:8px;animation:slideUp 0.3s ease-out 0.3s both;">LOOT FOUND</div>
            <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;"></div>
        `;const n=i.querySelector("div:last-child");e.forEach((s,r)=>{var h,d;const o=((h=pi[s.rarity])==null?void 0:h.color)||"#a0a0a0",l=((d=pi[s.rarity])==null?void 0:d.label)||s.rarity,c=document.createElement("div");c.style.cssText=`
                padding:10px 14px;border-radius:8px;text-align:center;
                background:rgba(42,30,18,0.7);border:2px solid ${o};
                box-shadow:0 0 15px ${o}40, 0 0 30px ${o}15;
                animation:popIn 0.5s ease-out ${.4+r*.15}s both;
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
        `,this.container.appendChild(n),this._tutorialOverlay=n,document.getElementById("btn-skip-tutorial").addEventListener("click",()=>{this._emit("skip-tutorial")})}hideTutorialStep(){this._tutorialOverlay&&(this._tutorialOverlay.remove(),this._tutorialOverlay=null)}showPoolNotice(){const e=document.createElement("div");e.id="pool-notice-overlay",e.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(10,6,2,0.85);z-index:60;animation:popIn 0.35s ease-out;",e.innerHTML=`
            <div class="vr-panel" style="padding:32px 36px;text-align:center;max-width:420px;">
                <div style="font-size:42px;margin-bottom:10px;">🏆</div>
                <h2 class="vr-title" style="font-size:22px;color:#c9a24e;margin-bottom:6px;">HALL OF GLORY</h2>
                <div class="vr-divider"></div>
                <div class="vr-body" style="font-size:13px;line-height:1.7;margin:14px 0;opacity:0.7;">
                    Compete for the <span style="color:#c9a24e;font-weight:800;">Top 10</span> leaderboard and earn <span style="color:#c9a24e;font-weight:800;">PYR rewards</span> for holding your position.
                </div>
                <div class="vr-body" style="font-size:13px;line-height:1.7;margin-bottom:14px;opacity:0.7;">
                    Each endless run costs <span style="color:#c9a24e;font-weight:800;">1 PYR</span> to enter. Your fee funds the reward pool that pays out to top holders at <span style="color:#c9a24e;">30, 90, 180,</span> and <span style="color:#ff6b35;">360 day</span> milestones.
                </div>
                <div style="padding:10px 16px;border-radius:10px;background:rgba(194,158,80,0.06);border:1px solid rgba(194,158,80,0.1);margin-bottom:18px;">
                    <div class="vr-body" style="font-size:11px;opacity:0.4;">The longer you hold a top position, the more you earn.</div>
                    <div class="vr-body" style="font-size:11px;opacity:0.4;margin-top:2px;">If players keep overtaking each other — no one pays out.</div>
                </div>
                <button id="btn-pool-notice-ok" class="vr-btn vr-btn-primary" style="width:100%;letter-spacing:2px;">UNDERSTOOD</button>
            </div>
        `,this.container.appendChild(e),document.getElementById("btn-pool-notice-ok").addEventListener("click",()=>{e.remove()})}showEntryFeeError(e,t){const i=document.createElement("div");i.id="entry-fee-error",i.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(10,6,2,0.8);z-index:60;animation:popIn 0.3s ease-out;",i.innerHTML=`
            <div class="vr-panel" style="padding:28px 36px;text-align:center;max-width:360px;">
                <div style="font-size:36px;margin-bottom:10px;">🪙</div>
                <h2 class="vr-title" style="font-size:20px;color:#8b4513;margin-bottom:8px;">INSUFFICIENT PYR</h2>
                <div class="vr-divider"></div>
                <div class="vr-body" style="font-size:13px;margin:14px 0;opacity:0.6;">
                    Each endless run requires <span style="color:#c9a24e;font-weight:800;">${e} PYR</span> entry fee.<br>
                    Your balance: <span style="color:#c9a24e;font-weight:800;">${t.toFixed(2)} PYR</span>
                </div>
                <button id="btn-fee-error-ok" class="vr-btn vr-btn-ghost" style="width:100%;">OK</button>
            </div>
        `,this.container.appendChild(i),document.getElementById("btn-fee-error-ok").addEventListener("click",()=>{i.remove()})}showEntryFeeIndicator(e,t){let i=document.getElementById("entry-fee-indicator");if(!i){i=document.createElement("div"),i.id="entry-fee-indicator",i.className="vr-body",i.style.cssText="text-align:center;margin-bottom:12px;font-size:12px;";const n=document.getElementById("btn-start-run");n&&n.parentElement.insertBefore(i,n)}if(e){const n=t>=1;i.style.display="block",i.innerHTML=`<span style="color:${n?"#c9a24e":"#cc4444"};font-weight:700;">1 PYR Entry Fee</span> <span style="opacity:0.4;">(${t.toFixed(2)} PYR available)</span>`}else i.style.display="block",i.innerHTML='<span style="opacity:0.35;">Connect wallet to compete for PYR rewards</span>'}on(e,t){this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t)}_emit(e,t){(this._callbacks[e]||[]).forEach(i=>i(t))}}function Gh(a,e){if(e===Xu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Qo||e===pd){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=t.count-2,n=[];if(e===Qo)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class Yy extends Un{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qy(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new px(t)})}load(e,t,i,n){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=Js.extractUrlBase(e);r=Js.resolveURL(c,this.path)}else r=Js.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new dr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const r={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qd){try{r[Ge.KHR_BINARY_GLTF]=new fx(e)}catch(d){n&&n(d);return}s=JSON.parse(r[Ge.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ax(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case Ge.KHR_MATERIALS_UNLIT:r[d]=new Jy;break;case Ge.KHR_DRACO_MESH_COMPRESSION:r[d]=new mx(s,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:r[d]=new gx;break;case Ge.KHR_MESH_QUANTIZATION:r[d]=new _x;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function jy(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ky{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ce(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Nt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new yr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new si(h),c.distance=d;break;case"spot":c=new iv(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class Jy{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return ri}extendParams(e,t,i){const n=[];e.color=new ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Nt),e.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,gt))}return Promise.all(n)}}class Zy{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Qy{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(o,o)}return Promise.all(s)}}class ex{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class tx{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class ix{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=n.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Nt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",r.sheenColorTexture,gt)),r.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class nx{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class sx{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new ce().setRGB(o[0],o[1],o[2],Nt),Promise.all(s)}}class ax{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class rx{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new ce().setRGB(o[0],o[1],o[2],Nt),r.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",r.specularColorTexture,gt)),Promise.all(s)}}class ox{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class lx{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class cx{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class hx{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=n.images[r.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,r.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dx{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=n.images[r.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,r.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ux{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,d=n.byteStride,u=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,u,n.mode,n.filter).then(function(p){return p.buffer}):r.ready.then(function(){const p=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(p),h,d,u,n.mode,n.filter),p})})}else return null}}class px{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==ii.TRIANGLES&&c.mode!==ii.TRIANGLE_STRIP&&c.mode!==ii.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=i.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,p=[];for(const g of d){const _=new Ue,m=new R,f=new Ft,v=new R(1,1,1),x=new F_(g.geometry,g.material,u);for(let y=0;y<u;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,_.compose(m,f,v));for(const y in l)if(y==="_COLOR_0"){const C=l[y];x.instanceColor=new il(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);dt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Qd="glTF",Vs=12,Vh={JSON:1313821514,BIN:5130562};class fx{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Vs,s=new DataView(e,Vs);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Vh.JSON){const c=new Uint8Array(e,Vs+r,o);this.content=i.decode(c)}else if(l===Vh.BIN){const c=Vs+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const h in r){const d=rl[h]||h.toLowerCase();o[d]=r[h]}for(const h in e.attributes){const d=rl[h]||h.toLowerCase();if(r[h]!==void 0){const u=i.accessors[e.attributes[h]],p=fs[u.componentType];c[d]=p.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){n.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(p)},o,c,Nt,u)})})}}class gx{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _x{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class eu extends sa{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let r=0;r!==n;r++)t[r]=i[s+r];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,d=(i-t)/h,u=d*d,p=u*d,g=e*c,_=g-c,m=-2*p+3*u,f=p-u,v=1-m,x=f-u+d;for(let y=0;y!==o;y++){const C=r[_+y+o],T=r[_+y+l]*h,A=r[g+y+o],P=r[g+y]*h;s[y]=v*C+x*T+m*A+f*P}return s}}const vx=new Ft;class yx extends eu{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return vx.fromArray(s).normalize().toArray(s),s}}const ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wh={9728:Ht,9729:Kt,9984:td,9985:ja,9986:Ws,9987:zi},qh={33071:hn,33648:sr,10497:Vt},oo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},on={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xx={CUBICSPLINE:void 0,LINEAR:ta,STEP:ea},lo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bx(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),a.DefaultMaterial}function wn(a,e,t){for(const i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Bi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sx(a,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(i){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):a.attributes.position;r.push(u)}if(n){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):a.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):a.attributes.color;l.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return i&&(a.morphAttributes.position=h),n&&(a.morphAttributes.normal=d),s&&(a.morphAttributes.color=u),a.morphTargetsRelative=!0,a})}function Mx(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wx(a){let e;const t=a.extensions&&a.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+co(t.attributes):e=a.indices+":"+co(a.attributes)+":"+a.mode,a.targets!==void 0)for(let i=0,n=a.targets.length;i<n;i++)e+=":"+co(a.targets[i]);return e}function co(a){let e="";const t=Object.keys(a).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+a[t[i]]+";";return e}function ol(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ex(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Tx=new Ue;class Ax{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&r<98?this.textureLoader=new Q_(this.options.manager):this.textureLoader=new rv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){const o={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};return wn(s,o,n),Bi(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const r=e[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,h]of r.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,r){i.load(Js.resolveURL(t.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const r=oo[n.type],o=fs[n.componentType],l=n.normalized===!0,c=new o(n.count*r);return Promise.resolve(new Fe(c,r,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=oo[n.type],c=fs[n.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=n.byteOffset||0,p=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let _,m;if(p&&p!==d){const f=Math.floor(u/p),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+f+":"+n.count;let x=t.cache.get(v);x||(_=new c(o,f*p,n.count*p/h),x=new U_(_,p/h),t.cache.add(v,x)),m=new wl(x,l,u%p/h,g)}else o===null?_=new c(n.count*l):_=new c(o,u,n.count*l),m=new Fe(_,l,g);if(n.sparse!==void 0){const f=oo.SCALAR,v=fs[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,C=new v(r[1],x,n.sparse.count*f),T=new c(r[2],y,n.sparse.count*l);o!==null&&(m=new Fe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=C.length;A<P;A++){const w=C[A];if(m.setX(w,T[A*l]),l>=2&&m.setY(w,T[A*l+1]),l>=3&&m.setZ(w,T[A*l+2]),l>=4&&m.setW(w,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=i.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const n=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(s.samplers||{})[r.sampler]||{};return h.magFilter=Wh[u.magFilter]||Kt,h.minFilter=Wh[u.minFilter]||zi,h.wrapS=qh[u.wrapS]||Vt,h.wrapT=qh[u.wrapT]||Vt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==Kt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=n.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:r.mimeType});return l=o.createObjectURL(u),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Mt(_);m.needsUpdate=!0,u(m)}),t.load(Js.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Bi(d,r),d.userData.mimeType=r.mimeType||Ex(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return n!==void 0&&(r.colorSpace=n),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Nd,wi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ud,wi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||r){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ye}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const d=n[Ge.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new ce(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Nt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,gt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=jt);const h=s.alphaMode||lo.OPAQUE;if(h===lo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===lo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==ri&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Me(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==ri&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==ri){const d=s.emissiveFactor;o.emissive=new ce().setRGB(d[0],d[1],d[2],Nt)}return s.emissiveTexture!==void 0&&r!==ri&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,gt)),Promise.all(c).then(function(){const d=new r(o);return s.name&&(d.name=s.name),Bi(d,s),t.associations.set(d,{materials:e}),s.extensions&&wn(n,d,s),d})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Xh(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=wx(c),d=n[h];if(d)r.push(d.promise);else{let u;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Xh(new pt,c,t),n[h]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?bx(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=r[p];let f;const v=c[p];if(m.mode===ii.TRIANGLES||m.mode===ii.TRIANGLE_STRIP||m.mode===ii.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new k_(_,v):new te(_,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===ii.TRIANGLE_STRIP?f.geometry=Gh(f.geometry,pd):m.mode===ii.TRIANGLE_FAN&&(f.geometry=Gh(f.geometry,Qo));else if(m.mode===ii.LINES)f=new z_(_,v);else if(m.mode===ii.LINE_STRIP)f=new Tl(_,v);else if(m.mode===ii.LINE_LOOP)f=new H_(_,v);else if(m.mode===ii.POINTS)f=new Rn(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Mx(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Bi(f,s),m.extensions&&wn(n,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&wn(n,d[0],s),d[0];const u=new bt;s.extensions&&wn(n,u,s),t.associations.set(u,{meshes:e});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Bt(yp.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new mr(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Bi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),r=n,o=[],l=[];for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d){o.push(d);const u=new Ue;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new El(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,r=[],o=[],l=[],c=[],h=[];for(let d=0,u=n.channels.length;d<u;d++){const p=n.channels[d],g=n.samplers[p.sampler],_=p.target,m=_.node,f=n.parameters!==void 0?n.parameters[g.input]:g.input,v=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],p=d[1],g=d[2],_=d[3],m=d[4],f=[];for(let v=0,x=u.length;v<x;v++){const y=u[v],C=p[v],T=g[v],A=_[v],P=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const w=i._createAnimationTracks(y,C,T,A,P);if(w)for(let S=0;S<w.length;S++)f.push(w[S])}return new sl(s,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),r})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),r=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)r.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(u,Tx)});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Dd:c.length>1?h=new bt:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=r),Bi(h,s),s.extensions&&wn(i,h,s),s.matrix!==void 0){const d=new Ue;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new bt;i.name&&(s.name=n.createUniqueName(i.name)),Bi(s,i),i.extensions&&wn(t,s,i);const r=i.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(n.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++)s.add(l[h]);const c=h=>{const d=new Map;for(const[u,p]of n.associations)(u instanceof wi||u instanceof Mt)&&d.set(u,p);return h.traverse(u=>{const p=n.associations.get(u);p!=null&&d.set(u,p)}),d};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){const r=[],o=e.name?e.name:e.uuid,l=[];on[s.path]===on.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(on[s.path]){case on.weights:c=Ss;break;case on.rotation:c=Ms;break;case on.position:case on.scale:c=ws;break;default:switch(i.itemSize){case 1:c=Ss;break;case 2:case 3:default:c=ws;break}break}const h=n.interpolation!==void 0?xx[n.interpolation]:ta,d=this._getArrayFromAccessor(i);for(let u=0,p=l.length;u<p;u++){const g=new c(l[u]+"."+on[s.path],t.array,d,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ol(t.constructor),n=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof Ms?yx:eu;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Cx(a,e,t){const i=e.attributes,n=new xi;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){const h=ol(fs[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new R,l=new R;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const _=ol(fs[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}a.boundingBox=n;const r=new Ti;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,a.boundingSphere=r}function Xh(a,e,t){const i=e.attributes,n=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in i){const o=rl[r]||r.toLowerCase();o in a.attributes||n.push(s(i[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});n.push(r)}return Ve.workingColorSpace!==Nt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),Bi(a,e),Cx(a,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Sx(a,e.targets,t):a})}const ho=new WeakMap;class Rx extends Un{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const s=new dr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,t,n)},i,n)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,gt,i).catch(i)}decodeDracoFile(e,t,i,n,s=Nt,r=()=>{}){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(r)}decodeGeometry(e,t){const i=JSON.stringify(t);if(ho.has(e)){const l=ho.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(s,r).then(l=>(n=l,new Promise((c,h)=>{n._callbacks[s]={resolve:c,reject:h},n.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),ho.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new pt;e.index&&t.setIndex(new Fe(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],s=n.name,r=n.array,o=n.itemSize,l=new Fe(r,o);s==="color"&&(this._assignVertexColorSpace(l,n.vertexColorSpace),l.normalized=!(r instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==gt)return;const i=new ce;for(let n=0,s=e.count;n<s;n++)i.fromBufferAttribute(e,n),Ve.toWorkingColorSpace(i,gt),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new dr(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(e,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=Ix.toString(),r=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const r=s.data;switch(r.type){case"decode":n._callbacks[r.id].resolve(r);break;case"error":n._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Ix(){let a,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(h){a.onModuleLoaded=function(d){h({draco:d})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const d=h.draco,u=new d.Decoder;try{const p=t(d,u,new Int8Array(l),c),g=p.attributes.map(_=>_.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:o.id,error:p.message})}finally{d.destroy(u)}});break}};function t(r,o,l,c){const h=c.attributeIDs,d=c.attributeTypes;let u,p;const g=o.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)u=new r.Mesh,p=o.DecodeArrayToMesh(l,l.byteLength,u);else if(g===r.POINT_CLOUD)u=new r.PointCloud,p=o.DecodeArrayToPointCloud(l,l.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const _={index:null,attributes:[]};for(const m in h){const f=self[d[m]];let v,x;if(c.useUniqueIDs)x=h[m],v=o.GetAttributeByUniqueId(u,x);else{if(x=o.GetAttributeId(u,r[h[m]]),x===-1)continue;v=o.GetAttribute(u,x)}const y=n(r,o,u,m,f,v);m==="color"&&(y.vertexColorSpace=c.vertexColorSpace),_.attributes.push(y)}return g===r.TRIANGULAR_MESH&&(_.index=i(r,o,u)),r.destroy(u),_}function i(r,o,l){const h=l.num_faces()*3,d=h*4,u=r._malloc(d);o.GetTrianglesUInt32Array(l,d,u);const p=new Uint32Array(r.HEAPF32.buffer,u,h).slice();return r._free(u),{array:p,itemSize:1}}function n(r,o,l,c,h,d){const u=d.num_components(),g=l.num_points()*u,_=g*h.BYTES_PER_ELEMENT,m=s(r,h),f=r._malloc(_);o.GetAttributeDataArrayForAllPoints(l,d,m,_,f);const v=new h(r.HEAPF32.buffer,f,g).slice();return r._free(f),{name:c,array:v,itemSize:u}}function s(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}function $a(a){const e=a.clone(!0);return e.traverse(t=>{t.isMesh&&t.material&&(t.material=Array.isArray(t.material)?t.material.map(i=>i.clone()):t.material.clone())}),e}const Ya=Math.PI/180;new Ft().setFromAxisAngle(new R(0,0,1),60*Ya),new Ft().setFromAxisAngle(new R(0,0,1),-60*Ya),new Ft().setFromAxisAngle(new R(1,0,0),5*Ya),new Ft().setFromAxisAngle(new R(1,0,0),5*Ya);class Px{constructor(){this.loader=new Yy;const e=new Rx;e.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),this.loader.setDRACOLoader(e),this.knight=null,this.barbarian=null,this.characters={},this.animations=new Map,this.obstacles=new Map,this.scenery=new Map,this.environment=new Map,this.pickups=new Map,this.progress=null}_loadFile(e){return new Promise((t,i)=>{this.loader.load(e,t,void 0,i)})}async load(){const e=[{path:"assets/animations/Rig_Medium_MovementBasic.glb"},{path:"assets/animations/Rig_Medium_MovementAdvanced.glb"},{path:"assets/animations/Rig_Medium_CombatMelee.glb"},{path:"assets/animations/Rig_Medium_General.glb"}],t=["barrel_large","barrel_small","crate_large","crate_small","column","pillar","pillar_decorated","barrier","rocks","chest"],i=["torch_lit","banner_red","banner_blue","pillar_decorated","coin"],n=["Tree_1_B_Color4","Tree_2_B_Color4","Tree_6_B_Color4","Tree_Bare_1_B_Color4","Bush_2_E_Color4","Bush_3_B_Color4","Bush_4_B_Color4","Rock_1_E_Color4","Rock_3_B_Color4","Rock_4_B_Color4","Rock_5_E_Color4","Grass_1_A_Color4","Grass_2_A_Color4"],s=["potion_large_red","potion_large_blue","potion_large_green","potion_large_orange","shield_badge"],r=[];let o=0;const l=()=>{o++,this.progress&&this.progress(o/r.length)};r.push(this._loadFile("assets/characters/Knight.glb").then(c=>{this.knight=c,this.characters.knight=c,l()})),r.push(this._loadFile("assets/characters/Barbarian.glb").then(c=>{this.barbarian=c,this.characters.barbarian=c,l()}));for(const c of e)r.push(this._loadFile(c.path).then(h=>{for(const d of h.animations)this.animations.set(d.name,d);l()}));for(const c of t)r.push(this._loadFile(`assets/obstacles/${c}.gltf`).then(h=>{this.obstacles.set(c,h.scene),l()}));for(const c of i)r.push(this._loadFile(`assets/scenery/${c}.gltf`).then(h=>{this.scenery.set(c,h.scene),l()}));for(const c of n)r.push(this._loadFile(`assets/environment/${c}.gltf`).then(h=>{this.environment.set(c,h.scene),l()}));for(const c of s)r.push(this._loadFile(`assets/pickups/${c}.gltf`).then(h=>{this.pickups.set(c,h.scene),l()}));await Promise.all(r)}getObstacle(e){const t=this.obstacles.get(e);if(!t)throw new Error(`Obstacle not found: ${e}`);return $a(t)}getScenery(e){const t=this.scenery.get(e);if(!t)throw new Error(`Scenery not found: ${e}`);return $a(t)}getEnvironment(e){const t=this.environment.get(e);if(!t)throw new Error(`Environment not found: ${e}`);return $a(t)}getPickup(e){const t=this.pickups.get(e);if(!t)throw new Error(`Pickup not found: ${e}`);return $a(t)}}const Rt=new D_({antialias:!1,powerPreference:"high-performance"});Rt.setSize(window.innerWidth,window.innerHeight);Rt.setPixelRatio(Math.min(window.devicePixelRatio,2));Rt.shadowMap.enabled=!0;Rt.shadowMap.type=Jh;Rt.toneMapping=Qh;Rt.toneMappingExposure=.95;Rt.outputColorSpace=gt;document.body.appendChild(Rt.domElement);const ht=new L_;ht.background=new ce(1706544);ht.fog=new Ml(2756672,.008);const Dx=new fi(250,32,16),ns=new _t({side:zt,fog:!1,depthWrite:!1,uniforms:{topColor:{value:new ce(657968)},midColor:{value:new ce(4857984)},horizonColor:{value:new ce(16736304)},bottomColor:{value:new ce(16752720)},uTime:{value:0}},vertexShader:`
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
    `}),tu=new te(Dx,ns);ht.add(tu);const oa=150,la=new pt,ir=new Float32Array(oa*3),iu=new Float32Array(oa),nu=new Float32Array(oa),su=new Float32Array(oa);for(let a=0;a<oa;a++)ir[a*3]=(Math.random()-.5)*40,ir[a*3+1]=Math.random()*12,ir[a*3+2]=(Math.random()-.5)*80,iu[a]=Math.random()*Math.PI*2,nu[a]=.5+Math.random()*2,su[a]=1.5+Math.random()*4;la.setAttribute("position",new Fe(ir,3));la.setAttribute("aPhase",new Fe(iu,1));la.setAttribute("aSpeed",new Fe(nu,1));la.setAttribute("size",new Fe(su,1));const au=new _t({transparent:!0,depthWrite:!1,fog:!1,blending:Zs,uniforms:{uTime:{value:0}},vertexShader:`
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
    `}),ru=new Rn(la,au);ht.add(ru);const Vi=80,Ts=new pt,Lt=new Float32Array(Vi*3),Fi=new Float32Array(Vi),Yt=new Float32Array(Vi*3),ou=new Float32Array(Vi);let es=0;for(let a=0;a<Vi;a++)Lt[a*3]=0,Lt[a*3+1]=-100,Lt[a*3+2]=0,Fi[a]=0,ou[a]=2+Math.random()*3;Ts.setAttribute("position",new Fe(Lt,3));Ts.setAttribute("aAlpha",new Fe(Fi,1));Ts.setAttribute("size",new Fe(ou,1));const ll=new _t({transparent:!0,depthWrite:!1,fog:!1,blending:Zs,uniforms:{uColor1:{value:new R(1,.5,.1)},uColor2:{value:new R(1,.85,.3)}},vertexShader:`
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
    `}),Lx=new Rn(Ts,ll);ht.add(Lx);const Dn=200,In=new pt,ni=new Float32Array(Dn*3),os=new Float32Array(Dn),Pl=new Float32Array(Dn),ts=new Float32Array(Dn*3);for(let a=0;a<Dn;a++)ni[a*3]=(Math.random()-.5)*40,ni[a*3+1]=Math.random()*15,ni[a*3+2]=(Math.random()-.5)*60,os[a]=0,Pl[a]=1;In.setAttribute("position",new Fe(ni,3));In.setAttribute("aAlpha",new Fe(os,1));In.setAttribute("size",new Fe(Pl,1));const lu=new _t({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uColor:{value:new R(1,1,1)}},vertexShader:`
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
    `}),cu=new Rn(In,lu);ht.add(cu);const Ux={roman:null,forest:{color:[.6,.7,.9],velY:-8,velX:1,velZ:.5,size:1.5,alpha:.3,density:.7},desert:{color:[.9,.8,.5],velY:-.5,velX:4,velZ:2,size:2,alpha:.25,density:.5},lava:{color:[1,.4,.1],velY:2,velX:.5,velZ:.3,size:2.5,alpha:.5,density:.4},snow:{color:[.95,.95,1],velY:-2,velX:.8,velZ:.3,size:2,alpha:.5,density:.6}};let uo=null;const $h={roman:{sun:{color:16773328,intensity:1.4},fill:{color:16752736,intensity:.2},rim:{color:16764040,intensity:.25},hemi:{sky:13680800,ground:8413248,intensity:1},ambient:{color:16771276,intensity:.65},bloom:{strength:.35,threshold:.8},exposure:.9},forest:{sun:{color:13166752,intensity:1},fill:{color:6332480,intensity:.18},rim:{color:8965256,intensity:.2},hemi:{sky:8960904,ground:4214832,intensity:1.1},ambient:{color:9488528,intensity:.7},bloom:{strength:.25,threshold:.82},exposure:.85},desert:{sun:{color:16772829,intensity:1.8},fill:{color:16764040,intensity:.25},rim:{color:16768426,intensity:.22},hemi:{sky:15786176,ground:10518592,intensity:.95},ambient:{color:16773328,intensity:.75},bloom:{strength:.4,threshold:.75},exposure:.95},lava:{sun:{color:16755302,intensity:1.8},fill:{color:16746547,intensity:.5},rim:{color:16737826,intensity:.5},hemi:{sky:13404228,ground:6702114,intensity:1.2},ambient:{color:16755302,intensity:.95},bloom:{strength:.4,threshold:.7},exposure:1.05},snow:{sun:{color:13161712,intensity:.9},fill:{color:8952268,intensity:.2},rim:{color:11189230,intensity:.3},hemi:{sky:12636392,ground:6318208,intensity:1.1},ambient:{color:13688304,intensity:.75},bloom:{strength:.3,threshold:.8},exposure:.88}},Yh={roman:{top:657968,mid:4857984,horizon:16736304,bottom:16752720},forest:{top:662026,mid:2773040,horizon:8965188,bottom:11197798},desert:{top:1709320,mid:6967344,horizon:16755268,bottom:16764040},lava:{top:3807232,mid:9060384,horizon:16742195,bottom:16755302},snow:{top:657952,mid:3162208,horizon:8952251,bottom:11189213}},At=new ce,jh=new ce,pn=new Bt(60,window.innerWidth/window.innerHeight,.1,300),$s=new ev(11587824,8413248,1);ht.add($s);const nr=new av(16777215,.65);ht.add(nr);const St=new yr(16773328,1.4);St.position.set(15,35,15);St.castShadow=!0;St.shadow.mapSize.set(2048,2048);St.shadow.camera.near=.5;St.shadow.camera.far=120;St.shadow.camera.left=-25;St.shadow.camera.right=25;St.shadow.camera.top=40;St.shadow.camera.bottom=-25;St.shadow.bias=-.001;St.shadow.normalBias=.02;ht.add(St);ht.add(St.target);const ls=new yr(16752736,.2);ls.position.set(-10,8,-10);ht.add(ls);const cs=new yr(11193599,.25);cs.position.set(0,5,-20);ht.add(cs);const Is=new wv(Rt);Is.addPass(new Ev(ht,pn));const hs=new Es(new Me(window.innerWidth/2,window.innerHeight/2),.25,.4,.85);Is.addPass(hs);const Dl=new Gd(Av);Dl.uniforms.resolution.value.set(1/(window.innerWidth*Rt.getPixelRatio()),1/(window.innerHeight*Rt.getPixelRatio()));Is.addPass(Dl);const cl=new $y(document.getElementById("ui")),ca=document.createElement("div");ca.id="loading-screen";ca.style.cssText="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(ellipse at 50% 20%,#2a1e12 0%,#1a1208 35%,#0e0a04 100%);z-index:100;font-family:Cinzel,serif;color:#e8dcc8;";ca.innerHTML=`
    <h1 style="font-size:48px;font-weight:900;margin-bottom:8px;color:#c9a24e;text-shadow:0 0 20px rgba(194,158,80,0.3);">VULCAN RUNNER</h1>
    <p style="font-size:14px;opacity:0.6;margin-bottom:30px;font-family:Philosopher,sans-serif;">Forging the arena...</p>
    <div style="width:300px;height:6px;background:rgba(194,158,80,0.15);border-radius:3px;overflow:hidden;">
        <div id="load-bar" style="width:0%;height:100%;background:linear-gradient(90deg,#c9a24e,#8b6914);border-radius:3px;transition:width 0.15s;"></div>
    </div>
    <div id="load-pct" style="margin-top:10px;font-size:12px;opacity:0.5;font-family:Philosopher,sans-serif;">0%</div>
`;document.getElementById("ui").appendChild(ca);cl.menu.style.display="none";const hl=new Px;hl.progress=a=>{document.getElementById("load-bar").style.width=a*100+"%",document.getElementById("load-pct").textContent=Math.floor(a*100)+"%"};const hu=new Wd;hu.eagerPreload("music_menu.mp3","music_gameplay.mp3");let ke;const po=60,Nx=78;hl.load().then(()=>{ke=new Vy(ht,pn,cl,hl,hu),Rt.compile(ht,pn),Is.render(),ca.style.display="none",cl.menu.style.display="flex",du()}).catch(a=>{console.error("Asset loading failed:",a),document.getElementById("load-pct").textContent="Error loading assets!"});window.addEventListener("resize",()=>{const a=window.innerWidth,e=window.innerHeight;pn.aspect=a/e,pn.updateProjectionMatrix(),Rt.setSize(a,e),Is.setSize(a,e),hs.setSize(a,e),Dl.uniforms.resolution.value.set(1/(a*Rt.getPixelRatio()),1/(e*Rt.getPixelRatio()))});const kx=new Fd;let fo=0,mo=0;function du(){requestAnimationFrame(du);const a=Math.min(kx.getDelta(),.05);if(fo+=a,ke&&ke.update(a),ns.uniforms.uTime.value=fo,au.uniforms.uTime.value=fo,ke){const e=ke.runner?Math.max(0,(ke.runner.runSpeed-16)/14):0,t=ke.state===1&&ke.runner?po+(Nx-po)*e:po;pn.fov+=(t-pn.fov)*a*3,pn.updateProjectionMatrix(),ke._screenFlash&&(ke._screenFlash.timer-=a,ke._screenFlash.timer<=0&&(ke._screenFlash=null))}if(ke&&ke.runner){const e=ke.runner.position.z,t=ke.runner.position.x;if(St.position.z=e+15,St.target.position.z=e,St.target.updateMatrixWorld(),cs.position.z=e-20,ls.position.z=e-5,tu.position.z=e,ru.position.z=e,ke.runner.running&&!ke.runner.dead){const l=ke.runner.runSpeed>20?.01:.02;for(mo+=a;mo>l;){mo-=l;const c=es%Vi;Lt[c*3]=t+(Math.random()-.5)*.5,Lt[c*3+1]=.1+Math.random()*.3,Lt[c*3+2]=e+1.5+Math.random()*.5,Fi[c]=1,Yt[c*3]=(Math.random()-.5)*1.5,Yt[c*3+1]=1+Math.random()*2,Yt[c*3+2]=1+Math.random()*1.5,es++}}if(ke._characterId==="barbarian"&&ke.state===1){const l=Math.min(1,(ke.runner.runSpeed-15)/15);if(l>.1&&Math.random()<l*.3){const c=es%Vi;Lt[c*3]=t+(Math.random()-.5)*.8,Lt[c*3+1]=.5+Math.random()*1.5,Lt[c*3+2]=e+1+Math.random()*.5,Fi[c]=.8+Math.random()*.2,Yt[c*3]=(Math.random()-.5)*2,Yt[c*3+1]=2+Math.random()*3,Yt[c*3+2]=1+Math.random()*2,es++}}else if(ke._characterId==="knight"&&ke.state===1&&ke.runner.attacking)for(let l=0;l<3;l++){const c=es%Vi;Lt[c*3]=t+(Math.random()-.5)*1.5,Lt[c*3+1]=.8+Math.random()*1,Lt[c*3+2]=e-.5+Math.random()*.5,Fi[c]=1,Yt[c*3]=(Math.random()-.5)*4,Yt[c*3+1]=1+Math.random()*2,Yt[c*3+2]=-2+Math.random()*2,es++}if(ke.activePowerUps){const l=ll.uniforms.uColor1.value,c=ll.uniforms.uColor2.value;let h,d,u,p,g,_;const m=ke.cosmeticsManager?ke.cosmeticsManager.getTrailConfig():null;if(m&&m.particleColor){const v=m.particleColor;h=v[0],d=v[1],u=v[2],p=v[0]*.7+.3,g=v[1]*.7+.3,_=v[2]*.7+.3}else ke._characterId==="barbarian"?(h=1,d=.25,u=0,p=1,g=.5,_=.1):(h=.3,d=.5,u=1,p=.7,g=.85,_=1);ke.activePowerUps.Invincibility?(h=0,d=.9,u=1,p=.3,g=.6,_=1):ke.activePowerUps.Shield?(h=.5,d=.2,u=1,p=.8,g=.5,_=1):ke.activePowerUps.CoinMagnet?(h=1,d=0,u=1,p=1,g=.5,_=1):ke.activePowerUps.SpeedBoost&&(h=1,d=.3,u=0,p=1,g=.6,_=0);const f=a*4;l.x+=(h-l.x)*f,l.y+=(d-l.y)*f,l.z+=(u-l.z)*f,c.x+=(p-c.x)*f,c.y+=(g-c.y)*f,c.z+=(_-c.z)*f}for(let l=0;l<Vi;l++)Fi[l]>0&&(Fi[l]-=a*2,Fi[l]<0&&(Fi[l]=0),Lt[l*3]+=Yt[l*3]*a,Lt[l*3+1]+=Yt[l*3+1]*a,Lt[l*3+2]+=Yt[l*3+2]*a,Yt[l*3+1]-=a*3);Ts.attributes.position.needsUpdate=!0,Ts.attributes.aAlpha.needsUpdate=!0;const i=ke.currentTheme||"roman",n=Ux[i];if(cu.position.z=e,n&&(uo=n,lu.uniforms.uColor.value.set(n.color[0],n.color[1],n.color[2])),uo){const l=uo;for(let c=0;c<Dn;c++)os[c]<=0?Math.random()<l.density&&(ni[c*3]=(Math.random()-.5)*40,ni[c*3+1]=8+Math.random()*10,ni[c*3+2]=(Math.random()-.5)*60,os[c]=l.alpha*(.5+Math.random()*.5),Pl[c]=l.size*(.5+Math.random()),ts[c*3]=l.velX*(.5+Math.random()),ts[c*3+1]=l.velY*(.8+Math.random()*.4),ts[c*3+2]=l.velZ*(Math.random()-.5)*2):(ni[c*3]+=ts[c*3]*a,ni[c*3+1]+=ts[c*3+1]*a,ni[c*3+2]+=ts[c*3+2]*a,(ni[c*3+1]<-1||ni[c*3+1]>20)&&(os[c]=0))}else for(let l=0;l<Dn;l++)os[l]*=.95;if(In.attributes.position.needsUpdate=!0,In.attributes.aAlpha.needsUpdate=!0,In.attributes.size.needsUpdate=!0,ke._themeTransitionTimer>0||ke._prevTheme!==ke.currentTheme){const l={roman:{sky:[.35,.45,.55],fog:[.3,.4,.5],fogDensity:.008},forest:{sky:[.2,.35,.18],fog:[.2,.35,.2],fogDensity:.008},desert:{sky:[.5,.45,.3],fog:[.5,.45,.35],fogDensity:.006},lava:{sky:[.65,.35,.18],fog:[.6,.32,.16],fogDensity:.004},snow:{sky:[.5,.55,.6],fog:[.5,.55,.6],fogDensity:.007}},c=l[ke.currentTheme]||l.roman,h=ht.background;h.r+=(c.sky[0]-h.r)*a*2,h.g+=(c.sky[1]-h.g)*a*2,h.b+=(c.sky[2]-h.b)*a*2,ht.fog&&(ht.fog.color.r+=(c.fog[0]-ht.fog.color.r)*a*2,ht.fog.color.g+=(c.fog[1]-ht.fog.color.g)*a*2,ht.fog.color.b+=(c.fog[2]-ht.fog.color.b)*a*2,ht.fog.density+=(c.fogDensity-ht.fog.density)*a*2)}const s=$h[ke.currentTheme]||$h.roman,r=a*2;At.set(s.sun.color),St.color.lerp(At,r),St.intensity+=(s.sun.intensity-St.intensity)*r,At.set(s.fill.color),ls.color.lerp(At,r),ls.intensity+=(s.fill.intensity-ls.intensity)*r,At.set(s.rim.color),cs.color.lerp(At,r),cs.intensity+=(s.rim.intensity-cs.intensity)*r,At.set(s.hemi.sky),jh.set(s.hemi.ground),$s.color.lerp(At,r),$s.groundColor.lerp(jh,r),$s.intensity+=(s.hemi.intensity-$s.intensity)*r,At.set(s.ambient.color),nr.color.lerp(At,r),nr.intensity+=(s.ambient.intensity-nr.intensity)*r,hs.strength+=(s.bloom.strength-hs.strength)*r,hs.threshold+=(s.bloom.threshold-hs.threshold)*r,Rt.toneMappingExposure+=(s.exposure-Rt.toneMappingExposure)*r;const o=Yh[ke.currentTheme]||Yh.roman;At.set(o.top),ns.uniforms.topColor.value.lerp(At,r),At.set(o.mid),ns.uniforms.midColor.value.lerp(At,r),At.set(o.horizon),ns.uniforms.horizonColor.value.lerp(At,r),At.set(o.bottom),ns.uniforms.bottomColor.value.lerp(At,r)}Is.render()}
