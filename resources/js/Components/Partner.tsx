const Partner = () => {
    return (
        <section className="md:py-20 py-10 px-4 md:px-0 bg-[#F9F9FF] w-full">
            <div className="max-w-screen-xl w-full mx-auto">
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="text-[#222021] md:text-4xl text-2xl font-bold">Nos marques <br/> partenaires</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm  md:p-10 p-5 flex justify-center items-center">
                        <div className="flex justify-center items-center flex-col">
                            <div className="md:flex grid grid-cols-3 gap-4">
                                <img src="/assets/images/partners/1.png" alt="Partenaire 1" className="w-[150px] h-[100px] object-contain mr-5" />
                                <img src="/assets/images/partners/2.png" alt="Partenaire 2" className="w-[150px] h-[100px] object-contain mr-5" />
                                <img src="/assets/images/partners/3.png" alt="Partenaire 3" className="w-[150px] h-[100px] object-contain mr-5" />
                            </div>
                            <div className="md:flex grid grid-cols-3 gap-4">
                                <img src="/assets/images/partners/4.png" alt="Partenaire 4" className="w-[150px] h-[100px] object-contain mr-5" />
                                <img src="/assets/images/partners/5.png" alt="Partenaire 4" className="w-[250px] h-[100px] object-contain mr-5" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Partner;