/*
//Dont distribute without permission
//MADE BY Korean SL
//discord : SL357#1860
//yt : https://www.youtube.com/channel/UC4QoASkshclcoI213KoWoxw

//개인톡 : https://open.kakao.com/o/sOcBMAQc
//채팅방 : https://open.kakao.com/o/gYcpPn6d
*/  
function getScore(entity, objective){try{return Number(entity.runCommand(`scoreboard players test @s "${objective}" * *`).statusMessage.match(/-?\d+/)[0]);}catch(error){return 0;}}import{world}from"mojang-minecraft";world.events.tick.subscribe(()=>{for(let player of world.getPlayers()){for(let i = 1; i<10; i++)if(getScore(player, "cs")==i)[player.runCommand(`scoreboard players reset @s cs`), player.selectedSlot = Number(i-1)];player.runCommand(`scoreboard players set @s ss ${Number(player.selectedSlot+1)}`)}});try{world.getDimension("overworld").runCommand(`scoreboard objectives add ss dummy`);world.getDimension("overworld").runCommand(`scoreboard objectives add cs dummy`)}catch(error){world.getDimension("overworld").runCommand(`scoreboard objectives add cs dummy`)}
