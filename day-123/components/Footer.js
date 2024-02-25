import React from 'react'

const footer = () => {
    return (
        <footer className="flex text-xs justify-between bg-slate-800 text-white py-4">
            <div className="text-center">Copyright Facebook | All Rights Reserved</div>
            <ul className="flex gap-2 text-sm">
                <a href=""><li className="text-xs">Home</li></a>
                <a href="/about"><li className="text-xs">About</li></a>
                <a href="/contact"><li className="text-xs">Contact</li></a>

            </ul>

        </footer>
    )
}

export default footer