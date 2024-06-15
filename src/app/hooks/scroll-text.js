import React, { useEffect, useRef, useState } from 'react';

const ScrollingText = ({ speed = 200, text }) => {
    const containerRef = useRef(null);
    const [transformAmount, setTransformAmount] = useState(0);
    const [leftBound, setLeftBound] = useState(0);
    const [rightBound, setRightBound] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        const scrollingText = container.querySelector('.scrolling-text');
        const scrollingTextWidth = scrollingText.offsetWidth;
        const scrollingTextHeight = scrollingText.offsetHeight;
        const fontSize = parseInt(window.getComputedStyle(scrollingText.querySelector('.scrolling-text-content')).fontSize, 10);
        const startLetterIndent = Math.round(fontSize / 4.8);
        const scrollAmountBoundary = Math.abs(window.innerWidth - scrollingTextWidth);
        const transformDirection = container.classList.contains('left-to-right') ? -1 : 1;

        setRightBound(scrollAmountBoundary);

        // Make scrolling text copy for scrolling infinity
        const clone = scrollingText.cloneNode(true);
        clone.classList.add('scrolling-text-copy');
        container.appendChild(clone);

        scrollingText.style.position = 'absolute';
        scrollingText.style.left = 0;
        container.style.height = `${scrollingTextHeight}px`;

        const getActiveScrollingText = (direction) => {
            const firstScrollingText = container.querySelector('.scrolling-text:nth-child(1)');
            const secondScrollingText = container.querySelector('.scrolling-text:nth-child(2)');

            const firstScrollingTextLeft = parseInt(window.getComputedStyle(firstScrollingText).left, 10);
            const secondScrollingTextLeft = parseInt(window.getComputedStyle(secondScrollingText).left, 10);

            if (direction === 'left') {
                return firstScrollingTextLeft < secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
            } else if (direction === 'right') {
                return firstScrollingTextLeft > secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
            }
        }

        const handleWheel = (e) => {
            let delta = e.deltaY;
            if (delta > 0) {
                // going down
                setTransformAmount(prev => prev + speed * transformDirection);
                scrollingText.querySelector('.scrolling-text-content').style.transform = 'skewX(10deg)';
            } else {
                setTransformAmount(prev => prev - speed * transformDirection);
                scrollingText.querySelector('.scrolling-text-content').style.transform = 'skewX(-10deg)';
            }

            setTimeout(() => {
                scrollingText.style.transform = `translate3d(${-transformAmount}px, 0, 0)`;
            }, 10);

            setTimeout(() => {
                scrollingText.querySelector('.scrolling-text-content').style.transform = 'skewX(0)';
            }, 500);

            // Boundaries
            if (transformAmount < leftBound) {
                const activeText = getActiveScrollingText('left');
                activeText.style.left = `${Math.round(leftBound - scrollingTextWidth - startLetterIndent)}px`;
                setLeftBound(parseInt(activeText.style.left, 10));
                setRightBound(leftBound + scrollingTextWidth + scrollAmountBoundary + startLetterIndent);

            } else if (transformAmount > rightBound) {
                const activeText = getActiveScrollingText('right');
                activeText.style.left = `${Math.round(rightBound + scrollingTextWidth - scrollAmountBoundary + startLetterIndent)}px`;
                setRightBound(prev => prev + scrollingTextWidth + startLetterIndent);
                setLeftBound(rightBound - scrollingTextWidth - scrollAmountBoundary - startLetterIndent);
            }
        }

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        }
    }, [transformAmount, leftBound, rightBound, speed]);

    return (
        <div>
            <style>
                {`
                .container {
                    position: relative;
                    width: 100vw;
                    overflow: hidden;
                }
                .scrolling-text {
                    display: inline-block;
                    transition: transform 0.5s cubic-bezier(0.23, 0.36, 0.28, 0.83);
                    will-change: transform;
                    backface-visibility: hidden;
                }
                .scrolling-text .scrolling-text-content {
                    color: #fff;
                    font-size: 120px;
                    white-space: nowrap;
                    transition: transform 0.5s cubic-bezier(0.23, 0.36, 0.28, 0.83);
                    line-height: 1em;
                    margin: 50px 0;
                }
                `}
            </style>
            <div className="container" ref={containerRef} speed={speed}>
                <div className='scrolling-text'>
                    <h2 className="scrolling-text-content">{text}</h2>
                </div>
            </div>
        </div>
    );
}

export default ScrollingText;