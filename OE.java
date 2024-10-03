import java.util.Scanner;

public class OE {
    public static void main(String[] args) {
         // Create a Scanner object to read input
         Scanner scanner = new Scanner(System.in);

         // Prompt the user to enter a number
         System.out.print("Enter a number: ");
         int number = scanner.nextInt();
 
         // Close the scanner (optional, but good practice

            if (number % 2 == 0) {
                System.out.println(number + " is an even number.");
            } else {
                System.out.println(number + " is an odd number.");
            }
        }
    }

