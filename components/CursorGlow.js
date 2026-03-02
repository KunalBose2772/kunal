"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-50 mix-blend-screen"
            animate={{
                x: mousePosition.x - 200,
                y: mousePosition.y - 200,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            style={{
                background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 60%)",
                filter: "blur(100px)",
            }}
        />
    );
}
