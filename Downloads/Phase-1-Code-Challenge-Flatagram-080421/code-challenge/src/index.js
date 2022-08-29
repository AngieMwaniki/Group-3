const cardImage = document.getElementById("card-image");
const cardTitle = document.getElementById("card-title");
const likeCount= document.getElementById("like-count");
const listComments = document.getElementById("comments-list");
const likeButton = document.getElementById("like-button");
listComments.innerHTML = "";
const inputField = document.getElementById("comment-input");
let like;
let images = [];

const getImages = () => {
  return fetch("http://localhost:3000/images").then((response) =>
    response.json()
  );
};

function updateUI() {
  images.forEach((image) => {
    cardTitle.textContent = image.title;
    cardImage.src = image.image;
    likeCount.textContent = `${image.likes} likes`;
  });
}
function showCommentOnDOM(comment) {
  const commentList = document.createElement("li");
  commentList.textContent = comment.content;
  listComments.append(commentList);
}
function updateComments() {
  usercomments.forEach((comment) => {
    const commentList = document.createElement("li");
    commentList.textContent = comment.content;
    listComments.append(commentList);
  });
}
likeButton.addEventListener("click", () => {
  like = images[0].likes;
  if (likeButton.textContent === "♥") {
    likeButton.textContent = "♡";
    like = like - like;
  } else {
    likeButton.textContent = "♥";
    like++;
  }
  likeCounter.textContent = `${like} likes`;
});
let usercomments = [];
const getComments = () => {
  return fetch("http://localhost:3000/comments").then((response) =>
    response.json()
  );};


document.addEventListener("DOMContentLoaded", async () => {
  images = await getImages();
  console.log(images[0].likes);
  updateUI(images);
  usercomments = await getComments();
  updateComments(usercomments);



  form.addEventListener("submit", (e) => {
    e.preventDefault();
    postComments(e.target.comment.value);
  });
}); 
