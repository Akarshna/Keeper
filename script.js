const addButton = document.getElementById('add');
const mainContainer = document.querySelector('.main-container')

//FUNCTION for storing data in Local
const updateLocalStorageData=()=>{
    const textAreaAll = document.querySelectorAll('textarea');
    const inputAll = document.querySelectorAll('.text-heading');
    let notes = []
    let heading = []
    const content = {
        notes : notes,
        notesHeading : heading
            }
    textAreaAll.forEach((item)=>{
            return notes.push(item.value);
        })
    inputAll.forEach((itemHeading)=>{
         return heading.push(itemHeading.value);
    })

   localStorage.setItem('content', JSON.stringify(content));
}
 
const addNewNote = ([text = '', textHeading ='']) => {

    const htmlData = `
        <div class = "note">
        <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        
        <input type="text" class= "text-heading" placeholder="Subject" />
        <textarea class="" id="autoresizing"></textarea>
        </div>`;
    
        mainContainer.insertAdjacentHTML('afterbegin',htmlData);
        


        //Getting references
        const editButton = mainContainer.querySelector('.edit')
        const delButton = mainContainer.querySelector('.delete')
        const inputEl = mainContainer.querySelector('input')
        const textArea = mainContainer.querySelector('textarea')
        
        // deleting the node
        delButton.addEventListener('click', ()=>{
            const note = document.querySelector('.note');
            note.remove();
            updateLocalStorageData();
        });

        textArea.value = text;
        inputEl.value = textHeading;

        inputEl.addEventListener('change', (event)=>{
            const value = event.target.value;
            updateLocalStorageData();
        })
        textArea.addEventListener('change', (event)=>{
            const value = event.target.value;
            updateLocalStorageData();
        })

        const textAreaResize = document.querySelector("#autoresizing");
        if(textArea){
        textAreaResize.addEventListener('input', autoResize, false);
        // FUNCTION for resizing the textarea
        function autoResize() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
            }
        }              
        // document.body.appendChild(note);
}
//getting data back from local storage

const getBack = JSON.parse(localStorage.getItem('content'));

if (getBack) {
    dataHandler(getBack.notes, getBack.notesHeading )
}
function dataHandler( inner, heading){
    let dec;
    for (let i = 0; i < heading.length; i++) {
         dec =[ inner[i], heading[i]]
         addNewNote(dec);
    }
}

addButton.addEventListener('click', () => addNewNote([text = '', textHeading ='']));