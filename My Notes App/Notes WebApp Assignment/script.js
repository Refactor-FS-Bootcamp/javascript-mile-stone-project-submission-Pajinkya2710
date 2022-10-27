var form = `<div>
  <div class="form-group">
    <label for="title"></label>
    <input type="text" class="form-control" id="title"  placeholder="Title">
  </div>
  <div class="form-group">
    <label for="task"></label>
    <textarea class="form-control" id="note" rows="3" placeholder="Your Note"></textarea>
    </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="savenote()">Add Note</button>
</div>`;


//date function


var date = (new Date()).toString().split(' ').splice(1, 3).join(' ');


//Display function


function shownotes() {
    let details = localStorage.getItem("details");
    if (details == null) {
        data = [];
    }
    else {
        data = JSON.parse(details);
    }
    let html = "";
    data.forEach(function (details, i) {
        html += ` <div class="col-md-4">
      <div class="card">
<div class="card-body">
<h5 class="card-title">Note ${i + 1}</h5>
<p class="card-text"><b>${details.title}</b><p>
<p class="card-text">${details.note}</p>
<p class="card-text">
<button type="button" class="btn btn-danger" onclick="deletenote(${i})">Delete Note</button>
<button type="button" class="btn btn-success" onclick="editnote(${i})">Edit Note</button></p>
<p class="card-text" style="float:right">${date}</p>
</div>
</div>
</div>`
    });
    let notesEle = document.getElementById("showdata");
    if (data.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML = `<span>
      Nothing to show! Use "Add Note" section for creating your notes</span>`
    }
}
document.getElementById("form").innerHTML = form;
details = [];
getData();
shownotes();


//to get all the data from localStorage


function getData() {
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};


//to set all the data in localStorage


function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};


///save function


function savenote() {
    let title = document.getElementById("title");
    let note = document.getElementById("note");

    if (title.value == 0) {
        alert("please add a title");
        return
    }
    let data = {
        title: title.value,
        note: note.value
    };
    details.push(data);
    setData();
    shownotes();
    title.value = "";
    note.value = "";
};


//delete function


function deletenote(index) {
    let confirmDel = confirm("Are You Confirm?");
    if (confirmDel == true) {
        let details = localStorage.getItem("details");
        if (details == null) {
            data = [];
        } else {
            data = JSON.parse(details);
        }

        data.splice(index, 1);
        localStorage.setItem("details", JSON.stringify(data));
        shownotes();
    }

}


//edit function


function editnote(index) {
    let editForm = `<div>
  <div class="form-group">
    <label for="title"></label>
    <input type="text" value="${details[index].title}" class="form-control" id="newTitle"  placeholder="Update Your title">
  </div>
  <div class="form-group">
    <label for="task"></label>
    <textarea  class="form-control" id="newNote" placeholder="Update Your Note" rows="3">${details[index].note}</textarea>
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="updatenote(${index})">Update Note</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
};


//update function


function updatenote(index) {
    let newTitle = document.getElementById('newTitle');
    let newNote = document.getElementById('newNote');

    if (newTitle.value == 0) {
        alert("please add a title");
        return
    }
    details[index] = {
        title: newTitle.value,
        note: newNote.value
    };
    setData();
    shownotes();
    document.getElementById("form").innerHTML = form;
}

