const Partner = () => {
    return (
        <section className="py-20 bg-[#F9F9FF] w-full">
            <div className="max-w-screen-xl w-full mx-auto">
                <div className="w-full grid grid-cols-2 gap-10">
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="text-[#222021] text-4xl font-bold">Nos marques <br/> partenaires</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm  p-10 flex justify-center items-center">
                        <div className="flex justify-center items-center flex-col">
                            <div className="flex">
                                <img src="/assets/images/partners/1.png" alt="Partenaire 1" className="w-[150px] h-[100px] object-contain mr-5" />
                                <img src="/assets/images/partners/2.png" alt="Partenaire 2" className="w-[150px] h-[100px] object-contain mr-5" />
                                <img src="/assets/images/partners/3.png" alt="Partenaire 3" className="w-[150px] h-[100px] object-contain mr-5" />
                            </div>
                            <div className="flex">
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