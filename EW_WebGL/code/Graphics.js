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
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var B=EmWiApp;var E={};
var AD=[0,0];var B8="Can not resize explicitly attached graphics engine bitmaps";
var FN=[0,0,0,0];var Fl="No graphics engine bitmap attached to this canvas";var FO=
"The canvas is already initialized with a graphics engine bitmap";var G2="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var DR="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var FP="Missing matrices to interpolate";
E.Canvas={Ew:B.j_,Mp:null,HC:0,Lb:false,EN:function(){if(this.Lb)this.DetachBitmap(
);},DI:function(aArg){this.HG=true;},KB:function(C){if((C[0]<=0)||(C[1]<=0))C=AD;
if(B.pe(C,this.FrameSize))return;if(this.Lb)throw new Error(B8);this.FrameSize=C;
this.DF=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B.oS(handle);this.
bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B.j6(B.bG,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=AD;this.FrameDelay=
0;this.NoOfFrames=1;}this.Ew=[].concat(AD,this.FrameSize);}if(!(((A=this.Ew)[0]>=
A[2])||(A[1]>=A[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))(A=this.Mp
)?A[1].call(A[0],this):null;this.Ew=FN;}},DetachBitmap:function(){if(!this.Lb)throw new
Error(Fl);this.bitmap=null;this.Lb=false;this.FrameSize=AD;this.FrameDelay=0;this.
NoOfFrames=1;this.DF=false;return this;},AttachBitmap:function(aBitmap){if(!!this.
bitmap)throw new Error(FO);if(!aBitmap)return this;this.bitmap=aBitmap;this.Lb=true;
var noOfFrames=1;var frameSize=AD;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;
frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.DF=(this.FrameDelay>0)&&(
this.NoOfFrames>1);return this;},Jm:function(aClip,PW,aString,aOffset,aCount,aDstRect
,aSrcPos,aMinWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!PW||!PW.font)||((aOffset>
0)&&(aOffset>=aString.length)))return;var dstFrameNo=this.HC;var dstBitmap=this.
bitmap;var srcFont=PW.font;{B.j8(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}}
,SH:function(aClip,aBitmap,aFrameNr,aDstRect,JG,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!JG)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.HC;var srcRect=[
].concat(AD,aBitmap.FrameSize);var left=((JG&0x1)===0x1);var top=((JG&0x2)===0x2
);var right=((JG&0x4)===0x4);var bottom=((JG&0x8)===0x8);var interior=((JG&0x10)===
0x10);{B.oM(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,
top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Rt:function(
aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3
,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(
!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var Af=aDstX1;var Ah=aDstX2;
var Ag=aDstY1;var Ai=aDstY2;if(aDstX2<Af)Af=aDstX2;if(aDstX3<Af)Af=aDstX3;if(aDstX4<
Af)Af=aDstX4;if(aDstX2>Ah)Ah=aDstX2;if(aDstX3>Ah)Ah=aDstX3;if(aDstX4>Ah)Ah=aDstX4;
if(aDstY2<Ag)Ag=aDstY2;if(aDstY3<Ag)Ag=aDstY3;if(aDstY4<Ag)Ag=aDstY4;if(aDstY2>Ai
)Ai=aDstY2;if(aDstY3>Ai)Ai=aDstY3;if(aDstY4>Ai)Ai=aDstY4;if(((((Ah-Af)>4096.000000
)||((Ah-Af)<-4096.000000))||((Ai-Ag)>4096.000000))||((Ai-Ag)<-4096.000000)){B.qe(
"%s",G2);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.HC;{B.qg(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1
,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1
,aColor2,aColor3,aColor4,aBlend,aFilter);}},UJ:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=aDstRect[0];var
right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096.000000)||((right-
left)<-4096.000000))||((bottom-top)>4096.000000))||((bottom-top)<-4096.000000)){
B.qe("%s",DR);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.HC;{B.qg(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,
1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aFilter);}},N3:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.
HC;{B.ef(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Iq:function(aClip,PY,aDstRect,aFlipY,aOffset
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,VE){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(!PY||!PY.path)return;var nonZeroWinding=VE===
1;var dstBitmap=this.bitmap;var dstFrameNo=this.HC;var path=PY.path;{B.oP(dstBitmap
,path,dstFrameNo,aClip,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,nonZeroWinding);}},QJ:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.HC;{B.oN(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Md:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.HC;{
B.fz(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},_Init:function(aArg){B.qk.Z._Init.call(this,aArg);this.__proto__=E.Canvas;this.
DI(aArg);},_Done:function(){this.__proto__=E.Canvas;this.EN();B.qk.Z._Done.call(
this);},_Mark:function(D){var A;B.qk.Z._Mark.call(this,D);if((A=this.Mp)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"};E.IM={DJ:1.000000
,DK:0,D5:0,Ff:0,DL:0,DM:1.000000,D6:0,Fg:0,C$:0,Da:0,D7:1.000000,EQ:0,Dt:0,Du:0,
D8:0,ER:1.000000,EC:0,G1:0,G0:0,GN:0.000000,Hc:true,L6:function(aX,aY){var Hu=((
aX*this.C$)+(aY*this.Da))+this.EQ;var Az=((aX*this.Dt)+(aY*this.Du))+this.ER;if((
Az!==0.000000)&&(Az!==1.000000))Hu=Hu/Az;this.EC=Hu;return true;},HP:function(aX
,aY){var JS=this.GN;if(JS<0.000000)return false;var Gg=((aX*this.DJ)+(aY*this.DK
))+this.Ff;var Ee=((aX*this.DL)+(aY*this.DM))+this.Fg;var Hu=((aX*this.C$)+(aY*this.
Da))+this.EQ;var Az=((aX*this.Dt)+(aY*this.Du))+this.ER;var J1=1.000000;if((Az!==
0.000000)&&(Az!==1.000000)){Gg=Gg/Az;Ee=Ee/Az;Hu=Hu/Az;}if(JS!==-Hu)J1=J1/(Hu+JS
);if(JS!==0.000000)J1=J1*JS;this.G0=Gg*J1;this.G1=Ee*J1;this.EC=Hu+JS;return true;
},S5:function(Bw,Dy,DS){if(!Bw||!Dy)throw new Error(FP);this.DJ=Bw.DJ+((Dy.DJ-Bw.
DJ)*DS);this.DK=Bw.DK+((Dy.DK-Bw.DK)*DS);this.D5=Bw.D5+((Dy.D5-Bw.D5)*DS);this.Ff=
Bw.Ff+((Dy.Ff-Bw.Ff)*DS);this.DL=Bw.DL+((Dy.DL-Bw.DL)*DS);this.DM=Bw.DM+((Dy.DM-
Bw.DM)*DS);this.D6=Bw.D6+((Dy.D6-Bw.D6)*DS);this.Fg=Bw.Fg+((Dy.Fg-Bw.Fg)*DS);this.
C$=Bw.C$+((Dy.C$-Bw.C$)*DS);this.Da=Bw.Da+((Dy.Da-Bw.Da)*DS);this.D7=Bw.D7+((Dy.
D7-Bw.D7)*DS);this.EQ=Bw.EQ+((Dy.EQ-Bw.EQ)*DS);this.Dt=Bw.Dt+((Dy.Dt-Bw.Dt)*DS);
this.Du=Bw.Du+((Dy.Du-Bw.Du)*DS);this.D8=Bw.D8+((Dy.D8-Bw.D8)*DS);this.ER=Bw.ER+((
Dy.ER-Bw.ER)*DS);this.GN=Bw.GN+((Dy.GN-Bw.GN)*DS);this.Hc=false;return this;},Rf:
function(Rx,Ry,Rz){var LO=Math.sin(Rx*B.iy);var Ld=Math.cos(Rx*B.iy);var LP=Math.
sin(Ry*B.iy);var Le=Math.cos(Ry*B.iy);var LQ=Math.sin(Rz*B.iy);var Ne=Math.cos(Rz
*B.iy);var NE=Le*Ne;var NH=LQ;var NK=-LP*Ne;var NF=((-Ld*Le)*LQ)+(LO*LP);var NI=
Ld*Ne;var NL=((Ld*LP)*LQ)+(LO*Le);var NG=((LO*Le)*LQ)+(Ld*LP);var NJ=-LO*Ne;var NM=((-
LO*LP)*LQ)+(Ld*Le);var VT=((this.DJ*NE)+(this.DK*NH))+(this.D5*NK);var VW=((this.
DL*NE)+(this.DM*NH))+(this.D6*NK);var VZ=((this.C$*NE)+(this.Da*NH))+(this.D7*NK
);var V2=((this.Dt*NE)+(this.Du*NH))+(this.D8*NK);var VU=((this.DJ*NF)+(this.DK*
NI))+(this.D5*NL);var VX=((this.DL*NF)+(this.DM*NI))+(this.D6*NL);var V0=((this.
C$*NF)+(this.Da*NI))+(this.D7*NL);var V3=((this.Dt*NF)+(this.Du*NI))+(this.D8*NL
);var VV=((this.DJ*NG)+(this.DK*NJ))+(this.D5*NM);var VY=((this.DL*NG)+(this.DM*
NJ))+(this.D6*NM);var V1=((this.C$*NG)+(this.Da*NJ))+(this.D7*NM);var V4=((this.
Dt*NG)+(this.Du*NJ))+(this.D8*NM);this.DJ=VT;this.DK=VU;this.D5=VV;this.DL=VW;this.
DM=VX;this.D6=VY;this.C$=VZ;this.Da=V0;this.D7=V1;this.Dt=V2;this.Du=V3;this.D8=
V4;this.Hc=false;return this;},Rh:function(M6,M7,M8){this.DJ=this.DJ*M6;this.DK=
this.DK*M7;this.D5=this.D5*M8;this.DL=this.DL*M6;this.DM=this.DM*M7;this.D6=this.
D6*M8;this.C$=this.C$*M6;this.Da=this.Da*M7;this.D7=this.D7*M8;this.Dt=this.Dt*M6;
this.Du=this.Du*M7;this.D8=this.D8*M8;this.Hc=false;return this;},Rr:function(MY
,MZ,M0){this.Ff=((this.Ff+(this.DJ*MY))+(this.DK*MZ))+(this.D5*M0);this.Fg=((this.
Fg+(this.DL*MY))+(this.DM*MZ))+(this.D6*M0);this.EQ=((this.EQ+(this.C$*MY))+(this.
Da*MZ))+(this.D7*M0);this.ER=((this.ER+(this.Dt*MY))+(this.Du*MZ))+(this.D8*M0);
this.Hc=false;return this;},Mk:function(){return this.Hc||((((((((((((((((this.DJ===
1.000000)&&(this.DK===0.000000))&&(this.D5===0.000000))&&(this.Ff===0.000000))&&(
this.DL===0.000000))&&(this.DM===1.000000))&&(this.D6===0.000000))&&(this.Fg===0.000000
))&&(this.C$===0.000000))&&(this.Da===0.000000))&&(this.D7===1.000000))&&(this.EQ===
0.000000))&&(this.Dt===0.000000))&&(this.Du===0.000000))&&(this.D8===0.000000))&&(
this.ER===1.000000));},SG:function(M9,Na,M_,Nb,P0,P1,M$,Nc){var Lf=M_-P0;var Lh=
Nb-P1;var Lg=M$-P0;var Li=Nc-P1;var LR=((M9-M_)+P0)-M$;var LS=((Na-Nb)+P1)-Nc;var
IY=(Lf*Li)-(Lh*Lg);if(IY===0.000000)return null;this.C$=((LR*Li)-(LS*Lg))/IY;this.
Da=((Lf*LS)-(Lh*LR))/IY;this.D7=0.000000;this.EQ=1.000000;this.DJ=(M_-M9)+(this.
C$*M_);this.DK=(M$-M9)+(this.Da*M$);this.D5=0.000000;this.Ff=M9;this.DL=(Nb-Na)+(
this.C$*Nb);this.DM=(Nc-Na)+(this.Da*Nc);this.D6=0.000000;this.Fg=Na;this.Dt=0.000000;
this.Du=0.000000;this.D8=0.000000;this.ER=1.000000;this.Hc=false;return this;},SB:
function(CF){if(!CF)return this;this.DJ=CF.DJ;this.DK=CF.DK;this.D5=CF.D5;this.Ff=
CF.Ff;this.DL=CF.DL;this.DM=CF.DM;this.D6=CF.D6;this.Fg=CF.Fg;this.C$=CF.C$;this.
Da=CF.Da;this.D7=CF.D7;this.EQ=CF.EQ;this.Dt=CF.Dt;this.Du=CF.Du;this.D8=CF.D8;this.
ER=CF.ER;this.Hc=CF.Hc;this.GN=CF.GN;return this;},QY:function(){this.DJ=1.000000;
this.DK=0.000000;this.D5=0.000000;this.Ff=0.000000;this.DL=0.000000;this.DM=1.000000;
this.D6=0.000000;this.Fg=0.000000;this.C$=0.000000;this.Da=0.000000;this.D7=1.000000;
this.EQ=0.000000;this.Dt=0.000000;this.Du=0.000000;this.D8=0.000000;this.ER=1.000000;
this.Hc=true;return this;},_Init:function(aArg){this.__proto__=E.IM;B.eU++;},_Done:
function(){this.__proto__=E.IM;B.eU--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:
null,_className:"Graphics::WarpMatrix"};E.Dw={path:null,LF:function(Ad){B.mI(this
,0);},EN:function(){if(!this.path)return;var handle=this.path;B.oU(handle);this.
path=null;},A_:function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle
,aEndAngle,aNoOfEdges){B.iJ([this,this.LF],this);var handle=this.path;var result=
0;{result=B.or(handle,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle
,aEndAngle,aNoOfEdges);}return result;},Fe:function(aSubPathNo){B.iJ([this,this.
LF],this);var handle=this.path;B.oE(handle,aSubPathNo);},Gh:function(aSubPathNo,
aX,aY){B.iJ([this,this.LF],this);var handle=this.path;B.oA(handle,aSubPathNo,aX,
aY);},Ce:function(aSubPathNo,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.Ri(1
);B.iJ([this,this.LF],this);var handle=this.path;var result=false;result=B.pc(handle
,aSubPathNo,aMaxNoOfEdges);return result;},S0:function(){if(!this.path)return 1;
var handle=this.path;var result=0;result=B.oZ(handle);return result;},Ri:function(
aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.
S0()===aMaxNoOfSubPaths))return true;var handle=this.path;{B.oU(handle);handle=B.
oG(aMaxNoOfSubPaths);}this.path=handle;B.iJ([this,this.LF],this);return!!this.path;
},_Init:function(aArg){this.__proto__=E.Dw;B.eU++;},_Done:function(){this.__proto__=
E.Dw;this.EN();B.eU--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:null,_className:
"Graphics::Path"};E.Kc={Left:0x1,UY:0x2,Right:0x4,SC:0x8,Xi:0x10};E.Os={W_:0,Xo:
1};E.WO={WN:0,XH:1,Xs:2,Xt:3,Xv:4,Xu:5};E.L4={Tc:0,C9:360.000000,AA:0.000000,C1:
0.000000,CR:0.000000,Bx:0.000000,BA:0.000000,BZ:0,If:function(Ad){var AM=this.C9-
this.AA;var A2=this.Tc;if((AM>=360.000000)||(AM<=-360.000000))AM=360.000000;this.
Ri(2);if(!A2){var R=this.BA;if(this.Bx>R)R=this.Bx;if(AM===360.000000)A2=R|0;else
A2=((AM*R)/360.000000)|0;if(A2<0)A2=-A2;A2=A2+1;}if((((AM===0.000000)||(this.BA===
0.000000))||(this.Bx===0.000000))||(((((this.BZ===2)||(this.BZ===3))||(this.BZ===
4))||(this.BZ===5))&&((this.CR>=this.BA)||(this.C1>=this.Bx)))){this.Ce(0,0);this.
Ce(1,0);return;}if((AM===360.000000)&&((((((this.BZ!==2)&&(this.BZ!==3))&&(this.
BZ!==4))&&(this.BZ!==5))||(this.CR===0.000000))||(this.C1===0.000000))){this.Ce(
0,A2+1);this.Ce(1,0);this.A_(0,0.000000,0.000000,this.BA,this.Bx,0.000000,360.000000
,A2);this.Fe(0);return;}if((((AM===360.000000)&&((((this.BZ===2)||(this.BZ===3))||(
this.BZ===4))||(this.BZ===5)))&&(this.CR>0.000000))&&(this.C1>0.000000)){this.Ce(
0,A2+1);this.Ce(1,A2+1);this.A_(0,0.000000,0.000000,this.BA,this.Bx,0.000000,360.000000
,A2);this.A_(1,0.000000,0.000000,this.CR,this.C1,360.000000,0.000000,A2);this.Fe(
0);this.Fe(1);return;}if(!this.BZ){this.Ce(0,A2+1);this.Ce(1,0);this.A_(0,0.000000
,0.000000,this.BA,this.Bx,this.AA,this.AA+AM,A2);return;}if(this.BZ===1){this.Ce(
0,A2+1);this.Ce(1,0);this.A_(0,0.000000,0.000000,this.BA,this.Bx,this.AA,this.AA+
AM,A2);this.Fe(0);return;}if((this.BZ===2)&&((this.CR===0.000000)||(this.C1===0.000000
))){this.Ce(0,A2+1);this.Ce(1,0);this.Gh(0,0.000000,0.000000);this.A_(0,0.000000
,0.000000,this.BA,this.Bx,this.AA,this.AA+AM,A2);this.Fe(0);return;}if((this.BZ===
4)&&((this.CR===0.000000)||(this.C1===0.000000))){var Do=this.BA*Math.cos(this.AA
*B.iy);var Dp=this.Bx*Math.sin(this.AA*B.iy);var CN=Math.sqrt((Do*Do)+(Dp*Dp));var
Es=((CN*0.250000)|0)+3;this.Ce(0,(A2+Es)+2);this.Ce(1,0);this.Gh(0,0.000000,0.000000
);if(AM>=0.000000)this.A_(0,Do/2.000000,Dp/2.000000,CN/2.000000,CN/2.000000,this.
AA+180.000000,this.AA+360.000000,Es);else this.A_(0,Do/2.000000,Dp/2.000000,CN/2.000000
,CN/2.000000,this.AA+180.000000,this.AA,Es);this.A_(0,0.000000,0.000000,this.BA,
this.Bx,this.AA,this.AA+AM,A2);this.Fe(0);return;}if((this.BZ===5)&&((this.CR===
0.000000)||(this.C1===0.000000))){var B$=this.AA+AM;var Do=this.BA*Math.cos(B$*B.
iy);var Dp=this.Bx*Math.sin(B$*B.iy);var CN=Math.sqrt((Do*Do)+(Dp*Dp));var Es=((
CN*0.250000)|0)+3;this.Ce(0,(A2+Es)+2);this.Ce(1,0);this.Gh(0,0.000000,0.000000);
this.A_(0,0.000000,0.000000,this.BA,this.Bx,this.AA,this.AA+AM,A2);if(AM>=0.000000
)this.A_(0,Do/2.000000,Dp/2.000000,CN/2.000000,CN/2.000000,B$,B$+180.000000,Es);
else this.A_(0,Do/2.000000,Dp/2.000000,CN/2.000000,CN/2.000000,B$,B$-180.000000,
Es);this.Fe(0);return;}if((this.BZ===3)&&((this.CR===0.000000)||(this.C1===0.000000
))){var Hq=this.BA*Math.cos(this.AA*B.iy);var Hr=this.Bx*Math.sin(this.AA*B.iy);
var Ge=Math.sqrt((Hq*Hq)+(Hr*Hr));var B$=this.AA+AM;var G9=this.BA*Math.cos(B$*B.
iy);var G_=this.Bx*Math.sin(B$*B.iy);var FY=Math.sqrt((G9*G9)+(G_*G_));var I6=((
Ge*0.250000)|0)+3;var I5=((FY*0.250000)|0)+3;this.Ce(0,((A2+I6)+I5)+10);this.Ce(
1,0);this.Gh(0,0.000000,0.000000);if(AM>=0.000000){this.A_(0,Hq/2.000000,Hr/2.000000
,Ge/2.000000,Ge/2.000000,this.AA+180.000000,this.AA+360.000000,I6);this.A_(0,0.000000
,0.000000,this.BA,this.Bx,this.AA,this.AA+AM,A2);this.A_(0,G9/2.000000,G_/2.000000
,FY/2.000000,FY/2.000000,B$,B$+180.000000,I5);}else{this.A_(0,Hq/2.000000,Hr/2.000000
,Ge/2.000000,Ge/2.000000,this.AA+180.000000,this.AA,I6);this.A_(0,0.000000,0.000000
,this.BA,this.Bx,this.AA,this.AA+AM,A2);this.A_(0,G9/2.000000,G_/2.000000,FY/2.000000
,FY/2.000000,B$,B$-180.000000,I5);}this.Fe(0);return;}if(this.BZ===2){this.Ce(0,(
A2*2)+1);this.Ce(1,0);this.A_(0,0.000000,0.000000,this.BA,this.Bx,this.AA,this.AA+
AM,A2);this.A_(0,0.000000,0.000000,this.CR,this.C1,this.C9,this.C9-AM,A2);this.Fe(
0);return;}if(this.BZ===4){var sin=Math.sin(this.AA*B.iy);var cos=Math.cos(this.
AA*B.iy);var E5=this.CR*cos;var E6=this.C1*sin;var Do=this.BA*cos;var Dp=this.Bx
*sin;var CN=Math.sqrt(((Do-E5)*(Do-E5))+((Dp-E6)*(Dp-E6)));var Es=((CN*0.250000)|
0)+3;this.Ce(0,((A2*2)+Es)+2);this.Ce(1,0);if(AM>=0.000000){this.A_(0,0.000000,0.000000
,this.BA,this.Bx,this.AA,this.AA+AM,A2);this.A_(0,0.000000,0.000000,this.CR,this.
C1,this.C9,this.C9-AM,A2);this.A_(0,E5+((Do-E5)/2.000000),E6+((Dp-E6)/2.000000),
CN/2.000000,CN/2.000000,this.AA+180.000000,this.AA+360.000000,Es);}else{this.A_(
0,0.000000,0.000000,this.BA,this.Bx,this.AA,this.AA+AM,A2);this.A_(0,0.000000,0.000000
,this.CR,this.C1,this.C9,this.C9-AM,A2);this.A_(0,E5+((Do-E5)/2.000000),E6+((Dp-
E6)/2.000000),CN/2.000000,CN/2.000000,this.AA+180.000000,this.AA,Es);}this.Fe(0);
return;}if(this.BZ===5){var B$=this.AA+AM;var sin=Math.sin(B$*B.iy);var cos=Math.
cos(B$*B.iy);var E5=this.CR*cos;var E6=this.C1*sin;var Do=this.BA*cos;var Dp=this.
Bx*sin;var CN=Math.sqrt(((Do-E5)*(Do-E5))+((Dp-E6)*(Dp-E6)));var Es=((CN*0.250000
)|0)+3;this.Ce(0,((A2*2)+Es)+2);this.Ce(1,0);if(AM>=0.000000){this.A_(0,0.000000
,0.000000,this.BA,this.Bx,this.AA,this.AA+AM,A2);this.A_(0,E5+((Do-E5)/2.000000)
,E6+((Dp-E6)/2.000000),CN/2.000000,CN/2.000000,B$,B$+180.000000,Es);this.A_(0,0.000000
,0.000000,this.CR,this.C1,this.C9,this.C9-AM,A2);}else{this.A_(0,0.000000,0.000000
,this.BA,this.Bx,this.AA,this.AA+AM,A2);this.A_(0,E5+((Do-E5)/2.000000),E6+((Dp-
E6)/2.000000),CN/2.000000,CN/2.000000,B$,B$-180.000000,Es);this.A_(0,0.000000,0.000000
,this.CR,this.C1,this.C9,this.C9-AM,A2);}this.Fe(0);return;}if(this.BZ===3){var B$=
this.AA+AM;var Su=Math.sin(this.AA*B.iy);var Ss=Math.cos(this.AA*B.iy);var RS=Math.
sin(B$*B.iy);var RQ=Math.cos(B$*B.iy);var J3=this.CR*Ss;var J4=this.C1*Su;var Hq=
this.BA*Ss;var Hr=this.Bx*Su;var JO=this.CR*RQ;var JP=this.C1*RS;var G9=this.BA*
RQ;var G_=this.Bx*RS;var Ge=Math.sqrt(((Hq-J3)*(Hq-J3))+((Hr-J4)*(Hr-J4)));var FY=
Math.sqrt(((G9-JO)*(G9-JO))+((G_-JP)*(G_-JP)));var I6=((Ge*0.250000)|0)+3;var I5=((
FY*0.250000)|0)+3;this.Ce(0,(((A2*2)+I6)+I5)+4);this.Ce(1,0);if(AM>=0.000000){this.
A_(0,0.000000,0.000000,this.BA,this.Bx,this.AA,this.AA+AM,A2);this.A_(0,JO+((G9-
JO)/2.000000),JP+((G_-JP)/2.000000),FY/2.000000,FY/2.000000,B$,B$+180.000000,I5);
this.A_(0,0.000000,0.000000,this.CR,this.C1,this.C9,this.C9-AM,A2);this.A_(0,J3+((
Hq-J3)/2.000000),J4+((Hr-J4)/2.000000),Ge/2.000000,Ge/2.000000,this.AA+180.000000
,this.AA+360.000000,I6);}else{this.A_(0,0.000000,0.000000,this.BA,this.Bx,this.AA
,this.AA+AM,A2);this.A_(0,JO+((G9-JO)/2.000000),JP+((G_-JP)/2.000000),FY/2.000000
,FY/2.000000,B$,B$-180.000000,I5);this.A_(0,0.000000,0.000000,this.CR,this.C1,this.
C9,this.C9-AM,A2);this.A_(0,J3+((Hq-J3)/2.000000),J4+((Hr-J4)/2.000000),Ge/2.000000
,Ge/2.000000,this.AA+180.000000,this.AA,I6);}this.Fe(0);return;}},Q6:function(C){
if(C===this.C9)return;this.C9=C;if((this.BA>0.000000)&&(this.Bx>0.000000))B.iJ([
this,this.If],this);},Rb:function(C){if(C===this.AA)return;this.AA=C;if((this.BA>
0.000000)&&(this.Bx>0.000000))B.iJ([this,this.If],this);},Q5:function(){return this.
CR;},Q7:function(C){if((C===this.CR)&&(C===this.C1))return;this.CR=C;this.C1=C;if((((
this.AA!==this.C9)&&(this.BA>0.000000))&&(this.Bx>0.000000))&&((((this.BZ===2)||(
this.BZ===4))||(this.BZ===5))||(this.BZ===3)))B.iJ([this,this.If],this);},Q_:function(
C){if((C===this.BA)&&(C===this.Bx))return;this.BA=C;this.Bx=C;if(this.AA!==this.
C9)B.iJ([this,this.If],this);},Gr:function(C){if(C===this.BZ)return;this.BZ=C;if(((
this.AA!==this.C9)&&(this.BA>0.000000))&&(this.Bx>0.000000))B.iJ([this,this.If],
this);},_Init:function(aArg){E.Dw._Init.call(this,aArg);this.__proto__=E.L4;},_className:
"Graphics::ArcPath"};
E._Init=function(){E.Canvas.__proto__=B.qk.Z;E.L4.__proto__=E.Dw;};E.Ei=function(
D){};return E;})();

/* Embedded Wizard */