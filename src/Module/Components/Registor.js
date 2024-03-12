import React,{ useRef } from 'react'
import { useForm } from 'react-hook-form'
const myarray = [];
function Registor() {
    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const mysubmmit = (alldata) => {
        console.log(alldata);
        myarray.push(alldata);
        localStorage.setItem("userdata", JSON.stringify(myarray));
    }
    return (
        <form onSubmit={handleSubmit(mysubmmit)}>
            <div className='container page border p-5 shadow bg-dark'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center text-danger'>registor page</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 p-3 text-primary'>
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control"{...register("fullname", { required: true })} />
                        {errors.fullname && <span className='text-danger'>full name is required</span>}
                    </div>
                    <div className='col-md-6 p-3 text-primary'>
                        <label className="form-label">Email id</label>
                        <input type="email" className="form-control"{...register("email", { required: true })} />
                        {errors.email && <span className='text-danger'>email is required</span>}
                    </div>
                    <div className='col-md-6 p-3 text-primary'>
                        <label className="form-label">Phone No</label>
                        <input type="text" className="form-control"{...register("phone")} />
                    </div>
                    <div className='col-md-6 p-3 text-primary'>
                        <label className="form-label">Gender</label>
                        <select className="form-control" {...register("grender")}>
                            <option hidden>gender</option>
                            <option>male</option>
                            <option>female</option>
                            
                           
                            

                        </select>
                    </div>
                    <div className='col-md-6 p-3 text-primary'>
                        <label className="form-label">Create Password</label>
                        <input type="password" className="form-control"{...register("pass", { required: true })}/>
                        {errors.pass && <p>{errors.pass.message}</p>}
                    </div>
                    <div className='col-md-6 p-3 text-primary'>
                        <label className="form-label">Confirm Password</label>
                        <input type="password" class="form-control"{...register("cpass", { required: true ,
                        validate: value =>
               value === password.current || "The passwords do not match"
            })}/>
            {errors.cpass && <p>{errors.cpass.message}</p>}
          
                       
                    </div>
                    <div className='row justify-content-center'>
                    <div className='col-md-6 p-3 text-primary text-center'>
                        <label className="form-label">Remarks</label>
                        <textarea className='form-control' defaultValue="type text"{...register("remark")}></textarea>
                        {errors.remark && <span className='text-danger'>remark required</span>}
                    </div>
                    </div>
                    <div className='col-md-12 p-3 text-center'>
                        <button type='submit' className='btn btn-success'> Submit</button>
                        <button type='button' className='btn btn-danger ms-3'> Cancel</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Registor