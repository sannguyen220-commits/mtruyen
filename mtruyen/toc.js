
function execute(url) {
    let doc = Http.get(url).html();
    let chapters = [];
    doc.select(".list-chapters .chapter-name a").forEach(e => {
        chapters.push({
            name: e.text(),
            link: e.attr("href"),
            host: "https://mtruyen.io.vn"
        });
    });
    return Response.success(chapters);
}
