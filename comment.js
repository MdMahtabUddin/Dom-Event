// PH-25.5
// add button Event handler 
document.getElementById('submit-button').addEventListener('click',function(){
    // console.log('clicked');
    // get user comment 
const commentBox = document.getElementById('new-comment')
// console.log(commentBox);
// create comment paragraph 
const newComment = document.createComment('p');
// writeComment.innerText = commentBox.value;
newComment.innerText =commentBox.value; 

// console.log(writeComment);

const commentContainer =document.getElementById('comment-container');
commentContainer.appendChild(newComment);

// console.log(commentContainer);

commentBox.value = '';

})