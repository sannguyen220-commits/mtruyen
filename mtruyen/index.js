
function execute(url) {
    if (!url) url = "https://mtruyen.io.vn/danh-sach/truyen-moi-cap-nhat";
    let doc = Http.get(url).html();
    let data = [];
    doc.select(".row .thumb-item-flow").forEach(e => {
        let name = e.select(".series-title a").text();
        let link = e.select(".series-title a").attr("href");
        let cover = e.select("img").attr("data-src");
        data.push({
            name: name,
            link: link,
            cover: cover,
            host: "https://mtruyen.io.vn"
        });
    });
    return Response.success(data);
}
