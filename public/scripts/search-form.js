function searchForm(){
    $(document).ready(function() {
        $('#buttonSearch').prop('disabled', true);
        $('#message').keyup(function() {
            if($(this).val().length !=0) {
                $('#buttonSearch').prop('disabled', false);
            }
            else {
                $('#buttonSearch').prop('disabled', true);
            }
        });
    });
    var url, bookName;
    url = 'books-schema.json';
    $.getJSON(url, function(data) {
        $(data.data).each(function() {
            bookName = "<option>" + this.title + "</option>";
            $('#myList').append(bookName);
        });
        var input = $('#message')[0];
        new Awesomplete(input, {list: $('#myList')[0]});
    });
}
