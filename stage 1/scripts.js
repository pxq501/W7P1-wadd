let address1 = {
    houseNumber: 119,
    lineOne: "Hest Bank Lane",
    postCode: "LA2 6AH"
}

let address2 = {
    houseNumber: 39,
    lineOne: "East Field Cresent",
    postCode: "YO10 5HZ"
}

let address3 = {
    houseNumber: 31,
    lineOne: "Kexby Avenue",
    postCode: "YO10 5HZ"
}


console.log(address1)

console.log(address2)
console.log(address3)


function address (houseNumber, lineOne, postCode) {
    this.houseNumber = houseNumber;
    this.lineOne = lineOne;
    this.postCode = postCode;
}

address4 = new address ("69", "tyler is hot", "yo10 69")

console.log(address4.lineOne)


class Address {
    houseNumber;
    lineOne;
    postCode;

    constructor(houseNumber, lineOne, postCode) {
        this.houseNumber = houseNumber;
        this.lineOne = lineOne;
        this.postCode = postCode;
    }
}

let address5 = new Address("123", "i love tyler", "69")

console.log(address5)