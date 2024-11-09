'use client'

import {useState} from "react";

export default function Page() {

    const [category, setCategory] = useState([]);

    const loadCategory = () => {
        fetch('/business-server/api/v1/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategory(data)
            })
    }

    return (
        <main className=" h-[100vh] bg-amber-50 grid place-content-center text-black ">
            <h1 className=" text-5xl font-semibold hover:text-red-950 ">
                Category Page
            </h1>
            <div className=" my-5 w-full flex justify-center ">
                <button
                    onClick={loadCategory}
                    className=" bg-blue-700 text-white text-xl font-medium py-3 px-5 rounded-[7px] hover:bg-blue-800 hover:scale-[101%]  "
                >
                    Load Category
                </button>
            </div>
            <hr/>
            <h1>{category.name}</h1>
            <h1>{category.email}</h1>
        </main>
    )
}