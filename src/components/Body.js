import NavBar from "./NavBar";
import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories";

export default function Body() {
    return (
        <div className="root">
            < NavBar />
            <div className="corpo">
                <div className="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <SideBar />

            </div>

        </div>


    )
}