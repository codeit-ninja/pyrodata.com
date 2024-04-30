function SetChecked(_1,_2){
var _3=_1;
dml=document.forms[_3];
len=dml.elements.length;
var i=0;
for(i=1;i<len;i++){
if(dml.elements[i].name==_2){
dml.elements[i].checked=dml.master.checked;
}
}
};
function popUpWindow(_4,_5,_6,_7,_8){
var _9=window.open(_4,"FPU","resizable=yes, copyhistory=no, scrollbars=yes, menubar=no, height="+_5+", width="+_6+", left="+_7+", top="+_8+", toolbar=no, location=no, status=no");
return false;
};
function rePopulate(c,_a,_b){
if(_a=="apn"){
opener.document.getElementById(_a).value=c+"/";
}else{
if(_b=="append"){
opener.document.results.query_txt.focus();
val=opener.document.results.query_txt.value;
c=c.replace(/ /,"");
opener.document.results.query_txt.value=(val+c);
}else{
opener.document.getElementById(_a).value=c;
}
}
window.close();
if(_b=="append"){
opener.document.results.query_txt.focus();
}else{
opener.document.getElementById(_a).focus();
}
};
function updateAlert11(_c,id,so){
alert(_c);
var _d="myalert";
dml=document.forms[_d];
alert_f=document.getElementById(id).selectedIndex;
alert(alert_f);
location.href="myalert.html?update="+_c+"&alert_f="+alert_f+"&so="+so;
};
function monthlyAlert(so){
var _e="myalert";
dayOfMonth=document.getElementById("day-of-month").value;
location.href="acct-alerts.pl?a_month="+dayOfMonth+"&so="+so;
alert(alert_f);
};
function toggleMenuSection(_f){
action="toggleType = toggleDiv('div_"+_f+"', '"+_f+"_div');";
eval(action);
action="thisImage = document.getElementById('img_"+_f+"');";
eval(action);
if(document.getElementById("div_"+_f).offsetHeight>0){
thisImage.src="/images/menu_tree_open.gif";
}else{
thisImage.src="/images/menu_tree_closed.gif";
}
};
function enable_combo(_10,_11){
if(document.getElementById(_10).checked==true){
document.getElementById(_11).disabled=false;
}else{
document.getElementById(_11).disabled=true;
}
};
function openpopup(_12){
var _13=window.open(_12,"","top=50,left=150,width=570,height=600,scrollbars=yes,resizable=yes");
};
function toggleDiv(_14,_15){
thisDiv=document.getElementById(_14);
if(thisDiv){
if(thisDiv.style.display=="none"){
thisDiv.style.display="block";
for(i=1;i<4;i++){
document.getElementById(_15+i).value=true;
}
}else{
thisDiv.style.display="none";
for(i=1;i<4;i++){
document.getElementById(_15+i).value=false;
}
}
}else{
errorString="Error: Could not locate div with id: "+_14;
alert(errorString);
}
};
function CreateBookmarkLink(_16){
var _17="http://"+_16;
var _18="FreePatentsOnline.com";
if(window.sidebar){
window.sidebar.addPanel(_18,_17,0);
}else{
if(window.external){
window.external.AddFavorite(_17,_18);
}else{
if(window.opera&&window.print){
var mbm=document.createElement("a");
mbm.setAttribute("rel","sidebar");
mbm.setAttribute("href",url);
mbm.setAttribute("title",title);
mbm.click();
}else{
return true;
}
}
}
};
function ietruebody(){
return (document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;
};
function ddrivetip(_19,_1a,_1b){
document.onmousemove=positiontip;
var ns6=document.getElementById&&!document.all;
if(ns6||ie){
if(typeof _1b!="undefined"){
tipobj.style.width=_1b+"px";
}
if(typeof _1a!="undefined"&&_1a!=""){
tipobj.style.backgroundColor=_1a;
}
tipobj.innerHTML=_19;
enabletip=true;
return false;
}
};
function positiontip(e){
var _1c={init:function(){
this.browser=this.searchString(this.dataBrowser)||"An unknown browser";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS)||"an unknown OS";
},searchString:function(_1d){
for(var i=0;i<_1d.length;i++){
var _1e=_1d[i].string;
var _1f=_1d[i].prop;
this.versionSearchString=_1d[i].versionSearch||_1d[i].identity;
if(_1e){
if(_1e.indexOf(_1d[i].subString)!=-1){
return _1d[i].identity;
}
}else{
if(_1f){
return _1d[i].identity;
}
}
}
},searchVersion:function(_20){
var _21=_20.indexOf(this.versionSearchString);
if(_21==-1){
return;
}
return parseFloat(_20.substring(_21+this.versionSearchString.length+1));
},dataBrowser:[{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};
_1c.init();
if(enabletip){
var _22=(ns6)?e.pageX:event.clientX+ietruebody().scrollLeft;
var _23=(ns6)?e.pageY:event.clientY+ietruebody().scrollTop;
var _24=ie&&!window.opera?ietruebody().clientWidth-event.clientX-offsetxpoint:window.innerWidth-e.clientX-offsetxpoint-20;
var _25=ie&&!window.opera?ietruebody().clientHeight-event.clientY-offsetypoint:window.innerHeight-e.clientY-offsetypoint-20;
var _26=(offsetxpoint<0)?offsetxpoint*(-1):-1000;
if(_24<tipobj.offsetWidth){
tipobj.style.left=ie?ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px":window.pageXOffset+e.clientX-tipobj.offsetWidth+"px";
}else{
if(_22<_26){
tipobj.style.left="5px";
}else{
tipobj.style.left=_22+offsetxpoint+"px";
}
}
if(_25<tipobj.offsetHeight){
tipobj.style.top=ie?ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-offsetypoint+"px":window.pageYOffset+e.clientY-tipobj.offsetHeight-offsetypoint+"px";
}else{
tipobj.style.top=_23+offsetypoint+"px";
}
tipobj.style.visibility="visible";
}
};
function hideddrivetip(){
if(ns6||ie){
enabletip=false;
tipobj.style.visibility="hidden";
tipobj.style.left="-1000px";
tipobj.style.backgroundColor="";
tipobj.style.width="";
}
};
function clearSearchForm(){
var _27=document.getElementsByTagName("input");
for(var i=0;i<_27.length;i++){
var _28=_27[i];
if(_28.type=="text"){
_28.value="";
}
if(_28.type=="checkbox"){
if(_28.name=="uspat"){
_28.checked=true;
}else{
_28.checked=false;
}
}
if(_28.type=="radio"){
if(_28.id=="exdate_all"||_28.id=="exstemmingon"||_28.id=="exsortchrono"||_28.id=="ezdate_all"||_28.id=="ezstemmingon"||_28.id=="ezsortchrono"){
_28.checked=true;
}else{
_28.checked=false;
}
}
}
_27=document.getElementsByTagName("textArea");
var _29=_27[0];
_29.value="";
};
function clearContactUsForm(){
var _2a=document.getElementsByTagName("input");
for(var i=0;i<_2a.length;i++){
var _2b=_2a[i];
if(_2b.type=="text"){
_2b.value="";
}
}
_2a=document.getElementsByTagName("textArea");
var _2c=_2a[0];
_2c.value="";
_2a=document.getElementsByTagName("select");
var _2d=_2a[0];
_2d.value="Select";
_2d=_2a[1];
_2d.value="QuestionComment";
};
function tmenudata0(){
this.imgage_gap=3;
this.plus_image="/images/plus.jpg";
this.minus_image="/images/minus.jpg";
this.pm_width_height="12,9";
this.folder_image="/images/folder.gif";
this.document_image="/images/document.gif";
this.icon_width_height="16,14";
this.indent=20;
this.use_hand_cursor=true;
this.main_item_styles="text-decoration:none;\t\t                                           font-weight:normal;\t\t                                           font-family:Arial;\t\t                                           font-size:12px;\t\t\t                                           color:#333333;\t\t\t                                           padding:2px;\t\t\t\t";
this.sub_item_styles="text-decoration:none;\t\t                                           font-weight:normal;\t\t                                           font-family:Arial;\t\t                                           font-size:12px;\t\t\t                                           color:#333333;\t\t\t";
this.main_container_styles="padding:0px;";
this.sub_container_styles="padding-top:7px; padding-bottom:7px;";
this.main_link_styles="color:#ff6923; text-decoration:none;";
this.main_link_hover_styles="color:#ff6923; text-decoration:underline;";
this.sub_link_styles="";
this.sub_link_hover_styles="";
this.main_expander_hover_styles="text-decoration:underline;";
this.sub_expander_hover_styles="";
};
function FormUpdate(_2e){
if(_2e=="inv_name"){
document.getElementById(_2e).innerHTML=document.getElementById("plaque_data").value;
var _2f=document.getElementById("plaque_data").value.length;
var _30=_2f-11;
if(_30>0){
if(_30<=1){
document.getElementById(_2e).style.fontSize="11px";
}else{
if(_30>1&&_30<=5){
document.getElementById(_2e).style.fontSize="10px";
}else{
if(_30>5){
document.getElementById(_2e).style.fontSize="9px";
}
}
}
}else{
if(document.getElementById(_2e).style.fontSize!=12){
document.getElementById(_2e).style.fontSize="12px";
}
}
}else{
if(_2e=="doc_number"){
doc_num=document.getElementById("doc_number").value;
document.getElementById("pat_num").innerHTML=doc_num;
if(doc_num.substr(0,2).toLowerCase()=="ep"){
document.getElementById("pat_type").style.fontSize="15px";
document.getElementById("pat_type").innerHTML="EP PATENT";
}else{
if(doc_num.substr(0,2).toLowerCase()=="jp"){
document.getElementById("pat_type").style.fontSize="15px";
document.getElementById("pat_type").innerHTML="JP PATENT";
}else{
if(doc_num.substr(0,2).toLowerCase()=="wo"){
document.getElementById("pat_type").style.fontSize="15px";
document.getElementById("pat_type").innerHTML="WO PATENT";
}else{
if(doc_num.length==11){
document.getElementById("pat_type").innerHTML="US APPLICATION";
document.getElementById("pat_type").style.fontSize="12px";
}else{
document.getElementById("pat_type").style.fontSize="15px";
document.getElementById("pat_type").innerHTML="US PATENT";
}
}
}
}
}
}
};
function getvalue(){
document.getElementById("source_textarea").value;
};
function ClipBoard(_31){
Copied=_31.createTextRange();
Copied.execCommand("Copy");
};
function copy_clip(_32){
if(window.clipboardData){
window.clipboardData.setData("Text",_32);
}else{
if(window.netscape){
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
var _33=Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
if(!_33){
return;
}
var _34=Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
if(!_34){
return;
}
_34.addDataFlavor("text/unicode");
var str=new Object();
var len=new Object();
var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
var _35=_32;
str.data=_35;
_34.setTransferData("text/unicode",str,_35.length*2);
var _36=Components.interfaces.nsIClipboard;
if(!_33){
return false;
}
_33.setData(_34,null,_36.kGlobalClipboard);
}
}
return false;
};
function hasSupport(){
if(typeof hasSupport.support!="undefined"){
return hasSupport.support;
}
var _37=/msie 5\.[56789]/i.test(navigator.userAgent);
hasSupport.support=(typeof document.implementation!="undefined"&&document.implementation.hasFeature("html","1.0")||_37);
if(_37){
document._getElementsByTagName=document.getElementsByTagName;
document.getElementsByTagName=function(_38){
if(_38=="*"){
return document.all;
}else{
return document._getElementsByTagName(_38);
}
};
}
return hasSupport.support;
};
function WebFXTabPane(el,_39){
if(!hasSupport()||el==null){
return;
}
this.element=el;
this.element.tabPane=this;
this.pages=[];
this.selectedIndex=null;
this.useCookie=_39!=null?_39:true;
this.element.className=this.classNameTag+" "+this.element.className;
this.tabRow=document.createElement("div");
this.tabRow.className="tab-row";
el.insertBefore(this.tabRow,el.firstChild);
var _3a=0;
if(this.useCookie){
_3a=Number(WebFXTabPane.getCookie("webfxtab_"+this.element.id));
if(isNaN(_3a)){
_3a=0;
}
}
var _3b=document.getElementById("tab_selected").value;
if(_3b!=0&&_3b!=1){
this.selectedIndex=_3a;
}else{
this.selectedIndex=_3b;
}
var cs=el.childNodes;
var n;
for(var i=0;i<cs.length;i++){
if(cs[i].nodeType==1&&cs[i].className=="tab-page"){
this.addTabPage(cs[i]);
}
}
};
WebFXTabPane.prototype.classNameTag="dynamic-tab-pane-control";
WebFXTabPane.prototype.setSelectedIndex=function(n){
if(this.selectedIndex!=n){
if(this.selectedIndex!=null&&this.pages[this.selectedIndex]!=null){
this.pages[this.selectedIndex].hide();
}
this.selectedIndex=n;
this.pages[this.selectedIndex].show();
if(this.useCookie){
WebFXTabPane.setCookie("webfxtab_"+this.element.id,n);
}
}
};
WebFXTabPane.prototype.getSelectedIndex=function(){
return this.selectedIndex;
};
WebFXTabPane.prototype.addTabPage=function(_3c){
if(!hasSupport()){
return;
}
if(_3c.tabPage==this){
return _3c.tabPage;
}
var n=this.pages.length;
var tp=this.pages[n]=new WebFXTabPage(_3c,this,n);
tp.tabPane=this;
this.tabRow.appendChild(tp.tab);
if(n==this.selectedIndex){
tp.show();
}else{
tp.hide();
}
return tp;
};
WebFXTabPane.prototype.dispose=function(){
this.element.tabPane=null;
this.element=null;
this.tabRow=null;
for(var i=0;i<this.pages.length;i++){
this.pages[i].dispose();
this.pages[i]=null;
}
this.pages=null;
};
WebFXTabPane.setCookie=function(_3d,_3e,_3f){
var _40="";
if(_3f){
var d=new Date();
d.setTime(d.getTime()+_3f*24*60*60*1000);
_40="; expires="+d.toGMTString();
}
document.cookie=_3d+"="+_3e+_40+"; path=/";
};
WebFXTabPane.getCookie=function(_41){
var re=new RegExp("(;|^)[^;]*("+_41+")=([^;]*)(;|$)");
var res=re.exec(document.cookie);
return res!=null?res[3]:null;
};
WebFXTabPane.removeCookie=function(_42){
setCookie(_42,"",-1);
};
function WebFXTabPage(el,_43,_44){
if(!hasSupport()||el==null){
return;
}
this.element=el;
this.element.tabPage=this;
this.index=_44;
var cs=el.childNodes;
for(var i=0;i<cs.length;i++){
if(cs[i].nodeType==1&&cs[i].className=="tab"){
this.tab=cs[i];
break;
}
}
var a=document.createElement("A");
this.aElement=a;
a.href="#";
a.onclick=function(){
return false;
};
while(this.tab.hasChildNodes()){
a.appendChild(this.tab.firstChild);
}
this.tab.appendChild(a);
var _45=this;
this.tab.onclick=function(){
_45.select();
};
this.tab.onmouseover=function(){
WebFXTabPage.tabOver(_45);
};
this.tab.onmouseout=function(){
WebFXTabPage.tabOut(_45);
};
};
WebFXTabPage.prototype.show=function(){
var el=this.tab;
var s=el.className+" selected";
s=s.replace(/ +/g," ");
el.className=s;
this.element.style.display="block";
};
WebFXTabPage.prototype.hide=function(){
var el=this.tab;
var s=el.className;
s=s.replace(/ selected/g,"");
el.className=s;
this.element.style.display="none";
};
WebFXTabPage.prototype.select=function(){
this.tabPane.setSelectedIndex(this.index);
};
WebFXTabPage.prototype.dispose=function(){
this.aElement.onclick=null;
this.aElement=null;
this.element.tabPage=null;
this.tab.onclick=null;
this.tab.onmouseover=null;
this.tab.onmouseout=null;
this.tab=null;
this.tabPane=null;
this.element=null;
};
WebFXTabPage.tabOver=function(_46){
var el=_46.tab;
var s=el.className+" hover";
s=s.replace(/ +/g," ");
el.className=s;
};
WebFXTabPage.tabOut=function(_47){
var el=_47.tab;
var s=el.className;
s=s.replace(/ hover/g,"");
el.className=s;
};
function setupAllTabs(){
if(!hasSupport()){
return;
}
var all=document.getElementsByTagName("*");
var l=all.length;
var _48=/tab\-pane/;
var _49=/tab\-page/;
var cn,el;
var _4a;
for(var i=0;i<l;i++){
el=all[i];
cn=el.className;
if(cn==""){
continue;
}
if(_48.test(cn)&&!el.tabPane){
new WebFXTabPane(el);
}else{
if(_49.test(cn)&&!el.tabPage&&_48.test(el.parentNode.className)){
el.parentNode.tabPane.addTabPage(el);
}
}
}
};
function disposeAllTabs(){
if(!hasSupport()){
return;
}
var all=document.getElementsByTagName("*");
var l=all.length;
var _4b=/tab\-pane/;
var cn,el;
var _4c=[];
for(var i=0;i<l;i++){
el=all[i];
cn=el.className;
if(cn==""){
continue;
}
if(_4b.test(cn)&&el.tabPane){
_4c[_4c.length]=el.tabPane;
}
}
for(var i=_4c.length-1;i>=0;i--){
_4c[i].dispose();
_4c[i]=null;
}
};
if(typeof window.addEventListener!="undefined"){
window.addEventListener("load",setupAllTabs,false);
}else{
if(typeof window.attachEvent!="undefined"){
window.attachEvent("onload",setupAllTabs);
window.attachEvent("onunload",disposeAllTabs);
}else{
if(window.onload!=null){
var oldOnload=window.onload;
window.onload=function(e){
oldOnload(e);
setupAllTabs();
};
}else{
window.onload=setupAllTabs;
}
}
}

