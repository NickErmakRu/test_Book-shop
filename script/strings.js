function category(id, title)
{
    return `<button class="btn btn-outline-info btn-block ctg" id="${id}">${title}</button>`;
};

function categoryOption(id, title){
  return `<option value="${id}">${title}</option>`  
};

function bookOption(id, name){
  return `<option value="${id}">${name}</option>`  
};



function card(id, name)
{
    return `<div class="card col-3 mx-4 my-2" style="width:100%" id="${id}">
        <img class="card-img-top" src="img/book.png" alt="Card image" style="width:100%">
        <div class="card-body"> 
            <h4 class="card-title">${name}</h4>
        </div>
    </div>`;
    
};

function createCategoryForm()
{
    return `<div class="col-12 text-center">
                <h5>Создать новую категорию</h5>
            </div>
            <div class="col-12">
            <form name="createForm">
                <div class="form-group">
                    <label>Название</label>
                    <input class="form-control" name="title" />
                </div>
            </form>
            <button class="btn btn-outline-success btn-block" id="createCategory">Добавить</button>
            </div>`;
}


function createBookForm()
{
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/category",
        dataType: "json",
        success: function(data, status) {
            
            let ctg = "";
            let ctgId = "";

            data.forEach(function(elem) {
                ctg += categoryOption(elem.id, elem.title);
                ctgId += categoryOption(elem.id, elem.id);
            });
            
            $('#select_c').html(ctg);
//            $('#select_c_id').html(ctgId);
        }
    });    
    
    return `<div class="col-12 text-center">
                <h5>Создать новую книгу</h5>
            </div>
            <div class="col-12">
            <form name="createForm">
                <div class="form-group">
                    <label>Название</label>
                    <input class="form-control" name="name" />
                    <label>Категория</label>
                    <div class="form-group">
                        <select class="form-control" id="select_c"></select>                
                    </div>
                </div>
            </form>
            <button class="btn btn-outline-danger btn-block" id="createBook">Добавить</button>
            </div>`;
}


function createDeleteForm()
{
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/category",
        dataType: "json",
        success: function(data, status) {
            
            let ctg = "";

            data.forEach(function(elem) {
                ctg += categoryOption(elem.id, elem.title);
            });
            
            $('#select_c').html(ctg);
        }
    });    
    
    return `<div class="col-12 text-center">
                <h5>Удалить категорию</h5>
            </div>
            <div class="col-12">
            <form name="createForm">
                <div class="form-group">
                    <label>Категория</label>
                    <div class="form-group">
                        <select class="form-control" id="select_c"></select>                
                    </div>
                </div>
            </form>
            <button class="btn btn-outline-danger btn-block" id="deleteCtg">Удалить</button>
            </div>`;
}


function createDeleteBookForm()
{
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/book",
        dataType: "json",
        success: function(data, status) {
            
            let ctg = "";

            data.forEach(function(elem) {
                ctg += categoryOption(elem.id, elem.name);
            });
            
            $('#select_book').html(ctg);
        }
    });    
    
    return `<div class="col-12 text-center">
                <h5>Удалить книгу</h5>
            </div>
            <div class="col-12">
            <form name="createForm">
                <div class="form-group">
                    <label>Книга</label>
                    <div class="form-group">
                        <select class="form-control" id="select_book"></select>                
                    </div>
                </div>
            </form>
            <button class="btn btn-outline-danger btn-block" id="deleteBk">Удалить</button>
            </div>`;
}



