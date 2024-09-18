
export type MoreActionsProps={
    massBlockProp:()=>void
}
export default function MoreActionsModal({massBlockProp}:MoreActionsProps){



    return(
        <>
          <div className={"more-actions-wrapper"}>
                <div className={"action-item"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                            <path fill="white"
                                  d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"/>
                        </svg>
                    </div>
                    Unfollow @ayrastarr

                </div>
                <div className={"action-item"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                            <path fill="white"
                                  d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"/>
                        </svg>
                    </div>
                    Add/remove @ayrastarr

                </div>
                <div className={"action-item"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                            <path fill="white"
                                  d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"/>
                        </svg>
                    </div>
                    Mute @ayrastarr

                </div>
                <div className={"action-item"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                            <path fill="white"
                                  d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"/>
                        </svg>
                    </div>
                    Mute this conversation

                </div>
                <div className={"action-item"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                            <path fill="white"
                                  d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"/>
                        </svg>
                    </div>
                    Block @ayrastarr

                </div>
                <a onClick={massBlockProp} className={"action-item-mass-block"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                            <path fill="rgb(29, 155, 240)"
                                  d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"/>
                        </svg>
                    </div>
                    Mass Block

                </a>

              <div className={"action-item"}>
                  <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                          <path fill="white"
                                d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"/>
                        </svg>
                    </div>
                    View post engagements

                </div>
                <div className={"action-item"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                            <path fill="white"
                                  d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"/>
                        </svg>
                    </div>
                    Embed post

                </div>
                <div className={"action-item"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                            <path fill="white"
                                  d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"/>
                        </svg>
                    </div>
                    Report post

                </div>
                <div className={"action-item"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                            <path fill="white"
                                  d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"/>
                        </svg>
                    </div>
                    View hidden replies

                </div>


            </div>
        </>
    )
}