/*
//Dont distribute without permission
//MADE BY Korean SL
//discord : SL357#1860
//yt : https://www.youtube.com/channel/UC4QoASkshclcoI213KoWoxw

//개인톡 : https://open.kakao.com/o/sOcBMAQc
//채팅방 : https://open.kakao.com/o/gYcpPn6d
*/
import{world}from"mojang-minecraft";world.events.tick.subscribe(()=>{for(let player of world.getPlayers()){for(let i = 1; i<9; i++)if(player.hasTag("slot:"+i))[player.removeTag("slot:"+i), player.selectedSlot = i]}})