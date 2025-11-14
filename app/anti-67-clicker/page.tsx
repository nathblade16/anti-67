"use client";

import { useState } from "react";

export default function Anti67ClickerPage() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        let next = count + 1;
        next = parseInt(next.toString().replace(/7/g, "8"));
        setCount(next);
    };
    return (
        <div className="p-5">
            <p className="text-xl font-bold mb-4">Anti-67 Clicker Game</p>
            <p className="mb-4">Click the button below to increase your score. Try to avoid reaching 67!</p>
            <p className="mb-4 text-2xl">Score: {count}</p>
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleClick}
            >
                Click Me!
            </button>
        </div>
    );
}