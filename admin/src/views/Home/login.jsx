function Login(){
    return(
        <>
 <div className="login-container">
  <div className="login-box animated fadeInDown">
    <div className="login-logo" />
    <div className="login-body">
      <div className="login-title"><strong>Welcome</strong>, Please login</div>
      <form action="index.html" className="form-horizontal" method="post">
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Username" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-6">
            <a href="#" className="btn btn-link btn-block">Forgot your password?</a>
          </div>
          <div className="col-md-6">
            <button className="btn btn-info btn-block">Log In</button>
          </div>
        </div>
      </form>
    </div>
    <div className="login-footer">
      <div className="pull-left">
        © 2014 AppName
      </div>
      <div className="pull-right">
        <a href="#">About</a> |
        <a href="#">Privacy</a> |
        <a href="#">Contact Us</a>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Login