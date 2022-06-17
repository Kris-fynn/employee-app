
import {Link} from 'react-router-dom'
function Singin() {
    return (
           <div><h1>Employee Singin</h1>
              <form role="form" onsubmit="signIn(event);" autocomplete="off">
            <div class="form-group">
                <input type="email" name="email" id="email" placeholder="Email Address" required/>
            </div>
            <div class="form-group">
                <input type="password" name="pwd" id="pwd" placeholder="Password" required/>
            </div>
            <div class="form-group">
                <button type="submit">Sign In</button>
            </div>
            <span><p>Don't have an account? <Link to="/registration" >Registration here</Link></p>
        </span>
        </form>
           </div> 
           
        );
     }
export default Singin;