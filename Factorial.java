import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
      
        Scanner scanner = new Scanner(System.in);

        
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        scanner.close();

        int factorial = 1;

        // Factorial of 0 is 1
        if (number == 0) {
            factorial = 1;
        } else {
            for (int i = 1; i <= number; i++) {
                factorial *= i;
            }
        }

        // Output the factorial
        System.out.println("The factorial of " + number + " is " + factorial);
    }
}
