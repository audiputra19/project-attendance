import notFound from '../Assets/Images/delete.png';

export const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            {/* <div className="text-gray-500"><MessageCircleWarning size={64}/></div> */}
            <div>
                <img src={notFound} alt="empty" className="w-32"/>
            </div>
            <div className="font-semibold text-gray-500">Data Not Found</div>
        </div>
    )
}