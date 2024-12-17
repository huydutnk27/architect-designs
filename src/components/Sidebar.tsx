/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

const SidebarComponent = () => {
    const navigate = useNavigate();
    const menuItems = [
        {
            icon: <FaBeer width="20" />,
            title: 'Dashboard',
            link: '/dashboard'
        },
        {
            icon: <FaBeer width="20" />,
            title: 'Change Password',
            link: '/change-password'
        }
    ];
    const navigateToHref = (link: any) => {
        navigate(link);
    };

    return (
        <div
            className="hidden lg:block relative w-full max-w-[300px] bg-white-500  h-full border-r-[1px] border-primary border-opacity-30 shadow-sm"
            style={{ backgroundColor: 'gray' }}
        >
            {/* <img src="/sigi.png" alt="LOGO" className="w-[130px]" /> */}
            <div className="flex gap-3 justify-center items-center h-[65px] ">
                {/* <DummyLogo width={35} height={35} /> */}
                <p className="font-bold ">BRAND NAME</p>
            </div>
            <ul className="w-full px-5 py-9">
                {menuItems.map((data, index) => {
                    return (
                        <li className="mb-4 flex justify-center" key={index}>
                            <button
                                type="button"
                                onClick={() => navigateToHref(data.link)}
                                className={` w-full flex justify-start items-center px-6 py-2 rounded-[7px] hover:shadow-sm text-sub_text ${
                                    window.location.pathname == data.link
                                        ? 'bg-primary text-white shadow-sm fill-white'
                                        : 'hover:bg-primary hover:bg-opacity-10 fill-border_color'
                                } `}
                            >
                                {data.icon}
                                <span className="ml-4 text-[14px] font-semibold tracking-wider ">{data.title}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SidebarComponent;
