import java.util.Scanner;

public class BinaryAddition {
    public static void main(String[] args) {
        @SuppressWarnings("resource")
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first binary number: ");
        String b1 = scanner.nextLine();

        System.out.print("Enter second binary number: ");
        String b2 = scanner.nextLine();

        // Convert binary numbers to decimal
        int d1 = Integer.parseInt(b1, 2);
        int d2 = Integer.parseInt(b2, 2);

        // Add the decimal numbers
        int sum = d1 + d2;

        // Convert the sum back to binary
        String bs = Integer.toBinaryString(sum);

        System.out.println("The sum of the binary numbers is: " + bs);
    }
}
