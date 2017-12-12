var notes = [];

$(document).ready(function() {
    const $btnRegister = $('#btnRegister');
    $btnRegister.on('click', saveNotes);

    loadData();
});

/**
 * This method add note in screen
 * @param {OBJETCT}
 */
function addNote(note) {
    let $aside = $('<aside>');
    let $h1Title = $('<h1>').text(note.title);
    let $pNote = $('<p>').text(note.note);

    // Add note in aside
    $($aside)
        .append($h1Title)
        .append($pNote);

    $('#notes').append($aside);
}

/**
 * This method load data storage and getItems
 */
function loadData() {
    let json = window.localStorage.getItem('notes');

    if(json) {
        notes = JSON.parse(json);
        notes.forEach(e => {
            addNote(e);
        });
    }
}

/**
 * This method stores the content passed in the form
 * @returns 
 */
function getData() {
    return {
        title: $('#inputTitle').val(),
        note: $('#inputNote').val()
    };
}

function saveNotes() {
    // Add note
    let note = getData();
    addNote(note);

    notes.push(note);

    // JSON convertion
    let json = JSON.stringify(notes);
    window.localStorage.setItem('notes', json);
}
