
 interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
}

 interface ContactInfo {
  email: string;
  phone: string;
  alternatePhone?: string;
}

interface Customer {
  id?: string | number;
  firstName: string;
  lastName: string;
  contactInfo: ContactInfo;
  addresses: Address[];
  dateJoined: Date;
  dateOfBirth?: Date;
  notes?: string;
  isActive: boolean;
}

interface CreateCustomerRequest {
  firstName: string;
  lastName: string;
  contactInfo: ContactInfo;
  address: Address;
  dateOfBirth?: Date;
  notes?: string;
}

 interface UpdateCustomerRequest {
  firstName?: string;
  lastName?: string;
  contactInfo?: Partial<ContactInfo>;
  addresses?: Address[];
  dateOfBirth?: Date;
  notes?: string;
  isActive?: boolean;
}


type CustomerDetails = ContactInfo & Address;

const customer: Customer = {
  firstName: "John",
  lastName: "Doe",
  contactInfo: {
    email: "johndoe@gmail.com",
    phone: "123-456-7890",
  },
  addresses: [
    {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      postalCode: "12345",
      country: "USA",
    },
  ],
  dateJoined: new Date(),
  isActive: true,
}


interface Track{
 track():void;

}

interface Save{
    save() : Promise<void>;

}

type OrderDto = Track & Save;

class Order implements OrderDto{
    constructor(public orderId:string, public amount:number){}
        track(): void{
            console.log(`Tracking order ${this.orderId}`);
        }

        async save (){
            console.log(`Saving order ${this.orderId}`);
        }
     
}


const order = new Order("123", 100);

order.track();
order.save();


interface creditCardPayment{
    type: "creditCard";
    cardNumber: string;
    expirationDate: string;
}
interface paypalPayment{
    type: "paypal";
    email: string;
}
interface bankTransferPayment{
    type: "bankTransfer";
    accountNumber: string;
    routingNumber: string;
}

type PaymentMethod = creditCardPayment | paypalPayment | bankTransferPayment;

function processPayment(payment: PaymentMethod) {
    if ("cardNumber" in payment){
        console.log(`Processing credit card payment with card number ${payment.cardNumber}`);
    }
    else if("email" in payment){
        console.log(`Processing PayPal payment with email ${payment.email}`);
    }
    else if("accountNumber" in payment){
        console.log(`Processing bank transfer payment with account number ${payment.accountNumber}`);
    }
    else{
        console.log("Unknown payment method");
    }
}


processPayment({ type: "paypal", email: "johndoe@gmail.com" });




