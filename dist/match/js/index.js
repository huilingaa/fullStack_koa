var baseAsset,quoteAsset,comps=[],match_buy=null,match_trade=null,match_deposit=null,userData={};function initPage(){$(".onc").on("click",(function(){$(this).addClass("active").parent().siblings().children().removeClass("active")})),baseAsset=getUrlParam("baseAsset")||"baseAsset",quoteAsset=getUrlParam("quoteAsset")||"quoteAsset",getComps(baseAsset,quoteAsset).then((function(t){t.forEach((t=>{"净买入大赛"==t.type?(comps.push("comp-buy"),(match_buy=t).desc="净买入量"):"交易量大赛"==t.type?((match_trade=t).desc="交易量",comps.push("comp-trade")):"充值大赛"==t.type&&((match_deposit=t).desc="净充值量",comps.push("comp-deposit"))}))})).catch((t=>{})).finally((function(){comps.forEach((t=>{t="#"+t,$(t).show()})),refreshPage(null)})),Cookies.get("token")?$("#unauthor").remove():$("#author").remove(),$(".baseAsset").text(baseAsset),$(".quoteAsset").text(quoteAsset)}function refreshPage(t){init(t)}function getUserRankerInfo(t){getRank(t).then((t=>{$("#user_email").text(t.email),$("#user_volume").text(t.volume||0),$("#user_rank").text(t.rankNumber||"未上榜")})).catch((t=>{console.log(t)}))}function getRankerList(t,e,s){getListRankings(t,e,s).then((t=>{writeRankerList(t.list)})).catch((t=>{}))}function writeRankerList(t){var e=$("#rankList");$("#rankList  tr:not(:first)").html(""),t.forEach((t=>{e.append("<tr><td>"+t.rankNumber+"</td><td>"+hideEmailInfo(t.email)+"</td><td>"+t.volume+"</td></tr>")}))}function writeContent(t){if(t){var e=t.split(/[(\r\n)\r\n]+/),s="";e.forEach((t=>{s=s+t+"<br/>"})),$("#content").html(s)}}function init(t){var e=null;if(t?"comp-trade"==t?e=match_trade:"comp-buy"==t?e=match_buy:"comp-deposit"==t&&(e=match_deposit):match_buy?(e=match_buy,t="comp-buy"):match_trade?(e=match_trade,t="comp-trade"):match_deposit&&(e=match_deposit,t="comp-deposit"),e){"comp-deposit"===t?$("#asset").text(e.baseAsset+" "):$("#asset").text(e.baseAsset+"/"+e.quoteAsset+" "),t="#"+t,$(t).children("a").addClass("active"),$("#type").text(e.type),$(".desc").each((function(){$(this).text(e.desc)})),Cookies.get("token")&&getUserRankerInfo(e.id);var s=e.reallNumber;s<1&&(s=1),getRankerList(e.id,1,s),$(".comp_title").each((function(){$(this).text(e.title)})),$(".comp_time").each((function(){$(this).text(e.startTime+"——"+e.endTime)})),writeContent(e.taskDescribe)}}