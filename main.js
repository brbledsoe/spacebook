var SpacebookApp = function () {
  var posts = [
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]}
  ];

  // the current class to assign to a post
  var currentId = 0;

  var createPost = function (text) {
    var post = {
      text: text,
      id: currentId,
      comments: []
    }

    currentId += 1;

    posts.push(post);
  }

  var newComObj = function (text) {
    var comment = {
      text: text
    }

    return comment;
  }

  // me create comment
  var newComment = function (creComBtn) {
    var text = $(creComBtn).prev().val();
    var nw_comment = newComObj(text);
    // console.log(nw_comment);

    // find closest post id in DOM
    var id = $(creComBtn).closest('.post').data().id;

  // find index of that id in the array
    var post = _findPostById(id);

    // push this new object to the specific index in the array
    post.comments.push(nw_comment);

    console.log(posts);

  // RENDER THIS COMMENT TO THE PAGE
  
  }

  // me funny rendering comments without for loop, but gets erased ery time press new post because of posts.empty
  var renderComments = function (creComBtn) {
    var text = $(creComBtn).prev().val();

    // find closest post id in DOM
    var id = $(creComBtn).closest('.post').data().id;
    // find the comments-list section
    var commentsList = $('[data-id=' + id + '] section');
    // append the text to that specific comments-list secti
    commentsList.append('<div>' + text + '</div>');

  }

  var $posts = $('.posts');

  var renderPosts = function () {
    $posts.empty();

    for (var i = 0; i < posts.length; i += 1) {
      var post = posts[i];

      var commentsContainer = '<div class="comments-container"> <section class="comments-list"></section>' +
      '<input type="text" class="comment-name">' +
      '<button class="btn btn-primary add-comment">Post Comment</button> </div>';

      $posts.append('<div class="post" data-id=' + post.id + '>'
        + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
        commentsContainer + '</div>');
    }
  }

  var _findPostById = function (id) {
    for (var i = 0; i < posts.length; i += 1) {
      if (posts[i].id === id) {
        return posts[i];
      }
    }
  }

  var removePost = function (postButton) {
    // important code vvv
    var $clickedPost = $(postButton).closest('.post');
    var id = $clickedPost.data().id;
    // ^^^^^^^^^^

    var post = _findPostById(id);

    // removed from array vv
    posts.splice(posts.indexOf(post), 1);
    // removed from the dom vv
    $clickedPost.remove();
  }

  var toggleComments = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.post');
    $clickedPost.find('.comments-container').toggleClass('show');
  }

  return {
    createPost: createPost,
    renderPosts: renderPosts,
    removePost: removePost,

    // TODO: Implement
    // createComment: createComment,

    // TODO: Implement
    // renderComments: renderComments,

    // TODO: Implement
    // removeComment: removeComment,
    toggleComments: toggleComments,
    newComment: newComment,
    renderComments: renderComments

  }
}

var app = SpacebookApp();

// immediately invoke the render method
app.renderPosts();

// Events
$('.add-post').on('click', function (e) {
  e.preventDefault();

  var text = $('#post-name').val();
  app.createPost(text);
  app.renderPosts();
});

$('.posts').on('click', '.remove', function () {
  app.removePost(this);
});

$('.posts').on('click','.show-comments', function () {
  app.toggleComments(this);
});

// me add comment
$('.posts').on('click', '.add-comment', function (e) {
  e.preventDefault();
  console.log("clicked");

  app.newComment(this);
  app.renderComments(this);
  

  // find Id
  // render to array

  
});