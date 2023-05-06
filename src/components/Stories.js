export default function Stories() {
    const stories = [
        { img: "assets/img/9gag.svg", alt: "9gag", user: "9gag" },
        { img: "assets/img/meowed.svg", alt: "meowed", user: "meowed" },
        { img: "assets/img/barked.svg", alt: "barked", user: "barked" },
        { img: "assets/img/nathanwpylestrangeplanet.svg", alt: "wawawicomics", user: "wawawicomics" },
        { img: "assets/img/respondeai.svg", alt: "respondeai", user: "respondeai" },
        { img: "assets/img/filomoderna.svg", alt: "filomoderna", user: "filomoderna" },
        { img: "assets/img/memeriagourmet.svg", alt: "memeriagourmet", user: "memeriagourmet" }
    ]

        return (
        <div className="stories">
            {stories.map((story) => <Story key={story.user}avatar={story.img} alt={story.alt} user={story.user}/>)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div >
    );
}

function Story(props) {
    return(
        <div className="story">
                <div className="imagem">
                    <img src={props.avatar} alt={props.alt} />
                </div>
                <div className="usuario">
                    {props.user}
                </div>
            </div>
    );
}

