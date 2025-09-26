
function execute(url) {
    let doc = Http.get(url).html();
    let name = doc.select("h1.series-name").text();
    let cover = doc.select(".info-cover img").attr("src");
    let author = doc.select(".info-item:contains(Tác giả)").text().replace("Tác giả:", "").trim();
    let genre = doc.select(".info-item:contains(Thể loại) a").map(e => e.text()).join(", ");
    let summary = doc.select(".summary-content").text();
    return Response.success({
        name: name,
        cover: cover,
        author: author,
        genre: genre,
        summary: summary,
        host: "https://mtruyen.io.vn"
    });
}
