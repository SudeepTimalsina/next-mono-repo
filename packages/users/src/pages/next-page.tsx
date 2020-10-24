import React from "react";
import { Button } from "shared";
import Router from "next/router";

const NextPage = () => {

    const handleClick = () => {
        Router.push("/")
    }
    return (
        <div className="titleWrapper">
            <div className="textStyle">
             This is Users Next Page.
            </div>
            <Button onClick={handleClick} buttonType="prev">
                Home Page
            </Button>
            <style jsx>
                {`
                    .titleWrapper {
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        margin-top: 200px;
                    }
                    .textStyle {
                        font-size: 50px;
                    }
                `}
            </style>
        </div>
    )
}

export default NextPage;