function xxNEWinNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

// caller
const newEngland = someCustomers.filter(c => xxNEWinNewEngland(c.address.state));