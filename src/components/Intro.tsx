export default function Intro() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="priscilla-if.JPG" className="md:m-10 w-52 h-52 md:w-72 md:h-72 rounded-full shadow-2xl" />
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-8xl font-bold">Hi, I'm Priscilla!</h1>
                    {/*<h2 className="pt-2">Final Year Software Engineering</h2>*/}
                    {/*<h2>University of Canterbury</h2>*/}
                    {/*<h2 className="pb-2">Christchurch, New Zealand</h2>*/}
                    <h2 className="md:text-xl py-6 font-semibold">I'm a final year Software Engineering student at the University of Canterbury.</h2>
                    {/*<button className="btn btn-primary">Get Started</button>*/}
                </div>
            </div>
        </div>
    )
}