//将下记页面的对局胜率表以csv形式输出
//http://metastats.net/archetype/matchup/


// counter = 0
// console.log($("table").find($(".highlightrow")))
rows = $("table").find($(".highlightrow"))

// for(row in $("table").find($(".highlightrow"))){
result = ""
for (i = 0; i < rows.length; i++) {
    // console.log(row.text())
    // counter++
    // console.log(counter)
    // console.log(rows[i])


    // console.log($(rows[i]).find($("td")))
    cells = $(rows[i]).find($("td"))
    for (j = 0; j < cells.length; j++) {
        if ($(cells[j]).hasClass("playerarch")) {
            // console.log("deck name")
            // console.log($(cells[j]).text())
            result += $(cells[j]).text()
        } else {
            cells_div = $(cells[j]).find($("div"))
                // console.log(cells_div)
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

// str = "Games: 1598<br>Jade Druid: 41%<br>Midrange Hunter: 59%"

// // console.log(str.search(/\d\%/))
// console.log(str.match(/\d+\%/g))
