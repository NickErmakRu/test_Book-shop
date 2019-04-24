function getAllBooks(){
    
    $.ajax({
       type: "GET",
        url: "http://localhost:5000/api/book",
        dataType: "json",
        success: function(data, status) {
            let books = "";
            data.forEach(function(elem){
               books += card(elem.id, elem.name); 
            });
            $("#content").html(books);
        }
    });
}


function getBooksByCategory(id){
    
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/book/category/"+id,
        dataType: "json",
        success: function(data, status) {
            let books = "";
            data.forEach(function(elem){
               books += card(elem.id, elem.name); 
            });
            $("#content").html(books);
        }
    });
}


function createBook(name, id){
    $.ajax({
       type: "POST",
        url: "http://localhost:5000/api/book",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: `{"name": "${name}",
                "categoryId": "${id}"}`,
        success: function(data, status){
            getAllBooks();
            getCategories();
        }
    });
}

function deleteBook(id){
    $.ajax({
       type: "delete",
        url: `http://localhost:5000/api/book/${id}`,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: `{"id": "${id}"}`,
        success: function(data, status){
            $(this).remove();
            
            getAllBooks();
            getCategories();
        }
    });
}