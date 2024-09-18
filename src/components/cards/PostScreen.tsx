import TwitterSideBar from "../sidebar/TwitterSideBar.tsx";

import aryaImg from "../../assets/images/ayra-avi.jpg"
import myAvi from "../../assets/images/my-avi.jpg"
import dummyImg from "../../assets/images/dummy-img.jpg"
import dummyImg2 from "../../assets/images/dummy2.jpg"
import dummyImg3 from "../../assets/images/goodbabe.jpg"
import dummyImg4 from "../../assets/images/nastyguy.jpg"
import {useState} from "react";
import MoreActionsModal from "../modals/MoreActionsModal.tsx";
import MassBlockModal from "../modals/MassBlockModal.tsx";








export default function PostScreen(){

    const [showModal, setShowModal] = useState(false)
    const [massBlock, setMassBlock]=useState(false)
    const [massBlockModal, setMassBlockModal]=useState(false)

    const [selectUser, setSelectUser]=useState(false)




    const massBlockUsers = ()=>{
        setMassBlock(true)
        setShowModal(false)
    }

    const closeMassBlockModal =()=>{
        setMassBlockModal(false)
        setMassBlock(false)
    }
    function openMassBlock(){
        setMassBlockModal(true)
    }
    function selectUserFunction(){
        setSelectUser(selectUser)
    }

    function openModal(){
        setShowModal(!showModal)
    }

    return(
        <>
            <div className={"post-screen-wrapper"}>
                <TwitterSideBar/>
                <div className={"divider"}></div>
                <div className={"post-screen"}>
                    <div className={"post-screen-header"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="white" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"/>
                        </svg>
                        <div className={"post-header-text"}>
                            Post
                        </div>
                    </div>
                    <div className={"post-screen-item"}>
                        <div className={"post-screen-item-header"}>

                            <div className={"post-screen-item-avi"}>
                                <img style={{borderRadius: "30px"}} src={aryaImg} width={40} height={40}/>
                            </div>
                            <div className={"more-wrapper"}>
                                <div className={"post-screen-item-name"}>
                                    <div className={"post-screen-display-name"}>
                                        Celestial being
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                             viewBox="0 0 24 24">
                                            <path fill="#1D9BF9"
                                                  d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07z"/>
                                        </svg>
                                    </div>
                                    <div className={"post-screen-user-name"}>
                                        @ayrastarr
                                    </div>

                                </div>
                                <a onClick={()=>openModal()}>
                                    <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                         xmlns="http://www.w3.org/2000/svg"
                                         width="25"
                                         height="25" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path
                                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                            <path fill="currentColor"
                                                  d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                        </g>
                                    </svg>
                                </a>
                                {showModal && <MoreActionsModal massBlockProp={()=>massBlockUsers()}/>}

                            </div>

                        </div>
                        <div className={"post-screen-item-tweet"}>
                            Stop killing us ! Stop raping us ! Women deserve better
                            <div className={"tweet-span"}>#JusticeForChristianah</div>
                        </div>
                        <div className={"post-screen-item-details"}>
                            2:41 AM · Sep 5, 2024
                            ·
                            <span>3.1M</span>
                            Views
                        </div>
                        <div className={"post-screen-interactions"}>
                            <div style={{marginTop:"15px"}} className={"interactions-divider"}></div>
                            <div className={"interactions-wrapper"}>
                                <div className={"interactions-comments"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5"
                                         viewBox="0 0 16 16">
                                        <path fill="grey" fill-rule="evenodd"
                                              d="m4.843 10.944l-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964l.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177c.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5s-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448zm1.141 3.625l1.77-1.572Q7.875 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    2.2K
                                </div>
                                <div className={"interactions-comments"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5"
                                         viewBox="0 0 21 21">
                                        <g fill="none" fill-rule="evenodd" stroke="grey" stroke-linecap="round"
                                           stroke-linejoin="round">
                                            <path d="m13.5 13.5l3 3l3-3"/>
                                            <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3"/>
                                            <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8"/>
                                        </g>
                                    </svg>
                                    18K
                                </div>
                                <div className={"interactions-like"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5"
                                         viewBox="0 0 256 256">
                                        <path fill="#f91880"
                                              d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"/>
                                    </svg>
                                    54K
                                </div>
                                <div className={"interactions-comments"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5"
                                         viewBox="0 0 24 24">
                                        <path fill="none" stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                    </svg>
                                    1K
                                </div>
                                <div className={"interactions-comments"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5"
                                         viewBox="0 0 24 24">
                                        <g fill="none" stroke="grey" stroke-linecap="round" stroke-width="1.5">
                                            <path stroke-miterlimit="10" d="M12 3.212v12.026"/>
                                            <path stroke-linejoin="round"
                                                  d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <div className={"interactions-divider"}></div>
                            <div className={"most-relevant"}>
                                <div className={"most-relevant-left"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5"
                                         viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                              stroke-miterlimit="10" stroke-width="1.5"
                                              d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"/>
                                    </svg>
                                    Most relevant
                                </div>
                                <div className={"most-relevant-right"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                         viewBox="0 0 24 24">
                                        <path fill="white"
                                              d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={"post-screen-comments-wrapper"}>
                        <div className={"post-screen-comments"}>
                            <div className={"user-reply"}>
                                <img style={{borderRadius: "30px"}} src={myAvi} width={40} height={40}/>
                                Post your reply
                            </div>
                            {massBlock ?
                             <a onClick={openMassBlock} className={"reply-btn"}>
                                Mass Block
                            </a>
                                :
                                <div className={"reply-btn"}>
                                Reply
                            </div>
                            }
                        </div>
                        {massBlockModal && <MassBlockModal onClose={()=>closeMassBlockModal()}/>}

                        <div className={"comment-divider"}></div>
                        {massBlock ?
                            <div className={"mass-block-clicked"}>
                                <div className="custom-radio-group">
                                    <label className="custom-radio">
                                        <input type="radio" name="customRadio" value="option1"/>
                                        <span className="radio-box"></span>
                                        Option 1
                                    </label>
                                </div>

                                <div className={"dirty-comment"}>
                                    <img className={"avi-class"} src={dummyImg} width={40} height={40}/>
                                    <div className={"dirty-comment-text"}>
                                        <div className={"dirty-text-top-wrapper"}>
                                            <div className={"dirty-text-top"}>
                                                <div className={"post-screen-display-name"}>
                                                    Ode Guy
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                                         viewBox="0 0 24 24">
                                                        <path fill="#1D9BF9"
                                                              d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07z"/>
                                                    </svg>
                                                </div>
                                                <div className={"post-screen-user-name"}>
                                                    SillyDude123 · Sep 5
                                                </div>
                                            </div>

                                            <div>
                                                <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     width="25"
                                                     height="25" viewBox="0 0 24 24">
                                                    <g fill="none">
                                                        <path
                                                            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                                        <path fill="currentColor"
                                                              d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                                    </g>
                                                </svg>
                                            </div>

                                        </div>
                                        <div className={"dirty-text-bottom"}>
                                            Everyone deserves better<br/>
                                            Not just women<br/>
                                            Everyone<br/>
                                        </div>
                                        <div className={"dirty-interactions-wrapper"}>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 16 16">
                                                    <path fill="grey" fill-rule="evenodd"
                                                          d="m4.843 10.944l-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964l.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177c.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5s-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448zm1.141 3.625l1.77-1.572Q7.875 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                                300
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 21 21">
                                                    <g fill="none" fill-rule="evenodd" stroke="grey"
                                                       stroke-linecap="round"
                                                       stroke-linejoin="round">
                                                        <path d="m13.5 13.5l3 3l3-3"/>
                                                        <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3"/>
                                                        <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8"/>
                                                    </g>
                                                </svg>
                                                6
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 256 256">
                                                    <path fill="grey"
                                                          d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                                </svg>
                                                10
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 24 24">
                                                    <path fill="grey"
                                                          d="M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"/>
                                                </svg>
                                                500
                                            </div>

                                            <div className={"bookmark-interactions"}>
                                                <div className={"interactions-comments"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                         viewBox="0 0 24 24">
                                                        <path fill="none" stroke="grey" stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                                    </svg>
                                                </div>
                                                <div className={"interactions-comments"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                         viewBox="0 0 24 24">
                                                        <g fill="none" stroke="grey" stroke-linecap="round"
                                                           stroke-width="1.5">
                                                            <path stroke-miterlimit="10" d="M12 3.212v12.026"/>
                                                            <path stroke-linejoin="round"
                                                                  d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"/>
                                                        </g>
                                                    </svg>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div> : <div className={"dirty-comment"}>
                                <img className={"avi-class"} src={dummyImg} width={40} height={40}/>
                                <div className={"dirty-comment-text"}>
                                    <div className={"dirty-text-top-wrapper"}>
                                        <div className={"dirty-text-top"}>
                                            <div className={"post-screen-display-name"}>
                                                Ode Guy
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                                     viewBox="0 0 24 24">
                                                    <path fill="#1D9BF9"
                                                          d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07z"/>
                                                </svg>
                                            </div>
                                            <div className={"post-screen-user-name"}>
                                                SillyDude123 · Sep 5
                                            </div>
                                        </div>

                                        <div>
                                            <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 width="25"
                                                 height="25" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path
                                                        d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                                    <path fill="currentColor"
                                                          d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                                </g>
                                            </svg>
                                        </div>

                                    </div>
                                    <div className={"dirty-text-bottom"}>
                                        Everyone deserves better<br/>
                                        Not just women<br/>
                                        Everyone<br/>
                                    </div>
                                    <div className={"dirty-interactions-wrapper"}>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                 viewBox="0 0 16 16">
                                                <path fill="grey" fill-rule="evenodd"
                                                      d="m4.843 10.944l-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964l.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177c.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5s-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448zm1.141 3.625l1.77-1.572Q7.875 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            300
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 21 21">
                                                <g fill="none" fill-rule="evenodd" stroke="grey"
                                                   stroke-linecap="round"
                                                   stroke-linejoin="round">
                                                    <path d="m13.5 13.5l3 3l3-3"/>
                                                    <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3"/>
                                                    <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8"/>
                                                </g>
                                            </svg>
                                            6
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 256 256">
                                                <path fill="grey"
                                                      d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                            </svg>
                                            10
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 24 24">
                                                <path fill="grey"
                                                      d="M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"/>
                                            </svg>
                                            500
                                        </div>

                                        <div className={"bookmark-interactions"}>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 24 24">
                                                    <path fill="none" stroke="grey" stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                                </svg>
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 24 24">
                                                    <g fill="none" stroke="grey" stroke-linecap="round"
                                                       stroke-width="1.5">
                                                        <path stroke-miterlimit="10" d="M12 3.212v12.026"/>
                                                        <path stroke-linejoin="round"
                                                              d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"/>
                                                    </g>
                                                </svg>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        }

                        <div className={"comment-divider"}></div>
                        {massBlock ?
                            <div className={"mass-block-clicked"}>
                                <div className="custom-radio-group">
                                    <label className="custom-radio">
                                        <input type="radio" name="customRadio2" value="option2"/>
                                        <span className="radio-box"></span>
                                        Option 1
                                    </label>
                                </div>
                                <div className={"dirty-comment"}>
                                    <img className={"avi-class"} src={dummyImg2} width={40} height={40}/>
                                    <div className={"dirty-comment-text"}>
                                        <div className={"dirty-text-top-wrapper"}>
                                            <div className={"dirty-text-top"}>
                                                <div className={"post-screen-display-name"}>
                                                    Big Dummy
                                                </div>
                                                <div className={"post-screen-user-name"}>
                                                    cloutchaserrr · Sep 5
                                                </div>
                                            </div>


                                        </div>
                                        <div className={"dirty-text-bottom"}>
                                            No go wash your mini skirt for show tomorrow

                                        </div>
                                        <div className={"dirty-interactions-wrapper"}>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 16 16">
                                                    <path fill="grey" fill-rule="evenodd"
                                                          d="m4.843 10.944l-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964l.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177c.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5s-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448zm1.141 3.625l1.77-1.572Q7.875 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                                300
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 21 21">
                                                    <g fill="none" fill-rule="evenodd" stroke="grey"
                                                       stroke-linecap="round"
                                                       stroke-linejoin="round">
                                                        <path d="m13.5 13.5l3 3l3-3"/>
                                                        <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3"/>
                                                        <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8"/>
                                                    </g>
                                                </svg>
                                                6
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 256 256">
                                                    <path fill="grey"
                                                          d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                                </svg>
                                                10
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 24 24">
                                                    <path fill="grey"
                                                          d="M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"/>
                                                </svg>
                                                500
                                            </div>

                                            <div className={"bookmark-interactions"}>
                                                <div className={"interactions-comments"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                         viewBox="0 0 24 24">
                                                        <path fill="none" stroke="grey" stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                                    </svg>
                                                </div>
                                                <div className={"interactions-comments"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                         viewBox="0 0 24 24">
                                                        <g fill="none" stroke="grey" stroke-linecap="round"
                                                           stroke-width="1.5">
                                                            <path stroke-miterlimit="10" d="M12 3.212v12.026"/>
                                                            <path stroke-linejoin="round"
                                                                  d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"/>
                                                        </g>
                                                    </svg>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div> : <div className={"dirty-comment"}>
                                <img className={"avi-class"} src={dummyImg2} width={40} height={40}/>
                                <div className={"dirty-comment-text"}>
                                    <div className={"dirty-text-top-wrapper"}>
                                        <div className={"dirty-text-top"}>
                                            <div className={"post-screen-display-name"}>
                                                Big Dummy
                                            </div>
                                            <div className={"post-screen-user-name"}>
                                                cloutchaserrr · Sep 5
                                            </div>
                                        </div>


                                    </div>
                                    <div className={"dirty-text-bottom"}>
                                        No go wash your mini skirt for show tomorrow

                                    </div>
                                    <div className={"dirty-interactions-wrapper"}>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                 viewBox="0 0 16 16">
                                                <path fill="grey" fill-rule="evenodd"
                                                      d="m4.843 10.944l-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964l.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177c.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5s-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448zm1.141 3.625l1.77-1.572Q7.875 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            300
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 21 21">
                                                <g fill="none" fill-rule="evenodd" stroke="grey"
                                                   stroke-linecap="round"
                                                   stroke-linejoin="round">
                                                    <path d="m13.5 13.5l3 3l3-3"/>
                                                    <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3"/>
                                                    <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8"/>
                                                </g>
                                            </svg>
                                            6
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 256 256">
                                                <path fill="grey"
                                                      d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                            </svg>
                                            10
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 24 24">
                                                <path fill="grey"
                                                      d="M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"/>
                                            </svg>
                                            500
                                        </div>

                                        <div className={"bookmark-interactions"}>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 24 24">
                                                    <path fill="none" stroke="grey" stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                                </svg>
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 24 24">
                                                    <g fill="none" stroke="grey" stroke-linecap="round"
                                                       stroke-width="1.5">
                                                        <path stroke-miterlimit="10" d="M12 3.212v12.026"/>
                                                        <path stroke-linejoin="round"
                                                              d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"/>
                                                    </g>
                                                </svg>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        }
                        <div className={"comment-divider"}></div>
                        {massBlock ?
                            <div className={"mass-block-clicked"}>
                                <div onClick={selectUserFunction} className="custom-radio-group">
                                    <label className="custom-radio">
                                        <input type="radio" name="customRadio3" value="option1"/>
                                        <span className={selectUser?"deselected-user":"radio-box"}></span>
                                        Option 1
                                    </label>
                                </div>
                                <div className={"dirty-comment"}>
                                    <img className={"avi-class"} src={dummyImg3} width={40} height={40}/>
                                    <div className={"dirty-comment-text"}>
                                        <div className={"dirty-text-top-wrapper"}>
                                            <div className={"dirty-text-top"}>
                                                <div className={"post-screen-display-name"}>
                                                    Black Girl Airneh
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                                         viewBox="0 0 24 24">
                                                        <path fill="#1D9BF9"
                                                              d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07z"/>
                                                    </svg>
                                                </div>
                                                <div className={"post-screen-user-name"}>
                                                    TokyossChef · Sep 5
                                                </div>
                                            </div>

                                            <div>
                                                <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     width="25"
                                                     height="25" viewBox="0 0 24 24">
                                                    <g fill="none">
                                                        <path
                                                            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                                        <path fill="currentColor"
                                                              d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                                    </g>
                                                </svg>
                                            </div>

                                        </div>
                                        <div className={"dirty-text-bottom"}>
                                            Women deserve better
                                            <div className={"tweet-span"}>#JusticeForChristianah</div>
                                        </div>
                                        <div className={"dirty-interactions-wrapper"}>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 16 16">
                                                    <path fill="grey" fill-rule="evenodd"
                                                          d="m4.843 10.944l-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964l.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177c.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5s-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448zm1.141 3.625l1.77-1.572Q7.875 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                                20
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 21 21">
                                                    <g fill="none" fill-rule="evenodd" stroke="grey"
                                                       stroke-linecap="round"
                                                       stroke-linejoin="round">
                                                        <path d="m13.5 13.5l3 3l3-3"/>
                                                        <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3"/>
                                                        <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8"/>
                                                    </g>
                                                </svg>
                                                50
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 256 256">
                                                    <path fill="grey"
                                                          d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                                </svg>
                                                100
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 24 24">
                                                    <path fill="grey"
                                                          d="M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"/>
                                                </svg>
                                                1K
                                            </div>

                                            <div className={"bookmark-interactions"}>
                                                <div className={"interactions-comments"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                         viewBox="0 0 24 24">
                                                        <path fill="none" stroke="grey" stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                                    </svg>
                                                </div>
                                                <div className={"interactions-comments"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                         viewBox="0 0 24 24">
                                                        <g fill="none" stroke="grey" stroke-linecap="round"
                                                           stroke-width="1.5">
                                                            <path stroke-miterlimit="10" d="M12 3.212v12.026"/>
                                                            <path stroke-linejoin="round"
                                                                  d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"/>
                                                        </g>
                                                    </svg>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div> : <div className={"dirty-comment"}>
                                <img className={"avi-class"} src={dummyImg3} width={40} height={40}/>
                                <div className={"dirty-comment-text"}>
                                    <div className={"dirty-text-top-wrapper"}>
                                        <div className={"dirty-text-top"}>
                                            <div className={"post-screen-display-name"}>
                                                Black Girl Airneh
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                                     viewBox="0 0 24 24">
                                                    <path fill="#1D9BF9"
                                                          d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07z"/>
                                                </svg>
                                            </div>
                                            <div className={"post-screen-user-name"}>
                                                TokyossChef · Sep 5
                                            </div>
                                        </div>

                                        <div>
                                            <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 width="25"
                                                 height="25" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path
                                                        d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                                    <path fill="currentColor"
                                                          d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                                </g>
                                            </svg>
                                        </div>

                                    </div>
                                    <div className={"dirty-text-bottom"}>
                                        Women deserve better
                                        <div className={"tweet-span"}>#JusticeForChristianah</div>
                                    </div>
                                    <div className={"dirty-interactions-wrapper"}>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                 viewBox="0 0 16 16">
                                                <path fill="grey" fill-rule="evenodd"
                                                      d="m4.843 10.944l-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964l.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177c.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5s-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448zm1.141 3.625l1.77-1.572Q7.875 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            20
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 21 21">
                                                <g fill="none" fill-rule="evenodd" stroke="grey" stroke-linecap="round"
                                                   stroke-linejoin="round">
                                                    <path d="m13.5 13.5l3 3l3-3"/>
                                                    <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3"/>
                                                    <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8"/>
                                                </g>
                                            </svg>
                                            50
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 256 256">
                                                <path fill="grey"
                                                      d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                            </svg>
                                            100
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 24 24">
                                                <path fill="grey"
                                                      d="M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"/>
                                            </svg>
                                            1K
                                        </div>

                                        <div className={"bookmark-interactions"}>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 24 24">
                                                    <path fill="none" stroke="grey" stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                                </svg>
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 24 24">
                                                    <g fill="none" stroke="grey" stroke-linecap="round"
                                                       stroke-width="1.5">
                                                        <path stroke-miterlimit="10" d="M12 3.212v12.026"/>
                                                        <path stroke-linejoin="round"
                                                              d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"/>
                                                    </g>
                                                </svg>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        }
                        <div className={"comment-divider"}></div>

                        {massBlock ?
                            <div className={"mass-block-clicked"}>
                                <div className="custom-radio-group">
                                    <label className="custom-radio">
                                        <input type="radio" name="customRadio4" value="option1"/>
                                        <span className="radio-box"></span>
                                        Option 1
                                    </label>
                                </div>
                                <div className={"dirty-comment"}>
                                    <img className={"avi-class"} src={dummyImg4} width={40} height={40}/>
                                    <div className={"dirty-comment-text"}>
                                        <div className={"dirty-text-top-wrapper"}>
                                            <div className={"dirty-text-top"}>
                                                <div className={"post-screen-display-name"}>
                                                    Best In Clout
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                                         viewBox="0 0 24 24">
                                                        <path fill="#1D9BF9"
                                                              d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07z"/>
                                                    </svg>
                                                </div>
                                                <div className={"post-screen-user-name"}>
                                                    @sparkle_akoga · Sep 5
                                                </div>
                                            </div>

                                            <div>
                                                <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     width="25"
                                                     height="25" viewBox="0 0 24 24">
                                                    <g fill="none">
                                                        <path
                                                            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                                        <path fill="currentColor"
                                                              d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                                    </g>
                                                </svg>
                                            </div>

                                        </div>
                                        <div className={"dirty-text-bottom"}>
                                            Teach your male family members self control towards women
                                        </div>
                                        <div className={"dirty-interactions-wrapper"}>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 16 16">
                                                    <path fill="grey" fill-rule="evenodd"
                                                          d="m4.843 10.944l-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964l.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177c.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5s-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448zm1.141 3.625l1.77-1.572Q7.875 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                                400
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 21 21">
                                                    <g fill="none" fill-rule="evenodd" stroke="grey"
                                                       stroke-linecap="round"
                                                       stroke-linejoin="round">
                                                        <path d="m13.5 13.5l3 3l3-3"/>
                                                        <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3"/>
                                                        <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8"/>
                                                    </g>
                                                </svg>
                                                4
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 256 256">
                                                    <path fill="grey"
                                                          d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                                </svg>
                                                14
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 24 24">
                                                    <path fill="grey"
                                                          d="M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"/>
                                                </svg>
                                                1K
                                            </div>

                                            <div className={"bookmark-interactions"}>
                                                <div className={"interactions-comments"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                         viewBox="0 0 24 24">
                                                        <path fill="none" stroke="grey" stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                                    </svg>
                                                </div>
                                                <div className={"interactions-comments"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                         viewBox="0 0 24 24">
                                                        <g fill="none" stroke="grey" stroke-linecap="round"
                                                           stroke-width="1.5">
                                                            <path stroke-miterlimit="10" d="M12 3.212v12.026"/>
                                                            <path stroke-linejoin="round"
                                                                  d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"/>
                                                        </g>
                                                    </svg>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div> : <div className={"dirty-comment"}>
                                <img className={"avi-class"} src={dummyImg4} width={40} height={40}/>
                                <div className={"dirty-comment-text"}>
                                    <div className={"dirty-text-top-wrapper"}>
                                        <div className={"dirty-text-top"}>
                                            <div className={"post-screen-display-name"}>
                                                Best In Clout
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                                     viewBox="0 0 24 24">
                                                    <path fill="#1D9BF9"
                                                          d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07z"/>
                                                </svg>
                                            </div>
                                            <div className={"post-screen-user-name"}>
                                                @sparkle_akoga · Sep 5
                                            </div>
                                        </div>

                                        <div>
                                            <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 width="25"
                                                 height="25" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path
                                                        d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                                    <path fill="currentColor"
                                                          d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                                </g>
                                            </svg>
                                        </div>

                                    </div>
                                    <div className={"dirty-text-bottom"}>
                                        Teach your male family members self control towards women
                                    </div>
                                    <div className={"dirty-interactions-wrapper"}>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                 viewBox="0 0 16 16">
                                                <path fill="grey" fill-rule="evenodd"
                                                      d="m4.843 10.944l-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964l.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177c.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5s-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448zm1.141 3.625l1.77-1.572Q7.875 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            400
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 21 21">
                                                <g fill="none" fill-rule="evenodd" stroke="grey" stroke-linecap="round"
                                                   stroke-linejoin="round">
                                                    <path d="m13.5 13.5l3 3l3-3"/>
                                                    <path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3"/>
                                                    <path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8"/>
                                                </g>
                                            </svg>
                                            4
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 256 256">
                                                <path fill="grey"
                                                      d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                            </svg>
                                            14
                                        </div>
                                        <div className={"interactions-comments"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                 viewBox="0 0 24 24">
                                                <path fill="grey"
                                                      d="M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"/>
                                            </svg>
                                            1K
                                        </div>

                                        <div className={"bookmark-interactions"}>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                     viewBox="0 0 24 24">
                                                    <path fill="none" stroke="grey" stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                                </svg>
                                            </div>
                                            <div className={"interactions-comments"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 24 24">
                                                    <g fill="none" stroke="grey" stroke-linecap="round"
                                                       stroke-width="1.5">
                                                        <path stroke-miterlimit="10" d="M12 3.212v12.026"/>
                                                        <path stroke-linejoin="round"
                                                              d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"/>
                                                    </g>
                                                </svg>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        }
                        <div className={"comment-divider"}></div>
                    </div>


                </div>
                <div className={"divider"}></div>
                <div className={"trending-search"}>
                    <div className={"trending-searchbar"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                            <path fill="none" stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"/>
                        </svg>
                        Search
                    </div>
                    <div className={"relevant-people"}>
                        <div className={"relevant-people-text"}>
                            Relevant People
                        </div>
                        <div className={"relevant-ppl-wrap"}>
                            <div className={"post-screen-item-avi"}>
                                <img style={{borderRadius: "30px"}} src={aryaImg} width={40} height={40}/>
                            </div>
                            <div className={"more-wrapper-relevant"}>
                                <div className={"post-screen-item-name"}>
                                    <div className={"post-screen-display-name"}>
                                        Celestial being
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                             viewBox="0 0 24 24">
                                            <path fill="#1D9BF9"
                                                  d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07z"/>
                                        </svg>
                                    </div>
                                    <div className={"post-screen-user-name"}>
                                        @ayrastarr
                                    </div>
                                    <div className={"post-screen-user-bio"}>
                                        Celestial being <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                                             viewBox="0 0 36 36">
                                        <path fill="#e1e8ed"
                                              d="M.005 30.093L0 30.134c.001.11.02.215.032.322c.009.073.01.15.021.225l.046.2C.715 33.773 4.431 36 8.94 36c4.506 0 8.225-2.227 8.838-5.119q.028-.098.046-.199c.012-.074.015-.151.022-.227c.012-.106.031-.211.032-.321q-.002-.022-.006-.041l.006-.053h-.008c-.051-1.652-1.357-2.979-2.971-2.979c-1.617 0-2.923 1.327-2.973 2.979h-.018c.001-.031.009-.061.009-.093c0-1.696-1.334-3.072-2.98-3.072c-1.644 0-2.978 1.374-2.98 3.072c.001.032.009.062.012.093h-.017c-.051-1.652-1.356-2.979-2.972-2.979S.059 28.388.01 30.04L0 30.039c0 .019.005.036.005.054m18.084 0a.2.2 0 0 0-.006.041c.001.11.02.215.031.322c.01.073.011.15.021.225q.022.105.046.2C18.798 33.773 22.515 36 27.022 36s8.225-2.227 8.839-5.119q.028-.098.046-.199c.012-.074.016-.151.022-.227c.012-.106.03-.211.032-.321q-.001-.022-.006-.041l.006-.053h-.009c-.051-1.652-1.357-2.979-2.971-2.979c-1.616 0-2.923 1.327-2.973 2.979h-.018c.001-.031.009-.061.009-.093c0-1.696-1.334-3.072-2.979-3.072c-1.644 0-2.978 1.374-2.979 3.072c.002.032.009.062.012.093h-.019c-.051-1.652-1.356-2.979-2.972-2.979s-2.921 1.327-2.97 2.979l-.01-.001c.001.019.007.036.007.054"/>
                                        <circle cx="18" cy="21" r="12" fill="#af7e57"/>
                                        <path fill="#60352a"
                                              d="M18 5.205c-7.444 0-13.5 6.056-13.5 13.5c0 1.9.396 3.751 1.178 5.499a.5.5 0 0 0 .952-.134c.393-2.755 2.581-4.706 4.512-6.428c1.793-1.599 3.498-3.119 3.444-5.041c6.516 1.171 14.006 6.017 14.784 11.469a.5.5 0 0 0 .951.134a13.4 13.4 0 0 0 1.179-5.499c0-7.444-6.056-13.5-13.5-13.5M14 27h8s-1 2-4 2s-4-2-4-2"/>
                                        <path fill="#60352a"
                                              d="M16 22a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0zm6 0a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0z"/>
                                        <path fill="#8ccaf7"
                                              d="M18 0C11.373 0 6 2.687 6 6s5.373 6 12 6s12-2.686 12-6s-5.373-6-12-6m0 9c-4.971 0-9-1.567-9-3.5S13.029 2 18 2s9 1.567 9 3.5S22.971 9 18 9"/>
                                    </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                             viewBox="0 0 36 36">
                                            <path fill="#ffac33"
                                                  d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.97 1.97 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.98 1.98 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.96 1.96 0 0 1-1.16.379"/>
                                        </svg>
                                    </div>

                                </div>
                            </div>
                            <div className={"following-tab"}>
                                Following
                            </div>
                        </div>
                    </div>
                    <div className={"relevant-people"}>
                        <div className={"relevant-people-text"}>
                            Trends for you
                        </div>
                        <div className={"trends-list"}>
                            <div className={"trend-item-wrapper"}>
                                <div className={"trend-item"}>
                                    <div className={"trend-item-type"}>
                                        Music · Trending
                                    </div>
                                    <div className={"post-screen-display-name"}>
                                        Ayra
                                    </div>
                                    <div className={"trend-item-type"}>
                                        7,029 posts
                                    </div>
                                </div>
                                <div>
                                    <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                         xmlns="http://www.w3.org/2000/svg"
                                         width="25"
                                         height="25" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path
                                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                            <path fill="currentColor"
                                                  d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                        </g>
                                    </svg>
                                </div>

                            </div>
                            <div className={"trend-item-wrapper"}>
                                <div className={"trend-item"}>
                                    <div className={"trend-item-type"}>
                                        Entertainment · Trending
                                    </div>
                                    <div className={"post-screen-display-name"}>
                                        #Bibibae
                                    </div>
                                    <div className={"trend-item-type"}>
                                        10K posts
                                    </div>
                                </div>
                                <div>
                                    <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                         xmlns="http://www.w3.org/2000/svg"
                                         width="25"
                                         height="25" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path
                                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                            <path fill="currentColor"
                                                  d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                        </g>
                                    </svg>
                                </div>

                            </div>
                            <div className={"trend-item-wrapper"}>
                                <div className={"trend-item"}>
                                    <div className={"trend-item-type"}>
                                        Music · Trending
                                    </div>
                                    <div className={"post-screen-display-name"}>
                                        Barbz
                                    </div>
                                    <div className={"trend-item-type"}>
                                        5,000 posts
                                    </div>
                                </div>
                                <div>
                                    <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                         xmlns="http://www.w3.org/2000/svg"
                                         width="25"
                                         height="25" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path
                                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                            <path fill="currentColor"
                                                  d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                        </g>
                                    </svg>
                                </div>

                            </div>
                            <div className={"trend-item-wrapper"}>
                                <div className={"trend-item"}>
                                    <div className={"trend-item-type"}>
                                        Entertainment · Trending
                                    </div>
                                    <div className={"post-screen-display-name"}>
                                        Henry Danger
                                    </div>
                                    <div className={"trend-item-type"}>
                                        5000 posts
                                    </div>
                                </div>
                                <div>
                                    <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                         xmlns="http://www.w3.org/2000/svg"
                                         width="25"
                                         height="25" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path
                                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                            <path fill="currentColor"
                                                  d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                        </g>
                                    </svg>
                                </div>

                            </div>
                            <div className={"trend-item-wrapper"}>
                                <div className={"trend-item"}>
                                    <div className={"trend-item-type"}>
                                        Music · Trending
                                    </div>
                                    <div className={"post-screen-display-name"}>
                                        Ayra
                                    </div>
                                    <div className={"trend-item-type"}>
                                        7,029 posts
                                    </div>
                                </div>
                                <div>
                                    <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                         xmlns="http://www.w3.org/2000/svg"
                                         width="25"
                                         height="25" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path
                                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                            <path fill="currentColor"
                                                  d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                        </g>
                                    </svg>
                                </div>

                            </div>
                            <div className={"trend-item-wrapper"}>
                                <div className={"trend-item"}>
                                    <div className={"trend-item-type"}>
                                        Music · Trending
                                    </div>
                                    <div className={"post-screen-display-name"}>
                                        Ayra
                                    </div>
                                    <div className={"trend-item-type"}>
                                        7,029 posts
                                    </div>
                                </div>
                                <div>
                                    <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                         xmlns="http://www.w3.org/2000/svg"
                                         width="25"
                                         height="25" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path
                                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                            <path fill="currentColor"
                                                  d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                        </g>
                                    </svg>
                                </div>

                            </div>
                            <div className={"trend-item-wrapper"}>
                                <div className={"trend-item"}>
                                    <div className={"trend-item-type"}>
                                        Music · Trending
                                    </div>
                                    <div className={"post-screen-display-name"}>
                                        Ayra
                                    </div>
                                    <div className={"trend-item-type"}>
                                        7,029 posts
                                    </div>
                                </div>
                                <div>
                                    <svg style={{color: "rgb(113, 118, 123)", cursor: "pointer"}}
                                         xmlns="http://www.w3.org/2000/svg"
                                         width="25"
                                         height="25" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path
                                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                            <path fill="currentColor"
                                                  d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>
                                        </g>
                                    </svg>
                                </div>

                            </div>


                        </div>


                    </div>

                </div>


            </div>


        </>
    )
}