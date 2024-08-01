function isNewEngland(aCustomer) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

// caller
const newEngland = someCustomers.filter(c => isNewEngland(c));