let isLiked = false;
let likeCount = 14000; 

function toggleLike() {
    const likeIcon = document.getElementById("like-icon");
    const likeCountElement = document.getElementById("like-count");

    if (isLiked) {
        likeIcon.classList.remove("liked");
        likeCount -= 1;
    } else {
        likeIcon.classList.add("liked");
        likeCount += 1;
    }
    
    likeCountElement.textContent = formatLikes(likeCount);
    isLiked = !isLiked;
}

function formatLikes(count) {
    if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'k';
    }
    return count;
}

document.querySelector('.read-more-button').addEventListener('click', function() {
    window.location.href = 'your-link-here'; 
});
let sendCount = 204;

document.querySelector('.send-button').addEventListener('click', function() {
    sendCount += 1;
    document.getElementById('send-count').textContent = sendCount;
});

