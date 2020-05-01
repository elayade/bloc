const toggle = document.getElementById("toggle");
const postsEl = document.getElementById("posts");
const filter = document.getElementById("text");
const loader = document.querySelector(".loader");

function showPost() {
  posts.forEach((item) => {
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
      <div class="number">${item.id}</div>
      <h1 class='post-title'>${item.title}</h1>
      <p class="post-body">${item.body}</p>
      `;
    postsEl.appendChild(post);
  });
}
showPost();

function filterPosts(input) {
  const posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();
    if (
      title.indexOf(input.toUpperCase()) !== -1 ||
      body.indexOf(input.toUpperCase()) !== -1
    ) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}

// function showLoading() {
//   loader.classList.add("show");

//   setTimeout(() => {
//     loader.classList.remove("show");
//   }, 1000);
// }

toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

filter.addEventListener("input", (e) => {
  const input = e.target.value;
  filterPosts(input);
});

// window.addEventListener("scroll", () => {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//   if (scrollTop + clientHeight >= scrollHeight - 5) {
//     showLoading();
//   }
// });
