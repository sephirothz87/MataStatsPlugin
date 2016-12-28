//将以下页面的卡组分布表以csv形式输出
//http://metastats.net/classes/
// rows = $("table").find($(".highlightrow"))

// result = ""
// for (i = 0; i < rows.length; i++) {
//     cells = $(rows[i]).find($("td"))
//     for (j = 0; j < cells.length; j++) {
//         if ($(cells[j]).hasClass("playerarch")) {
//             result += $(cells[j]).text()
//         } else {
//             cells_div = $(cells[j]).find($("div"))
//             if ($(cells_div).hasClass("deckwinrate")) {
//                 result += "," + $(cells_div).attr("data-original-title").match(/\d+\%/)
//             } else {
//                 result += ",-"
//             }
//         }
//     }
//     result += "\n"
// }

// console.log(result)



deck_name_ch = ["法术德","中速猎","奥秘猎","冰法","宇宙法","节奏法","神恩骑","死鱼骑","龙牧","控制牧","青玉贼","奇迹贼","亡语贼","打脸萨","中速萨","动物园","手牌术","防战","龙战","海盗战"]
deck_name_eg = ["Jade Druid","Midrange Hunter","Secret Hunter","Freeze Mage","Reno Mage","Tempo Mage","Aggro Paladin","Murloc Paladin","Dragon Priest","Reno Priest","Jade Rogue","Miracle Rogue","N'Zoth Rogue","Aggro Shaman","Midrange Shaman","Discard Lock","Reno Warlock","Control Warrior","Dragon Warrior","Pirate Warrior"]

// base_div = $("div").find($("[dir='ltr']"))


// base_div = $("svg").find($("[aria-label='A chart.']"))
div_2 = $("div").find($("#meta-archetype-stats"))
console.log(div_2.length)


div_1 = $("#meta-archetype-stats").find($("[aria-label='A chart.']"))


// console.log(div_1.length)


// console.log(div_1[0])
// console.log(div_1[0])

// deck_names = $(div_1[1]).find($("text [text-anchor]='end'"))
text_deck_names = $(div_1[1]).find($("text[text-anchor='end']"))

// console.log(text_deck_names.length)

rect_class_percent = $(div_1[1]).find($("rect[stroke-width='1'][fill!='none']"))

// console.log(rect_class_percent.length)

result_array = {}
sum = 0
for(i=0;i<rect_class_percent.length;i++){
    width = $(rect_class_percent[i]).attr("width")
    result_array[$(text_deck_names[i]).text()] = width

    sum += parseInt(width)
}
console.log(sum)

sum/=1000

for(i=0;i<rect_class_percent.length;i++){
    result_array[$(text_deck_names[i]).text()] /= sum
}

console.log(result_array)

result = ""

for(name in deck_name_eg){
console.log(name)
    if(result_array[deck_name_eg[name]]){
        result+=result_array[deck_name_eg[name]]
    }else{
        result+=0
    }
    result+=","
}

result=result.substr(0,result.length-1)

console.log(result)
