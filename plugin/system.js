/**
 Copyright (C) 2024.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : PRESIDENT-MD
 * @author : CYBER ISURU <https://github.com/MrIsuru>
 * @description : PRESIDENT-MD is simple multidevice whatsapp user bot
 * @version 1.0.0
 **/

const _0x1dd2fd=_0x244e;(function(_0x5d67a3,_0x772eae){const _0x42ae09=_0x244e,_0x921571=_0x5d67a3();while(!![]){try{const _0x46d675=parseInt(_0x42ae09(0xf0))/0x1*(-parseInt(_0x42ae09(0xdb))/0x2)+-parseInt(_0x42ae09(0x97))/0x3*(parseInt(_0x42ae09(0xaf))/0x4)+-parseInt(_0x42ae09(0xc3))/0x5+parseInt(_0x42ae09(0xd8))/0x6*(parseInt(_0x42ae09(0xc4))/0x7)+parseInt(_0x42ae09(0xaa))/0x8*(-parseInt(_0x42ae09(0xba))/0x9)+-parseInt(_0x42ae09(0xb8))/0xa+parseInt(_0x42ae09(0xad))/0xb*(parseInt(_0x42ae09(0xdc))/0xc);if(_0x46d675===_0x772eae)break;else _0x921571['push'](_0x921571['shift']());}catch(_0x4b9fdb){_0x921571['push'](_0x921571['shift']());}}}(_0x1a6f,0x6b03f));function _0x244e(_0x2cb490,_0x202d60){const _0x1a6f4b=_0x1a6f();return _0x244e=function(_0x244eb5,_0x45daf5){_0x244eb5=_0x244eb5-0x8e;let _0x4e3776=_0x1a6f4b[_0x244eb5];return _0x4e3776;},_0x244e(_0x2cb490,_0x202d60);}const {addnote,cmd,sck1,delnote,allnotes,delallnote,tlang,botpic,runtime,prefix,Config,sleep}=require('../lib'),{TelegraPh}=require(_0x1dd2fd(0x9e)),util=require(_0x1dd2fd(0xd9));cmd({'pattern':_0x1dd2fd(0xce),'category':_0x1dd2fd(0xe0),'desc':_0x1dd2fd(0xac),'filename':__filename},async(_0x54df8a,_0x22c79b,_0x3b904b,{isCreator:_0x597651})=>{const _0x1ebced=_0x1dd2fd;if(!_0x597651)return _0x22c79b[_0x1ebced(0xed)](tlang()[_0x1ebced(0xe0)]);if(!_0x3b904b)return _0x22c79b['reply'](_0x1ebced(0xc9));return await addnote(_0x3b904b),_0x22c79b['reply']('New\x20note\x20'+_0x3b904b+_0x1ebced(0xa8));}),cmd({'pattern':'qr','category':_0x1dd2fd(0xe0),'filename':__filename,'desc':_0x1dd2fd(0xb2)},async(_0x23c260,_0x5dc588,_0x52be7d)=>{const _0x5c4d4f=_0x1dd2fd;if(_0x52be7d){let _0x2bb091=await getBuffer(_0x5c4d4f(0xe9)+_0x52be7d);await _0x23c260['sendMessage'](_0x5dc588[_0x5c4d4f(0xeb)],{'image':_0x2bb091});return;}let _0x2340dc={'image':{'url':_0x5c4d4f(0x90)},'caption':'*_Scan\x20Qr\x20within\x2015\x20seconds_*\x0aYou\x27ll\x20get\x20session\x20id\x20in\x20your\x20log\x20number._*','footer':_0x5c4d4f(0xbf),'headerType':0x4,'contextInfo':{'externalAdReply':{'title':_0x5c4d4f(0xd2),'body':_0x5c4d4f(0xf2),'thumbnail':log0,'mediaType':0x2,'mediaUrl':'','sourceUrl':''}}};return await _0x23c260[_0x5c4d4f(0x98)](_0x5dc588['chat'],_0x2340dc,{'quoted':_0x5dc588}),await sleep(0x14*0x3e8),_0x5dc588[_0x5c4d4f(0xed)](_0x5c4d4f(0xa6));}),cmd({'pattern':_0x1dd2fd(0xc6),'category':_0x1dd2fd(0x95),'filename':__filename,'desc':_0x1dd2fd(0xea)},async(_0x5da969,_0x190f7b,_0x235469,{isCreator:_0x574b69})=>{const _0xebe98c=_0x1dd2fd;if(!_0x574b69)return _0x190f7b[_0xebe98c(0xed)](_0xebe98c(0x99));try{let _0x311650=_0x190f7b[_0xebe98c(0xa7)]?_0x190f7b[_0xebe98c(0xa7)][0x0]:_0x190f7b['msg'][_0xebe98c(0x96)][_0xebe98c(0xe4)]||![];if(!_0x311650)return _0x190f7b[_0xebe98c(0xed)](_0xebe98c(0x8e));let _0x111bdb=_0x5da969[_0xebe98c(0xe7)](_0x311650);sck1[_0xebe98c(0xbc)]({'id':_0x311650})['then'](async _0x500de3=>{const _0x59cd00=_0xebe98c;if(!_0x500de3)return console[_0x59cd00(0x9a)](_0x500de3[_0x59cd00(0xe2)]),_0x190f7b[_0x59cd00(0xed)](_0x111bdb+'\x20is\x20unbanned.');else{console[_0x59cd00(0x9a)](_0x500de3[_0x59cd00(0xe2)]);if(_0x500de3[_0x59cd00(0xe2)]!==_0x59cd00(0x9d))return _0x190f7b[_0x59cd00(0xed)](_0x500de3[_0x59cd00(0xb4)]+_0x59cd00(0xa2));return await sck1[_0x59cd00(0xe5)]({'id':_0x311650},{'ban':_0x59cd00(0xda)}),_0x190f7b[_0x59cd00(0xed)](_0x500de3[_0x59cd00(0xb4)]+_0x59cd00(0xb0));}});}catch{return _0x190f7b[_0xebe98c(0xed)](_0xebe98c(0x8e));}}),cmd({'pattern':_0x1dd2fd(0xc1),'react':_0x1dd2fd(0xae),'alias':[_0x1dd2fd(0xb9)],'category':'misc','filename':__filename,'desc':_0x1dd2fd(0xc7)},async(_0x364085,_0x109b8d,_0x175bb0)=>{const _0x18fb48=_0x1dd2fd;if(!_0x109b8d[_0x18fb48(0xcd)])return await _0x109b8d['reply'](_0x18fb48(0xbb));let _0x759843=_0x109b8d['quoted'][_0x18fb48(0x93)];if(_0x759843!=_0x18fb48(0xde)&&_0x759843!=_0x18fb48(0xe6))return await _0x109b8d['reply'](_0x18fb48(0x8f));let _0x2ffeda=await _0x364085[_0x18fb48(0x9c)](_0x109b8d['quoted']),_0x285aab=await TelegraPh(_0x2ffeda);return await _0x109b8d[_0x18fb48(0xed)](_0x18fb48(0xb1)+util[_0x18fb48(0x91)](_0x285aab)),await fs[_0x18fb48(0xd1)](_0x2ffeda);}),cmd({'pattern':_0x1dd2fd(0xcb),'alias':[_0x1dd2fd(0xb6)],'category':_0x1dd2fd(0x95),'filename':__filename,'desc':_0x1dd2fd(0xe1)},async(_0x2770cc,_0x5b10b9,_0x550aec)=>{const _0x1a6d20=_0x1dd2fd;if(!_0x550aec&&!_0x5b10b9['quoted'])return await _0x5b10b9[_0x1a6d20(0xed)](_0x1a6d20(0xdf)+prefix+_0x1a6d20(0xec));const _0x3741fa=require(_0x1a6d20(0xa9));let _0x1fb02f=_0x550aec?_0x550aec['split']('\x20')[0x0][_0x1a6d20(0xa0)]():'en';!_0x5b10b9[_0x1a6d20(0xcd)]?_0x550aec=_0x550aec[_0x1a6d20(0xc2)](_0x1fb02f,''):_0x550aec=_0x5b10b9[_0x1a6d20(0xcd)][_0x1a6d20(0xe8)];var _0x38dc3c=await _0x3741fa(_0x550aec,{'from':_0x1a6d20(0xef),'to':_0x1fb02f});if(_0x1a6d20(0xe8)in _0x38dc3c)return await _0x5b10b9['reply'](_0x1a6d20(0xd5)+_0x38dc3c[_0x1a6d20(0xe8)]);}),cmd({'pattern':_0x1dd2fd(0xa1),'category':_0x1dd2fd(0xe0),'filename':__filename,'desc':'Runs\x20command\x20in\x20Heroku(server)\x20shell.'},async(_0xda9625,_0x4c625c,_0x119613,{isCreator:_0x431fc8})=>{const _0x260f2b=_0x1dd2fd;if(!_0x431fc8)return _0x4c625c['reply'](tlang()[_0x260f2b(0xe0)]);const {exec:_0x3ee1f8}=require(_0x260f2b(0x9b));_0x3ee1f8(_0x119613,(_0x2956ca,_0x1afd9c)=>{const _0x1abec2=_0x260f2b;if(_0x2956ca)return _0x4c625c[_0x1abec2(0xed)]('----'+tlang()[_0x1abec2(0xc8)]+_0x1abec2(0xb5)+_0x2956ca);if(_0x1afd9c)return _0x4c625c[_0x1abec2(0xed)](_0x1abec2(0xb7)+tlang()[_0x1abec2(0xc8)]+_0x1abec2(0xb5)+_0x1afd9c);});}),cmd({'pattern':'eval','category':'owner','filename':__filename,'desc':_0x1dd2fd(0xc5)},async(_0x231a2a,_0x5acee2,_0x34db68,{isCreator:_0x3239b9})=>{const _0xf99803=_0x1dd2fd;if(!_0x3239b9)return;try{let _0x12b82f=eval(_0xf99803(0xbe)+_0x34db68+'\x0a}\x0aa()');if(typeof _0x12b82f===_0xf99803(0xc0))_0x5acee2[_0xf99803(0xed)](JSON[_0xf99803(0xbd)](_0x12b82f));else _0x5acee2[_0xf99803(0xed)](_0x12b82f['toString']());}catch(_0x12fa34){return _0x5acee2[_0xf99803(0xed)](_0x12fa34[_0xf99803(0xa5)]());}}),cmd({'pattern':_0x1dd2fd(0xd7),'category':_0x1dd2fd(0xe0),'filename':__filename,'desc':_0x1dd2fd(0xa3)},async(_0x18fd84,_0x2d4be5,_0x4b076f,{isCreator:_0x56f84f})=>{const _0x542b9f=_0x1dd2fd,{tlang:_0x2f66ad}=require(_0x542b9f(0x9e));if(!_0x56f84f)return _0x2d4be5[_0x542b9f(0xed)](_0x2f66ad()[_0x542b9f(0xe0)]);return await delnote(_0x4b076f[_0x542b9f(0xcc)]('\x20')[0x0]),_0x2d4be5[_0x542b9f(0xed)](_0x542b9f(0x92)+_0x4b076f[_0x542b9f(0xcc)]('\x20')[0x0]+_0x542b9f(0xd6));}),cmd({'pattern':'delallnotes','category':_0x1dd2fd(0xe0),'filename':__filename,'desc':_0x1dd2fd(0xe3)},async(_0x43cb12,_0x2ac36e,_0x3d74be,_0x2179b5)=>{const _0x2ea4e5=_0x1dd2fd,{tlang:_0x1228c6}=require(_0x2ea4e5(0x9e));if(!_0x2179b5)return _0x2ac36e[_0x2ea4e5(0xed)](_0x1228c6()[_0x2ea4e5(0xe0)]);return await delallnote(),_0x2ac36e[_0x2ea4e5(0xed)](_0x2ea4e5(0xd0));}),cmd({'pattern':_0x1dd2fd(0xe2),'react':'🚫','category':_0x1dd2fd(0xe0),'filename':__filename,'desc':'Bans\x20user\x20from\x20using\x20bot.'},async(_0x4d4cbf,_0x2ff738,_0x549bd8,{isCreator:_0x16a56b})=>{const _0x22a601=_0x1dd2fd;if(!_0x16a56b)return _0x2ff738['reply'](tlang()['owner']);try{let _0xbfe45d=_0x2ff738[_0x22a601(0xa7)]?_0x2ff738['mentionedJid'][0x0]:_0x2ff738[_0x22a601(0xdd)]['contextInfo'][_0x22a601(0xe4)]||![];if(!_0xbfe45d)return _0x2ff738[_0x22a601(0xed)](_0x22a601(0xee)+tlang()[_0x22a601(0xa4)]+'.');let _0x7babb=_0x4d4cbf[_0x22a601(0xe7)](_0xbfe45d);sck1[_0x22a601(0xbc)]({'id':_0xbfe45d})[_0x22a601(0xf1)](async _0x56ffc1=>{const _0x366f50=_0x22a601;if(!_0x56ffc1)return await new sck1({'id':_0xbfe45d,'ban':_0x366f50(0x9d)})[_0x366f50(0x94)](),_0x2ff738[_0x366f50(0xed)](_0x366f50(0xab)+_0x56ffc1[_0x366f50(0xb4)]+'\x20from\x20Using\x20Commands._');else{if(_0x56ffc1[_0x366f50(0xe2)]==_0x366f50(0x9d))return _0x2ff738[_0x366f50(0xed)](_0x7babb+_0x366f50(0xd3));return await sck1[_0x366f50(0xe5)]({'id':_0xbfe45d},{'ban':_0x366f50(0x9d)}),_0x2ff738[_0x366f50(0xed)](_0x366f50(0xca)+_0x56ffc1[_0x366f50(0xb4)]+_0x366f50(0xb3));}});}catch(_0x21c00){return console[_0x22a601(0x9a)](_0x21c00),_0x2ff738['reply'](_0x22a601(0x9f));}}),cmd({'pattern':'allnotes','category':_0x1dd2fd(0xe0),'filename':__filename,'desc':_0x1dd2fd(0xd4)},async(_0x41ba0e,_0x1e0f2a,_0x3b2e75,{isCreator:_0x1c63c5})=>{const _0x17757c=_0x1dd2fd,{tlang:_0x34fd8d}=require(_0x17757c(0xcf));if(!_0x1c63c5)return _0x1e0f2a[_0x17757c(0xed)](_0x34fd8d()[_0x17757c(0xe0)]);const _0x1b9d8b=new Array();let _0x4fb63c='All\x20Available\x20Notes\x20are:-\x0a\x0a';return _0x4fb63c+=await allnotes(),_0x1e0f2a[_0x17757c(0xed)](_0x4fb63c);});function _0x1a6f(){const _0x233d56=['mtype','save','misc','contextInfo','43806AlqzFF','sendMessage','This\x20command\x20is\x20onlt\x20for\x20my\x20Owner','log','child_process','downloadAndSaveMediaMessage','true','../lib/scraper','Please\x20mention\x20any\x20user.❌\x20','toLowerCase','shell','\x20is\x20already\x20unbanned.','Deletes\x20note\x20from\x20db.','greet','toString','Your\x20session\x20is\x20over\x20now.','mentionedJid','\x20added\x20in\x20mongodb.','translatte','8qfzMuj','_Banned\x20','Adds\x20a\x20note\x20on\x20db.','1906311aFRHBT','🖇️','68tOVkzW','\x20is\x20free\x20as\x20a\x20bird\x20now','*Here\x20is\x20URL\x20of\x20your\x20media.*\x0a','Sends\x20CitelsVoid\x20Qr\x20code\x20to\x20scan\x20and\x20get\x20your\x20session\x20id.','\x20from\x20Using\x20Commands._','name','----\x0a\x0a','translate','----','6081650NmQcfN','createurl','65979RSYDFD','*Reply\x20To\x20Any\x20Image/Video\x20To\x20Get\x20Url*','findOne','stringify','const\x20a\x20=\x20async()=>{\x0a','\x20Session','object','img2url','replace','3400965CBQoJS','841463KBZvOt','Runs\x20js\x20code\x20on\x20node\x20server.','unban','image\x20to\x20url.','title','🔍\x20Please\x20provide\x20me\x20a\x20valid\x20gist\x20url.','_Successfully\x20Banned\x20','trt','split','quoted','addnote','../lib','All\x20notes\x20deleted\x20from\x20mongodb.','unlinkSync','Secktor\x20Session','\x20is\x20already\x20Banned\x20from\x20Using\x20Commands','Shows\x20list\x20of\x20all\x20notes.','*Translated\x20text:*\x0a','\x27s\x20note\x20has\x20been\x20deleted\x20from\x20mongodb.','delnote','18eDJJYj','util','false','4YWynIg','156WcwByi','msg','videoMessage','*Please\x20Give\x20Me\x20Text.\x20Example:\x20_','owner','Translate\x27s\x20given\x20text\x20in\x20desird\x20language.','ban','Deletes\x20all\x20notes\x20from\x20db.','participant','updateOne','imageMessage','getName','text','https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=','Unbans\x20banned\x20user\x20(from\x20using\x20bot).','chat','trt\x20en\x20Who\x20are\x20you_*','reply','❌\x20Please\x20mention\x20any\x20user\x20','auto','315641DCAyea','then','Get\x20you\x20Session\x20ID','Please\x20mention\x20any\x20user.❌','Uhh\x20Please,\x20Reply\x20To\x20An\x20Image/Video','https://replit.com/@yasithasamujit2/FORZEN-MD','format','Id:\x20'];_0x1a6f=function(){return _0x233d56;};return _0x1a6f();}
