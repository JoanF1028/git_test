const showModal = document.getElementById("btn");
const closeModal = document.getElementById("close");
const saveInfo = document.getElementById("save");
const modal = document.getElementById("modal");
const output = document.getElementById("books-container");
const bookName = document.getElementById("bookname");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookIsbn = document.getElementById("isbn");

showModal.addEventListener("click", function () {
  modal.showModal();
});
closeModal.addEventListener("click", function (e) {
  e.preventDefault();
  modal.close();
});

saveInfo.addEventListener("click", addBookToLibrary);

let myLibrary = [];

function Book(name, author, pages, isbn, id) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
}

function addBookToLibrary(e) {
  e.preventDefault();
  const newBook = new Book(
    bookName.value,
    bookAuthor.value,
    bookPages.value,
    bookIsbn.value
  );
  myLibrary = [...myLibrary, newBook];
  resetForm();
  setTimeout(() => {
    modal.close();
  }, 1000);

  showLibraryInHtml();
}

function resetForm() {
  bookName.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookIsbn.value = "";
}

function showLibraryInHtml() {

  clearHTMl();

  myLibrary.forEach(book => {
    const {name, author, pages, isbn} = book;
    const card = document.createElement('div');
    card.style.backgroundColor = 'white';
    card.style.width = '30%';
    card.style.padding = '1rem';
    card.style.borderRadius = '2rem';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'center';
    card.style.alignItems = 'center';
    card.style.margin = 'auto';
    card.style.marginBottom = '2rem';

    const book_name = document.createElement('p');
    book_name.textContent = `Book Name: ${name}`;
    book_name.style.fontSize = '2rem';
    book_name.style.width = '100%';
    book_name.style.textAlign = 'center';

    const book_author = document.createElement('p');
    book_author.textContent = `Book Author: ${author}`;
    book_author.style.fontSize = '2rem';
    book_author.style.width = '100%';
    book_author.style.textAlign = 'center';

    const book_pages = document.createElement('p');
    book_pages.textContent = `Book Pages: ${pages}`;
    book_pages.style.fontSize = '2rem';
    book_pages.style.width = '100%';
    book_pages.style.textAlign = 'center';

    const book_isbn = document.createElement('p');
    book_isbn.textContent = `Book ISBN: ${isbn}`;
    book_isbn.style.fontSize = '2rem';
    book_isbn.style.width = '100%';
    book_isbn.style.textAlign = 'center';

    const checkbox = document.createElement('input')
    const label = document.createElement('label');
    label.textContent = 'read';
    label.classList.add('label')
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox')
    label.appendChild(checkbox)

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete book';
    deleteBtn.id = `${isbn}`
    deleteBtn.addEventListener('click', deleteBook)
    deleteBtn.classList.add('delete')

    card.appendChild(book_name);
    card.appendChild(book_author);
    card.appendChild(book_pages);
    card.appendChild(book_isbn);
    card.appendChild(label);
    card.appendChild(deleteBtn);

    output.appendChild(card);
  })
}
function deleteBook(e) {
  e.preventDefault;
  if(e.target.classList.contains('delete')) {
    const btnId = document.querySelector('.delete').getAttribute('id')
    myLibrary = myLibrary.filter(book  => book.isbn !== btnId);
    showLibraryInHtml();
  }
}
function clearHTMl() {
  while(output.firstChild) {
    output.removeChild(output.firstChild);
  }
}