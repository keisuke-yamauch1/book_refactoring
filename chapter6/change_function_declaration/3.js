function isNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

// caller
const newEngland = someCustomers.filter(c => isNewEngland(c.address.state));