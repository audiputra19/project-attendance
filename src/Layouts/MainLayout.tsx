import { FileText, Fingerprint, House, IdCard, LayoutGrid, Menu, User, UserCheck } from "lucide-react";
import { FC } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export const MainLayout:FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen">
            <div className="pb-20 md:p-0 bg-white min-h-screen dark:bg-dark-main">
                <Outlet/>
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-gray-100 md:hidden lg:hidden dark:bg-dark-second">
                <div className="relative grid grid-cols-5 px-5 items-center gap-2">
                    <NavLink
                        to="/"
                        className='flex justify-center p-3 z-10 dark:text-white'>
                        {({ isActive }) => (
                            <div className="flex flex-col items-center">
                                <House className={isActive ? 'text-color-base' : 'text-gray-500 dark:text-gray-300'} />
                                <p className={`text-xs mt-1 ${isActive ? 'text-color-base' : 'text-gray-500 dark:text-gray-300'}`}>Home</p>
                            </div>
                        )}
                    </NavLink>
                    <NavLink
                        to="/report"
                        className='flex justify-center p-3 z-10 dark:text-white'>
                        {({ isActive }) => (
                            <div className="flex flex-col items-center">
                                <FileText className={isActive ? 'text-color-base' : 'text-gray-500 dark:text-gray-300'} />
                                <p className={`text-xs mt-1 ${isActive ? 'text-color-base' : 'text-gray-500 dark:text-gray-300'}`}>Report</p>
                            </div>
                        )}
                    </NavLink>
                    <div className="p-3"></div>
                    <div 
                        className="absolute flex justify-center w-full"
                        onClick={() => navigate('/attendance')}
                    >
                        <div className="p-5 mb-14 rounded-full bg-color-base text-white">
                            <UserCheck size={28}/>
                        </div>
                    </div>
                    <NavLink
                        to="/profile"
                        className='flex justify-center p-3 z-10 dark:text-white'>
                        {({ isActive }) => (
                            <div className="flex flex-col items-center">
                                <User className={isActive ? 'text-color-base' : 'text-gray-500 dark:text-gray-300'} />
                                <p className={`text-xs mt-1 ${isActive ? 'text-color-base' : 'text-gray-500 dark:text-gray-300'}`}>Profile</p>
                            </div>
                        )}
                    </NavLink>    
                    <NavLink
                        to="/menu"
                        className='flex justify-center p-3 z-10 dark:text-white'>
                        {({ isActive }) => (
                            <div className="flex flex-col items-center">
                                <LayoutGrid className={isActive ? 'text-color-base' : 'text-gray-500 dark:text-gray-300'} />
                                <p className={`text-xs mt-1 ${isActive ? 'text-color-base' : 'text-gray-500 dark:text-gray-300'}`}>Menu</p>
                            </div>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}