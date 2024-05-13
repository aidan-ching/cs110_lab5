import { useEffect, useState } from "react";

export default function Articles({ articles, amount }) {
  const [articlesPage, setArticlesPage] = useState([]);
  const [page, setPage] = useState(1);
  const [amountPages, setAmountPages] = useState(1);

  const handleSwitchPage = (e) => {
    setPage(e.target.value);
  }


  useEffect(() => {
    setAmountPages(Math.ceil(amount / 6));
    if (articles) {
      console.log(articles);
      let temp = articles.slice(6 * (page - 1), Math.min(amount, 6 * page));
      console.log(temp);
      setArticlesPage(temp);
    }
  }, [amount, page, articles]);

  return (
    <div class="container">
      {articlesPage.length
        ? [...Array(Math.ceil(articlesPage.length / 2))].map((x, i) => (
            <ArticleRow
              one={articlesPage[i * 2]}
              two={articlesPage[i * 2 + 1]}
            />
          ))
        : "Nothing found..."}

      <div>
        {[...Array(amountPages)].map((x, i) => (
          <button className={`pagination-button`} value={i+1} onClick={handleSwitchPage}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
}

function ArticleRow({ one, two }) {
  let oneImageUrl = "./image/rat/png";
  let twoImageUrl = "./image/rat/png";
  if (
    !one.media.length ||
    !one.media[0]["media-metadata"].length ||
    !one.media[0]["media-metadata"][2].url
  ) {
    console.log("NO MEDIA FOR WHATEVER");
  } else {
    oneImageUrl = one.media[0]["media-metadata"][2].url;
  }

  if (
    !two ||
    !two.media ||
    !two.media.length ||
    !two.media[0]["media-metadata"].length ||
    !two.media[0]["media-metadata"][2].url
  ) {
    console.log("NO MEDIA FOR WHATEVER");
  } else {
    twoImageUrl = two.media[0]["media-metadata"][2].url;
  }

  return (
    <div className="article-row">
      <div className="article">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <div class="heading"> {one.title || "news title"}</div>
          <div class="date"> {one.published_date || "date"}</div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={oneImageUrl} alt="profile" class="image" />
          <div class="description">
            <p> {one.abstract || "abstract"}</p>
          </div>
        </div>
      </div>

      {two && <div className="article">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <div class="heading"> {two.title || "news title"}</div>
          <div class="date"> {two.published_date || "date"}</div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={twoImageUrl} alt="profile" class="image" />
          <div class="description">
            <p> {two.abstract || "abstract"}</p>
          </div>
        </div>
      </div>}

      
    </div>
  );
}
