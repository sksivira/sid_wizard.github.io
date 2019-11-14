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
);if(EmWiApp.qi)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
qi=(function(){var B=EmWiApp;var E={};
var AD=[100,100];var B8="Trying to remove a fader from a task, which is actually running";
var FN="The fader doesn\'t belong to this task";var Fl="Trying to add a fader to a task, which is actually running";
var FO="The fader belongs already to a task";
E.A$={C7:null,Lj:0,Hs:0,EG:0,DA:0,Lo:0.001000,Sq:null,E7:0,Bm:0,Bi:0,timer:null,DN:
null,HH:null,GM:0.500000,Hx:3,FG:3,Fy:0.500000,Dh:3.000000,OZ:0.000000,GZ:0.000000
,GY:0.000000,D9:0,GL:1000,HE:0,HD:0,Dd:0,BM:false,Jy:false,Pl:false,Jk:false,NU:
false,C6:function(Ad){var A;if(!this.timer)return;if(!this.Hs){if(this.Pl)this.Hs=-
1;else this.Hs=1;this.Lj=this.Hs;this.Bi=this.timer.AI;this.Bm=0;this.E7=-1.000000;
}var DT=false;if((this.Hs>0)&&(this.Lj>0))DT=this.Wq();else if((this.Hs<0)&&(this.
Lj<0))DT=this.Wt();else if(this.Hs>0)DT=this.Wr();else DT=this.Ws();if(DT){this.
A9(false);(A=this.Sq)?A[1].call(A[0],this):null;(A=this.DN)?A[1].call(A[0],this):
null;}},NO:function(M){var A;if(!this.C7&&(((this.Dd===19)||(this.Dd===20))||(this.
Dd===21))){var Nd=this.Hx+1;var VM=Math.sqrt(this.GM);var Jj=0.500000;var N;this.
C7=B._NewObject(E.KQ,0);this.C7.DC.Set(0,1.000000);this.C7.H0.Set(0,1.000000);for(
N=1;N<Nd;N=N+1){this.C7.DC.Set(N,this.C7.DC.Get(N-1)*VM);this.C7.H0.Set(N,this.C7.
H0.Get(N-1)*this.GM);Jj=Jj+this.C7.DC.Get(N);}var VP=1.000000/Jj;this.C7.DC.Set(
0,0.500000);Jj=0.000000;for(N=0;N<Nd;N=N+1){this.C7.DC.Set(N,this.C7.DC.Get(N)*VP
);Jj=Jj+this.C7.DC.Get(N);}this.C7.DC.Set(Nd,this.C7.DC.Get(Nd)+(1.000000-Jj));}
if(this.Jy){if(M<0.500000)M=M*2.000000;else M=2.000000-(M*2.000000);}switch(this.
Dd){case 1:{M=Math.pow(M,this.Dh);}break;case 2:{M=1.000000-M;M=1.000000-Math.pow(
M,this.Dh);}break;case 3:{M=M*2.000000;if(M<1.000000)M=Math.pow(M,this.Dh)/2.000000;
else{M=2.000000-M;M=(2.000000-Math.pow(M,this.Dh))*0.500000;}}break;case 4:{M=(Math.
pow(2.718000,this.Dh*M)-1.000000)/(Math.pow(2.718000,this.Dh)-1.000000);}break;case
5:{M=1.000000-M;M=1.000000-((Math.pow(2.718000,this.Dh*M)-1.000000)/(Math.pow(2.718000
,this.Dh)-1.000000));}break;case 6:{M=M*2.000000;if(M<1.000000)M=((Math.pow(2.718000
,this.Dh*M)-1.000000)/(Math.pow(2.718000,this.Dh)-1.000000))/2.000000;else{M=2.000000-
M;M=(2.000000-((Math.pow(2.718000,this.Dh*M)-1.000000)/(Math.pow(2.718000,this.Dh
)-1.000000)))*0.500000;}}break;case 7:{M=1.000000-Math.cos((M*90.000000)*B.iy);}
break;case 8:{M=Math.sin((M*90.000000)*B.iy);}break;case 9:{M=M*2.000000;if(M<1.000000
){M=1.000000-Math.cos((M*90.000000)*B.iy);M=M*0.500000;}else{M=2.000000-M;M=1.000000-
Math.cos((M*90.000000)*B.iy);M=(2.000000-M)*0.500000;}}break;case 10:{M=1.000000-
Math.sqrt(1.000000-(M*M));}break;case 11:{M=1.000000-M;M=Math.sqrt(1.000000-(M*M
));}break;case 12:{M=M*2.000000;if(M<1.000000){M=1.000000-Math.sqrt(1.000000-(M*
M));M=M*0.500000;}else{M=2.000000-M;M=1.000000-Math.sqrt(1.000000-(M*M));M=(2.000000-
M)*0.500000;}}break;case 13:{M=((M*M)*M)-((M*this.Fy)*Math.sin((M*180.000000)*B.
iy));}break;case 14:{M=1.000000-M;M=((M*M)*M)-((M*this.Fy)*Math.sin((M*180.000000
)*B.iy));M=1.000000-M;}break;case 15:{M=M*2.000000;if(M<1.000000){M=((M*M)*M)-((
M*this.Fy)*Math.sin((M*180.000000)*B.iy));M=M*0.500000;}else{M=2.000000-M;M=((M*
M)*M)-((M*this.Fy)*Math.sin((M*180.000000)*B.iy));M=(2.000000-M)*0.500000;}}break;
case 16:{M=((M*M)*M)*Math.sin(((M*90.000000)*(1+(4*this.FG)))*B.iy);}break;case 17:{
M=1.000000-M;M=1.000000-(((M*M)*M)*Math.sin(((M*90.000000)*(1+(4*this.FG)))*B.iy
));}break;case 18:{M=M*2.000000;if(M<1.000000){M=((M*M)*M)*Math.sin(((M*90.000000
)*(1+(4*this.FG)))*B.iy);M=M*0.500000;}else{M=2.000000-M;M=((M*M)*M)*Math.sin(((
M*90.000000)*(1+(4*this.FG)))*B.iy);M=(2.000000-M)*0.500000;}}break;case 19:{var
FZ=this.C7;var N=0;var Gf=0.000000;var D2=FZ.DC.Get(0);var CJ=1.000000-M;while(CJ>
D2){N=N+1;Gf=D2;D2=D2+FZ.DC.Get(N);}M=(CJ-Gf)/(D2-Gf);if(!N)M=1.000000-(M*M);else{
M=(2.000000*M)-1.000000;M=FZ.H0.Get(N)*(1.000000-(M*M));}}break;case 20:{var FZ=
this.C7;var N=0;var Gf=0.000000;var D2=FZ.DC.Get(0);while(M>D2){N=N+1;Gf=D2;D2=D2+
FZ.DC.Get(N);}M=(M-Gf)/(D2-Gf);if(!N)M=M*M;else{M=(2.000000*M)-1.000000;M=1.000000-(
FZ.H0.Get(N)*(1.000000-(M*M)));}}break;case 21:{var FZ=this.C7;var N=0;var Gf=0.000000;
var D2=FZ.DC.Get(0);var CO=M*2.000000;var CJ=CO-1.000000;if(CO<1.000000)CJ=-CJ;while(
CJ>D2){N=N+1;Gf=D2;D2=D2+FZ.DC.Get(N);}CJ=(CJ-Gf)/(D2-Gf);if(!N)CJ=CJ*CJ;else{CJ=(
2.000000*CJ)-1.000000;CJ=1.000000-(FZ.H0.Get(N)*(1.000000-(CJ*CJ)));}if(CO<1.000000
)M=0.500000*(1.000000-CJ);else M=0.500000*(1.000000+CJ);}break;default:{if(this.
Jk){var CO=M;var Lx=1.000000-CO;M=((Lx*CO)*(this.DA+1.000000))+(CO*CO);}else if(
this.NU){var CO=M;var Lx=1.000000-CO;var RT=CO*CO;var V5=Lx*Lx;M=(((V5*CO)*(this.
DA+1.000000))+((Lx*RT)*(this.EG+2.000000)))+(RT*CO);}}}if(((this.OZ>0.000000)&&(
M>0.000000))&&(M<1.000000))M=M+B.pM(-this.OZ*0.100000,this.OZ*0.100000);this.L2(
M);(A=this.HH)?A[1].call(A[0],this):null;},Wt:function(){var Au=(this.timer.AI-this.
Bi)|0;if(Au<0)Au=-Au;var Eo=this.HD;var Fa=this.HD+this.GL;var Ca=this.HE+this.GL;
var DT=false;var BP=this.E7;if(!this.Bm&&(Au>=Fa)){this.Bm=1;Au=Au-Fa;this.Bi=this.
Bi+Fa;}if((this.Bm>0)&&(Au>=Ca)){var Cq=(Au/Ca)|0;this.Bm=this.Bm+Cq;Au=Au-(Cq*Ca
);this.Bi=this.Bi+(Cq*Ca);}if((this.Bm>2)&&!this.D9)this.Bm=1;if(this.Bm>0)Eo=this.
HE;if((this.Bm>=this.D9)&&(this.D9>0)){DT=true;BP=0.000000;}else if(Au>=Eo)BP=1.000000-((
Au-Eo)*this.Lo);else if(BP>=0.000000)BP=0.000000;if(BP!==this.E7){this.E7=BP;this.
NO(BP);}return DT;},Ws:function(){var Au=(this.Bi-this.timer.AI)|0;var Eo=this.HD;
var Fa=this.HD+this.GL;var Ca=this.HE+this.GL;var DT=false;var BP=this.E7;if((this.
Bm>1)&&(Au<0)){var Cq=(((-Au+Ca)-1)/Ca)|0;if((this.Bm-Cq)<=0)Cq=this.Bm-1;this.Bm=
this.Bm-Cq;Au=Au+(Cq*Ca);this.Bi=this.Bi+(Cq*Ca);}if(((this.Bm===1)&&(Au<0))&&(this.
D9>0)){this.Bm=0;Au=Au+Fa;this.Bi=this.Bi+Fa;}if(((this.Bm===1)&&(Au<0))&&!this.
D9){var Cq=(((-Au+Ca)-1)/Ca)|0;Au=Au+(Cq*Ca);this.Bi=this.Bi+(Cq*Ca);}if(this.Bm>
0)Eo=this.HE;if(Au<0){DT=true;BP=1.000000;}else if(Au>=Eo)BP=1.000000-((Au-Eo)*this.
Lo);else if(BP>=0.000000)BP=1.000000;if(BP!==this.E7){this.E7=BP;this.NO(BP);}return DT;
},Wr:function(){var Au=(this.Bi-this.timer.AI)|0;var Eo=this.HD;var Fa=this.HD+this.
GL;var Ca=this.HE+this.GL;var DT=false;var BP=this.E7;if((this.Bm>1)&&(Au<0)){var
Cq=(((-Au+Ca)-1)/Ca)|0;if((this.Bm-Cq)<=0)Cq=this.Bm-1;this.Bm=this.Bm-Cq;Au=Au+(
Cq*Ca);this.Bi=this.Bi+(Cq*Ca);}if(((this.Bm===1)&&(Au<0))&&(this.D9>0)){this.Bm=
0;Au=Au+Fa;this.Bi=this.Bi+Fa;}if(((this.Bm===1)&&(Au<0))&&!this.D9){var Cq=(((-
Au+Ca)-1)/Ca)|0;Au=Au+(Cq*Ca);this.Bi=this.Bi+(Cq*Ca);}if(this.Bm>0)Eo=this.HE;if(
Au<0){DT=true;BP=0.000000;}else if(Au>=Eo)BP=(Au-Eo)*this.Lo;else if(BP>=0.000000
)BP=0.000000;if(BP!==this.E7){this.E7=BP;this.NO(BP);}return DT;},Wq:function(){
var Au=(this.timer.AI-this.Bi)|0;if(Au<0)Au=-Au;var Eo=this.HD;var Fa=this.HD+this.
GL;var Ca=this.HE+this.GL;var DT=false;var BP=this.E7;if(!this.Bm&&(Au>=Fa)){this.
Bm=1;Au=Au-Fa;this.Bi=this.Bi+Fa;}if((this.Bm>0)&&(Au>=Ca)){var Cq=(Au/Ca)|0;this.
Bm=this.Bm+Cq;Au=Au-(Cq*Ca);this.Bi=this.Bi+(Cq*Ca);}if((this.Bm>2)&&!this.D9)this.
Bm=1;if(this.Bm>0)Eo=this.HE;if((this.Bm>=this.D9)&&(this.D9>0)){DT=true;BP=1.000000;
}else if(Au>=Eo)BP=(Au-Eo)*this.Lo;else if(BP>=0.000000)BP=1.000000;if(BP!==this.
E7){this.E7=BP;this.NO(BP);}return DT;},KC:function(C){if(this.Pl===C)return;this.
Pl=C;if(!this.BM||!this.Hs)return;if(C)this.Lj=-1;else this.Lj=1;this.Bi=(this.timer.
Ko()*2)-this.Bi;},Mu:function(C){if(C<0.000000)C=0.000000;if(C>1.000000)C=1.000000;
this.GM=C;},Ms:function(C){if(C<1)C=1;if(C>10)C=10;this.Hx=C;this.C7=null;},Mx:function(
C){if(C<1)C=1;if(C>10)C=10;this.FG=C;},Mr:function(C){if(C<0.000000)C=0.000000;if(
C>10.000000)C=10.000000;this.Fy=C;},Mv:function(C){if(C<1.000000)C=1.000000;if(C>
100.000000)C=100.000000;this.Dh=C;},Mz:function(C){if(this.GZ===C)return;this.GZ=
C;if(this.Dd===26){this.EG=C;this.Jk=(this.DA===this.EG)&&(this.DA!==0.000000);this.
NU=!this.Jk&&(this.DA!==this.EG);}},My:function(C){if(this.GY===C)return;this.GY=
C;if(this.Dd===26){this.DA=C;this.Jk=(this.DA===this.EG)&&(this.DA!==0.000000);this.
NU=!this.Jk&&(this.DA!==this.EG);}},HN:function(C){if(this.Dd===C)return;this.Dd=
C;this.C7=null;switch(C){case 24:{this.DA=-1.100000;this.EG=1.100000;}break;case
22:{this.DA=-1.000000;this.EG=-2.000000;}break;case 23:{this.DA=2.000000;this.EG=
1.000000;}break;case 25:{this.DA=1.100000;this.EG=-1.100000;}break;case 0:{this.
DA=0.000000;this.EG=0.000000;}break;default:{this.DA=this.GY;this.EG=this.GZ;}}this.
Jk=(this.DA===this.EG)&&(this.DA!==0.000000);this.NU=!this.Jk&&(this.DA!==this.EG
);},Jp:function(C){if(C<0)C=0;this.D9=C;},Fh:function(C){if(C<15)C=15;this.GL=C;
this.Lo=1.000000/C;},A9:function(C){if(this.BM===C)return;this.BM=C;if(!C&&!!this.
timer){B.oI([this,this.C6],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
E.Ip);B.ox([this,this.C6],this.timer,0);this.Hs=0;B.iJ([this,this.C6],this);}},L2:
function(IV){},_Init:function(aArg){this.__proto__=E.A$;B.eU++;},_Done:function(
){this.__proto__=E.A$;B.eU--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.C7)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Sq)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.DN)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.HH)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);},Aa:
null,_cycle:0,_observers:null,_className:"Effects::Effect"};E.Kr={FM:0,AQ:255,AR:
0,Ax:null,L2:function(IV){var A;this.FM=this.AR+(Math.round((this.AQ-this.AR)*IV
)|0);if(!!this.Ax)(A=this.Ax,A[2].call(A[0],this.FM));},_Init:function(aArg){E.A$.
_Init.call(this,aArg);this.__proto__=E.Kr;},_Mark:function(D){var A;E.A$._Mark.call(
this,D);if((A=this.Ax)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"
};E.Pg={FM:B.mJ,AQ:AD,AR:B.mJ,Ax:null,L2:function(IV){var A;var Gg=this.AR[0];var
Ee=this.AR[1];Gg=Gg+(Math.round((this.AQ[0]-Gg)*IV)|0);Ee=Ee+(Math.round((this.AQ[
1]-Ee)*IV)|0);this.FM=[Gg,Ee];if(!!this.Ax)(A=this.Ax,A[2].call(A[0],this.FM));}
,_Init:function(aArg){E.A$._Init.call(this,aArg);this.__proto__=E.Pg;},_Mark:function(
D){var A;E.A$._Mark.call(this,D);if((A=this.Ax)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);},_className:"Effects::PointEffect"};E.CY={FM:0,AQ:1.000000,AR:0.000000
,Ax:null,L2:function(IV){var A;this.FM=this.AR+((this.AQ-this.AR)*IV);if(!!this.
Ax)(A=this.Ax,A[2].call(A[0],this.FM));},_Init:function(aArg){E.A$._Init.call(this
,aArg);this.__proto__=E.CY;},_Mark:function(D){var A;E.A$._Mark.call(this,D);if((
A=this.Ax)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::FloatEffect"
};E.Di={Nv:null,Qd:null,EK:null,Ac:null,Ab:null,I:null,H:null,HJ:null,AB:true,Fk:
true,Hv:false,Hw:true,Fj:true,D_:true,C8:function(){if(!!this.EK)this.EK.C8();},
Ks:function(){return true;},Db:function(){},CL:function(){this.C8();},_Init:function(
aArg){this.__proto__=E.Di;B.eU++;},_Done:function(){this.__proto__=E.Di;B.eU--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Nv)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Qd)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.EK)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.HJ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aa)&&(A._cycle
!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:null,_className:"Effects::Fader"
};E.JD={Ph:B.mJ,IG:true,Is:false,C4:false,Ks:function(){return this.C4;},Db:function(
){if((this.AB&&!this.IG)&&!this.Fk)this.H.U(B.pW(this.H.L,this.Ph));if(this.AB&&
!this.IG){this.H.Dl(255);this.H.CB(true);}if((!this.AB&&!this.Is)&&!!this.H.I)this.
H.CB(false);if((!this.AB&&this.D_)&&!!this.H.I)this.H.I.CM(this.H);},CL:function(
){if((this.AB||this.Hv)&&!this.H.I){this.H.CB(false);this.I.Ap(this.H,0);}if(this.
AB&&this.Fj)this.H.I.CC(this.H);if(this.AB&&this.Hw)this.H.I.CA(this.H);if((this.
AB&&this.IG)&&!this.Fk)this.H.U(B.pW(this.H.L,this.Ph));if(this.AB&&this.IG){this.
H.Dl(255);this.H.CB(true);}if((!this.AB&&this.Is)&&!!this.H.I)this.H.CB(false);if(
!this.AB&&(this.I.C_===this.H))this.I.CA(null);this.C4=true;this.C8();},_Init:function(
aArg){E.Di._Init.call(this,aArg);this.__proto__=E.JD;},_className:"Effects::VisibilityFader"
};E.MC={A$:null,Cb:false,C4:false,Ig:false,Ks:function(){return this.C4;},Db:function(
){if(this.AB)this.H.Dl(this.A$.AQ);if(!this.AB&&!this.H.BH)this.H.CB(false);if((
!this.AB&&this.D_)&&!!this.H.I)this.H.I.CM(this.H);if(this.Cb)this.H.HL(this.Ig);
},CL:function(){var A;if(this.Fk)if(this.H.Dj()&&!!this.H.I)this.A$.AR=this.H.BH;
else this.A$.AR=0;var Lp=((!this.H.I||!this.H.BH)||!this.H.Dj())||(((A=B.gj(this.
H.L,[0,0,(A=this.I.L)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));var Lq=((!this.
AB&&((!this.H.I||!this.H.Dj())||this.D_))||!this.A$.AQ)||(((A=B.gj(this.H.L,[0,0
,(A=this.I.L)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(Lp&&Lq){this.A$.AR=
0;this.A$.AQ=0;}this.Ig=this.H.O1();if((this.AB||this.Hv)&&!this.H.I){this.H.CB(
false);this.I.Ap(this.H,0);}if(this.AB&&this.Fj)this.H.I.CC(this.H);if(this.AB&&
this.Hw)this.H.I.CA(this.H);if(!this.AB&&(this.I.C_===this.H))this.I.CA(null);if(
this.AB&&!this.H.Dj()){this.H.Dl(this.A$.AR);this.H.CB(true);}if(!this.AB&&((!this.
H.I||!this.H.Dj())||!this.H.BH)){this.C4=true;this.C8();return;}if(!this.AB&&(this.
A$.AR===this.A$.AQ))this.H.Dl(this.A$.AR);if(this.H.BH===this.A$.AQ){this.C4=true;
this.C8();return;}if(this.A$.AR===this.A$.AQ){this.C4=true;this.C8();return;}if(
!this.A$.D9)this.A$.Jp(1);if(this.Cb)this.H.HL(true);this.A$.Ax=[A=this.H,A.Mq,A.
Rw];this.A$.KC(false);this.A$.Jy=false;this.A$.DN=[this,this.I7];this.A$.HH=null;
this.A$.A9(true);},I7:function(Ad){this.C4=true;this.C8();},_Init:function(aArg){
E.Di._Init.call(this,aArg);E.Kr._Init.call(this.A$={Aa:this},0);this.__proto__=E.
MC;},_Done:function(){this.__proto__=E.MC;this.A$._Done();E.Di._Done.call(this);
},_ReInit:function(){E.Di._ReInit.call(this);this.A$._ReInit();},_Mark:function(
D){var A;E.Di._Mark.call(this,D);if((A=this.A$)._cycle!=D)A._Mark(A._cycle=D);},
_className:"Effects::OpacityFader"};E.GU={Al:null,AL:null,Cb:false,C4:false,Ig:false
,Ks:function(){return this.C4;},Db:function(){if(this.AB){this.H.Dl(this.Al.AQ);
this.H.U(B.pW(this.H.L,this.AL.AQ));}if(!this.AB&&!this.H.BH)this.H.CB(false);if((
!this.AB&&this.D_)&&!!this.H.I)this.H.I.CM(this.H);if(this.Cb)this.H.HL(this.Ig);
},CL:function(){var A;if(this.Fk){if(this.H.Dj()&&!!this.H.I)this.Al.AR=this.H.BH;
else this.Al.AR=0;this.AL.AR=this.H.L.slice(0,2);}var Lp=((!this.H.I||!this.H.BH
)||!this.H.Dj())||(((A=B.gj(this.H.L,[0,0,(A=this.I.L)[2]-A[0],A[3]-A[1]]))[0]>=
A[2])||(A[1]>=A[3]));var Lq=((!this.AB&&((!this.H.I||!this.H.Dj())||this.D_))||!
this.Al.AQ)||(((A=B.gj(B.pu([0,0,(A=this.H.L)[2]-A[0],A[3]-A[1]],this.AL.AQ),[0,
0,(A=this.I.L)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(Lp&&Lq){this.Al.
AR=0;this.Al.AQ=0;this.AL.AR=this.AL.AQ;}this.Ig=this.H.O1();if((this.AB||this.Hv
)&&!this.H.I){this.H.CB(false);this.I.Ap(this.H,0);}if(this.AB&&this.Fj)this.H.I.
CC(this.H);if(this.AB&&this.Hw)this.H.I.CA(this.H);if(!this.AB&&(this.I.C_===this.
H))this.I.CA(null);if(this.AB&&!this.H.Dj()){this.H.U(B.pW(this.H.L,this.AL.AR));
this.H.Dl(this.Al.AR);this.H.CB(true);}if(!this.AB&&((!this.H.I||!this.H.Dj())||
!this.H.BH)){this.C4=true;this.C8();return;}if(!this.AB&&B.pe(this.AL.AR,this.AL.
AQ))this.H.U(B.pW(this.H.L,this.AL.AR));if(!this.AB&&(this.Al.AR===this.Al.AQ))this.
H.Dl(this.Al.AR);if((this.H.BH===this.Al.AQ)&&B.pe(this.H.L.slice(0,2),this.AL.AQ
)){this.C4=true;this.C8();return;}if((this.Al.AR===this.Al.AQ)&&B.pe(this.AL.AR,
this.AL.AQ)){this.C4=true;this.C8();return;}if(!this.Al.D9)this.Al.Jp(1);if(!this.
AL.D9)this.AL.Jp(1);if(this.Cb)this.H.HL(true);this.AL.Ax=null;this.AL.KC(false);
this.AL.Jy=false;this.AL.DN=[this,this.I7];this.AL.HH=[this,this.Qc];this.Al.Ax=[
A=this.H,A.Mq,A.Rw];this.Al.KC(false);this.Al.Jy=false;this.Al.DN=[this,this.I7];
this.Al.HH=null;this.AL.A9(!B.pe(this.AL.AR,this.AL.AQ));this.Al.A9(this.Al.AR!==
this.Al.AQ);},I7:function(Ad){this.C4=!this.Al.BM&&!this.AL.BM;this.C8();},Qc:function(
Ad){this.H.U(B.pW(this.H.L,this.AL.FM));},_Init:function(aArg){E.Di._Init.call(this
,aArg);E.Kr._Init.call(this.Al={Aa:this},0);E.Pg._Init.call(this.AL={Aa:this},0);
this.__proto__=E.GU;},_Done:function(){this.__proto__=E.GU;this.Al._Done();this.
AL._Done();E.Di._Done.call(this);},_ReInit:function(){E.Di._ReInit.call(this);this.
Al._ReInit();this.AL._ReInit();},_Mark:function(D){var A;E.Di._Mark.call(this,D);
if((A=this.Al)._cycle!=D)A._Mark(A._cycle=D);if((A=this.AL)._cycle!=D)A._Mark(A.
_cycle=D);},_className:"Effects::PositionFader"};E.IL={Bz:null,Al:null,Bn:null,ES:
null,Ey:B.mJ,HO:B.mJ,B2:null,C4:false,Ig:false,Ks:function(){return this.C4;},Db:
function(){if(this.AB){this.H.Dl(this.Al.AQ);this.H.U(B.pu(B.pt(this.H.L,B.o5(this.
H.L)),this.Ey));this.H.CB(true);}if(!this.AB&&!this.Al.AQ){this.H.Dl(0);this.H.CB(
false);}if(((!this.AB&&(this.Al.AQ>0))&&!!this.H.I)&&!this.D_){this.H.Dl(this.Al.
AQ);this.H.U(B.pu(B.pt(this.H.L,B.o5(this.H.L)),this.Ey));this.H.CB(true);}if((!
this.AB&&this.D_)&&!!this.H.I)this.H.I.CM(this.H);this.H.HL(this.Ig);if(!!this.Bz
)this.I.CM(this.Bz);},CL:function(){var A;if(this.Fk){if(this.H.Dj()&&!!this.H.I
)this.Al.AR=this.H.BH;else this.Al.AR=0;this.HO=B.o5(this.H.L);}var Lp=((!this.H.
I||!this.H.BH)||!this.H.Dj())||(((A=B.gj(this.H.L,[0,0,(A=this.I.L)[2]-A[0],A[3]-
A[1]]))[0]>=A[2])||(A[1]>=A[3]));var Lq=((!this.AB&&((!this.H.I||!this.H.Dj())||
this.D_))||!this.Al.AQ)||(((A=B.gj(B.pu(B.pt(this.H.L,B.o5(this.H.L)),this.Ey),[
0,0,(A=this.I.L)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(Lp&&Lq){this.Al.
AR=0;this.Al.AQ=0;this.HO=this.Ey;this.ES.QY();}this.Ig=this.H.O1();if((this.AB||
this.Hv)&&!this.H.I){this.H.CB(false);this.I.Ap(this.H,0);}if(this.AB&&this.Fj)this.
H.I.CC(this.H);if(this.AB&&this.Hw)this.H.I.CA(this.H);if(!this.AB&&(this.I.C_===
this.H))this.I.CA(null);if(this.AB&&!this.H.Dj())this.H.Dl(this.Al.AR);if((!this.
AB&&B.pe(this.HO,this.Ey))&&this.ES.Mk())this.H.U(B.pu(B.pt(this.H.L,B.o5(this.H.
L)),this.HO));if(!this.AB&&(this.Al.AR===this.Al.AQ))this.H.Dl(this.Al.AR);if(!this.
AB&&((!this.H.I||!this.H.Dj())||!this.H.BH)){this.C4=true;this.C8();return;}if(((
this.AB&&(this.H.BH===this.Al.AQ))&&B.pe(B.o5(this.H.L),this.Ey))&&this.H.Dj()){
this.C4=true;this.C8();return;}if(((!this.AB&&(this.H.BH===this.Al.AQ))&&B.pe(B.
o5(this.H.L),this.Ey))&&this.ES.Mk()){this.C4=true;this.C8();return;}if(((this.Al.
AR===this.Al.AQ)&&B.pe(this.HO,this.Ey))&&this.ES.Mk()){this.C4=true;this.C8();return;
}this.H.HL(true);this.H.CB(false);this.Bz=B._NewObject(B.qh.PQ,0);this.Bz.Tx(this.
H);this.Bz.Dl(this.Al.AR);this.Bz.Ra(B.o5([0,0,(A=this.H.L)[2]-A[0],A[3]-A[1]]));
this.H.I.NY(this.Bz,this.H);if(!this.Al.D9)this.Al.Jp(1);if(!this.Bn.D9)this.Bn.
Jp(1);this.Bn.Ax=null;this.Bn.KC(false);this.Bn.Jy=false;this.Bn.DN=[this,this.I7
];this.Bn.HH=[this,this.Qc];if(this.AB){this.Bn.AR=0.000000;this.Bn.AQ=1.000000;
}else{this.Bn.AR=1.000000;this.Bn.AQ=0.000000;}this.Al.Ax=[A=this.Bz,A.Mq,A.Dl];
this.Al.KC(false);this.Al.Jy=false;this.Al.DN=[this,this.I7];this.Al.HH=null;this.
Bn.A9(!B.pe(this.HO,this.Ey)||!this.ES.Mk());this.Al.A9(this.Al.AR!==this.Al.AQ);
},I7:function(Ad){this.C4=!this.Al.BM&&!this.Bn.BM;this.C8();},Qc:function(Ad){var
A;var LU=B.pr(this.Ey,this.HO);if(!this.AB)LU=[-LU[0],-LU[1]];this.B2.QY();this.
B2.GN=this.ES.GN;this.B2.Rr(LU[0],LU[1],0.000000);this.B2.S5(this.ES,this.B2,this.
Bn.FM);if(this.AB)this.Bz.K3(this.HO,this.B2);else this.Bz.K3(this.Ey,this.B2);}
,_Init:function(aArg){E.Di._Init.call(this,aArg);E.Kr._Init.call(this.Al={Aa:this
},0);E.CY._Init.call(this.Bn={Aa:this},0);B.Graphics.IM._Init.call(this.ES={Aa:this
},0);B.Graphics.IM._Init.call(this.B2={Aa:this},0);this.__proto__=E.IL;},_Done:function(
){this.__proto__=E.IL;this.Al._Done();this.Bn._Done();this.ES._Done();this.B2._Done(
);E.Di._Done.call(this);},_ReInit:function(){E.Di._ReInit.call(this);this.Al._ReInit(
);this.Bn._ReInit();this.ES._ReInit();this.B2._ReInit();},_Mark:function(D){var A;
E.Di._Mark.call(this,D);if((A=this.Bz)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Al)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Bn)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.ES)._cycle!=D)A._Mark(A._cycle=D);if((A=this.B2)._cycle!=D)A._Mark(
A._cycle=D);},_className:"Effects::WarpFader"};E.DQ={FB:function(){return null;}
,FA:function(){return null;},Gk:function(){return this.FB();},Gj:function(){return this.
FA();},_Init:function(aArg){this.__proto__=E.DQ;B.eU++;},_Done:function(){this.__proto__=
E.DQ;B.eU--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Aa)&&(A._cycle
!=D))A._Mark(A._cycle=D);},Aa:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};E.Po={Iy:0,IA:0,IB:0,Iz:0,DE:0x12,IG:true,Is:false,FB:function(){var J=B._NewObject(
E.JD,0);J.AB=true;J.Hw=false;J.Fj=true;J.Fk=false;J.IG=this.IG;J.HJ=[this,this.I8
];return J;},FA:function(){var J=B._NewObject(E.JD,0);J.AB=false;J.Is=this.Is;J.
D_=true;return J;},Gk:function(){var J=E.DQ.Gk.call(this);J.Fj=false;return J;},
Gj:function(){var J=B._NewObject(E.JD,0);J.AB=false;J.Hv=true;J.D_=false;J.Is=this.
Is;return J;},I8:function(Ad){var A;var J=(E.JD.isPrototypeOf(Ad)?Ad:null);var A6=
this.DE;var S=[0,0,(A=J.I.L)[2]-A[0],A[3]-A[1]];var size=[(A=J.H.L)[2]-A[0],A[3]-
A[1]];S=[].concat(S[0]+this.Iz,S.slice(1,4));S=B.p0(S,S[2]-this.IA);S=B.p2(S,S[1
]+this.IB);S=[].concat(S.slice(0,3),S[3]-this.Iy);var Q=S.slice(0,2);if(((A6&0x4
)===0x4))Q=[S[2]-size[0],Q[1]];else if(((A6&0x2)===0x2))Q=[(S[0]+(((S[2]-S[0])/2
)|0))-((size[0]/2)|0),Q[1]];if(((A6&0x20)===0x20))Q=[Q[0],S[3]-size[1]];else if(((
A6&0x10)===0x10))Q=[Q[0],(S[1]+(((S[3]-S[1])/2)|0))-((size[1]/2)|0)];J.Ph=Q;},_Init:
function(aArg){E.DQ._Init.call(this,aArg);this.__proto__=E.Po;},_className:"Effects::ShowHideTransition"
};E.Ma={Iy:0,IA:0,IB:0,Iz:0,DE:0x12,CW:500,Cb:false,FB:function(){var J=B._NewObject(
E.GU,0);J.AB=true;J.Hw=false;J.Fj=true;J.Fk=true;J.Cb=this.Cb;J.HJ=[this,this.I8
];J.Al.Fh(this.CW);J.Al.AR=0;J.Al.AQ=255;J.AL.Fh(this.CW);J.AL.HN(23);return J;}
,FA:function(){var J=B._NewObject(E.MC,0);J.AB=false;J.D_=true;J.Fk=true;J.Cb=this.
Cb;J.A$.AR=255;J.A$.AQ=0;J.A$.Fh(this.CW);return J;},Gk:function(){var J=E.DQ.Gk.
call(this);J.Fj=false;return J;},Gj:function(){var J=E.DQ.Gj.call(this);J.Hv=true;
J.D_=false;return J;},I8:function(Ad){var A;var J=(E.GU.isPrototypeOf(Ad)?Ad:null
);var A6=this.DE;var S=[0,0,(A=J.I.L)[2]-A[0],A[3]-A[1]];var size=[(A=J.H.L)[2]-
A[0],A[3]-A[1]];S=[].concat(S[0]+this.Iz,S.slice(1,4));S=B.p0(S,S[2]-this.IA);S=
B.p2(S,S[1]+this.IB);S=[].concat(S.slice(0,3),S[3]-this.Iy);var Q=S.slice(0,2);if(((
A6&0x4)===0x4))Q=[S[2]-size[0],Q[1]];else if(((A6&0x2)===0x2))Q=[(S[0]+(((S[2]-S[
0])/2)|0))-((size[0]/2)|0),Q[1]];if(((A6&0x20)===0x20))Q=[Q[0],S[3]-size[1]];else
if(((A6&0x10)===0x10))Q=[Q[0],(S[1]+(((S[3]-S[1])/2)|0))-((size[1]/2)|0)];J.AL.AQ=
Q;if(((!J.H.I||!J.H.Dj())||!J.H.BH)||(((A=B.gj(J.H.L,[0,0,(A=J.I.L)[2]-A[0],A[3]-
A[1]]))[0]>=A[2])||(A[1]>=A[3])))J.H.U(B.pW(J.H.L,Q));},_Init:function(aArg){E.DQ.
_Init.call(this,aArg);this.__proto__=E.Ma;},_className:"Effects::FadeInOutTransition"
};E.Jv={Iy:0,IA:0,IB:0,Iz:0,DE:0x12,GM:0.500000,Hx:3,FG:3,Fy:0.500000,Dh:3.000000
,GZ:0.000000,GY:0.000000,CW:500,In:0,Dd:23,Cb:false,FB:function(){var J=B._NewObject(
E.GU,0);J.AB=true;J.Hw=false;J.Fj=true;J.Fk=true;J.Cb=this.Cb;J.HJ=[this,this.I8
];J.Al.Fh(this.CW);J.Al.AR=0;J.Al.AQ=255;J.AL.Fh(this.CW);J.AL.HN(this.Dd);J.AL.
My(this.GY);J.AL.Mz(this.GZ);J.AL.Mv(this.Dh);J.AL.Mr(this.Fy);J.AL.Mx(this.FG);
J.AL.Ms(this.Hx);J.AL.Mu(this.GM);return J;},FA:function(){var J=B._NewObject(E.
GU,0);J.AB=false;J.D_=true;J.Fk=true;J.Cb=this.Cb;J.HJ=[this,this.Qf];J.Al.AR=255;
J.Al.AQ=0;J.Al.Fh(this.CW);J.AL.Fh(this.CW);J.AL.HN(this.Dd);J.AL.My(this.GY);J.
AL.Mz(this.GZ);J.AL.Mv(this.Dh);J.AL.Mr(this.Fy);J.AL.Mx(this.FG);J.AL.Ms(this.Hx
);J.AL.Mu(this.GM);return J;},Gk:function(){var J=E.DQ.Gk.call(this);J.Fj=false;
return J;},Gj:function(){var J=E.DQ.Gj.call(this);J.Hv=true;J.D_=false;return J;
},I8:function(Ad){var A;var J=(E.GU.isPrototypeOf(Ad)?Ad:null);var A6=this.DE;var
S=[0,0,(A=J.I.L)[2]-A[0],A[3]-A[1]];var size=[(A=J.H.L)[2]-A[0],A[3]-A[1]];S=[].
concat(S[0]+this.Iz,S.slice(1,4));S=B.p0(S,S[2]-this.IA);S=B.p2(S,S[1]+this.IB);
S=[].concat(S.slice(0,3),S[3]-this.Iy);var Q=S.slice(0,2);if(((A6&0x4)===0x4))Q=[
S[2]-size[0],Q[1]];else if(((A6&0x2)===0x2))Q=[(S[0]+(((S[2]-S[0])/2)|0))-((size[
0]/2)|0),Q[1]];if(((A6&0x20)===0x20))Q=[Q[0],S[3]-size[1]];else if(((A6&0x10)===
0x10))Q=[Q[0],(S[1]+(((S[3]-S[1])/2)|0))-((size[1]/2)|0)];J.AL.AQ=Q;if(((!J.H.I||
!J.H.Dj())||!J.H.BH)||(((A=B.gj(J.H.L,[0,0,(A=J.I.L)[2]-A[0],A[3]-A[1]]))[0]>=A[
2])||(A[1]>=A[3]))){var Fb=[(A=J.I.L)[2]-A[0],A[3]-A[1]];switch(this.In){case 5:
Q=[Q[0],-size[1]];break;case 3:{Q=[Q[0],-size[1]];Q=[Fb[0],Q[1]];}break;case 8:Q=[-
size[0],-size[1]];break;case 2:Q=[Fb[0],Q[1]];break;case 7:Q=[-size[0],Q[1]];break;
case 4:Q=[Q[0],Fb[1]];break;case 1:{Q=[Q[0],Fb[1]];Q=[Fb[0],Q[1]];}break;case 6:{
Q=[Q[0],Fb[1]];Q=[-size[0],Q[1]];}break;default:;}J.H.U(B.pW(J.H.L,Q));}},Qf:function(
Ad){var A;var J=(E.GU.isPrototypeOf(Ad)?Ad:null);var Q=J.H.L.slice(0,2);var size=[(
A=J.H.L)[2]-A[0],A[3]-A[1]];var Fb=[(A=J.I.L)[2]-A[0],A[3]-A[1]];switch(this.In){
case 5:Q=[Q[0],Fb[1]];break;case 3:{Q=[Q[0],Fb[1]];Q=[-size[0],Q[1]];}break;case
8:{Q=[Q[0],Fb[1]];Q=[Fb[0],Q[1]];}break;case 2:Q=[-size[0],Q[1]];break;case 7:Q=[
Fb[0],Q[1]];break;case 4:Q=[Q[0],-size[1]];break;case 1:Q=[-size[0],-size[1]];break;
case 6:{Q=[Q[0],-size[1]];Q=[Fb[0],Q[1]];}break;default:;}J.AL.AQ=Q;},_Init:function(
aArg){E.DQ._Init.call(this,aArg);this.__proto__=E.Jv;},_className:"Effects::SlideTransition"
};E.MG={Iy:0,IA:0,IB:0,Iz:0,DE:0x12,GM:0.500000,Hx:3,FG:3,Fy:0.500000,Dh:3.000000
,GZ:0.000000,GY:0.000000,CW:500,MH:0.500000,Dd:23,FB:function(){var J=B._NewObject(
E.IL,0);J.AB=true;J.Hw=false;J.Fj=true;J.Fk=true;J.HJ=[this,this.I8];J.Al.Fh(this.
CW);J.Al.AR=0;J.Al.AQ=255;J.Bn.Fh(this.CW);J.Bn.HN(this.Dd);J.Bn.My(this.GY);J.Bn.
Mz(this.GZ);J.Bn.Mv(this.Dh);J.Bn.Mr(this.Fy);J.Bn.Mx(this.FG);J.Bn.Ms(this.Hx);
J.Bn.Mu(this.GM);J.ES.Rh(this.MH,this.MH,1.000000);return J;},FA:function(){var J=
B._NewObject(E.IL,0);J.AB=false;J.D_=true;J.Fk=true;J.HJ=[this,this.Qf];J.Al.AR=
255;J.Al.AQ=0;J.Al.Fh(this.CW);J.Bn.Fh(this.CW);J.Bn.HN(this.Dd);J.Bn.My(this.GY
);J.Bn.Mz(this.GZ);J.Bn.Mv(this.Dh);J.Bn.Mr(this.Fy);J.Bn.Mx(this.FG);J.Bn.Ms(this.
Hx);J.Bn.Mu(this.GM);J.ES.Rh(this.MH,this.MH,1.000000);return J;},Gk:function(){
var J=E.DQ.Gk.call(this);J.Fj=false;return J;},Gj:function(){var J=E.DQ.Gj.call(
this);J.Hv=true;J.D_=false;return J;},I8:function(Ad){var A;var J=(E.IL.isPrototypeOf(
Ad)?Ad:null);var A6=this.DE;var S=[0,0,(A=J.I.L)[2]-A[0],A[3]-A[1]];var size=[(A=
J.H.L)[2]-A[0],A[3]-A[1]];S=[].concat(S[0]+this.Iz,S.slice(1,4));S=B.p0(S,S[2]-this.
IA);S=B.p2(S,S[1]+this.IB);S=[].concat(S.slice(0,3),S[3]-this.Iy);var Q=S.slice(
0,2);if(((A6&0x4)===0x4))Q=[S[2]-size[0],Q[1]];else if(((A6&0x2)===0x2))Q=[(S[0]+(((
S[2]-S[0])/2)|0))-((size[0]/2)|0),Q[1]];if(((A6&0x20)===0x20))Q=[Q[0],S[3]-size[
1]];else if(((A6&0x10)===0x10))Q=[Q[0],(S[1]+(((S[3]-S[1])/2)|0))-((size[1]/2)|0
)];J.Ey=B.ps(Q,[(size[0]/2)|0,(size[1]/2)|0]);if(((!J.H.I||!J.H.Dj())||!J.H.BH)||(((
A=B.gj(J.H.L,[0,0,(A=J.I.L)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3])))J.H.U(
B.pW(J.H.L,B.pr(J.Ey,B.o5([0,0,(A=J.H.L)[2]-A[0],A[3]-A[1]]))));},Qf:function(Ad
){var J=(E.IL.isPrototypeOf(Ad)?Ad:null);J.Ey=B.o5(J.H.L);},_Init:function(aArg){
E.DQ._Init.call(this,aArg);this.__proto__=E.MG;},_className:"Effects::ScaleTransition"
};E.Dd={Xl:0,Xw:1,Xy:2,Xx:3,W$:4,Xb:5,Xa:6,XJ:7,XL:8,XK:9,WY:10,W0:11,WZ:12,WP:13
,WR:14,WQ:15,W6:16,W8:17,W7:18,WV:19,WX:20,WW:21,W5:22,Xc:23,W4:24,Xd:25,W1:26};
E.W3={QC:0x1,QB:0x2,QD:0x4,QG:0x8,QF:0x10,QE:0x20};E.Oc={Trigger:function(){B.Core.
Timer.Trigger.call(this);B.mI(this,0);},_Init:function(aArg){B.Core.Timer._Init.
call(this,aArg);this.__proto__=E.Oc;},_className:"Effects::EffectTimerClass"};E.
Ip={_Init:function(){E.Oc._Init.call(this,0);this.Gq(15);this.A9(true);},_variants:
function(){return this;},_this:null};E.KQ={DC:B.pv(12,0,null),H0:B.pv(12,0,null)
,_Init:function(aArg){(this.DC=[]).__proto__=E.KQ.DC;(this.H0=[]).__proto__=E.KQ.
H0;this.__proto__=E.KQ;B.eU++;},_Done:function(){this.__proto__=E.KQ;B.eU--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=
D);},Aa:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};E.Mc={AY:
null,AX:null,Q3:function(K$){var J=this.AX;while(!!J){J.Db();J.H.G=J.H.G&~0x40000;
J=J.Ab;}J=this.AX;while(!!J){B.iJ(J.Qd,J);J=J.Ab;}},Q2:function(K$){var J=this.AX;
while(!!J){B.iJ(J.Nv,J);J=J.Ab;}this.AX=null;this.AY=null;},CL:function(K$){var A;
if(!this.AX)this.C8();var J=this.AX;while(!!J){J.H.G=(J.H.G|0x40000)&~0x20000;J.
H.Jc=null;J=J.Ab;}J=this.AX;while(!!J){(A=J.HJ)?A[1].call(A[0],J):null;J.CL();J=
J.Ab;}},C8:function(){var J=this.AX;while(!!J&&J.Ks())J=J.Ab;if(!J)B.Core.Jz.C8.
call(this);},UF:function(Bj){if(!Bj)return;if(this.OH())throw new Error(B8);if(Bj.
EK!==this)throw new Error(FN);if(!!Bj.Ab)Bj.Ab.Ac=Bj.Ac;else this.AY=Bj.Ac;if(!!
Bj.Ac)Bj.Ac.Ab=Bj.Ab;else this.AX=Bj.Ab;Bj.EK=null;Bj.Ab=null;Bj.Ac=null;if(!!Bj.
H)Bj.H.Jc=null;B.iJ(Bj.Nv,Bj);if(!this.AX)this.QH();},QA:function(Bj){if(!Bj)return;
if(this.OH())throw new Error(Fl);if(!!Bj.EK)throw new Error(FO);Bj.Ac=this.AY;Bj.
Ab=null;if(!!this.AY)this.AY.Ab=Bj;else this.AX=Bj;this.AY=Bj;Bj.EK=this;},_Init:
function(aArg){B.Core.Jz._Init.call(this,aArg);this.__proto__=E.Mc;},_Mark:function(
D){var A;B.Core.Jz._Mark.call(this,D);if((A=this.AY)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.AX)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"
};E.KJ={_Init:function(){E.Po._Init.call(this,0);},_variants:function(){return this;
},_this:null};
E._Init=function(){E.Kr.__proto__=E.A$;E.Pg.__proto__=E.A$;E.CY.__proto__=E.A$;E.
JD.__proto__=E.Di;E.MC.__proto__=E.Di;E.GU.__proto__=E.Di;E.IL.__proto__=E.Di;E.
Po.__proto__=E.DQ;E.Ma.__proto__=E.DQ;E.Jv.__proto__=E.DQ;E.MG.__proto__=E.DQ;E.
Oc.__proto__=B.Core.Timer;E.Mc.__proto__=B.Core.Jz;};E.Ei=function(D){var A;if((
A=E.Ip._this)&&(A._cycle!=D))A._Done(E.Ip._this=null);if((A=E.KJ._this)&&(A._cycle
!=D))A._Done(E.KJ._this=null);};return E;})();

/* Embedded Wizard */