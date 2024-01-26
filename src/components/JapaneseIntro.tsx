
export default function JapaneseIntro() {
    return (
        <div className="">
            <div className="flex flex-col lg:h-[545px] lg:flex-row px-0 sm:px-20 md:px-48 lg:px-0">
                <div className="basis-2/5  p-10">
                    <div className="card bg-base-100 shadow-xl bg-white h-full ">
                        <figure className=" ">
                            <img src="kanji_study.jpg" alt="Kanji" className="rounded-xl h-72 w-full cover-fill lg:h-auto" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                            </h2>
                            <p className="text-left">Along with software, I have a strong passion for language learning and I am currently pursuing a Certificate in Languages at UC while finishing my degree in Software Engineering. My goal for this year is to undertake the Japanese Language Proficiency Test at N2 level. I am currently looking at combining my technical and language learning skills to bring to life a mobile application that will help me keep track of my study progress.</p>
                            </div>
                        </div>
                    </div>
                {/*    <div>*/}
                {/*    <h2 className="md:text-xl p-6 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>*/}
                {/*    <div className="p-10 rounded-xl overflow-hidden h-80 w-80"><img src="kanji_study.jpg" className="rounded-xl overflow-hidden "/></div>*/}
                {/*</div>*/}
                <div className="basis-3/5 ">
                    <div className="h-full">
                    <div className="">
                    <ul className="steps  w-full h-36 pt-14">
                        <li data-content="N5" className="step step-neutral after:!w-16 after:!h-16 after:text-3xl"/>
                        <li data-content="N4" className="step step-neutral after:!w-16 after:!h-16 after:text-3xl"/>
                        <li data-content="N3" className="step step-neutral after:!w-16 after:!h-16 after:text-3xl"/>
                        <li data-content="N2" className="step step-secondary before:!bg-secondary after:!w-20 after:!h-20 after:text-4xl"/>
                        <li data-content="N1" className="step after:!w-16 after:!h-16 after:text-3xl"/>
                    </ul>
                    </div>
                    <div className="pt-20">
                        <h2 className="text-3xl md:text-5xl font-bold">Favourite Kanji</h2>
                        <h2 className="text-4xl md:text-8xl font-bold pt-5">花</h2>
                        <h2 className="text-xl md:text-2xl font-bold">(はな | flower)</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
