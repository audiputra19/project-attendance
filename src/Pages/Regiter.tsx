import { AtSign, Eye, EyeOff, LockKeyhole, User } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Components/Alert";
import Loading from "../Components/Loading";
import { useAlert } from "../Context/AlertContext";
import { useRegisterMutation } from "../services/users";

const Register: FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const {showAlert} = useAlert();
    const navigate = useNavigate();
    const [register, {data, isSuccess, isLoading, error}] = useRegisterMutation();
    const [form, setForm] = useState({
        nik: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    // console.log(form)

    useEffect(() => {
        if (isSuccess && data) {
            showAlert(data.message);
            navigate('/auth');
        } else if (error) {
            const message = (error as any)?.data?.message;
            showAlert(message);
        }
    }, [data, isSuccess, error, navigate, showAlert]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        isLoading 
        ? ( <Loading/> ) 
        : (
            <div className="px-5 pb-5 pt-10 w-full sm:mx-12 md:w-3/4 lg:w-1/2">
                <Alert/>
                <div>
                    <p className="text-2xl font-semibold dark:text-white">Register
                        <span className="text-color-base pl-1 text-4xl">.</span>
                    </p>
                </div>
                <div className="relative">
                    <div className="mt-5">
                        <div className="absolute text-gray-500 left-0 p-4 dark:text-white">
                            <User/>
                        </div>
                        <input
                            type="text"
                            className="w-full pl-14 pr-4 py-4 text-gray-500 rounded-xl bg-gray-100 dark:bg-dark-second dark:text-white"
                            placeholder="NIK"
                            value={form.nik}
                            onChange={e => 
                                setForm(prev => ({
                                    ...prev,
                                    nik: e.target.value
                                }))
                            }
                        />
                    </div>
                    <div className="mt-3">
                        <div className="absolute text-gray-500 left-0 p-4 dark:text-white">
                            <AtSign/>
                        </div>
                        <input
                            type="text"
                            className="w-full lowercase pl-14 pr-4 py-4 text-gray-500 rounded-xl bg-gray-100 dark:bg-dark-second dark:text-white"
                            placeholder="Email"
                            value={form.email}
                            onChange={e =>
                                setForm(prev => ({
                                    ...prev,
                                    email: e.target.value
                                }))
                            }
                        />
                    </div>
                    <div className="mt-3 flex">
                        <div className="absolute text-gray-500 left-0 p-4 dark:text-white">
                            <LockKeyhole/>
                        </div>
                        <input
                            type={showPassword ? `text` : `password`}
                            className="w-full pl-14 pr-14 py-4 text-gray-500 rounded-xl bg-gray-100 dark:bg-dark-second dark:text-white"
                            placeholder="Password"
                            value={form.password}
                            onChange={e => 
                                setForm(prev => ({
                                    ...prev, 
                                    password: e.target.value
                                }))
                            }
                        />
                        <div className="absolute text-gray-500 right-0 p-4 dark:text-white cursor-pointer" onClick={togglePasswordVisibility}>
                            {showPassword ? <EyeOff/> : <Eye/>}
                        </div>
                    </div>
                    <div className="mt-3 flex">
                        <div className="absolute text-gray-500 left-0 p-4 dark:text-white">
                            <LockKeyhole/>
                        </div>
                        <input
                            type={showConfirmPassword ? `text` : `password`}
                            className="w-full pl-14 pr-14 py-4 text-gray-500 rounded-xl bg-gray-100 dark:bg-dark-second dark:text-white"
                            placeholder="Confirm Password"
                            value={form.confirmPassword}
                            onChange={e => 
                                setForm(prev => ({
                                    ...prev, 
                                    confirmPassword: e.target.value
                                }))
                            }
                        />
                        <div className="absolute text-gray-500 right-0 p-4 dark:text-white cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <EyeOff/> : <Eye/>}
                        </div>
                    </div>
                    <div className="mt-5">
                        <button 
                            type="submit"
                            className="w-full px-5 py-4 bg-color-base text-white rounded-xl font-bold hover:bg-color-baseHover"
                            onClick={() => register(form)}
                        >
                            Register
                        </button>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <p className="text-gray-400 text-sm">Already have an account?</p>
                        <p 
                            className="ml-2 font-semibold text-color-base cursor-pointer"
                            onClick={() => navigate('/auth')}
                        >
                            Login
                        </p>
                    </div>
                </div>
            </div>
        )
    )
}

export default Register;