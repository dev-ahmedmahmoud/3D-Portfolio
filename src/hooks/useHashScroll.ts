"use client";

import { useEffect } from "react";

export const useHashScroll = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace("#", "");

            // Function to attempt scrolling
            const attemptScroll = () => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    return true;
                }
                return false;
            };

            // Retry for dynamic content
            let retries = 0;
            const maxRetries = 10;
            const interval = setInterval(() => {
                if (attemptScroll()) {
                    clearInterval(interval);
                }
                retries++;
                if (retries > maxRetries) {
                    clearInterval(interval);
                }
            }, 1000);
        }
    }, []);
};
