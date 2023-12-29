import React, { useEffect, useState } from 'react';
function Loader() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ["Hello", "مرحبًا", "హలో", "Merhaba", "Hola", "नमस्ते ", "ہیلو", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "こんにちは", "Привет", "হ্যালো", "你好"]; // Your text array

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 250);

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className="loader loop-text">
            <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                {texts.map((text, index) => (
                    <p key={index} className={index === currentIndex ? 'show' : ''}>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Loader