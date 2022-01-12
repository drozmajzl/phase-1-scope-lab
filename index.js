var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()

    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';

    return bestCustomer;
}

function overwriteBestCustomer(x){
    bestCustomer = x;
}

const leastFavoriteCustomer = 'a'

function changeLeastFavoriteCustomer(x){
    leastFavoriteCustomer = x;

}