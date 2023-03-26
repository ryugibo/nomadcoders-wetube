const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteBtns = document.getElementsByClassName("deleteBtn");

console.log(deleteBtns);

const deleteComment = (id) => {
  const videoComments = document.querySelector(".video__comments ul");

  for (var videoComment of videoComments.children) {
    if (videoComment.dataset.id !== id) {
      continue;
    }
    videoComments.removeChild(videoComment);
  }
};
const handleDelete = async (e) => {
  const {
    srcElement: {
      parentElement: {
        dataset: { id },
      },
    },
  } = e;
  const videoId = videoContainer.dataset.id;
  const response = await fetch(`/api/videos/${videoId}/comment/${id}`, {
    method: "DELETE",
  });
  if (response.status === 201) {
    const { deleteCommentId } = await response.json();
    deleteComment(deleteCommentId);
  }
  console.log(e);
};

console.log(deleteBtns);
for (var deleteBtn of deleteBtns) {
  console.log(deleteBtn);
  deleteBtn.addEventListener("click", handleDelete);
}

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  const span2 = document.createElement("span");
  span2.innerText = "❌";
  span2.addEventListener("click", handleDelete);
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};
if (form) {
  form.addEventListener("submit", handleSubmit);
}
