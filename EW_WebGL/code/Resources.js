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

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.qk)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.qk=(function(){var B=EmWiApp;var E={};
var AD=[0,0];var B8="The property \'FrameSize\' is READ ONLY.";
E.Z={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.mJ,DF:false,HG:false,EN:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.oS(handle);this.bitmap=null;this.
FrameSize=AD;this.FrameDelay=0;this.NoOfFrames=1;this.DF=false;},DI:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=AD;var frameDelay=
0;{var bmp=B.pk(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.HG=true;this.DF=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},KB:function(C){throw new Error(
B8);},Update:function(){},_Init:function(aArg){B.Core.HR._Init.call(this,aArg);this.
__proto__=E.Z;this.DI(aArg);},_Done:function(){this.__proto__=E.Z;this.EN();B.Core.
HR._Done.call(this);},_className:"Resources::Bitmap"};E.BW={font:null,Leading:0,
Descent:0,Ascent:0,EN:function(){if(!this.font)return;var handle=this.font;B.oT(
handle);this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},DI:function(
aArg){if(!aArg)return;var handle=null;var ascent=0;var descent=0;var leading=0;{
var font=B.pm(aArg);if(font){ascent=font.Ascent;descent=font.Descent;leading=font.
Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=descent;this.
Leading=leading;},QN:function(JH){if((JH===B.fy)||!this.font)return AD;var N=1;var
Ci=JH.charCodeAt(N)||0;var JL=JH.charCodeAt(0)||0;var Az=0;var AC=(((this.Ascent+
this.Descent)+this.Leading)*JL)-this.Leading;while(Ci>0){var Ea=Ci-2;var LV=0;if((
JH.charCodeAt((N+Ci)-1)||0)===0x0A)Ea=Ea-1;if(Ea>0)LV=this.Kp(JH,N+2,Ea);if(LV>Az
)Az=LV;N=N+Ci;Ci=JH.charCodeAt(N)||0;}return[Az,AC];},UE:function(aString,aOffset
,aSize){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return B.fy;var handle=this.font;var result=B.fy;result=B.pH(handle,aString,aOffset
,aSize);return result;},QO:function(aCharCode){if(!this.font||(aCharCode===0x00)
)return 0;var advance=0;var handle=this.font;{var metrics=B.eg(handle,aCharCode);
if(metrics)advance=metrics.Advance;}return advance;},Kp:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return 0;var handle=this.font;var advance=0;advance=B.o9(handle,aString,aOffset
,aCount);return advance;},OnGetLeading:function(){return this.Leading;},OnGetDescent:
function(){return this.Descent;},OnGetAscent:function(){return this.Ascent;},_Init:
function(aArg){B.Core.HR._Init.call(this,aArg);this.__proto__=E.BW;this.DI(aArg);
},_Done:function(){this.__proto__=E.BW;this.EN();B.Core.HR._Done.call(this);},_className:
"Resources::Font"};E.Me={_class:function(){return E.BW;},0:{Data:function(){return B.
qn;},Cache:[],_this:null}};
E._Init=function(){E.Z.__proto__=B.Core.HR;E.BW.__proto__=B.Core.HR;};E.Ei=function(
D){var A;if((A=E.Me[0]._this)&&(A._cycle!=D))A._Done(E.Me[0]._this=null);};return E;
})();

/* Embedded Wizard */