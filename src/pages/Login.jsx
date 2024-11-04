import "./pages.css"
const Login = () => {

  return (
    <div className="login_page">
     <div className="login_container">
       <div className="login_form">
         <h1>Login to access resources</h1>
         <form>
           <div className="form_group">
             <label htmlFor="email">Email:</label>
             <input type="email" id="email" />
           </div>
           <div className="form_group">
             <label htmlFor="password">Password:</label>
             <input type="password" id="password" />
           </div>
           <div className="form_group">
             <button type="submit">Login</button>
           </div>
         </form>
       </div>
     </div>
   </div>



  )
}

export default Login