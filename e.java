import java.util.Scanner;

public class e {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter the number of rows
        System.out.print("Enter a number: ");
        int rows = scanner.nextInt();

        // Lower triangle (opposite pattern)
        for (int i = 1; i <= rows; i++) {
            // Print leading spaces
            for (int j = i; j <= rows; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Upper triangle (original pattern but inverted)
    }
 }

