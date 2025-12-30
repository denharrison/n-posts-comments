let getPostsWithComments = async (n) => {

    try {

    let posts = [];

    for (let i = 1; i <= n; i++) {

      let response = await fetch( `https://jsonplaceholder.typicode.com/posts/${i}`);
      let post = await response.json();
      posts.push(post); 

    }

    posts.forEach((post) => {

       getComment(post);

    });

    return posts;
        
    } catch (error) {
        
        console.error('Что-то пошло не так')

    }


}


let getComment = async (post) => {

      let response = await fetch(
        `https://jsonplaceholder.typicode.com/comments/`
      );
      let comments = await response.json();

      post.comments = [];

      comments.forEach((comment) => {
        if (post.userId === comment.postId) {
          post.comments.push(comment);
        }
      });

    };

getPostsWithComments(1).then(result => console.log(result))