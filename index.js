const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const container = document.getElementsByClassName("my-container")[0];
posts.forEach(function (post) {
  container.innerHTML += `
        <div class="post"> 
            <div class="header ${post.classHeader}">
                <img class="avatar" src="${post.avatar}">
                <div>
                    <div><span class="name">${post.name}</span></div>
                    <span class="location">${post.location}</span>
                </div>
            </div>
            <div>
                <img class="img" src="${post.post}">
            </div>
            <div class="icons">
                <img src="images/icon-heart.png"  class="img-size">
                <img src="images/icon-comment.png" class="img-size">
                <img src="images/icon-dm.png" class="img-size">
            </div>
            <div class="info">
                <p>${post.likes} likes</p>
                <p class="info-about"><strong>${post.username}</strong> ${post.comment}</p>
            </div>
        </div>
    `;
});

console.log(container.innerHTML)
