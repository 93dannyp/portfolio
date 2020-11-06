import React from "react"

import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function TwitterContainer() {
    return (
        <section className="twitterContainer">
            <div className="twitter-embed">
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="danielperkinsii"
                    options={{
                        tweetLimit: "6",
                        width: "100%",
                        height: "100%"
                    }}
                    theme="light"
                    noHeader="true"
                    noBorders="true"
                    noFooter="true"
                    ></TwitterTimelineEmbed>
            </div>
        </section>
    )
}