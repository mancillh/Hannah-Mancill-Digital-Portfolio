const projectName = Website Refactor;
const url = "https://mancillh.github.io/Website-Refactor/";
const screenshotDescription = "screenshot of Horiseon Landing Page";
const imgSrc = ;

function Card() {
    return (
        <div className="container">
          <img src={imgSrc} href={url} alt={screenshotDescription}></img>
          <h1>{projectName}</h1>
        </div>
    );
  }
  
  export default Card;