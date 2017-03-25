/*
  constants and global functions
*/

var JSON_FILE = '/books_schema.json';

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
var loadJSON = function(url, callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", url, true);
    xobj.onreadystatechange = function(responseText){
        if(xobj.readyState == 4 && xobj.status == "200"){
            var content = JSON.parse(xobj.responseText);
            callback.call(this, content);
        }
    };
    xobj.send(null);
};

function showContent() {
    var url, bookSaved;
    url = 'books-schema.json';
    $.getJSON(url, function(data) {
        $(data.entities.saved).each(function() {
            bookSaved = "<li class='myListElement pure-menu-item'><div class='listElementContainer'><a href='"+ this.url +"'>" + this.label + "</a><div class='action'><a href='#' class='removeElementList'>Eliminar</a><span>|</span><a href='#'>Modificar</a></div></div></li>";
            $('#myListSaved').append(bookSaved);
        });
        $('.myListElement .listElementContainer .action .removeElementList').on('click',function(){
        console.log('hola');
        $(this).parent('.action').parent('.listElementContainer').parent('.myListElement').remove();
        });
    });
}










