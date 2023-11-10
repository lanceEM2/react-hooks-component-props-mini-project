import React from "react";

function Article(props) {
  const { title, date, preview } = props;

  // Use a default date if none is provided
  const formattedDate = date ? new Date(date).toDateString() : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

