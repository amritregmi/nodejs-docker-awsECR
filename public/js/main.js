// DOM ELEMENT
const addButton = document.querySelector(".add");
const deleteButton = document.getElementsByClassName("delete");

if (addButton) {
  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    addPost(title, description);
  });
}
if (deleteButton) {
  for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function (e) {
      e.preventDefault();
      deletPost(this.dataset.id);
    });
  }
}
const addPost = async (title, description) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/posts",
      data: { title, description },
    });
    // if successfull show message
    if (response.data.status === "success") {
      showAlert("success", "Post Added");
      window.setTimeout(() => {
        location.assign("/posts");
      }, 1500);
    }
  } catch (error) {
    showAlert("error", "Some Error");
    window.setTimeout(() => {
      location.assign("/posts");
    }, 1500);
  }
};

const deletPost = async (id) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `/posts/${id}`,
    });
    // if successfull
    if (response.data.status === "success") {
      showAlert("success", "Post deleted");
      window.setTimeout(() => {
        location.assign("/posts");
      }, 1500);
    }
  } catch (error) {
    showAlert("error", "something went wrong");
    window.setTimeout(() => {
      location.assign("/posts");
    });
  }
};
// alert.js

// hides alert Box if present
const hideAlert = () => {
  const alertBox = document.querySelector(".alert");
  if (alertBox) alertBox.parentElement.removeChild(alertBox);
};
/**
 * @DESC shows alert box based on type
 * @PARAM type , message
 */
const showAlert = (type, message) => {
  hideAlert();
  const alertBox = `<div class="alert alert--${type}">${message}</div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", alertBox);
  window.setTimeout(hideAlert, 5000); // hide alert after 5 seconds
};
