import java.util.Scanner;

public class StringMets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the string input from the user
        System.out.print("Enter a string: ");
        String str = scanner.nextLine();

        System.out.println("Length: " + str.length());
        System.out.println("Character at index 5: " + str.charAt(5));
        System.out.println("Substring (5, 15): " + str.substring(5, 15));
        
        // Ask for input to replace a substring
        System.out.print("Enter the substring to be replaced: ");
        String toReplace = scanner.nextLine();
        System.out.print("Enter the new substring: ");
        String replacement = scanner.nextLine();
        System.out.println("Replace '" + toReplace + "' with '" + replacement + "': " + str.replace(toReplace, replacement));
        
        System.out.println("Uppercase: " + str.toUpperCase());

        scanner.close();
    }
}
