import { Link } from 'react-router-dom';
function SignUp(){
    return(
        <div class="container forms">
        <div class="form signup">
                <div class="form-content">
                    <header>Signup</header>
                    <form action="#">
                        <div class="field input-field">
                            <input type="text" placeholder="Name" class="input"/>
                        </div>
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input"/>
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Create password" class="password"/>
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Confirm password" class="password"/>
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                        <div class="field button-field">
                            <button>Signup</button>
                        </div>
                    </form>
                    <div class="form-link">
                        <span>Already have an account? <Link to="/Login"  class="link login-link">Login</Link></span>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default SignUp;