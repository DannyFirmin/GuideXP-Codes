$(document).ready(function () {
    //select2 component
    $selectElement = $('.select').select2({
        placeholder: "",
        allowClear: true,
    });
});

currentType = "";
// index = 1;
currenttab = 0;
itemList = [];
const imageExtensions = ['JPEG', 'JPG', 'PNG'];
const audioExtensions = ['MP3'];


function selectConfirm() {
    let type = $("#type-select option:selected").val();
    if (type.length == 0) {
        $("#overlay-select-type label").addClass("invalid");
    } else {
        currentType = type;
        $("#overlay").css("display", "none");
        $("#overlay-select-type").css("display", "none");
        $("#upload-form-content").css("display", "block");
        $("#" + type).css("display", "block");
        showTab(currenttab);
    }
}


function nextPrev(n) {
    let l = $("#" + currentType);
    let tn = l.find(".tab");
    if(n == 1 && currenttab == tn.length-1){
        if(!validate()){
            alert("You must provide a name to submit");
            return;
        }
    }
    tn.eq(currenttab).css("display", "none");
    currenttab += n;
    if (currenttab >= tn.length) {
        $(".upload-form").submit();
    }
    showTab(currenttab);
}

function showTab(n) {
    if (n == 0) {
        $("#prevBtn").css("display", "none");
        let l = $("#" + currentType);
        let btn = $("#nextBtn");
        if (l.find(".tab").length == 1) {
            btn.html("Submit");
            btn.css("width", "100%");
            let html = $(".upload_description_board");
            l.find(".tab").eq(0).append(html.html());
            html.remove();
        } else {
            l.find(".tab").eq(0).css("display", "block");
            btn.html("Next");
            btn.css("width", "50%");
        }
    } else {
        $("#prevBtn").css("display", "inline");
        let l = $("#" + currentType);
        let btn = $("#nextBtn");
        let tabs = l.find(".tab");
        //show the tab
        tabs.eq(n).css("display", "block");
        //if you are at the last tab
        if (n == tabs.length - 1) {
            if (l.find(".upload_description_board").length == 0) {
                let html = $(".upload_description_board");
                tabs.eq(tabs.length - 1).append(html.html());
                html.remove();
            }
            btn.html("Submit");
        } else {
            btn.html("Next");
        }
    }

    fixIndicator(n);
}

function validate() {
    let valid = true;
    let upload_text = $("#uploaded-text").val();
    if (upload_text.length == 0 || !JSON.parse(upload_text).hasOwnProperty("Name")) {
        valid = false;
        return valid;
    }
    return valid;
}


function fixIndicator(n) {
    let steps = $("#" + currentType + " .step");
    steps.each(function () {
        $(this).removeClass("active");
    });
    steps.eq(n).addClass("active");
}


function showOverlayforTextInput(str) {
    //check if there is name or description added.
    if (str == "Name") {
        for (let i = 0; i < itemList.length; i++) {
            if (Object.keys(itemList[i])[0] == "Name") {
                alert("Name has already been added.");
                return;
            }
        }
    } else {
        for (let i = 0; i < itemList.length; i++) {
            if (Object.keys(itemList[i])[0] == "Description") {
                alert("Description has already been added.");
                return
            }
        }
    }

    $("#overlay-textarea").css("display", "block");
    $("#overlay").css("display", "block");

    let textarea = $("#overlay-textarea textarea");
    textarea.attr("id", str);
    if (str == "Name") {
        textarea.attr("placeholder", currentType.charAt(0).toUpperCase() + currentType.substring(1,) + " 's Name ...");
    } else {
        textarea.attr("placeholder", currentType.charAt(0).toUpperCase() + currentType.substring(1,) + " 's Description ...");
    }
}

function overlayTextInputSubmit() {
    let textarea = $("#overlay-textarea textarea");
    if (textarea.val().length == 0) {
        return;
    }
    if (textarea.attr("id") == "Name") {
        itemList[itemList.length] = {"Name": textarea.val()};
    } else {
        itemList[itemList.length] = {"Description": textarea.val()};
    }
    //update the board
    updateDescriptionBoard();
    //clear the text
    textarea.val("");
    //close the overlay
    $("#overlay-textarea").css("display", "none");
    $("#overlay").css("display", "none");
}

function overlayTextInputUpdateShow(index) {
    $("#overlay-textarea").css("display", "block");
    $("#overlay").css("display", "block");
    //change the button to update
    let btn = $("#confirm");
    btn.html("Update");
    btn.attr("onClick", `overlayTextInputUpdateSubmit(${index})`);
    let textarea = $("#overlay-textarea textarea");
    if (Object.keys(itemList[index])[0] == "Name") {
        textarea.attr("id", "Name");
        textarea.val(itemList[index]['Name']);
        textarea.attr("placeholder", currentType.charAt(0).toUpperCase() + currentType.substring(1,) + " 's Name ...");
    } else {
        textarea.attr("id", "Description");
        textarea.val(itemList[index]['Description']);
        textarea.attr("placeholder", currentType.charAt(0).toUpperCase() + currentType.substring(1,) + " 's Description ...");
    }
}

