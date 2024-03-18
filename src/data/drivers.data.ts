export interface Driver {
    id: number,
    name: string,
    function: string,
    address: string,
    loading: boolean,
}

export const DRIVERS: Array<Driver> = [
    {
        id: 1,
        name: "Dorel",
        function: "Sofer",
        address: "Comunitate",
        loading: false,
    },
    {
        id: 2,
        name: "Fanica",
        function: "Sofer",
        address: "Intern",
        loading: true,
    },
    {
        id: 3,
        name: "Georgel",
        function: "Sofer",
        address: "Extern",
        loading: true,
    },
]
