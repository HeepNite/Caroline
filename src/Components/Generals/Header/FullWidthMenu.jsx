import { Link } from "react-router-dom";

const FUllWidthMenu = () => {
    return (
        <div className="full-width-menu-container">
            <div className="full-width-menu-grid">

                <article className="full-width-menu-nav-container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                                <Link to="/What-can-i-do">What can I do</Link>
                                <Link to="/proyect">Proyect</Link>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </article>

                <article className="full-width-menu-slogan-container">
                    <h2>Title</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </article>

                <article className="full-width-menu-social-container">
                    <nav>
                        <ul>
                            <li>Facebook</li>
                            <li>YouTube</li>
                            <li>Instagram</li>
                            <li>E-mail</li>
                        </ul>
                    </nav>
                </article>

            </div>
        </div>
    );
}

export default FUllWidthMenu;