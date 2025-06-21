import { useRef} from "react";
import catImg from "../../assets/images/cat-avi.jpg";

export type IconProps = {
    onClose: () => void;
};

declare global {
    interface SpeechRecognition extends EventTarget {
        start(): void;
        stop(): void;
        abort(): void;
        // Add other methods and properties as needed
    }
}

export default function TweetBubbleModal({ onClose }: IconProps) {
    // const [isListening, setIsListening] = useState(false);
    // const [transcript, setTranscript] = useState("What is happening?!");

    const recognitionRef = useRef<SpeechRecognition | null>(null);

    // useEffect(() => {
    //     if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    //         const recognition = new (window.SpeechRecognition ||
    //             window.webkitSpeechRecognition)();
    //
    //         recognition.continuous = false;
    //         recognition.interimResults = true;
    //
    //         recognition.onstart = () => {
    //             setTranscript("Listening...");
    //             setIsListening(true);
    //         };
    //
    //         recognition.onend = () => {
    //             setIsListening(false);
    //         };
    //
    //         recognition.onresult = (event) => {
    //             if (event.results) {
    //                 setTranscript(event.results[0][0].transcript);
    //             }
    //         };
    //
    //         recognitionRef.current = recognition;
    //     }
    // }, []);

    const startListening = () => {
        recognitionRef.current?.start();
    };

    // const stopListening = () => {
    //     recognitionRef.current?.stop();
    // };

    return (
        <>
            <div className="modal-overlay-form">
                <div className="tweet-bubble">
                    <div className="tweet-bubble-top">
            <span
                onClick={onClose}
                style={{ color: "white", cursor: "pointer" }}
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
              >
                <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </span>
                        <div style={{ color: "rgb(29, 155, 240)", fontSize: "15px", fontWeight: "600" }}>
                            Drafts
                        </div>
                    </div>

                    <div className="tweet-bubble-body">
                        <div className="tweet-bubble-body-top">
                            <div className="post-screen-item-avi">
                                <img style={{ borderRadius: "30px" }} src={catImg} width={40} height={40} />
                            </div>
                            <div className="tweet-modal-text-wrapper">
                                <div className="tweet-modal-text">
                                    <div className="tweet-modal-text-selection">
                                        Everyone
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path
                                                fill="#1D9BF0"
                                                d="M12 14.708L6.692 9.4l.708-.708l4.6 4.6l4.6-4.6l.708.708z"
                                            />
                                        </svg>
                                    </div>
                                    <div id="output" className="tweet-modal-text-content">
                                        {/*{transcript}*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tweet-bubble-body-btm">
                            <div className={"tweet-bubble-body-btm"}>
                                <div className={"tweet-icons"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 24 24">
                                        <path fill="none" stroke="#1D9BF0" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="1.5"
                                              d="m2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5m10.5-11.25h.008v.008h-.008zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 16 16">
                                        <path fill="#1D9BF0"
                                              d="M5.052 6.706c.481-.05.853.037.986.103a.5.5 0 1 0 .447-.894c-.351-.176-.928-.267-1.537-.203c-.96.1-1.948.934-1.948 2.297c0 1.385 1.054 2.3 2.3 2.3c.58 0 1.1-.272 1.397-.553c.262-.248.303-.577.303-.783v-.964a.5.5 0 0 0-.5-.5h-.807a.5.5 0 1 0 0 1H6v.464a.4.4 0 0 1-.006.071a1.13 1.13 0 0 1-.694.265c-.731 0-1.3-.505-1.3-1.3c0-.818.567-1.252 1.052-1.303M9 6.21a.5.5 0 0 0-1 0v3.6a.5.5 0 1 0 1 0zm1.5-.5a.5.5 0 0 0-.5.5v3.6a.5.5 0 0 0 1 0V8.506l1.003-.006a.5.5 0 0 0-.006-1L11 7.506v-.797h1.5a.5.5 0 0 0 0-1zM3.5 2A2.5 2.5 0 0 0 1 4.5v7A2.5 2.5 0 0 0 3.5 14h9a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 12.5 2zM2 4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <path fill="#1D9BF0"
                                              d="M8 1a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V3a2 2 0 0 0-2-2m1 2v10a1 1 0 1 1-2 0V3a1 1 0 0 1 2 0M3 7a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2m1 6a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0zm7-6a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0zm3 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <circle cx="12" cy="12" r="9.25" stroke="#1D9BF0" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="1.5"/>
                                            <circle cx="9" cy="9.5" r="1.25" fill="#1D9BF0"/>
                                            <circle cx="15" cy="9.5" r="1.25" fill="#1D9BF0"/>
                                            <path stroke="#1D9BF0" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="1.5" d="M15.464 14.25a4 4 0 0 1-6.928 0"/>
                                        </g>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path fill="#1D9BF0"
                                              d="M7 3V1h2v2h6V1h2v2h4a1 1 0 0 1 1 1v5h-2V5h-3v2h-2V5H9v2H7V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm10 9a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0m5-3v3.414l2.293 2.293l1.414-1.414L18 15.586V13z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <g fill="none" stroke="#1D9BF0" stroke-linecap="round" stroke-linejoin="round"
                                           stroke-width="1.5">
                                            <path
                                                d="M12.56 20.82a.96.96 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181c5.181 5.116.056 12.196-4.773 15.64"/>
                                            <path d="M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className={"tweet-post-wrap"}>
                                    {/*<button onClick={startListening} disabled={isListening} id={"start"} className={"mic-icon"}>*/}
                                    {/*    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">*/}
                                    {/*        <path fill="#1D9BF0" fill-rule="evenodd"*/}
                                    {/*              d="M12 2a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4m-7 8a1 1 0 0 1 1 1a6 6 0 0 0 12 0a1 1 0 1 1 2 0a8 8 0 0 1-7 7.938V21a1 1 0 1 1-2 0v-2.062A8 8 0 0 1 4 11a1 1 0 0 1 1-1"*/}
                                    {/*              clip-rule="evenodd"/>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    <button onClick={startListening} id={"start"} className={"mic-icon"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#1D9BF0" fill-rule="evenodd"
                                                  d="M12 2a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4m-7 8a1 1 0 0 1 1 1a6 6 0 0 0 12 0a1 1 0 1 1 2 0a8 8 0 0 1-7 7.938V21a1 1 0 1 1-2 0v-2.062A8 8 0 0 1 4 11a1 1 0 0 1 1-1"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </button>
                                    <div className={"tweet-post"}>
                                        Post
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
