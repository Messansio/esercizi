function intersecaR(r1, r2) {
    const r1Right = r1.left + r1.width;
    const r1Bottom = r1.top + r1.height;
    const r2Right = r2.left + r2.width;
    const r2Bottom = r2.top + r2.height;

    const noIntersections = r1Right < r2.left || r2Right < r1.left || r1Bottom < r2.top || r2Bottom < r1.top;

    if (noIntersections) {
        return 0;
    }

    const touchesX = Math.min(r1Right, r2Right) - Math.max(r1.left, r2.left);
    const touchesY = Math.min(r1Bottom, r2Bottom) - Math.max(r1.top, r2.top);

    if (touchesX === 0 && touchesY === 0) {
        return 1;
    }

    if (touchesX === 0 || touchesY === 0) {
        return 2;
    }

    return 3;
}

console.log(intersecaR({ left: 0, top: 0, width: 10, height: 10 }, { left: 5, top: 5, width: 10, height: 10 })); // Expected output: 3
console.log(intersecaR({ left: 0, top: 0, width: 10, height: 10 }, { left: 10, top: 10, width: 10, height: 10 })); // Expected output: 1
console.log(intersecaR({ left: 0, top: 0, width: 10, height: 10 }, { left: 10, top: 0, width: 10, height: 10 })); // Expected output: 2
console.log(intersecaR({ left: 0, top: 0, width: 10, height: 10 }, { left: 20, top: 20, width: 10, height: 10 })); // Expected output: 0