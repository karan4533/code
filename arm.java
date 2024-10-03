
import java.util.Scanner;

public class arm {

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Enter a number: ");
            int num = scanner.nextInt();

            int on = num;
            int sum = 0;
            int d = 0;

            while (on != 0) {
                d++;
                on /= 10;
            }

            on = num;

            while (on != 0) {
                int digit = on % 10;
                sum += Math.pow(digit, d);
                on /= 10;
            }
            if (sum == num) {
                System.out.println(num + " is an Armstrong number.");
            } else {
                System.out.println(num + " is not an Armstrong number.");
            }
        }
    }
}
