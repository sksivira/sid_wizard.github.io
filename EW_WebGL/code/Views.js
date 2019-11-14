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
);if(EmWiApp.qh)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
qh=(function(){var B=EmWiApp;var E={};
var AD=[0,0];var B8=[0,0,0,0];var FN=[65535,65535];var Fl="...";var FO="The Slide Touch Handler:";
var G2="is already connected with a view.";var DR="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var FP="No matrix to perform 3D transformation";var FQ="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
E.Aj={Cm:0xFFFFFFFF,Cn:0xFFFFFFFF,Cp:0xFFFFFFFF,Co:0xFFFFFFFF,Ds:function(A5,aClip
,aOffset,AK,aBlend){var A;aBlend=aBlend&&((this.G&0x2)===0x2);AK=AK+1;if(AK<256){
var Bq=this.Co;var Br=this.Cp;var Bo=this.Cm;var Bp=this.Cn;Bq=(Bq&0x00FFFFFF)|((((
AK*((Bq>>24)&0xFF))>>8)&0xFF)<<24);Br=(Br&0x00FFFFFF)|((((AK*((Br>>24)&0xFF))>>8
)&0xFF)<<24);Bo=(Bo&0x00FFFFFF)|((((AK*((Bo>>24)&0xFF))>>8)&0xFF)<<24);Bp=(Bp&0x00FFFFFF
)|((((AK*((Bp>>24)&0xFF))>>8)&0xFF)<<24);A5.Md(aClip,B.pu(this.L,aOffset),Bq,Br,
Bp,Bo,aBlend);}else A5.Md(aClip,B.pu(this.L,aOffset),this.Co,this.Cp,this.Cn,this.
Cm,aBlend);},AH:function(C){var A;if((((C===this.Co)&&(C===this.Cp))&&(C===this.
Cm))&&(C===this.Cn))return;this.Co=C;this.Cp=C;this.Cm=C;this.Cn=C;if(!!this.I&&((
this.G&0x1)===0x1))this.I.Ar(this.L);},_Init:function(aArg){B.Core.Bv._Init.call(
this,aArg);this.__proto__=E.Aj;},_className:"Views::Rectangle"};E.Bc={Width:1,Cm:
0xFFFFFFFF,Cn:0xFFFFFFFF,Cp:0xFFFFFFFF,Co:0xFFFFFFFF,Ds:function(A5,aClip,aOffset
,AK,aBlend){var A;aBlend=aBlend&&((this.G&0x2)===0x2);AK=AK+1;if(AK<256){var Bq=
this.Co;var Br=this.Cp;var Bo=this.Cm;var Bp=this.Cn;Bq=(Bq&0x00FFFFFF)|((((AK*((
Bq>>24)&0xFF))>>8)&0xFF)<<24);Br=(Br&0x00FFFFFF)|((((AK*((Br>>24)&0xFF))>>8)&0xFF
)<<24);Bo=(Bo&0x00FFFFFF)|((((AK*((Bo>>24)&0xFF))>>8)&0xFF)<<24);Bp=(Bp&0x00FFFFFF
)|((((AK*((Bp>>24)&0xFF))>>8)&0xFF)<<24);A5.QJ(aClip,B.pu(this.L,aOffset),this.Width
,Bq,Br,Bp,Bo,aBlend);}else A5.QJ(aClip,B.pu(this.L,aOffset),this.Width,this.Co,this.
Cp,this.Cn,this.Cm,aBlend);},Jq:function(C){var A;if(C<0)C=0;if(C===this.Width)return;
this.Width=C;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L);},AH:function(C
){var A;if((((C===this.Co)&&(C===this.Cp))&&(C===this.Cm))&&(C===this.Cn))return;
this.Co=C;this.Cp=C;this.Cm=C;this.Cn=C;if(!!this.I&&((this.G&0x1)===0x1))this.I.
Ar(this.L);},_Init:function(aArg){B.Core.Bv._Init.call(this,aArg);this.__proto__=
E.Bc;},_className:"Views::Border"};E.FD={BI:-1,timer:null,Cm:0xFFFFFFFF,Cn:0xFFFFFFFF
,Cp:0xFFFFFFFF,Co:0xFFFFFFFF,DN:null,Kc:0x1F,Ev:0,Z:null,BH:255,Bi:0,GO:B.mJ,DF:
false,Ke:true,Ds:function(A5,aClip,aOffset,AK,aBlend){var A;var BC=this.Ev;if(this.
BI>=0)BC=this.BI;if(!this.Z||(BC>=this.Z.NoOfFrames))return;this.Z.Update();var Bq=
this.Co;var Br=this.Cp;var Bp=this.Cn;var Bo=this.Cm;var CP=(((AK+1)*this.BH)>>8
)+1;var BO=this.Kc;var R=B.pu(this.L,aOffset);var NP=B.pr([R[2]-R[0],R[3]-R[1]],
this.GO);aBlend=aBlend&&((this.G&0x2)===0x2);if(CP<256){Bq=(Bq&0x00FFFFFF)|((((((
Bq>>24)&0xFF)*CP)>>8)&0xFF)<<24);Br=(Br&0x00FFFFFF)|((((((Br>>24)&0xFF)*CP)>>8)&
0xFF)<<24);Bp=(Bp&0x00FFFFFF)|((((((Bp>>24)&0xFF)*CP)>>8)&0xFF)<<24);Bo=(Bo&0x00FFFFFF
)|((((((Bo>>24)&0xFF)*CP)>>8)&0xFF)<<24);}if(((this.GO[0]>0)&&(NP[0]>0))&&!((BO&
0x5)===0x5)){var B_=((this.Z.FrameSize[0]/3)|0)-NP[0];if(((BO&0x1)===0x1)){if(aClip[
2]>R[2])aClip=B.p0(aClip,R[2]);if(B_>0)R=B.p0(R,R[2]+B_);BO=BO|0x4;}else if(((BO&
0x4)===0x4)){if(aClip[0]<R[0])aClip=[].concat(R[0],aClip.slice(1,4));if(B_>0)R=[
].concat(R[0]-B_,R.slice(1,4));BO=BO|0x1;}else{if(aClip[0]<R[0])aClip=[].concat(
R[0],aClip.slice(1,4));if(aClip[2]>R[2])aClip=B.p0(aClip,R[2]);if(B_>0){R=[].concat(
R[0]-((B_/2)|0),R.slice(1,4));R=B.p0(R,(R[2]+B_)-((B_/2)|0));}BO=BO|0x5;}}if(((this.
GO[1]>0)&&(NP[1]>0))&&!((BO&0xA)===0xA)){var B_=((this.Z.FrameSize[1]/3)|0)-NP[1
];if(((BO&0x2)===0x2)){if(aClip[3]>R[3])aClip=[].concat(aClip.slice(0,3),R[3]);if(
B_>0)R=[].concat(R.slice(0,3),R[3]+B_);BO=BO|0x8;}else if(((BO&0x8)===0x8)){if(aClip[
1]<R[1])aClip=B.p2(aClip,R[1]);if(B_>0)R=B.p2(R,R[1]-B_);BO=BO|0x2;}else{if(aClip[
1]<R[1])aClip=B.p2(aClip,R[1]);if(aClip[3]>R[3])aClip=[].concat(aClip.slice(0,3)
,R[3]);if(B_>0){R=B.p2(R,R[1]-((B_/2)|0));R=[].concat(R.slice(0,3),(R[3]+B_)-((B_
/2)|0));}BO=BO|0xA;}}A5.SH(aClip,this.Z,BC,R,BO,Bq,Br,Bp,Bo,aBlend);},E9:function(
Ad){var A;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L);},C6:function(Ad){
var A;var BC=this.BI;var CQ=0;if(!!this.Z)CQ=this.Z.NoOfFrames*this.Z.FrameDelay;
if((!!this.timer&&(this.BI<0))&&(CQ>0))this.Bi=this.timer.AI-(this.Ev*this.Z.FrameDelay
);if(!!this.timer&&(CQ>0)){var Au=(this.timer.AI-this.Bi)|0;BC=(Au/this.Z.FrameDelay
)|0;if(Au>=CQ){BC=BC%this.Z.NoOfFrames;this.Bi=this.timer.AI-(Au%CQ);if(!this.Ke
){BC=this.Z.NoOfFrames-1;CQ=0;}}}if(((BC!==this.BI)&&!!this.I)&&((this.G&0x1)===
0x1))this.I.Ar(this.L);this.BI=BC;if(!CQ&&!!this.timer){B.oI([this,this.C6],this.
timer,0);this.timer=null;(A=this.DN)?A[1].call(A[0],this):null;}},AH:function(C){
var A;if((((C===this.Co)&&(C===this.Cp))&&(C===this.Cm))&&(C===this.Cn))return;this.
Co=C;this.Cp=C;this.Cm=C;this.Cn=C;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.
L);},BY:function(C){var A;if(this.DF===C)return;this.DF=C;this.BI=-1;if(!C&&!!this.
timer){B.oI([this,this.C6],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
B.qi.Ip);B.ox([this,this.C6],this.timer,0);B.iJ([this,this.C6],this);}if(!!this.
I&&((this.G&0x1)===0x1))this.I.Ar(this.L);},Mt:function(C){var A;if(C===this.Kc)
return;this.Kc=C;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L);},CK:function(
C){var A;if(C<0)C=0;if((C===this.Ev)&&(this.BI===-1))return;this.Ev=C;if(!this.timer
)this.BI=-1;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L);},Dv:function(C){
var A;if(C===this.Z)return;if(!!this.Z&&this.Z.HG)B.oI([this,this.E9],this.Z,0);
this.Z=C;this.BI=-1;if(!!C&&C.HG)B.ox([this,this.E9],C,0);if(this.DF){this.BY(false
);this.BY(true);}if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L);},CB:function(
C){if(C)this.Bd(0x1,0x0);else this.Bd(0x0,0x1);},Mw:function(C){var A;if(C[0]<0)
C=[0,C[1]];if(C[1]<0)C=[C[0],0];if(B.pe(C,this.GO))return;this.GO=C;if((!!this.I&&((
this.G&0x1)===0x1))&&!((this.Kc&0xF)===0xF))this.I.Ar(this.L);},_Init:function(aArg
){B.Core.Bv._Init.call(this,aArg);this.__proto__=E.FD;},_Mark:function(D){var A;
B.Core.Bv._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D
);if((A=this.DN)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Z)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"};E.Iv={Bi:0,BI:0,timer:null
,Cm:0xFFFFFFFF,Cn:0xFFFFFFFF,Cp:0xFFFFFFFF,Co:0xFFFFFFFF,DN:null,Ez:B.mJ,DE:0x12
,Ev:0,Z:null,BH:255,DF:false,Ke:true,Jl:false,IF:true,Ds:function(A5,aClip,aOffset
,AK,aBlend){var A;var BC=this.Ev;if(this.BI>=0)BC=this.BI;if(!this.Z||(BC>=this.
Z.NoOfFrames))return;this.Z.Update();var O=this.Ir();var size=this.Z.FrameSize;if((
O[0]>=O[2])||(O[1]>=O[3]))return;var Bq=this.Co;var Br=this.Cp;var Bp=this.Cn;var
Bo=this.Cm;var CP=(((AK+1)*this.BH)>>8)+1;aBlend=aBlend&&((this.G&0x2)===0x2);if(
CP<256){Bq=(Bq&0x00FFFFFF)|((((((Bq>>24)&0xFF)*CP)>>8)&0xFF)<<24);Br=(Br&0x00FFFFFF
)|((((((Br>>24)&0xFF)*CP)>>8)&0xFF)<<24);Bp=(Bp&0x00FFFFFF)|((((((Bp>>24)&0xFF)*
CP)>>8)&0xFF)<<24);Bo=(Bo&0x00FFFFFF)|((((((Bo>>24)&0xFF)*CP)>>8)&0xFF)<<24);}if(
B.pe([O[2]-O[0],O[3]-O[1]],size))A5.N3(aClip,this.Z,BC,B.pu(this.L,aOffset),B.pr(
this.L.slice(0,2),O.slice(0,2)),Bq,Br,Bp,Bo,aBlend);else A5.UJ(aClip,this.Z,BC,B.
pu(O,aOffset),[].concat(AD,size),Bq,Br,Bp,Bo,aBlend,this.IF);},E9:function(Ad){var
A;if(((this.Jl&&!!this.Z)&&(this.Z.FrameSize[0]>0))&&(this.Z.FrameSize[1]>0))this.
U(B.pt(this.Ir(),this.Ez));if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L);}
,C6:function(Ad){var A;var BC=this.BI;var CQ=0;if(!!this.Z)CQ=this.Z.NoOfFrames*
this.Z.FrameDelay;if((!!this.timer&&(this.BI<0))&&(CQ>0))this.Bi=this.timer.AI-(
this.Ev*this.Z.FrameDelay);if(!!this.timer&&(CQ>0)){var Au=(this.timer.AI-this.Bi
)|0;BC=(Au/this.Z.FrameDelay)|0;if(Au>=CQ){BC=BC%this.Z.NoOfFrames;this.Bi=this.
timer.AI-(Au%CQ);if(!this.Ke){BC=this.Z.NoOfFrames-1;CQ=0;}}}if(((BC!==this.BI)&&
!!this.I)&&((this.G&0x1)===0x1))this.I.Ar(this.L);this.BI=BC;if(!CQ&&!!this.timer
){B.oI([this,this.C6],this.timer,0);this.timer=null;(A=this.DN)?A[1].call(A[0],this
):null;}},AH:function(C){var A;if((((C===this.Co)&&(C===this.Cp))&&(C===this.Cm)
)&&(C===this.Cn))return;this.Co=C;this.Cp=C;this.Cm=C;this.Cn=C;if(!!this.I&&((this.
G&0x1)===0x1))this.I.Ar(this.L);},BY:function(C){var A;if(this.DF===C)return;this.
DF=C;this.BI=-1;if(!C&&!!this.timer){B.oI([this,this.C6],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.qi.Ip);B.ox([this,this.C6],this.timer,
0);B.iJ([this,this.C6],this);}if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L
);},Kz:function(C){var A;if(C===this.DE)return;this.DE=C;if(!!this.I&&((this.G&0x1
)===0x1))this.I.Ar(this.L);},CK:function(C){var A;if(C<0)C=0;if((C===this.Ev)&&(
this.BI===-1))return;this.Ev=C;if(!this.timer)this.BI=-1;if(!!this.I&&((this.G&0x1
)===0x1))this.I.Ar(this.L);},Dv:function(C){var A;if(C===this.Z)return;if(!!this.
Z&&this.Z.HG)B.oI([this,this.E9],this.Z,0);this.Z=C;this.BI=-1;if(!!C&&C.HG)B.ox([
this,this.E9],C,0);if(this.DF){this.BY(false);this.BY(true);}if(((this.Jl&&!!C)&&(
C.FrameSize[0]>0))&&(C.FrameSize[1]>0))this.U(B.pt(this.Ir(),this.Ez));if(!!this.
I&&((this.G&0x1)===0x1))this.I.Ar(this.L);},Ir:function(){var A;if(!this.Z)return B8;
var A6=this.DE;var size=this.Z.FrameSize;var A4=this.L;var AF=A4;if(!size[0]||!size[
1])return B8;if(((A6&0x40)===0x40)){var Qp=((((A4[2]-A4[0])<<16)+((size[0]/2)|0)
)/size[0])|0;var LN=((((A4[3]-A4[1])<<16)+((size[1]/2)|0))/size[1])|0;var Hm=Qp;
if(LN>Hm)Hm=LN;AF=B.pY(AF,((size[0]*Hm)+32768)>>16);AF=B.pV(AF,((size[1]*Hm)+32768
)>>16);}else if(((A6&0x80)===0x80)){var Qp=((((A4[2]-A4[0])<<16)+((size[0]/2)|0)
)/size[0])|0;var LN=((((A4[3]-A4[1])<<16)+((size[1]/2)|0))/size[1])|0;var Hm=Qp;
if(LN<Hm)Hm=LN;AF=B.pY(AF,((size[0]*Hm)+32768)>>16);AF=B.pV(AF,((size[1]*Hm)+32768
)>>16);}else if(!((A6&0x100)===0x100))AF=B.pX(AF,size);if((AF[2]-AF[0])!==(A4[2]-
A4[0])){if(((A6&0x4)===0x4))AF=B.pZ(AF,A4[2]-(AF[2]-AF[0]));else if(((A6&0x2)===
0x2))AF=B.pZ(AF,(A4[0]+(((A4[2]-A4[0])/2)|0))-(((AF[2]-AF[0])/2)|0));}if((AF[3]-
AF[1])!==(A4[3]-A4[1])){if(((A6&0x20)===0x20))AF=B.p1(AF,A4[3]-(AF[3]-AF[1]));else
if(((A6&0x10)===0x10))AF=B.p1(AF,(A4[1]+(((A4[3]-A4[1])/2)|0))-(((AF[3]-AF[1])/2
)|0));}return B.pu(AF,this.Ez);},_Init:function(aArg){B.Core.Bv._Init.call(this,
aArg);this.__proto__=E.Iv;},_Mark:function(D){var A;B.Core.Bv._Mark.call(this,D);
if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.DN)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Z)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Views::Image"};E.Text={Ht:B.mJ,BB:B.fy,Jt:0,GW:0,Dc:null,Cm:0xFFFFFFFF,Cn:0xFFFFFFFF
,Cp:0xFFFFFFFF,Co:0xFFFFFFFF,Gs:null,IN:0,Ez:B.mJ,DE:0x12,String:B.fy,BW:null,BH:
255,K4:false,Jl:false,Kd:false,Eu:false,Ds:function(A5,aClip,aOffset,AK,aBlend){
var A;if((this.BB===B.fy)||!this.BW)return;var A6=this.DE;var font=this.BW;var A4=
B.pu(this.L,aOffset);var Bq=this.Co;var Br=this.Cp;var Bp=this.Cn;var Bo=this.Cm;
var CP=(((AK+1)*this.BH)>>8)+1;var Ga=this.BB.charCodeAt(0)||0;var O=B.pu(this.Ir(
),aOffset);var Fv=B.pr(B.pr(A4.slice(0,2),O.slice(0,2)),[0,font.Ascent]);if(CP<256
){Bq=(Bq&0x00FFFFFF)|((((((Bq>>24)&0xFF)*CP)>>8)&0xFF)<<24);Br=(Br&0x00FFFFFF)|((((((
Br>>24)&0xFF)*CP)>>8)&0xFF)<<24);Bp=(Bp&0x00FFFFFF)|((((((Bp>>24)&0xFF)*CP)>>8)&
0xFF)<<24);Bo=(Bo&0x00FFFFFF)|((((((Bo>>24)&0xFF)*CP)>>8)&0xFF)<<24);}if(Ga===1){
var JL=(this.BB.charCodeAt(1)||0)-2;if((this.BB.charCodeAt(JL+2)||0)===0x0A)JL=JL-
1;A5.Jm(aClip,font,this.BB,3,JL,A4,Fv,0,Bq,Br,Bp,Bo,true);}if(Ga<2)return;var leading=
font.Leading;if(this.GW>0)leading=(this.GW-font.Ascent)-font.Descent;var Qo=(font.
Ascent+font.Descent)+leading;var Ee=O[1];var N=1;var Ci=this.BB.charCodeAt(N)||0;
while(((Ee+Qo)<aClip[1])&&(Ci>0)){N=N+Ci;Ee=Ee+Qo;Ci=this.BB.charCodeAt(N)||0;}while((
Ee<aClip[3])&&(Ci>0)){var Ea=Ci-2;var EI=Fv;EI=[EI[0],(EI[1]+O[1])-Ee];if((this.
BB.charCodeAt((N+Ci)-1)||0)===0x0A)Ea=Ea-1;if(Ea<=0);else if(((A6&0x40)===0x40)){
if((Ea<(Ci-2))||((this.BB.charCodeAt(N+Ci)||0)===0x00))A5.Jm(aClip,font,this.BB,
N+2,Ea,A4,EI,0,Bq,Br,Bp,Bo,true);else A5.Jm(aClip,font,this.BB,N+2,Ea,A4,EI,O[2]-
O[0],Bq,Br,Bp,Bo,true);}else if(((A6&0x4)===0x4)){EI=[(EI[0]-(O[2]-O[0]))+font.Kp(
this.BB,N+2,Ea),EI[1]];A5.Jm(aClip,font,this.BB,N+2,Ea,A4,EI,0,Bq,Br,Bp,Bo,true);
}else if(((A6&0x2)===0x2)){var LV=font.Kp(this.BB,N+2,Ea);EI=[EI[0]-((((O[2]-O[0
])-LV)/2)|0),EI[1]];A5.Jm(aClip,font,this.BB,N+2,Ea,A4,EI,0,Bq,Br,Bp,Bo,true);}else
A5.Jm(aClip,font,this.BB,N+2,Ea,A4,EI,0,Bq,Br,Bp,Bo,true);N=N+Ci;Ee=Ee+Qo;Ci=this.
BB.charCodeAt(N)||0;}},U:function(C){var A;if(B.pf(C,this.L))return;if(((((((A=this.
L)[2]-A[0])!==(C[2]-C[0]))&&!this.IN)&&this.K4)&&this.Eu)&&!((this.G&0x2000)===0x2000
)){this.BB=B.fy;this.Eu=false;B.iJ([this,this.Jd],this);}if(((this.Kd&&this.Eu)&&
!B.pe([(A=this.L)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.G&0x2000)===
0x2000)){this.BB=B.fy;this.Eu=false;B.iJ([this,this.Jd],this);}B.Core.Bv.U.call(
this,C);B.iJ([this,this.NA],this);},NA:function(Ad){B.iJ(this.Dc,this);},Jd:function(
Ad){B.iJ([this,this.Sr],this);},Wh:function(Ad){this.T0(this.Gs.AJ);},Wi:function(
Ad){var A;var O=this.Ir();var Ny=this.L.slice(0,2);if(O[0]>Ny[0])O=[].concat(Ny[
0],O.slice(1,4));if(O[1]>Ny[1])O=B.p2(O,Ny[1]);var offset=B.pr(O.slice(0,2),this.
L.slice(0,2));var I4=B.pr([(A=this.L)[2]-A[0],A[3]-A[1]],[O[2]-O[0],O[3]-O[1]]);
if(I4[0]>0)I4=[0,I4[1]];if(I4[1]>0)I4=[I4[0],0];this.Gs.AJ=this.Ez;this.Gs.Bl=B.
pr(B.pr(B.ps(this.Ez,I4),offset),[this.Jt,0]);this.Gs.Bk=B.ps(B.pr(this.Ez,offset
),[this.Jt,0]);},Sr:function(Ad){var A;if(this.Eu)return;var O=FN;if(this.K4){if(
this.IN>0)O=[this.IN,O[1]];else if(!this.Jl)O=[((A=this.L)[2]-A[0])-(this.Jt*2),
O[1]];else O=[(A=this.L)[2]-A[0],O[1]];if(O[0]<0)O=[1,O[1]];}if((this.String!==B.
fy)&&!!this.BW)this.BB=this.BW.UE(this.String,0,O);else this.BB=B.fy;this.Eu=true;
this.Ht=AD;if(this.Jl&&(this.BB!==B.fy)){this.G=this.G|0x2000;this.U(B.pt(B.pa(this.
Ir(),[this.Jt,0]),this.Ez));this.G=this.G&~0x2000;}if((this.Kd&&(this.BB!==B.fy)
)&&!this.Jl){var A6=this.DE;var font=this.BW;var leading=font.Leading;var S=this.
L;var tmp=this.BB;if(this.GW>0)leading=(this.GW-font.Ascent)-font.Descent;var Wp=(
font.Ascent+font.Descent)+leading;var Ga=tmp.charCodeAt(0)||0;var H7=(((S[3]-S[1
])+leading)/Wp)|0;var RM=false;var RN=false;if(H7<=0)H7=1;if(Ga>H7){var LM=0;var
NN=Ga;var J2=0;var DW;var EH;if(((A6&0x20)===0x20))LM=Ga-H7;else if(((A6&0x10)===
0x10)){LM=((Ga-H7)/2)|0;NN=LM+H7;}else NN=H7;RM=LM>0;RN=NN<Ga;for(DW=1;J2<LM;J2=
J2+1)DW=DW+(tmp.charCodeAt(DW)||0);for(EH=DW;J2<NN;J2=J2+1)EH=EH+(tmp.charCodeAt(
EH)||0);tmp=String.fromCharCode(H7&0xFFFF)+B.p8(tmp,DW,EH-DW);}Ga=tmp.charCodeAt(
0)||0;var LL=0;var I3=1;var Lu=S[2]-S[0];var P6=Fl;var RR=font.Kp(P6,0,-1);if(this.
K4&&(this.IN>0))Lu=this.IN;for(;LL<Ga;LL=LL+1){var H5=tmp.charCodeAt(I3)||0;var DD=
B.p8(tmp,I3+2,H5-2);var JQ=RM&&!LL;var JR=RN&&(LL===(Ga-1));var Sg=(H5>2)&&((DD.
charCodeAt(H5-3)||0)===0x0A);if(Sg)DD=B.qa(DD,H5-3,1);var Az=font.Kp(DD,0,-1);var
DW=0;var EH=DD.length;if(Az>Lu){if(((A6&0x4)===0x4))JQ=true;else if(((A6&0x2)===
0x2)){JQ=true;JR=true;}else JR=true;}if(JQ)Az=Az+RR;if(JR)Az=Az+RR;while((Az>Lu)&&(
DW<EH)){if((JQ&&(Az>Lu))&&(DW<EH)){Az=Az-font.QO(DD.charCodeAt(DW)||0);DW=DW+1;}
if((JR&&(Az>Lu))&&(DW<EH)){EH=EH-1;Az=Az-font.QO(DD.charCodeAt(EH)||0);}}if((DW>
0)||(EH<DD.length))DD=B.p8(DD,DW,EH-DW);if(JQ)DD=P6+DD;if(JR)DD=DD+P6;if(JQ||JR){
if(Sg)DD=DD+String.fromCharCode(0x0A);tmp=B.qa(tmp,I3+2,H5-2);tmp=B.p6(tmp,DD,I3+
2);H5=DD.length+2;tmp=B.p3(tmp,I3,H5&0xFFFF);}I3=I3+H5;}this.Ht=font.QN(tmp);if(
this.GW>0)this.Ht=[this.Ht[0],((tmp.charCodeAt(0)||0)*this.GW)-leading];this.BB=
tmp;}if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L);B.iJ([this,this.NA],this
);},Tf:function(C){if(C===this.Kd)return;this.Kd=C;this.BB=B.fy;this.Eu=false;B.
iJ([this,this.Jd],this);},T1:function(C){if(C===this.Gs)return;if(!!C&&!!C.J0){B.
qe("%s%$%*%s",FO,C,G2);throw new Error(DR);}if(!!this.Gs){this.Gs.NB=null;this.Gs.
J0=null;}this.Gs=C;if(!!C){C.NB=[this,this.Wi];C.J0=[this,this.Wh];}},MA:function(
C){if(C===this.K4)return;this.K4=C;if(this.Eu){this.BB=B.fy;this.Eu=false;B.iJ([
this,this.Jd],this);}if(C&&!this.IN)this.G=this.G&~0x100;else this.G=this.G|0x100;
},T0:function(C){var A;if(B.pe(C,this.Ez))return;this.Ez=C;if(!!this.I&&((this.G&
0x1)===0x1))this.I.Ar(this.L);if(this.Eu)B.iJ([this,this.NA],this);},Kz:function(
C){var A;if(C===this.DE)return;this.DE=C;if(!!this.I&&((this.G&0x1)===0x1))this.
I.Ar(this.L);if(this.Kd){this.BB=B.fy;this.Eu=false;B.iJ([this,this.Jd],this);}if(
this.Eu)B.iJ([this,this.NA],this);},GT:function(C){if(C===this.String)return;this.
String=C;this.BB=B.fy;this.Eu=false;B.iJ([this,this.Jd],this);},HM:function(C){if(
C===this.BW)return;this.BW=C;this.BB=B.fy;this.Eu=false;B.iJ([this,this.Jd],this
);},AH:function(C){var A;if((((C===this.Co)&&(C===this.Cp))&&(C===this.Cm))&&(C===
this.Cn))return;this.Co=C;this.Cp=C;this.Cm=C;this.Cn=C;if(!!this.I&&((this.G&0x1
)===0x1))this.I.Ar(this.L);},Ir:function(){var A;if((this.String===B.fy)||!this.
BW)return B8;if(!this.Eu)this.Sr(this);if(this.BB===B.fy)return B8;if(B.pe(this.
Ht,AD))this.Ht=this.BW.QN(this.BB);if(this.GW>0)this.Ht=[this.Ht[0],((((this.BB.
charCodeAt(0)||0)*this.GW)-this.GW)+this.BW.Ascent)+this.BW.Descent];var A6=this.
DE;var A4=B.pa(this.L,[-this.Jt,0]);var AF=[].concat(A4.slice(0,2),B.ps(A4.slice(
0,2),this.Ht));if(((A6&0x40)===0x40)){var JV=this.IN;if(JV<=0)JV=((A=this.L)[2]-
A[0])-(this.Jt*2);if(JV<0)JV=0;if(JV>(AF[2]-AF[0]))AF=B.pY(AF,JV);}if((AF[2]-AF[
0])!==(A4[2]-A4[0])){if(((A6&0x40)===0x40));else if(((A6&0x4)===0x4))AF=B.pZ(AF,
A4[2]-(AF[2]-AF[0]));else if(((A6&0x2)===0x2))AF=B.pZ(AF,(A4[0]+(((A4[2]-A4[0])/
2)|0))-(((AF[2]-AF[0])/2)|0));}if((AF[3]-AF[1])!==(A4[3]-A4[1])){if(((A6&0x20)===
0x20))AF=B.p1(AF,A4[3]-(AF[3]-AF[1]));else if(((A6&0x10)===0x10))AF=B.p1(AF,(A4[
1]+(((A4[3]-A4[1])/2)|0))-(((AF[3]-AF[1])/2)|0));}return B.pu(AF,this.Ez);},_Init:
function(aArg){B.Core.Bv._Init.call(this,aArg);this.__proto__=E.Text;},_Mark:function(
D){var A;B.Core.Bv._Mark.call(this,D);if((A=this.Dc)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Gs)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.BW)&&(A.
_cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Text"};E.EZ={G8:0,G7:0,Df:B.
mJ,AZ:null,C5:B.pv(4,0,null),T:B.pv(4,3,0,null),UT:5.000000,Kx:0.000000,L7:B.j_,
MN:B.mJ,Jx:B.j_,DB:0x00,GG:0x00,IF:true,GS:function(C){if(B.pe(C,this.Ch))return;
B.Core.Fi.GS.call(this,C);this.T.Set(3,0,C[0]);this.T.Set(3,1,C[1]);this.T.Set(3
,2,1.000000);this.DB=0x45;this.AZ=null;B.iJ([this,this.IS],this);},GR:function(C
){if(B.pe(C,this.CT))return;B.Core.Fi.GR.call(this,C);this.T.Set(2,0,C[0]);this.
T.Set(2,1,C[1]);this.T.Set(2,2,1.000000);this.DB=0x45;this.AZ=null;B.iJ([this,this.
IS],this);},GQ:function(C){if(B.pe(C,this.Cg))return;B.Core.Fi.GQ.call(this,C);this.
T.Set(1,0,C[0]);this.T.Set(1,1,C[1]);this.T.Set(1,2,1.000000);this.DB=0x45;this.
AZ=null;B.iJ([this,this.IS],this);},GP:function(C){if(B.pe(C,this.CS))return;B.Core.
Fi.GP.call(this,C);this.T.Set(0,0,C[0]);this.T.Set(0,1,C[1]);this.T.Set(0,2,1.000000
);this.DB=0x45;this.AZ=null;B.iJ([this,this.IS],this);},P4:function(){if(this.Kx===
0.000000)return;var VQ=150.000000;var VR=150.000000;var VS=-10000000.000000;var RE=
this.T.Get(1,0)-this.T.Get(0,0);var RF=this.T.Get(1,1)-this.T.Get(0,1);var RG=this.
T.Get(1,2)-this.T.Get(0,2);var RI=this.T.Get(3,0)-this.T.Get(0,0);var RJ=this.T.
Get(3,1)-this.T.Get(0,1);var RK=this.T.Get(3,2)-this.T.Get(0,2);var Lz=(RF*RK)-(
RG*RJ);var LA=(RG*RI)-(RE*RK);var LB=(RE*RJ)-(RF*RI);var JY=Math.sqrt(((Lz*Lz)+(
LA*LA))+(LB*LB));var N;if(JY>0.000000){JY=1.000000/JY;Lz=Lz*JY;LA=LA*JY;LB=LB*JY;
}for(N=0;N<4;N=N+1){var LX=this.T.Get(N,0)-VQ;var LY=this.T.Get(N,1)-VR;var LZ=this.
T.Get(N,2)-VS;var J8=Math.sqrt(((LX*LX)+(LY*LY))+(LZ*LZ));if(J8>0.000000){J8=1.000000
/J8;LX=LX*J8;LY=LY*J8;LZ=LZ*J8;}var H6=((LX*Lz)+(LY*LA))+(LZ*LB);if(H6<0.000000)
H6=-H6;H6=Math.pow(H6,this.UT);H6=((this.Kx*H6)+1.000000)-this.Kx;this.C5.Set(N,(
H6*257.000000)|0);if(this.C5.Get(N)>256)this.C5.Set(N,256);}},Qu:function(Ad){var
A;if(this.DB===0x00)return;if(this.DB===0x45){var F0=B._NewObject(B.Graphics.IM,
0);F0=F0.SG(this.T.Get(0,0),this.T.Get(0,1),this.T.Get(1,0),this.T.Get(1,1),this.
T.Get(2,0),this.T.Get(2,1),this.T.Get(3,0),this.T.Get(3,1));if(!!F0){F0.L6(0.000000
,0.000000);this.T.Set(0,2,F0.EC*240.000000);F0.L6(1.000000,0.000000);this.T.Set(
1,2,F0.EC*240.000000);F0.L6(1.000000,1.000000);this.T.Set(2,2,F0.EC*240.000000);
F0.L6(0.000000,1.000000);this.T.Set(3,2,F0.EC*240.000000);}this.P4();}if((((this.
DB===0x4D)&&!!this.AZ)&&!!this.Df[0])&&!!this.Df[1]){var Hp=B.pd(this.Jx,[].concat(
AD,this.Df));var Ho=this.MN;var Lt=Hp[0]-Ho[0];var R=Hp[2]-Ho[0];var CJ=Hp[1]-Ho[
1];var Gy=Hp[3]-Ho[1];this.AZ.HP(Lt,CJ);this.T.Set(0,0,this.AZ.G0+this.G7);this.
T.Set(0,1,this.AZ.G1+this.G8);this.T.Set(0,2,this.AZ.EC);this.AZ.HP(R,CJ);this.T.
Set(1,0,this.AZ.G0+this.G7);this.T.Set(1,1,this.AZ.G1+this.G8);this.T.Set(1,2,this.
AZ.EC);this.AZ.HP(R,Gy);this.T.Set(2,0,this.AZ.G0+this.G7);this.T.Set(2,1,this.AZ.
G1+this.G8);this.T.Set(2,2,this.AZ.EC);this.AZ.HP(Lt,Gy);this.T.Set(3,0,this.AZ.
G0+this.G7);this.T.Set(3,1,this.AZ.G1+this.G8);this.T.Set(3,2,this.AZ.EC);if(!!this.
I&&((this.G&0x1)===0x1))this.I.Ar(this.GetExtent());this.CS=[(this.T.Get(0,0)+0.500000
)|0,(this.T.Get(0,1)+0.500000)|0];this.Cg=[(this.T.Get(1,0)+0.500000)|0,(this.T.
Get(1,1)+0.500000)|0];this.CT=[(this.T.Get(2,0)+0.500000)|0,(this.T.Get(2,1)+0.500000
)|0];this.Ch=[(this.T.Get(3,0)+0.500000)|0,(this.T.Get(3,1)+0.500000)|0];this.P4(
);}this.GG=this.DB;this.DB=0x00;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.
GetExtent());},IS:function(Cw){this.Qu(Cw);},Ra:function(C){if(B.pe(C,this.MN))return;
this.MN=C;if((this.GG!==0x45)&&(this.DB===0x00)){this.DB=this.GG;B.iJ([this,this.
IS],this);}},K3:function(M1,CF){var A;if(!CF)throw new Error(FP);if(!this.AZ)this.
AZ=B._NewObject(B.Graphics.IM,0);this.AZ.SB(CF);this.G7=M1[0];this.G8=M1[1];this.
GG=0x4D;this.DB=0x00;if(!this.Df[0]||!this.Df[1])return;var Hp=B.pd(this.Jx,[].concat(
AD,this.Df));var Ho=this.MN;var Lt=Hp[0]-Ho[0];var R=Hp[2]-Ho[0];var CJ=Hp[1]-Ho[
1];var Gy=Hp[3]-Ho[1];this.AZ.HP(Lt,CJ);this.T.Set(0,0,this.AZ.G0+this.G7);this.
T.Set(0,1,this.AZ.G1+this.G8);this.T.Set(0,2,this.AZ.EC);this.AZ.HP(R,CJ);this.T.
Set(1,0,this.AZ.G0+this.G7);this.T.Set(1,1,this.AZ.G1+this.G8);this.T.Set(1,2,this.
AZ.EC);this.AZ.HP(R,Gy);this.T.Set(2,0,this.AZ.G0+this.G7);this.T.Set(2,1,this.AZ.
G1+this.G8);this.T.Set(2,2,this.AZ.EC);this.AZ.HP(Lt,Gy);this.T.Set(3,0,this.AZ.
G0+this.G7);this.T.Set(3,1,this.AZ.G1+this.G8);this.T.Set(3,2,this.AZ.EC);if(!!this.
I&&((this.G&0x1)===0x1))this.I.Ar(this.GetExtent());this.CS=[(this.T.Get(0,0)+0.500000
)|0,(this.T.Get(0,1)+0.500000)|0];this.Cg=[(this.T.Get(1,0)+0.500000)|0,(this.T.
Get(1,1)+0.500000)|0];this.CT=[(this.T.Get(2,0)+0.500000)|0,(this.T.Get(2,1)+0.500000
)|0];this.Ch=[(this.T.Get(3,0)+0.500000)|0,(this.T.Get(3,1)+0.500000)|0];if(!!this.
I&&((this.G&0x1)===0x1))this.I.Ar(this.GetExtent());this.P4();},_Init:function(aArg
){B.Core.Fi._Init.call(this,aArg);(this.C5=[]).__proto__=E.EZ.C5;(this.T=[]).__proto__=
E.EZ.T;this.__proto__=E.EZ;this.G=0x3;},_Mark:function(D){var A;B.Core.Fi._Mark.
call(this,D);if((A=this.AZ)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpView"
};E.PR={Bi:0,BI:0,timer:null,N2:0xFFFFFFFF,N1:0xFFFFFFFF,N0:0xFFFFFFFF,NZ:0xFFFFFFFF
,DN:null,BH:255,Ev:0,Z:null,DF:false,Ke:true,Ds:function(A5,aClip,aOffset,AK,aBlend
){var A;var BC=this.Ev;if(this.BI>=0)BC=this.BI;if(!this.Z||(BC>=this.Z.NoOfFrames
))return;this.Z.Update();var Fp=this.NZ;var Fq=this.N0;var Fr=this.N1;var Fs=this.
N2;var CP=(((AK+1)*this.BH)>>8)+1;var Hj=aOffset[0];var Hk=aOffset[1];var O=B.pd(
this.Jx,[].concat(AD,this.Df));aBlend=aBlend&&((this.G&0x2)===0x2);if(CP<256){Fp=(
Fp&0x00FFFFFF)|((((((Fp>>24)&0xFF)*CP)>>8)&0xFF)<<24);Fq=(Fq&0x00FFFFFF)|((((((Fq>>
24)&0xFF)*CP)>>8)&0xFF)<<24);Fr=(Fr&0x00FFFFFF)|((((((Fr>>24)&0xFF)*CP)>>8)&0xFF
)<<24);Fs=(Fs&0x00FFFFFF)|((((((Fs>>24)&0xFF)*CP)>>8)&0xFF)<<24);}if(this.Kx>0.000000
){if(this.C5.Get(0)<256)Fp=(Fp&0x00FFFFFF)|((((((Fp>>24)&0xFF)*this.C5.Get(0))>>
8)&0xFF)<<24);if(this.C5.Get(1)<256)Fq=(Fq&0x00FFFFFF)|((((((Fq>>24)&0xFF)*this.
C5.Get(1))>>8)&0xFF)<<24);if(this.C5.Get(2)<256)Fr=(Fr&0x00FFFFFF)|((((((Fr>>24)&
0xFF)*this.C5.Get(2))>>8)&0xFF)<<24);if(this.C5.Get(3)<256)Fs=(Fs&0x00FFFFFF)|((((((
Fs>>24)&0xFF)*this.C5.Get(3))>>8)&0xFF)<<24);}aClip=B.pd(aClip,B.pu(this.L7,aOffset
));A5.Rt(aClip,this.Z,BC,this.T.Get(0,0)+Hj,this.T.Get(0,1)+Hk,this.T.Get(0,2),this.
T.Get(1,0)+Hj,this.T.Get(1,1)+Hk,this.T.Get(1,2),this.T.Get(2,0)+Hj,this.T.Get(2
,1)+Hk,this.T.Get(2,2),this.T.Get(3,0)+Hj,this.T.Get(3,1)+Hk,this.T.Get(3,2),O,Fp
,Fq,Fr,Fs,aBlend,this.IF);},E9:function(Ad){var A;var LC=this.Df;if(!!this.Z)this.
Df=this.Z.FrameSize;else this.Df=AD;if(((B.pe(LC,this.Df)||((this.GG===0x45)&&(this.
DB===0x00)))&&!!this.I)&&((this.G&0x1)===0x1))this.I.Ar(this.GetExtent());if(((this.
GG!==0x45)&&(this.DB===0x00))&&!B.pe(LC,this.Df)){this.DB=this.GG;B.iJ([this,this.
IS],this);}},C6:function(Ad){var A;var BC=this.BI;var CQ=0;if(!!this.Z)CQ=this.Z.
NoOfFrames*this.Z.FrameDelay;if((!!this.timer&&(this.BI<0))&&(CQ>0))this.Bi=this.
timer.AI-(this.Ev*this.Z.FrameDelay);if(!!this.timer&&(CQ>0)){var Au=(this.timer.
AI-this.Bi)|0;BC=(Au/this.Z.FrameDelay)|0;if(Au>=CQ){BC=BC%this.Z.NoOfFrames;this.
Bi=this.timer.AI-(Au%CQ);if(!this.Ke){BC=this.Z.NoOfFrames-1;CQ=0;}}}if(((BC!==this.
BI)&&!!this.I)&&((this.G&0x1)===0x1))this.I.Ar(this.GetExtent());this.BI=BC;if(!
CQ&&!!this.timer){B.oI([this,this.C6],this.timer,0);this.timer=null;(A=this.DN)?
A[1].call(A[0],this):null;}},BY:function(C){var A;if(this.DF===C)return;this.DF=
C;this.BI=-1;if(!C&&!!this.timer){B.oI([this,this.C6],this.timer,0);this.timer=null;
}if(C){this.timer=B._GetAutoObject(B.qi.Ip);B.ox([this,this.C6],this.timer,0);B.
iJ([this,this.C6],this);}if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.GetExtent(
));},AH:function(C){var A;if((((C===this.NZ)&&(C===this.N0))&&(C===this.N1))&&(C===
this.N2))return;this.NZ=C;this.N0=C;this.N1=C;this.N2=C;if(!!this.I&&((this.G&0x1
)===0x1))this.I.Ar(this.GetExtent());},CK:function(C){var A;if(C<0)C=0;if((C===this.
Ev)&&(this.BI===-1))return;this.Ev=C;if(!this.timer)this.BI=-1;if(!!this.I&&((this.
G&0x1)===0x1))this.I.Ar(this.GetExtent());},Dv:function(C){if(C===this.Z)return;
if(!!this.Z&&this.Z.HG)B.oI([this,this.E9],this.Z,0);this.Z=C;this.BI=-1;if(!!C&&
C.HG)B.ox([this,this.E9],C,0);if(this.DF){this.BY(false);this.BY(true);}this.E9(
this);},_Init:function(aArg){E.EZ._Init.call(this,aArg);this.__proto__=E.PR;},_Mark:
function(D){var A;E.EZ._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.DN)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Z)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpImage"};E.PQ={A8:
null,bitmap:null,RX:1.000000,RY:0,RZ:0,R0:0,R1:1.000000,R2:0,R3:0,R4:0,R5:1.000000
,Pf:255,Pe:255,Pd:255,MB:255,H:null,No:false,Ds:function(A5,aClip,aOffset,AK,aBlend
){var A;if(!this.bitmap)return;this.bitmap.Update();var Hj=aOffset[0];var Hk=aOffset[
1];var O=B.pd(this.Jx,[].concat(AD,this.Df));aBlend=aBlend&&((this.G&0x2)===0x2);
AK=AK+1;var Fp=255|(255<<8)|(255<<16)|((((AK*this.MB)>>8)&0xFF)<<24);var Fq=255|(
255<<8)|(255<<16)|((((AK*this.Pd)>>8)&0xFF)<<24);var Fr=255|(255<<8)|(255<<16)|((((
AK*this.Pe)>>8)&0xFF)<<24);var Fs=255|(255<<8)|(255<<16)|((((AK*this.Pf)>>8)&0xFF
)<<24);if(this.Kx>0.000000){if(this.C5.Get(0)<256)Fp=(Fp&0x00FFFFFF)|((((((Fp>>24
)&0xFF)*this.C5.Get(0))>>8)&0xFF)<<24);if(this.C5.Get(1)<256)Fq=(Fq&0x00FFFFFF)|((((((
Fq>>24)&0xFF)*this.C5.Get(1))>>8)&0xFF)<<24);if(this.C5.Get(2)<256)Fr=(Fr&0x00FFFFFF
)|((((((Fr>>24)&0xFF)*this.C5.Get(2))>>8)&0xFF)<<24);if(this.C5.Get(3)<256)Fs=(Fs&
0x00FFFFFF)|((((((Fs>>24)&0xFF)*this.C5.Get(3))>>8)&0xFF)<<24);}aClip=B.pd(aClip
,B.pu(this.L7,aOffset));A5.Rt(aClip,this.bitmap,0,this.T.Get(0,0)+Hj,this.T.Get(
0,1)+Hk,this.T.Get(0,2),this.T.Get(1,0)+Hj,this.T.Get(1,1)+Hk,this.T.Get(1,2),this.
T.Get(2,0)+Hj,this.T.Get(2,1)+Hk,this.T.Get(2,2),this.T.Get(3,0)+Hj,this.T.Get(3
,1)+Hk,this.T.Get(3,2),O,Fp,Fq,Fr,Fs,aBlend,this.IF);},BX:function(Av){if(!this.
H||!this.A8)return null;var An=(B.Core.Il.isPrototypeOf(Av)?Av:null);var Am=(B.Core.
Io.isPrototypeOf(Av)?Av:null);if(!An&&!Am)return null;var offset=AD;var Aq=this.
A8.I;while(!!Aq&&(Aq!==this.H)){offset=B.pr(offset,Aq.L.slice(0,2));Aq=Aq.I;}var
P=this.A8;if(!!An&&!An.Down)this.A8=null;if(!!An){An.Cd=B.ps(this.JU(An.Cd),offset
);An.Cy=B.ps(this.JU(An.Cy),offset);return P.BX(An);}if(!!Am){var V7=B.ps(this.JU(
B.pr(Am.Cd,Am.AJ)),offset);Am.Cd=B.ps(this.JU(Am.Cd),offset);Am.Cy=B.ps(this.JU(
Am.Cy),offset);Am.AJ=B.pr(Am.Cd,V7);return P.BX(Am);}return E.EZ.BX.call(this,Av
);},EM:function(AE,W,De,ED,En){var A;if(!this.H||!((this.H.G&0x18)===0x18))return null;
var Q=B.o5(AE);if(!(((A=this.L7)[0]>=A[2])||(A[1]>=A[3]))&&!B.pi(this.L7,Q))return null;
Q=this.JU(Q);var Ji=B.pd(this.Jx,[].concat(AD,this.Df));if(!B.pi(Ji,Q))return null;
var Dg=this.H.EM(B.pu(B.pu([0,0,AE[2]-AE[0],AE[3]-AE[1]],Q),this.H.L.slice(0,2))
,W,De,ED,En);if(!!Dg)this.A8=Dg.Dx;else this.A8=null;if(!!this.A8)return B._NewObject(
B.Core.Im,0).Initialize(this,AD);return null;},Qu:function(Ad){E.EZ.Qu.call(this
,Ad);this.No=false;},K3:function(M1,CF){E.EZ.K3.call(this,M1,CF);this.No=false;}
,WD:function(){var Af=this.T.Get(0,0);var Ag=this.T.Get(0,1);var Ah=this.T.Get(1
,0);var Ai=this.T.Get(1,1);var Qw=this.T.Get(2,0);var Qy=this.T.Get(2,1);var NW=
this.T.Get(3,0);var NX=this.T.Get(3,1);var Lf=Ah-Qw;var Lh=Ai-Qy;var Lg=NW-Qw;var
Li=NX-Qy;var LR=((Af-Ah)+Qw)-NW;var LS=((Ag-Ai)+Qy)-NX;var IY=(Lf*Li)-(Lh*Lg);if(
IY===0.000000)return;var JT=((LR*Li)-(LS*Lg))/IY;var AC=((Lf*LS)-(Lh*LR))/IY;var
N=1.000000;var MX=(Ah-Af)+(JT*Ah);var Gy=(NW-Af)+(AC*NW);var Ci=Af;var B_=(Ai-Ag
)+(JT*Ai);var Nh=(NX-Ag)+(AC*NX);var CO=Ag;this.RX=(Nh*N)-(CO*AC);this.RY=(Ci*AC
)-(Gy*N);this.RZ=(Gy*CO)-(Ci*Nh);this.R0=(CO*JT)-(B_*N);this.R1=(MX*N)-(Ci*JT);this.
R2=(Ci*B_)-(MX*CO);this.R3=(B_*AC)-(Nh*JT);this.R4=(Gy*JT)-(MX*AC);this.R5=(MX*Nh
)-(Gy*B_);this.No=true;},JU:function(B0){var A;if(!this.No)this.WD();var Qx=B0[0
];var Qz=B0[1];var L0=((Qx*this.RX)+(Qz*this.RY))+this.RZ;var L1=((Qx*this.R0)+(
Qz*this.R1))+this.R2;var Qn=((Qx*this.R3)+(Qz*this.R4))+this.R5;if(Qn!==0.000000
){L0=L0/Qn;L1=L1/Qn;}var Ji=B.pd(this.Jx,[].concat(AD,this.Df));L0=L0*(Ji[2]-Ji[
0]);L1=L1*(Ji[3]-Ji[1]);return B.ps([L0|0,L1|0],Ji.slice(0,2));},E9:function(Ad){
var A;var LC=this.Df;if(!!this.H)this.bitmap=this.H.Bf;else this.bitmap=null;if(
!!this.bitmap)this.Df=this.bitmap.FrameSize;else this.Df=AD;if(((B.pe(LC,this.Df
)||((this.GG===0x45)&&(this.DB===0x00)))&&!!this.I)&&((this.G&0x1)===0x1))this.I.
Ar(this.GetExtent());if(((this.GG!==0x45)&&(this.DB===0x00))&&!B.pe(LC,this.Df)){
this.DB=this.GG;B.iJ([this,this.IS],this);}},Mq:function(){return this.MB;},Dl:function(
C){var A;if((((C===this.MB)&&(C===this.Pd))&&(C===this.Pe))&&(C===this.Pf))return;
this.MB=C;this.Pd=C;this.Pe=C;this.Pf=C;if(!!this.I&&((this.G&0x1)===0x1))this.I.
Ar(this.GetExtent());},Tx:function(C){if(C===this.H)return;if(!!C&&(C===this.I))
throw new Error(FQ);if(!!this.H){B.oI([this,this.E9],this.H,0);this.bitmap=null;
}this.H=C;if(!!C){B.ox([this,this.E9],C,0);this.bitmap=C.Bf;}this.E9(this);},_Init:
function(aArg){E.EZ._Init.call(this,aArg);this.__proto__=E.PQ;},_Mark:function(D
){var A;E.EZ._Mark.call(this,D);if((A=this.A8)&&(A._cycle!=D))A._Mark(A._cycle=D
);if((A=this.bitmap)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::WarpGroup"};E.Iq={Bf:null,Cm:0xFFFFFFFF
,Cn:0xFFFFFFFF,Cp:0xFFFFFFFF,Co:0xFFFFFFFF,AJ:B.mJ,Dw:null,Os:0,Cb:false,IF:true
,QM:false,Ds:function(A5,aClip,aOffset,AK,aBlend){if(!this.Dw||(this.Cb&&!this.Bf
))return;var Lc=null;var Bq=this.Co;var Br=this.Cp;var Bo=this.Cm;var Bp=this.Cn;
if(this.Cb){Lc=B._NewObject(B.Graphics.Canvas,0);Lc.AttachBitmap(this.Bf);}AK=AK+
1;if(AK<256){Bq=(Bq&0x00FFFFFF)|((((AK*((Bq>>24)&0xFF))>>8)&0xFF)<<24);Br=(Br&0x00FFFFFF
)|((((AK*((Br>>24)&0xFF))>>8)&0xFF)<<24);Bo=(Bo&0x00FFFFFF)|((((AK*((Bo>>24)&0xFF
))>>8)&0xFF)<<24);Bp=(Bp&0x00FFFFFF)|((((AK*((Bp>>24)&0xFF))>>8)&0xFF)<<24);}if(
!Lc)A5.Iq(aClip,this.Dw,B.pu(this.L,aOffset),this.QM,this.AJ,Bq,Br,Bp,Bo,true,this.
IF,this.Os);else{A5.N3(aClip,Lc,0,B.pu(this.L,aOffset),AD,Bq,Br,Bp,Bo,true);Lc.DetachBitmap(
);}},U:function(C){var A;if(this.Cb&&!B.pe([(A=this.L)[2]-A[0],A[3]-A[1]],[C[2]-
C[0],C[3]-C[1]]))B.iJ([this,this.NT],this);B.Core.Bv.U.call(this,C);},EN:function(
){this.RO();},RO:function(){if(!this.Bf)return;var handle=this.Bf;B.oS(handle);this.
Bf=null;},NT:function(Ad){var A;this.RO();if(this.Cb&&!!this.Dw){var handle=null;
var path=this.Dw.path;var size=[(A=this.L)[2]-A[0],A[3]-A[1]];var quality=this.IF;
var flipY=this.QM;var offset=this.AJ;var nzwind=this.Os===1;handle=B.mC(size,path
,flipY,offset,quality,nzwind);this.Bf=handle;}},If:function(Ad){var A;if(!!this.
I&&((this.G&0x1)===0x1))this.I.Ar(this.L);if(this.Cb)B.iJ([this,this.NT],this);}
,AH:function(C){var A;if((((C===this.Co)&&(C===this.Cp))&&(C===this.Cm))&&(C===this.
Cn))return;this.Co=C;this.Cp=C;this.Cm=C;this.Cn=C;if((!!this.I&&((this.G&0x1)===
0x1))&&!!this.Dw)this.I.Ar(this.L);},Q8:function(C){var A;if(B.pe(C,this.AJ))return;
this.AJ=C;if((!!this.I&&((this.G&0x1)===0x1))&&!!this.Dw)this.I.Ar(this.L);if(this.
Cb)B.iJ([this,this.NT],this);},Q9:function(C){var A;if(C===this.Dw)return;if(!!this.
Dw)B.oI([this,this.If],this.Dw,0);this.Dw=C;if(!!this.Dw)B.ox([this,this.If],this.
Dw,0);if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L);if(this.Cb)B.iJ([this,
this.NT],this);},_Init:function(aArg){B.Core.Bv._Init.call(this,aArg);this.__proto__=
E.Iq;},_Done:function(){this.__proto__=E.Iq;this.EN();B.Core.Bv._Done.call(this);
},_Mark:function(D){var A;B.Core.Bv._Mark.call(this,D);if((A=this.Dw)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::FillPath"};E.Xh={QC:0x1,QB:0x2,QD:
0x4,QG:0x8,QF:0x10,QE:0x20,XF:0x40,XG:0x80,XM:0x100};E.XN={QC:0x1,QB:0x2,QD:0x4,
QG:0x8,QF:0x10,QE:0x20,WH:0x40};
E._Init=function(){E.Aj.__proto__=B.Core.Bv;E.Bc.__proto__=B.Core.Bv;E.FD.__proto__=
B.Core.Bv;E.Iv.__proto__=B.Core.Bv;E.Text.__proto__=B.Core.Bv;E.EZ.__proto__=B.Core.
Fi;E.PR.__proto__=E.EZ;E.PQ.__proto__=E.EZ;E.Iq.__proto__=B.Core.Bv;};E.Ei=function(
D){};return E;})();

/* Embedded Wizard */