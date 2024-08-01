function isNewEngland(aCustomer) {
    const state = aCustomer.address.state;
    return xxNEWinNewEngland(state);
}

function xxNEWinNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

// caller
const newEngland = someCustomers.filter(c => isNewEngland(c));