import React from "react";
import blogData from "../data/blog";
import placeholderImage from "../assets/logo";

function About(props) {
    const { image = placeholderImage, about } = props;

    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}

export default About;
