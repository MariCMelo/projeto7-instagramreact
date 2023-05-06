import { useState } from "react"

export default function User() {
  const [userName, setUserName] = useState("catanacomics")
  const [userImage, setUserImage] = useState("assets/img/catanacomics.svg")

  function askName() {
    const name = prompt("Insira seu usuário")
    if (name !== null && name !== "" && name !== undefined) {
      setUserName(name)
    }
  }
  function askImage() {
    const image = prompt("Insira sua imagem de perfil")
    if (image !== null && image !== "" && image !== undefined) {
      setUserImage(image)
    }
  }

  return (
    <div className="usuario">
      <img onClick={askImage} data-test="profile-image" src={userImage} alt="imagem de perfil" />
      <div className="texto">
        <span>
          <strong data-test="name">{userName}</strong>
          <ion-icon onClick={askName} data-test="edit-name" name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}