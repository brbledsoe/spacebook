var posts = [];
var ranId = 0;

$('.add-post').on('click', function (e) {
  e.preventDefault();
  var input = $('#post-name').val();

  addPost(input, ranId);
  ranId += 1;
  
  appendPosts();

  removePost();

});

var removePost = function () {
  $('.post').click(function () {
    var data = $(this).data().id;

    for ( i = 0; i < posts.length; i++ ) {
      if(data === posts[i].id){
        posts.splice(posts[i].id, 1);
      }
    }
    
    $(this).remove();
  });
}

var addPost = function (text, id) {
  var post = {
    text: text,
    id: id
  }

  posts.push(post);
};

var appendPosts = function () {
  $('.posts').find('p').remove();

  for ( i = 0; i < posts.length; i++ ) {
    $('.posts').append("<p class ='post' data-id='" + posts[i].id + "'><a href='#' class='remove'>remove</a>" + "    " + posts[i].text + "</p>");
    }
  
};


// first concatination for addAllPosts
// "<p>" + posts[i].text + "</p>"

// second concatination for addAllPosts
// "<p class ='post' data-id='" + posts[i].id + "'>" + posts[i].text + "</p>"

// third concatination for addAllPosts Exercise 3
// '<p class="post" data-id="' + posts[i].id + '">' + '<a href="#" class="remove">remove</a>' + post[i].text + '</p>'

// ^^^^^ SUCCESS! ALL WORKED ^^^^^



