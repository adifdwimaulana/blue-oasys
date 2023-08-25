import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Modal from "./modal";


const columns = [
    {
        name: 'No',
        selector: (row:any) => row.no,
    },
    {
        name: 'Mixing plan',
        selector: (row:any) => row.product_code,
       
    },
    {
        name: 'Created Date',
        selector: (row:any) => row.product_name,
        grow: 4
    },
    {
        name: 'Total Batch',
        selector: (row:any) => `${row.size} ${row.uom}`,
    },
    {
        name: 'Total Mixing Quantity',
        selector: (row:any) => `${row.size} ${row.uom}`,
    },
    {
        name: 'Total Leftover Quantity',
        selector: (row:any) => `${row.size} ${row.uom}`,
    },
    {
        name: 'Action',
        cell: () => <button className="clr-primary" onClick={() => null}>Detail</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
];

const MixingTable = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
    let [isOpen, setIsOpen] = useState(false)


	const fetchUsers = async (page:any) => {
		setLoading(true);

		const response = await fetch(`/api/products`);
        const data = await response.json()

        // console.log(data)
		setData(data);
		setLoading(false);
	};

    const openModal = () => {
        setIsOpen(true)
    }

	useEffect(() => {
		fetchUsers(1); // fetch page 1 of users
		
	}, []);



    return(
        <div className="">
            <div className="flex items-center justify-between my-4">
                <div className="flex search-bar">
                    <div className="plan-bar flex items-center ">
                        <span className="text-xs mr-4">Plan Name</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 7.91666L10 12.9167L5 7.91666" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div  className="flex items-center search-area">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.99999C8.67392 4.99999 7.40215 5.52677 6.46447 6.46446C5.52678 7.40214 5 8.67391 5 9.99999C5 11.3261 5.52678 12.5978 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5978 15 11.3261 15 9.99999C15 8.67391 14.4732 7.40214 13.5355 6.46446C12.5979 5.52677 11.3261 4.99999 10 4.99999ZM3 9.99999C3 8.89125 3.26338 7.79837 3.76843 6.81134C4.27349 5.82431 5.00578 4.97138 5.90501 4.32276C6.80423 3.67415 7.84467 3.24842 8.94064 3.08063C10.0366 2.91283 11.1568 3.00778 12.2089 3.35764C13.2609 3.7075 14.2149 4.30228 14.9921 5.09298C15.7693 5.88369 16.3476 6.84771 16.6794 7.90567C17.0111 8.96362 17.0868 10.0852 16.9001 11.1782C16.7135 12.2711 16.27 13.304 15.606 14.192L20.707 19.292C20.8946 19.4795 21.0001 19.7339 21.0002 19.9991C21.0003 20.2644 20.895 20.5188 20.7075 20.7065C20.52 20.8941 20.2656 20.9996 20.0004 20.9997C19.7351 20.9998 19.4806 20.8945 19.293 20.707L14.193 15.607C13.1525 16.3853 11.9159 16.8587 10.6217 16.9741C9.32741 17.0895 8.02658 16.8424 6.86481 16.2604C5.70304 15.6784 4.72618 14.7846 4.0436 13.6789C3.36103 12.5732 2.99967 11.2994 3 9.99999Z" fill="#A0A3BD"/>
                        </svg>
                        <input className="text-area" placeholder="Search"/>
                    </div>
                </div>
                <div className="flex">
                    <button className="flex button mx-2">
                        <span>Filter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.5 3.5C2.5 2.94771 2.94772 2.5 3.5 2.5H16.5C17.0523 2.5 17.5 2.94772 17.5 3.5V5.41912C17.5 5.68434 17.3946 5.93869 17.2071 6.12623L11.9596 11.3738C11.772 11.5613 11.6667 11.8157 11.6667 12.0809V14.1667L8.33333 17.5V12.0809C8.33333 11.8157 8.22798 11.5613 8.04044 11.3738L2.79289 6.12623C2.60536 5.93869 2.5 5.68434 2.5 5.41912V3.5Z" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button className="button mx-2 flex">
                        <span>Sort</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.5 3.33334H13.3333M2.5 6.66668H10M2.5 10H7.5M10.8333 10L14.1667 6.66668M14.1667 6.66668L17.5 10M14.1667 6.66668V16.6667" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button onClick={() => openModal()} className="button mx-2 flex justify-between btn-primary">
                        <span>New Plan</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 5V15M15 10L5 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={data}
                progressPending={loading}
                pagination
            />
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="w-full p-4">
                    <h1 className="font-bold text-xl">Upload New Mixing Plan by CSV File</h1>
                    <div className="my-4">
                        <span>Step 1</span>
                        <p className="text-xs text-gray-500">Download template as CSV, then fill in the required column</p>
                        <button className="w-full px-4 py-2 border rounded-md mt-2">Download Template</button>
                    </div>
                    <div className="my-4">
                        <span>Step 2</span>
                        <p className="text-xs text-gray-500">Download template as CSV, then fill in the required column</p>
                        <button className="w-full px-4 py-2 border rounded-md mt-2">Download Template</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default MixingTable