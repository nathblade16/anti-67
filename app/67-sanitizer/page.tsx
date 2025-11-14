"use client";
import { useState, useRef } from "react";

export default function SanitizerPage() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const sanitizeInput = (text: string) => {
        const leet: Record<string, string> = {
            "1": "i",
            "3": "e",
            "4": "a",
            "5": "s",
            "}{": "x",
            "$": "s",
            "j": "i",
            "><": "x",
            "+": "t"
        };
        // get rid of leetspeak
        for (const num in leet) {
            text = text.replaceAll(num, leet[num]);
        }
        // get rid of casing
        text = text.toLowerCase();
        // get rid of non-alphanumeric characters
        text = text.replace(/\W/g, "");
        return text.replaceAll("67", "68")
            .replaceAll("sixseven", "six eight")
            .replaceAll("sixtyseventy", "sixty eighty")
            .replaceAll("sixtyseven", "sixty eight")
            .replaceAll("sixseventy", "six eighty")
            .replaceAll("sixxseven", "six eight")
            .replaceAll("sixsevven", "six eight")
            ;
    };
    const handleSanitize = () => {
        const sanitized = sanitizeInput(input);
        setOutput(sanitized);
    };

    return (
        <div className="p-5">
            <p className="text-xl font-bold mb-4">67 Sanitizer</p>
            <textarea
                ref={inputRef}
                className="w-full h-32 p-2 border border-gray-300 rounded mb-4"
                placeholder="Enter text..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mb-4"
                onClick={handleSanitize}
            >
                Sanitize
            </button>
            {output && (
                <div className="mt-4">
                    <p className="font-semibold">Sanitized Output:</p>
                    <div className="whitespace-pre-wrap p-2 border border-gray-300 rounded bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
                        {output}
                    </div>
                </div>
            )}
        </div>
    );
}