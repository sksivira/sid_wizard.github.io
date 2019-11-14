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
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var B=EmWiApp;var E={};
var AD=[0,0];var B8=[0,0,0,0];var FN="The view does not belong to this group";var
Fl="The dialog component is already presented";var FO="The dialog component is actually not presented";
var G2="No fader to perform the fade-in/out operation";var DR="Trying to use the same fader twice";
var FP="Trying to fade-in/out a group which belongs to another owner";var FQ="No view to restack";
var HX="View is not in this group";var IO="Sibling view does not belong to the group";
var IP="No view to remove";var IQ="No view to add";var JE="View already in a group";
var K5="Recursive invalidate during active update cycle.";var IR="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var K6="Trying to cancel a task not belonging to this queue!";
var PS="Trying to enqueue a task twice!";
E.Dx={Ab:null,Ac:null,I:null,G:0x103,Bs:null,Cz:0x14,Ln:function(As,M4){},IC:function(
C){var A;var V=C^this.Cz;if(!V)return;this.Cz=C;if(!!this.Bs&&!((this.G&0x400)===
0x400)){this.I.G=this.I.G|0x5000;B.iJ([A=this.I,A.Cx],this);this.I.Ar([0,0,(A=this.
I.L)[2]-A[0],A[3]-A[1]]);}if(!!this.Bs&&((this.G&0x400)===0x400)){this.Bs.Ja.G=this.
Bs.Ja.G|0x1000;this.I.G=this.I.G|0x4000;B.iJ([A=this.I,A.Cx],this);}},BG:function(
){var Aq=this.I;while(!!Aq){var LK=(E.Root.isPrototypeOf(Aq)?Aq:null);if(!!LK)return LK;
Aq=Aq.I;}return null;},Ds:function(A5,aClip,aOffset,AK,aBlend){},BX:function(Av){
return null;},EM:function(AE,W,De,ED,En){return null;},L5:function(As,EF){return AD;
},OX:function(aOffset,M3){},GetExtent:function(){return B8;},Bd:function(G4,IU){
var A;if(((this.G&0x200)===0x200))G4=G4&~0x400;var Qb=(this.G&~IU)|G4;var H3=Qb^
this.G;this.G=Qb;if(!!this.I&&!!(H3&0x14)){var RU=((this.G&0x14)===0x14);if(RU&&
!this.I.C_)this.I.CA(this);if(!RU&&(this.I.C_===this))this.I.CA(this.I.QL(this,0x14
));}if(!!this.I&&!!(H3&0x403))this.I.Ar(this.GetExtent());if((!!this.Bs&&((Qb&0x400
)===0x400))&&((H3&0x1)===0x1)){this.G=this.G|0x800;this.I.G=this.I.G|0x4000;B.iJ([
A=this.I,A.Cx],this);}if(!!this.I&&((H3&0x400)===0x400)){this.Bs=null;this.G=this.
G|0x800;this.I.G=this.I.G|0x4000;B.iJ([A=this.I,A.Cx],this);}},_Init:function(aArg
){this.__proto__=E.Dx;B.eU++;},_Done:function(){this.__proto__=E.Dx;B.eU--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.Bs)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:null,_className:
"Core::View"};E.Fi={Ch:B.mJ,CT:B.mJ,Cg:B.mJ,CS:B.mJ,Ln:function(As,M4){var Aw=B.
_NewObject(E.Mn,0);this.Bs=null;Aw.DV=this.GetExtent();Aw.S=As;Aw.Ja=M4;Aw.LG=this.
CS;Aw.LH=this.Cg;Aw.LI=this.CT;Aw.LJ=this.Ch;this.Bs=Aw;},L5:function(As,EF){var
A;var BL=this.Cz;var Aw=(E.Mn.isPrototypeOf(A=this.Bs)?A:null);var Af=Aw.DV[0];var
Ag=Aw.DV[1];var Ah=Aw.DV[2];var Ai=Aw.DV[3];var DU=[As[2]-As[0],As[3]-As[1]];var
Az=Ah-Af;var AC=Ai-Ag;if(!EF){var Fc=[(A=Aw.S)[2]-A[0],A[3]-A[1]];Af=Af-Aw.S[0];
Ag=Ag-Aw.S[1];if(Fc[0]!==DU[0]){var BS=((BL&0x4)===0x4);var BT=((BL&0x8)===0x8);
var Gc=((BL&0x1)===0x1);if(!BS&&(Gc||!BT))Af=((Af*DU[0])/Fc[0])|0;if(!BT&&(Gc||!
BS)){Ah=Ah-Aw.S[0];Ah=((Ah*DU[0])/Fc[0])|0;Ah=Ah-DU[0];}else Ah=Ah-Aw.S[2];Af=Af+
As[0];Ah=Ah+As[2];if(!Gc){if(BS&&!BT)Ah=Af+Az;else if(!BS&&BT)Af=Ah-Az;else{Af=Af+((((
Ah-Af)-Az)/2)|0);Ah=Af+Az;}}}else{Ah=Ah-Aw.S[2];Af=Af+As[0];Ah=Ah+As[2];}if(Fc[1
]!==DU[1]){var BU=((BL&0x10)===0x10);var BR=((BL&0x20)===0x20);var Gd=((BL&0x2)===
0x2);if(!BU&&(Gd||!BR))Ag=((Ag*DU[1])/Fc[1])|0;if(!BR&&(Gd||!BU)){Ai=Ai-Aw.S[1];
Ai=((Ai*DU[1])/Fc[1])|0;Ai=Ai-DU[1];}else Ai=Ai-Aw.S[3];Ag=Ag+As[1];Ai=Ai+As[3];
if(!Gd){if(BU&&!BR)Ai=Ag+AC;else if(!BU&&BR)Ag=Ai-AC;else{Ag=Ag+((((Ai-Ag)-AC)/2
)|0);Ai=Ag+AC;}}}else{Ai=Ai-Aw.S[3];Ag=Ag+As[1];Ai=Ai+As[3];}}else{switch(EF){case
3:{Af=As[0];Ah=Af+Az;}break;case 4:{Ah=As[2];Af=Ah-Az;}break;case 1:{Ag=As[1];Ai=
Ag+AC;}break;case 2:{Ai=As[3];Ag=Ai-AC;}break;default:;}if((EF===3)||(EF===4)){var
BU=((BL&0x10)===0x10);var BR=((BL&0x20)===0x20);var Gd=((BL&0x2)===0x2);if(Gd){Ag=
As[1];Ai=As[3];}else if(BU&&!BR){Ag=As[1];Ai=Ag+AC;}else if(BR&&!BU){Ai=As[3];Ag=
Ai-AC;}else{Ag=As[1]+((((As[3]-As[1])-AC)/2)|0);Ai=Ag+AC;}}if((EF===1)||(EF===2)
){var BS=((BL&0x4)===0x4);var BT=((BL&0x8)===0x8);var Gc=((BL&0x1)===0x1);if(Gc){
Af=As[0];Ah=As[2];}else if(BS&&!BT){Af=As[0];Ah=Af+Az;}else if(BT&&!BS){Ah=As[2];
Af=Ah-Az;}else{Af=As[0]+((((As[2]-As[0])-Az)/2)|0);Ah=Af+Az;}}}Aw.isEmpty=(Af>=Ah
)||(Ag>=Ai);Az=(Ah-Af)-1;AC=(Ai-Ag)-1;var G$=Aw.DV[0];var Ha=Aw.DV[1];var GC=(Aw.
DV[2]-G$)-1;var GB=(Aw.DV[3]-Ha)-1;if(!GC)GC=1;if(!GB)GB=1;if(((this.G&0x100)===
0x100)){this.CS=[Af+((((Aw.LG[0]-G$)*Az)/GC)|0),Ag+((((Aw.LG[1]-Ha)*AC)/GB)|0)];
this.Cg=[Af+((((Aw.LH[0]-G$)*Az)/GC)|0),Ag+((((Aw.LH[1]-Ha)*AC)/GB)|0)];this.CT=[
Af+((((Aw.LI[0]-G$)*Az)/GC)|0),Ag+((((Aw.LI[1]-Ha)*AC)/GB)|0)];this.Ch=[Af+((((Aw.
LJ[0]-G$)*Az)/GC)|0),Ag+((((Aw.LJ[1]-Ha)*AC)/GB)|0)];}else{this.GP([Af+((((Aw.LG[
0]-G$)*Az)/GC)|0),Ag+((((Aw.LG[1]-Ha)*AC)/GB)|0)]);this.GQ([Af+((((Aw.LH[0]-G$)*
Az)/GC)|0),Ag+((((Aw.LH[1]-Ha)*AC)/GB)|0)]);this.GR([Af+((((Aw.LI[0]-G$)*Az)/GC)|
0),Ag+((((Aw.LI[1]-Ha)*AC)/GB)|0)]);this.GS([Af+((((Aw.LJ[0]-G$)*Az)/GC)|0),Ag+((((
Aw.LJ[1]-Ha)*AC)/GB)|0)]);this.Bs=Aw;}return[Az+1,AC+1];},OX:function(aOffset,M3
){if(M3){this.CS=B.ps(this.CS,aOffset);this.Cg=B.ps(this.Cg,aOffset);this.CT=B.ps(
this.CT,aOffset);this.Ch=B.ps(this.Ch,aOffset);}else{this.GP(B.ps(this.CS,aOffset
));this.GQ(B.ps(this.Cg,aOffset));this.GR(B.ps(this.CT,aOffset));this.GS(B.ps(this.
Ch,aOffset));}},GetExtent:function(){if(!!this.Bs&&this.Bs.isEmpty)return B8;var
Af=this.CS[0];var Ag=this.CS[1];var Ah=this.CT[0];var Ai=this.CT[1];if((((this.Ch[
0]!==Af)||(this.Cg[1]!==Ag))||(this.Cg[0]!==Ah))||(this.Ch[1]!==Ai)){if(this.Cg[
0]<Af)Af=this.Cg[0];if(this.CT[0]<Af)Af=this.CT[0];if(this.Ch[0]<Af)Af=this.Ch[0
];if(this.Cg[1]<Ag)Ag=this.Cg[1];if(this.CT[1]<Ag)Ag=this.CT[1];if(this.Ch[1]<Ag
)Ag=this.Ch[1];if(this.CS[0]>Ah)Ah=this.CS[0];if(this.Cg[0]>Ah)Ah=this.Cg[0];if(
this.Ch[0]>Ah)Ah=this.Ch[0];if(this.CS[1]>Ai)Ai=this.CS[1];if(this.Cg[1]>Ai)Ai=this.
Cg[1];if(this.Ch[1]>Ai)Ai=this.Ch[1];}else{var tmp;if(Ah<Af){tmp=Af;Af=Ah;Ah=tmp;
}if(Ai<Ag){tmp=Ag;Ag=Ai;Ai=tmp;}}return[Af,Ag,Ah+1,Ai+1];},GS:function(C){var A;
if(B.pe(C,this.Ch))return;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.GetExtent(
));this.Bs=null;this.Ch=C;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.GetExtent(
));if((!!this.I&&((this.G&0x400)===0x400))&&!((this.I.G&0x2000)===0x2000)){this.
G=this.G|0x800;this.I.G=this.I.G|0x4000;B.iJ([A=this.I,A.Cx],this);}},GR:function(
C){var A;if(B.pe(C,this.CT))return;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.
GetExtent());this.Bs=null;this.CT=C;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(
this.GetExtent());if((!!this.I&&((this.G&0x400)===0x400))&&!((this.I.G&0x2000)===
0x2000)){this.G=this.G|0x800;this.I.G=this.I.G|0x4000;B.iJ([A=this.I,A.Cx],this);
}},GQ:function(C){var A;if(B.pe(C,this.Cg))return;if(!!this.I&&((this.G&0x1)===0x1
))this.I.Ar(this.GetExtent());this.Bs=null;this.Cg=C;if(!!this.I&&((this.G&0x1)===
0x1))this.I.Ar(this.GetExtent());if((!!this.I&&((this.G&0x400)===0x400))&&!((this.
I.G&0x2000)===0x2000)){this.G=this.G|0x800;this.I.G=this.I.G|0x4000;B.iJ([A=this.
I,A.Cx],this);}},GP:function(C){var A;if(B.pe(C,this.CS))return;if(!!this.I&&((this.
G&0x1)===0x1))this.I.Ar(this.GetExtent());this.Bs=null;this.CS=C;if(!!this.I&&((
this.G&0x1)===0x1))this.I.Ar(this.GetExtent());if((!!this.I&&((this.G&0x400)===0x400
))&&!((this.I.G&0x2000)===0x2000)){this.G=this.G|0x800;this.I.G=this.I.G|0x4000;
B.iJ([A=this.I,A.Cx],this);}},OI:function(FS){var BD=B.pv(4,B.mJ,null);var N=0;var
BK=3;var P9=false;var P_=false;BD.Set(0,this.CS);BD.Set(1,this.Cg);BD.Set(2,this.
CT);BD.Set(3,this.Ch);while(N<4){var Sz=BD.Get(N)[0];var NV=BD.Get(N)[1];var WG=
BD.Get(BK)[0];var Qv=BD.Get(BK)[1];if(((NV>FS[1])!==(Qv>FS[1]))||((NV<FS[1])!==(
Qv<FS[1]))){var Gg=((((WG-Sz)*(FS[1]-NV))/(Qv-NV))|0)+Sz;if(FS[0]>Gg)P9=!P9;if(FS[
0]<Gg)P_=!P_;}BK=N;N=N+1;}return P9||P_;},S1:function(){return((((this.CS[0]===this.
Ch[0])&&(this.Cg[0]===this.CT[0]))&&(this.CS[1]===this.Cg[1]))&&(this.CT[1]===this.
Ch[1]))||((((this.CS[0]===this.Cg[0])&&(this.CT[0]===this.Ch[0]))&&(this.CS[1]===
this.Ch[1]))&&(this.Cg[1]===this.CT[1]));},_Init:function(aArg){E.Dx._Init.call(
this,aArg);this.__proto__=E.Fi;},_className:"Core::QuadView"};E.Bv={L:B.j_,Ln:function(
As,M4){var Aw=B._NewObject(E.Kw,0);Aw.DV=this.L;Aw.S=As;Aw.Ja=M4;this.Bs=Aw;},L5:
function(As,EF){var A;var BL=this.Cz;var Aw=this.Bs;var Af=Aw.DV[0];var Ag=Aw.DV[
1];var Ah=Aw.DV[2];var Ai=Aw.DV[3];var DU=[As[2]-As[0],As[3]-As[1]];var Az=Ah-Af;
var AC=Ai-Ag;if(!EF){var Fc=[(A=Aw.S)[2]-A[0],A[3]-A[1]];Af=Af-Aw.S[0];Ag=Ag-Aw.
S[1];if(Fc[0]!==DU[0]){var BS=((BL&0x4)===0x4);var BT=((BL&0x8)===0x8);var Gc=((
BL&0x1)===0x1);if(!BS&&(Gc||!BT))Af=((Af*DU[0])/Fc[0])|0;if(!BT&&(Gc||!BS)){Ah=Ah-
Aw.S[0];Ah=((Ah*DU[0])/Fc[0])|0;Ah=Ah-DU[0];}else Ah=Ah-Aw.S[2];Af=Af+As[0];Ah=Ah+
As[2];if(!Gc){if(BS&&!BT)Ah=Af+Az;else if(!BS&&BT)Af=Ah-Az;else{Af=Af+((((Ah-Af)-
Az)/2)|0);Ah=Af+Az;}}}else{Ah=Ah-Aw.S[2];Af=Af+As[0];Ah=Ah+As[2];}if(Fc[1]!==DU[
1]){var BU=((BL&0x10)===0x10);var BR=((BL&0x20)===0x20);var Gd=((BL&0x2)===0x2);
if(!BU&&(Gd||!BR))Ag=((Ag*DU[1])/Fc[1])|0;if(!BR&&(Gd||!BU)){Ai=Ai-Aw.S[1];Ai=((
Ai*DU[1])/Fc[1])|0;Ai=Ai-DU[1];}else Ai=Ai-Aw.S[3];Ag=Ag+As[1];Ai=Ai+As[3];if(!Gd
){if(BU&&!BR)Ai=Ag+AC;else if(!BU&&BR)Ag=Ai-AC;else{Ag=Ag+((((Ai-Ag)-AC)/2)|0);Ai=
Ag+AC;}}}else{Ai=Ai-Aw.S[3];Ag=Ag+As[1];Ai=Ai+As[3];}}else{switch(EF){case 3:{Af=
As[0];Ah=Af+Az;}break;case 4:{Ah=As[2];Af=Ah-Az;}break;case 1:{Ag=As[1];Ai=Ag+AC;
}break;case 2:{Ai=As[3];Ag=Ai-AC;}break;default:;}if((EF===3)||(EF===4)){var BU=((
BL&0x10)===0x10);var BR=((BL&0x20)===0x20);var Gd=((BL&0x2)===0x2);if(Gd){Ag=As[
1];Ai=As[3];}else if(BU&&!BR){Ag=As[1];Ai=Ag+AC;}else if(BR&&!BU){Ai=As[3];Ag=Ai-
AC;}else{Ag=As[1]+((((As[3]-As[1])-AC)/2)|0);Ai=Ag+AC;}}if((EF===1)||(EF===2)){var
BS=((BL&0x4)===0x4);var BT=((BL&0x8)===0x8);var Gc=((BL&0x1)===0x1);if(Gc){Af=As[
0];Ah=As[2];}else if(BS&&!BT){Af=As[0];Ah=Af+Az;}else if(BT&&!BS){Ah=As[2];Af=Ah-
Az;}else{Af=As[0]+((((As[2]-As[0])-Az)/2)|0);Ah=Af+Az;}}}Aw.isEmpty=(Af>=Ah)||(Ag>=
Ai);if(((this.G&0x100)===0x100)){this.L=[Af,Ag,Ah,Ai];}else{this.U([Af,Ag,Ah,Ai]
);this.Bs=Aw;}return[Ah-Af,Ai-Ag];},OX:function(aOffset,M3){if(M3)this.L=B.pu(this.
L,aOffset);else this.U(B.pu(this.L,aOffset));},GetExtent:function(){return this.
L;},U:function(C){var A;if(B.pf(C,this.L))return;if(!!this.I&&((this.G&0x1)===0x1
))this.I.Ar(this.L);this.Bs=null;this.L=C;if(!!this.I&&((this.G&0x1)===0x1))this.
I.Ar(this.L);if((!!this.I&&((this.G&0x400)===0x400))&&!((this.I.G&0x2000)===0x2000
)){this.G=this.G|0x800;this.I.G=this.I.G|0x4000;B.iJ([A=this.I,A.Cx],this);}},_Init:
function(aArg){E.Dx._Init.call(this,aArg);this.__proto__=E.Bv;},_className:"Core::RectView"
};E.H={AX:null,AY:null,Nr:null,Bf:null,By:null,E4:null,Jc:null,C_:null,BH:255,Ds:
function(A5,aClip,aOffset,AK,aBlend){var A;AK=((AK+1)*this.BH)>>8;aBlend=aBlend&&((
this.G&0x2)===0x2);if(!this.Bf)this.RP(A5,aClip,B.ps(aOffset,this.L.slice(0,2)),
AK,aBlend);else{var Ci=255|(255<<8)|(255<<16)|((AK&0xFF)<<24);this.Bf.Update();A5.
N3(aClip,this.Bf,0,B.pu(this.L,aOffset),AD,Ci,Ci,Ci,Ci,aBlend);}},EM:function(AE
,W,De,ED,En){var A;var P=this.AY;var I2=null;var O=B8;var Dn=null;var Qa=!!this.
E4&&(!!this.E4.B2||!!this.E4.AX);if(((A=B.gj(AE,this.L))[0]>=A[2])||(A[1]>=A[3])
)return null;AE=B.pt(AE,this.L.slice(0,2));while(!!P){if(((P.G&0x400)===0x400)&&
!Dn){Dn=P.Ac;while(!!Dn&&!((Dn.G&0x200)===0x200))Dn=Dn.Ac;if(!!Dn)O=B.gj(AE,Dn.GetExtent(
));else O=B8;}if(Dn===P){Dn=null;O=B8;}if((((((P.G&0x8)===0x8)&&((P.G&0x10)===0x10
))&&!((P.G&0x40000)===0x40000))&&!((P.G&0x20000)===0x20000))&&(!((P.G&0x10000)===
0x10000)||((this.By.AU===P)&&!Qa))){var DV=P.GetExtent();var Ng=ED;var IX=null;if(
Ng===P)Ng=null;if(((P.G&0x400)===0x400)){if(!(((A=B.gj(DV,O))[0]>=A[2])||(A[1]>=
A[3])))IX=P.EM(O,W,De,Ng,En);}else{if(!(((A=B.gj(DV,AE))[0]>=A[2])||(A[1]>=A[3])
)||(ED===P))IX=P.EM(AE,W,De,Ng,En);}P=P.Ac;if(!!IX){if(!I2||((IX.Ka<I2.Ka)&&(IX.
Ka>=0)))I2=IX;if(!IX.Ka)P=null;}}else P=P.Ac;}return I2;},Bd:function(G4,IU){var
A;var V8=this.G;E.Bv.Bd.call(this,G4,IU);var H3=this.G^V8;if(!!this.C_&&((H3&0x40
)===0x40)){if(((this.G&0x40)===0x40))this.C_.Bd(0x40,0x0);else this.C_.Bd(0x0,0x40
);}if(!!this.By&&((H3&0x40)===0x40)){if(((this.G&0x40)===0x40)&&((this.By.AU.G&0x14
)===0x14))this.By.AU.Bd(0x40,0x0);else this.By.AU.Bd(0x0,0x40);}if(!!H3){this.G=
this.G|0x8000;B.iJ([this,this.Cx],this);}},U:function(C){var A;if(B.pf(C,this.L)
)return;var Ia=[(A=this.L)[2]-A[0],A[3]-A[1]];var Nu=[C[2]-C[0],C[3]-C[1]];var Jh=
!B.pe(Ia,Nu);if(Jh&&!!this.Bf){this.Bf.KB(Nu);B.mI(this,0);B.mI(this.Bf,0);}E.Bv.
U.call(this,C);if((Jh&&(Ia[0]>0))&&(Ia[1]>0)){var S=[].concat(AD,Ia);var P=this.
AX;var Lk=0x14;while(!!P){if((!P.Bs&&(P.Cz!==Lk))&&!((P.G&0x400)===0x400))P.Ln(S
,null);P=P.Ab;}}if(Jh){this.G=this.G|0x5000;B.iJ([this,this.Cx],this);}},Ql:function(
Av){var R9=(E.KeyEvent.isPrototypeOf(Av)?Av:null);var Fu=this.Nr;if(!R9)return null;
while(!!Fu&&(!Fu.BM||!Fu.BX(R9)))Fu=Fu.Ab;return Fu;},WC:function(Ad){if(!!this.
Bf){var Lm=false;if(!Lm)this.Bf.Md(this.Bf.Ew,this.Bf.Ew,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.RP(this.Bf,this.Bf.Ew,AD,255,true);}},RP:function(A5,aClip
,aOffset,AK,aBlend){var A;var P=this.AX;var RL=B8;var Sn=true;while(!!P){if(((P.
G&0x200)===0x200)){var Sm=(E.KD.isPrototypeOf(P)?P:null);RL=B.gj(aClip,B.pu(Sm.L
,aOffset));Sn=((Sm.G&0x1)===0x1);}if(((P.G&0x1)===0x1)){if(((P.G&0x400)===0x400)
){if(Sn){var O=B.gj(B.pu(P.GetExtent(),aOffset),RL);if(!((O[0]>=O[2])||(O[1]>=O[
3])))P.Ds(A5,O,aOffset,AK,aBlend);}}else{var O=B.gj(B.pu(P.GetExtent(),aOffset),
aClip);if(!((O[0]>=O[2])||(O[1]>=O[3])))P.Ds(A5,O,aOffset,AK,aBlend);}}P=P.Ab;}}
,Wo:function(){var A;var P7=((this.G&0x1000)===0x1000);var Hb=[0,0,(A=this.L)[2]-
A[0],A[3]-A[1]];var GD=false;var I1=B8;var Nj=AD;var Ll=0;var Ni=0;var P=this.AY;
var Dn=null;var Lk=0x14;while(!!P){if(((P.G&0x800)===0x800)){GD=true;P.G=P.G&~0x800;
}if(GD&&((P.G&0x200)===0x200)){GD=false;if(!!(E.KD.isPrototypeOf(P)?P:null).Mf)P.
G=P.G|0x1000;}P=P.Ac;}GD=false;P=this.AX;if(P7){this.G=this.G&~0x1000;P7=!((Hb[0
]>=Hb[2])||(Hb[1]>=Hb[3]));}this.G=this.G|0x2000;while(!!P){if(((P.G&0x400)===0x400
)){if(!!P.Bs&&(P.Bs.Ja!==Dn))P.Bs=null;if((!P.Bs&&GD)&&((P.Cz!==Lk)||!!Ni))P.Ln(
I1,Dn);}if(!!P.Bs){if(P7&&!((P.G&0x400)===0x400))P.L5(Hb,0);if(GD&&((P.G&0x400)===
0x400)){var size=P.L5(B.pu(I1,Nj),Ni);if(((P.G&0x1)===0x1)){var Fv=AD;switch(Ni){
case 3:Fv=[size[0]+Ll,Fv[1]];break;case 4:Fv=[-size[0]-Ll,Fv[1]];break;case 1:Fv=[
Fv[0],size[1]+Ll];break;case 2:Fv=[Fv[0],-size[1]-Ll];break;default:;}Nj=B.ps(Nj
,Fv);}}}if(((P.G&0x200)===0x200)){GD=((P.G&0x1000)===0x1000);Dn=(E.KD.isPrototypeOf(
P)?P:null);if(GD){P.G=P.G&~0x1000;I1=B.pu(Dn.L,Dn.Ez);Nj=AD;Ni=Dn.Mf;Ll=Dn.Space;
GD=!((I1[0]>=I1[2])||(I1[1]>=I1[3]));}if(GD){this.Ar(Dn.L);}}P=P.Ab;}this.G=this.
G&~0x2000;this.Rs([Hb[2]-Hb[0],Hb[3]-Hb[1]]);},Cx:function(Ad){var A;var WE=((this.
G&0x1000)===0x1000);if(((this.G&0x4000)===0x4000)){this.G=this.G&~0x4000;this.Wo(
);}if(((this.G&0x8000)===0x8000)||WE){this.G=this.G&~0x8000;this.FL(this.G);}},CA:
function(C){var A;if(!!C&&(C.I!==this))throw new Error(FN);if(!!C&&!((C.G&0x14)===
0x14))C=null;if(!!C&&((C.G&0x10000)===0x10000))C=null;if(C===this.C_)return;if(!
!this.C_)this.C_.Bd(0x0,0x60);this.C_=C;if(!!C){if(((this.G&0x40)===0x40))C.Bd(0x60
,0x0);else C.Bd(0x20,0x0);}},O1:function(){return!!this.Bf;},HL:function(C){var A;
if(!!this.Bf===C)return;if(C){this.Bf=B._NewObject(B.Graphics.Canvas,0);this.Bf.
KB([(A=this.L)[2]-A[0],A[3]-A[1]]);this.Bf.Mp=[this,this.WC];}else{this.Bf.Mp=null;
this.Bf.KB(AD);this.Bf=null;}if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L);
B.mI(this,0);},Dl:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.BH)return;
this.BH=C;if(!!this.I&&((this.G&0x1)===0x1))this.I.Ar(this.L);},Rw:function(WF){
this.Dl(WF);},Dj:function(){var A;return((this.G&0x1)===0x1);},CB:function(C){if(
C)this.Bd(0x1,0x0);else this.Bd(0x0,0x1);},Ot:function(RB){var A;if(!!this.By){var
AU=this.By.AU.Ot(RB);if(!!AU)return AU;}if(!((this.G&0x10000)===0x10000)||(this.
__proto__!==RB))return null;return this;},Gm:function(La){var A;return(((((this.
G&0x10000)===0x10000)&&!!this.I)&&!!this.I.By)&&(this.I.By.AU===this))&&(!La||this.
I.Gm(true));},Mj:function(La){var A;return(((this.G&0x10000)===0x10000)&&!!this.
I)&&(!La||this.I.Mj(true));},KK:function(CE,Em,G3,FR,FT,K_,Fo,Gv,El,Ej,Ek){var A;
if(!this.By){this.GV(CE,Em,G3,FR,FT,null,null,El,Ej,Ek);return;}var H$=this.By;var
CI=H$.Ab;if(((CE.G&0x10000)===0x10000)&&(this.By.AU!==CE))throw new Error(Fl);var
F$=B._NewObject(E.L_,0);var Ec=H$.Ec;var Ed=null;var CV=null;if(!!CI){Ed=CI.Ed;CV=
CI.CV;}if(!!CI&&!!H$.Jb)Ed=H$.Jb;if(!!CI&&!!Fo)CV=Fo;if(!!K_)Ec=K_;if(!Em)Em=B._GetAutoObject(
B.qi.KJ);if(!G3)G3=Em;if(!FT)FT=FR;if(!FR)FR=FT;F$.Ec=G3;F$.CV=FR;F$.Ed=FT;F$.Jb=
Gv;F$.AU=CE;F$.Ab=this.By.Ab;this.By.Ab=null;this.By=F$;if(this.C_===CE)this.CA(
null);H$.AU.Bd(0x0,0x10040);if(((this.G&0x40)===0x40)&&((CE.G&0x14)===0x14))CE.Bd(
0x10040,0x0);else CE.Bd(0x10000,0x0);if(!!CV){this.DG(CI.AU,CV.Gj(),null,null,Ek
);this.DG(H$.AU,Ec.FA(),null,null,true);this.DG(F$.AU,Em.FB(),El,Ej,true);}else if(
!!Ed){this.DG(CI.AU,Ed.Gk(),null,null,Ek);this.DG(H$.AU,Ec.FA(),null,null,true);
this.DG(F$.AU,Em.FB(),El,Ej,true);}else if(!!Ec){this.DG(H$.AU,Ec.FA(),null,null
,Ek);this.DG(F$.AU,Em.FB(),El,Ej,true);}else this.DG(F$.AU,Em.FB(),El,Ej,Ek);},Kb:
function(CE,K_,Fo,Gv,El,Ej,Ek){var A;if(!this.By)return;if(!CE)return;var Cr=this.
By;var CI=this.By.Ab;var JZ=null;while((!!Cr&&(Cr.AU!==CE))&&!!Cr.Ab){JZ=Cr;Cr=CI;
CI=Cr.Ab;}if(!Cr||(Cr.AU!==CE))throw new Error(FO);if(!JZ){this.By=CI;Cr.Ab=null;
}else{JZ.Ab=CI;Cr.Ab=null;}Cr.AU.Bd(0x0,0x10040);if(((((this.G&0x40)===0x40)&&!!
CI)&&!JZ)&&((CI.AU.G&0x14)===0x14))CI.AU.Bd(0x40,0x0);var Ec=Cr.Ec;var Ed=null;var
CV=null;if(!!CI)Ed=CI.Ed;if(!!CI&&!!Cr.Jb)Ed=Cr.Jb;if(!!CI&&!!Gv)Ed=Gv;if(!!JZ&&
!!CI)CV=CI.CV;if((!!JZ&&!!CI)&&!!Fo)CV=Fo;if(!!K_)Ec=K_;if(!!CV){this.DG(CI.AU,CV.
Gj(),null,null,Ek);this.DG(Cr.AU,Ec.FA(),El,Ej,true);}else if(!!Ed){this.DG(CI.AU
,Ed.Gk(),null,null,Ek);this.DG(Cr.AU,Ec.FA(),El,Ej,true);}else this.DG(Cr.AU,Ec.
FA(),El,Ej,Ek);},GV:function(CE,Em,G3,FR,FT,Fo,Gv,El,Ej,Ek){var A;if(!CE)return;
if(!!this.By&&(this.By.AU===CE)){this.KK(CE,Em,G3,FR,FT,null,Fo,Gv,El,Ej,Ek);return;
}if(((CE.G&0x10000)===0x10000))throw new Error(Fl);var Cr=B._NewObject(E.L_,0);if(
!!this.By&&!this.By.CV){if(!Gv)Gv=Fo;if(!Fo)Fo=Gv;}var CV=null;if(!!this.By)CV=this.
By.CV;if(!!this.By&&!!Fo)CV=Fo;if(!Em)Em=B._GetAutoObject(B.qi.KJ);if(!G3)G3=Em;
if(!FT)FT=FR;if(!FR)FR=FT;Cr.Ec=G3;Cr.CV=FR;Cr.Ed=FT;Cr.Jb=Gv;if(this.C_===CE)this.
CA(null);if(!!this.By)this.By.AU.Bd(0x0,0x40);if(((this.G&0x40)===0x40)&&((CE.G&
0x14)===0x14))CE.Bd(0x10040,0x0);else CE.Bd(0x10000,0x0);Cr.AU=CE;Cr.Ab=this.By;
this.By=Cr;if(!!CV){this.DG(this.By.Ab.AU,CV.Gj(),null,null,Ek);this.DG(CE,Em.FB(
),El,Ej,true);}else this.DG(CE,Em.FB(),El,Ej,Ek);},OV:function(FS){var tmp=this;
while(!!tmp){FS=B.pr(FS,tmp.L.slice(0,2));tmp=tmp.I;}return FS;},DispatchEvent:function(
Av){var A;var P=this.C_;var Aq=(E.H.isPrototypeOf(P)?P:null);var Bb=null;var Qa=
!!this.E4&&(!!this.E4.B2||!!this.E4.AX);if(!!P&&((((P.G&0x10000)===0x10000)||((P.
G&0x40000)===0x40000))||((P.G&0x20000)===0x20000))){P=null;Aq=null;}if(!!this.By&&
!Qa)Bb=this.By.AU.DispatchEvent(Av);if(!Bb&&!!Aq)Bb=Aq.DispatchEvent(Av);else if(
!Bb&&!!P)Bb=P.BX(Av);if(!Bb)Bb=this.BX(Av);if(!Bb)Bb=this.Ql(Av);return Bb;},BroadcastEventAtPosition:
function(Av,RC,aFilter){var A;var P=this.AY;var Bb=null;while(!!P&&!Bb){if((!aFilter||((
A=aFilter)&&((P.G&A)===A)))&&B.pi(P.GetExtent(),RC)){var Aq=(E.H.isPrototypeOf(P
)?P:null);if(!!Aq)Bb=Aq.BroadcastEventAtPosition(Av,B.pr(RC,Aq.L.slice(0,2)),aFilter
);else Bb=P.BX(Av);}P=P.Ac;}if(!Bb)Bb=this.BX(Av);return Bb;},BroadcastEvent:function(
Av,aFilter){var A;var P=this.AY;var Bb=null;while(!!P&&!Bb){if(!aFilter||((A=aFilter
)&&((P.G&A)===A))){var Aq=(E.H.isPrototypeOf(P)?P:null);if(!!Aq)Bb=Aq.BroadcastEvent(
Av,aFilter);else Bb=P.BX(Av);}P=P.Ac;}if(!Bb)Bb=this.BX(Av);if(!Bb)Bb=this.Ql(Av
);return Bb;},Rs:function(aSize){},FL:function(Dz){},B3:function(){this.G=this.G|
0x8000;B.iJ([this,this.Cx],this);},Ar:function(AE){var A;var Aq=this;while(!!Aq&&
!((AE[0]>=AE[2])||(AE[1]>=AE[3]))){var JJ=Aq.Bf;if(!Aq.I&&(Aq!==this)){Aq.Ar(AE);
return;}if(!!JJ){if(((A=JJ.Ew)[0]>=A[2])||(A[1]>=A[3])){B.mI(Aq,0);B.mI(JJ,0);}var
Lm=false;if(Lm)JJ.Ew=[0,0,(A=Aq.L)[2]-A[0],A[3]-A[1]];else JJ.Ew=B.mW(JJ.Ew,AE);
}if(!((Aq.G&0x1)===0x1))return;AE=B.gj(B.pu(AE,Aq.L.slice(0,2)),Aq.L);Aq=Aq.I;}}
,DI:function(aArg){this.B3();},QL:function(K,aFilter){var A;if(!K||(K.I!==this))
return null;var H_=K.Ab;var Ib=K.Ac;var Ly=0x10000;if(((aFilter&0x10000)===0x10000
))Ly=0x0;while(!!H_||!!Ib){if((!!H_&&(!aFilter||((A=aFilter)&&((H_.G&A)===A))))&&(
!Ly||!((A=Ly)&&((H_.G&A)===A))))return H_;if((!!Ib&&(!aFilter||((A=aFilter)&&((Ib.
G&A)===A))))&&(!Ly||!((A=Ly)&&((Ib.G&A)===A))))return Ib;if(!!H_)H_=H_.Ab;if(!!Ib
)Ib=Ib.Ac;}return null;},DG:function(Gu,Bj,El,Ej,Ek){var A;if(!Gu)return;if(!Bj)
throw new Error(G2);if((!!Bj.H||!!Bj.I)||!!Bj.EK)throw new Error(DR);if(!!Gu.I&&(
Gu.I!==this))throw new Error(FP);if(!this.E4)this.E4=B._NewObject(E.Ps,0);Bj.I=this;
Bj.H=Gu;Bj.Nv=Ej;Bj.Qd=El;if(!!Gu.Jc)Gu.Jc.EK.UF(Gu.Jc);Gu.Jc=Bj;Gu.G=Gu.G|0x20000;
if((Ek&&!!this.E4.AY)&&!this.E4.AY.OH())(B.qi.Mc.isPrototypeOf(A=this.E4.AY)?A:null
).QA(Bj);else{var EK=B._NewObject(B.qi.Mc,0);EK.QA(Bj);this.E4.US(EK,false);}},Pk:
function(K,CG){var A;if(!K)throw new Error(FQ);if(K.I!==this)throw new Error(HX);
if(!!CG&&(CG.I!==this))throw new Error(IO);if(K.Ab===CG)return;if(((K.G&0x401)===
0x401)){if(!!K.Ac&&!!K.Bs)K.Ac.G=K.Ac.G|0x800;K.G=K.G|0x800;this.G=this.G|0x4000;
B.iJ([this,this.Cx],this);}if(((K.G&0x200)===0x200)){if(!!K.Ac)K.Ac.G=K.Ac.G|0x800;
K.G=K.G|0x800;this.G=this.G|0x4000;B.iJ([this,this.Cx],this);}if(!!K.Ab)K.Ab.Ac=
K.Ac;else this.AY=K.Ac;if(!!K.Ac)K.Ac.Ab=K.Ab;else this.AX=K.Ab;if(!CG){if(!!this.
AY)this.AY.Ab=K;K.Ac=this.AY;K.Ab=null;this.AY=K;}else{K.Ab=CG;K.Ac=CG.Ac;CG.Ac=
K;if(!!K.Ac)K.Ac.Ab=K;}if(this.AX===CG)this.AX=K;if(((K.G&0x1)===0x1))this.Ar(K.
GetExtent());},CC:function(K){var A;if(!K)throw new Error(FQ);if(K.I!==this)throw new
Error(HX);if(!K.Ab)return;if(((K.G&0x401)===0x401)){if(!!K.Ac&&!!K.Bs)K.Ac.G=K.Ac.
G|0x800;K.G=K.G|0x800;this.G=this.G|0x4000;B.iJ([this,this.Cx],this);}if(((K.G&0x200
)===0x200)){if(!!K.Ac)K.Ac.G=K.Ac.G|0x800;this.G=this.G|0x4000;B.iJ([this,this.Cx
],this);}if(!!K.Ac)K.Ac.Ab=K.Ab;else this.AX=K.Ab;K.Ab.Ac=K.Ac;K.Ac=this.AY;K.Ab=
null;this.AY.Ab=K;this.AY=K;if(((K.G&0x1)===0x1))this.Ar(K.GetExtent());},Pj:function(
K,Dm){var A;if(!K)throw new Error(FQ);if(K.I!==this)throw new Error(HX);var HZ=K;
var H2=K;while((Dm>0)&&!!HZ.Ab){HZ=HZ.Ab;Dm=Dm-1;}while((Dm<0)&&!!H2.Ac){H2=H2.Ac;
Dm=Dm+1;}if((HZ===K)&&(H2===K))return;if(((K.G&0x401)===0x401)){if(!!K.Ac&&!!K.Bs
)K.Ac.G=K.Ac.G|0x800;K.G=K.G|0x800;this.G=this.G|0x4000;B.iJ([this,this.Cx],this
);}if(((K.G&0x200)===0x200)){if(!!K.Ac)K.Ac.G=K.Ac.G|0x800;K.G=K.G|0x800;this.G=
this.G|0x4000;B.iJ([this,this.Cx],this);}if(!!K.Ac)K.Ac.Ab=K.Ab;if(!!K.Ab)K.Ab.Ac=
K.Ac;if(this.AX===K)this.AX=K.Ab;if(this.AY===K)this.AY=K.Ac;if(HZ!==K){K.Ab=HZ.
Ab;K.Ac=HZ;HZ.Ab=K;if(!!K.Ab)K.Ab.Ac=K;}if(H2!==K){K.Ab=H2;K.Ac=H2.Ac;H2.Ac=K;if(
!!K.Ac)K.Ac.Ab=K;}if(!K.Ab)this.AY=K;if(!K.Ac)this.AX=K;if(((K.G&0x1)===0x1))this.
Ar(K.GetExtent());},CM:function(K){var A;if(!K)throw new Error(IP);if(K.I!==this
)throw new Error(HX);if((((K.G&0x401)===0x401)&&!!K.Ac)&&!!K.Bs){K.Ac.G=K.Ac.G|0x800;
this.G=this.G|0x4000;B.iJ([this,this.Cx],this);}if(((K.G&0x200)===0x200)){if(!!K.
Ac)K.Ac.G=K.Ac.G|0x800;this.G=this.G|0x4000;B.iJ([this,this.Cx],this);}K.Bs=null;
if(this.C_===K)this.CA(this.QL(K,0x14));if(!!K.Ac)K.Ac.Ab=K.Ab;if(!!K.Ab)K.Ab.Ac=
K.Ac;if(this.AX===K)this.AX=K.Ab;if(this.AY===K)this.AY=K.Ac;K.I=null;K.Ab=null;
K.Ac=null;if(((K.G&0x1)===0x1))this.Ar(K.GetExtent());},NY:function(K,CG){var A;
if(!K)throw new Error(IQ);if(!!K.I)throw new Error(JE);if(!!CG&&(CG.I!==this))throw new
Error(IO);if(!CG){if(!!this.AY)this.AY.Ab=K;K.Ac=this.AY;this.AY=K;}else{K.Ab=CG;
K.Ac=CG.Ac;CG.Ac=K;if(!!K.Ac)K.Ac.Ab=K;}K.I=this;if(this.AX===CG)this.AX=K;if(((
K.G&0x1)===0x1))this.Ar(K.GetExtent());if(((!this.C_&&((K.G&0x4)===0x4))&&((K.G&
0x10)===0x10))&&!((K.G&0x10000)===0x10000))this.CA(K);if(((K.G&0x401)===0x401)){
K.G=K.G|0x800;this.G=this.G|0x4000;B.iJ([this,this.Cx],this);}if(((K.G&0x200)===
0x200)){K.G=K.G|0x800;this.G=this.G|0x4000;B.iJ([this,this.Cx],this);}},Ap:function(
K,Dm){var A;if(!K)throw new Error(IQ);if(!!K.I)throw new Error(JE);K.I=this;K.Ac=
this.AY;if(!!this.AY)this.AY.Ab=K;this.AY=K;if(!this.AX)this.AX=K;if(!!Dm)this.Pj(
K,Dm);if(((K.G&0x1)===0x1))this.Ar(K.GetExtent());if(((!this.C_&&((K.G&0x4)===0x4
))&&((K.G&0x10)===0x10))&&!((K.G&0x10000)===0x10000))this.CA(K);if(((K.G&0x401)===
0x401)){K.G=K.G|0x800;this.G=this.G|0x4000;B.iJ([this,this.Cx],this);}if(((K.G&0x200
)===0x200)){K.G=K.G|0x800;this.G=this.G|0x4000;B.iJ([this,this.Cx],this);}},Mq:function(
){return this.BH;},_Init:function(aArg){E.Bv._Init.call(this,aArg);this.__proto__=
E.H;this.G=0x1F;this.DI(aArg);},_Mark:function(D){var A;E.Bv._Mark.call(this,D);
if((A=this.AX)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AY)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.Nr)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Bf)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.By)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.E4)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Jc)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.C_)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::Group"};E.Root={DY:null,LW:0,P2:0,Hg:null,BJ:0,GA:null,CH:B.pv(10,0,null)
,Nf:B.pv(10,B.j_,null),E3:B.pv(10,0,null),Gz:B.pv(10,B.mJ,null),JN:B.pv(10,0,null
),FW:null,G6:B.pv(10,B.mJ,null),A8:B.pv(10,null,null),E2:B.pv(10,B.mJ,null),Eb:B.
pv(10,B.mJ,null),FX:B.pv(10,B.mJ,null),AW:0,Nl:0,Nk:0,Nt:B.pv(3,B.j_,null),Sh:0,
JK:null,Dq:B.pv(4,0,null),Cu:B.pv(4,B.j_,null),Cl:0,B5:null,GK:8,SF:250,H4:0,Hd:
0,P8:true,Ns:false,BG:function(){return this;},Ds:function(A5,aClip,aOffset,AK,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=B.hc;if(!fullScreenUpdate)A5.Md(aClip
,B.pu(B.pu(aClip,aOffset),this.L.slice(0,2)),0x00000000,0x00000000,0x00000000,0x00000000
,false);E.H.Ds.call(this,A5,aClip,aOffset,AK,aBlend);},Bd:function(G4,IU){var A;
E.H.Bd.call(this,G4,IU);if(!this.I&&(((G4&0x1)===0x1)||((IU&0x1)===0x1)))this.Ar([
0,0,(A=this.L)[2]-A[0],A[3]-A[1]]);if(!this.I&&(((G4&0x2)===0x2)||((IU&0x2)===0x2
)))this.Ar([0,0,(A=this.L)[2]-A[0],A[3]-A[1]]);},CA:function(C){if((C!==this.B5)||
!C)E.H.CA.call(this,C);},HL:function(C){var A;var V6=this.Bf;E.H.HL.call(this,C);
if(((V6!==this.Bf)&&!this.I)&&((this.G&0x1)===0x1))this.Ar([0,0,(A=this.L)[2]-A[
0],A[3]-A[1]]);},Dl:function(C){var A;var BV=this.BH;E.H.Dl.call(this,C);if(((BV
!==this.BH)&&!this.I)&&((this.G&0x1)===0x1))this.Ar([0,0,(A=this.L)[2]-A[0],A[3]-
A[1]]);},Gm:function(La){return true;},Mj:function(La){return true;},DispatchEvent:
function(Av){if((this.P2>0)&&!!(E.KeyEvent.isPrototypeOf(Av)?Av:null))return null;
if(!!Av){Av.Kt=!!this.BJ;if(!!this.BJ)Av.AI=this.BJ;}var Bb=null;if(!!this.B5){Bb=
this.B5.DispatchEvent(Av);if(!!Bb){this.BJ=0;return Bb;}}if(!!this.Hg){Bb=this.Hg.
AU.DispatchEvent(Av);if(!Bb)Bb=this.BX(Av);if(!Bb)Bb=this.Ql(Av);this.BJ=0;return Bb;
}Bb=E.H.DispatchEvent.call(this,Av);this.BJ=0;return Bb;},BroadcastEvent:function(
Av,aFilter){if(!!Av){Av.Kt=!!this.BJ;if(!!this.BJ)Av.AI=this.BJ;}var Bb=E.H.BroadcastEvent.
call(this,Av,aFilter);this.BJ=0;return Bb;},Ar:function(AE){var A;if(this.LW>0)throw new
Error(K5);if(!!this.Bf&&!this.I){if(((A=this.Bf.Ew)[0]>=A[2])||(A[1]>=A[3])){B.mI(
this,0);B.mI(this.Bf,0);}var Lm=false;if(Lm)this.Bf.Ew=[0,0,(A=this.L)[2]-A[0],A[
3]-A[1]];else this.Bf.Ew=B.mW(this.Bf.Ew,AE);}var fullScreenUpdate=false;fullScreenUpdate=
B.hc;if(fullScreenUpdate)AE=[0,0,(A=this.L)[2]-A[0],A[3]-A[1]];if(!!this.I){E.H.
Ar.call(this,AE);return;}AE=B.gj(B.pu(AE,this.L.slice(0,2)),this.L);if((AE[0]>=AE[
2])||(AE[1]>=AE[3]))return;var N;for(N=0;N<this.Cl;N=N+1)if(!(((A=B.gj(this.Cu.Get(
N),AE))[0]>=A[2])||(A[1]>=A[3]))){this.Cu.Set(N,B.mW(this.Cu.Get(N),AE));this.Dq.
Set(N,B.o4(this.Cu.Get(N)));return;}if(this.Cl<3){this.Cu.Set(this.Cl,AE);this.Dq.
Set(this.Cl,B.o4(AE));this.Cl=this.Cl+1;return;}var BK;var DX;var Lr=0;var Ls=0;
var RH=2147483647;this.Cu.Set(this.Cl,AE);this.Dq.Set(this.Cl,B.o4(AE));for(BK=0;
BK<=this.Cl;BK=BK+1)for(DX=BK+1;DX<=this.Cl;DX=DX+1){var NS=B.o4(B.mW(this.Cu.Get(
BK),this.Cu.Get(DX)));var So=((NS<<8)/(this.Dq.Get(BK)+this.Dq.Get(DX)))|0;if(So<
RH){RH=So;Lr=BK;Ls=DX;}}this.Cu.Set(Lr,B.mW(this.Cu.Get(Lr),this.Cu.Get(Ls)));this.
Dq.Set(Lr,B.o4(this.Cu.Get(Lr)));if(Ls!==this.Cl){this.Cu.Set(Ls,this.Cu.Get(this.
Cl));this.Dq.Set(Ls,this.Dq.Get(this.Cl));}},Pk:function(K,CG){if((!CG&&!!this.B5
)&&(this.B5.I===this))CG=this.B5;E.H.Pk.call(this,K,CG);},CC:function(K){if(!!this.
B5&&(this.B5.I===this))this.Pk(K,this.B5);else E.H.CC.call(this,K);},Pj:function(
K,Dm){if(!K)throw new Error(FQ);if(((Dm>0)&&!!this.B5)&&(this.B5.I===this)){var P=
K;var Nx=Dm;while((P.Ab!==this.B5)&&(Nx>0)){P=P.Ab;Nx=Nx-1;}Dm=Dm-Nx;}E.H.Pj.call(
this,K,Dm);},NY:function(K,CG){if((!CG&&!!this.B5)&&(this.B5.I===this))CG=this.B5;
E.H.NY.call(this,K,CG);},Ap:function(K,Dm){if(((Dm>=0)&&!!this.B5)&&(this.B5.I===
this))Dm=-1;E.H.Ap.call(this,K,Dm);},VK:function(){var C3=B._NewObject(E.Io,0);C3.
Kt=!!this.BJ;if(!!this.BJ)C3.AI=this.BJ;return C3;},IW:function(){var C3=B._NewObject(
E.Il,0);C3.Kt=!!this.BJ;if(!!this.BJ)C3.AI=this.BJ;return C3;},JM:function(){var
C3=B._NewObject(E.L9,0);C3.Kt=!!this.BJ;if(!!this.BJ)C3.AI=this.BJ;return C3;},VL:
function(Ad){var N;var I2=false;for(N=0;N<10;N=N+1)if(!!this.A8.Get(N)){var Q=this.
Eb.Get(N);var Aq=this.A8.Get(N).I;while(!!Aq&&(Aq!==this)){Q=B.pr(Q,Aq.L.slice(0
,2));Aq=Aq.I;}if(!Aq&&(this.A8.Get(N)!==this)){var tmp=this.A8.Get(N);this.AW=N;
this.A8.Set(N,null);tmp.BX(this.IW().InitializeUp(N,this.G6.Get(N),this.Gz.Get(N
),this.E3.Get(N),this.CH.Get(N)+1,this.E2.Get(N),false,this.Eb.Get(N),this.FX.Get(
N)));if(tmp===this.FW)this.FW=null;this.BroadcastEvent(this.JM().InitializeUp(N,
this.CH.Get(N)+1,false,tmp,this.Eb.Get(N)),0x18);}else{this.E3.Set(N,(this.GA.AI-
this.JN.Get(N))|0);if(this.E3.Get(N)<10)this.E3.Set(N,10);this.AW=N;this.A8.Get(
N).BX(this.IW().InitializeHold(N,Q,this.Gz.Get(N),this.E3.Get(N),this.CH.Get(N)+
1,this.E2.Get(N),this.Eb.Get(N),this.FX.Get(N)));I2=true;}}if(!I2)this.GA.A9(false
);},GetFPS:function(){var ticksCount=0;var RV=0;ticksCount=((new Date).getTime()-
B.mH)|0;if(!!this.Nl&&(ticksCount>this.Nl))RV=((this.Nk*1000)/((ticksCount-this.
Nl)|0))|0;this.Nk=0;this.Nl=ticksCount;return RV;},Update:function(){var A;if(!this.
JK){this.JK=B._NewObject(B.Graphics.Canvas,0);this.JK.KB([(A=this.L)[2]-A[0],A[3
]-A[1]]);}this.JK.Update();return this.UpdateGE20(this.JK);},UpdateGE20:function(
A5){if(!this.BeginUpdate())return B8;var GH=this.UpdateCanvas(A5,AD);this.EndUpdate(
);return GH;},EndUpdate:function(){if(this.Cl>0){this.Nk=this.Nk+1;this.Cl=0;}},
UpdateCanvas:function(A5,aOffset){var A;var GH=B8;var VI=[].concat(aOffset,B.ps(
A5.FrameSize,aOffset));var N;var BK=this.Cl;this.LW=this.LW+1;for(N=0;(N<BK)&&(N<
4);N=N+1){if(this.Dq.Get(N)>0){this.Ds(A5,B.pt(this.Cu.Get(N),aOffset),[-aOffset[
0],-aOffset[1]],255,true);GH=B.mW(GH,B.gj(VI,this.Cu.Get(N)));}else BK=BK+1;}this.
LW=this.LW-1;if(!((GH[0]>=GH[2])||(GH[1]>=GH[3])))return B.pt(GH,aOffset);else return GH;
},GetUpdateRegion:function(M5){var N;var BK=this.Cl;if(M5<0)return B8;for(N=0;(N<
BK)&&(N<4);N=N+1){if(!this.Dq.Get(N)){BK=BK+1;M5=M5+1;}else if(N===M5)return this.
Cu.Get(N);}return B8;},BeginUpdate:function(){var Wm=true;var fullScreenUpdate=false;
var N;if((!Wm&&!fullScreenUpdate)&&(this.Cl>0)){var Sy=B.pv(3,B.j_,null);var Qs=
this.Cl;for(N=0;N<Qs;N=N+1)Sy.Set(N,this.Cu.Get(N));for(N=0;N<this.Sh;N=N+1)this.
Ar(this.Nt.Get(N));for(N=0;N<Qs;N=N+1)this.Nt.Set(N,Sy.Get(N));this.Sh=Qs;}var BK;
var DX;for(BK=0;BK<(this.Cl-1);BK=BK+1)if(this.Dq.Get(BK)>0)for(DX=BK+1;DX<this.
Cl;DX=DX+1)if(this.Dq.Get(DX)>0){var NS=B.o4(B.mW(this.Cu.Get(BK),this.Cu.Get(DX
)));if(((NS-this.Dq.Get(BK))-this.Dq.Get(DX))<0){this.Cu.Set(BK,B.mW(this.Cu.Get(
BK),this.Cu.Get(DX)));this.Dq.Set(BK,NS);this.Dq.Set(DX,0);}}for(N=this.Cl-1;N>=
0;N=N-1)if(!this.Dq.Get(N))this.Cl=this.Cl-1;return this.Cl;},DoesNeedUpdate:function(
){if(this.Cl>0)return true;return false;},Initialize:function(aSize){this.U([].concat(
AD,aSize));if(this.P8)this.G=this.G|0x60;else this.G=this.G|0x20;this.Ar(this.L);
return this;},SetRootFocus:function(PX){if(PX===this.P8)return false;this.P8=PX;
if(!PX){if(!!this.B5)this.B5.Bd(0x0,0x40);if(!!this.Hg)this.Hg.AU.Bd(0x0,0x40);else
this.Bd(0x0,0x40);}else{if(!!this.Hg)this.Hg.AU.Bd(0x40,0x0);else this.Bd(0x40,0x0
);if(!!this.B5)this.B5.Bd(0x40,0x0);}return true;},SetUserInputTimestamp:function(
VG){this.BJ=VG;},DriveKeyboardHitting:function(B9,aCharCode,EE){var A;var Qm=!!this.
DY;if(!!this.DY&&((!EE||(this.H4!==B9))||(this.Hd!==aCharCode))){var C3=null;var
P=(E.Dx.isPrototypeOf(A=this.DY)?A:null);var Fu=(E.FE.isPrototypeOf(A=this.DY)?A:
null);if(!!this.H4)C3=B._NewObject(E.KeyEvent,0).Initialize(this.H4,false);if(this.
Hd!==0x00)C3=B._NewObject(E.KeyEvent,0).Initialize2(this.Hd,false);if(!!Fu)Fu.BX(
C3);else if(!!P)P.BX(C3);this.H4=0;this.Hd=0x00;this.DY=null;}if(!!this.DY){var C3=
null;var P=(E.Dx.isPrototypeOf(A=this.DY)?A:null);var Fu=(E.FE.isPrototypeOf(A=this.
DY)?A:null);if(!!B9)C3=B._NewObject(E.KeyEvent,0).Initialize(B9,true);if(this.Hd
!==0x00)C3=B._NewObject(E.KeyEvent,0).Initialize2(aCharCode,true);if(!!Fu)Fu.BX(
C3);else if(!!P)P.BX(C3);}if(this.Ns&&((!EE||(this.H4!==B9))||(this.Hd!==aCharCode
))){this.H4=0;this.Hd=0x00;this.Ns=false;}if((!this.DY&&EE)&&(this.P2>0)){this.H4=
B9;this.Hd=aCharCode;this.Ns=true;}if((!this.DY&&EE)&&!this.Ns){if(!!B9)this.DY=
this.DispatchEvent(B._NewObject(E.KeyEvent,0).Initialize(B9,true));if(aCharCode!==
0x00)this.DY=this.DispatchEvent(B._NewObject(E.KeyEvent,0).Initialize2(aCharCode
,true));if(!(E.FE.isPrototypeOf(A=this.DY)?A:null)&&!(E.Dx.isPrototypeOf(A=this.
DY)?A:null))this.DY=null;this.H4=B9;this.Hd=aCharCode;Qm=Qm||!!this.DY;}this.BJ=
0;return Qm;},DriveCursorMovement:function(B0){return this.DriveMultiTouchMovement(
this.AW,B0);},DriveMultiTouchMovement:function(W,B0){if((W<0)||(W>9)){this.BJ=0;
return false;}var offset=B.pr(B0,this.Eb.Get(W));this.Eb.Set(W,B0);if(!this.A8.Get(
W)||B.pe(offset,AD)){this.BJ=0;return false;}var Q=B0;var Aq=this.A8.Get(W).I;while(
!!Aq&&(Aq!==this)){Q=B.pr(Q,Aq.L.slice(0,2));Aq=Aq.I;}if(!Aq&&(this.A8.Get(W)!==
this)){var tmp=this.A8.Get(W);this.AW=W;this.A8.Set(W,null);tmp.BX(this.IW().InitializeUp(
W,this.G6.Get(W),this.Gz.Get(W),this.E3.Get(W),this.CH.Get(W)+1,this.E2.Get(W),false
,this.Eb.Get(W),this.FX.Get(W)));if(tmp===this.FW)this.FW=null;this.BroadcastEvent(
this.JM().InitializeUp(W,this.CH.Get(W)+1,false,tmp,B0),0x18);}else{this.G6.Set(
W,Q);this.AW=W;this.A8.Get(W).BX(this.VK().Initialize(W,Q,this.Gz.Get(W),offset,
this.E3.Get(W),this.CH.Get(W)+1,this.E2.Get(W),B0,this.FX.Get(W)));}this.BJ=0;return true;
},DriveCursorHitting:function(EE,W,B0){return this.DriveMultiTouchHitting(EE,W,B0
);},DriveMultiTouchHitting:function(EE,W,B0){var A;if((W<0)||(W>9)){this.BJ=0;return false;
}var ticksCount=this.BJ;var Ft=[].concat([-this.GK,-this.GK],[this.GK+1,this.GK+
1]);if(!ticksCount){ticksCount=((new Date).getTime()-B.mH)|0;}var Wu=this.BJ;this.
DriveMultiTouchMovement(W,B0);B0=this.Eb.Get(W);this.BJ=Wu;if(EE)this.FX.Set(W,B0
);if((EE&&!this.A8.Get(W))&&!this.P2){var Dg=null;var Q=B0;if(B.pi(this.Nf.Get(W
),B0)&&((ticksCount-this.JN.Get(W))<=(((A=this.SF)<0)?A+0x100000000:A)))this.CH.
Set(W,this.CH.Get(W)+1);else this.CH.Set(W,0);this.Nf.Set(W,B.pu(Ft,B0));this.JN.
Set(W,ticksCount);if((!!this.B5&&!!this.B5.I)&&((this.B5.G&0x18)===0x18)){var O=
B.pu(Ft,this.B5.I.OV(B0));Dg=this.B5.EM(O,W,this.CH.Get(W)+1,null,0x0);}if(!Dg){
if(!!this.FW&&!!this.FW.I){if(((this.FW.G&0x8)===0x8)&&((this.FW.G&0x10)===0x10)
){var O=B.pu(Ft,this.FW.I.OV(B0));Dg=this.FW.EM(O,W,this.CH.Get(W)+1,null,0x0);}
}else if(!!this.Hg)Dg=this.EM(B.pu(Ft,B0),W,this.CH.Get(W)+1,this.Hg.AU,0x0);else
Dg=this.EM(B.pu(Ft,B0),W,this.CH.Get(W)+1,null,0x0);}if(!!Dg){this.BroadcastEvent(
this.JM().InitializeDown(W,this.CH.Get(W)+1,false,Dg.Dx,B0),0x18);this.A8.Set(W,
Dg.Dx);this.E2.Set(W,Dg.AJ);}else{this.A8.Set(W,null);this.E2.Set(W,AD);this.BJ=
0;return false;}var Aq=Dg.Dx.I;while(!!Aq&&(Aq!==this)){Q=B.pr(Q,Aq.L.slice(0,2)
);Aq=Aq.I;}this.Gz.Set(W,Q);this.G6.Set(W,Q);this.E3.Set(W,0);this.GA.A9(true);this.
AW=W;this.A8.Get(W).BX(this.IW().InitializeDown(W,Q,this.CH.Get(W)+1,this.E2.Get(
W),false,B0));this.BJ=0;return true;}if(!EE&&!!this.A8.Get(W)){var Q=B0;var Aq=this.
A8.Get(W).I;while(!!Aq&&(Aq!==this)){Q=B.pr(Q,Aq.L.slice(0,2));Aq=Aq.I;}if(!Aq)Q=
this.G6.Get(W);this.AW=W;var tmp=this.A8.Get(W);this.A8.Set(W,null);tmp.BX(this.
IW().InitializeUp(W,Q,this.Gz.Get(W),this.E3.Get(W),this.CH.Get(W)+1,this.E2.Get(
W),false,B0,this.FX.Get(W)));this.BroadcastEvent(this.JM().InitializeUp(W,this.CH.
Get(W)+1,false,tmp,B0),0x18);this.BJ=0;return true;}this.BJ=0;return false;},D$:
function(Fn,M2,En){var Ft=[].concat([-this.GK,-this.GK],[this.GK+1,this.GK+1]);if(
Fn===this)Fn=null;if(!this.A8.Get(this.AW))return;var Dg;Dg=this.EM(B.pu(Ft,this.
Eb.Get(this.AW)),this.AW,1,Fn,En);if(!!Dg&&(this.A8.Get(this.AW)!==Dg.Dx))this.Ob(
Dg.Dx,Dg.AJ);if(!Dg&&(this.A8.Get(this.AW)!==M2))this.Ob(M2,AD);},UG:function(Fn
,M2){this.D$(Fn,M2,0x0);},Ob:function(Fn,E0){if(!this.A8.Get(this.AW)||(this.A8.
Get(this.AW)===Fn))return;var tmp=this.A8.Get(this.AW);this.A8.Set(this.AW,null);
tmp.BX(this.IW().InitializeUp(this.AW,this.G6.Get(this.AW),this.Gz.Get(this.AW),
this.E3.Get(this.AW),this.CH.Get(this.AW)+1,this.E2.Get(this.AW),true,this.Eb.Get(
this.AW),this.FX.Get(this.AW)));this.BroadcastEvent(this.JM().InitializeUp(this.
AW,this.CH.Get(this.AW)+1,true,tmp,this.Eb.Get(this.AW)),0x18);var Q=this.Eb.Get(
this.AW);var Aq=null;if(!!Fn)Aq=Fn.I;while(!!Aq&&(Aq!==this)){Q=B.pr(Q,Aq.L.slice(
0,2));Aq=Aq.I;}if(!Aq&&(Fn!==this)){this.A8.Set(this.AW,null);this.GA.A9(false);
return;}this.BroadcastEvent(this.JM().InitializeDown(this.AW,this.CH.Get(this.AW
)+1,true,Fn,this.Eb.Get(this.AW)),0x18);var ticksCount=0;ticksCount=((new Date).
getTime()-B.mH)|0;this.A8.Set(this.AW,Fn);this.E2.Set(this.AW,E0);this.Gz.Set(this.
AW,Q);this.G6.Set(this.AW,Q);this.CH.Set(this.AW,0);this.E3.Set(this.AW,0);this.
JN.Set(this.AW,ticksCount);this.FX.Set(this.AW,this.Eb.Get(this.AW));this.A8.Get(
this.AW).BX(this.IW().InitializeDown(this.AW,Q,this.CH.Get(this.AW)+1,this.E2.Get(
this.AW),true,this.FX.Get(this.AW)));},_Init:function(aArg){E.H._Init.call(this,
aArg);E.Timer._Init.call(this.GA={Aa:this},0);(this.CH=[]).__proto__=E.Root.CH;(
this.Nf=[]).__proto__=E.Root.Nf;(this.E3=[]).__proto__=E.Root.E3;(this.Gz=[]).__proto__=
E.Root.Gz;(this.JN=[]).__proto__=E.Root.JN;(this.G6=[]).__proto__=E.Root.G6;(this.
A8=[]).__proto__=E.Root.A8;(this.E2=[]).__proto__=E.Root.E2;(this.Eb=[]).__proto__=
E.Root.Eb;(this.FX=[]).__proto__=E.Root.FX;(this.Nt=[]).__proto__=E.Root.Nt;(this.
Dq=[]).__proto__=E.Root.Dq;(this.Cu=[]).__proto__=E.Root.Cu;this.__proto__=E.Root;
this.G=0x7F;this.GA.Gq(50);this.GA.IE=[this,this.VL];},_Done:function(){this.__proto__=
E.Root;this.GA._Done();E.H._Done.call(this);},_ReInit:function(){E.H._ReInit.call(
this);this.GA._ReInit();},_Mark:function(D){var A;E.H._Mark.call(this,D);if((A=this.
DY)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Hg)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.GA)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FW)&&(A._cycle!=D))A.
_Mark(A._cycle=D);B.pn(this.A8,D);if((A=this.JK)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.B5)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::Root"};
E.Event={AI:0,Kt:false,Ko:function(){var ticksCount=0;ticksCount=((new Date).getTime(
)-B.mH)|0;return ticksCount;},DI:function(aArg){this.AI=this.Ko();},_Init:function(
aArg){this.__proto__=E.Event;this.DI(aArg);B.eU++;},_Done:function(){this.__proto__=
E.Event;B.eU--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Aa)&&(A.
_cycle!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:null,_className:"Core::Event"
};E.KeyEvent={Cc:0,Be:0,Down:false,Initialize2:function(B9,EE){this.Cc=0;this.Be=
B9;this.Down=EE;if((B9>=0x30)&&(B9<=0x39))this.Cc=(10+B9)-48;if((B9>=0x41)&&(B9<=
0x5A))this.Cc=(105+B9)-65;if((B9>=0x61)&&(B9<=0x7A))this.Cc=(105+B9)-97;if(B9===
0x20)this.Cc=131;if(!this.Cc)switch(B9){case 0x2B:this.Cc=132;break;case 0x2D:this.
Cc=133;break;case 0x2A:this.Cc=134;break;case 0x2F:this.Cc=135;break;case 0x3D:this.
Cc=136;break;case 0x2E:this.Cc=137;break;case 0x2C:this.Cc=138;break;case 0x3A:this.
Cc=139;break;case 0x3B:this.Cc=140;break;default:;}return this;},Initialize:function(
B9,EE){this.Cc=B9;this.Down=EE;this.Be=0x00;var P5=B9-10;var P3=B9-105;if((P5>=0
)&&(P5<=9))this.Be=(48+P5)&0xFFFF;if((P3>=0)&&(P3<=25))this.Be=(65+P3)&0xFFFF;if(
B9===131)this.Be=0x20;if(this.Be===0x00)switch(B9){case 132:this.Be=0x2B;break;case
133:this.Be=0x2D;break;case 134:this.Be=0x2A;break;case 135:this.Be=0x2F;break;case
136:this.Be=0x3D;break;case 137:this.Be=0x2E;break;case 138:this.Be=0x2C;break;case
139:this.Be=0x3A;break;case 140:this.Be=0x3B;break;default:;}return this;},S6:function(
RA){switch(RA){case 141:return((this.Be>=0x41)&&(this.Be<=0x5A))||((this.Be>=0x61
)&&(this.Be<=0x7A));case 142:return(((this.Be>=0x41)&&(this.Be<=0x5A))||((this.Be>=
0x61)&&(this.Be<=0x7A)))||((this.Be>=0x30)&&(this.Be<=0x39));case 143:return(this.
Be>=0x30)&&(this.Be<=0x39);case 144:return(((this.Be>=0x41)&&(this.Be<=0x46))||((
this.Be>=0x61)&&(this.Be<=0x66)))||((this.Be>=0x30)&&(this.Be<=0x39));case 145:return this.
Be!==0x00;case 146:return(this.Be===0x00)&&!!this.Cc;case 147:return(((this.Cc===
6)||(this.Cc===7))||(this.Cc===4))||(this.Cc===5);case 148:return(this.Be!==0x00
)||!!this.Cc;default:;}return RA===this.Cc;},_Init:function(aArg){E.Event._Init.
call(this,aArg);this.__proto__=E.KeyEvent;},_className:"Core::KeyEvent"};E.L9={MP:
null,CZ:B.mJ,EW:0,CX:0,Down:false,D4:false,InitializeUp:function(W,De,IT,PZ,Fm){
this.Down=false;this.CX=W;this.EW=De;this.CZ=Fm;this.MP=PZ;this.D4=IT;return this;
},InitializeDown:function(W,De,IT,PZ,Fm){this.Down=true;this.CX=W;this.EW=De;this.
CZ=Fm;this.MP=PZ;this.D4=IT;return this;},_Init:function(aArg){E.Event._Init.call(
this,aArg);this.__proto__=E.L9;},_Mark:function(D){var A;E.Event._Mark.call(this
,D);if((A=this.MP)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};E.Il={DH:B.mJ,CZ:B.mJ,EW:0,C0:0,Cy:B.mJ,Cd:B.mJ,CX:0,Down:false,D4:false,InitializeHold:
function(W,HY,K8,K9,De,E0,Fm,K7){this.Down=true;this.CX=W;this.Cd=B.ps(HY,E0);this.
Cy=B.ps(K8,E0);this.C0=K9;this.EW=De;this.CZ=Fm;this.DH=K7;return this;},InitializeUp:
function(W,HY,K8,K9,De,E0,IT,Fm,K7){this.Down=false;this.CX=W;this.Cd=B.ps(HY,E0
);this.Cy=B.ps(K8,E0);this.C0=K9;this.EW=De;this.D4=IT;this.CZ=Fm;this.DH=K7;return this;
},InitializeDown:function(W,HY,De,E0,IT,Fm){this.Down=true;this.CX=W;this.Cd=B.ps(
HY,E0);this.Cy=B.ps(HY,E0);this.C0=0;this.EW=De;this.D4=IT;this.CZ=Fm;this.DH=Fm;
return this;},_Init:function(aArg){E.Event._Init.call(this,aArg);this.__proto__=
E.Il;},_className:"Core::CursorEvent"};E.Io={DH:B.mJ,CZ:B.mJ,EW:0,C0:0,AJ:B.mJ,Cy:
B.mJ,Cd:B.mJ,CX:0,Initialize:function(W,HY,K8,aOffset,K9,VF,E0,Fm,K7){this.CX=W;
this.Cd=B.ps(HY,E0);this.Cy=B.ps(K8,E0);this.AJ=aOffset;this.C0=K9;this.EW=VF;this.
CZ=Fm;this.DH=K7;return this;},_Init:function(aArg){E.Event._Init.call(this,aArg
);this.__proto__=E.Io;},_className:"Core::DragEvent"};E.KD={Ez:B.mJ,Space:0,Mf:0
,Ds:function(A5,aClip,aOffset,AK,aBlend){},U:function(C){var A;if(B.pf(C,this.L)
)return;var Ia=[(A=this.L)[2]-A[0],A[3]-A[1]];var Nu=[C[2]-C[0],C[3]-C[1]];var Jh=
!B.pe(Ia,Nu);var offset=B.pr(C.slice(0,2),this.L.slice(0,2));if(!B.pe(offset,AD)&&
!Jh){var P=this.Ab;while(!!P&&!((P.G&0x200)===0x200)){if(((P.G&0x400)===0x400)){
var tmp=((P.G&0x100)===0x100);P.OX(offset,tmp);}P=P.Ab;}}if((Jh&&(Ia[0]>0))&&(Ia[
1]>0)){var S=B.pu(this.L,this.Ez);var P=this.Ab;var Lk=0x14;while(!!P&&!((P.G&0x200
)===0x200)){if(((P.G&0x400)===0x400)){if(!!P.Bs&&(P.Bs.Ja!==this))P.Bs=null;if(!
P.Bs&&((P.Cz!==Lk)||!!this.Mf))P.Ln(S,this);}P=P.Ab;}}E.Bv.U.call(this,C);if(!!this.
I&&Jh){this.G=this.G|0x1000;if(!((this.I.G&0x2000)===0x2000)){this.I.G=this.I.G|
0x4000;B.iJ([A=this.I,A.Cx],this);}}},_Init:function(aArg){E.Bv._Init.call(this,
aArg);this.__proto__=E.KD;this.G=0x203;},_className:"Core::Outline"};E.Ju={E1:0,
CX:0,AI:0,EW:0,C0:0,AJ:B.mJ,Cy:B.mJ,Cd:B.mJ,O0:null,HK:null,HI:null,Ky:null,DO:null
,Dk:null,KE:1000,Eh:8,CD:0x0,HF:-1,QZ:1,S_:1,SI:false,Down:false,EP:false,D4:false
,FU:false,Ds:function(A5,aClip,aOffset,AK,aBlend){},BX:function(Av){var A;var An=(
E.Il.isPrototypeOf(Av)?Av:null);var Am=(E.Io.isPrototypeOf(Av)?Av:null);var Nn=this.
EP;if(!An&&!Am)return null;if(!!An){this.FU=An.Down;this.Down=An.Down;this.EP=this.
OI(An.Cd);this.Cy=An.Cy;this.Cd=An.Cd;this.AJ=AD;this.C0=An.C0;this.EW=An.EW;this.
D4=An.D4;this.CX=An.CX;this.E1=An.CX;this.AI=An.AI;if(An.Down&&!An.C0)Nn=false;}
if(!!Am){this.Down=true;this.EP=this.OI(Am.Cd);this.Cy=Am.Cy;this.Cd=Am.Cd;this.
AJ=Am.AJ;this.C0=Am.C0;this.EW=Am.EW;this.CX=Am.CX;this.E1=Am.CX;this.D4=false;this.
AI=Am.AI;(A=this.O0)?A[1].call(A[0],this):null;}if((!!An&&this.Down)&&!this.C0)(
A=this.Dk)?A[1].call(A[0],this):null;if((!!An&&this.Down)&&(this.C0>0))(A=this.Ky
)?A[1].call(A[0],this):null;if((this.Down&&this.EP)&&!Nn)(A=this.HI)?A[1].call(A[
0],this):null;if(((this.Down&&!this.EP)&&Nn)||((!this.Down&&this.EP)&&Nn))(A=this.
HK)?A[1].call(A[0],this):null;if(!!An&&!this.Down)(A=this.DO)?A[1].call(A[0],this
):null;if(!!this.CD){if(((((this.CD&0x10)===0x10)&&!!An)&&An.Down)&&(An.C0>=this.
KE))this.BG().D$(null,this,0x10);if((((this.CD&0x1)===0x1)&&!!Am)&&((Am.CZ[1]-Am.
DH[1])<=-this.Eh))this.BG().D$(null,this,0x1);if((((this.CD&0x2)===0x2)&&!!Am)&&((
Am.CZ[1]-Am.DH[1])>=this.Eh))this.BG().D$(null,this,0x2);if((((this.CD&0x4)===0x4
)&&!!Am)&&((Am.CZ[0]-Am.DH[0])<=-this.Eh))this.BG().D$(null,this,0x4);if((((this.
CD&0x8)===0x8)&&!!Am)&&((Am.CZ[0]-Am.DH[0])>=this.Eh))this.BG().D$(null,this,0x8
);}return this;},EM:function(AE,W,De,ED,En){var A;if(!!ED&&(ED!==this))return null;
if((De<this.S_)||(De>this.QZ))return null;if((this.HF>=0)&&(W!==this.HF))return null;
if((!this.SI&&this.FU)&&(W!==this.E1))return null;if(!!(En&this.CD))return null;
if(this.S1()){var R=B.gj(AE,this.GetExtent());if(!((R[0]>=R[2])||(R[1]>=R[3]))){
var Cj=B.o5(AE);var offset=AD;if(Cj[0]<R[0])offset=[R[0]-Cj[0],offset[1]];if(Cj[
0]>=R[2])offset=[(R[2]-Cj[0])-1,offset[1]];if(Cj[1]<R[1])offset=[offset[0],R[1]-
Cj[1]];if(Cj[1]>=R[3])offset=[offset[0],(R[3]-Cj[1])-1];return B._NewObject(E.Im
,0).Initialize(this,offset);}}else{var BD=B.pv(9,B.mJ,null);var N;BD.Set(0,B.o5(
AE));BD.Set(1,BD.Get(0));BD.Set(2,BD.Get(0));BD.Set(3,BD.Get(0));BD.Set(4,BD.Get(
0));BD.Set(1,[AE[0],BD.Get(1)[1]]);BD.Set(2,[BD.Get(2)[0],AE[1]]);BD.Set(3,[AE[2
],BD.Get(3)[1]]);BD.Set(4,[BD.Get(4)[0],AE[3]]);BD.Set(5,AE.slice(0,2));BD.Set(6
,[AE[2],AE[1]]);BD.Set(7,[AE[0],AE[3]]);BD.Set(8,AE.slice(2,4));for(N=0;N<9;N=N+
1)if(this.OI(BD.Get(N)))return B._NewObject(E.Im,0).Initialize(this,B.pr(BD.Get(
N),BD.Get(0)));}return null;},Q$:function(C){if(C<1)C=1;this.Eh=C;},O5:function(
C){if(C<1)C=1;this.QZ=C;},A9:function(C){if(C)this.Bd(0x10,0x0);else this.Bd(0x0
,0x10);},_Init:function(aArg){E.Fi._Init.call(this,aArg);this.__proto__=E.Ju;this.
G=0x11B;},_Mark:function(D){var A;E.Fi._Mark.call(this,D);if((A=this.O0)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.HK)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.HI)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Ky)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.DO)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Dk)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
},_className:"Core::SimpleTouchHandler"};E.Pn={E1:0,Cy:B.mJ,J$:0,ME:0,Angle:0,O2:
null,Db:null,CL:null,KE:1000,Eh:8,CD:0x0,HF:-1,Down:false,EP:false,D4:false,FU:false
,Ds:function(A5,aClip,aOffset,AK,aBlend){},BX:function(Av){var A;var An=(E.Il.isPrototypeOf(
Av)?Av:null);var Am=(E.Io.isPrototypeOf(Av)?Av:null);var Q=AD;var AM=this.Angle;
var V;if(!An&&!Am)return null;if(!!An){this.FU=An.Down;this.Down=An.Down;this.EP=
B.pi(this.L,An.Cd);this.D4=An.D4;this.Cy=An.Cy;Q=B.pr(An.Cd,B.o5(this.L));this.E1=
An.CX;}if(!!Am){this.EP=B.pi(this.L,Am.Cd);Q=B.pr(Am.Cd,B.o5(this.L));this.E1=Am.
CX;}var R=Math.sqrt((Q[0]*Q[0])+(Q[1]*Q[1]));if(R>=8.000000){AM=(Math.acos(Q[0]/
R)*B.pL)|0;if(Q[1]>0)AM=360-AM;}V=AM-this.Angle;if(V>180)V=V-360;if(V<-180)V=V+360;
this.Angle=AM;this.J$=V;this.ME=this.ME+V;if((!!An&&An.Down)&&!An.C0){this.J$=0;
this.ME=0;(A=this.CL)?A[1].call(A[0],this):null;}if(!!V)(A=this.O2)?A[1].call(A[
0],this):null;if(!this.Down)(A=this.Db)?A[1].call(A[0],this):null;if(!!this.CD){
if(((((this.CD&0x10)===0x10)&&!!An)&&An.Down)&&(An.C0>=this.KE))this.BG().D$(null
,this,0x10);if((((this.CD&0x1)===0x1)&&!!Am)&&((Am.CZ[1]-Am.DH[1])<=-this.Eh))this.
BG().D$(null,this,0x1);if((((this.CD&0x2)===0x2)&&!!Am)&&((Am.CZ[1]-Am.DH[1])>=this.
Eh))this.BG().D$(null,this,0x2);if((((this.CD&0x4)===0x4)&&!!Am)&&((Am.CZ[0]-Am.
DH[0])<=-this.Eh))this.BG().D$(null,this,0x4);if((((this.CD&0x8)===0x8)&&!!Am)&&((
Am.CZ[0]-Am.DH[0])>=this.Eh))this.BG().D$(null,this,0x8);}return this;},EM:function(
AE,W,De,ED,En){var A;if(!!ED&&(ED!==this))return null;if((this.HF>=0)&&(W!==this.
HF))return null;if(this.FU&&(W!==this.E1))return null;if(!!(En&this.CD))return null;
var R=B.gj(AE,this.L);if(!((R[0]>=R[2])||(R[1]>=R[3]))){var Cj=B.o5(AE);var offset=
AD;if(Cj[0]<R[0])offset=[R[0]-Cj[0],offset[1]];if(Cj[0]>=R[2])offset=[(R[2]-Cj[0
])-1,offset[1]];if(Cj[1]<R[1])offset=[offset[0],R[1]-Cj[1]];if(Cj[1]>=R[3])offset=[
offset[0],(R[3]-Cj[1])-1];return B._NewObject(E.Im,0).Initialize(this,offset);}return null;
},A9:function(C){if(C)this.Bd(0x10,0x0);else this.Bd(0x0,0x10);},_Init:function(
aArg){E.Bv._Init.call(this,aArg);this.__proto__=E.Pn;this.G=0x11B;},_Mark:function(
D){var A;E.Bv._Mark.call(this,D);if((A=this.O2)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Db)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CL
)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::RotateTouchHandler"
};E.EU={E1:0,GE:5000.000000,NB:null,Sp:null,J0:null,timer:null,Jg:0,Nm:B.mJ,I0:0
,Gx:0,AO:0,Ie:0,J5:0,IZ:0,Gw:0,AN:0,Id:0,Ic:0,Cy:B.mJ,J$:B.mJ,HF:-1,Bk:B.mJ,Bl:B.
mJ,AJ:B.mJ,Pc:null,Db:null,CL:null,MM:B.mJ,EV:B.mJ,ML:B.mJ,Rg:5.000000,UH:500,KE:
1000,Eh:8,CD:0x0,Pi:-1,Re:200,GX:0.000000,UI:true,Pr:true,MI:true,Jw:false,E_:false
,E$:false,FU:false,Ds:function(A5,aClip,aOffset,AK,aBlend){},BX:function(Av){var
A;var An=(E.Il.isPrototypeOf(Av)?Av:null);var Am=(E.Io.isPrototypeOf(Av)?Av:null
);var Ck=(E.L9.isPrototypeOf(Av)?Av:null);if(!!Ck&&((Ck.MP===this)||Ck.D4))return null;
if((!!Ck&&Ck.Down)&&(this.FU||!this.Jw))return null;if((!!Ck&&Ck.Down)&&!B.pi(this.
L,this.I.OV(Ck.CZ)))return null;if((!!Ck&&!Ck.Down)&&(!this.FU||(this.E1!==Ck.CX
)))return null;if((!An&&!Am)&&!Ck)return null;if(!!An){this.FU=An.Down;this.E1=An.
CX;this.Cy=An.Cy;}if(!!Am)this.E1=Am.CX;if(!!Ck){this.FU=Ck.Down;this.E1=Ck.CX;}
if(!!Ck&&Ck.Down){this.Qq();this.AN=(((Ck.AI-this.Ic)*0.001000)*this.Gw)+this.AN;
this.AO=(((Ck.AI-this.J5)*0.001000)*this.Gx)+this.AO;if(this.E_)this.AN=0.000000;
if(this.E$)this.AO=0.000000;this.Gw=0.000000;this.Gx=0.000000;this.E_=false;this.
E$=false;this.Nm=this.AJ;this.Jg=Ck.AI;return this;}if((!!An&&An.Down)&&!An.C0){
this.Qq();this.AN=(((An.AI-this.Ic)*0.001000)*this.Gw)+this.AN;this.AO=(((An.AI-
this.J5)*0.001000)*this.Gx)+this.AO;if(this.E_||!this.Jw)this.AN=0.000000;if(this.
E$||!this.Jw)this.AO=0.000000;this.Gw=0.000000;this.Gx=0.000000;this.E_=false;this.
E$=false;if(!this.Jw){this.Jw=true;(A=this.CL)?A[1].call(A[0],this):null;(A=this.
NB)?A[1].call(A[0],this):null;}this.Nm=this.AJ;this.Jg=An.AI;}if(!!Am){var V=B.pr(
Am.Cd,Am.Cy);var At=this.AJ;if(this.MI)At=[this.Nm[0]+V[0],At[1]];if(this.Pr)At=[
At[0],this.Nm[1]+V[1]];if(this.UI){if(At[0]<this.Bl[0])At=[this.Bl[0]+(((At[0]-this.
Bl[0])/2)|0),At[1]];else if(At[0]>this.Bk[0])At=[this.Bk[0]+(((At[0]-this.Bk[0])
/2)|0),At[1]];if(At[1]<this.Bl[1])At=[At[0],this.Bl[1]+(((At[1]-this.Bl[1])/2)|0
)];else if(At[1]>this.Bk[1])At=[At[0],this.Bk[1]+(((At[1]-this.Bk[1])/2)|0)];}else{
if(At[0]<this.Bl[0])At=[this.Bl[0],At[1]];else if(At[0]>this.Bk[0])At=[this.Bk[0
],At[1]];if(At[1]<this.Bl[1])At=[At[0],this.Bl[1]];else if(At[1]>this.Bk[1])At=[
At[0],this.Bk[1]];}if(!B.pe(At,this.AJ)){this.J$=B.pr(At,this.AJ);this.AJ=At;(A=
this.J0)?A[1].call(A[0],this):null;(A=this.Pc)?A[1].call(A[0],this):null;}}if((!
!Ck&&!Ck.Down)&&((Ck.AI-this.Jg)>=(((A=this.Re)<0)?A+0x100000000:A))){this.AN=0.000000;
this.AO=0.000000;}if((!!An&&An.Down)&&((An.AI-this.Jg)>=(((A=this.Re)<0)?A+0x100000000:
A))){this.AN=0.000000;this.AO=0.000000;}if((!!An&&!An.Down)&&(this.Pi>=0)){var B_=
B.pr(An.Cd,An.Cy);if(((B_[0]*B_[0])+(B_[1]*B_[1]))<=(this.Pi*this.Pi)){this.AN=0.000000;
this.AO=0.000000;}}if(!!Am&&(Am.AI>this.Jg)){var V=Am.AJ;var R7=1000.000000/(Am.
AI-this.Jg);var Hh=0.000000;var Hi=0.000000;if(this.MI)Hh=V[0]*R7;if(this.Pr)Hi=
V[1]*R7;if((Hh*this.AN)<0.000000)this.AN=0.000000;if((Hi*this.AO)<0.000000)this.
AO=0.000000;this.AN=(this.AN+Hh)*0.500000;this.AO=(this.AO+Hi)*0.500000;if(this.
GX>0.000000){if(this.AN>this.GX)this.AN=this.GX;if(this.AN<-this.GX)this.AN=-this.
GX;if(this.AO>this.GX)this.AO=this.GX;if(this.AO<-this.GX)this.AO=-this.GX;}this.
Jg=Am.AI;}if(!!this.CD){if(((((this.CD&0x10)===0x10)&&!!An)&&An.Down)&&(An.C0>=this.
KE))this.BG().D$(null,this,0x10);if((((this.CD&0x1)===0x1)&&!!Am)&&((Am.CZ[1]-Am.
DH[1])<=-this.Eh))this.BG().D$(null,this,0x1);if((((this.CD&0x2)===0x2)&&!!Am)&&((
Am.CZ[1]-Am.DH[1])>=this.Eh))this.BG().D$(null,this,0x2);if((((this.CD&0x4)===0x4
)&&!!Am)&&((Am.CZ[0]-Am.DH[0])<=-this.Eh))this.BG().D$(null,this,0x4);if((((this.
CD&0x8)===0x8)&&!!Am)&&((Am.CZ[0]-Am.DH[0])>=this.Eh))this.BG().D$(null,this,0x8
);}if((!An||An.Down)&&!Ck)return this;if(!!An&&An.D4){this.AN=0.000000;this.AO=0.000000;
}if((this.AJ[0]<=this.Bl[0])||(this.AJ[0]>=this.Bk[0]))this.AN=0.000000;else if(
this.AN===0.000000){var A0=this.AJ[0];var A7=this.Bl[0]+this.MM[0];var AV=this.Bk[
0]-this.ML[0];if(A0<A7)AV=this.Bl[0];else if(A0>AV)A7=this.Bk[0];else if(this.EV[
0]<=1){A7=A0;AV=A0;}else{var F_=(AV-A0)%this.EV[0];AV=(A0-this.EV[0])+F_;A7=A0+F_;
if(AV<this.Bl[0])AV=this.Bl[0];if(A7>this.Bk[0])A7=this.Bk[0];}if((A7-A0)<=(A0-AV
))A0=A7;else A0=AV;if(A0!==this.AJ[0]){var C2=A0-this.AJ[0];if(C2>0.000000)this.
AN=Math.sqrt((C2*2.000000)*this.GE)+20.000000;if(C2<0.000000)this.AN=-Math.sqrt((-
C2*2.000000)*this.GE)-20.000000;this.Gw=(400.000000-(this.AN*this.AN))/(2.000000
*C2);this.IZ=A0;}}else{var Ww=this.AN*this.AN;var C2=Ww/(2.000000*this.GE);var A0=
this.AJ[0];if(this.AN>0.000000)A0=A0+(C2|0);if(this.AN<0.000000)A0=A0-(C2|0);if(
A0>this.Bk[0])A0=this.Bk[0];else if(A0<this.Bl[0])A0=this.Bl[0];var Sv=A0;var A7=
this.Bl[0]+this.MM[0];var AV=this.Bk[0]-this.ML[0];if(A0<A7)AV=this.Bl[0];else if(
A0>AV)A7=this.Bk[0];else if(this.EV[0]<=1){A7=A0;AV=A0;}else{var F_=(AV-A0)%this.
EV[0];AV=(A0-this.EV[0])+F_;A7=A0+F_;if(AV<this.Bl[0])AV=this.Bl[0];if(A7>this.Bk[
0])A7=this.Bk[0];}if(this.AN>0.000000)if(AV<=this.AJ[0])A0=A7;else if((A0-AV)<(A7-
A0))A0=AV;else A0=A7;else if(A7>=this.AJ[0])A0=AV;else if((A0-AV)>(A7-A0))A0=A7;
else A0=AV;if(A0!==this.AJ[0]){C2=A0-this.AJ[0];if(A0!==Sv){var Hn=A0-Sv;if(Hn>0.000000
)this.AN=this.AN+Math.sqrt((Hn*2.000000)*this.GE);if(Hn<0.000000)this.AN=this.AN-
Math.sqrt((-Hn*2.000000)*this.GE);}if(this.AN>0.000000)this.AN=this.AN+20.000000;
if(this.AN<0.000000)this.AN=this.AN-20.000000;this.Gw=(400.000000-(this.AN*this.
AN))/(2.000000*C2);this.IZ=A0;}else this.AN=0.000000;}if((this.AJ[1]<=this.Bl[1]
)||(this.AJ[1]>=this.Bk[1]))this.AO=0.000000;else if(this.AO===0.000000){var A1=
this.AJ[1];var A7=this.Bl[1]+this.MM[1];var AV=this.Bk[1]-this.ML[1];if(A1<A7)AV=
this.Bl[1];else if(A1>AV)A7=this.Bk[1];else if(this.EV[1]<=1){A7=A1;AV=A1;}else{
var F_=(AV-A1)%this.EV[1];AV=(A1-this.EV[1])+F_;A7=A1+F_;if(AV<this.Bl[1])AV=this.
Bl[1];if(A7>this.Bk[1])A7=this.Bk[1];}if((A7-A1)<=(A1-AV))A1=A7;else A1=AV;if(A1
!==this.AJ[1]){var C2=A1-this.AJ[1];if(C2>0.000000)this.AO=Math.sqrt((C2*2.000000
)*this.GE)+20.000000;if(C2<0.000000)this.AO=-Math.sqrt((-C2*2.000000)*this.GE)-20.000000;
this.Gx=(400.000000-(this.AO*this.AO))/(2.000000*C2);this.I0=A1;}}else{var Wx=this.
AO*this.AO;var C2=Wx/(2.000000*this.GE);var A1=this.AJ[1];if(this.AO>0.000000)A1=
A1+(C2|0);if(this.AO<0.000000)A1=A1-(C2|0);if(A1>this.Bk[1])A1=this.Bk[1];else if(
A1<this.Bl[1])A1=this.Bl[1];var Sw=A1;var A7=this.Bl[1]+this.MM[1];var AV=this.Bk[
1]-this.ML[1];if(A1<A7)AV=this.Bl[1];else if(A1>AV)A7=this.Bk[1];else if(this.EV[
1]<=1){A7=A1;AV=A1;}else{var F_=(AV-A1)%this.EV[1];AV=(A1-this.EV[1])+F_;A7=A1+F_;
if(AV<this.Bl[1])AV=this.Bl[1];if(A7>this.Bk[1])A7=this.Bk[1];}if(this.AO>0.000000
)if(AV<=this.AJ[1])A1=A7;else if((A1-AV)<(A7-A1))A1=AV;else A1=A7;else if(A7>=this.
AJ[1])A1=AV;else if((A1-AV)>(A7-A1))A1=A7;else A1=AV;if(A1!==this.AJ[1]){C2=A1-this.
AJ[1];if(A1!==Sw){var Hn=A1-Sw;if(Hn>0.000000)this.AO=this.AO+Math.sqrt((Hn*2.000000
)*this.GE);if(Hn<0.000000)this.AO=this.AO-Math.sqrt((-Hn*2.000000)*this.GE);}if(
this.AO>0.000000)this.AO=this.AO+20.000000;if(this.AO<0.000000)this.AO=this.AO-20.000000;
this.Gx=(400.000000-(this.AO*this.AO))/(2.000000*C2);this.I0=A1;}else this.AO=0.000000;
}if(!!An)this.Ic=An.AI;if(!!Ck)this.Ic=Ck.AI;this.J5=this.Ic;this.Id=this.AJ[0];
this.Ie=this.AJ[1];this.Wy();return this;},EM:function(AE,W,De,ED,En){var A;if(!
!ED&&(ED!==this))return null;if((this.HF>=0)&&(W!==this.HF))return null;if(this.
FU&&(W!==this.E1))return null;if(!!(En&this.CD))return null;if(!this.Pr&&!!(En&0x3
))return null;if(!this.MI&&!!(En&0xC))return null;var R=B.gj(AE,this.L);if(!((R[
0]>=R[2])||(R[1]>=R[3]))){var Cj=B.o5(AE);var offset=AD;if(Cj[0]<R[0])offset=[R[
0]-Cj[0],offset[1]];if(Cj[0]>=R[2])offset=[(R[2]-Cj[0])-1,offset[1]];if(Cj[1]<R[
1])offset=[offset[0],R[1]-Cj[1]];if(Cj[1]>=R[3])offset=[offset[0],(R[3]-Cj[1])-1
];return B._NewObject(E.Im,0).Initialize(this,offset);}return null;},Qq:function(
){if(!!this.timer){B.oI([this,this.C6],this.timer,0);this.timer=null;}},Wy:function(
){this.timer=B._GetAutoObject(B.qi.Ip);B.ox([this,this.C6],this.timer,0);},C6:function(
Ad){var A;if(!this.timer)return;var J6=(this.timer.AI-this.Ic)*0.001000;var J7=(
this.timer.AI-this.J5)*0.001000;var Wz=J6*J6;var WA=J7*J7;var Hh=(this.Gw*J6)+this.
AN;var Hi=(this.Gx*J7)+this.AO;var At=[((((this.Gw*0.500000)*Wz)+(this.AN*J6))+this.
Id)|0,((((this.Gx*0.500000)*WA)+(this.AO*J7))+this.Ie)|0];var Nz=this.UH*0.001000;
if(this.E_&&(J6>=Nz)){At=[this.IZ,At[1]];this.AN=0.000000;this.Gw=0.000000;this.
Id=At[0];this.E_=false;}else if(this.E_){var CO=1.000000-Math.pow(1.000000-(J6/Nz
),this.Rg);At=[(this.Id+((this.IZ-this.Id)*CO))|0,At[1]];}if(this.E$&&(J7>=Nz)){
At=[At[0],this.I0];this.AO=0.000000;this.Gx=0.000000;this.Ie=At[1];this.E$=false;
}else if(this.E$){var CO=1.000000-Math.pow(1.000000-(J7/Nz),this.Rg);At=[At[0],(
this.Ie+((this.I0-this.Ie)*CO))|0];}if(((this.AN>0.000000)&&(Hh<0.000000))||((this.
AN<0.000000)&&(Hh>0.000000))){Hh=0.000000;At=[this.AJ[0],At[1]];}if(((this.AO>0.000000
)&&(Hi<0.000000))||((this.AO<0.000000)&&(Hi>0.000000))){Hi=0.000000;At=[At[0],this.
AJ[1]];}if(!this.E_&&(At[0]<this.Bl[0])){this.Id=At[0];this.IZ=this.Bl[0];this.Ic=
this.timer.AI;this.E_=true;}else if(!this.E_&&(At[0]>this.Bk[0])){this.Id=At[0];
this.IZ=this.Bk[0];this.Ic=this.timer.AI;this.E_=true;}if(!this.E$&&(At[1]<this.
Bl[1])){this.Ie=At[1];this.I0=this.Bl[1];this.J5=this.timer.AI;this.E$=true;}else
if(!this.E$&&(At[1]>this.Bk[1])){this.Ie=At[1];this.I0=this.Bk[1];this.J5=this.timer.
AI;this.E$=true;}if(((!this.E_&&(this.AN!==0.000000))&&(Hh>-20.000000))&&(Hh<20.000000
)){At=[this.IZ,At[1]];this.AN=0.000000;this.Gw=0.000000;this.Id=At[0];}if(((!this.
E$&&(this.AO!==0.000000))&&(Hi>-20.000000))&&(Hi<20.000000)){At=[At[0],this.I0];
this.AO=0.000000;this.Gx=0.000000;this.Ie=At[1];}if(!B.pe(At,this.AJ)){this.J$=B.
pr(At,this.AJ);this.AJ=At;(A=this.J0)?A[1].call(A[0],this):null;(A=this.Pc)?A[1].
call(A[0],this):null;}if((((this.AN===0.000000)&&(this.AO===0.000000))&&!this.E_
)&&!this.E$){this.Qq();this.Jw=false;(A=this.Sp)?A[1].call(A[0],this):null;(A=this.
Db)?A[1].call(A[0],this):null;}},T2:function(C){if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[
C[0],0];this.EV=C;},_Init:function(aArg){E.Bv._Init.call(this,aArg);this.__proto__=
E.EU;this.G=0x11B;},_Mark:function(D){var A;E.Bv._Mark.call(this,D);if((A=this.NB
)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Sp)&&((A=A[0])._cycle!=D)
)A._Mark(A._cycle=D);if((A=this.J0)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Pc)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Db)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.CL)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SlideTouchHandler"
};E.FE={Je:0,Ab:null,AI:0,Rd:0,DO:null,Dk:null,Ky:null,BE:148,Cc:0,Be:0,BM:true,
Down:false,MF:false,L8:false,BX:function(Av){var A;if(!!Av&&Av.S6(this.BE)){this.
Down=Av.Down;this.Cc=Av.Cc;this.Be=Av.Be;this.AI=Av.AI;this.L8=false;if(Av.Down){
this.Rd=this.Je;this.MF=this.Je>0;if(this.MF)(A=this.Ky)?A[1].call(A[0],this):null;
else(A=this.Dk)?A[1].call(A[0],this):null;if(!this.L8)this.Je=this.Je+1;return!this.
L8;}if(!Av.Down){this.MF=this.Je>1;this.Rd=this.Je-1;this.Je=0;(A=this.DO)?A[1].
call(A[0],this):null;return!this.L8;}}return false;},DI:function(aArg){var A;var
AU=(E.H.isPrototypeOf(A=this.Aa)?A:null);if(!AU)throw new Error(IR);this.Ab=AU.Nr;
AU.Nr=this;},_Init:function(aArg){this.__proto__=E.FE;this.DI(aArg);B.eU++;},_Done:
function(){this.__proto__=E.FE;B.eU--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.DO)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Dk)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.Ky)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aa)&&(A._cycle
!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};E.Im={Ka:0,AJ:B.mJ,Dx:null,Initialize:function(K,aOffset){this.Dx=K;this.AJ=aOffset;
this.Ka=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=E.Im;B.eU++;},_Done:function(){this.__proto__=E.Im;B.eU--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Dx)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0
,_observers:null,_className:"Core::CursorHit"};E.Q0={AU:null,_Init:function(aArg
){this.__proto__=E.Q0;B.eU++;},_Done:function(){this.__proto__=E.Q0;B.eU--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.AU)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:
null,_className:"Core::ModalContext"};E.Kw={DV:B.j_,S:B.j_,Ja:null,isEmpty:false
,_Init:function(aArg){this.__proto__=E.Kw;B.eU++;},_Done:function(){this.__proto__=
E.Kw;B.eU--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ja)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);},Aa:
null,_cycle:0,_observers:null,_className:"Core::LayoutContext"};E.Mn={LJ:B.mJ,LI:
B.mJ,LH:B.mJ,LG:B.mJ,_Init:function(aArg){E.Kw._Init.call(this,aArg);this.__proto__=
E.Mn;},_className:"Core::LayoutQuadContext"};E.L_={AU:null,Ab:null,Ec:null,Ed:null
,CV:null,Jb:null,_Init:function(aArg){this.__proto__=E.L_;B.eU++;},_Done:function(
){this.__proto__=E.L_;B.eU--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.AU)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ab)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ec)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ed)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.CV)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Jb)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aa)&&(A._cycle!=D))
A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};E.Ps={Qt:null,B2:null,AY:null,AX:null,Q4:null,Nq:false,VJ:function(){if(!this.
B2)return;var EK=this.B2;this.B2.EJ=null;this.B2=null;this.Qt=null;if(this.Nq)B.
iJ([this,this.Sk],this);else B.iJ([this,this.Nw],this);EK.Q3(this);},Nw:function(
Ad){if(!!this.B2)return;if(!this.AX){B.iJ(this.Q4,this);return;}this.B2=this.AX;
this.AX=this.AX.Ab;if(!!this.AX)this.AX.Ac=null;else this.AY=null;this.B2.Ab=null;
this.Nq=true;this.B2.CL(this);this.Nq=false;},Sk:function(Ad){B.iJ([this,this.Nw
],this);},SD:function(B1){if(!B1||!B1.EJ)return;if(B1.EJ!==this)throw new Error(
K6);var SA=false;if(this.B2===B1){this.B2=null;this.Qt=null;SA=true;if(this.Nq)B.
iJ([this,this.Sk],this);else B.iJ([this,this.Nw],this);}else{if(!!B1.Ab)B1.Ab.Ac=
B1.Ac;else this.AY=B1.Ac;if(!!B1.Ac)B1.Ac.Ab=B1.Ab;else this.AX=B1.Ab;B1.Ac=null;
B1.Ab=null;}B1.EJ=null;if(SA)B1.Q2(this);},US:function(B1,VH){if(!B1)return;if(!
!B1.EJ)throw new Error(PS);B1.EJ=this;if(VH){B1.Ab=this.AX;if(!!this.AX)this.AX.
Ac=B1;else this.AY=B1;this.AX=B1;}else{B1.Ac=this.AY;if(!!this.AY)this.AY.Ab=B1;
else this.AX=B1;this.AY=B1;}if(!this.B2)B.iJ([this,this.Nw],this);},_Init:function(
aArg){this.__proto__=E.Ps;B.eU++;},_Done:function(){this.__proto__=E.Ps;B.eU--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Qt)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.B2)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AY)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.AX)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Q4)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aa)&&(A._cycle
!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"
};E.Jz={EJ:null,Ac:null,Ab:null,Q3:function(K$){},Q2:function(K$){},CL:function(
K$){this.QH();},C8:function(){if(!!this.EJ&&(this.EJ.B2===this))this.EJ.VJ();},QH:
function(){if(!!this.EJ)this.EJ.SD(this);},OH:function(){return!!this.EJ&&(this.
EJ.B2===this);},_Init:function(aArg){this.__proto__=E.Jz;B.eU++;},_Done:function(
){this.__proto__=E.Jz;B.eU--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.EJ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aa)&&(A.
_cycle!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:null,_className:"Core::Task"
};E.HR={resource:null,EN:function(){this.resource=null;},DI:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=E.HR;this.DI(aArg);B.eU++;},
_Done:function(){this.__proto__=E.HR;this.EN();B.eU--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:
0,_observers:null,_className:"Core::Resource"};E.Timer={timer:null,AI:0,IE:null,
Period:1000,Gh:0,BM:false,EN:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},ND:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.oH(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},Gq:function(C){if(C<0)C=0;if(C===this.Period)return;this.Period=C;if(this.
BM)this.ND(this.Gh,C);},Gp:function(C){if(C<0)C=0;if(C===this.Gh)return;this.Gh=
C;if(this.BM)this.ND(C,this.Period);},A9:function(C){if(C===this.BM)return;this.
BM=C;if(C)this.ND(this.Gh,this.Period);else this.ND(0,0);this.AI=this.Ko();},Ko:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.mH)|0;return ticksCount;
},Trigger:function(){var A;this.AI=this.Ko();if(!this.Period)this.A9(false);(A=this.
IE)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=E.Timer;B.eU++;
},_Done:function(){this.__proto__=E.Timer;this.EN();B.eU--;},_ReInit:function(){
},_Mark:function(D){var A;if((A=this.IE)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:
null,_className:"Core::Timer"};E.XT={AB:0x1,WM:0x2,Xf:0x4,XR:0x8,BM:0x10,XI:0x20
,Xg:0x40,Xn:0x80,Xe:0x100,Xj:0x200,W9:0x400,Xz:0x800,Rs:0x1000,XS:0x2000,Xq:0x4000
,Xr:0x8000,W2:0x10000,Xp:0x20000,XE:0x40000};E.Cz={XA:0x1,XB:0x2,WJ:0x4,WK:0x8,WL:
0x10,WI:0x20};E.Mf={Td:0,XQ:1,WU:2,Xk:3,XD:4};E.In={Td:0,XO:1,Left:2,WS:3,UY:4,SC:
5,XP:6,Right:7,WT:8};E.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:
7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:
17,Key8:18,Key9:19,Red:20,Green:21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:
27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,
Display:38,SkipPrev:39,SkipNext:40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:
46,VolumeDown:47,Show:48,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55
,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:
64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,
Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:
82,Mode:83,Mute:84,User0:85,User1:86,User2:87,User3:88,User4:89,User5:90,User6:91
,User7:92,User8:93,User9:94,User10:95,User11:96,User12:97,User13:98,User14:99,User15:
100,User16:101,User17:102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:
108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:
117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:
126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134
,Divide:135,Equals:136,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141
,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:
146,CursorKeys:147,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:
153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159
,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:
166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172
,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:
179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185
,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:
192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199
,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205
,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210
,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:
216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:
221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:
226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:
231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:
236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:
241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:
246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:
251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:
256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:
261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:
266,CtrlShiftPageUp:267,CtrlShiftPageDown:268,CtrlShiftBackspace:269,CtrlShiftInsert:
270,CtrlShiftDelete:271,CtrlShiftHome:272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:
275,AltF2:276,AltF3:277,AltF4:278,AltF5:279,AltF6:280,AltF7:281,AltF8:282,AltF9:
283,AltF10:284,AltEnter:285,AltEscape:286,AltUp:287,AltDown:288,AltLeft:289,AltRight:
290,AltPageUp:291,AltPageDown:292,AltBackspace:293,AltInsert:294,AltDelete:295,AltHome:
296,AltEnd:297,AltTab:298,AltShiftF1:299,AltShiftF2:300,AltShiftF3:301,AltShiftF4:
302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:
308,AltShiftEnter:309,AltShiftEscape:310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:
313,AltShiftRight:314,AltShiftPageUp:315,AltShiftPageDown:316,AltShiftBackspace:
317,AltShiftInsert:318,AltShiftDelete:319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:
322,ShiftF1:323,ShiftF2:324,ShiftF3:325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:
329,ShiftF8:330,ShiftF9:331,ShiftF10:332,ShiftEnter:333,ShiftEscape:334,ShiftUp:
335,ShiftDown:336,ShiftLeft:337,ShiftRight:338,ShiftPageUp:339,ShiftPageDown:340
,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:343,ShiftHome:344,ShiftEnd:345,ShiftTab:
346};E.XC={XX:0x1,XU:0x2,XV:0x4,XW:0x8,Xm:0x10};
E._Init=function(){E.Fi.__proto__=E.Dx;E.Bv.__proto__=E.Dx;E.H.__proto__=E.Bv;E.Root.
__proto__=E.H;E.KeyEvent.__proto__=E.Event;E.L9.__proto__=E.Event;E.Il.__proto__=
E.Event;E.Io.__proto__=E.Event;E.KD.__proto__=E.Bv;E.Ju.__proto__=E.Fi;E.Pn.__proto__=
E.Bv;E.EU.__proto__=E.Bv;E.Mn.__proto__=E.Kw;};E.Ei=function(D){};return E;})();

/* Embedded Wizard */