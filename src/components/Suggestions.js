export default function Suggestions() {
    const suggestions = [
        { userImage: "assets/img/bad.vibes.memes.svg", altImage: "bad.vibes.memes.svg", user: "bad.vibes.memes", reason: "Segue você" },
        { userImage: "assets/img/chibirdart.svg", altImage: "chibirdart", user: "chibirdart", reason: "Segue você" },
        { userImage: "assets/img/razoesparaacreditar.svg", altImage: "razoesparaacreditar", user: "razoesparaacreditar", reason: "Novo no Instagram" },
        { userImage: "assets/img/adorable_animals.svg", altImage: "adorable_animals", user: "adorable_animals", reason: "Segue você" },
        { userImage: "assets/img/smallcutecats.svg", altImage: "smallcutecats", user: "smallcutecats", reason: "Segue você" }

    ]
    
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map((suggestion) => <Suggestion key={suggestion.user}image={suggestion.userImage} alt={suggestion.altImage} user={suggestion.user} reason={suggestion.reason} />)}
        </div>
    )
}

function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.image} alt={props.alt} />
                <div className="texto">
                    <div className="nome">{props.user}s</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}