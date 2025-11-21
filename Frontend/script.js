const form = document.getElementById("appointmentForm");
const userList = document.getElementById("userList");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();

    if (!name || !email || !number) {
        alert("All fields are required.");
        return;
    }

    try {
        const res = await axios.post("http://localhost:5000/api/users/add", { name, email, number });
        if (res.data.success) {
            alert(`Appointment booked for ${res.data.user.name}`);
            form.reset();
            fetchUsers();
        } else {
            alert("Failed to book appointment.");
        }
    } catch (err) {
        console.error(err);
        alert("Server error!");
    }
});

async function fetchUsers() {
    try {
        const res = await axios.get("http://localhost:5000/api/users/get");
        if (res.data.success) {
            userList.innerHTML = "";
            res.data.users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = `${user.name} - ${user.email} - ${user.number}`;

                const delBtn = document.createElement("button");
                delBtn.textContent = "Delete";
                delBtn.style.marginLeft = "10px";
                delBtn.addEventListener("click", () => deleteUser(user.id, li));

                li.appendChild(delBtn);
                userList.appendChild(li);
            });
        }
    } catch (err) {
        console.error(err);
    }
}

async function deleteUser(id, li) {
    try {
        const res = await axios.delete(`http://localhost:5000/api/users/delete/${id}`);
        if (res.data.success) {
            li.remove();
        } else {
            alert("Could not delete user.");
        }
    } catch (err) {
        console.error(err);
    }
}

// Fetch users on page load
window.addEventListener("DOMContentLoaded", fetchUsers);
