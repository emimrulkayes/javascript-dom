document.getElementById('add-border').addEventListener('click', function() {
    const container = document.getElementById('friend-container');
    container.style.border = '2px solid red';
    container.style.padding = '10px'
})

function addBgColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
        friend.style.padding = '5px';
        friend.style.marginBottom = '10px';
    }
}

document.getElementById('add-friend').addEventListener('click', function() {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Ratione, rerum.</p>
    `
    container.appendChild(friendDiv);

})