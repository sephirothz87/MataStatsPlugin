//将以下页面的卡组分布表以csv形式输出
//http://metastats.net/classes/

//这里仅列出了需要记入环境卡组的21套卡组，可能会根据需要调整
deck_name = {
    "Aggro Token Druid"     : "快攻德",
    "Jade Druid"            : "青玉德",
    "Midrange Druid"        : "中速德",
    "Ramp Druid"            : "跳费德",
    "Face Hunter"           : "打脸猎",
    "Midrange Hunter"       : "中速猎",
    "Burn Mage"             : "火法",
    "Elemental Mage"        : "元素法",
    "Exodia Mage"           : "无限火球法",
    "Aggro Paladin"         : "神恩骑",
    "Midrange Paladin"      : "中速骑",
    "Murloc Paladin"        : "鱼人骑",
    "Control Priest"        : "控制牧",
    "Dragon Priest"         : "龙牧",
    "Highlander Priest"     : "核弹牧",
    "Miracle Rogue"         : "奇迹贼",
    "Evolve Shaman"         : "进化萨",
    "Handlock"              : "手牌术",
    "Zoo Warlock"           : "动物园术",
    "Control Warrior"       : "防战",
    "Pirate Warrior"        : "海盗战",
    "Quest Taunt Warrior"   : "墙战"
}

//这里列出5-传说需要统计的11套卡组，可能会根据需要调整
deck_name_5_0 = {
    "Jade Druid"        : "青玉德",
    "Maly Druid"        : "蓝龙德",
    "Reno Mage"         : "宇宙法",
    "Dragon Priest"     : "龙牧",
    "Miracle Rogue"     : "奇迹贼",
    "Aggro Shaman"      : "打脸萨",
    "Midrange Shaman"   : "中速萨",
    "Reno Warlock"      : "手牌术",
    "Control Warrior"   : "防战",
    "Dragon Warrior"    : "龙战",
    "Pirate Warrior"    : "海盗战"
}

div_2 = $("div").find($("#meta-archetype-stats"))

div_1 = $("#meta-archetype-stats").find($("[aria-label='A chart.']"))

text_deck_names = $(div_1[1]).find($("text[text-anchor='end']"))

rect_class_percent = $(div_1[1]).find($("rect[stroke-width='1'][fill!='none']"))

result_array = {}
sum = 0
for (i = 0; i < rect_class_percent.length; i++) {
    width = $(rect_class_percent[i]).attr("width")
    result_array[$(text_deck_names[i]).text()] = width

    sum += parseInt(width)
}

sum /= 1000

for (i = 0; i < rect_class_percent.length; i++) {
    result_array[$(text_deck_names[i]).text()] /= sum
}

result = ""

//打印表头
// for (name in deck_name) {
//     result += deck_name[name]
//     result += ","
// }

// result = result.substr(0, result.length - 1)

// result += "\n"

for (name in deck_name) {
    if (result_array[name]) {
        result += result_array[name]
    } else {
        result += 0
    }
    result += ","
}

result = result.substr(0, result.length - 1)

console.log("========================= all decks =========================\n")
console.log(result)

result_5_0 = ""

//打印表头
// for (name in deck_name) {
//     result += deck_name[name]
//     result += ","
// }

// result = result.substr(0, result.length - 1)

// result += "\n"

// for (name in deck_name_5_0) {
//     if (result_array[name]) {
//         result_5_0 += result_array[name]
//     } else {
//         result_5_0 += 0
//     }
//     result_5_0 += ","
// }

// result_5_0 = result_5_0.substr(0, result_5_0.length - 1)

// console.log("========================= 5 - legend =========================\n")
// console.log(result_5_0)
