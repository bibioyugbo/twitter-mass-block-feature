
import twitterLogo from "../../assets/images/X_icon_2.svg"





export default function TwitterSideBar(){
    return(
        <>
            <div className={"twitter-sidebar"}>
                <div className={"logo"}>
                 <img src={twitterLogo} width={40} height={40}/>
                </div>
                <div className={"side-bar-items"}>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                                <path fill="white"
                                      d="M11.03 2.59a1.5 1.5 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"/>
                            </svg>
                        </div>
                        <div className={"side-bar-item-text"}>
                            Home
                        </div>
                    </div>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                <path fill="none" stroke="white" stroke-linecap="round" stroke-width="2"
                                      d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"/>
                            </svg>

                        </div>
                        <div className={"side-bar-item-text"}>
                            Explore
                        </div>
                    </div>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                                <path fill="white"
                                      d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742c-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                            </svg>
                        </div>
                        <div className={"side-bar-item-text"}>
                            Notifications
                        </div>
                    </div>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                   stroke-width="2">
                                    <path stroke-dasharray="64" stroke-dashoffset="64"
                                          d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s"
                                                 values="64;0"/>
                                    </path>
                                    <path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s"
                                                 values="24;0"/>
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div className={"side-bar-item-text"}>
                            Messages
                        </div>
                    </div>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="white"
                                      d="M14.018 7.365a.75.75 0 1 0-1.449-.389l-2.588 9.66a.75.75 0 1 0 1.45.388z"/>
                                <path fill="white" fill-rule="evenodd"
                                      d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <div className={"side-bar-item-text"}>
                            Grok
                        </div>
                    </div>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="white"
                                      d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z"/>
                            </svg>
                        </div>
                        <div className={"side-bar-item-text"}>
                            Bookmarks

                        </div>
                    </div>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                                <path fill="white"
                                      d="M15 14s1 0 1-1s-1-4-5-4s-5 3-5 4s1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276c.593.69.758 1.457.76 1.72l-.008.002l-.014.002zM11 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0a3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904c.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724c.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"/>
                            </svg>
                        </div>
                        <div className={"side-bar-item-text"}>
                            Communities

                        </div>
                    </div>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>
                            <img src={twitterLogo} width={40} height={40}/>

                        </div>
                        <div className={"side-bar-item-text"}>
                            Premium

                        </div>
                    </div>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M17.684 3.603c.521-.659.03-1.603-.836-1.603h-6.716a1.06 1.06 0 0 0-.909.502l-5.082 8.456c-.401.666.103 1.497.908 1.497h3.429l-3.23 8.065c-.467 1.02.795 1.953 1.643 1.215L20 9.331h-6.849z"/>
                            </svg>
                        </div>
                        <div className={"side-bar-item-text"}>
                            Verified Orgs

                        </div>
                    </div>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <g fill="none" stroke="white" stroke-width="1.5">
                                    <path stroke-linejoin="round"
                                          d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/>
                                    <circle cx="12" cy="7" r="3"/>
                                </g>
                            </svg>
                        </div>
                        <div className={"side-bar-item-text"}>
                            Profile

                        </div>
                    </div>
                    <div className={"side-bar-item"}>
                        <div className={"side-bar-item-img"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                <g fill="none">
                                    <path stroke="white" stroke-linejoin="round" stroke-width="4"
                                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/>
                                    <circle cx="14" cy="24" r="3" fill="white"/>
                                    <circle cx="24" cy="24" r="3" fill="white"/>
                                    <circle cx="34" cy="24" r="3" fill="white"/>
                                </g>
                            </svg>
                        </div>
                        <div className={"side-bar-item-text"}>
                            More
                        </div>
                    </div>

                    <button className={"post-btn"}>Post</button>

                </div>
                <div className={"profile-section"}>

                </div>
            </div>
        </>
    )
}