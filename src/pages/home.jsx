import React from "react";

const Home = () => {
    return (
        <div className="home">
            <section>
                <h1>Welcome to My Portfolio</h1>
                <p>I'm a web developer building modern, responsive websites.</p>
            </section>
            <section className="featured-projects">
                <h2>Featured Projects</h2>
                {/* Add some project cards here, maybe 1 or 2. */}
            </section>
        </div>
    )
}

export default Home;