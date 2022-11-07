import PostIndex from './lib/postindex';
const YEAR = new Date().getFullYear()

export default {
  head: ({ meta }) => {
    return (
      <>
        <meta name="author" content="Shu Ding" />
        <link rel="canonical" href="https://shud.in" />
        <meta name="title" content={meta.title} />
        <meta property="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content="https://shud.in" />
        <meta
          property="og:image"
          content={meta.image || "https://shud.in/logo.png"}
        />
        <meta
          property="twitter:card"
          content={meta.image ? "summary_large_image" : "summary"}
        />
        <meta property="twitter:site" content="@shuding_" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content="https://shud.in" />
        <meta
          property="twitter:image"
          content={meta.image || "https://shud.in/logo.png"}
        />
      </>
    )
  },
  footer: (
    <div>
      <hr />
        smuts AB
      {" "}
      ·{" "}
        Org. No. 559283-3189
      {" "}
      ·{" "}
      <a href="tel:+46738244203" target="_blank">
        +46 73 824 42 03
      </a>{" "}
      ·{" "}
      <a href="mailto:hej@smuts.studio" target="_blank">
        hej@smuts.studio
      </a>
      <small style={{ display: "block", marginTop: "8rem" }}>
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          style={{ cursor: "help" }}
        >
          CC BY-NC 4.0
        </abbr>{" "}
        <time>{YEAR}</time> © smuts AB
      </small>
    </div>
  ),
  readMore: 'Read More →',
  titleSuffix: null,
}
