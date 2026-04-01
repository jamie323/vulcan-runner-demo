(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="170",Rd=0,Rl=1,Id=2,xh=1,yh=2,Pn=3,Gn=0,zt=1,en=2,kn=0,es=1,Xs=2,Il=3,Dl=4,Dd=5,mi=100,Pd=101,Ld=102,Ud=103,Nd=104,Fd=200,Od=201,Bd=202,kd=203,io=204,so=205,zd=206,Hd=207,Gd=208,Vd=209,Wd=210,Xd=211,qd=212,jd=213,$d=214,ro=0,ao=1,oo=2,ss=3,lo=4,co=5,ho=6,uo=7,bh=0,Yd=1,Kd=2,si=0,Zd=1,Jd=2,Qd=3,Mh=4,eu=5,tu=6,nu=7,Pl="attached",iu="detached",Sh=300,rs=301,as=302,fo=303,po=304,aa=306,Vt=1e3,ni=1001,Jr=1002,Ht=1003,wh=1004,Ns=1005,$t=1006,Hr=1007,Nn=1008,Vn=1009,Th=1010,Eh=1011,qs=1012,el=1013,yi=1014,un=1015,zn=1016,tl=1017,nl=1018,os=1020,Ah=35902,Ch=1021,Rh=1022,tn=1023,Ih=1024,Dh=1025,ts=1026,ls=1027,il=1028,sl=1029,Ph=1030,rl=1031,al=1033,Gr=33776,Vr=33777,Wr=33778,Xr=33779,mo=35840,go=35841,_o=35842,vo=35843,xo=36196,yo=37492,bo=37496,Mo=37808,So=37809,wo=37810,To=37811,Eo=37812,Ao=37813,Co=37814,Ro=37815,Io=37816,Do=37817,Po=37818,Lo=37819,Uo=37820,No=37821,qr=36492,Fo=36494,Oo=36495,Lh=36283,Bo=36284,ko=36285,zo=36286,Uh=2200,Nh=2201,su=2202,js=2300,$s=2301,ma=2302,ji=2400,$i=2401,Qr=2402,ol=2500,ru=2501,au=0,Fh=1,Ho=2,ou=3200,lu=3201,Oh=0,cu=1,ti="",mt="srgb",Ut="srgb-linear",oa="linear",tt="srgb",Ai=7680,Ll=519,hu=512,du=513,uu=514,Bh=515,fu=516,pu=517,mu=518,gu=519,Go=35044,Ul="300 es",Fn=2e3,ea=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const zs=Math.PI/180,cs=180/Math.PI;function fn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Pt(r,e,t){return Math.max(e,Math.min(t,r))}function ll(r,e){return(r%e+e)%e}function _u(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function vu(r,e,t){return r!==e?(t-r)/(e-r):0}function Hs(r,e,t){return(1-t)*r+t*e}function xu(r,e,t,n){return Hs(r,e,1-Math.exp(-t*n))}function yu(r,e=1){return e-Math.abs(ll(r,e*2)-e)}function bu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Mu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Su(r,e){return r+Math.floor(Math.random()*(e-r+1))}function wu(r,e){return r+Math.random()*(e-r)}function Tu(r){return r*(.5-Math.random())}function Eu(r){r!==void 0&&(Nl=r);let e=Nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Au(r){return r*zs}function Cu(r){return r*cs}function Ru(r){return(r&r-1)===0&&r!==0}function Iu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Du(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Pu(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Lu={DEG2RAD:zs,RAD2DEG:cs,generateUUID:fn,clamp:Pt,euclideanModulo:ll,mapLinear:_u,inverseLerp:vu,lerp:Hs,damp:xu,pingpong:yu,smoothstep:bu,smootherstep:Mu,randInt:Su,randFloat:wu,randFloatSpread:Tu,seededRandom:Eu,degToRad:Au,radToDeg:Cu,isPowerOfTwo:Ru,ceilPowerOfTwo:Iu,floorPowerOfTwo:Du,setQuaternionFromProperEuler:Pu,normalize:et,denormalize:hn};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,i,s,a,o,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],S=i[4],v=i[7],D=i[2],A=i[5],E=i[8];return s[0]=a*_+o*b+l*D,s[3]=a*m+o*S+l*A,s[6]=a*p+o*v+l*E,s[1]=c*_+h*b+d*D,s[4]=c*m+h*S+d*A,s[7]=c*p+h*v+d*E,s[2]=u*_+f*b+g*D,s[5]=u*m+f*S+g*A,s[8]=u*p+f*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Le;function kh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ys(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Uu(){const r=Ys("canvas");return r.style.display="block",r}const Fl={};function Fs(r){r in Fl||(Fl[r]=!0,console.warn(r))}function Nu(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Fu(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ou(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ge={enabled:!0,workingColorSpace:Ut,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(r.r=ns(r.r),r.g=ns(r.g),r.b=ns(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?oa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Hn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ol=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],kl=[.3127,.329],zl=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ge.define({[Ut]:{primaries:Ol,whitePoint:kl,transfer:oa,toXYZ:zl,fromXYZ:Hl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:Ol,whitePoint:kl,transfer:tt,toXYZ:zl,fromXYZ:Hl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});let Ci;class Bu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=Ys("canvas")),Ci.width=e.width,Ci.height=e.height;const n=Ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ku=0;class zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(_a(i[a].image)):s.push(_a(i[a]))}else s=_a(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _a(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zu=0;class xt extends Si{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=ni,i=ni,s=$t,a=Nn,o=tn,l=Vn,c=xt.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=fn(),this.name="",this.source=new zh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vt:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vt:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Sh;xt.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(f+1)/2,D=(p+1)/2,A=(h+u)/4,E=(d+_)/4,I=(g+m)/4;return S>v&&S>D?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=E/n):v>D?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=I/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=E/s,i=I/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hu extends Si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends Hu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hh extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gu extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const D=Math.sqrt(S),A=Math.atan2(D,p*b);m=Math.sin(m*A)/D,o=Math.sin(o*A)/D}const v=o*b;if(l=l*m+u*v,c=c*m+f*v,h=h*m+g*v,d=d*m+_*v,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new C,Gl=new kt;class mn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(s,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),or.subVectors(this.max,Ms),Ri.subVectors(e.a,Ms),Ii.subVectors(e.b,Ms),Di.subVectors(e.c,Ms),$n.subVectors(Ii,Ri),Yn.subVectors(Di,Ii),ai.subVectors(Ri,Di);let t=[0,-$n.z,$n.y,0,-Yn.z,Yn.y,0,-ai.z,ai.y,$n.z,0,-$n.x,Yn.z,0,-Yn.x,ai.z,0,-ai.x,-$n.y,$n.x,0,-Yn.y,Yn.x,0,-ai.y,ai.x,0];return!xa(t,Ri,Ii,Di,or)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Ri,Ii,Di,or))?!1:(lr.crossVectors($n,Yn),t=[lr.x,lr.y,lr.z],xa(t,Ri,Ii,Di,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new C,new C,new C,new C,new C,new C,new C,new C],an=new C,ar=new mn,Ri=new C,Ii=new C,Di=new C,$n=new C,Yn=new C,ai=new C,Ms=new C,or=new C,lr=new C,oi=new C;function xa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){oi.fromArray(r,s);const o=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Vu=new mn,Ss=new C,ya=new C;class yn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ss,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(ya)),this.expandByPoint(Ss.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new C,ba=new C,cr=new C,Kn=new C,Ma=new C,hr=new C,Sa=new C;class la{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ba.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ba);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cr),o=Kn.dot(this.direction),l=-Kn.dot(cr),c=Kn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ba).addScaledVector(cr,u),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,s){Ma.subVectors(t,e),hr.subVectors(n,e),Sa.crossVectors(Ma,hr);let a=this.direction.dot(Sa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot(hr.crossVectors(Kn,hr));if(l<0)return null;const c=o*this.direction.dot(Ma.cross(Kn));if(c<0||l+c>a)return null;const h=-o*Kn.dot(Sa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,s,a,o,l,c,h,d,u,f,g,_,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,n,i,s,a,o,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wu,e,Xu)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Zn.crossVectors(n,Xt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Zn.crossVectors(n,Xt)),Zn.normalize(),dr.crossVectors(Xt,Zn),i[0]=Zn.x,i[4]=dr.x,i[8]=Xt.x,i[1]=Zn.y,i[5]=dr.y,i[9]=Xt.y,i[2]=Zn.z,i[6]=dr.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],S=n[7],v=n[11],D=n[15],A=i[0],E=i[4],I=i[8],w=i[12],y=i[1],R=i[5],z=i[9],k=i[13],W=i[2],Y=i[6],V=i[10],Z=i[14],G=i[3],ie=i[7],ce=i[11],ye=i[15];return s[0]=a*A+o*y+l*W+c*G,s[4]=a*E+o*R+l*Y+c*ie,s[8]=a*I+o*z+l*V+c*ce,s[12]=a*w+o*k+l*Z+c*ye,s[1]=h*A+d*y+u*W+f*G,s[5]=h*E+d*R+u*Y+f*ie,s[9]=h*I+d*z+u*V+f*ce,s[13]=h*w+d*k+u*Z+f*ye,s[2]=g*A+_*y+m*W+p*G,s[6]=g*E+_*R+m*Y+p*ie,s[10]=g*I+_*z+m*V+p*ce,s[14]=g*w+_*k+m*Z+p*ye,s[3]=b*A+S*y+v*W+D*G,s[7]=b*E+S*R+v*Y+D*ie,s[11]=b*I+S*z+v*V+D*ce,s[15]=b*w+S*k+v*Z+D*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*f-n*l*f)+_*(+t*l*f-t*c*u+s*a*u-i*a*f+i*c*h-s*l*h)+m*(+t*c*d-t*o*f-s*a*d+n*a*f+s*o*h-n*c*h)+p*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=d*m*c-_*u*c+_*l*f-o*m*f-d*l*p+o*u*p,S=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,v=h*_*c-g*d*c+g*o*f-a*_*f-h*o*p+a*d*p,D=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,A=t*b+n*S+i*v+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=b*E,e[1]=(_*u*s-d*m*s-_*i*f+n*m*f+d*i*p-n*u*p)*E,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*E,e[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*f-n*l*f)*E,e[4]=S*E,e[5]=(h*m*s-g*u*s+g*i*f-t*m*f-h*i*p+t*u*p)*E,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*u*s-h*l*s+h*i*c-t*u*c-a*i*f+t*l*f)*E,e[8]=v*E,e[9]=(g*d*s-h*_*s-g*n*f+t*_*f+h*n*p-t*d*p)*E,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*E,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*f-t*o*f)*E,e[12]=D*E,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*m+t*d*m)*E,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*E,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,_=a*h,m=a*d,p=o*d,b=l*c,S=l*h,v=l*d,D=n.x,A=n.y,E=n.z;return i[0]=(1-(_+p))*D,i[1]=(f+v)*D,i[2]=(g-S)*D,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(u+p))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+S)*E,i[9]=(m-b)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pi.set(i[0],i[1],i[2]).length();const a=Pi.set(i[4],i[5],i[6]).length(),o=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/s,h=1/a,d=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Fn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(o===Fn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ea)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Fn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-s),u=(t+e)*c,f=(n+i)*h;let g,_;if(o===Fn)g=(a+s)*d,_=-2*d;else if(o===ea)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new C,on=new Ue,Wu=new C(0,0,0),Xu=new C(1,1,1),Zn=new C,dr=new C,Xt=new C,Vl=new Ue,Wl=new kt;class xn{constructor(e=0,t=0,n=0,i=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Gh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qu=0;const Xl=new C,Li=new kt,Cn=new Ue,ur=new C,ws=new C,ju=new C,$u=new kt,ql=new C(1,0,0),jl=new C(0,1,0),$l=new C(0,0,1),Yl={type:"added"},Yu={type:"removed"},Ui={type:"childadded",child:null},wa={type:"childremoved",child:null};class ct extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new C,t=new xn,n=new kt,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Le}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(jl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(jl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ws,ur,this.up):Cn.lookAt(ur,ws,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Cn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yu),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,ju),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,$u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new C(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new C,Rn=new C,Ta=new C,In=new C,Ni=new C,Fi=new C,Kl=new C,Ea=new C,Aa=new C,Ca=new C,Ra=new Ye,Ia=new Ye,Da=new Ye;class dn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ln.subVectors(i,t),Rn.subVectors(n,t),Ta.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(Rn),l=ln.dot(Ta),c=Rn.dot(Rn),h=Rn.dot(Ta),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ra.setScalar(0),Ia.setScalar(0),Da.setScalar(0),Ra.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ra,s.x),a.addScaledVector(Ia,s.y),a.addScaledVector(Da,s.z),a}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Rn.subVectors(e,t),ln.cross(Rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),ln.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ni.subVectors(i,n),Fi.subVectors(s,n),Ea.subVectors(e,n);const l=Ni.dot(Ea),c=Fi.dot(Ea);if(l<=0&&c<=0)return t.copy(n);Aa.subVectors(e,i);const h=Ni.dot(Aa),d=Fi.dot(Aa);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ni,a);Ca.subVectors(e,s);const f=Ni.dot(Ca),g=Fi.dot(Ca);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Fi,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Kl.subVectors(s,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Kl,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Pa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=ll(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Pa(a,s,e+1/3),this.g=Pa(a,s,e),this.b=Pa(a,s,e-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=Vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Ge.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Pt(Rt.r*255,0,255))*65536+Math.round(Pt(Rt.g*255,0,255))*256+Math.round(Pt(Rt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,s=Rt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=mt){Ge.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(fr);const n=Hs(Jn.h,fr.h,t),i=Hs(Jn.s,fr.s,t),s=Hs(Jn.l,fr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new fe;fe.NAMES=Vh;let Ku=0;class vn extends Si{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=fn(),this.name="",this.blending=es,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=so,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nn extends vn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new C,pr=new be;class Be{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}}class Wh extends Be{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xh extends Be{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends Be{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zu=0;const Zt=new Ue,La=new ct,Oi=new C,qt=new mn,Ts=new mn,Mt=new C;class dt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?Xh:Wh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(qt.min,Ts.min),qt.expandByPoint(Mt),Mt.addVectors(qt.max,Ts.max),qt.expandByPoint(Mt)):(qt.expandByPoint(Ts.min),qt.expandByPoint(Ts.max))}qt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mt.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(e,c),Mt.add(Oi)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new C,l[I]=new C;const c=new C,h=new C,d=new C,u=new be,f=new be,g=new be,_=new C,m=new C;function p(I,w,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),u.fromBufferAttribute(s,I),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,y),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[I].add(_),o[w].add(_),o[y].add(_),l[I].add(m),l[w].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,w=b.length;I<w;++I){const y=b[I],R=y.start,z=y.count;for(let k=R,W=R+z;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new C,v=new C,D=new C,A=new C;function E(I){D.fromBufferAttribute(i,I),A.copy(D);const w=o[I];S.copy(w),S.sub(D.multiplyScalar(D.dot(w))).normalize(),v.crossVectors(A,w);const R=v.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,R)}for(let I=0,w=b.length;I<w;++I){const y=b[I],R=y.start,z=y.count;for(let k=R,W=R+z;k<W;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Be(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new Ue,li=new la,mr=new yn,Jl=new C,gr=new C,_r=new C,vr=new C,Ua=new C,xr=new C,Ql=new C,yr=new C;class Ce extends ct{constructor(e=new dt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Ua.fromBufferAttribute(d,e),a?xr.addScaledVector(Ua,h):xr.addScaledVector(Ua.sub(t),h))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),li.copy(e.ray).recast(e.near),!(mr.containsPoint(li.origin)===!1&&(li.intersectSphere(mr,Jl)===null||li.origin.distanceToSquared(Jl)>(e.far-e.near)**2))&&(Zl.copy(s).invert(),li.copy(e.ray).applyMatrix4(Zl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,D=S;v<D;v+=3){const A=o.getX(v),E=o.getX(v+1),I=o.getX(v+2);i=br(this,p,e,n,c,h,d,A,E,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);i=br(this,a,e,n,c,h,d,b,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,D=S;v<D;v+=3){const A=v,E=v+1,I=v+2;i=br(this,p,e,n,c,h,d,A,E,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,S=m+1,v=m+2;i=br(this,a,e,n,c,h,d,b,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ju(r,e,t,n,i,s,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Gn,o),l===null)return null;yr.copy(o),yr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(yr);return c<t.near||c>t.far?null:{distance:c,point:yr.clone(),object:r}}function br(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,gr),r.getVertexPosition(l,_r),r.getVertexPosition(c,vr);const h=Ju(r,e,t,n,gr,_r,vr,Ql);if(h){const d=new C;dn.getBarycoord(Ql,gr,_r,vr,d),i&&(h.uv=dn.getInterpolatedAttribute(i,o,l,c,d,new be)),s&&(h.uv1=dn.getInterpolatedAttribute(s,o,l,c,d,new be)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};dn.getNormal(gr,_r,vr,u.normal),h.face=u,h.barycoord=d}return h}class Et extends dt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function g(_,m,p,b,S,v,D,A,E,I,w){const y=v/E,R=D/I,z=v/2,k=D/2,W=A/2,Y=E+1,V=I+1;let Z=0,G=0;const ie=new C;for(let ce=0;ce<V;ce++){const ye=ce*R-k;for(let ke=0;ke<Y;ke++){const nt=ke*y-z;ie[_]=nt*b,ie[m]=ye*S,ie[p]=W,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),d.push(ke/E),d.push(1-ce/I),Z+=1}}for(let ce=0;ce<I;ce++)for(let ye=0;ye<E;ye++){const ke=u+ye+Y*ce,nt=u+ye+Y*(ce+1),q=u+(ye+1)+Y*(ce+1),ee=u+(ye+1)+Y*ce;l.push(ke,nt,ee),l.push(nt,q,ee),G+=6}o.addGroup(f,G,w),f+=G,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(r){const e={};for(let t=0;t<r.length;t++){const n=hs(r[t]);for(const i in n)e[i]=n[i]}return e}function Qu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function qh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const ta={clone:hs,merge:Ft};var ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gt extends vn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Qu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jh extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new C,ec=new be,tc=new be;class Ot extends jh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,ki=1;class nf extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(Bi,ki,e,t);i.layers=this.layers,this.add(i);const s=new Ot(Bi,ki,e,t);s.layers=this.layers,this.add(s);const a=new Ot(Bi,ki,e,t);a.layers=this.layers,this.add(a);const o=new Ot(Bi,ki,e,t);o.layers=this.layers,this.add(o);const l=new Ot(Bi,ki,e,t);l.layers=this.layers,this.add(l);const c=new Ot(Bi,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $h extends xt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:rs,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sf extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $h(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Et(5,5,5),s=new gt({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:kn});s.uniforms.tEquirect.value=t;const a=new Ce(i,s),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=$t),new nf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Na=new C,rf=new C,af=new Le;class fi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Na.subVectors(n,t).cross(rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||af.getNormalMatrix(e),i=this.coplanarPoint(Na).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new yn,Mr=new C;class cl{constructor(e=new fi,t=new fi,n=new fi,i=new fi,s=new fi,a=new fi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,u-c,m-f,v-p).normalize(),n[1].setComponents(l+s,u+c,m+f,v+p).normalize(),n[2].setComponents(l+a,u+h,m+g,v+b).normalize(),n[3].setComponents(l-a,u-h,m-g,v-b).normalize(),n[4].setComponents(l-o,u-d,m-_,v-S).normalize(),t===Fn)n[5].setComponents(l+o,u+d,m+_,v+S).normalize();else if(t===ea)n[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mr.x=i.normal.x>0?e.max.x:e.min.x,Mr.y=i.normal.y>0?e.max.y:e.min.y,Mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function of(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class bi extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*u-a;for(let S=0;S<c;S++){const v=S*d-s;g.push(v,-b,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const S=b+c*p,v=b+c*(p+1),D=b+1+c*(p+1),A=b+1+c*p;f.push(S,v,A),f.push(v,D,A)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.widthSegments,e.heightSegments)}}var lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
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
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
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
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Mf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Df=`#define PI 3.141592653589793
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
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,ap=`struct PhysicalMaterial {
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
}`,op=`
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_p=`#if defined( USE_POINTS_UV )
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
#endif`,vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,ym=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,Tm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,Am=`#define NORMAL
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
}`,Cm=`#define NORMAL
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
}`,Rm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Bm=`uniform vec3 color;
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
}`,km=`uniform float rotation;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:lf,alphahash_pars_fragment:cf,alphamap_fragment:hf,alphamap_pars_fragment:df,alphatest_fragment:uf,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:_f,begin_vertex:vf,beginnormal_vertex:xf,bsdfs:yf,iridescence_fragment:bf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:Tf,clipping_planes_vertex:Ef,color_fragment:Af,color_pars_fragment:Cf,color_pars_vertex:Rf,color_vertex:If,common:Df,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Uf,displacementmap_vertex:Nf,emissivemap_fragment:Ff,emissivemap_pars_fragment:Of,colorspace_fragment:Bf,colorspace_pars_fragment:kf,envmap_fragment:zf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Gf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:ep,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:qf,fog_fragment:jf,fog_pars_fragment:$f,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Qf,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:_p,metalnessmap_fragment:vp,metalnessmap_pars_fragment:xp,morphinstance_vertex:yp,morphcolor_vertex:bp,morphnormal_vertex:Mp,morphtarget_pars_vertex:Sp,morphtarget_vertex:wp,normal_fragment_begin:Tp,normal_fragment_maps:Ep,normal_pars_fragment:Ap,normal_pars_vertex:Cp,normal_vertex:Rp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Up,opaque_fragment:Np,packing:Fp,premultiplied_alpha_fragment:Op,project_vertex:Bp,dithering_fragment:kp,dithering_pars_fragment:zp,roughnessmap_fragment:Hp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:qp,skinbase_vertex:jp,skinning_pars_vertex:$p,skinning_vertex:Yp,skinnormal_vertex:Kp,specularmap_fragment:Zp,specularmap_pars_fragment:Jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:am,background_vert:om,background_frag:lm,backgroundCube_vert:cm,backgroundCube_frag:hm,cube_vert:dm,cube_frag:um,depth_vert:fm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:_m,equirect_frag:vm,linedashed_vert:xm,linedashed_frag:ym,meshbasic_vert:bm,meshbasic_frag:Mm,meshlambert_vert:Sm,meshlambert_frag:wm,meshmatcap_vert:Tm,meshmatcap_frag:Em,meshnormal_vert:Am,meshnormal_frag:Cm,meshphong_vert:Rm,meshphong_frag:Im,meshphysical_vert:Dm,meshphysical_frag:Pm,meshtoon_vert:Lm,meshtoon_frag:Um,points_vert:Nm,points_frag:Fm,shadow_vert:Om,shadow_frag:Bm,sprite_vert:km,sprite_frag:zm},te={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},_n={basic:{uniforms:Ft([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ft([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new fe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ft([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ft([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ft([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new fe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ft([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ft([te.points,te.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ft([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ft([te.common,te.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ft([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ft([te.sprite,te.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Ft([te.common,te.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Ft([te.lights,te.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};_n.physical={uniforms:Ft([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Sr={r:0,b:0,g:0},hi=new xn,Hm=new Ue;function Gm(r,e,t,n,i,s,a){const o=new fe(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const v=g(b);v===null?p(o,l):v&&v.isColor&&(p(v,1),S=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===aa)?(h===void 0&&(h=new Ce(new Et(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:hs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hi.copy(S.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(hi)),h.material.toneMapped=Ge.getTransfer(v.colorSpace)!==tt,(d!==v||u!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ce(new bi(2,2),new gt({name:"BackgroundMaterial",uniforms:hs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(Sr,qh(r)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m}}function Vm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(y,R,z,k,W){let Y=!1;const V=d(k,z,R);s!==V&&(s=V,c(s.object)),Y=f(y,k,z,W),Y&&g(y,k,z,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(y,R,z,k),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function d(y,R,z){const k=z.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Y=W[R.id];Y===void 0&&(Y={},W[R.id]=Y);let V=Y[k];return V===void 0&&(V=u(l()),Y[k]=V),V}function u(y){const R=[],z=[],k=[];for(let W=0;W<t;W++)R[W]=0,z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,R,z,k){const W=s.attributes,Y=R.attributes;let V=0;const Z=z.getAttributes();for(const G in Z)if(Z[G].location>=0){const ce=W[G];let ye=Y[G];if(ye===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),ce===void 0||ce.attribute!==ye||ye&&ce.data!==ye.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function g(y,R,z,k){const W={},Y=R.attributes;let V=0;const Z=z.getAttributes();for(const G in Z)if(Z[G].location>=0){let ce=Y[G];ce===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor));const ye={};ye.attribute=ce,ce&&ce.data&&(ye.data=ce.data),W[G]=ye,V++}s.attributes=W,s.attributesNum=V,s.index=k}function _(){const y=s.newAttributes;for(let R=0,z=y.length;R<z;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const z=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;z[y]=1,k[y]===0&&(r.enableVertexAttribArray(y),k[y]=1),W[y]!==R&&(r.vertexAttribDivisor(y,R),W[y]=R)}function b(){const y=s.newAttributes,R=s.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==y[z]&&(r.disableVertexAttribArray(z),R[z]=0)}function S(y,R,z,k,W,Y,V){V===!0?r.vertexAttribIPointer(y,R,z,W,Y):r.vertexAttribPointer(y,R,z,k,W,Y)}function v(y,R,z,k){_();const W=k.attributes,Y=z.getAttributes(),V=R.defaultAttributeValues;for(const Z in Y){const G=Y[Z];if(G.location>=0){let ie=W[Z];if(ie===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){const ce=ie.normalized,ye=ie.itemSize,ke=e.get(ie);if(ke===void 0)continue;const nt=ke.buffer,q=ke.type,ee=ke.bytesPerElement,_e=q===r.INT||q===r.UNSIGNED_INT||ie.gpuType===el;if(ie.isInterleavedBufferAttribute){const se=ie.data,Te=se.stride,Ie=ie.offset;if(se.isInstancedInterleavedBuffer){for(let ze=0;ze<G.locationSize;ze++)p(G.location+ze,se.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ze=0;ze<G.locationSize;ze++)m(G.location+ze);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let ze=0;ze<G.locationSize;ze++)S(G.location+ze,ye/G.locationSize,q,ce,Te*ee,(Ie+ye/G.locationSize*ze)*ee,_e)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)p(G.location+se,ie.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<G.locationSize;se++)m(G.location+se);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let se=0;se<G.locationSize;se++)S(G.location+se,ye/G.locationSize,q,ce,ye*ee,ye/G.locationSize*se*ee,_e)}}else if(V!==void 0){const ce=V[Z];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(G.location,ce);break;case 3:r.vertexAttrib3fv(G.location,ce);break;case 4:r.vertexAttrib4fv(G.location,ce);break;default:r.vertexAttrib1fv(G.location,ce)}}}}b()}function D(){I();for(const y in n){const R=n[y];for(const z in R){const k=R[z];for(const W in k)h(k[W].object),delete k[W];delete R[z]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const z in R){const k=R[z];for(const W in k)h(k[W].object),delete k[W];delete R[z]}delete n[y.id]}function E(y){for(const R in n){const z=n[R];if(z[y.id]===void 0)continue;const k=z[y.id];for(const W in k)h(k[W].object),delete k[W];delete z[y.id]}}function I(){w(),a=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Wm(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xm(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==tn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const I=E===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Vn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==un&&!I)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:D,maxSamples:A}}function qm(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new fi,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const b=s?0:n,S=b*4;let v=p.clippingState||null;l.value=v,v=h(g,u,S,f);for(let D=0;D!==S;++D)v[D]=t[D];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)a.copy(d[S]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function jm(r){let e=new WeakMap;function t(a,o){return o===fo?a.mapping=rs:o===po&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fo||o===po)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sf(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ca extends jh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,nc=[.125,.215,.35,.446,.526,.582],gi=20,Fa=new ca,ic=new fe;let Oa=null,Ba=0,ka=0,za=!1;const pi=(1+Math.sqrt(5))/2,zi=1/pi,sc=[new C(-pi,zi,0),new C(pi,zi,0),new C(-zi,0,pi),new C(zi,0,pi),new C(0,pi,-zi),new C(0,pi,zi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Ba,ka),this._renderer.xr.enabled=za,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:zn,format:tn,colorSpace:Ut,depthBuffer:!1},i=ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(s)),this._blurMaterial=Ym(s,e,t)}return i}_compileMaterial(e){const t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,i){const o=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ic),h.toneMapping=si,h.autoClear=!1;const f=new nn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Ce(new Et,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(ic),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;wr(i,b*S,p>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===rs||e.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ce(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sc[(i-s-1)%sc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ce(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*gi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const p=[];let b=0;for(let E=0;E<gi;++E){const I=E/_,w=Math.exp(-I*I/2);p.push(w),E===0?b+=w:E<m&&(b+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const v=this._sizeLods[i],D=3*v*(i>S-Yi?i-S+Yi:0),A=4*(this._cubeSize-v);wr(t,D,A,3*v,2*v),l.setRenderTarget(t),l.render(d,Fa)}}function $m(r){const e=[],t=[],n=[];let i=r;const s=r-Yi+1+nc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Yi?l=nc[a-r+Yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,I=A>2?0:-1,w=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];b.set(w,_*g*A),S.set(u,m*g*A);const y=[A,A,A,A,A,A];v.set(y,p*g*A)}const D=new dt;D.setAttribute("position",new Be(b,_)),D.setAttribute("uv",new Be(S,m)),D.setAttribute("faceIndex",new Be(v,p)),e.push(D),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ac(r,e,t){const n=new pn(r,e,t);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ym(r,e,t){const n=new Float32Array(gi),i=new C(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function oc(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function lc(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function Km(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===fo||l===po,h=l===rs||l===as;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new rc(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new rc(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jm(r,e,t,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let S=0,v=b.length;S<v;S+=3){const D=b[S+0],A=b[S+1],E=b[S+2];u.push(D,A,A,E,E,D)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,v=b.length/3-1;S<v;S+=3){const D=S+0,A=S+1,E=S+2;u.push(D,A,A,E,E,D)}}else return;const m=new(kh(u)?Xh:Wh)(u,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Qm(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*a),t.update(f,n,1)}function c(u,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,u*a,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function e0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function t0(r,e,t){const n=new WeakMap,i=new Ye;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let y=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let D=o.attributes.position.count*v,A=1;D>e.maxTextureSize&&(A=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const E=new Float32Array(D*A*4*d),I=new Hh(E,D,A,d);I.type=un,I.needsUpdate=!0;const w=v*4;for(let R=0;R<d;R++){const z=p[R],k=b[R],W=S[R],Y=D*A*4*R;for(let V=0;V<z.count;V++){const Z=V*w;g===!0&&(i.fromBufferAttribute(z,V),E[Y+Z+0]=i.x,E[Y+Z+1]=i.y,E[Y+Z+2]=i.z,E[Y+Z+3]=0),_===!0&&(i.fromBufferAttribute(k,V),E[Y+Z+4]=i.x,E[Y+Z+5]=i.y,E[Y+Z+6]=i.z,E[Y+Z+7]=0),m===!0&&(i.fromBufferAttribute(W,V),E[Y+Z+8]=i.x,E[Y+Z+9]=i.y,E[Y+Z+10]=i.z,E[Y+Z+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:I,size:new be(D,A)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function n0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Kh extends xt{constructor(e,t,n,i,s,a,o,l,c,h=ts){if(h!==ts&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=yi),n===void 0&&h===ls&&(n=os),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zh=new xt,cc=new Kh(1,1),Jh=new Hh,Qh=new Gu,ed=new $h,hc=[],dc=[],uc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function gs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=hc[i];if(s===void 0&&(s=new Float32Array(i),hc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function bt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ha(r,e){let t=dc[e];t===void 0&&(t=new Int32Array(e),dc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function i0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function s0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),bt(t,e)}}function r0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),bt(t,e)}}function a0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),bt(t,e)}}function o0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;pc.set(n),r.uniformMatrix2fv(this.addr,!1,pc),bt(t,n)}}function l0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;fc.set(n),r.uniformMatrix3fv(this.addr,!1,fc),bt(t,n)}}function c0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;uc.set(n),r.uniformMatrix4fv(this.addr,!1,uc),bt(t,n)}}function h0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function d0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),bt(t,e)}}function u0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),bt(t,e)}}function f0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),bt(t,e)}}function p0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function m0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),bt(t,e)}}function g0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),bt(t,e)}}function _0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),bt(t,e)}}function v0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(cc.compareFunction=Bh,s=cc):s=Zh,t.setTexture2D(e||s,i)}function x0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qh,i)}function y0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ed,i)}function b0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jh,i)}function M0(r){switch(r){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return d0;case 35668:case 35672:return u0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return b0}}function S0(r,e){r.uniform1fv(this.addr,e)}function w0(r,e){const t=gs(e,this.size,2);r.uniform2fv(this.addr,t)}function T0(r,e){const t=gs(e,this.size,3);r.uniform3fv(this.addr,t)}function E0(r,e){const t=gs(e,this.size,4);r.uniform4fv(this.addr,t)}function A0(r,e){const t=gs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function C0(r,e){const t=gs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function R0(r,e){const t=gs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function I0(r,e){r.uniform1iv(this.addr,e)}function D0(r,e){r.uniform2iv(this.addr,e)}function P0(r,e){r.uniform3iv(this.addr,e)}function L0(r,e){r.uniform4iv(this.addr,e)}function U0(r,e){r.uniform1uiv(this.addr,e)}function N0(r,e){r.uniform2uiv(this.addr,e)}function F0(r,e){r.uniform3uiv(this.addr,e)}function O0(r,e){r.uniform4uiv(this.addr,e)}function B0(r,e,t){const n=this.cache,i=e.length,s=ha(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Zh,s[a])}function k0(r,e,t){const n=this.cache,i=e.length,s=ha(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qh,s[a])}function z0(r,e,t){const n=this.cache,i=e.length,s=ha(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ed,s[a])}function H0(r,e,t){const n=this.cache,i=e.length,s=ha(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jh,s[a])}function G0(r){switch(r){case 5126:return S0;case 35664:return w0;case 35665:return T0;case 35666:return E0;case 35674:return A0;case 35675:return C0;case 35676:return R0;case 5124:case 35670:return I0;case 35667:case 35671:return D0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return U0;case 36294:return N0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}class V0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M0(t.type)}}class W0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G0(t.type)}}class X0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function mc(r,e){r.seq.push(e),r.map[e.id]=e}function q0(r,e,t){const n=r.name,i=n.length;for(Ha.lastIndex=0;;){const s=Ha.exec(n),a=Ha.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){mc(t,c===void 0?new V0(o,r,e):new W0(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new X0(o),mc(t,d)),t=d}}}class jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);q0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function gc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const j0=37297;let $0=0;function Y0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _c=new Le;function K0(r){Ge._getMatrix(_c,Ge.workingColorSpace,r);const e=`mat3( ${_c.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(r)){case oa:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function vc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Y0(r.getShaderSource(e),a)}else return i}function Z0(r,e){const t=K0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J0(r,e){let t;switch(e){case Zd:t="Linear";break;case Jd:t="Reinhard";break;case Qd:t="Cineon";break;case Mh:t="ACESFilmic";break;case tu:t="AgX";break;case nu:t="Neutral";break;case eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new C;function Q0(){Ge.getLuminanceCoefficients(Tr);const r=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function tg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ng(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Os(r){return r!==""}function xc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(r){return r.replace(ig,rg)}const sg=new Map;function rg(r,e){let t=Fe[e];if(t===void 0){const n=sg.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(r){return r.replace(ag,og)}function og(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mc(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function lg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function cg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case rs:case as:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function dg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bh:e="ENVMAP_BLENDING_MULTIPLY";break;case Yd:e="ENVMAP_BLENDING_MIX";break;case Kd:e="ENVMAP_BLENDING_ADD";break}return e}function ug(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fg(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=lg(t),c=cg(t),h=hg(t),d=dg(t),u=ug(t),f=eg(t),g=tg(s),_=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Fe.tonemapping_pars_fragment:"",t.toneMapping!==si?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),Q0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),a=Vo(a),a=xc(a,t),a=yc(a,t),o=Vo(o),o=xc(o,t),o=yc(o,t),a=bc(a),o=bc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+a,v=b+p+o,D=gc(i,i.VERTEX_SHADER,S),A=gc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,D),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(R){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(D).trim(),W=i.getShaderInfoLog(A).trim();let Y=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,D,A);else{const Z=vc(i,D,"vertex"),G=vc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+Z+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||W==="")&&(V=!1);V&&(R.diagnostics={runnable:Y,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(D),i.deleteShader(A),I=new jr(i,_),w=ng(i,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,j0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let pg=0;class mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gg(e),t.set(e,n)),n}}class gg{constructor(e){this.id=pg++,this.code=e,this.usedTimes=0}}function _g(r,e,t,n,i,s,a){const o=new Gh,l=new mg,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,R,z,k){const W=z.fog,Y=k.geometry,V=w.isMeshStandardMaterial?z.environment:null,Z=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),G=Z&&Z.mapping===aa?Z.image.height:null,ie=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ye=ce!==void 0?ce.length:0;let ke=0;Y.morphAttributes.position!==void 0&&(ke=1),Y.morphAttributes.normal!==void 0&&(ke=2),Y.morphAttributes.color!==void 0&&(ke=3);let nt,q,ee,_e;if(ie){const Qe=_n[ie];nt=Qe.vertexShader,q=Qe.fragmentShader}else nt=w.vertexShader,q=w.fragmentShader,l.update(w),ee=l.getVertexShaderID(w),_e=l.getFragmentShaderID(w);const se=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,ze=k.isBatchedMesh===!0,ht=!!w.map,qe=!!w.matcap,pt=!!Z,N=!!w.aoMap,Yt=!!w.lightMap,Ve=!!w.bumpMap,We=!!w.normalMap,Se=!!w.displacementMap,at=!!w.emissiveMap,Me=!!w.metalnessMap,T=!!w.roughnessMap,x=w.anisotropy>0,F=w.clearcoat>0,j=w.dispersion>0,K=w.iridescence>0,X=w.sheen>0,ve=w.transmission>0,re=x&&!!w.anisotropyMap,he=F&&!!w.clearcoatMap,je=F&&!!w.clearcoatNormalMap,J=F&&!!w.clearcoatRoughnessMap,de=K&&!!w.iridescenceMap,we=K&&!!w.iridescenceThicknessMap,Ae=X&&!!w.sheenColorMap,ue=X&&!!w.sheenRoughnessMap,Xe=!!w.specularMap,Ne=!!w.specularColorMap,it=!!w.specularIntensityMap,P=ve&&!!w.transmissionMap,ne=ve&&!!w.thicknessMap,H=!!w.gradientMap,$=!!w.alphaMap,le=w.alphaTest>0,ae=!!w.alphaHash,De=!!w.extensions;let ut=si;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ut=r.toneMapping);const At={shaderID:ie,shaderType:w.type,shaderName:w.name,vertexShader:nt,fragmentShader:q,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ze,batchingColor:ze&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ut,alphaToCoverage:!!w.alphaToCoverage,map:ht,matcap:qe,envMap:pt,envMapMode:pt&&Z.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Yt,bumpMap:Ve,normalMap:We,displacementMap:u&&Se,emissiveMap:at,normalMapObjectSpace:We&&w.normalMapType===cu,normalMapTangentSpace:We&&w.normalMapType===Oh,metalnessMap:Me,roughnessMap:T,anisotropy:x,anisotropyMap:re,clearcoat:F,clearcoatMap:he,clearcoatNormalMap:je,clearcoatRoughnessMap:J,dispersion:j,iridescence:K,iridescenceMap:de,iridescenceThicknessMap:we,sheen:X,sheenColorMap:Ae,sheenRoughnessMap:ue,specularMap:Xe,specularColorMap:Ne,specularIntensityMap:it,transmission:ve,transmissionMap:P,thicknessMap:ne,gradientMap:H,opaque:w.transparent===!1&&w.blending===es&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:le,alphaHash:ae,combine:w.combine,mapUv:ht&&_(w.map.channel),aoMapUv:N&&_(w.aoMap.channel),lightMapUv:Yt&&_(w.lightMap.channel),bumpMapUv:Ve&&_(w.bumpMap.channel),normalMapUv:We&&_(w.normalMap.channel),displacementMapUv:Se&&_(w.displacementMap.channel),emissiveMapUv:at&&_(w.emissiveMap.channel),metalnessMapUv:Me&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:re&&_(w.anisotropyMap.channel),clearcoatMapUv:he&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(w.sheenRoughnessMap.channel),specularMapUv:Xe&&_(w.specularMap.channel),specularColorMapUv:Ne&&_(w.specularColorMap.channel),specularIntensityMapUv:it&&_(w.specularIntensityMap.channel),transmissionMapUv:P&&_(w.transmissionMap.channel),thicknessMapUv:ne&&_(w.thicknessMap.channel),alphaMapUv:$&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(We||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(ht||$),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:ht&&w.map.isVideoTexture===!0&&Ge.getTransfer(w.map.colorSpace)===tt,decodeVideoTextureEmissive:at&&w.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(w.emissiveMap.colorSpace)===tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===en,flipSided:w.side===zt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)y.push(R),y.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(b(y,w),S(y,w),y.push(r.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function b(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function S(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const y=g[w.type];let R;if(y){const z=_n[y];R=ta.clone(z.uniforms)}else R=w.uniforms;return R}function D(w,y){let R;for(let z=0,k=h.length;z<k;z++){const W=h[z];if(W.cacheKey===y){R=W,++R.usedTimes;break}}return R===void 0&&(R=new fg(r,y,w,s),h.push(R)),R}function A(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function E(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:I}}function vg(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function xg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Sc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,_,m){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},r[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||xg),n.length>1&&n.sort(u||Sc),i.length>1&&i.sort(u||Sc)}function h(){for(let d=e,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function yg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new wc,r.set(n,[a])):i>=s.length?(a=new wc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function bg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new fe};break;case"SpotLight":t={position:new C,direction:new C,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function Mg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Sg=0;function wg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Tg(r){const e=new bg,t=Mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,s=new Ue,a=new Ue;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,S=0,v=0,D=0,A=0,E=0;c.sort(wg);for(let w=0,y=c.length;w<y;w++){const R=c[w],z=R.color,k=R.intensity,W=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*k,d+=z.g*k,u+=z.b*k;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],k);E++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,G=t.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=V,f++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(z).multiplyScalar(k),V.distance=W,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[_]=V;const Z=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,Z.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=Y,v++}_++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(z).multiplyScalar(k),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=V,m++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const Z=R.shadow,G=t.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=V,g++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(k),V.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==v||I.numSpotMaps!==D||I.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=v,I.numSpotMaps=D,I.numLightProbes=E,n.version=Sg++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Tc(r){const e=new Tg(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Eg(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Tc(r),e.set(i,[o])):s>=a.length?(o=new Tc(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ag extends vn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cg extends vn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Dg(r,e,t){let n=new cl;const i=new be,s=new be,a=new Ye,o=new Ag({depthPacking:lu}),l=new Cg,c={},h=t.maxTextureSize,d={[Gn]:zt,[zt]:Gn,[en]:en},u=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Rg,fragmentShader:Ig}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ce(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let p=this.type;this.render=function(A,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=r.getRenderTarget(),y=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),z=r.state;z.setBlending(kn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==Pn&&this.type===Pn,W=p===Pn&&this.type!==Pn;for(let Y=0,V=A.length;Y<V;Y++){const Z=A[Y],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ie=G.getFrameExtents();if(i.multiply(ie),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ie.x),i.x=s.x*ie.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ie.y),i.y=s.y*ie.y,G.mapSize.y=s.y)),G.map===null||k===!0||W===!0){const ye=this.type!==Pn?{minFilter:Ht,magFilter:Ht}:{};G.map!==null&&G.map.dispose(),G.map=new pn(i.x,i.y,ye),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ce=G.getViewportCount();for(let ye=0;ye<ce;ye++){const ke=G.getViewport(ye);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),z.viewport(a),G.updateMatrices(Z,ye),n=G.getFrustum(),v(E,I,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Pn&&b(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,y,R)};function b(A,E){const I=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,I,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,I,f,_,null)}function S(A,E,I,w){let y=null;const R=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=I.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=y.uuid,k=E.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let Y=W[k];Y===void 0&&(Y=y.clone(),W[k]=Y,E.addEventListener("dispose",D)),y=Y}if(y.visible=E.visible,y.wireframe=E.wireframe,w===Pn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=r.properties.get(y);z.light=I}return y}function v(A,E,I,w,y){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const k=e.update(A),W=A.material;if(Array.isArray(W)){const Y=k.groups;for(let V=0,Z=Y.length;V<Z;V++){const G=Y[V],ie=W[G.materialIndex];if(ie&&ie.visible){const ce=S(A,ie,w,y);A.onBeforeShadow(r,A,E,I,k,ce,G),r.renderBufferDirect(I,null,k,ce,A,G),A.onAfterShadow(r,A,E,I,k,ce,G)}}}else if(W.visible){const Y=S(A,W,w,y);A.onBeforeShadow(r,A,E,I,k,Y,null),r.renderBufferDirect(I,null,k,Y,A,null),A.onAfterShadow(r,A,E,I,k,Y,null)}}const z=A.children;for(let k=0,W=z.length;k<W;k++)v(z[k],E,I,w,y)}function D(A){A.target.removeEventListener("dispose",D);for(const I in c){const w=c[I],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const Pg={[ro]:ao,[oo]:ho,[lo]:uo,[ss]:co,[ao]:ro,[ho]:oo,[uo]:lo,[co]:ss};function Lg(r,e){function t(){let P=!1;const ne=new Ye;let H=null;const $=new Ye(0,0,0,0);return{setMask:function(le){H!==le&&!P&&(r.colorMask(le,le,le,le),H=le)},setLocked:function(le){P=le},setClear:function(le,ae,De,ut,At){At===!0&&(le*=ut,ae*=ut,De*=ut),ne.set(le,ae,De,ut),$.equals(ne)===!1&&(r.clearColor(le,ae,De,ut),$.copy(ne))},reset:function(){P=!1,H=null,$.set(-1,0,0,0)}}}function n(){let P=!1,ne=!1,H=null,$=null,le=null;return{setReversed:function(ae){if(ne!==ae){const De=e.get("EXT_clip_control");ne?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const ut=le;le=null,this.setClear(ut)}ne=ae},getReversed:function(){return ne},setTest:function(ae){ae?se(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(ae){H!==ae&&!P&&(r.depthMask(ae),H=ae)},setFunc:function(ae){if(ne&&(ae=Pg[ae]),$!==ae){switch(ae){case ro:r.depthFunc(r.NEVER);break;case ao:r.depthFunc(r.ALWAYS);break;case oo:r.depthFunc(r.LESS);break;case ss:r.depthFunc(r.LEQUAL);break;case lo:r.depthFunc(r.EQUAL);break;case co:r.depthFunc(r.GEQUAL);break;case ho:r.depthFunc(r.GREATER);break;case uo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=ae}},setLocked:function(ae){P=ae},setClear:function(ae){le!==ae&&(ne&&(ae=1-ae),r.clearDepth(ae),le=ae)},reset:function(){P=!1,H=null,$=null,le=null,ne=!1}}}function i(){let P=!1,ne=null,H=null,$=null,le=null,ae=null,De=null,ut=null,At=null;return{setTest:function(Qe){P||(Qe?se(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(Qe){ne!==Qe&&!P&&(r.stencilMask(Qe),ne=Qe)},setFunc:function(Qe,sn,wn){(H!==Qe||$!==sn||le!==wn)&&(r.stencilFunc(Qe,sn,wn),H=Qe,$=sn,le=wn)},setOp:function(Qe,sn,wn){(ae!==Qe||De!==sn||ut!==wn)&&(r.stencilOp(Qe,sn,wn),ae=Qe,De=sn,ut=wn)},setLocked:function(Qe){P=Qe},setClear:function(Qe){At!==Qe&&(r.clearStencil(Qe),At=Qe)},reset:function(){P=!1,ne=null,H=null,$=null,le=null,ae=null,De=null,ut=null,At=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,S=null,v=null,D=null,A=null,E=new fe(0,0,0),I=0,w=!1,y=null,R=null,z=null,k=null,W=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=Z>=2);let ie=null,ce={};const ye=r.getParameter(r.SCISSOR_BOX),ke=r.getParameter(r.VIEWPORT),nt=new Ye().fromArray(ye),q=new Ye().fromArray(ke);function ee(P,ne,H,$){const le=new Uint8Array(4),ae=r.createTexture();r.bindTexture(P,ae),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<H;De++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(ne,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ne+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ae}const _e={};_e[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(r.DEPTH_TEST),a.setFunc(ss),Ve(!1),We(Rl),se(r.CULL_FACE),N(kn);function se(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function Te(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function Ie(P,ne){return d[P]!==ne?(r.bindFramebuffer(P,ne),d[P]=ne,P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ne),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ne),!0):!1}function ze(P,ne){let H=f,$=!1;if(P){H=u.get(ne),H===void 0&&(H=[],u.set(ne,H));const le=P.textures;if(H.length!==le.length||H[0]!==r.COLOR_ATTACHMENT0){for(let ae=0,De=le.length;ae<De;ae++)H[ae]=r.COLOR_ATTACHMENT0+ae;H.length=le.length,$=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,$=!0);$&&r.drawBuffers(H)}function ht(P){return g!==P?(r.useProgram(P),g=P,!0):!1}const qe={[mi]:r.FUNC_ADD,[Pd]:r.FUNC_SUBTRACT,[Ld]:r.FUNC_REVERSE_SUBTRACT};qe[Ud]=r.MIN,qe[Nd]=r.MAX;const pt={[Fd]:r.ZERO,[Od]:r.ONE,[Bd]:r.SRC_COLOR,[io]:r.SRC_ALPHA,[Wd]:r.SRC_ALPHA_SATURATE,[Gd]:r.DST_COLOR,[zd]:r.DST_ALPHA,[kd]:r.ONE_MINUS_SRC_COLOR,[so]:r.ONE_MINUS_SRC_ALPHA,[Vd]:r.ONE_MINUS_DST_COLOR,[Hd]:r.ONE_MINUS_DST_ALPHA,[Xd]:r.CONSTANT_COLOR,[qd]:r.ONE_MINUS_CONSTANT_COLOR,[jd]:r.CONSTANT_ALPHA,[$d]:r.ONE_MINUS_CONSTANT_ALPHA};function N(P,ne,H,$,le,ae,De,ut,At,Qe){if(P===kn){_===!0&&(Te(r.BLEND),_=!1);return}if(_===!1&&(se(r.BLEND),_=!0),P!==Dd){if(P!==m||Qe!==w){if((p!==mi||v!==mi)&&(r.blendEquation(r.FUNC_ADD),p=mi,v=mi),Qe)switch(P){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xs:r.blendFunc(r.ONE,r.ONE);break;case Il:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xs:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Il:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,S=null,D=null,A=null,E.set(0,0,0),I=0,m=P,w=Qe}return}le=le||ne,ae=ae||H,De=De||$,(ne!==p||le!==v)&&(r.blendEquationSeparate(qe[ne],qe[le]),p=ne,v=le),(H!==b||$!==S||ae!==D||De!==A)&&(r.blendFuncSeparate(pt[H],pt[$],pt[ae],pt[De]),b=H,S=$,D=ae,A=De),(ut.equals(E)===!1||At!==I)&&(r.blendColor(ut.r,ut.g,ut.b,At),E.copy(ut),I=At),m=P,w=!1}function Yt(P,ne){P.side===en?Te(r.CULL_FACE):se(r.CULL_FACE);let H=P.side===zt;ne&&(H=!H),Ve(H),P.blending===es&&P.transparent===!1?N(kn):N(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const $=P.stencilWrite;o.setTest($),$&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),at(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(P){y!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),y=P)}function We(P){P!==Rd?(se(r.CULL_FACE),P!==R&&(P===Rl?r.cullFace(r.BACK):P===Id?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),R=P}function Se(P){P!==z&&(V&&r.lineWidth(P),z=P)}function at(P,ne,H){P?(se(r.POLYGON_OFFSET_FILL),(k!==ne||W!==H)&&(r.polygonOffset(ne,H),k=ne,W=H)):Te(r.POLYGON_OFFSET_FILL)}function Me(P){P?se(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function T(P){P===void 0&&(P=r.TEXTURE0+Y-1),ie!==P&&(r.activeTexture(P),ie=P)}function x(P,ne,H){H===void 0&&(ie===null?H=r.TEXTURE0+Y-1:H=ie);let $=ce[H];$===void 0&&($={type:void 0,texture:void 0},ce[H]=$),($.type!==P||$.texture!==ne)&&(ie!==H&&(r.activeTexture(H),ie=H),r.bindTexture(P,ne||_e[P]),$.type=P,$.texture=ne)}function F(){const P=ce[ie];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(P){nt.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),nt.copy(P))}function ue(P){q.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Xe(P,ne){let H=c.get(ne);H===void 0&&(H=new WeakMap,c.set(ne,H));let $=H.get(P);$===void 0&&($=r.getUniformBlockIndex(ne,P.name),H.set(P,$))}function Ne(P,ne){const $=c.get(ne).get(P);l.get(ne)!==$&&(r.uniformBlockBinding(ne,$,P.__bindingPointIndex),l.set(ne,$))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ie=null,ce={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,S=null,v=null,D=null,A=null,E=new fe(0,0,0),I=0,w=!1,y=null,R=null,z=null,k=null,W=null,nt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Te,bindFramebuffer:Ie,drawBuffers:ze,useProgram:ht,setBlending:N,setMaterial:Yt,setFlipSided:Ve,setCullFace:We,setLineWidth:Se,setPolygonOffset:at,setScissorTest:Me,activeTexture:T,bindTexture:x,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:de,texImage3D:we,updateUBOMapping:Xe,uniformBlockBinding:Ne,texStorage2D:je,texStorage3D:J,texSubImage2D:X,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Ae,viewport:ue,reset:it}}function Ec(r,e,t,n){const i=Ug(n);switch(t){case Ch:return r*e;case Ih:return r*e;case Dh:return r*e*2;case il:return r*e/i.components*i.byteLength;case sl:return r*e/i.components*i.byteLength;case Ph:return r*e*2/i.components*i.byteLength;case rl:return r*e*2/i.components*i.byteLength;case Rh:return r*e*3/i.components*i.byteLength;case tn:return r*e*4/i.components*i.byteLength;case al:return r*e*4/i.components*i.byteLength;case Gr:case Vr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Xr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case go:case vo:return Math.max(r,16)*Math.max(e,8)/4;case mo:case _o:return Math.max(r,8)*Math.max(e,8)/2;case xo:case yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case wo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case To:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Co:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Io:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Do:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Po:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case No:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qr:case Fo:case Oo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Lh:case Bo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ko:case zo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ug(r){switch(r){case Vn:case Th:return{byteLength:1,components:1};case qs:case Eh:case zn:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case yi:case el:case un:return{byteLength:4,components:1};case Ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Ng(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Ys("canvas")}function _(T,x,F){let j=1;const K=Me(T);if((K.width>F||K.height>F)&&(j=F/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(j*K.width),ve=Math.floor(j*K.height);d===void 0&&(d=g(X,ve));const re=x?g(X,ve):d;return re.width=X,re.height=ve,re.getContext("2d").drawImage(T,0,0,X,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+ve+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){r.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(T,x,F,j,K=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===r.RED&&(F===r.FLOAT&&(X=r.R32F),F===r.HALF_FLOAT&&(X=r.R16F),F===r.UNSIGNED_BYTE&&(X=r.R8)),x===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.R8UI),F===r.UNSIGNED_SHORT&&(X=r.R16UI),F===r.UNSIGNED_INT&&(X=r.R32UI),F===r.BYTE&&(X=r.R8I),F===r.SHORT&&(X=r.R16I),F===r.INT&&(X=r.R32I)),x===r.RG&&(F===r.FLOAT&&(X=r.RG32F),F===r.HALF_FLOAT&&(X=r.RG16F),F===r.UNSIGNED_BYTE&&(X=r.RG8)),x===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RG8UI),F===r.UNSIGNED_SHORT&&(X=r.RG16UI),F===r.UNSIGNED_INT&&(X=r.RG32UI),F===r.BYTE&&(X=r.RG8I),F===r.SHORT&&(X=r.RG16I),F===r.INT&&(X=r.RG32I)),x===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGB8UI),F===r.UNSIGNED_SHORT&&(X=r.RGB16UI),F===r.UNSIGNED_INT&&(X=r.RGB32UI),F===r.BYTE&&(X=r.RGB8I),F===r.SHORT&&(X=r.RGB16I),F===r.INT&&(X=r.RGB32I)),x===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),F===r.UNSIGNED_INT&&(X=r.RGBA32UI),F===r.BYTE&&(X=r.RGBA8I),F===r.SHORT&&(X=r.RGBA16I),F===r.INT&&(X=r.RGBA32I)),x===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),x===r.RGBA){const ve=K?oa:Ge.getTransfer(j);F===r.FLOAT&&(X=r.RGBA32F),F===r.HALF_FLOAT&&(X=r.RGBA16F),F===r.UNSIGNED_BYTE&&(X=ve===tt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(T,x){let F;return T?x===null||x===yi||x===os?F=r.DEPTH24_STENCIL8:x===un?F=r.DEPTH32F_STENCIL8:x===qs&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yi||x===os?F=r.DEPTH_COMPONENT24:x===un?F=r.DEPTH_COMPONENT32F:x===qs&&(F=r.DEPTH_COMPONENT16),F}function D(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ht&&T.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),I(x),x.isVideoTexture&&h.delete(x)}function E(T){const x=T.target;x.removeEventListener("dispose",E),y(x)}function I(T){const x=n.get(T);if(x.__webglInit===void 0)return;const F=T.source,j=u.get(F);if(j){const K=j[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(T),Object.keys(j).length===0&&u.delete(F)}n.remove(T)}function w(T){const x=n.get(T);r.deleteTexture(x.__webglTexture);const F=T.source,j=u.get(F);delete j[x.__cacheKey],a.memory.textures--}function y(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let K=0;K<x.__webglFramebuffer[j].length;K++)r.deleteFramebuffer(x.__webglFramebuffer[j][K]);else r.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)r.deleteFramebuffer(x.__webglFramebuffer[j]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let j=0,K=F.length;j<K;j++){const X=n.get(F[j]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[j])}n.remove(T)}let R=0;function z(){R=0}function k(){const T=R;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Y(T,x){const F=n.get(T);if(T.isVideoTexture&&Se(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,T,x);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+x)}function V(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+x)}function Z(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,x);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+x)}function G(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){ee(F,T,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+x)}const ie={[Vt]:r.REPEAT,[ni]:r.CLAMP_TO_EDGE,[Jr]:r.MIRRORED_REPEAT},ce={[Ht]:r.NEAREST,[wh]:r.NEAREST_MIPMAP_NEAREST,[Ns]:r.NEAREST_MIPMAP_LINEAR,[$t]:r.LINEAR,[Hr]:r.LINEAR_MIPMAP_NEAREST,[Nn]:r.LINEAR_MIPMAP_LINEAR},ye={[hu]:r.NEVER,[gu]:r.ALWAYS,[du]:r.LESS,[Bh]:r.LEQUAL,[uu]:r.EQUAL,[mu]:r.GEQUAL,[fu]:r.GREATER,[pu]:r.NOTEQUAL};function ke(T,x){if(x.type===un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===$t||x.magFilter===Hr||x.magFilter===Ns||x.magFilter===Nn||x.minFilter===$t||x.minFilter===Hr||x.minFilter===Ns||x.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,ie[x.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,ie[x.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,ie[x.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,ce[x.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ht||x.minFilter!==Ns&&x.minFilter!==Nn||x.type===un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function nt(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const j=x.source;let K=u.get(j);K===void 0&&(K={},u.set(j,K));const X=W(x);if(X!==T.__cacheKey){K[X]===void 0&&(K[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[X].usedTimes++;const ve=K[T.__cacheKey];ve!==void 0&&(K[T.__cacheKey].usedTimes--,ve.usedTimes===0&&w(x)),T.__cacheKey=X,T.__webglTexture=K[X].texture}return F}function q(T,x,F){let j=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=r.TEXTURE_3D);const K=nt(T,x),X=x.source;t.bindTexture(j,T.__webglTexture,r.TEXTURE0+F);const ve=n.get(X);if(X.version!==ve.__version||K===!0){t.activeTexture(r.TEXTURE0+F);const re=Ge.getPrimaries(Ge.workingColorSpace),he=x.colorSpace===ti?null:Ge.getPrimaries(x.colorSpace),je=x.colorSpace===ti||re===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let J=_(x.image,!1,i.maxTextureSize);J=at(x,J);const de=s.convert(x.format,x.colorSpace),we=s.convert(x.type);let Ae=S(x.internalFormat,de,we,x.colorSpace,x.isVideoTexture);ke(j,x);let ue;const Xe=x.mipmaps,Ne=x.isVideoTexture!==!0,it=ve.__version===void 0||K===!0,P=X.dataReady,ne=D(x,J);if(x.isDepthTexture)Ae=v(x.format===ls,x.type),it&&(Ne?t.texStorage2D(r.TEXTURE_2D,1,Ae,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Ae,J.width,J.height,0,de,we,null));else if(x.isDataTexture)if(Xe.length>0){Ne&&it&&t.texStorage2D(r.TEXTURE_2D,ne,Ae,Xe[0].width,Xe[0].height);for(let H=0,$=Xe.length;H<$;H++)ue=Xe[H],Ne?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,ue.width,ue.height,de,we,ue.data):t.texImage2D(r.TEXTURE_2D,H,Ae,ue.width,ue.height,0,de,we,ue.data);x.generateMipmaps=!1}else Ne?(it&&t.texStorage2D(r.TEXTURE_2D,ne,Ae,J.width,J.height),P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,de,we,J.data)):t.texImage2D(r.TEXTURE_2D,0,Ae,J.width,J.height,0,de,we,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Ae,Xe[0].width,Xe[0].height,J.depth);for(let H=0,$=Xe.length;H<$;H++)if(ue=Xe[H],x.format!==tn)if(de!==null)if(Ne){if(P)if(x.layerUpdates.size>0){const le=Ec(ue.width,ue.height,x.format,x.type);for(const ae of x.layerUpdates){const De=ue.data.subarray(ae*le/ue.data.BYTES_PER_ELEMENT,(ae+1)*le/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,ae,ue.width,ue.height,1,de,De)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,ue.width,ue.height,J.depth,de,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,Ae,ue.width,ue.height,J.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?P&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,ue.width,ue.height,J.depth,de,we,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,Ae,ue.width,ue.height,J.depth,0,de,we,ue.data)}else{Ne&&it&&t.texStorage2D(r.TEXTURE_2D,ne,Ae,Xe[0].width,Xe[0].height);for(let H=0,$=Xe.length;H<$;H++)ue=Xe[H],x.format!==tn?de!==null?Ne?P&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,ue.width,ue.height,de,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,H,Ae,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,ue.width,ue.height,de,we,ue.data):t.texImage2D(r.TEXTURE_2D,H,Ae,ue.width,ue.height,0,de,we,ue.data)}else if(x.isDataArrayTexture)if(Ne){if(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Ae,J.width,J.height,J.depth),P)if(x.layerUpdates.size>0){const H=Ec(J.width,J.height,x.format,x.type);for(const $ of x.layerUpdates){const le=J.data.subarray($*H/J.data.BYTES_PER_ELEMENT,($+1)*H/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,de,we,le)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,we,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,de,we,J.data);else if(x.isData3DTexture)Ne?(it&&t.texStorage3D(r.TEXTURE_3D,ne,Ae,J.width,J.height,J.depth),P&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,we,J.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,de,we,J.data);else if(x.isFramebufferTexture){if(it)if(Ne)t.texStorage2D(r.TEXTURE_2D,ne,Ae,J.width,J.height);else{let H=J.width,$=J.height;for(let le=0;le<ne;le++)t.texImage2D(r.TEXTURE_2D,le,Ae,H,$,0,de,we,null),H>>=1,$>>=1}}else if(Xe.length>0){if(Ne&&it){const H=Me(Xe[0]);t.texStorage2D(r.TEXTURE_2D,ne,Ae,H.width,H.height)}for(let H=0,$=Xe.length;H<$;H++)ue=Xe[H],Ne?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,de,we,ue):t.texImage2D(r.TEXTURE_2D,H,Ae,de,we,ue);x.generateMipmaps=!1}else if(Ne){if(it){const H=Me(J);t.texStorage2D(r.TEXTURE_2D,ne,Ae,H.width,H.height)}P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,we,J)}else t.texImage2D(r.TEXTURE_2D,0,Ae,de,we,J);m(x)&&p(j),ve.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ee(T,x,F){if(x.image.length!==6)return;const j=nt(T,x),K=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+F);const X=n.get(K);if(K.version!==X.__version||j===!0){t.activeTexture(r.TEXTURE0+F);const ve=Ge.getPrimaries(Ge.workingColorSpace),re=x.colorSpace===ti?null:Ge.getPrimaries(x.colorSpace),he=x.colorSpace===ti||ve===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const je=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,de=[];for(let $=0;$<6;$++)!je&&!J?de[$]=_(x.image[$],!0,i.maxCubemapSize):de[$]=J?x.image[$].image:x.image[$],de[$]=at(x,de[$]);const we=de[0],Ae=s.convert(x.format,x.colorSpace),ue=s.convert(x.type),Xe=S(x.internalFormat,Ae,ue,x.colorSpace),Ne=x.isVideoTexture!==!0,it=X.__version===void 0||j===!0,P=K.dataReady;let ne=D(x,we);ke(r.TEXTURE_CUBE_MAP,x);let H;if(je){Ne&&it&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Xe,we.width,we.height);for(let $=0;$<6;$++){H=de[$].mipmaps;for(let le=0;le<H.length;le++){const ae=H[le];x.format!==tn?Ae!==null?Ne?P&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,Xe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,ae.width,ae.height,Ae,ue,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,Xe,ae.width,ae.height,0,Ae,ue,ae.data)}}}else{if(H=x.mipmaps,Ne&&it){H.length>0&&ne++;const $=Me(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Xe,$.width,$.height)}for(let $=0;$<6;$++)if(J){Ne?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,de[$].width,de[$].height,Ae,ue,de[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,de[$].width,de[$].height,0,Ae,ue,de[$].data);for(let le=0;le<H.length;le++){const De=H[le].image[$].image;Ne?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,De.width,De.height,Ae,ue,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,Xe,De.width,De.height,0,Ae,ue,De.data)}}else{Ne?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,ue,de[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,Ae,ue,de[$]);for(let le=0;le<H.length;le++){const ae=H[le];Ne?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,Ae,ue,ae.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,Xe,Ae,ue,ae.image[$])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),X.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function _e(T,x,F,j,K,X){const ve=s.convert(F.format,F.colorSpace),re=s.convert(F.type),he=S(F.internalFormat,ve,re,F.colorSpace),je=n.get(x),J=n.get(F);if(J.__renderTarget=x,!je.__hasExternalTextures){const de=Math.max(1,x.width>>X),we=Math.max(1,x.height>>X);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,X,he,de,we,x.depth,0,ve,re,null):t.texImage2D(K,X,he,de,we,0,ve,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),We(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,K,J.__webglTexture,0,Ve(x)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,K,J.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(T,x,F){if(r.bindRenderbuffer(r.RENDERBUFFER,T),x.depthBuffer){const j=x.depthTexture,K=j&&j.isDepthTexture?j.type:null,X=v(x.stencilBuffer,K),ve=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=Ve(x);We(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,X,x.width,x.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,X,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,X,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,T)}else{const j=x.textures;for(let K=0;K<j.length;K++){const X=j[K],ve=s.convert(X.format,X.colorSpace),re=s.convert(X.type),he=S(X.internalFormat,ve,re,X.colorSpace),je=Ve(x);F&&We(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,je,he,x.width,x.height):We(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,je,he,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,he,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const K=j.__webglTexture,X=Ve(x);if(x.depthTexture.format===ts)We(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(x.depthTexture.format===ls)We(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ie(T){const x=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Te(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=r.createRenderbuffer(),se(x.__webglDepthbuffer[j],T,!1);else{const K=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,X)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),se(x.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(T,x,F){const j=n.get(T);x!==void 0&&_e(j.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Ie(T)}function ht(T){const x=T.texture,F=n.get(T),j=n.get(x);T.addEventListener("dispose",E);const K=T.textures,X=T.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=x.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let he=0;he<x.mipmaps.length;he++)F.__webglFramebuffer[re][he]=r.createFramebuffer()}else F.__webglFramebuffer[re]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)F.__webglFramebuffer[re]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(ve)for(let re=0,he=K.length;re<he;re++){const je=n.get(K[re]);je.__webglTexture===void 0&&(je.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&We(T)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const he=K[re];F.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const je=s.convert(he.format,he.colorSpace),J=s.convert(he.type),de=S(he.internalFormat,je,J,he.colorSpace,T.isXRRenderTarget===!0),we=Ve(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,de,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,F.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),se(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),ke(r.TEXTURE_CUBE_MAP,x);for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)_e(F.__webglFramebuffer[re][he],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else _e(F.__webglFramebuffer[re],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(x)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,he=K.length;re<he;re++){const je=K[re],J=n.get(je);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),ke(r.TEXTURE_2D,je),_e(F.__webglFramebuffer,T,je,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,0),m(je)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),ke(re,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)_e(F.__webglFramebuffer[he],T,x,r.COLOR_ATTACHMENT0,re,he);else _e(F.__webglFramebuffer,T,x,r.COLOR_ATTACHMENT0,re,0);m(x)&&p(re),t.unbindTexture()}T.depthBuffer&&Ie(T)}function qe(T){const x=T.textures;for(let F=0,j=x.length;F<j;F++){const K=x[F];if(m(K)){const X=b(T),ve=n.get(K).__webglTexture;t.bindTexture(X,ve),p(X),t.unbindTexture()}}}const pt=[],N=[];function Yt(T){if(T.samples>0){if(We(T)===!1){const x=T.textures,F=T.width,j=T.height;let K=r.COLOR_BUFFER_BIT;const X=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(T),re=x.length>1;if(re)for(let he=0;he<x.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<x.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const je=n.get(x[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,je,0)}r.blitFramebuffer(0,0,F,j,0,0,F,j,K,r.NEAREST),l===!0&&(pt.length=0,N.length=0,pt.push(r.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.resolveDepthBuffer===!1&&(pt.push(X),N.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<x.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const je=n.get(x[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Ve(T){return Math.min(i.maxSamples,T.samples)}function We(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Se(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function at(T,x){const F=T.colorSpace,j=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Ut&&F!==ti&&(Ge.getTransfer(F)===tt?(j!==tn||K!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=ze,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=We}function Fg(r,e){function t(n,i=ti){let s;const a=Ge.getTransfer(i);if(n===Vn)return r.UNSIGNED_BYTE;if(n===tl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return r.BYTE;if(n===Eh)return r.SHORT;if(n===qs)return r.UNSIGNED_SHORT;if(n===el)return r.INT;if(n===yi)return r.UNSIGNED_INT;if(n===un)return r.FLOAT;if(n===zn)return r.HALF_FLOAT;if(n===Ch)return r.ALPHA;if(n===Rh)return r.RGB;if(n===tn)return r.RGBA;if(n===Ih)return r.LUMINANCE;if(n===Dh)return r.LUMINANCE_ALPHA;if(n===ts)return r.DEPTH_COMPONENT;if(n===ls)return r.DEPTH_STENCIL;if(n===il)return r.RED;if(n===sl)return r.RED_INTEGER;if(n===Ph)return r.RG;if(n===rl)return r.RG_INTEGER;if(n===al)return r.RGBA_INTEGER;if(n===Gr||n===Vr||n===Wr||n===Xr)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===yo||n===bo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xo||n===yo)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mo||n===So||n===wo||n===To||n===Eo||n===Ao||n===Co||n===Ro||n===Io||n===Do||n===Po||n===Lo||n===Uo||n===No)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ro)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===Fo||n===Oo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===qr)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lh||n===Bo||n===ko||n===zo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Og extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bt extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bg={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
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

}`;class Hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new xt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gt({vertexShader:kg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ce(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gg extends Si{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=new Hg,m=t.getContextAttributes();let p=null,b=null;const S=[],v=[],D=new be;let A=null;const E=new Ot;E.viewport=new Ye;const I=new Ot;I.viewport=new Ye;const w=[E,I],y=new Og;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=S[q];return ee===void 0&&(ee=new Ga,S[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=S[q];return ee===void 0&&(ee=new Ga,S[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=S[q];return ee===void 0&&(ee=new Ga,S[q]=ee),ee.getHandSpace()};function k(q){const ee=v.indexOf(q.inputSource);if(ee===-1)return;const _e=S[ee];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||a),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<S.length;q++){const ee=v[q];ee!==null&&(v[q]=null,S[q].disconnect(ee))}R=null,z=null,_.reset(),e.setRenderTarget(p),f=null,u=null,d=null,i=null,b=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new pn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,_e=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?ls:ts,_e=m.stencil?os:yi);const Te={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Te),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new pn(u.textureWidth,u.textureHeight,{format:tn,type:Vn,depthTexture:new Kh(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(q){for(let ee=0;ee<q.removed.length;ee++){const _e=q.removed[ee],se=v.indexOf(_e);se>=0&&(v[se]=null,S[se].disconnect(_e))}for(let ee=0;ee<q.added.length;ee++){const _e=q.added[ee];let se=v.indexOf(_e);if(se===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=v.length){v.push(_e),se=Ie;break}else if(v[Ie]===null){v[Ie]=_e,se=Ie;break}if(se===-1)break}const Te=S[se];Te&&Te.connect(_e)}}const V=new C,Z=new C;function G(q,ee,_e){V.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(_e.matrixWorld);const se=V.distanceTo(Z),Te=ee.projectionMatrix.elements,Ie=_e.projectionMatrix.elements,ze=Te[14]/(Te[10]-1),ht=Te[14]/(Te[10]+1),qe=(Te[9]+1)/Te[5],pt=(Te[9]-1)/Te[5],N=(Te[8]-1)/Te[0],Yt=(Ie[8]+1)/Ie[0],Ve=ze*N,We=ze*Yt,Se=se/(-N+Yt),at=Se*-N;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(Se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Me=ze+Se,T=ht+Se,x=Ve-at,F=We+(se-at),j=qe*ht/T*Me,K=pt*ht/T*Me;q.projectionMatrix.makePerspective(x,F,j,K,Me,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,_e=q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),y.near=I.near=E.near=ee,y.far=I.far=E.far=_e,(R!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,z=y.far),E.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,y.layers.mask=E.layers.mask|I.layers.mask;const se=q.parent,Te=y.cameras;ie(y,se);for(let Ie=0;Ie<Te.length;Ie++)ie(Te[Ie],se);Te.length===2?G(y,E,I):y.projectionMatrix.copy(E.projectionMatrix),ce(q,y,se)};function ce(q,ee,_e){_e===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ye=null;function ke(q,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){const _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let se=!1;_e.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let Ie=0;Ie<_e.length;Ie++){const ze=_e[Ie];let ht=null;if(f!==null)ht=f.getViewport(ze);else{const pt=d.getViewSubImage(u,ze);ht=pt.viewport,Ie===0&&(e.setRenderTargetTextures(b,pt.colorTexture,u.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(b))}let qe=w[Ie];qe===void 0&&(qe=new Ot,qe.layers.enable(Ie),qe.viewport=new Ye,w[Ie]=qe),qe.matrix.fromArray(ze.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ze.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ht.x,ht.y,ht.width,ht.height),Ie===0&&(y.matrix.copy(qe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(qe)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ie=d.getDepthInformation(_e[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,i.renderState)}}for(let _e=0;_e<S.length;_e++){const se=v[_e],Te=S[_e];se!==null&&Te!==void 0&&Te.update(se,ee,c||a)}ye&&ye(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const nt=new Yh;nt.setAnimationLoop(ke),this.setAnimationLoop=function(q){ye=q},this.dispose=function(){}}}const di=new xn,Vg=new Ue;function Wg(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,v=b.envMapRotation;S&&(m.envMap.value=S,di.copy(v),di.x*=-1,di.y*=-1,di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(di)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xg(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const v=S.program;n.uniformBlockBinding(b,v)}function c(b,S){let v=i[b.id];v===void 0&&(g(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",m));const D=S.program;n.updateUBOMapping(b,D);const A=e.render.frame;s[b.id]!==A&&(u(b),s[b.id]=A)}function h(b){const S=d();b.__bindingPointIndex=S;const v=r.createBuffer(),D=b.__size,A=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,D,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const S=i[b.id],v=b.uniforms,D=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,E=v.length;A<E;A++){const I=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,y=I.length;w<y;w++){const R=I[w];if(f(R,A,w,D)===!0){const z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let Y=0;Y<k.length;Y++){const V=k[Y],Z=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,z+W,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(b,S,v,D){const A=b.value,E=S+"_"+v;if(D[E]===void 0)return typeof A=="number"||typeof A=="boolean"?D[E]=A:D[E]=A.clone(),!0;{const I=D[E];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return D[E]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(b){const S=b.uniforms;let v=0;const D=16;for(let E=0,I=S.length;E<I;E++){const w=Array.isArray(S[E])?S[E]:[S[E]];for(let y=0,R=w.length;y<R;y++){const z=w[y],k=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Y=k.length;W<Y;W++){const V=k[W],Z=_(V),G=v%D,ie=G%Z.boundary,ce=G+ie;v+=ie,ce!==0&&D-ce<Z.storage&&(v+=D-ce),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=Z.storage}}}const A=v%D;return A>0&&(v+=D-A),b.__size=v,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class qg{constructor(e={}){const{canvas:t=Uu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let D=!1,A=0,E=0,I=null,w=-1,y=null;const R=new Ye,z=new Ye;let k=null;const W=new fe(0);let Y=0,V=t.width,Z=t.height,G=1,ie=null,ce=null;const ye=new Ye(0,0,V,Z),ke=new Ye(0,0,V,Z);let nt=!1;const q=new cl;let ee=!1,_e=!1;const se=new Ue,Te=new Ue,Ie=new C,ze=new Ye,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function pt(){return I===null?G:1}let N=n;function Yt(M,L){return t.getContext(M,L)}try{const M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){const L="webgl2";if(N=Yt(L,M),N===null)throw Yt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ve,We,Se,at,Me,T,x,F,j,K,X,ve,re,he,je,J,de,we,Ae,ue,Xe,Ne,it,P;function ne(){Ve=new Zm(N),Ve.init(),Ne=new Fg(N,Ve),We=new Xm(N,Ve,e,Ne),Se=new Lg(N,Ve),We.reverseDepthBuffer&&u&&Se.buffers.depth.setReversed(!0),at=new e0(N),Me=new vg,T=new Ng(N,Ve,Se,Me,We,Ne,at),x=new jm(v),F=new Km(v),j=new of(N),it=new Vm(N,j),K=new Jm(N,j,at,it),X=new n0(N,K,j,at),Ae=new t0(N,We,T),J=new qm(Me),ve=new _g(v,x,F,Ve,We,it,J),re=new Wg(v,Me),he=new yg,je=new Eg(Ve),we=new Gm(v,x,F,Se,X,f,l),de=new Dg(v,X,We),P=new Xg(N,at,We,Se),ue=new Wm(N,Ve,at),Xe=new Qm(N,Ve,at),at.programs=ve.programs,v.capabilities=We,v.extensions=Ve,v.properties=Me,v.renderLists=he,v.shadowMap=de,v.state=Se,v.info=at}ne();const H=new Gg(v,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(V,Z,!1))},this.getSize=function(M){return M.set(V,Z)},this.setSize=function(M,L,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,Z=L,t.width=Math.floor(M*G),t.height=Math.floor(L*G),O===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(V*G,Z*G).floor()},this.setDrawingBufferSize=function(M,L,O){V=M,Z=L,G=O,t.width=Math.floor(M*O),t.height=Math.floor(L*O),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(ye)},this.setViewport=function(M,L,O,B){M.isVector4?ye.set(M.x,M.y,M.z,M.w):ye.set(M,L,O,B),Se.viewport(R.copy(ye).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(ke)},this.setScissor=function(M,L,O,B){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,L,O,B),Se.scissor(z.copy(ke).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(M){Se.setScissorTest(nt=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(M=!0,L=!0,O=!0){let B=0;if(M){let U=!1;if(I!==null){const Q=I.texture.format;U=Q===al||Q===rl||Q===sl}if(U){const Q=I.texture.type,oe=Q===Vn||Q===yi||Q===qs||Q===os||Q===tl||Q===nl,pe=we.getClearColor(),me=we.getClearAlpha(),Re=pe.r,Pe=pe.g,ge=pe.b;oe?(g[0]=Re,g[1]=Pe,g[2]=ge,g[3]=me,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Re,_[1]=Pe,_[2]=ge,_[3]=me,N.clearBufferiv(N.COLOR,0,_))}else B|=N.COLOR_BUFFER_BIT}L&&(B|=N.DEPTH_BUFFER_BIT),O&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),je.dispose(),Me.dispose(),x.dispose(),F.dispose(),X.dispose(),it.dispose(),P.dispose(),ve.dispose(),H.dispose(),H.removeEventListener("sessionstart",bl),H.removeEventListener("sessionend",Ml),ri.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const M=at.autoReset,L=de.enabled,O=de.autoUpdate,B=de.needsUpdate,U=de.type;ne(),at.autoReset=M,de.enabled=L,de.autoUpdate=O,de.needsUpdate=B,de.type=U}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function De(M){const L=M.target;L.removeEventListener("dispose",De),ut(L)}function ut(M){At(M),Me.remove(M)}function At(M){const L=Me.get(M).programs;L!==void 0&&(L.forEach(function(O){ve.releaseProgram(O)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,O,B,U,Q){L===null&&(L=ht);const oe=U.isMesh&&U.matrixWorld.determinant()<0,pe=Ed(M,L,O,B,U);Se.setMaterial(B,oe);let me=O.index,Re=1;if(B.wireframe===!0){if(me=K.getWireframeAttribute(O),me===void 0)return;Re=2}const Pe=O.drawRange,ge=O.attributes.position;let $e=Pe.start*Re,st=(Pe.start+Pe.count)*Re;Q!==null&&($e=Math.max($e,Q.start*Re),st=Math.min(st,(Q.start+Q.count)*Re)),me!==null?($e=Math.max($e,0),st=Math.min(st,me.count)):ge!=null&&($e=Math.max($e,0),st=Math.min(st,ge.count));const ot=st-$e;if(ot<0||ot===1/0)return;it.setup(U,B,pe,O,me);let Gt,Ke=ue;if(me!==null&&(Gt=j.get(me),Ke=Xe,Ke.setIndex(Gt)),U.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*pt()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(U.isLine){let xe=B.linewidth;xe===void 0&&(xe=1),Se.setLineWidth(xe*pt()),U.isLineSegments?Ke.setMode(N.LINES):U.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else U.isPoints?Ke.setMode(N.POINTS):U.isSprite&&Ke.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const xe=U._multiDrawStarts,Tn=U._multiDrawCounts,Ze=U._multiDrawCount,rn=me?j.get(me).bytesPerElement:1,Ei=Me.get(B).currentProgram.getUniforms();for(let Wt=0;Wt<Ze;Wt++)Ei.setValue(N,"_gl_DrawID",Wt),Ke.render(xe[Wt]/rn,Tn[Wt])}else if(U.isInstancedMesh)Ke.renderInstances($e,ot,U.count);else if(O.isInstancedBufferGeometry){const xe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Tn=Math.min(O.instanceCount,xe);Ke.renderInstances($e,ot,Tn)}else Ke.render($e,ot)};function Qe(M,L,O){M.transparent===!0&&M.side===en&&M.forceSinglePass===!1?(M.side=zt,M.needsUpdate=!0,rr(M,L,O),M.side=Gn,M.needsUpdate=!0,rr(M,L,O),M.side=en):rr(M,L,O)}this.compile=function(M,L,O=null){O===null&&(O=M),p=je.get(O),p.init(L),S.push(p),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==O&&M.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const B=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const pe=Q[oe];Qe(pe,O,U),B.add(pe)}else Qe(Q,O,U),B.add(Q)}),S.pop(),p=null,B},this.compileAsync=function(M,L,O=null){const B=this.compile(M,L,O);return new Promise(U=>{function Q(){if(B.forEach(function(oe){Me.get(oe).currentProgram.isReady()&&B.delete(oe)}),B.size===0){U(M);return}setTimeout(Q,10)}Ve.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let sn=null;function wn(M){sn&&sn(M)}function bl(){ri.stop()}function Ml(){ri.start()}const ri=new Yh;ri.setAnimationLoop(wn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(M){sn=M,H.setAnimationLoop(M),M===null?ri.stop():ri.start()},H.addEventListener("sessionstart",bl),H.addEventListener("sessionend",Ml),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(L),L=H.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,L,I),p=je.get(M,S.length),p.init(L),S.push(p),Te.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(Te),_e=this.localClippingEnabled,ee=J.init(this.clippingPlanes,_e),m=he.get(M,b.length),m.init(),b.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&pa(Q,L,-1/0,v.sortObjects)}pa(M,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ie,ce),qe=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,qe&&we.addToRenderList(m,M),this.info.render.frame++,ee===!0&&J.beginShadows();const O=p.state.shadowsArray;de.render(O,M,L),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(p.setupLights(),L.isArrayCamera){const Q=L.cameras;if(U.length>0)for(let oe=0,pe=Q.length;oe<pe;oe++){const me=Q[oe];wl(B,U,M,me)}qe&&we.render(M);for(let oe=0,pe=Q.length;oe<pe;oe++){const me=Q[oe];Sl(m,M,me,me.viewport)}}else U.length>0&&wl(B,U,M,L),qe&&we.render(M),Sl(m,M,L);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(v,M,L),it.resetDefaultState(),w=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],ee===!0&&J.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function pa(M,L,O,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){B&&ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const oe=X.update(M),pe=M.material;pe.visible&&m.push(M,oe,pe,O,ze.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const oe=X.update(M),pe=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ze.copy(M.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),ze.copy(oe.boundingSphere.center)),ze.applyMatrix4(M.matrixWorld).applyMatrix4(Te)),Array.isArray(pe)){const me=oe.groups;for(let Re=0,Pe=me.length;Re<Pe;Re++){const ge=me[Re],$e=pe[ge.materialIndex];$e&&$e.visible&&m.push(M,oe,$e,O,ze.z,ge)}}else pe.visible&&m.push(M,oe,pe,O,ze.z,null)}}const Q=M.children;for(let oe=0,pe=Q.length;oe<pe;oe++)pa(Q[oe],L,O,B)}function Sl(M,L,O,B){const U=M.opaque,Q=M.transmissive,oe=M.transparent;p.setupLightsView(O),ee===!0&&J.setGlobalState(v.clippingPlanes,O),B&&Se.viewport(R.copy(B)),U.length>0&&sr(U,L,O),Q.length>0&&sr(Q,L,O),oe.length>0&&sr(oe,L,O),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function wl(M,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new pn(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?zn:Vn,minFilter:Nn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const Q=p.state.transmissionRenderTarget[B.id],oe=B.viewport||R;Q.setSize(oe.z,oe.w);const pe=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(W),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),qe&&we.render(O);const me=v.toneMapping;v.toneMapping=si;const Re=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),ee===!0&&J.setGlobalState(v.clippingPlanes,B),sr(M,O,B),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ge=0,$e=L.length;ge<$e;ge++){const st=L[ge],ot=st.object,Gt=st.geometry,Ke=st.material,xe=st.group;if(Ke.side===en&&ot.layers.test(B.layers)){const Tn=Ke.side;Ke.side=zt,Ke.needsUpdate=!0,Tl(ot,O,B,Gt,Ke,xe),Ke.side=Tn,Ke.needsUpdate=!0,Pe=!0}}Pe===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}v.setRenderTarget(pe),v.setClearColor(W,Y),Re!==void 0&&(B.viewport=Re),v.toneMapping=me}function sr(M,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let U=0,Q=M.length;U<Q;U++){const oe=M[U],pe=oe.object,me=oe.geometry,Re=B===null?oe.material:B,Pe=oe.group;pe.layers.test(O.layers)&&Tl(pe,L,O,me,Re,Pe)}}function Tl(M,L,O,B,U,Q){M.onBeforeRender(v,L,O,B,U,Q),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(v,L,O,B,M,Q),U.transparent===!0&&U.side===en&&U.forceSinglePass===!1?(U.side=zt,U.needsUpdate=!0,v.renderBufferDirect(O,L,B,U,M,Q),U.side=Gn,U.needsUpdate=!0,v.renderBufferDirect(O,L,B,U,M,Q),U.side=en):v.renderBufferDirect(O,L,B,U,M,Q),M.onAfterRender(v,L,O,B,U,Q)}function rr(M,L,O){L.isScene!==!0&&(L=ht);const B=Me.get(M),U=p.state.lights,Q=p.state.shadowsArray,oe=U.state.version,pe=ve.getParameters(M,U.state,Q,L,O),me=ve.getProgramCacheKey(pe);let Re=B.programs;B.environment=M.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(M.isMeshStandardMaterial?F:x).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",De),Re=new Map,B.programs=Re);let Pe=Re.get(me);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===oe)return Al(M,pe),Pe}else pe.uniforms=ve.getUniforms(M),M.onBeforeCompile(pe,v),Pe=ve.acquireProgram(pe,me),Re.set(me,Pe),B.uniforms=pe.uniforms;const ge=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ge.clippingPlanes=J.uniform),Al(M,pe),B.needsLights=Cd(M),B.lightsStateVersion=oe,B.needsLights&&(ge.ambientLightColor.value=U.state.ambient,ge.lightProbe.value=U.state.probe,ge.directionalLights.value=U.state.directional,ge.directionalLightShadows.value=U.state.directionalShadow,ge.spotLights.value=U.state.spot,ge.spotLightShadows.value=U.state.spotShadow,ge.rectAreaLights.value=U.state.rectArea,ge.ltc_1.value=U.state.rectAreaLTC1,ge.ltc_2.value=U.state.rectAreaLTC2,ge.pointLights.value=U.state.point,ge.pointLightShadows.value=U.state.pointShadow,ge.hemisphereLights.value=U.state.hemi,ge.directionalShadowMap.value=U.state.directionalShadowMap,ge.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ge.spotShadowMap.value=U.state.spotShadowMap,ge.spotLightMatrix.value=U.state.spotLightMatrix,ge.spotLightMap.value=U.state.spotLightMap,ge.pointShadowMap.value=U.state.pointShadowMap,ge.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function El(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=jr.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Al(M,L){const O=Me.get(M);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Ed(M,L,O,B,U){L.isScene!==!0&&(L=ht),T.resetTextureUnits();const Q=L.fog,oe=B.isMeshStandardMaterial?L.environment:null,pe=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ut,me=(B.isMeshStandardMaterial?F:x).get(B.envMap||oe),Re=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ge=!!O.morphAttributes.position,$e=!!O.morphAttributes.normal,st=!!O.morphAttributes.color;let ot=si;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ot=v.toneMapping);const Gt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ke=Gt!==void 0?Gt.length:0,xe=Me.get(B),Tn=p.state.lights;if(ee===!0&&(_e===!0||M!==y)){const Kt=M===y&&B.id===w;J.setState(B,M,Kt)}let Ze=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Tn.state.version||xe.outputColorSpace!==pe||U.isBatchedMesh&&xe.batching===!1||!U.isBatchedMesh&&xe.batching===!0||U.isBatchedMesh&&xe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xe.instancing===!1||!U.isInstancedMesh&&xe.instancing===!0||U.isSkinnedMesh&&xe.skinning===!1||!U.isSkinnedMesh&&xe.skinning===!0||U.isInstancedMesh&&xe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xe.instancingMorph===!1&&U.morphTexture!==null||xe.envMap!==me||B.fog===!0&&xe.fog!==Q||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==J.numPlanes||xe.numIntersection!==J.numIntersection)||xe.vertexAlphas!==Re||xe.vertexTangents!==Pe||xe.morphTargets!==ge||xe.morphNormals!==$e||xe.morphColors!==st||xe.toneMapping!==ot||xe.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,xe.__version=B.version);let rn=xe.currentProgram;Ze===!0&&(rn=rr(B,L,U));let Ei=!1,Wt=!1,ys=!1;const lt=rn.getUniforms(),gn=xe.uniforms;if(Se.useProgram(rn.program)&&(Ei=!0,Wt=!0,ys=!0),B.id!==w&&(w=B.id,Wt=!0),Ei||y!==M){Se.buffers.depth.getReversed()?(se.copy(M.projectionMatrix),Fu(se),Ou(se),lt.setValue(N,"projectionMatrix",se)):lt.setValue(N,"projectionMatrix",M.projectionMatrix),lt.setValue(N,"viewMatrix",M.matrixWorldInverse);const qn=lt.map.cameraPosition;qn!==void 0&&qn.setValue(N,Ie.setFromMatrixPosition(M.matrixWorld)),We.logarithmicDepthBuffer&&lt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Wt=!0,ys=!0)}if(U.isSkinnedMesh){lt.setOptional(N,U,"bindMatrix"),lt.setOptional(N,U,"bindMatrixInverse");const Kt=U.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),lt.setValue(N,"boneTexture",Kt.boneTexture,T))}U.isBatchedMesh&&(lt.setOptional(N,U,"batchingTexture"),lt.setValue(N,"batchingTexture",U._matricesTexture,T),lt.setOptional(N,U,"batchingIdTexture"),lt.setValue(N,"batchingIdTexture",U._indirectTexture,T),lt.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(N,"batchingColorTexture",U._colorsTexture,T));const bs=O.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0)&&Ae.update(U,O,rn),(Wt||xe.receiveShadow!==U.receiveShadow)&&(xe.receiveShadow=U.receiveShadow,lt.setValue(N,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(gn.envMap.value=me,gn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(gn.envMapIntensity.value=L.environmentIntensity),Wt&&(lt.setValue(N,"toneMappingExposure",v.toneMappingExposure),xe.needsLights&&Ad(gn,ys),Q&&B.fog===!0&&re.refreshFogUniforms(gn,Q),re.refreshMaterialUniforms(gn,B,G,Z,p.state.transmissionRenderTarget[M.id]),jr.upload(N,El(xe),gn,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(jr.upload(N,El(xe),gn,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(N,"center",U.center),lt.setValue(N,"modelViewMatrix",U.modelViewMatrix),lt.setValue(N,"normalMatrix",U.normalMatrix),lt.setValue(N,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Kt=B.uniformsGroups;for(let qn=0,jn=Kt.length;qn<jn;qn++){const Cl=Kt[qn];P.update(Cl,rn),P.bind(Cl,rn)}}return rn}function Ad(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Cd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,L,O){Me.get(M.texture).__webglTexture=L,Me.get(M.depthTexture).__webglTexture=O;const B=Me.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const O=Me.get(M);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,O=0){I=M,A=L,E=O;let B=!0,U=null,Q=!1,oe=!1;if(M){const me=Me.get(M);if(me.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(me.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(me.__hasExternalTextures)T.rebindTextures(M,Me.get(M.texture).__webglTexture,Me.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ge=M.depthTexture;if(me.__boundDepthTexture!==ge){if(ge!==null&&Me.has(ge)&&(M.width!==ge.image.width||M.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(oe=!0);const Pe=Me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[L])?U=Pe[L][O]:U=Pe[L],Q=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?U=Me.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[O]:U=Pe,R.copy(M.viewport),z.copy(M.scissor),k=M.scissorTest}else R.copy(ye).multiplyScalar(G).floor(),z.copy(ke).multiplyScalar(G).floor(),k=nt;if(Se.bindFramebuffer(N.FRAMEBUFFER,U)&&B&&Se.drawBuffers(M,U),Se.viewport(R),Se.scissor(z),Se.setScissorTest(k),Q){const me=Me.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,O)}else if(oe){const me=Me.get(M.texture),Re=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.__webglTexture,O||0,Re)}w=-1},this.readRenderTargetPixels=function(M,L,O,B,U,Q,oe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){Se.bindFramebuffer(N.FRAMEBUFFER,pe);try{const me=M.texture,Re=me.format,Pe=me.type;if(!We.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&O>=0&&O<=M.height-U&&N.readPixels(L,O,B,U,Ne.convert(Re),Ne.convert(Pe),Q)}finally{const me=I!==null?Me.get(I).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,L,O,B,U,Q,oe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){const me=M.texture,Re=me.format,Pe=me.type;if(!We.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-B&&O>=0&&O<=M.height-U){Se.bindFramebuffer(N.FRAMEBUFFER,pe);const ge=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ge),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(L,O,B,U,Ne.convert(Re),Ne.convert(Pe),0);const $e=I!==null?Me.get(I).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,$e);const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Nu(N,st,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ge),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(ge),N.deleteSync(st),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,O=0){M.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-O),U=Math.floor(M.image.width*B),Q=Math.floor(M.image.height*B),oe=L!==null?L.x:0,pe=L!==null?L.y:0;T.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,oe,pe,U,Q),Se.unbindTexture()},this.copyTextureToTexture=function(M,L,O=null,B=null,U=0){M.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],L=arguments[2],U=arguments[3]||0,O=null);let Q,oe,pe,me,Re,Pe,ge,$e,st;const ot=M.isCompressedTexture?M.mipmaps[U]:M.image;O!==null?(Q=O.max.x-O.min.x,oe=O.max.y-O.min.y,pe=O.isBox3?O.max.z-O.min.z:1,me=O.min.x,Re=O.min.y,Pe=O.isBox3?O.min.z:0):(Q=ot.width,oe=ot.height,pe=ot.depth||1,me=0,Re=0,Pe=0),B!==null?(ge=B.x,$e=B.y,st=B.z):(ge=0,$e=0,st=0);const Gt=Ne.convert(L.format),Ke=Ne.convert(L.type);let xe;L.isData3DTexture?(T.setTexture3D(L,0),xe=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),xe=N.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),xe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const Tn=N.getParameter(N.UNPACK_ROW_LENGTH),Ze=N.getParameter(N.UNPACK_IMAGE_HEIGHT),rn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ei=N.getParameter(N.UNPACK_SKIP_ROWS),Wt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ot.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,me),N.pixelStorei(N.UNPACK_SKIP_ROWS,Re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe);const ys=M.isDataArrayTexture||M.isData3DTexture,lt=L.isDataArrayTexture||L.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const gn=Me.get(M),bs=Me.get(L),Kt=Me.get(gn.__renderTarget),qn=Me.get(bs.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let jn=0;jn<pe;jn++)ys&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(M).__webglTexture,U,Pe+jn),M.isDepthTexture?(lt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(L).__webglTexture,U,st+jn),N.blitFramebuffer(me,Re,Q,oe,ge,$e,Q,oe,N.DEPTH_BUFFER_BIT,N.NEAREST)):lt?N.copyTexSubImage3D(xe,U,ge,$e,st+jn,me,Re,Q,oe):N.copyTexSubImage2D(xe,U,ge,$e,st+jn,me,Re,Q,oe);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else lt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(xe,U,ge,$e,st,Q,oe,pe,Gt,Ke,ot.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,U,ge,$e,st,Q,oe,pe,Gt,ot.data):N.texSubImage3D(xe,U,ge,$e,st,Q,oe,pe,Gt,Ke,ot):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,ge,$e,Q,oe,Gt,Ke,ot.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,ge,$e,ot.width,ot.height,Gt,ot.data):N.texSubImage2D(N.TEXTURE_2D,U,ge,$e,Q,oe,Gt,Ke,ot);N.pixelStorei(N.UNPACK_ROW_LENGTH,Tn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),N.pixelStorei(N.UNPACK_SKIP_PIXELS,rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ei),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Wt),U===0&&L.generateMipmaps&&N.generateMipmap(xe),Se.unbindTexture()},this.copyTextureToTexture3D=function(M,L,O=null,B=null,U=0){return M.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,M=arguments[2],L=arguments[3],U=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,L,O,B,U)},this.initRenderTarget=function(M){Me.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){A=0,E=0,I=null,Se.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}class dl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new dl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class na{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new na(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jg extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $g{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Go,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new C;class ul{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Be(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ul(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ac=new C,Cc=new Ye,Rc=new Ye,Yg=new C,Ic=new Ue,Er=new C,Va=new yn,Dc=new Ue,Wa=new la;class Kg extends Ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pl,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingBox.expandByPoint(Er)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingSphere.expandByPoint(Er)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(i),e.ray.intersectsSphere(Va)!==!1&&(Dc.copy(i).invert(),Wa.copy(e.ray).applyMatrix4(Dc),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Cc.fromBufferAttribute(i.attributes.skinIndex,e),Rc.fromBufferAttribute(i.attributes.skinWeight,e),Ac.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Rc.getComponent(s);if(a!==0){const o=Cc.getComponent(s);Ic.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Yg.copy(Ac).applyMatrix4(Ic),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class td extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nd extends xt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Ht,h=Ht,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pc=new Ue,Zg=new Ue;class fl{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Zg;Pc.multiplyMatrices(o,t[s]),Pc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new nd(t,e,e,tn,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new td),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Wo extends Be{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hi=new Ue,Lc=new Ue,Ar=[],Uc=new mn,Jg=new Ue,Es=new Ce,As=new yn;class Qg extends Ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),Uc.copy(e.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Uc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),As.copy(e.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),e.ray.intersectsSphere(As)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Hi),Lc.multiplyMatrices(n,Hi),Es.matrixWorld=Lc,Es.raycast(e,Ar);for(let a=0,o=Ar.length;a<o;a++){const l=Ar[a];l.instanceId=s,l.object=this,t.push(l)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nd(new Float32Array(i*this.count),i,this.count,il,un));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class id extends vn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ia=new C,sa=new C,Nc=new Ue,Cs=new la,Cr=new yn,Xa=new C,Fc=new C;class pl extends ct{constructor(e=new dt,t=new id){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ia.fromBufferAttribute(t,i-1),sa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ia.distanceTo(sa);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=s,e.ray.intersectsSphere(Cr)===!1)return;Nc.copy(i).invert(),Cs.copy(e.ray).applyMatrix4(Nc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),b=h.getX(_+1),S=Rr(this,e,Cs,l,p,b);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Rr(this,e,Cs,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Rr(this,e,Cs,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Rr(this,e,Cs,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rr(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(ia.fromBufferAttribute(a,i),sa.fromBufferAttribute(a,s),t.distanceSqToSegment(ia,sa,Xa,Fc)>n)return;Xa.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Xa);if(!(l<e.near||l>e.far))return{distance:l,point:Fc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Oc=new C,Bc=new C;class e_ extends pl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Oc.fromBufferAttribute(t,i),Bc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Oc.distanceTo(Bc);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class t_ extends pl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sd extends vn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kc=new Ue,Xo=new la,Ir=new yn,Dr=new C;class _i extends ct{constructor(e=new dt,t=new sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;kc.copy(i).invert(),Xo.copy(e.ray).applyMatrix4(kc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);Dr.fromBufferAttribute(d,m),zc(Dr,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)Dr.fromBufferAttribute(d,g),zc(Dr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zc(r,e,t,n,i,s,a){const o=Xo.distanceSqToPoint(r);if(o<t){const l=new C;Xo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wn extends xt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ks extends dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new C,h=new be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zs extends dt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function b(){const v=new C,D=new C;let A=0;const E=(t-e)/n;for(let I=0;I<=s;I++){const w=[],y=I/s,R=y*(t-e)+e;for(let z=0;z<=i;z++){const k=z/i,W=k*l+o,Y=Math.sin(W),V=Math.cos(W);D.x=R*Y,D.y=-y*n+m,D.z=R*V,d.push(D.x,D.y,D.z),v.set(Y,E,V).normalize(),u.push(v.x,v.y,v.z),f.push(k,1-y),w.push(g++)}_.push(w)}for(let I=0;I<i;I++)for(let w=0;w<s;w++){const y=_[w][I],R=_[w+1][I],z=_[w+1][I+1],k=_[w][I+1];(e>0||w!==0)&&(h.push(y,R,k),A+=3),(t>0||w!==s-1)&&(h.push(R,z,k),A+=3)}c.addGroup(p,A,0),p+=A}function S(v){const D=g,A=new be,E=new C;let I=0;const w=v===!0?e:t,y=v===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;const R=g;for(let z=0;z<=i;z++){const W=z/i*l+o,Y=Math.cos(W),V=Math.sin(W);E.x=w*V,E.y=m*y,E.z=w*Y,d.push(E.x,E.y,E.z),u.push(0,y,0),A.x=Y*.5+.5,A.y=V*.5*y+.5,f.push(A.x,A.y),g++}for(let z=0;z<i;z++){const k=D+z,W=R+z;v===!0?h.push(W,W+1,k):h.push(W+1,W,k),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class da extends Zs{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new da(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ml extends dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const S=new C,v=new C,D=new C;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],v),f(t[A+2],D),l(S,v,D,b)}function l(b,S,v,D){const A=D+1,E=[];for(let I=0;I<=A;I++){E[I]=[];const w=b.clone().lerp(v,I/A),y=S.clone().lerp(v,I/A),R=A-I;for(let z=0;z<=R;z++)z===0&&I===A?E[I][z]=w:E[I][z]=w.clone().lerp(y,z/R)}for(let I=0;I<A;I++)for(let w=0;w<2*(A-I)-1;w++){const y=Math.floor(w/2);w%2===0?(u(E[I][y+1]),u(E[I+1][y]),u(E[I][y])):(u(E[I][y+1]),u(E[I+1][y+1]),u(E[I+1][y]))}}function c(b){const S=new C;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(b),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function h(){const b=new C;for(let S=0;S<s.length;S+=3){b.x=s[S+0],b.y=s[S+1],b.z=s[S+2];const v=m(b)/2/Math.PI+.5,D=p(b)/Math.PI+.5;a.push(v,1-D)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){const S=a[b+0],v=a[b+2],D=a[b+4],A=Math.max(S,v,D),E=Math.min(S,v,D);A>.9&&E<.1&&(S<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),D<.2&&(a[b+4]+=1))}}function u(b){s.push(b.x,b.y,b.z)}function f(b,S){const v=b*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const b=new C,S=new C,v=new C,D=new C,A=new be,E=new be,I=new be;for(let w=0,y=0;w<s.length;w+=9,y+=6){b.set(s[w+0],s[w+1],s[w+2]),S.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),A.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),D.copy(b).add(S).add(v).divideScalar(3);const R=m(D);_(A,y+0,b,R),_(E,y+2,S,R),_(I,y+4,v,R)}}function _(b,S,v,D){D<0&&b.x===1&&(a[S]=b.x-1),v.x===0&&v.z===0&&(a[S]=D/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.vertices,e.indices,e.radius,e.details)}}class Gs extends ml{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gs(e.radius,e.detail)}}class ua extends dt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new C,g=new be;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const b=p+m,S=b,v=b+n+1,D=b+n+2,A=b+1;o.push(S,v,A),o.push(v,D,A)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _s extends dt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new C,u=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],S=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let D=0;D<=t;D++){const A=D/t;d.x=-e*Math.cos(i+A*s)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(i+A*s)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+v,1-S),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const S=h[p][b+1],v=h[p][b],D=h[p+1][b],A=h[p+1][b+1];(p!==0||a>0)&&f.push(S,v,A),(p!==n-1||l<Math.PI)&&f.push(v,D,A)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oe extends vn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oh,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bn extends Oe{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Pr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function n_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function i_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function rd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Js{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class s_ extends Js{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ji,endingEnd:ji}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case $i:s=e,o=2*t-n;break;case Qr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $i:a=e,l=2*n-t;break;case Qr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,b=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let D=0;D!==o;++D)s[D]=p*a[h+D]+b*a[c+D]+S*a[l+D]+v*a[d+D];return s}}class ad extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}}class r_ extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new r_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new s_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&n_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ma,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=$s;class vs extends Mn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=js;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class od extends Mn{}od.prototype.ValueTypeName="color";class ds extends Mn{}ds.prototype.ValueTypeName="number";class a_ extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)kt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class us extends Mn{InterpolantFactoryMethodLinear(e){return new a_(this.times,this.values,this.getValueSize(),e)}}us.prototype.ValueTypeName="quaternion";us.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Mn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=js;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Mn{}fs.prototype.ValueTypeName="vector";class qo{constructor(e="",t=-1,n=[],i=ol){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(l_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Mn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=i_(l);l=Hc(l,1,h),c=Hc(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ds(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const m=[],p=[];rd(f,m,p,g),m.length!==0&&_.push(new d(u,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let b=0;b!==u[g].morphTargets.length;++b){const S=u[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new ds(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(fs,f+".position",u,"pos",i),n(us,f+".quaternion",u,"rot",i),n(fs,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function o_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return od;case"quaternion":return us;case"bool":case"boolean":return vs;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function l_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=o_(r.type);if(r.times===void 0){const t=[],n=[];rd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ii={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class c_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const h_=new c_;class wi{constructor(e){this.manager=e!==void 0?e:h_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn={};class d_ extends Error{constructor(e,t){super(e),this.response=t}}class ra extends wi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ii.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:n,onError:i});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Dn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){d.read().then(({done:S,value:v})=>{if(S)p.close();else{_+=v.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,E=h.length;A<E;A++){const I=h[A];I.onProgress&&I.onProgress(D)}p.enqueue(v),b()}},S=>{p.error(S)})}}});return new Response(m)}else throw new d_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ii.add(e,c);const h=Dn[e];delete Dn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Dn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class u_ extends wi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ii.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ys("img");function l(){h(),ii.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class f_ extends wi{constructor(e){super(e)}load(e,t,n,i){const s=new xt,a=new u_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Qs extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class p_ extends Qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qa=new Ue,Gc=new C,Vc=new C;class gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class m_ extends gl{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=cs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class g_ extends Qs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new m_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wc=new Ue,Rs=new C,ja=new C;class __ extends gl{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rs),ja.copy(n.position),ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc)}}class Vs extends Qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new __}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class v_ extends gl{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fa extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new v_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class x_ extends Qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ws{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class y_ extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ii.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ii.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ii.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ii.add(e,l),s.manager.itemStart(e)}}class ld{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xc(){return performance.now()}class b_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;kt.multiplyQuaternionsFlat(e,a,e,t,e,n),kt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const _l="\\[\\]\\.:\\/",M_=new RegExp("["+_l+"]","g"),vl="[^"+_l+"]",S_="[^"+_l.replace("\\.","")+"]",w_=/((?:WC+[\/:])*)/.source.replace("WC",vl),T_=/(WCOD+)?/.source.replace("WCOD",S_),E_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),A_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),C_=new RegExp("^"+w_+T_+E_+A_+"$"),R_=["material","materials","bones","map"];class I_{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(M_,"")}static parseTrackName(e){const t=C_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);R_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=I_;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class D_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:ji,endingEnd:ji};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Nh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ru:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ol:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===su;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Uh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=$i,i.endingEnd=$i):(e?i.endingStart=this.zeroSlopeAtStart?$i:ji:i.endingStart=Qr,t?i.endingEnd=this.zeroSlopeAtEnd?$i:ji:i.endingEnd=Qr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const P_=new Float32Array(1);class L_ extends Si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new b_(Je.create(n,f,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ad(new Float32Array(2),new Float32Array(2),1,P_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?qo.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ol),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new D_(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?qo.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);const cd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class er{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const U_=new ca(-1,1,1,-1,0,1);class N_ extends dt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}}const F_=new N_;class hd{constructor(e){this._mesh=new Ce(F_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ti extends er{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ta.clone(e.uniforms),this.material=new gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new hd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qc extends er{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class O_ extends er{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class B_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ti(cd),this.copyPass.material.blending=kn,this.clock=new ld}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}qc!==void 0&&(a instanceof qc?n=!0:a instanceof O_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class k_ extends er{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const z_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ps extends er{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(s,a,{type:zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new pn(s,a,{type:zn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new pn(s,a,{type:zn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=z_;this.highPassUniforms=ta.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new be(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=cd;this.copyUniforms=ta.clone(h.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Xs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new nn,this.fsQuad=new hd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new be(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ps.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ps.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ps.BlurDirectionX=new be(1,0);ps.BlurDirectionY=new be(0,1);const H_={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new be(1/1024,1/512)}},vertexShader:`

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
			
		}`};function G_(r){const e=new Map,t=new Map,n=r.clone();return dd(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function dd(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)dd(r.children[n],e.children[n],t)}const jc=3,$c=[-jc,0,jc],V_=-35,W_=14,X_=11,q_=12,j_=.6,$_=.4,Yc=.8,Y_=1,K_=.18,St={RUN:"Running_A",JUMP:"Jump_Full_Short",SLIDE:"Crawling",DODGE_L:"Dodge_Left",DODGE_R:"Dodge_Right",ATTACK:"Melee_Unarmed_Attack_Punch_A",HIT:"Hit_A",DEATH:"Death_A",IDLE:"Idle_A"};class Z_{constructor(e,t,n="knight"){this.scene=e;const i=t.characters[n]||t.knight;let s=!1;i.scene.traverse(u=>{u.isSkinnedMesh&&(s=!0)}),s?this.model=G_(i.scene):this.model=i.scene.clone();const a=new mn().setFromObject(this.model),o=a.max.y-a.min.y,c=o>0?2/o:1.8;this.model.scale.setScalar(c);const h=new mn().setFromObject(this.model);this.model.position.y=-h.min.y,this._baseModelY=this.model.position.y,this.model.rotation.y=Math.PI,this.model.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!1)}),this.group=new Bt,this.group.add(this.model),e.add(this.group),this.mixer=new L_(this.model),this.actions={},this.currentAction=null,this.hasAnimations=!1;const d=t.animations;if(s&&d.size>0){this.hasAnimations=!0;for(const[u,f]of d){const g=this.mixer.clipAction(f);this.actions[u]=g,u===St.RUN||u===St.IDLE||u===St.SLIDE?g.setLoop(Nh):(g.setLoop(Uh),g.clampWhenFinished=!0)}this.mixer.addEventListener("finished",u=>{u.action.getClip().name!==St.DEATH&&(this.dead||this._playAnimation(St.RUN))}),this._playAnimation(St.IDLE)}this.lane=1,this.targetX=0,this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.maxJumps=2,this.sliding=!1,this.slideTimer=0,this.attacking=!1,this.attackTimer=0,this.stumbling=!1,this.stumbleTimer=0,this.invulnTimer=0,this.dead=!1,this.running=!1,this.runSpeed=12,this.runTime=0,this.speedMultiplier=1,this.position=this.group.position,this.position.set(0,0,0)}_playAnimation(e,t=K_){const n=this.actions[e];n&&(this.currentAction===n&&n.isRunning()||(n.reset(),n.enabled=!0,this.currentAction&&this.currentAction!==n&&this.currentAction.crossFadeTo(n,t,!0),n.play(),this.currentAction=n))}get isInvulnerable(){return this.invulnTimer>0}get colliderHeight(){return this.sliding?.5:1.5}get colliderY(){return this.sliding?.25:.75}startRunning(){this.running=!0,this._playAnimation(St.RUN)}moveLeft(){this.dead||this.lane>0&&(this.lane--,this.targetX=$c[this.lane],this._playAnimation(St.DODGE_L,.1))}moveRight(){this.dead||this.lane<2&&(this.lane++,this.targetX=$c[this.lane],this._playAnimation(St.DODGE_R,.1))}jump(){this.dead||(this.sliding&&(this.sliding=!1,this.slideTimer=0),this.jumpsUsed<this.maxJumps&&(this.velocityY=this.jumpsUsed===0?W_:X_,this.grounded=!1,this.jumpsUsed++,this._playAnimation(St.JUMP,.1)))}slide(){this.dead||!this.grounded||(this.sliding=!0,this.slideTimer=j_,this._playAnimation(St.SLIDE,.15))}attack(){this.dead||this.attacking||(this.attacking=!0,this.attackTimer=$_,this._playAnimation(St.ATTACK,.1))}stumble(){this.dead||this.isInvulnerable||this.stumbling||(this.stumbling=!0,this.stumbleTimer=Yc,this.invulnTimer=Yc+Y_,this._playAnimation(St.HIT,.1))}die(){this.dead=!0,this.runSpeed=0,this._playAnimation(St.DEATH,.2)}revive(){this.dead=!1,this.running=!0,this.runSpeed=12+Math.min(18,this.runTime*.25),this.stumbling=!1,this.stumbleTimer=0,this.invulnTimer=2,this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.sliding=!1,this.attacking=!1,this.group.visible=!0,this._playAnimation(St.RUN)}update(e){if(this.mixer.update(e),!this.hasAnimations&&this.running&&!this.dead){const n=this.runTime*12;this.model.position.y=this._baseModelY+Math.abs(Math.sin(n))*.12,this.model.rotation.x=-.15,this.model.rotation.z=Math.sin(n*.5)*.05}if(this.dead)return;this.runTime+=e,this.runSpeed=12+Math.min(18,this.runTime*.25),this.position.z-=this.runSpeed*this.speedMultiplier*e;const t=this.targetX-this.position.x;Math.abs(t)>.01?this.position.x+=Math.sign(t)*Math.min(Math.abs(t),q_*e):this.position.x=this.targetX,this.grounded||(this.velocityY+=V_*e,this.position.y+=this.velocityY*e,this.position.y<=0&&(this.position.y=0,this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,!this.sliding&&!this.attacking&&!this.stumbling&&this._playAnimation(St.RUN))),this.sliding&&(this.slideTimer-=e,this.slideTimer<=0&&(this.sliding=!1,this._playAnimation(St.RUN))),this.attacking&&(this.attackTimer-=e,this.attackTimer<=0&&(this.attacking=!1)),this.stumbling&&(this.stumbleTimer-=e,this.stumbleTimer<=0&&(this.stumbling=!1)),this.invulnTimer>0&&(this.invulnTimer-=e),this.invulnTimer>0&&!this.stumbling?this.group.visible=Math.floor(this.invulnTimer*10)%2===0:this.group.visible=!0}reset(){this.lane=1,this.targetX=0,this.position.set(0,0,0),this.velocityY=0,this.grounded=!0,this.jumpsUsed=0,this.sliding=!1,this.slideTimer=0,this.attacking=!1,this.attackTimer=0,this.stumbling=!1,this.stumbleTimer=0,this.invulnTimer=0,this.dead=!1,this.running=!1,this.runSpeed=12,this.runTime=0,this.speedMultiplier=1,this.group.visible=!0,this.mixer.stopAllAction(),this.currentAction=null,this._playAnimation(St.IDLE)}dispose(){this.mixer.stopAllAction(),this.scene.remove(this.group),this.group.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))})}}function Xn(r,e){const t=document.createElement("canvas");return t.width=r,t.height=e,[t,t.getContext("2d")]}function J_(r=256){const[e,t]=Xn(r,r);t.fillStyle="#b0a080",t.fillRect(0,0,r,r);for(let s=0;s<r*r*.3;s++){const a=Math.random()*r,o=Math.random()*r,l=140+Math.random()*50;t.fillStyle=`rgb(${l},${l-10},${l-25})`,t.fillRect(a,o,1+Math.random()*2,1+Math.random()*2)}t.strokeStyle="rgba(80,70,50,0.3)",t.lineWidth=2;const n=r/6;for(let s=0;s<6;s++){const a=s*n;t.beginPath(),t.moveTo(0,a),t.lineTo(r,a),t.stroke();const o=s%2*(r/4);for(let l=0;l<4;l++){const c=o+l*(r/2);t.beginPath(),t.moveTo(c,a),t.lineTo(c,a+n),t.stroke()}}const i=new Wn(e);return i.wrapS=i.wrapT=Vt,i.repeat.set(2,8),i}function Q_(r=256){const[e,t]=Xn(r,r);t.fillStyle="#7a6243",t.fillRect(0,0,r,r);for(let i=0;i<r*r*.4;i++){const s=Math.random()*r,a=Math.random()*r,o=80+Math.random()*60;t.fillStyle=`rgb(${o+20},${o+10},${o-10})`,t.fillRect(s,a,1+Math.random()*3,1+Math.random()*3)}for(let i=0;i<30;i++){const s=Math.random()*r,a=Math.random()*r,o=2+Math.random()*4;t.fillStyle=`rgba(${100+Math.random()*40},${90+Math.random()*30},${70+Math.random()*20},0.5)`,t.beginPath(),t.ellipse(s,a,o,o*.7,Math.random()*Math.PI,0,Math.PI*2),t.fill()}const n=new Wn(e);return n.wrapS=n.wrapT=Vt,n.repeat.set(3,12),n}function ev(r=512){const[e,t]=Xn(r,r),n=t.createRadialGradient(r/2,r/2,0,r/2,r/2,r*.7);n.addColorStop(0,"#4a8c3a"),n.addColorStop(.5,"#3a7030"),n.addColorStop(1,"#2a5a22"),t.fillStyle=n,t.fillRect(0,0,r,r);for(let s=0;s<20;s++){const a=Math.random()*r,o=Math.random()*r,l=20+Math.random()*40,c=Math.random()>.5?"rgba(60,120,40,0.3)":"rgba(30,50,20,0.25)";t.fillStyle=c,t.beginPath(),t.ellipse(a,o,l,l*.7,Math.random()*Math.PI,0,Math.PI*2),t.fill()}for(let s=0;s<3;s++){const a=600+s*200;for(let o=0;o<a;o++){const l=Math.random()*r,c=Math.random()*r,h=50+Math.random()*100,d=25+Math.random()*35,u=15+Math.random()*25;t.strokeStyle=`rgba(${d},${h},${u},${.4+s*.2})`,t.lineWidth=.3+Math.random()*1.2,t.beginPath(),t.moveTo(l,c);const f=3+Math.random()*8,g=(Math.random()-.5)*6;t.quadraticCurveTo(l+g*.5,c-f*.5,l+g,c-f),t.stroke()}}for(let s=0;s<40;s++){const a=Math.random()*r,o=Math.random()*r,l=["#ffee44","#ff8844","#ffffff","#ff66aa","#aaddff"];t.fillStyle=l[Math.floor(Math.random()*l.length)],t.beginPath(),t.arc(a,o,1+Math.random()*1.5,0,Math.PI*2),t.fill()}const i=new Wn(e);return i.wrapS=i.wrapT=Vt,i.repeat.set(6,6),i}function tv(r=256){const[e,t]=Xn(r,r);t.fillStyle="#c4a35a",t.fillRect(0,0,r,r);for(let i=0;i<r*r*.5;i++){const s=Math.random()*r,a=Math.random()*r,o=170+Math.random()*40;t.fillStyle=`rgb(${o},${o-20},${o-60})`,t.fillRect(s,a,1,1)}t.strokeStyle="rgba(180,150,90,0.15)",t.lineWidth=1;for(let i=0;i<20;i++){const s=Math.random()*r;t.beginPath(),t.moveTo(0,s);for(let a=0;a<r;a+=10)t.lineTo(a,s+Math.sin(a*.05)*3);t.stroke()}const n=new Wn(e);return n.wrapS=n.wrapT=Vt,n.repeat.set(6,6),n}function nv(r=256){const[e,t]=Xn(r,r);t.fillStyle="#1a0a0a",t.fillRect(0,0,r,r);for(let i=0;i<15;i++){let s=Math.random()*r,a=Math.random()*r;t.strokeStyle=`rgba(${200+Math.random()*55},${50+Math.random()*50},0,0.4)`,t.lineWidth=1+Math.random()*2,t.beginPath(),t.moveTo(s,a);for(let o=0;o<8;o++)s+=(Math.random()-.5)*30,a+=(Math.random()-.5)*30,t.lineTo(s,a);t.stroke()}for(let i=0;i<r*r*.2;i++){const s=Math.random()*r,a=Math.random()*r,o=20+Math.random()*25;t.fillStyle=`rgb(${o+5},${o},${o})`,t.fillRect(s,a,1+Math.random()*2,1+Math.random()*2)}const n=new Wn(e);return n.wrapS=n.wrapT=Vt,n.repeat.set(4,4),n}function iv(r=256){const[e,t]=Xn(r,r);t.fillStyle="#d8dce4",t.fillRect(0,0,r,r);for(let i=0;i<200;i++){const s=Math.random()*r,a=Math.random()*r,o=220+Math.random()*35;t.fillStyle=`rgb(${o},${o},${o+5})`,t.beginPath(),t.arc(s,a,.5+Math.random(),0,Math.PI*2),t.fill()}for(let i=0;i<5;i++){t.fillStyle="rgba(180,185,195,0.3)";const s=Math.random()*r,a=Math.random()*r;t.beginPath(),t.ellipse(s,a,4,6,Math.random(),0,Math.PI*2),t.fill()}const n=new Wn(e);return n.wrapS=n.wrapT=Vt,n.repeat.set(6,6),n}function sv(r=128){const[e,t]=Xn(r,r);t.fillStyle="#5a3a1e",t.fillRect(0,0,r,r),t.strokeStyle="rgba(40,25,10,0.3)",t.lineWidth=1;for(let i=0;i<30;i++){const s=i/30*r+(Math.random()-.5)*3;t.beginPath(),t.moveTo(0,s);for(let a=0;a<r;a+=5)t.lineTo(a,s+Math.sin(a*.03+i)*2);t.stroke()}const n=new Wn(e);return n.wrapS=n.wrapT=Vt,n}function rv(r=128){const[e,t]=Xn(r,r);t.fillStyle="#4a2a10",t.fillRect(0,0,r,r);for(let i=0;i<40;i++){t.strokeStyle=`rgba(${30+Math.random()*30},${15+Math.random()*15},${5+Math.random()*10},0.4)`,t.lineWidth=2+Math.random()*3;const s=i/40*r;t.beginPath(),t.moveTo(0,s),t.lineTo(r,s+(Math.random()-.5)*8),t.stroke()}const n=new Wn(e);return n.wrapS=n.wrapT=Vt,n}function av(r=128){const[e,t]=Xn(r,r),n=t.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);return n.addColorStop(0,"#ffe44d"),n.addColorStop(.7,"#ffd700"),n.addColorStop(1,"#b8960a"),t.fillStyle=n,t.fillRect(0,0,r,r),t.fillStyle="rgba(180,140,20,0.6)",t.font=`bold ${r*.5}px serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("V",r/2,r/2),t.strokeStyle="rgba(140,110,10,0.5)",t.lineWidth=4,t.beginPath(),t.arc(r/2,r/2,r/2-4,0,Math.PI*2),t.stroke(),new Wn(e)}const Kc=[{name:"single_center",obstacles:[{lane:1}]},{name:"single_left",obstacles:[{lane:0}]},{name:"single_right",obstacles:[{lane:2}]},{name:"gap_left",obstacles:[{lane:1},{lane:2}]},{name:"gap_center",obstacles:[{lane:0},{lane:2}]},{name:"gap_right",obstacles:[{lane:0},{lane:1}]},{name:"chest_left",obstacles:[{lane:0,breakable:!0}]},{name:"chest_center",obstacles:[{lane:1,breakable:!0}]},{name:"chest_right",obstacles:[{lane:2,breakable:!0}]}],Zc=[{name:"jump_wall",obstacles:[{lane:0,type:"low"},{lane:1,type:"low"},{lane:2,type:"low"}],hint:"jump"},{name:"zigzag_lr",obstacles:[{lane:0,zOffset:0},{lane:2,zOffset:-8}]},{name:"zigzag_rl",obstacles:[{lane:2,zOffset:0},{lane:0,zOffset:-8}]},{name:"corridor_center",obstacles:[{lane:0},{lane:2},{lane:0,zOffset:-10},{lane:2,zOffset:-10}]},{name:"break_or_dodge",obstacles:[{lane:1,breakable:!0},{lane:0},{lane:2}],hint:"attack_or_jump"}],ov=[{name:"gauntlet",obstacles:[{lane:0,zOffset:0},{lane:1,zOffset:-7},{lane:2,zOffset:-14}]},{name:"gauntlet_rev",obstacles:[{lane:2,zOffset:0},{lane:1,zOffset:-7},{lane:0,zOffset:-14}]},{name:"closing_walls",obstacles:[{lane:0,zOffset:0},{lane:2,zOffset:0},{lane:0,zOffset:-8,type:"low"},{lane:1,zOffset:-8,type:"low"},{lane:2,zOffset:-8,type:"low"}]},{name:"switchback",obstacles:[{lane:0,zOffset:0},{lane:1,zOffset:0},{lane:1,zOffset:-10},{lane:2,zOffset:-10}]},{name:"dense_corridor",obstacles:[{lane:0},{lane:2},{lane:0,zOffset:-7},{lane:1,zOffset:-7,breakable:!0},{lane:2,zOffset:-7},{lane:0,zOffset:-14},{lane:2,zOffset:-14}]}],Jc={straight:(r,e,t)=>{const n=[];for(let i=0;i<e;i++)n.push({lane:r,zOffset:-t*i,y:.8});return n},arc:(r,e,t)=>{const n=[];for(let i=0;i<e;i++){const s=i/(e-1),a=.8+Math.sin(s*Math.PI)*2.5;n.push({lane:r,zOffset:-t*i,y:a})}return n},zigzag:(r,e,t)=>{const n=[];let i=r,s=r===0?1:r===2?-1:Math.random()>.5?1:-1;for(let a=0;a<e;a++)n.push({lane:i,zOffset:-t*a,y:.8}),i+=s,(i>2||i<0)&&(s=-s,i+=s*2);return n}};function lv(r){let e;return r<=1?e=Kc:r<=3?e=Math.random()<.3?Kc:Zc:e=Math.random()<.25?Zc:ov,Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e}function cv(r){if(r<=1)return"straight";const e=Math.random();return e<.4?"straight":e<.7?"arc":"zigzag"}const wt=20,hv=6,dv=2,jo=3,Lr=[-jo,0,jo],Gi=9,uv=30,fv={forest:{ground:3828526,path:8020547,pathEdge:5917232,wallColor:7035453,sky:8900331,fog:8900331,ambient:13428940,sunColor:16774374,grassColors:[4885567,4028980,5938255,2976292]},desert:{ground:12886874,path:12097888,pathEdge:10123840,wallColor:12886112,sky:15258784,fog:15258784,ambient:15786176,sunColor:16772829,grassColors:[12097069,11044128,13149760]},lava:{ground:2759194,path:4861992,pathEdge:3809304,wallColor:3810592,sky:3349002,fog:3349002,ambient:16736304,sunColor:16746564,grassColors:[1708048,2757909]},snow:{ground:13687008,path:10528944,pathEdge:8423568,wallColor:9476250,sky:13161696,fog:13161696,ambient:13689072,sunColor:15790335,grassColors:[13160664,12107976,14542056]},roman:{ground:9075290,path:11575424,pathEdge:9470048,wallColor:13154448,sky:9484496,fog:9484496,ambient:14735552,sunColor:16773328,grassColors:[6982218,5929530]},underwater:{ground:1718874,path:2771562,pathEdge:1716304,wallColor:2773104,sky:663616,fog:663616,ambient:3170464,sunColor:4491468,grassColors:[1722938,670250,2775626]}},Qc=["roman","forest","desert","lava","snow","roman","underwater"],eh={forest:["barrel_large","crate_large","rocks","barrel_small","chest"],desert:["barrel_small","crate_small","column","rocks","barrier"],lava:["pillar","barrier","rocks","barrel_large","chest"],snow:["crate_large","barrel_large","rocks","crate_small","barrier"],roman:["pillar_decorated","column","barrier","chest","barrel_large"],underwater:["rocks","barrel_small","crate_small","chest","barrier"]},Is={barrel_large:{width:1.2,height:1.2,depth:1.2,breakable:!1,scale:1.4},barrel_small:{width:.9,height:.9,depth:.9,breakable:!1,scale:1.2},crate_large:{width:1.2,height:1,depth:1.2,breakable:!1,scale:1.4},crate_small:{width:.9,height:.8,depth:.9,breakable:!1,scale:1.2},column:{width:.8,height:1.4,depth:.8,breakable:!1,scale:1.3},pillar:{width:.8,height:1.4,depth:.8,breakable:!1,scale:1.3},pillar_decorated:{width:.9,height:1.5,depth:.9,breakable:!1,scale:1.4},barrier:{width:1.8,height:.9,depth:.6,breakable:!1,scale:1.4},rocks:{width:1.2,height:.9,depth:1.2,breakable:!1,scale:1.4},chest:{width:.9,height:.8,depth:.8,breakable:!0,scale:1.2,coinReward:15}},Ur={forest:{env:["Tree_1_B_Color4","Tree_2_B_Color4","Tree_6_B_Color4","Bush_2_E_Color4","Bush_3_B_Color4","Bush_4_B_Color4","Rock_1_E_Color4","Rock_4_B_Color4","Grass_1_A_Color4","Grass_2_A_Color4"],scn:[],grass:["Grass_1_A_Color4","Grass_2_A_Color4"]},desert:{env:["Rock_3_B_Color4","Rock_4_B_Color4","Rock_5_E_Color4","Bush_3_B_Color4","Tree_Bare_1_B_Color4"],scn:[],grass:[]},lava:{env:["Rock_1_E_Color4","Rock_3_B_Color4","Rock_5_E_Color4"],scn:[],tint:16724736,grass:[]},snow:{env:["Tree_1_B_Color4","Tree_6_B_Color4","Rock_1_E_Color4","Rock_4_B_Color4","Bush_4_B_Color4"],scn:[],grass:[]},roman:{env:["Bush_2_E_Color4","Bush_3_B_Color4","Bush_4_B_Color4","Tree_1_B_Color4","Tree_6_B_Color4","Rock_1_E_Color4","Rock_3_B_Color4","Grass_1_A_Color4","Grass_2_A_Color4"],scn:["pillar_decorated"],grass:["Grass_1_A_Color4","Grass_2_A_Color4"]},underwater:{env:["Rock_1_E_Color4","Rock_3_B_Color4","Rock_5_E_Color4","Bush_3_B_Color4"],scn:[],tint:2254506,grass:[]}},pv={CoinBag:"potion_large_orange",Revive:"potion_large_red",CoinMagnet:"potion_large_blue",DoubleCoin:"potion_large_green",Invincibility:"potion_large_blue",Antidote:"potion_large_green",TimeAdvantage:"potion_large_orange",Shield:"shield_badge"};class mv{constructor(e,t){this.scene=e,this.assetLoader=t,this.tiles=[],this.nextTileZ=0,this.tileIndex=0,this.theme="roman",this.difficulty=0,this.activeCoins=[],this.activeObstacles=[],this.activePowerUps=[],this.bossActive=!1,this.fixedTheme=null,this.obstacleFrequencyMult=1,this._textures={stone:J_(),dirt:Q_(),grass:ev(),sand:tv(),lavaGround:nv(),snow:iv(),wood:sv(),bark:rv(),coin:av()},this._themeMats={roman:{ground:new Oe({map:this._textures.grass,roughness:.85}),path:new Oe({map:this._textures.stone,roughness:.65})},forest:{ground:new Oe({map:this._textures.grass,roughness:.85}),path:new Oe({map:this._textures.dirt,roughness:.8})},desert:{ground:new Oe({map:this._textures.sand,roughness:.9}),path:new Oe({map:this._textures.sand,color:12097888,roughness:.75})},lava:{ground:new Oe({map:this._textures.lavaGround,roughness:.95}),path:new Oe({map:this._textures.lavaGround,color:4861992,roughness:.85})},snow:{ground:new Oe({map:this._textures.snow,roughness:.7}),path:new Oe({map:this._textures.snow,color:10528944,roughness:.6})},underwater:{ground:new Oe({color:1718874,roughness:.9}),path:new Oe({map:this._textures.stone,color:2771562,roughness:.7})}}}update(e){const t=Math.abs(e);if(this.fixedTheme)this.theme=this.fixedTheme;else{const s=Math.floor(t/400)%Qc.length;this.theme=Qc[s]}for(;this.nextTileZ>e-hv*wt;)this._spawnTile(this.nextTileZ),this.nextTileZ-=wt;const n=e+dv*wt;for(let s=this.tiles.length-1;s>=0;s--)this.tiles[s].group.position.z>n&&(this._removeTile(this.tiles[s]),this.tiles.splice(s,1));const i=performance.now()*.001;for(const s of this.activeCoins)s.rotation.y=i*3,s.position.y=s.userData._baseY+Math.sin(i*2.5+s.userData._phase)*.12;for(const s of this.activePowerUps)s.rotation.y=i*2,s.position.y=s.userData._baseY+Math.sin(i*3+s.userData._phase)*.2}getCollisions(e,t,n,i,s){const a={coins:[],obstacles:[],powerUps:[]};for(let o=this.activeCoins.length-1;o>=0;o--){const l=this.activeCoins[o],c=new C;l.getWorldPosition(c),Math.abs(c.x-e)<1.5&&Math.abs(c.z-t)<1.2&&(a.coins.push(l),l.visible=!1,this.activeCoins.splice(o,1))}for(let o=this.activeObstacles.length-1;o>=0;o--){const l=this.activeObstacles[o],c=new C;l.getWorldPosition(c);const h=l.userData;if(Math.abs(c.x-e)<h.width*.5+.3&&Math.abs(c.z-t)<h.depth*.5+.3){const d=c.y-h.height*.5,u=c.y+h.height*.5,f=n;n+i>d+.1&&f<u-.1&&a.obstacles.push(l)}}for(let o=this.activePowerUps.length-1;o>=0;o--){const l=this.activePowerUps[o],c=new C;l.getWorldPosition(c),Math.abs(c.x-e)<1.5&&Math.abs(c.z-t)<1.2&&Math.abs(c.y-(n+s))<1.5&&(a.powerUps.push(l),l.visible=!1,this.activePowerUps.splice(o,1))}return a}breakObstacle(e){const t=this.activeObstacles.indexOf(e);t>=0&&(e.visible=!1,this.activeObstacles.splice(t,1))}reset(){for(const e of this.tiles)this._removeTile(e);this.tiles=[],this.activeCoins=[],this.activeObstacles=[],this.activePowerUps=[],this.nextTileZ=0,this.tileIndex=0,this.theme="roman",this.difficulty=0}_spawnTile(e){const t=new Bt;t.position.z=e;const n=fv[this.theme],i=this._themeMats[this.theme]||this._themeMats.roman,s=new bi(uv*2,wt),a=new Ce(s,i.ground);a.rotation.x=-Math.PI/2,a.position.y=-.02,a.receiveShadow=!0,t.add(a);const o=new Et(Gi,.12,wt),l=new Ce(o,i.path);l.position.y=0,l.receiveShadow=!0,t.add(l),this._addPathEdges(t,n),this._addPathDecor(t);for(let u=-1;u<=1;u+=2){const f=new Et(.04,.01,wt),g=new Oe({color:16777215,transparent:!0,opacity:.12}),_=new Ce(f,g);_.position.set(u*jo*.5,.07,0),t.add(_)}this._addSideScenery(t,n,-1),this._addSideScenery(t,n,1),this._addGrassStrip(t),this._addGroundDetails(t,n);const c=this.tileIndex>3&&!this.bossActive,h=this.tileIndex<=7&&Math.random()<.5,d=this.obstacleFrequencyMult<1&&Math.random()>this.obstacleFrequencyMult;c&&!h&&!d?(this._addObstacles(t,n),this._addCoins(t),Math.random()<.12&&this._addPowerUp(t),Math.random()<.06&&this._addGem(t)):this.bossActive||this._addCoins(t),this.scene.add(t),this.tiles.push({group:t,z:e}),this.tileIndex++}_addPathEdges(e,t){for(const n of[-1,1]){const i=n*(Gi*.5+.15),s=new Et(.3,.35,wt),a=new Oe({color:t.pathEdge,roughness:.8}),o=new Ce(s,a);o.position.set(i,.15,0),o.castShadow=!0,o.receiveShadow=!0,e.add(o);const l=new Et(.4,.06,wt),c=new Oe({color:t.wallColor,roughness:.65}),h=new Ce(l,c);h.position.set(i,.34,0),h.receiveShadow=!0,e.add(h);const d=4;for(let u=0;u<d;u++){const f=-wt*.5+wt/d*(u+.5),g=new Et(.2,.6,.2),_=new Oe({color:t.wallColor,roughness:.7}),m=new Ce(g,_);m.position.set(i,.3,f),m.castShadow=!0,e.add(m)}}}_addSideScenery(e,t,n){const i=n*(Gi*.5+2),s=10+Math.floor(Math.random()*8),a=Ur[this.theme]||Ur.roman,o=a.env,l=a.scn;a.grass;const c=[...o,...l];if(c.length!==0){for(let h=0;h<s;h++){const d=i+n*(2+Math.random()*12),u=(Math.random()-.5)*wt,f=c[Math.floor(Math.random()*c.length)];let g;try{o.includes(f)?g=this.assetLoader.getEnvironment(f):g=this.assetLoader.getScenery(f)}catch{continue}const _=f.startsWith("Tree"),m=f.startsWith("Bush"),p=f.startsWith("Grass"),b=_?.8+Math.random()*.7:m?.7+Math.random()*.5:p?.5+Math.random()*.4:.8+Math.random()*.6;if(g.scale.setScalar(b),g.position.set(d,0,u),g.rotation.y=Math.random()*Math.PI*2,g.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),a.tint){const S=new fe(a.tint);g.traverse(v=>{if(v.isMesh&&v.material){const D=v.material;D.color&&D.color.lerp(S,.35),D.emissive&&(D.emissive.set(2230272),D.emissiveIntensity=.2)}})}e.add(g)}if(this.theme==="lava"&&Math.random()>.5){const h=i+n*(Math.random()*4),d=(Math.random()-.5)*wt;this._addLavaPool(e,h,d)}}}_addGrassStrip(e){const n=(Ur[this.theme]||Ur.roman).grass||[];if(n.length!==0)for(const i of[-1,1]){const s=8+Math.floor(Math.random()*6);for(let a=0;a<s;a++){const o=n[Math.floor(Math.random()*n.length)];let l;try{l=this.assetLoader.getEnvironment(o)}catch{continue}const c=i*(Gi*.5+.3+Math.random()*1.5),h=(Math.random()-.5)*wt;l.scale.setScalar(.4+Math.random()*.4),l.position.set(c,0,h),l.rotation.y=Math.random()*Math.PI*2,l.traverse(d=>{d.isMesh&&(d.receiveShadow=!0)}),e.add(l)}}}_addPathDecor(e){if(this.tileIndex%2===0)for(const t of[-1,1]){const n=t*(Gi*.5+.5);try{const s=this.assetLoader.getScenery("torch_lit");s.scale.setScalar(1.2),s.position.set(n,0,-wt*.25),s.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.material&&a.material.emissive&&(a.material.emissive.set(16737792),a.material.emissiveIntensity=1))}),e.add(s)}catch{}const i=t>0?"banner_red":"banner_blue";try{const s=this.assetLoader.getScenery(i);s.scale.setScalar(1.2),s.position.set(n,0,wt*.25),s.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e.add(s)}catch{}}}_addLavaPool(e,t,n){const i=.5+Math.random()*1,s=new Ce(new Ks(i,12),new Oe({color:16729088,emissive:16720384,emissiveIntensity:.8,roughness:.3}));s.rotation.x=-Math.PI/2,s.position.set(t,.02,n),e.add(s)}_addGroundDetails(e,t){if(this.theme==="lava")return;const n=6+Math.floor(Math.random()*6);for(let i=0;i<n;i++){const a=(Math.random()>.5?1:-1)*(Gi*.5+.5+Math.random()*6),o=(Math.random()-.5)*wt,l=t.grassColors[Math.floor(Math.random()*t.grassColors.length)],c=new Bt,h=3+Math.floor(Math.random()*3);for(let d=0;d<h;d++){const u=new Ce(new da(.04,.2+Math.random()*.15,4),new Oe({color:l}));u.position.set((Math.random()-.5)*.15,.1,(Math.random()-.5)*.15),u.rotation.x=(Math.random()-.5)*.3,u.rotation.z=(Math.random()-.5)*.3,c.add(u)}c.position.set(a,0,o),e.add(c)}}_addObstacles(e,t){const n=eh[this.theme]||eh.roman,i=lv(this.difficulty);if(!(!i||!i.obstacles))for(const s of i.obstacles){const a=s.lane,o=Lr[a],c=s.zOffset||0;let h;if(s.breakable){const g=n.filter(_=>Is[_]&&Is[_].breakable);h=g.length>0?g[Math.floor(Math.random()*g.length)]:n[Math.floor(Math.random()*n.length)]}else if(s.type==="low"){const g=n.filter(_=>Is[_]&&Is[_].height<=1.2);h=g.length>0?g[Math.floor(Math.random()*g.length)]:n[Math.floor(Math.random()*n.length)]}else h=n[Math.floor(Math.random()*n.length)];let d;try{d=this.assetLoader.getObstacle(h)}catch{continue}const u=Is[h]||{width:1,height:1.5,depth:1,breakable:!1,scale:1.3};d.scale.setScalar(u.scale),d.position.set(o,0,c),d.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),d.rotation.y=Math.random()*Math.PI*2;const f=s.breakable||u.breakable;if(f){d.traverse(_=>{if(_.isMesh&&_.geometry){const m=new nn({color:65348,wireframe:!0,transparent:!0,opacity:.6}),p=new Ce(_.geometry,m);p.scale.setScalar(1.12),p.position.copy(_.position),p.rotation.copy(_.rotation),_.parent.add(p),(Array.isArray(_.material)?_.material:[_.material]).forEach(S=>{S.emissive=new fe(65348),S.emissiveIntensity=.15})}});const g=new Vs(65348,.8,3);g.position.set(0,.5,0),d.add(g)}d.userData={type:f?"chest":"wall",breakable:f,coinReward:u.coinReward||0,width:u.width,height:u.height,depth:u.depth,lane:a,modelName:h},e.add(d),this.activeObstacles.push(d)}}_addCoins(e){const t=Math.floor(Math.random()*3),n=3+Math.floor(Math.random()*5),i=2.5,s=cv(this.difficulty),o=(Jc[s]||Jc.straight)(t,n,i);for(const l of o){const c=Lr[l.lane],h=l.y||.8,d=l.zOffset||0;let u;try{u=this.assetLoader.getScenery("coin")}catch{u=this._fallbackCoin()}u.scale.setScalar(2),u.position.set(c,h,d),u.userData={_baseY:h,_phase:d*.5},u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.material&&(f.material.emissive=new fe(16755200),f.material.emissiveIntensity=.8))}),e.add(u),this.activeCoins.push(u)}}_fallbackCoin(){const e=new Zs(.28,.28,.06,16),t=new Oe({color:16766720,metalness:.9,roughness:.15,emissive:16755200,emissiveIntensity:.8}),n=new Ce(e,t);n.rotation.x=Math.PI/2;const i=new Bt;return i.add(n),i}_addPowerUp(e){const t=Math.floor(Math.random()*3),n=Lr[t],i=(Math.random()-.5)*wt*.5,s=["CoinBag","Revive","CoinMagnet","DoubleCoin","Invincibility","Antidote","TimeAdvantage","Shield"],a=Math.floor(Math.random()*s.length),o=s[a],l=pv[o];let c;try{c=this.assetLoader.getPickup(l)}catch{c=this._fallbackPowerUp(o)}c.scale.setScalar(1.8),c.position.set(n,1.5,i),c.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),c.userData={powerUpType:o,typeIndex:a+1,_baseY:1.5,_phase:i},e.add(c),this.activePowerUps.push(c)}_addGem(e){const t=Math.floor(Math.random()*3),n=Lr[t],i=(Math.random()-.5)*wt*.4,s=new Gs(.35,2),a=new Oe({color:10040319,emissive:6684876,emissiveIntensity:1.2,metalness:.9,roughness:.1,transparent:!0,opacity:.9}),o=new Ce(s,a),l=new Bt;l.add(o);const c=new Gs(.2,1),h=new nn({color:16777215,transparent:!0,opacity:.6});l.add(new Ce(c,h)),l.scale.setScalar(1.2),l.position.set(n,1.2,i),l.userData={_baseY:1.2,_phase:i*.5,_isGem:!0},e.add(l),this.activeCoins.push(l)}_fallbackPowerUp(e){const t={CoinBag:16766720,Revive:4521796,CoinMagnet:16729343,DoubleCoin:16755200,Invincibility:58879,Antidote:8978176,TimeAdvantage:4491519,Shield:8930559},n=new Gs(.35,1),i=new Oe({color:t[e]||16777215,emissive:t[e]||16777215,emissiveIntensity:.3,metalness:.5,roughness:.3}),s=new Ce(n,i),a=new Bt;return a.add(s),a}_removeTile(e){e.group.traverse(t=>{let n=this.activeCoins.indexOf(t);n>=0&&this.activeCoins.splice(n,1),n=this.activeObstacles.indexOf(t),n>=0&&this.activeObstacles.splice(n,1),n=this.activePowerUps.indexOf(t),n>=0&&this.activePowerUps.splice(n,1)}),this.scene.remove(e.group),e.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())})}}class gv{constructor(){this.queue=[],window.addEventListener("keydown",t=>{switch(t.code){case"KeyQ":case"ArrowLeft":this._push("left");break;case"KeyE":case"ArrowRight":this._push("right");break;case"KeyW":case"ArrowUp":case"Space":this._push("jump");break;case"KeyS":case"ArrowDown":this._push("slide");break;case"KeyF":this._push("attack");break;case"KeyR":this._push("ability");break;case"Escape":this._push("pause");break}}),this._touchStart=null;const e=30;window.addEventListener("touchstart",t=>{const n=t.touches[0];this._touchStart={x:n.clientX,y:n.clientY,time:performance.now()}},{passive:!0}),window.addEventListener("touchend",t=>{if(!this._touchStart)return;const n=t.changedTouches[0],i=n.clientX-this._touchStart.x,s=n.clientY-this._touchStart.y,a=performance.now()-this._touchStart.time;if(this._touchStart=null,a>500)return;const o=Math.abs(i),l=Math.abs(s);if(o<e&&l<e){this._push("attack");return}o>l?this._push(i>0?"right":"left"):this._push(s>0?"slide":"jump")},{passive:!0})}_push(e){this.queue.push(e)}poll(){const e=this.queue;return this.queue=[],e}}class _v{constructor(e){this.scene=e,this.dustGeo=new dt;const t=80,n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t);this.dustData={positions:n,alphas:i,sizes:s,count:t,index:0},this.dustGeo.setAttribute("position",new Be(n,3)),this.dustGeo.setAttribute("alpha",new Be(i,1)),this.dustGeo.setAttribute("size",new Be(s,1)),this.dustMat=new gt({transparent:!0,depthWrite:!1,vertexShader:`
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
            `}),this.dustPoints=new _i(this.dustGeo,this.dustMat),e.add(this.dustPoints),this.sparkleGeo=new dt;const a=120,o=new Float32Array(a*3),l=new Float32Array(a),c=new Float32Array(a),h=new Float32Array(a*3);this.sparkleData={positions:o,alphas:l,sizes:c,colors:h,velocities:new Float32Array(a*3),count:a,active:new Uint8Array(a)},this.sparkleGeo.setAttribute("position",new Be(o,3)),this.sparkleGeo.setAttribute("alpha",new Be(l,1)),this.sparkleGeo.setAttribute("size",new Be(c,1)),this.sparkleGeo.setAttribute("color",new Be(h,3)),this.sparkleMat=new gt({transparent:!0,depthWrite:!1,vertexShader:`
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
            `}),this.sparklePoints=new _i(this.sparkleGeo,this.sparkleMat),e.add(this.sparklePoints),this.debrisGeo=new dt;const d=60,u=new Float32Array(d*3),f=new Float32Array(d),g=new Float32Array(d),_=new Float32Array(d*3);this.debrisData={positions:u,alphas:f,sizes:g,colors:_,velocities:new Float32Array(d*3),rotations:new Float32Array(d),count:d,active:new Uint8Array(d)},this.debrisGeo.setAttribute("position",new Be(u,3)),this.debrisGeo.setAttribute("alpha",new Be(f,1)),this.debrisGeo.setAttribute("size",new Be(g,1)),this.debrisGeo.setAttribute("color",new Be(_,3)),this.debrisMat=new gt({transparent:!0,depthWrite:!1,vertexShader:`
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
            `}),this.debrisPoints=new _i(this.debrisGeo,this.debrisMat),e.add(this.debrisPoints);const m=new ua(.1,.5,24),p=new nn({color:16777215,transparent:!0,opacity:.6,side:en,depthWrite:!1});this.landingRing=new Ce(m,p),this.landingRing.rotation.x=-Math.PI/2,this.landingRing.visible=!1,this._landingTimer=0,e.add(this.landingRing)}emitDust(e,t,n,i){const s=this.dustData,a=s.index;s.positions[a*3]=e+(Math.random()-.5)*.5,s.positions[a*3+1]=t+.05,s.positions[a*3+2]=n+.5+Math.random()*.3,s.alphas[a]=i?.9:.6,s.sizes[a]=i?4+Math.random()*3:2+Math.random()*2,s.index=(s.index+1)%s.count}burstSparkles(e,t,n,i=[1,.85,0],s=8){const a=this.sparkleData;for(let o=0;o<s;o++)for(let l=0;l<a.count;l++)if(!a.active[l]){a.active[l]=1,a.positions[l*3]=e,a.positions[l*3+1]=t,a.positions[l*3+2]=n,a.velocities[l*3]=(Math.random()-.5)*6,a.velocities[l*3+1]=2+Math.random()*4,a.velocities[l*3+2]=(Math.random()-.5)*6,a.alphas[l]=1,a.sizes[l]=2+Math.random()*4,a.colors[l*3]=i[0],a.colors[l*3+1]=i[1],a.colors[l*3+2]=i[2];break}}burstDebris(e,t,n,i=12){const s=this.debrisData,a=[[.6,.4,.2],[.5,.35,.15],[.7,.5,.25],[.4,.3,.15],[.55,.45,.3]];for(let o=0;o<i;o++)for(let l=0;l<s.count;l++)if(!s.active[l]){s.active[l]=1,s.positions[l*3]=e+(Math.random()-.5)*.5,s.positions[l*3+1]=t+Math.random()*.5,s.positions[l*3+2]=n+(Math.random()-.5)*.5,s.velocities[l*3]=(Math.random()-.5)*8,s.velocities[l*3+1]=3+Math.random()*6,s.velocities[l*3+2]=(Math.random()-.5)*8,s.alphas[l]=1,s.sizes[l]=3+Math.random()*6;const c=a[Math.floor(Math.random()*a.length)];s.colors[l*3]=c[0],s.colors[l*3+1]=c[1],s.colors[l*3+2]=c[2];break}}emitLandingImpact(e,t,n){this.landingRing.position.set(e,t+.05,n),this.landingRing.scale.set(.3,.3,.3),this.landingRing.material.opacity=.6,this.landingRing.visible=!0,this._landingTimer=.35;for(let i=0;i<8;i++)this.emitDust(e+(Math.random()-.5)*1.5,t,n+(Math.random()-.5)*1,!0)}update(e){const t=this.dustData;for(let s=0;s<t.count;s++)t.alphas[s]*=.95,t.positions[s*3+1]+=e*.3,t.alphas[s]<.01&&(t.alphas[s]=0);this.dustGeo.attributes.position.needsUpdate=!0,this.dustGeo.attributes.alpha.needsUpdate=!0,this.dustGeo.attributes.size.needsUpdate=!0;const n=this.sparkleData;for(let s=0;s<n.count;s++)n.active[s]&&(n.positions[s*3]+=n.velocities[s*3]*e,n.positions[s*3+1]+=n.velocities[s*3+1]*e,n.positions[s*3+2]+=n.velocities[s*3+2]*e,n.velocities[s*3+1]-=12*e,n.alphas[s]-=e*2,n.alphas[s]<=0&&(n.active[s]=0,n.alphas[s]=0));this.sparkleGeo.attributes.position.needsUpdate=!0,this.sparkleGeo.attributes.alpha.needsUpdate=!0,this.sparkleGeo.attributes.size.needsUpdate=!0,this.sparkleGeo.attributes.color.needsUpdate=!0;const i=this.debrisData;for(let s=0;s<i.count;s++)i.active[s]&&(i.positions[s*3]+=i.velocities[s*3]*e,i.positions[s*3+1]+=i.velocities[s*3+1]*e,i.positions[s*3+2]+=i.velocities[s*3+2]*e,i.velocities[s*3+1]-=15*e,i.alphas[s]-=e*1.5,i.positions[s*3+1]<.05&&i.velocities[s*3+1]<0&&(i.velocities[s*3+1]*=-.3,i.positions[s*3+1]=.05),i.alphas[s]<=0&&(i.active[s]=0,i.alphas[s]=0));if(this.debrisGeo.attributes.position.needsUpdate=!0,this.debrisGeo.attributes.alpha.needsUpdate=!0,this.debrisGeo.attributes.size.needsUpdate=!0,this.debrisGeo.attributes.color.needsUpdate=!0,this._landingTimer>0){this._landingTimer-=e;const s=1-this._landingTimer/.35,a=.3+s*3;this.landingRing.scale.set(a,a,a),this.landingRing.material.opacity=.6*(1-s),this._landingTimer<=0&&(this.landingRing.visible=!1)}}dispose(){this.scene.remove(this.dustPoints),this.scene.remove(this.sparklePoints),this.scene.remove(this.debrisPoints),this.scene.remove(this.landingRing),this.dustGeo.dispose(),this.dustMat.dispose(),this.sparkleGeo.dispose(),this.sparkleMat.dispose(),this.debrisGeo.dispose(),this.debrisMat.dispose(),this.landingRing.geometry.dispose(),this.landingRing.material.dispose()}}const vv="assets/audio/",cn={start:["start_1.mp3","start_2.mp3"],hit:["hit_1.mp3","hit_2.mp3"],death:["death_1.mp3","death_2.mp3"],nearMiss:["nearmiss_1.mp3","nearmiss_2.mp3","nearmiss_3.mp3"],combo:["combo_1.mp3","combo_2.mp3","combo_3.mp3"],revive:["revive_1.mp3"],gem:["gem_1.mp3","gem_2.mp3"],milestone:{500:"milestone_500.mp3",1e3:"milestone_1000.mp3",2e3:"milestone_2000.mp3",5e3:"milestone_5000.mp3"},biome:{forest:"biome_forest.mp3",desert:"biome_desert.mp3",lava:"biome_lava.mp3",snow:"biome_snow.mp3"},powerUp:{CoinBag:"powerup_coinbag.mp3",CoinMagnet:"powerup_coinmagnet.mp3",DoubleCoin:"powerup_doublecoin.mp3",Invincibility:"powerup_invincibility.mp3",Shield:"powerup_shield.mp3",Antidote:"powerup_speed.mp3",TimeAdvantage:"powerup_speed.mp3",SpeedBoost:"powerup_speed.mp3"}};class xv{constructor(){this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.voiceGain=null,this.musicPlaying=!1,this._initialized=!1,this._sfxVolume=.5,this._musicVolume=.45,this._voiceVolume=.7,this._buffers={},this._loadPromises={},this._musicSource=null,this._menuMusicSource=null,this._voiceCooldown=0,this._lastVoiceTime=0}init(){if(!this._initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.8,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this._sfxVolume,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this._musicVolume,this.musicGain.connect(this.masterGain),this.voiceGain=this.ctx.createGain(),this.voiceGain.gain.value=this._voiceVolume,this.voiceGain.connect(this.masterGain),this._initialized=!0,this._preload("music_gameplay.mp3"),this._preload("music_menu.mp3");for(const e of Object.values(cn))typeof e=="string"?this._preload(e):Array.isArray(e)?e.forEach(t=>this._preload(t)):typeof e=="object"&&Object.values(e).forEach(t=>this._preload(t))}catch(e){console.warn("Audio init failed:",e)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_preload(e){return this._buffers[e]?Promise.resolve():this._loadPromises[e]?this._loadPromises[e]:(this._loadPromises[e]=(async()=>{try{const t=await fetch(vv+e);if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.arrayBuffer(),i=await this.ctx.decodeAudioData(n);this._buffers[e]=i}catch(t){console.warn(`Failed to load ${e}:`,t.message)}delete this._loadPromises[e]})(),this._loadPromises[e])}_playFile(e,t,n=!1,i=1){if(!this._initialized)return null;const s=this._buffers[e];if(!s)return null;const a=this.ctx.createBufferSource();a.buffer=s,a.loop=n;const o=this.ctx.createGain();return o.gain.value=i,a.connect(o),o.connect(t),a.start(0),{source:a,gain:o}}_playRandomVoice(e,t=1.5){if(!this._initialized)return;const n=performance.now()/1e3;if(n-this._lastVoiceTime<this._voiceCooldown)return;const i=Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e;this._playFile(i,this.voiceGain)&&(this._lastVoiceTime=n,this._voiceCooldown=t)}playCoinPickup(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(880,.08,e,.15,"sine"),this._playSine(1320,.08,e+.06,.12,"sine"),this._playSine(1760,.06,e+.1,.1,"sine")}playJump(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(200,e),t.frequency.exponentialRampToValueAtTime(600,e+.15),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.2)}playDoubleJump(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(900,e+.12),n.gain.setValueAtTime(.1,e),n.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.18),this._playSine(1200,.05,e+.05,.08,"sine")}playSlide(){this._initialized&&this._playNoise(.18,this.ctx.currentTime,.12,800,200)}playAttack(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.12,e,.15,2e3,400),this._playSine(150,.08,e+.02,.08,"sawtooth")}playSmash(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.2,e,.25,1500,100),this._playSine(80,.15,e,.12,"sawtooth"),this._playSine(60,.1,e+.05,.15,"square")}playHit(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(100,.2,e,.2,"sawtooth"),this._playNoise(.15,e,.15,600,80),this._playSine(220,.1,e,.15,"square"),this._playSine(233,.1,e,.15,"square"),this._playRandomVoice(cn.hit,2)}playDeath(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(400,e),t.frequency.exponentialRampToValueAtTime(50,e+.8),n.gain.setValueAtTime(.15,e),n.gain.linearRampToValueAtTime(.08,e+.3),n.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+1),this._playNoise(.2,e,.4,400,50),this._playSine(40,.12,e+.1,.6,"sine"),this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(cn.death,3)}playPowerUp(e){if(!this._initialized)return;const t=this.ctx.currentTime;[440,554,659,880,1108].forEach((s,a)=>{this._playSine(s,.08,t+a*.06,.18,"sine")}),this._playSine(1760,.04,t+.3,.3,"sine");const i=cn.powerUp[e];i&&(this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(i,2))}playNearMiss(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.08,e,.1,3e3,1e3),this._playSine(660,.06,e+.05,.1,"sine"),this._playSine(880,.06,e+.1,.1,"sine"),this._playRandomVoice(cn.nearMiss,3)}playCombo(e){if(!this._initialized)return;const t=this.ctx.currentTime,n=500+Math.min(e,20)*40;this._playSine(n,.06,t,.1,"sine"),this._playSine(n*1.5,.04,t+.04,.08,"sine"),e>=8&&e%5===3&&this._playRandomVoice(cn.combo,4)}playRevive(){if(!this._initialized)return;const e=this.ctx.currentTime;[262,330,392,523,659].forEach((n,i)=>{this._playSine(n,.1,e+i*.08,.4,"sine")}),this._playSine(1047,.06,e+.4,.5,"sine"),this._playSine(1319,.04,e+.5,.4,"sine"),this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(cn.revive,2)}playStart(){this._initialized&&(this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(cn.start,3))}playGem(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(1047,.1,e,.3,"sine"),this._playSine(1319,.08,e+.05,.25,"sine"),this._playSine(1568,.08,e+.1,.3,"sine"),this._playSine(2093,.06,e+.15,.35,"sine"),this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(cn.gem,2)}playMilestone(e){if(!this._initialized)return;const t=this.ctx.currentTime;[523,659,784,1047].forEach((s,a)=>{this._playSine(s,.1,t+a*.1,.3,"sine")});const i=cn.milestone[e];i&&(this._voiceCooldown=0,this._lastVoiceTime=0,this._playRandomVoice(i,3))}playBiomeChange(e){if(!this._initialized)return;const t=cn.biome[e];t&&this._playRandomVoice(t,5)}playBossIntro(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playNoise(.25,e,.8,200,40),this._playSine(60,.15,e,.6,"sawtooth"),this._playSine(80,.12,e+.2,.5,"sawtooth"),this._playSine(120,.1,e+.4,.4,"square"),this._playSine(220,.18,e+.6,.5,"sawtooth"),this._playSine(165,.15,e+.65,.45,"sawtooth")}playBossDefeat(){if(!this._initialized)return;const e=this.ctx.currentTime;[523,659,784,1047,1319].forEach((n,i)=>{this._playSine(n,.12,e+i*.08,.4,"sine")}),this._playSine(1568,.08,e+.4,.5,"sine"),this._playNoise(.3,e,.4,400,40),this._playSine(50,.2,e,.3,"sawtooth")}playMenuClick(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(800,.06,e,.06,"sine"),this._playSine(1e3,.05,e+.04,.05,"sine")}playLaneSwitchLeft(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(500,e),t.frequency.exponentialRampToValueAtTime(350,e+.08),n.gain.setValueAtTime(.06,e),n.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.1)}playLaneSwitchRight(){if(!this._initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(350,e),t.frequency.exponentialRampToValueAtTime(500,e+.08),n.gain.setValueAtTime(.06,e),n.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.1)}playCountdownTick(){this._initialized&&this._playSine(600,.1,this.ctx.currentTime,.08,"sine")}playPause(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(400,.06,e,.1,"sine"),this._playSine(300,.06,e+.08,.12,"sine"),this.musicGain&&this.musicGain.gain.linearRampToValueAtTime(this._musicVolume*.2,e+.3)}playResume(){if(!this._initialized)return;const e=this.ctx.currentTime;this._playSine(300,.06,e,.1,"sine"),this._playSine(400,.06,e+.08,.12,"sine"),this.musicGain&&this.musicGain.gain.linearRampToValueAtTime(this._musicVolume,e+.3)}startMusic(){!this._initialized||this.musicPlaying||(this._stopMenuMusic(),this.musicPlaying=!0,this.musicGain.gain.value=this._musicVolume,this._tryPlayMusic("music_gameplay.mp3","_musicSource"))}async _tryPlayMusic(e,t){let n=this._playFile(e,this.musicGain,!0,1);if(n){this[t]=n;return}await this._preload(e),!(!this.musicPlaying&&t==="_musicSource")&&(n=this._playFile(e,this.musicGain,!0,1),n&&(this[t]=n))}stopMusic(){if(this.musicPlaying=!1,this._musicSource){try{this._musicSource.gain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+1);const e=this._musicSource.source;setTimeout(()=>{try{e.stop()}catch{}},1200)}catch{}this._musicSource=null}}startMenuMusic(){this._initialized&&(this._stopMenuMusic(),this.musicGain.gain.value=this._musicVolume,this._tryPlayMusic("music_menu.mp3","_menuMusicSource"))}_stopMenuMusic(){if(this._menuMusicSource){try{this._menuMusicSource.gain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.5);const e=this._menuMusicSource.source;setTimeout(()=>{try{e.stop()}catch{}},600)}catch{}this._menuMusicSource=null}}setMusicIntensity(e){}_playSine(e,t,n,i,s="sine"){const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=s,a.frequency.value=e,o.gain.setValueAtTime(t,n),o.gain.exponentialRampToValueAtTime(.001,n+i),a.connect(o),o.connect(this.sfxGain),a.start(n),a.stop(n+i+.01)}_playNoise(e,t,n,i=2e3,s=200){const a=this.ctx.sampleRate*n,o=this.ctx.createBuffer(1,a,this.ctx.sampleRate),l=o.getChannelData(0);for(let u=0;u<a;u++)l[u]=Math.random()*2-1;const c=this.ctx.createBufferSource();c.buffer=o;const h=this.ctx.createGain();h.gain.setValueAtTime(e,t),h.gain.exponentialRampToValueAtTime(.001,t+n);const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.value=(i+s)/2,d.Q.value=1,c.connect(d),d.connect(h),h.connect(this.sfxGain),c.start(t),c.stop(t+n+.01)}setSFXVolume(e){this._sfxVolume=e,this.sfxGain&&(this.sfxGain.gain.value=e)}setMusicVolume(e){this._musicVolume=e,this.musicGain&&(this.musicGain.gain.value=e)}setVoiceVolume(e){this._voiceVolume=e,this.voiceGain&&(this.voiceGain.gain.value=e)}}const th=3,yv=[-th,0,th],Ds=[{delay:0,attacks:[{type:"fireball",lane:0,speed:22},{type:"fireball",lane:2,speed:22}]},{delay:2.5,attacks:[{type:"groundSlam",lane:0,speed:26},{type:"groundSlam",lane:1,speed:26},{type:"groundSlam",lane:2,speed:26}]},{delay:2.5,attacks:[{type:"beam",lane:0,speed:24},{type:"beam",lane:1,speed:24},{type:"beam",lane:2,speed:24}]},{delay:2,attacks:[{type:"fireball",lane:1,speed:28},{type:"groundSlam",lane:0,speed:25,delayOffset:.4},{type:"groundSlam",lane:2,speed:25,delayOffset:.4}]}],bv={fireball:new _s(.5,12,8),groundSlam:new Et(2.5,.4,1),beam:new Et(2.5,1.4,.6)},Mv={fireball:new Oe({color:16729088,emissive:16720384,emissiveIntensity:1.5,metalness:.3,roughness:.4}),groundSlam:new Oe({color:16737792,emissive:16729088,emissiveIntensity:1,metalness:.2,roughness:.6}),beam:new Oe({color:16711748,emissive:16711714,emissiveIntensity:1.2,metalness:.4,roughness:.3})},Sv={fireball:{width:1,height:1.5,yMin:.2,yMax:1.7},groundSlam:{width:2.4,height:.6,yMin:0,yMax:.6},beam:{width:2.4,height:1.4,yMin:1,yMax:2.4}};class wv{constructor(e){this.scene=e,this.active=!1,this.phase="idle",this.timer=0,this.totalTime=12,this.waveIndex=0,this.waveTimer=0,this.encounterCount=0,this.bossGroup=null,this._bossZ=0,this.projectiles=[],this._pendingAttacks=[],this._gateGroup=null,this._glowPhase=0}start(e,t){this.active=!0,this.phase="approaching",this.timer=this.totalTime,this.waveIndex=0,this.waveTimer=1.5,this._pendingAttacks=[],this.encounterCount++,this._bossZ=e-45,this._spawnBoss(t),this._spawnGate(e-20),this._approachTimer=1.5}update(e,t,n,i){if(this.active){if(this._bossZ=n-42,this.bossGroup&&(this.bossGroup.position.z=this._bossZ,this._glowPhase+=e*3,this.bossGroup.position.y=3+Math.sin(this._glowPhase)*.5,this.bossGroup.rotation.y+=e*.5,this._eyeMat&&(this._eyeMat.emissiveIntensity=1.5+Math.sin(this._glowPhase*2)*.5)),this._gateGroup&&this._gateGroup.position.z>n+30&&(this.scene.remove(this._gateGroup),this._gateGroup=null),this.phase==="approaching"&&(this._approachTimer-=e,this._approachTimer<=0&&(this.phase="fighting")),this.phase==="fighting"){this.timer-=e,this.waveTimer-=e,this.waveTimer<=0&&this.waveIndex<Ds.length&&(this._executeWave(this.waveIndex),this.waveIndex++,this.waveIndex<Ds.length&&(this.waveTimer=Ds[this.waveIndex].delay));for(let s=this._pendingAttacks.length-1;s>=0;s--)if(this._pendingAttacks[s].delay-=e,this._pendingAttacks[s].delay<=0){const a=this._pendingAttacks.splice(s,1)[0];this._spawnProjectile(a.lane,a.type,a.speed,n-50)}if(this.waveIndex>=Ds.length&&this.projectiles.length===0&&this._pendingAttacks.length===0){this._defeatBoss();return}if(this.timer<=0){this._defeatBoss();return}}this._updateProjectiles(e,n)}}getProjectileCollisions(e,t,n,i,s){const a=[],o=e-.5,l=e+.5,c=n+s,h=n+s+i,d=t-.5,u=t+.5;for(let f=this.projectiles.length-1;f>=0;f--){const g=this.projectiles[f],_=g.mesh.position,m=Sv[g.type],p=m.width*.5,b=_.x-p,S=_.x+p,v=m.yMin,D=m.yMax,A=_.z-.5,E=_.z+.5;l>b&&o<S&&h>v&&c<D&&u>A&&d<E&&(a.push(g),this.scene.remove(g.mesh),this.projectiles.splice(f,1))}return a}_executeWave(e){const t=Ds[e];if(t)for(const n of t.attacks){const i=Math.min(10,this.encounterCount*2),s=n.speed+i;n.delayOffset?this._pendingAttacks.push({type:n.type,lane:n.lane,speed:s,delay:n.delayOffset}):this._spawnProjectile(n.lane,n.type,s,this._bossZ)}}_spawnProjectile(e,t,n,i){const s=bv[t],a=Mv[t],o=new Ce(s,a);if(o.position.set(yv[e],t==="beam"?1.7:.3,i),o.castShadow=!0,t==="fireball"){const l=new Vs(16729088,1.5,6,2);o.add(l)}this.scene.add(o),this.projectiles.push({mesh:o,type:t,speed:n,lane:e})}_updateProjectiles(e,t){for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];if(i.mesh.position.z+=i.speed*e,i.type==="fireball"&&(i.mesh.rotation.x+=e*8,i.mesh.rotation.z+=e*5),i.type==="groundSlam"){const s=1+Math.sin(performance.now()*.01)*.1;i.mesh.scale.y=s}i.mesh.position.z>t+5&&(this.scene.remove(i.mesh),this.projectiles.splice(n,1))}}_defeatBoss(){this.phase="defeated",this.active=!1,this.bossGroup&&(this.scene.remove(this.bossGroup),this.bossGroup=null);for(const e of this.projectiles)this.scene.remove(e.mesh);this.projectiles=[],this._pendingAttacks=[],this._gateGroup&&(this.scene.remove(this._gateGroup),this._gateGroup=null)}_spawnBoss(e){this.bossGroup&&this.scene.remove(this.bossGroup),this.bossGroup=new Bt;const n={roman:4849715,forest:1718794,desert:5913098,lava:3801088,snow:1714746}[e]||4849715,i=new Et(3,4,2),s=new Oe({color:n,roughness:.6,metalness:.4,emissive:n,emissiveIntensity:.3}),a=new Ce(i,s);a.position.y=0,this.bossGroup.add(a);const o=new Et(2,2,1.8),l=new Ce(o,s);l.position.y=3,this.bossGroup.add(l);const c=new da(.3,1.5,6),h=new Oe({color:2236962,roughness:.3,metalness:.8});for(const p of[-.7,.7]){const b=new Ce(c,h);b.position.set(p,4.2,0),b.rotation.z=p>0?-.3:.3,this.bossGroup.add(b)}const d=new _s(.25,8,6);this._eyeMat=new Oe({color:16711680,emissive:16711680,emissiveIntensity:2});for(const p of[-.5,.5]){const b=new Ce(d,this._eyeMat);b.position.set(p,3.2,.9),this.bossGroup.add(b)}const u=new Et(1.2,3.5,1);for(const p of[-2,2]){const b=new Ce(u,s);b.position.set(p,-.3,0),b.rotation.z=p>0?.15:-.15,this.bossGroup.add(b)}const f=new ua(3.5,4,32),g=new nn({color:16729088,transparent:!0,opacity:.3,side:en}),_=new Ce(f,g);_.rotation.x=Math.PI/2,_.position.y=-1.5,this.bossGroup.add(_);const m=new Vs(16729088,2,20,2);m.position.set(0,2,0),this.bossGroup.add(m),this.bossGroup.position.set(0,3,this._bossZ),this.bossGroup.scale.setScalar(1.3),this.scene.add(this.bossGroup)}_spawnGate(e){this._gateGroup&&this.scene.remove(this._gateGroup),this._gateGroup=new Bt,this._gateGroup.position.z=e;const t=new Et(1.5,7,1.5),n=new Oe({color:4849664,emissive:16720384,emissiveIntensity:.4,roughness:.5,metalness:.3});for(const a of[-4,4]){const o=new Ce(t,n);o.position.set(a,3.5,0),o.castShadow=!0,this._gateGroup.add(o)}const i=new Et(9.5,.8,1.5),s=new Ce(i,n);s.position.set(0,7.2,0),this._gateGroup.add(s);for(const a of[-4,4]){const o=new Vs(16720384,2,8,2);o.position.set(a,7.5,0),this._gateGroup.add(o)}this.scene.add(this._gateGroup)}dispose(){this.bossGroup&&(this.scene.remove(this.bossGroup),this.bossGroup=null),this._gateGroup&&(this.scene.remove(this._gateGroup),this._gateGroup=null);for(const e of this.projectiles)this.scene.remove(e.mesh);this.projectiles=[],this._pendingAttacks=[],this.active=!1,this.phase="idle"}}const nh="0x348e62131fce2F4e0d5ead3Fe1719Bc039B380A9",Nr="0x89",Tv="https://polygon-rpc.com";class Ev{constructor(){this.connected=!1,this.address=null,this.pyrBalance=0,this.chainId=null,this._provider=null,this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}_emit(e,t){(this._listeners[e]||[]).forEach(n=>n(t))}async connect(){if(!window.ethereum)return this._emit("error","No wallet detected. Please install MetaMask."),!1;try{const e=await window.ethereum.request({method:"eth_requestAccounts"});return!e||e.length===0?(this._emit("error","No accounts found."),!1):(this.address=e[0],this.chainId=await window.ethereum.request({method:"eth_chainId"}),this._provider=window.ethereum,this.connected=!0,this.chainId!==Nr&&await this._switchToPolygon(),await this.refreshBalance(),window.ethereum.on("accountsChanged",t=>{this.address=t[0]||null,this.connected=!!this.address,this._emit("accountChanged",this.address),this.connected&&this.refreshBalance()}),window.ethereum.on("chainChanged",t=>{this.chainId=t,this._emit("chainChanged",t),this.refreshBalance()}),this._emit("connected",{address:this.address,balance:this.pyrBalance}),!0)}catch(e){return this._emit("error",e.message||"Connection failed"),!1}}disconnect(){this.connected=!1,this.address=null,this.pyrBalance=0,this._emit("disconnected")}async _switchToPolygon(){try{await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:Nr}]})}catch(e){e.code===4902&&await window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:Nr,chainName:"Polygon Mainnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:[Tv],blockExplorerUrls:["https://polygonscan.com/"]}]})}}async refreshBalance(){if(!this.connected||!this.address)return 0;try{const e="0x70a08231"+this.address.slice(2).padStart(64,"0"),t=await window.ethereum.request({method:"eth_call",params:[{to:nh,data:e},"latest"]}),n=BigInt(t);return this.pyrBalance=Number(n/BigInt(10**14))/1e4,this._emit("balanceUpdated",this.pyrBalance),this.pyrBalance}catch(e){return console.warn("Failed to get PYR balance:",e.message),0}}async writeScoreToChain(e,t,n){if(!this.connected||!this.address)return this._emit("error","Wallet not connected"),null;try{const i=new TextEncoder,s=JSON.stringify({game:"VulcanRunner",score:Math.floor(e),distance:Math.floor(t),coins:n,timestamp:Date.now(),player:this.address}),a="0x"+Array.from(i.encode(s)).map(l=>l.toString(16).padStart(2,"0")).join(""),o=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:this.address,to:this.address,value:"0x0",data:a,gas:"0x15F90"}]});return this._emit("scoreWritten",{txHash:o,score:e,distance:t}),o}catch(i){return this._emit("error",i.message||"Failed to write score"),null}}async sendPYR(e,t){if(!this.connected||!this.address)return this._emit("error","Wallet not connected"),null;try{const i=BigInt(Math.floor(e*1e18)).toString(16).padStart(64,"0"),a="0xa9059cbb"+t.slice(2).padStart(64,"0")+i,o=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:this.address,to:nh,data:a,gas:"0x186A0"}]});return this._emit("pyrSent",{txHash:o,amount:e,to:t}),await this.refreshBalance(),o}catch(n){return this._emit("error",n.message||"Transaction failed"),null}}shortAddress(){return this.address?this.address.slice(0,6)+"..."+this.address.slice(-4):""}isOnPolygon(){return this.chainId===Nr}}const Ps={characters:[{id:"knight",name:"Knight",emoji:"⚔️",desc:"Balanced fighter",currency:"free",price:0,unlocked:!0},{id:"barbarian",name:"Barbarian",emoji:"🪓",desc:"Raw power",currency:"coins",price:500,unlocked:!1},{id:"mage",name:"Mage",emoji:"🔮",desc:"Arcane speed",currency:"pyr",price:5,unlocked:!1,premium:!0},{id:"rogue",name:"Rogue",emoji:"🗡️",desc:"Shadow step",currency:"pyr",price:8,unlocked:!1,premium:!0},{id:"paladin",name:"Paladin",emoji:"🛡️",desc:"Divine shield",currency:"pyr",price:12,unlocked:!1,premium:!0}],boosts:[{id:"head_start",name:"Head Start",emoji:"🚀",desc:"Start at 500m with coins",currency:"coins",price:200,consumable:!0},{id:"extra_life",name:"Extra Life",emoji:"💚",desc:"+1 revive per run",currency:"coins",price:300,consumable:!0},{id:"coin_boost",name:"2x Coins",emoji:"🪙",desc:"Double coins for one run",currency:"coins",price:150,consumable:!0},{id:"shield_start",name:"Shield Start",emoji:"🛡️",desc:"Start run with Shield",currency:"pyr",price:2,consumable:!0,premium:!0},{id:"magnet_start",name:"Magnet Start",emoji:"🧲",desc:"Start run with CoinMagnet",currency:"pyr",price:2,consumable:!0,premium:!0}]};class Av{constructor(){this._unlocked=JSON.parse(localStorage.getItem("vr_unlocked")||'["knight"]'),this._inventory=JSON.parse(localStorage.getItem("vr_inventory")||"{}"),this._totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10);for(const e of Ps.characters)e.unlocked=this._unlocked.includes(e.id)}getItems(){return Ps}getCharacters(){return Ps.characters}getBoosts(){return Ps.boosts}isUnlocked(e){return this._unlocked.includes(e)}getInventoryCount(e){return this._inventory[e]||0}buyWithCoins(e){const t=this._findItem(e);if(!t)return{success:!1,error:"Item not found"};if(t.currency!=="coins")return{success:!1,error:"Item requires PYR"};if(this._totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10),this._totalCoins<t.price)return{success:!1,error:"Not enough coins"};if(t.consumable)this._inventory[e]=(this._inventory[e]||0)+1,localStorage.setItem("vr_inventory",JSON.stringify(this._inventory));else{if(this._unlocked.includes(e))return{success:!1,error:"Already unlocked"};this._unlocked.push(e),t.unlocked=!0,localStorage.setItem("vr_unlocked",JSON.stringify(this._unlocked))}return this._totalCoins-=t.price,localStorage.setItem("vr_coins",String(this._totalCoins)),{success:!0,newBalance:this._totalCoins}}async buyWithPYR(e,t,n){const i=this._findItem(e);if(!i)return{success:!1,error:"Item not found"};if(i.currency!=="pyr")return{success:!1,error:"Item uses coins, not PYR"};if(!t.connected)return{success:!1,error:"Wallet not connected"};if(t.pyrBalance<i.price)return{success:!1,error:`Need ${i.price} PYR (have ${t.pyrBalance.toFixed(2)})`};const s=await t.sendPYR(i.price,n);return s?(i.consumable?(this._inventory[e]=(this._inventory[e]||0)+1,localStorage.setItem("vr_inventory",JSON.stringify(this._inventory))):this._unlocked.includes(e)||(this._unlocked.push(e),i.unlocked=!0,localStorage.setItem("vr_unlocked",JSON.stringify(this._unlocked))),{success:!0,txHash:s}):{success:!1,error:"Transaction cancelled or failed"}}useBoost(e){const t=this._inventory[e]||0;return t<=0?!1:(this._inventory[e]=t-1,localStorage.setItem("vr_inventory",JSON.stringify(this._inventory)),!0)}getActiveBoosts(){return{...this._inventory}}getCoins(){return parseInt(localStorage.getItem("vr_coins")||"0",10)}_findItem(e){for(const t of Object.values(Ps)){const n=t.find(i=>i.id===e);if(n)return n}return null}}const Fr="vr_leaderboard",ih=50;class Cv{constructor(){this.entries=JSON.parse(localStorage.getItem(Fr)||"[]")}submit(e){const t={name:e.name||"Player",score:Math.floor(e.score),distance:Math.floor(e.distance),coins:e.coins||0,character:e.character||"knight",maxCombo:e.maxCombo||0,date:new Date().toISOString(),address:e.address||null,txHash:e.txHash||null};return this.entries.push(t),this.entries.sort((n,i)=>i.score-n.score),this.entries.length>ih&&(this.entries=this.entries.slice(0,ih)),localStorage.setItem(Fr,JSON.stringify(this.entries)),this._getRank(t.score)}getTop(e=10){return this.entries.slice(0,e)}getPersonalBest(e){if(!e)return null;const t=e.toLowerCase();return this.entries.find(n=>n.address&&n.address.toLowerCase()===t)||null}_getRank(e){const t=this.entries.findIndex(n=>n.score<=e);return t===-1?this.entries.length:t+1}markOnChain(e,t){const n=this.entries.find(i=>i.score===e&&!i.txHash);n&&(n.txHash=t,localStorage.setItem(Fr,JSON.stringify(this.entries)))}clear(){this.entries=[],localStorage.setItem(Fr,JSON.stringify(this.entries))}}const sh=[{id:"forest",name:"Enchanted Forest",icon:"🌲",theme:"forest",requiredStars:0,stages:[{id:"forest_1",name:"Mossy Trail",description:"A gentle jog through dappled sunlight.",objectives:{star1:{type:"distance",target:200},star2:{type:"coins",target:30},star3:{type:"score",target:500}},modifiers:{fixedTheme:"forest",speedMultiplier:.8,obstacleFrequency:.6,coinMultiplier:1}},{id:"forest_2",name:"Whispering Willows",description:"The trees seem to lean in and whisper secrets.",objectives:{star1:{type:"distance",target:350},star2:{type:"score",target:1e3},star3:{type:"combo",target:5}},modifiers:{fixedTheme:"forest",speedMultiplier:.85,obstacleFrequency:.7,coinMultiplier:1}},{id:"forest_3",name:"Toadstool Hollow",description:"Giant mushrooms block the path ahead.",objectives:{star1:{type:"distance",target:500},star2:{type:"coins",target:60},star3:{type:"noHit",target:200}},modifiers:{fixedTheme:"forest",speedMultiplier:.9,obstacleFrequency:.75,coinMultiplier:1.2}},{id:"forest_4",name:"Firefly Glade",description:"Bioluminescent bugs light your way through the dark.",objectives:{star1:{type:"score",target:2e3},star2:{type:"combo",target:8},star3:{type:"coins",target:100}},modifiers:{fixedTheme:"forest",speedMultiplier:.9,obstacleFrequency:.8,coinMultiplier:1.3}},{id:"forest_5",name:"Briar Thicket",description:"Thorny tangles demand sharp reflexes.",objectives:{star1:{type:"distance",target:700},star2:{type:"noHit",target:350},star3:{type:"score",target:3e3}},modifiers:{fixedTheme:"forest",speedMultiplier:1,obstacleFrequency:.9,coinMultiplier:1}},{id:"forest_6",name:"Canopy Sprint",description:"Race across the treetops at breakneck speed!",objectives:{star1:{type:"distance",target:900},star2:{type:"score",target:4e3},star3:{type:"combo",target:12}},modifiers:{fixedTheme:"forest",speedMultiplier:1.15,obstacleFrequency:.85,coinMultiplier:1}},{id:"forest_7",name:"Pixie Ambush",description:"Mischievous pixies have rigged the forest with traps.",objectives:{star1:{type:"distance",target:1e3},star2:{type:"chests",target:3},star3:{type:"noHit",target:500}},modifiers:{fixedTheme:"forest",speedMultiplier:1,obstacleFrequency:1,coinMultiplier:1.5}},{id:"forest_8",name:"Treant's Domain",description:"The ancient Treant guards the forest heart.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"score",target:6e3},star3:{type:"noHit",target:400}},modifiers:{fixedTheme:"forest",speedMultiplier:1,obstacleFrequency:.9,coinMultiplier:1.2,bossEnabled:!0,bossAtDistance:800}},{id:"forest_9",name:"Overgrown Ruins",description:"Crumbling stone and creeping vines hide treasures.",objectives:{star1:{type:"distance",target:1300},star2:{type:"coins",target:200},star3:{type:"chests",target:5}},modifiers:{fixedTheme:"forest",speedMultiplier:1.1,obstacleFrequency:1.05,coinMultiplier:1.8}},{id:"forest_10",name:"Heart of the Wilds",description:"The deepest grove — only the worthy may pass.",objectives:{star1:{type:"distance",target:1500},star2:{type:"score",target:1e4},star3:{type:"noHit",target:700}},modifiers:{fixedTheme:"forest",speedMultiplier:1.15,obstacleFrequency:1.1,coinMultiplier:1.5}}]},{id:"desert",name:"Scorching Sands",icon:"🏜️",theme:"desert",requiredStars:12,stages:[{id:"desert_1",name:"Dune Dash",description:"Golden dunes stretch to the horizon.",objectives:{star1:{type:"distance",target:400},star2:{type:"coins",target:50},star3:{type:"score",target:1500}},modifiers:{fixedTheme:"desert",speedMultiplier:1,obstacleFrequency:.8,coinMultiplier:1}},{id:"desert_2",name:"Mirage Mile",description:"Nothing is what it seems out here.",objectives:{star1:{type:"distance",target:600},star2:{type:"combo",target:8},star3:{type:"score",target:2500}},modifiers:{fixedTheme:"desert",speedMultiplier:1.05,obstacleFrequency:.9,coinMultiplier:1}},{id:"desert_3",name:"Sandstorm Surge",description:"A wall of sand bears down — keep moving!",objectives:{star1:{type:"distance",target:800},star2:{type:"noHit",target:300},star3:{type:"score",target:4e3}},modifiers:{fixedTheme:"desert",speedMultiplier:1.1,obstacleFrequency:1.2,coinMultiplier:1}},{id:"desert_4",name:"Oasis Blitz",description:"Grab every coin before the oasis dries up!",objectives:{star1:{type:"coins",target:150},star2:{type:"chests",target:4},star3:{type:"score",target:5e3}},modifiers:{fixedTheme:"desert",speedMultiplier:1,obstacleFrequency:.85,coinMultiplier:2,timeLimit:60}},{id:"desert_5",name:"Scorpion Pass",description:"The canyon narrows and the obstacles multiply.",objectives:{star1:{type:"distance",target:1e3},star2:{type:"noHit",target:500},star3:{type:"combo",target:15}},modifiers:{fixedTheme:"desert",speedMultiplier:1.1,obstacleFrequency:1.3,coinMultiplier:1}},{id:"desert_6",name:"Sunblaze Sprint",description:"The heat is on. Run faster than the sun.",objectives:{star1:{type:"distance",target:1200},star2:{type:"score",target:7e3},star3:{type:"distance",target:1600}},modifiers:{fixedTheme:"desert",speedMultiplier:1.3,obstacleFrequency:1,coinMultiplier:1,timeLimit:45}},{id:"desert_7",name:"Tomb Raider's Run",description:"Ancient traps guard forgotten riches.",objectives:{star1:{type:"chests",target:6},star2:{type:"coins",target:250},star3:{type:"noHit",target:600}},modifiers:{fixedTheme:"desert",speedMultiplier:1.05,obstacleFrequency:1.2,coinMultiplier:2}},{id:"desert_8",name:"Sphinx's Gauntlet",description:"Answer the Sphinx with your feet — dodge or perish.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"score",target:8e3},star3:{type:"noHit",target:500}},modifiers:{fixedTheme:"desert",speedMultiplier:1.1,obstacleFrequency:1.1,coinMultiplier:1.2,bossEnabled:!0,bossAtDistance:1e3}},{id:"desert_9",name:"Quicksand Frenzy",description:"The ground itself is your enemy.",objectives:{star1:{type:"distance",target:1400},star2:{type:"combo",target:20},star3:{type:"score",target:12e3}},modifiers:{fixedTheme:"desert",speedMultiplier:1.15,obstacleFrequency:1.4,coinMultiplier:1,maxHealth:2}},{id:"desert_10",name:"Eye of the Storm",description:"Survive the mega-sandstorm to claim your glory.",objectives:{star1:{type:"distance",target:1800},star2:{type:"score",target:15e3},star3:{type:"noHit",target:800}},modifiers:{fixedTheme:"desert",speedMultiplier:1.25,obstacleFrequency:1.5,coinMultiplier:1.5,timeLimit:90}}]},{id:"lava",name:"Volcanic Depths",icon:"🌋",theme:"lava",requiredStars:25,stages:[{id:"lava_1",name:"Ember Gateway",description:"The descent begins. Heat rises from below.",objectives:{star1:{type:"distance",target:500},star2:{type:"score",target:3e3},star3:{type:"combo",target:10}},modifiers:{fixedTheme:"lava",speedMultiplier:1.1,obstacleFrequency:1,coinMultiplier:1,maxHealth:3}},{id:"lava_2",name:"Magma Channels",description:"Rivers of molten rock carve the only path forward.",objectives:{star1:{type:"distance",target:700},star2:{type:"noHit",target:400},star3:{type:"score",target:5e3}},modifiers:{fixedTheme:"lava",speedMultiplier:1.15,obstacleFrequency:1.1,coinMultiplier:1,maxHealth:3}},{id:"lava_3",name:"Obsidian Gauntlet",description:"Razor-sharp rocks and zero margin for error.",objectives:{star1:{type:"distance",target:900},star2:{type:"noHit",target:600},star3:{type:"combo",target:15}},modifiers:{fixedTheme:"lava",speedMultiplier:1.15,obstacleFrequency:1.3,coinMultiplier:1,maxHealth:2,noRevive:!0}},{id:"lava_4",name:"Flame Warden's Keep",description:"A fiery guardian blocks the tunnel.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"score",target:7e3},star3:{type:"coins",target:150}},modifiers:{fixedTheme:"lava",speedMultiplier:1.1,obstacleFrequency:1.1,coinMultiplier:1.3,maxHealth:3,bossEnabled:!0,bossAtDistance:700}},{id:"lava_5",name:"Eruption Sprint",description:"The volcano is blowing — run for your life!",objectives:{star1:{type:"distance",target:1200},star2:{type:"score",target:9e3},star3:{type:"distance",target:1600}},modifiers:{fixedTheme:"lava",speedMultiplier:1.35,obstacleFrequency:1.2,coinMultiplier:1,maxHealth:2,timeLimit:50}},{id:"lava_6",name:"Cinder Maze",description:"Choking ash and falling debris. Stay sharp.",objectives:{star1:{type:"distance",target:1e3},star2:{type:"chests",target:5},star3:{type:"noHit",target:700}},modifiers:{fixedTheme:"lava",speedMultiplier:1.1,obstacleFrequency:1.4,coinMultiplier:1.5,maxHealth:2,noRevive:!0}},{id:"lava_7",name:"Inferno Blitz",description:"Everything is on fire. Collect while you can.",objectives:{star1:{type:"coins",target:300},star2:{type:"combo",target:20},star3:{type:"score",target:15e3}},modifiers:{fixedTheme:"lava",speedMultiplier:1.2,obstacleFrequency:1.3,coinMultiplier:2.5,maxHealth:2,timeLimit:60}},{id:"lava_8",name:"Hellforge Passage",description:"The walls pulse with heat. One mistake is fatal.",objectives:{star1:{type:"distance",target:1500},star2:{type:"noHit",target:1e3},star3:{type:"score",target:18e3}},modifiers:{fixedTheme:"lava",speedMultiplier:1.2,obstacleFrequency:1.5,coinMultiplier:1,maxHealth:1,noRevive:!0}},{id:"lava_9",name:"Caldera of Souls",description:"The volcano's heart beats with ancient power.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"score",target:2e4},star3:{type:"noHit",target:800}},modifiers:{fixedTheme:"lava",speedMultiplier:1.25,obstacleFrequency:1.4,coinMultiplier:1.5,maxHealth:2,bossEnabled:!0,bossAtDistance:1200,noRevive:!0}},{id:"lava_10",name:"Vulcan's Throne",description:"Face the Volcano Lord. Only legends survive.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"noHit",target:1200},star3:{type:"score",target:3e4}},modifiers:{fixedTheme:"lava",speedMultiplier:1.3,obstacleFrequency:1.5,coinMultiplier:2,maxHealth:1,bossEnabled:!0,bossAtDistance:1500,noRevive:!0}}]},{id:"underwater",name:"Abyssal Depths",icon:"🌊",theme:"underwater",requiredStars:45,stages:[{id:"underwater_1",name:"Shallow Reef",description:"Crystal clear waters ease you in.",objectives:{star1:{type:"distance",target:400},star2:{type:"coins",target:60},star3:{type:"score",target:2e3}},modifiers:{fixedTheme:"underwater",speedMultiplier:.85,obstacleFrequency:.7,coinMultiplier:1.2}},{id:"underwater_2",name:"Kelp Forest",description:"Thick seaweed tangles slow your path.",objectives:{star1:{type:"distance",target:600},star2:{type:"noHit",target:300},star3:{type:"combo",target:10}},modifiers:{fixedTheme:"underwater",speedMultiplier:.9,obstacleFrequency:.85,coinMultiplier:1}},{id:"underwater_3",name:"Coral Maze",description:"Navigate the twisting coral formations.",objectives:{star1:{type:"distance",target:800},star2:{type:"chests",target:4},star3:{type:"score",target:5e3}},modifiers:{fixedTheme:"underwater",speedMultiplier:.95,obstacleFrequency:1,coinMultiplier:1.5}},{id:"underwater_4",name:"Jellyfish Swarm",description:"Electric jellyfish fill every lane.",objectives:{star1:{type:"distance",target:1e3},star2:{type:"noHit",target:500},star3:{type:"score",target:8e3}},modifiers:{fixedTheme:"underwater",speedMultiplier:1,obstacleFrequency:1.3,coinMultiplier:1,maxHealth:3}},{id:"underwater_5",name:"Shipwreck Alley",description:"Loot the wrecks before the current takes you.",objectives:{star1:{type:"chests",target:8},star2:{type:"coins",target:300},star3:{type:"combo",target:15}},modifiers:{fixedTheme:"underwater",speedMultiplier:1,obstacleFrequency:1,coinMultiplier:2}},{id:"underwater_6",name:"The Deep Trench",description:"Darkness closes in. Air is scarce.",objectives:{star1:{type:"distance",target:1200},star2:{type:"score",target:1e4},star3:{type:"noHit",target:700}},modifiers:{fixedTheme:"underwater",speedMultiplier:1.1,obstacleFrequency:1.2,coinMultiplier:1,maxHealth:2}},{id:"underwater_7",name:"Angler's Domain",description:"Face the beast of the deep.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"score",target:12e3},star3:{type:"noHit",target:600}},modifiers:{fixedTheme:"underwater",speedMultiplier:1.05,obstacleFrequency:1.1,coinMultiplier:1.3,maxHealth:3,bossEnabled:!0,bossAtDistance:900}},{id:"underwater_8",name:"Maelstrom Run",description:"The whirlpool drags everything into chaos.",objectives:{star1:{type:"distance",target:1500},star2:{type:"combo",target:20},star3:{type:"score",target:18e3}},modifiers:{fixedTheme:"underwater",speedMultiplier:1.2,obstacleFrequency:1.4,coinMultiplier:1,maxHealth:2,noRevive:!0}},{id:"underwater_9",name:"Leviathan's Wake",description:"The ocean floor trembles. Something stirs.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"noHit",target:900},star3:{type:"score",target:22e3}},modifiers:{fixedTheme:"underwater",speedMultiplier:1.15,obstacleFrequency:1.3,coinMultiplier:1.5,maxHealth:2,bossEnabled:!0,bossAtDistance:1100,noRevive:!0}},{id:"underwater_10",name:"Abyssal Throne",description:"The deepest point. Only legends return.",objectives:{star1:{type:"bossDefeat",target:1},star2:{type:"noHit",target:1e3},star3:{type:"score",target:3e4}},modifiers:{fixedTheme:"underwater",speedMultiplier:1.25,obstacleFrequency:1.5,coinMultiplier:2,maxHealth:1,bossEnabled:!0,bossAtDistance:1400,noRevive:!0}}]}];class Rv{constructor(){this.state=this._load()}_load(){try{const e=localStorage.getItem("vr_campaign");if(e)return JSON.parse(e)}catch(e){console.warn("CampaignManager: failed to load state, resetting.",e)}return{results:{}}}save(){try{localStorage.setItem("vr_campaign",JSON.stringify(this.state))}catch(e){console.warn("CampaignManager: failed to save state.",e)}}getTotalStars(){let e=0;for(const t in this.state.results){const n=this.state.results[t];n&&typeof n.stars=="number"&&(e+=n.stars)}try{const t=parseInt(localStorage.getItem("vr_challenge_stars"),10);isNaN(t)||(e+=t)}catch{}return e}isCampaignUnlocked(e){const t=this.getCampaign(e);return t?this.getTotalStars()>=t.requiredStars:!1}isStageUnlocked(e,t){if(!this.isCampaignUnlocked(e))return!1;if(t===0)return!0;const n=this.getCampaign(e);if(!n||t<0||t>=n.stages.length)return!1;const i=n.stages[t-1],s=this.getStageResult(e,i.id);return s!==null&&s.stars>=1}getStageResult(e,t){const n=`${e}:${t}`;return this.state.results[n]||null}evaluateRun(e,t,n){const i=this.getCampaign(e);if(!i)return null;const s=i.stages.find(v=>v.id===t);if(!s)return null;const{score:a=0,distance:o=0,coins:l=0,maxCombo:c=0,chestsSmashed:h=0,noHitDistance:d=0,bossDefeated:u=!1,health:f=0}=n;let g=0;const _=s.objectives;this._checkObjective(_.star1,n)&&(g=1),g>=1&&this._checkObjective(_.star2,n)&&(g=2),g>=2&&this._checkObjective(_.star3,n)&&(g=3);const m=`${e}:${t}`,p=this.state.results[m],b=!p;let S=!1;return(!p||g>p.stars||a>p.bestScore||o>p.bestDistance||l>p.bestCoins)&&(S=!0,this.state.results[m]={stars:p?Math.max(p.stars,g):g,bestScore:p?Math.max(p.bestScore,a):a,bestDistance:p?Math.max(p.bestDistance,o):o,bestCoins:p?Math.max(p.bestCoins,l):l},this.save()),{stars:g,isNew:b,newRecord:S}}_checkObjective(e,t){if(!e)return!1;const{type:n,target:i}=e;switch(n){case"distance":return(t.distance||0)>=i;case"score":return(t.score||0)>=i;case"coins":return(t.coins||0)>=i;case"combo":return(t.maxCombo||0)>=i;case"chests":return(t.chestsSmashed||0)>=i;case"noHit":return(t.noHitDistance||0)>=i;case"bossDefeat":return t.bossDefeated===!0;default:return!1}}getCampaign(e){return sh.find(t=>t.id===e)||null}getStage(e,t){const n=this.getCampaign(e);return!n||t<0||t>=n.stages.length?null:n.stages[t]}getAllCampaigns(){return sh}}const rh=[{id:"coin_hoarder",name:"Coin Hoarder",desc:"Collect {target} coins in a single run",type:"coins",targetRange:[100,500],reward:{coins:150,gems:2}},{id:"untouchable",name:"Untouchable",desc:"Run {target}m without getting hit",type:"noHitDistance",targetRange:[200,800],reward:{coins:300,gems:5}},{id:"boss_slayer",name:"Boss Slayer",desc:"Defeat {target} boss(es) in a single run",type:"bossDefeated",targetRange:[1,3],reward:{coins:400,gems:6}},{id:"combo_fiend",name:"Combo Fiend",desc:"Reach a combo of {target}x in a single run",type:"maxCombo",targetRange:[10,50],reward:{coins:200,gems:3}},{id:"chest_buster",name:"Chest Buster",desc:"Smash {target} chests in a single run",type:"chestsSmashed",targetRange:[5,20],reward:{coins:180,gems:3}},{id:"speed_demon",name:"Speed Demon",desc:"Run {target}m in a single run",type:"distance",targetRange:[500,2e3],reward:{coins:200,gems:3}},{id:"close_shaves",name:"Close Shaves",desc:"Pull off {target} near misses in a single run",type:"nearMisses",targetRange:[5,25],reward:{coins:250,gems:4}},{id:"marathon_runner",name:"Marathon Runner",desc:"Cover {target}m distance in a single run",type:"distance",targetRange:[1500,5e3],reward:{coins:350,gems:5}},{id:"high_roller",name:"High Roller",desc:"Score {target} points in a single run",type:"score",targetRange:[5e3,25e3],reward:{coins:250,gems:4}},{id:"power_surge",name:"Power Surge",desc:"Collect {target} power-ups in a single run",type:"powerUpsCollected",targetRange:[3,12],reward:{coins:200,gems:3}},{id:"gem_hunter",name:"Gem Hunter",desc:"Collect {target} gems in a single run",type:"gemsCollected",targetRange:[5,20],reward:{coins:250,gems:4}},{id:"dodge_master",name:"Dodge Master",desc:"Dodge {target} obstacles in a single run",type:"obstaclesDodged",targetRange:[20,80],reward:{coins:200,gems:3}},{id:"score_legend",name:"Score Legend",desc:"Hit a score of {target} in a single run",type:"score",targetRange:[2e4,75e3],reward:{coins:400,gems:6}},{id:"iron_runner",name:"Iron Runner",desc:"Run {target}m without taking a single hit",type:"noHitDistance",targetRange:[500,1500],reward:{coins:450,gems:7}},{id:"daily_grinder",name:"Daily Grinder",desc:"Complete {target} run(s) today",type:"totalRuns",targetRange:[3,8],reward:{coins:150,gems:2}},{id:"treasure_goblin",name:"Treasure Goblin",desc:"Smash {target} chests in a single run",type:"chestsSmashed",targetRange:[10,30],reward:{coins:300,gems:5}}];function Iv(r){return function(){r|=0,r=r+1831565813|0;let e=Math.imul(r^r>>>15,1|r);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Dv{constructor(){this._storageKey="vr_daily",this._starsKey="vr_challenge_stars",this._load()}_load(){try{const e=localStorage.getItem(this._storageKey);if(e){const t=JSON.parse(e),n=this._todayStr();if(t.date===n){this._state=t;return}}}catch{}this._regenerate()}_todayStr(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}_seedFromDate(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);t=(t<<5)-t+i|0}return Math.abs(t)}_regenerate(){const e=this._todayStr(),t=this._generateDailyChallenges(e);this._state={date:e,challenges:t,bonusClaimed:!1},this.save()}_generateDailyChallenges(e){const t=this._seedFromDate(e),n=Iv(t),i=[],s=new Set;for(;i.length<3;){const a=Math.floor(n()*rh.length);if(s.has(a))continue;s.add(a);const o=rh[a],[l,c]=o.targetRange,h=Math.round(l+n()*(c-l));i.push({id:o.id,name:o.name,desc:o.desc.replace("{target}",h),type:o.type,target:h,progress:0,completed:!1,claimed:!1,reward:{...o.reward}})}return i}getDailyChallenges(){return this._state.challenges.map(e=>({...e,reward:{...e.reward}}))}evaluateRun(e){const t=[];return this._state.challenges.forEach((n,i)=>{if(n.completed)return;let s=0;switch(n.type){case"distance":s=e.distance||0;break;case"score":s=e.score||0;break;case"coins":s=e.coins||0;break;case"maxCombo":s=e.maxCombo||0;break;case"chestsSmashed":s=e.chestsSmashed||0;break;case"obstaclesDodged":s=e.obstaclesDodged||0;break;case"noHitDistance":s=e.noHitDistance||0;break;case"bossDefeated":s=e.bossDefeated||0;break;case"powerUpsCollected":s=e.powerUpsCollected||0;break;case"gemsCollected":s=e.gemsCollected||0;break;case"nearMisses":s=e.nearMisses||0;break;case"totalRuns":s=n.progress+1;break}n.type==="totalRuns"?n.progress=s:n.progress=Math.max(n.progress,s),n.progress>=n.target&&(n.completed=!0,t.push(i))}),this.save(),t}claimReward(e){const t=this._state.challenges[e];if(!t||!t.completed||t.claimed)return null;t.claimed=!0;const n=parseInt(localStorage.getItem(this._starsKey)||"0",10);return localStorage.setItem(this._starsKey,String(n+1)),this.save(),{coins:t.reward.coins,gems:t.reward.gems}}allCompleted(){return this._state.challenges.every(e=>e.completed)}allClaimed(){return this._state.challenges.every(e=>e.claimed)}getBonusReward(){return this.allCompleted()&&!this._state.bonusClaimed?{coins:200,gems:5}:null}claimBonus(){return!this.allCompleted()||this._state.bonusClaimed?null:(this._state.bonusClaimed=!0,this.save(),{coins:200,gems:5})}save(){try{localStorage.setItem(this._storageKey,JSON.stringify(this._state))}catch(e){console.warn("ChallengeManager: failed to save state",e)}}getTimeUntilReset(){const e=new Date,t=new Date(e);return t.setHours(24,0,0,0),t.getTime()-e.getTime()}}const On={knight:{name:"Knight",emoji:"⚔️",active:{id:"shield_bash",name:"Shield Bash",desc:"Become invincible for {duration}s and smash obstacles",baseDuration:2.5,baseCooldown:25,icon:"🛡️"},passive:{id:"armor_up",name:"Armor Up",desc:"+{value} max health",baseValue:1}},barbarian:{name:"Barbarian",emoji:"🪓",active:{id:"rage",name:"Rage",desc:"2x speed + invincible for {duration}s, coins worth 3x",baseDuration:3,baseCooldown:30,icon:"🔥"},passive:{id:"brute_force",name:"Brute Force",desc:"Smash obstacles on contact (no attack needed) every {value}s",baseValue:12}},mage:{name:"Mage",emoji:"🔮",active:{id:"time_warp",name:"Time Warp",desc:"Slow time to 40% for {duration}s, coins still full value",baseDuration:4,baseCooldown:28,icon:"⏳"},passive:{id:"arcane_sight",name:"Arcane Sight",desc:"Power-ups last {value}% longer",baseValue:30}},rogue:{name:"Rogue",emoji:"🗡️",active:{id:"shadow_dash",name:"Shadow Dash",desc:"Phase through obstacles for {duration}s, +5 coins per dodge",baseDuration:3,baseCooldown:22,icon:"👤"},passive:{id:"nimble",name:"Nimble",desc:"Near-miss zone {value}% wider, +50% near-miss bonus",baseValue:40}},paladin:{name:"Paladin",emoji:"🛡️",active:{id:"divine_shield",name:"Divine Shield",desc:"Absorb next {value} hits + heal 1 HP",baseDuration:6,baseCooldown:35,icon:"✨"},passive:{id:"blessed",name:"Blessed",desc:"Revive with {value} HP instead of 1",baseValue:2}}},Xi={health:{name:"Vitality",icon:"❤️",desc:"+1 max HP per level",maxLevel:5,costs:[100,250,500,1e3,2e3],effect:r=>({maxHealthBonus:r})},ability_power:{name:"Ability Power",icon:"⚡",desc:"Active ability lasts longer",maxLevel:5,costs:[150,350,700,1400,2800],effect:r=>({abilityDurationMult:1+r*.15})},ability_cooldown:{name:"Quick Cast",icon:"🔄",desc:"Reduce ability cooldown",maxLevel:5,costs:[150,350,700,1400,2800],effect:r=>({abilityCooldownMult:1-r*.08})},coin_bonus:{name:"Fortune",icon:"🪙",desc:"+10% coin gain per level",maxLevel:5,costs:[80,200,400,800,1600],effect:r=>({coinMultiplier:1+r*.1})},score_bonus:{name:"Glory",icon:"🏆",desc:"+8% score per level",maxLevel:5,costs:[80,200,400,800,1600],effect:r=>({scoreMultiplier:1+r*.08})},passive_boost:{name:"Mastery",icon:"🎯",desc:"Strengthen character passive",maxLevel:3,costs:[300,800,2e3],effect:r=>({passiveBoost:r})}};class Pv{constructor(){this._storageKey="vr_upgrades",this._dustKey="vr_stardust",this._keysKey="vr_keys",this._state=this._load()}_load(){try{const t=localStorage.getItem(this._storageKey);if(t)return JSON.parse(t)}catch(t){console.warn("AbilityManager: failed to load, resetting.",t)}const e={};for(const t of Object.keys(On)){e[t]={};for(const n of Object.keys(Xi))e[t][n]=0}return e}save(){try{localStorage.setItem(this._storageKey,JSON.stringify(this._state))}catch(e){console.warn("AbilityManager: failed to save.",e)}}getStarDust(){return parseInt(localStorage.getItem(this._dustKey)||"0",10)}addStarDust(e){const t=this.getStarDust();localStorage.setItem(this._dustKey,String(t+e))}spendStarDust(e){const t=this.getStarDust();return t<e?!1:(localStorage.setItem(this._dustKey,String(t-e)),!0)}getKeys(){return parseInt(localStorage.getItem(this._keysKey)||"0",10)}addKeys(e){const t=this.getKeys();localStorage.setItem(this._keysKey,String(t+e))}getUpgradeLevel(e,t){return this._state[e]&&this._state[e][t]||0}getUpgradeCost(e,t){const n=Xi[e];return!n||t>=n.maxLevel?1/0:n.costs[t]}canUpgrade(e,t){const n=this.getUpgradeLevel(e,t),i=Xi[t];if(!i||n>=i.maxLevel)return!1;const s=i.costs[n];return this.getStarDust()>=s}purchaseUpgrade(e,t){if(!this.canUpgrade(e,t))return!1;const n=this.getUpgradeLevel(e,t),i=Xi[t].costs[n];return this.spendStarDust(i)?(this._state[e]||(this._state[e]={}),this._state[e][t]=n+1,this.save(),!0):!1}getCharacterStats(e){const t={maxHealthBonus:0,abilityDurationMult:1,abilityCooldownMult:1,coinMultiplier:1,scoreMultiplier:1,passiveBoost:0};for(const[n,i]of Object.entries(Xi)){const s=this.getUpgradeLevel(e,n);if(s>0){const a=i.effect(s);for(const[o,l]of Object.entries(a))o in t&&(o.includes("Mult")||o.includes("multiplier"),t[o]=l)}}return t}getAbilityConfig(e){const t=On[e];if(!t)return null;const n=this.getCharacterStats(e),i=t.active;return{id:i.id,name:i.name,icon:i.icon,duration:i.baseDuration*n.abilityDurationMult,cooldown:i.baseCooldown*n.abilityCooldownMult,passive:t.passive,passiveBoost:n.passiveBoost}}getTotalUpgradePoints(){let e=0;for(const t of Object.keys(this._state))for(const n of Object.values(this._state[t]))e+=n;return e}}const Or=[{id:"run_500",name:"First Steps",desc:"Run 500m in one run",type:"distance",target:500,reward:{dust:50,coins:100},icon:"👟"},{id:"run_2000",name:"Road Warrior",desc:"Run 2000m in one run",type:"distance",target:2e3,reward:{dust:150,coins:300},icon:"🏃"},{id:"run_5000",name:"Marathon Legend",desc:"Run 5000m in one run",type:"distance",target:5e3,reward:{dust:400,coins:800},icon:"🏅"},{id:"score_5k",name:"Rising Star",desc:"Score 5,000 points",type:"score",target:5e3,reward:{dust:50,coins:100},icon:"⭐"},{id:"score_25k",name:"Score Master",desc:"Score 25,000 points",type:"score",target:25e3,reward:{dust:200,coins:400},icon:"🌟"},{id:"score_100k",name:"Legendary Score",desc:"Score 100,000 points",type:"score",target:1e5,reward:{dust:600,coins:1200},icon:"💫"},{id:"coins_100",name:"Coin Collector",desc:"Collect 100 coins in one run",type:"coins",target:100,reward:{dust:40,coins:80},icon:"🪙"},{id:"coins_500",name:"Gold Rush",desc:"Collect 500 coins in one run",type:"coins",target:500,reward:{dust:200,coins:400},icon:"💰"},{id:"combo_10",name:"Combo Starter",desc:"Reach 10x combo",type:"maxCombo",target:10,reward:{dust:60,coins:120},icon:"🔥"},{id:"combo_30",name:"Combo King",desc:"Reach 30x combo",type:"maxCombo",target:30,reward:{dust:250,coins:500},icon:"👑"},{id:"chests_10",name:"Chest Smasher",desc:"Smash 10 chests in one run",type:"chestsSmashed",target:10,reward:{dust:80,coins:160},icon:"📦"},{id:"chests_30",name:"Treasure Hunter",desc:"Smash 30 chests total",type:"chestsSmashed_total",target:30,reward:{dust:200,coins:400},icon:"🏴‍☠️"},{id:"boss_1",name:"Boss Slayer",desc:"Defeat your first boss",type:"bossDefeated",target:1,reward:{dust:100,keys:1},icon:"🐉"},{id:"boss_10",name:"Boss Hunter",desc:"Defeat 10 bosses total",type:"bossDefeated_total",target:10,reward:{dust:500,keys:3},icon:"⚔️"},{id:"near_20",name:"Daredevil",desc:"20 near misses in one run",type:"nearMisses",target:20,reward:{dust:100,coins:200},icon:"😱"},{id:"nohit_500",name:"Untouchable",desc:"500m without getting hit",type:"noHitDistance",target:500,reward:{dust:150,coins:300},icon:"🌀"},{id:"nohit_1500",name:"Ghost Runner",desc:"1500m without getting hit",type:"noHitDistance",target:1500,reward:{dust:500,coins:1e3},icon:"👻"},{id:"stars_10",name:"Star Gazer",desc:"Earn 10 campaign stars",type:"totalStars",target:10,reward:{dust:200,coins:400},icon:"🌠"},{id:"stars_30",name:"Star Collector",desc:"Earn 30 campaign stars",type:"totalStars",target:30,reward:{dust:500,coins:1e3},icon:"✨"},{id:"stars_60",name:"Star Master",desc:"Earn 60 campaign stars",type:"totalStars",target:60,reward:{dust:1e3,coins:2e3},icon:"🏆"},{id:"upgrades_5",name:"Apprentice",desc:"Purchase 5 upgrades",type:"totalUpgrades",target:5,reward:{dust:100,coins:200},icon:"📚"},{id:"upgrades_20",name:"Seasoned",desc:"Purchase 20 upgrades",type:"totalUpgrades",target:20,reward:{dust:400,coins:800},icon:"🎓"},{id:"streak_3",name:"Consistent",desc:"3-day login streak",type:"loginStreak",target:3,reward:{dust:100,coins:200},icon:"📅"},{id:"streak_7",name:"Dedicated",desc:"7-day login streak",type:"loginStreak",target:7,reward:{dust:300,coins:600},icon:"🗓️"},{id:"streak_30",name:"Devoted",desc:"30-day login streak",type:"loginStreak",target:30,reward:{dust:1e3,coins:2e3},icon:"💎"}],ah=[{id:"w_distance",name:"Weekly Mileage",desc:"Run {target}m total this week",type:"distance_total",targetRange:[5e3,15e3],reward:{dust:300,coins:500}},{id:"w_coins",name:"Weekly Fortune",desc:"Collect {target} coins total",type:"coins_total",targetRange:[1e3,5e3],reward:{dust:250,coins:400}},{id:"w_chests",name:"Weekly Looter",desc:"Smash {target} chests total",type:"chests_total",targetRange:[20,60],reward:{dust:200,coins:350}},{id:"w_boss",name:"Weekly Slayer",desc:"Defeat {target} bosses total",type:"boss_total",targetRange:[3,10],reward:{dust:400,coins:600}},{id:"w_runs",name:"Weekly Grinder",desc:"Complete {target} runs",type:"runs_total",targetRange:[10,25],reward:{dust:200,coins:300}},{id:"w_stars",name:"Weekly Star",desc:"Earn {target} campaign stars",type:"stars_earned",targetRange:[5,15],reward:{dust:350,coins:500}},{id:"w_score",name:"Weekly Legend",desc:"Score {target} total points",type:"score_total",targetRange:[2e4,8e4],reward:{dust:300,coins:500}}],oh=[{day:1,coins:50,dust:10},{day:2,coins:75,dust:15},{day:3,coins:100,dust:25},{day:4,coins:150,dust:30},{day:5,coins:200,dust:50},{day:6,coins:250,dust:75},{day:7,coins:500,dust:150,keys:1}];function Lv(r){return function(){r|=0,r=r+1831565813|0;let e=Math.imul(r^r>>>15,1|r);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Uv{constructor(){this._storageKey="vr_progression",this._state=this._load(),this._checkLogin()}_load(){try{const e=localStorage.getItem(this._storageKey);if(e)return JSON.parse(e)}catch(e){console.warn("ProgressionManager: failed to load, resetting.",e)}return{lifetime:{totalDistance:0,totalCoins:0,totalScore:0,totalChests:0,totalBosses:0,totalRuns:0},achievements:{},weekly:null,streak:{current:0,lastLogin:null,todayClaimed:!1}}}save(){try{localStorage.setItem(this._storageKey,JSON.stringify(this._state))}catch(e){console.warn("ProgressionManager: failed to save.",e)}}_checkLogin(){const e=this._todayStr(),t=this._dateStr(-1),n=this._state.streak;n.lastLogin!==e&&(n.lastLogin===t?n.current++:n.current=1,n.lastLogin=e,n.todayClaimed=!1,this.save(),this._checkWeekly())}getStreakInfo(){const e=this._state.streak,t=(e.current-1)%7,n=oh[t];return{currentStreak:e.current,dayInCycle:t+1,reward:n,claimed:e.todayClaimed}}claimStreakReward(){const e=this._state.streak;if(e.todayClaimed)return null;const t=(e.current-1)%7,n=oh[t];return e.todayClaimed=!0,this.save(),n}_weekId(){const e=new Date,t=new Date(e.getFullYear(),0,1),n=Math.ceil(((e-t)/864e5+t.getDay()+1)/7);return`${e.getFullYear()}-W${n}`}_checkWeekly(){const e=this._weekId();if(this._state.weekly&&this._state.weekly.weekId===e)return;const t=this._seedFromStr(e),n=Lv(t),i=[],s=new Set;for(;i.length<3;){const a=Math.floor(n()*ah.length);if(s.has(a))continue;s.add(a);const o=ah[a],[l,c]=o.targetRange,h=Math.round(l+n()*(c-l));i.push({id:o.id,name:o.name,desc:o.desc.replace("{target}",h.toLocaleString()),type:o.type,target:h,progress:0,completed:!1,claimed:!1,reward:{...o.reward}})}this._state.weekly={weekId:e,missions:i,weeklyStats:{distance:0,coins:0,chests:0,bosses:0,runs:0,starsEarned:0,score:0}},this.save()}getWeeklyMissions(){return this._state.weekly||this._checkWeekly(),this._state.weekly.missions.map(e=>({...e,reward:{...e.reward}}))}claimWeeklyReward(e){var n;const t=(n=this._state.weekly)==null?void 0:n.missions[e];return!t||!t.completed||t.claimed?null:(t.claimed=!0,this.save(),{...t.reward})}processRun(e,t=0){var a;const n={newAchievements:[],dustEarned:0,coinsEarned:0,keysEarned:0},i=this._state.lifetime;if(i.totalDistance+=e.distance||0,i.totalCoins+=e.coins||0,i.totalScore+=e.score||0,i.totalChests+=e.chestsSmashed||0,i.totalBosses+=e.bossDefeated||0,i.totalRuns++,this._state.weekly){const o=this._state.weekly.weeklyStats;o.distance+=e.distance||0,o.coins+=e.coins||0,o.chests+=e.chestsSmashed||0,o.bosses+=e.bossDefeated||0,o.runs++,o.starsEarned+=t,o.score+=e.score||0;for(const l of this._state.weekly.missions){if(l.completed)continue;let c=0;switch(l.type){case"distance_total":c=o.distance;break;case"coins_total":c=o.coins;break;case"chests_total":c=o.chests;break;case"boss_total":c=o.bosses;break;case"runs_total":c=o.runs;break;case"stars_earned":c=o.starsEarned;break;case"score_total":c=o.score;break}l.progress=c,c>=l.target&&(l.completed=!0)}}const s={...e,chestsSmashed_total:i.totalChests,bossDefeated_total:i.totalBosses,loginStreak:this._state.streak.current};try{const o=parseInt(localStorage.getItem("vr_challenge_stars")||"0",10),l=localStorage.getItem("vr_campaign");if(l){const h=JSON.parse(l);for(const d in h.results){const u=h.results[d];u&&u.stars&&(s.totalStars=(s.totalStars||0)+u.stars)}}s.totalStars=(s.totalStars||0)+o;const c=localStorage.getItem("vr_upgrades");if(c){const h=JSON.parse(c);let d=0;for(const u of Object.values(h))for(const f of Object.values(u))d+=f;s.totalUpgrades=d}}catch{}for(const o of Or){if((a=this._state.achievements[o.id])!=null&&a.completed)continue;(s[o.type]||0)>=o.target&&(this._state.achievements[o.id]={completed:!0,claimed:!1},n.newAchievements.push(o))}return this.save(),n}getAchievements(){return Or.map(e=>{var t,n;return{...e,completed:!!((t=this._state.achievements[e.id])!=null&&t.completed),claimed:!!((n=this._state.achievements[e.id])!=null&&n.claimed)}})}claimAchievement(e){const t=this._state.achievements[e];if(!t||!t.completed||t.claimed)return null;const n=Or.find(i=>i.id===e);return n?(t.claimed=!0,this.save(),n.reward):null}getUnclaimedCount(){let e=0;for(const t of Or){const n=this._state.achievements[t.id];n&&n.completed&&!n.claimed&&e++}return e}getLifetimeStats(){return{...this._state.lifetime}}_todayStr(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}_dateStr(e){const t=new Date;return t.setDate(t.getDate()+e),`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}_seedFromStr(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return Math.abs(t)}}const lh=[{id:"treasure_vault",name:"Treasure Vault!",icon:"💎",desc:"Smash every chest!",duration:8,color:[1,.85,0]},{id:"coin_frenzy",name:"Coin Frenzy!",icon:"🪙",desc:"Grab them all!",duration:10,color:[1,.7,0]},{id:"dodge_arena",name:"Dodge Arena!",icon:"⚡",desc:"Dodge everything!",duration:8,color:[1,.2,.2]},{id:"simon_says",name:"Simon Says!",icon:"🧠",desc:"Follow the sequence!",duration:12,color:[.3,.8,1]}],Nv=[600,1200,2e3,3e3,4500];class Fv{constructor(){this.active=!1,this.currentGame=null,this.timer=0,this.totalTime=0,this.score=0,this._triggeredAt=new Set,this._simonSequence=[],this._simonStep=0,this._simonFeedback=null,this._chestsSpawned=0,this._chestsSmashed=0,this._coinsCollected=0,this._dodgesSurvived=0,this._lastObstacleSpawn=0}reset(){this.active=!1,this.currentGame=null,this.timer=0,this.score=0,this._triggeredAt.clear(),this._simonSequence=[],this._simonStep=0,this._simonFeedback=null}checkTrigger(e){if(this.active)return null;for(const t of Nv)if(e>=t&&!this._triggeredAt.has(t))return this._triggeredAt.add(t),lh[Math.floor(Math.random()*lh.length)];return null}start(e){this.active=!0,this.currentGame=e,this.timer=e.duration,this.totalTime=e.duration,this.score=0,this._chestsSpawned=0,this._chestsSmashed=0,this._coinsCollected=0,this._dodgesSurvived=0,this._lastObstacleSpawn=0,e.id==="simon_says"&&(this._generateSimonSequence(),this._simonStep=0,this._simonFeedback=null)}update(e,t){if(!this.active)return null;if(this.timer-=e,this.timer<=0)return this._end();switch(this.currentGame.id){case"treasure_vault":return this._updateTreasureVault(e,t);case"coin_frenzy":return this._updateCoinFrenzy(e,t);case"dodge_arena":return this._updateDodgeArena(e,t);case"simon_says":return this._updateSimonSays(e);default:return null}}onPlayerAction(e){var t;return!this.active||((t=this.currentGame)==null?void 0:t.id)!=="simon_says"?null:this._checkSimonInput(e)}onChestSmashed(){var e;this.active&&((e=this.currentGame)==null?void 0:e.id)==="treasure_vault"&&(this._chestsSmashed++,this.score+=25)}onCoinCollected(e){var t;this.active&&((t=this.currentGame)==null?void 0:t.id)==="coin_frenzy"&&(this._coinsCollected+=e,this.score+=e*5)}onObstacleDodged(){var e;this.active&&((e=this.currentGame)==null?void 0:e.id)==="dodge_arena"&&(this._dodgesSurvived++,this.score+=15)}_updateTreasureVault(e,t){return this._lastObstacleSpawn+=e,this._lastObstacleSpawn>=1.5?(this._lastObstacleSpawn=0,this._chestsSpawned+=3,{type:"spawn_chests",lanes:[0,1,2]}):null}_updateCoinFrenzy(e,t){return this._lastObstacleSpawn+=e,this._lastObstacleSpawn>=.8?(this._lastObstacleSpawn=0,{type:"spawn_coins",lanes:[0,1,2],count:5}):null}_updateDodgeArena(e,t){this._lastObstacleSpawn+=e;const n=.6-(this.totalTime-this.timer)*.03;if(this._lastObstacleSpawn>=Math.max(.3,n)){this._lastObstacleSpawn=0;const i=[0,1,2].sort(()=>Math.random()-.5),s=Math.random()<.4?2:1;return{type:"spawn_obstacles",lanes:i.slice(0,s)}}return null}_generateSimonSequence(){const e=["left","right","jump","slide"];this._simonSequence=[];const t=6+Math.floor(Math.random()*4);for(let n=0;n<t;n++)this._simonSequence.push(e[Math.floor(Math.random()*e.length)])}_updateSimonSays(e){return this._simonFeedback&&(this._simonFeedback.timer-=e,this._simonFeedback.timer<=0&&(this._simonFeedback=null)),this._simonStep<this._simonSequence.length&&!this._simonFeedback?{type:"simon_prompt",action:this._simonSequence[this._simonStep],step:this._simonStep,total:this._simonSequence.length}:this._simonStep>=this._simonSequence.length?this._end():null}_checkSimonInput(e){if(this._simonStep>=this._simonSequence.length||this._simonFeedback)return null;const t=this._simonSequence[this._simonStep];return e===t?(this._simonStep++,this.score+=50,this._simonFeedback={correct:!0,timer:.5},{type:"simon_correct",step:this._simonStep}):(this._simonFeedback={correct:!1,timer:.5},this.score=Math.max(0,this.score-20),{type:"simon_wrong"})}_end(){const e={type:"end",gameId:this.currentGame.id,gameName:this.currentGame.name,score:this.score,coinReward:Math.floor(this.score/5)+10,dustReward:Math.floor(this.score/10)};return this.active=!1,this.currentGame=null,e}getProgress(){return this.active?{id:this.currentGame.id,name:this.currentGame.name,icon:this.currentGame.icon,timer:this.timer,totalTime:this.totalTime,score:this.score,feedback:this._simonFeedback,simonAction:this._simonStep<this._simonSequence.length?this._simonSequence[this._simonStep]:null}:null}}const $a={forest:{name:"Enchanted Forest",hazards:[{id:"falling_tree",chance:.03,desc:"Falling tree across random lane"},{id:"vine_snare",chance:.04,desc:"Vine on ground — slows if not jumped"}],ambientColor:[.2,.8,.3],particleColor:[.3,.7,.2]},desert:{name:"Scorching Sands",hazards:[{id:"sandstorm",chance:.02,desc:"Reduced visibility for several seconds"},{id:"quicksand",chance:.04,desc:"Quicksand patch — slows one lane"}],ambientColor:[.9,.7,.3],particleColor:[.85,.7,.4]},lava:{name:"Volcanic Depths",hazards:[{id:"floor_crack",chance:.04,desc:"Glowing crack — damages if stood on"},{id:"eruption",chance:.02,desc:"Debris rains from above"}],ambientColor:[1,.3,0],particleColor:[1,.4,.1]},snow:{name:"Frozen Peaks",hazards:[{id:"ice_patch",chance:.05,desc:"Ice on ground — slide momentum"},{id:"blizzard",chance:.02,desc:"Strong gusts push sideways"}],ambientColor:[.7,.85,1],particleColor:[.9,.95,1]},roman:{name:"Roman Road",hazards:[],ambientColor:[.8,.7,.5],particleColor:[.7,.6,.4]},underwater:{name:"Abyssal Depths",hazards:[{id:"current",chance:.04,desc:"Water current pushes to a lane"},{id:"air_pocket",chance:.06,desc:"Bubble — collect to restore air"}],ambientColor:[.1,.3,.7],particleColor:[.2,.5,.9]}};class Ov{constructor(e){this.scene=e,this.activeHazards=[],this._currentBiome="roman",this._hazardCooldown=0,this._sandstormActive=!1,this._sandstormTimer=0,this._blizzardActive=!1,this._blizzardTimer=0,this._blizzardDir=0,this._underwaterAir=100,this._underwaterActive=!1,this._fogOverlay=null,this._sandstormParticles=[],this._snowParticles=[],this._bubbleParticles=[]}setBiome(e){e!==this._currentBiome&&(this._currentBiome=e,this._underwaterActive=e==="underwater",this._underwaterActive&&(this._underwaterAir=100),this._sandstormActive=!1,this._blizzardActive=!1)}update(e,t,n,i,s,a){var c;const o={effects:[],damage:!1,speedMult:1,pushLane:null,airDelta:0},l=$a[this._currentBiome];if(!l)return o;if(this._hazardCooldown-=e,this._hazardCooldown<=0){this._hazardCooldown=2-a*.15;for(const h of l.hazards)if(Math.random()<h.chance*(1+a*.2)){const d=this._spawnHazard(h.id,n);d&&o.effects.push(d)}}for(let h=this.activeHazards.length-1;h>=0;h--){const d=this.activeHazards[h];d.timer-=e;const u=Math.abs(d.z-n)<2,f=d.lane===void 0||d.lane===s;switch(d.id){case"vine_snare":u&&f&&i<.5&&(o.speedMult=Math.min(o.speedMult,.6),o.effects.push({type:"vine_slow"}));break;case"quicksand":u&&f&&i<.3&&(o.speedMult=Math.min(o.speedMult,.5),o.effects.push({type:"quicksand_slow"}));break;case"floor_crack":u&&f&&i<.3&&(o.damage=!0,o.effects.push({type:"lava_burn"}));break;case"ice_patch":u&&f&&i<.5&&(o.speedMult=Math.min(o.speedMult,1.3),o.effects.push({type:"ice_slide"}));break;case"air_pocket":u&&f&&(this._underwaterAir=Math.min(100,this._underwaterAir+30),o.airDelta=30,o.effects.push({type:"air_collected"}),d.timer=0);break}d.timer<=0&&(d.mesh&&(this.scene.remove(d.mesh),(c=d.mesh.geometry)==null||c.dispose()),this.activeHazards.splice(h,1))}return this._sandstormActive&&(this._sandstormTimer-=e,this._sandstormTimer<=0?(this._sandstormActive=!1,o.effects.push({type:"sandstorm_end"})):o.effects.push({type:"sandstorm_active",intensity:this._sandstormTimer/5})),this._blizzardActive&&(this._blizzardTimer-=e,this._blizzardTimer<=0?(this._blizzardActive=!1,o.effects.push({type:"blizzard_end"})):(o.pushLane=this._blizzardDir,o.effects.push({type:"blizzard_active",dir:this._blizzardDir}))),this._underwaterActive&&(this._underwaterAir-=e*5,o.airDelta=-e*5,this._underwaterAir<=0&&(this._underwaterAir=0,o.damage=!0,o.effects.push({type:"drowning"}))),o}_spawnHazard(e,t){const n=t-40,i=Math.floor(Math.random()*3),s=3,a=[-s,0,s];switch(e){case"falling_tree":case"vine_snare":{const o=this._createHazardMesh(e,a[i],n);return this.activeHazards.push({id:e,mesh:o,lane:i,z:n,timer:8}),{type:"hazard_spawned",hazard:e,lane:i}}case"sandstorm":return this._sandstormActive=!0,this._sandstormTimer=4+Math.random()*3,{type:"sandstorm_start"};case"quicksand":{const o=this._createHazardMesh(e,a[i],n);return this.activeHazards.push({id:e,mesh:o,lane:i,z:n,timer:10}),{type:"hazard_spawned",hazard:e,lane:i}}case"floor_crack":{const o=this._createHazardMesh(e,a[i],n);return this.activeHazards.push({id:e,mesh:o,lane:i,z:n,timer:6}),{type:"hazard_spawned",hazard:e,lane:i}}case"eruption":{for(let o=0;o<3;o++){const l=Math.floor(Math.random()*3),c=n-o*5,h=this._createHazardMesh("eruption_debris",a[l],c);this.activeHazards.push({id:"floor_crack",mesh:h,lane:l,z:c,timer:4})}return{type:"eruption_start"}}case"ice_patch":{const o=this._createHazardMesh(e,a[i],n);return this.activeHazards.push({id:e,mesh:o,lane:i,z:n,timer:8}),{type:"hazard_spawned",hazard:e,lane:i}}case"blizzard":return this._blizzardActive=!0,this._blizzardTimer=3+Math.random()*2,this._blizzardDir=Math.random()<.5?-1:1,{type:"blizzard_start",dir:this._blizzardDir};case"current":{const o=Math.random()<.5?-1:1;return this.activeHazards.push({id:"current",mesh:null,lane:void 0,z:n,timer:5,data:{dir:o}}),{type:"current_start",dir:o}}case"air_pocket":{const o=this._createHazardMesh(e,a[i],n);return this.activeHazards.push({id:e,mesh:o,lane:i,z:n,timer:12}),{type:"hazard_spawned",hazard:e,lane:i}}default:return null}}_createHazardMesh(e,t,n){let i;switch(e){case"vine_snare":{const s=new bi(2.5,2.5),a=new Oe({color:2984493,transparent:!0,opacity:.6,emissive:1727514,emissiveIntensity:.3});i=new Ce(s,a),i.rotation.x=-Math.PI/2,i.position.set(t,.05,n);break}case"quicksand":{const s=new Ks(1.5,16),a=new Oe({color:12886874,transparent:!0,opacity:.7,emissive:9072688,emissiveIntensity:.2});i=new Ce(s,a),i.rotation.x=-Math.PI/2,i.position.set(t,.03,n);break}case"floor_crack":case"eruption_debris":{const s=new bi(2,2),a=new Oe({color:16724736,transparent:!0,opacity:.5,emissive:16729088,emissiveIntensity:.8});i=new Ce(s,a),i.rotation.x=-Math.PI/2,i.position.set(t,.04,n);break}case"ice_patch":{const s=new Ks(1.8,12),a=new Oe({color:11197951,transparent:!0,opacity:.5,emissive:6724044,emissiveIntensity:.3,roughness:.1,metalness:.5});i=new Ce(s,a),i.rotation.x=-Math.PI/2,i.position.set(t,.04,n);break}case"air_pocket":{const s=new _s(.6,12,8),a=new Oe({color:4504575,transparent:!0,opacity:.5,emissive:2263244,emissiveIntensity:.6});i=new Ce(s,a),i.position.set(t,1.5,n);break}case"falling_tree":{const s=new Zs(.1,.15,3,6),a=new Oe({color:5913114});i=new Ce(s,a),i.rotation.z=Math.PI/2,i.position.set(t,.8,n);break}default:{const s=new Et(1,.1,1),a=new Oe({color:16711935});i=new Ce(s,a),i.position.set(t,.05,n)}}return i&&this.scene.add(i),i}dispose(){var e;for(const t of this.activeHazards)t.mesh&&(this.scene.remove(t.mesh),(e=t.mesh.geometry)==null||e.dispose());this.activeHazards=[]}isSandstormActive(){return this._sandstormActive}isBlizzardActive(){return this._blizzardActive}isUnderwater(){return this._underwaterActive}getAir(){return this._underwaterAir}getBiomeInfo(){return $a[this._currentBiome]||$a.roman}}const It={MENU:0,PLAYING:1,GAME_OVER:2,PAUSED:3,REVIVE_PROMPT:4,CAMPAIGN_MAP:5},ch=new C(0,4.5,9),Bv=10,kv=2.5,Br=1,zv=.05,Hv=5,Gv=10,hh={CoinMagnet:8,DoubleCoin:10,Invincibility:6,Shield:8,TimeAdvantage:5},Vv=8,Wv=15;class Xv{constructor(e,t,n,i){this.scene=e,this.camera=t,this.ui=n,this.assetLoader=i,this.input=new gv,this.audio=new xv,this.state=It.MENU,this.runner=null,this.world=null,this.particles=null,this.currentTheme="roman",this.dustTimer=0,this.score=0,this.coins=0,this.distance=0,this.bestScore=parseInt(localStorage.getItem("vr_best")||"0",10),this.totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10),this.comboCount=0,this.comboTimer=0,this.comboMultiplier=Br,this.maxCombo=0,this.activePowerUps={},this.health=2,this.maxHealth=3,this.revivesAvailable=1,this.reviveTimer=0,this.obstaclesDodged=0,this.obstaclesSmashed=0,this.shakeIntensity=0,this.shakeDuration=0,this.difficulty=0,this._passedObstacles=new Set,this._screenFlash=null,this._wasAirborne=!1,this._landingDipTimer=0,this._milestonesPassed=new Set,this._milestones=[500,1e3,2e3,5e3],this._themeTransitionTimer=0,this._prevTheme="roman",this._bossEncounter=null,this._nextBossDistance=1e3,this._bossInterval=1e3,this._bossActive=!1,this.campaignManager=new Rv,this.challengeManager=new Dv,this.runConfig=null,this._noHitDistance=0,this._maxNoHitDistance=0,this._nearMisses=0,this._powerUpsCollected=0,this._gemsCollected=0,this._bossesDefeated=0,this.abilityManager=new Pv,this.progressionManager=new Uv,this._abilityConfig=null,this._abilityCooldown=0,this._abilityActive=!1,this._abilityTimer=0,this._charStats=null,this._bruteForceTimer=0,this.miniGameManager=new Fv,this._biomeManager=null,this._biomeHazardDmgCooldown=0,this._miniGameCoinsEarned=0,this.shop=new Av,this.wallet=new Ev,this.leaderboard=new Cv,this._lastScore=0,this._lastDistance=0,this._lastCoins=0,this._pyrTreasury="0x0000000000000000000000000000000000000000",this.wallet.on("connected",a=>{this.ui.updateWalletUI(!0,this.wallet.shortAddress(),a.balance)}),this.wallet.on("disconnected",()=>{this.ui.updateWalletUI(!1,"",0)}),this.wallet.on("accountChanged",()=>{this.ui.updateWalletUI(this.wallet.connected,this.wallet.shortAddress(),this.wallet.pyrBalance)}),this.wallet.on("balanceUpdated",a=>{this.ui.updateWalletUI(!0,this.wallet.shortAddress(),a)}),this.wallet.on("error",a=>{console.warn("Wallet error:",a)}),this.wallet.on("scoreWritten",a=>{this.ui.updateChainStatus(`Score written! TX: ${a.txHash.slice(0,10)}...`),this.leaderboard.markOnChain(a.score,a.txHash)}),this._characterId="knight",n.on("play",()=>this.startRun()),n.on("menu",()=>this.goToMenu()),n.on("pause",()=>this.pause()),n.on("resume",()=>this.resume()),n.on("revive",()=>this._useRevive()),n.on("skip-revive",()=>{this.revivesAvailable=0,this.endRun()}),n.on("show-shop",()=>{this.ui.showShop(this.shop,this.wallet)}),n.on("show-leaderboard",()=>{this.ui.showLeaderboard(this.leaderboard.getTop(15))}),n.on("connect-wallet",async()=>{await this.wallet.connect()}),n.on("shop-buy",async a=>{if(a.currency==="coins"){const o=this.shop.buyWithCoins(a.itemId);o.success?(this.totalCoins=o.newBalance,this.audio.playCoinPickup()):console.warn("Purchase failed:",o.error)}else if(a.currency==="pyr"){const o=await this.shop.buyWithPYR(a.itemId,this.wallet,this._pyrTreasury);o.success?this.audio.playPowerUp("Invincibility"):console.warn("PYR purchase failed:",o.error)}this.ui.showShop(this.shop,this.wallet)}),n.on("write-chain",async()=>{this.ui.updateChainStatus("Writing to chain..."),await this.wallet.writeScoreToChain(this._lastScore,this._lastDistance,this._lastCoins)||this.ui.updateChainStatus("Transaction cancelled.")}),n.on("show-campaign",()=>{this.state=It.CAMPAIGN_MAP,this.ui.showCampaignMap(this.campaignManager,this.challengeManager)}),n.on("campaign-back",()=>this.goToMenu()),n.on("campaign-start",a=>{const o=this.campaignManager.getStage(a.campaignId,a.stageIndex);o&&(this.runConfig={campaignId:a.campaignId,stageIndex:a.stageIndex,modifiers:o.modifiers||{},objectives:o.objectives||{}},this.ui.showCharSelect())}),n.on("challenge-claim",a=>{const o=this.challengeManager.claimReward(a.index);o&&(this.totalCoins+=o.coins,localStorage.setItem("vr_coins",String(this.totalCoins)),this.audio.playCoinPickup()),this.ui.refreshCampaignUI()}),n.on("challenge-bonus-claim",()=>{const a=this.challengeManager.claimBonus();a&&(this.totalCoins+=a.coins,localStorage.setItem("vr_coins",String(this.totalCoins)),this.audio.playPowerUp("Invincibility")),this.ui.refreshCampaignUI()}),n.on("show-heroes",()=>{this.ui.showHeroesScreen(this.abilityManager,this.progressionManager)}),n.on("heroes-back",()=>this.goToMenu()),n.on("upgrade-purchased",()=>{this.audio.playCoinPickup()}),n.on("reward-claimed",a=>{a&&a.coins&&(this.totalCoins=parseInt(localStorage.getItem("vr_coins")||"0",10)),this.audio.playCoinPickup()});const s=()=>{document.removeEventListener("click",s),document.removeEventListener("touchstart",s),this.audio.init(),this.audio.resume(),this.audio.startMenuMusic()};document.addEventListener("click",s),document.addEventListener("touchstart",s),this._setupMenuCamera()}goToMenu(){this.state=It.MENU,this.audio.stopMusic(),this.audio.startMenuMusic(),this._bossEncounter&&(this._bossEncounter.dispose(),this._bossActive=!1),this._biomeManager&&(this._biomeManager.dispose(),this._biomeManager=null),this.scene.fog=null,this.runner&&(this.runner.dispose(),this.runner=null),this.world&&(this.world.reset(),this.world=null),this.particles&&(this.particles.dispose(),this.particles=null),this.ui.showMenu(),this._setupMenuCamera()}startRun(){var t;this.state=It.PLAYING,this.audio.init(),this.audio.resume(),this.audio.playMenuClick(),this.runner&&this.runner.dispose(),this.world&&this.world.reset(),this.particles&&this.particles.dispose(),this._characterId=this.ui.selectedCharacter,this.runner=new Z_(this.scene,this.assetLoader,this._characterId),this.world=new mv(this.scene,this.assetLoader),this.particles=new _v(this.scene),this.dustTimer=0,this.score=0,this.coins=0,this.distance=0,this.comboCount=0,this.comboTimer=0,this.comboMultiplier=Br,this.maxCombo=0,this.activePowerUps={},this.health=2,this.revivesAvailable=1,this.reviveTimer=0,this.obstaclesDodged=0,this.obstaclesSmashed=0,this._noHitDistance=0,this._maxNoHitDistance=0,this._nearMisses=0,this._powerUpsCollected=0,this._gemsCollected=0,this._bossesDefeated=0,this.shakeIntensity=0,this.shakeDuration=0,this.difficulty=0,this._passedObstacles=new Set,this._milestonesPassed=new Set,this._themeTransitionTimer=0,this._prevTheme="roman",this._bossEncounter&&this._bossEncounter.dispose(),this._bossEncounter=new wv(this.scene),this._nextBossDistance=1e3,this._bossActive=!1;const e=((t=this.runConfig)==null?void 0:t.modifiers)||{};e.fixedTheme&&(this.world.fixedTheme=e.fixedTheme),e.obstacleFrequency&&(this.world.obstacleFrequencyMult=e.obstacleFrequency),e.maxHealth&&(this.health=e.maxHealth,this.maxHealth=e.maxHealth),e.noRevive&&(this.revivesAvailable=0),e.bossEnabled===!1&&(this._nextBossDistance=1/0),e.bossAtDistance&&(this._nextBossDistance=e.bossAtDistance),this._charStats=this.abilityManager.getCharacterStats(this._characterId),this._abilityConfig=this.abilityManager.getAbilityConfig(this._characterId),this._abilityCooldown=0,this._abilityActive=!1,this._abilityTimer=0,this._bruteForceTimer=0,this._charStats&&(this.health+=this._charStats.maxHealthBonus,this.maxHealth+=this._charStats.maxHealthBonus),this._abilityConfig&&this.ui.showAbilityHUD(this._abilityConfig.icon,this._abilityConfig.name),this.miniGameManager.reset(),this._biomeManager&&this._biomeManager.dispose(),this._biomeManager=new Ov(this.scene),this._biomeHazardDmgCooldown=0,this._miniGameCoinsEarned=0,this.runner.startRunning(),this.shop.useBoost("extra_life")&&(this.revivesAvailable=2),this.shop.useBoost("coin_boost")&&(this.activePowerUps.DoubleCoin=999999),this.shop.useBoost("shield_start")&&(this.activePowerUps.Shield=8),this.shop.useBoost("magnet_start")&&(this.activePowerUps.CoinMagnet=8),this.shop.useBoost("head_start")&&(this.runner.position.z=-500,this.coins+=50),this.audio.startMusic(),this.audio.playStart(),this.ui.showHUD(),this.ui.updateScore(0),this.ui.updateCoins(0),this.ui.updateDistance(0),this.ui.updateCombo(0,1),this.ui.updateHealth(this.health,this.maxHealth)}endRun(){if(this.revivesAvailable>0){this.state=It.REVIVE_PROMPT,this.reviveTimer=3,this.runner.die(),this.ui.showRevivePrompt();return}this.state=It.GAME_OVER,this.runner.die(),this.audio.playDeath(),this.audio.stopMusic(),this.shakeIntensity=.8,this.shakeDuration=.5,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("vr_best",String(this.bestScore))),this.totalCoins+=this.coins,localStorage.setItem("vr_coins",String(this.totalCoins));const e={score:this.score,distance:this.distance,coins:this.coins,maxCombo:this.maxCombo,chestsSmashed:this.obstaclesSmashed,obstaclesDodged:this.obstaclesDodged,noHitDistance:this._maxNoHitDistance,bossDefeated:this._bossesDefeated,powerUpsCollected:this._powerUpsCollected,gemsCollected:this._gemsCollected,nearMisses:this._nearMisses,health:this.health};let t=null;this.runConfig&&(t=this.campaignManager.evaluateRun(this.runConfig.campaignId,this.runConfig.stageIndex,e));const n=this.challengeManager.evaluateRun(e),i=t?t.stars:0;this.progressionManager.processRun(e,i),t&&t.stars===3&&t.isNew&&this.abilityManager.addStarDust(50),this._bossesDefeated>0&&this.abilityManager.addKeys(this._bossesDefeated);const s=Math.floor(this.distance/100)+Math.floor(this.score/500);s>0&&this.abilityManager.addStarDust(s),this.ui.showGameOver(this.score,this.distance,this.coins,this.bestScore,{maxCombo:this.maxCombo,obstaclesDodged:this.obstaclesDodged,obstaclesSmashed:this.obstaclesSmashed,maxSpeed:Math.floor(this.runner.runSpeed)},t,n),this._lastScore=this.score,this._lastDistance=this.distance,this._lastCoins=this.coins,this.ui.showChainWriteButton(this.wallet.connected),this.ui.updateChainStatus(""),this.leaderboard.submit({name:this.wallet.connected?this.wallet.shortAddress():"Player",score:this.score,distance:this.distance,coins:this.coins,character:this._characterId,maxCombo:this.maxCombo,address:this.wallet.address}),this.runConfig=null}pause(){this.state===It.PLAYING&&(this.state=It.PAUSED,this.audio.playPause(),this.ui.showPause())}resume(){this.state===It.PAUSED&&(this.state=It.PLAYING,this.audio.playResume(),this.ui.showHUD())}_useRevive(){var t;if(this.state!==It.REVIVE_PROMPT)return;this.revivesAvailable--;const e=(t=On[this._characterId])==null?void 0:t.passive;(e==null?void 0:e.id)==="blessed"?this.health=this._getPassiveValue():this.health=1,this.runner.revive(),this.audio.playRevive(),this.audio.startMusic(),this.state=It.PLAYING,this.ui.showHUD(),this.ui.updateHealth(this.health,this.maxHealth),this.activePowerUps.Invincibility=2}update(e){var o,l,c;if(this.state===It.MENU){this._updateMenuCamera(e);return}if(this.state===It.PAUSED)return;if(this.state===It.REVIVE_PROMPT){const h=Math.ceil(this.reviveTimer);this.reviveTimer-=e;const d=Math.ceil(this.reviveTimer);d<h&&d>0&&this.audio.playCountdownTick(),this.ui.updateReviveTimer(this.reviveTimer),this.reviveTimer<=0&&(this.revivesAvailable=0,this.ui.hideRevivePrompt(),this.endRun()),this._updateCamera(e);return}if(this.state!==It.PLAYING){this._updateCamera(e);return}const t=this.input.poll();for(const h of t){if(this.miniGameManager.active&&((o=this.miniGameManager.currentGame)==null?void 0:o.id)==="simon_says"){const d=this.miniGameManager.onPlayerAction(h);d&&(d.type==="simon_correct"?(this.audio.playCoinPickup(),this._triggerScreenFlash(.2,1,.3,.15)):d.type==="simon_wrong"&&(this.audio.playHit(),this._triggerScreenFlash(1,.1,.1,.15)))}switch(h){case"left":this.runner.moveLeft(),this.audio.playLaneSwitchLeft();break;case"right":this.runner.moveRight(),this.audio.playLaneSwitchRight();break;case"jump":this.runner.jumpsUsed>0?this.audio.playDoubleJump():this.audio.playJump(),this.runner.jump();break;case"slide":this.runner.slide(),this.audio.playSlide();break;case"attack":this.runner.attack(),this.audio.playAttack();break;case"ability":this._activateAbility();break;case"pause":this.pause();return}}let n=1;this.activePowerUps.TimeAdvantage&&(n=.65),this.runner.speedMultiplier=n;const i=this._wasAirborne;if(this.runner.update(e),i&&this.runner.grounded&&(this.particles&&this.particles.emitLandingImpact(this.runner.position.x,this.runner.position.y,this.runner.position.z),this._landingDipTimer=.2),this._wasAirborne=!this.runner.grounded,this.difficulty=Math.min(5,Math.floor(this.distance/200)),this.world.difficulty=this.difficulty,this.world.update(this.runner.position.z),this.audio.setMusicIntensity(.3+this.difficulty*.12+Math.min(.1,this.runner.runSpeed*.003)),this.particles&&(this.particles.update(e),this.dustTimer-=e,this.dustTimer<=0&&this.runner.grounded&&(this.particles.emitDust(this.runner.position.x,this.runner.position.y,this.runner.position.z,this.runner.sliding),this.dustTimer=this.runner.sliding?.02:.05)),this.activePowerUps.CoinMagnet&&this.world){const h=this.runner.position.x,d=this.runner.position.z;for(const u of this.world.activeCoins){const f=new C;u.getWorldPosition(f);const g=h-f.x,_=d-f.z,m=Math.sqrt(g*g+_*_);if(m<Vv&&m>.5){const p=Wv*e/m;u.position.x+=g*p,u.position.z+=_*p}}}const s=this.distance;this.distance=Math.abs(this.runner.position.z),this._noHitDistance+=this.distance-s,this._noHitDistance>this._maxNoHitDistance&&(this._maxNoHitDistance=this._noHitDistance);const a=Math.floor(this.distance*.5);this.score=a+this.coins*10,this.ui.updateScore(Math.floor(this.score*this.comboMultiplier)),this.ui.updateDistance(this.distance),this.comboCount>0&&(this.comboTimer-=e,this.comboTimer<=0&&this._breakCombo());for(const[h,d]of Object.entries(this.activePowerUps))this.activePowerUps[h]=d-e,this.activePowerUps[h]<=0&&delete this.activePowerUps[h];if(this._abilityActive&&(this._abilityTimer-=e,this._abilityTimer<=0&&this._deactivateAbility()),this._abilityCooldown>0&&(this._abilityCooldown-=e,this._abilityCooldown<0&&(this._abilityCooldown=0)),this._abilityConfig){const h=this._abilityCooldown/this._abilityConfig.cooldown;this.ui.updateAbilityCooldown(h)}if(!this.miniGameManager.active){const h=this.miniGameManager.checkTrigger(this.distance);h&&(this.miniGameManager.start(h),this.ui.showMiniGameStart(h.name,h.icon,h.desc),this._triggerScreenFlash(h.color[0],h.color[1],h.color[2],.5),this.shakeIntensity=.3,this.shakeDuration=.3,this.audio.playMilestone(1e3))}if(this.miniGameManager.active){const h=this.miniGameManager.update(e,this.distance);h&&this._handleMiniGameEvent(h),this.ui.updateMiniGameHUD(this.miniGameManager.getProgress())}if(this._biomeManager&&this.world){this._biomeManager.setBiome(this.currentTheme);const h=this.runner.lane,d=this._biomeManager.update(e,this.runner.position.x,this.runner.position.z,this.runner.position.y,h,this.difficulty);if(d.speedMult!==1&&!this.activePowerUps.Invincibility&&(this.runner.speedMultiplier*=d.speedMult),d.damage&&!this.activePowerUps.Invincibility&&!this.activePowerUps.Shield){if(this._biomeHazardDmgCooldown-=e,this._biomeHazardDmgCooldown<=0&&(this._biomeHazardDmgCooldown=2,this.health--,this._noHitDistance=0,this.runner.stumble(),this.audio.playHit(),this.ui.updateHealth(this.health,this.maxHealth),this.shakeIntensity=.3,this.shakeDuration=.2,this._triggerScreenFlash(1,.1,0,.2),this.ui.flashDamage(),this.health<=0)){this.endRun();return}}else this._biomeHazardDmgCooldown-=e;for(const u of d.effects)u.type==="sandstorm_start"?this.ui.showBiomeAlert("🌪️ SANDSTORM!","#e8d4a0"):u.type==="blizzard_start"?this.ui.showBiomeAlert("❄️ BLIZZARD!","#aaddff"):u.type==="eruption_start"?(this.ui.showBiomeAlert("🌋 ERUPTION!","#ff4400"),this.shakeIntensity=.5,this.shakeDuration=.5):u.type==="air_collected"&&this.audio.playCoinPickup();this._biomeManager.isUnderwater()&&this.ui.updateAirMeter(this._biomeManager.getAir()),this._biomeManager.isSandstormActive()?this.scene.fog=new na(12886874,5,25):this._biomeManager.isBlizzardActive()?this.scene.fog=new na(13161696,8,30):this.scene.fog&&this.scene.fog.far<100&&(this.scene.fog.far+=e*20,this.scene.fog.far>=100&&(this.scene.fog=null))}if(((l=this._abilityConfig)==null?void 0:l.id)==="rage"&&!this._abilityActive){const h=(c=On[this._characterId])==null?void 0:c.passive;if((h==null?void 0:h.id)==="brute_force"){const d=this._getPassiveValue();this._bruteForceTimer-=e,this._bruteForceTimer<=0&&(this.activePowerUps.Invincibility||(this.activePowerUps.Invincibility=.3),this._bruteForceTimer=d)}}this._handleCollisions(),this._checkNearMisses();for(const h of this._milestones)this.distance>=h&&!this._milestonesPassed.has(h)&&(this._milestonesPassed.add(h),this.audio.playMilestone(h),this.ui.showMilestone(h),this._triggerScreenFlash(1,.85,0,.4),this.score+=h);if(!this._bossActive&&this._bossEncounter&&this.distance>=this._nextBossDistance&&(this._bossActive=!0,this._bossEncounter.start(this.runner.position.z,this.currentTheme),this.audio.playBossIntro(),this.ui.showBossWarning(),this.shakeIntensity=.5,this.shakeDuration=1,this.world&&(this.world.bossActive=!0)),this._bossActive&&this._bossEncounter&&this._bossEncounter.active){this._bossEncounter.update(e,this.runner.position.x,this.runner.position.z,this.runner.position.y),this.ui.updateBossTimer(this._bossEncounter.timer,this._bossEncounter.totalTime);const h=this._bossEncounter.getProjectileCollisions(this.runner.position.x,this.runner.position.z,this.runner.position.y,this.runner.colliderHeight,this.runner.colliderY);for(const d of h)if(!(this.activePowerUps.Invincibility||this.activePowerUps.Shield)&&(this.health--,this._noHitDistance=0,this.runner.stumble(),this.audio.playHit(),this.ui.updateHealth(this.health,this.maxHealth),this.shakeIntensity=.5,this.shakeDuration=.3,this._triggerScreenFlash(1,.2,0,.3),this.ui.flashDamage(),this.health<=0)){this.endRun();return}}this._bossActive&&this._bossEncounter&&this._bossEncounter.phase==="defeated"&&(this._bossActive=!1,this._bossesDefeated++,this._nextBossDistance=this.distance+this._bossInterval,this.score+=500,this.coins+=10,this.ui.updateCoins(this.coins),this.ui.showBossDefeated(),this.audio.playBossDefeat(),this._triggerScreenFlash(1,.85,0,.6),this.shakeIntensity=.6,this.shakeDuration=.5,this.world&&(this.world.bossActive=!1),this.particles&&(this.particles.burstSparkles(this.runner.position.x,this.runner.position.y+2,this.runner.position.z-10,[1,.5,0],25),this.particles.burstDebris(this.runner.position.x,this.runner.position.y+2,this.runner.position.z-10,20)),this._bossEncounter.phase="idle"),this.world&&this.world.theme!==this.currentTheme&&(this._prevTheme=this.currentTheme,this.currentTheme=this.world.theme,this._themeTransitionTimer=2,this.audio.playBiomeChange(this.currentTheme)),this._themeTransitionTimer>0&&(this._themeTransitionTimer-=e),this._updateCamera(e)}_handleCollisions(){var i,s,a;if(!this.runner||!this.world)return;const{coins:e,obstacles:t,powerUps:n}=this.world.getCollisions(this.runner.position.x,this.runner.position.z,this.runner.position.y,this.runner.colliderHeight,this.runner.colliderY);for(const o of e){const l=o.userData._isGem;let c=l?5:1;if(this.activePowerUps.DoubleCoin&&(c*=2),(i=this._charStats)!=null&&i.coinMultiplier&&(c=Math.ceil(c*this._charStats.coinMultiplier)),this._abilityActive&&((s=this._abilityConfig)==null?void 0:s.id)==="rage"&&(c*=3),this.coins+=c,this.ui.updateCoins(this.coins),this.miniGameManager.onCoinCollected(c),l){if(this._gemsCollected++,this.audio.playGem(),this._triggerScreenFlash(.6,.2,1,.3),this.shakeIntensity=.15,this.shakeDuration=.1,this.particles){const h=new C;o.getWorldPosition(h),this.particles.burstSparkles(h.x,h.y,h.z,[.6,.2,1],15),this.particles.burstSparkles(h.x,h.y,h.z,[1,1,1],8)}}else if(this.audio.playCoinPickup(),this.particles){const h=new C;o.getWorldPosition(h),this.particles.burstSparkles(h.x,h.y,h.z,[1,.85,0],6)}this._registerCombo()}for(const o of t){if(this.activePowerUps.Invincibility||this.activePowerUps.Shield){if(this.world.breakObstacle(o),this.obstaclesSmashed++,this.audio.playSmash(),this._registerCombo(),this.shakeIntensity=.25,this.shakeDuration=.15,this.particles){const l=new C;o.getWorldPosition(l),this.particles.burstDebris(l.x,l.y+.5,l.z,15),this.particles.burstSparkles(l.x,l.y,l.z,[1,.6,.1],8)}continue}if(o.userData.breakable&&this.runner.attacking){this.world.breakObstacle(o);const l=o.userData.coinReward||10;if(this.coins+=l,this.score+=50+l,this.obstaclesSmashed++,this.miniGameManager.onChestSmashed(),this.audio.playSmash(),this.audio.playCoinPickup(),this._registerCombo(),this.shakeIntensity=.2,this.shakeDuration=.12,this.ui.updateCoins(this.coins),this.particles){const c=new C;o.getWorldPosition(c),this.particles.burstDebris(c.x,c.y+.5,c.z,12),this.particles.burstSparkles(c.x,c.y+.3,c.z,[1,.85,.1],12),this.particles.burstSparkles(c.x,c.y+.8,c.z,[.1,1,.3],6)}continue}if(this.health--,this.runner.stumble(),this.audio.playHit(),this.ui.updateHealth(this.health,this.maxHealth),this.shakeIntensity=.4,this.shakeDuration=.3,this._triggerScreenFlash(1,.1,.05,.25),this.ui.flashDamage(),this.health<=0){this.endRun();return}}for(const o of n){this._powerUpsCollected++;const l=o.userData.powerUpType;if(l==="CoinBag")this.coins+=25,this.ui.updateCoins(this.coins);else if(l==="Revive")this.health=Math.min(this.health+1,this.maxHealth),this.ui.updateHealth(this.health,this.maxHealth);else if(l==="Antidote")this.activePowerUps.SpeedBoost=5;else if(hh[l]){let d=hh[l];const u=(a=On[this._characterId])==null?void 0:a.passive;if((u==null?void 0:u.id)==="arcane_sight"){const f=this._getPassiveValue()/100;d*=1+f}this.activePowerUps[l]=d}this.ui.showPowerUp(l.replace(/([A-Z])/g," $1").trim()),this.audio.playPowerUp(l),this._registerCombo();const h={CoinBag:[1,.85,0],CoinMagnet:[1,0,1],DoubleCoin:[1,.7,0],Invincibility:[0,.9,1],Shield:[.5,.3,1],Antidote:[.5,1,0],TimeAdvantage:[.3,.5,1],Revive:[0,1,.4],SpeedBoost:[1,.5,0]}[l]||[1,1,1];if(this._triggerScreenFlash(h[0],h[1],h[2],.35),this.particles){const d=new C;o.getWorldPosition(d),this.particles.burstSparkles(d.x,d.y,d.z,h,15)}}}_checkNearMisses(){if(!this.world)return;const e=this.runner.position.z,t=this.runner.position.x;for(const n of this.world.activeObstacles){const i=new C;if(n.getWorldPosition(i),i.z>e+1&&!this._passedObstacles.has(n)){this._passedObstacles.add(n),this.obstaclesDodged++;const s=Math.abs(i.x-t);s<2&&s>.3&&(this._registerCombo(),this.score+=25,this._nearMisses++,this.audio.playNearMiss(),this.ui.showNearMiss())}}if(this._passedObstacles.size>50){const n=this._passedObstacles.values();for(let i=0;i<25;i++)n.next()}}_registerCombo(){this.comboCount++,this.comboTimer=kv,this.comboMultiplier=Math.min(Hv,Br+this.comboCount*zv),this.comboCount>this.maxCombo&&(this.maxCombo=this.comboCount),this.comboCount>2&&this.audio.playCombo(this.comboCount),this.ui.updateCombo(this.comboCount,this.comboMultiplier)}_breakCombo(){this.comboCount>5&&(this.score+=this.comboCount*Gv),this.comboCount=0,this.comboTimer=0,this.comboMultiplier=Br,this.ui.updateCombo(0,1)}_triggerScreenFlash(e,t,n,i=.3){this._screenFlash={color:[e,t,n],timer:i,duration:i}}_updateCamera(e){if(!this.runner)return;const t=new C(this.runner.position.x*.3,this.runner.position.y+ch.y,this.runner.position.z+ch.z);this.camera.position.lerp(t,5*e);const n=new C(this.runner.position.x*.5,this.runner.position.y+1,this.runner.position.z-Bv);if(this.camera.lookAt(n),this.shakeDuration>0){this.shakeDuration-=e;const i=this.shakeIntensity*(this.shakeDuration/.5);this.camera.position.x+=(Math.random()-.5)*i,this.camera.position.y+=(Math.random()-.5)*i*.5}if(this._landingDipTimer>0){this._landingDipTimer-=e;const i=Math.sin(this._landingDipTimer/.2*Math.PI)*.35;this.camera.position.y-=i}}_setupMenuCamera(){this.camera.position.set(5,8,15),this.camera.lookAt(0,0,0)}_updateMenuCamera(e){const t=performance.now()*3e-4;this.camera.position.x=Math.sin(t)*8,this.camera.position.z=Math.cos(t)*12,this.camera.position.y=6+Math.sin(t*.5)*2,this.camera.lookAt(0,0,0)}_handleMiniGameEvent(e){if(e)switch(e.type){case"spawn_chests":this.world&&(this.world._miniGameChestMode=!0);break;case"spawn_coins":this.world&&(this.world._miniGameCoinMode=!0);break;case"spawn_obstacles":this.world&&(this.world._miniGameDodgeMode=!0);break;case"simon_prompt":this.ui.showSimonPrompt(e.action,e.step,e.total);break;case"end":{const t=e;this.coins+=t.coinReward,this._miniGameCoinsEarned+=t.coinReward,this.score+=t.score,this.ui.updateCoins(this.coins),this.ui.showMiniGameEnd(t.gameName,t.score,t.coinReward,t.dustReward),this.abilityManager.addStarDust(t.dustReward),this.audio.playPowerUp("Invincibility"),this._triggerScreenFlash(1,.85,0,.5),this.shakeIntensity=.4,this.shakeDuration=.4,this.world&&(this.world._miniGameChestMode=!1,this.world._miniGameCoinMode=!1,this.world._miniGameDodgeMode=!1),this.scene.fog=null;break}}}_activateAbility(){if(!this._abilityConfig||this._abilityCooldown>0||this._abilityActive)return;switch(this._abilityActive=!0,this._abilityTimer=this._abilityConfig.duration,this._abilityCooldown=this._abilityConfig.cooldown,this.audio.playPowerUp("Invincibility"),this.ui.flashAbilityActive(),this.shakeIntensity=.3,this.shakeDuration=.3,this._abilityConfig.id){case"shield_bash":this.activePowerUps.Invincibility=this._abilityConfig.duration,this._triggerScreenFlash(.5,.8,1,.4);break;case"rage":this.activePowerUps.Invincibility=this._abilityConfig.duration,this.runner.speedMultiplier=2,this._triggerScreenFlash(1,.3,0,.4);break;case"time_warp":this.activePowerUps.TimeAdvantage=this._abilityConfig.duration,this._triggerScreenFlash(.3,.3,1,.4);break;case"shadow_dash":this.activePowerUps.Invincibility=this._abilityConfig.duration,this._triggerScreenFlash(.4,.2,.8,.4);break;case"divine_shield":this.activePowerUps.Shield=this._abilityConfig.duration,this.health=Math.min(this.health+1,this.maxHealth),this.ui.updateHealth(this.health,this.maxHealth),this._triggerScreenFlash(1,1,.5,.4);break}this.particles&&this.particles.burstSparkles(this.runner.position.x,this.runner.position.y+1,this.runner.position.z,[1,.85,0],20)}_deactivateAbility(){var e;this._abilityActive&&(this._abilityActive=!1,this._abilityTimer=0,this.ui.resetAbilityFlash(),((e=this._abilityConfig)==null?void 0:e.id)==="rage"&&(this.runner.speedMultiplier=1))}_getPassiveValue(){var n;const e=On[this._characterId];if(!e)return 0;const t=((n=this._charStats)==null?void 0:n.passiveBoost)||0;switch(e.passive.id){case"armor_up":return e.passive.baseValue+t;case"brute_force":return Math.max(5,e.passive.baseValue-t*2);case"arcane_sight":return e.passive.baseValue+t*15;case"nimble":return e.passive.baseValue+t*15;case"blessed":return e.passive.baseValue+t;default:return e.passive.baseValue}}}const ud=document.createElement("style");ud.textContent=`
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
    align-items:center; justify-content:center; background:rgba(14,10,4,0.7);
    font-weight:800; font-size:13px; color:#e8dcc8;
}
.vr-stage-path {
    width:100%; max-height:400px; overflow-y:auto; padding:0 20px 20px;
    position:relative; border-left:2px dotted rgba(194,158,80,0.15);
    margin-left:40%;
}
.vr-stage-path::-webkit-scrollbar { width:4px; }
.vr-stage-path::-webkit-scrollbar-thumb { background:rgba(194,158,80,0.2); border-radius:2px; }
.vr-stage-node {
    width:200px; padding:12px 16px; border-radius:8px; text-align:center; cursor:pointer;
    background:rgba(42,30,18,0.6); border:2px solid rgba(194,158,80,0.12);
    transition:transform 0.15s, border-color 0.2s, box-shadow 0.2s;
    animation:popIn 0.4s ease-out both; margin-bottom:16px; position:relative;
}
.vr-stage-node:hover { transform:translateY(-2px) scale(1.02); box-shadow:0 6px 18px rgba(0,0,0,0.3); }
.vr-stage-node.locked { opacity:0.4; cursor:default; }
.vr-stage-node.locked:hover { transform:none; box-shadow:none; }
.vr-stage-node:nth-child(odd) { margin-left:-60%; }
.vr-stage-node:nth-child(even) { margin-left:10%; }
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
.vr-challenge-card.claimed { border-color:rgba(120,160,80,0.15); opacity:0.6; }
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
`;document.head.appendChild(ud);class qv{constructor(e,t,n){this.container=e,this.campaignManager=t,this.challengeManager=n,this._selectedCampaign="forest",this._countdownInterval=null,this.campaignScreen=document.createElement("div"),this.campaignScreen.id="campaign-screen",this.campaignScreen.className="vr-screen",this.campaignScreen.style.justifyContent="flex-start",this.campaignScreen.style.overflowY="auto",this.campaignScreen.style.padding="0",this.campaignScreen.innerHTML=`
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
        `,e.appendChild(this.dailyScreen),document.getElementById("campaign-back-btn").addEventListener("click",()=>{this._emit("campaign-back")}),document.getElementById("campaign-daily-btn").addEventListener("click",()=>{this.showDailyChallenges()}),document.getElementById("modal-close-btn").addEventListener("click",()=>{this._hideStageDetail()}),document.getElementById("modal-start-btn").addEventListener("click",()=>{this._modalCampaignId!=null&&this._modalStageIndex!=null&&this._emit("campaign-start",{campaignId:this._modalCampaignId,stageIndex:this._modalStageIndex})}),document.getElementById("daily-back-btn").addEventListener("click",()=>{this.dailyScreen.style.display="none",this.campaignScreen.style.display="flex"})}show(){this.campaignScreen.style.display="flex",this.dailyScreen.style.display="none",this._hideStageDetail(),this.refresh()}hide(){this.campaignScreen.style.display="none",this.dailyScreen.style.display="none",this._hideStageDetail(),this._stopCountdown()}showDailyChallenges(){this.campaignScreen.style.display="none",this.dailyScreen.style.display="flex",this._renderDailyChallenges(),this._startCountdown()}refresh(){this._renderCampaignSelector(),this._renderCampaignStages(this._selectedCampaign),this._updateTopBar()}_updateTopBar(){const e=this.campaignManager.getTotalStars();document.getElementById("campaign-total-stars").textContent=`${e} ⭐`;const n=this.challengeManager.getDailyChallenges().filter(s=>!s.completed).length,i=document.getElementById("campaign-daily-btn");n>0?i.innerHTML=`<span>📋 DAILY</span><span class="vr-badge" style="background:rgba(139,32,32,0.3);color:#c97040;margin-left:6px;font-size:10px;">${n}</span>`:i.innerHTML="<span>📋 DAILY</span>"}_renderCampaignSelector(){const e=document.getElementById("campaign-selector");e.innerHTML="";const t=this.campaignManager.getAllCampaigns();this.campaignManager.getTotalStars(),t.forEach((n,i)=>{const s=this.campaignManager.isCampaignUnlocked(n.id),a=this._getCampaignStars(n),o=n.stages.length*3,c={forest:"#6a8a4a",desert:"#c9a24e",lava:"#8b2020"}[n.theme]||"#c9a24e",h=document.createElement("div");h.className=`vr-campaign-card${this._selectedCampaign===n.id?" selected":""}${s?"":" locked"}`,h.style.animationDelay=i*.1+"s",s&&(h.style.borderColor=this._selectedCampaign===n.id?c:""),h.innerHTML=`
                <div style="font-size:40px;margin-bottom:6px;">${n.icon}</div>
                <div class="vr-body" style="font-size:14px;font-weight:800;">${n.name}</div>
                <div class="vr-body" style="font-size:12px;opacity:0.5;margin-top:4px;font-weight:700;">${a}/${o} ⭐</div>
                ${s?"":`
                    <div class="vr-campaign-lock-overlay">
                        <div style="font-size:28px;margin-bottom:4px;">🔒</div>
                        <div class="vr-body" style="font-size:12px;">Need ${n.requiredStars} ⭐</div>
                    </div>
                `}
            `,s&&h.addEventListener("click",()=>{this._selectedCampaign=n.id,this._renderCampaignSelector(),this._renderCampaignStages(n.id)}),e.appendChild(h)})}_getCampaignStars(e){let t=0;for(const n of e.stages){const i=this.campaignManager.getStageResult(e.id,n.id);i&&(t+=i.stars)}return t}_renderCampaignStages(e){const t=document.getElementById("campaign-stage-list");t.innerHTML="";const n=this.campaignManager.getCampaign(e);n&&n.stages.forEach((i,s)=>{const a=this.campaignManager.isStageUnlocked(e,s),o=this.campaignManager.getStageResult(e,i.id),l=o?o.stars:0,c=document.createElement("div");c.className=`vr-stage-node vr-body${a?"":" locked"}`,c.style.animationDelay=s*.06+"s";const h=this._renderStarIcons(l);c.innerHTML=`
                <div style="font-size:12px;opacity:0.4;font-weight:800;margin-bottom:2px;">STAGE ${s+1}</div>
                <div style="font-size:14px;font-weight:800;">${a?i.name:"🔒 Locked"}</div>
                <div class="vr-stage-stars">${h}</div>
            `,a&&c.addEventListener("click",()=>{this._showStageDetail(e,s)}),t.appendChild(c)})}_renderStarIcons(e){let t="";for(let n=0;n<3;n++)t+=n<e?"⭐":"☆";return t}_showStageDetail(e,t){this._modalCampaignId=e,this._modalStageIndex=t;const n=this.campaignManager.getStage(e,t);if(!n)return;const i=this.campaignManager.getStageResult(e,n.id),s=i?i.stars:0;document.getElementById("modal-stage-name").textContent=n.name;const a=document.getElementById("modal-objectives"),o=[n.objectives.star1,n.objectives.star2,n.objectives.star3],l=["⭐","⭐⭐","⭐⭐⭐"];a.innerHTML="",o.forEach((f,g)=>{const _=s>g,m=this._objectiveDescription(f),p=document.createElement("div");p.className="vr-objective-row",p.innerHTML=`
                <span class="${_?"vr-objective-check":"vr-objective-pending"}">${_?"✅":"⬜"}</span>
                <span style="opacity:0.6;min-width:50px;">${l[g]}</span>
                <span style="flex:1;">${m}</span>
            `,a.appendChild(p)});const c=document.getElementById("modal-best");i?(c.textContent=`Best: ${i.bestScore.toLocaleString()} pts | ${i.bestDistance}m | 🪙 ${i.bestCoins}`,c.style.display=""):c.style.display="none";const h=document.getElementById("modal-modifiers");h.innerHTML="";const d=n.modifiers,u=[];d.speedMultiplier&&d.speedMultiplier!==1&&u.push(`⚡ Speed x${d.speedMultiplier}`),d.timeLimit&&u.push(`⏱️ Time limit: ${d.timeLimit}s`),d.noRevive&&u.push("💀 No revive"),d.maxHealth&&d.maxHealth<3&&u.push(`❤️ Max HP: ${d.maxHealth}`),d.bossEnabled&&u.push(`🐲 Boss at ${d.bossAtDistance}m`),d.coinMultiplier&&d.coinMultiplier>1&&u.push(`🪙 Coins x${d.coinMultiplier}`),u.length>0&&u.forEach(f=>{const g=document.createElement("span");g.className="vr-modifier-tag vr-body",g.textContent=f,h.appendChild(g)}),this.stageModal.style.display="flex"}_hideStageDetail(){this.stageModal.style.display="none",this._modalCampaignId=null,this._modalStageIndex=null}_objectiveDescription(e){if(!e)return"";switch(e.type){case"distance":return`Reach ${e.target}m`;case"score":return`Score ${e.target.toLocaleString()}+`;case"coins":return`Collect ${e.target} coins`;case"combo":return`Reach ${e.target}x combo`;case"chests":return`Smash ${e.target} chests`;case"noHit":return`Run ${e.target}m without a hit`;case"bossDefeat":return"Defeat the boss";default:return`${e.type}: ${e.target}`}}_renderDailyChallenges(){const e=document.getElementById("daily-challenge-list");e.innerHTML="",this.challengeManager.getDailyChallenges().forEach((a,o)=>{const l=Math.min(100,Math.round(a.progress/a.target*100)),c=a.completed,h=document.createElement("div");h.className=`vr-challenge-card vr-body${a.claimed?" claimed":a.completed?" completed":""}`,h.style.animationDelay=o*.1+"s",h.innerHTML=`
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
                    <div style="font-size:15px;font-weight:800;">${a.name}</div>
                    ${a.claimed?'<span style="font-size:18px;">✅</span>':""}
                </div>
                <div style="font-size:12px;opacity:0.5;font-weight:700;margin-bottom:6px;">${a.desc}</div>
                <div class="vr-progress-bar-bg">
                    <div class="vr-progress-bar-fill${c?" full":""}" style="width:${l}%;"></div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;">
                    <span style="font-size:12px;opacity:0.5;font-weight:700;">${a.progress}/${a.target}</span>
                    <span style="font-size:12px;font-weight:700;">🪙 ${a.reward.coins} 💎 ${a.reward.gems}</span>
                </div>
                ${a.completed&&!a.claimed?`<div style="text-align:center;margin-top:10px;"><button class="vr-btn vr-btn-gold claim-btn" data-index="${o}" style="font-size:13px;padding:8px 24px;">CLAIM</button></div>`:""}
            `,e.appendChild(h)}),e.querySelectorAll(".claim-btn").forEach(a=>{a.addEventListener("click",o=>{const l=parseInt(o.currentTarget.dataset.index,10);this._emit("challenge-claim",{index:l})})});const n=document.getElementById("daily-bonus-row"),i=this.challengeManager.getBonusReward();this.challengeManager.allClaimed();const s=!i&&this.challengeManager.allCompleted();i?(n.innerHTML=`
                <div class="vr-bonus-row vr-body">
                    <span style="font-size:13px;font-weight:800;">Complete all 3 for bonus: 🪙 200 💎 5</span>
                    <button id="bonus-claim-btn" class="vr-btn vr-btn-gold" style="font-size:12px;padding:6px 18px;">CLAIM</button>
                </div>
            `,document.getElementById("bonus-claim-btn").addEventListener("click",()=>{this._emit("challenge-bonus-claim")})):s?n.innerHTML=`
                <div class="vr-bonus-row vr-body" style="opacity:0.5;">
                    <span style="font-size:13px;font-weight:800;">Bonus claimed ✅</span>
                    <span style="font-size:12px;font-weight:700;">🪙 200 💎 5</span>
                </div>
            `:n.innerHTML=`
                <div class="vr-bonus-row vr-body" style="opacity:0.4;">
                    <span style="font-size:13px;font-weight:800;">Complete all 3 for bonus: 🪙 200 💎 5</span>
                </div>
            `}_startCountdown(){this._stopCountdown(),this._updateCountdown(),this._countdownInterval=setInterval(()=>this._updateCountdown(),1e3)}_stopCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}_updateCountdown(){const e=this.challengeManager.getTimeUntilReset(),t=Math.max(0,Math.floor(e/1e3)),n=Math.floor(t/3600),i=Math.floor(t%3600/60),s=t%60,a=l=>String(l).padStart(2,"0"),o=document.getElementById("daily-countdown");o&&(o.textContent=`Resets in ${a(n)}:${a(i)}:${a(s)}`)}_emit(e,t){this.container.dispatchEvent(new CustomEvent(e,{detail:t||null,bubbles:!0}))}}class jv{constructor(e,t,n){this.container=e,this.abilityManager=t,this.progressionManager=n,this._selectedChar="knight",this._tab="heroes",this._el=null,this._build()}_build(){this._el=document.createElement("div"),this._el.id="heroes-screen",this._el.className="vr-screen",this._el.style.justifyContent="flex-start",this._el.style.overflowY="auto",this._el.style.padding="0",this._el.innerHTML='<div id="heroes-content" style="width:100%;max-width:700px;margin:0 auto;padding:16px 20px 30px;"></div>',this.container.appendChild(this._el)}show(){this._el.style.display="flex",this.refresh()}hide(){this._el.style.display="none"}refresh(){const e=this._el.querySelector("#heroes-content");e.innerHTML=this._renderHeader()+this._renderTabs()+this._renderBody(),this._wireEvents(e)}_renderHeader(){const e=this.abilityManager.getStarDust(),t=this.abilityManager.getKeys();return`
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
                ${e.map(n=>`
                    <button class="vr-btn ${this._tab===n.id?"vr-btn-primary":"vr-btn-ghost"} heroes-tab-btn"
                        data-tab="${n.id}" style="padding:8px 16px;font-size:12px;animation:none;">
                        ${n.label}${n.id==="achievements"&&t>0?` <span style="background:#8b2020;border-radius:8px;padding:1px 6px;font-size:10px;">${t}</span>`:""}
                    </button>
                `).join("")}
            </div>
        `}_renderBody(){switch(this._tab){case"heroes":return this._renderHeroesTab();case"achievements":return this._renderAchievementsTab();case"weekly":return this._renderWeeklyTab();case"streak":return this._renderStreakTab();default:return""}}_renderHeroesTab(){const e=JSON.parse(localStorage.getItem("vr_unlocked")||'["knight"]');let t="";for(const[o,l]of Object.entries(On)){const c=e.includes(o),h=o===this._selectedChar;t+=`
                <div class="vr-card ${h?"vr-card-selected":""} ${c?"":"vr-card-pyr"} hero-select-card"
                     data-char="${o}" style="width:90px;padding:10px;cursor:${c?"pointer":"default"};opacity:${c?1:.4};">
                    <div style="font-size:28px;">${l.emoji}</div>
                    <div class="vr-body" style="font-size:12px;font-weight:800;margin-top:4px;">${l.name}</div>
                    ${c?"":'<div style="font-size:9px;opacity:0.5;">LOCKED</div>'}
                </div>
            `}const n=On[this._selectedChar];if(!n)return t;const i=this.abilityManager.getAbilityConfig(this._selectedChar);this.abilityManager.getCharacterStats(this._selectedChar);const s=`
            <div class="vr-panel" style="padding:16px;margin-bottom:16px;">
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
                    <div style="font-size:32px;">${i.icon}</div>
                    <div>
                        <div class="vr-body" style="font-size:16px;font-weight:800;color:#c9a24e;">${i.name}</div>
                        <div class="vr-body" style="font-size:11px;opacity:0.5;">Active Ability — Press Q during run</div>
                    </div>
                </div>
                <div class="vr-body" style="font-size:13px;opacity:0.7;margin-bottom:8px;">
                    ${n.active.desc.replace("{duration}",i.duration.toFixed(1))}
                </div>
                <div style="display:flex;gap:12px;" class="vr-body">
                    <div style="font-size:11px;opacity:0.5;">Duration: <span style="color:#7a9a6a;">${i.duration.toFixed(1)}s</span></div>
                    <div style="font-size:11px;opacity:0.5;">Cooldown: <span style="color:#a0785a;">${i.cooldown.toFixed(1)}s</span></div>
                </div>
            </div>
            <div class="vr-panel" style="padding:12px;margin-bottom:16px;">
                <div style="display:flex;align-items:center;gap:8px;">
                    <div style="font-size:20px;">🎯</div>
                    <div>
                        <div class="vr-body" style="font-size:14px;font-weight:800;color:#8aaa6a;">${n.passive.name}</div>
                        <div class="vr-body" style="font-size:12px;opacity:0.6;">
                            ${n.passive.desc.replace("{value}",this._getPassiveValue(this._selectedChar))}
                        </div>
                    </div>
                </div>
            </div>
        `;let a="";for(const[o,l]of Object.entries(Xi)){const c=this.abilityManager.getUpgradeLevel(this._selectedChar,o),h=c>=l.maxLevel,d=h?0:l.costs[c],u=this.abilityManager.canUpgrade(this._selectedChar,o),f=Array.from({length:l.maxLevel},(g,_)=>`<div style="width:14px;height:14px;border-radius:50%;border:2px solid ${_<c?"#c9a24e":"rgba(194,158,80,0.15)"};background:${_<c?"linear-gradient(135deg,#c9a24e,#8b6914)":"transparent"};"></div>`).join("");a+=`
                <div style="display:flex;align-items:center;gap:12px;padding:12px;margin-bottom:8px;border-radius:8px;background:rgba(42,30,18,0.4);border:1px solid rgba(194,158,80,0.08);">
                    <div style="font-size:22px;width:32px;text-align:center;">${l.icon}</div>
                    <div style="flex:1;">
                        <div class="vr-body" style="font-size:13px;font-weight:800;">${l.name} <span style="opacity:0.4;font-size:11px;">Lv.${c}/${l.maxLevel}</span></div>
                        <div class="vr-body" style="font-size:11px;opacity:0.45;">${l.desc}</div>
                        <div style="display:flex;gap:4px;margin-top:4px;">${f}</div>
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
            <div style="text-align:center;margin-top:16px;">
                <button class="vr-btn vr-btn-ghost heroes-back-btn">BACK TO MENU</button>
            </div>
        `}_renderAchievementsTab(){const e=this.progressionManager.getAchievements();let t=0,n="";for(const i of e){i.completed&&t++;const s=i.completed?i.claimed?'<span style="color:#8aaa6a;">CLAIMED</span>':'<span style="color:#c9a24e;">COMPLETE!</span>':'<span style="opacity:0.3;">In Progress</span>';n+=`
                <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;margin-bottom:6px;border-radius:10px;
                    background:${i.completed?"rgba(194,158,80,0.04)":"rgba(42,30,18,0.3)"};
                    border:1px solid ${i.completed&&!i.claimed?"rgba(194,158,80,0.2)":"rgba(194,158,80,0.06)"};">
                    <div style="font-size:24px;width:32px;text-align:center;${i.completed?"":"filter:grayscale(1);opacity:0.3;"}">${i.icon}</div>
                    <div style="flex:1;">
                        <div class="vr-body" style="font-size:13px;font-weight:800;">${i.name}</div>
                        <div class="vr-body" style="font-size:11px;opacity:0.4;">${i.desc}</div>
                    </div>
                    <div style="text-align:right;">
                        <div class="vr-body" style="font-size:10px;">${s}</div>
                        ${i.completed&&!i.claimed?`<button class="vr-btn vr-btn-gold claim-ach-btn" data-ach="${i.id}" style="padding:4px 10px;font-size:10px;margin-top:4px;">CLAIM</button>`:`<div class="vr-body" style="font-size:10px;opacity:0.3;margin-top:2px;">${i.reward.dust?"✨"+i.reward.dust:""}${i.reward.coins?" 🪙"+i.reward.coins:""}${i.reward.keys?" 🔑"+i.reward.keys:""}</div>`}
                    </div>
                </div>
            `}return`
            <div class="vr-body" style="text-align:center;margin-bottom:12px;font-size:13px;opacity:0.5;font-weight:700;">
                ${t}/${e.length} Completed
            </div>
            ${n}
            <div style="text-align:center;margin-top:16px;">
                <button class="vr-btn vr-btn-ghost heroes-back-btn">BACK TO MENU</button>
            </div>
        `}_renderWeeklyTab(){const e=this.progressionManager.getWeeklyMissions();let t="";for(let n=0;n<e.length;n++){const i=e[n],s=Math.min(100,i.progress/i.target*100);t+=`
                <div class="vr-panel" style="padding:14px;margin-bottom:10px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                        <div class="vr-body" style="font-size:14px;font-weight:800;">${i.name}</div>
                        ${i.completed&&!i.claimed?`<button class="vr-btn vr-btn-gold claim-weekly-btn" data-index="${n}" style="padding:4px 10px;font-size:10px;">CLAIM</button>`:i.claimed?'<span class="vr-badge vr-badge-owned">CLAIMED</span>':""}
                    </div>
                    <div class="vr-body" style="font-size:12px;opacity:0.5;margin-bottom:8px;">${i.desc}</div>
                    <div style="height:8px;background:rgba(194,158,80,0.1);border-radius:4px;overflow:hidden;">
                        <div style="width:${s}%;height:100%;background:linear-gradient(90deg,#c9a24e,#8b6914);border-radius:4px;transition:width 0.3s;"></div>
                    </div>
                    <div style="display:flex;justify-content:space-between;margin-top:4px;" class="vr-body">
                        <span style="font-size:10px;opacity:0.4;">${Math.floor(i.progress).toLocaleString()} / ${i.target.toLocaleString()}</span>
                        <span style="font-size:10px;opacity:0.3;">✨${i.reward.dust} 🪙${i.reward.coins}</span>
                    </div>
                </div>
            `}return`
            <div class="vr-body" style="text-align:center;margin-bottom:12px;font-size:12px;opacity:0.4;font-weight:700;">
                Weekly missions reset every Monday
            </div>
            ${t}
            <div style="text-align:center;margin-top:16px;">
                <button class="vr-btn vr-btn-ghost heroes-back-btn">BACK TO MENU</button>
            </div>
        `}_renderStreakTab(){const e=this.progressionManager.getStreakInfo(),t=[1,2,3,4,5,6,7];let n="";for(const i of t){const s=i===e.dayInCycle,a=i<e.dayInCycle;i>e.dayInCycle,n+=`
                <div style="width:70px;padding:10px 6px;border-radius:12px;text-align:center;
                    background:${s?"linear-gradient(135deg,rgba(194,158,80,0.15),rgba(139,105,20,0.1))":a?"rgba(106,138,74,0.08)":"rgba(42,30,18,0.3)"};
                    border:2px solid ${s?"#c9a24e":a?"rgba(106,138,74,0.3)":"rgba(194,158,80,0.08)"};">
                    <div class="vr-body" style="font-size:10px;font-weight:800;opacity:0.5;">DAY ${i}</div>
                    <div style="font-size:20px;margin:4px 0;">${a?"✅":s?"🎁":"📦"}</div>
                    <div class="vr-body" style="font-size:9px;opacity:0.4;">🪙${[50,75,100,150,200,250,500][i-1]}</div>
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
                ${n}
            </div>
            <div class="vr-body" style="text-align:center;font-size:11px;opacity:0.3;margin-bottom:16px;">
                Streak resets at midnight if you miss a day. Day 7 bonus includes 🔑 Keys!
            </div>
            <div style="text-align:center;">
                <button class="vr-btn vr-btn-ghost heroes-back-btn">BACK TO MENU</button>
            </div>
        `}_wireEvents(e){e.querySelectorAll(".heroes-tab-btn").forEach(n=>{n.addEventListener("click",()=>{this._tab=n.dataset.tab,this.refresh()})});const t=JSON.parse(localStorage.getItem("vr_unlocked")||'["knight"]');e.querySelectorAll(".hero-select-card").forEach(n=>{n.addEventListener("click",()=>{t.includes(n.dataset.char)&&(this._selectedChar=n.dataset.char,this.refresh())})}),e.querySelectorAll(".upgrade-btn").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.upgrade;this.abilityManager.purchaseUpgrade(this._selectedChar,i)&&(this.refresh(),this._emit("upgrade-purchased"))})}),e.querySelectorAll(".claim-ach-btn").forEach(n=>{n.addEventListener("click",()=>{const i=this.progressionManager.claimAchievement(n.dataset.ach);if(i){if(i.dust&&this.abilityManager.addStarDust(i.dust),i.keys&&this.abilityManager.addKeys(i.keys),i.coins){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);localStorage.setItem("vr_coins",String(s+i.coins))}this.refresh(),this._emit("reward-claimed",i)}})}),e.querySelectorAll(".claim-weekly-btn").forEach(n=>{n.addEventListener("click",()=>{const i=this.progressionManager.claimWeeklyReward(parseInt(n.dataset.index,10));if(i){if(i.dust&&this.abilityManager.addStarDust(i.dust),i.coins){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);localStorage.setItem("vr_coins",String(s+i.coins))}this.refresh(),this._emit("reward-claimed",i)}})}),e.querySelectorAll(".claim-streak-btn").forEach(n=>{n.addEventListener("click",()=>{const i=this.progressionManager.claimStreakReward();if(i){if(i.dust&&this.abilityManager.addStarDust(i.dust),i.keys&&this.abilityManager.addKeys(i.keys),i.coins){const s=parseInt(localStorage.getItem("vr_coins")||"0",10);localStorage.setItem("vr_coins",String(s+i.coins))}this.refresh(),this._emit("reward-claimed",i)}})}),e.querySelectorAll(".heroes-back-btn").forEach(n=>{n.addEventListener("click",()=>this._emit("heroes-back"))})}_emit(e,t=null){this.container.dispatchEvent(new CustomEvent(e,{detail:t}))}_getPassiveValue(e){const t=On[e],n=this.abilityManager.getCharacterStats(e).passiveBoost;switch(t.passive.id){case"armor_up":return t.passive.baseValue+n;case"brute_force":return Math.max(5,t.passive.baseValue-n*2);case"arcane_sight":return t.passive.baseValue+n*15;case"nimble":return t.passive.baseValue+n*15;case"blessed":return t.passive.baseValue+n;default:return t.passive.baseValue}}}const fd=document.createElement("style");fd.textContent=`
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
    background:linear-gradient(180deg,#b8860b 0%,#8b6914 40%,#6b4f10 100%);
    border:2px solid #c9a24e; border-top-color:#dbb86a; border-bottom-color:#5a3e0a;
    box-shadow:0 4px 20px rgba(139,105,20,0.5), inset 0 1px 0 rgba(255,220,150,0.3);
    animation:glow 3s infinite;
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
    background:radial-gradient(ellipse at 50% 20%, #2a1e12 0%, #1a1208 35%, #0e0a04 100%);
    font-family:'Philosopher',sans-serif; color:#e8dcc8;
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
    background:radial-gradient(circle,rgba(194,158,80,0.7),rgba(139,105,20,0.3),transparent);
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
`;document.head.appendChild(fd);function Ya(r,e=12){for(let t=0;t<e;t++){const n=document.createElement("div");n.className="vr-sparkle",n.style.left=Math.random()*100+"%",n.style.top=60+Math.random()*40+"%",n.style.animationDelay=Math.random()*5+"s",n.style.animationDuration=4+Math.random()*4+"s",n.style.width=n.style.height=2+Math.random()*4+"px",n.style.opacity=String(.2+Math.random()*.4),r.appendChild(n)}}class $v{constructor(e){this.container=e,this._callbacks={},this.hud=document.createElement("div"),this.hud.id="hud",this.hud.className="vr-body",this.hud.innerHTML=`
            <div style="position:absolute;top:16px;left:16px;text-shadow:0 2px 6px rgba(0,0,0,0.7);">
                <div id="hud-score" style="font-family:'Cinzel',serif;font-size:22px;font-weight:800;color:#c9a24e;">0</div>
                <div id="hud-distance" style="font-size:12px;opacity:0.6;font-family:'Philosopher',sans-serif;">0m</div>
            </div>
            <div style="position:absolute;top:16px;right:16px;text-align:right;text-shadow:0 2px 6px rgba(0,0,0,0.7);">
                <div id="hud-coins" style="font-size:15px;font-family:'Cinzel',serif;font-weight:700;color:#c9a24e;">🪙 0</div>
                <div id="hud-combo" style="font-size:13px;color:#c9a24e;display:none;font-family:'Cinzel',serif;font-weight:700;">COMBO x1</div>
            </div>
            <div id="hud-health" style="position:absolute;top:52px;left:16px;font-size:22px;text-shadow:0 2px 6px rgba(0,0,0,0.6);"></div>
            <div id="hud-powerup" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:'Cinzel',serif;font-size:24px;font-weight:800;color:#c9a24e;text-shadow:0 0 15px rgba(194,158,80,0.6),0 0 30px rgba(194,158,80,0.2);display:none;pointer-events:none;"></div>
            <div id="hud-nearmiss" style="position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);font-family:'Cinzel',serif;font-size:16px;font-weight:700;color:#c9a24e;text-shadow:0 0 10px rgba(194,158,80,0.5);display:none;pointer-events:none;">NEAR MISS! +25</div>
            <div id="hud-damage" style="position:absolute;inset:0;pointer-events:none;border:4px solid transparent;border-radius:4px;transition:border-color 0.1s;"></div>
            <div id="hud-ability" style="position:absolute;bottom:20px;left:20px;display:none;cursor:pointer;">
                <div style="width:56px;height:56px;border-radius:6px;background:rgba(42,30,18,0.7);border:2px solid rgba(194,158,80,0.25);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
                    <div id="hud-ability-icon" style="font-size:28px;z-index:2;"></div>
                    <div id="hud-ability-cd" style="position:absolute;bottom:0;left:0;right:0;height:0%;background:rgba(0,0,0,0.6);transition:height 0.2s;z-index:1;"></div>
                </div>
                <div id="hud-ability-label" class="vr-body" style="font-size:9px;text-align:center;margin-top:2px;opacity:0.5;font-weight:800;">ABILITY</div>
            </div>
            <button id="btn-pause" class="vr-btn vr-btn-ghost" style="position:absolute;top:14px;right:80px;width:40px;height:40px;padding:0;font-size:18px;line-height:40px;border-radius:12px;">⏸</button>
        `,this.hud.style.display="none",e.appendChild(this.hud),this.menu=document.createElement("div"),this.menu.id="main-menu",this.menu.className="vr-screen",this.menu.style.display="flex",this.menu.innerHTML=`
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

            <div style="margin-top:auto;margin-bottom:20px;text-align:center;opacity:0.2;font-size:10px;line-height:2;animation:slideUp 0.5s ease-out 0.4s both;" class="vr-body vr-controls-hint">
                <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;color:#c9a24e;">
                    <span>Q/E Lane</span>
                    <span>W Jump</span>
                    <span>S Slide</span>
                    <span>F Strike</span>
                    <span>R Ability</span>
                    <span>Esc Pause</span>
                </div>
            </div>
        `,Ya(this.menu,20),e.appendChild(this.menu),this.selectedCharacter="knight",this.charSelect=document.createElement("div"),this.charSelect.id="char-select",this.charSelect.className="vr-screen",this.charSelect.innerHTML=`
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
        `,Ya(this.charSelect,12),e.appendChild(this.charSelect),this.shopScreen=document.createElement("div"),this.shopScreen.id="shop-screen",this.shopScreen.className="vr-screen",this.shopScreen.style.justifyContent="flex-start",this.shopScreen.style.overflowY="auto",this.shopScreen.style.padding="0",this.shopScreen.innerHTML=`
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
                <div style="text-align:center;margin-top:8px;">
                    <button id="btn-shop-back" class="vr-btn vr-btn-ghost">RETURN</button>
                </div>
            </div>
        `,Ya(this.shopScreen,10),e.appendChild(this.shopScreen),this.lbScreen=document.createElement("div"),this.lbScreen.id="lb-screen",this.lbScreen.className="vr-screen",this.lbScreen.style.justifyContent="flex-start",this.lbScreen.style.overflowY="auto",this.lbScreen.innerHTML=`
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
                <div style="text-align:center;margin-top:20px;">
                    <button id="btn-lb-back" class="vr-btn vr-btn-ghost">RETURN</button>
                </div>
            </div>
        `,e.appendChild(this.lbScreen),this.gameOver=document.createElement("div"),this.gameOver.id="game-over",this.gameOver.className="vr-screen",this.gameOver.style.background="rgba(10,6,2,0.88)",this.gameOver.innerHTML=`
            <div class="vr-panel" style="padding:32px 40px;text-align:center;max-width:360px;animation:popIn 0.5s ease-out;">
                <h2 class="vr-title" style="font-size:28px;color:#8b4513;margin-bottom:4px;text-shadow:0 0 15px rgba(139,69,19,0.3);">FALLEN IN BATTLE</h2>
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
        `,e.appendChild(this.reviveOverlay),document.getElementById("btn-play").addEventListener("click",()=>this.showCharSelect()),document.getElementById("btn-retry").addEventListener("click",()=>this._emit("play")),document.getElementById("btn-start-run").addEventListener("click",()=>this._emit("play")),document.getElementById("btn-back-menu").addEventListener("click",()=>this.showMenu()),document.querySelectorAll(".char-card").forEach(t=>{t.addEventListener("click",()=>{this.selectedCharacter=t.dataset.char,document.querySelectorAll(".char-card").forEach(n=>{n.classList.toggle("vr-card-selected",n===t)})})}),document.getElementById("btn-menu").addEventListener("click",()=>this._emit("menu")),document.getElementById("btn-pause").addEventListener("click",()=>this._emit("pause")),document.getElementById("btn-resume").addEventListener("click",()=>this._emit("resume")),document.getElementById("btn-pause-menu").addEventListener("click",()=>this._emit("menu")),document.getElementById("btn-revive").addEventListener("click",()=>this._emit("revive")),document.getElementById("btn-skip-revive").addEventListener("click",()=>{this.hideRevivePrompt(),this._emit("skip-revive")}),document.getElementById("btn-shop").addEventListener("click",()=>this._emit("show-shop")),document.getElementById("btn-leaderboard").addEventListener("click",()=>this._emit("show-leaderboard")),document.getElementById("btn-campaign").addEventListener("click",()=>this._emit("show-campaign")),document.getElementById("btn-heroes").addEventListener("click",()=>this._emit("show-heroes")),document.getElementById("btn-shop-back").addEventListener("click",()=>this.showMenu()),document.getElementById("btn-lb-back").addEventListener("click",()=>this.showMenu()),document.getElementById("btn-connect-wallet").addEventListener("click",()=>this._emit("connect-wallet")),document.getElementById("btn-write-chain").addEventListener("click",()=>this._emit("write-chain"))}_hideAll(){this.menu.style.display="none",this.charSelect.style.display="none",this.shopScreen.style.display="none",this.lbScreen.style.display="none",this.hud.style.display="none",this.gameOver.style.display="none",this.pauseOverlay.style.display="none",this.reviveOverlay.style.display="none",this._campaignUI&&this._campaignUI.hide(),this._heroesUI&&this._heroesUI.hide()}showMenu(){this._hideAll(),this.menu.style.display="flex";const e=parseInt(localStorage.getItem("vr_coins")||"0",10);document.getElementById("menu-coin-count").textContent=e.toLocaleString()}showCampaignMap(e,t){this._hideAll(),this._campaignUI||(this._campaignUI=new qv(this.container,e,t),this.container.addEventListener("campaign-start",n=>this._emit("campaign-start",n.detail)),this.container.addEventListener("campaign-back",()=>this._emit("campaign-back")),this.container.addEventListener("challenge-claim",n=>this._emit("challenge-claim",n.detail)),this.container.addEventListener("challenge-bonus-claim",()=>this._emit("challenge-bonus-claim"))),this._campaignUI.refresh(),this._campaignUI.show()}refreshCampaignUI(){this._campaignUI&&this._campaignUI.refresh()}showHeroesScreen(e,t){this._hideAll(),this._heroesUI||(this._heroesUI=new jv(this.container,e,t),this.container.addEventListener("heroes-back",()=>this._emit("heroes-back")),this.container.addEventListener("upgrade-purchased",()=>this._emit("upgrade-purchased")),this.container.addEventListener("reward-claimed",n=>this._emit("reward-claimed",n.detail))),this._heroesUI.show()}refreshHeroesUI(){this._heroesUI&&this._heroesUI.refresh()}showCharSelect(){this._hideAll(),this.charSelect.style.display="flex"}showShop(e,t){this._hideAll(),this.shopScreen.style.display="flex";const n=e.getCoins(),i=t&&t.connected?` | 🔮 ${t.pyrBalance.toFixed(2)} PYR`:"";document.getElementById("shop-balance").innerHTML=`🪙 <strong>${n.toLocaleString()}</strong> coins${i}`;const s=document.getElementById("shop-characters");s.innerHTML="";for(const o of e.getCharacters()){const l=e.isUnlocked(o.id),c=document.createElement("div");c.className=`vr-card ${l?"vr-card-owned":o.currency==="pyr"?"vr-card-pyr":""}`,c.style.animationDelay=s.children.length*.08+"s",c.innerHTML=`
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
            `,c.addEventListener("click",()=>this._emit("shop-buy",{itemId:o.id,currency:o.currency})),a.appendChild(c)}}showLeaderboard(e){this._hideAll(),this.lbScreen.style.display="flex";const t=document.getElementById("lb-entries");if(t.innerHTML="",e.length===0){t.innerHTML=`
                <div style="text-align:center;padding:40px 20px;" class="vr-body">
                    <div style="font-size:48px;margin-bottom:12px;">🏆</div>
                    <div style="font-size:15px;font-weight:800;opacity:0.5;">No scores yet</div>
                    <div style="font-size:12px;opacity:0.3;margin-top:4px;font-weight:700;">Play a run to set the first record!</div>
                </div>`;return}e.forEach((n,i)=>{const s=document.createElement("div"),a=i===0?"🥇":i===1?"🥈":i===2?"🥉":`<span style="opacity:0.4;font-size:13px;">${i+1}</span>`,o=n.txHash?' <span style="font-size:11px;">⛓️</span>':"",l=i<3;s.className="vr-body",s.style.cssText=`display:flex;align-items:center;padding:10px 14px;margin-bottom:6px;border-radius:12px;font-weight:700;animation:slideUp 0.3s ease-out ${i*.05}s both;background:${l?"rgba(194,158,80,0.06)":"rgba(42,30,18,0.3)"};border:1px solid ${l?"rgba(194,158,80,0.12)":"rgba(194,158,80,0.06)"};`,s.innerHTML=`
                <div style="width:36px;text-align:center;font-size:18px;">${a}</div>
                <div style="flex:1;overflow:hidden;">
                    <div style="font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${n.name}${o}</div>
                    <div style="font-size:10px;opacity:0.35;">${n.character||""}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:14px;color:#c9a24e;">${n.score.toLocaleString()}</div>
                    <div style="font-size:10px;opacity:0.35;">${n.distance}m</div>
                </div>
            `,t.appendChild(s)})}updateWalletUI(e,t,n){const i=document.getElementById("btn-connect-wallet"),s=document.getElementById("wallet-info");if(e){i.textContent="Connected",i.style.background="linear-gradient(180deg,#5a7a4a,#3a5a2a)",i.style.borderColor="#7a9a6a",s.style.display="flex";const a=document.getElementById("wallet-address");a&&(a.textContent=t),document.getElementById("wallet-pyr").textContent=n.toFixed(2)+" PYR"}else i.textContent="Connect Wallet",i.style.background="",s.style.display="none"}showChainWriteButton(e){document.getElementById("btn-write-chain").style.display=e?"block":"none"}updateChainStatus(e){const t=document.getElementById("go-chain-status");t.textContent=e,t.style.display=e?"block":"none"}showHUD(){this._hideAll(),this.hud.style.display="block"}showGameOver(e,t,n,i,s={},a=null,o=[]){this.hud.style.display="none",this.reviveOverlay.style.display="none",this.gameOver.style.display="flex",document.getElementById("go-score").textContent=e.toLocaleString(),document.getElementById("go-distance").textContent=Math.floor(t)+"m",document.getElementById("go-coins").textContent="🪙 "+n;const l=document.getElementById("go-stats"),c=[];s.maxCombo>0&&c.push(`Max Combo: ${s.maxCombo}`),s.obstaclesDodged>0&&c.push(`Dodged: ${s.obstaclesDodged}`),s.obstaclesSmashed>0&&c.push(`Smashed: ${s.obstaclesSmashed}`),s.maxSpeed>0&&c.push(`Top Speed: ${s.maxSpeed}`),l.innerHTML=c.join(" &middot; ");const h=document.getElementById("go-best");if(a){const u="⭐".repeat(a.stars)+"☆".repeat(3-a.stars);h.innerHTML=`<div style="font-size:28px;margin-bottom:4px;">${u}</div>`+(a.isNew?'<span style="color:#c9a24e;">STAGE COMPLETE!</span>':a.newRecord?'<span style="color:#c9a24e;">NEW RECORD!</span>':`<span style="opacity:0.5;">Best: ${a.stars}/3 ⭐</span>`),h.style.color="#fff"}else e>=i?(h.textContent="NEW RECORD",h.style.color="#c9a24e"):(h.textContent="Best: "+i.toLocaleString(),h.style.color="rgba(194,158,80,0.4)");if(o&&o.length>0){const u=document.createElement("div");u.style.cssText="margin-top:8px;font-size:13px;color:#00ff88;animation:slideUp 0.3s ease-out;",u.className="vr-body",u.textContent=`📋 ${o.length} challenge${o.length>1?"s":""} completed!`,h.parentElement.insertBefore(u,h.nextSibling),setTimeout(()=>u.remove(),1e4)}const d=Math.floor(t/100)+Math.floor(e/500);if(d>0){const u=document.createElement("div");u.style.cssText="margin-top:4px;font-size:12px;color:#c9a24e;animation:slideUp 0.3s ease-out 0.1s both;",u.className="vr-body",u.textContent=`✨ +${d} Star Dust`,h.parentElement.insertBefore(u,h.nextSibling),setTimeout(()=>u.remove(),1e4)}}showPause(){this.pauseOverlay.style.display="flex"}showRevivePrompt(){this.hud.style.display="none",this.reviveOverlay.style.display="flex",document.getElementById("revive-timer").textContent="3"}updateReviveTimer(e){document.getElementById("revive-timer").textContent=Math.ceil(Math.max(0,e))}hideRevivePrompt(){this.reviveOverlay.style.display="none"}updateScore(e){document.getElementById("hud-score").textContent=e.toLocaleString()}updateDistance(e){document.getElementById("hud-distance").textContent=Math.floor(e)+"m"}updateCoins(e){document.getElementById("hud-coins").textContent="🪙 "+e}updateCombo(e,t){const n=document.getElementById("hud-combo");e>1?(n.style.display="block",n.textContent=`COMBO x${t.toFixed(1)}`):n.style.display="none"}updateHealth(e,t){const n=document.getElementById("hud-health");let i="";for(let s=0;s<t;s++)i+=s<e?"❤️":"🖤";n.textContent=i}showPowerUp(e){const t=document.getElementById("hud-powerup");t.textContent=e.toUpperCase(),t.style.display="block",t.style.opacity="1",setTimeout(()=>{t.style.opacity="0"},1200),setTimeout(()=>{t.style.display="none"},1500)}showMilestone(e){const t=document.getElementById("hud-powerup");t.textContent=`${e}m!`,t.style.color="#c9a24e",t.style.textShadow="0 0 15px rgba(194,158,80,0.5), 0 0 30px rgba(194,158,80,0.2)",t.style.fontSize="30px",t.style.display="block",t.style.opacity="1",setTimeout(()=>{t.style.opacity="0"},1500),setTimeout(()=>{t.style.display="none",t.style.color="#c9a24e",t.style.textShadow="0 0 15px rgba(194,158,80,0.4)",t.style.fontSize="24px"},1800)}showNearMiss(){const e=document.getElementById("hud-nearmiss");e.style.display="block",e.style.opacity="1",setTimeout(()=>{e.style.opacity="0"},600),setTimeout(()=>{e.style.display="none"},800)}flashDamage(){const e=document.getElementById("hud-damage");e.style.borderColor="rgba(232, 76, 61, 0.8)",setTimeout(()=>{e.style.borderColor="transparent"},200)}showBossWarning(){const e=document.createElement("div");e.className="vr-title",e.style.cssText="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);font-size:36px;color:#8b2020;text-shadow:0 0 20px rgba(139,32,32,0.6),0 0 40px rgba(139,32,32,0.2);text-align:center;pointer-events:none;z-index:20;animation:bossWarn 1.5s ease-out forwards;",e.textContent="TITAN APPROACHES",this.hud.parentElement.appendChild(e),setTimeout(()=>e.remove(),1500),this._bossBar||(this._bossBar=document.createElement("div"),this._bossBar.className="vr-body",this._bossBar.style.cssText="position:absolute;top:70px;left:50%;transform:translateX(-50%);width:280px;text-align:center;z-index:15;",this._bossBar.innerHTML='<div style="font-size:12px;font-weight:800;color:#ff4444;margin-bottom:3px;text-shadow:0 0 10px rgba(255,0,0,0.5);letter-spacing:2px;">BOSS ENCOUNTER</div><div style="width:100%;height:6px;background:rgba(255,0,0,0.15);border-radius:3px;overflow:hidden;"><div id="boss-bar-fill" style="width:100%;height:100%;background:linear-gradient(90deg,#ff4444,#8b6914);border-radius:3px;transition:width 0.1s;"></div></div>',this.hud.parentElement.appendChild(this._bossBar)),this._bossBar.style.display="block"}updateBossTimer(e,t){const n=document.getElementById("boss-bar-fill");n&&(n.style.width=Math.max(0,e/t*100)+"%")}showBossDefeated(){this._bossBar&&(this._bossBar.style.display="none");const e=document.createElement("div");e.className="vr-title",e.style.cssText="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;z-index:20;animation:bossDefeat 2s ease-out forwards;",e.innerHTML=`<div style="font-size:38px;color:#c9a24e;text-shadow:0 0 30px rgba(194,158,80,0.8);">BOSS DEFEATED!</div><div style="font-size:20px;color:#8b6914;margin-top:8px;font-family:'Philosopher',sans-serif;font-weight:800;">+500 Score +10 Gems</div>`,this.hud.parentElement.appendChild(e),setTimeout(()=>e.remove(),2e3)}hideBossUI(){this._bossBar&&(this._bossBar.style.display="none")}showMiniGameStart(e,t,n){const i=document.createElement("div");i.className="vr-title",i.style.cssText="position:absolute;top:25%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;z-index:20;animation:bossWarn 2s ease-out forwards;",i.innerHTML=`<div style="font-size:48px;">${t}</div><div style="font-size:28px;color:#c9a24e;text-shadow:0 0 20px rgba(194,158,80,0.6);margin-top:8px;">${e}</div><div style="font-size:14px;opacity:0.6;margin-top:4px;" class="vr-body">${n}</div>`,this.hud.parentElement.appendChild(i),setTimeout(()=>i.remove(),2e3),this._miniGameBar||(this._miniGameBar=document.createElement("div"),this._miniGameBar.className="vr-body",this._miniGameBar.style.cssText="position:absolute;top:70px;left:50%;transform:translateX(-50%);width:300px;text-align:center;z-index:15;",this._miniGameBar.innerHTML=`
                <div id="mg-title" style="font-size:13px;font-weight:800;color:#c9a24e;margin-bottom:4px;letter-spacing:1px;text-shadow:0 0 10px rgba(194,158,80,0.4);"></div>
                <div style="width:100%;height:6px;background:rgba(194,158,80,0.15);border-radius:3px;overflow:hidden;">
                    <div id="mg-bar-fill" style="width:100%;height:100%;background:linear-gradient(90deg,#c9a24e,#8b6914);border-radius:3px;transition:width 0.15s;"></div>
                </div>
                <div id="mg-score" style="font-size:11px;color:#c9a24e;margin-top:3px;font-weight:800;"></div>
            `,this.hud.parentElement.appendChild(this._miniGameBar)),this._miniGameBar.style.display="block"}updateMiniGameHUD(e){if(!e||!this._miniGameBar)return;const t=document.getElementById("mg-title"),n=document.getElementById("mg-bar-fill"),i=document.getElementById("mg-score");t&&(t.textContent=`${e.icon} ${e.name} — ${Math.ceil(e.timer)}s`),n&&(n.style.width=Math.max(0,e.timer/e.totalTime*100)+"%"),i&&(i.textContent=`Score: ${e.score}`),e.id==="simon_says"&&e.simonAction&&this._showSimonOverlay(e.simonAction,e.feedback)}showSimonPrompt(e,t,n){}_showSimonOverlay(e,t){this._simonOverlay||(this._simonOverlay=document.createElement("div"),this._simonOverlay.style.cssText="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;z-index:18;",this.hud.parentElement.appendChild(this._simonOverlay));const n={left:"⬅️",right:"➡️",jump:"⬆️",slide:"⬇️"},i={left:"LEFT",right:"RIGHT",jump:"JUMP",slide:"SLIDE"},s=t?t.correct?"rgba(0,255,100,0.2)":"rgba(255,50,50,0.2)":"rgba(0,0,0,0.3)";this._simonOverlay.innerHTML=`
            <div style="background:${s};border-radius:20px;padding:16px 32px;backdrop-filter:blur(4px);">
                <div style="font-size:48px;">${n[e]||"❓"}</div>
                <div class="vr-title" style="font-size:20px;color:#c9a24e;margin-top:4px;">${i[e]||e}</div>
            </div>
        `,this._simonOverlay.style.display="block"}showMiniGameEnd(e,t,n,i){this._miniGameBar&&(this._miniGameBar.style.display="none"),this._simonOverlay&&(this._simonOverlay.style.display="none");const s=document.createElement("div");s.className="vr-title",s.style.cssText="position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;z-index:20;animation:bossDefeat 2.5s ease-out forwards;",s.innerHTML=`
            <div style="font-size:28px;color:#c9a24e;text-shadow:0 0 20px rgba(194,158,80,0.6);">${e} COMPLETE!</div>
            <div style="font-size:16px;margin-top:8px;" class="vr-body">
                <span style="color:#c9a24e;">Score: ${t}</span>
                <span style="margin:0 8px;opacity:0.3;">|</span>
                <span style="color:#c9a24e;">🪙 +${n}</span>
                <span style="margin:0 8px;opacity:0.3;">|</span>
                <span style="color:#c9a24e;">✨ +${i}</span>
            </div>
        `,this.hud.parentElement.appendChild(s),setTimeout(()=>s.remove(),2500)}showBiomeAlert(e,t){const n=document.createElement("div");n.className="vr-title",n.style.cssText=`position:absolute;top:35%;left:50%;transform:translate(-50%,-50%);font-size:24px;color:${t};text-shadow:0 0 20px ${t};text-align:center;pointer-events:none;z-index:19;animation:bossWarn 1.5s ease-out forwards;`,n.textContent=e,this.hud.parentElement.appendChild(n),setTimeout(()=>n.remove(),1500)}updateAirMeter(e){this._airMeter||(this._airMeter=document.createElement("div"),this._airMeter.className="vr-body",this._airMeter.style.cssText="position:absolute;bottom:20px;right:20px;width:120px;z-index:15;",this._airMeter.innerHTML=`
                <div style="font-size:11px;font-weight:800;color:#44bbff;margin-bottom:3px;text-align:center;">🫧 AIR</div>
                <div style="width:100%;height:8px;background:rgba(68,187,255,0.15);border-radius:4px;overflow:hidden;">
                    <div id="air-bar-fill" style="width:100%;height:100%;background:linear-gradient(90deg,#44bbff,#2288cc);border-radius:4px;transition:width 0.2s;"></div>
                </div>
            `,this.hud.parentElement.appendChild(this._airMeter)),this._airMeter.style.display="block";const t=document.getElementById("air-bar-fill");t&&(t.style.width=Math.max(0,e)+"%",t.style.background=e<30?"linear-gradient(90deg,#ff4444,#cc2222)":"linear-gradient(90deg,#44bbff,#2288cc)")}showAbilityHUD(e,t){const n=document.getElementById("hud-ability");n.style.display="block",document.getElementById("hud-ability-icon").textContent=e,document.getElementById("hud-ability-label").textContent=t,document.getElementById("hud-ability-cd").style.height="0%"}updateAbilityCooldown(e){var i;const t=document.getElementById("hud-ability-cd");t.style.height=Math.min(100,e*100)+"%";const n=(i=document.getElementById("hud-ability"))==null?void 0:i.querySelector("div");n&&(n.style.borderColor=e<=0?"rgba(194,158,80,0.6)":"rgba(255,180,80,0.15)")}flashAbilityActive(){const e=document.getElementById("hud-ability");if(!e)return;const t=e.querySelector("div");t&&(t.style.borderColor="#c9a24e",t.style.boxShadow="0 0 20px rgba(194,158,80,0.5)")}resetAbilityFlash(){const e=document.getElementById("hud-ability");if(!e)return;const t=e.querySelector("div");t&&(t.style.boxShadow="none")}on(e,t){this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t)}_emit(e,t){(this._callbacks[e]||[]).forEach(n=>n(t))}}function dh(r,e){if(e===au)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ho||e===Fh){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ho)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Yv extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ex(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new px(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ws.extractUrlBase(e);a=Ws.resolveURL(c,this.path)}else a=Ws.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ra(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pd){try{a[He.KHR_BINARY_GLTF]=new mx(e)}catch(d){i&&i(d);return}s=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Cx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case He.KHR_MATERIALS_UNLIT:a[d]=new Jv;break;case He.KHR_DRACO_MESH_COMPRESSION:a[d]=new gx(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[d]=new _x;break;case He.KHR_MESH_QUANTIZATION:a[d]=new vx;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Kv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zv{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new fe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ut);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fa(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vs(h),c.distance=d;break;case"spot":c=new g_(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ln(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Jv{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){const i=[];e.color=new fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ut),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,mt))}return Promise.all(i)}}class Qv{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class ex{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(o,o)}return Promise.all(s)}}class tx{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class nx{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class ix{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ut)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,mt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class sx{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class rx{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(o[0],o[1],o[2],Ut),Promise.all(s)}}class ax{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ox{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(o[0],o[1],o[2],Ut),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,mt)),Promise.all(s)}}class lx{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class cx{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class hx{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class dx{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ux{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fx{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class px{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const g of d){const _=new Ue,m=new C,p=new kt,b=new C(1,1,1),S=new Qg(g.geometry,g.material,u);for(let v=0;v<u;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,_.compose(m,p,b));for(const v in l)if(v==="_COLOR_0"){const D=l[v];S.instanceColor=new Wo(D.array,D.itemSize,D.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);ct.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const pd="glTF",Ls=12,uh={JSON:1313821514,BIN:5130562};class mx{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ls),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ls,s=new DataView(e,Ls);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===uh.JSON){const c=new Uint8Array(e,Ls+a,o);this.content=n.decode(c)}else if(l===uh.BIN){const c=Ls+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=$o[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=$o[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=is[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},o,c,Ut,u)})})}}class _x{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vx{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class md extends Js{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,_=g-c,m=-2*f+3*u,p=f-u,b=1-m,S=p-u+d;for(let v=0;v!==o;v++){const D=a[_+v+o],A=a[_+v+l]*h,E=a[g+v+o],I=a[g+v]*h;s[v]=b*D+S*A+m*E+p*I}return s}}const xx=new kt;class yx extends md{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return xx.fromArray(s).normalize().toArray(s),s}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fh={9728:Ht,9729:$t,9984:wh,9985:Hr,9986:Ns,9987:Nn},ph={33071:ni,33648:Jr,10497:Vt},Ka={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$o={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bx={CUBICSPLINE:void 0,LINEAR:$s,STEP:js},Za={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Mx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Oe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),r.DefaultMaterial}function ui(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ln(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sx(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function wx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Tx(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ja(t.attributes):e=r.indices+":"+Ja(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ja(r.targets[n]);return e}function Ja(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Yo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ex(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ax=new Ue;class Cx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Kv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new f_(this.options.manager):this.textureLoader=new y_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ra(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ui(s,o,i),Ln(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Ws.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ka[i.type],o=is[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Be(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Ka[i.type],c=is[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(u/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(b);S||(_=new c(o,p*f,i.count*f/h),S=new $g(_,f/h),t.cache.add(b,S)),m=new ul(S,l,u%f/h,g)}else o===null?_=new c(i.count*l):_=new c(o,u,i.count*l),m=new Be(_,l,g);if(i.sparse!==void 0){const p=Ka.SCALAR,b=is[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,D=new b(a[1],S,i.sparse.count*p),A=new c(a[2],v,i.sparse.count*l);o!==null&&(m=new Be(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,I=D.length;E<I;E++){const w=D[E];if(m.setX(w,A[E*l]),l>=2&&m.setY(w,A[E*l+1]),l>=3&&m.setZ(w,A[E*l+2]),l>=4&&m.setW(w,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(s.samplers||{})[a.sampler]||{};return h.magFilter=fh[u.magFilter]||$t,h.minFilter=fh[u.minFilter]||Nn,h.wrapS=ph[u.wrapS]||Vt,h.wrapT=ph[u.wrapT]||Vt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==$t,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new xt(_);m.needsUpdate=!0,u(m)}),t.load(Ws.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Ln(d,a),d.userData.mimeType=a.mimeType||Ex(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new sd,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new id,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Oe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){const d=i[He.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Ut),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,mt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=en);const h=s.alphaMode||Za.OPAQUE;if(h===Za.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Za.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==nn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==nn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==nn){const d=s.emissiveFactor;o.emissive=new fe().setRGB(d[0],d[1],d[2],Ut)}return s.emissiveTexture!==void 0&&a!==nn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,mt)),Promise.all(c).then(function(){const d=new a(o);return s.name&&(d.name=s.name),Ln(d,s),t.associations.set(d,{materials:e}),s.extensions&&ui(i,d,s),d})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return mh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Tx(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=mh(new dt,c,t),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Mx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const b=c[f];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Kg(_,b):new Ce(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?p.geometry=dh(p.geometry,Fh):m.mode===Jt.TRIANGLE_FAN&&(p.geometry=dh(p.geometry,Ho));else if(m.mode===Jt.LINES)p=new e_(_,b);else if(m.mode===Jt.LINE_STRIP)p=new pl(_,b);else if(m.mode===Jt.LINE_LOOP)p=new t_(_,b);else if(m.mode===Jt.POINTS)p=new _i(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&wx(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ln(p,s),m.extensions&&ui(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&ui(i,d[0],s),d[0];const u=new Bt;s.extensions&&ui(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Lu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ca(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ln(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Ue;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let b=0,S=u.length;b<S;b++){const v=u[b],D=f[b],A=g[b],E=_[b],I=m[b];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const w=n._createAnimationTracks(v,D,A,E,I);if(w)for(let y=0;y<w.length;y++)p.push(w[y])}return new qo(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Ax)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new td:c.length>1?h=new Bt:c.length===1?h=c[0]:h=new ct,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=a),Ln(h,s),s.extensions&&ui(n,h,s),s.matrix!==void 0){const d=new Ue;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Bt;n.name&&(s.name=i.createUniqueName(n.name)),Ln(s,n),n.extensions&&ui(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++)s.add(l[h]);const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof vn||u instanceof xt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];ei[s.path]===ei.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(ei[s.path]){case ei.weights:c=ds;break;case ei.rotation:c=us;break;case ei.position:case ei.scale:c=fs;break;default:switch(n.itemSize){case 1:c=ds;break;case 2:case 3:default:c=fs;break}break}const h=i.interpolation!==void 0?bx[i.interpolation]:$s,d=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const g=new c(l[u]+"."+ei[s.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Yo(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof us?yx:md;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Rx(r,e,t){const n=e.attributes,i=new mn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){const h=Yo(is[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new C,l=new C;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=Yo(is[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new yn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function mh(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=$o[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ge.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),Ln(r,e),Rx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Sx(r,e.targets,t):r})}const Qa=new WeakMap;class Ix extends wi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new ra(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,mt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Ut,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Qa.has(e)){const l=Qa.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Qa.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new dt;e.index&&t.setIndex(new Be(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,a=i.array,o=i.itemSize,l=new Be(a,o);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==mt)return;const n=new fe;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),Ge.toWorkingColorSpace(n,mt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ra(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=Dx.toString(),a=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Dx(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(d){h({draco:d})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const d=h.draco,u=new d.Decoder;try{const f=t(d,u,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{d.destroy(u)}});break}};function t(a,o,l,c){const h=c.attributeIDs,d=c.attributeTypes;let u,f;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)u=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,u);else if(g===a.POINT_CLOUD)u=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[d[m]];let b,S;if(c.useUniqueIDs)S=h[m],b=o.GetAttributeByUniqueId(u,S);else{if(S=o.GetAttributeId(u,a[h[m]]),S===-1)continue;b=o.GetAttribute(u,S)}const v=i(a,o,u,m,p,b);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return g===a.TRIANGULAR_MESH&&(_.index=n(a,o,u)),a.destroy(u),_}function n(a,o,l){const h=l.num_faces()*3,d=h*4,u=a._malloc(d);o.GetTrianglesUInt32Array(l,d,u);const f=new Uint32Array(a.HEAPF32.buffer,u,h).slice();return a._free(u),{array:f,itemSize:1}}function i(a,o,l,c,h,d){const u=d.num_components(),g=l.num_points()*u,_=g*h.BYTES_PER_ELEMENT,m=s(a,h),p=a._malloc(_);o.GetAttributeDataArrayForAllPoints(l,d,m,_,p);const b=new h(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:c,array:b,itemSize:u}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function kr(r){const e=r.clone(!0);return e.traverse(t=>{t.isMesh&&t.material&&(t.material=Array.isArray(t.material)?t.material.map(n=>n.clone()):t.material.clone())}),e}const zr=Math.PI/180;new kt().setFromAxisAngle(new C(0,0,1),60*zr),new kt().setFromAxisAngle(new C(0,0,1),-60*zr),new kt().setFromAxisAngle(new C(1,0,0),5*zr),new kt().setFromAxisAngle(new C(1,0,0),5*zr);class Px{constructor(){this.loader=new Yv;const e=new Ix;e.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),this.loader.setDRACOLoader(e),this.knight=null,this.barbarian=null,this.characters={},this.animations=new Map,this.obstacles=new Map,this.scenery=new Map,this.environment=new Map,this.pickups=new Map,this.progress=null}_loadFile(e){return new Promise((t,n)=>{this.loader.load(e,t,void 0,n)})}async load(){const e=[{path:"assets/animations/Rig_Medium_MovementBasic.glb"},{path:"assets/animations/Rig_Medium_MovementAdvanced.glb"},{path:"assets/animations/Rig_Medium_CombatMelee.glb"},{path:"assets/animations/Rig_Medium_General.glb"}],t=["barrel_large","barrel_small","crate_large","crate_small","column","pillar","pillar_decorated","barrier","rocks","chest"],n=["torch_lit","banner_red","banner_blue","pillar_decorated","coin"],i=["Tree_1_B_Color4","Tree_2_B_Color4","Tree_6_B_Color4","Tree_Bare_1_B_Color4","Bush_2_E_Color4","Bush_3_B_Color4","Bush_4_B_Color4","Rock_1_E_Color4","Rock_3_B_Color4","Rock_4_B_Color4","Rock_5_E_Color4","Grass_1_A_Color4","Grass_2_A_Color4"],s=["potion_large_red","potion_large_blue","potion_large_green","potion_large_orange","shield_badge"],a=[];let o=0;const l=()=>{o++,this.progress&&this.progress(o/a.length)};a.push(this._loadFile("assets/characters/Knight.glb").then(c=>{this.knight=c,this.characters.knight=c,l()})),a.push(this._loadFile("assets/characters/Barbarian.glb").then(c=>{this.barbarian=c,this.characters.barbarian=c,l()}));for(const c of e)a.push(this._loadFile(c.path).then(h=>{for(const d of h.animations)this.animations.set(d.name,d);l()}));for(const c of t)a.push(this._loadFile(`assets/obstacles/${c}.gltf`).then(h=>{this.obstacles.set(c,h.scene),l()}));for(const c of n)a.push(this._loadFile(`assets/scenery/${c}.gltf`).then(h=>{this.scenery.set(c,h.scene),l()}));for(const c of i)a.push(this._loadFile(`assets/environment/${c}.gltf`).then(h=>{this.environment.set(c,h.scene),l()}));for(const c of s)a.push(this._loadFile(`assets/pickups/${c}.gltf`).then(h=>{this.pickups.set(c,h.scene),l()}));await Promise.all(a)}getObstacle(e){const t=this.obstacles.get(e);if(!t)throw new Error(`Obstacle not found: ${e}`);return kr(t)}getScenery(e){const t=this.scenery.get(e);if(!t)throw new Error(`Scenery not found: ${e}`);return kr(t)}getEnvironment(e){const t=this.environment.get(e);if(!t)throw new Error(`Environment not found: ${e}`);return kr(t)}getPickup(e){const t=this.pickups.get(e);if(!t)throw new Error(`Pickup not found: ${e}`);return kr(t)}}const Lt=new qg({antialias:!1,powerPreference:"high-performance"});Lt.setSize(window.innerWidth,window.innerHeight);Lt.setPixelRatio(Math.min(window.devicePixelRatio,2));Lt.shadowMap.enabled=!0;Lt.shadowMap.type=yh;Lt.toneMapping=Mh;Lt.toneMappingExposure=.95;Lt.outputColorSpace=mt;document.body.appendChild(Lt.domElement);const ft=new jg;ft.background=new fe(1706544);ft.fog=new dl(2756672,.008);const Lx=new _s(250,32,16),qi=new gt({side:zt,fog:!1,depthWrite:!1,uniforms:{topColor:{value:new fe(657968)},midColor:{value:new fe(4857984)},horizonColor:{value:new fe(16736304)},bottomColor:{value:new fe(16752720)},uTime:{value:0}},vertexShader:`
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
            col += vec3(1.0, 0.9, 0.6) * sunDisc * 3.0;
            col += vec3(1.0, 0.6, 0.2) * sunGlow * 0.6;
            col += vec3(1.0, 0.4, 0.15) * sunHalo * 0.15;

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
    `}),gd=new Ce(Lx,qi);ft.add(gd);const tr=800,nr=new dt,$r=new Float32Array(tr*3),_d=new Float32Array(tr),vd=new Float32Array(tr),xd=new Float32Array(tr);for(let r=0;r<tr;r++)$r[r*3]=(Math.random()-.5)*40,$r[r*3+1]=Math.random()*12,$r[r*3+2]=(Math.random()-.5)*80,_d[r]=Math.random()*Math.PI*2,vd[r]=.5+Math.random()*2,xd[r]=1.5+Math.random()*4;nr.setAttribute("position",new Be($r,3));nr.setAttribute("aPhase",new Be(_d,1));nr.setAttribute("aSpeed",new Be(vd,1));nr.setAttribute("size",new Be(xd,1));const yd=new gt({transparent:!0,depthWrite:!1,fog:!1,blending:Xs,uniforms:{uTime:{value:0}},vertexShader:`
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
            gl_FragColor = vec4(col, glow * vAlpha * 0.6);
        }
    `}),bd=new _i(nr,yd);ft.add(bd);const Bn=200,ms=new dt,Dt=new Float32Array(Bn*3),Un=new Float32Array(Bn),jt=new Float32Array(Bn*3),Md=new Float32Array(Bn);let Vi=0;for(let r=0;r<Bn;r++)Dt[r*3]=0,Dt[r*3+1]=-100,Dt[r*3+2]=0,Un[r]=0,Md[r]=2+Math.random()*3;ms.setAttribute("position",new Be(Dt,3));ms.setAttribute("aAlpha",new Be(Un,1));ms.setAttribute("size",new Be(Md,1));const Ko=new gt({transparent:!0,depthWrite:!1,fog:!1,blending:Xs,uniforms:{uColor1:{value:new C(1,.5,.1)},uColor2:{value:new C(1,.85,.3)}},vertexShader:`
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
            gl_FragColor = vec4(col, glow * vAlpha * 0.7);
        }
    `}),Ux=new _i(ms,Ko);ft.add(Ux);const Mi=500,vi=new dt,Qt=new Float32Array(Mi*3),Ki=new Float32Array(Mi),xl=new Float32Array(Mi),Wi=new Float32Array(Mi*3);for(let r=0;r<Mi;r++)Qt[r*3]=(Math.random()-.5)*40,Qt[r*3+1]=Math.random()*15,Qt[r*3+2]=(Math.random()-.5)*60,Ki[r]=0,xl[r]=1;vi.setAttribute("position",new Be(Qt,3));vi.setAttribute("aAlpha",new Be(Ki,1));vi.setAttribute("size",new Be(xl,1));const Sd=new gt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uColor:{value:new C(1,1,1)}},vertexShader:`
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
    `}),wd=new _i(vi,Sd);ft.add(wd);const Nx={roman:null,forest:{color:[.6,.7,.9],velY:-8,velX:1,velZ:.5,size:1.5,alpha:.3,density:.7},desert:{color:[.9,.8,.5],velY:-.5,velX:4,velZ:2,size:2,alpha:.25,density:.5},lava:{color:[1,.4,.1],velY:2,velX:.5,velZ:.3,size:2.5,alpha:.5,density:.4},snow:{color:[.95,.95,1],velY:-2,velX:.8,velZ:.3,size:2,alpha:.5,density:.6}};let eo=null;const gh={roman:{sun:{color:16773328,intensity:2.2},fill:{color:16752736,intensity:.3},rim:{color:16764040,intensity:.4},hemi:{sky:13680800,ground:8413248,intensity:.9},ambient:{color:16771276,intensity:.5},bloom:{strength:.6,threshold:.7},exposure:.95},forest:{sun:{color:13166752,intensity:1.6},fill:{color:6332480,intensity:.25},rim:{color:8965256,intensity:.3},hemi:{sky:8960904,ground:4214832,intensity:1},ambient:{color:9488528,intensity:.55},bloom:{strength:.4,threshold:.75},exposure:.88},desert:{sun:{color:16772829,intensity:2.8},fill:{color:16764040,intensity:.4},rim:{color:16768426,intensity:.35},hemi:{sky:15786176,ground:10518592,intensity:.85},ambient:{color:16773328,intensity:.6},bloom:{strength:.7,threshold:.65},exposure:1.05},lava:{sun:{color:16737826,intensity:1.8},fill:{color:16729088,intensity:.5},rim:{color:16724736,intensity:.6},hemi:{sky:4460800,ground:2230272,intensity:.7},ambient:{color:16729088,intensity:.45},bloom:{strength:1,threshold:.5},exposure:.85},snow:{sun:{color:13161712,intensity:1.4},fill:{color:8952268,intensity:.3},rim:{color:11189230,intensity:.45},hemi:{sky:12636392,ground:6318208,intensity:1},ambient:{color:13688304,intensity:.6},bloom:{strength:.5,threshold:.72},exposure:.92}},_h={roman:{top:657968,mid:4857984,horizon:16736304,bottom:16752720},forest:{top:662026,mid:2773040,horizon:8965188,bottom:11197798},desert:{top:1709320,mid:6967344,horizon:16755268,bottom:16764040},lava:{top:655360,mid:3803136,horizon:16724736,bottom:16737792},snow:{top:657952,mid:3162208,horizon:8952251,bottom:11189213}},Tt=new fe,vh=new fe,xi=new Ot(60,window.innerWidth/window.innerHeight,.1,300),Bs=new p_(11587824,8413248,.9);ft.add(Bs);const Yr=new x_(16777215,.5);ft.add(Yr);const vt=new fa(16773328,2.2);vt.position.set(15,35,15);vt.castShadow=!0;vt.shadow.mapSize.set(2048,2048);vt.shadow.camera.near=.5;vt.shadow.camera.far=120;vt.shadow.camera.left=-25;vt.shadow.camera.right=25;vt.shadow.camera.top=40;vt.shadow.camera.bottom=-25;vt.shadow.bias=-.001;vt.shadow.normalBias=.02;ft.add(vt);ft.add(vt.target);const Zi=new fa(16752736,.3);Zi.position.set(-10,8,-10);ft.add(Zi);const Ji=new fa(11193599,.4);Ji.position.set(0,5,-20);ft.add(Ji);const Sn=new B_(Lt);Sn.addPass(new k_(ft,xi));const Qi=new ps(new be(window.innerWidth,window.innerHeight),.6,.6,.7);Sn.addPass(Qi);const yl=new Ti(H_);yl.uniforms.resolution.value.set(1/(window.innerWidth*Lt.getPixelRatio()),1/(window.innerHeight*Lt.getPixelRatio()));Sn.addPass(yl);const Fx={uniforms:{tDiffuse:{value:null},darkness:{value:.4},offset:{value:1.2}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float darkness;
        uniform float offset;
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            vec2 uv = (vUv - vec2(0.5)) * vec2(offset);
            float vignette = clamp(1.0 - dot(uv, uv), 0.0, 1.0);
            color.rgb *= mix(1.0 - darkness, 1.0, vignette);
            gl_FragColor = color;
        }
    `};Sn.addPass(new Ti(Fx));const Ox={uniforms:{tDiffuse:{value:null},intensity:{value:0},uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float intensity;
        uniform float uTime;
        varying vec2 vUv;

        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            if (intensity < 0.01) { gl_FragColor = color; return; }

            // Radial from center-bottom (vanishing point)
            vec2 center = vec2(0.5, 0.65);
            vec2 dir = vUv - center;
            float dist = length(dir);

            // Streaks: radial lines from center
            float angle = atan(dir.y, dir.x);
            float streak = hash(vec2(floor(angle * 40.0), floor(uTime * 3.0)));
            streak = step(0.7, streak); // sparse lines
            streak *= smoothstep(0.15, 0.5, dist); // fade near center
            streak *= intensity;

            // White/bright streaks
            vec3 streakCol = vec3(1.0, 0.95, 0.9);
            color.rgb = mix(color.rgb, streakCol, streak * 0.3);

            // Radial blur at edges
            float blur = dist * intensity * 0.008;
            vec2 blurDir = normalize(dir) * blur;
            vec4 blurred = texture2D(tDiffuse, vUv + blurDir) * 0.5 +
                           texture2D(tDiffuse, vUv - blurDir) * 0.5;
            float edgeFade = smoothstep(0.2, 0.6, dist);
            color = mix(color, blurred, edgeFade * intensity * 0.5);

            gl_FragColor = color;
        }
    `},Kr=new Ti(Ox);Sn.addPass(Kr);const Bx={uniforms:{tDiffuse:{value:null},flashColor:{value:new C(0,0,0)},flashIntensity:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform vec3 flashColor;
        uniform float flashIntensity;
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            color.rgb = mix(color.rgb, flashColor, flashIntensity * 0.3);
            color.rgb += flashColor * flashIntensity * 0.15;
            gl_FragColor = color;
        }
    `},ks=new Ti(Bx);Sn.addPass(ks);const kx={uniforms:{tDiffuse:{value:null},glowIntensity:{value:0},uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float glowIntensity;
        uniform float uTime;
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            if (glowIntensity < 0.01) { gl_FragColor = color; return; }

            // Edge glow — golden border that pulses
            vec2 edge = abs(vUv - 0.5) * 2.0;
            float edgeDist = max(edge.x, edge.y);
            float glow = smoothstep(0.75, 1.0, edgeDist);
            float pulse = 0.7 + 0.3 * sin(uTime * 6.0);

            vec3 glowCol = mix(vec3(1.0, 0.7, 0.1), vec3(1.0, 0.3, 0.05), sin(uTime * 4.0) * 0.5 + 0.5);
            color.rgb += glowCol * glow * glowIntensity * pulse;

            gl_FragColor = color;
        }
    `},Zr=new Ti(kx);Sn.addPass(Zr);const zx={uniforms:{tDiffuse:{value:null},contrast:{value:1.12},saturation:{value:1.3},warmth:{value:.06}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float contrast;
        uniform float saturation;
        uniform float warmth;
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            // Contrast
            color.rgb = (color.rgb - 0.5) * contrast + 0.5;
            // Saturation
            float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
            color.rgb = mix(vec3(gray), color.rgb, saturation);
            // Warmth
            color.r += warmth;
            color.b -= warmth * 0.5;
            gl_FragColor = color;
        }
    `};Sn.addPass(new Ti(zx));const Zo=new $v(document.getElementById("ui")),ir=document.createElement("div");ir.id="loading-screen";ir.style.cssText="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a0a2e 0%,#2d1b4e 50%,#0d1117 100%);z-index:100;";ir.innerHTML=`
    <h1 style="font-size:48px;font-weight:900;margin-bottom:8px;background:linear-gradient(135deg,#ff6b35,#ffd700);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">VULCAN RUNNER</h1>
    <p style="font-size:14px;opacity:0.6;margin-bottom:30px;">Loading assets...</p>
    <div style="width:300px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;">
        <div id="load-bar" style="width:0%;height:100%;background:linear-gradient(90deg,#ff6b35,#ffd700);border-radius:3px;transition:width 0.15s;"></div>
    </div>
    <div id="load-pct" style="margin-top:10px;font-size:12px;opacity:0.5;">0%</div>
`;document.getElementById("ui").appendChild(ir);Zo.menu.style.display="none";const Jo=new Px;Jo.progress=r=>{document.getElementById("load-bar").style.width=r*100+"%",document.getElementById("load-pct").textContent=Math.floor(r*100)+"%"};let Ee;const to=60,Hx=78;Jo.load().then(()=>{ir.style.display="none",Zo.menu.style.display="flex",Ee=new Xv(ft,xi,Zo,Jo),Td()}).catch(r=>{console.error("Asset loading failed:",r),document.getElementById("load-pct").textContent="Error loading assets!"});window.addEventListener("resize",()=>{const r=window.innerWidth,e=window.innerHeight;xi.aspect=r/e,xi.updateProjectionMatrix(),Lt.setSize(r,e),Sn.setSize(r,e),Qi.setSize(r,e),yl.uniforms.resolution.value.set(1/(r*Lt.getPixelRatio()),1/(e*Lt.getPixelRatio()))});const Gx=new ld;let Us=0,no=0;function Td(){requestAnimationFrame(Td);const r=Math.min(Gx.getDelta(),.05);if(Us+=r,Ee&&Ee.update(r),qi.uniforms.uTime.value=Us,yd.uniforms.uTime.value=Us,Kr.uniforms.uTime.value=Us,Zr.uniforms.uTime.value=Us,Ee){const e=Ee.runner?Math.max(0,(Ee.runner.runSpeed-16)/14):0,t=Ee.state===1?e:0,n=Kr.uniforms.intensity.value;Kr.uniforms.intensity.value+=(t-n)*r*3;const i=Ee.state===1&&Ee.runner?to+(Hx-to)*e:to;xi.fov+=(i-xi.fov)*r*3,xi.updateProjectionMatrix(),Ee._screenFlash?(Ee._screenFlash.timer-=r,Ee._screenFlash.timer>0?(ks.uniforms.flashIntensity.value=Ee._screenFlash.timer/Ee._screenFlash.duration,ks.uniforms.flashColor.value.set(Ee._screenFlash.color[0],Ee._screenFlash.color[1],Ee._screenFlash.color[2])):(ks.uniforms.flashIntensity.value=0,Ee._screenFlash=null)):ks.uniforms.flashIntensity.value*=.9;const s=Ee.comboCount>5?Math.min(1,(Ee.comboCount-5)/15):0,a=Zr.uniforms.glowIntensity.value;Zr.uniforms.glowIntensity.value+=(s-a)*r*4}if(Ee&&Ee.runner){const e=Ee.runner.position.z,t=Ee.runner.position.x;if(vt.position.z=e+15,vt.target.position.z=e,vt.target.updateMatrixWorld(),Ji.position.z=e-20,Zi.position.z=e-5,gd.position.z=e,bd.position.z=e,Ee.runner.running&&!Ee.runner.dead){const l=Ee.runner.runSpeed>20?.01:.02;for(no+=r;no>l;){no-=l;const c=Vi%Bn;Dt[c*3]=t+(Math.random()-.5)*.5,Dt[c*3+1]=.1+Math.random()*.3,Dt[c*3+2]=e+1.5+Math.random()*.5,Un[c]=1,jt[c*3]=(Math.random()-.5)*1.5,jt[c*3+1]=1+Math.random()*2,jt[c*3+2]=1+Math.random()*1.5,Vi++}}if(Ee._characterId==="barbarian"&&Ee.state===1){const l=Math.min(1,(Ee.runner.runSpeed-15)/15);if(l>.1&&Math.random()<l*.3){const c=Vi%Bn;Dt[c*3]=t+(Math.random()-.5)*.8,Dt[c*3+1]=.5+Math.random()*1.5,Dt[c*3+2]=e+1+Math.random()*.5,Un[c]=.8+Math.random()*.2,jt[c*3]=(Math.random()-.5)*2,jt[c*3+1]=2+Math.random()*3,jt[c*3+2]=1+Math.random()*2,Vi++}}else if(Ee._characterId==="knight"&&Ee.state===1&&Ee.runner.attacking)for(let l=0;l<3;l++){const c=Vi%Bn;Dt[c*3]=t+(Math.random()-.5)*1.5,Dt[c*3+1]=.8+Math.random()*1,Dt[c*3+2]=e-.5+Math.random()*.5,Un[c]=1,jt[c*3]=(Math.random()-.5)*4,jt[c*3+1]=1+Math.random()*2,jt[c*3+2]=-2+Math.random()*2,Vi++}if(Ee.activePowerUps){const l=Ko.uniforms.uColor1.value,c=Ko.uniforms.uColor2.value;let h,d,u,f,g,_;Ee._characterId==="barbarian"?(h=1,d=.25,u=0,f=1,g=.5,_=.1):(h=.3,d=.5,u=1,f=.7,g=.85,_=1),Ee.activePowerUps.Invincibility?(h=0,d=.9,u=1,f=.3,g=.6,_=1):Ee.activePowerUps.Shield?(h=.5,d=.2,u=1,f=.8,g=.5,_=1):Ee.activePowerUps.CoinMagnet?(h=1,d=0,u=1,f=1,g=.5,_=1):Ee.activePowerUps.SpeedBoost&&(h=1,d=.3,u=0,f=1,g=.6,_=0);const m=r*4;l.x+=(h-l.x)*m,l.y+=(d-l.y)*m,l.z+=(u-l.z)*m,c.x+=(f-c.x)*m,c.y+=(g-c.y)*m,c.z+=(_-c.z)*m}for(let l=0;l<Bn;l++)Un[l]>0&&(Un[l]-=r*2,Un[l]<0&&(Un[l]=0),Dt[l*3]+=jt[l*3]*r,Dt[l*3+1]+=jt[l*3+1]*r,Dt[l*3+2]+=jt[l*3+2]*r,jt[l*3+1]-=r*3);ms.attributes.position.needsUpdate=!0,ms.attributes.aAlpha.needsUpdate=!0;const n=Ee.currentTheme||"roman",i=Nx[n];if(wd.position.z=e,i&&(eo=i,Sd.uniforms.uColor.value.set(i.color[0],i.color[1],i.color[2])),eo){const l=eo;for(let c=0;c<Mi;c++)Ki[c]<=0?Math.random()<l.density&&(Qt[c*3]=(Math.random()-.5)*40,Qt[c*3+1]=8+Math.random()*10,Qt[c*3+2]=(Math.random()-.5)*60,Ki[c]=l.alpha*(.5+Math.random()*.5),xl[c]=l.size*(.5+Math.random()),Wi[c*3]=l.velX*(.5+Math.random()),Wi[c*3+1]=l.velY*(.8+Math.random()*.4),Wi[c*3+2]=l.velZ*(Math.random()-.5)*2):(Qt[c*3]+=Wi[c*3]*r,Qt[c*3+1]+=Wi[c*3+1]*r,Qt[c*3+2]+=Wi[c*3+2]*r,(Qt[c*3+1]<-1||Qt[c*3+1]>20)&&(Ki[c]=0))}else for(let l=0;l<Mi;l++)Ki[l]*=.95;if(vi.attributes.position.needsUpdate=!0,vi.attributes.aAlpha.needsUpdate=!0,vi.attributes.size.needsUpdate=!0,Ee._themeTransitionTimer>0||Ee._prevTheme!==Ee.currentTheme){const l={roman:{sky:[.14,.04,.19],fog:[.16,.06,.25]},forest:{sky:[.1,.15,.08],fog:[.1,.2,.1]},desert:{sky:[.3,.25,.15],fog:[.35,.3,.2]},lava:{sky:[.2,.05,.02],fog:[.2,.1,.04]},snow:{sky:[.15,.18,.22],fog:[.2,.22,.25]}},c=l[Ee.currentTheme]||l.roman,h=ft.background;h.r+=(c.sky[0]-h.r)*r*2,h.g+=(c.sky[1]-h.g)*r*2,h.b+=(c.sky[2]-h.b)*r*2,ft.fog&&(ft.fog.color.r+=(c.fog[0]-ft.fog.color.r)*r*2,ft.fog.color.g+=(c.fog[1]-ft.fog.color.g)*r*2,ft.fog.color.b+=(c.fog[2]-ft.fog.color.b)*r*2)}const s=gh[Ee.currentTheme]||gh.roman,a=r*2;Tt.set(s.sun.color),vt.color.lerp(Tt,a),vt.intensity+=(s.sun.intensity-vt.intensity)*a,Tt.set(s.fill.color),Zi.color.lerp(Tt,a),Zi.intensity+=(s.fill.intensity-Zi.intensity)*a,Tt.set(s.rim.color),Ji.color.lerp(Tt,a),Ji.intensity+=(s.rim.intensity-Ji.intensity)*a,Tt.set(s.hemi.sky),vh.set(s.hemi.ground),Bs.color.lerp(Tt,a),Bs.groundColor.lerp(vh,a),Bs.intensity+=(s.hemi.intensity-Bs.intensity)*a,Tt.set(s.ambient.color),Yr.color.lerp(Tt,a),Yr.intensity+=(s.ambient.intensity-Yr.intensity)*a,Qi.strength+=(s.bloom.strength-Qi.strength)*a,Qi.threshold+=(s.bloom.threshold-Qi.threshold)*a,Lt.toneMappingExposure+=(s.exposure-Lt.toneMappingExposure)*a;const o=_h[Ee.currentTheme]||_h.roman;Tt.set(o.top),qi.uniforms.topColor.value.lerp(Tt,a),Tt.set(o.mid),qi.uniforms.midColor.value.lerp(Tt,a),Tt.set(o.horizon),qi.uniforms.horizonColor.value.lerp(Tt,a),Tt.set(o.bottom),qi.uniforms.bottomColor.value.lerp(Tt,a)}Sn.render()}
