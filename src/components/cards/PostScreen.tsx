import TwitterSideBar from "../sidebar/TwitterSideBar.tsx";
import aryaImg from "../../assets/images/ayra-avi.jpg"
import PostScreenCard from "./PostScreenCard.tsx";
import MobileSidebar from "../sidebar/MobileSidebar.tsx";








export default function PostScreen(){
    // const [home, setHome]=useState(true)
    // const [bookmark, setBookmark]=useState(false)
    //
    // function goToBookMark(){
    //     setBookmark(true)
    //     setHome(false)
    // }







    return(
        <>
            <div className={"post-screen-wrapper"}>
                <TwitterSideBar />
                <MobileSidebar/>
                <div className={"divider"}></div>
                {/*{home && <PostScreenCard/>}*/}
                {/*{bookmark && <BookMarkCard/>}*/}
                <PostScreenCard/>


                <div className={"divider-right"}></div>
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
                                        #Diddy
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
                                        Druski
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