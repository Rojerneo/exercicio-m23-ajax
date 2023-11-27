document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.querySelector('#avatar');
    const profileName = document.querySelector('#name');
    const profileUserName = document.querySelector('#username');
    const repository = document.querySelector('#repository');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const profileLink = document.querySelector('#link')

    fetch('https://api.github.com/users/rojerneo')
    .then(function(res) {
        return res.json();
    })

    .then(function(json) {
        profileAvatar.src = json.avatar_url;
        profileName.innerHTML = json.name;
        profileUserName.innerHTML = json.login;
        repository.innerHTML = json.public_repos;
        followers.innerHTML = json.followers;
        following.innerHTML = json.following;
        profileLink.href = json.html_url;
    })
})