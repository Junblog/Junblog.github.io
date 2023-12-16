var posts=["posts/4a17b156.html","posts/fd71581c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };