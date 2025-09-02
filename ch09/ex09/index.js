/************************原則を満たさない例************************/
// 支払い処理クラス
public class PaymentProcessor {
    public void processPayment(String paymentType) {
        if (paymentType.equals("CreditCard")) {
            // クレジットカードで支払い処理
        } else if (paymentType.equals("PayPal")) {
            // PayPalで支払い処理
        } else if (paymentType.equals("Bitcoin")) {
            // Bitcoinで支払い処理
        }
        // 新しい支払い方法を追加するたびに、このクラスを修正する必要がある
    }
}

/************************原則を満たす例************************/
// 支払いインターフェース
public interface PaymentMethod {
    void pay();
}
// クレジットカード支払い
public class CreditCardPayment implements PaymentMethod {
    public void pay() {
        // クレジットカードで支払い処理
    }
}
// PayPal支払い
public class PayPalPayment implements PaymentMethod {
    public void pay() {
        // PayPalで支払い処理
    }
}
// Bitcoin支払い
public class BitcoinPayment implements PaymentMethod {
    public void pay() {
        // Bitcoinで支払い処理
    }
}
// 支払い処理クラス
public class PaymentProcessor {
    public void processPayment(PaymentMethod method) {
        method.pay(); // 抽象に依存しているため、新しい支払い方法の追加が容易
    }
}

