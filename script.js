document.addEventListener("DOMContentLoaded", () => {
    let bookmark_items = document.getElementById("bookMark-items");
    let button_fncn = document.getElementById("clicked");

    Object.keys(localStorage).forEach(element => {
        let bookmark_data = JSON.parse(localStorage.getItem(element));
        insert_bookMark(bookmark_data.name, bookmark_data.url, element)


    });
    function insert_bookMark(name, url, key) {
        let div = document.createElement("div");
        div.className = "inner-div";
        div.id = key;
        let a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.textContent = name;
        let delete_button = document.createElement("button");
        delete_button.textContent = "Delete";
        delete_button.className = "Delete"
        div.appendChild(a);
        div.appendChild(delete_button);
        bookmark_items.appendChild(div);
        console.log(key);



        delete_button.addEventListener("click", () => {
            console.log("clicked");
            localStorage.removeItem(key);
        }
        )




    }
    button_fncn.addEventListener("click", () => {
        event.preventDefault();
        const bookmark_name_input = document.getElementById("bookmark-name").value;
        const bookmark_url_input = document.getElementById("bookmark-url").value.trim();
        
        const bookmark_name = bookmark_name_input;
        const bookmark_url = bookmark_url_input;

        if (!bookmark_url) {
            alert("Please enter url");
        }
        else {

            let bookmark_key = `bookmark${Date.now()}`;
            let bookMark_obj = {
                name: bookmark_name,
                url: bookmark_url
            }
            localStorage.setItem(bookmark_key, JSON.stringify(bookMark_obj));
            insert_bookMark(bookmark_name, bookmark_url, bookmark_key);
            bookmark_name_input.value = "";
            bookmark_url_input.value = "";
        }
    })

})