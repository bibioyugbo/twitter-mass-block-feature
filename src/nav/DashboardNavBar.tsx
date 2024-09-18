import notifImg from "../../assets/images/notif.png";
import logo from "../../assets/images/logo.png";
import profileImg from "../../assets/images/empty-img.svg";
import {useSelector} from "react-redux";
import {AuthState} from "../../store/modules/auth.ts";
import {useState} from "react";
import {BaseNavLink} from "./BaseNavLink.tsx";
import {RouteConstant} from "../../util/constant/RouteConstant.ts";
import dashboardImg from "../../assets/images/category-2.svg";
import dashboardImg2 from "../../assets/images/category-3.svg";
import userOctagon from "../../assets/images/user-octagon.svg";
import userOctagon2 from "../../assets/images/user-octagon2.svg";
import noteImg from "../../assets/images/note.svg";
import noteImg2 from "../../assets/images/note2.svg";
import bookImg from "../../assets/images/book.svg";
import bookImg2 from "../../assets/images/book2.svg";
import setting from "../../assets/images/setting.svg";
import setting2 from "../../assets/images/setting-2.svg";
import sendImg from "../../assets/images/Question.png";
import logoutImg from "../../assets/images/logout.svg";


export default function DashboardNavBar() {

    const authState = useSelector<any>((state)=> state.auth) as AuthState
    const [showSide, setShowSide] = useState(false)

    function openSideBar(){
        setShowSide(!showSide)
    }

    return(
        <>
            <div style={{display:"none"}} className={"mobile-dashboard-nav"}>
                <div className={"mobile-dashboard-nav-left"}>
                    <a onClick={openSideBar}>
                        <svg style={{width:"45px",height:"45px"}} width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                                <path
                                    d="M27.6578 3.33325H13.6911C7.62448 3.33325 4.00781 6.94992 4.00781 13.0166V26.9666C4.00781 33.0499 7.62448 36.6666 13.6911 36.6666H27.6411C33.7078 36.6666 37.3245 33.0499 37.3245 26.9833V13.0166C37.3411 6.94992 33.7245 3.33325 27.6578 3.33325Z"
                                    fill="white"/>
                                <path
                                    d="M36.8245 13.0152V13.0166V26.9833C36.8245 29.9172 35.9519 32.1987 34.4043 33.7464C32.8566 35.294 30.575 36.1666 27.6411 36.1666H13.6911C10.7573 36.1666 8.47582 35.294 6.92825 33.7445C5.38062 32.1949 4.50781 29.9092 4.50781 26.9666V13.0166C4.50781 10.0827 5.38041 7.8011 6.92803 6.25347C8.47566 4.70585 10.7572 3.83325 13.6911 3.83325H27.6578C30.5918 3.83325 32.8732 4.70589 34.4186 6.25325C35.9639 7.80051 36.8325 10.0816 36.8245 13.0152Z"
                                    stroke="#2EC4B6" stroke-opacity="0.1"/>
                            </g>
                            <path
                                d="M29.0026 13.75H12.3359C11.6526 13.75 11.0859 13.1833 11.0859 12.5C11.0859 11.8167 11.6526 11.25 12.3359 11.25H29.0026C29.6859 11.25 30.2526 11.8167 30.2526 12.5C30.2526 13.1833 29.6859 13.75 29.0026 13.75Z"
                                fill="#8E92BC"/>
                            <path
                                d="M29.0026 21.25H12.3359C11.6526 21.25 11.0859 20.6833 11.0859 20C11.0859 19.3167 11.6526 18.75 12.3359 18.75H29.0026C29.6859 18.75 30.2526 19.3167 30.2526 20C30.2526 20.6833 29.6859 21.25 29.0026 21.25Z"
                                fill="#8E92BC"/>
                            <path
                                d="M29.0026 28.75H12.3359C11.6526 28.75 11.0859 28.1833 11.0859 27.5C11.0859 26.8167 11.6526 26.25 12.3359 26.25H29.0026C29.6859 26.25 30.2526 26.8167 30.2526 27.5C30.2526 28.1833 29.6859 28.75 29.0026 28.75Z"
                                fill="#8E92BC"/>
                        </svg>
                    </a>
                    {showSide && <div className={"chooselife-mobile-sidebar"}>
                        <div className={"chooselife-nav-sidebar-heading"}>
                            <div className={"chooselife-nav-sidebar-logo"}>
                                <img src={logo}/>
                            </div>
                            <a onClick={()=>setShowSide(false)} className={"chooselife-nav-sidebar-back"}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                        <path
                                            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                                            fill="#2EC4B6" fill-opacity="0.25"/>
                                        <path
                                            d="M21.49 7.80863V7.81V16.19C21.49 17.9106 20.9791 19.2238 20.0964 20.1064C19.2138 20.9891 17.9006 21.5 16.18 21.5H7.81C6.08945 21.5 4.77634 20.9891 3.89377 20.1054C3.01114 19.2217 2.5 17.9059 2.5 16.18V7.81C2.5 6.08944 3.01093 4.77618 3.89355 3.89355C4.77618 3.01093 6.08944 2.5 7.81 2.5H16.19C17.9107 2.5 19.2237 3.01097 20.105 3.89333C20.9861 4.77559 21.4947 6.08838 21.49 7.80863Z"
                                            stroke="#2EC4B6" stroke-opacity="0.1"/>
                                    </g>
                                    <path
                                        d="M13.2619 16.2799C13.0719 16.2799 12.8819 16.2099 12.7319 16.0599L9.20188 12.5299C8.91188 12.2399 8.91188 11.7599 9.20188 11.4699L12.7319 7.93991C13.0219 7.64991 13.5019 7.64991 13.7919 7.93991C14.0819 8.22991 14.0819 8.70991 13.7919 8.99991L10.7919 11.9999L13.7919 14.9999C14.0819 15.2899 14.0819 15.7699 13.7919 16.0599C13.6519 16.2099 13.4619 16.2799 13.2619 16.2799Z"
                                        fill="#8E92BC"/>
                                </svg>

                            </a>
                        </div>
                        <div className={"side-bar-wrapper"}>

                            <div className={"sidebar-items"}>

                                <BaseNavLink isClicked={window.location.pathname === RouteConstant.dashboard.home.path}
                                             whiteIcon={dashboardImg} leftIcon={dashboardImg2}
                                             to={RouteConstant.dashboard.home.path}>Overview</BaseNavLink>
                                <BaseNavLink isClicked={window.location.pathname.includes('hra')}
                                             whiteIcon={userOctagon}
                                             leftIcon={userOctagon2} to={RouteConstant.dashboard.hra.path}>Health Risk
                                    Assessment</BaseNavLink>
                                <BaseNavLink isClicked={window.location.pathname.includes('reports')}
                                             whiteIcon={noteImg}
                                             leftIcon={noteImg2}
                                             to={RouteConstant.dashboard.reports.path}>Reports</BaseNavLink>
                                <BaseNavLink isClicked={window.location.pathname.includes('library')}
                                             whiteIcon={bookImg}
                                             leftIcon={bookImg2}
                                             to={RouteConstant.dashboard.library.path}>Library</BaseNavLink>
                                <BaseNavLink
                                    isClicked={window.location.pathname === RouteConstant.dashboard.settings.path}
                                    whiteIcon={setting} leftIcon={setting2}
                                    to={RouteConstant.dashboard.settings.path}>Settings</BaseNavLink>


                            </div>
                            <div className={"sidebar-help"}>
                                <div className={"sidebar-help-icon"}>
                                    <img src={sendImg}/>
                                </div>
                                <div className={"sidebar-help-text"}>
                                    <div className={"sidebar-help-text-1"}>
                                        Help Center
                                    </div>
                                    <div className={"sidebar-help-text-2"}>
                                        Having trouble?
                                        Please contact us for more questions.
                                    </div>

                                </div>
                                <button className={"sidebar-help-btn"}>
                                    Go To Help Center
                                </button>

                            </div>
                            <button onClick={() => window.location.pathname = "/login"} className={"log-out"}>

                                <img src={logoutImg}/>
                                <div className={"logout-text"}>Log out</div>

                            </button>


                        </div>
                    </div>
                    }
                    <div className={"chooselife-header-left"}>
                        <div className={"chooselife-header-name capitalize"}>
                            Hi,
                            {!authState.userDetailsInfo.userFirstName && !authState.userDetailsInfo.userLastName ? " " : " " + authState.userDetailsInfo.userFirstName + "  " + authState.userDetailsInfo.userLastName}👋🏽
                        </div>
                        <div className={"chooselife-header-secondary"}>
                            Have you taken a test today?
                        </div>
                    </div>
                </div>
                <a className={"mobile-dashboard-nav-right"}>
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="52" height="52" rx="26" fill="white"/>
                        <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#2EC4B6" stroke-opacity="0.1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12.8373 29.9785V29.6135C12.8909 28.5337 13.2369 27.4874 13.8399 26.5826C14.8434 25.4957 15.5304 24.1638 15.8288 22.7265C15.8288 21.6158 15.8288 20.4891 15.9258 19.3783C16.4271 14.0306 21.7147 10.3333 26.9377 10.3333H27.0671C32.29 10.3333 37.5777 14.0306 38.0951 19.3783C38.1921 20.4891 38.0951 21.6158 38.176 22.7265C38.4783 24.1671 39.1646 25.5032 40.1649 26.5985C40.7723 27.4953 41.119 28.5377 41.1674 29.6135V29.9626C41.2035 31.4133 40.7039 32.828 39.7606 33.9456C38.5142 35.2524 36.8228 36.0654 35.0066 36.2306C29.6809 36.8019 24.3077 36.8019 18.982 36.2306C17.1678 36.0582 15.4789 35.2464 14.2279 33.9456C13.2993 32.8271 12.8063 31.4209 12.8373 29.9785Z"
                              stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M22.9297 41.7529C23.7618 42.7974 24.9838 43.4733 26.3252 43.6312C27.6666 43.789 29.0167 43.4157 30.0769 42.594C30.403 42.3509 30.6964 42.0683 30.9501 41.7529"
                            stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="37.0026" cy="15.3334" r="6.66667" fill="#FF4D5E"/>
                    </svg>
                </a>
            </div>
            <div className={"chooselife-dashboard-header w-full"}>
                <div className={"chooselife-header-left"}>
                    <div className={"chooselife-header-name capitalize"}>
                        Hi,
                        {!authState.userDetailsInfo.userFirstName && !authState.userDetailsInfo.userLastName ? " " : " " + authState.userDetailsInfo.userFirstName + "  " + authState.userDetailsInfo.userLastName}👋🏽


                    </div>
                    <div className={"chooselife-header-secondary"}>
                        Have you taken a test today?
                    </div>
                </div>
                <div className={"chooselife-header-right"}>
                    <div className={"chooselife-notification"}>
                        <img src={notifImg}/>
                    </div>
                    <div className={"chooselife-profile-pic"}>
                        <img src={profileImg} width={52} height={52}/>
                    </div>
                </div>
            </div>

        </>
    )
}