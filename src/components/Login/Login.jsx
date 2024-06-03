import React, { useState } from 'react'; // Import useState for handling form input

export default function Login() {
  const [username, setUsername] = useState(''); // State variable for username
  const [password, setPassword] = useState(''); // State variable for password

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement logic to handle login (e.g., send login request to server)
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear form fields after submission (optional)
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}