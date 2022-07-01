import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Lodding';
import { Link, useNavigate } from 'react-router-dom';

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
      const navigate = useNavigate();
    //   update profile for 
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
     //  react hook form 
     const { register, formState: { errors }, handleSubmit } = useForm();
     const onSubmit = async(data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name});
        navigate('/appointment');
        console.log(data);
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
            <div className="card w-fit lg:ml-32 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
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
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
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
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
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
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
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