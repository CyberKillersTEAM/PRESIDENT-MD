/**
 Copyright (C) 2024.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : PRESIDENT-MD
 * @author : CYBER ISURU <https://github.com/MrIsuru>
 * @description : PRESIDENT-MD is simple multidevice whatsapp user bot.
 * @version 1.0.0
 **/

const _0x1915a9=_0x22d9;(function(_0x557259,_0x3edc58){const _0x56221e=_0x22d9,_0x4ccea0=_0x557259();while(!![]){try{const _0x557be0=-parseInt(_0x56221e(0xd6))/0x1*(-parseInt(_0x56221e(0xd2))/0x2)+-parseInt(_0x56221e(0xe1))/0x3*(parseInt(_0x56221e(0xf3))/0x4)+-parseInt(_0x56221e(0xe9))/0x5*(parseInt(_0x56221e(0xc8))/0x6)+parseInt(_0x56221e(0xdc))/0x7+-parseInt(_0x56221e(0xe2))/0x8*(parseInt(_0x56221e(0xef))/0x9)+-parseInt(_0x56221e(0xeb))/0xa+parseInt(_0x56221e(0xc5))/0xb*(parseInt(_0x56221e(0xd3))/0xc);if(_0x557be0===_0x3edc58)break;else _0x4ccea0['push'](_0x4ccea0['shift']());}catch(_0x287f37){_0x4ccea0['push'](_0x4ccea0['shift']());}}}(_0x1dc0,0x78739));function _0x22d9(_0x583404,_0x274fb9){const _0x1dc081=_0x1dc0();return _0x22d9=function(_0x22d9d4,_0x45e838){_0x22d9d4=_0x22d9d4-0xc5;let _0x568dbc=_0x1dc081[_0x22d9d4];return _0x568dbc;},_0x22d9(_0x583404,_0x274fb9);}function _0x1dc0(){const _0x3aadf8=['antilink','updateOne','Antilink\x20was\x20alredy\x20disabled.','78AvNufC','36iPlJhn','isGroup','This\x20feature\x20in\x20only\x20for\x20Group.','18553hqwTVq','decodeJid','false','split','Successfully\x20disabled\x20*NSFW*','Economy\x20was\x20alredy\x20disabled.','4570860yZYBtP','Switches\x20for\x20varios\x20works.','❌\x20Please\x20provide\x20me\x20term\x20like\x20like\x0a1-events\x0a2-antilink\x0a3-nsfw\x0a4-cardgame\x0a5-bot','*Events*\x20are\x20already\x20disabled','disabled\x20Economy\x20in\x20current\x20chat.','3tHPABZ','69976puisUL','economy','deactive','Successfully\x20disabled\x20*Card\x20Game.*','\x20Economy\x20disabled\x20Successfully','deact','Please\x20provide\x20me\x20term\x20like.\x0a1-events\x0a2-antilink\x0a3-nsfw\x0a4-cardgame','25ZNBzJo','Successfully\x20disabled\x20*Events*','9662510mRdifx','group','chat','*NSFW*\x20is\x20already\x20disabled','981zxMoSq','events','nsfw','disabled\x20antilink\x20in\x20current\x20chat.','2147492Wcdpwc','7751843cKfUne','../lib','cardgame','648924KyaRgJ','../config','*Card\x20Game*\x20was\x20already\x20disabled','findOne','save','includes','reply'];_0x1dc0=function(){return _0x3aadf8;};return _0x1dc0();}const {sck,sck1,cmd,getAdmin,tlang,prefix}=require(_0x1915a9(0xc6)),Config=require(_0x1915a9(0xc9));cmd({'pattern':_0x1915a9(0xe7),'desc':_0x1915a9(0xdd),'category':'group','filename':__filename},async(_0x2607c3,_0x376342,_0x51245d,{isCreator:_0x5591e7})=>{const _0x46390a=_0x1915a9;if(!_0x376342[_0x46390a(0xd4)])return _0x376342[_0x46390a(0xce)](tlang()[_0x46390a(0xec)]);const _0x52bab3=await getAdmin(_0x2607c3,_0x376342),_0x3550c2=await _0x2607c3[_0x46390a(0xd7)](_0x2607c3['user']['id']),_0x4009cd=_0x376342[_0x46390a(0xd4)]?_0x52bab3['includes'](_0x3550c2):![],_0x5d5720=_0x376342[_0x46390a(0xd4)]?_0x52bab3[_0x46390a(0xcd)](_0x376342['sender']):![];if(!_0x376342[_0x46390a(0xd4)])return _0x376342[_0x46390a(0xce)](_0x46390a(0xd5));if(!_0x51245d)return _0x376342['reply'](_0x46390a(0xde));if(!_0x5d5720)return _0x376342[_0x46390a(0xce)]('❌\x20This\x20Command\x20is\x20only\x20for\x20Admin');switch(_0x51245d[_0x46390a(0xd9)]('\x20')[0x0]){case _0x46390a(0xcf):{let _0x428885=await sck['findOne']({'id':_0x376342['chat']});if(!_0x428885)return await new sck({'id':_0x376342[_0x46390a(0xed)],'antilink':_0x46390a(0xd8)})[_0x46390a(0xcc)](),_0x376342[_0x46390a(0xce)]('\x20Antilink\x20disabled\x20Successfully');else{if(_0x428885[_0x46390a(0xcf)]==_0x46390a(0xd8))return _0x376342[_0x46390a(0xce)](_0x46390a(0xd1));await sck[_0x46390a(0xd0)]({'id':_0x376342[_0x46390a(0xed)]},{'antilink':_0x46390a(0xd8)}),_0x376342[_0x46390a(0xce)](_0x46390a(0xf2));return;}}break;case'economy':{let _0x31c315=await sck[_0x46390a(0xcb)]({'id':_0x376342[_0x46390a(0xed)]});if(!_0x31c315)return await new sck({'id':_0x376342['chat'],'economy':_0x46390a(0xd8)})[_0x46390a(0xcc)](),_0x376342[_0x46390a(0xce)](_0x46390a(0xe6));else{if(_0x31c315[_0x46390a(0xe3)]==_0x46390a(0xd8))return _0x376342[_0x46390a(0xce)](_0x46390a(0xdb));await sck['updateOne']({'id':_0x376342[_0x46390a(0xed)]},{'economy':'false'}),_0x376342['reply'](_0x46390a(0xe0));return;}}break;case _0x46390a(0xf0):{let _0x88792c=await sck[_0x46390a(0xcb)]({'id':_0x376342[_0x46390a(0xed)]});if(!_0x88792c)return await new sck({'id':_0x376342['chat'],'events':_0x46390a(0xd8)})[_0x46390a(0xcc)](),_0x376342[_0x46390a(0xce)](_0x46390a(0xea));else{if(_0x88792c[_0x46390a(0xf0)]=='false')return _0x376342['reply'](_0x46390a(0xdf));return await sck[_0x46390a(0xd0)]({'id':_0x376342[_0x46390a(0xed)]},{'events':_0x46390a(0xd8)}),_0x376342[_0x46390a(0xce)]('Successfully\x20disabled\x20*Events*');}}break;case _0x46390a(0xc7):{let _0x50bd7f=sck['findOne']({'id':_0x376342[_0x46390a(0xed)]});if(!_0x50bd7f)return await new sck({'id':_0x376342['chat'],'cardgame':_0x46390a(0xe4)})[_0x46390a(0xcc)](),_0x376342['reply']('Successfully\x20disabled\x20*Card\x20Game*');else{if(_0x50bd7f[_0x46390a(0xc7)]==_0x46390a(0xe4))return _0x376342[_0x46390a(0xce)](_0x46390a(0xca));return await sck[_0x46390a(0xd0)]({'id':_0x376342[_0x46390a(0xed)]},{'cardgame':'deactive'}),_0x376342['reply'](_0x46390a(0xe5));}}break;case _0x46390a(0xf1):{let _0x187fea=await sck[_0x46390a(0xcb)]({'id':_0x376342[_0x46390a(0xed)]});if(!_0x187fea)return await new sck({'id':_0x376342[_0x46390a(0xed)],'nsfw':_0x46390a(0xd8)})[_0x46390a(0xcc)](),_0x376342[_0x46390a(0xce)](_0x46390a(0xda));else{if(_0x187fea[_0x46390a(0xf1)]=='false')return _0x376342['reply'](_0x46390a(0xee));await sck[_0x46390a(0xd0)]({'id':_0x376342[_0x46390a(0xed)]},{'nsfw':'false'}),_0x376342[_0x46390a(0xce)](_0x46390a(0xda));return;}}break;default:{_0x376342['reply'](_0x46390a(0xe8));}}});
