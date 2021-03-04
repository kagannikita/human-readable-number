module.exports = function toReadable (number) {
    // register numbers and tens
    const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    if (number < 20) return num[number];// after 20 you can give numbers
    const digit = number % 10
    if (number < 100) return tens[~~(number/10)-2] + (digit? " " + num[digit]: "");// 21-99
    return num[~~(number/100)] +" hundred" + (number%100 === 0? "": " " + toReadable(number%100));// 100-999

}
