function isNewEngland(aCustomer) {
    const state = aCustomer.address.state;
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}

// caller
const newEngland = someCustomers.filter(c => isNewEngland(c));