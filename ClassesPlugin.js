//将以下页面的卡组分布表以csv形式输出
//http://metastats.net/classes/

//这里仅列出了需要记入环境卡组的21套卡组，可能会根据需要调整
deck_name = {
    "Beast Druid"       : "野兽德",
    "Jade Druid"        : "青玉德",
    "Maly Druid"        : "蓝龙德",
    "Midrange Hunter"   : "中速猎",
    "Secret Hunter"     : "奥秘猎",
    "Reno Mage"         : "宇宙法",
    "Tempo Mage"        : "节奏法",
    "Aggro Paladin"     : "神恩骑",
    "Murloc Paladin"    : "死鱼骑",
    "Dragon Priest"     : "龙牧",
    "Reno Priest"       : "控制牧",
    "Jade Rogue"        : "青玉贼",
    "Miracle Rogue"     : "奇迹贼",
    "Aggro Shaman"      : "打脸萨",
    "Midrange Shaman"   : "中速萨",
    "Discard Lock"      : "动物园",
    "Reno Warlock"      : "手牌术",
    "Control Warrior"   : "防战",
    "Dragon Warrior"    : "龙战",
    "Pirate Warrior"    : "海盗战"
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

for (name in deck_name_5_0) {
    if (result_array[name]) {
        result_5_0 += result_array[name]
    } else {
        result_5_0 += 0
    }
    result_5_0 += ","
}

result_5_0 = result_5_0.substr(0, result_5_0.length - 1)

console.log("========================= 5 - legend =========================\n")
console.log(result_5_0)
