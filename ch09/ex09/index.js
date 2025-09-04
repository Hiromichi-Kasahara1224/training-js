/************************原則を満たさない例************************/
// 支払い処理クラス
class PaymentProcessor {
    processPayment(paymentType) {
        if (paymentType === "CreditCard") {
            // クレジットカードで支払い処理
            console.log("Processing payment with Credit Card");
        } else if (paymentType === "PayPal") {
            // PayPalで支払い処理
            console.log("Processing payment with PayPal");
        } else if (paymentType === "Bitcoin") {
            // Bitcoinで支払い処理
            console.log("Processing payment with Bitcoin");
        } else {
            console.log("Unknown payment type");
        }
        // 新しい支払い方法を追加するたびに、このクラスを修正する必要がある
    }
}

// 使用例
const processor = new PaymentProcessor();
processor.processPayment("PayPal");

/************************原則を満たす例************************/
// 支払い方法のベースクラス（インターフェース的な役割）
class PaymentMethod {
    pay() {
        throw new Error("pay() メソッドはサブクラスで実装してください");
    }
}
// クレジットカード支払い
class CreditCardPayment extends PaymentMethod { // PaymentMethodを継承
    pay() {
        console.log("クレジットカードで支払い処理");
    }
}
// PayPal支払い
class PayPalPayment extends PaymentMethod { // PaymentMethodを継承
    pay() {
        console.log("PayPalで支払い処理");
    }
}
// Bitcoin支払い
class BitcoinPayment extends PaymentMethod { // PaymentMethodを継承
    pay() {
        console.log("Bitcoinで支払い処理");
    }
}
// 支払い処理クラス
class PaymentProcessor {
    processPayment(method) {
        method.pay(); // 抽象に依存しているため、新しい支払い方法の追加が容易
    }
}

// 使用例
const creditCard = new CreditCardPayment(); // creditCardのインスタンスを生成
const processor = new PaymentProcessor(); // 支払い処理クラスのインスタンスを生成
processor.processPayment(creditCard); // クレジットカードで支払い処理
