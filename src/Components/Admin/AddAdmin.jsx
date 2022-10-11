import { useForm } from 'react-hook-form';
import AdminService from '../Services/AdminService';
import { Link } from 'react-router-dom';
import "../Admin/style.css"
function AddAdmin() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const saveAdmin = data => {
        AdminService.saveAdmin(data).then(Response => {
            alert("Added Successfully")
        })
    }

    return (

        <div>                
            <Link to="/admin"><button className="btn btn-success"><i className="fa fa-arrow-left"></i> Back</button></Link>
            <div align="center" className="flex-wrapper">
            
                <h3>Register Admin</h3>
                <br></br>
                <div className="container form body form-body " >
                    <form onSubmit={handleSubmit(saveAdmin)}>
                        <input type="text" name="userName" placeholder="User Name" className="form-control"
                            {...register("userName", { required: true, minLength: 3, maxLength: 20 })} />
                        {errors.userName && errors.userName.type === 'required' && <span className='error'>User Name is Required</span>}
                        {errors.userName && errors.userName.type === 'minLength' && <span className='error'>User Name should not be less than 3 charcters</span>}
                        {errors.userName && errors.userName.type === 'maxLength' && <span className='error'>User Name should not be more than 20 charcters</span>}

                        <input type="password" name="password" placeholder="Password" className="form-control"
                            {...register("password", { required: true, minLength: 4, maxLength: 20 })} />
                        {errors.password && errors.password.type === 'required' && <span className='error'>Password is Required</span>}
                        {errors.password && errors.password.type === 'minLength' && <span className='error'>Password must not contain less than 4 charcters</span>}
                        {errors.password && errors.password.type === 'maxLength' && <span className='error'>Password must not contain more than 20 charcters</span>}

                        <input type="email" name="email" placeholder="Email" className="form-control"
                            {...register("email", { required: true, pattern: { value: /\S+@\S+/ } })} />
                        {errors.email && errors.email.type === 'required' && <span className='error'>Email is Required</span>}
                        {errors.email && errors.email.type === 'pattern' && <span className='error'>Email must be in xxxx@xxx.com</span>}

                        <input type="text" name="mobile" placeholder="Phone Number" className="form-control"
                            {...register("mobile", { required: true, pattern: { value: /\d{3}-\d{3}-\d{4}/ } })} />
                        {errors.mobile && errors.mobile.type === 'required' && <span className='error'>Phone Number is Required</span>}
                        {errors.mobile && errors.mobile.type === 'pattern' && <span className='error'>Phone Number  must be in xxx-xxx-xxxx</span>}

                        <input type="text" name="address" placeholder="Address" className="form-control"
                            {...register("address", { required: true })} />

                        <br></br><button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default AddAdmin;