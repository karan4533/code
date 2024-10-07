import java.util.Scanner;

public class MinNumberInString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter numbers separated by commas: ");
        String[] numbers = scanner.nextLine().split(",");
        String minNumber = numbers[0];

        // Familiar for loop
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i].compareTo(minNumber) < 0) {
                minNumber = numbers[i];
            }
        }
        System.out.println("The minimum number is: " + minNumber);
    }
}
