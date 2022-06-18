/* <form class="signup-page">
    <div> 
        <label for="username-signup">Username</label>
        <input type="text" id="username-signup"/>
    </div>

    <div> 
        <label for="email-signup">Email</label>
        <input type="text" id="email-signup"/>
    </div>

    <div> 
        <label for="password-signup">Password</label>
        <input type="text" id="password-signup"/>
    </div>

    <div>
        <button type="submit">Join Our Cult</button>
    </div>
</form> */

function signupFormHandler(event) {
    event.preventDefault ();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username && email && password) {
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify ({
                username,
                email,
                password
            }),

            headers: {'Content-Type': 'application/json'}
        }).then((response) => {console.log(response)})
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
