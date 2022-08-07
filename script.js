let title = document.getElementById('title');
let author = document.getElementById('author');
let year = document.getElementById('Year');
let publication = document.getElementById('publication');
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (title.value == '' && author.value == '' && year.value == '' && publication.value ==  '' ){    
        alert("Please input your information properly");           
    }
    else{

        let newRow = document.createElement('tr');
        //Creating new title \
        let newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
    
         //Creating new author\
         let newAuthor = document.createElement('th');
         newAuthor.innerHTML = author.value;
         newRow.appendChild(newAuthor);
    
          //Creating new year \
        let newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
    
         //Creating new Publication \
         let newPublication = document.createElement('th');
         newPublication.innerHTML = publication.value;
         newRow.appendChild(newPublication); 
    
         let newTable = document.getElementById('tableBody');
         newTable.appendChild(newRow);
        console.log(newTable);
       
    }

})
