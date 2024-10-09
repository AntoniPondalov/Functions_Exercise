function charactersInRange(startChar, endChar){
    let result = ``;

    let startAsciiCode = startChar.charCodeAt();
    let endAsciiCode = endChar.charCodeAt();

    let minAsciCode = Math.min(startAsciiCode, endAsciiCode);
    let maxAsciCode = Math.max(startAsciiCode, endAsciiCode);

    for(let curAsciiCode = minAsciCode + 1; curAsciiCode < maxAsciCode; curAsciiCode++){
        let curChar = String.fromCharCode(curAsciiCode);
        result += curChar + ` `;
    }
    console.log(result);

}
charactersInRange('a', 'd')