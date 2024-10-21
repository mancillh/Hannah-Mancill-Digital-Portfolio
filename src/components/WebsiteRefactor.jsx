import Card from "./Card";

const websiteRefactor = {
    projectName: "Website Refactor",
    url: 'https://mancillh.github.io/Website-Refactor/',
    screenshotDescription: "screenshot of Horiseon Landing Page",
    imgSrc: "../src/assets/websiterefactor.JPG",
    githubRepo: "https://github.com/mancillh/Website-Refactor"
};

export default function websiteRefactorCard() {
    return (
        <div>
            <Card
                projectName={websiteRefactor.projectName}
                url={websiteRefactor.url}
                screenshotDescription={websiteRefactor.screenshotDescription}
                imgSrc={websiteRefactor.imgSrc}
                githubRepo={websiteRefactor.githubRepo}
            />
        </div>
    );
}
