/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   P R O J E C T
*
*                                                Copyright (c) TARA Systems GmbH
*                                    written by Paul Banach and Manfred Schweyer
*
********************************************************************************
*
* This file was generated automatically by Embedded Wizard Studio.
*
* Please do not make any modifications of this file! The modifications are lost
* when the file is generated again by Embedded Wizard Studio!
*
* The template of this heading text can be found in the file 'head.ewt' in the
* directory 'Platforms' of your Embedded Wizard installation directory. If you
* wish to adapt this text, please copy the template file 'head.ewt' into your
* project directory and edit the copy only. Please avoid any modifications of
* the original template file!
*
* Version  : 9.00
* Profile  : WebGL
* Platform : Tara.WebGL.RGBA8888
*
*******************************************************************************/

EmWiCompr_9_00=(function(){var d={};d._SetLanguage=function(ko){if(this.iz===ko)return;
this.iz=ko;var dP=this.fC;while(dP){dP._ReInit();dP=dP._next;}};d._SetStyles=function(
ne){this.qd=ne;};d.o_=function(gs){if(gs._variants)gs=gs._variants();var fn=gs[this.
iz];if(fn!==undefined)return fn;else return gs[0];};d._GetAutoObject=function(eV
){if(eV._variants)eV=eV._variants();if(!eV._this)eV._Init.call(eV._this={});return eV.
_this;};d.o6=function(cG){if(cG._variants)cG=cG._variants();var f_=cG[this.iz];if(
f_===undefined)f_=cG[0];if(!f_._this)cG._class()._Init.call(f_._this={},f_);return f_.
_this;};d._NewObject=function(ke,mY){var g;if(!ke)throw"No class specified to create the object";
ke._Init.call(g={},mY);g._next=this.fC;this.fC=g;return g;};d._LockObject=function(
bA){if(bA)this.fE.push(bA);};d._UnlockObject=function(bA){var lB=this.fE;var g;if(
!bA)return;for(g=lB.length-1;g>=0;g--)if(lB[g]===bA)break;if(g>=0)this.fE.splice(
g,1);};d.pn=function(ek,c6){var g;for(var e in ek)if(!isNaN(e)&&(g=ek[e])&&(g._cycle
!==c6))g._Mark(g._cycle=c6);};d.pp=function(ek,c6){var g;for(var e in ek)if(!isNaN(
e)&&(g=ek[e])&&(g=g[0])&&(g._cycle!==c6))g._Mark(g._cycle=c6);};d.po=function(ek
,c6){var g;for(var e in ek)if(!isNaN(e)&&(g=ek[e])&&(g=g[0])&&(g._cycle!==c6))g.
_Mark(g._cycle=c6);};d.j$=function(){var bI=(this.j7+=1);var n$=this.eU;var aT=null;
var a6=null;var g=null;function il(kp,c6){var t=kp;var lk=0;var g;for(;t;t=t._next
){if((g=t.ds)&&(g._cycle!==c6)&&(t[0]._cycle===c6)){g._Mark(g._cycle=c6);t=kp;lk++;
}}return lk;}for(aT=this.fE.length-1;aT>=0;aT--)if((a6=this.fE[aT])&&(a6._cycle!==
bI))a6._Mark(a6._cycle=bI);il(this.cm,bI);while((il(this.cT,bI)>0)&&(il(this.cm,
bI)>0));while((aT=this.cm)&&((aT[0]._cycle!==bI)||((g=aT.ds)&&(g._cycle!==bI))))
this.cm=aT._next;while((a6=this.cT)&&((a6[0]._cycle!==bI)||((g=a6.ds)&&(g._cycle
!==bI))))this.cT=a6._next;while(aT&&(g=aT._next))if((g.ds&&(g.ds._cycle!==bI))||(
g[0]._cycle!==bI))aT._next=g._next;else aT=g;while(a6&&(g=a6._next))if((g.ds&&(g.
ds._cycle!==bI))||(g[0]._cycle!==bI))a6._next=g._next;else a6=g;while((aT=this.fC
)&&(aT._cycle!==bI)){this.fC=aT._next;aT._Done();}if(aT)while(a6=aT._next){if(a6.
_cycle!==bI){aT._next=a6._next;a6._Done();}else aT=a6;}this.pO(bI);while((aT=this.
ei)&&(aT[0]._cycle!==bI))this.ei=aT._next;if(aT)while(a6=aT._next)if(a6[0]._cycle
!==bI)aT._next=a6._next;else aT=a6;while((aT=this.fD)&&(aT._cycle!==bI))this.fD=
aT.gp;while(aT){var h_;while((a6=aT._observers)&&(a6[0]._cycle!==bI))aT._observers=
a6._next;if(a6)while(h_=a6._next)if(h_[0]._cycle!==bI)a6._next=h_._next;else a6=
h_;while((a6=aT.gp)&&(a6._cycle!==bI))aT.gp=a6.gp;aT=a6;}if(this.aX)console.log(
"Living objects: "+this.eU+"("+(this.eU-n$)+")");};d.iJ=function(aY,gz){if(!aY)return;
var t=this.cm;var dP=aY[0];var gR=aY[1];var g=null;if(t&&(t[0]===dP)&&(t[1]===gR
)){if(!t.iM)t.ds=gz;return;}if(t)while((g=t._next)&&((g[0]!==dP)||(g[1]!==gR)))t=
g;if(g&&g.iM)return;if(g){t._next=g._next;g._next=null;}aY._next=this.cm;aY.ds=gz;
this.cm=aY;};d.o$=function(aY,gz){if(!aY)return;var t=this.cT;var dP=aY[0];var gR=
aY[1];var g;if(t&&(t[0]===dP)&&(t[1]===gR)){if(!t.iM)t.ds=gz;return;}if(t)while((
g=t._next)&&((g[0]!==dP)||(g[1]!==gR)))t=g;if(g){t._next=g._next;g._next=null;}aY.
_next=this.cT;aY.ds=gz;this.cT=aY;};d.mV=function(){var f4=[];if(!this.cm){if(this.
cT){this.cm=this.cT;this.cT=null;}return false;}for(;;){var gQ=this.cm;var jn=null;
var g;while(gQ&&(gQ!==f4)){g=gQ;gQ=gQ._next;g._next=jn;jn=g;}f4._next=jn;this.cm=
f4;while(g=f4._next){g.iM=true;g[1].call(g[0],g.ds);f4._next=g._next;}if(this.cm===
f4){this.cm=null;break;}}this.cm=this.cT;this.cT=null;return true;};d.oz=function(
aY,dv,bz){var cK;if(!aY||!dv||!(cK=dv[0]))return;var t=cK._observers;var cj=aY[0
];var ck=aY[1];var fg=dv[1];while(t&&((t[0]!==cj)||(t[1]!==ck)||(t[2]!==bz)||(t[
3]!==fg)))t=t._next;if(t)return;t=[cj,ck,bz,fg];t._next=cK._observers;cK._observers=
t;if(!cK.iL){cK.gp=this.fD;cK.iL=true;this.fD=cK;}};d.ox=function(aY,bA,bz){if(!
aY||!bA)return;var t=bA._observers;var cj=aY[0];var ck=aY[1];while(t&&((t[0]!==cj
)||(t[1]!==ck)||(t[2]!==bz)||t[3]))t=t._next;if(t)return;t=[cj,ck,bz,null];t._next=
bA._observers;bA._observers=t;if(!bA.iL){bA.gp=this.fD;bA.iL=true;this.fD=bA;}};
d.oy=function(aY,bz){if(!aY)return;var t=this.ei;var cj=aY[0];var ck=aY[1];while(
t&&((t[0]!==cj)||(t[1]!==ck)||(t[2]!==bz)))t=t._next;if(t)return;t=[cj,ck,bz];t.
_next=this.ei;this.ei=t;};d.oK=function(aY,dv,bz){var cK;var t;if(!aY||!dv||!(cK=
dv[0])||!(t=cK._observers))return;var cj=aY[0];var ck=aY[1];var fg=dv[1];var bg;
if((t[0]===cj)&&(t[1]===ck)&&(t[2]===bz)&&(t[3]===fg)){cK._observers=t._next;t._next=
null;return;}while((bg=t._next)&&((bg[0]!==cj)||(bg[1]!==ck)||(bg[2]!==bz)||(bg[
3]!==fg)))t=bg;if(!bg)return;t._next=bg._next;bg._next=null;};d.oI=function(aY,bA
,bz){var t;if(!aY||!bA||!(t=bA._observers))return;var cj=aY[0];var ck=aY[1];var bg;
if((t[0]===cj)&&(t[1]===ck)&&(t[2]===bz)&&!t[3]){bA._observers=t._next;t._next=null;
return;}while((bg=t._next)&&((bg[0]!==cj)||(bg[1]!==ck)||(bg[2]!==bz)||bg[3]))t=
bg;if(!bg)return;t._next=bg._next;bg._next=null;};d.oJ=function(aY,bz){var t;if(
!aY||!(t=this.ei))return;var cj=aY[0];var ck=aY[1];var bg;if((t[0]===cj)&&(t[1]===
ck)&&(t[2]===bz)){this.ei=t._next;t._next=null;return;}while((bg=t._next)&&((bg[
0]!==cj)||(bg[1]!==ck)||(bg[2]!==bz)))t=bg;if(!bg)return;t._next=bg._next;bg._next=
null;};d.pB=function(dv,bz){var cK;var t;if(!dv||!(cK=dv[0])||!(t=cK._observers)
)return;if(this.aX)console.log("NotifyRefObserver()");var fg=dv[1];while(t){if((
t[2]===bz)&&(t[3]===fg))this.iJ(t.slice(0,2),null);t=t._next;}};d.mI=function(bA
,bz){var t;if(!bA||!(t=bA._observers))return;if(this.aX)console.log("NotifyObjObserver()"
);while(t){if((t[2]===bz)&&!t[3])this.iJ(t.slice(0,2),null);t=t._next;}};d.pA=function(
bz){var t;if(!(t=this.ei))return;if(this.aX)console.log("NotifyObserver()");while(
t){if(t[2]===bz)this.iJ(t.slice(0,2),null);t=t._next;}};function StartTimer(hl,fL
){var gZ=this;if((hl>0)&&(fL>0))this.ee=window.setTimeout(function(){mj(gZ,fL);}
,hl);else if(hl>0)this.ee=window.setTimeout(function(){mk(gZ);},hl);else if(fL>0
)this.ec=window.setInterval(function(){jZ(gZ);},fL);}function DestroyTimer(){if(
this.ec)window.clearInterval(this.ec);this.ec=0;if(this.ee)window.clearTimeout(this.
ee);this.ee=0;this.gb.eU--;this.g9=null;this.g7=null;this.gb=null;}function ResetTimer(
){if(this.ec)window.clearInterval(this.ec);this.ec=0;if(this.ee)window.clearTimeout(
this.ee);this.ee=0;}function mj(cI,fL){cI.mq=null;cI.ec=window.setInterval(function(
){jZ(cI);},fL);try{cI.g7.call(cI.g9);cI.gb.cB();}catch(bc){console.log("EmWi error: "+
bc+"!");}}function mk(cI){try{cI.mq=null;cI.g7.call(cI.g9);cI.gb.cB();}catch(bc){
console.log("EmWi error: "+bc+"!");}}function jZ(cI){try{cI.g7.call(cI.g9);cI.gb.
cB();}catch(bc){console.log("EmWi error: "+bc+"!");}}d.oH=function(bA,m5){var gZ={
DestroyTimer:DestroyTimer,ResetTimer:ResetTimer,StartTimer:StartTimer,gb:this,g9:
bA,g7:m5,ec:0,ee:0};this.eU++;return gZ;};function lT(){var ex=this.jS;var dO=ex.
length;var fb=0;if(arguments.length!==dO)return this.ih;for(var e=0;e<dO;e++){var
gH=ex[e];var aq=arguments[e];if((aq<0)||(aq>=gH))return this.ih;fb=(fb*gH)+aq;}var
fn=this[fb];if(fn===undefined)return this.ih;return fn;};function lU(){var ex=this.
jS;var dO=ex.length;var fb=0;if((arguments.length-1)!==dO)return;for(var e=0;e<dO;
e++){var gH=ex[e];var aq=arguments[e];if((aq<0)||(aq>=gH))return;fb=(fb*gH)+aq;}
return this[fb]=arguments[dO];};d.pv=function(){var dO=arguments.length-2;var nO=
arguments[dO];var jh=arguments[dO+1];var ex=[];for(var e=0;e<dO;e++)ex[e]=arguments[
e];var fO=[];fO.jS=ex;fO.ih=nO;if(jh)for(var e in jh)fO[e]=jh[e];fO.Get=lT;fO.Set=
lU;return fO;};d.qe=function(){function dV(da,m7){var g=da.toString(16).toUpperCase(
);var lz=m7-g.length;if(lz>0)g=d.hk.slice(0,lz)+g;return g;}var hW=arguments[0];
var bo="EmWi trace: ";var aq=0;var bP=1;while(hW&&(aq<hW.length)&&(bP<arguments.
length)){if(hW[aq++]==='%'){if(bP>1)bo+=", ";switch(hW[aq++]){case'i':bo+=arguments[
bP].toFixed();break;case'u':bo+=arguments[bP].toFixed();break;case'f':bo+=arguments[
bP];break;case'e':bo+="enum:0x"+dV(arguments[bP],8);break;case't':bo+="set:0x"+dV(
arguments[bP],8);break;case'0':bo+="null";break;case'b':bo+=arguments[bP];break;
case'h':bo+="handle:"+arguments[bP];break;case'c':{var g=arguments[bP];if((g>=0x20
)&&(g<=0x7F))bo+="\'"+String.fromCharCode(g)+"\'";else bo+="\'\\x"+dV(g,4)+"\'";
}break;case'o':{var g=arguments[bP];var am=g&0xFF;var b2=(g>>8)&0xFF;var aJ=(g>>
16)&0xFF;var bk=(g>>24)&0xFF;bo+="#"+dV(am,2)+dV(b2,2)+dV(aJ,2)+dV(bk,2);}break;
case'p':{var g=arguments[bP];bo+="<"+g[0]+","+g[1]+">";}break;case'r':{var g=arguments[
bP];bo+="<"+g[0]+","+g[1]+","+g[2]+","+g[3]+">";}break;case'l':{bo+="language:0x"+
dV(arguments[bP],8);}break;case'g':{bo+="styles:0x"+dV(arguments[bP],8);}break;case
'^':{var g=arguments[bP];if(!g||!g[0])bo+="null";else bo+="ref:(Object of class '"+
g[0]._className+"', OnGet:'"+g[1].lm+"', OnSet:'"+g[2].lm+"')";}break;case'*':{var
g=arguments[bP];if(!g)bo+="null";else bo+="Object of class '"+g._className+"'";}
break;case'$':{var g=arguments[bP];if(!g)bo+="null";else bo+=g._className;}break;
case'&':{var g=arguments[bP];if(!g||!g[0])bo+="null";else bo+="slot:(Object of class '"+
g[0]._className+"', SlotProc:'"+g[1].lm+"')";}break;case's':{var g=arguments[bP];
bo+="\""+g+"\"";}break;}bP++;}}console.log(bo);};d.cB=function(){if(this.gl)return;
var df=this;var lA=window.requestAnimationFrame||window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;
function lM(){df.mT();}if(lA)lA(lM);else window.setTimeout(lM,15);this.gl=true;};
d.ka=function(){if(this.gk)return;var df=this;function oa(){df.mP();}window.setTimeout(
oa,1000);this.gk=true;};d.mT=function(){if(!this.gl)return;this.gl=false;try{var
k8=this.mV();if(this.eR&&this.bp.DoesNeedUpdate()){var au=this._NewObject(this.Graphics.
Canvas,0);this.aW.jV=null;this.aW.ed=null;if(this.hc)this.eR.b1[0].g4=true;au.AttachBitmap(
this.eR);this.bp.UpdateGE20(au);au.DetachBitmap();if(this.eR.b1[0].g4){this.aW.clear(
this.aW.COLOR_BUFFER_BIT);this.eR.b1[0].g4=false;}k8=true;}if(k8)this.ka();if(this.
cm||this.cT)this.cB();}catch(bc){console.log("EmWi error: "+bc+"!");}};d.mP=function(
){if(!this.gk)return;this.gk=false;this.j$();};function mr(iW,n){var lj=[n.Enter
,n.Escape,n.Backspace,n.CtrlShiftPageUp,n.CtrlShiftPageDown,n.CtrlShiftUp,n.CtrlShiftDown
,n.CtrlShiftKeyP,n.CtrlShiftKeyR,n.CtrlShiftLeft,n.CtrlShiftRight,n.CtrlShiftBackspace
,n.CtrlShiftKeyE,n.CtrlShiftKeyT,n.CtrlShiftKeyN,n.CtrlShiftKeyK,n.CtrlShiftKeyG
,n.CtrlShiftKeyU,n.CtrlShiftKeyA,n.CtrlShiftKeyD,n.CtrlShiftKeyM,n.CtrlShiftKey0
,n.CtrlShiftKey1,n.CtrlShiftKey2,n.CtrlShiftKey3,n.CtrlShiftKey4,n.CtrlShiftKey5
,n.CtrlShiftKey6,n.CtrlShiftKey7,n.CtrlShiftKey8,n.CtrlShiftKey9,n.CtrlKeyM,n.CtrlPageUp
,n.CtrlPageDown,n.CtrlInsert,n.CtrlDelete,n.CtrlKeyP,n.CtrlKeyS,n.CtrlLeft,n.CtrlRight
,n.CtrlUp,n.CtrlDown,n.CtrlKeyH,n.CtrlKeyR,n.CtrlKeyG,n.CtrlKeyB,n.CtrlKeyY,n.CtrlKeyL
,n.CtrlKeyN,n.CtrlKeyW,n.CtrlKeyD,n.CtrlKeyV,n.CtrlKeyE,n.CtrlKeyO,n.CtrlKeyT,n.
CtrlKeyQ,n.CtrlKeyA,n.CtrlKeyC,n.CtrlKeyU,n.CtrlKeyZ,n.CtrlKeyX,n.CtrlKeyI,n.CtrlHome
,n.CtrlEnd,n.CtrlKey0,n.CtrlKey1,n.CtrlKey2,n.CtrlKey3,n.CtrlKey4,n.CtrlKey5,n.CtrlKey6
,n.CtrlKey7,n.CtrlKey8,n.CtrlKey9];var n6=[n.Ok,n.Exit,n.Clear,n.ChannelUp,n.ChannelDown
,n.SkipPrev,n.SkipNext,n.Pause,n.Record,n.SlowRev,n.SlowFwd,n.Eject,n.Repeat,n.Timer
,n.Navigation,n.Karaoke,n.Game,n.Setup,n.Angle,n.Mode,n.Mute,n.User10,n.User11,n.
User12,n.User13,n.User14,n.User15,n.User16,n.User17,n.User18,n.User19,n.Menu,n.VolumeUp
,n.VolumeDown,n.Show,n.Hide,n.Play,n.Stop,n.Rev,n.Fwd,n.SkipBwd,n.SkipFwd,n.Help
,n.Red,n.Green,n.Blue,n.Yellow,n.White,n.Magenta,n.TV,n.DVD,n.VCR,n.EPG,n.OSD,n.
Text,n.PIP,n.Audio,n.Clock,n.Subtitle,n.Zoom,n.Index,n.Info,n.Display,n.Power,n.
User0,n.User1,n.User2,n.User3,n.User4,n.User5,n.User6,n.User7,n.User8,n.User9];var
aq=lj.length-1;while((aq>=0)&&(lj[aq]!==iW))aq--;if(aq>=0)iW=n6[aq];return iW;}d.
mL=function(ab){var b=this.Core.KeyCode;var ji=ab.type==="keyup";var keyCode=b.NoKey;
var fm=b.NoKey;var charCode=0;if(((ab.type==="keydown")||(ab.type==="keypress"))&&
this.iB){var fR=this.iB.call(this,ab);if(fR&&fR.KeyCode)keyCode=fR.KeyCode;else if(
fR&&fR.dl)charCode=fR.dl;}if((ab.type==="keypress")&&!ab.ctrlKey&&(ab.charCode!==
13)&&(ab.charCode!==8)&&(keyCode===b.NoKey)&&!charCode)charCode=ab.charCode;else
if((ab.type==="keydown")&&(keyCode===b.NoKey)&&!charCode){if(ab.ctrlKey&&ab.shiftKey&&
!ab.altKey)switch(ab.keyCode){case 13:keyCode=b.CtrlShiftEnter;break;case 27:keyCode=
b.CtrlShiftEscape;break;case 8:keyCode=b.CtrlShiftBackspace;break;case 9:keyCode=
b.CtrlShiftTab;break;case 40:keyCode=b.CtrlShiftDown;break;case 38:keyCode=b.CtrlShiftUp;
break;case 37:keyCode=b.CtrlShiftLeft;break;case 39:keyCode=b.CtrlShiftRight;break;
case 36:keyCode=b.CtrlShiftHome;break;case 35:keyCode=b.CtrlShiftEnd;break;case 33:
keyCode=b.CtrlShiftPageUp;break;case 34:keyCode=b.CtrlShiftPageDown;break;case 45:
keyCode=b.CtrlShiftInsert;break;case 46:keyCode=b.CtrlShiftDelete;break;case 112:
keyCode=b.CtrlShiftF1;break;case 113:keyCode=b.CtrlShiftF2;break;case 114:keyCode=
b.CtrlShiftF3;break;case 115:keyCode=b.CtrlShiftF4;break;case 116:keyCode=b.CtrlShiftF5;
break;case 117:keyCode=b.CtrlShiftF6;break;case 118:keyCode=b.CtrlShiftF7;break;
case 119:keyCode=b.CtrlShiftF8;break;case 120:keyCode=b.CtrlShiftF9;break;case 121:
keyCode=b.CtrlShiftF10;break;case 32:keyCode=b.CtrlShiftSpace;break;case 48:keyCode=
b.CtrlShiftKey0;break;case 49:keyCode=b.CtrlShiftKey1;break;case 50:keyCode=b.CtrlShiftKey2;
break;case 51:keyCode=b.CtrlShiftKey3;break;case 52:keyCode=b.CtrlShiftKey4;break;
case 53:keyCode=b.CtrlShiftKey5;break;case 54:keyCode=b.CtrlShiftKey6;break;case
55:keyCode=b.CtrlShiftKey7;break;case 56:keyCode=b.CtrlShiftKey8;break;case 57:keyCode=
b.CtrlShiftKey9;break;case 96:keyCode=b.CtrlShiftKey0;break;case 97:keyCode=b.CtrlShiftKey1;
break;case 98:keyCode=b.CtrlShiftKey2;break;case 99:keyCode=b.CtrlShiftKey3;break;
case 100:keyCode=b.CtrlShiftKey4;break;case 101:keyCode=b.CtrlShiftKey5;break;case
102:keyCode=b.CtrlShiftKey6;break;case 103:keyCode=b.CtrlShiftKey7;break;case 104:
keyCode=b.CtrlShiftKey8;break;case 105:keyCode=b.CtrlShiftKey9;break;case 65:keyCode=
b.CtrlShiftKeyA;break;case 66:keyCode=b.CtrlShiftKeyB;break;case 67:keyCode=b.CtrlShiftKeyC;
break;case 68:keyCode=b.CtrlShiftKeyD;break;case 69:keyCode=b.CtrlShiftKeyE;break;
case 70:keyCode=b.CtrlShiftKeyF;break;case 71:keyCode=b.CtrlShiftKeyG;break;case
72:keyCode=b.CtrlShiftKeyH;break;case 73:keyCode=b.CtrlShiftKeyI;break;case 74:keyCode=
b.CtrlShiftKeyJ;break;case 75:keyCode=b.CtrlShiftKeyK;break;case 76:keyCode=b.CtrlShiftKeyL;
break;case 77:keyCode=b.CtrlShiftKeyM;break;case 78:keyCode=b.CtrlShiftKeyN;break;
case 79:keyCode=b.CtrlShiftKeyO;break;case 80:keyCode=b.CtrlShiftKeyP;break;case
81:keyCode=b.CtrlShiftKeyQ;break;case 82:keyCode=b.CtrlShiftKeyR;break;case 83:keyCode=
b.CtrlShiftKeyS;break;case 84:keyCode=b.CtrlShiftKeyT;break;case 85:keyCode=b.CtrlShiftKeyU;
break;case 86:keyCode=b.CtrlShiftKeyV;break;case 87:keyCode=b.CtrlShiftKeyW;break;
case 88:keyCode=b.CtrlShiftKeyX;break;case 89:keyCode=b.CtrlShiftKeyY;break;case
90:keyCode=b.CtrlShiftKeyZ;break;}else if(ab.ctrlKey&&!ab.shiftKey&&!ab.altKey)switch(
ab.keyCode){case 13:keyCode=b.CtrlEnter;break;case 27:keyCode=b.CtrlEscape;break;
case 8:keyCode=b.CtrlBackspace;break;case 9:keyCode=b.CtrlTab;break;case 40:keyCode=
b.CtrlDown;break;case 38:keyCode=b.CtrlUp;break;case 37:keyCode=b.CtrlLeft;break;
case 39:keyCode=b.CtrlRight;break;case 36:keyCode=b.CtrlHome;break;case 35:keyCode=
b.CtrlEnd;break;case 33:keyCode=b.CtrlPageUp;break;case 34:keyCode=b.CtrlPageDown;
break;case 45:keyCode=b.CtrlInsert;break;case 46:keyCode=b.CtrlDelete;break;case
112:keyCode=b.CtrlF1;break;case 113:keyCode=b.CtrlF2;break;case 114:keyCode=b.CtrlF3;
break;case 115:keyCode=b.CtrlF4;break;case 116:keyCode=b.CtrlF5;break;case 117:keyCode=
b.CtrlF6;break;case 118:keyCode=b.CtrlF7;break;case 119:keyCode=b.CtrlF8;break;case
120:keyCode=b.CtrlF9;break;case 121:keyCode=b.CtrlF10;break;case 32:keyCode=b.CtrlSpace;
break;case 48:keyCode=b.CtrlKey0;break;case 49:keyCode=b.CtrlKey1;break;case 50:
keyCode=b.CtrlKey2;break;case 51:keyCode=b.CtrlKey3;break;case 52:keyCode=b.CtrlKey4;
break;case 53:keyCode=b.CtrlKey5;break;case 54:keyCode=b.CtrlKey6;break;case 55:
keyCode=b.CtrlKey7;break;case 56:keyCode=b.CtrlKey8;break;case 57:keyCode=b.CtrlKey9;
break;case 96:keyCode=b.CtrlKey0;break;case 97:keyCode=b.CtrlKey1;break;case 98:
keyCode=b.CtrlKey2;break;case 99:keyCode=b.CtrlKey3;break;case 100:keyCode=b.CtrlKey4;
break;case 101:keyCode=b.CtrlKey5;break;case 102:keyCode=b.CtrlKey6;break;case 103:
keyCode=b.CtrlKey7;break;case 104:keyCode=b.CtrlKey8;break;case 105:keyCode=b.CtrlKey9;
break;case 65:keyCode=b.CtrlKeyA;break;case 66:keyCode=b.CtrlKeyB;break;case 67:
keyCode=b.CtrlKeyC;break;case 68:keyCode=b.CtrlKeyD;break;case 69:keyCode=b.CtrlKeyE;
break;case 70:keyCode=b.CtrlKeyF;break;case 71:keyCode=b.CtrlKeyG;break;case 72:
keyCode=b.CtrlKeyH;break;case 73:keyCode=b.CtrlKeyI;break;case 74:keyCode=b.CtrlKeyJ;
break;case 75:keyCode=b.CtrlKeyK;break;case 76:keyCode=b.CtrlKeyL;break;case 77:
keyCode=b.CtrlKeyM;break;case 78:keyCode=b.CtrlKeyN;break;case 79:keyCode=b.CtrlKeyO;
break;case 80:keyCode=b.CtrlKeyP;break;case 81:keyCode=b.CtrlKeyQ;break;case 82:
keyCode=b.CtrlKeyR;break;case 83:keyCode=b.CtrlKeyS;break;case 84:keyCode=b.CtrlKeyT;
break;case 85:keyCode=b.CtrlKeyU;break;case 86:keyCode=b.CtrlKeyV;break;case 87:
keyCode=b.CtrlKeyW;break;case 88:keyCode=b.CtrlKeyX;break;case 89:keyCode=b.CtrlKeyY;
break;case 90:keyCode=b.CtrlKeyZ;break;}else if(!ab.ctrlKey&&!ab.shiftKey&&!ab.altKey
)switch(ab.keyCode){case 13:keyCode=b.Enter;break;case 27:keyCode=b.Escape;break;
case 8:keyCode=b.Backspace;break;case 9:keyCode=b.Tab;break;case 40:keyCode=b.Down;
break;case 38:keyCode=b.Up;break;case 37:keyCode=b.Left;break;case 39:keyCode=b.
Right;break;case 36:keyCode=b.Home;break;case 35:keyCode=b.End;break;case 33:keyCode=
b.PageUp;break;case 34:keyCode=b.PageDown;break;case 45:keyCode=b.Insert;break;case
46:keyCode=b.Delete;break;case 112:keyCode=b.F1;break;case 113:keyCode=b.F2;break;
case 114:keyCode=b.F3;break;case 115:keyCode=b.F4;break;case 116:keyCode=b.F5;break;
case 117:keyCode=b.F6;break;case 118:keyCode=b.F7;break;case 119:keyCode=b.F8;break;
case 120:keyCode=b.F9;break;case 121:keyCode=b.F10;break;}else if(!ab.ctrlKey&&!
ab.shiftKey&&ab.altKey)switch(ab.keyCode){case 13:keyCode=b.AltEnter;break;case 27:
keyCode=b.AltEscape;break;case 8:keyCode=b.AltBackspace;break;case 9:keyCode=b.AltTab;
break;case 40:keyCode=b.AltDown;break;case 38:keyCode=b.AltUp;break;case 37:keyCode=
b.AltLeft;break;case 39:keyCode=b.AltRight;break;case 36:keyCode=b.AltHome;break;
case 35:keyCode=b.AltEnd;break;case 33:keyCode=b.AltPageUp;break;case 34:keyCode=
b.AltPageDown;break;case 45:keyCode=b.AltInsert;break;case 46:keyCode=b.AltDelete;
break;case 112:keyCode=b.AltF1;break;case 113:keyCode=b.AltF2;break;case 114:keyCode=
b.AltF3;break;case 115:keyCode=b.AltF4;break;case 116:keyCode=b.AltF5;break;case
117:keyCode=b.AltF6;break;case 118:keyCode=b.AltF7;break;case 119:keyCode=b.AltF8;
break;case 120:keyCode=b.AltF9;break;case 121:keyCode=b.AltF10;break;}else if(!ab.
ctrlKey&&ab.shiftKey&&ab.altKey)switch(ab.keyCode){case 13:keyCode=b.AltShiftEnter;
break;case 27:keyCode=b.AltShiftEscape;break;case 8:keyCode=b.AltShiftBackspace;
break;case 9:keyCode=b.AltShiftTab;break;case 40:keyCode=b.AltShiftDown;break;case
38:keyCode=b.AltShiftUp;break;case 37:keyCode=b.AltShiftLeft;break;case 39:keyCode=
b.AltShiftRight;break;case 36:keyCode=b.AltShiftHome;break;case 35:keyCode=b.AltShiftEnd;
break;case 33:keyCode=b.AltShiftPageUp;break;case 34:keyCode=b.AltShiftPageDown;
break;case 45:keyCode=b.AltShiftInsert;break;case 46:keyCode=b.AltShiftDelete;break;
case 112:keyCode=b.AltShiftF1;break;case 113:keyCode=b.AltShiftF2;break;case 114:
keyCode=b.AltShiftF3;break;case 115:keyCode=b.AltShiftF4;break;case 116:keyCode=
b.AltShiftF5;break;case 117:keyCode=b.AltShiftF6;break;case 118:keyCode=b.AltShiftF7;
break;case 119:keyCode=b.AltShiftF8;break;case 120:keyCode=b.AltShiftF9;break;case
121:keyCode=b.AltShiftF10;break;}else if(!ab.ctrlKey&&ab.shiftKey&&!ab.altKey)switch(
ab.keyCode){case 13:keyCode=b.ShiftEnter;break;case 27:keyCode=b.ShiftEscape;break;
case 8:keyCode=b.ShiftBackspace;break;case 9:keyCode=b.ShiftTab;break;case 40:keyCode=
b.ShiftDown;break;case 38:keyCode=b.ShiftUp;break;case 37:keyCode=b.ShiftLeft;break;
case 39:keyCode=b.ShiftRight;break;case 36:keyCode=b.ShiftHome;break;case 35:keyCode=
b.ShiftEnd;break;case 33:keyCode=b.ShiftPageUp;break;case 34:keyCode=b.ShiftPageDown;
break;case 45:keyCode=b.ShiftInsert;break;case 46:keyCode=b.ShiftDelete;break;case
112:keyCode=b.ShiftF1;break;case 113:keyCode=b.ShiftF2;break;case 114:keyCode=b.
ShiftF3;break;case 115:keyCode=b.ShiftF4;break;case 116:keyCode=b.ShiftF5;break;
case 117:keyCode=b.ShiftF6;break;case 118:keyCode=b.ShiftF7;break;case 119:keyCode=
b.ShiftF8;break;case 120:keyCode=b.ShiftF9;break;case 121:keyCode=b.ShiftF10;break;
}fm=mr(keyCode,b);if(fm===this.cA)keyCode=this.cA;else if(keyCode===this.cA)fm=this.
cA;}if((keyCode===b.NoKey)&&!charCode&&(!ji||((this.cA===b.NoKey)&&!this.dH)))return;
try{if((this.cA!==b.NoKey)&&((keyCode!==this.cA)||ji)){this.bp.DriveKeyboardHitting(
this.cA,0,false);this.cA=b.NoKey;}if(this.dH&&((charCode!==this.dH)||ji)){this.bp.
DriveKeyboardHitting(b.NoKey,this.dH,false);this.dH=0;}if(charCode&&this.bp.DriveKeyboardHitting(
b.NoKey,charCode,true))this.dH=charCode;else if((fm!==keyCode)&&(fm!==b.NoKey)&&
this.bp.DriveKeyboardHitting(fm,0,true))this.cA=fm;else if((keyCode!==b.NoKey)&&
this.bp.DriveKeyboardHitting(keyCode,0,true))this.cA=keyCode;this.cB();}catch(bc
){console.log("EmWi error: "+bc+"!");}ab.stopPropagation();ab.preventDefault();};
d.mK=function(ab){var b=this.Core.KeyCode;try{if(this.cA!==b.NoKey){if(this.bp.DriveKeyboardHitting
)this.bp.DriveKeyboardHitting(this.cA,0,false);else{var gJ=this._NewObject(this.
Core.KeyEvent,0);gJ.Initialize(this.cA,false);this.bp.DispatchEvent(gJ);}this.cA=
b.NoKey;this.cB();}if(this.dH){if(this.bp.DriveKeyboardHitting)this.bp.DriveKeyboardHitting(
b.NoKey,this.dH,false);else{var gJ=this._NewObject(this.Core.KeyEvent,0);gJ.Initialize2(
this.dH,false);this.bp.DispatchEvent(gJ);}this.dH=0;this.cB();}}catch(bc){console.
log("EmWi error: "+bc+"!");}};function ii(ab,cC){ab.stopPropagation();ab.preventDefault(
);var ae=ab.clientX+window.pageXOffset;var av=ab.clientY+window.pageYOffset;var dy=
cC;for(;dy;dy=dy.offsetParent){ae-=dy.offsetLeft;av-=dy.offsetTop;}ae=((cC.width
*ae)/cC.offsetWidth)|0;av=((cC.height*av)/cC.offsetHeight)|0;return[ae,av];};d.mM=
function(ab){if(this.dr||ab.nk)return;this.c5.focus();document.addEventListener(
"mousemove",this.fB,true);document.addEventListener("mouseup",this.hg,true);this.
dr=true;var ai=ii(ab,this.c5);try{this.bp.DriveCursorHitting(true,0,ai);this.cB(
);}catch(bc){console.log("EmWi error: "+bc+"!");}};d.mO=function(ab){if(!this.dr||
ab.nk)return;document.removeEventListener("mousemove",this.fB,true);document.removeEventListener(
"mouseup",this.hg,true);this.dr=false;var ai=ii(ab,this.c5);try{this.bp.DriveCursorHitting(
false,0,ai);this.cB();}catch(bc){console.log("EmWi error: "+bc+"!");}};d.mN=function(
ab){if(!this.dr)return;var ai=ii(ab,this.c5);try{this.bp.DriveCursorMovement(ai);
this.cB();}catch(bc){console.log("EmWi error: "+bc+"!");}};function ij(ab,kw,cC){
var touches=ab.changedTouches;var g0=null;for(var e=0;!g0&&(e<touches.length);e++
)if((kw===-1)||(touches[e].n2===kw))g0=touches[e];if(!g0)return null;ab.stopPropagation(
);ab.preventDefault();var ae=g0.clientX;var av=g0.clientY;var dy=cC;for(;dy;dy=dy.
offsetParent){ae-=dy.offsetLeft;av-=dy.offsetTop;}ae=((cC.width*ae)/cC.offsetWidth
)|0;av=((cC.height*av)/cC.offsetHeight)|0;return[ae,av];}d.mS=function(ab){var ai;
if(this.dr||!(ai=ij(ab,-1,this.c5)))return;this.c5.focus();this.fF=ab.touches[0].
n2;this.dr=true;try{this.bp.DriveCursorHitting(true,0,ai);this.cB();}catch(bc){console.
log("EmWi error: "+bc+"!");}};d.mQ=function(ab){var ai;if(!this.dr||(this.fF===-
1)||!(ai=ij(ab,this.fF,this.c5)))return;this.dr=false;this.fF=-1;try{this.bp.DriveCursorHitting(
false,0,ai);this.cB();}catch(bc){console.log("EmWi error: "+bc+"!");}};d.mR=function(
ab){var ai;if(!this.dr||(this.fF===-1)||!(ai=ij(ab,this.fF,this.c5)))return;try{
this.bp.DriveCursorMovement(ai);this.cB();}catch(bc){console.log("EmWi error: "+
bc+"!");}};d._Init=function(cC,c$){var df=this;var au=document.getElementById(cC
);var kD=this.j5();var a=null;var af={};var bitmap={};this.mH=(new Date()).getTime(
);if(c$&&c$.hasOwnProperty("Debug"))this.aX=c$.Debug;if(c$&&c$.hasOwnProperty("FullScreenUpdate"
))this.hc=c$.FullScreenUpdate;if(c$&&c$.hasOwnProperty("Alpha"))this.ix=c$.Alpha;
if(c$&&c$.hasOwnProperty("OnKeyEvent"))this.iB=c$.OnKeyEvent;if(this.aX)console.
log("EmWi debug: Initializing application '"+kD._className+"'.");console.log("EmWi info: Init application for canvas '"+
cC+"'. "+"FullScreenUpdate="+this.hc+", "+"Alpha="+this.ix+", "+"Debug="+this.aX+
".");if(!au){console.log("EmWi error: Initialization failed. The canvas element '"+
cC+"' doesn't exist!");return false;}var kF={depth:false,antialias:false,alpha:this.
ix,preserveDrawingBuffer:!this.hc};a=au.getContext("webgl",kF)||au.getContext("experimental-webgl"
,kF);if(!a){console.log("EmWi error: WebGL context creation failed.");return false;
}this.eT=a.getParameter(a.MAX_TEXTURE_SIZE);if(this.mG>this.eT)this.mG=this.eT;this.
mF=(this.he/this.eS)|0;a.clearColor(0.0,0.0,0.0,0.0);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL
,true);a.pixelStorei(a.UNPACK_ALIGNMENT,1);a.blendEquation(a.FUNC_ADD);a.blendFunc(
a.ONE,a.ONE_MINUS_SRC_ALPHA);a.disable(a.BLEND);a.bW=new ArrayBuffer(14*6*4);a.fo=
new Float32Array(a.bW);a.ga=new Uint32Array(a.bW);a.ia=0;a.ic=1;a.ib=2;a.bindBuffer(
a.ARRAY_BUFFER,a.createBuffer());a.bufferData(a.ARRAY_BUFFER,a.bW,a.STREAM_DRAW);
a.vertexAttribPointer(a.ia,2,a.FLOAT,false,6*4,0*4);a.vertexAttribPointer(a.ic,3
,a.FLOAT,false,6*4,2*4);a.vertexAttribPointer(a.ib,4,a.UNSIGNED_BYTE,true,6*4,5*
4);a.enableVertexAttribArray(a.ia);a.enableVertexAttribArray(a.ic);a.enableVertexAttribArray(
a.ib);this.gi=a.createTexture();a.bindTexture(a.TEXTURE_2D,this.gi);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER
,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texImage2D(a.TEXTURE_2D,0,a.ALPHA
,this.he,this.he,0,a.ALPHA,a.UNSIGNED_BYTE,null);this.fA=new Uint32Array(this.eS
*this.eS/32);af.Framebuffer=a.getParameter(a.FRAMEBUFFER_BINDING);af.Format=this.
bG;af.Width=au.width;af.Height=au.height;af.gh=au.width;af.gg=au.height;af.c4=1/
au.width;af.c3=1/au.height;af.dE=2/au.width;af.dD=2/au.height;af.b6=null;bitmap.
Format=this.bG;bitmap.b1=[af];bitmap.FrameSize=[au.width,au.height];bitmap.FrameDelay=
0;bitmap.NoOfFrames=1;bitmap.bw=[{aw:bitmap.b1[0],aD:[0,0]}];if(!me(a)){console.
log("EmWi error: WebGL initialization failed.");return false;}if(this.aX)dq(a);a.
l0=[0,0,0,-1,0,0,0,-1,0,0,0,0,0,0,0,1];this.c5=au;this.aW=a;this.eR=bitmap;try{this.
bp=this._NewObject(kD,0);this.bp.Initialize(this.pR);}catch(bc){console.log("EmWi error: "+
bc+"!");this._Done();return false;}function ll(ab){df.mM(ab);}function n9(ab){df.
mO(ab);}function jm(ab){df.mN(ab);}function lJ(ab){df.mS(ab);}function ju(ab){df.
mQ(ab);}function lI(ab){df.mR(ab);}function h2(ab){df.mL(ab);}function kG(ab){df.
mK(ab);}this.iA=ll;this.hg=n9;this.fB=jm;this.kc=lJ;this.iK=ju;this.kb=lI;this.hf=
h2;this.oD=kG;au.addEventListener("mousedown",ll,true);au.addEventListener("mousemove"
,jm,false);au.addEventListener("mouseout",jm,false);au.addEventListener("touchstart"
,lJ,true);au.addEventListener("touchend",ju,false);au.addEventListener("touchcancel"
,ju,false);au.addEventListener("touchmove",lI,false);au.addEventListener("keydown"
,h2,true);au.addEventListener("keyup",h2,false);au.addEventListener("keypress",h2
,false);au.addEventListener("blur",kG,false);this.cB();this.ka();this._LockObject(
this.bp);au.focus();return true;};d._Done=function(){if(this.aX)console.log("EmWi debug: De-Initializing application '"+
this.j5()._className+"'.");if(this.c5&&this.iA){var au=this.c5;au.removeEventListener(
"mousedown",this.iA,true);au.removeEventListener("mousemove",this.fB,false);au.removeEventListener(
"mouseout",this.fB,false);au.removeEventListener("touchstart",this.kc,true);au.removeEventListener(
"touchend",this.iK,false);au.removeEventListener("touchcancel",this.iK,false);au.
removeEventListener("touchmove",this.kb,false);au.removeEventListener("keydown",
this.hf,true);au.removeEventListener("keyup",this.hf,false);au.removeEventListener(
"keypress",this.hf,false);document.removeEventListener("mousemove",this.fB,true);
document.removeEventListener("mouseup",this.hg,true);delete this.iA;delete this.
hg;delete this.fB;delete this.kc;delete this.iK;delete this.kb;delete this.hf;}if(
this.aW){fx(this.aW,null);cL(this.aW,null,null);this.aW.clear(this.aW.COLOR_BUFFER_BIT
);this.aW.flush();this.aW.finish();this.aW.gf=null;this.aW.fu=null;this.aW.fv=null;
this.aW.g_=null;this.aW.fw=null;this.aW.g$=null;this.aW.eQ=null;this.aW.ha=null;
dq(this.aW);}while(this.eh)iv(this,this.eh);this.gi=null;this.fA=null;this.eh=null;
this.hd=null;this.eR=null;this.aW=null;this.c5=null;this.cm=null;this.cT=null;if(
this.bp)this._UnlockObject(this.bp);this.bp=null;try{this.j$();}catch(bc){console.
log("EmWi error: "+bc+"!");}if(this.aX)console.log("EmWi debug: "+this.eU+" objects after the final GC run."
);this.fE=[];this.fC=null;this.eU=0;this.j7=0;this.gl=false;this.gk=false;this.dr=
false;};d.pu=function(ao,ac){return[ao[0]+ac[0],ao[1]+ac[1],ao[2]+ac[0],ao[3]+ac[
1]];};d.pt=function(ao,ac){return[ao[0]-ac[0],ao[1]-ac[1],ao[2]-ac[0],ao[3]-ac[1
]];};d.gj=function(bN,bO){var bs=bN[0];var bu=bN[1];var bt=bN[2];var bv=bN[3];var
cv=bO[0];var cx=bO[1];var cw=bO[2];var cy=bO[3];if(bt<=bs)bs=bt=0;if(bv<=bu)bu=bv=
0;if(cw<=cv)cv=cw=0;if(cy<=cx)cx=cy=0;if(bs<cv)bs=cv;if(bt>cw)bt=cw;if(bu<cx)bu=
cx;if(bv>cy)bv=cy;if(bt<=bs)bs=bt=0;if(bv<=bu)bu=bv=0;return[bs,bu,bt,bv];};d.pd=
function(bN,bO){var bs=bN[0];var bu=bN[1];var bt=bN[2];var bv=bN[3];var cv=bO[0];
var cx=bO[1];var cw=bO[2];var cy=bO[3];if(bt<=bs)bs=bt=0;if(bv<=bu)bu=bv=0;if(cw<=
cv)cv=cw=0;if(cy<=cx)cx=cy=0;if((bs===bt)||(bu===bv))return bO;if((cv===cw)||(cx===
cy))return bN;if(bs<cv)bs=cv;if(bt>cw)bt=cw;if(bu<cx)bu=cx;if(bv>cy)bv=cy;if(bt<=
bs)bs=bt=0;if(bv<=bu)bu=bv=0;return[bs,bu,bt,bv];};d.mW=function(bN,bO){var bs=bN[
0];var bu=bN[1];var bt=bN[2];var bv=bN[3];var cv=bO[0];var cx=bO[1];var cw=bO[2];
var cy=bO[3];if(bt<=bs)bs=bt=0;if(bv<=bu)bu=bv=0;if(cw<=cv)cv=cw=0;if(cy<=cx)cx=
cy=0;if((bs===bt)||(bu===bv))return bO;if((cv===cw)||(cx===cy))return bN;if(bs>cv
)bs=cv;if(bt<cw)bt=cw;if(bu>cx)bu=cx;if(bv<cy)bv=cy;if(bt<=bs)bs=bt=0;if(bv<=bu)
bu=bv=0;return[bs,bu,bt,bv];};d.pa=function(ao,hm){return[ao[0]-hm[0],ao[1]-hm[1
],ao[2]+hm[0],ao[3]+hm[1]];};d.p2=function(ao,nj){return[ao[0],nj,ao[2],ao[3]];};
d.p0=function(ao,ni){return[ao[0],ao[1],ni,ao[3]];};d.pZ=function(ao,aZ){return[
aZ,ao[1],aZ+ao[2]-ao[0],ao[3]];};d.p1=function(ao,a4){return[ao[0],a4,ao[2],a4+ao[
3]-ao[1]];};d.pY=function(ao,nh){return[ao[0],ao[1],ao[0]+nh,ao[3]];};d.pV=function(
ao,m3){return[ao[0],ao[1],ao[2],ao[1]+m3];};d.pW=function(ao,hq){return[hq[0],hq[
1],hq[0]+ao[2]-ao[0],hq[1]+ao[3]-ao[1]];};d.pX=function(ao,aP){return[ao[0],ao[1
],ao[0]+aP[0],ao[1]+aP[1]];};d.pf=function(bN,bO){return(bN[0]===bO[0])&&(bN[1]===
bO[1])&&(bN[2]===bO[2])&&(bN[3]===bO[3]);};d.pi=function(ao,dI){if((dI[0]<ao[0])||(
dI[0]>=ao[2]))return false;if((dI[1]<ao[1])||(dI[1]>=ao[3]))return false;return true;
};d.o4=function(ao){return(ao[2]-ao[0])*(ao[3]-ao[1]);};d.o5=function(ao){var ae=
ao[0];var av=ao[1];return[ae+((ao[2]-ae)/2),av+((ao[3]-av)/2)];};d.ps=function(dI
,ac){return[dI[0]+ac[0],dI[1]+ac[1]];};d.pr=function(dI,ac){return[dI[0]-ac[0],dI[
1]-ac[1]];};d.pe=function(kr,ks){return(kr[0]===ks[0])&&(kr[1]===ks[1]);};d.pI=function(
aO,aU){var am=(aO&0xFF)+(aU&0xFF);var b2=((aO>>8)&0xFF)+((aU>>8)&0xFF);var aJ=((
aO>>16)&0xFF)+((aU>>16)&0xFF);var bk=((aO>>24)&0xFF)+((aU>>24)&0xFF);if(am>255)am=
255;if(b2>255)b2=255;if(aJ>255)aJ=255;if(bk>255)bk=255;return am|(b2<<8)|(aJ<<16
)|(bk<<24);};d.pq=function(aO,aU){var am=(aO&0xFF)-(aU&0xFF);var b2=((aO>>8)&0xFF
)-((aU>>8)&0xFF);var aJ=((aO>>16)&0xFF)-((aU>>16)&0xFF);var bk=((aO>>24)&0xFF)-((
aU>>24)&0xFF);if(am<0)am=0;if(b2<0)b2=0;if(aJ<0)aJ=0;if(bk<0)bk=0;return am|(b2<<
8)|(aJ<<16)|(bk<<24);};d.oB=function(aO,aU){var am=(aU&0xFF);var b2=((aU>>8)&0xFF
);var aJ=((aU>>16)&0xFF);var bk=((aU>>24)&0xFF);var h3=255-bk;am=((am*bk)+((aO&0xFF
)*h3))/255;b2=((b2*bk)+(((aO>>8)&0xFF)*h3))/255;aJ=((aJ*bk)+(((aO>>16)&0xFF)*h3)
)/255;bk=255-((h3*(255-((aO>>24)&0xFF)))/255);if(am>255)am=255;if(b2>255)b2=255;
if(aJ>255)aJ=255;if(bk>255)bk=255;return am|(b2<<8)|(aJ<<16)|(bk<<24);};d.oC=function(
b7,ej){var am=(b7&0xFF);var b2=((b7>>8)&0xFF);var aJ=((b7>>16)&0xFF);var bk=((b7>>
24)&0xFF);if(ej<0)ej=0;if(ej>255)ej=255;am=(am*ej)/255;b2=(b2*ej)/255;aJ=(aJ*ej)
/255;bk=(bk*ej)/255;return am|(b2<<8)|(aJ<<16)|(bk<<24);};d.pz=function(da,an,bB
){if((bB!==2)&&(bB!==8)&&(bB!==16))bB=10;if(an>128)an=128;var g=da.toString(bB);
var eO=an-g.length;if(eO>0)g=d.hk.slice(0,eO)+g;return g;};d.py=function(da,an,bB
){if((bB!==2)&&(bB!==8)&&(bB!==16))bB=10;var fn=(da<0)?-da:da;if(an>128)an=128;var
g=fn.toString(bB);var eO=an-g.length-((da<0)?1:0);if(eO>0)g=d.hk.slice(0,eO)+g;if(
da<0)return"-"+g;else return g;};d.px=function(da,an,gv){if(an<0)an=0;if(an>32)an=
32;if(gv<0)gv=0;if(gv>32)gv=32;var lC=(da<0)?"-":"";var g=Math.abs(da).toFixed(gv
);var eO=an-g.length-lC.length;if(eO>0)g=d.hk.slice(0,eO)+g;return lC+g;};d.pw=function(
iU,an){an=Math.floor(an);if(an<=0)return this.fy;return new Array(an+1).join(String.
fromCharCode(iU));};d.p7=function(k,an){if(an<=0)return this.fy;if(an>=k.length)
return k;return k.slice(0,an|0);};d.qb=function(k,an){if(an<=0)return this.fy;if(
an>=k.length)return k;return k.slice(-(an|0));};d.p8=function(k,cf,an){var bj=(cf>
0)?(cf|0):0;var dc=(cf+an)|0;var bD=k.length;if((bj>=bD)||(dc<=0)||(bj>=dc))return this.
fy;if((bj===0)&&(dc>=bD))return k;return k.slice(bj,dc);};d.p6=function(fM,gC,cf
){var lE=fM.length;var ob=gC.length;if(ob<=0)return fM;if(lE<=0)return gC;if(cf<
0)return gC+fM;if(cf>=lE)return fM+gC;return fM.slice(0,(cf|=0))+gC+fM.slice(cf);
};d.qa=function(k,cf,an){var bj=(cf>=0)?(cf|0):0;var dc=(cf+an)|0;var bD=k.length;
if((bj>=bD)||(dc<=0)||(bj>=dc))return k;return k.slice(0,bj)+k.slice(dc);};d.p_=
function(k,gt,bB){if((bB!==2)&&(bB!==8)&&(bB!==16))bB=10;var g=parseInt(k,bB);if(
!isNaN(g))return g;return gt;};d.p$=function(k,gt,bB){if((bB!==2)&&(bB!==8)&&(bB
!==16))bB=10;var g=parseInt(k,bB);if(!isNaN(g)){if(g<0)g+=0x100000000;return g;}
return gt;};d.p9=function(k,gt){var g=parseFloat(k);if(!isNaN(g))return g;return gt;
};d.p3=function(k,cf,iU){if((cf<0)||(cf>=k.length))return k;return k.slice(0,cf)+
String.fromCharCode(iU)+k.slice(cf+1);};d.pg=function(gw,gx){if(!gw&&!gx)return true;
if(!gw||!gx)return false;return(gw[0]===gx[0])&&(gw[1]===gx[1])&&(gw[2]===gx[2]);
};d.ph=function(hr,hs){if(!hr&&!hs)return true;if(!hr||!hs)return false;return(hr[
0]===hs[0])&&(hr[1]===hs[1]);};d.pN=function(gD,i5){return(gD+((i5-gD)*Math.random(
)))|0;};d.pM=function(gD,i5){return gD+((i5-gD)*Math.random());};function dq(h){
var kC=false;var k9;while((k9=h.getError())!==h.NO_ERROR){console.log("EmWi error: WebGL error '"+
k9+"' reported.");kC=true;}return kC;}var mv="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+
"attribute highp   vec2 dst_pos;\n"+"\n"+"void main()\n"+"{\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var mw="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute lowp    vec4 src_clr;\n"+"varying   lowp    vec4 src_clr_var;\n"+"\n"+
"void main()\n"+"{\n"+"  src_clr_var = vec4( src_clr.rgb * src_clr.a, src_clr.a );\n"+
"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+"}\n";var mx=
"precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute highp   vec3 src_pos;\n"+"varying   highp   vec3 src_pos_var;\n"+"\n"+
"void main()\n"+"{\n"+"  src_pos_var = src_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var my="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute highp   vec3 src_pos;\n"+"attribute lowp    vec4 src_clr;\n"+"varying   highp   vec3 src_pos_var;\n"+
"varying   lowp    vec4 src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  src_clr_var = vec4( src_clr.rgb * src_clr.a, src_clr.a );\n"+
"  src_pos_var = src_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var l3="precision mediump float;\n"+"void main()\n"+"{\n"+"  gl_FragColor = vec4( 0.0, 0.0, 0.0, 0.0 );\n"+
"}\n";var l4="precision mediump float;\n"+"varying   lowp vec4 src_clr_var;\n"+"\n"+
"void main()\n"+"{\n"+"  gl_FragColor = src_clr_var;\n"+"}\n";var l5="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy );\n"+
"}\n";var l6="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var );\n"+
"}\n";var l7="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy ) * src_clr_var.a;\n"+
"}\n";var l8="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var ) * src_clr_var.a;\n"+
"}\n";var l9="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy ).a * src_clr_var;\n"+
"}\n";var l_="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var ).a * src_clr_var;\n"+
"}\n";var l$="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+
"uniform   highp   vec2      src_ofs;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size );\n"+
"}\n";var ma="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+
"uniform   highp   vec2      src_ofs;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size )\n"+
"                            * src_clr_var.a;\n"+"}\n";var mb="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+"uniform   highp   vec2      src_ofs;\n"+
"varying   highp   vec3      src_pos_var;\n"+"varying   lowp    vec4      src_clr_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size ).a\n"+
"                            * src_clr_var;\n"+"}\n";function me(h){var ok=cz(h,
h.VERTEX_SHADER,mv);var ol=cz(h,h.VERTEX_SHADER,mw);var jv=cz(h,h.VERTEX_SHADER,
mx);var f$=cz(h,h.VERTEX_SHADER,my);var nQ=cz(h,h.FRAGMENT_SHADER,l3);var nR=cz(
h,h.FRAGMENT_SHADER,l4);var nS=cz(h,h.FRAGMENT_SHADER,l5);var nT=cz(h,h.FRAGMENT_SHADER
,l6);var nU=cz(h,h.FRAGMENT_SHADER,l7);var nV=cz(h,h.FRAGMENT_SHADER,l8);var nW=
cz(h,h.FRAGMENT_SHADER,l9);var nX=cz(h,h.FRAGMENT_SHADER,l_);var nY=cz(h,h.FRAGMENT_SHADER
,l$);var nZ=cz(h,h.FRAGMENT_SHADER,ma);var n0=cz(h,h.FRAGMENT_SHADER,mb);h.gf=dp(
h,ok,nQ);h.fu=dp(h,ol,nR);h.fv=dp(h,jv,nS);h.g_=dp(h,jv,nT);h.fw=dp(h,f$,nU);h.g$=
dp(h,f$,nV);h.eQ=dp(h,f$,nW);h.ha=dp(h,f$,nX);h.is=dp(h,jv,nY);h.it=dp(h,f$,nZ);
h.iu=dp(h,f$,n0);if(h.gf&&h.fu&&h.fv&&h.g_&&h.fw&&h.g$&&h.eQ&&h.ha&&h.is&&h.it&&
h.iu)return true;h.gf=null;h.fu=null;h.fv=null;h.g_=null;h.fw=null;h.g$=null;h.eQ=
null;h.ha=null;h.is=null;h.it=null;h.iu=null;return false;}function cz(h,nb,nc){
var gU=h.createShader(nb);h.shaderSource(gU,nc);h.compileShader(gU);var fi=h.getShaderParameter(
gU,h.COMPILE_STATUS);var log=h.getShaderInfoLog(gU);if(fi&&log.length)console.log(
"EmWi info: "+log);if(!fi)console.log("EmWi error: "+log);if(!fi)return null;return gU;
}function dp(h,ky,kl){var ci=h.createProgram();if(!ky||!kl)return null;h.attachShader(
ci,ky);h.attachShader(ci,kl);h.bindAttribLocation(ci,h.ia,"dst_pos");h.bindAttribLocation(
ci,h.ic,"src_pos");h.bindAttribLocation(ci,h.ib,"src_clr");h.linkProgram(ci);var
fi=h.getProgramParameter(ci,h.LINK_STATUS);var log=h.getProgramInfoLog(ci);if(fi&&
log.length)console.log("EmWi info: "+log);if(!fi)console.log("EmWi error: "+log);
if(!fi)return null;var og=h.getUniformLocation(ci,"dst_map");var lL=h.getUniformLocation(
ci,"src");var oh=h.getUniformLocation(ci,"src_ofs");var oi=h.getUniformLocation(
ci,"src_size");h.useProgram(ci);if(lL>=0)h.uniform1i(lL,0);ci.ms=og;ci.mt=oh;ci.
mu=oi;return ci;}function cL(h,s,du){if(s!==h.jV){if(s&&s.b6&&!s.Framebuffer){s.
Framebuffer=h.createFramebuffer();h.bindFramebuffer(h.FRAMEBUFFER,s.Framebuffer);
h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,s.b6,0);}else
if(s)h.bindFramebuffer(h.FRAMEBUFFER,s?s.Framebuffer:null);if(s)h.viewport(0,0,s.
gh,s.gg);h.jV=s;}if(h.lV!==du){h.useProgram(du);h.lV=du;}if(s&&du&&((s.dE!==du.dE
)||(s.dD!==du.dD)||(!!s.b6!==!!du.b6))){var fe=h.l0;if(s.b6){fe[0]=s.dE;fe[5]=s.
dD;fe[7]=-1;}else{fe[0]=s.dE;fe[5]=-s.dD;fe[7]=1;}h.uniformMatrix4fv(du.ms,false
,fe);du.dE=s.dE;du.dD=s.dD;du.b6=!!s.b6;}if(s&&s.g4){h.clear(h.COLOR_BUFFER_BIT);
s.g4=false;}}function fx(h,at,el){if(at!==h.ed){if(at)h.bindTexture(h.TEXTURE_2D
,at.b6);h.ed=at;}if(at&&(!at.l1!==!el)){if(el){h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MIN_FILTER
,h.LINEAR);h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MAG_FILTER,h.LINEAR);}else{h.texParameteri(
h.TEXTURE_2D,h.TEXTURE_MIN_FILTER,h.NEAREST);h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MAG_FILTER
,h.NEAREST);}at.l1=el;}}function aF(aO,aU,fK){if(fK<=0)return aO;if(fK>=1)return aU;
var i8=(aO&0xFF);var i9=((aO>>8)&0xFF);var i_=((aO>>16)&0xFF);var i$=((aO>>24)&0xFF
);var nl=(aU&0xFF);var nm=((aU>>8)&0xFF);var nn=((aU>>16)&0xFF);var no=((aU>>24)&
0xFF);i8+=(nl-i8)*fK;i9+=(nm-i9)*fK;i_+=(nn-i_)*fK;i$+=(no-i$)*fK;return i8|(i9<<
8)|(i_<<16)|(i$<<24);}function g6(a3,e6,bM,i4,cX){for(var e=0;e<(bM-(i4?1:0));e++
){var bn=e;var ca=(e+1)%bM;var hX=a3[bn*6];var jf=a3[ca*6];if(((cX>hX)&&(cX<jf))||((
cX<hX)&&(cX>jf))){var cZ=(cX-hX)/(jf-hX);var d9=1.0-cZ;var dz=(bM-e-1)*6;if(dz>0
){var bj=(e+1)*6;a3.set(a3.subarray(bj,bj+dz),bj+6);}bM++;if(ca)ca++;e++;var j=a3[
bn=bn*6+1];var bE=a3[bn+=1];var bF=a3[bn+=1];var c2=a3[bn+=1];var d4=e6[bn+1];var
o=a3[ca=ca*6+1];var b3=a3[ca+=1];var br=a3[ca+=1];var d$=a3[ca+=1];var gE=e6[ca+
1];if(j!==o)j=j*d9+o*cZ;if(bE!==b3)bE=bE*d9+b3*cZ;if(bF!==br)bF=bF*d9+br*cZ;if(c2
!==d$)c2=c2*d9+d$*cZ;if(d4!==gE)d4=aF(d4,gE,cZ);a3[bn=e*6]=cX;a3[bn+=1]=j;a3[bn+=
1]=bE;a3[bn+=1]=bF;a3[bn+=1]=c2;e6[bn+1]=d4;}}return bM;}function g5(a3,e6,bM,i4
,cX){for(var e=0;e<(bM-(i4?1:0));e++){var bn=e;var ca=(e+1)%bM;var hY=a3[bn*6+1];
var jg=a3[ca*6+1];if(((cX>hY)&&(cX<jg))||((cX<hY)&&(cX>jg))){var cZ=(cX-hY)/(jg-
hY);var d9=1.0-cZ;var dz=(bM-e-1)*6;if(dz>0){var bj=(e+1)*6;a3.set(a3.subarray(bj
,bj+dz),bj+6);}bM++;if(ca)ca++;e++;var l=a3[bn*=6];var bE=a3[bn+=2];var bF=a3[bn+=
1];var c2=a3[bn+=1];var d4=e6[bn+1];var q=a3[ca*=6];var b3=a3[ca+=2];var br=a3[ca+=
1];var d$=a3[ca+=1];var gE=e6[ca+1];if(l!==q)l=l*d9+q*cZ;if(bE!==b3)bE=bE*d9+b3*
cZ;if(bF!==br)bF=bF*d9+br*cZ;if(c2!==d$)c2=c2*d9+d$*cZ;if(d4!==gE)d4=aF(d4,gE,cZ
);a3[bn=e*6]=l;a3[bn+=1]=cX;a3[bn+=1]=bE;a3[bn+=1]=bF;a3[bn+=1]=c2;e6[bn+1]=d4;}
}return bM;}function jP(m,bM,m4,na){for(var e=0;e<bM;e++){var ae=m[e*6];if((ae<m4
)||(ae>na)){var dz=(bM-e-1)*6;if(dz>0){var bj=(e+1)*6;m.set(m.subarray(bj,bj+dz)
,bj-6);}e--;bM--;}}return bM;}function jO(m,bM,nf,mZ){for(var e=0;e<bM;e++){var av=
m[e*6+1];if((av<nf)||(av>mZ)){var dz=(bM-e-1)*6;if(dz>0){var bj=(e+1)*6;m.set(m.
subarray(bj,bj+dz),bj-6);}e--;bM--;}}return bM;}var id=[0x00000000,0x00000001,0x00000003
,0x00000007,0x0000000F,0x0000001F,0x0000003F,0x0000007F,0x000000FF,0x000001FF,0x000003FF
,0x000007FF,0x00000FFF,0x00001FFF,0x00003FFF,0x00007FFF,0x0000FFFF,0x0001FFFF,0x0003FFFF
,0x0007FFFF,0x000FFFFF,0x001FFFFF,0x003FFFFF,0x007FFFFF,0x00FFFFFF,0x01FFFFFF,0x03FFFFFF
,0x07FFFFFF,0x0FFFFFFF,0x1FFFFFFF,0x3FFFFFFF,0x7FFFFFFF,0xFFFFFFFF];function l2(
az,e2,em){var n3=az.eS-em;var fd=az.eS>>5;for(var am=0;am<=n3;am++)for(var aH=0;
aH<fd;aH++){var aB=32-e2;var d_=id[e2];var lN=az.fA[am*fd+aH];var fZ;do{while(aB&&(
lN&d_)){d_<<=1;aB--;}fZ=!(lN&d_);for(var js=am+1;fZ&&(js<(am+em));js++)fZ=!(az.fA[
js*fd+aH]&d_);if(!fZ){d_<<=1;aB--;}}while(!fZ&&(aB>0));if(fZ)return[(aH*32)+32-e2-
aB,am];}return null;}function mp(az,gr,gy,e2,em){var d_=id[e2]<<(gr&0x1F);var aH=
gr>>5;var fd=az.eS>>5;for(;em>0;gy++,em--)az.fA[gy*fd+aH]|=d_;}function mo(az,gr
,gy,e2,em){var d_=~(id[e2]<<(gr&0x1F));var aH=gr>>5;var fd=az.eS>>5;for(;em>0;gy++
,em--)az.fA[gy*fd+aH]&=d_;}function jJ(az,bL){bL.ft=az.eh;bL.dT=null;if(az.eh)az.
eh.dT=bL;else az.hd=bL;az.eh=bL;bL.Cache[bL.dl]=bL;}function iv(az,bL){if(bL.ft)
bL.ft.dT=bL.dT;else az.hd=bL.dT;if(bL.dT)bL.dT.ft=bL.ft;else az.eh=bL.ft;bL.ft=null;
bL.dT=null;bL.Cache[bL.dl]=null;}function fs(dW,d2,an){var hZ=0;var min=0;var max=
an-1;var hQ=-1;var ai;while(max>=min){hZ=(max+min)>>1;ai=hZ*8;hQ=dW-d2.charCodeAt(
ai);if(!hQ)return ai;if(hQ>0)min=hZ+1;else if(hQ<0)max=hZ-1;}return-1;}var fr=[[
0x10,0x01],[0x02,0x05],[0x03,0x04],[0x11,0x12],[0x14,0x18],[0x06,0x09],[0x07,0x08
],[0x13,0x16],[0x17,0x1C],[0x0A,0x0B],[0x1E,0x1F],[0x0C,0x0D],[0x15,0x19],[0x1A,
0x0E],[0x1B,0x1D]];function lW(at,ar,ac,an){var aA;var aq=0;var aV=0;var cY=0;var
fY=ar.length;aV=ac>>4;ac&=0xF;aA=at.charCodeAt(aV++)>>ac;while(an--){if(aA&1)aq=
fr[aq][1];else aq=fr[aq][0];if(aq>15){aq-=16;ar[cY++]=(aq&0x01)?0xFF:0x00;if(cY!==
fY)ar[cY++]=(aq&0x02)?0xFF:0x00;if(cY!==fY)ar[cY++]=(aq&0x04)?0xFF:0x00;if(cY!==
fY)ar[cY++]=(aq&0x08)?0xFF:0x00;aq=0;}if((ac=(ac+1))&0x0F)aA>>=1;else aA=at.charCodeAt(
aV++);}}function lX(at,ar,ac,an){var lK=[0x00,0x55,0xAA,0xFF];var aA;var aq=0;var
aV=0;var cY=0;var fY=ar.length;aV=ac>>4;ac&=0xF;aA=at.charCodeAt(aV++)>>ac;while(
an--){if(aA&1)aq=fr[aq][1];else aq=fr[aq][0];if(aq>15){aq-=16;ar[cY++]=lK[aq&0x03
];if(cY!==fY)ar[cY++]=lK[aq>>2];aq=0;}if((ac=(ac+1))&0x0F)aA>>=1;else aA=at.charCodeAt(
aV++);}}function lY(at,ar,ac,an){var aA;var aq=0;var aV=0;var cY=0;var fY=ar.length;
aV=ac>>4;ac&=0xF;aA=at.charCodeAt(aV++)>>ac;while(an--){if(aA&1)aq=fr[aq][1];else
aq=fr[aq][0];if(aq>15){aq-=16;ar[cY++]=aq|(aq<<4);aq=0;}if((ac=(ac+1))&0x0F)aA>>=
1;else aA=at.charCodeAt(aV++);}}function mz(kf,an,as){var gM=0;var dM=as;an-=as;
while(an--)kf[dM++]^=kf[gM++];}d.j6=function(ho,km,m2,m8){var bitmap={b1:[],bw:[
]};var h4=Math.max(m8,1);var width=km[0];var height=km[1];var a=this.aW;if((ho!==
d.bG)&&(ho!==d.iI)){console.log("EmWi error: Wrong pixel format of bitmap to create."
);return null;}if((width<=0)||(width>(this.eT-2))||(height<=0)||(height>(this.eT-
2))){console.log("EmWi error: Invalid size of bitmap to create.");return null;}var
eF=((this.eT-1)/(width+1))|0;var jl=((this.eT-1)/(height+1))|0;var f2=eF*jl;var lg=(
h4%f2)||f2;var lh=Math.min(lg,eF);var li=((lg+eF-1)/eF)|0;var n8=eF*width+eF+1;var
n7=jl*height+jl+1;var n5=lh*width+lh+1;var n4=li*height+li+1;var lu=((h4+f2-1)/f2
)|0;for(var e=0;e<lu;e++){a.getError();var fl=n8;var fk=n7;var de=a.createTexture(
);var af={};if(e===(lu-1)){fl=n5;fk=n4;}a.ed=null;a.bindTexture(a.TEXTURE_2D,de);
a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D
,a.TEXTURE_MAG_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.
CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);if(
ho===this.bG)a.texImage2D(a.TEXTURE_2D,0,a.RGBA,fl,fk,0,a.RGBA,a.UNSIGNED_BYTE,null
);else a.texImage2D(a.TEXTURE_2D,0,a.ALPHA,fl,fk,0,a.ALPHA,a.UNSIGNED_BYTE,null);
af.Format=ho;af.Width=fl;af.Height=fk;af.gh=fl;af.gg=fk;af.c4=1/fl;af.c3=1/fk;af.
dE=2/fl;af.dD=2/fk;af.b6=de;af.Framebuffer=null;bitmap.b1[e]=af;if(this.aX)dq(a);
}for(var e=0;e<h4;e++){var dA=e%f2;var lx=dA%eF;var ly=(dA/eF)|0;var bQ={};bQ.aw=
bitmap.b1[(e/f2)|0];bQ.aD=[(lx*width)+lx+1,(ly*height)+ly+1];bitmap.bw[e]=bQ;}bitmap.
FrameSize=[width,height];bitmap.FrameDelay=m2;bitmap.NoOfFrames=h4;return bitmap;
};function jY(az,bl){try{var kY=bl.dU;var dC=bl.Image;var width=dC.width;var height=
dC.height;var fc=bl.FrameSize[0];var f0=bl.FrameSize[1];var ls=(width/fc)|0;var a=
az.aW;delete bl.dU;delete bl.Image;if(!kY.bitmap)return;if((dC.width===fc)&&(dC.
height===f0)){var bQ=bl.bw[0];var de=bQ.aw.b6;var bq=bQ.aD[0];var aR=bQ.aD[1];a.
bindTexture(a.TEXTURE_2D,de);a.ed=null;if(bQ.aw.Format===az.bG)a.texSubImage2D(a.
TEXTURE_2D,0,bq,aR,a.RGBA,a.UNSIGNED_BYTE,dC);else a.texSubImage2D(a.TEXTURE_2D,
0,bq,aR,a.ALPHA,a.UNSIGNED_BYTE,dC);}else{var au=document.createElement('canvas'
);var jc;au.width=fc;au.height=f0;jc=au.getContext("2d");for(var e=0;e<bl.NoOfFrames;
e++){var bQ=bl.bw[e];var de=bQ.aw.b6;var bq=bQ.aD[0];var aR=bQ.aD[1];var dQ=(e/ls
)|0;var ja=e-(dQ*ls);var oc=ja*fc;var od=dQ*f0;jc.clearRect(0,0,fc,f0);jc.drawImage(
dC,oc,od,fc,f0,0,0,fc,f0);a.bindTexture(a.TEXTURE_2D,de);a.ed=null;if(bQ.aw.Format===
az.bG)a.texSubImage2D(a.TEXTURE_2D,0,bq,aR,a.RGBA,a.UNSIGNED_BYTE,au);else a.texSubImage2D(
a.TEXTURE_2D,0,bq,aR,a.ALPHA,a.UNSIGNED_BYTE,au);}}az.mI(kY,0);az.cB();}catch(bc
){console.log("EmWi error: "+bc+"!");}}function mi(az,bl){try{var dC=bl.Image;var
height=dC.height;var bitmap=az.j6(az.bG,[dC.width,dC.height],0,1);bl.b1=bitmap.b1;
bl.bw=bitmap.bw;bl.FrameSize=bitmap.FrameSize;bl.dU.FrameSize=bitmap.FrameSize;jY(
az,bl);}catch(bc){console.log("EmWi error: "+bc+"!");}}d.pk=function(cG,iV){var jt=
this;var bitmap=this.j6(cG.Format,cG.FrameSize,cG.FrameDelay,cG.NoOfFrames);if(!
bitmap)return;bitmap.dU=iV;bitmap.Image=new Image();bitmap.Image.addEventListener(
'load',function(){jY(jt,bitmap);});bitmap.Image.src=cG.FileName;return bitmap;};
d.oS=function(bl){var a=this.aW;if(!bl)return;for(var e=0;bl.b1&&(e<bl.b1.length
);e++){var af=bl.b1[e];if(af.b6)a.deleteTexture(af.b6);if(af.Framebuffer)a.deleteFramebuffer(
af.Framebuffer);}bl.b1=null;bl.bw=null;bl.NoOfFrames=0;};d.pl=function(m6,iV){var
jt=this;var bitmap={b1:[],bw:[]};var af={};var bQ={};af.Format=this.bG;af.Width=
1;af.Height=1;af.gh=1;af.gg=1;af.c4=1;af.c3=1;af.dE=2;af.dD=2;af.b6=null;af.Framebuffer=
null;bQ.aw=af;bQ.aD=[0,0];bitmap.b1[0]=af;bitmap.bw[0]=bQ;bitmap.FrameSize=[1,1];
bitmap.FrameDelay=0;bitmap.NoOfFrames=1;bitmap.dU=iV;bitmap.Image=new Image();bitmap.
Image.addEventListener('load',function(){mi(jt,bitmap);});bitmap.Image.src=m6;return bitmap;
};d.pm=function(cG){var aA=cG.Data();var a_={Cache:cG.Cache,Ascent:aA[0],Descent:
aA[1],Leading:aA[2],io:aA[5],ig:aA[4],ik:aA[6],ir:aA[7],gc:null};if(aA[3]===2)a_.
ie=lW;if(aA[3]===4)a_.ie=lX;if(aA[3]===16)a_.ie=lY;return a_;};d.oT=function(aE){
};d.j9=function(aE,dW){if(!aE){if(this.aX)console.log("EmWi error: Invalid font resource."
);return null;}var u=aE.Cache[dW];if(u){iv(this,u);jJ(this,u);return u;}if(!(u=this.
eg(aE,dW)))return null;var db=this.mF;var fh=((u.Height+db-1)/db)|0;var hP=((u.Width+
db-1)/db)|0;var ai=null;var eM=this.hd;var jd=null;do{if(!(ai=jd=l2(this,hP,fh))
){while(eM&&eM.hb)eM=eM.dT;if(eM){var u=eM;var dQ=(u.g3/db)|0;var ja=(u.g2/db)|0;
var fh=((u.Height+db-1)/db)|0;var hP=((u.Width+db-1)/db)|0;if(this.aX)console.log(
"EmWi info: DiscardGlyph( "+u.dl+", "+u.Width+", "+u.Height+" )");jd=u;eM=eM.dT;
iv(this,u);mo(this,ja,dQ,hP,fh);}}}while(!ai&&jd);if(!ai)return null;aE.gc=null;
var h1=1/this.he;u.Cache=aE.Cache;u.g2=ai[0]*db;u.g3=ai[1]*db;u.jK=u.g2*h1;u.jM=
u.g3*h1;u.jL=(u.g2+u.Width)*h1;u.jN=(u.g3+u.Height)*h1;u.hb=0;var lD=u.Width*u.Height;
var jr=new Uint8Array(lD);var a=this.aW;aE.ie(aE.ir,jr,u.ir,u.mf);mz(jr,lD,u.Width
);a.bindTexture(a.TEXTURE_2D,this.gi);a.texSubImage2D(a.TEXTURE_2D,0,u.g2,u.g3,u.
Width,u.Height,a.ALPHA,a.UNSIGNED_BYTE,jr);a.ed=null;mp(this,ai[0],ai[1],hP,fh);
jJ(this,u);if(this.aX)console.log("EmWi info: CreateGlyph( "+u.dl+", "+u.Width+", "+
u.Height+" )");return u;};d.eg=function(aE,dW){if(!aE){if(this.aX)console.log("EmWi error: Invalid font resource."
);return null;}var u=aE.Cache[dW];if(u)return u;if(!aE.gc||(aE.gc.dl!==dW)){var a7=
aE.ik;var eG=aE.io;var ai=fs(dW,a7,eG);if(ai<0)ai=fs(aE.ig,a7,eG);if(ai<0){if(this.
aX)console.log("EmWi error: Default glyph not found in the font.");return null;}
var c2=a7.charCodeAt(ai+1);var d$=a7.charCodeAt(ai+2);var jw=a7.charCodeAt(ai+3);
var jx=a7.charCodeAt(ai+4);var jy=a7.charCodeAt(ai+5);var oo=a7.charCodeAt(ai+6);
var op=a7.charCodeAt(ai+7);var om=a7.charCodeAt(ai+14);var on=a7.charCodeAt(ai+15
);var bj=op|(oo<<16);var dc=on|(om<<16);aE.gc={dl:dW,OriginX:c2-32768,OriginY:d$-
32768,Width:jw,Height:jx,Advance:jy-32768,ir:bj,mf:dc-bj};}return aE.gc;};d.o9=function(
aE,k,ac,an){var ae=0;var bD=k.length;if(!aE){if(this.aX)console.log("EmWi error: Invalid font resource."
);return 0;}if(an===-1)an=bD;if(ac<0){an+=ac;ac=0;}var a7=aE.ik;var eG=aE.io;for(;(
an>0)&&(ac<bD);ac++,an--){var x=k.charCodeAt(ac);var u=aE.Cache[x];if(u)ae+=u.Advance;
else{var ai=fs(x,a7,eG);if(ai<0)ai=fs(aE.ig,a7,eG);if(ai<0){if(this.aX)console.log(
"EmWi error: Default glyph not found in the font.");return 0;}ae+=a7.charCodeAt(
ai+5)-32768;}}return ae;};d.mE=function(aE,k,ac,an){var ey=[0,0,0,0];var ae=0;var
bD=k.length;if(!aE){if(this.aX)console.log("EmWi error: Invalid font resource.");
return this.j_;}if(an===-1)an=bD;if(ac<0){an+=ac;ac=0;}var a7=aE.ik;var eG=aE.io;
for(;(an>0)&&(ac<bD);ac++,an--){var x=k.charCodeAt(ac);var u=aE.Cache[x];var l,j
,q,o,i6;if(u){l=u.OriginX;j=u.OriginY;q=l+u.Width;o=j+u.Height;i6=u.Advance;}else{
var ai=fs(k.charCodeAt(ac),a7,eG);if(ai<0)ai=fs(aE.ig,a7,eG);if(ai<0){if(this.aX
)console.log("EmWi error: Default glyph not found in the font.");return this.j_;
}var c2=a7.charCodeAt(ai+1);var d$=a7.charCodeAt(ai+2);var jw=a7.charCodeAt(ai+3
);var jx=a7.charCodeAt(ai+4);var jy=a7.charCodeAt(ai+5);l=c2-32768;j=d$-32768;q=
l+jw;o=j+jx;i6=jy-32768;}if(!ae)ey[0]=l;if(j<ey[1])ey[1]=j;if(o>ey[3])ey[3]=o;ey[
2]=ae+q;ae+=i6;if(!q)ey[2]=ae;}return ey;};d.pH=function(aE,k,ac,aP){var lF=aP[0
];var lG=aP[1];var bD=k.length;var aV=Math.max(ac,0);var gS=aV;var dK=aV;var g1=-
1;var width=0;var fh=0;var z="";var x;while((aV<bD)&&(x=k.charCodeAt(bD-1))&&((x===
0x5E)||(x===0x7E)||(x===0xAD)))bD--;if(!aE||(aV>=bD))return z;while((aV<bD)&&(lG>
0)){var x=k.charCodeAt(aV);if(x!==0x0A){var u;var fQ=0;var nJ=aV;if(((x===0x20)||(
x===0x5E))&&width)g1=aV;if(x===0x5E){aV++;continue;}if((x===0x7E)||(x===0xAD)){if(
width&&(u=this.eg(aE,0x2D)))fQ=u.Advance;if(((width+fQ)<=lF)&&fQ)g1=aV;aV++;continue;
}if(x===0x25)x=k.charCodeAt(++aV);if(x){if(u=this.eg(aE,x))fQ=u.Advance;aV++;if(((
fQ+width)<=lF)||!width){width+=fQ;dK=aV;}else if(g1>=0){aV=g1;dK=aV;if(((x=k.charCodeAt(
aV))===0x7E)||(x===0xAD))dK++;while(((x=k.charCodeAt(aV))===0x7E)||(x===0xAD)||(
x===0x20)||(x===0x5E))aV++;x=0x0A;}else{aV=nJ;dK=aV;x=0x0A;}}}else dK=++aV;if((x===
0x0A)||((aV>=bD)&&width)){var dQ="";var gM=gS;var dM=gS;while(dM<dK){while((dM<dK
)&&((x=k.charCodeAt(dM))!==0x25)&&(x!==0x5E)&&(x!==0x7E)&&(x!==0xAD))dM++;dQ+=k.
slice(gM,dM++);gM=dM;if(x===0x25)dM++;if((x===0x25)&&(dM===dK))dQ+=k[gM];}if((gS<
dK)&&((x===0x7E)||(x===0xAD)))dQ+="-";z+=String.fromCharCode(dQ.length+2,aV-gS)+
dQ;fh++;if((lG-=aE.Ascent+aE.Descent+aE.Leading)<=0)break;gS=aV;dK=aV;g1=-1;width=
0;}}return String.fromCharCode(fh)+z;};d.oF=function(i2,i0,i1){if(i2<0)i2=0;if(i0<
0)i0=0;if(i1<0)i1=0;return{dG:i2,eP:i0,ge:i1,dm:[],ea:[],fq:[]};};d.oQ=function(
y){if(y){delete y.dm;delete y.ea;delete y.fq;}};d.pT=function(y,iX,b7){if(!y||(iX<
0))return;if(iX<y.ge)y.fq[iX]=b7;};d.pS=function(y,iN,bl){if(!y||(iN<0))return;if(
iN<y.eP)y.ea[iN]=bl;};d.pU=function(y,iY,aE){if(!y||(iY<0))return;if(iY<y.dG)y.dm[
iY]=aE;};function cS(k,f,w,dw){var g=0;var aH=k.charCodeAt(f);while((aH>=0x30)&&(
aH<=0x39)){g=(g*10)+(aH-0x30);aH=k.charCodeAt(++f);}w[dw]=g;return f;}function iq(
k,f,m$,w,dw){f=cS(k,f,w,dw);if(k.charCodeAt(f)===0x25){var lv=w[dw]*m$;w[dw]=(lv
/100)|0;if((lv-(w[dw]*100))>50)w[dw]++;f++;}return f;}function j1(k,f,as,w){w[0]=
0;w[1]=0;w[2]=0;w[3]=0;f=iq(k,f,as,w,0);if(k.charCodeAt(f)===0x2C){f=iq(k,f+1,as
,w,1);if(k.charCodeAt(f)===0x2C){f=cS(k,f+1,w,2);if(k.charCodeAt(f)===0x2C)f=cS(
k,f+1,w,3);}}if(w[0]>as)w[0]=as;if(w[1]>(as-w[0]))w[1]=as-w[0];return f;}function
ml(k,f,w,dw){var g=0x6C;var aH=k.charCodeAt(f);if((aH===0x6C)||(aH===0x72)||(aH===
0x63)||(aH===0x6A)){g=aH;f++;}w[dw]=g;return f;}function ip(k,f,w,dw){var g=0x6D;
var aH=k.charCodeAt(f);if((aH===0x74)||(aH===0x6D)||(aH===0x62)){g=aH;f++;}w[dw]=
g;return f;}function mm(k,f,as,eW){var g=[0,0,0];var aH=k.charCodeAt(f);var e=0;
var bC=0;var hV=as;var gI=0;var bk=[0];while((e<3)&&(((aH>=0x30)&&(aH<=0x39))||(
aH===0x2A))){if(aH===0x2A){g[e]=-1;gI++;f++;}else{f=iq(k,f,as,g,e);hV=hV-g[e];}if((
aH=k.charCodeAt(f))===0x2C)aH=k.charCodeAt(++f);e++;}if(!e){g[0]=as;e=1;}for(;bC<
gI;bC++){var dg=(hV/gI)|0;if(bC===(gI-1))dg=hV-(gI-1)*dg;if(g[0]<0)g[0]=dg;else if(
g[1]<0)g[1]=dg;else if(g[2]<0)g[2]=dg;}for(e=0;e<3;e++){if(g[e]<0)g[e]=0;if(g[e]>
as)g[e]=as;as=as-g[e];eW[e]=g[e];}return f;}function b5(k,f,kn){return k.slice(f
,f+kn.length)===kn;}function jI(az,y,k,f,as,ar,c7,c8){var av=[0];var b4=ar.length;
ar.push(0x47,0,0,as,0,0,0);f=j0(az,y,k,f,as,0x6C,ar,av,0);if(ar.length>(b4+7)){ar[
b4+4]=av[0];ar[b4+5]=ar.length-b4;}else ar.splice(b4,ar.length-b4);while(f<k.length
){if(b5(k,f,"{par")){var b9=[0,0,0,0];var d3=[-1];var kA=[];var width;var height=[
0];f=ml(k,f+4,kA,0);f=j1(k,f,as,b9);if(k.charCodeAt(f)===0x3A)f=cS(k,f+1,d3,0);if(
k.charCodeAt(f)===0x7D)f++;if(d3[0]!==-1)ar.push(0x52,0,av[0],as,0,d3[0]);b4=ar.
length;width=as-b9[0]-b9[1];ar.push(0x47,0,av[0]+b9[2],as,0,0,b9[0]);f=j0(az,y,k
,f,width,kA[0],ar,height,0);av[0]+=b9[2]+height[0]+b9[3];ar[b4+4]=av[0]-b9[3];ar[
b4+5]=ar.length-b4;if(d3[0]!==-1)ar[b4-2]=av[0];}else if(b5(k,f,"{lay")){var kZ=[
];var height=[0];b4=ar.length;f=mm(k,f+4,as,kZ);if(k.charCodeAt(f)===0x7D)f++;ar.
push(0x47,0,av[0],as,0,0,0);f=md(az,y,k,f,kZ,ar,height,0);av[0]+=height[0];ar[b4+
4]=av[0];ar[b4+5]=ar.length-b4;}else break;}c7[c8]=av[0];return f;}function md(az
,y,k,f,eW,ar,c7,c8){var kB=[];var gG=[];var gF=[];var d3=[-1,-1,-1];var e=0;var bC=
0;var ae=0;var height=0;while((f<k.length)&&(e<eW.length)){if(b5(k,f,"{col")){var
b9=[0,0,0,0];var width;f=ip(k,f+4,kB,e);f=j1(k,f,eW[e],b9);if(k.charCodeAt(f)===
0x3A)f=cS(k,f+1,d3,e);if(k.charCodeAt(f)===0x7D)f++;if(d3[e]!==-1)ar.push(0x52,ae
,0,ae+eW[e],0,d3[e]);gG[e]=ar.length;width=eW[e]-b9[0]-b9[1];ar.push(0x47,ae+b9[
0],b9[2],ae+b9[0]+width,0,0,0);f=jI(az,y,k,f,width,ar,gF,e);gF[e]+=b9[2]+b9[3];height=
Math.max(height,gF[e]);ar[gG[e]+4]=gF[e]-b9[3];ar[gG[e]+5]=ar.length-gG[e];ae+=eW[
e];e++;}else break;}for(bC=0;bC<e;bC++){var b4=gG[bC];var h5=height-gF[bC];switch(
kB[bC]){case 0x74:h5=0;break;case 0x6D:h5>>=1;break;}ar[b4+2]+=h5;ar[b4+4]+=h5;if(
d3[bC]!==-1)ar[b4-2]=height;}c7[c8]=height;if(b5(k,f,"{end}"))f+=5;return f;}function
mn(az,y,k,f,kq,w){var h$=-1;var jB=null;var jE=0;var lO=0;var jD=0;var jz=0;var jA=
0;var jC=0;var d6=0;var aq=[];w[0]=0;w[1]=0;w[2]=0;w[3]=0;w[4]=0;while(f<k.length
){var nI=f;var d5=0;var k6=0;var k7=0;var hR=0;var hS=0;var hT=0;if(k.charCodeAt(
f)===0x7B){if(b5(k,f,"{img")){var a9=null;var dA=[0];f=ip(k,f+4,aq,0);f=cS(k,f,aq
,0);if(k.charCodeAt(f)===0x2E){f++;f=cS(k,f,dA,0);}if(k.charCodeAt(f)===0x7D)f++;
if(y&&(aq[0]>=0)&&(aq[0]<y.eP))a9=y.ea[aq[0]];if(!a9&&y&&(y.eP>0))a9=y.ea[0];if(
a9&&(dA>=a9.NoOfFrames))a9=null;if(a9){d5=a9.FrameSize[0];k6=a9.FrameSize[1];}}else
if(b5(k,f,"{fnt")){f=cS(k,f+4,aq,0);if(k.charCodeAt(f)===0x7D)f++;if(y&&(aq[0]>=
0)&&(aq[0]<y.dG))w[5]=y.dm[aq[0]];if(!w[5]&&y&&(y.dG>0))w[5]=y.dm[0];continue;}else
if(b5(k,f,"{clr")){f=cS(k,f+4,aq,0);if(k.charCodeAt(f)===0x7D)f++;continue;}else
if(b5(k,f,"{ul+}")||b5(k,f,"{ul-}")){f+=5;continue;}else if(b5(k,f,"{lnk")){if(k.
charCodeAt(f+=4)===0x3A)do f++;while((f<k.length)&&(k.charCodeAt(f)!==0x7D));if(
k.charCodeAt(f)===0x7D)f++;continue;}else break;}else if(k.charCodeAt(f)!==0x0A){
var u;var x=k.charCodeAt(f);if(((x===0x20)||(x===0x5E))&&w[0]){h$=f;jB=w[5]||null;
jE=w[0];lO=w[1];jD=w[2];jz=w[3];jA=d6;jC=w[4];}if(x===0x5E){f++;continue;}if((x===
0x7E)||(x===0xAD)){f++;if(w[5]&&w[0]&&(u=az.eg(w[5],0x2D))){d5=u.Advance;hR=w[5].
Ascent;hS=w[5].Descent;hT=w[5].Leading;}if(((w[0]+d5)<=kq)&&d5){h$=f;jB=w[5];jE=
w[0]+d5;jz=Math.max(w[3],hR);jA=Math.max(d6,hS);jC=Math.max(w[4],hT);jD=w[2];}continue;
}if(x===0x25)x=k.charCodeAt(++f);if(w[5]&&(f<k.length)&&(u=az.eg(w[5],x))){d5=u.
Advance;hR=w[5].Ascent;hS=w[5].Descent;hT=w[5].Leading;}if((x===0x20)||(x===0xA0
))k7=d5;if(f<k.length)f++;}else{if(w[5]){w[3]=Math.max(w[3],w[5].Ascent);w[4]=Math.
max(w[4],w[5].Leading);d6=Math.max(d6,w[5].Descent);}break;}if(((d5+w[0])<=kq)||
!w[0]){w[0]+=d5;w[1]=Math.max(w[1],k6);w[3]=Math.max(w[3],hR);w[4]=Math.max(w[4]
,hT);d6=Math.max(d6,hS);w[2]+=k7;}else if(h$!==-1){w[5]=jB;w[0]=jE;w[1]=lO;w[2]=
jD;w[3]=jz;w[4]=jC;d6=jA;f=h$;break;}else{f=nI;break;}}w[1]=Math.max(w[1],w[3]+d6
);w[3]+=(w[1]-w[3]-d6)>>1;return f;}function j0(az,y,k,f,as,mX,ar,c7,c8){var cr=[
0,0,0,0,0,null];var a_=null;var gL=[0];var hK=[0];var eN=0;var jj=false;var je=false;
if(y&&(y.dG>0))cr[5]=a_=y.dm[0];c7[c8]=0;while((f<k.length)&&!je){var gN=mX;var ae=
0;var jk=0;var eI=0;var h8=0;var lH=0;var ba;var x;ba=mn(az,y,k,f,as,cr);je=((x=
k.charCodeAt(ba))===0x7B)&&!b5(k,ba,"{img");if((gN===0x6A)&&((x===0x0A)||je||!x)
){gN=0x6C;cr[2]=0;}else if(gN===0x72)ae+=as-cr[0];else if(gN===0x63)ae+=(as-cr[0
])>>1;for(;;){if(((k.charCodeAt(f)===0x7B)||(f===ba))&&eI){if((gN===0x6A)&&h8){var
aT=(h8*(as-cr[0]))+lH;var a6=(aT/cr[2])|0;lH=aT-(a6*cr[2]);ae+=a6;ar[eI]=0x4A;ar.
push(ae-ar[eI+1]);}if(eN){if(a_){var u;if(u=az.eg(a_,0x2D))eN=u.Height;}if(eN<=0
)eN=1;ar.push(0x52,ar[eI+1],c7[c8]+cr[3]+eN,ae,c7[c8]+cr[3]+(eN*2),hK[0]);}eI=0;
h8=0;}if(jj&&((f===ba)||b5(k,f,"{lnk"))&&(ae>jk))ar.push(0x41,jk,c7[c8],ae,c7[c8
]+cr[1],cr[3]);if(f===ba)break;if(k.charCodeAt(f)===0x7B){if(b5(k,f,"{img")){var
a9;var kz=[];var aq=[];var dA=[0];f=ip(k,f+4,kz,0);f=cS(k,f,aq,0);if(k.charCodeAt(
f)===0x2E){f++;f=cS(k,f,dA,0);}if(k.charCodeAt(f)===0x7D)f++;if(y&&(aq[0]>=0)&&(
aq[0]<y.eP))a9=y.ea[aq[0]];if(!a9&&y&&(y.eP>0))a9=y.ea[0];if(a9&&(dA>=a9.NoOfFrames
))a9=null;if(a9){var cs=cr[1]-a9.FrameSize[1];switch(kz[0]){case 0x6D:cs>>=1;break;
case 0x74:cs=0;break;}ar.push(0x49,ae,c7[c8]+cs,aq[0],dA[0],hK[0]);ae+=a9.FrameSize[
0];}}else if(b5(k,f,"{fnt")){f=cS(k,f+4,gL,0);if(k.charCodeAt(f)===0x7D)f++;if(y&&(
gL[0]>=0)&&(gL[0]<y.dG))a_=y.dm[gL[0]];if(!a_&&y&&(y.dG>0))a_=y.dm[0];continue;}
else if(b5(k,f,"{clr")){f=cS(k,f+4,hK,0);if(k.charCodeAt(f)===0x7D)f++;continue;
}else if(b5(k,f,"{ul+}")){eN=1;f+=5;continue;}else if(b5(k,f,"{ul-}")){eN=0;f+=5;
continue;}else if(b5(k,f,"{lnk")){jj=k.charCodeAt(f+=4)===0x3A;if(jj){var n_=++f;
var g=ar.length;while((f<k.length)&&(k.charCodeAt(f)!==0x7D))f++;ar.push(0x4C,k.
slice(n_,f));jk=ae;}if(k.charCodeAt(f)===0x7D)f++;continue;}else break;}else{var
aH=k.charCodeAt(f++);var u;if(aH===0x5E)continue;if((aH===0x7E)||(aH===0xAD)){if(
f===ba)aH=0x2D;else continue;}if((aH===0x25)&&(aH=k.charCodeAt(f)))f++;if(a_&&(u=
az.eg(a_,aH))){if(!eI){eI=ar.length;ar.push(0x54,ae,c7[c8]+cr[3],"",gL[0],hK[0]);
}ar[eI+3]+=String.fromCharCode(aH);ae+=u.Advance;if((aH===0x20)||(aH===0xA0))h8+=
u.Advance;}}}while(((x=k.charCodeAt(ba))===0x20)||(x===0x7E)||(x===0x5E)||(x===0xAD
))ba++;if(x===0x0A)ba++;f=ba;c7[c8]+=cr[1]+cr[4];}return f;}function jH(ar,c9,c_
,aI,aa,dt){var hU=null;while(aa<dt){switch(aI[aa]){case 0x47:{var aB=aI[aa+5];var
ae=aI[aa+1]+aI[aa+6]+c9;var av=aI[aa+2]+c_;jH(ar,ae,av,aI,aa+7,aa+aB);aa+=aB;}break;
case 0x54:aa+=6;break;case 0x4A:aa+=7;break;case 0x49:aa+=6;break;case 0x52:aa+=
6;break;case 0x41:{if(hU)hU.g8++;aa+=6;}break;case 0x4C:{hU={Data:aa,g8:0,j4:c9,
iw:c_};ar.push(hU);aa+=2;}break;}}}function j3(dJ,aI,aa,dt){while(aa<dt){switch(
aI[aa]){case 0x54:aa+=6;break;case 0x4A:aa+=7;break;case 0x49:aa+=6;break;case 0x52:
aa+=6;break;case 0x4C:aa+=2;break;case 0x41:if(!dJ)return aa;aa+=6;dJ--;break;default:
aa=dt;}}return-1;}function lZ(az,s,ah,v,bT,c9,c_,y,aI,aa,dt,ap,bH){function cl(cW
,aZ,a4,b7){var fN=cW.lP;var kE=cW.lR;if(aZ<0)aZ=0;if(a4<0)a4=0;if(aZ>cW.Width)aZ=
cW.Width;if(a4>cW.Height)a4=cW.Height;if(cW.jX&&a4)fN+=a4*cW.lQ;if(cW.jX&&cW.jW&&
a4)kE+=a4*cW.lS;if(cW.jW&&aZ)fN+=(kE-fN)*cW.mc*aZ;if(fN>=255)return b7;if(fN<=0)
return b7&0xFFFFFF;var nF=((((b7>>24)&0xFF)*fN/255)<<24)|(b7&0xFFFFFF);return nF;
}function jT(az,s,ah,v,bT,c9,c_,y,aI,aa,dt,ap,bH){while(aa<dt){var x=aI[aa];if((
x===0x47)||(x===0x52)){var am=[aI[aa+1]+c9,aI[aa+2]+c_,aI[aa+3]+c9,aI[aa+4]+c_];
switch(x){case 0x47:{var aB=aI[aa+5];if((v[0]<v[2])&&(v[1]<v[3]))jT(az,s,ah,v,bT
,am[0]+aI[aa+6],am[1],y,aI,aa+7,aa+aB,ap,bH);aa+=aB;}break;case 0x52:{var aQ=aI[
aa+5];var l=am[0]-bT[0];var q=am[2]-bT[0];var j=am[1]-bT[1];var o=am[3]-bT[1];if((
aQ>=0)&&(aQ<y.ge))aQ=y.fq[aQ];else aQ=0;var e_=cl(bH,l,j,aQ);var e$=cl(bH,q,j,aQ
);var e9=cl(bH,q,o,aQ);var e8=cl(bH,l,o,aQ);az.fz(s,ah,v,am,e_,e$,e9,e8,ap);aa+=
6;}break;}}else if((x===0x54)||(x===0x49))aa+=6;else if(x===0x4A)aa+=7;else if(x===
0x4C)aa+=2;else if(x===0x41)aa+=6;}}function jU(az,s,ah,v,bT,c9,c_,y,aI,aa,dt,ap
,bH){while(aa<dt){var x=aI[aa];if((x===0x47)||(x===0x52)){var am=[aI[aa+1]+c9,aI[
aa+2]+c_,aI[aa+3]+c9,aI[aa+4]+c_];switch(x){case 0x47:{var aB=aI[aa+5];if((v[0]<
v[2])&&(v[1]<v[3]))jU(az,s,ah,v,bT,am[0]+aI[aa+6],am[1],y,aI,aa+7,aa+aB,ap,bH);aa+=
aB;}break;case 0x52:{aa+=6;}break;}}else if((x===0x54)||(x===0x4A)||(x===0x49)){
var ai=[aI[aa+1]+c9,aI[aa+2]+c_];switch(x){case 0x54:{var a_=aI[aa+4];var aQ=aI[
aa+5];var l=v[0]-bT[0];var j=v[1]-bT[1];var q=v[2]-bT[0];var o=v[3]-bT[1];if((aQ>=
0)&&(aQ<y.ge))aQ=y.fq[aQ];else aQ=0;if((a_>=0)&&(a_<y.dG))a_=y.dm[a_];else a_=null;
if(!a_&&y.dG)a_=y.dm[0];ai[0]=v[0]-ai[0];ai[1]=v[1]-ai[1];if(a_){var e_=cl(bH,l,
j,aQ);var e$=cl(bH,q,j,aQ);var e9=cl(bH,q,o,aQ);var e8=cl(bH,l,o,aQ);az.j8(s,a_,
aI[aa+3],0,-1,ah,v,v,ai,0,e_,e$,e9,e8,ap);}aa+=6;}break;case 0x4A:{var a_=aI[aa+
4];var aQ=aI[aa+5];var l=v[0]-bT[0];var j=v[1]-bT[1];var q=v[2]-bT[0];var o=v[3]-
bT[1];var width=aI[aa+6];if((aQ>=0)&&(aQ<y.ge))aQ=y.fq[aQ];else aQ=0;if((a_>=0)&&(
a_<y.dG))a_=y.dm[a_];else a_=null;if(!a_&&y.dG)a_=y.dm[0];ai[0]=v[0]-ai[0];ai[1]=
v[1]-ai[1];if(a_){var e_=cl(bH,l,j,aQ);var e$=cl(bH,q,j,aQ);var e9=cl(bH,q,o,aQ);
var e8=cl(bH,l,o,aQ);az.j8(s,a_,aI[aa+3],0,-1,ah,v,v,ai,width,e_,e$,e9,e8,ap);}aa+=
7;}break;case 0x49:{var a9=aI[aa+3];var dA=aI[aa+4];var aQ=aI[aa+5];if((aQ>=0)&&(
aQ<y.ge))aQ=y.fq[aQ];else aQ=0;if((a9>=0)&&(a9<y.eP))a9=y.ea[a9];else a9=null;if(
!a9&&y.eP)a9=y.ea[0];if(a9){var l=ai[0]-bT[0];var j=ai[1]-bT[1];var q=l+a9.FrameSize[
0];var o=j+a9.FrameSize[1];var e_=cl(bH,l,j,aQ);var e$=cl(bH,q,j,aQ);var e9=cl(bH
,q,o,aQ);var e8=cl(bH,l,o,aQ);var bV=[ai[0],ai[1],ai[0]+a9.FrameSize[0],ai[1]+a9.
FrameSize[1]];az.ef(s,a9,ah,dA,v,bV,[0,0],e_,e$,e9,e8,ap);}aa+=6;}break;}}else{switch(
x){case 0x4C:aa+=2;break;case 0x41:aa+=6;break;}}}}jT(az,s,ah,v,bT,c9,c_,y,aI,aa
,dt,ap,bH);jU(az,s,ah,v,bT,c9,c_,y,aI,aa,dt,ap,bH);}d.pG=function(y,k,as){var kH=[
];var fP={};var height=[0];if(!y||!k.length||(as<=0))return null;jI(this,y,k,0,as
,kH,height,0);fP.Data=kH;fP.dF=[];jH(fP.dF,0,0,fP.Data,0,fP.Data.length);return fP;
};d.oR=function(aL){};d.oY=function(aL){if(!aL)return this.mJ;if(!aL.j2){var aA=
aL?aL.Data:null;var ba=0;var dc=aA?aA.length:0;var bS=[0,0,0,0];while(ba<dc){var
l=aA[ba+1];var j=aA[ba+2];var q=aA[ba+3];var o=aA[ba+4];if((l<q)&&(j<o)){if(bS[0
]>l)bS[0]=l;if(bS[2]<q)bS[2]=q;if(bS[1]>j)bS[1]=j;if(bS[3]<o)bS[3]=o;}if(aA[ba]===
0x52)ba+=6;else ba+=aA[ba+5];}var dg=bS[2]-bS[0];var f1=bS[3]-bS[1];if(dg<0)dg=0;
if(f1<0)f1=0;aL.j2=[dg,f1];}return aL.j2;};d.o1=function(aL){if(!aL)return 0;return aL.
dF.length;};d.oW=function(aL,cF){if(!aL)return this.fy;if((cF<0)||(cF>=aL.dF.length
))return this.fy;return aL.Data[aL.dF[cF].Data+1];};d.o0=function(aL,cF){if(!aL)
return 0;if((cF<0)||(cF>=aL.dF.length))return 0;return aL.dF[cF].g8;};d.oX=function(
aL,cF,dJ){var cN;var ba;var bS=[0,0,0,0];if(!aL)return bS;if((cF<0)||(cF>=aL.dF.
length))return bS;cN=aL.dF[cF];if((dJ<0)||(dJ>=cN.g8))return bS;ba=j3(dJ,aL.Data
,cN.Data,aL.Data.length);if(ba>=cN.Data){bS[0]=aL.Data[ba+1]+cN.j4;bS[1]=aL.Data[
ba+2]+cN.iw;bS[2]=aL.Data[ba+3]+cN.j4;bS[3]=aL.Data[ba+4]+cN.iw;}return bS;};d.oV=
function(aL,cF,dJ){var cN;var ba;if(!aL)return 0;if((cF<0)||(cF>=aL.dF.length))return 0;
cN=aL.dF[cF];if((dJ<0)||(dJ>=cN.g8))return 0;ba=j3(dJ,aL.Data,cN.Data,aL.Data.length
);if(ba>=cN.Data)return cN.iw+aL.Data[ba+5];return 0;};d.oO=function(s,ah,v,kj,kk
,aO,aU,ap){var a=this.aW;var z=null;var d7=kj[0];var d8=kj[1];var fW=kk[0];var fX=
kk[1];var aK=fW;var aM=fX;var dg=fW-d7;var f1=fX-d8;var l,j,q,o;if(s&&(ah>=0)&&(
ah<s.NoOfFrames))z=s.bw[ah];if(!z||(z.aw.Format!==this.bG)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(Math.abs(fW-d7)>Math.abs(fX-d8)){if(aK>d7)aK--;if(aK<d7)aK++;}else{
if(aM>d8)aM--;if(aM<d8)aM++;}l=Math.max(v[0],Math.min(d7,aK),0);j=Math.max(v[1],
Math.min(d8,aM),0);q=Math.min(v[2],Math.max(d7,aK)+1,s.FrameSize[0]);o=Math.min(
v[3],Math.max(d8,aM)+1,s.FrameSize[1]);if((q<=l)||(o<=j))return;var b_=z.aD[0];var
b$=z.aD[1];var c=a.fo;var aC=a.ga;var aB=2;c[0]=d7+b_+0.5;c[1]=d8+b$+0.5;c[6]=fW+
b_+0.5;c[7]=fX+b$+0.5;aC[5]=aO;aC[11]=aU;if(dg>0)q+=0.5;if(dg<0)l-=0.5;if(f1>0)o+=
0.5;if(f1<0)j-=0.5;if((d7<l)||(d7>q)||(d8<j)||(d8>o)||(fW<l)||(fW>q)||(fX<j)||(fX>
o)){aB=g6(c,aC,aB,true,l+b_);aB=g6(c,aC,aB,true,q+b_);aB=jP(c,aB,l+b_,q+b_);aB=g5(
c,aC,aB,true,j+b$);aB=g5(c,aC,aB,true,o+b$);aB=jO(c,aB,j+b$,o+b$);if(aB!==2)return;
}cL(a,z.aw,a.fu);if(a.by&&!ap)a.disable(a.BLEND);if(!a.by&&ap)a.enable(a.BLEND);
a.by=ap;a.bufferSubData(a.ARRAY_BUFFER,0,a.bW);a.drawArrays(a.LINES,0,aB);if(this.
aX)dq(a);};d.fz=function(s,ah,v,r,al,ak,ag,aj,ap){var a=this.aW;var z=null;var l
,j,q,o;if(s&&(ah>=0)&&(ah<s.NoOfFrames))z=s.bw[ah];if(!z||(z.aw.Format!==this.bG
)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}l=Math.max(v[0],r[0],0);j=Math.max(v[1],r[1],0);q=Math.min(v[2],r[2],s.
FrameSize[0]);o=Math.min(v[3],r[3],s.FrameSize[1]);var clear=!al&&!ak&&!aj&&!ag;
if((q<=l)||(o<=j)||(clear&&ap))return;if(clear){var c=a.fo;c[0]=c[12]=l+z.aD[0];
c[1]=c[7]=j+z.aD[1];c[6]=c[18]=q+z.aD[0];c[19]=c[13]=o+z.aD[1];if(a.by&&!ap)a.disable(
a.BLEND);if(!a.by&&ap)a.enable(a.BLEND);a.by=ap;cL(a,z.aw,clear?a.gf:a.fu);a.bufferSubData(
a.ARRAY_BUFFER,0,a.bW);a.drawArrays(a.TRIANGLE_STRIP,0,4);if(this.aX)dq(a);return;
}var dS=(al!==aj)||(ak!==ag);var dL=(al!==ak)||(aj!==ag);var dB=dS||dL;var oj=dS&&((
j!==r[1])||(o!==r[3]));var n1=dL&&((l!==r[0])||(q!==r[2]));if(oj){var be=1/(r[3]-
r[1]);var a0=(j-r[1])*be;var aJ=(r[3]-o)*be;if(al!==aj){var cg=al;if(a0)al=aF(cg
,aj,a0);if(aJ)aj=aF(aj,cg,aJ);}if(ak!==ag){var ew=ak;if(a0)ak=aF(ew,ag,a0);if(aJ
)ag=aF(ag,ew,aJ);}}if(n1){var be=1/(r[2]-r[0]);var bJ=(l-r[0])*be;var am=(r[2]-q
)*be;if(al!==ak){var cg=al;if(bJ)al=aF(cg,ak,bJ);if(am)ak=aF(ak,cg,am);}if(aj!==
ag){var er=aj;if(bJ)aj=aF(er,ag,bJ);if(am)ag=aF(ag,er,am);}}var c=a.fo;var aC=a.
ga;c[0]=c[12]=l+z.aD[0];c[1]=c[7]=j+z.aD[1];c[6]=c[18]=q+z.aD[0];c[19]=c[13]=o+z.
aD[1];aC[5]=al;aC[11]=ak;aC[23]=ag;aC[17]=aj;if(a.by&&!ap)a.disable(a.BLEND);if(
!a.by&&ap)a.enable(a.BLEND);a.by=ap;cL(a,z.aw,clear?a.gf:a.fu);a.bufferSubData(a.
ARRAY_BUFFER,0,a.bW);a.drawArrays(a.TRIANGLE_STRIP,0,4);if(this.aX)dq(a);};d.oN=
function(s,ah,v,r,d1,al,ak,ag,aj,ap){if(d1<=0)return;if(((d1*2)>=(r[2]-r[0]))||((
d1*2)>=(r[3]-r[1]))){this.fz(s,ah,v,r,al,ak,ag,aj,ap);return;}var bV=[0,0,0,0];var
eq;bV[0]=r[0];bV[1]=r[1];bV[2]=r[2];bV[3]=r[1]+d1;eq=this.gj(v,bV);this.fz(s,ah,
eq,r,al,ak,ag,aj,ap);bV[0]=r[0];bV[1]=r[3]-d1;bV[2]=r[2];bV[3]=r[3];eq=this.gj(v
,bV);this.fz(s,ah,eq,r,al,ak,ag,aj,ap);bV[0]=r[0];bV[1]=r[1]+d1;bV[2]=r[0]+d1;bV[
3]=r[3]-d1;eq=this.gj(v,bV);this.fz(s,ah,eq,r,al,ak,ag,aj,ap);bV[0]=r[2]-d1;bV[2
]=r[2];eq=this.gj(v,bV);this.fz(s,ah,eq,r,al,ak,ag,aj,ap);};d.oG=function(iZ){if(
iZ<1)return null;return{gd:iZ,mh:0,mg:0,ay:0,bx:true,bf:[0,0,0,0],cR:[1.0,0.0,0.0
,0.0,1.0,0.0],im:[],bK:new Array(iZ)};};d.oU=function(m){if(m){delete m.bK;delete
m.im;}};d.oZ=function(m){if(!m)return 0;return m.gd;};d.pc=function(m,a$,gu){if(
!m||(a$>=m.gd)||(a$<0))return false;if(gu<=0)gu=0;var p=null;if(gu)p={fp:gu,ay:0
,eb:false,dn:false,cb:false,bx:true,bf:[0,0,0,0],Data:new Float32Array((gu+1)*8)
};if(m.bK[a$])m.bx=false;m.bK[a$]=p;return false;};d.oA=function(m,a$,aZ,a4){var
p=m?m.bK[a$]:null;if(!p)return;var i=m.cR;var ae=aZ;var av=a4;if((i[0]!==1)||(i[
1]!==0)||(i[2]!==0)||(i[3]!==0)||(i[4]!==1)||(i[5]!==0)){ae=aZ*i[0]+a4*i[1]+i[2];
av=aZ*i[3]+a4*i[4]+i[5];}p.cb=false;p.dn=false;p.bx=false;p.ay=0;p.eb=true;p.Data[
0]=ae;p.Data[1]=av;m.bx=false;};d.ov=function(m,a$,aZ,a4){var p=m?m.bK[a$]:null;
if(!p||p.cb||((p.ay+1)>p.fp))return 0;var i=m.cR;var ax=p.Data;var bd=p.ay*2+2;var
ae=aZ;var av=a4;p.eb=true;p.dn=true;p.bx=false;m.bx=false;if((i[0]!==1)||(i[1]!==
0)||(i[2]!==0)||(i[3]!==0)||(i[4]!==1)||(i[5]!==0)){ae=aZ*i[0]+a4*i[1]+i[2];av=aZ
*i[3]+a4*i[4]+i[5];}ax[bd]=ae;ax[bd+1]=av;return p.ay++;};d.os=function(m,a$,iS,
iT,aZ,a4,bm){var p=m?m.bK[a$]:null;if((bm<=0)||!p||p.cb||((p.ay+bm)>p.fp))return 0;
var i=m.cR;var ax=p.Data;var bd=p.ay*2;var k4=iS;var k5=iT;var ae=aZ;var av=a4;var
cP=1/bm;var a0;var e;p.eb=true;p.dn=true;p.bx=false;m.bx=false;if((i[0]!==1)||(i[
1]!==0)||(i[2]!==0)||(i[3]!==0)||(i[4]!==1)||(i[5]!==0)){k4=iS*i[0]+iT*i[1]+i[2];
k5=iS*i[3]+iT*i[4]+i[5];ae=aZ*i[0]+a4*i[1]+i[2];av=aZ*i[3]+a4*i[4]+i[5];}var jF=
ax[bd++];var jG=ax[bd++];for(a0=cP,e=1;e<bm;e++,a0+=cP){var eH=1-a0;var gP=eH*eH;
var br=a0*a0;var gK=2*eH*a0;ax[bd++]=gP*jF+gK*k4+br*ae;ax[bd++]=gP*jG+gK*k5+br*av;
}ax[bd++]=ae;ax[bd++]=av;return(p.ay+=e)-e;};d.ot=function(m,a$,iO,iP,iQ,iR,aZ,a4
,bm){var p=m?m.bK[a$]:null;if((bm<=0)||!p||p.cb||((p.ay+bm)>p.fp))return 0;var i=
m.cR;var ax=p.Data;var bd=p.ay*2;var k0=iO;var k1=iP;var k2=iQ;var k3=iR;var ae=
aZ;var av=a4;var cP=1/bm;var a0;var e;p.eb=true;p.dn=true;p.bx=false;m.bx=false;
if((i[0]!==1)||(i[1]!==0)||(i[2]!==0)||(i[3]!==0)||(i[4]!==1)||(i[5]!==0)){k0=iO
*i[0]+iP*i[1]+i[2];k1=iO*i[3]+iP*i[4]+i[5];k2=iQ*i[0]+iR*i[1]+i[2];k3=iQ*i[3]+iR
*i[4]+i[5];ae=aZ*i[0]+a4*i[1]+i[2];av=aZ*i[3]+a4*i[4]+i[5];}var jF=ax[bd++];var jG=
ax[bd++];for(a0=cP,e=1;e<bm;e++,a0+=cP){var eH=1-a0;var br=a0*a0;var gP=eH*eH;var
k_=eH*gP;var gK=3*gP*a0;var k$=3*eH*br;var la=a0*br;ax[bd++]=k_*jF+gK*k0+k$*k2+la
*ae;ax[bd++]=k_*jG+gK*k1+k$*k3+la*av;}ax[bd++]=ae;ax[bd++]=av;return(p.ay+=e)-e;
};d.or=function(m,a$,m0,m1,m9,m_,gA,hn,bm){var p=m?m.bK[a$]:null;var cO=bm;if(p&&
p.eb)cO++;if((bm<=0)||(gA===hn)||!p||p.cb||((p.ay+cO)>p.fp))return 0;gA*=this.iy;
hn*=this.iy;var i=m.cR;var ax=p.Data;var bd=p.ay*2+(cO-bm)*2;var cP=(hn-gA)/bm;var
e;p.eb=true;p.dn=true;p.bx=false;m.bx=false;var nP=(i[0]!==1)||(i[1]!==0)||(i[2]
!==0)||(i[3]!==0)||(i[4]!==1)||(i[5]!==0);for(e=0;e<=bm;e++,gA+=cP){var bk=(e===
bm)?hn:gA;var ae=m0+m9*Math.cos(bk);var av=m1+m_*Math.sin(bk);if(nP){ax[bd++]=ae
*i[0]+av*i[1]+i[2];ax[bd++]=ae*i[3]+av*i[4]+i[5];}else{ax[bd++]=ae;ax[bd++]=av;}
}return(p.ay+=cO)-bm;};d.ou=function(m,a$,kv,nd,ht,bm){var dx=m?m.bK[a$]:null;var
h9=kv?kv.bK[nd]:null;var cO=bm;if(!bm||!dx||!h9||(ht<0))return 0;if(bm<0)cO=bm=h9.
ay-ht;if((ht+cO)>h9.ay)return 0;if(dx.eb)cO++;if(((dx.ay+cO)>dx.fp)||dx.cb)return 0;
dx.eb=true;dx.dn=true;dx.bx=false;m.bx=false;var i=m.cR;var ax=dx.Data;var cP=h9.
Data;var bd=dx.ay*2+(cO-bm)*2;var am=ht*2;var e=0;if((i[0]!==1)||(i[1]!==0)||(i[
2]!==0)||(i[3]!==0)||(i[4]!==1)||(i[5]!==0))for(;e<=bm;e++,am+=2){ax[bd++]=cP[am
]*i[0]+cP[am+1]*i[1]+i[2];ax[bd++]=cP[am]*i[3]+cP[am+1]*i[4]+i[5];}else for(;e<=
bm;e++){ax[bd++]=cP[am++];ax[bd++]=cP[am++];}return(dx.ay+=cO)-bm;};d.oE=function(
m,a$){var p=m?m.bK[a$]:null;if(!p||p.cb||!p.dn)return;p.dn=false;p.cb=true;m.bx=
false;var ax=p.Data;var b_=ax[p.ay*2+0]-ax[0];var b$=ax[p.ay*2+1]-ax[1];if((b_>0.001
)||(b_<-0.001)||(b$>0.001)||(b$<-0.001)){p.ay++;ax[p.ay*2+0]=ax[0];ax[p.ay*2+1]=
ax[1];}else{ax[p.ay*2+0]=ax[0];ax[p.ay*2+1]=ax[1];}};d.p5=function(m,a$,e3,kx,ng
){var p=m?m.bK[a$]:null;if(!p||p.cb||!p.dn)return 0;if(e3<=0)return 0;if(e3>p.ay
)e3=p.ay;p.Data.copyWithin(0,e3*2);if(kx!==0.0){var ax=p.Data;var e;for(e=0;e<ax.
length;e+=2){ax[e]+=kx;ax[e+1]+=ng;}}p.dn=e3<p.ay;p.ay=p.ay-e3;p.bx=false;m.bx=false;
return e3;};d.p4=function(m,a$,cM,aZ,a4){var p=m?m.bK[a$]:null;if(!p||(cM>p.ay)||(
cM<0))return;var i=m.cR;var ax=p.Data;var ae=aZ;var av=a4;if((i[0]!==1)||(i[1]!==
0)||(i[2]!==0)||(i[3]!==0)||(i[4]!==1)||(i[5]!==0)){ae=aZ*i[0]+a4*i[1]+i[2];av=aZ
*i[3]+a4*i[4]+i[5];}ax[cM*2+0]=ae;ax[cM*2+1]=av;if(!cM&&p.cb){ax[p.ay*2+0]=ae;ax[
p.ay*2+1]=av;}if((cM===p.ay)&&p.cb){ax[0]=ae;ax[1]=av;}p.bx=false;m.bx=false;};d.
o7=function(m,a$,cM){var p=m?m.bK[a$]:null;if(!p||(cM>p.ay)||(cM<0))return 0.0;return p.
Data[cM*2+0];};d.o8=function(m,a$,cM){var p=m?m.bK[a$]:null;if(!p||(cM>p.ay)||(cM<
0))return 0.0;return p.Data[cM*2+1];};d.o3=function(m,a$){var p=m?m.bK[a$]:null;
return p?p.ay:0;};d.o2=function(m,a$){var p=m?m.bK[a$]:null;if(!p||p.cb)return 0;
return p.fp-p.ay;};d.pj=function(m,a$){var p=m?m.bK[a$]:null;return p?p.cb:false;
};d.qf=function(m,kg,kh){if(!m)return;var i=m.cR;i[2]=i[2]+(i[0]*kg)+(i[1]*kh);i[
5]=i[5]+(i[3]*kg)+(i[4]*kh);};d.pQ=function(m,kt,ku){if(!m)return;var i=m.cR;i[0
]*=kt;i[1]*=ku;i[3]*=kt;i[4]*=ku;};d.pP=function(m,kd){if(!m)return;var i=m.cR;var
sin=Math.sin(kd*=this.iy);var cos=Math.cos(kd);var ln,lo,lp,lq;ln=(i[0]*cos)+(i[
1]*sin);lo=(i[0]*-sin)+(i[1]*cos);lp=(i[3]*cos)+(i[4]*sin);lq=(i[3]*-sin)+(i[4]*
cos);i[0]=ln;i[1]=lo;i[3]=lp;i[4]=lq;};d.pK=function(m){if(!m)return;var i=m.cR;
m.im.push([i[0],i[1],i[2],i[3],i[4],i[5]]);};d.pJ=function(m){if(!m)return;var i=
m.cR;var ff=m.im.pop();if(ff){i[0]=ff[0];i[1]=ff[1];i[2]=ff[2];i[3]=ff[3];i[4]=ff[
4];i[5]=ff[5];}else{i[0]=1;i[1]=0;i[2]=0;i[3]=0;i[4]=1;i[5]=0;}};d.pb=function(m
){if(!m)return;var i=m.cR;i[0]=1;i[1]=0;i[2]=0;i[3]=0;i[4]=1;i[5]=0;};d.hj=function(
m){if(!m||m.bx)return;var f7=m.bK;var f3=m.gd;var i7=[0,0,0,0];var lt=0;var lr=0;
var cO=0;var e;for(e=0;e<f3;e++){var p=f7[e];if(p&&!p.bx&&p.ay){var ax=p.Data;var
bd=2;var l=ax[0];var j=ax[1];var q=l;var o=j;var aB=p.ay;for(;aB>0;aB--,bd+=2){var
ae=ax[bd];var av=ax[bd+1];if(ae<l)l=ae;if(ae>q)q=ae;if(av<j)j=av;if(av>o)o=av;}p.
bf=[l|0,j|0,(q+1)|0,(o+1)|0];p.bx=true;}if(p&&p.bx){lt+=p.dn?1:0;lr+=p.cb?1:0;cO+=
p.ay;i7=this.mW(i7,p.bf);}}m.mh=lt;m.mg=lr;m.ay=cO;m.bf=i7;m.bx=true;};d.mC=function(
aP,m,cV,ac,gq,i3){var bq=ac[0];var aR=ac[1];var l,j,q,o;if((aP[0]<=0)||(aP[1]<=0
)||!m)return null;this.hj(m);if(!cV){j=aR+m.bf[1]-1;o=aR+m.bf[3]+1;}else{aR+=aP[
1];j=aR-m.bf[3]-1;o=aR-m.bf[1]+1;}l=bq+m.bf[0]-1;q=bq+m.bf[2]+1;l=Math.max(l,0);
j=Math.max(j,0);q=Math.min(q,aP[0]);o=Math.min(o,aP[1]);if((q<=l)||(o<=j)||!m.ay
)return null;var a=this.aW;var au=document.createElement("canvas");var de=a.createTexture(
);var af={};var bQ={aw:af,aD:[0,0]};var bitmap={FrameSize:aP,FrameDelay:0,NoOfFrames:
1,b1:[af],bw:[bQ]};au.width=aP[0];au.height=aP[1];var aG=au.getContext("2d");var
f7=m.bK;var f3=m.gd;var e;aG.translate(bq,aR);aG.scale(1,cV?-1:1);aG.beginPath();
for(e=0;e<f3;e++){var p=f7[e];if(p&&p.ay){var aA=p.Data;var jo=p.ay*2+2;var bC;aG.
moveTo(aA[0],aA[1]);for(bC=2;bC<jo;bC+=2)aG.lineTo(aA[bC],aA[bC+1]);if(p.cb)aG.closePath(
);}}aG.fill(i3?"nonzero":"evenodd");a.ed=null;a.bindTexture(a.TEXTURE_2D,de);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER
,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texImage2D(a.TEXTURE_2D,0,a.RGBA
,a.RGBA,a.UNSIGNED_BYTE,au);af.Format=d.iI;af.Width=aP[0];af.Height=aP[1];af.gh=
aP[0];af.gg=aP[1];af.c4=1/aP[0];af.c3=1/aP[1];af.dE=2/aP[0];af.dD=2/aP[1];af.b6=
de;af.Framebuffer=null;return bitmap;};d.mD=function(aP,m,cV,ac,as,ep,e1,gq){var
cu=ep&0x0000FF;var ct=ep&0x00FF00;var dR=ep&0xFF0000;var bq=ac[0];var aR=ac[1];var
l,j,q,o;var bR;if((aP[0]<=0)||(aP[1]<=0)||!m||(as<=0))return null;if((cu===this.
hi)&&(as<4))cu=this.iE;if((ct===this.hh)&&(as<4))ct=this.iC;if((dR===this.iH)&&(
as<3))dR=this.iF;if(dR===this.iG){if(e1>1)bR=(e1*as*0.5)|0;else bR=(as*0.5)|0;}else
if((cu===this.gn)||(ct===this.gm))bR=(as*0.75)|0;else bR=(as+0.5)|0;this.hj(m);if(
!cV){j=aR+m.bf[1]-bR-1;o=aR+m.bf[3]+bR+1;}else{aR+=aP[1];j=aR-m.bf[3]-bR-1;o=aR-
m.bf[1]+bR+1;}l=bq+m.bf[0]-bR-1;q=bq+m.bf[2]+bR+1;l=Math.max(l,0);j=Math.max(j,0
);q=Math.min(q,aP[0]);o=Math.min(o,aP[1]);if((q<=l)||(o<=j)||!m.ay)return;var a=
this.aW;var au=document.createElement("canvas");var de=a.createTexture();var af={
};var bQ={aw:af,aD:[0,0]};var bitmap={FrameSize:aP,FrameDelay:0,NoOfFrames:1,b1:[
af],bw:[bQ]};au.width=aP[0];au.height=aP[1];var aG=au.getContext("2d");var f7=m.
bK;var f3=m.gd;var e;aG.translate(bq,aR);aG.scale(1,cV?-1:1);aG.beginPath();for(
e=0;e<f3;e++){var p=f7[e];if(p&&p.ay){var aA=p.Data;var jo=p.ay*2+2;var bC;aG.moveTo(
aA[0],aA[1]);for(bC=2;bC<jo;bC+=2)aG.lineTo(aA[bC],aA[bC+1]);if(p.cb)aG.closePath(
);}}if(as!==1.0)aG.lineWidth=as;if(dR===this.iG)aG.miterLimit=e1;else if(dR===this.
iF)aG.lineJoin="bevel";else if(dR===this.iH)aG.lineJoin="round";if((cu===this.hi
)&&(ct===this.hh)){cu=ct=this.iD;aG.lineCap="round";}else if((cu===this.gn)&&(ct===
this.gm)){cu=ct=this.iD;aG.lineCap="square";}aG.stroke();if((cu!==this.iD)||(ct!==
this.mU)){aG.beginPath();for(e=0;e<f3;e++){var p=f7[e];if(p&&p.ay&&!p.cb){var aA=
p.Data;var f6=0;var f5=p.ay*2+1;var di=aA[f6++];var dk=aA[f6++];var dj=aA[f5--];
var dh=aA[f5--];if((cu===this.gn)||(cu===this.iE)){var bY,b0;do{bY=aA[f6++];b0=aA[
f6++];}while((bY===di)&&(b0===dk)&&(f6<f5));bY=di-bY;b0=dk-b0;if(bY||b0){var bD=
Math.sqrt(bY*bY+b0*b0);var c0,c1;c0=bY/bD;bY=c0*as*0.5;c1=b0/bD;b0=c1*as*0.5;if(
cu===this.gn){aG.moveTo(di+b0-c0,dk-bY-c1);aG.lineTo(di-b0-c0,dk+bY-c1);aG.lineTo(
di-b0+bY,dk+bY+b0);aG.lineTo(di+b0+bY,dk-bY+b0);}else{aG.moveTo(di+b0,dk-bY);aG.
lineTo(di+b0-c0,dk-bY-c1);aG.lineTo(di-b0-c0,dk+bY-c1);aG.lineTo(di-b0,dk+bY);aG.
lineTo(di+bY,dk+b0);}aG.closePath();}}else if(cu===this.hi)aG.arc(di,dk,as/2,0,2
*Math.PI);if((ct===this.gm)||(ct===this.iC)){var bX,bZ;do{bZ=aA[f5--];bX=aA[f5--
];}while((bX===dh)&&(bZ===dj)&&(f6<f5));bX=dh-bX;bZ=dj-bZ;if(bX||bZ){var bD=Math.
sqrt(bX*bX+bZ*bZ);var c0,c1;c0=bX/bD;bX=c0*as*0.5;c1=bZ/bD;bZ=c1*as*0.5;if(ct===
this.gm){aG.moveTo(dh+bZ-c0,dj-bX-c1);aG.lineTo(dh-bZ-c0,dj+bX-c1);aG.lineTo(dh-
bZ+bX,dj+bX+bZ);aG.lineTo(dh+bZ+bX,dj-bX+bZ);}else{aG.moveTo(dh+bZ,dj-bX);aG.lineTo(
dh+bZ-c0,dj-bX-c1);aG.lineTo(dh-bZ-c0,dj+bX-c1);aG.lineTo(dh-bZ,dj+bX);aG.lineTo(
dh+bX,dj+bZ);}aG.closePath();}}else if(ct===this.hh)aG.arc(dh,dj,as/2,0,2*Math.PI
);}}aG.fill();}a.ed=null;a.bindTexture(a.TEXTURE_2D,de);a.texParameteri(a.TEXTURE_2D
,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER
,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texImage2D(a.TEXTURE_2D,0,a.RGBA
,a.RGBA,a.UNSIGNED_BYTE,au);af.Format=d.iI;af.Width=aP[0];af.Height=aP[1];af.gh=
aP[0];af.gg=aP[1];af.c4=1/aP[0];af.c3=1/aP[1];af.dE=2/aP[0];af.dD=2/aP[1];af.b6=
de;af.Framebuffer=null;return bitmap;};d.oP=function(s,m,ah,v,r,cV,ac,al,ak,ag,aj
,ap,gq,i3){var a=this.aW;var z=null;var bq=ac[0];var aR=ac[1];var l,j,q,o;if(s&&(
ah>=0)&&(ah<s.NoOfFrames))z=s.bw[ah];if(!z||(z.aw.Format!==this.bG)){console.log(
"EmWi error: Invalid destination bitmap in the drawing operation.");return;}if(!
m){if(this.aX)console.log("EmWi error: Invalid path object in the drawing operation."
);return;}this.hj(m);if(!cV){aR+=r[1];j=aR+m.bf[1]-1;o=aR+m.bf[3]+1;}else{aR+=r[
3];j=aR-m.bf[3]-1;o=aR-m.bf[1]+1;}bq+=r[0];l=bq+m.bf[0]-1;q=bq+m.bf[2]+1;l=Math.
max(v[0],r[0],l,0);j=Math.max(v[1],r[1],j,0);q=Math.min(v[2],r[2],q,s.FrameSize[
0]);o=Math.min(v[3],r[3],o,s.FrameSize[1]);bq-=l;if((q<=l)||(o<=j)||!m.ay)return;
if(cV)aR-=o;else aR-=j;var bitmap=this.mC([q-l,o-j],m,cV,[bq,aR],gq,i3);if(bitmap===
null)return;this.ef(s,bitmap,ah,0,[l,j,q,o],r,[r[0]-l,r[1]-j],al,ak,ag,aj,ap);a.
deleteTexture(bitmap.b1[0].b6);};d.qc=function(s,m,ah,v,r,cV,ac,as,ep,e1,al,ak,ag
,aj,ap,gq){var cu=ep&0x0000FF;var ct=ep&0x00FF00;var dR=ep&0xFF0000;var a=this.aW;
var z=null;var bq=ac[0];var aR=ac[1];var l,j,q,o;var bR;if(s&&(ah>=0)&&(ah<s.NoOfFrames
))z=s.bw[ah];if(!z||(z.aw.Format!==this.bG)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!m){if(this.aX)console.log("EmWi error: Invalid path object in the drawing operation."
);return;}this.hj(m);if((cu===this.hi)&&(as<4))cu=this.iE;if((ct===this.hh)&&(as<
4))ct=this.iC;if((dR===this.iH)&&(as<3))dR=this.iF;if(dR===this.iG){if(e1>1)bR=(
e1*as*0.5)|0;else bR=(as*0.5)|0;}else if((cu===this.gn)||(ct===this.gm))bR=(as*0.75
)|0;else bR=(as+0.5)|0;if(!cV){aR+=r[1];j=aR+m.bf[1]-bR-1;o=aR+m.bf[3]+bR+1;}else{
aR+=r[3];j=aR-m.bf[3]-bR-1;o=aR-m.bf[1]+bR+1;}bq+=r[0];l=bq+m.bf[0]-bR-1;q=bq+m.
bf[2]+bR+1;l=Math.max(v[0],r[0],l,0);j=Math.max(v[1],r[1],j,0);q=Math.min(v[2],r[
2],q,s.FrameSize[0]);o=Math.min(v[3],r[3],o,s.FrameSize[1]);bq-=l;if((q<=l)||(o<=
j)||!m.ay||(as<=0))return;if(cV)aR-=o;else aR-=j;var bitmap=this.mD([q-l,o-j],m,
cV,[bq,aR],as,ep,e1,gq);if(bitmap===null)return;this.ef(s,bitmap,ah,0,[l,j,q,o],
r,[r[0]-l,r[1]-j],al,ak,ag,aj,ap);a.deleteTexture(bitmap.b1[0].b6);};d.ef=function(
s,at,ah,bh,v,r,cH,al,ak,ag,aj,ap){var a=this.aW;var z=null;var src=null;var l=r[
0];var j=r[1];var q=r[2];var o=r[3];var cQ=cH[0];var dd=cH[1];if(s&&(ah>=0)&&(ah<
s.NoOfFrames))z=s.bw[ah];if(at&&(bh>=0)&&(bh<at.NoOfFrames))src=at.bw[bh];if(at.
dU)return;if(!z||(z.aw.Format!==this.bG)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){if(this.aX)console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}q=Math.min(q,l+at.FrameSize[0]-cH[0]);o=Math.min(o,j+at.FrameSize[1]-cH[
1]);l=Math.max(l,l-cH[0]);j=Math.max(j,j-cH[1]);l=Math.max(v[0],l,0);j=Math.max(
v[1],j,0);q=Math.min(v[2],q,s.FrameSize[0]);o=Math.min(v[3],o,s.FrameSize[1]);if((
q<=l)||(o<=j))return;var dS=(al!==aj)||(ak!==ag);var dL=(al!==ak)||(aj!==ag);var
dB=dS||dL;var fa=dB||(((al>>24)&0xFF)<255);cQ+=l-r[0]+src.aD[0];dd+=j-r[1]+src.aD[
1];var aS=cQ*src.aw.c4;var aN=dd*src.aw.c3;var a8=(cQ+q-l)*src.aw.c4;var a5=(dd+
o-j)*src.aw.c3;if(dS&&((j!==r[1])||(o!==r[3]))){var be=1/(r[3]-r[1]);var a0=(j-r[
1])*be;var aJ=(r[3]-o)*be;if(al!==aj){var cg=al;if(a0)al=aF(cg,aj,a0);if(aJ)aj=aF(
aj,cg,aJ);}if(ak!==ag){var ew=ak;if(a0)ak=aF(ew,ag,a0);if(aJ)ag=aF(ag,ew,aJ);}}if(
dL&&((l!==r[0])||(q!==r[2]))){var be=1/(r[2]-r[0]);var bJ=(l-r[0])*be;var am=(r[
2]-q)*be;if(al!==ak){var cg=al;if(bJ)al=aF(cg,ak,bJ);if(am)ak=aF(ak,cg,am);}if(aj
!==ag){var er=aj;if(bJ)aj=aF(er,ag,bJ);if(am)ag=aF(ag,er,am);}}var c=a.fo;var aC=
a.ga;c[0]=c[12]=l+z.aD[0];c[1]=c[7]=j+z.aD[1];c[6]=c[18]=q+z.aD[0];c[19]=c[13]=o+
z.aD[1];c[2]=aS;c[3]=aN;c[4]=1;c[8]=a8;c[9]=aN;c[10]=1;c[20]=a8;c[21]=a5;c[22]=1;
c[14]=aS;c[15]=a5;c[16]=1;aC[5]=al;aC[11]=ak;aC[23]=ag;aC[17]=aj;if(src.aw.Format===
this.bG)cL(a,z.aw,fa?a.fw:a.fv);else cL(a,z.aw,a.eQ);fx(a,src.aw,false);if(a.by&&
!ap)a.disable(a.BLEND);if(!a.by&&ap)a.enable(a.BLEND);a.by=ap;a.bufferSubData(a.
ARRAY_BUFFER,0,a.bW);a.drawArrays(a.TRIANGLE_STRIP,0,4);if(this.aX)dq(a);};d.go=
function(s,at,ah,bh,v,r,bU,cH,al,ak,ag,aj,ap){var a=this.aW;var z=null;var src=null;
var l=r[0];var j=r[1];var q=r[2];var o=r[3];var eK=bU[0];var eL=bU[1];var f8=bU[
2];var f9=bU[3];if(s&&(ah>=0)&&(ah<s.NoOfFrames))z=s.bw[ah];if(at&&(bh>=0)&&(bh<
at.NoOfFrames))src=at.bw[bh];if(at.dU)return;if(!z||(z.aw.Format!==this.bG)){console.
log("EmWi error: Invalid destination bitmap in the drawing operation.");return;}
if(!src){if(this.aX)console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}eK=Math.max(eK,0);eL=Math.max(eL,0);f8=Math.min(f8,at.FrameSize[0]);f9=
Math.min(f9,at.FrameSize[1]);var gY=f8-eK;var gT=f9-eL;l=Math.max(v[0],l,0);j=Math.
max(v[1],j,0);q=Math.min(v[2],q,s.FrameSize[0]);o=Math.min(v[3],o,s.FrameSize[1]
);if((q<=l)||(o<=j)||(gY<=0)||(gT<=0))return;var dS=(al!==aj)||(ak!==ag);var dL=(
al!==ak)||(aj!==ag);var dB=dS||dL;var fa=dB||(((al>>24)&0xFF)<255);var h7;if(dS&&((
j!==r[1])||(o!==r[3]))){var be=1/(r[3]-r[1]);var a0=(j-r[1])*be;var aJ=(r[3]-o)*
be;if(al!==aj){var cg=al;if(a0)al=aF(cg,aj,a0);if(aJ)aj=aF(aj,cg,aJ);}if(ak!==ag
){var ew=ak;if(a0)ak=aF(ew,ag,a0);if(aJ)ag=aF(ag,ew,aJ);}}if(dL&&((l!==r[0])||(q
!==r[2]))){var be=1/(r[2]-r[0]);var bJ=(l-r[0])*be;var am=(r[2]-q)*be;if(al!==ak
){var cg=al;if(bJ)al=aF(cg,ak,bJ);if(am)ak=aF(ak,cg,am);}if(aj!==ag){var er=aj;if(
bJ)aj=aF(er,ag,bJ);if(am)ag=aF(ag,er,am);}}var c=a.fo;var aC=a.ga;if(src.aw.Format===
this.bG)cL(a,z.aw,h7=(fa?a.it:a.is));else cL(a,z.aw,h7=a.iu);fx(a,src.aw,false);
a.uniform2f(h7.mu,gY*src.aw.c4,gT*src.aw.c3);a.uniform2f(h7.mt,(eK+src.aD[0])*src.
aw.c4,(eL+src.aD[1])*src.aw.c3);eK=(cH[0]+l-r[0]+gY)/gY;eL=(cH[1]+j-r[1]+gT)/gT;
f8=eK+((q-l)/gY);f9=eL+((o-j)/gT);c[0]=c[12]=l+z.aD[0];c[1]=c[7]=j+z.aD[1];c[6]=
c[18]=q+z.aD[0];c[19]=c[13]=o+z.aD[1];c[2]=eK;c[3]=eL;c[4]=1;c[8]=f8;c[9]=eL;c[10
]=1;c[20]=f8;c[21]=f9;c[22]=1;c[14]=eK;c[15]=f9;c[16]=1;aC[5]=al;aC[11]=ak;aC[23
]=ag;aC[17]=aj;if(a.by&&!ap)a.disable(a.BLEND);if(!a.by&&ap)a.enable(a.BLEND);a.
by=ap;a.bufferSubData(a.ARRAY_BUFFER,0,a.bW);a.drawArrays(a.TRIANGLE_STRIP,0,4);
if(this.aX)dq(a);};d.oM=function(s,at,ah,bh,v,r,bU,cc,cd,co,cn,ki,al,ak,ag,aj,ap
){var cs=[0,0];var a1=r[0];var a2=r[1];var aK=r[2];var aM=r[3];var aS=bU[0];var aN=
bU[1];var a8=bU[2];var a5=bU[3];var cJ=aK-a1;var ch=aM-a2;var bi=((a8-aS)/3)|0;var
bb=((a5-aN)/3)|0;var eE=(a8-aS-bi*2)|0;var eD=(a5-aN-bb*2)|0;var lw=0;var jq=0;var
eu=al;var ev=ak;var es=aj;var et=ag;var fU=al;var fV=ak;var fS=aj;var fT=ag;var hM=
al;var hO=ak;var hL=aj;var hN=ag;if((cJ<=0)||(ch<=0)||(eE<=0)||(eD<=0))return;if(
at&&at.dU)return;if(cc&&co&&cd&&cn&&ki&&(cJ==(a8-aS))&&(ch==(a5-aN))){this.ef(s,
at,ah,bh,v,r,[aS,aN],al,ak,ag,aj,ap);return;}if((al!==ak)||(ag!==aj)||(ak!==aj)){
if(cc){fU=aF(al,ak,bi/cJ);fS=aF(aj,ag,bi/cJ);}if(co){fV=aF(ak,al,bi/cJ);fT=aF(ag
,aj,bi/cJ);}if(cd){hM=aF(al,aj,bb/ch);hO=aF(ak,ag,bb/ch);}if(cn){hL=aF(aj,al,bb/
ch);hN=aF(ag,ak,bb/ch);}if(!cc&&!cd)eu=al;if(cc&&!cd)eu=fU;if(!cc&&cd)eu=hM;if(!
co&&!cd)ev=ak;if(co&&!cd)ev=fV;if(!co&&cd)ev=hO;if(!cc&&!cn)es=aj;if(cc&&!cn)es=
fS;if(!cc&&cn)es=hL;if(!co&&!cn)et=ag;if(co&&!cn)et=fT;if(!co&&cn)et=hN;if(cc&&cd
)eu=aF(fU,fS,bb/ch);if(cc&&cn)es=aF(fS,fU,bb/ch);if(co&&cd)ev=aF(fV,fT,bb/ch);if(
co&&cn)et=aF(fT,fV,bb/ch);}if(co&&!cc)lw=bi-cJ;if(cn&&!cd)jq=bb-ch;a8=aS+bi;a5=aN+
bb;aK=a1+bi;aM=a2+bb;if(cc&&cd)this.ef(s,at,ah,bh,v,[a1,a2,aK,aM],[aS,aN],al,fU,
eu,hM,ap);a1+=cJ-bi;aK+=cJ-bi;aS+=bi+eE;a8+=bi+eE;if(co&&cd)this.ef(s,at,ah,bh,v
,[a1,a2,aK,aM],[aS,aN],fV,ak,hO,ev,ap);a2+=ch-bb;aM+=ch-bb;aN+=bb+eD;a5+=bb+eD;if(
co&&cn)this.ef(s,at,ah,bh,v,[a1,a2,aK,aM],[aS,aN],et,hN,ag,fT,ap);a1-=cJ-bi;aK-=
cJ-bi;aS-=bi+eE;a8-=bi+eE;if(cc&&cn)this.ef(s,at,ah,bh,v,[a1,a2,aK,aM],[aS,aN],hL
,es,fS,aj,ap);a2-=ch-bb;aN-=eD;a5-=bb;cs[1]=jq;if(cd)a2+=bb;if(cn)aM-=bb;if(cc)this.
go(s,at,ah,bh,v,[a1,a2,aK,aM],[aS,aN,a8,a5],cs,hM,eu,es,hL,ap);a1+=cJ-bi;aK+=cJ-
bi;aS+=bi+eE;a8+=bi+eE;if(co)this.go(s,at,ah,bh,v,[a1,a2,aK,aM],[aS,aN,a8,a5],cs
,ev,hO,hN,et,ap);if(cd)a2-=bb;aM=a2+bb;a1-=cJ-bi;aS-=eE;a8-=bi;aN-=bb;a5-=eD;cs[
0]=lw;cs[1]=0;if(cc)a1+=bi;if(co)aK-=bi;if(cd)this.go(s,at,ah,bh,v,[a1,a2,aK,aM]
,[aS,aN,a8,a5],cs,fU,fV,ev,eu,ap);a2+=ch-bb;aM+=ch-bb;aN+=bb+eD;a5+=bb+eD;if(cn)
this.go(s,at,ah,bh,v,[a1,a2,aK,aM],[aS,aN,a8,a5],cs,es,et,fT,fS,ap);if(cc)a1-=bi;
aK=a1+cJ;a2-=ch-bb;aN-=eD;a5-=bb;cs[1]=jq;if(cc)a1+=bi;if(cd)a2+=bb;if(co)aK-=bi;
if(cn)aM-=bb;if(ki)this.go(s,at,ah,bh,v,[a1,a2,aK,aM],[aS,aN,a8,a5],cs,eu,ev,et,
es,ap);};d.qg=function(s,at,ah,bh,v,eX,eZ,cp,eY,fI,ce,fG,e0,b8,fH,fJ,cq,bU,aO,aU
,cD,cE,ap,el){if((eX===fH)&&(eY===fG)&&(eZ===fI)&&(e0===fJ)&&(cp===ce)&&(ce===b8
)&&(b8===cq))this.mA.apply(this,arguments);else this.mB.apply(this,arguments);};
d.mA=function(s,at,ah,bh,v,eX,eZ,cp,eY,fI,ce,fG,e0,b8,fH,fJ,cq,bU,aO,aU,cD,cE,ap
,el){var a=this.aW;var z=null;var src=null;var a1=eX;var a2=eZ;var aK=eY;var aM=
e0;var aS=bU[0];var aN=bU[1];var a8=bU[2];var a5=bU[3];var l=Math.min(a1,aK);var
j=Math.min(a2,aM);var q=Math.max(a1,aK);var o=Math.max(a2,aM);if(s&&(ah>=0)&&(ah<
s.NoOfFrames))z=s.bw[ah];if(at&&(bh>=0)&&(bh<at.NoOfFrames))src=at.bw[bh];if(at.
dU)return;if(!z||(z.aw.Format!==this.bG)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){if(this.aX)console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}aS=Math.max(aS,0);aN=Math.max(aN,0);a8=Math.min(a8,at.FrameSize[0]);a5=
Math.min(a5,at.FrameSize[1]);l=Math.max(v[0],l,0);j=Math.max(v[1],j,0);q=Math.min(
v[2],q,s.FrameSize[0]);o=Math.min(v[3],o,s.FrameSize[1]);if((q<=l)||(o<=j))return;
if((j>a2)||(o<a2)||(j>aM)||(o<aM)){var be=1/(aM-a2);var a0,aJ;if(be>0){a0=(j-a2)
*be;aJ=(aM-o)*be;}else{a0=(o-a2)*be;aJ=(aM-j)*be;}if(aO!==cE){var jb=aO;if(a0)aO=
aF(aO,cE,a0);if(aJ)cE=aF(cE,jb,aJ);}if(aU!==cD){var nG=aU;if(a0)aU=aF(aU,cD,a0);
if(aJ)cD=aF(cD,nG,aJ);}var of=aN;aN=aN+(a5-aN)*a0;a5=a5+(of-a5)*aJ;if(j>a2)a2=j;
else if(o<a2)a2=o;if(j>aM)aM=j;else if(o<aM)aM=o;}if((l>a1)||(q<a1)||(l>aK)||(q<
aK)){var be=1/(aK-a1);var bJ,am;if(be>0){bJ=(l-a1)*be;am=(aK-q)*be;}else{bJ=(q-a1
)*be;am=(aK-l)*be;}if(aO!==aU){var jb=aO;if(bJ)aO=aF(aO,aU,bJ);if(am)aU=aF(aU,jb
,am);}if(cE!==cD){var nH=cE;if(bJ)cE=aF(cE,cD,bJ);if(am)cD=aF(cD,nH,am);}var oe=
aS;aS=aS+(a8-aS)*bJ;a8=a8+(oe-a8)*am;if(l>a1)a1=l;else if(q<a1)a1=q;if(l>aK)aK=l;
else if(q<aK)aK=q;}aS=(aS+src.aD[0])*src.aw.c4;aN=(aN+src.aD[1])*src.aw.c3;a8=(a8+
src.aD[0])*src.aw.c4;a5=(a5+src.aD[1])*src.aw.c3;a1+=z.aD[0];aK+=z.aD[0];a2+=z.aD[
1];aM+=z.aD[1];var fa=(((aO&aU&cD&cE)>>24)&0xFF)<255;var c=a.fo;var aC=a.ga;c[0]=
a1;c[6]=aK;c[1]=a2;c[7]=a2;c[2]=aS;c[8]=a8;c[3]=aN;c[9]=aN;c[4]=1;c[10]=1;aC[5]=
aO;aC[11]=aU;c[12]=a1;c[18]=aK;c[13]=aM;c[19]=aM;c[14]=aS;c[20]=a8;c[15]=a5;c[21
]=a5;c[16]=1;c[22]=1;aC[17]=cE;aC[23]=cD;if(src.aw.Format===this.bG)cL(a,z.aw,fa?
a.fw:a.fv);else cL(a,z.aw,a.eQ);fx(a,src.aw,el);if(a.by&&!ap)a.disable(a.BLEND);
if(!a.by&&ap)a.enable(a.BLEND);a.by=ap;a.bufferSubData(a.ARRAY_BUFFER,0,a.bW);a.
drawArrays(a.TRIANGLE_STRIP,0,4);if(this.aX)dq(a);};d.mB=function(s,at,ah,bh,v,eX
,eZ,cp,eY,fI,ce,fG,e0,b8,fH,fJ,cq,bU,aO,aU,cD,cE,ap,el){var a=this.aW;var z=null;
var src=null;var a1=Math.min(eX,eY,fG,fH);var a2=Math.min(eZ,fI,e0,fJ);var aK=Math.
max(eX,eY,fG,fH);var aM=Math.max(eZ,fI,e0,fJ);var aS=bU[0];var aN=bU[1];var a8=bU[
2];var a5=bU[3];var l=Math.round(a1);var j=Math.round(a2);var q=Math.round(aK);var
o=Math.round(aM);var nK=l;var nM=j;var nL=q;var nN=o;if(s&&(ah>=0)&&(ah<s.NoOfFrames
))z=s.bw[ah];if(at&&(bh>=0)&&(bh<at.NoOfFrames))src=at.bw[bh];if(at.dU)return;if(
!z||(z.aw.Format!==this.bG)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){if(this.aX)console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}aS=Math.max(aS,0);aN=Math.max(aN,0);a8=Math.min(a8,at.FrameSize[0]);a5=
Math.min(a5,at.FrameSize[1]);l=Math.max(v[0],l,0);j=Math.max(v[1],j,0);q=Math.min(
v[2],q,s.FrameSize[0]);o=Math.min(v[3],o,s.FrameSize[1]);if((q<=l)||(o<=j))return;
if((cp<=0)&&(ce<=0)&&(b8<=0)&&(cq<=0)){cp=-cp;ce=-ce;b8=-b8;cq=-cq;}if((cp<0)||(
ce<0)||(b8<0)||(cq<0)){console.log("Emwi error: Not convex destination polygon to warp bitmap."
);return;}var h6=(cp!==ce)||(b8!==cq)||(cp!==b8);var dB=(aO!==aU)||(cD!==cE)||(aO
!==cE)||(aU!==cD);var fa=dB||(((aO>>24)&0xFF)<255);if(h6){var dN=cp;if(ce<dN)dN=
ce;if(b8<dN)dN=b8;if(cq<dN)dN=cq;cp=dN/cp;ce=dN/ce;b8=dN/b8;cq=dN/cq;}else{cp=1;
ce=1;b8=1;cq=1;}aS=(aS+src.aD[0])*src.aw.c4;aN=(aN+src.aD[1])*src.aw.c3;a8=(a8+src.
aD[0])*src.aw.c4;a5=(a5+src.aD[1])*src.aw.c3;var c=a.fo;var aC=a.ga;var b_=z.aD[
0];var b$=z.aD[1];var aB=4;c[0]=eX+b_;c[6]=eY+b_;c[1]=eZ+b$;c[7]=fI+b$;c[2]=aS*cp;
c[8]=a8*ce;c[3]=aN*cp;c[9]=aN*ce;c[4]=cp;c[10]=ce;aC[5]=aO;aC[11]=aU;c[18]=fH+b_;
c[12]=fG+b_;c[19]=fJ+b$;c[13]=e0+b$;c[20]=aS*cq;c[14]=a8*b8;c[21]=a5*cq;c[15]=a5
*b8;c[22]=cq;c[16]=b8;aC[23]=cE;aC[17]=cD;if((l>nK)||(j>nM)||(q<nL)||(o<nN)){aB=
g6(c,aC,aB,false,l+b_);aB=g6(c,aC,aB,false,q+b_);aB=jP(c,aB,l+b_,q+b_);aB=g5(c,aC
,aB,false,j+b$);aB=g5(c,aC,aB,false,o+b$);aB=jO(c,aB,j+b$,o+b$);if(aB<3)return;}
if((src.aw.Format===this.bG)&&!fa)cL(a,z.aw,h6?a.g_:a.fv);else if(src.aw.Format===
this.bG)cL(a,z.aw,h6?a.g$:a.fw);else cL(a,z.aw,h6?a.ha:a.eQ);fx(a,src.aw,el);if(
a.by&&!ap)a.disable(a.BLEND);if(!a.by&&ap)a.enable(a.BLEND);a.by=ap;switch(aB){case
4:{c.set(c.subarray(12,24),18);c.set(c.subarray(24,30),12);break;}case 5:{c.set(
c.subarray(12,30),18);c.set(c.subarray(30,36),12);break;}case 6:{c.set(c.subarray(
12,36),36);c.set(c.subarray(54,60),12);c.set(c.subarray(36,42),18);c.set(c.subarray(
48,54),24);c.set(c.subarray(42,48),30);break;}case 7:{c.set(c.subarray(12,42),42
);c.set(c.subarray(66,72),12);c.set(c.subarray(42,48),18);c.set(c.subarray(60,66
),24);c.set(c.subarray(48,60),30);break;}case 8:{c.set(c.subarray(12,48),48);c.set(
c.subarray(78,84),12);c.set(c.subarray(48,54),18);c.set(c.subarray(72,80),24);c.
set(c.subarray(54,60),30);c.set(c.subarray(66,72),36);c.set(c.subarray(60,66),42
);break;}}a.bufferSubData(a.ARRAY_BUFFER,0,a.bW);a.drawArrays(a.TRIANGLE_STRIP,0
,aB);if(this.aX)dq(a);};function jQ(h,d2,cU,aZ,a4,gB,e7,dX,dZ,dY,d0,b7){var gO=d2.
length*6;var bW=new ArrayBuffer(gO*6*4);var c=new Float32Array(bW);var aC=new Uint32Array(
bW);dX+=cU[0];dZ+=cU[1];dY+=cU[0];d0+=cU[1];for(var e=0;e<d2.length;e++){var ad=
e*36;var u=d2[e];var l=aZ+u.OriginX+cU[0];var j=a4+u.OriginY+cU[1];var q=l+u.Width;
var o=j+u.Height;var bE=u.jK;var b3=u.jL;var bF=u.jM;var br=u.jN;if((j<dZ)&&(o!==
j)){bF+=((dZ-j)/(o-j))*(br-bF);j=dZ;}if((o>d0)&&(o!==j)){br+=((d0-o)/(o-j))*(br-
bF);o=d0;}if((l<dX)&&(l!==q)){bE+=((dX-l)/(q-l))*(b3-bE);l=dX;}if((q>dY)&&(l!==q
)){b3+=((dY-q)/(q-l))*(b3-bE);q=dY;}if(l>q)l=q;if(j>o)j=o;c[ad+0]=l;c[ad+6]=q;c[
ad+1]=j;c[ad+7]=j;c[ad+2]=bE;c[ad+8]=b3;c[ad+3]=bF;c[ad+9]=bF;c[ad+4]=1;c[ad+10]=
1;aC[ad+5]=b7;aC[ad+11]=b7;c[ad+12]=l;c[ad+18]=l;c[ad+13]=o;c[ad+19]=o;c[ad+14]=
bE;c[ad+20]=bE;c[ad+15]=br;c[ad+21]=br;c[ad+16]=1;c[ad+22]=1;aC[ad+17]=b7;aC[ad+
23]=b7;c[ad+24]=q;c[ad+30]=q;c[ad+25]=j;c[ad+31]=o;c[ad+26]=b3;c[ad+32]=b3;c[ad+
27]=bF;c[ad+33]=br;c[ad+28]=1;c[ad+34]=1;aC[ad+29]=b7;aC[ad+35]=b7;aZ+=u.Advance;
if(gB&&((u.dl===0x20)||(u.dl===0xA0))){e7+=gB;aZ+=e7>>16;e7&=0xFFFF;}}h.bufferData(
h.ARRAY_BUFFER,bW,h.STREAM_DRAW);h.drawArrays(h.TRIANGLES,0,gO);h.bufferData(h.ARRAY_BUFFER
,h.bW,h.STREAM_DRAW);}function jR(h,d2,cU,aZ,a4,gB,e7,dX,dZ,dY,d0,r,al,ak,ag,aj){
var gO=d2.length*6;var bW=new ArrayBuffer(gO*6*4);var c=new Float32Array(bW);var
aC=new Uint32Array(bW);var hu=(al&0xFF);var hv=((al>>8)&0xFF);var hw=((al>>16)&0xFF
);var hx=((al>>24)&0xFF);var hy=(ak&0xFF);var hz=((ak>>8)&0xFF);var hA=((ak>>16)&
0xFF);var hB=((ak>>24)&0xFF);var kI=(aj&0xFF);var kJ=((aj>>8)&0xFF);var kK=((aj>>
16)&0xFF);var kL=((aj>>24)&0xFF);var kM=(ag&0xFF);var kN=((ag>>8)&0xFF);var kO=((
ag>>16)&0xFF);var kP=((ag>>24)&0xFF);var lb=1/(r[3]-r[1]);var lc=1/(r[2]-r[0]);dX+=
cU[0];dZ+=cU[1];dY+=cU[0];d0+=cU[1];for(var e=0;e<d2.length;e++){var ad=e*36;var
u=d2[e];var l=aZ+u.OriginX+cU[0];var j=a4+u.OriginY+cU[1];var q=l+u.Width;var o=
j+u.Height;var bE=u.jK;var b3=u.jL;var bF=u.jM;var br=u.jN;if((j<dZ)&&(o!==j)){bF+=((
dZ-j)/(o-j))*(br-bF);j=dZ;}if((o>d0)&&(o!==j)){br+=((d0-o)/(o-j))*(br-bF);o=d0;}
if((l<dX)&&(l!==q)){bE+=((dX-l)/(q-l))*(b3-bE);l=dX;}if((q>dY)&&(l!==q)){b3+=((dY-
q)/(q-l))*(b3-bE);q=dY;}if(l>q)l=q;if(j>o)j=o;var eC=(j-r[1])*lb;var ez=(o-r[1])
*lb;var eA=(l-r[0])*lc;var eB=(q-r[0])*lc;var hG=hu+(kI-hu)*eC;var hH=hv+(kJ-hv)
*eC;var hI=hw+(kK-hw)*eC;var hJ=hx+(kL-hx)*eC;var kU=hy+(kM-hy)*eC;var kV=hz+(kN-
hz)*eC;var kW=hA+(kO-hA)*eC;var kX=hB+(kP-hB)*eC;var hC=hu+(kI-hu)*ez;var hD=hv+(
kJ-hv)*ez;var hE=hw+(kK-hw)*ez;var hF=hx+(kL-hx)*ez;var kQ=hy+(kM-hy)*ez;var kR=
hz+(kN-hz)*ez;var kS=hA+(kO-hA)*ez;var kT=hB+(kP-hB)*ez;var nx=hG+(kU-hG)*eA;var
ny=hH+(kV-hH)*eA;var nz=hI+(kW-hI)*eA;var nA=hJ+(kX-hJ)*eA;var nB=hG+(kU-hG)*eB;
var nC=hH+(kV-hH)*eB;var nD=hI+(kW-hI)*eB;var nE=hJ+(kX-hJ)*eB;var np=hC+(kQ-hC)
*eA;var nq=hD+(kR-hD)*eA;var nr=hE+(kS-hE)*eA;var ns=hF+(kT-hF)*eA;var nt=hC+(kQ-
hC)*eB;var nu=hD+(kR-hD)*eB;var nv=hE+(kS-hE)*eB;var nw=hF+(kT-hF)*eB;al=nx|(ny<<
8)|(nz<<16)|(nA<<24);ak=nB|(nC<<8)|(nD<<16)|(nE<<24);ag=nt|(nu<<8)|(nv<<16)|(nw<<
24);aj=np|(nq<<8)|(nr<<16)|(ns<<24);c[ad+0]=l;c[ad+6]=q;c[ad+1]=j;c[ad+7]=j;c[ad+
2]=bE;c[ad+8]=b3;c[ad+3]=bF;c[ad+9]=bF;c[ad+4]=1;c[ad+10]=1;aC[ad+5]=al;aC[ad+11
]=ak;c[ad+12]=l;c[ad+18]=l;c[ad+13]=o;c[ad+19]=o;c[ad+14]=bE;c[ad+20]=bE;c[ad+15
]=br;c[ad+21]=br;c[ad+16]=1;c[ad+22]=1;aC[ad+17]=aj;aC[ad+23]=aj;c[ad+24]=q;c[ad+
30]=q;c[ad+25]=j;c[ad+31]=o;c[ad+26]=b3;c[ad+32]=b3;c[ad+27]=bF;c[ad+33]=br;c[ad+
28]=1;c[ad+34]=1;aC[ad+29]=ak;aC[ad+35]=ag;aZ+=u.Advance;if(gB&&((u.dl===0x20)||(
u.dl===0xA0))){e7+=gB;aZ+=e7>>16;e7&=0xFFFF;}}h.bufferData(h.ARRAY_BUFFER,bW,h.STREAM_DRAW
);h.drawArrays(h.TRIANGLES,0,gO);h.bufferData(h.ARRAY_BUFFER,h.bW,h.STREAM_DRAW);
}d.j8=function(s,aE,k,ac,an,ah,v,r,cH,hp,al,ak,ag,aj,ap){var a=this.aW;var z=null;
var l=r[0];var j=r[1];var q=r[2];var o=r[3];var cQ=cH[0];var dd=cH[1];var fj=0;var
eJ=0x8000;if(s&&(ah>=0)&&(ah<s.NoOfFrames))z=s.bw[ah];if(!z||(z.aw.Format!==this.
bG)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!aE){if(this.aX)console.log("EmWi error: Invalid font in the drawing operation."
);return;}if(an===-1)an=k.length;if(ac<0){an+=ac;ac=0;}an=Math.min(an,k.length-ac
);cQ=l-cQ;dd=j-dd;l=Math.max(v[0],l,0);j=Math.max(v[1],j,0);q=Math.min(v[2],q,s.
FrameSize[0]);o=Math.min(v[3],o,s.FrameSize[1]);j=Math.max(j,dd-aE.Ascent);o=Math.
min(o,dd+aE.Descent);if((q<=l)||(o<=j)||(an<=0))return;if(hp>0)hp-=this.mE(aE,k,
ac,an)[2];if(hp>0){var cs=ac;var aB=an;var jp=0;for(;aB;cs++,aB--){var x=k.charCodeAt(
cs);if((x===32)||(x===0xA0))jp++;}if(jp)fj=((hp<<16)/jp)|0;}while(an){var x=k.charCodeAt(
ac);var u=this.eg(aE,x);if(!u){if(this.aX)console.log("EmWi error: Default glyph not found in the font."
);return;}if((cQ+u.OriginX+u.Width)>l)break;if(fj&&((x===0x20)||(x===0xA0))){eJ+=
fj;cQ+=eJ>>16;eJ&=0xFFFF;}cQ+=u.Advance;ac++;an--;}if(!an)return;var dS=(al!==aj
)||(ak!==ag);var dL=(al!==ak)||(aj!==ag);var dB=dS||dL;cL(a,z.aw,a.eQ);fx(a,null
,false);a.bindTexture(a.TEXTURE_2D,this.gi);if(a.by&&!ap)a.disable(a.BLEND);if(!
a.by&&ap)a.enable(a.BLEND);a.by=ap;var a7=[];var gX=cQ;var gV=eJ;var gW=fj;do{var
x=k.charCodeAt(ac);var u=this.j9(aE,x);if(!u){if(dB)jR(a,a7,z.aD,gX,dd,gW,gV,l,j
,q,o,r,al,ak,ag,aj);else jQ(a,a7,z.aD,gX,dd,gW,gV,l,j,q,o,al);for(var e=0;e<a7.length;
e++)a7[e].hb--;a7=[];gX=cQ;gV=eJ;gW=fj;u=this.j9(aE,x);}if(!u){if(this.aX)console.
log("EmWi error: Default glyph not found in the font.");return;}if((cQ+u.OriginX
)>=q)break;u.hb++;a7.push(u);if(fj&&((x===0x20)||(x===0xA0))){eJ+=fj;cQ+=eJ>>16;
eJ&=0xFFFF;}cQ+=u.Advance;ac++;an--;}while(an);if(dB)jR(a,a7,z.aD,gX,dd,gW,gV,l,
j,q,o,r,al,ak,ag,aj);else jQ(a,a7,z.aD,gX,dd,gW,gV,l,j,q,o,al);for(var e=0;e<a7.
length;e++)a7[e].hb--;if(this.aX)dq(a);};d.oL=function(s,y,aL,ah,v,r,cH,en,eo,e5
,e4,ap){if(!s||!y||!aL||(ah<0)||(ah>=s.NoOfFrames))return;v=this.gj(v,r);if((v[2
]<=v[0])||(v[3]<=v[1]))return;if(en<0)en=0;if(en>255)en=255;if(eo<0)eo=0;if(eo>255
)eo=255;if(e4<0)e4=0;if(e4>255)e4=255;if(e5<0)e5=0;if(e5>255)e5=255;var width=r[
2]-r[0];var height=r[3]-r[1];var ld=1;var h0=1;var lf=(en!==e4)||(eo!==e5);var le=(
en!==eo)||(e4!==e5);if(width&&le)ld/=width;if(height&&lf)h0/=height;var dB={jW:le
,jX:lf,mc:ld,oq:h0,Width:width,Height:height,lP:en,lQ:(e4-en)*h0,lR:eo,lS:(e5-eo
)*h0};lZ(this,s,ah,v,r,r[0]-cH[0],r[1]-cH[1],y,aL.Data,0,aL.Data.length,ap,dB);};
d.mJ=[0,0];d.j_=[0,0,0,0];d.fy="";d.iy=3.1415926535/180;d.pL=180/3.1415926535;d.
hk=new Array(129).join('0');d.fE=[];d.fC=null;d.eU=0;d.j7=0;d.cm=null;d.cT=null;
d.ei=null;d.fD=null;d.j5=null;d.ow="";d.bp=null;d.mH=0;d.c5=null;d.aW=null;d.eR=
null;d.gl=false;d.gk=false;d.dr=false;d.fF=-1;d.cA=0;d.dH=0;d.iB=null;d.hc=true;
d.ix=false;d.aX=false;d.eT=1024;d.he=1024;d.eS=64;d.gi=null;d.eh=null;d.hd=null;
d.fA=null;d.bG=0;d.iI=1;d.iD=0x00000000;d.gn=0x00000001;d.iE=0x00000002;d.hi=0x00000003;
d.mU=0x00000000;d.gm=0x00000100;d.iC=0x00000200;d.hh=0x00000300;d.pC=0x00000000;
d.pE=0x00000101;d.pF=0x00000202;d.pD=0x00000303;d.iF=0x00000000;d.iG=0x00010000;
d.iH=0x00020000;return d;})();

/* Embedded Wizard */