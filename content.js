var container = document.body.getElementsByClassName('integration_name pull-left');
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "user");
input.setAttribute("placeholder", "Search for users..");

input.addEventListener('input', function (evt) {
    updateUser(this.value, evt);
});

container[0].appendChild(input);


/**
 * Looks through the options and change the selected option 
 * in accordance to the input by user
 * 
 * @param {userID} the input from the user
 */

function updateUser(userID, evt){

    if(!(evt.data)){
        var select = document.getElementById('search_library_id');
        userID = userID.toUpperCase();
        var opts = select.options;
        for (var opt, j = 0; opt = opts[j]; j++) {
            opts[j].style.display = "";
        }
    }


    var select = document.getElementById('search_library_id');
    userID = userID.toUpperCase();
    var opts = select.options;
    for (var opt, j = 0; opt = opts[j]; j++) {
        if (opt.text.toUpperCase().indexOf(userID) > -1) {
            select.selectedIndex = j;
        }
        else{
            opts[j].style.display = "none";
        }
    }
}
