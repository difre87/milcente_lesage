const TableTarif = () => {
    return (
        <table className="w-full border-0 mt-10">
            <thead>
                <th className="text-left bg-[#00ADEF26] py-4 px-3 border-r-[5px] border-white">
                    <div className="flex flex-col">
                        <h4 className="text-md text-[#222021]">Forfaits classiques</h4>
                        <span className="text-sm text-[#222021] font-light">(déplacement inclus dans les zones couvertes par nos agences)</span>
                    </div>
                </th>
                <th className="text-center bg-[#00ADEF26] py-4 px-3 border-r-[5px] border-white">
                    <div className="flex flex-col justify-center items-center">
                        <h4>Tarif HT</h4>
                    </div>
                </th>
                <th className="text-center bg-[#00ADEF26] py-4 px-3 border-r-[5px] border-white">
                    <div className="flex flex-col">
                        <h4>Tarif TTC</h4>
                        <span>TVA 10%</span>
                    </div>
                </th>
                <th className="text-center bg-[#00ADEF26] py-4 px-3 border-r-[5px] border-white">
                    <div className="flex flex-col">
                        <h4>Tarif TTC</h4>
                        <span>TVA 20%</span>
                    </div>
                </th>
                <th className="text-center bg-[#00ADEF26] py-4 px-3">
                    <div className="flex flex-col">
                        <h4>Temps de main d'œuvre</h4>
                    </div>
                </th>

            </thead>
            <tbody>
                <tr>
                    <td className="bg-[#C7CFF61A] px-3 py-4  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-[#00ADEF] uppercase text-md font-semibold">Débouchage Manuel</span>
                            <ul className="list-disc list-inside text-sm text-[#222021] font-light mt-2">
                                <li>Toilettes bouchées</li>
                                <li>Siphon</li>
                                <li>Douche / baignoire</li>
                                <li>Lave-vaisselle</li>
                                <li>Évacuation machine à laver</li>
                            </ul>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">100,00€</span>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">100,00€</span>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">120,00€</span>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">Jusqu'à 1 heure</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="bg-[#C7CFF61A] px-3 py-4  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-[#00ADEF] uppercase text-md font-semibold">Passage caméra</span>
                            <ul className="list-disc list-inside text-sm text-[#222021] font-light mt-2">
                                <li>Inspection canalisation sanitaire</li>
                                <li>Inspection regard égouts</li>

                            </ul>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">100,00€</span>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">100,00€</span>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">120,00€</span>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">Jusqu'à 1 heure</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="bg-[#C7CFF61A] px-3 py-4  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-[#00ADEF] uppercase text-md font-semibold">Hydrocurage</span>
                            <span className="text-[#00ADEF] text-sm">(Eaux usées / Eaux pluviales)</span>
                            <ul className="list-disc list-inside text-sm text-[#222021] font-light mt-2">
                                <li>Nettoyage canalisation</li>
                                <li>Débouchage</li>
                                <li>Détartrage</li>
                                <li>Curage</li>
                                <li>Passage caméra offert</li>
                                <li>Dégorgement colonne d’immeuble</li>
                            </ul>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">218,18€</span>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">240,00€</span>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">261,82€</span>
                        </div>
                    </td>
                    <td className="bg-[#C7CFF61A] px-3 py-4 text-center  border-r-[5px] border-t-[5px] border-white">
                        <div className="py-4 px-3 flex flex-col">
                            <span className="text-#222021] font-bold text-md">Jusqu'à 1 heure</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
     );
}

export default TableTarif;