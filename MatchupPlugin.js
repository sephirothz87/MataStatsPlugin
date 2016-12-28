//将以下页面的对局胜率表以csv形式输出
//http://metastats.net/archetype/matchup/
rows = $("table").find($(".highlightrow"))

result = ""
for (i = 0; i < rows.length; i++) {
    cells = $(rows[i]).find($("td"))
    for (j = 0; j < cells.length; j++) {
        if ($(cells[j]).hasClass("playerarch")) {
            result += $(cells[j]).text()
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
