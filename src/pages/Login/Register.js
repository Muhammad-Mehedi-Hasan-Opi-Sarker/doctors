import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Lodding';
import { Link } from 'react-router-dom';

const Register = () => {
     // google auth 
     const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
     // email and password 
     const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
 
     //  react hook form 
     const { register, formState: { errors }, handleSubmit } = useForm();
     const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password);
        console.log(data)
     };
 
     let errorElement;
 
     if (user || guser) {
         console.log(user)
     }
 
     if (error || gerror) {
         errorElement = <p className='text-red-500'><small>{error?.message || error?.message}</small></p>
     }
 
     if (loading || gloading) {
         return <Loading></Loading>
     }
     
    return (
        <div className='lg:ml-96 mt-12 mb-14'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 class="text-5xl font-bold">Sign Up!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="name"
                                placeholder="Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Provide a valid name'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Password</span>
                            </label>
                            <input type="password"
                                placeholder="Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 character'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input />
                        {errorElement}
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='SignUp' />
                    </form>
                </div>
                <p>Already Have an account?<Link className='text-primary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <div>
                    <button onClick={() => { signInWithGoogle() }} className="btn btn-outline btn-secondary">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;