function isNewEngland(aCustomer) {
    return xxNEWinNewEngland(aCustomer.address.state);
}

function xxNEWinNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

// caller
const newEngland = someCustomers.filter(c => isNewEngland(c));