import './App.css';
export default Login;

function Login() {
  return (
    <div className="main-container">
      {/* Left Side - Login Form */}
      <div className="left-pane">
        <form action="/action_page.php">
          <div className="row">
            <h1 style={{ textAlign: 'left', marginBottom: '30px' }}>👋heyreach</h1>
            <h1 style={{ textAlign: 'left', marginBottom: '5px' }}>Sign In</h1>
            <h3 style={{ textAlign: 'left', marginTop: '0px', fontWeight: 'normal', fontFamily: 'Times New Roman, Times, serif' }}>
              Don't have an account? <a href="/register">Sign up</a>
            </h3>

            <div className="col">
              <div className="email">
                <h3 style={{ fontWeight: 'normal' }}>Email address</h3>
              </div>
              <input
                type="text"
                name="Email address"
                placeholder="Email address"
                required
              />
              <div className="password">
                <h3 style={{ fontWeight: 'normal' }}>Password</h3>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                  <div className="checkbox" style={{ marginRight: '10px' }}>
                    <input type="checkbox" name="option1" value="Option 1" />
                  </div>
                  <div className="remember">
                    <h3 style={{ textAlign: 'left', margin: '0' }}>
                      Remember me
                      <a href="/forgot password?" style={{ marginLeft: '200px' }}>
                        Forgot password?
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <input type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>

      {/* Right Side - Video */}
      <div className="right-pane"
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '20%', // Adjusted width
          height: '100%', // Adjusted height if necessary
        }}>
      </div>
    </div>
  );
}
