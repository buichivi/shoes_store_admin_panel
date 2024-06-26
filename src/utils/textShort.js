const textShort = (str = '', numChar = 50) => {
    const shortString = str.slice(0, numChar > str.length ? Math.floor(str.length / 2) : numChar);
    return str.length >= 50 ? (shortString ? shortString + '...' : '') : str;
};

export default textShort;
