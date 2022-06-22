<form class="login-page">
    <div>
        <label for="username-login">Username</label>
        <input type="text" id="username-login" />
    </div>

    <div>
        <label for="password-login">Password</label>
        <input type="text" id="password-login" />
    </div>

    <div>
        <button type="submit">Join Our Cult</button>
    </div>
</form>

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);