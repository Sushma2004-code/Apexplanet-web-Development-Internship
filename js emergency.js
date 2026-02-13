let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function displayContacts() {
    let list = document.getElementById("contactList");
    list.innerHTML = "";

    contacts.forEach((contact, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${contact.name} - ${contact.phone} 
        <button onclick="deleteContact(${index})">Delete</button>`;
        list.appendChild(li);
    });
}

function addContact() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || phone === "") {
        alert("Please fill all fields");
        return;
    }

    contacts.push({ name, phone });
    localStorage.setItem("contacts", JSON.stringify(contacts));

    displayContacts();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    displayContacts();
}

displayContacts();
