$('#category').delegate('.ctg', 'click', function(e){
   getBooksByCategory(e.target.id); 
});

//delegate - обрабатываем динамический объект (в привязке к статическому)

$('#all').click(function(){
    getAllBooks();
})


$('#newCtg').click(function(){
   $('#content').html(createCategoryForm()); 
});

$('#newBk').click(function(){
   $('#content').html(createBookForm()); 
});

$('#delCtg').click(function(){
   $('#content').html(createDeleteForm()); 
});

$('#delBk').click(function(){
   $('#content').html(createDeleteBookForm()); 
});



$('#content').delegate('#createCategory', 'click', function(){
    createCategory(document.forms.createForm.title.value);
});

$('#content').delegate('#createBook', 'click', function(){
    createBook(document.forms.createForm.name.value, document.forms.createForm.select_c.value);
});

$('#content').delegate('#deleteCtg', 'click', function(){
    deleteCategory(document.forms.createForm.select_c.value);
});

$('#content').delegate('#deleteBk', 'click', function(){
    deleteBook(document.forms.createForm.select_book.value);
});