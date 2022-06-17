import './css/registration.css'
import {Link} from 'react-router-dom'
function Registration() {
 

    return (
           <div><h1>Employee Registration</h1>
            <form role="formData" onsubmit="signUp(event);" autocomplete="off">
            <div class="form-group">
                <input type="number" name="enumber" id="ename" placeholder="Employee number" required/>
            </div>
            <div class="form-group">
                <input type="text" name="fname" id="fname" placeholder="First Name" required/>
            </div>
            <div class="form-group">
                <input type="text" name="lname" id="lname" placeholder="Last Name" required/>
            </div>
            <div class="form-group">
                <input type="phoneNumber" name="phoneNumber" id="phoneNumbe" placeholder="Employee phone number" required/>
            </div>
            <div class="form-group">
                <input type="file" name="image" id="image" />
            </div>
            
            <div class="form-group">
                <input type="email" name="email" id="email" placeholder="Email Address" required/>
            </div>
            <div class="form-group">
                <input type="password" name="pwd" id="pwd" placeholder="Password" required/>
            </div>
            <div class="form-group">
                <input type="password" name="pwd" id="pwd" placeholder="Comfirm Password" required/>
            </div>
            <div class="form-group">
                <button type="submit" onClick={Registration}>Sign Up</button>
            </div>
            <span><p>Already a member? <Link to="/" >Sign In here</Link></p></span>
            
          </form>
        </div>
           
        );
     }
export default Registration;