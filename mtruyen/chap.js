
function execute(url) {
    let doc = Http.get(url).html();
    let content = doc.select(".chapter-content").html();
    return Response.success(content);
}
