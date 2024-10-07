import java.util.Scanner;

public class pattern{

    public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);

         // Prompt the user to enter a number
         System.out.print("Enter a number: ");
         int rows = scanner.nextInt();
 
        // Right Triangle Pattern
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <=rows- i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        System.out.println();

        // Square Pattern
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= rows; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        String n="hello";
	    int length=n.length();
	    for (int i=0;i<length;i++){
	        for (int j=0;j<length;j++){
	            if (i==j || j==length-1-i){
	                System.out.print(n.charAt(j));
	            }else{
	                System.out.print(" ");
	            }
	        }
	        System.out.println("");
	    }

    }
}