function overlayTextInputUpdateSubmit(index) {
    let textarea = $("#overlay-textarea textarea");
    if (textarea.val().length == 0) {
        return;
    }

    if (textarea.attr("id") == "Name") {
        itemList[index]['Name'] = textarea.val();
    } else {
        itemList[index]['Description'] = textarea.val();
    }

    updateDescriptionBoard();
    textarea.val("");
    let btn = $("#confirm");
    btn.html("Confirm");
    btn.attr("onClick", "overlayTextInputSubmit()");
    $("#overlay-textarea").css("display", "none");
    $("#overlay").css("display", "none");
}

function overlayTextInputCancel() {
    $("#overlay-textarea textarea").val("");
    let btn = $("#confirm");
    btn.html("Confirm");
    btn.attr("onClick", "overlayTextInputSubmit()");
    $("#overlay-textarea").css("display", "none");
    $("#overlay").css("display", "none");
}


function showOverlayforFile() {
    let e = $("#" + currentType);
    let files = e.find(".upload-file");
    let need = false;
    if (files.length > 0) {
        //find the last one
        let f = files.eq(files.length - 1);
        //check if it is empty
        if (!f.val()) {
            f.trigger("click");
            return;
        } else {
            need = true;
        }
    } else {
        need = true;
    }

    if (need) {
        let id = "file" + files.length.toString();
        let s = `<input type="file" id="${id}" name="image" class="upload-file" style="display: none;" onchange="fileSubmit(\`${id}\`)">`;
        e.append(s);
        $("#" + id).trigger("click");
    }
}

function fileSubmit(id) {
    let file = $("#" + id);
    let filetype = checkFile(file.val());
    if (filetype == "Image" || filetype == "Audio") {
        let fn = file.val().split("\\").pop();
        let t = {};
        t[filetype] = fn;
        t['id'] = id;
        itemList[itemList.length] = t;
        updateDescriptionBoard();
    } else {
        alert("Please select a valid image or audio file.");
    }
}

function checkFile(filename) {
    let extension = filename.split('.').pop().toUpperCase();
    if (imageExtensions.includes(extension)) {
        return "Image";
    }
    if (audioExtensions.includes(extension)) {
        return "Audio";
    }
    return "Unknown";
}


function updateDescriptionBoard() {
    if (itemList.length == 0) {
        $(".description_table").css("display", "none");
    } else {
        $(".description_table").css("display", "block");
    }

    sortUpdateList(itemList);
    let html = "";
    for (let i = 0; i < itemList.length; i++) {
        let key = Object.keys(itemList[i])[0];
        let value = itemList[i][key];
        let tooltip = false;
        if (value.length > 15) {
            tooltip = true;
        }
        if (key == "Image" || key == "Audio") {
            if (!tooltip) {
                html += `<tr><th scope="row">${i + 1}</th><td>${key}</td><td>${value}</td><td><i class="fas fa-trash" style="margin-left: 10px;" onclick="removeFromList(${i})"></i></td></tr>`;
            } else {
                html += `<tr><th scope="row">${i + 1}</th><td>${key}</td><td>#####</td><td><i class="fas fa-trash" style="margin-left: 10px;" onclick="removeFromList(${i})"></i></td></tr>`;
            }
        } else {
            if (!tooltip) {
                html += `<tr><th scope="row">${i + 1}</th><td>${key}</td><td>${value}</td><td><i class="fas fa-edit" onclick="overlayTextInputUpdateShow(${i})"></i><i class="fas fa-trash" style="margin-left: 10px;" onclick="removeFromList(${i})"></i></td></tr>`;
            } else {
                html += `<tr><th scope="row">${i + 1}</th><td>${key}</td><td>#####</td><td><i class="fas fa-edit" onclick="overlayTextInputUpdateShow(${i})"></i><i class="fas fa-trash" style="margin-left: 10px;" onclick="removeFromList(${i})"></i></td></tr>`;
            }
        }
    }
    $("#uploaded-text").val(formatUploadString(itemList));
    console.log($("#uploaded-text").val());
    $(".table-body").html(html);
}

function removeFromList(index) {
    let key = Object.keys(itemList[index])[0];
    if (key == "Image" || key == "Audio") {
        let id = itemList[index]['id'];
        $('#' + id).remove();
    }
    itemList.splice(index, 1);
    updateDescriptionBoard();
}


function formatUploadString(arr) {
    let json = "{";
    for (let i = 0; i < arr.length; i++) {
        let key = Object.keys(arr[i])[0];
        //only upload text
        if (key == "Image" || key == "Audio") {
            break;
        } else {
            if (i != 0) {
                json += ",";
            }
            json += `"${key}":`;
            let value = arr[i][key];
            if (key == "Description") {
                value = '<p>' + value.replace(/\n/g, "</p>\n<p>") + '</p>';
            }
            json += `"${value}"`;
        }
    }
    json += "}";
    // console.log(json);
    return json;
}

function sortUpdateList(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let key = keytonumber(Object.keys(arr[i])[0]);
        let j = i - 1;
        while (j >= 0 && keytonumber(Object.keys(arr[j])[0]) > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

function keytonumber(key) {
    switch (key) {
        case "Name":
            return 0;

        case "Description":
            return 1;

        case "Image":
            return 2;

        case "Audio":
            return 3;
    }
}