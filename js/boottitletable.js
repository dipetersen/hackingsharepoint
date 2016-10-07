<table id="booktable">
    <thead>
        <th>ISBN</th>
        <th>Book Title</th>
        <th>Book Author</th>
        <th>Publisher</th>
    </thead>
</table>

<script type="text/javascript" src="//code.jquery.com/jquery-1.12.3.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript">

if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
            ;
        });
    };
}


function GetBookData(){
    const webUrl = _spPageContextInfo.webAbsoluteUrl;
    const endpoint = String.format("{0}/_api/lists/getbytitle('{1}')",webUrl, "BookTitleData");
    const books = $.ajax({
        url: endpoint,
        method: "GET",
        headers: {"Accept": "application/json; odata=verbosse"}
    })
    books.done(fuction(data){
        return data.d.results;
    });
}
$(document).ready(function(){
    $('#booktable').dataTable({
        "ajaxSource": GetBookData,
            "columns": [
                { "data": "Title"}
                { "data": "BookTitle" },
                { "data": "BookAuthor" },
                { "data": "YearOfPublication" },
                { "data": "Publisher" }
            ]
    });
});
</script>