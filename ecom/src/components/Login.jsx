import React from 'react'

function Login() {
    return (
        <div>
            <h1 class="text-center pt-2">Login</h1>
            <hr/>
            <form className="m-auto p-4">
                <div class="row ">
                    <div class="col pb-2">
                        <input type="text" class="form-control" placeholder="Username" />
                    </div>
                </div>
                <div class="row">
                    <div class="col mb-5">
                        <input type="text" class="form-control" placeholder="Password" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button class="btn btn-primary" type="submit">Sign In</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Login;