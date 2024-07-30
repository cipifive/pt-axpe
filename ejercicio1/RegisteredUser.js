class RegisteredUser {
    constructor ( services = [] ) {
        this.services = services;
    }

    getTotal() {
        let total = 0;

        for(let service of this.services) {
            total += service.getPrice()
        }

        return total
    }
}