
export default function Japanese() {
    return (
        <div style={{ position: "relative"}} id="japanese_intro">
            <div className="contrast-100 brightness-100 relative blur-sm">
                <img
                    src="cherry_blossoms_again.jpg"
                    alt="Cherry Blossoms"
                    style={{ width: "100%", height: "337px", objectFit: "cover"}}
                />
            </div>
            <h1 className="text-4xl md:text-8xl font-bold p-10 absolute top-0 left-0 text-white">
                Japanese | 日本語
            </h1>
        </div>
    );
}
