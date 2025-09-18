import { useState, useEffect } from 'react';

const TableTarif = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Données du tableau
    const tableData = [
        {
            service: "Débouchage Manuel",
            details: [
                "Toilettes bouchées",
                "Siphon",
                "Douche / baignoire",
                "Lave-vaisselle",
                "Évacuation machine à laver"
            ],
            tarifHT: "100,00€",
            tarifTTC10: "110,00€",
            tarifTTC20: "120,00€",
            temps: "Jusqu'à 1 heure"
        },
        {
            service: "Passage caméra",
            details: [
                "Inspection canalisation sanitaire",
                "Inspection regard égouts"
            ],
            tarifHT: "100,00€",
            tarifTTC10: "110,00€",
            tarifTTC20: "120,00€",
            temps: "Jusqu'à 1 heure"
        },
        {
            service: "Hydrocurage",
            subtitle: "(Eaux usées / Eaux pluviales)",
            details: [
                "Nettoyage canalisation",
                "Débouchage",
                "Détartrage",
                "Curage",
                "Passage caméra offert",
                "Dégorgement colonne d'immeuble"
            ],
            tarifHT: "218,18€",
            tarifTTC10: "240,00€",
            tarifTTC20: "261,82€",
            temps: "Jusqu'à 1 heure"
        }
    ];

    // Détection mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        // Version mobile avec cartes
        return (
            <div className="w-full mt-10 space-y-6 px-4">
                {tableData.map((row, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                        {/* En-tête de la carte */}
                        <div className="bg-[#00ADEF] text-white p-4">
                            <h3 className="text-lg font-semibold uppercase">{row.service}</h3>
                            {row.subtitle && (
                                <p className="text-sm opacity-90">{row.subtitle}</p>
                            )}
                        </div>

                        {/* Contenu de la carte */}
                        <div className="p-4 space-y-4">
                            {/* Services inclus */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Services inclus :</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    {row.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Grille des tarifs */}
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="bg-gray-50 p-3 rounded">
                                    <p className="text-gray-600 font-medium">Tarif HT</p>
                                    <p className="text-lg font-bold text-[#00ADEF]">{row.tarifHT}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded">
                                    <p className="text-gray-600 font-medium">TTC (TVA 10%)</p>
                                    <p className="text-lg font-bold text-[#00ADEF]">{row.tarifTTC10}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded">
                                    <p className="text-gray-600 font-medium">TTC (TVA 20%)</p>
                                    <p className="text-lg font-bold text-[#00ADEF]">{row.tarifTTC20}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded">
                                    <p className="text-gray-600 font-medium">Durée</p>
                                    <p className="text-lg font-bold text-[#00ADEF]">{row.temps}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Version desktop avec tableau
    return (
        <div className="w-full mt-10 overflow-x-auto">
            <table className="w-full border-0">
                <thead>
                    <tr>
                        <th className="text-left bg-[#00ADEF26] py-4 px-3 border-r-[5px] border-white">
                            <div className="flex flex-col">
                                <h4 className="text-md text-[#222021]">Forfaits classiques</h4>
                                <span className="text-sm text-[#222021] font-light">(déplacement inclus dans les zones couvertes par nos agences)</span>
                            </div>
                        </th>
                        <th className="text-center bg-[#00ADEF26] py-4 px-3 border-r-[5px] border-white">
                            <h4>Tarif HT</h4>
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
                            <h4>Temps de main d'œuvre</h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td className="bg-[#C7CFF61A] px-3 py-4 border-r-[5px] border-t-[5px] border-white">
                                <div className="py-4 px-3 flex flex-col">
                                    <span className="text-[#00ADEF] uppercase text-md font-semibold">{row.service}</span>
                                    {row.subtitle && (
                                        <span className="text-[#00ADEF] text-sm">{row.subtitle}</span>
                                    )}
                                    <ul className="list-disc list-inside text-sm text-[#222021] font-light mt-2">
                                        {row.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </td>
                            <td className="bg-[#C7CFF61A] px-3 py-4 text-center border-r-[5px] border-t-[5px] border-white">
                                <span className="text-[#222021] font-bold text-md">{row.tarifHT}</span>
                            </td>
                            <td className="bg-[#C7CFF61A] px-3 py-4 text-center border-r-[5px] border-t-[5px] border-white">
                                <span className="text-[#222021] font-bold text-md">{row.tarifTTC10}</span>
                            </td>
                            <td className="bg-[#C7CFF61A] px-3 py-4 text-center border-r-[5px] border-t-[5px] border-white">
                                <span className="text-[#222021] font-bold text-md">{row.tarifTTC20}</span>
                            </td>
                            <td className="bg-[#C7CFF61A] px-3 py-4 text-center border-t-[5px] border-white">
                                <span className="text-[#222021] font-bold text-md">{row.temps}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableTarif;