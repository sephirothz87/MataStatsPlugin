//将以下页面的对局胜率表以csv形式输出
//http://metastats.net/archetype/matchup/

//冰封王座版本
deck_name = {
    "Aggro Token Druid"     : "快攻德",
    "Jade Druid"            : "青玉德",
    "Midrange Druid"        : "中速德",
    "Ramp Druid"            : "跳费德",
    "Face Hunter"           : "打脸猎",
    "Midrange Hunter"       : "中速猎",
    "Secret Hunter"         : "奥秘猎",
    "Burn Mage"             : "火法",
    "Elemental Mage"        : "元素法",
    "Exodia Mage"           : "无限火球法",
    "Freeze Mage"           : "冰法",
    "Aggro Paladin"         : "神恩骑",
    "Midrange Paladin"      : "中速骑",
    "Murloc Paladin"        : "鱼人骑",
    "Control Priest"        : "控制牧",
    "Dragon Priest"         : "龙牧",
    "Highlander Priest"     : "核弹牧",
    "Aggro Rogue"           : "海盗贼",
    "Miracle Rogue"         : "奇迹贼",
    "Evolve Shaman"         : "进化萨",
    "Handlock"              : "手牌术",
    "Zoo Warlock"           : "动物园术",
    "Control Warrior"       : "防战",
    "Pirate Warrior"        : "海盗战",
    "Quest Taunt Warrior"   : "墙战"
}

//加基森版本
// deck_name = {
//     "Beast Druid"       : "野兽德",
//     "C'Thun Druid"      : "克苏恩德",
//     "Jade Druid"        : "青玉德",
//     "Maly Druid"        : "蓝龙德",
//     "Midrange Hunter"   : "中速猎",
//     "Secret Hunter"     : "奥秘猎",
//     "Freeze Mage"       : "冰法",
//     "Reno Mage"         : "宇宙法",
//     "Tempo Mage"        : "节奏法",
//     "Aggro Paladin"     : "神恩骑",
//     "Murloc Paladin"    : "死鱼骑",
//     "Dragon Priest"     : "龙牧",
//     "Reno Priest"       : "控制牧",
//     "Aggro Rogue"       : "海盗贼",
//     "Jade Rogue"        : "青玉贼",
//     "Miracle Rogue"     : "奇迹贼",
//     "Aggro Shaman"      : "打脸萨",
//     "Control Shaman"    : "控场萨",
//     "Evolve Shaman"     : "进化萨",
//     "Midrange Shaman"   : "中速萨",
//     "Discard Lock"      : "动物园",
//     "Reno Warlock"      : "手牌术",
//     "Control Warrior"   : "防战",
//     "Dragon Warrior"    : "龙战",
//     "Pirate Warrior"    : "海盗战"
// }

rows = $("table").find($(".highlightrow"))

result = ""
//写表头
result += " ,"
for (i = 0; i < rows.length; i++) {
    cells = $(rows[i]).find($("td"))
    for (j = 0; j < cells.length; j++) {
        if ($(cells[j]).hasClass("playerarch")) {
            result += deck_name[$(cells[j]).text()]
            result += ","
        }
    }
}
result = result.substr(0,result.length-1)
result += "\n"
for (i = 0; i < rows.length; i++) {
    cells = $(rows[i]).find($("td"))
    for (j = 0; j < cells.length; j++) {
        if ($(cells[j]).hasClass("playerarch")) {
            result += deck_name[$(cells[j]).text()]
        } else {
            cells_div = $(cells[j]).find($("div"))
            if ($(cells_div).hasClass("deckwinrate")) {
                result += "," + $(cells_div).attr("data-original-title").match(/\d+\%/)
            } else {
                result += ",-"
            }
        }
    }
    result += "\n"
}

console.log(result)
